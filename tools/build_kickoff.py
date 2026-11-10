# -*- coding: utf-8 -*-
"""Sinh file dữ liệu cho website từ giáo trình Kick-off A2 trong project."""
import json, math

COURSE = {"course_id": "KO", "name": "Kick-off", "cefr": "A2", "book": "Gold Experience A2 2nd ed.",
          "session_minutes": 105, "sessions_per_week": 2, "total_sessions": 94}

LEVELS = [
    {"name": "Foundation", "cefr": "Pre A1", "book": "—", "note": "Nền tảng cho học sinh mới bắt đầu", "status": "Đang xây dựng"},
    {"name": "Bridge-up", "cefr": "Pre A1–A1", "book": "Gold Experience A1 + tài liệu bổ trợ", "note": "94 buổi, có mạch kỹ năng công dân toàn cầu", "status": "Đang xây dựng"},
    {"name": "Kick-off", "cefr": "A2", "book": "Gold Experience A2 (2nd ed.)", "note": "94 buổi, định hướng Cambridge KET (A2 Key for Schools)", "status": "Hoàn thiện"},
    {"name": "Boost", "cefr": "B1", "book": "Gold Experience B1", "note": "Định hướng PET (B1 Preliminary for Schools)", "status": "Đang xây dựng"},
    {"name": "IELTS Skills up", "cefr": "B1+ (pre-IELTS)", "book": "Gold Experience B1+ + sách luyện IELTS", "note": "Luyện kỹ năng & subskills IELTS", "status": "Đang xây dựng"},
]

UNITS = [
 ["Starter","This is me!","Personal info, family, classroom","6–10","2–3","be, have got, present simple, there is/are, countable/uncountable, some/any","Family; personal information; classroom language; clothes","Giới thiệu bản thân, gia đình; đánh vần","—","Nền S Part 1","—","—","—"],
 ["U1","My time","Free time & hobbies","11–22","4–11","Present simple + adverbs of frequency (vị trí trạng từ); much / many / a lot of","Free-time verbs → V-ing (paint→painting, dance→dancing); collocations: listen to / watch / play / go on / collect","Nói về sở thích, điều mình thích/không thích và giỏi","Viết email mời bạn (đủ 3 ý)","Key R Part 2 · Key L Part 2 · Key S Part 1 (topic free time) · Key W Part 6 (3 ý, 25+ từ)","Magic camp","Học & biểu diễn 1 trò ảo thuật / thuyết trình 1 phút về 1 ảo thuật gia","Sáng tạo · trình bày trước lớp"],
 ["U2","Are you online?","Technology & the internet","23–34","12–19","Present continuous (quy tắc thêm -ing); Present simple vs present continuous; state verbs","Thiết bị công nghệ (laptop, webcam, keyboard…); collocations công nghệ; đọc số điện thoại, email, website","Mô tả bức ảnh, dùng giới từ chỉ vị trí","Viết đoạn mô tả ngắn có từ nối and/but/because","Key R Part 5 · Key L Part 1 · Nền cho Key S Part 2 · Key W Part 6 (25+ từ)","Toddler tech","Thiết kế app cho khách du lịch tới thành phố mình & thuyết trình","Công dân số · thiết kế sản phẩm"],
 ["U3","The right answer!","School & education","35–45","20–27","Past simple – regular / irregular, was/were; Past simple questions & short answers (Did…? Was/Were…? Wh-)","Đồ dùng & địa điểm trong trường; compound nouns (timetable, bookshelf); collocations have/do homework, wear a uniform, get a mark","Hỏi và trả lời về sự việc trong quá khứ","Kể sự việc theo trình tự thời gian","Key R Part 3 & 5 · Key L Part 3 · Key S Part 1 · Key W Part 6 (25+ từ)","Life at Gordonstoun","Đề xuất 1 hoạt động ngoại khoá mới, trình bày với 'thầy hiệu trưởng'","Tư duy phản biện · đề xuất cho cộng đồng trường"],
 ["U4","Open 24/7","Shopping","47–57","30–37","Comparative adjectives (-er / -ier / more / better / worse + than); Superlative adjectives (the biggest / the most… / the best)","Mua sắm: receipt, bargain, sale, size, cash/card; save / cost / pay / spend / try on; đọc giá & đơn vị tiền","Hỏi đường và chỉ đường","Lên dàn ý và viết review ngắn","Key R Part 5 · Key L Part 3 · Chức năng giao tiếp · Key W Part 6","The Teenage Market","Kế hoạch kinh doanh 1 gian hàng chợ & pitch (mở rộng: chợ trong lớp)","Tư duy tài chính · làm việc nhóm"],
 ["U5","That's entertainment!","Entertainment","59–69","38–45","Past continuous (was/were + V-ing); Past continuous + past simple (when / while)","Sự kiện giải trí (festival, exhibition, talent show); tính từ đánh giá; danh từ chỉ người -or/-er/-ian/-ist","Nói cảm nhận về 1 hoạt động và nêu lý do","Viết truyện ngắn theo 3 tranh","Key R Part 2 · Key L Part 1 · Key S Part 2 (Phase 1) · Key W Part 7 (3 tranh, 35+ từ)","Let me tell you a story","Ý tưởng phim 'mash-up' & storyboard","Sáng tạo · kể chuyện"],
 ["U6","Are we there yet?","Travel & transport","71–82","46–53","be going to (kế hoạch) vs will (dự đoán); Present continuous for future arrangements","Phương tiện (ferry, tram, underground…); take / catch / ride / fly / go by; airport, platform, bus stop","Hỏi và trả lời về kế hoạch tương lai","Viết email trả lời đủ 3 ý","Key R Part 3 · Key L Part 5 · Key S Part 1 · Key W Part 6","Underwater adventures","Kế hoạch kỳ nghỉ của cả lớp / brochure","Lập kế hoạch · hợp tác"],
 ["U7","Team spirit","Sport","83–94","57–64","can / could – ability & possibility; have to / don't have to / had to; must","Môn thể thao & dụng cụ (goggles, helmet, racket…); play / go / do + sport; practice vs practise","Đưa ra lời nhờ vả và đáp lại lịch sự","Trả lời câu hỏi về sở thích mới","Key R Part 4 · Key L Part 1 · Chức năng giao tiếp · Key W Part 6 (25+ từ)","Freestyle tricks","Sáng tạo môn thể thao mới (poster/video)","Tinh thần đồng đội · sáng tạo luật chơi"],
 ["U8","Wild world","The natural world","95–105","65–72","Present perfect (trải nghiệm) vs past simple; past participles; Present perfect + ever / never","Địa hình tự nhiên, châu lục; thời tiết (danh từ → tính từ rainy, foggy…); thang nhiệt độ; phương hướng","Nêu ý kiến và lý do trong thảo luận","Viết email thân mật, nhấn mạnh tính từ","Key R Part 2 · Key L Part 3 · Key S Part 2 · Key W Part 6","Mountain life","Chiến dịch gây quỹ 'rewilding'","Bảo vệ thiên nhiên · vận động cộng đồng"],
 ["U9","Feeling good","Food, cooking & health","107–117","73–80","First conditional (If + present, will/won't); should / shouldn't – lời khuyên","Món ăn; động từ nấu (bake, boil, fry, grill, roast); tính từ từ động từ (fried, baked…); collocations sức khoẻ (have a headache, feel sick)","Chọn ý mình thích nhất trong thảo luận và giải thích","Viết truyện ngắn theo tranh","Key R Part 3 · Key L Part 2 · Key S Part 2 · Key W Part 7 (35+ từ)","Space food","Thiết kế thực đơn không gian & viết blog review","Lối sống lành mạnh · đánh giá sản phẩm"],
 ["U10","The place to be!","Places (exam practice unit)","119–124","83–86","Ôn tổng hợp","Playground, house types, room adjectives","Trả lời & mở rộng câu trả lời","Email mời + truyện theo tranh","R P1, P4 · L P1/3 · S P1 · W P6, P7","—","—","—"],
]
UKEYS = ["unit","title","theme","sb_pages","sessions","grammar","vocabulary","cando_speaking","cando_writing","ket_parts","video","project","global_skills"]

SPINE = [
 ["be, have got, present simple, there is/are, some/any","Starter","2–3","U1 (present simple), U5 (some/any trong món ăn → U9)","Nói & viết câu cơ bản không sai cấu trúc"],
 ["Present simple + adverbs of frequency","U1","5","U2 (vs continuous), Review 1","Đặt trạng từ đúng vị trí, -s ngôi 3"],
 ["much / many / a lot of","U1","7","U9 (food), Review 1","Phân biệt danh từ đếm được/không đếm được"],
 ["Present continuous","U2","13","U6 (tương lai), Review 1","Quy tắc -ing, dùng cho việc đang diễn ra"],
 ["Present simple vs continuous; state verbs","U2","15","Review 1, Mid-course","Chọn thì theo signal words"],
 ["Past simple (regular / irregular, was/were)","U3","21","U5, U8 (vs present perfect)","Bảng 50 động từ bất quy tắc thường gặp"],
 ["Past simple questions & short answers","U3","23","U5 Speaking, U8","Hỏi đáp về quá khứ với did"],
 ["Comparative adjectives","U4","31","U4 Writing, Mid-course","Quy tắc -er / more, so sánh với than"],
 ["Superlative adjectives","U4","33","U4 Writing, U8","the + -est / most"],
 ["Past continuous","U5","39","U5 Writing (story), U9 Writing","Diễn tả bối cảnh trong truyện"],
 ["Past continuous + past simple (when / while)","U5","41","Review 2, Final","Kể chuyện có hành động xen ngang"],
 ["be going to vs will","U6","47","U9 (first conditional), Final","Kế hoạch vs dự đoán"],
 ["Present continuous for future arrangements","U6","49","Review 2","Lịch hẹn đã sắp xếp"],
 ["can / could – ability & possibility","U7","58","U7 Speaking (requests)","Khả năng hiện tại & quá khứ"],
 ["have to / don't have to / had to; must","U7","60","Review 2","Nghĩa vụ & quy định"],
 ["Present perfect (experience) vs past simple","U8","66","Review 2, Final","Phân biệt trải nghiệm vs thời điểm xác định"],
 ["Present perfect + ever / never","U8","68","U8 Speaking, Final","Hỏi Have you ever…?"],
 ["First conditional","U9","74","Review 2, Final","If + present, will"],
 ["should / shouldn't","U9","76","Review 2","Đưa lời khuyên"],
]

# ---- Dữ liệu riêng từng unit chính (U1–U9) ----
U = {
 1: dict(start=4, L=11, uc="21–22", gf=128,
   G1="Present simple + adverbs of frequency (vị trí trạng từ)", G1s="Present simple + adverbs of frequency",
   G2="much / many / a lot of", G2s="much / many / a lot of",
   rt="3 teens & unusual hobbies", rtask="Matching 7 câu – gạch chân keyword, nhận diện từ đồng nghĩa", rk="Key R Part 2",
   lt="Cooking day at a café", ltask="Gap-fill ghi chú: đoán loại từ trước khi nghe, cẩn thận bẫy giá/giờ", lk="Key L Part 2",
   sf="Nói về sở thích, điều thích/không thích, việc mình giỏi", sk="Key S Part 1 (topic free time)", su="love/like/enjoy + V-ing; I'm good at…; Me too / Me neither",
   wf="Email mời bạn tham gia câu lạc bộ", wk="Key W Part 6 (3 ý, 25+ từ)", we="Dấu câu (capital, . ? ,); nói rõ club gì, khi nào, ở đâu",
   pc={3:"PC 1A: Guessing game – free time; PC 1B: Ghép collocation + adverb of frequency", 6:"PC 1C: Info gap – thông báo CLB"}),
 2: dict(start=12, L=23, uc="33–34", gf=130,
   G1="Present continuous (quy tắc thêm -ing)", G1s="Present continuous",
   G2="Present simple vs present continuous; state verbs", G2s="Present simple vs present continuous; state verbs",
   rt="Tubers UK – vlogging club", rtask="Open cloze: xác định loại từ cần điền (động từ, giới từ, đại từ…)", rk="Key R Part 5",
   lt="Tình huống công nghệ (lễ hội robot, giải thưởng…)", ltask="MCQ tranh 5 câu: nhìn tranh, dự đoán từ sẽ nghe", lk="Key L Part 1",
   sf="Mô tả bức ảnh (ngày hội công nghệ ở trường)", sk="Nền cho Key S Part 2", su="in front of / opposite / between / next to / behind; There is/are…; He's …-ing",
   wf="Đoạn văn ngắn về app yêu thích", wk="Key W Part 6 (25+ từ)", we="and / but / because; app làm gì, vì sao thích, có hạn chế gì",
   pc={3:"PC 2A: Bingo – technology", 4:"PC 2B: Quiz present simple/continuous", 6:"PC 2C: Cloze theo ảnh"}),
 3: dict(start=20, L=35, uc="45", gf=132,
   G1="Past simple – regular / irregular, was/were", G1s="Past simple – regular / irregular, was/were",
   G2="Past simple questions & short answers (Did…? Was/Were…? Wh-)", G2s="Past simple questions & short answers",
   rt="Studytracks – app biến ghi chú thành bài hát", rtask="MCQ + open cloze: câu hỏi theo thứ tự bài, tìm paraphrase", rk="Key R Part 3 & 5",
   lt="Trường học trên thế giới", ltask="MCQ 5 câu (hội thoại 2 người): gạch chân tên người trong câu hỏi", lk="Key L Part 3",
   sf="Ngày đầu tiên đi học – hỏi & trả lời về quá khứ", sk="Key S Part 1", su="Wh- + did + S + V; yesterday / last week / ago; What does X mean?",
   wf="Tả một ngày học vui ở trường", wk="Key W Part 6 (25+ từ)", we="Từ nối trình tự First / Then / After that / At the end of the day + past simple",
   pc={3:"PC 3A: Memory – collocations trường học", 5:"PC 3B: Info gap – câu hỏi past simple", 6:"PC 3C: Sắp xếp truyện – sequencing"}),
 4: dict(start=30, L=47, uc="57", gf=134,
   G1="Comparative adjectives (-er / -ier / more / better / worse + than)", G1s="Comparative adjectives",
   G2="Superlative adjectives (the biggest / the most… / the best)", G2s="Superlative adjectives",
   rt="Cách mua sắm mới (robot, gương thông minh, drone)", rtask="True/False + open cloze: tìm thông tin cụ thể, bỏ qua từ khó", rk="Key R Part 5",
   lt="Lạc trong trung tâm thương mại", ltask="MCQ 5 câu: gạch keyword, dự đoán từ cho từng phương án", lk="Key L Part 3",
   sf="Hỏi & chỉ đường, dịch vụ trong thị trấn", sk="Chức năng giao tiếp", su="Can you tell me how to get to…? turn left/right, go straight on, opposite, on your right",
   wf="Review cửa hàng yêu thích", wk="Key W Part 6", we="Lập dàn ý bằng spidergram; The best/worst thing is…; so sánh hơn/nhất",
   pc={3:"PC 4A: Definitions quiz – shopping", 4:"PC 4B: Thảo luận chọn cửa hàng – so sánh hơn/nhất", 5:"PC 4C: Hội thoại chỉ đường"}),
 5: dict(start=38, L=59, uc="69", gf=136,
   G1="Past continuous (was/were + V-ing)", G1s="Past continuous",
   G2="Past continuous + past simple (when / while)", G2s="Past continuous + past simple",
   rt="Những rạp chiếu phim khác lạ", rtask="Matching 7 câu / 3 đoạn: đọc câu hỏi trước, gạch keyword", rk="Key R Part 2",
   lt="Lễ hội âm nhạc", ltask="MCQ tranh 5 câu: xem tranh trước, ghi từ khoá", lk="Key L Part 1",
   sf="Hoạt động giải trí cuối tuần – nói cảm nhận & lý do", sk="Key S Part 2 (Phase 1)", su="I love… because…; I don't really like…; Which do you like best?",
   wf="Truyện: điện thoại reo trong rạp phim", wk="Key W Part 7 (3 tranh, 35+ từ)", we="Mốc thời gian Last Saturday / A few seconds later / In the end; đặt tiêu đề",
   pc={3:"PC 5A: Survey đánh giá phim", 4:"PC 5B: Ghép thẻ past continuous + past simple", 6:"PC 5C: Info gap Right/Wrong (Key R&W)"}),
 6: dict(start=46, L=71, uc="81–82", gf=138,
   G1="be going to (kế hoạch) vs will (dự đoán)", G1s="be going to",
   G2="Present continuous for future arrangements", G2s="Present continuous for future arrangements",
   rt="Phỏng vấn một bạn teen hay đi du lịch", rtask="MCQ 5 câu: câu hỏi theo thứ tự bài", rk="Key R Part 3",
   lt="Kỳ nghỉ của người thân & phương tiện", ltask="Matching (2 người nói, 2 phương án thừa)", lk="Key L Part 5",
   sf="Hỏi & nói về kế hoạch tương lai, kỳ nghỉ", sk="Key S Part 1", su="What are you going to…? What about you? That sounds great! / Lucky you!",
   wf="Email kể về chuyến đi của trường", wk="Key W Part 6", we="Giới từ to/by/at/in/on; travel vs journey vs trip; trả lời đủ 3 ý",
   pc={2:"PC 6A: Info gap will/going to", 3:"PC 6B: Domino collocations du lịch", 6:"PC 6C: Ghép quảng cáo – email chuyến đi"}),
 7: dict(start=57, L=83, uc="93–94", gf=140,
   G1="can / could – ability & possibility", G1s="can / could – ability & possibility",
   G2="have to / don't have to / had to; must", G2s="have to / don't have to / had to; must",
   rt="Chương trình thể thao ở trường", rtask="Multiple-choice cloze 6 câu: xét từ trước/sau chỗ trống, collocation", rk="Key R Part 4",
   lt="Thể thao", ltask="MCQ tranh 5 câu: nghe lần 1 chọn, lần 2 kiểm tra", lk="Key L Part 1",
   sf="Chuẩn bị đi tập – nhờ vả & đáp lời", sk="Chức năng giao tiếp", su="Can/Could I/you…, please? Sure / No problem / Sorry, but…",
   wf="Đoạn văn/email về môn thể thao hay sở thích mới", wk="Key W Part 6 (25+ từ)", we="Trạng từ cách thức (well, badly, fast, easily)",
   pc={2:"PC 7A: Survey can/could", 3:"PC 7B: Spinner play/go/do", 5:"PC 7C: Ghép câu hỏi – câu trả lời"}),
 8: dict(start=65, L=95, uc="105", gf=142,
   G1="Present perfect (trải nghiệm) vs past simple; past participles", G1s="Present perfect",
   G2="Present perfect + ever / never", G2s="Present perfect + ever / never",
   rt="National Mountain Day – những ngọn núi nổi tiếng", rtask="Matching 7 câu: gạch keyword trong câu hỏi", rk="Key R Part 2",
   lt="Động vật hoang dã, chuyến đi rừng", ltask="MCQ 3 phương án, 5 câu: cẩn thận bẫy", lk="Key L Part 3",
   sf="Hoạt động ngoài trời mọi thời tiết – nêu ý kiến", sk="Key S Part 2", su="I (don't) really think…; I'm not sure it's a good idea…; fun vs funny",
   wf="Email kể về kỳ nghỉ cho bạn nước ngoài", wk="Key W Part 6", we="very / really / a bit + adj; văn phong thân mật; đủ 3 ý, đúng số từ",
   pc={4:"PC 8B: Câu hỏi Have you ever…?; PC 8A: Đoán con vật – natural world", 6:"PC 8C: Cloze tin nhắn kỳ nghỉ – very/really/a bit"}),
 9: dict(start=73, L=107, uc="117", gf=144,
   G1="First conditional (If + present, will/won't)", G1s="First conditional",
   G2="should / shouldn't – lời khuyên", G2s="should / shouldn't – lời khuyên",
   rt="Tiny Kitchen – kênh nấu ăn tí hon", rtask="MCQ 5 câu: xác định đại từ it/they/this chỉ cái gì", rk="Key R Part 3",
   lt="Tin nhắn mời tiệc sinh nhật ở bể bơi", ltask="Gap-fill 5 chỗ: chép đúng chính tả phần được đánh vần", lk="Key L Part 2",
   sf="Hoạt động hằng ngày – chọn ý mình thích nhất", sk="Key S Part 2", su="I think… is the best because…; Which do you like best?",
   wf="Truyện tranh 'The perfect medicine'", wk="Key W Part 7 (35+ từ)", we="because (lý do) vs so (kết quả); Suddenly…; trả lời câu hỏi cho từng tranh để lập dàn ý",
   pc={3:"PC 9A: Thay từ trong hội thoại – food", 4:"PC 9B: Cho lời khuyên should/shouldn't", 6:"PC 9C: and/but/so/because trong truyện"}),
}

def K(s):  # "Key R Part 2" -> "KET R Part 2"
    return s.replace("Key ", "KET ")

def ic(rows):
    return [{"minutes": m, "activity": a, "category": c} for m, a, c in rows]

Q = "Quiz 10' đầu buổi (bài trước)"

def unit_sessions(n):
    d = U[n]; u = UNITS[n]; L = d["L"]; pc = d["pc"]
    base = dict(unit=f"U{n}", unit_title=u[1], global_skills="—")
    rp = K(d["rk"]).replace("KET ", "")
    S = []
    S.append(dict(type="Reading", sb_pages=f"{L}, {L+1}–{L+2}",
        focus=f"Lead-in chủ đề '{u[2]}' · Đọc: {d['rt']}", task=d["rtask"], ket_part=d["rk"], grammar="—",
        vocabulary="Từ khoá của bài đọc (pre-teach 8–10 từ)", can_do=f"Đọc hiểu ý chính & chi tiết; làm được dạng {K(d['rk'])}",
        before="Flashcard 8–10 từ của bài đọc (web)",
        in_class=ic([(10,"Quiz ôn bài trước / chữa Language Test unit trước","routine"),(10,f"Lead-in: ảnh & câu nói mở unit (SB p.{L})","book"),
          (10,"Power up + pre-teach 6–8 từ khoá","book"),(30,f"Đọc '{d['rt']}': gist → exam task + exam tip","book"),
          (10,"Sum up / Speak up: nói lại & liên hệ bản thân","book"),(25,f"Luyện thêm 1 bài KET {rp} cùng chủ đề (tính giờ) + chữa","extension"),
          (10,"Chốt can-do, giao bài trên web","routine")]),
        after="WB Reading; 1 bài đọc KET cùng dạng (web, tự chấm)"))
    S.append(dict(type="Grammar", sb_pages=f"{L+3}", focus=f"Grammar 1: {d['G1']}",
        task="Present (từ câu trong bài đọc) → controlled practice → open cloze → Speak up", ket_part="KET R Part 5 (open cloze)",
        grammar=d["G1"], vocabulary="Ôn từ bài đọc", can_do=f"Dùng đúng {d['G1s']} khi nói và viết",
        before="Video/slide ngữ pháp ngắn (Grammar presentation) + 5 câu tự kiểm tra",
        in_class=ic([(10,"Quiz từ vựng bài đọc","routine"),(10,"Noticing: tìm cấu trúc trong bài đọc","book"),
          (15,f"Present {d['G1']} (Grammar presentation: form · use · signal words)","book"),(20,f"Bài tập SB p.{L+3} + watch out","book"),
          (15,"Photocopiable / game ngữ pháp" if 2 in pc else "Game drill ngữ pháp (bảng nhóm)","extension"),
          (20,"KET Reading Part 5 (open cloze) + 5 câu Grammar file","extension"),(10,"Speak up: dùng cấu trúc nói về bản thân","book"),
          (5,"Chốt bài, giao bài","routine")]),
        after=f"WB Grammar 1; Grammar file SB p.{d['gf']}"))
    S.append(dict(type="Vocabulary", sb_pages=f"{L+4}, 146", focus=f"Vocabulary: {u[2]}",
        task="Lexical set → Explore language → collocation → dùng trong câu của mình", ket_part="KET R Part 4 (MC cloze) khi có",
        grammar="Ôn G1 trong ngữ cảnh", vocabulary=u[6], can_do="Nhớ và dùng được từ vựng chủ đề, collocation, quy tắc cấu tạo từ của unit",
        before="Wordwall/flashcard toàn bộ từ của trang Vocabulary",
        in_class=ic([(10,f"Quiz {d['G1s']}","routine"),(25,f"Vocabulary SB p.{L+4}: lexical set, nghĩa, phát âm","book"),
          (15,"Explore language (quy tắc cấu tạo từ / collocation)","book"),(15,"Extend vocabulary SB p.146","book"),
          (15,"Photocopiable từ vựng" if 3 in pc else "Game từ vựng (Wordwall/bảng nhóm)","extension"),
          (15,"KET Reading Part 4 (MC cloze) hoặc nói cá nhân hoá với từ mới","extension"),(10,"Chốt bài, giao bài (sổ từ vựng)","routine")]),
        after="WB Vocabulary; sổ từ vựng cá nhân (5 câu tự đặt)"))
    S.append(dict(type="Listening", sb_pages=f"{L+5}", focus=f"Nghe: {d['lt']} · Grammar 2", task=d["ltask"], ket_part=d["lk"],
        grammar=d["G2"], vocabulary="Từ trong audio script", can_do=f"Làm được dạng {K(d['lk'])}; dùng {d['G2s']}",
        before="Nghe trước 1 lần audio (không cần hiểu hết) + đoán nội dung",
        in_class=ic([(10,"Quiz từ vựng unit","routine"),(10,"Power up + dự đoán nội dung, loại thông tin","book"),
          (25,f"Nghe '{d['lt']}' 2 lần: {K(d['lk'])} + exam tip","book"),(10,"Khai thác audio script: từ, cụm, bẫy","extension"),
          (25,f"Grammar 2: {d['G2']} – present + bài tập SB p.{L+5}","book"),(15,"Photocopiable / Speak up Grammar 2","extension"),
          (10,"Chốt bài, giao deep listening","routine")]),
        after="WB Listening + Grammar 2; deep listening 10'/ngày (audio unit, shadowing)"))
    S.append(dict(type="Speaking", sb_pages=f"{L+6}", focus=f"Nói: {d['sf']}",
        task="Power up → nghe mẫu → Useful language → luyện cặp → mini exam task", ket_part=d["sk"], grammar="Ôn G1 + G2",
        vocabulary=d["su"], can_do=u[7], before="Chuẩn bị ý cho 3–5 câu hỏi của chủ đề",
        in_class=ic([(10,f"Quiz {d['G2s']}","routine"),(10,"Power up: khởi động chủ đề","book"),(20,"Nghe mẫu → điền Useful language","book"),
          (15,"Drill phát âm, ngữ điệu, câu mẫu","extension"),
          (25,f"Luyện cặp đổi bạn: {d['sf']}" + (" + photocopiable" if 5 in pc else ""),"book"),
          (15,f"Mô phỏng {K(d['sk'])} – GV quay & nhận xét 3–4 cặp","extension"),
          (10,f"Giao video nói + project nhóm ('{u[10]}')","routine")]),
        after="Quay video nói 1–2 phút nộp lên web"))
    S.append(dict(type="Writing", sb_pages=f"{L+7}–{L+8}", focus=f"Viết: {d['wf']}",
        task="Đọc bài mẫu → Explore language → lập dàn ý → viết nháp → Improve it (peer check)", ket_part=d["wk"],
        grammar=f"Explore language: {d['we']}", vocabulary="Từ vựng unit dùng trong bài viết", can_do=u[8],
        before="Đọc bài mẫu, gạch chân cấu trúc cần dùng",
        in_class=ic([(5,"Warm-up","routine"),(15,"Power up + đọc bài mẫu, phân tích đề","book"),(20,f"Explore language: {d['we']}","book"),
          (10,"Photocopiable viết" if 6 in pc else "Luyện câu với cấu trúc mới","extension"),
          (10,"Lập dàn ý (spidergram / trả lời câu hỏi gợi ý)","book"),(25,f"Viết nháp tính giờ: {d['wf']} ({K(d['wk'])})","book"),
          (15,"Improve it: chấm chéo theo checklist","book"),(5,"Giao bản final nộp web","routine")]),
        after="Viết bản final nộp web (GV chấm theo rubric KET)"))
    S.append(dict(type="KET Lab", sb_pages="Workbook + tài liệu KET", focus="Luyện đề KET theo chủ đề unit + chữa bài viết S6",
        task="Làm đề có tính giờ → chữa → phân tích bẫy; trả bài viết, viết lại câu lỗi", ket_part=f"{d['rk']} · {d['lk']} · {d['wk']}",
        grammar="Sửa lỗi ngữ pháp G1, G2 thường gặp", vocabulary="Từ vựng unit trong đề", can_do="Áp dụng chiến lược làm bài đã học trong unit vào đề thật",
        before="—",
        in_class=ic([(10,"Trả bài viết S6: lỗi chung","extension"),(10,"Viết lại 3 câu sai nhiều nhất","extension"),
          (40,"Skills Test A (Reading + Listening + Writing) tính giờ","test"),(15,"Chữa, phân tích lý do sai theo từng part","extension"),
          (25,f"Unit check SB p.{d['uc']}: Practice + Review","book"),(5,"Giao bài KET làm thêm","routine")]),
        after="Bài KET cùng dạng nhưng khó hơn (web); HS yếu: Skills Test C (bản hỗ trợ)",
        assessment=f"Gold_Exp_A2_U{n}_Skills_Test_A"))
    S.append(dict(type="Project & Check", sb_pages=f"{L+9}, {d['uc']}", focus=f"Switch on: video '{u[10]}' · Project · Unit check",
        task=f"Project: {u[11]}", ket_part="—", grammar=f"Ôn {d['G1s']} + {d['G2s']}", vocabulary="Tổng ôn từ vựng unit",
        can_do="Dùng tiếng Anh để hoàn thành sản phẩm nhóm; tự đánh giá unit", before="Nhóm chuẩn bị project (giao từ S5)",
        in_class=ic([(10,"Game ôn từ vựng & ngữ pháp unit","routine"),(15,f"Switch on: xem video '{u[10]}' + câu hỏi hiểu","book"),
          (35,f"Trình bày project ({u[11]}) – 4–5 nhóm × 6' + nhận xét chéo","book"),(10,"Independent learning: tự đánh giá","book"),
          (30,f"Language Test A Unit {n}","test"),(5,"Chốt unit","routine")]),
        after="Làm lại phần sai Unit check; HS < 70%: Language Test B (web)", global_skills=u[12],
        assessment=f"Gold_Exp_A2_U{n}_Lang_Test_A"))
    out = []
    for i, s in enumerate(S, 1):
        r = dict(base); r.update(s)
        r.setdefault("assessment", Q)
        r["photocopiable"] = pc.get(i, "—")
        r["session_id"] = f"KO-U{n:02d}-S{i}"
        r["session_no"] = d["start"] + i - 1
        out.append(r)
    return out

def sp(sid, no, unit, utitle, typ, focus, in_class, sb="—", task="—", ket="—", grammar="—", vocab="—", can="—", before="—", after="—", assess="—"):
    return dict(session_id=sid, session_no=no, unit=unit, unit_title=utitle, type=typ, sb_pages=sb, focus=focus, task=task,
                ket_part=ket, grammar=grammar, vocabulary=vocab, can_do=can, before=before, in_class=ic(in_class), after=after,
                photocopiable="—", global_skills="—", assessment=assess)

R, B, E, T = "routine", "book", "extension", "test"
U10v = "Playground, leisure centre; house types; room adjectives"
special = [
 sp("KO-OR-S1",1,"Orientation","Bắt đầu khoá","Orientation","Định hướng khoá học · kiểm tra đầu vào · làm quen web",
    [(15,"Ice-breaker, làm quen lớp",R),(10,"Giới thiệu lộ trình, KET, cách học",E),(50,"Diagnostic test (R+W+L rút gọn)",T),(20,"Hướng dẫn tài khoản web, thói quen học mỗi ngày",E),(10,"Đặt 3 mục tiêu cá nhân",R)],
    task="Diagnostic test (R+W+L) + phỏng vấn nói 3'", ket="KET format rút gọn", can="Biết mục tiêu khoá, cách học & nộp bài trên web",
    after="Hoàn thiện hồ sơ học tập trên web; đặt 3 mục tiêu cá nhân", assess="Diagnostic test"),
 sp("KO-ST-S1",2,"Starter","This is me!","Starter","Gia đình & thông tin cá nhân · đánh vần",
    [(10,"Warm-up tên & sở thích",R),(15,"Alphabet, đánh vần tên/email",B),(20,"Nghe gia đình Emma + family tree",B),(15,"Vẽ & giới thiệu family tree",B),(20,"Thẻ thông tin cá nhân: đọc & hỏi đáp",B),(15,"Phỏng vấn cặp kiểu KET S Part 1",E),(10,"Giao video giới thiệu bản thân",R)],
    sb="6–7", task="Nghe về gia đình Emma → vẽ family tree → hỏi đáp thông tin cá nhân", ket="Nền KET S Part 1", grammar="be, have got, present simple",
    vocab="Family; first name, surname, postcode, nationality, date of birth; Mr/Mrs/Ms; alphabet", can="Giới thiệu bản thân & gia đình; đánh vần tên, email",
    before="Wordwall: family + thông tin cá nhân", after="Quay video giới thiệu bản thân 1'"),
 sp("KO-ST-S2",3,"Starter","This is me!","Starter","Classroom language · đồ vật lớp học · quần áo",
    [(10,"Quiz đánh vần & gia đình",R),(20,"Classroom language + hội thoại lớp học",B),(15,"Đồ vật lớp học, quần áo",B),(25,"there is/are, countable/uncountable, some/any",B),(15,"Game: 'Is there…? / Are there any…?' về phòng học",E),(15,"Unit check Starter",B),(5,"Giao bài",R)],
    sb="8–10", task="Classroom language → there is/are + some/any về phòng học", grammar="there is/are; countable/uncountable; a/an/some/any",
    vocab="Classroom instructions; classroom objects; clothes", can="Hiểu & dùng ngôn ngữ lớp học; hỏi 'Is there…? / Are there any…?'",
    before="Wordwall classroom language", after="WB Starter; Grammar file p.127"),
 sp("KO-RV1-S1",28,"Review 1","Units 1–3","Review","Tổng ôn U1–3: hệ thống ngữ pháp & từ vựng",
    [(10,"Quiz tổng hợp",R),(25,"Mind map các thì theo nhóm (form · use · signal)",E),(20,"Game ôn từ vựng U1–3",E),(20,"Sửa lỗi điển hình từ bài viết U1–3",E),(25,"Luyện nói KET Part 1 theo cặp",E),(5,"Giao bài ôn",R)],
    grammar="Present simple/continuous, much/many, past simple", vocab="U1–3", can="Tự hệ thống hoá kiến thức thành mind map",
    before="Quiz tổng hợp U1–3 (web)", after="Ôn theo danh sách lỗi cá nhân"),
 sp("KO-RV1-S2",29,"Review 1","Units 1–3","Test","Progress test 1",
    [(5,"Ổn định, hướng dẫn",R),(60,"Progress test 1: R+W+L rút gọn",T),(35,"Speaking theo cặp (5'/cặp); HS chờ làm bài tự học",T),(5,"Thu bài",R)],
    task="R+W+L (KET format rút gọn) + nói theo cặp", ket="KET R/W/L/S", after="Nhận báo cáo kết quả trên web", assess="Progress test 1"),
 sp("KO-MT-S1",54,"Mid-course","Units 1–6","Review","Ôn giữa khoá U1–6",
    [(10,"Quiz",R),(40,"Ôn theo trạm: grammar · vocab · writing · speaking",E),(45,"Luyện 1 đề KET rút gọn + chữa",E),(10,"Giao đề ôn",R)],
    grammar="Toàn bộ thì đã học + so sánh + tương lai", vocab="U1–6", can="Tự tin với format bài thi", before="Đề ôn online", after="Đề ôn giữa khoá"),
 sp("KO-MT-S2",55,"Mid-course","Units 1–6","Test","Kiểm tra giữa khoá (R+W+L)",
    [(5,"Hướng dẫn",R),(60,"Reading & Writing (KET format)",T),(35,"Listening (KET format)",T),(5,"Thu bài",R)], ket="KET format", assess="Mid-course test"),
 sp("KO-MT-S3",56,"Mid-course","Units 1–6","Test","Speaking test giữa khoá + trả bài & kế hoạch cá nhân",
    [(60,"Speaking test theo cặp (~8–10'/cặp); HS chờ làm bài tự học",T),(30,"Trả bài viết, chữa lỗi chung",E),(15,"Mỗi HS đặt 2 mục tiêu nửa sau khoá",R)],
    ket="KET S Part 1–2", after="Báo cáo phụ huynh giữa khoá", assess="Mid-course speaking"),
 sp("KO-RV2-S1",81,"Review 2","Units 7–9","Review","Tổng ôn U7–9",
    [(10,"Quiz tổng hợp",R),(25,"Mind map: past simple vs present perfect, điều kiện loại 1, modal",E),(20,"Game ôn từ vựng U7–9",E),(20,"Sửa lỗi điển hình",E),(25,"Luyện nói KET Part 2",E),(5,"Giao bài ôn",R)],
    grammar="can/could, have to, present perfect, first conditional, should", vocab="U7–9", can="Phân biệt past simple vs present perfect; dùng câu điều kiện loại 1",
    before="Quiz tổng hợp U7–9", after="Ôn theo danh sách lỗi cá nhân"),
 sp("KO-RV2-S2",82,"Review 2","Units 7–9","Test","Progress test 2",
    [(5,"Ổn định",R),(60,"Progress test 2: R+W+L",T),(35,"Speaking theo cặp",T),(5,"Thu bài",R)], task="R+W+L + nói theo cặp", ket="KET R/W/L/S", assess="Progress test 2"),
 sp("KO-U10-S1",83,"U10","The place to be!","Reading","Đọc thông báo/biển báo ngắn (MCQ) + 'Paris beaches' (MC cloze)",
    [(10,"Quiz",R),(10,"Lead-in SB p.119",B),(15,"Đọc 6 thông báo ngắn (SB p.120) – KET R Part 1",B),(20,"'Paris beaches' MC cloze (SB p.121) – KET R Part 4",B),(40,"Đề thật R Part 2 + 3 tính giờ + chữa",E),(10,"Giao bài",R)],
    sb="120–121", task="Exam strategy → làm bài tính giờ → chữa & phân tích bẫy", ket="KET R Part 1 & 4", grammar="Ôn tổng hợp", vocab=U10v,
    can="Nhận diện loại văn bản, gạch keyword", before="Bài luyện dạng tương ứng", after="1 part KET tương ứng (web)"),
 sp("KO-U10-S2",84,"U10","The place to be!","Listening","5 đoạn hội thoại ngắn – MCQ chữ",
    [(10,"Quiz",R),(25,"5 hội thoại ngắn MCQ (SB p.122)",B),(10,"Speak up: quà & sinh nhật",B),(50,"Đề thật L Part 2, 4, 5 tính giờ + chữa",E),(10,"Giao bài",R)],
    sb="122", task="Exam strategy → làm bài tính giờ → chữa & phân tích bẫy", ket="KET L Part 1/3", grammar="Ôn tổng hợp", vocab=U10v,
    can="Nắm thông tin chính trong hội thoại ngắn", before="Bài luyện dạng tương ứng", after="1 part KET tương ứng (web)"),
 sp("KO-U10-S3",85,"U10","The place to be!","Speaking","Chủ đề nhà ở – trả lời ngắn & mở rộng ('Tell me about…'); too / not enough",
    [(10,"Quiz",R),(30,"Phỏng vấn chủ đề nhà ở (SB p.123) – trả lời ngắn & mở rộng",B),(15,"Speaking extra: too / not enough",B),(40,"Mock S Part 1 + 2 theo cặp, GV chấm theo tiêu chí",E),(10,"Giao video",R)],
    sb="123", task="Exam strategy → làm bài tính giờ → chữa & phân tích bẫy", ket="KET S Part 1", grammar="Ôn tổng hợp", vocab=U10v,
    can="Trả lời câu hỏi chủ đề và mở rộng ý", before="Bài luyện dạng tương ứng", after="1 part KET tương ứng (web)"),
 sp("KO-U10-S4",86,"U10","The place to be!","Writing","Email mời bạn (3 ý) + truyện 3 tranh (adj + noun, từ trái nghĩa)",
    [(5,"Warm-up",R),(30,"Email mời bạn 3 ý (SB p.124) – W Part 6",B),(30,"Truyện 3 tranh: adj + noun, từ trái nghĩa – W Part 7",B),(30,"Chấm chéo theo tiêu chí KET + viết lại",E),(10,"Giao bài",R)],
    sb="124", task="Exam strategy → làm bài tính giờ → chữa & phân tích bẫy", ket="KET W Part 6 & 7", grammar="Ôn tổng hợp", vocab=U10v,
    can="Viết email mời + truyện theo tranh đạt tiêu chí KET", before="Bài luyện dạng tương ứng", after="1 part KET tương ứng (web)"),
 sp("KO-FN-S1",87,"Final","Units 1–10","Test","KET mock test (R&W + L)",
    [(5,"Hướng dẫn",R),(60,"KET mock: Reading & Writing",T),(35,"KET mock: Listening",T),(5,"Thu bài",R)], ket="KET full", assess="KET mock"),
 sp("KO-FN-S2",88,"Final","Units 1–10","Review","Chữa mock + Speaking mock",
    [(30,"Trả mock, phân tích kết quả theo part",E),(60,"Speaking mock theo cặp",T),(15,"Lập kế hoạch ôn cá nhân",R)], ket="KET S"),
 sp("KO-FN-S3",89,"Final","Units 1–10","Review","Ôn cuối khoá 1: grammar foundation (toàn bộ A2)",
    [(10,"Quiz",R),(45,"Ôn grammar spine theo trạm",E),(40,"Luyện R Part 4–5 + chữa",E),(10,"Giao bài",R)], grammar="Toàn bộ grammar spine"),
 sp("KO-FN-S4",90,"Final","Units 1–10","Review","Ôn cuối khoá 2: từ vựng + writing Part 6–7",
    [(10,"Quiz",R),(30,"Game từ vựng U1–10",E),(50,"Viết Part 6 + Part 7 tính giờ, chấm chéo",E),(15,"Chiến lược ngày thi",R)], vocab="U1–10"),
 sp("KO-FN-S5",91,"Final","Units 1–10","Test","Kiểm tra cuối khoá (R+W+L)",
    [(5,"Hướng dẫn",R),(60,"Final test: Reading & Writing",T),(35,"Final test: Listening",T),(5,"Thu bài",R)], ket="KET format", assess="Gold_Exp_A2 End-of-Year test"),
 sp("KO-FN-S6",92,"Final","Units 1–10","Test","Speaking test cuối khoá",
    [(90,"Final speaking test theo cặp",T),(15,"Tổng kết, khảo sát cuối khoá",R)], ket="KET S Part 1–2", assess="Final speaking"),
 sp("KO-FN-S7",93,"Final","Units 1–10","Feedback","Trả kết quả · lộ trình cá nhân lên Boost (B1)",
    [(10,"Warm-up",R),(40,"Trả bài, chữa lỗi chung",E),(40,"Xem hồ sơ tiến bộ trên web, đặt mục tiêu B1",E),(15,"Hướng dẫn chuẩn bị lên Boost",R)]),
 sp("KO-FN-S8",94,"Final","Units 1–10","Showcase","Showcase: trưng bày project & portfolio, trao chứng nhận",
    [(15,"Chuẩn bị",R),(70,"Showcase: trình bày sản phẩm, portfolio",E),(20,"Trao chứng nhận",R)]),
]

sessions = list(special)
for n in range(1, 10):
    sessions += unit_sessions(n)
sessions.sort(key=lambda s: s["session_no"])
for s in sessions:
    s["week"] = math.ceil(s["session_no"] / 2)

GAMES = [
 {"grade":"Lớp 5","age":"10–11 tuổi","stage":"Chuyển tiếp từ tiểu học",
  "profile":"Các em vẫn thích vận động, màu sắc, phần thưởng tức thì và luật chơi đơn giản. Khả năng tập trung khoảng 10–15 phút.",
  "games":[["Lật thẻ ghép cặp (Memory/Matching)","Ghép từ với hình, từ với nghĩa."],["Vòng quay may mắn (Spin the wheel)","Quay ra chủ đề hoặc câu hỏi, có điểm thưởng."],
   ["Kéo co kiến thức / đua xe theo đội","Trả lời đúng thì đội tiến lên, rất hợp để ôn từ vựng."],["Tìm từ trong bảng (Word search), đoán chữ (Hangman)",""],
   ["Kéo thả hình vào đúng nhóm","Phân loại animals, food, jobs."],["Nghe và chạm (Listen & Click)","Nghe audio rồi chọn hình đúng."],["Trò vận động","Simon says, Run & touch, Hot potato."]]},
 {"grade":"Lớp 6","age":"11–12 tuổi","stage":"Mới vào THCS",
  "profile":"Các em vẫn thích thi đua theo đội nhưng muốn được đối xử “lớn” hơn. Bắt đầu thích thử thách có độ khó tăng dần.",
  "games":[["Quiz thi đua thời gian thực (kiểu Kahoot/Quizizz)","Có bảng xếp hạng."],["Ô chữ (Crossword)","Và ô chữ có từ khóa hàng dọc."],
   ["Sắp xếp câu (Sentence scramble)","Kéo thả từ để tạo câu đúng ngữ pháp."],["Điền vào chỗ trống có gợi ý","Gap-fill với word bank."],
   ["Hái hoa dân chủ / mở ô bí mật","Mỗi ô là một câu hỏi hoặc một phần thưởng."],["Bingo từ vựng, Board game xúc xắc","Đi đến ô nào thì làm nhiệm vụ ở ô đó."]]},
 {"grade":"Lớp 7","age":"12–13 tuổi","stage":"Bắt đầu tuổi teen",
  "profile":"Các em thích hợp tác nhóm, thích yếu tố hài hước và có tính “chiến thuật”. Bắt đầu ngại thể hiện cá nhân trước lớp.",
  "games":[["Ai là triệu phú / Rung chuông vàng","Có quyền trợ giúp, câu hỏi tăng độ khó."],["Đuổi hình bắt chữ, Pictionary, Charades","Đoán từ qua hình vẽ hoặc diễn tả."],
   ["Taboo","Mô tả từ mà không được dùng các từ cấm, rất tốt cho kỹ năng nói."],["Truy tìm kho báu (Escape room mini)","Giải chuỗi câu đố để mở khóa."],
   ["Tìm lỗi sai (Error hunt)","Các đội thi tìm lỗi trong đoạn văn."],["Đọc nhanh tìm thông tin","Running dictation, Scavenger reading."]]},
 {"grade":"Lớp 8","age":"13–14 tuổi","stage":"Tuổi teen rõ nét",
  "profile":"Các em coi trọng hình ảnh với bạn bè, thích chủ đề thực tế, mạng xã hội, tranh luận và được lựa chọn.",
  "games":[["Escape room đầy đủ","Nhiều kỹ năng (nghe, đọc, ngữ pháp) trong một nhiệm vụ có cốt truyện."],["Two truths and a lie & Find someone who",""],
   ["Tranh luận dạng trò chơi","Balloon debate, Agree/Disagree corners."],["Mô phỏng tình huống","Role-play cards, Mystery game: giải vụ án bằng manh mối tiếng Anh."],
   ["Đặt cược ngữ pháp (Grammar auction)","Đấu giá câu đúng."],["Video tương tác","Xem đoạn ngắn, video tự dừng để trả lời câu hỏi."]]},
 {"grade":"Lớp 9","age":"14–15 tuổi","stage":"Định hướng thi cử",
  "profile":"Các em có mục tiêu rõ (thi vào 10, KET/PET), thích game “có ích”, ngắn gọn, mang tính chiến lược hoặc tự đánh giá.",
  "games":[["Quiz theo format đề thi","Luyện từng dạng bài KET/PET hoặc đề vào 10, có tính giờ và chấm điểm ngay."],["Jeopardy theo chủ điểm","Các đội tự chọn độ khó và mức điểm."],
   ["Thử thách tốc độ (Speed challenge)","Sentence transformation, word formation trong 60 giây."],["Flashcards có lặp lại ngắt quãng","Dùng làm bài tập về nhà hằng ngày."],
   ["Thử thách nói 1 phút (Just a minute)","Nói liên tục về một chủ đề."],["Dự án dạng game (Gamified project)","Tích điểm qua nhiệm vụ trong cả tuần."]]},
]
GAME_NOTES = [
 "Với lứa tuổi nhỏ, chọn game ngắn, nhiều hình và tiếng. Càng lên lớp lớn, game càng nên gắn với kỹ năng và mục tiêu thi.",
 "Ở các lớp tuổi teen (7–9), ưu tiên chơi theo đội thay vì gọi cá nhân, để các em không ngại.",
 "Vì lớp ở IVY được xếp theo năng lực CEFR chứ không theo khối, thầy/cô chọn hình thức game theo độ tuổi và nội dung câu hỏi theo trình độ. Ví dụ, một lớp Bridge-up toàn học sinh lớp 8 vẫn nên chơi Escape room, Mystery game, nhưng dùng từ vựng A1.",
]

DATA = {
  "center": {"name": "IVY", "audience": "Học sinh THCS (lớp 6–9)",
     "model": ["Xếp lớp theo năng lực 4 kỹ năng (CEFR), không theo khối lớp",
               "2 buổi/tuần tại trung tâm, mỗi buổi 105 phút",
               "Bài tập về nhà hằng ngày trên web",
               "Định hướng chứng chỉ Cambridge for Schools (KET, PET)",
               "Khoá học có thể khai giảng bất kỳ thời điểm nào trong năm",
               "Mục tiêu ngữ pháp: xây nền tảng (grammar foundation), không chạy theo điểm kiểm tra ở trường"]},
  "levels": LEVELS,
  "course": COURSE,
  "units": [dict(zip(UKEYS, u)) for u in UNITS],
  "grammar_spine": [dict(zip(["grammar","unit","first_session","review","goal"], g)) for g in SPINE],
  "sessions": sessions,
  "games": [dict(g, games=[{"name":a,"desc":b} for a,b in g["games"]]) for g in GAMES],
  "game_notes": GAME_NOTES,
}

if __name__ == "__main__":
    import os
    os.makedirs("site/data", exist_ok=True)
    with open("site/data/data.js", "w", encoding="utf-8") as f:
        f.write("// Dữ liệu website – sửa nội dung giáo trình ở đây\nwindow.IVY_DATA = ")
        json.dump(DATA, f, ensure_ascii=False, indent=1)
        f.write(";\n")
    print(len(sessions), "sessions")
    bad = [s["session_id"] for s in sessions if sum(x["minutes"] for x in s["in_class"]) != 105]
    print("not 105 min:", bad)
    nos = [s["session_no"] for s in sessions]
    print("numbering ok:", nos == list(range(1, 95)))
