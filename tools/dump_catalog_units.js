// Tạo lại phong-thi/catalog-units.json (danh sách Unit + trạm cho nút "Chọn từ kho bài tập").
// Chạy khi đã có máy chủ thử ở cổng 8790 phục vụ thư mục website: node tools/dump_catalog_units.js
const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch();const c=await b.newContext();
const tok=Buffer.from(JSON.stringify({c:'X',s:'x',e:Date.now()+1e9})).toString('base64url')+'.sig';
await c.addInitScript(t=>localStorage.setItem('ivy-acc',JSON.stringify({token:t,role:'gv',name:'GV'})),tok);
await c.route('**/assets/config.js',r=>r.fulfill({contentType:'text/javascript',body:'window.IVY_CONFIG={API_URL:"http://localhost:8790/api"};'}));await c.route('**fonts.g**',r=>r.abort());
const p=await c.newPage();await p.goto('http://localhost:8790/phong-thi/');await p.waitForTimeout(1000);
const data=await p.evaluate(()=>LEVELS.map(l=>({id:l.id,name:l.name,units:l.units.map(u=>({n:u.n,name:uName(u.n),title:u.title,topic:u.topic||'',acts:u.acts.map(a=>({id:a.id,type:a.type,label:(TYPE[a.type]||[a.type])[0],title:a.title}))}))})));
fs.writeFileSync('/home/claude/site/phong-thi/catalog-units.json',JSON.stringify(data));
console.log(data.map(l=>l.id+':'+l.units.length+'u/'+l.units.reduce((t,u)=>t+u.acts.length,0)).join(' '));
await p.goto('http://localhost:8790/phong-thi/?lv=a1&u=3&act='+data.find(l=>l.id==='a1').units[3].acts[1].id);await p.waitForTimeout(1200);await p.screenshot({path:'/home/claude/shots/k1.png'});await b.close()})();
