# -*- coding: utf-8 -*-
"""Sinh data/data.js cho website IVY Teen: gom các khoá (Kick-off từ project, Bridge-up từ Curriculum 94 buổi)."""
import json, math, re, sys
sys.path.insert(0, __import__('os').path.dirname(__file__))
import build_kickoff as KO   # dữ liệu Kick-off A2 (DATA)

MD = open('/home/claude/bu/bu.md', encoding='utf-8').read()
L = MD.split('\n')

def table_after(heading):
    i = next(k for k, l in enumerate(L) if l.startswith(heading))
    rows = []
    for l in L[i+1:]:
        if l.startswith('#') and rows: break
        if l.startswith('| ') and not l.startswith('| ---'):
            rows.append([x.strip() for x in l.strip().strip('|').split(' | ')])
    return rows[0], rows[1:]

clean = lambda s: s.replace('\\*', '*').replace('&#91;', '[').replace('\\]', ']').replace('\\~', '~').replace('\\', '')

# ---------- Học phần (6.1) ----------
_, mods = table_after('### 6.1')
MODULES = [dict(zip(['name','sessions','units','grammar','vocab','ket','events'], [clean(x) for x in r])) for r in mods]

# ---------- 25 điểm ngữ pháp (5.2) ----------
_, gr = table_after('### 5.2')
GRAMMAR = {'cols': ['#', 'Điểm ngữ pháp', 'Học phần', 'Mức cuối khoá'], 'rows': [[clean(x) for x in r] for r in gr],
           'note': 'Ba mức: Tự động = dùng đúng ≥ 80% khi nói, viết tự do · Có kiểm soát = đúng ≥ 80% trong bài tập có gợi ý · Nhận biết = hiểu đúng khi đọc, nghe ≥ 8/10 câu. Đo ở buổi 3 (chẩn đoán) và học phần 5.'}

# ---------- Sub-skill KET (6.2) ----------
_, sk = table_after('### 6.2')
SUBSKILLS = [dict(zip(['code','what','part','hp','target'], [clean(x) for x in r])) for r in sk]

# ---------- Khung buổi học (7.1, 7.2) ----------
STRAND = {'NN': 'lang', 'Vào': 'input', 'Ra': 'output', 'TC': 'fluency'}
_, fr = table_after('### 7.1')
FRAMES = {}
for name, seq in fr:
    acts = []
    for part in clean(seq).split(' · '):
        m = re.match(r"(.+?)\s+(\d+)'\s*(?:\((NN|Vào|Ra|TC)\))?\s*$", part.strip())
        if m:
            acts.append({'minutes': int(m.group(2)), 'activity': (lambda a: a[:1].upper()+a[1:])(m.group(1).strip().rstrip(':')), 'category': STRAND.get(m.group(3), 'routine')})
        else:
            acts.append({'minutes': 5, 'activity': (lambda a: a[:1].upper()+a[1:])(part.strip()), 'category': 'routine'})
    FRAMES[name.split('·')[0].strip()] = acts
for k, v in FRAMES.items():
    assert sum(a['minutes'] for a in v) == 105, (k, sum(a['minutes'] for a in v))

def acts(*rows): return [{'minutes': m, 'activity': a, 'category': c} for m, a, c in rows]
SPECIAL = {
 'event': acts((20, 'Chuẩn bị ngôn ngữ cho sản phẩm', 'lang'), (60, 'Thực hiện sản phẩm trước khán giả', 'output'), (15, 'Phản hồi theo rubric', 'lang'), (10, 'Tự đánh giá năng lực', 'fluency')),
 'lr': acts((10, 'Ôn từ vựng học phần', 'lang'), (25, 'KET part 1: làm – chữa – rút chiến lược', 'input'), (25, 'KET part 2: làm – chữa – rút chiến lược', 'input'), (25, 'KET part 3: làm – chữa – rút chiến lược', 'input'), (20, 'Đọc hoặc nghe mở rộng mức dễ', 'fluency')),
 'sw': acts((90, 'GV thi Nói từng cặp 7–10\'; các cặp khác viết KET Part 6/7 bấm giờ', 'test'), (15, 'Tự chấm bài viết theo rubric', 'lang')),
 'test': acts((40, 'Ôn các điểm ngữ pháp của học phần', 'lang'), (60, 'Kiểm tra: các part KET đã học + 20 câu ngữ pháp', 'test'), (5, 'Tự ghi lỗi vào bảng lỗi cá nhân', 'lang')),
 'part': acts((15, 'Giới thiệu dạng bài và chiến lược', 'lang'), (30, 'Lượt 1: làm – chữa', 'input'), (30, 'Lượt 2: làm – chữa', 'input'), (20, 'Làm lại câu sai với đề khác', 'lang'), (10, 'Tự đánh giá', 'fluency')),
 'mock': acts((60, 'Reading and Writing (60\')', 'test'), (30, 'Listening (30\')', 'test'), (15, 'Speaking theo cặp xen kẽ', 'test')),
}

# ---------- Tự học (7.3) ----------
HW = {
 'beforeA': "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
 'afterA': "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
 'beforeB': "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
 'afterB': "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
}

UNITS = [('Starter','Hello!'),('U1','Come in'),('U2','What a week!'),('U3','Animal magic'),('U4',"Let's explore"),('U5','Fun with food'),
         ('U6','Back in time'),('U7','Bright sparks'),('U8','Top to toe'),('U9',"School's out"),('U10','Films and friends')]
UTITLE = dict(UNITS)

PMAP = {'R1':'R1','R2':'R2','R3':'R3','R4':'R4','R5':'R5','W1':'W6','W2':'W7','L1':'L1','L2':'L2','L3':'L3','L4':'L4','L5':'L5','S1':'S1','S2':'S1','S3':'S2','S4':'S2'}
def ket_norm(text):
    out = []
    for c in re.findall(r'\b([RWLS][1-5])\b', text):
        k = PMAP.get(c)
        if k and k not in out: out.append(k)
    for sk_, rng in re.findall(r'(R&W|Listening|Speaking) Part (\d(?:–\d)?)', text):
        a, b = (rng.split('–') + [rng])[:2]
        for n in range(int(a), int(b) + 1):
            k = {'R&W': 'R' if n <= 5 else 'W', 'Listening': 'L', 'Speaking': 'S'}[sk_] + str(n)
            if k not in out: out.append(k)
    return out

i8 = next(k for k, l in enumerate(L) if l.startswith('## 8.')); i9 = next(k for k, l in enumerate(L) if l.startswith('## 9.'))
sched = [[x.strip() for x in l.strip().strip('|').split(' | ')] for l in L[i8:i9] if l.startswith('| ') and not l.startswith('| ---') and not l.startswith('| Buổi')]
sessions = []
cur_mod = 0
for r in sched:
    r = [clean(x) for x in r]
    m = re.match(r'(\d+) \(T(\d+)\)', r[0]); no, wk = int(m.group(1)), int(m.group(2))
    lesson, focus, ket, goal, mat = r[1], r[2], r[3], r[4], r[5]
    mu = re.match(r'(Starter|U\d+)\b', lesson)
    if mu: unit = mu.group(1)
    elif lesson.startswith('Sự kiện'): unit = 'Sự kiện'
    elif no >= 77: unit = 'Luyện thi'
    else: unit = 'Củng cố'
    t = lesson
    if 'Reading + Grammar' in t: typ, frame = 'Reading', FRAMES['1']
    elif 'Listening + Vocabulary' in t: typ, frame = 'Listening', FRAMES['2']
    elif 'Speaking' in t and unit.startswith('U'): typ, frame = 'Speaking', FRAMES['3']
    elif '· Writing' in t: typ, frame = 'Writing', FRAMES['4']
    elif 'Ôn tập và Dự án' in t: typ, frame = 'Project & Check', FRAMES['5']
    elif t.startswith('Sự kiện'): typ, frame = 'Sự kiện', SPECIAL['event']
    elif 'Củng cố · Nghe' in t: typ, frame = 'Review', SPECIAL['lr']
    elif 'Củng cố · Nói' in t: typ, frame = 'Test', SPECIAL['sw']
    elif 'kiểm tra học phần' in t or 'Kiểm tra học phần' in t: typ, frame = 'Test', (SPECIAL['mock'] if 'đầy đủ' in t else SPECIAL['test'])
    elif t.startswith('Linh hoạt'): typ, frame = 'Review', []
    elif t.startswith('Luyện thi') or t.startswith('Chuyên sâu'): typ, frame = 'KET Lab', SPECIAL['part']
    elif t.startswith('Thi thử'): typ, frame = 'Test', SPECIAL['mock']
    elif unit == 'Starter': typ, frame = 'Starter', []
    elif unit == 'U10': typ, frame = 'Reading' if no == 71 else 'Speaking', []
    else: typ, frame = 'Review', []
    split = lesson.split(' — ', 1)
    title, task = (split[0], split[1]) if len(split) == 2 else (lesson, '—')
    vocab, grammar = focus, '—'
    if 'Ngữ pháp:' in focus:
        vocab, grammar = [x.strip(' ·') for x in focus.split('Ngữ pháp:', 1)]
    gc = ''
    if 'Công dân toàn cầu:' in grammar:
        grammar, gc = [x.strip(' ·') for x in grammar.split('Công dân toàn cầu:', 1)]
    elif 'Công dân toàn cầu:' in vocab:
        vocab, gc = [x.strip(' ·') for x in vocab.split('Công dân toàn cầu:', 1)]
    isA = (no % 2 == 1)
    sessions.append({
        'session_id': f'BU-{no:02d}', 'session_no': no, 'week': wk,
        'unit': unit, 'unit_title': UTITLE.get(unit) or {'Sự kiện': 'Công dân toàn cầu', 'Luyện thi': 'A2 Key for Schools', 'Củng cố': 'Củng cố học phần'}[unit],
        'type': typ, 'sb_pages': (re.search(r'SB tr\. ([^—+]+)', lesson).group(1).strip() if 'SB tr.' in lesson else '—'),
        'focus': title, 'task': task, 'ket_part': ket or '—', 'ket_codes': ket_norm(ket + ' ' + lesson),
        'grammar': grammar or '—', 'vocabulary': vocab or '—', 'can_do': goal or '—',
        'before': '—' if no == 1 else (HW['beforeA'] if isA else HW['beforeB']),
        'after': HW['afterA'] if isA else HW['afterB'],
        'in_class': frame, 'photocopiable': '—', 'global_skills': gc or '—', 'materials': mat or '—',
        'assessment': '—',
    })
assert [s['session_no'] for s in sessions] == list(range(1, 95))

BU_UNITS = [
 {'unit':'Starter','title':'Hello!','theme':'Gia đình, quốc tịch, ngày tháng','sessions':'1–3','grammar':'to be, tính từ sở hữu, sở hữu cách \'s','hp':'1'},
 {'unit':'U1','title':'Come in','theme':'Nhà và đồ vật','sessions':'5–9','grammar':'there is/are, giới từ nơi chốn, have got','hp':'1'},
 {'unit':'U2','title':'What a week!','theme':'Hoạt động hằng ngày, môn học','sessions':'11–15','grammar':'Hiện tại đơn, nói giờ, in/on/at','hp':'1'},
 {'unit':'U3','title':'Animal magic','theme':'Động vật, thiên nhiên','sessions':'21–25','grammar':'Trạng từ tần suất, từ để hỏi Wh-','hp':'2'},
 {'unit':'U4','title':"Let's explore",'theme':'Thị trấn, giao thông','sessions':'27–31','grammar':"Mệnh lệnh, must/mustn't, can, đại từ tân ngữ",'hp':'2'},
 {'unit':'U5','title':'Fun with food','theme':'Đồ ăn, thời tiết, lễ hội','sessions':'33–37','grammar':'Hiện tại tiếp diễn, some/any, much/many','hp':'2'},
 {'unit':'U6','title':'Back in time','theme':'Đồ vật xưa và nay','sessions':'43–47','grammar':'was/were, quá khứ đơn có quy tắc','hp':'3'},
 {'unit':'U7','title':'Bright sparks','theme':'Nghề nghiệp, thành tựu','sessions':'49–53','grammar':'Quá khứ bất quy tắc, câu hỏi Wh- quá khứ, when','hp':'3'},
 {'unit':'U8','title':'Top to toe','theme':'Ngoại hình, trang phục','sessions':'59–63','grammar':'So sánh hơn, so sánh nhất','hp':'4'},
 {'unit':'U9','title':"School's out",'theme':'Thể thao, sức khoẻ, kỳ nghỉ','sessions':'65–69','grammar':'be going to, like + V-ing, want to','hp':'4'},
 {'unit':'U10','title':'Films and friends','theme':'Phim ảnh','sessions':'71–72','grammar':'Ôn tổng hợp, nêu ý kiến','hp':'4'},
]

CAT_KO = {'routine': 'Thường quy', 'book': 'Sách (SB)', 'extension': 'Mở rộng', 'test': 'Kiểm tra'}
CAT_BU = {'lang': 'Học ngôn ngữ', 'input': 'Đầu vào', 'output': 'Đầu ra', 'fluency': 'Trôi chảy', 'test': 'Kiểm tra', 'routine': 'Khác'}

d = KO.DATA
ko_grammar = {'cols': ['Ngữ pháp', 'Unit', 'Dạy lần đầu', 'Ôn lại', 'Mục tiêu'],
              'rows': [[g['grammar'], g['unit'], 'Buổi ' + g['first_session'], g['review'], g['goal']] for g in d['grammar_spine']],
              'first_col': 2}
for s in d['sessions']:
    s['ket_codes'] = []  # computed client-side for Kick-off

COURSES = [
 {'id':'fd','name':'Foundation','cefr':'Pre A1','book':'—','exam':'fd','status':'updating','note':'Nền tảng cho học sinh mới bắt đầu'},
 {'id':'bu','name':'Bridge-up','cefr':'Pre A1 – A1','book':'Gold Experience A1 (2nd ed.)','exam':'a1','status':'ready','ketbank':True,
  'note':'94 buổi (82 buổi học + 12 sự kiện công dân toàn cầu), hướng tới A2 Key for Schools',
  'session_minutes':105,'sessions_per_week':2,'total_sessions':94,'cat':CAT_BU,
  'rhythm':'Mỗi unit 5 buổi: Đọc + Ngữ pháp 1 → Nghe + Từ vựng → Nói + Ngữ pháp 2 → Viết → Ôn tập & Dự án. Hết mỗi học phần có 4 buổi củng cố.',
  'units':BU_UNITS,'modules':MODULES,'grammar':GRAMMAR,'subskills':SUBSKILLS,'sessions':sessions,
  'homework_note':'Tự học 15–20 phút/ngày, 6 ngày/tuần, nộp qua Class Dojo. Mỗi bài có 2 mức: cơ bản (15\') và mở rộng (thêm 5\').'},
 {'id':'ko','name':'Kick-off','cefr':'A2','book':d['course']['book'],'exam':'a2','status':'ready','ketbank':True,
  'note':'94 buổi, định hướng A2 Key for Schools (KET)',
  'session_minutes':105,'sessions_per_week':2,'total_sessions':94,'cat':CAT_KO,
  'rhythm':'Mỗi unit 8 buổi: Reading → Grammar → Vocabulary → Listening → Speaking → Writing → KET Lab → Project & Check.',
  'units':d['units'],'grammar':ko_grammar,'sessions':d['sessions'],
  'homework_note':'Bài trước buổi và sau buổi nộp trên web; deep listening 10 phút/ngày.'},
 {'id':'bo','name':'Boost','cefr':'B1','book':'Gold Experience B1','exam':'b1','status':'updating','note':'Định hướng B1 Preliminary for Schools (PET)'},
 {'id':'pi','name':'IELTS Skills up','cefr':'B1+ (pre-IELTS)','book':'Gold Experience B1+ + sách luyện IELTS','exam':'pi','status':'updating','note':'Luyện kỹ năng và subskills IELTS'},
]

DATA = {'center': d['center'], 'courses': COURSES, 'games': d['games'], 'game_notes': d['game_notes']}
out = '/home/claude/ivy-teen-website/data/data.js'
with open(out, 'w', encoding='utf-8') as f:
    f.write('// Dữ liệu website IVY Teen – sinh tự động từ giáo trình các khoá\nwindow.IVY_DATA = ')
    json.dump(DATA, f, ensure_ascii=False, indent=1)
    f.write(';\n')
print('bu sessions', len(sessions), 'modules', len(MODULES), 'grammar', len(GRAMMAR['rows']), 'subskills', len(SUBSKILLS))
from collections import Counter
print(Counter(s['type'] for s in sessions))
print([ (s['session_no'], s['type']) for s in sessions if not s['in_class']])
print(sessions[4]['focus'], '|', sessions[4]['task'], '|', sessions[4]['grammar'][:80], '|', sessions[4]['ket_codes'], sessions[4]['sb_pages'])
print(sessions[80]['ket_codes'], sessions[76]['ket_codes'])
