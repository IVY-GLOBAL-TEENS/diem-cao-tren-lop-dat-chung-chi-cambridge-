# -*- coding: utf-8 -*-
"""Thêm khoá Boost (B1) vào data/data.js.

Nguồn: tools/boost/rows.json (94 buổi + gói PRE/POST-LESSON, xuất từ file
IVY_Boost_B1_94_buoi.xlsx), tools/boost/codes.json (mã ngữ pháp, part PET,
subskill), tools/boost/meta.json (unit, mục tiêu, học phần).
Chạy:  python3 tools/build_boost.py   (sửa data/data.js tại chỗ, thay mục 'bo').
"""
import json, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
SRC = os.path.join(HERE, 'boost')
rows = json.load(open(os.path.join(SRC, 'rows.json'), encoding='utf-8'))
codes = json.load(open(os.path.join(SRC, 'codes.json'), encoding='utf-8'))
meta = json.load(open(os.path.join(SRC, 'meta.json'), encoding='utf-8'))
UM = {int(k): v for k, v in meta['units'].items()}
assert [r['buoi'] for r in rows] == list(range(1, 95))


def pp(pages):
    pages = sorted(set(pages))
    out, i = [], 0
    while i < len(pages):
        j = i
        while j + 1 < len(pages) and pages[j + 1] == pages[j] + 1:
            j += 1
        out.append(str(pages[i]) if i == j else f"{pages[i]}–{pages[j]}")
        i = j + 1
    return ', '.join(out)


def acts(*a):
    return [{'minutes': m, 'activity': t, 'category': c} for m, t, c in a]


# Khung 105 phút trên lớp theo dạng buổi (thể loại màu: lang/input/output/fluency/test/routine)
FRAMES = {
 'Reading': acts((10, 'Khởi động: kiểm tra nhanh từ vựng đã học trước ở nhà (gói PRE)', 'lang'),
                 (10, 'Lead-in: thảo luận ảnh và câu hỏi mở bài', 'fluency'),
                 (30, 'Reading: đọc lướt lấy ý chính → làm dạng bài PET → chữa bằng câu chứa đáp án', 'input'),
                 (25, 'Grammar 1: tìm quy tắc trong bài đọc → luyện có kiểm soát', 'lang'),
                 (20, 'Dùng ngữ pháp mới để nói và viết về bản thân', 'output'),
                 (10, 'Tổng kết, giới thiệu gói POST-LESSON', 'routine')),
 'Listening': acts((10, 'Quiz từ vựng nhanh', 'lang'),
                   (20, 'Vocabulary SB + Extend vocabulary', 'lang'),
                   (30, 'Listening PET: dự đoán → nghe lần 1 → nghe lần 2 kiểm tra → đọc audioscript', 'input'),
                   (20, 'Grammar 2: giới thiệu và luyện có kiểm soát', 'lang'),
                   (15, 'Nói theo cặp dùng từ và ngữ pháp mới', 'output'),
                   (10, 'Chép chính tả 3 câu từ bài nghe, giao bài', 'fluency')),
 'Speaking': acts((10, 'Khởi động nói nhanh 4-3-2', 'fluency'),
                  (15, 'Nghe bài nói mẫu, ghi cụm câu chức năng (Speaking file)', 'input'),
                  (15, 'Phát âm trọng tâm của buổi', 'lang'),
                  (40, 'Luyện part Nói PET theo cặp, đổi vai, đổi bạn', 'output'),
                  (15, 'Nói trước lớp, giáo viên chấm theo thang Nói PET', 'test'),
                  (10, 'Tự đánh giá, giao bài ghi âm', 'routine')),
 'Writing': acts((10, 'Sửa lỗi chung từ bài nói và bài tập về nhà', 'lang'),
                 (20, 'Phân tích đề và bài mẫu (Writing file)', 'input'),
                 (15, 'Cụm câu, từ nối, câu phức cho dạng bài', 'lang'),
                 (10, 'Lập dàn ý theo cặp', 'output'),
                 (25, 'Viết nháp có bấm giờ', 'output'),
                 (15, 'Tự soát theo Improve it, chấm chéo theo thang PET', 'lang'),
                 (10, 'Tổng kết, giao bài viết lại', 'routine')),
 'Project & Check': acts((15, 'Ôn từ vựng và ngữ pháp của unit qua trò chơi', 'lang'),
                         (15, 'Video Switch on + thảo luận', 'input'),
                         (35, 'Dự án nhóm: hoàn thiện và trình bày, đánh giá chéo', 'output'),
                         (30, 'Unit check', 'test'),
                         (10, 'Independent learning, giao bài', 'routine')),
 'Sự kiện': acts((20, 'Chuẩn bị ngôn ngữ cho sản phẩm', 'lang'),
                 (60, 'Thực hiện sản phẩm trước khán giả', 'output'),
                 (15, 'Phản hồi theo rubric', 'lang'),
                 (10, 'Tự đánh giá năng lực', 'fluency')),
 'Review': acts((10, 'Ôn từ vựng học phần', 'lang'),
                (35, 'Reading PET: làm có bấm giờ → chữa → rút chiến lược', 'input'),
                (35, 'Listening PET: làm → chữa → nghe lại có lời', 'input'),
                (15, 'Làm lại câu sai với đề khác', 'lang'),
                (10, 'Đọc hoặc nghe mở rộng mức dễ', 'fluency')),
 'Speaking test': acts((90, "GV thi Nói từng cặp 10–12'; các cặp khác viết PET Part 1/2 bấm giờ", 'test'),
                       (15, 'Tự chấm bài viết theo thang PET', 'lang')),
 'Test': acts((40, 'Ôn các điểm ngữ pháp nền của học phần', 'lang'),
              (60, 'Kiểm tra: các part PET đã học + câu ngữ pháp nền', 'test'),
              (5, 'Ghi lỗi vào bảng lỗi cá nhân', 'lang')),
 'PET Lab': acts((15, 'Giới thiệu dạng bài và chiến lược', 'lang'),
                 (30, 'Lượt 1: làm có bấm giờ → chữa', 'input'),
                 (30, 'Lượt 2: làm có bấm giờ → chữa', 'input'),
                 (20, 'Làm lại câu sai với đề khác', 'lang'),
                 (10, 'Tự đánh giá', 'fluency')),
 'Mock': acts((45, 'Reading (45 phút)', 'test'),
              (30, 'Listening (30 phút)', 'test'),
              (30, 'Chuyển đáp án sang phiếu, ghi lỗi theo part; Writing làm tại nhà có bấm giờ', 'routine')),
}

TYPE_OF = {
 'Unit – Reading + Grammar': 'Reading', 'Unit – Vocabulary + Listening': 'Listening', 'Unit – Speaking': 'Speaking',
 'Unit – Writing': 'Writing', 'Unit – Ôn tập + Dự án': 'Project & Check', 'Sự kiện kỹ năng': 'Sự kiện',
 'Củng cố': 'Review', 'Củng cố + kiểm tra Nói': 'Test', 'Kiểm tra học phần': 'Test', 'Linh hoạt': 'Review',
 'Luyện thi': 'PET Lab', 'Thi thử': 'Test', 'Chữa đề': 'Review', 'Starter': 'Starter', 'Chẩn đoán': 'Test',
 'Unit 10 – ôn theo đề': 'Review', 'Đánh giá ngữ pháp nền': 'Test', 'Cầu nối B1+': 'Grammar', 'Tổng kết': 'Test',
}
FRAME_OF = {
 'Unit – Reading + Grammar': 'Reading', 'Unit – Vocabulary + Listening': 'Listening', 'Unit – Speaking': 'Speaking',
 'Unit – Writing': 'Writing', 'Unit – Ôn tập + Dự án': 'Project & Check', 'Sự kiện kỹ năng': 'Sự kiện',
 'Củng cố': 'Review', 'Củng cố + kiểm tra Nói': 'Speaking test', 'Kiểm tra học phần': 'Test', 'Luyện thi': 'PET Lab',
 'Thi thử': 'Mock',
}

PET_RE = re.compile(r'^[RWLS]\d$')


def unit_of(r):
    m = re.match(r'(U\d+)\b', r['bai'])
    if r['loai'] == 'Starter':
        return 'Starter', 'Happy days'
    if m:
        n = int(m.group(1)[1:])
        return m.group(1), UM[n]['title'] if n in UM else 'Summertime!'
    if r['loai'] == 'Sự kiện kỹ năng':
        return 'Sự kiện', 'Công dân toàn cầu'
    if r['buoi'] >= 77:
        return 'Luyện thi', 'B1 Preliminary for Schools'
    return 'Củng cố', 'Củng cố học phần'


sessions = []
for r in rows:
    no = r['buoi']
    unit, utitle = unit_of(r)
    title, task = (r['bai'].split(' — ', 1) + ['—'])[:2]
    gc = '—'
    focus_txt = r['noidung']
    if 'Công dân toàn cầu:' in focus_txt:
        focus_txt, gc = [x.strip(' ·') for x in focus_txt.split('Công dân toàn cầu:', 1)]
    gnames = [f"{c} {codes['GRAMMAR'][c][0]}" for c in r['gcodes'] if c in codes['GRAMMAR']]
    mats = r['thamkhao']
    frame = FRAMES.get(FRAME_OF.get(r['loai'], ''), [])
    if r['loai'] == 'Thi thử' and no == 92:
        frame = FRAMES['Mock']
    sessions.append({
        'session_id': f'BO-{no:02d}', 'session_no': no, 'week': r['tuan'], 'hp': r['hp'].split(' · ')[0],
        'unit': unit, 'unit_title': utitle, 'type': TYPE_OF.get(r['loai'], 'Review'), 'kind': r['loai'],
        'sb_pages': pp(r['sb']) if r['sb'] else '—', 'wb_pages': pp(r['wb']) if r['wb'] else '—',
        'focus': title, 'task': task, 'content': focus_txt or '—',
        'ket_part': r['kynang'] or '—', 'ket_codes': [c for c in r['scodes'] if PET_RE.match(c)],
        'subskills': r.get('sub', []),
        'grammar': '; '.join(gnames) or '—', 'vocabulary': r.get('vocab') or '—', 'can_do': r['muctieu'] or '—',
        'before': r.get('pre') or '—', 'after': r.get('post') or '—',
        'before_min': r.get('pre_min', 0), 'after_min': r.get('post_min', 0),
        'in_class': frame, 'photocopiable': '—', 'global_skills': gc, 'materials': mats, 'assessment': '—',
    })

# ---------- unit ----------
def rng_sessions(u):
    nos = [s['session_no'] for s in sessions if s['unit'] == u]
    return f"{min(nos)}–{max(nos)}" if len(nos) > 1 else str(nos[0])

units = [{'unit': 'Starter', 'title': 'Happy days', 'theme': 'Làm quen, kỳ nghỉ, sở thích', 'sessions': rng_sessions('Starter'),
          'grammar': 'Ôn thì cơ bản, mạo từ', 'hp': '1'}]
for n, u in sorted(UM.items()):
    hp = next(s['hp'] for s in sessions if s['unit'] == f'U{n}')[2:]
    units.append({'unit': f'U{n}', 'title': u['title'], 'theme': u['gc'], 'sessions': rng_sessions(f'U{n}'),
                  'grammar': f"{u['g1']}; {u['g2']}", 'cando_speaking': u['spk'], 'cando_writing': u['wri'],
                  'project': u['project'], 'hp': hp})
units.append({'unit': 'U10', 'title': 'Summertime!', 'theme': 'Kỹ năng sống, việc làm hè – ôn theo đề PET',
              'sessions': rng_sessions('U10'), 'grammar': 'Ôn tổng hợp', 'hp': '4'})

# ---------- học phần ----------
modules = []
for h in range(1, 6):
    ss = [s for s in sessions if s['hp'] == f'HP{h}']
    us = sorted({s['unit'] for s in ss if s['unit'].startswith('U') or s['unit'] == 'Starter'}, key=lambda x: (x != 'Starter', int(x[1:]) if x[1:].isdigit() else 0))
    gs = sorted({c for r in rows if r['hp'].startswith(f'HP{h}') for c in r['gcodes']})
    parts = sorted({c for s in ss for c in s['ket_codes']})
    evs = [s['focus'].replace('Sự kiện ', '') for s in ss if s['type'] == 'Sự kiện']
    modules.append({'name': meta['hp'][str(h)], 'sessions': f"{ss[0]['session_no']}–{ss[-1]['session_no']} (T{ss[0]['week']}–{ss[-1]['week']})",
                    'units': ', '.join(us) or '—', 'grammar': ', '.join(gs), 'ket': ' '.join(parts), 'events': '; '.join(evs) or '—'})

# ---------- ngữ pháp nền ----------
grows = []
for c, (name, _u) in sorted(codes['GRAMMAR'].items()):
    used = [r['buoi'] for r in rows if c in r['gcodes']]
    tested = [r['buoi'] for r in rows if c in r['gcodes'] and r['loai'] in ('Kiểm tra học phần', 'Đánh giá ngữ pháp nền', 'Cầu nối B1+')]
    grows.append([c, name, f"Buổi {used[0]}" if used else '—', ', '.join(map(str, used[1:8])) + ('…' if len(used) > 8 else '') or '—',
                  ', '.join(map(str, tested)) or '—'])
grammar = {'cols': ['Mã', 'Điểm ngữ pháp', 'Dạy lần đầu', 'Dùng lại ở buổi', 'Kiểm tra ở buổi'], 'rows': grows, 'first_col': 2,
           'note': 'Ngữ pháp nền B1: B01–B22 và B26–B31 dạy và kiểm tra trong khoá; B23–B25 là cầu nối B1+ (chỉ nhận biết).'}

# ---------- subskill ----------
subs = []
for c, what in codes['SUB'].items():
    ss = [s for s in sessions if c in s['subskills']]
    lt = {'RS': 'R', 'LS': 'L', 'SS': 'S', 'WS': 'W', 'VS': 'R'}.get(c[:2], '')
    parts = sorted({p for s in ss for p in s['ket_codes'] if p[0] == lt})
    subs.append({'code': c, 'what': what, 'part': ' '.join(parts) or '—', 'hp': ss[0]['hp'] if ss else '—',
                 'target': f"{len(ss)} buổi: " + ', '.join(str(s['session_no']) for s in ss[:12]) + ('…' if len(ss) > 12 else '')})

PET_INFO = {
 'Reading': [['R1', '5 văn bản ngắn (biển báo, tin nhắn) – chọn ý đúng'], ['R2', 'Nối 5 người với 8 văn bản'], ['R3', 'Bài dài – 5 câu trắc nghiệm'],
             ['R4', 'Điền 5 câu vào bài (3 câu thừa)'], ['R5', 'Điền từ trắc nghiệm – 6 câu'], ['R6', 'Điền từ tự do – 6 chỗ']],
 'Writing': [['W1', 'Email ~100 từ theo 4 ghi chú'], ['W2', 'Bài báo hoặc truyện ~100 từ']],
 'Listening': [['L1', '7 đoạn ngắn – chọn tranh'], ['L2', '6 hội thoại – ý kiến, thái độ'], ['L3', 'Điền 6 thông tin'], ['L4', 'Phỏng vấn dài – 6 câu trắc nghiệm']],
 'Speaking': [['S1', 'Câu hỏi cá nhân'], ['S2', 'Tả ảnh 1 phút'], ['S3', 'Thảo luận cặp theo tranh gợi ý'], ['S4', 'Thảo luận mở rộng']],
}

pre = sum(s['before_min'] for s in sessions) / 94
post = sum(s['after_min'] for s in sessions) / 94
COURSE = {
 'id': 'bo', 'name': 'Boost', 'cefr': 'B1', 'book': 'Gold Experience B1 (2nd ed.)', 'exam': 'b1', 'status': 'ready',
 'note': '94 buổi (82 buổi học + 12 sự kiện kỹ năng), định hướng B1 Preliminary for Schools (PET)',
 'session_minutes': 105, 'sessions_per_week': 2, 'total_sessions': 94,
 'cat': {'lang': 'Học ngôn ngữ', 'input': 'Đầu vào', 'output': 'Đầu ra', 'fluency': 'Trôi chảy', 'test': 'Kiểm tra', 'routine': 'Khác'},
 'rhythm': 'Mỗi unit 5 buổi: Reading + Grammar 1 → Vocabulary + Listening + Grammar 2 → Speaking → Writing → Ôn tập & Dự án, sau đó 1 sự kiện kỹ năng. Hết mỗi học phần có 4 buổi: củng cố Nghe–Đọc, củng cố Nói–Viết + kiểm tra Nói, kiểm tra học phần, linh hoạt. HP5 luyện thi PET và 2 lần thi thử.',
 'units': units, 'modules': modules, 'grammar': grammar, 'subskills': subs, 'sessions': sessions,
 'exam_label': 'PET', 'exam_name': 'B1 Preliminary for Schools', 'exam_parts': PET_INFO,
 'homework_note': f"Mỗi buổi có gói PRE-LESSON (~{round(pre)} phút, giao trước buổi) và POST-LESSON (~{round(post)} phút, giao sau buổi); website chia gói ra các ngày, khoảng 25–30 phút/ngày, có lồng tiếng video mỗi ngày. Làm lại và làm bù không giới hạn.",
}

path = os.path.join(ROOT, 'data', 'data.js')
txt = open(path, encoding='utf-8').read()
head, body = txt.split('window.IVY_DATA = ', 1)
data = json.loads(body.rstrip().rstrip(';'))
data['courses'] = [COURSE if c['id'] == 'bo' else c for c in data['courses']]
with open(path, 'w', encoding='utf-8') as f:
    f.write(head + 'window.IVY_DATA = ')
    json.dump(data, f, ensure_ascii=False, indent=1)
    f.write(';\n')
print('Boost:', len(sessions), 'buổi ·', len(units), 'unit ·', len(modules), 'học phần ·', len(grows), 'ngữ pháp ·', len(subs), 'subskill')
print('không có khung trên lớp:', [s['session_no'] for s in sessions if not s['in_class']])
for k, v in FRAMES.items():
    assert sum(a['minutes'] for a in v) == 105, k
