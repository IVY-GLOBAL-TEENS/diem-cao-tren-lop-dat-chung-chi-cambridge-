/* Computer-based exam player – modelled on the Cambridge/Inspera test player.
   Two modes: "practice" (no time limit, unlimited listening, check answers + explanations + vocabulary)
   and "test" (time limit, 2 plays, anti-cheating warnings). Highlighting works in both. */
const XP = { paper:null, mode:"test", pages:[], idx:0, el:null, timerInt:null, split:50, started:false, audioKey:null, blurT:null, lastViol:0, submitting:false };
const EXP = {};   // explanations + vocab per test id
const MAXVIOL = 3;

async function loadExp(id){
  if(EXP[id] !== undefined) return EXP[id];
  try { const r = await fetch(`tests/exp/${id}.json`); EXP[id] = r.ok ? await r.json() : null; } catch(e){ EXP[id] = null; }
  return EXP[id];
}
function expFor(paper, n){ const e = EXP[cur.id]; if(!e) return ""; return (paper==="rw" ? e.reading : e.listening)?.[String(n)] || ""; }

/* ---------- pages ---------- */
function xpPagesRW(){
  const R = cur.reading, P = [];
  const rb1 = "For each question, choose the correct answer.";
  R.part1.items.forEach((it,i)=>P.push({part:1, rubric:rb1, q:[i+1], type:"p1", i}));
  R.part2.items.forEach((it,i)=>P.push({part:2, rubric:rb1, q:[7+i], type:"p2", i}));
  R.part3.items.forEach((it,i)=>P.push({part:3, rubric:rb1, q:[14+i], type:"p3", i}));
  R.part4.items.forEach((it,i)=>P.push({part:4, rubric:rb1, q:[19+i], type:"p4", i}));
  P.push({part:5, rubric:"For each question, write the correct answer. Write ONE word for each gap.", q:[25,26,27,28,29,30], type:"p5"});
  P.push({part:6, rubric:"You must answer this question. Write 25 words or more.", q:[31], type:"w6"});
  P.push({part:7, rubric:"Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.", q:[32], type:"w7"});
  return P;
}
function xpPagesL(){
  const L = cur.listening, P = [];
  const rb = "For each question, choose the correct answer.";
  L.part1.items.forEach((it,i)=>P.push({part:1, rubric:rb, q:[1+i], type:"l1", i, audio:"l1_"+i}));
  P.push({part:2, rubric:"For each question, write the correct answer in the gap. Write ONE word or a number or a date or a time.", q:[6,7,8,9,10], type:"l2", audio:"l2"});
  L.part3.items.forEach((it,i)=>P.push({part:3, rubric:rb, q:[11+i], type:"l3", i, audio:"l3"}));
  L.part4.items.forEach((it,i)=>P.push({part:4, rubric:rb, q:[16+i], type:"l4", i, audio:"l4_"+i}));
  P.push({part:5, rubric:rb, q:[21,22,23,24,25], type:"l5", audio:"l5"});
  return P;
}
function xpKey(paper, n){
  if(paper==="rw"){
    if(n<=6) return ["rw","p1_"+(n-1)]; if(n<=13) return ["rw","p2_"+(n-7)]; if(n<=18) return ["rw","p3_"+(n-14)];
    if(n<=24) return ["rw","p4_"+(n-19)]; if(n<=30) return ["rw","p5_"+(n-25)]; if(n===31) return ["w","w6"]; return ["w","w7"];
  }
  if(n<=5) return ["l","p1_"+(n-1)]; if(n<=10) return ["l","p2_"+(n-6)]; if(n<=15) return ["l","p3_"+(n-11)];
  if(n<=20) return ["l","p4_"+(n-16)]; return ["l","p5_"+(n-21)];
}
function xpAnswered(paper, n){
  const [s,k] = xpKey(paper,n);
  if(s==="w") return wcount(state[k]||"")>0;
  const v = state[s][k]; return v!==undefined && v!==null && v!=="";
}
/* correct answer for question n: {ok, text} */
function xpCorrect(paper, n){
  const [s,k] = xpKey(paper,n); const v = state[s]?.[k];
  if(paper==="rw"){ const R = cur.reading;
    if(n<=6){ const a=R.part1.items[n-1].answer; return {ok:v===a, text:LETTERS[a]}; }
    if(n<=13){ const a=R.part2.items[n-7].answer; return {ok:v===a, text:a}; }
    if(n<=18){ const a=R.part3.items[n-14].answer; return {ok:v===a, text:LETTERS[a]}; }
    if(n<=24){ const it=R.part4.items[n-19]; return {ok:v===it.answer, text:`${LETTERS[it.answer]} (${it.options[it.answer]})`}; }
    const acc=R.part5.answers[n-25]; return {ok:acc.includes(norm(v)), text:acc.join(" / ")};
  }
  const L = cur.listening;
  if(n<=5){ const it=L.part1.items[n-1]; return {ok:v===it.answer, text:`${LETTERS[it.answer]} (${it.options[it.answer].label})`}; }
  if(n<=10){ const acc=L.part2.items[n-6].answer; return {ok:acc.includes(norm(v)), text:acc.join(" / ")}; }
  if(n<=15){ const a=L.part3.items[n-11].answer; return {ok:v===a, text:LETTERS[a]}; }
  if(n<=20){ const a=L.part4.items[n-16].answer; return {ok:v===a, text:LETTERS[a]}; }
  const a=L.part5.answers[n-21]; return {ok:v===a, text:`${a} (${L.part5.options[LETTERS.indexOf(a)]})`};
}
function xpFlags(){ state.flags = state.flags || {}; state.flags[XP.paper] = state.flags[XP.paper] || {}; return state.flags[XP.paper]; }
function xpChecked(){ state.checked = state.checked || {}; state.checked[XP.paper] = state.checked[XP.paper] || {}; return state.checked[XP.paper]; }
function xpViol(paper){ state.viol = state.viol || {}; state.viol[paper||XP.paper] = state.viol[paper||XP.paper] || []; return state.viol[paper||XP.paper]; }
function xpPrefs(){ return store.get("xpprefs", {fs:"m", th:"std", hideTime:false}); }
const isPractice = () => XP.mode==="practice";
const testLive = () => XP.el && XP.started && XP.mode==="test" && !XP.submitting;

/* ---------- open / close ---------- */
async function startExam(paper){
  XP.paper = paper; XP.mode = state.mode || "test"; XP.submitting = false; TTS.forceRate = XP.mode==="test" ? 0.9 : null;
  XP.pages = (paper==="rw" ? xpPagesRW() : xpPagesL()).filter(p => state.parts.includes(p.part));
  XP.idx = state["xpidx_"+paper] || 0; XP.split = store.get("xpsplit", 50);
  XP.started = !!state["xpstarted_"+paper];
  await loadExp(cur.id);
  const name = store.get("name","") || "Candidate";
  const topic = TOPICS.find(t=>t.id===cur.topic)||{};
  const el = document.createElement("div"); el.id = "xp"; XP.el = el;
  const pf = xpPrefs(); const prac = isPractice(); XP.baseCls = prac ? "fun" : ""; el.className = `fs-${pf.fs} th-${pf.th} ${XP.baseCls}`;
  el.innerHTML = `
   <div class="xp-head">
     <div class="xp-cand">${prac?IVYLOGO.replace("logo-ivy.png","logo-ivy-white.png"):IVYLOGO}<div class="xp-avatar">${prac?mascot("happy"):"👤"}</div><div style="min-width:0"><div class="nm">${esc(name)}</div><div class="id">${cur.id.toUpperCase()} · <span class="xp-mode ${prac?"pr":"ts"}">${prac?"LUYỆN TẬP":"TEST"}</span></div></div></div>
     <div class="xp-title">A2 Key for Schools · ${esc(runLabel(state))} · ${esc(topic.en||"")} – Test ${cur.testNo}</div>
     ${prac && EXP[cur.id]?.vocab ? `<button class="xp-vbtn" data-act="vocab">📖 Từ vựng</button>`:""}
     <div class="xp-time ${pf.hideTime?"hidden":""}" id="xp-time" title="Time">⏱ <span class="tt"></span></div>
     <button class="xp-ico" id="xp-menub" title="Menu" aria-label="Menu">☰</button>
     <div class="xp-menu" id="xp-menu">
       <div class="grp"><div class="lb">Text size</div><div class="row">${[["s","Small"],["m","Standard"],["l","Large"],["xl","Extra large"]].map(([k,l])=>`<button data-fs="${k}" class="${pf.fs===k?"on":""}">${l}</button>`).join("")}</div></div>
       <div class="grp"><div class="lb">Colour</div><div class="row">${[["std","Standard"],["yb","Black on yellow"],["wb","White on black"]].map(([k,l])=>`<button data-th="${k}" class="${pf.th===k?"on":""}">${l}</button>`).join("")}</div></div>
       <div class="grp" style="padding:4px 0"><button class="item" data-act="clearhl">Xóa mọi highlight ở câu này</button><button class="item" data-act="hidetime">${pf.hideTime?"Show":"Hide"} time</button><button class="item" data-act="exit">${prac?"Thoát (lưu bài, làm tiếp sau)":"Thoát (bị ghi nhận, đồng hồ vẫn chạy)"}</button></div>
     </div>
   </div>
   <div id="xp-main" style="flex:1;min-height:0;display:flex;flex-direction:column"></div>
   <div class="xp-nav" id="xp-nav"></div>
   <div class="xp-hltool" id="xp-hltool"><button data-hl-act="add">🖍 Highlight</button><button data-hl-act="del">✕ Bỏ</button></div>
   <aside class="xp-vocab" id="xp-vocab"></aside>
   ${prac?`<div class="xp-buddy" id="xp-buddy"><div class="bub" id="xp-bub"></div><div class="bm" id="xp-bm">${mascot("wave")}</div></div><div class="xp-confetti" id="xp-conf"></div>`:""}`;
  document.body.appendChild(el); document.body.style.overflow="hidden";
  el.addEventListener("click", xpClick); el.addEventListener("input", xpInput); el.addEventListener("change", xpChange);
  document.addEventListener("keydown", xpKeys, true);
  document.addEventListener("selectionchange", xpSelChange);
  ["copy","cut","paste","contextmenu","drop"].forEach(ev => el.addEventListener(ev, xpBlockEv, true));
  document.addEventListener("visibilitychange", xpVis);
  window.addEventListener("blur", xpBlur); window.addEventListener("focus", xpFocus);
  document.addEventListener("fullscreenchange", xpFsChange);
  if(!XP.started) xpIntro();
  else { if(XP.mode==="test"){ xpLog("Mở lại bài thi (tải lại trang hoặc thoát ra rồi vào lại)", false); } xpRender(); }
  xpTimer();
}
function closeExam(){
  TTS.forceRate = null;
  TTS.stop(); clearInterval(XP.timerInt); clearTimeout(XP.blurT);
  document.removeEventListener("keydown", xpKeys, true);
  document.removeEventListener("selectionchange", xpSelChange);
  document.removeEventListener("visibilitychange", xpVis);
  window.removeEventListener("blur", xpBlur); window.removeEventListener("focus", xpFocus);
  document.removeEventListener("fullscreenchange", xpFsChange);
  if(document.fullscreenElement){ try{ document.exitFullscreen(); }catch(e){} }
  if(XP.el){ XP.el.remove(); XP.el=null; } document.body.style.overflow="";
}
function xpIntro(){
  const rw = XP.paper==="rw", prac = isPractice();
  $("#xp-nav").style.display="none";
  $("#xp-main").innerHTML = `<div class="xp-single"><div class="xp-intro">
    <div class="xp-modebig ${prac?"pr":"ts"}">${prac?"📘 CHẾ ĐỘ LUYỆN TẬP":"📝 CHẾ ĐỘ TEST"}</div>
    ${prac?`<div class="xp-introm">${mascot("cheer","bob")}<div class="bubble">Cùng luyện <b>${esc(runLabel(state))}</b> nhé! Làm xong mỗi câu, bấm <b>Kiểm tra</b> để xem mình đúng chưa 💪</div></div>`:""}
    <h2>A2 Key for Schools – ${esc(runLabel(state))}</h2>
    <p>${prac ? "Không giới hạn thời gian" : `Thời gian: <b>${runMinutes(state)} phút</b>`} · ${runQs(state).length} câu (câu ${runQs(state)[0]}–${runQs(state).slice(-1)[0]})${rw?"":(prac?" · nghe không giới hạn":" · mỗi đoạn nghe 2 lần")}</p>
    <table><tr><th>Part</th><th>Questions</th><th>Task</th></tr>${state.parts.map(pt=>{ const P=PARTS[XP.paper][pt]; return `<tr><td>${pt}</td><td>${P.q[0]}${P.q[1]>P.q[0]?"–"+P.q[1]:""}</td><td>${P.ic} ${esc(P.name)} · ${esc(P.task)}</td></tr>`; }).join("")}</table>
    ${prac ? `<div class="xp-rules pr"><b>Luyện tập:</b><ul>
        <li>Không giới hạn thời gian${rw?"":", nghe lại bao nhiêu lần cũng được, có thể dừng"}.</li>
        <li>Làm xong mỗi câu, bấm <b>Kiểm tra đáp án</b> để xem đúng/sai và <b>giải thích</b>${rw?"":" và lời thoại"}.</li>
        <li>Bấm <b>📖 Từ vựng</b> trên thanh trên cùng để xem từ vựng của đề.</li>
        <li>Bôi đen chữ trong bài đọc/câu hỏi rồi bấm <b>🖍 Highlight</b> để đánh dấu.</li></ul></div>`
      : `<div class="xp-rules ts"><b>Quy định bài Test:</b><ul>
        <li>Đồng hồ đếm ngược ${runMinutes(state)} phút, <b>hết giờ bài tự động nộp</b>. Đồng hồ vẫn chạy khi em thoát ra.</li>
        ${rw?"":"<li>Mỗi đoạn chỉ được nghe <b>2 lần</b>, không dừng giữa chừng.</li>"}
        <li>Bài thi mở <b>toàn màn hình</b>. <b>Không</b> chuyển tab, mở trang web/ứng dụng khác, thoát toàn màn hình.</li>
        <li>Không được sao chép, dán, chuột phải. Mỗi lần vi phạm sẽ có cảnh báo và được ghi lại gửi cho giáo viên.</li>
        <li><b>Vi phạm ${MAXVIOL} lần, bài sẽ tự động nộp.</b></li>
        <li>Được dùng 🖍 Highlight để đánh dấu chữ trong bài.</li></ul></div>`}
    <button class="xp-start" data-act="begin">${prac?"Bắt đầu luyện tập":"Start test – vào toàn màn hình"}</button>
  </div></div>`;
}
function xpTimer(){
  clearInterval(XP.timerInt);
  const key = XP.paper==="rw" ? "rwStart" : "lStart", total = runMinutes(state);
  const tick = () => {
    const el = $("#xp-time .tt"); if(!el) return;
    if(isPractice()){
      if(!state[key]){ el.textContent = "Không giới hạn"; return; }
      const s = Math.floor((Date.now()-state[key])/1000);
      el.textContent = `${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`; el.title="Luyện tập – không giới hạn thời gian"; return;
    }
    if(!state[key]){ el.textContent = `${total} minutes left`; return; }
    const left = total*60 - Math.floor((Date.now()-state[key])/1000);
    const m = Math.ceil(left/60);
    el.textContent = left<=0 ? "Time is up" : (m<=1 ? `${Math.max(left,0)} seconds left` : `${m} minutes left`);
    $("#xp-time").classList.toggle("low", left<=5*60);
    if(left<=0 && XP.started && !XP.submitting) xpAutoSubmit("Hết giờ làm bài – bài đã được tự động nộp.");
  };
  tick(); XP.timerInt = setInterval(tick, 1000);
}

/* ---------- render ---------- */
function xpRender(){
  TTS.stop(); xpHideTool();
  const pg = XP.pages[XP.idx]; state["xpidx_"+XP.paper] = XP.idx; save();
  $("#xp-nav").style.display="";
  const main = $("#xp-main");
  const banner = `<div class="xp-banner"><span class="pt">Part ${pg.part}</span> &nbsp;<span class="rb">Questions ${pg.q[0]}${pg.q.length>1?"–"+pg.q[pg.q.length-1]:""} · ${esc(pg.rubric)}</span></div>`;
  const [left, right, single] = XP.paper==="rw" ? xpRW(pg) : xpL(pg);
  const fb = xpFeedback(pg);
  let body;
  if(single!==undefined) body = `<div class="xp-body"><div class="xp-single"><div class="inner">${single}${fb}</div></div></div>`;
  else body = `<div class="xp-body split"><div class="xp-col xp-left" style="flex-basis:${XP.split}%">${left}</div><div class="xp-div" id="xp-div" title="Drag to resize"></div><div class="xp-col xp-right">${right}${fb}</div></div>`;
  main.innerHTML = banner + body;
  xpNav(); xpDivider(); xpWc(); hlApplyAll(); if(isPractice()) buddyTip(pg);
  const f = main.querySelector(".xq-focus"); if(f) f.scrollIntoView({block:"center"});
}
function qHead(n, text){
  const fl = xpFlags()[n];
  return `<div class="xq-head"><div class="xq-num">${n}</div><div class="xq-text" data-hl="${XP.paper}-q${n}">${text?esc(text):""}</div><button class="xq-flag ${fl?"on":""}" data-flag="${n}">⚑ ${fl?"Flagged":"Flag"}</button></div>`;
}
function optState(n, i, sel){
  if(!(isPractice() && xpChecked()[n])) return sel===i ? "sel" : "";
  const c = xpCorrect(XP.paper, n); const [s,k] = xpKey(XP.paper,n); const ans = xpAnswerIdx(n);
  if(i===ans) return "right"; if(sel===i) return "wrong"; return "";
}
function xpAnswerIdx(n){ // index/letter of correct option for MCQ-type questions
  const R=cur.reading, L=cur.listening;
  if(XP.paper==="rw"){ if(n<=6) return R.part1.items[n-1].answer; if(n<=13) return R.part2.items[n-7].answer; if(n<=18) return R.part3.items[n-14].answer; if(n<=24) return R.part4.items[n-19].answer; return null; }
  if(n<=5) return L.part1.items[n-1].answer; if(n<=10) return null; if(n<=15) return L.part3.items[n-11].answer; if(n<=20) return L.part4.items[n-16].answer; return L.part5.answers[n-21];
}
function radios(sec, key, opts, n){
  const sel = state[sec][key];
  return `<div class="xq-opts">${opts.map((o,i)=>`<button class="xq-opt ${optState(n,i,sel)}" data-s="${sec}" data-k="${key}" data-v="${i}" data-n="${n}"><span class="rad"></span><span class="ltr">${LETTERS[i]}</span><span>${esc(o)}</span></button>`).join("")}</div>`;
}
function xpRW(pg){
  const R = cur.reading, W = cur.writing;
  if(pg.type==="p1"){ const it = R.part1.items[pg.i], n=pg.q[0];
    return [`<div class="xn ${esc(it.kind)}" data-hl="rw-n${pg.i}">${it.header?`<div class="h">${esc(it.header)}</div>`:""}${esc(it.text)}</div>`,
            qHead(n, "") + radios("rw","p1_"+pg.i,it.options,n)]; }
  if(pg.type==="p2"){ const P2=R.part2, it=P2.items[pg.i], k="p2_"+pg.i, sel=state.rw[k], n=pg.q[0];
    const left = `<div class="xt xt3" data-hl="rw-p2"><p><b>${esc(P2.intro)}</b></p>${P2.texts.map(t=>`<div class="blk"><h4><b>${t.label}</b> ${esc(t.title)}</h4><div>${esc(t.text)}</div></div>`).join("")}</div>`;
    const right = qHead(n, it.q) + `<div class="xq-opts">${P2.texts.map(t=>`<button class="xq-opt ${optState(n,t.label,sel)}" data-s="rw" data-k="${k}" data-v="${t.label}" data-n="${n}"><span class="rad"></span><span class="ltr">${t.label}</span><span>${esc(t.title)}</span></button>`).join("")}</div>`;
    return [left, right]; }
  if(pg.type==="p3"){ const it=R.part3.items[pg.i], n=pg.q[0];
    return [`<div class="xt" data-hl="rw-p3"><h3>${esc(R.part3.title)}</h3>${para(R.part3.text)}</div>`, qHead(n, it.q)+radios("rw","p3_"+pg.i,it.options,n)]; }
  if(pg.type==="p4"){ const it=R.part4.items[pg.i], n=pg.q[0];
    const txt = para(R.part4.text).replace(/\{(\d+)\}/g,(_,g)=>{ const j=+g-19, s=state.rw["p4_"+j]; const fill = s!==undefined? R.part4.items[j].options[s] : "";
      return `<span class="gapn ${+g===n?"cur xq-focus":""}" data-nohl="1">${g}${fill?`<span class="fill">${esc(fill)}</span>`:""}</span>`; });
    return [`<div class="xt" data-hl="rw-p4"><h3>${esc(R.part4.title)}</h3>${txt}</div>`, qHead(n,"")+radios("rw","p4_"+pg.i,it.options,n)]; }
  if(pg.type==="p5"){
    const ch = xpChecked();
    const html = R.part5.texts.map((t,ti)=>`<div class="xmail">${t.header?`<div class="mh">${esc(t.header)}</div>`:""}<div class="mb" data-hl="rw-p5-${ti}">${para(t.text).replace(/\{(\d+)\}/g,(_,g)=>{const j=+g-25, n=+g; let cls=""; if(isPractice()&&ch[n]) cls = xpCorrect("rw",n).ok?"right":"wrong";
      return `<span class="xq-num" data-nohl="1" style="display:inline-grid;min-width:28px;height:26px;font-size:.85em;vertical-align:middle">${g}</span> <input class="xin ${cls}" data-s="rw" data-k="p5_${j}" data-n="${n}" value="${esc(state.rw["p5_"+j]||"")}" ${cls?"disabled":""} autocomplete="off" spellcheck="false" aria-label="Question ${g}">`;})}</div></div>`).join("");
    return [null,null, `<div style="display:flex;justify-content:flex-end;gap:6px;margin-bottom:10px;flex-wrap:wrap">${pg.q.map(n=>`<button class="xq-flag ${xpFlags()[n]?"on":""}" data-flag="${n}">⚑ ${n}</button>`).join("")}</div><div class="xt">${html}</div>`]; }
  if(pg.type==="w6"){
    return [`<div class="xt" data-hl="rw-w6"><p>${esc(W.part6.situation)}</p><p>Write an email to answer this. In your email:</p><ul>${W.part6.points.map(p=>`<li>${esc(p)}</li>`).join("")}</ul><p><b>Write 25 words or more.</b></p></div>`,
      qHead(31,"") + `<div class="xw"><textarea data-w="w6" spellcheck="false" autocomplete="off" placeholder="Type your answer here">${esc(state.w6||"")}</textarea><div class="cnt" id="xwc">Words: 0</div></div>`]; }
  if(pg.type==="w7"){
    return [`<div class="xt"><p>Look at the three pictures.<br>Write the story shown in the pictures.<br><b>Write 35 words or more.</b></p><div class="xpics">${W.part7.pictures.map(p=>`<div><div class="e">${esc(p.emoji)}</div>${esc(p.caption)}</div>`).join("")}</div></div>`,
      qHead(32,"") + `<div class="xw"><textarea data-w="w7" spellcheck="false" autocomplete="off" placeholder="Type your answer here">${esc(state.w7||"")}</textarea><div class="cnt" id="xwc">Words: 0</div></div>`]; }
}
function audioBar(key){
  const n = state.plays[key]||0, left = Math.max(0, 2-n), prac = isPractice();
  const playing = XP.audioKey===key && TTS.playing;
  const info = playing ? "Playing…" : prac ? (n?`Đã nghe ${n} lần · không giới hạn`:"Nghe không giới hạn") : (left?`Plays left: ${left}`:"No plays left");
  return `<div class="xa" id="xa"><button class="pl ${playing?"stop":""}" data-audio="${key}" aria-label="Play" ${!prac&&!playing&&!left?"disabled":""}>${playing?(prac?"■":"🔊"):"▶"}</button><div class="bar"><i id="xa-bar"></i></div>
    <span class="info" id="xa-info">${info}</span>
    ${prac?`<span class="info">Speed <select data-rate="1">${[0.75,0.85,0.9,1].map(r=>`<option value="${r}" ${TTS.rate==r?"selected":""}>${r}×</option>`).join("")}</select></span>`:""}</div>`;
}
function xpL(pg){
  const L = cur.listening, ch = xpChecked();
  if(pg.type==="l1"){ const it=L.part1.items[pg.i], k="p1_"+pg.i, sel=state.l[k], n=pg.q[0];
    return [null,null, audioBar(pg.audio) + qHead(n, it.q) + `<div class="xq-pics">${it.options.map((o,j)=>`<button class="xq-pic ${optState(n,j,sel)}" data-s="l" data-k="${k}" data-v="${j}" data-n="${n}"><div class="art">${esc(o.emoji)}</div><div class="cap"><span class="rad"></span><b>${LETTERS[j]}</b> ${esc(o.label)}</div></button>`).join("")}</div>`]; }
  if(pg.type==="l2"){ const P2=L.part2;
    return [null,null, audioBar("l2") + `<p data-hl="l-l2i"><b>${esc(P2.intro)}</b></p><div class="xnotes"><h3>${esc(P2.title)}</h3>${P2.items.map((it,i)=>{ const n=6+i; let cls=""; if(isPractice()&&ch[n]) cls = xpCorrect("l",n).ok?"right":"wrong";
      return `<div class="r"><span class="xq-num">${n}</span><span>${esc(it.label)}</span><input class="xin ${cls}" style="width:12em" data-s="l" data-k="p2_${i}" data-n="${n}" value="${esc(state.l["p2_"+i]||"")}" ${cls?"disabled":""} autocomplete="off" spellcheck="false"><button class="xq-flag ${xpFlags()[n]?"on":""}" data-flag="${n}">⚑</button></div>`}).join("")}</div>`]; }
  if(pg.type==="l3"){ const it=L.part3.items[pg.i], n=pg.q[0];
    return [null,null, audioBar("l3") + `<p data-hl="l-l3i"><b>${esc(L.part3.intro)}</b></p>` + qHead(n, it.q) + radios("l","p3_"+pg.i,it.options,n)]; }
  if(pg.type==="l4"){ const it=L.part4.items[pg.i], n=pg.q[0];
    return [null,null, audioBar(pg.audio) + `<p data-hl="l-l4i${pg.i}"><b>${esc(it.intro)}</b></p>` + qHead(n, it.q) + radios("l","p4_"+pg.i,it.options,n)]; }
  if(pg.type==="l5"){ const P5=L.part5;
    return [null,null, audioBar("l5") + `<p data-hl="l-l5i"><b>${esc(P5.intro)}</b></p><div class="xm5"><div>${P5.people.map((p,i)=>{ const n=21+i; let cls=""; if(isPractice()&&ch[n]) cls = xpCorrect("l",n).ok?"right":"wrong";
      return `<div class="r"><span class="xq-num">${n}</span><span class="who">${esc(p)}</span><select class="${cls}" data-s="l" data-k="p5_${i}" data-n="${n}" ${cls?"disabled":""}><option value=""></option>${P5.options.map((o,j)=>`<option value="${LETTERS[j]}" ${state.l["p5_"+i]===LETTERS[j]?"selected":""}>${LETTERS[j]}</option>`).join("")}</select><button class="xq-flag ${xpFlags()[n]?"on":""}" data-flag="${n}">⚑</button></div>`}).join("")}</div>
      <div class="ol">${P5.options.map((o,j)=>`<div><b>${LETTERS[j]}</b>&nbsp;&nbsp;${esc(o)}</div>`).join("")}</div></div>`]; }
}
/* practice: check-answer button / feedback with explanation */
function xpFeedback(pg){
  if(!isPractice()) return "";
  const qs = pg.q.filter(n => !(XP.paper==="rw" && n>=31));
  if(!qs.length){ // writing
    const W = cur.writing, m = pg.type==="w6" ? W.part6.model : W.part7.model, k = "w_"+pg.type;
    return xpChecked()[k] ? `<div class="xfb info"><b>Bài mẫu tham khảo</b><div class="model-t">${esc(m)}</div><div class="hint">Gợi ý tự kiểm tra: đủ ${pg.type==="w6"?"3 ý trong đề, từ 25 từ":"nội dung 3 tranh, từ 35 từ"}; dùng đúng thì; viết hoa, dấu câu.</div></div>`
      : `<button class="xchk" data-act="check" data-wk="${k}">Xem bài mẫu</button>`;
  }
  const ch = xpChecked();
  if(!qs.every(n=>ch[n])) return `<button class="xchk" data-act="check">✔ Kiểm tra đáp án</button>`;
  let h = "";
  qs.forEach(n => { const c = xpCorrect(XP.paper, n), e = expFor(XP.paper, n);
    h += `<div class="xfb ${c.ok?"ok":"bad"}"><b>${qs.length>1?`Câu ${n}: `:""}${c.ok?"✓ Đúng rồi!":"✗ Chưa đúng."}</b> Đáp án: <b>${esc(c.text)}</b>${e?`<div class="why">${esc(e)}</div>`:""}</div>`; });
  if(pg.audio) h += `<button class="tlink" data-act="tscript">Xem lời thoại (transcript)</button><div class="xscript" id="xscript">${scriptFor(pg.audio).map(t=>`<p><b>${esc(t.s)}</b> ${esc(t.t)}</p>`).join("")}</div>`;
  return h;
}
function xpNav(){
  if(!XP.el || !$("#xp-nav")) return;
  const parts = [...new Set(XP.pages.map(p=>p.part))], curPart = XP.pages[XP.idx].part, flags = xpFlags(), ch = xpChecked();
  const pageOf = n => XP.pages.findIndex(p=>p.q.includes(n));
  const curQs = XP.pages[XP.idx].q;
  const mark = n => { if(!isPractice() || !ch[n] || n>30) return ""; return xpCorrect(XP.paper,n).ok ? "okq" : "badq"; };
  $("#xp-nav").innerHTML = `<div class="xp-parts">${parts.map(pt=>{
      const qs = XP.pages.filter(p=>p.part===pt).flatMap(p=>p.q);
      const done = qs.filter(n=>xpAnswered(XP.paper,n)).length;
      if(pt!==curPart) return `<button class="xp-part" data-goto="${pageOf(qs[0])}"><span class="pn">Part ${pt}</span><span class="ct">${done} of ${qs.length}</span></button>`;
      return `<div class="xp-part cur"><span class="pn">Part ${pt}</span><span class="xp-qs">${qs.map(n=>`<button class="xp-q ${xpAnswered(XP.paper,n)?"ans":""} ${curQs.includes(n)?"cur":""} ${flags[n]?"flag":""} ${mark(n)}" data-goto="${pageOf(n)}" aria-label="Question ${n}">${n}</button>`).join("")}</span></div>`;
    }).join("")}</div>
    <div class="xp-arrows"><button class="xp-arr" data-nav="-1" ${XP.idx===0?"disabled":""} aria-label="Previous">‹</button><button class="xp-arr" data-nav="1" ${XP.idx===XP.pages.length-1?"disabled":""} aria-label="Next">›</button><button class="xp-fin" data-act="finish">Finish ✓</button></div>`;
}
function xpDivider(){
  const d = $("#xp-div"); if(!d) return;
  d.onpointerdown = e => { e.preventDefault(); const body = d.parentElement, left = body.querySelector(".xp-left");
    const mv = ev => { const r = body.getBoundingClientRect(); let p = (ev.clientX - r.left)/r.width*100; p = Math.max(25, Math.min(75, p)); left.style.flexBasis = p+"%"; XP.split = p; };
    const up = () => { window.removeEventListener("pointermove", mv); window.removeEventListener("pointerup", up); store.set("xpsplit", XP.split); };
    window.addEventListener("pointermove", mv); window.addEventListener("pointerup", up); };
}
function xpWc(){ const t = XP.el && XP.el.querySelector("textarea[data-w]"); const c=$("#xwc"); if(t&&c) c.textContent = `Words: ${wcount(t.value)}`; }
function xpVocab(){
  const v = $("#xp-vocab"), e = EXP[cur.id];
  if(v.classList.contains("show")){ v.classList.remove("show"); return; }
  v.innerHTML = `<div class="vh"><b>📖 Từ vựng của đề</b><button data-act="vocab">✕</button></div>${(e?.vocab||[]).map(w=>`<div class="vw"><div><b>${esc(w.w)}</b> <i>${esc(w.pos||"")}</i> <span class="ipa">${esc(w.ipa||"")}</span><button class="say" data-say="${esc(w.w)}">🔊</button></div><div class="vi">${esc(w.vi)}</div>${w.ex?`<div class="ex">${esc(w.ex)}</div>`:""}</div>`).join("")}`;
  v.classList.add("show");
}

/* ---------- highlight ---------- */
function hlStore(){ state.hl = state.hl || {}; return state.hl; }
function hlTextNodes(root){
  const out = [], w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => n.parentElement.closest("[data-nohl],input,select,textarea,button") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
  let n; while((n = w.nextNode())) out.push(n); return out;
}
function hlRangeOffsets(root, range){
  let s = null, e = 0, pos = 0;
  for(const t of hlTextNodes(root)){
    const len = t.data.length;
    if(range.intersectsNode(t)){
      const a = (t === range.startContainer) ? range.startOffset : 0;
      const b = (t === range.endContainer) ? range.endOffset : len;
      if(s === null) s = pos + a; e = pos + b;
    }
    pos += len;
  }
  return [s ?? 0, e];
}
function hlUnwrap(root){ root.querySelectorAll("mark.hl").forEach(m => { m.replaceWith(...m.childNodes); }); root.normalize(); }
function hlApply(root){
  const key = root.dataset.hl, ranges = (hlStore()[key]||[]).slice().sort((a,b)=>a[0]-b[0]);
  hlUnwrap(root); if(!ranges.length) return;
  const nodes = hlTextNodes(root); let pos = 0; const jobs = [];
  for(const t of nodes){ const len = t.data.length;
    for(const [s,e] of ranges){ const a = Math.max(s,pos), b = Math.min(e,pos+len); if(a<b) jobs.push([t, a-pos, b-pos]); }
    pos += len; }
  // apply from last to first within each node so offsets stay valid
  const byNode = new Map(); jobs.forEach(j => { if(!byNode.has(j[0])) byNode.set(j[0], []); byNode.get(j[0]).push(j); });
  byNode.forEach((list, t) => { list.sort((x,y)=>y[1]-x[1]); list.forEach(([node,a,b]) => {
    t.splitText(b); const mid = t.splitText(a);
    const m = document.createElement("mark"); m.className = "hl"; mid.replaceWith(m); m.appendChild(mid);
  }); });
}
function hlApplyAll(){ if(!XP.el) return; XP.el.querySelectorAll("[data-hl]").forEach(hlApply); }
function hlMerge(list){ list.sort((a,b)=>a[0]-b[0]); const out=[]; for(const r of list){ const l=out[out.length-1]; if(l && r[0]<=l[1]) l[1]=Math.max(l[1],r[1]); else out.push([r[0],r[1]]); } return out; }
function xpSelChange(){
  if(!XP.el || !XP.started) return;
  clearTimeout(XP.selT); XP.selT = setTimeout(() => {
    const sel = document.getSelection(); if(!sel || sel.isCollapsed || !sel.rangeCount){ xpHideTool(); return; }
    const r = sel.getRangeAt(0); const anc = r.commonAncestorContainer; const el = (anc.nodeType===1?anc:anc.parentElement);
    const root = el && el.closest("[data-hl]"); if(!root || !XP.el.contains(root)){ xpHideTool(); return; }
    const rect = r.getBoundingClientRect(); const tool = $("#xp-hltool");
    tool.style.left = Math.max(8, Math.min(window.innerWidth-190, rect.left + rect.width/2 - 85)) + "px";
    tool.style.top = Math.max(60, rect.top - 46) + "px"; tool.classList.add("show");
    XP.selRoot = root; XP.selRange = r.cloneRange();
  }, 200);
}
function xpHideTool(){ const t = XP.el && $("#xp-hltool"); if(t) t.classList.remove("show"); }
function xpHl(act){
  const root = XP.selRoot, r = XP.selRange; if(!root || !r) return;
  const [s,e] = hlRangeOffsets(root, r); if(e<=s) return;
  const st = hlStore(); let list = st[root.dataset.hl] || [];
  if(act==="add") list = hlMerge(list.concat([[s,e]]));
  else { const out=[]; list.forEach(([a,b]) => { if(b<=s || a>=e) out.push([a,b]); else { if(a<s) out.push([a,s]); if(b>e) out.push([e,b]); } }); list = out; }
  st[root.dataset.hl] = list; save();
  document.getSelection().removeAllRanges(); xpHideTool(); hlApply(root);
}

/* ---------- anti-cheating (test mode) ---------- */
function xpLog(type, isViolation){
  const v = xpViol(); v.push({t: new Date().toLocaleTimeString("vi-VN"), type, v: !!isViolation}); save();
}
function xpViolation(type){
  if(!testLive()) return;
  const now = Date.now(); if(now - XP.lastViol < 2500) return; XP.lastViol = now;
  xpLog(type, true); TTS.stop();
  const count = xpViol().filter(x=>x.v).length;
  if(count >= MAXVIOL){ xpAutoSubmit(`Em đã vi phạm quy chế ${count} lần (${type}). Bài thi đã được tự động nộp và giáo viên sẽ thấy ghi nhận này.`); return; }
  const d = document.createElement("div"); d.className = "xp-dlg warn";
  d.innerHTML = `<div class="box"><h3>⚠️ Cảnh báo vi phạm (${count}/${MAXVIOL})</h3><p><b>${esc(type)}</b> lúc ${new Date().toLocaleTimeString("vi-VN")}.</p>
    <p>Trong bài Test em không được rời khỏi bài thi, chuyển tab hoặc mở ứng dụng khác. Vi phạm này đã được ghi lại và gửi kèm kết quả cho giáo viên.</p>
    <p><b>Vi phạm ${MAXVIOL} lần, bài sẽ tự động nộp.</b></p>
    <div class="acts"><button class="go" data-act="resume">Tôi hiểu – tiếp tục làm bài</button></div></div>`;
  XP.el.querySelectorAll(".xp-dlg.warn").forEach(x=>x.remove()); XP.el.appendChild(d);
}
function xpVis(){ if(document.hidden) xpViolation("Chuyển sang tab/ứng dụng khác"); }
function xpBlur(){ if(!testLive()) return; clearTimeout(XP.blurT); XP.blurT = setTimeout(() => { if(!document.hasFocus()) xpViolation("Rời khỏi cửa sổ bài thi"); }, 1500); }
function xpFocus(){ clearTimeout(XP.blurT); }
function xpFsChange(){
  if(!testLive()) return;
  if(!document.fullscreenElement && XP.fsOn){ XP.fsOn = false; xpViolation("Thoát chế độ toàn màn hình"); }
  if(document.fullscreenElement) XP.fsOn = true;
}
function xpEnterFs(){ try{ const p = document.documentElement.requestFullscreen?.(); if(p) p.then(()=>{XP.fsOn=true;}).catch(()=>{}); }catch(e){} }
function xpBlockEv(e){
  if(!testLive()) return;
  e.preventDefault();
  const name = {copy:"Sao chép",cut:"Cắt",paste:"Dán",contextmenu:"Chuột phải",drop:"Kéo thả"}[e.type] || e.type;
  toast(`${name} không được phép trong bài Test.`); xpLog(`Thử ${name.toLowerCase()}`, false);
}
async function xpAutoSubmit(msg){
  if(XP.submitting) return; XP.submitting = true;
  xpLog(msg.startsWith("Hết giờ") ? "Hết giờ – tự động nộp" : "Tự động nộp do vi phạm", false);
  xpFinishRun();
  const d = document.createElement("div"); d.className="xp-dlg"; d.style.position="fixed"; d.style.zIndex="200";
  d.innerHTML = `<div class="box"><h3>Bài đã được nộp</h3><p>${esc(msg)}</p><div class="acts"><button class="go" onclick="this.closest('.xp-dlg').remove()">Xem kết quả</button></div></div>`;
  document.body.appendChild(d);
}

/* ---------- events ---------- */
function xpClick(e){
  const t = e.target;
  const menu = $("#xp-menu");
  if(t.closest("#xp-menub")){ menu.classList.toggle("show"); return; }
  if(!t.closest("#xp-menu")) menu.classList.remove("show");
  if(t.closest("#xp-bm")){ $("#xp-buddy").classList.toggle("talk"); return; }
  const ha = t.closest("[data-hl-act]"); if(ha){ xpHl(ha.dataset.hlAct); return; }
  const fs = t.closest("[data-fs]"); if(fs){ const p=xpPrefs(); p.fs=fs.dataset.fs; store.set("xpprefs",p); XP.el.className=`fs-${p.fs} th-${p.th} ${XP.baseCls}`; menu.querySelectorAll("[data-fs]").forEach(b=>b.classList.toggle("on",b===fs)); return; }
  const th = t.closest("[data-th]"); if(th){ const p=xpPrefs(); p.th=th.dataset.th; store.set("xpprefs",p); XP.el.className=`fs-${p.fs} th-${p.th} ${XP.baseCls}`; menu.querySelectorAll("[data-th]").forEach(b=>b.classList.toggle("on",b===th)); return; }
  const sy = t.closest("[data-say]"); if(sy){ TTS.play([{s:"F",t:sy.dataset.say}]); return; }
  const o = t.closest("[data-s][data-v]");
  if(o){ const n = +o.dataset.n; if(isPractice() && xpChecked()[n]) return;
    let v=o.dataset.v; if(/^\d+$/.test(v)) v=+v; state[o.dataset.s][o.dataset.k]=v; save();
    o.parentElement.querySelectorAll(".sel").forEach(x=>x.classList.remove("sel")); o.classList.add("sel");
    if(XP.pages[XP.idx].type==="p4") { xpRender(); return; }
    xpNav(); return; }
  const fl = t.closest("[data-flag]"); if(fl){ const f=xpFlags(), n=+fl.dataset.flag; f[n]=!f[n]; save(); fl.classList.toggle("on",!!f[n]); if(/Flag/.test(fl.textContent)) fl.textContent=`⚑ ${f[n]?"Flagged":"Flag"}`; xpNav(); return; }
  const g = t.closest("[data-goto]"); if(g){ XP.idx=+g.dataset.goto; xpRender(); return; }
  const nv = t.closest("[data-nav]"); if(nv){ XP.idx=Math.max(0,Math.min(XP.pages.length-1, XP.idx + +nv.dataset.nav)); xpRender(); return; }
  const au = t.closest("[data-audio]"); if(au){ xpPlay(au.dataset.audio); return; }
  const a = t.closest("[data-act]"); if(!a) return;
  const A = a.dataset.act;
  if(A==="begin"){ state["xpstarted_"+XP.paper]=true; const k = XP.paper==="rw"?"rwStart":"lStart"; if(!state[k]) state[k]=Date.now(); save(); XP.started=true;
    if(XP.mode==="test"){ xpLog("Bắt đầu làm bài", false); xpEnterFs(); } xpRender(); xpTimer(); }
  if(A==="check"){ const pg = XP.pages[XP.idx];
    if(a.dataset.wk){ xpChecked()[a.dataset.wk] = true; save(); xpRender(); return; }
    const un = pg.q.filter(n=>!xpAnswered(XP.paper,n));
    if(un.length && !a.dataset.confirm){ a.dataset.confirm=1; a.textContent=`Còn câu ${un.join(", ")} chưa làm – bấm lần nữa để xem đáp án`; return; }
    pg.q.forEach(n => xpChecked()[n] = true); save(); TTS.stop(); xpRender();
    const qs = pg.q.filter(n=>!(XP.paper==="rw"&&n>30)); const ok = qs.filter(n=>xpCorrect(XP.paper,n).ok).length;
    if(ok===qs.length){ buddy("cheer", pick(PRAISE)); confetti(); } else if(ok>0) buddy("happy", `Đúng ${ok}/${qs.length} câu rồi! ` + pick(KEEPGO)); else buddy("sad", pick(OOPS));
    return; }
  if(A==="tscript"){ $("#xscript").classList.toggle("show"); return; }
  if(A==="vocab"){ xpVocab(); return; }
  if(A==="clearhl"){ XP.el.querySelectorAll("#xp-main [data-hl]").forEach(r=>{ delete hlStore()[r.dataset.hl]; }); save(); hlApplyAll(); menu.classList.remove("show"); return; }
  if(A==="resume"){ a.closest(".xp-dlg").remove(); if(XP.mode==="test" && !document.fullscreenElement) xpEnterFs(); return; }
  if(A==="hidetime"){ const p=xpPrefs(); p.hideTime=!p.hideTime; store.set("xpprefs",p); $("#xp-time").classList.toggle("hidden",p.hideTime); a.textContent=(p.hideTime?"Show":"Hide")+" time"; menu.classList.remove("show"); }
  if(A==="exit"){ if(testLive()) xpLog("Thoát khỏi bài thi giữa chừng", true); closeExam(); showTab(); }
  if(A==="finish") xpFinishDlg();
  if(A==="cancel") a.closest(".xp-dlg").remove();
  if(A==="submit"){ XP.submitting = true; xpLog("Nộp bài", false); xpFinishRun(); }
}
function xpInput(e){ const t=e.target;
  if(t.dataset.w){ state[t.dataset.w]=t.value; save(); xpWc(); xpNavLite(); return; }
  if(t.dataset.s && t.tagName==="INPUT"){ state[t.dataset.s][t.dataset.k]=t.value; save(); xpNavLite(); } }
function xpChange(e){ const t=e.target;
  if(t.dataset.rate){ TTS.rate=+t.value; store.set("rate",TTS.rate); return; }
  if(t.dataset.s && t.tagName==="SELECT"){ state[t.dataset.s][t.dataset.k]=t.value; save(); xpNav(); } }
let _navT; function xpNavLite(){ clearTimeout(_navT); _navT=setTimeout(xpNav,250); }
function xpKeys(e){
  if(!XP.el) return;
  if(testLive()){
    const k = e.key.toLowerCase(), mod = e.ctrlKey || e.metaKey;
    if(e.key==="F12" || (mod && e.shiftKey && ["i","j","c"].includes(k)) || (mod && ["u","p","s"].includes(k))){ e.preventDefault(); e.stopPropagation(); toast("Phím tắt này bị khóa trong bài Test."); xpLog(`Thử phím tắt ${e.key}`, false); return; }
    if(mod && ["c","v","x"].includes(k)){ e.preventDefault(); toast("Sao chép/dán không được phép trong bài Test."); xpLog("Thử sao chép/dán bằng phím tắt", false); return; }
    if(e.key==="PrintScreen"){ xpLog("Chụp màn hình (PrintScreen)", false); }
  }
  if(!XP.started) return; const tg = e.target.tagName;
  if(tg==="INPUT"||tg==="TEXTAREA"||tg==="SELECT") return;
  if(e.key==="ArrowRight" && XP.idx<XP.pages.length-1){ XP.idx++; xpRender(); }
  if(e.key==="ArrowLeft" && XP.idx>0){ XP.idx--; xpRender(); }
}
function xpPlay(key){
  const prac = isPractice();
  if(XP.audioKey===key && TTS.playing){ if(prac) TTS.stop(); else toast("Trong bài Test không thể dừng giữa chừng."); return; }
  if(!prac && (state.plays[key]||0)>=2){ toast("You have listened twice. / Đã nghe đủ 2 lần."); return; }
  const turns = scriptFor(key);
  XP.audioKey = key;
  const done = () => { XP.audioKey=null; const b=XP.el&&XP.el.querySelector("[data-audio]"); if(b){ b.classList.remove("stop"); b.textContent="▶"; const n=state.plays[key]||0;
      if(!prac && n>=2) b.disabled = true;
      $("#xa-info").textContent = prac ? `Đã nghe ${n} lần · không giới hạn` : (n<2?`Plays left: ${2-n}`:"No plays left"); } clearInterval(XP.barInt); };
  const ok = TTS.play(turns, done, key);
  if(!ok) return;
  state.plays[key]=(state.plays[key]||0)+1; save();
  const b = XP.el.querySelector("[data-audio]"); b.classList.add("stop"); b.textContent = prac ? "■" : "🔊"; $("#xa-info").textContent="Playing…";
  clearInterval(XP.barInt); XP.barInt = setInterval(()=>{ const bar=$("#xa-bar"); if(!bar||!TTS.playing){clearInterval(XP.barInt);return;} bar.style.width = Math.round(TTS.progress()*100)+"%"; }, 300);
}
function xpFinishDlg(){
  const qs = XP.pages.flatMap(p=>p.q), un = qs.filter(n=>!xpAnswered(XP.paper,n)), fl = Object.keys(xpFlags()).filter(k=>xpFlags()[k]).map(Number).filter(n=>qs.includes(n));
  const d = document.createElement("div"); d.className="xp-dlg";
  d.innerHTML = `<div class="box"><h3>Finish ${XP.paper==="rw"?"Reading and Writing":"Listening"}?</h3>
    <p>You have answered ${qs.length-un.length} of ${qs.length} questions.</p>
    ${un.length?`<ul><li>Unanswered: ${un.join(", ")}</li></ul>`:""}${fl.length?`<ul><li>Flagged: ${fl.join(", ")}</li></ul>`:""}
    <p style="font-size:.9em;color:#555">Sau khi nộp sẽ xem điểm, đáp án, giải thích ${XP.paper==="l"?"và lời thoại":"và bài viết mẫu"}.</p>
    <div class="acts"><button data-act="cancel">Go back</button><button class="go" data-act="submit">Finish</button></div></div>`;
  XP.el.appendChild(d);
}
function xpFinishRun(){
  const p = XP.paper; if(p==="rw") state.doneRW = true; else state.doneL = true;
  state.at = new Date().toLocaleString("vi-VN", {hour:"2-digit", minute:"2-digit", day:"2-digit", month:"2-digit"});
  save(); saveResult();
  const [s,mx] = runScore(state);
  closeExam(); page.tab = p; page.view = state.key; savePage(); showTab(); window.scrollTo(0,0);
  if(mx) toast(`${runLabel(state)}: ${s}/${mx}`);
}

/* ---------- practice buddy (mascot) ---------- */
const PRAISE = ["Tuyệt vời! Em giỏi quá! 🎉","Chính xác! Cứ thế phát huy nhé! ⭐","Xuất sắc! Gấu trúc tự hào về em! 🏆","Đúng rồi! Em đọc rất kỹ đó! 👏","Quá đỉnh! Sang câu tiếp theo nào! 🚀"];
const KEEPGO = ["Đọc giải thích ở câu sai nhé!","Gần đúng hết rồi, cố lên!","Xem lại phần giải thích để nhớ lâu hơn nha!"];
const OOPS = ["Không sao đâu! Đọc giải thích bên dưới rồi thử câu tiếp nhé 💪","Sai một chút thôi – ai cũng từng như vậy! Xem giải thích nhé.","Câu này khó đó! Đọc kỹ lời giải thích nhé, lần sau sẽ đúng 😊"];
const TIPS = {
  rw: {1:"Mẹo Part 1: đọc kỹ biển báo, tìm câu nói <b>cùng ý</b> chứ không cần giống từng chữ.",2:"Mẹo Part 2: gạch chân từ khóa trong câu hỏi, rồi tìm ý đó trong cả 3 đoạn A, B, C.",3:"Mẹo Part 3: câu hỏi đi theo thứ tự bài đọc. Dùng 🖍 Highlight đánh dấu chỗ có đáp án!",4:"Mẹo Part 4: đọc cả câu, xem từ nào <b>đi kèm</b> đúng với từ phía trước và phía sau.",5:"Mẹo Part 5: chỗ trống thường là từ ngữ pháp – giới từ, mạo từ, đại từ, trợ động từ…",6:"Mẹo Part 6: viết đủ <b>3 ý</b> trong đề, ít nhất 25 từ, nhớ có lời chào và ký tên.",7:"Mẹo Part 7: kể đủ chuyện ở <b>cả 3 tranh</b>, dùng thì quá khứ, ít nhất 35 từ."},
  l: {1:"Mẹo Part 1: xem 3 tranh trước khi nghe. Cẩn thận – cả 3 thứ thường đều được nhắc đến!",2:"Mẹo Part 2: đoán trước loại từ cần điền (số, ngày, tên…). Tên riêng sẽ được đánh vần.",3:"Mẹo Part 3: đọc câu hỏi trước khi nghe, các câu hỏi theo đúng thứ tự đoạn hội thoại.",4:"Mẹo Part 4: nghe ý chính – cảm xúc, lý do, mục đích của người nói.",5:"Mẹo Part 5: mỗi người chỉ có 1 đáp án, 3 lựa chọn bị thừa. Nghe kỹ từ phủ định nhé!"}
};
const pick = a => a[Math.floor(Math.random()*a.length)];
function buddy(mood, html){
  const b = XP.el && $("#xp-buddy"); if(!b) return;
  $("#xp-bm").innerHTML = mascot(mood); $("#xp-bub").innerHTML = html;
  b.classList.remove("pop"); void b.offsetWidth; b.classList.add("pop","talk");
  clearTimeout(XP.budT); XP.budT = setTimeout(()=>b.classList.remove("talk"), 9000);
}
function buddyTip(pg){
  const ch = xpChecked(); if(pg.q.every(n=>ch[n])) return;
  const t = TIPS[XP.paper][pg.part]; if(t) buddy(pg.part%2 ? "wave" : "happy", t);
}
function confetti(){
  const c = XP.el && $("#xp-conf"); if(!c) return;
  const em = ["🎉","⭐","✨","🎈","💛","❤️"]; c.innerHTML = "";
  for(let i=0;i<26;i++){ const s=document.createElement("span"); s.textContent=pick(em);
    s.style.left = (Math.random()*100)+"%"; s.style.animationDelay = (Math.random()*0.4)+"s"; s.style.fontSize = (16+Math.random()*16)+"px"; c.appendChild(s); }
  clearTimeout(XP.confT); XP.confT = setTimeout(()=>c.innerHTML="", 2400);
}
