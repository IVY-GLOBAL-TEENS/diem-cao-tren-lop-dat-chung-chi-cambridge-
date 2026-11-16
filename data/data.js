// Dữ liệu website IVY Teen – sinh tự động từ giáo trình các khoá
window.IVY_DATA = {
 "center": {
  "name": "IVY",
  "audience": "Học sinh THCS (lớp 6–9)",
  "model": [
   "Xếp lớp theo năng lực 4 kỹ năng (CEFR), không theo khối lớp",
   "2 buổi/tuần tại trung tâm, mỗi buổi 105 phút",
   "Bài tập về nhà hằng ngày trên web",
   "Định hướng chứng chỉ Cambridge for Schools (KET, PET)",
   "Khoá học có thể khai giảng bất kỳ thời điểm nào trong năm",
   "Mục tiêu ngữ pháp: xây nền tảng (grammar foundation), không chạy theo điểm kiểm tra ở trường"
  ]
 },
 "courses": [
  {
   "id": "fd",
   "name": "Foundation",
   "cefr": "Pre A1",
   "book": "—",
   "exam": "fd",
   "status": "updating",
   "note": "Nền tảng cho học sinh mới bắt đầu"
  },
  {
   "id": "bu",
   "name": "Bridge-up",
   "cefr": "Pre A1 – A1",
   "book": "Gold Experience A1 (2nd ed.)",
   "exam": "a1",
   "status": "ready",
   "ketbank": true,
   "note": "94 buổi (82 buổi học + 12 sự kiện công dân toàn cầu), hướng tới A2 Key for Schools",
   "session_minutes": 105,
   "sessions_per_week": 2,
   "total_sessions": 94,
   "cat": {
    "lang": "Học ngôn ngữ",
    "input": "Đầu vào",
    "output": "Đầu ra",
    "fluency": "Trôi chảy",
    "test": "Kiểm tra",
    "routine": "Khác"
   },
   "rhythm": "Mỗi unit 5 buổi: Đọc + Ngữ pháp 1 → Nghe + Từ vựng → Nói + Ngữ pháp 2 → Viết → Ôn tập & Dự án. Hết mỗi học phần có 4 buổi củng cố.",
   "units": [
    {
     "unit": "Starter",
     "title": "Hello!",
     "theme": "Gia đình, quốc tịch, ngày tháng",
     "sessions": "1–3",
     "grammar": "to be, tính từ sở hữu, sở hữu cách 's",
     "hp": "1"
    },
    {
     "unit": "U1",
     "title": "Come in",
     "theme": "Nhà và đồ vật",
     "sessions": "5–9",
     "grammar": "there is/are, giới từ nơi chốn, have got",
     "hp": "1"
    },
    {
     "unit": "U2",
     "title": "What a week!",
     "theme": "Hoạt động hằng ngày, môn học",
     "sessions": "11–15",
     "grammar": "Hiện tại đơn, nói giờ, in/on/at",
     "hp": "1"
    },
    {
     "unit": "U3",
     "title": "Animal magic",
     "theme": "Động vật, thiên nhiên",
     "sessions": "21–25",
     "grammar": "Trạng từ tần suất, từ để hỏi Wh-",
     "hp": "2"
    },
    {
     "unit": "U4",
     "title": "Let's explore",
     "theme": "Thị trấn, giao thông",
     "sessions": "27–31",
     "grammar": "Mệnh lệnh, must/mustn't, can, đại từ tân ngữ",
     "hp": "2"
    },
    {
     "unit": "U5",
     "title": "Fun with food",
     "theme": "Đồ ăn, thời tiết, lễ hội",
     "sessions": "33–37",
     "grammar": "Hiện tại tiếp diễn, some/any, much/many",
     "hp": "2"
    },
    {
     "unit": "U6",
     "title": "Back in time",
     "theme": "Đồ vật xưa và nay",
     "sessions": "43–47",
     "grammar": "was/were, quá khứ đơn có quy tắc",
     "hp": "3"
    },
    {
     "unit": "U7",
     "title": "Bright sparks",
     "theme": "Nghề nghiệp, thành tựu",
     "sessions": "49–53",
     "grammar": "Quá khứ bất quy tắc, câu hỏi Wh- quá khứ, when",
     "hp": "3"
    },
    {
     "unit": "U8",
     "title": "Top to toe",
     "theme": "Ngoại hình, trang phục",
     "sessions": "59–63",
     "grammar": "So sánh hơn, so sánh nhất",
     "hp": "4"
    },
    {
     "unit": "U9",
     "title": "School's out",
     "theme": "Thể thao, sức khoẻ, kỳ nghỉ",
     "sessions": "65–69",
     "grammar": "be going to, like + V-ing, want to",
     "hp": "4"
    },
    {
     "unit": "U10",
     "title": "Films and friends",
     "theme": "Phim ảnh",
     "sessions": "71–72",
     "grammar": "Ôn tổng hợp, nêu ý kiến",
     "hp": "4"
    }
   ],
   "modules": [
    {
     "name": "1 · Bản thân và hiện tại đơn",
     "sessions": "1–20 (1–10)",
     "units": "Starter, 1, 2",
     "grammar": "to be, sở hữu, there is/are, have got, hiện tại đơn, giới từ, mạo từ, số nhiều",
     "vocab": "Gia đình, quốc gia, nhà và đồ vật, hoạt động hằng ngày, giờ, môn học",
     "ket": "R&W Part 1, 4, 5, 6 · Listening Part 1, 2 · Speaking Part 1",
     "events": "E1 Hello, World! · E2 Tiny House Challenge · E3 Class Leaders Camp"
    },
    {
     "name": "2 · Hiện tại mở rộng",
     "sessions": "21–42 (11–21)",
     "units": "3, 4, 5",
     "grammar": "Trạng từ tần suất, từ để hỏi, mệnh lệnh, must, can, đại từ tân ngữ, hiện tại tiếp diễn, đếm được – không đếm được",
     "vocab": "Động vật, thiên nhiên, thị trấn, giao thông, đồ ăn, thời tiết",
     "ket": "R&W Part 2, 3 · Listening Part 5 · Speaking Part 2 (phase 1)",
     "events": "E4 Wildlife Heroes Talk Show · E5 Safe City Walk · E6 Festivals Around the World"
    },
    {
     "name": "3 · Quá khứ",
     "sessions": "43–58 (22–29)",
     "units": "6, 7",
     "grammar": "was/were, quá khứ đơn có và bất quy tắc, câu hỏi quá khứ, when, từ chỉ trình tự",
     "vocab": "Đồ vật xưa và nay, hoạt động, nghề nghiệp, thành tựu",
     "ket": "R&W Part 7 · Listening Part 3 · Speaking Part 2 (phase 2)",
     "events": "E7 Heritage Detectives · E8 Young Changemakers"
    },
    {
     "name": "4 · So sánh và tương lai",
     "sessions": "59–76 (30–38)",
     "units": "8, 9, 10",
     "grammar": "So sánh hơn, so sánh nhất, be going to, like/love + V-ing, want to + V",
     "vocab": "Cơ thể, ngoại hình, trang phục, thể thao, sức khỏe, phim ảnh",
     "ket": "Listening Part 4 · làm đề KET đầy đủ lần đầu",
     "events": "E9 Kindness Week · E10 Sport and Survival Day"
    },
    {
     "name": "5 · Luyện thi KET",
     "sessions": "77–94 (39–47)",
     "units": "Đề KET",
     "grammar": "Cấu trúc A2 ở mức nhận biết; tổng ôn 25 điểm",
     "vocab": "Từ vựng thường gặp trong đề",
     "ket": "Luyện đủ 14 part, 2 lần thi thử",
     "events": "E11 Community Action: Zero Food Waste · E12 Mini Film Festival"
    }
   ],
   "grammar": {
    "cols": [
     "#",
     "Điểm ngữ pháp",
     "Học phần",
     "Mức cuối khoá"
    ],
    "rows": [
     [
      "1",
      "to be; đại từ nhân xưng",
      "1",
      "Tự động"
     ],
     [
      "2",
      "Tính từ sở hữu, sở hữu cách 's",
      "1",
      "Tự động"
     ],
     [
      "3",
      "this, that, these, those",
      "1",
      "Tự động"
     ],
     [
      "4",
      "a/an/the; danh từ số nhiều",
      "1",
      "Có kiểm soát"
     ],
     [
      "5",
      "there is/are + some/any",
      "1",
      "Tự động"
     ],
     [
      "6",
      "have got",
      "1",
      "Có kiểm soát"
     ],
     [
      "7",
      "Hiện tại đơn: khẳng định, phủ định, câu hỏi, -s ngôi thứ ba",
      "1",
      "Tự động"
     ],
     [
      "8",
      "Giới từ nơi chốn; in/on/at chỉ thời gian",
      "1",
      "Có kiểm soát"
     ],
     [
      "9",
      "Trạng từ tần suất và vị trí trong câu",
      "2",
      "Tự động"
     ],
     [
      "10",
      "Từ để hỏi Wh-",
      "2",
      "Tự động"
     ],
     [
      "11",
      "Câu mệnh lệnh; must/mustn't",
      "2",
      "Có kiểm soát"
     ],
     [
      "12",
      "can/can't; đại từ tân ngữ",
      "2",
      "Tự động (can) · Có kiểm soát (đại từ tân ngữ)"
     ],
     [
      "13",
      "Hiện tại tiếp diễn; phân biệt với hiện tại đơn",
      "2",
      "Có kiểm soát"
     ],
     [
      "14",
      "Đếm được – không đếm được; a/some/any; much/many",
      "2",
      "Có kiểm soát"
     ],
     [
      "15",
      "was/were; there was/were",
      "3",
      "Tự động"
     ],
     [
      "16",
      "Quá khứ đơn có quy tắc, phát âm -ed",
      "3",
      "Tự động"
     ],
     [
      "17",
      "Quá khứ đơn bất quy tắc (khoảng 40 động từ thường gặp)",
      "3",
      "Có kiểm soát"
     ],
     [
      "18",
      "Câu hỏi và phủ định ở quá khứ",
      "3",
      "Có kiểm soát"
     ],
     [
      "19",
      "Liên từ and, but, because, so, when; first, then, after that",
      "2–3",
      "Tự động (and, but, because) · Có kiểm soát (so, when)"
     ],
     [
      "20",
      "So sánh hơn",
      "4",
      "Có kiểm soát"
     ],
     [
      "21",
      "So sánh nhất",
      "4",
      "Có kiểm soát"
     ],
     [
      "22",
      "be going to",
      "4",
      "Có kiểm soát"
     ],
     [
      "23",
      "like/love + V-ing; want to + V",
      "4",
      "Có kiểm soát"
     ],
     [
      "24",
      "Trật tự từ trong câu đơn, câu ghép",
      "Cả khóa",
      "Tự động"
     ],
     [
      "25",
      "Cấu trúc A2 hay gặp trong đề KET: will, have to, could, should, present perfect với ever",
      "5",
      "Nhận biết"
     ]
    ],
    "note": "Ba mức: Tự động = dùng đúng ≥ 80% khi nói, viết tự do · Có kiểm soát = đúng ≥ 80% trong bài tập có gợi ý · Nhận biết = hiểu đúng khi đọc, nghe ≥ 8/10 câu. Đo ở buổi 3 (chẩn đoán) và học phần 5."
   },
   "subskills": [
    {
     "code": "R1",
     "what": "Hiểu ý chính của biển báo, tin nhắn, email ngắn",
     "part": "R&W Part 1 (6 câu)",
     "hp": "1",
     "target": "≥ 4/6"
    },
    {
     "code": "R2",
     "what": "Đọc lướt tìm thông tin, so khớp 3 văn bản ngắn",
     "part": "R&W Part 2 (7 câu)",
     "hp": "2",
     "target": "≥ 4/7"
    },
    {
     "code": "R3",
     "what": "Đọc hiểu chi tiết, ý kiến trong bài dài",
     "part": "R&W Part 3 (5 câu)",
     "hp": "2",
     "target": "≥ 3/5"
    },
    {
     "code": "R4",
     "what": "Chọn từ vựng đúng ngữ cảnh, cụm cố định",
     "part": "R&W Part 4 (6 câu)",
     "hp": "1",
     "target": "≥ 3/6"
    },
    {
     "code": "R5",
     "what": "Điền từ chức năng: giới từ, đại từ, trợ động từ, mạo từ",
     "part": "R&W Part 5 (6 câu)",
     "hp": "1",
     "target": "≥ 3/6"
    },
    {
     "code": "W1",
     "what": "Viết email, tin nhắn ≥ 25 từ trả lời đủ 3 ý",
     "part": "R&W Part 6",
     "hp": "1",
     "target": "Đủ 3 ý, người đọc hiểu được"
    },
    {
     "code": "W2",
     "what": "Viết truyện ≥ 35 từ theo 3 tranh",
     "part": "R&W Part 7",
     "hp": "3",
     "target": "Đủ 3 tranh, có liên từ"
    },
    {
     "code": "W3",
     "what": "Chính tả, viết hoa, dấu câu",
     "part": "Dùng chung",
     "hp": "1",
     "target": "≤ 3 lỗi mỗi bài"
    },
    {
     "code": "L1",
     "what": "Nghe số, giờ, giá, đồ vật để chọn tranh",
     "part": "Listening Part 1 (5 câu)",
     "hp": "1",
     "target": "≥ 3/5"
    },
    {
     "code": "L2",
     "what": "Nghe ghi chép số, ngày, tên được đánh vần",
     "part": "Listening Part 2 (5 câu)",
     "hp": "1",
     "target": "≥ 3/5"
    },
    {
     "code": "L3",
     "what": "Nghe chi tiết trong hội thoại dài",
     "part": "Listening Part 3 (5 câu)",
     "hp": "3",
     "target": "≥ 3/5"
    },
    {
     "code": "L4",
     "what": "Nghe ý chính, cảm xúc người nói",
     "part": "Listening Part 4 (5 câu)",
     "hp": "3–4",
     "target": "≥ 3/5"
    },
    {
     "code": "L5",
     "what": "Nghe nối người với vật, hoạt động",
     "part": "Listening Part 5 (5 câu)",
     "hp": "2",
     "target": "≥ 3/5"
    },
    {
     "code": "S1",
     "what": "Trả lời câu hỏi cá nhân ngắn bằng câu đầy đủ",
     "part": "Speaking Part 1, phase 1",
     "hp": "1",
     "target": "Trả lời đúng, đủ câu"
    },
    {
     "code": "S2",
     "what": "Nói dài hơn về bản thân, có lý do",
     "part": "Speaking Part 1, phase 2",
     "hp": "1",
     "target": "2–3 câu mỗi câu hỏi"
    },
    {
     "code": "S3",
     "what": "Thảo luận với bạn theo tranh, hỏi ý bạn",
     "part": "Speaking Part 2, phase 1",
     "hp": "2",
     "target": "Hỏi bạn ≥ 2 lần, nêu lý do"
    },
    {
     "code": "S4",
     "what": "Trả lời câu hỏi mở rộng của giám khảo",
     "part": "Speaking Part 2, phase 2",
     "hp": "3",
     "target": "Trả lời có lý do"
    },
    {
     "code": "S5",
     "what": "Phát âm rõ: âm cuối, -s/-ed, trọng âm",
     "part": "Dùng chung",
     "hp": "1",
     "target": "Người nghe hiểu không cần hỏi lại"
    },
    {
     "code": "E",
     "what": "Quản lý thời gian, phiếu trả lời, không bỏ trống",
     "part": "Cả 3 bài thi",
     "hp": "1",
     "target": "Không bỏ trống câu nào"
    }
   ],
   "sessions": [
    {
     "session_id": "BU-01",
     "session_no": 1,
     "week": 1,
     "unit": "Starter",
     "unit_title": "Hello!",
     "type": "Starter",
     "sb_pages": "6–7*",
     "focus": "Starter · SB tr. 6–7*",
     "task": "Đọc các bài đăng về gia đình, tìm thông tin cá nhân",
     "ket_part": "S1: trả lời 5 câu hỏi Speaking Part 1 (What's your name? How old are you? Where do you live? Who's in your family?) bằng câu đầy đủ · L2: nghe giáo viên đánh vần tên, đọc tuổi, điền phiếu thông tin 5 ô",
     "ket_codes": [
      "S1",
      "L2"
     ],
     "grammar": "to be hiện tại: I am / you are / he, she, it is / we, they are · phủ định isn't, aren't · câu hỏi Is she…? Are you…? – Yes, I am. · đại từ nhân xưng I, you, he, she, it, we, they",
     "vocabulary": "Thành viên gia đình (mum, dad, brother, sister, cousin, grandma, grandpa, uncle, aunt); số 1–100",
     "can_do": "Trả lời đúng 5 câu hỏi cá nhân kiểu Speaking Part 1; đánh vần đúng tên mình và 1 bạn",
     "before": "—",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "Cả lớp xây nội quy lớp học",
     "materials": "OGS1 U5 tr. 24–27; OGS1 U6 Be tr. 30–34",
     "assessment": "—"
    },
    {
     "session_id": "BU-02",
     "session_no": 2,
     "week": 1,
     "unit": "Starter",
     "unit_title": "Hello!",
     "type": "Starter",
     "sb_pages": "8–9*",
     "focus": "Starter · SB tr. 8–9*",
     "task": "Nghe ngày tháng và quốc tịch; nói về ngày tháng, sở thích",
     "ket_part": "L2: nghe hội thoại, điền tên được đánh vần và ngày sinh (dạng Listening Part 2), chú ý chữ dễ nhầm A/E/I, G/J · W3: viết hoa tên riêng, tháng, quốc tịch",
     "ket_codes": [
      "L2"
     ],
     "grammar": "Tính từ sở hữu my, your, his, her, its, our, their (This is my sister. Her name is Mai.) · sở hữu cách 's / s' (Lan's bike, my parents' car)",
     "vocabulary": "Bảng chữ cái; 12 tháng; số thứ tự 1st–31st để nói ngày; quốc gia – quốc tịch (Vietnam – Vietnamese, Japan – Japanese, the UK – British, Brazil – Brazilian)",
     "can_do": "Nghe chép đúng ≥ 4/5 tên được đánh vần và ngày tháng; ≥ 4/5 câu đúng với tính từ sở hữu, 's",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "Lớp em trên bản đồ thế giới",
     "materials": "OGS1 U8 tr. 42–46; OGS1 U1 Letters tr. 6",
     "assessment": "—"
    },
    {
     "session_id": "BU-03",
     "session_no": 3,
     "week": 2,
     "unit": "Starter",
     "unit_title": "Hello!",
     "type": "Starter",
     "sb_pages": "10*",
     "focus": "Starter · SB tr. 10* + GF tr. 114–115*",
     "task": "Báo cáo thông tin cá nhân; luyện Grammar file Starter",
     "ket_part": "W1: viết tin nhắn ≥ 25 từ cho bạn mới theo 3 gợi ý (tên – tuổi, nơi ở, sở thích) · W3: kiểm tra viết hoa đầu câu, tên riêng, dấu chấm",
     "ket_codes": [
      "W6"
     ],
     "grammar": "Ôn to be, tính từ sở hữu, 's trong câu giới thiệu · làm bài chẩn đoán 25 điểm ngữ pháp nền",
     "vocabulary": "Sở thích, đồ vật yêu thích (hobby, favourite colour, sport, food)",
     "can_do": "Viết tin nhắn ≥ 25 từ, đủ 3 ý, ≤ 2 lỗi viết hoa; 100% làm bài chẩn đoán ngữ pháp",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Bài chẩn đoán 30' (25 điểm ngữ pháp)",
     "assessment": "—"
    },
    {
     "session_id": "BU-04",
     "session_no": 4,
     "week": 2,
     "unit": "Sự kiện",
     "unit_title": "Công dân toàn cầu",
     "type": "Sự kiện",
     "sb_pages": "—",
     "focus": "Sự kiện E1 · Hello, World!",
     "task": "—",
     "ket_part": "S2: nói 1 phút trước khán giả về bản thân và quốc gia đã chọn; W3: poster viết hoa đúng tên nước, quốc tịch",
     "ket_codes": [
      "S1"
     ],
     "grammar": "—",
     "vocabulary": "Giới thiệu bản thân và một quốc gia; quốc tịch, ngôn ngữ, món ăn, lời chào",
     "can_do": "Mỗi học sinh trình bày poster 1 phút, nói ≥ 6 câu, trả lời 1 câu hỏi của khán giả",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 20,
       "activity": "Chuẩn bị ngôn ngữ cho sản phẩm",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Thực hiện sản phẩm trước khán giả",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Phản hồi theo rubric",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá năng lực",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Bản sắc cá nhân và các nền văn hóa (UNESCO: các tầng bản sắc)",
     "materials": "Rubric 4 tiêu chí: ngôn ngữ, nội dung, hợp tác, trình bày",
     "assessment": "—"
    },
    {
     "session_id": "BU-05",
     "session_no": 5,
     "week": 3,
     "unit": "U1",
     "unit_title": "Come in",
     "type": "Reading",
     "sb_pages": "11–14",
     "focus": "U1 Come in · Reading + Grammar 1 · SB tr. 11–14",
     "task": "Đọc truyện tiệc sinh nhật, dùng ảnh để đoán nội dung, hoàn thành câu",
     "ket_part": "R1: đọc 6 ghi chú, tin nhắn ngắn ở nhà và trường, chọn câu A/B/C cùng nghĩa (dạng R&W Part 1); gạch từ khóa, loại đáp án sai · R5: điền there is/are, some/any vào đoạn 6 chỗ trống",
     "ket_codes": [
      "R1",
      "R5"
     ],
     "grammar": "There is a/an + danh từ số ít · There are some + danh từ số nhiều · There isn't a… / There aren't any… · Is there a…? Are there any…? – Yes, there is / No, there aren't",
     "vocabulary": "Đồ vật trong phòng (bed, desk, wardrobe, shelf, lamp, cupboard, mirror, poster); giới từ nơi chốn in, on, under, next to, behind, in front of, between",
     "can_do": "Đúng ≥ 4/6 câu đọc biển báo, tin nhắn; viết 5 câu tả phòng, ≥ 4 câu đúng",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất bài cũ",
       "category": "lang"
      },
      {
       "minutes": 5,
       "activity": "Từ khóa trước khi đọc",
       "category": "lang"
      },
      {
       "minutes": 25,
       "activity": "Đọc bài SB và nhiệm vụ",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Ngữ pháp 1: tìm quy tắc từ bài đọc, luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Dùng cấu trúc trong câu nói, viết của mình",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "1 part KET Đọc",
       "category": "input"
      },
      {
       "minutes": 10,
       "activity": "Đọc nhanh lại bài quen có bấm giờ",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Phiếu cuối buổi",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 1 R&W Part 1 Training tr. 10–12; OGS1 U16 tr. 85",
     "assessment": "—"
    },
    {
     "session_id": "BU-06",
     "session_no": 6,
     "week": 3,
     "unit": "U1",
     "unit_title": "Come in",
     "type": "Listening",
     "sb_pages": "15, 17*",
     "focus": "U1 · Listening + Vocabulary · SB tr. 15, 17*",
     "task": "Nghe \"Homes around the world\", chọn đúng tranh",
     "ket_part": "L1: nghe 5 hội thoại ngắn, chọn tranh A/B/C về đồ vật và vị trí (dạng Listening Part 1); trước khi nghe, so sánh 3 tranh để biết cần nghe chi tiết nào",
     "ket_codes": [
      "L1"
     ],
     "grammar": "Ôn there is/are và giới từ nơi chốn khi nghe mô tả",
     "vocabulary": "Ngôi nhà: kitchen, living room, bathroom, bedroom, garden, stairs, roof, balcony, flat, house",
     "can_do": "Đúng ≥ 4/5 câu nghe chọn tranh; gọi tên đúng ≥ 10/12 từ",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Từ vựng 2: giới thiệu, luyện, trò chơi",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Nghe bài SB theo 3 bước trước – trong – sau",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "1 part KET Nghe",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Nói cặp dùng từ mới",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Nghe lại bài quen không nhìn chữ, tốc độ thật",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Phiếu cuối buổi",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Nhà ở các nền văn hóa",
     "materials": "T1 Test 1 Listening Part 1 Training tr. 28–30*",
     "assessment": "—"
    },
    {
     "session_id": "BU-07",
     "session_no": 7,
     "week": 4,
     "unit": "U1",
     "unit_title": "Come in",
     "type": "Speaking",
     "sb_pages": "16, 18*",
     "focus": "U1 · Speaking (+ Grammar 2) · SB tr. 16, 18*",
     "task": "Gọi điện thoại, chọn mức độ trang trọng phù hợp",
     "ket_part": "S1: trả lời câu hỏi cá nhân về nhà và đồ vật (Have you got a big bedroom? What's in your room?) bằng câu đầy đủ · S5: phát âm âm cuối /s/, /z/, /t/ (gets, has got, it's)",
     "ket_codes": [
      "S1"
     ],
     "grammar": "have got / has got · haven't got / hasn't got · Have you got…? – Yes, I have / No, I haven't · rút gọn I've got, she's got",
     "vocabulary": "Cụm từ gọi điện: Hello, this is… / Can I speak to…? / Hold on. / Bye for now. / See you soon.",
     "can_do": "Hỏi – đáp 6 câu have got, ≥ 5 câu đúng; phát âm rõ âm cuối",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Ngữ pháp 2: trình bày, luyện",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Nghe hội thoại mẫu, cụm từ chức năng",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Nhiệm vụ nói SB theo cặp",
       "category": "output"
      },
      {
       "minutes": 20,
       "activity": "Speaking KET Part 1 hoặc 2",
       "category": "output"
      },
      {
       "minutes": 20,
       "activity": "Nói 4/3/2: cùng nội dung nói với 3 bạn trong 4, 3, 2 phút",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Nhận xét theo rubric",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 1 Speaking Part 1 tr. 40–41*; OGS1 U7 tr. 35–39",
     "assessment": "—"
    },
    {
     "session_id": "BU-08",
     "session_no": 8,
     "week": 4,
     "unit": "U1",
     "unit_title": "Come in",
     "type": "Writing",
     "sb_pages": "19*",
     "focus": "U1 · Writing · SB tr. 19*",
     "task": "Viết hồ sơ cá nhân về đồ vật yêu thích, dùng chữ in hoa",
     "ket_part": "W1: viết email ≥ 25 từ trả lời 3 câu hỏi của bạn về phòng mới (Where is it? What's in it? What do you like most?) · W3: tự soát lỗi viết hoa và dấu câu theo bảng kiểm",
     "ket_codes": [
      "W6"
     ],
     "grammar": "Viết hoa đầu câu, tên riêng, đại từ I · dấu chấm, dấu phẩy, dấu hỏi · trật tự tính từ + danh từ (a small blue lamp)",
     "vocabulary": "Đồ vật yêu thích; tính từ đơn giản big, small, new, old, favourite, cool, comfortable",
     "can_do": "Viết email ≥ 25 từ, đủ 3 ý, ≤ 3 lỗi",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Đọc và phân tích bài mẫu",
       "category": "input"
      },
      {
       "minutes": 5,
       "activity": "Dàn ý",
       "category": "lang"
      },
      {
       "minutes": 25,
       "activity": "Viết trên lớp theo dạng SB hoặc KET Part 6, 7",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Tự chấm và chấm chéo theo rubric, sửa lỗi chung",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Viết nhanh 10 phút không chấm lỗi",
       "category": "fluency"
      },
      {
       "minutes": 15,
       "activity": "Đọc mở rộng mức dễ",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Giao bài",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 1 R&W Part 6 tr. 25–26*; SB S&W file tr. 134–142",
     "assessment": "—"
    },
    {
     "session_id": "BU-09",
     "session_no": 9,
     "week": 5,
     "unit": "U1",
     "unit_title": "Come in",
     "type": "Project & Check",
     "sb_pages": "20*",
     "focus": "U1 · Ôn tập và Dự án · SB tr. 20* + GF tr. 116–117*",
     "task": "Video Tiny house tour; dự án nhà tí hon; unit check U1",
     "ket_part": "R5: điền a/an/the và từ chức năng vào đoạn văn 6 chỗ trống (dạng R&W Part 5)",
     "ket_codes": [
      "R5"
     ],
     "grammar": "(+) Mạo từ: a/an khi nhắc lần đầu, the khi đã xác định (I've got a lamp. The lamp is blue.) · số nhiều -s, -es, -ies và bất quy tắc (children, people, feet, teeth, mice)",
     "vocabulary": "Ôn từ vựng U1",
     "can_do": "Đạt ≥ 70% unit check U1; a/an/the, số nhiều đúng ≥ 8/10",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 25,
       "activity": "Grammar Foundation (ngữ pháp bổ trợ)",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Unit check",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Video Switch on",
       "category": "input"
      },
      {
       "minutes": 35,
       "activity": "Hoàn thiện và trình bày dự án",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Trình bày lại cho nhóm thứ hai",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Tự đánh giá unit",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Sống gọn, dùng ít tài nguyên",
     "materials": "OGS1 U3 tr. 15–18; OGS1 U4 tr. 19–23",
     "assessment": "—"
    },
    {
     "session_id": "BU-10",
     "session_no": 10,
     "week": 5,
     "unit": "Sự kiện",
     "unit_title": "Công dân toàn cầu",
     "type": "Sự kiện",
     "sb_pages": "—",
     "focus": "Sự kiện E2 · Tiny House Challenge",
     "task": "—",
     "ket_part": "S3: nhóm thống nhất thiết kế, hỏi ý nhau; W1: thẻ thuyết minh ≥ 25 từ",
     "ket_codes": [
      "S2",
      "W6"
     ],
     "grammar": "—",
     "vocabulary": "Nhà và đồ vật; there is/are, giới từ nơi chốn",
     "can_do": "Mỗi nhóm làm mô hình nhà tí hon bằng vật liệu tái chế, thuyết minh 2 phút, mỗi thành viên nói ≥ 3 câu",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 20,
       "activity": "Chuẩn bị ngôn ngữ cho sản phẩm",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Thực hiện sản phẩm trước khán giả",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Phản hồi theo rubric",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá năng lực",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Sống gọn, tái sử dụng (phát triển bền vững)",
     "materials": "Rubric 4 tiêu chí: ngôn ngữ, nội dung, hợp tác, trình bày",
     "assessment": "—"
    },
    {
     "session_id": "BU-11",
     "session_no": 11,
     "week": 6,
     "unit": "U2",
     "unit_title": "What a week!",
     "type": "Reading",
     "sb_pages": "21–24",
     "focus": "U2 What a week! · Reading + Grammar 1 · SB tr. 21–24",
     "task": "Đọc \"A different school day\", đọc câu hỏi trước khi đọc, điền từ trắc nghiệm",
     "ket_part": "R4: điền từ trắc nghiệm 6 câu (dạng R&W Part 4), chọn từ đúng nghĩa và đúng cụm (do homework, have lunch, go to bed)",
     "ket_codes": [
      "R4"
     ],
     "grammar": "Hiện tại đơn khẳng định, phủ định: I play / she plays; I don't / he doesn't + V · quy tắc -s, -es, -ies (watches, studies) · trạng từ thời gian every day, at 7 o'clock, in the morning",
     "vocabulary": "Hoạt động hằng ngày: get up, have breakfast, go to school, have lunch, do homework, go to bed; giờ trong ngày",
     "can_do": "Đúng ≥ 6/8 câu SB và ≥ 3/6 câu T1 Part 4",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất bài cũ",
       "category": "lang"
      },
      {
       "minutes": 5,
       "activity": "Từ khóa trước khi đọc",
       "category": "lang"
      },
      {
       "minutes": 25,
       "activity": "Đọc bài SB và nhiệm vụ",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Ngữ pháp 1: tìm quy tắc từ bài đọc, luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Dùng cấu trúc trong câu nói, viết của mình",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "1 part KET Đọc",
       "category": "input"
      },
      {
       "minutes": 10,
       "activity": "Đọc nhanh lại bài quen có bấm giờ",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Phiếu cuối buổi",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 1 R&W Part 4 tr. 21–22*; OGS1 U12 tr. 62–67",
     "assessment": "—"
    },
    {
     "session_id": "BU-12",
     "session_no": 12,
     "week": 6,
     "unit": "U2",
     "unit_title": "What a week!",
     "type": "Listening",
     "sb_pages": "25, 27*",
     "focus": "U2 · Listening + Vocabulary · SB tr. 25, 27*",
     "task": "Nghe \"Going to school\", viết số, điền chỗ trống",
     "ket_part": "L2: nghe đoạn độc thoại, điền 5 thông tin (giờ, số, ngày, tên được đánh vần) dạng Listening Part 2; dự đoán loại từ cần điền trước khi nghe",
     "ket_codes": [
      "L2"
     ],
     "grammar": "Nói giờ: It's half past seven / quarter to eight · What time do you…? – At…",
     "vocabulary": "Hoạt động thời gian rảnh: play football, go swimming, watch TV, read comics, listen to music; giờ (half past, quarter to)",
     "can_do": "Nghe điền đúng ≥ 4/5 số, giờ, ngày",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Từ vựng 2: giới thiệu, luyện, trò chơi",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Nghe bài SB theo 3 bước trước – trong – sau",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "1 part KET Nghe",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Nói cặp dùng từ mới",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Nghe lại bài quen không nhìn chữ, tốc độ thật",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Phiếu cuối buổi",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 1 Listening Part 2 tr. 31–32*",
     "assessment": "—"
    },
    {
     "session_id": "BU-13",
     "session_no": 13,
     "week": 7,
     "unit": "U2",
     "unit_title": "What a week!",
     "type": "Speaking",
     "sb_pages": "26, 28*",
     "focus": "U2 · Speaking (+ Grammar 2) · SB tr. 26, 28*",
     "task": "Nói về thời khóa biểu, trả lời câu hỏi về bản thân",
     "ket_part": "S1: trả lời câu hỏi ngắn về trường · S2: \"Tell me about your school day\" – nói ≥ 3 câu, có 1 lý do với because (Speaking Part 1 phase 2)",
     "ket_codes": [
      "S1"
     ],
     "grammar": "Câu hỏi hiện tại đơn: Do you…? Does he…? – Yes, I do / No, he doesn't · Wh- + do/does (What time does school start?)",
     "vocabulary": "Môn học: Maths, Science, History, Geography, Art, Music, PE, English",
     "can_do": "Trả lời \"Tell me about your school day\" ≥ 3 câu, có because",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Ngữ pháp 2: trình bày, luyện",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Nghe hội thoại mẫu, cụm từ chức năng",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Nhiệm vụ nói SB theo cặp",
       "category": "output"
      },
      {
       "minutes": 20,
       "activity": "Speaking KET Part 1 hoặc 2",
       "category": "output"
      },
      {
       "minutes": 20,
       "activity": "Nói 4/3/2: cùng nội dung nói với 3 bạn trong 4, 3, 2 phút",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Nhận xét theo rubric",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "So sánh ngày học ở các nước",
     "materials": "SB Pairwork tr. 143; OGS1 U12 (câu hỏi)",
     "assessment": "—"
    },
    {
     "session_id": "BU-14",
     "session_no": 14,
     "week": 7,
     "unit": "U2",
     "unit_title": "What a week!",
     "type": "Writing",
     "sb_pages": "29*",
     "focus": "U2 · Writing · SB tr. 29*",
     "task": "Viết câu hỏi phỏng vấn về ngày yêu thích, dùng dấu câu",
     "ket_part": "W1: viết email ≥ 25 từ hỏi bạn 3 câu về ngày học, đủ 3 ý · W3: viết hoa ngày, tháng; dấu hỏi",
     "ket_codes": [
      "W6"
     ],
     "grammar": "Trật tự câu hỏi: Wh- + do/does + S + V? (What do you do on Saturdays?) · dấu hỏi, viết hoa ngày trong tuần",
     "vocabulary": "Ngày trong tuần; hoạt động cuối tuần",
     "can_do": "Viết email ≥ 25 từ hỏi 3 câu, đúng trật tự từ ≥ 2/3",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Đọc và phân tích bài mẫu",
       "category": "input"
      },
      {
       "minutes": 5,
       "activity": "Dàn ý",
       "category": "lang"
      },
      {
       "minutes": 25,
       "activity": "Viết trên lớp theo dạng SB hoặc KET Part 6, 7",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Tự chấm và chấm chéo theo rubric, sửa lỗi chung",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Viết nhanh 10 phút không chấm lỗi",
       "category": "fluency"
      },
      {
       "minutes": 15,
       "activity": "Đọc mở rộng mức dễ",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Giao bài",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "SB S&W file (U2)",
     "assessment": "—"
    },
    {
     "session_id": "BU-15",
     "session_no": 15,
     "week": 8,
     "unit": "U2",
     "unit_title": "What a week!",
     "type": "Project & Check",
     "sb_pages": "30*",
     "focus": "U2 · Ôn tập và Dự án · SB tr. 30* + GF tr. 118–119*",
     "task": "Video Kung Fu School; dự án Ngày học hoàn hảo; unit check U2",
     "ket_part": "R5: điền in/on/at và trợ động từ do/does vào đoạn văn 6 chỗ trống",
     "ket_codes": [
      "R5"
     ],
     "grammar": "(+) Giới từ thời gian: in (the morning, July, 2026) · on (Monday, 5th May) · at (7 o'clock, the weekend, night)",
     "vocabulary": "Ôn từ vựng U2",
     "can_do": "Đạt ≥ 70% unit check U2; in/on/at đúng ≥ 8/10",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 25,
       "activity": "Grammar Foundation (ngữ pháp bổ trợ)",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Unit check",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Video Switch on",
       "category": "input"
      },
      {
       "minutes": 35,
       "activity": "Hoàn thiện và trình bày dự án",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Trình bày lại cho nhóm thứ hai",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Tự đánh giá unit",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Quyền được đi học",
     "materials": "OGS1 U25 tr. 125–127",
     "assessment": "—"
    },
    {
     "session_id": "BU-16",
     "session_no": 16,
     "week": 8,
     "unit": "Sự kiện",
     "unit_title": "Công dân toàn cầu",
     "type": "Sự kiện",
     "sb_pages": "—",
     "focus": "Sự kiện E3 · Class Leaders Camp",
     "task": "—",
     "ket_part": "S3: điều phối nhóm bằng Let's…, Can you…?; L2: nghe hướng dẫn và ghi chép",
     "ket_codes": [
      "S2",
      "L2"
     ],
     "grammar": "—",
     "vocabulary": "Hoạt động hằng ngày; câu mệnh lệnh để hướng dẫn; can",
     "can_do": "Mỗi học sinh làm leader điều hành một trò chơi 5 phút bằng tiếng Anh, đưa ≥ 4 hướng dẫn rõ",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 20,
       "activity": "Chuẩn bị ngôn ngữ cho sản phẩm",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Thực hiện sản phẩm trước khán giả",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Phản hồi theo rubric",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá năng lực",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Vai trò trong nhóm, trách nhiệm cá nhân",
     "materials": "Rubric 4 tiêu chí: ngôn ngữ, nội dung, hợp tác, trình bày",
     "assessment": "—"
    },
    {
     "session_id": "BU-17",
     "session_no": 17,
     "week": 9,
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Review",
     "sb_pages": "—",
     "focus": "Củng cố · Nghe – Đọc",
     "task": "—",
     "ket_part": "R1: 6 biển báo, tin nhắn – gạch từ khóa, tìm câu cùng nghĩa, loại đáp án sai · L1: chọn tranh – so sánh 3 tranh trước · L2: điền thông tin – dự đoán loại từ",
     "ket_codes": [
      "R1",
      "L1",
      "L2"
     ],
     "grammar": "Nhận ra to be, there is/are, hiện tại đơn trong văn bản đọc và nghe",
     "vocabulary": "Gia đình, ngôi nhà, trường học, hoạt động hằng ngày",
     "can_do": "Đúng ≥ 4/6 câu R&W Part 1; ≥ 3/5 câu Listening Part 1–2",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn từ vựng học phần",
       "category": "lang"
      },
      {
       "minutes": 25,
       "activity": "KET part 1: làm – chữa – rút chiến lược",
       "category": "input"
      },
      {
       "minutes": 25,
       "activity": "KET part 2: làm – chữa – rút chiến lược",
       "category": "input"
      },
      {
       "minutes": 25,
       "activity": "KET part 3: làm – chữa – rút chiến lược",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Đọc hoặc nghe mở rộng mức dễ",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 1 R&W Part 1 tr. 13; T1 Test 1 Listening Part 1–2 tr. 28–32*",
     "assessment": "—"
    },
    {
     "session_id": "BU-18",
     "session_no": 18,
     "week": 9,
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Test",
     "sb_pages": "—",
     "focus": "Củng cố · Nói – Viết + kiểm tra Nói HP1",
     "task": "—",
     "ket_part": "S1, S2: thi Speaking Part 1 với giáo viên (6 câu hỏi, 2 câu mở rộng) · S5: phát âm âm cuối · W1: email Part 6 trong 10 phút, đánh dấu 3 ý đã trả lời",
     "ket_codes": [
      "S1",
      "W6"
     ],
     "grammar": "Câu hỏi Yes/No và Wh- ở hiện tại đơn; câu trả lời đầy đủ",
     "vocabulary": "Thông tin cá nhân, trường, gia đình",
     "can_do": "Thi Speaking Part 1 với giáo viên đủ 6 câu; email Part 6 đủ 3 ý",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 90,
       "activity": "GV thi Nói từng cặp 7–10'; các cặp khác viết KET Part 6/7 bấm giờ",
       "category": "test"
      },
      {
       "minutes": 15,
       "activity": "Tự chấm bài viết theo rubric",
       "category": "lang"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 1 Speaking Part 1 tr. 40–41*; R&W Part 6 tr. 25–26*",
     "assessment": "—"
    },
    {
     "session_id": "BU-19",
     "session_no": 19,
     "week": 10,
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Test",
     "sb_pages": "—",
     "focus": "Ngữ pháp nền + kiểm tra học phần 1",
     "task": "—",
     "ket_part": "E: điền phiếu trả lời, chia 60 phút cho các part, không bỏ trống câu · R1, R5, W1, L1, L2 trong bài kiểm tra",
     "ket_codes": [
      "R1",
      "R5",
      "W6",
      "L1",
      "L2"
     ],
     "grammar": "be, have got, there is/are, tính từ sở hữu, 's, hiện tại đơn, giới từ nơi chốn và thời gian – ghi lỗi vào bảng lỗi cá nhân",
     "vocabulary": "Ôn từ vựng Starter–U2",
     "can_do": "Kiểm tra 60': ≥ 50% mỗi part KET; ≥ 80% câu ngữ pháp mức có kiểm soát",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 40,
       "activity": "Ôn các điểm ngữ pháp của học phần",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Kiểm tra: các part KET đã học + 20 câu ngữ pháp",
       "category": "test"
      },
      {
       "minutes": 5,
       "activity": "Tự ghi lỗi vào bảng lỗi cá nhân",
       "category": "lang"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "OGS1 Revision 1 tr. 28–29, Revision 2 tr. 40–41; T1 Test 3 R&W P1, P6, Listening P1–2",
     "assessment": "—"
    },
    {
     "session_id": "BU-20",
     "session_no": 20,
     "week": 10,
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Review",
     "sb_pages": "—",
     "focus": "Linh hoạt 1: bù hoặc tăng cường",
     "task": "—",
     "ket_part": "Nhóm bù: luyện lại part có điểm thấp nhất · Nhóm tăng cường: W1 nâng cao, email ≥ 35 từ có 2 lý do",
     "ket_codes": [
      "W6"
     ],
     "grammar": "Nhóm bù: làm lại các điểm ngữ pháp chưa đạt ở buổi 19 · Nhóm tăng cường: câu ghép với and, but, because",
     "vocabulary": "Theo lỗi của từng học sinh",
     "can_do": "Nhóm bù đúng ≥ 80% điểm chưa đạt; nhóm tăng cường viết email ≥ 35 từ",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "OGS1 U12 (★★★), Mini-revision tr. 74, Revision 9 tr. 128; sách đọc Starter",
     "assessment": "—"
    },
    {
     "session_id": "BU-21",
     "session_no": 21,
     "week": 11,
     "unit": "U3",
     "unit_title": "Animal magic",
     "type": "Reading",
     "sb_pages": "31–34",
     "focus": "U3 Animal magic · Reading + Grammar 1 · SB tr. 31–34",
     "task": "Đọc \"What are armadillos like?\", chọn từ điền chỗ trống có tranh gợi ý",
     "ket_part": "R2: đọc 3 đoạn ngắn về 3 con vật, nối 7 câu với đoạn đúng (dạng R&W Part 2); tìm từ đồng nghĩa giữa câu hỏi và đoạn văn",
     "ket_codes": [
      "R2"
     ],
     "grammar": "Trạng từ tần suất always, usually, often, sometimes, never · vị trí: trước động từ thường, sau be (They often sleep in the day. It is never cold.) · How often…?",
     "vocabulary": "Động vật: armadillo, bat, dolphin, kangaroo, parrot, snake, tortoise; bộ phận: tail, wing, fur, shell, claw",
     "can_do": "Đúng ≥ 4/7 câu nối thông tin; trạng từ tần suất đúng vị trí ≥ 4/5",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất bài cũ",
       "category": "lang"
      },
      {
       "minutes": 5,
       "activity": "Từ khóa trước khi đọc",
       "category": "lang"
      },
      {
       "minutes": 25,
       "activity": "Đọc bài SB và nhiệm vụ",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Ngữ pháp 1: tìm quy tắc từ bài đọc, luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Dùng cấu trúc trong câu nói, viết của mình",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "1 part KET Đọc",
       "category": "input"
      },
      {
       "minutes": 10,
       "activity": "Đọc nhanh lại bài quen có bấm giờ",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Phiếu cuối buổi",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 1 R&W Part 2 Training tr. 14–15; OGS2 U28 tr. 126–129",
     "assessment": "—"
    },
    {
     "session_id": "BU-22",
     "session_no": 22,
     "week": 11,
     "unit": "U3",
     "unit_title": "Animal magic",
     "type": "Listening",
     "sb_pages": "35, 37*",
     "focus": "U3 · Listening + Vocabulary · SB tr. 35, 37*",
     "task": "Nghe về khu bảo tồn ở Úc, đọc câu hỏi trước khi nghe, nối thông tin",
     "ket_part": "L5: nghe hội thoại dài, nối 5 người hoặc con vật với hoạt động, thức ăn (A–H) dạng Listening Part 5; gạch tên trước khi nghe, cẩn thận đáp án được nhắc nhưng bị phủ định",
     "ket_codes": [
      "L5"
     ],
     "grammar": "Ôn hiện tại đơn ngôi thứ ba khi mô tả con vật",
     "vocabulary": "Thế giới quanh ta: forest, river, desert, mountain, lake, island, beach, jungle",
     "can_do": "Đúng ≥ 3/5 câu nghe nối",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Từ vựng 2: giới thiệu, luyện, trò chơi",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Nghe bài SB theo 3 bước trước – trong – sau",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "1 part KET Nghe",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Nói cặp dùng từ mới",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Nghe lại bài quen không nhìn chữ, tốc độ thật",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Phiếu cuối buổi",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 1 Listening Part 5 tr. 37–39*",
     "assessment": "—"
    },
    {
     "session_id": "BU-23",
     "session_no": 23,
     "week": 12,
     "unit": "U3",
     "unit_title": "Animal magic",
     "type": "Speaking",
     "sb_pages": "36, 38*",
     "focus": "U3 · Speaking (+ Grammar 2) · SB tr. 36, 38*",
     "task": "Nói điểm giống, khác giữa các con vật; nói em nghĩ gì và vì sao (picture sets)",
     "ket_part": "S2: trả lời \"Tell me about your favourite animal\" · S3: thảo luận 5 tranh con vật: Do you like…? I like… because… What about you? (Speaking Part 2 phase 1)",
     "ket_codes": [
      "S1",
      "S2"
     ],
     "grammar": "Câu hỏi Wh-: What / Where / When / How many / Why + do/does…? (Where do kangaroos live? Why do you like it?)",
     "vocabulary": "Tính từ mô tả con vật: dangerous, friendly, fast, slow, beautiful, ugly",
     "can_do": "Thảo luận 5 tranh 2 phút, hỏi ý bạn ≥ 2 lần",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Ngữ pháp 2: trình bày, luyện",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Nghe hội thoại mẫu, cụm từ chức năng",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Nhiệm vụ nói SB theo cặp",
       "category": "output"
      },
      {
       "minutes": 20,
       "activity": "Speaking KET Part 1 hoặc 2",
       "category": "output"
      },
      {
       "minutes": 20,
       "activity": "Nói 4/3/2: cùng nội dung nói với 3 bạn trong 4, 3, 2 phút",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Nhận xét theo rubric",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Nêu lý do cho ý kiến",
     "materials": "T1 Test 1 Speaking Part 2 tr. 42–43*; OGS2 U16 tr. 78–80",
     "assessment": "—"
    },
    {
     "session_id": "BU-24",
     "session_no": 24,
     "week": 12,
     "unit": "U3",
     "unit_title": "Animal magic",
     "type": "Writing",
     "sb_pages": "39*",
     "focus": "U3 · Writing · SB tr. 39*",
     "task": "Viết mô tả chim cánh cụt nhỏ (fairy penguins), dùng and, but",
     "ket_part": "W1: viết email ≥ 25 từ cho bạn về con vật em thích, đủ 3 ý · W3: soát -s ngôi thứ ba và dấu phẩy trước but",
     "ket_codes": [
      "W6"
     ],
     "grammar": "Nối câu bằng and, but, because (It's small but it swims fast.) · hiện tại đơn ngôi thứ ba",
     "vocabulary": "Từ vựng mô tả con vật: size, colour, food, home",
     "can_do": "Email ≥ 25 từ đủ 3 ý, có and/but/because",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Đọc và phân tích bài mẫu",
       "category": "input"
      },
      {
       "minutes": 5,
       "activity": "Dàn ý",
       "category": "lang"
      },
      {
       "minutes": 25,
       "activity": "Viết trên lớp theo dạng SB hoặc KET Part 6, 7",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Tự chấm và chấm chéo theo rubric, sửa lỗi chung",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Viết nhanh 10 phút không chấm lỗi",
       "category": "fluency"
      },
      {
       "minutes": 15,
       "activity": "Đọc mở rộng mức dễ",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Giao bài",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "OGS2 U25 tr. 115–116",
     "assessment": "—"
    },
    {
     "session_id": "BU-25",
     "session_no": 25,
     "week": 13,
     "unit": "U3",
     "unit_title": "Animal magic",
     "type": "Project & Check",
     "sb_pages": "40*",
     "focus": "U3 · Ôn tập và Dự án · SB tr. 40* + GF tr. 120–121*",
     "task": "Video Panda protection; dự án Animal sanctuaries; unit check U3",
     "ket_part": "R5: điền do/does/doesn't và từ để hỏi vào đoạn văn 6 chỗ trống",
     "ket_codes": [
      "R5"
     ],
     "grammar": "(+) do/does trong câu hỏi, doesn't trong phủ định ngôi thứ ba (Does it eat meat? It doesn't fly.)",
     "vocabulary": "Ôn từ vựng U3",
     "can_do": "Đạt ≥ 70% unit check U3; do/does đúng ≥ 8/10",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 25,
       "activity": "Grammar Foundation (ngữ pháp bổ trợ)",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Unit check",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Video Switch on",
       "category": "input"
      },
      {
       "minutes": 35,
       "activity": "Hoàn thiện và trình bày dự án",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Trình bày lại cho nhóm thứ hai",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Tự đánh giá unit",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Bảo vệ loài quý hiếm",
     "materials": "OGS2 U11 tr. 49–54",
     "assessment": "—"
    },
    {
     "session_id": "BU-26",
     "session_no": 26,
     "week": 13,
     "unit": "Sự kiện",
     "unit_title": "Công dân toàn cầu",
     "type": "Sự kiện",
     "sb_pages": "—",
     "focus": "Sự kiện E4 · Wildlife Heroes Talk Show",
     "task": "—",
     "ket_part": "S2, S4: trả lời câu hỏi người dẫn có lý do; R2: đọc tư liệu về loài vật để chuẩn bị",
     "ket_codes": [
      "S1",
      "S2",
      "R2"
     ],
     "grammar": "—",
     "vocabulary": "Động vật, môi trường sống; hiện tại đơn, tần suất, because",
     "can_do": "Mỗi nhóm dựng talk show 5 phút về một loài cần bảo vệ ở Việt Nam, trả lời ≥ 2 câu hỏi của khán giả",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 20,
       "activity": "Chuẩn bị ngôn ngữ cho sản phẩm",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Thực hiện sản phẩm trước khán giả",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Phản hồi theo rubric",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá năng lực",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Đa dạng sinh học; nguyên nhân và giải pháp (UNESCO: vấn đề toàn cầu)",
     "materials": "Rubric 4 tiêu chí: ngôn ngữ, nội dung, hợp tác, trình bày",
     "assessment": "—"
    },
    {
     "session_id": "BU-27",
     "session_no": 27,
     "week": 14,
     "unit": "U4",
     "unit_title": "Let's explore",
     "type": "Reading",
     "sb_pages": "43–46",
     "focus": "U4 Let's explore · Reading + Grammar 1 · SB tr. 43–46",
     "task": "Đọc về trò chơi khám phá ngoài đời thực, chọn đáp án, điền từ trắc nghiệm",
     "ket_part": "R1: đọc 6 biển báo nơi công cộng, phân biệt cấm, bắt buộc, cho phép (dạng R&W Part 1)",
     "ket_codes": [
      "R1"
     ],
     "grammar": "Câu mệnh lệnh: Turn left. / Don't run. · must / mustn't + V (You must wear a helmet. You mustn't eat here.)",
     "vocabulary": "Công trình, địa điểm: library, museum, post office, hospital, station, bank, cinema, park, sports centre",
     "can_do": "Đúng ≥ 4/6 câu biển báo; 5 quy tắc must/mustn't, ≥ 4 đúng",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất bài cũ",
       "category": "lang"
      },
      {
       "minutes": 5,
       "activity": "Từ khóa trước khi đọc",
       "category": "lang"
      },
      {
       "minutes": 25,
       "activity": "Đọc bài SB và nhiệm vụ",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Ngữ pháp 1: tìm quy tắc từ bài đọc, luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Dùng cấu trúc trong câu nói, viết của mình",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "1 part KET Đọc",
       "category": "input"
      },
      {
       "minutes": 10,
       "activity": "Đọc nhanh lại bài quen có bấm giờ",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Phiếu cuối buổi",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Quy tắc nơi công cộng",
     "materials": "T1 Test 2 R&W Part 1 tr. 44–47*; OGS1 U15 tr. 79–82",
     "assessment": "—"
    },
    {
     "session_id": "BU-28",
     "session_no": 28,
     "week": 14,
     "unit": "U4",
     "unit_title": "Let's explore",
     "type": "Listening",
     "sb_pages": "47, 49*",
     "focus": "U4 · Listening + Vocabulary · SB tr. 47, 49*",
     "task": "Nghe về ứng dụng trò chơi, tìm đồ vật trong tranh, điền thông tin",
     "ket_part": "L1: chọn tranh về phương tiện, địa điểm · L2: điền 5 thông tin (giờ, giá vé, tên trạm được đánh vần)",
     "ket_codes": [
      "L1",
      "L2"
     ],
     "grammar": "Ôn giới từ và giờ khi nghe chỉ dẫn",
     "vocabulary": "Phương tiện: bus, train, plane, ferry, motorbike, helicopter, taxi, tram; by bus / on foot",
     "can_do": "Đúng ≥ 4/5 câu chọn tranh; ≥ 3/5 thông tin",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Từ vựng 2: giới thiệu, luyện, trò chơi",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Nghe bài SB theo 3 bước trước – trong – sau",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "1 part KET Nghe",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Nói cặp dùng từ mới",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Nghe lại bài quen không nhìn chữ, tốc độ thật",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Phiếu cuối buổi",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 2 Listening Part 1–2 tr. 62–65*",
     "assessment": "—"
    },
    {
     "session_id": "BU-29",
     "session_no": 29,
     "week": 15,
     "unit": "U4",
     "unit_title": "Let's explore",
     "type": "Speaking",
     "sb_pages": "48, 50*",
     "focus": "U4 · Speaking (+ Grammar 2) · SB tr. 48, 50*",
     "task": "Đến nơi mới, hỏi đường, nhờ giúp đỡ",
     "ket_part": "S1: trả lời câu hỏi về khả năng · S3: thảo luận chọn nơi đi chơi theo tranh, gợi ý Let's… / Why don't we…? và hỏi ý bạn",
     "ket_codes": [
      "S1",
      "S2"
     ],
     "grammar": "can / can't chỉ khả năng (I can swim. Can you ride a bike? – Yes, I can.) · đại từ tân ngữ me, you, him, her, it, us, them",
     "vocabulary": "Chỉ đường: go straight on, turn left/right, it's opposite…, Excuse me, can you help me?",
     "can_do": "6 câu với can ≥ 5 đúng; thảo luận chọn nơi đi chơi",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Ngữ pháp 2: trình bày, luyện",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Nghe hội thoại mẫu, cụm từ chức năng",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Nhiệm vụ nói SB theo cặp",
       "category": "output"
      },
      {
       "minutes": 20,
       "activity": "Speaking KET Part 1 hoặc 2",
       "category": "output"
      },
      {
       "minutes": 20,
       "activity": "Nói 4/3/2: cùng nội dung nói với 3 bạn trong 4, 3, 2 phút",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Nhận xét theo rubric",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Hỏi lại khi chưa hiểu",
     "materials": "OGS2 U19 tr. 91–94; SB Pairwork tr. 143",
     "assessment": "—"
    },
    {
     "session_id": "BU-30",
     "session_no": 30,
     "week": 15,
     "unit": "U4",
     "unit_title": "Let's explore",
     "type": "Writing",
     "sb_pages": "51*",
     "focus": "U4 · Writing · SB tr. 51*",
     "task": "Viết ghi chú, danh sách, tin nhắn; xác định thông tin cần đưa vào",
     "ket_part": "W1: viết tin nhắn hẹn bạn ≥ 25 từ đủ 3 ý (nơi gặp, giờ, mang theo gì) · W3: soát giờ, tên địa điểm",
     "ket_codes": [
      "W6"
     ],
     "grammar": "Câu mệnh lệnh trong tin nhắn; giới từ thời gian và nơi chốn",
     "vocabulary": "Cụm hẹn gặp: Let's meet at… / Don't forget to bring… / See you there!",
     "can_do": "Tin nhắn hẹn bạn ≥ 25 từ đủ 3 ý",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Đọc và phân tích bài mẫu",
       "category": "input"
      },
      {
       "minutes": 5,
       "activity": "Dàn ý",
       "category": "lang"
      },
      {
       "minutes": 25,
       "activity": "Viết trên lớp theo dạng SB hoặc KET Part 6, 7",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Tự chấm và chấm chéo theo rubric, sửa lỗi chung",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Viết nhanh 10 phút không chấm lỗi",
       "category": "fluency"
      },
      {
       "minutes": 15,
       "activity": "Đọc mở rộng mức dễ",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Giao bài",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 1 R&W Part 6 Exam practice tr. 25–26*",
     "assessment": "—"
    },
    {
     "session_id": "BU-31",
     "session_no": 31,
     "week": 16,
     "unit": "U4",
     "unit_title": "Let's explore",
     "type": "Project & Check",
     "sb_pages": "52*",
     "focus": "U4 · Ôn tập và Dự án · SB tr. 52* + GF tr. 122–123*",
     "task": "Video School journeys; dự án video diary; unit check U4",
     "ket_part": "R5: điền giới từ, đại từ tân ngữ vào đoạn văn 6 chỗ trống",
     "ket_codes": [
      "R5"
     ],
     "grammar": "(+) Giới từ chỉ vị trí, hướng: opposite, between, next to, along, across, past",
     "vocabulary": "Ôn từ vựng U4",
     "can_do": "Đạt ≥ 70% unit check U4; giới từ chỉ đường ≥ 8/10",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 25,
       "activity": "Grammar Foundation (ngữ pháp bổ trợ)",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Unit check",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Video Switch on",
       "category": "input"
      },
      {
       "minutes": 35,
       "activity": "Hoàn thiện và trình bày dự án",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Trình bày lại cho nhóm thứ hai",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Tự đánh giá unit",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "An toàn giao thông",
     "materials": "OGS1 U24 tr. 122–124",
     "assessment": "—"
    },
    {
     "session_id": "BU-32",
     "session_no": 32,
     "week": 16,
     "unit": "Sự kiện",
     "unit_title": "Công dân toàn cầu",
     "type": "Sự kiện",
     "sb_pages": "—",
     "focus": "Sự kiện E5 · Safe City Walk",
     "task": "—",
     "ket_part": "R1: đọc biển báo thật quanh trung tâm; S1: hỏi – chỉ đường",
     "ket_codes": [
      "R1",
      "S1"
     ],
     "grammar": "—",
     "vocabulary": "Địa điểm, chỉ đường, biển báo; must/mustn't",
     "can_do": "Mỗi nhóm làm bản đồ an toàn có ≥ 6 biển báo và 6 quy tắc viết bằng tiếng Anh",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 20,
       "activity": "Chuẩn bị ngôn ngữ cho sản phẩm",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Thực hiện sản phẩm trước khán giả",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Phản hồi theo rubric",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá năng lực",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "An toàn và quy tắc nơi công cộng (UNESCO: cộng đồng)",
     "materials": "Rubric 4 tiêu chí: ngôn ngữ, nội dung, hợp tác, trình bày",
     "assessment": "—"
    },
    {
     "session_id": "BU-33",
     "session_no": 33,
     "week": 17,
     "unit": "U5",
     "unit_title": "Fun with food",
     "type": "Reading",
     "sb_pages": "53–56",
     "focus": "U5 Fun with food · Reading + Grammar 1 · SB tr. 53–56",
     "task": "Đọc về Ngày của người chết ở Mexico, suy nghĩ trước khi đọc, trả lời câu hỏi",
     "ket_part": "R3: đọc bài khoảng 200 từ, trả lời 5 câu trắc nghiệm về chi tiết và ý kiến (dạng R&W Part 3); đọc lướt lấy ý trước, rồi đọc kỹ từng đoạn",
     "ket_codes": [
      "R3"
     ],
     "grammar": "Hiện tại tiếp diễn: am/is/are + V-ing; phủ định; câu hỏi Are they…? · quy tắc -ing (making, swimming, lying)",
     "vocabulary": "Đồ ăn, thức uống: bread, cheese, rice, noodles, chicken, fruit, juice, sweets, cake",
     "can_do": "Đúng ≥ 5/6 câu SB và ≥ 3/5 câu T1 Part 3",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất bài cũ",
       "category": "lang"
      },
      {
       "minutes": 5,
       "activity": "Từ khóa trước khi đọc",
       "category": "lang"
      },
      {
       "minutes": 25,
       "activity": "Đọc bài SB và nhiệm vụ",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Ngữ pháp 1: tìm quy tắc từ bài đọc, luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Dùng cấu trúc trong câu nói, viết của mình",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "1 part KET Đọc",
       "category": "input"
      },
      {
       "minutes": 10,
       "activity": "Đọc nhanh lại bài quen có bấm giờ",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Phiếu cuối buổi",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Tôn trọng phong tục khác mình",
     "materials": "T1 Test 1 R&W Part 3 tr. 18–20; OGS2 U12 tr. 55–59",
     "assessment": "—"
    },
    {
     "session_id": "BU-34",
     "session_no": 34,
     "week": 17,
     "unit": "U5",
     "unit_title": "Fun with food",
     "type": "Listening",
     "sb_pages": "57, 59*",
     "focus": "U5 · Listening + Vocabulary · SB tr. 57, 59*",
     "task": "Nghe về lễ hội thả diều, tìm người trong tranh, nối",
     "ket_part": "L1: chọn tranh theo thời tiết, hoạt động · L5: nối 5 người với hoạt động trong lễ hội",
     "ket_codes": [
      "L1",
      "L5"
     ],
     "grammar": "What's the weather like? – It's sunny. / It's raining. (tiếp diễn với thời tiết)",
     "vocabulary": "Thời tiết: sunny, cloudy, windy, rainy, snowy, foggy, hot, cold, warm",
     "can_do": "Đúng ≥ 4/5 câu SB; ≥ 3/5 câu Listening Part 5",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Từ vựng 2: giới thiệu, luyện, trò chơi",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Nghe bài SB theo 3 bước trước – trong – sau",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "1 part KET Nghe",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Nói cặp dùng từ mới",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Nghe lại bài quen không nhìn chữ, tốc độ thật",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Phiếu cuối buổi",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 2 Listening Part 5 tr. 70–73*",
     "assessment": "—"
    },
    {
     "session_id": "BU-35",
     "session_no": 35,
     "week": 18,
     "unit": "U5",
     "unit_title": "Fun with food",
     "type": "Speaking",
     "sb_pages": "58, 60*",
     "focus": "U5 · Speaking (+ Grammar 2) · SB tr. 58, 60*",
     "task": "Nói về thời tiết tốt, xấu; tìm điểm khác giữa 2 tranh",
     "ket_part": "S3: thảo luận chọn món cho bữa tiệc lớp từ 5 tranh, hỏi ý bạn ≥ 2 lần, đưa lý do (Speaking Part 2 phase 1)",
     "ket_codes": [
      "S2"
     ],
     "grammar": "Danh từ đếm được – không đếm được; a/an với số ít; some (khẳng định), any (phủ định, câu hỏi); How much / How many",
     "vocabulary": "Đồ ăn cho bữa tiệc; đơn vị a bottle of, a piece of, a packet of",
     "can_do": "Thảo luận chọn món, hỏi ý bạn ≥ 2 lần, ≥ 2 lý do",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Ngữ pháp 2: trình bày, luyện",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Nghe hội thoại mẫu, cụm từ chức năng",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Nhiệm vụ nói SB theo cặp",
       "category": "output"
      },
      {
       "minutes": 20,
       "activity": "Speaking KET Part 1 hoặc 2",
       "category": "output"
      },
      {
       "minutes": 20,
       "activity": "Nói 4/3/2: cùng nội dung nói với 3 bạn trong 4, 3, 2 phút",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Nhận xét theo rubric",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 2 Speaking Part 2 tr. 76–77*; OGS2 U18 tr. 85–88",
     "assessment": "—"
    },
    {
     "session_id": "BU-36",
     "session_no": 36,
     "week": 18,
     "unit": "U5",
     "unit_title": "Fun with food",
     "type": "Writing",
     "sb_pages": "61*",
     "focus": "U5 · Writing · SB tr. 61*",
     "task": "Lập kế hoạch bữa tiệc, ghi chú, viết mô tả bữa tiệc",
     "ket_part": "W1: viết email mời bạn dự tiệc ≥ 25 từ đủ 3 ý (thời gian, địa điểm, mang theo gì)",
     "ket_codes": [
      "W6"
     ],
     "grammar": "Lời mời và đề nghị: Would you like to come…? Can you bring…? · some/any trong danh sách",
     "vocabulary": "Bữa tiệc: invitation, guests, music, games, decorations",
     "can_do": "Email mời bạn ≥ 25 từ đủ 3 ý",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Đọc và phân tích bài mẫu",
       "category": "input"
      },
      {
       "minutes": 5,
       "activity": "Dàn ý",
       "category": "lang"
      },
      {
       "minutes": 25,
       "activity": "Viết trên lớp theo dạng SB hoặc KET Part 6, 7",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Tự chấm và chấm chéo theo rubric, sửa lỗi chung",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Viết nhanh 10 phút không chấm lỗi",
       "category": "fluency"
      },
      {
       "minutes": 15,
       "activity": "Đọc mở rộng mức dễ",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Giao bài",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Chia việc khi tổ chức sự kiện",
     "materials": "T1 Test 2 R&W Part 6 tr. 58–59*",
     "assessment": "—"
    },
    {
     "session_id": "BU-37",
     "session_no": 37,
     "week": 19,
     "unit": "U5",
     "unit_title": "Fun with food",
     "type": "Project & Check",
     "sb_pages": "62*",
     "focus": "U5 · Ôn tập và Dự án · SB tr. 62* + GF tr. 124–125*",
     "task": "Video Frozen Museum; dự án Fun Food Museum; unit check U5",
     "ket_part": "R5: điền trợ động từ am/is/are, do/does vào đoạn văn 6 chỗ trống",
     "ket_codes": [
      "R5"
     ],
     "grammar": "(+) Hiện tại đơn và hiện tại tiếp diễn: every day, usually vs now, at the moment (I usually walk to school, but today I'm taking the bus.)",
     "vocabulary": "Ôn từ vựng U5",
     "can_do": "Đạt ≥ 70% unit check U5; hiện tại đơn/tiếp diễn ≥ 8/10",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 25,
       "activity": "Grammar Foundation (ngữ pháp bổ trợ)",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Unit check",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Video Switch on",
       "category": "input"
      },
      {
       "minutes": 35,
       "activity": "Hoàn thiện và trình bày dự án",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Trình bày lại cho nhóm thứ hai",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Tự đánh giá unit",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Giảm lãng phí thực phẩm",
     "materials": "OGS2 U13 tr. 60–63",
     "assessment": "—"
    },
    {
     "session_id": "BU-38",
     "session_no": 38,
     "week": 19,
     "unit": "Sự kiện",
     "unit_title": "Công dân toàn cầu",
     "type": "Sự kiện",
     "sb_pages": "—",
     "focus": "Sự kiện E6 · Festivals Around the World",
     "task": "—",
     "ket_part": "S2, S3: giới thiệu gian hàng, trả lời khách; W1: tờ rơi ≥ 25 từ",
     "ket_codes": [
      "S1",
      "S2",
      "W6"
     ],
     "grammar": "—",
     "vocabulary": "Đồ ăn, lễ hội; hiện tại tiếp diễn để tả hoạt động",
     "can_do": "Mỗi nhóm dựng gian hàng một lễ hội Việt Nam và một lễ hội nước ngoài, giới thiệu cho ≥ 5 vị khách",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 20,
       "activity": "Chuẩn bị ngôn ngữ cho sản phẩm",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Thực hiện sản phẩm trước khán giả",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Phản hồi theo rubric",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá năng lực",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Tôn trọng sự đa dạng văn hóa",
     "materials": "Rubric 4 tiêu chí: ngôn ngữ, nội dung, hợp tác, trình bày",
     "assessment": "—"
    },
    {
     "session_id": "BU-39",
     "session_no": 39,
     "week": 20,
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Review",
     "sb_pages": "—",
     "focus": "Củng cố · Nghe – Đọc",
     "task": "—",
     "ket_part": "R2: 3 văn bản, 7 câu – tìm từ đồng nghĩa · L5: nối thông tin – gạch tên, chú ý phủ định",
     "ket_codes": [
      "R2",
      "L5"
     ],
     "grammar": "Nhận ra tần suất, can, must, hiện tại tiếp diễn trong văn bản",
     "vocabulary": "Động vật, thị trấn, đồ ăn, thời tiết",
     "can_do": "Đúng ≥ 4/7 câu R&W Part 2; ≥ 3/5 câu Listening Part 5",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn từ vựng học phần",
       "category": "lang"
      },
      {
       "minutes": 25,
       "activity": "KET part 1: làm – chữa – rút chiến lược",
       "category": "input"
      },
      {
       "minutes": 25,
       "activity": "KET part 2: làm – chữa – rút chiến lược",
       "category": "input"
      },
      {
       "minutes": 25,
       "activity": "KET part 3: làm – chữa – rút chiến lược",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Đọc hoặc nghe mở rộng mức dễ",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 1 R&W Part 2 tr. 16–17; SB tr. 41–42*; T1 Test 6 Listening Part 5 tr. 140–141*",
     "assessment": "—"
    },
    {
     "session_id": "BU-40",
     "session_no": 40,
     "week": 20,
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Test",
     "sb_pages": "—",
     "focus": "Củng cố · Nói – Viết + kiểm tra Nói HP2",
     "task": "—",
     "ket_part": "S1, S2: thi Speaking Part 1 · S3: thảo luận Part 2 theo cặp · W1: email Part 6 trong 10 phút",
     "ket_codes": [
      "S1",
      "S2",
      "W6"
     ],
     "grammar": "Câu trả lời có lý do because; gợi ý Let's…",
     "vocabulary": "Sở thích, thị trấn, đồ ăn",
     "can_do": "Mỗi cặp thi Speaking Part 1–2; email Part 6 trong 10 phút",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 90,
       "activity": "GV thi Nói từng cặp 7–10'; các cặp khác viết KET Part 6/7 bấm giờ",
       "category": "test"
      },
      {
       "minutes": 15,
       "activity": "Tự chấm bài viết theo rubric",
       "category": "lang"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 2 Speaking Part 1 tr. 74–75*",
     "assessment": "—"
    },
    {
     "session_id": "BU-41",
     "session_no": 41,
     "week": 21,
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Test",
     "sb_pages": "—",
     "focus": "Ngữ pháp nền + kiểm tra học phần 2",
     "task": "—",
     "ket_part": "E: chia thời gian, điền phiếu · R2, R5, L5 trong bài kiểm tra",
     "ket_codes": [
      "R2",
      "R5",
      "L5"
     ],
     "grammar": "Trạng từ tần suất, từ để hỏi, can, must, mệnh lệnh, hiện tại tiếp diễn, đếm được – không đếm được",
     "vocabulary": "Ôn từ vựng U3–U5",
     "can_do": "Kiểm tra 60': ≥ 50% mỗi part KET; ≥ 80% câu ngữ pháp",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 40,
       "activity": "Ôn các điểm ngữ pháp của học phần",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Kiểm tra: các part KET đã học + 20 câu ngữ pháp",
       "category": "test"
      },
      {
       "minutes": 5,
       "activity": "Tự ghi lỗi vào bảng lỗi cá nhân",
       "category": "lang"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "OGS2 Mini-revision tr. 64, Revision 4 tr. 89–90; T1 Test 3 R&W P2, P5, Listening P5",
     "assessment": "—"
    },
    {
     "session_id": "BU-42",
     "session_no": 42,
     "week": 21,
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Review",
     "sb_pages": "—",
     "focus": "Linh hoạt 2: bù hoặc tăng cường",
     "task": "—",
     "ket_part": "Nhóm bù: luyện lại part điểm thấp · Nhóm tăng cường: viết truyện 35 từ theo 3 tranh lần đầu (W2)",
     "ket_codes": [
      "W7"
     ],
     "grammar": "Nhóm bù: các điểm ngữ pháp HP2 chưa đạt · Nhóm tăng cường: quá khứ của be (was/were) làm quen trước",
     "vocabulary": "Theo lỗi của từng học sinh",
     "can_do": "Nhóm bù ≥ 80%; nhóm tăng cường viết truyện 35 từ lần đầu",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "OGS2 U16, U19, U20; SB S&W file",
     "assessment": "—"
    },
    {
     "session_id": "BU-43",
     "session_no": 43,
     "week": 22,
     "unit": "U6",
     "unit_title": "Back in time",
     "type": "Reading",
     "sb_pages": "63–66",
     "focus": "U6 Back in time · Reading + Grammar 1 · SB tr. 63–66",
     "task": "Đọc về chương trình TV về quá khứ, tìm đúng loại từ, điền chỗ trống có tranh",
     "ket_part": "R4: điền từ trắc nghiệm 6 câu, xác định loại từ cần điền (danh từ, tính từ, động từ) trước khi chọn",
     "ket_codes": [
      "R4"
     ],
     "grammar": "was / were; wasn't / weren't; Was it…? Were they…? · there was / there were",
     "vocabulary": "Tính từ mô tả đồ vật: old, modern, heavy, light, comfortable, dangerous, empty, full, expensive, cheap",
     "can_do": "Đúng ≥ 6/8 chỗ SB; ≥ 3/6 câu T1 Part 4",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất bài cũ",
       "category": "lang"
      },
      {
       "minutes": 5,
       "activity": "Từ khóa trước khi đọc",
       "category": "lang"
      },
      {
       "minutes": 25,
       "activity": "Đọc bài SB và nhiệm vụ",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Ngữ pháp 1: tìm quy tắc từ bài đọc, luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Dùng cấu trúc trong câu nói, viết của mình",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "1 part KET Đọc",
       "category": "input"
      },
      {
       "minutes": 10,
       "activity": "Đọc nhanh lại bài quen có bấm giờ",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Phiếu cuối buổi",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 2 R&W Part 4 tr. 52–54*; OGS2 U14 tr. 65–68",
     "assessment": "—"
    },
    {
     "session_id": "BU-44",
     "session_no": 44,
     "week": 22,
     "unit": "U6",
     "unit_title": "Back in time",
     "type": "Listening",
     "sb_pages": "67, 69*",
     "focus": "U6 · Listening + Vocabulary · SB tr. 67, 69*",
     "task": "Nghe về một đêm trong lâu đài, xác định thông tin cần nghe, chọn tranh",
     "ket_part": "L1: chọn tranh · L3: nghe hội thoại dài, 5 câu trắc nghiệm (dạng Listening Part 3), đọc câu hỏi để biết thứ tự thông tin · S5: đọc đúng -ed",
     "ket_codes": [
      "L1",
      "L3"
     ],
     "grammar": "Phát âm đuôi -ed: /t/ (watched, walked), /d/ (played, stayed), /ɪd/ (visited, waited)",
     "vocabulary": "Động từ hoạt động: visit, watch, play, cook, travel, stay, walk, climb",
     "can_do": "≥ 4/5 câu SB; ≥ 3/5 câu Listening Part 3; -ed đúng ≥ 8/10",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Từ vựng 2: giới thiệu, luyện, trò chơi",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Nghe bài SB theo 3 bước trước – trong – sau",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "1 part KET Nghe",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Nói cặp dùng từ mới",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Nghe lại bài quen không nhìn chữ, tốc độ thật",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Phiếu cuối buổi",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 1 Listening Part 3 tr. 33–34*",
     "assessment": "—"
    },
    {
     "session_id": "BU-45",
     "session_no": 45,
     "week": 23,
     "unit": "U6",
     "unit_title": "Back in time",
     "type": "Speaking",
     "sb_pages": "68, 70*",
     "focus": "U6 · Speaking (+ Grammar 2) · SB tr. 68, 70*",
     "task": "Nói về cuộc sống ngày xưa, hỗ trợ bạn, tả tranh",
     "ket_part": "S3: thảo luận tranh cuộc sống xưa 2 phút · S4: trả lời câu hỏi mở rộng của giáo viên (Would you like to live in the past? Why?)",
     "ket_codes": [
      "S2"
     ],
     "grammar": "Quá khứ đơn có quy tắc: V-ed; phủ định didn't + V; câu hỏi Did…? – Yes, they did · chính tả stopped, studied, lived",
     "vocabulary": "Đồ vật, hoạt động xưa và nay: candle, radio, letter, horse and cart",
     "can_do": "Thảo luận tranh 2 phút + 2 câu hỏi mở rộng có lý do",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Ngữ pháp 2: trình bày, luyện",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Nghe hội thoại mẫu, cụm từ chức năng",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Nhiệm vụ nói SB theo cặp",
       "category": "output"
      },
      {
       "minutes": 20,
       "activity": "Speaking KET Part 1 hoặc 2",
       "category": "output"
      },
      {
       "minutes": 20,
       "activity": "Nói 4/3/2: cùng nội dung nói với 3 bạn trong 4, 3, 2 phút",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Nhận xét theo rubric",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Hỗ trợ bạn khi bạn bí ý",
     "materials": "OGS2 U15 tr. 69–74; SB Pairwork tr. 143",
     "assessment": "—"
    },
    {
     "session_id": "BU-46",
     "session_no": 46,
     "week": 23,
     "unit": "U6",
     "unit_title": "Back in time",
     "type": "Writing",
     "sb_pages": "71*",
     "focus": "U6 · Writing · SB tr. 71*",
     "task": "Viết bài blog về bảo tàng cướp biển, chọn từ chính xác",
     "ket_part": "W2: viết truyện ≥ 35 từ theo 3 tranh (dạng R&W Part 7), mỗi tranh ≥ 1 câu, ≥ 4 động từ quá khứ đúng",
     "ket_codes": [
      "W7"
     ],
     "grammar": "Quá khứ đơn khi kể chuyện; từ chỉ trình tự first, then, after that, finally",
     "vocabulary": "Bảo tàng, cướp biển: ship, treasure, map, island, captain",
     "can_do": "Truyện ≥ 35 từ theo 3 tranh, ≥ 4 động từ quá khứ đúng",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Đọc và phân tích bài mẫu",
       "category": "input"
      },
      {
       "minutes": 5,
       "activity": "Dàn ý",
       "category": "lang"
      },
      {
       "minutes": 25,
       "activity": "Viết trên lớp theo dạng SB hoặc KET Part 6, 7",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Tự chấm và chấm chéo theo rubric, sửa lỗi chung",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Viết nhanh 10 phút không chấm lỗi",
       "category": "fluency"
      },
      {
       "minutes": 15,
       "activity": "Đọc mở rộng mức dễ",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Giao bài",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 1 R&W Part 7 tr. 27*",
     "assessment": "—"
    },
    {
     "session_id": "BU-47",
     "session_no": 47,
     "week": 24,
     "unit": "U6",
     "unit_title": "Back in time",
     "type": "Project & Check",
     "sb_pages": "72*",
     "focus": "U6 · Ôn tập và Dự án · SB tr. 72* + GF tr. 126–127*",
     "task": "Video Frontier House; dự án life in the past; unit check U6",
     "ket_part": "R5: điền was/were, there was/were, giới từ thời gian vào đoạn văn 6 chỗ trống",
     "ket_codes": [
      "R5"
     ],
     "grammar": "(+) Trạng từ thời gian quá khứ: yesterday, last week/month/year, two days ago, in 2010",
     "vocabulary": "Ôn từ vựng U6",
     "can_do": "Đạt ≥ 70% unit check U6; was/were ≥ 8/10",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 25,
       "activity": "Grammar Foundation (ngữ pháp bổ trợ)",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Unit check",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Video Switch on",
       "category": "input"
      },
      {
       "minutes": 35,
       "activity": "Hoàn thiện và trình bày dự án",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Trình bày lại cho nhóm thứ hai",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Tự đánh giá unit",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Di sản quê hương",
     "materials": "OGS2 Mini-revision tr. 75",
     "assessment": "—"
    },
    {
     "session_id": "BU-48",
     "session_no": 48,
     "week": 24,
     "unit": "Sự kiện",
     "unit_title": "Công dân toàn cầu",
     "type": "Sự kiện",
     "sb_pages": "—",
     "focus": "Sự kiện E7 · Heritage Detectives",
     "task": "—",
     "ket_part": "S4: thuyết minh và trả lời câu hỏi; W2: kể lại chuyến đi theo 3 ảnh",
     "ket_codes": [
      "S2",
      "W7"
     ],
     "grammar": "—",
     "vocabulary": "Quá khứ đơn, was/were; tính từ mô tả công trình",
     "can_do": "Mỗi học sinh thuyết minh 1 phút tại một điểm di tích địa phương bằng ≥ 5 câu quá khứ",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 20,
       "activity": "Chuẩn bị ngôn ngữ cho sản phẩm",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Thực hiện sản phẩm trước khán giả",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Phản hồi theo rubric",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá năng lực",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Di sản và bản sắc cộng đồng",
     "materials": "Rubric 4 tiêu chí: ngôn ngữ, nội dung, hợp tác, trình bày",
     "assessment": "—"
    },
    {
     "session_id": "BU-49",
     "session_no": 49,
     "week": 25,
     "unit": "U7",
     "unit_title": "Bright sparks",
     "type": "Reading",
     "sb_pages": "75–78",
     "focus": "U7 Bright sparks · Reading + Grammar 1 · SB tr. 75–78",
     "task": "Đọc về những thiếu niên đáng nể, nhận ra từ đi cùng nhau, hoàn thành câu",
     "ket_part": "R2: so khớp thông tin 3 nhân vật · R3: bài dài về một thiếu niên, 5 câu trắc nghiệm, chú ý ý kiến người viết",
     "ket_codes": [
      "R2",
      "R3"
     ],
     "grammar": "Quá khứ đơn bất quy tắc: go – went, see – saw, make – made, win – won, have – had, get – got · câu hỏi Did you…?",
     "vocabulary": "Nghề nghiệp: doctor, engineer, pilot, vet, scientist, journalist, chef, firefighter",
     "can_do": "≥ 6/8 câu SB; ≥ 3/5 câu T1 Part 3; ≥ 12/15 động từ bất quy tắc",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất bài cũ",
       "category": "lang"
      },
      {
       "minutes": 5,
       "activity": "Từ khóa trước khi đọc",
       "category": "lang"
      },
      {
       "minutes": 25,
       "activity": "Đọc bài SB và nhiệm vụ",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Ngữ pháp 1: tìm quy tắc từ bài đọc, luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Dùng cấu trúc trong câu nói, viết của mình",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "1 part KET Đọc",
       "category": "input"
      },
      {
       "minutes": 10,
       "activity": "Đọc nhanh lại bài quen có bấm giờ",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Phiếu cuối buổi",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Thiếu niên tạo thay đổi",
     "materials": "T1 Test 2 R&W Part 3 tr. 50–51*; SB Irregular verbs tr. 151",
     "assessment": "—"
    },
    {
     "session_id": "BU-50",
     "session_no": 50,
     "week": 25,
     "unit": "U7",
     "unit_title": "Bright sparks",
     "type": "Listening",
     "sb_pages": "79, 81*",
     "focus": "U7 · Listening + Vocabulary · SB tr. 79, 81*",
     "task": "Nghe về chế tạo robot dự thi, viết đúng chính tả, điền chỗ trống",
     "ket_part": "L2: điền 5 thông tin (tên đánh vần, số, ngày) dạng Listening Part 2, kiểm tra chính tả sau khi nghe",
     "ket_codes": [
      "L2"
     ],
     "grammar": "Ôn quá khứ bất quy tắc khi nghe kể",
     "vocabulary": "Động từ bất quy tắc nhóm 2: build – built, buy – bought, think – thought, find – found, write – wrote",
     "can_do": "≥ 3/5 thông tin Listening Part 2, đúng chính tả",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Từ vựng 2: giới thiệu, luyện, trò chơi",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Nghe bài SB theo 3 bước trước – trong – sau",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "1 part KET Nghe",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Nói cặp dùng từ mới",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Nghe lại bài quen không nhìn chữ, tốc độ thật",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Phiếu cuối buổi",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 2 Listening Part 2 tr. 64–65*",
     "assessment": "—"
    },
    {
     "session_id": "BU-51",
     "session_no": 51,
     "week": 26,
     "unit": "U7",
     "unit_title": "Bright sparks",
     "type": "Speaking",
     "sb_pages": "80, 82*",
     "focus": "U7 · Speaking (+ Grammar 2) · SB tr. 80, 82*",
     "task": "Kể chuyện theo tranh \"The model plane\", dùng từ nối",
     "ket_part": "S2: trả lời \"Tell me about your last weekend\" ≥ 4 câu quá khứ · S4: trả lời câu hỏi mở rộng (What did you like most? Why?)",
     "ket_codes": [
      "S1",
      "S2"
     ],
     "grammar": "Câu hỏi Wh- ở quá khứ: What did you do? Where did you go? Who did you see?",
     "vocabulary": "Từ nối kể chuyện: first, then, next, after that, in the end",
     "can_do": "\"Last weekend\" ≥ 4 câu quá khứ + 2 câu hỏi mở rộng",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Ngữ pháp 2: trình bày, luyện",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Nghe hội thoại mẫu, cụm từ chức năng",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Nhiệm vụ nói SB theo cặp",
       "category": "output"
      },
      {
       "minutes": 20,
       "activity": "Speaking KET Part 1 hoặc 2",
       "category": "output"
      },
      {
       "minutes": 20,
       "activity": "Nói 4/3/2: cùng nội dung nói với 3 bạn trong 4, 3, 2 phút",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Nhận xét theo rubric",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "SB Pairwork tr. 143; OGS2 U15 (câu hỏi)",
     "assessment": "—"
    },
    {
     "session_id": "BU-52",
     "session_no": 52,
     "week": 26,
     "unit": "U7",
     "unit_title": "Bright sparks",
     "type": "Writing",
     "sb_pages": "83*",
     "focus": "U7 · Writing · SB tr. 83*",
     "task": "Viết về một người nổi tiếng, viết rõ ý",
     "ket_part": "W2: viết truyện Part 7 ≥ 35 từ có first/then/after that, ≥ 5 động từ quá khứ đúng",
     "ket_codes": [
      "W7"
     ],
     "grammar": "Quá khứ đơn + mệnh đề when (When she was ten, she started…)",
     "vocabulary": "Mốc cuộc đời: was born, went to school, became, won a prize",
     "can_do": "Truyện Part 7 ≥ 35 từ, có liên từ, ≥ 5 động từ quá khứ đúng",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Đọc và phân tích bài mẫu",
       "category": "input"
      },
      {
       "minutes": 5,
       "activity": "Dàn ý",
       "category": "lang"
      },
      {
       "minutes": 25,
       "activity": "Viết trên lớp theo dạng SB hoặc KET Part 6, 7",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Tự chấm và chấm chéo theo rubric, sửa lỗi chung",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Viết nhanh 10 phút không chấm lỗi",
       "category": "fluency"
      },
      {
       "minutes": 15,
       "activity": "Đọc mở rộng mức dễ",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Giao bài",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 2 R&W Part 7 tr. 60–61*",
     "assessment": "—"
    },
    {
     "session_id": "BU-53",
     "session_no": 53,
     "week": 27,
     "unit": "U7",
     "unit_title": "Bright sparks",
     "type": "Project & Check",
     "sb_pages": "84*",
     "focus": "U7 · Ôn tập và Dự án · SB tr. 84* + GF tr. 128–129*",
     "task": "Video Skateboard star; dự án improvement action plan; unit check U7",
     "ket_part": "R5: điền did, didn't, when, giới từ vào đoạn văn 6 chỗ trống",
     "ket_codes": [
      "R5"
     ],
     "grammar": "(+) Mệnh đề when ở quá khứ; dấu phẩy khi when đứng đầu câu",
     "vocabulary": "Ôn từ vựng U7",
     "can_do": "Đạt ≥ 70% unit check U7; 3 mục tiêu cá nhân có thời hạn",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 25,
       "activity": "Grammar Foundation (ngữ pháp bổ trợ)",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Unit check",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Video Switch on",
       "category": "input"
      },
      {
       "minutes": 35,
       "activity": "Hoàn thiện và trình bày dự án",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Trình bày lại cho nhóm thứ hai",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Tự đánh giá unit",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Đặt mục tiêu, kiên trì",
     "materials": "OGS2 U26 tr. 117–119",
     "assessment": "—"
    },
    {
     "session_id": "BU-54",
     "session_no": 54,
     "week": 27,
     "unit": "Sự kiện",
     "unit_title": "Công dân toàn cầu",
     "type": "Sự kiện",
     "sb_pages": "—",
     "focus": "Sự kiện E8 · Young Changemakers",
     "task": "—",
     "ket_part": "S2: kể về một người tạo thay đổi; W1: viết cam kết cá nhân",
     "ket_codes": [
      "S1",
      "W6"
     ],
     "grammar": "—",
     "vocabulary": "Nghề nghiệp, thành tựu; quá khứ đơn; going to (làm quen)",
     "can_do": "Mỗi học sinh trình bày 1 phút về một người trẻ tạo thay đổi và nêu 1 việc em sẽ làm",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 20,
       "activity": "Chuẩn bị ngôn ngữ cho sản phẩm",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Thực hiện sản phẩm trước khán giả",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Phản hồi theo rubric",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá năng lực",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Hành động cá nhân vì cộng đồng (UNESCO: hành động cá nhân và tập thể)",
     "materials": "Rubric 4 tiêu chí: ngôn ngữ, nội dung, hợp tác, trình bày",
     "assessment": "—"
    },
    {
     "session_id": "BU-55",
     "session_no": 55,
     "week": 28,
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Review",
     "sb_pages": "—",
     "focus": "Củng cố · Nghe – Đọc",
     "task": "—",
     "ket_part": "R3: bài dài – đọc câu hỏi trước, tìm đoạn chứa thông tin · R4: loại từ và nghĩa · L3: hội thoại dài, theo thứ tự câu hỏi",
     "ket_codes": [
      "R3",
      "R4",
      "L3"
     ],
     "grammar": "Nhận ra quá khứ đơn có quy tắc và bất quy tắc trong văn bản",
     "vocabulary": "Quá khứ, nghề nghiệp, sự kiện",
     "can_do": "≥ 3/5 câu R&W Part 3; ≥ 3/5 câu Listening Part 3",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn từ vựng học phần",
       "category": "lang"
      },
      {
       "minutes": 25,
       "activity": "KET part 1: làm – chữa – rút chiến lược",
       "category": "input"
      },
      {
       "minutes": 25,
       "activity": "KET part 2: làm – chữa – rút chiến lược",
       "category": "input"
      },
      {
       "minutes": 25,
       "activity": "KET part 3: làm – chữa – rút chiến lược",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Đọc hoặc nghe mở rộng mức dễ",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 6 R&W Part 3 tr. 128–129*; T1 Test 2 Listening Part 3 tr. 66–67*; SB tr. 73–74*",
     "assessment": "—"
    },
    {
     "session_id": "BU-56",
     "session_no": 56,
     "week": 28,
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Test",
     "sb_pages": "—",
     "focus": "Củng cố · Nói – Viết + kiểm tra Nói HP3",
     "task": "—",
     "ket_part": "W2: truyện Part 7 trong 12 phút · S3, S4: thi Speaking Part 2 đủ 2 phase theo cặp",
     "ket_codes": [
      "W7",
      "S2"
     ],
     "grammar": "Quá khứ đơn + từ chỉ trình tự",
     "vocabulary": "Kể chuyện quá khứ",
     "can_do": "Part 7 trong 12 phút; mỗi cặp thi Speaking Part 2",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 90,
       "activity": "GV thi Nói từng cặp 7–10'; các cặp khác viết KET Part 6/7 bấm giờ",
       "category": "test"
      },
      {
       "minutes": 15,
       "activity": "Tự chấm bài viết theo rubric",
       "category": "lang"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 6 R&W Part 7 tr. 134–135*; SB Pairwork tr. 143",
     "assessment": "—"
    },
    {
     "session_id": "BU-57",
     "session_no": 57,
     "week": 29,
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Test",
     "sb_pages": "—",
     "focus": "Ngữ pháp nền + kiểm tra học phần 3",
     "task": "—",
     "ket_part": "E: chia thời gian · R3, R4, W2, L3 trong bài kiểm tra",
     "ket_codes": [
      "R3",
      "R4",
      "W7",
      "L3"
     ],
     "grammar": "was/were, there was/were, quá khứ có quy tắc và bất quy tắc, câu hỏi và phủ định quá khứ, when",
     "vocabulary": "Ôn từ vựng U6–U7",
     "can_do": "Kiểm tra 60': ≥ 50% mỗi part KET; ≥ 80% câu ngữ pháp",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 40,
       "activity": "Ôn các điểm ngữ pháp của học phần",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Kiểm tra: các part KET đã học + 20 câu ngữ pháp",
       "category": "test"
      },
      {
       "minutes": 5,
       "activity": "Tự ghi lỗi vào bảng lỗi cá nhân",
       "category": "lang"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "OGS2 Revision 3 tr. 76–77; T1 Test 3 R&W P3, P4, P7, Listening P3",
     "assessment": "—"
    },
    {
     "session_id": "BU-58",
     "session_no": 58,
     "week": 29,
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Review",
     "sb_pages": "—",
     "focus": "Linh hoạt 3: bù hoặc tăng cường",
     "task": "—",
     "ket_part": "Nhóm bù: luyện lại part điểm thấp · Nhóm tăng cường: L4 lần đầu – nghe ý chính, cảm xúc người nói",
     "ket_codes": [
      "L4"
     ],
     "grammar": "Nhóm bù: quá khứ đơn (bài OGS mức ★★★) · Nhóm tăng cường: so sánh hơn làm quen trước",
     "vocabulary": "Theo lỗi của từng học sinh",
     "can_do": "Nhóm bù ≥ 80%; nhóm tăng cường ≥ 2/5 câu Listening Part 4",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "OGS2 U14–15 (★★★); T1 Test 1 Listening Part 4 tr. 35–36*",
     "assessment": "—"
    },
    {
     "session_id": "BU-59",
     "session_no": 59,
     "week": 30,
     "unit": "U8",
     "unit_title": "Top to toe",
     "type": "Reading",
     "sb_pages": "85–88",
     "focus": "U8 Top to toe · Reading + Grammar 1 · SB tr. 85–88",
     "task": "Đọc về bạn bè và cặp sinh đôi (ngoại hình), đọc nhanh, điền từ trắc nghiệm",
     "ket_part": "R4: điền từ trắc nghiệm 6 câu, chú ý cụm cố định (look like, wear glasses, have long hair)",
     "ket_codes": [
      "R4"
     ],
     "grammar": "So sánh hơn: adj-er + than (taller than), more + adj (more beautiful) · bất quy tắc good – better, bad – worse · chính tả bigger, happier",
     "vocabulary": "Bộ phận cơ thể; ngoại hình: tall, short, curly, straight, blond, dark, beard, glasses",
     "can_do": "≥ 6/8 câu SB; ≥ 3/6 câu T1 Part 4",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất bài cũ",
       "category": "lang"
      },
      {
       "minutes": 5,
       "activity": "Từ khóa trước khi đọc",
       "category": "lang"
      },
      {
       "minutes": 25,
       "activity": "Đọc bài SB và nhiệm vụ",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Ngữ pháp 1: tìm quy tắc từ bài đọc, luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Dùng cấu trúc trong câu nói, viết của mình",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "1 part KET Đọc",
       "category": "input"
      },
      {
       "minutes": 10,
       "activity": "Đọc nhanh lại bài quen có bấm giờ",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Phiếu cuối buổi",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 6 R&W Part 4 tr. 130–131*; OGS2 U27 tr. 123–125",
     "assessment": "—"
    },
    {
     "session_id": "BU-60",
     "session_no": 60,
     "week": 30,
     "unit": "U8",
     "unit_title": "Top to toe",
     "type": "Listening",
     "sb_pages": "89, 91*",
     "focus": "U8 · Listening + Vocabulary · SB tr. 89, 91*",
     "task": "Nghe về người giữ kỷ lục thế giới, đoán đáp án, điền chỗ trống",
     "ket_part": "L4: nghe 5 đoạn ngắn, trả lời câu hỏi về ý chính, mục đích, cảm xúc (How does she feel? Why is he calling?) dạng Listening Part 4",
     "ket_codes": [
      "L4"
     ],
     "grammar": "Ôn so sánh hơn khi nghe",
     "vocabulary": "Quần áo: jacket, jeans, trainers, scarf, dress, sweater, boots, cap",
     "can_do": "≥ 3/5 câu nghe ý chính, cảm xúc",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Từ vựng 2: giới thiệu, luyện, trò chơi",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Nghe bài SB theo 3 bước trước – trong – sau",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "1 part KET Nghe",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Nói cặp dùng từ mới",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Nghe lại bài quen không nhìn chữ, tốc độ thật",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Phiếu cuối buổi",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 2 Listening Part 4 tr. 68–69*",
     "assessment": "—"
    },
    {
     "session_id": "BU-61",
     "session_no": 61,
     "week": 31,
     "unit": "U8",
     "unit_title": "Top to toe",
     "type": "Speaking",
     "sb_pages": "90, 92*",
     "focus": "U8 · Speaking (+ Grammar 2) · SB tr. 90, 92*",
     "task": "Nói về kỷ lục kỳ lạ, đoán nội dung tranh",
     "ket_part": "S3: thảo luận chọn quà từ 5 tranh, dùng ≥ 2 câu so sánh, hỏi ý bạn ≥ 2 lần",
     "ket_codes": [
      "S2"
     ],
     "grammar": "So sánh nhất: the + adj-est (the tallest), the most + adj (the most interesting) · the best, the worst",
     "vocabulary": "Cụm phỏng đoán: Maybe…, I think…, It might be…",
     "can_do": "Thảo luận chọn quà, ≥ 2 câu so sánh, hỏi ý bạn ≥ 2 lần",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Ngữ pháp 2: trình bày, luyện",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Nghe hội thoại mẫu, cụm từ chức năng",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Nhiệm vụ nói SB theo cặp",
       "category": "output"
      },
      {
       "minutes": 20,
       "activity": "Speaking KET Part 1 hoặc 2",
       "category": "output"
      },
      {
       "minutes": 20,
       "activity": "Nói 4/3/2: cùng nội dung nói với 3 bạn trong 4, 3, 2 phút",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Nhận xét theo rubric",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Tôn trọng khác biệt ngoại hình",
     "materials": "SB Pairwork tr. 143; OGS2 U27",
     "assessment": "—"
    },
    {
     "session_id": "BU-62",
     "session_no": 62,
     "week": 31,
     "unit": "U8",
     "unit_title": "Top to toe",
     "type": "Writing",
     "sb_pages": "93*",
     "focus": "U8 · Writing · SB tr. 93*",
     "task": "Viết truyện ngắn theo tranh về chuyến đi cửa hàng thú cưng",
     "ket_part": "W2: viết truyện Part 7 trong 12 phút, đủ 3 tranh, ≤ 4 lỗi ngữ pháp",
     "ket_codes": [
      "W7"
     ],
     "grammar": "Quá khứ đơn + liên từ; so sánh trong mô tả",
     "vocabulary": "Thú cưng, cửa hàng: pet shop, puppy, kitten, cage, owner",
     "can_do": "Part 7 trong 12 phút, đủ 3 tranh, ≤ 4 lỗi",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Đọc và phân tích bài mẫu",
       "category": "input"
      },
      {
       "minutes": 5,
       "activity": "Dàn ý",
       "category": "lang"
      },
      {
       "minutes": 25,
       "activity": "Viết trên lớp theo dạng SB hoặc KET Part 6, 7",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Tự chấm và chấm chéo theo rubric, sửa lỗi chung",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Viết nhanh 10 phút không chấm lỗi",
       "category": "fluency"
      },
      {
       "minutes": 15,
       "activity": "Đọc mở rộng mức dễ",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Giao bài",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 5 R&W Part 7 tr. 118–119*",
     "assessment": "—"
    },
    {
     "session_id": "BU-63",
     "session_no": 63,
     "week": 32,
     "unit": "U8",
     "unit_title": "Top to toe",
     "type": "Project & Check",
     "sb_pages": "94*",
     "focus": "U8 · Ôn tập và Dự án · SB tr. 94* + GF tr. 130–131*",
     "task": "Video Meet my family; dự án Record breakers; unit check U8",
     "ket_part": "R5: điền than, the, more, as vào đoạn văn 6 chỗ trống",
     "ket_codes": [
      "R5"
     ],
     "grammar": "(+) as … as / not as … as; phân biệt than và then",
     "vocabulary": "Ôn từ vựng U8",
     "can_do": "Đạt ≥ 70% unit check U8; than, the, more ≥ 8/10",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 25,
       "activity": "Grammar Foundation (ngữ pháp bổ trợ)",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Unit check",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Video Switch on",
       "category": "input"
      },
      {
       "minutes": 35,
       "activity": "Hoàn thiện và trình bày dự án",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Trình bày lại cho nhóm thứ hai",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Tự đánh giá unit",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Nói không với chê bai",
     "materials": "OGS2 Revision 8 tr. 130–131",
     "assessment": "—"
    },
    {
     "session_id": "BU-64",
     "session_no": 64,
     "week": 32,
     "unit": "Sự kiện",
     "unit_title": "Công dân toàn cầu",
     "type": "Sự kiện",
     "sb_pages": "—",
     "focus": "Sự kiện E9 · Kindness Week",
     "task": "—",
     "ket_part": "S3: thảo luận quy tắc lớp học tử tế; W1: thẻ lời khen",
     "ket_codes": [
      "S2",
      "W6"
     ],
     "grammar": "—",
     "vocabulary": "Ngoại hình, tính cách; so sánh; lời khen",
     "can_do": "Cả lớp viết ≥ 1 thẻ lời khen cho mỗi bạn và thống nhất 5 cam kết chống bắt nạt",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 20,
       "activity": "Chuẩn bị ngôn ngữ cho sản phẩm",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Thực hiện sản phẩm trước khán giả",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Phản hồi theo rubric",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá năng lực",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Tôn trọng khác biệt, chống bắt nạt",
     "materials": "Rubric 4 tiêu chí: ngôn ngữ, nội dung, hợp tác, trình bày",
     "assessment": "—"
    },
    {
     "session_id": "BU-65",
     "session_no": 65,
     "week": 33,
     "unit": "U9",
     "unit_title": "School's out",
     "type": "Reading",
     "sb_pages": "95–98",
     "focus": "U9 School's out · Reading + Grammar 1 · SB tr. 95–98",
     "task": "Đọc về các môn thể thao nên thử, chuyển thông tin sang bảng, nối",
     "ket_part": "R2: đọc 3 đoạn về 3 môn thể thao, nối 7 câu (dạng R&W Part 2)",
     "ket_codes": [
      "R2"
     ],
     "grammar": "be going to cho kế hoạch, ý định: I'm going to learn… / Are you going to…? – Yes, I am.",
     "vocabulary": "Thể thao, hoạt động: go climbing, do karate, play volleyball, go kayaking, go skateboarding",
     "can_do": "≥ 4/7 câu T1 Part 2; 5 câu kế hoạch với going to",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất bài cũ",
       "category": "lang"
      },
      {
       "minutes": 5,
       "activity": "Từ khóa trước khi đọc",
       "category": "lang"
      },
      {
       "minutes": 25,
       "activity": "Đọc bài SB và nhiệm vụ",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Ngữ pháp 1: tìm quy tắc từ bài đọc, luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Dùng cấu trúc trong câu nói, viết của mình",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "1 part KET Đọc",
       "category": "input"
      },
      {
       "minutes": 10,
       "activity": "Đọc nhanh lại bài quen có bấm giờ",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Phiếu cuối buổi",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 6 R&W Part 2 tr. 127–128*; GF tr. 132–133*",
     "assessment": "—"
    },
    {
     "session_id": "BU-66",
     "session_no": 66,
     "week": 33,
     "unit": "U9",
     "unit_title": "School's out",
     "type": "Listening",
     "sb_pages": "99, 101*",
     "focus": "U9 · Listening + Vocabulary · SB tr. 99, 101*",
     "task": "Nghe về ước mơ tương lai, kiểm tra đáp án, trắc nghiệm đoạn ngắn",
     "ket_part": "L4: nghe 5 đoạn ngắn, chọn ý chính (dạng Listening Part 4); nghe lần 2 để kiểm tra đáp án",
     "ket_codes": [
      "L4"
     ],
     "grammar": "What's the matter? – I've got a headache. · ôn going to",
     "vocabulary": "Vấn đề sức khỏe: headache, stomachache, cold, cough, sore throat, earache",
     "can_do": "≥ 3/5 câu Listening Part 4; ≥ 8/10 từ sức khỏe",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Từ vựng 2: giới thiệu, luyện, trò chơi",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Nghe bài SB theo 3 bước trước – trong – sau",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "1 part KET Nghe",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Nói cặp dùng từ mới",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Nghe lại bài quen không nhìn chữ, tốc độ thật",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Phiếu cuối buổi",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Chăm sóc sức khỏe",
     "materials": "T1 Test 6 Listening Part 4 tr. 139–140*",
     "assessment": "—"
    },
    {
     "session_id": "BU-67",
     "session_no": 67,
     "week": 34,
     "unit": "U9",
     "unit_title": "School's out",
     "type": "Speaking",
     "sb_pages": "100, 102*",
     "focus": "U9 · Speaking (+ Grammar 2) · SB tr. 100, 102*",
     "task": "Nói về kế hoạch, tương tác với bạn, lên kế hoạch cuối tuần",
     "ket_part": "S3: thảo luận chọn hoạt động cuối tuần theo tranh (Speaking Part 2 phase 1) · S4: trả lời câu hỏi mở rộng (What do you like doing at the weekend?)",
     "ket_codes": [
      "S2"
     ],
     "grammar": "like / love / hate + V-ing (I love swimming) · want to / would like to + V (I want to go…)",
     "vocabulary": "Hoạt động cuối tuần; cụm đồng ý, không đồng ý: Good idea! / I'm not sure. / How about…?",
     "can_do": "Thảo luận dạng Speaking Part 2; V-ing/to V đúng ≥ 4 câu",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Ngữ pháp 2: trình bày, luyện",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Nghe hội thoại mẫu, cụm từ chức năng",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Nhiệm vụ nói SB theo cặp",
       "category": "output"
      },
      {
       "minutes": 20,
       "activity": "Speaking KET Part 1 hoặc 2",
       "category": "output"
      },
      {
       "minutes": 20,
       "activity": "Nói 4/3/2: cùng nội dung nói với 3 bạn trong 4, 3, 2 phút",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Nhận xét theo rubric",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Thương lượng với bạn",
     "materials": "SB Pairwork tr. 143; OGS2 \"-ing form or to + base form\"",
     "assessment": "—"
    },
    {
     "session_id": "BU-68",
     "session_no": 68,
     "week": 34,
     "unit": "U9",
     "unit_title": "School's out",
     "type": "Writing",
     "sb_pages": "103*",
     "focus": "U9 · Writing · SB tr. 103*",
     "task": "Viết bưu thiếp kỳ nghỉ, thông điệp rõ ràng",
     "ket_part": "W1: viết email Part 6 trong 10 phút, đủ 3 ý, ≥ 25 từ",
     "ket_codes": [
      "W6"
     ],
     "grammar": "Kết hợp hiện tại tiếp diễn (We're staying…), quá khứ (Yesterday we went…), going to (Tomorrow we're going to…)",
     "vocabulary": "Kỳ nghỉ: hotel, beach, weather, food, activities",
     "can_do": "Email Part 6 trong 10 phút, đủ 3 ý",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn truy xuất",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Đọc và phân tích bài mẫu",
       "category": "input"
      },
      {
       "minutes": 5,
       "activity": "Dàn ý",
       "category": "lang"
      },
      {
       "minutes": 25,
       "activity": "Viết trên lớp theo dạng SB hoặc KET Part 6, 7",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Tự chấm và chấm chéo theo rubric, sửa lỗi chung",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Viết nhanh 10 phút không chấm lỗi",
       "category": "fluency"
      },
      {
       "minutes": 15,
       "activity": "Đọc mở rộng mức dễ",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Giao bài",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 6 R&W Part 6 tr. 132–133*",
     "assessment": "—"
    },
    {
     "session_id": "BU-69",
     "session_no": 69,
     "week": 35,
     "unit": "U9",
     "unit_title": "School's out",
     "type": "Project & Check",
     "sb_pages": "104–106*",
     "focus": "U9 · Ôn tập và Dự án · SB tr. 104–106* + GF tr. 132–133*",
     "task": "Video Survival fun; dự án Survival school; 2 trang ôn tập cuối U9; unit check U9",
     "ket_part": "R5: điền trợ động từ trộn 4 thì vào đoạn văn 6 chỗ trống",
     "ket_codes": [
      "R5"
     ],
     "grammar": "(+) Tổng ôn 4 thì: hiện tại đơn, hiện tại tiếp diễn, quá khứ đơn, be going to – nhận ra qua trạng từ thời gian",
     "vocabulary": "Ôn từ vựng U9",
     "can_do": "Đạt ≥ 70% unit check U9; xác định thì ≥ 8/10",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 25,
       "activity": "Grammar Foundation (ngữ pháp bổ trợ)",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Unit check",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Video Switch on",
       "category": "input"
      },
      {
       "minutes": 35,
       "activity": "Hoàn thiện và trình bày dự án",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Trình bày lại cho nhóm thứ hai",
       "category": "fluency"
      },
      {
       "minutes": 5,
       "activity": "Tự đánh giá unit",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Phân vai trong nhóm",
     "materials": "OGS2 Revision 9 tr. 132–134",
     "assessment": "—"
    },
    {
     "session_id": "BU-70",
     "session_no": 70,
     "week": 35,
     "unit": "Sự kiện",
     "unit_title": "Công dân toàn cầu",
     "type": "Sự kiện",
     "sb_pages": "—",
     "focus": "Sự kiện E10 · Sport and Survival Day",
     "task": "—",
     "ket_part": "L1, L2: nghe hướng dẫn tại trạm; S3: thống nhất chiến thuật nhóm",
     "ket_codes": [
      "L1",
      "L2",
      "S2"
     ],
     "grammar": "—",
     "vocabulary": "Thể thao, sức khỏe; câu mệnh lệnh, going to",
     "can_do": "Mỗi nhóm vượt 4 trạm kỹ năng có hướng dẫn tiếng Anh, mỗi thành viên dẫn 1 trạm",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 20,
       "activity": "Chuẩn bị ngôn ngữ cho sản phẩm",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Thực hiện sản phẩm trước khán giả",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Phản hồi theo rubric",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá năng lực",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Sức khỏe, làm việc nhóm",
     "materials": "Rubric 4 tiêu chí: ngôn ngữ, nội dung, hợp tác, trình bày",
     "assessment": "—"
    },
    {
     "session_id": "BU-71",
     "session_no": 71,
     "week": 36,
     "unit": "U10",
     "unit_title": "Films and friends",
     "type": "Reading",
     "sb_pages": "107–110*",
     "focus": "U10 Films and friends · SB tr. 107–110*",
     "task": "Đọc về học viện điện ảnh (điền từ trắc nghiệm); nghe hội thoại về làm phim (trắc nghiệm)",
     "ket_part": "R4: điền từ trắc nghiệm · L3: hội thoại dài 5 câu trắc nghiệm",
     "ket_codes": [
      "R4",
      "L3"
     ],
     "grammar": "Ôn tổng hợp trong ngữ cảnh đề thi",
     "vocabulary": "Phim ảnh: actor, director, comedy, cartoon, action film, scene, camera",
     "can_do": "≥ 60% câu Đọc, Nghe của U10",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "WB U10 (Đọc, Nghe)",
     "assessment": "—"
    },
    {
     "session_id": "BU-72",
     "session_no": 72,
     "week": 36,
     "unit": "U10",
     "unit_title": "Films and friends",
     "type": "Speaking",
     "sb_pages": "111–113*",
     "focus": "U10 · SB tr. 111–113*",
     "task": "Trao đổi ý kiến về các thể loại phim; viết review",
     "ket_part": "S3: thảo luận thể loại phim 3 phút · W1: email ≥ 25 từ giới thiệu một bộ phim cho bạn",
     "ket_codes": [
      "S2",
      "W6"
     ],
     "grammar": "Nêu ý kiến: I think… / In my opinion… / What do you think? · because, so",
     "vocabulary": "Tính từ đánh giá: exciting, boring, funny, scary, interesting, sad",
     "can_do": "Thảo luận phim 3 phút; email ≥ 25 từ giới thiệu phim",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "Lắng nghe ý kiến khác",
     "materials": "WB U10 (Viết, Nói)",
     "assessment": "—"
    },
    {
     "session_id": "BU-73",
     "session_no": 73,
     "week": 37,
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Review",
     "sb_pages": "—",
     "focus": "Củng cố · Nghe – Đọc",
     "task": "—",
     "ket_part": "R1: biển báo, tin nhắn · R5: điền từ tự do · L1, L2, L3: luyện liên tiếp 3 part như đề thật",
     "ket_codes": [
      "R1",
      "R5",
      "L1",
      "L2",
      "L3"
     ],
     "grammar": "Từ chức năng trong Part 5: trợ động từ, so sánh, giới từ",
     "vocabulary": "Ngoại hình, quần áo, thể thao, sức khỏe, phim ảnh",
     "can_do": "≥ 4/6 câu Part 1, ≥ 3/6 câu Part 5; ≥ 3/5 câu Listening Part 1–3",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn từ vựng học phần",
       "category": "lang"
      },
      {
       "minutes": 25,
       "activity": "KET part 1: làm – chữa – rút chiến lược",
       "category": "input"
      },
      {
       "minutes": 25,
       "activity": "KET part 2: làm – chữa – rút chiến lược",
       "category": "input"
      },
      {
       "minutes": 25,
       "activity": "KET part 3: làm – chữa – rút chiến lược",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Đọc hoặc nghe mở rộng mức dễ",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 6 R&W Part 1, 5 tr. 126*, 131*; Listening Part 1–3 tr. 136–138*",
     "assessment": "—"
    },
    {
     "session_id": "BU-74",
     "session_no": 74,
     "week": 37,
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Test",
     "sb_pages": "—",
     "focus": "Củng cố · Nói – Viết + kiểm tra Nói HP4",
     "task": "—",
     "ket_part": "S1–S4: thi Speaking đầy đủ 10 phút theo cặp · W1, W2: viết Part 6 và Part 7 trong 22 phút",
     "ket_codes": [
      "S1",
      "S2",
      "W6",
      "W7"
     ],
     "grammar": "Câu trả lời mở rộng có because, so; câu hỏi lại bạn",
     "vocabulary": "Tất cả chủ đề đã học",
     "can_do": "Mỗi cặp thi Speaking 10 phút; Part 6–7 trong 22 phút",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 90,
       "activity": "GV thi Nói từng cặp 7–10'; các cặp khác viết KET Part 6/7 bấm giờ",
       "category": "test"
      },
      {
       "minutes": 15,
       "activity": "Tự chấm bài viết theo rubric",
       "category": "lang"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 4 Speaking; bài mẫu Part 6–7 của T1",
     "assessment": "—"
    },
    {
     "session_id": "BU-75",
     "session_no": 75,
     "week": 38,
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Test",
     "sb_pages": "—",
     "focus": "Kiểm tra học phần 4 (đề KET đầy đủ)",
     "task": "—",
     "ket_part": "E: làm Reading & Writing 60 phút và Listening 30 phút như đề thật",
     "ket_codes": [],
     "grammar": "—",
     "vocabulary": "—",
     "can_do": "100% làm đủ đề; ≥ 45% điểm mỗi bài thi",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 60,
       "activity": "Reading and Writing (60')",
       "category": "test"
      },
      {
       "minutes": 30,
       "activity": "Listening (30')",
       "category": "test"
      },
      {
       "minutes": 15,
       "activity": "Speaking theo cặp xen kẽ",
       "category": "test"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 4: R&W tr. 94–103; Listening tr. 104–109",
     "assessment": "—"
    },
    {
     "session_id": "BU-76",
     "session_no": 76,
     "week": 38,
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Review",
     "sb_pages": "—",
     "focus": "Linh hoạt 4: chữa đề + ngữ pháp nền",
     "task": "—",
     "ket_part": "Mỗi học sinh chọn 2 sub-skill yếu nhất, làm lại part tương ứng, đúng thêm ≥ 1 câu",
     "ket_codes": [],
     "grammar": "Các điểm ngữ pháp chưa đạt mức (bảng 25 điểm)",
     "vocabulary": "Theo lỗi của từng học sinh",
     "can_do": "Mỗi HS có kế hoạch 2 sub-skill; part yếu đúng thêm ≥ 1 câu",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Chữa T1 Test 4; GF tr. 114–133* theo lỗi",
     "assessment": "—"
    },
    {
     "session_id": "BU-77",
     "session_no": 77,
     "week": 39,
     "unit": "Luyện thi",
     "unit_title": "A2 Key for Schools",
     "type": "KET Lab",
     "sb_pages": "—",
     "focus": "Luyện thi · R&W Part 1–2",
     "task": "—",
     "ket_part": "E: số part, thời gian, phiếu trả lời của 3 bài thi · R1: 6 văn bản ngắn, tìm mục đích · R2: 3 văn bản, 7 câu, tìm từ đồng nghĩa",
     "ket_codes": [
      "R1",
      "R2"
     ],
     "grammar": "Hiểu modal và mệnh lệnh trong biển báo (must, can't, don't, please)",
     "vocabulary": "Biển báo, thông báo, tin nhắn; văn bản mô tả người, nơi chốn",
     "can_do": "≥ 4/6 câu Part 1; ≥ 4/7 câu Part 2",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 15,
       "activity": "Giới thiệu dạng bài và chiến lược",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Lượt 1: làm – chữa",
       "category": "input"
      },
      {
       "minutes": 30,
       "activity": "Lượt 2: làm – chữa",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Làm lại câu sai với đề khác",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "KfS1 Test 1 R&W Part 1–2 tr. 8–11*",
     "assessment": "—"
    },
    {
     "session_id": "BU-78",
     "session_no": 78,
     "week": 39,
     "unit": "Luyện thi",
     "unit_title": "A2 Key for Schools",
     "type": "KET Lab",
     "sb_pages": "—",
     "focus": "Luyện thi · R&W Part 3 và 5",
     "task": "—",
     "ket_part": "R3: đọc câu hỏi trước, tìm đoạn chứa thông tin, loại đáp án sai · R5: đọc cả câu, xác định loại từ thiếu",
     "ket_codes": [
      "R3",
      "R5"
     ],
     "grammar": "Từ chức năng Part 5: trợ động từ (do/does/did, am/is/are/was), đại từ, giới từ, mạo từ, từ nối",
     "vocabulary": "Bài đọc dài về một người, một sự kiện",
     "can_do": "≥ 3/5 câu Part 3; ≥ 3/6 câu Part 5",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 15,
       "activity": "Giới thiệu dạng bài và chiến lược",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Lượt 1: làm – chữa",
       "category": "input"
      },
      {
       "minutes": 30,
       "activity": "Lượt 2: làm – chữa",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Làm lại câu sai với đề khác",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "KfS1 Test 1 R&W Part 3, 5 tr. 12–15*",
     "assessment": "—"
    },
    {
     "session_id": "BU-79",
     "session_no": 79,
     "week": 40,
     "unit": "Luyện thi",
     "unit_title": "A2 Key for Schools",
     "type": "KET Lab",
     "sb_pages": "—",
     "focus": "Luyện thi · R&W Part 4, 6, 7",
     "task": "—",
     "ket_part": "R4: chọn từ theo nghĩa và cụm · W1: lập dàn 3 ý trong 2 phút, viết ≥ 25 từ · W2: 1–2 câu mỗi tranh, quá khứ + liên từ, ≥ 35 từ",
     "ket_codes": [
      "R4",
      "W6",
      "W7"
     ],
     "grammar": "Kết hợp từ make/do/have/take/go; giới từ đi với động từ (listen to, wait for, look at)",
     "vocabulary": "Cụm kết hợp từ thường gặp trong đề",
     "can_do": "≥ 3/6 câu Part 4; Part 6 trong 10', Part 7 trong 12'",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 15,
       "activity": "Giới thiệu dạng bài và chiến lược",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Lượt 1: làm – chữa",
       "category": "input"
      },
      {
       "minutes": 30,
       "activity": "Lượt 2: làm – chữa",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Làm lại câu sai với đề khác",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "KfS1 Test 1 R&W Part 4, 6, 7 tr. 14–17*",
     "assessment": "—"
    },
    {
     "session_id": "BU-80",
     "session_no": 80,
     "week": 40,
     "unit": "Luyện thi",
     "unit_title": "A2 Key for Schools",
     "type": "KET Lab",
     "sb_pages": "—",
     "focus": "Luyện thi · Listening Part 1–3",
     "task": "—",
     "ket_part": "L1: so sánh 3 tranh trước · L2: dự đoán loại từ, viết đúng chính tả · L3: đọc câu hỏi theo thứ tự trước khi nghe",
     "ket_codes": [
      "L1",
      "L2",
      "L3"
     ],
     "grammar": "Nhận ra số và chữ cái khi nghe nhanh",
     "vocabulary": "Số, giờ, giá, tên được đánh vần",
     "can_do": "≥ 3/5 câu mỗi part",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 15,
       "activity": "Giới thiệu dạng bài và chiến lược",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Lượt 1: làm – chữa",
       "category": "input"
      },
      {
       "minutes": 30,
       "activity": "Lượt 2: làm – chữa",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Làm lại câu sai với đề khác",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "KfS1 Test 1 Listening Part 1–3 tr. 18–21*",
     "assessment": "—"
    },
    {
     "session_id": "BU-81",
     "session_no": 81,
     "week": 41,
     "unit": "Luyện thi",
     "unit_title": "A2 Key for Schools",
     "type": "KET Lab",
     "sb_pages": "—",
     "focus": "Luyện thi · Listening Part 4–5",
     "task": "—",
     "ket_part": "L4: nghe ý chính, không bắt từng từ · L5: gạch tên, chú ý đáp án bị phủ định",
     "ket_codes": [
      "L4",
      "L5"
     ],
     "grammar": "Nhận ra thái độ qua tính từ và ngữ điệu (I was really disappointed…)",
     "vocabulary": "Cảm xúc, ý kiến, mục đích",
     "can_do": "≥ 3/5 câu mỗi part ở 2 đề",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 15,
       "activity": "Giới thiệu dạng bài và chiến lược",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Lượt 1: làm – chữa",
       "category": "input"
      },
      {
       "minutes": 30,
       "activity": "Lượt 2: làm – chữa",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Làm lại câu sai với đề khác",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "KfS1 Test 1 Listening Part 4–5 tr. 22–23*; KfS1 Test 2 Listening Part 4–5 tr. 38–39*",
     "assessment": "—"
    },
    {
     "session_id": "BU-82",
     "session_no": 82,
     "week": 41,
     "unit": "Luyện thi",
     "unit_title": "A2 Key for Schools",
     "type": "KET Lab",
     "sb_pages": "—",
     "focus": "Luyện thi · Speaking Part 1–2",
     "task": "—",
     "ket_part": "S1, S2: Part 1 trả lời đủ câu, mở rộng 2–3 câu · S3: Part 2 hỏi ý bạn, đưa lý do · S4: trả lời câu hỏi mở rộng · S5: phát âm rõ",
     "ket_codes": [
      "S1",
      "S2"
     ],
     "grammar": "Câu trả lời mở rộng: câu trả lời + lý do (because) + ví dụ",
     "vocabulary": "Chủ đề Speaking thường gặp: trường, gia đình, sở thích, kỳ nghỉ, đồ ăn",
     "can_do": "Mỗi cặp thi thử 10 phút, ≥ 3/5 mỗi tiêu chí rubric",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 15,
       "activity": "Giới thiệu dạng bài và chiến lược",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Lượt 1: làm – chữa",
       "category": "input"
      },
      {
       "minutes": 30,
       "activity": "Lượt 2: làm – chữa",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Làm lại câu sai với đề khác",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Tự đánh giá",
     "materials": "KfS1 Speaking Test 1–2 tr. 72–77*; Visual materials từ tr. 125",
     "assessment": "—"
    },
    {
     "session_id": "BU-83",
     "session_no": 83,
     "week": 42,
     "unit": "Sự kiện",
     "unit_title": "Công dân toàn cầu",
     "type": "Sự kiện",
     "sb_pages": "—",
     "focus": "Sự kiện E11 · Community Action: Zero Food Waste",
     "task": "—",
     "ket_part": "R2: đọc dữ liệu khảo sát; S2, S4: trình bày giải pháp; W1: thư kêu gọi ≥ 25 từ",
     "ket_codes": [
      "R2",
      "S1",
      "S2",
      "W6"
     ],
     "grammar": "—",
     "vocabulary": "Đồ ăn, số lượng; so sánh; going to cho kế hoạch",
     "can_do": "Mỗi nhóm khảo sát đồ ăn thừa ở nhà 1 tuần, trình bày biểu đồ và 1 hành động cụ thể",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 20,
       "activity": "Chuẩn bị ngôn ngữ cho sản phẩm",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Thực hiện sản phẩm trước khán giả",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Phản hồi theo rubric",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá năng lực",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Hành động vì cộng đồng (UNESCO: tham gia và hành động)",
     "materials": "Rubric 4 tiêu chí: ngôn ngữ, nội dung, hợp tác, trình bày",
     "assessment": "—"
    },
    {
     "session_id": "BU-84",
     "session_no": 84,
     "week": 42,
     "unit": "Luyện thi",
     "unit_title": "A2 Key for Schools",
     "type": "Review",
     "sb_pages": "—",
     "focus": "Đánh giá nền tảng ngữ pháp cuối khóa + Writing",
     "task": "—",
     "ket_part": "W1, W2: viết Part 6 và Part 7 trong 22 phút · R5: điền từ chức năng",
     "ket_codes": [
      "W6",
      "W7",
      "R5"
     ],
     "grammar": "—",
     "vocabulary": "Đánh giá 25 điểm ngữ pháp nền theo 3 mức: Tự động, Có kiểm soát, Nhận biết",
     "can_do": "Đúng mức ở ≥ 22/25 điểm ngữ pháp; Part 6–7 trong 22 phút",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Bài đánh giá 3 phần (45'); KfS1 Test 2 R&W Part 6–7 tr. 32–33*",
     "assessment": "—"
    },
    {
     "session_id": "BU-85",
     "session_no": 85,
     "week": 43,
     "unit": "Luyện thi",
     "unit_title": "A2 Key for Schools",
     "type": "Test",
     "sb_pages": "—",
     "focus": "Thi thử lần 1",
     "task": "—",
     "ket_part": "E: làm đủ 3 bài thi đúng thời gian, đúng điều kiện phòng thi",
     "ket_codes": [],
     "grammar": "—",
     "vocabulary": "—",
     "can_do": "100% làm đủ đề; ≥ 50% mỗi bài thi",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 60,
       "activity": "Reading and Writing (60')",
       "category": "test"
      },
      {
       "minutes": 30,
       "activity": "Listening (30')",
       "category": "test"
      },
      {
       "minutes": 15,
       "activity": "Speaking theo cặp xen kẽ",
       "category": "test"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "KfS1 Test 3: R&W tr. 40–49; Listening tr. 50–55; Speaking Test 3",
     "assessment": "—"
    },
    {
     "session_id": "BU-86",
     "session_no": 86,
     "week": 43,
     "unit": "Luyện thi",
     "unit_title": "A2 Key for Schools",
     "type": "Review",
     "sb_pages": "—",
     "focus": "Chữa đề thi thử 1",
     "task": "—",
     "ket_part": "E: phân tích lỗi theo mã sub-skill; mỗi học sinh chọn 2 sub-skill yếu nhất và lập kế hoạch ôn 2 tuần",
     "ket_codes": [],
     "grammar": "—",
     "vocabulary": "Ghi lỗi ngữ pháp từ bài viết, bài nói vào bảng lỗi cá nhân",
     "can_do": "Mỗi HS xác định 2 sub-skill yếu và lập kế hoạch 2 tuần",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "KfS1 Answer keys and transcripts tr. 84–119",
     "assessment": "—"
    },
    {
     "session_id": "BU-87",
     "session_no": 87,
     "week": 44,
     "unit": "Luyện thi",
     "unit_title": "A2 Key for Schools",
     "type": "KET Lab",
     "sb_pages": "—",
     "focus": "Chuyên sâu Listening",
     "task": "—",
     "ket_part": "L1–L5: luyện lại part yếu nhất theo nhóm, nghe lần 2 có lời thoại để thấy chỗ bỏ sót",
     "ket_codes": [
      "L1",
      "L5"
     ],
     "grammar": "—",
     "vocabulary": "Theo part yếu",
     "can_do": "Tăng ≥ 1 câu đúng ở part yếu",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 15,
       "activity": "Giới thiệu dạng bài và chiến lược",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Lượt 1: làm – chữa",
       "category": "input"
      },
      {
       "minutes": 30,
       "activity": "Lượt 2: làm – chữa",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Làm lại câu sai với đề khác",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 5 Listening tr. 120–125; KfS1 Test 2 Listening Part 1–3 tr. 34–37*",
     "assessment": "—"
    },
    {
     "session_id": "BU-88",
     "session_no": 88,
     "week": 44,
     "unit": "Luyện thi",
     "unit_title": "A2 Key for Schools",
     "type": "KET Lab",
     "sb_pages": "—",
     "focus": "Chuyên sâu Reading",
     "task": "—",
     "ket_part": "R1–R5: luyện lại part yếu nhất theo nhóm, giải thích vì sao đáp án sai bị loại",
     "ket_codes": [
      "R1",
      "R5"
     ],
     "grammar": "Từ chức năng (Part 5) theo lỗi của nhóm",
     "vocabulary": "Theo part yếu",
     "can_do": "Tăng ≥ 1 câu đúng ở part yếu",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 15,
       "activity": "Giới thiệu dạng bài và chiến lược",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Lượt 1: làm – chữa",
       "category": "input"
      },
      {
       "minutes": 30,
       "activity": "Lượt 2: làm – chữa",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Làm lại câu sai với đề khác",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 5 R&W Part 1–5 tr. 110–116*; KfS1 Test 2 R&W Part 1–5 tr. 24–31*",
     "assessment": "—"
    },
    {
     "session_id": "BU-89",
     "session_no": 89,
     "week": 45,
     "unit": "Luyện thi",
     "unit_title": "A2 Key for Schools",
     "type": "KET Lab",
     "sb_pages": "—",
     "focus": "Chuyên sâu Writing",
     "task": "—",
     "ket_part": "W1, W2: so sánh bài của mình với bài mẫu, viết lại · W3: tự soát theo bảng kiểm",
     "ket_codes": [
      "W6",
      "W7"
     ],
     "grammar": "Lỗi lặp lại trong bài viết: thì, -s ngôi thứ ba, mạo từ, giới từ",
     "vocabulary": "Cụm câu mở đầu và kết thúc email, truyện",
     "can_do": "Viết lại Part 6 và Part 7 đủ ý, ≤ 3 lỗi mỗi bài",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [
      {
       "minutes": 15,
       "activity": "Giới thiệu dạng bài và chiến lược",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Lượt 1: làm – chữa",
       "category": "input"
      },
      {
       "minutes": 30,
       "activity": "Lượt 2: làm – chữa",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Làm lại câu sai với đề khác",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 5 R&W Part 6 tr. 117*; bài mẫu KfS1 tr. 84–119",
     "assessment": "—"
    },
    {
     "session_id": "BU-90",
     "session_no": 90,
     "week": 45,
     "unit": "Luyện thi",
     "unit_title": "A2 Key for Schools",
     "type": "KET Lab",
     "sb_pages": "—",
     "focus": "Chuyên sâu Speaking",
     "task": "—",
     "ket_part": "S1–S5: thi nói thử từng cặp với giáo viên, nhận xét theo rubric 4 tiêu chí",
     "ket_codes": [
      "S1"
     ],
     "grammar": "Câu trả lời mở rộng; câu hỏi lại bạn",
     "vocabulary": "Cụm giữ lượt lời: Sorry, can you repeat that? / What do you think?",
     "can_do": "Mỗi HS thi thử 1 lần, ≥ 3/5 mỗi tiêu chí",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 15,
       "activity": "Giới thiệu dạng bài và chiến lược",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Lượt 1: làm – chữa",
       "category": "input"
      },
      {
       "minutes": 30,
       "activity": "Lượt 2: làm – chữa",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Làm lại câu sai với đề khác",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "T1 Test 5 Speaking",
     "assessment": "—"
    },
    {
     "session_id": "BU-91",
     "session_no": 91,
     "week": 46,
     "unit": "Luyện thi",
     "unit_title": "A2 Key for Schools",
     "type": "Review",
     "sb_pages": "—",
     "focus": "Cầu nối A2: nhận biết ngữ pháp trong đề KET",
     "task": "—",
     "ket_part": "R4, R5, L3: tìm và hiểu nghĩa các cấu trúc A2 trong bài đọc và lời thoại của đề",
     "ket_codes": [
      "R4",
      "R5",
      "L3"
     ],
     "grammar": "will (tương lai, dự đoán); have to (phải); could (có thể, quá khứ của can); should (lời khuyên); present perfect với ever (Have you ever been to…?)",
     "vocabulary": "Từ vựng A2 hay gặp trong đề",
     "can_do": "Nhận ra đúng nghĩa ≥ 8/10 câu",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "OGS2 U19 tr. 91–94; OGS2 U20; lời thoại KfS1 tr. 84–119",
     "assessment": "—"
    },
    {
     "session_id": "BU-92",
     "session_no": 92,
     "week": 46,
     "unit": "Luyện thi",
     "unit_title": "A2 Key for Schools",
     "type": "Test",
     "sb_pages": "—",
     "focus": "Thi thử lần 2",
     "task": "—",
     "ket_part": "E: làm đủ 3 bài thi trong điều kiện phòng thi",
     "ket_codes": [],
     "grammar": "—",
     "vocabulary": "—",
     "can_do": "≥ 50% mỗi bài thi; đạt ≥ 70% được đề xuất thi thật",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 60,
       "activity": "Reading and Writing (60')",
       "category": "test"
      },
      {
       "minutes": 30,
       "activity": "Listening (30')",
       "category": "test"
      },
      {
       "minutes": 15,
       "activity": "Speaking theo cặp xen kẽ",
       "category": "test"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "KfS1 Test 4: R&W tr. 56–65; Listening tr. 66–71; Speaking Test 4",
     "assessment": "—"
    },
    {
     "session_id": "BU-93",
     "session_no": 93,
     "week": 47,
     "unit": "Luyện thi",
     "unit_title": "A2 Key for Schools",
     "type": "Review",
     "sb_pages": "—",
     "focus": "Tổng kết khóa",
     "task": "—",
     "ket_part": "Trả hồ sơ sub-skill, tư vấn thi KET thật hoặc thi ở cuối Kick-off",
     "ket_codes": [],
     "grammar": "—",
     "vocabulary": "Trả kết quả 25 điểm ngữ pháp nền theo mức",
     "can_do": "100% HS nhận hồ sơ và lời khuyên cho Kick-off",
     "before": "Ngày 6: Tự kiểm tra cả tuần (10') + xem trước từ vựng buổi này (5')",
     "after": "Ngày 1: Quiz 10 câu từ vựng, ngữ pháp vừa học (10') + flashcard (5') · Ngày 2: đọc hoặc nghe mức dễ (15') + flashcard (5'), nộp 1 câu tóm tắt",
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Hồ sơ sub-skill và hồ sơ năng lực của từng học sinh",
     "assessment": "—"
    },
    {
     "session_id": "BU-94",
     "session_no": 94,
     "week": 47,
     "unit": "Sự kiện",
     "unit_title": "Công dân toàn cầu",
     "type": "Sự kiện",
     "sb_pages": "—",
     "focus": "Sự kiện E12 · Mini Film Festival và lễ tổng kết",
     "task": "—",
     "ket_part": "S3: bình luận phim; W1: review ngắn",
     "ket_codes": [
      "S2",
      "W6"
     ],
     "grammar": "—",
     "vocabulary": "Phim ảnh, nêu ý kiến; tổng hợp ngôn ngữ cả khóa",
     "can_do": "Mỗi nhóm làm phim 1 phút có thoại tiếng Anh, chiếu và bình chọn; mỗi học sinh viết 1 review ≥ 25 từ",
     "before": "Ngày 3: Xem từ mới, nghe hoặc đọc trước bài sẽ học, ghi 3 ý để nói (15')",
     "after": "Ngày 4: Viết lại bài đã được sửa hoặc quay video nói 1 phút (15–20') · Ngày 5: đọc hoặc nghe mức dễ (15') + flashcard (5')",
     "in_class": [
      {
       "minutes": 20,
       "activity": "Chuẩn bị ngôn ngữ cho sản phẩm",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Thực hiện sản phẩm trước khán giả",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Phản hồi theo rubric",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá năng lực",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Sáng tạo, năng lực số; tổng kết hồ sơ năng lực",
     "materials": "Rubric 4 tiêu chí: ngôn ngữ, nội dung, hợp tác, trình bày",
     "assessment": "—"
    }
   ],
   "homework_note": "Tự học 15–20 phút/ngày, 6 ngày/tuần, nộp qua Class Dojo. Mỗi bài có 2 mức: cơ bản (15') và mở rộng (thêm 5')."
  },
  {
   "id": "ko",
   "name": "Kick-off",
   "cefr": "A2",
   "book": "Gold Experience A2 2nd ed.",
   "exam": "a2",
   "status": "ready",
   "ketbank": true,
   "note": "94 buổi, định hướng A2 Key for Schools (KET)",
   "session_minutes": 105,
   "sessions_per_week": 2,
   "total_sessions": 94,
   "cat": {
    "routine": "Thường quy",
    "book": "Sách (SB)",
    "extension": "Mở rộng",
    "test": "Kiểm tra"
   },
   "rhythm": "Mỗi unit 8 buổi: Reading → Grammar → Vocabulary → Listening → Speaking → Writing → KET Lab → Project & Check.",
   "units": [
    {
     "unit": "Starter",
     "title": "This is me!",
     "theme": "Personal info, family, classroom",
     "sb_pages": "6–10",
     "sessions": "2–3",
     "grammar": "be, have got, present simple, there is/are, countable/uncountable, some/any",
     "vocabulary": "Family; personal information; classroom language; clothes",
     "cando_speaking": "Giới thiệu bản thân, gia đình; đánh vần",
     "cando_writing": "—",
     "ket_parts": "Nền S Part 1",
     "video": "—",
     "project": "—",
     "global_skills": "—"
    },
    {
     "unit": "U1",
     "title": "My time",
     "theme": "Free time & hobbies",
     "sb_pages": "11–22",
     "sessions": "4–11",
     "grammar": "Present simple + adverbs of frequency (vị trí trạng từ); much / many / a lot of",
     "vocabulary": "Free-time verbs → V-ing (paint→painting, dance→dancing); collocations: listen to / watch / play / go on / collect",
     "cando_speaking": "Nói về sở thích, điều mình thích/không thích và giỏi",
     "cando_writing": "Viết email mời bạn (đủ 3 ý)",
     "ket_parts": "Key R Part 2 · Key L Part 2 · Key S Part 1 (topic free time) · Key W Part 6 (3 ý, 25+ từ)",
     "video": "Magic camp",
     "project": "Học & biểu diễn 1 trò ảo thuật / thuyết trình 1 phút về 1 ảo thuật gia",
     "global_skills": "Sáng tạo · trình bày trước lớp"
    },
    {
     "unit": "U2",
     "title": "Are you online?",
     "theme": "Technology & the internet",
     "sb_pages": "23–34",
     "sessions": "12–19",
     "grammar": "Present continuous (quy tắc thêm -ing); Present simple vs present continuous; state verbs",
     "vocabulary": "Thiết bị công nghệ (laptop, webcam, keyboard…); collocations công nghệ; đọc số điện thoại, email, website",
     "cando_speaking": "Mô tả bức ảnh, dùng giới từ chỉ vị trí",
     "cando_writing": "Viết đoạn mô tả ngắn có từ nối and/but/because",
     "ket_parts": "Key R Part 5 · Key L Part 1 · Nền cho Key S Part 2 · Key W Part 6 (25+ từ)",
     "video": "Toddler tech",
     "project": "Thiết kế app cho khách du lịch tới thành phố mình & thuyết trình",
     "global_skills": "Công dân số · thiết kế sản phẩm"
    },
    {
     "unit": "U3",
     "title": "The right answer!",
     "theme": "School & education",
     "sb_pages": "35–45",
     "sessions": "20–27",
     "grammar": "Past simple – regular / irregular, was/were; Past simple questions & short answers (Did…? Was/Were…? Wh-)",
     "vocabulary": "Đồ dùng & địa điểm trong trường; compound nouns (timetable, bookshelf); collocations have/do homework, wear a uniform, get a mark",
     "cando_speaking": "Hỏi và trả lời về sự việc trong quá khứ",
     "cando_writing": "Kể sự việc theo trình tự thời gian",
     "ket_parts": "Key R Part 3 & 5 · Key L Part 3 · Key S Part 1 · Key W Part 6 (25+ từ)",
     "video": "Life at Gordonstoun",
     "project": "Đề xuất 1 hoạt động ngoại khoá mới, trình bày với 'thầy hiệu trưởng'",
     "global_skills": "Tư duy phản biện · đề xuất cho cộng đồng trường"
    },
    {
     "unit": "U4",
     "title": "Open 24/7",
     "theme": "Shopping",
     "sb_pages": "47–57",
     "sessions": "30–37",
     "grammar": "Comparative adjectives (-er / -ier / more / better / worse + than); Superlative adjectives (the biggest / the most… / the best)",
     "vocabulary": "Mua sắm: receipt, bargain, sale, size, cash/card; save / cost / pay / spend / try on; đọc giá & đơn vị tiền",
     "cando_speaking": "Hỏi đường và chỉ đường",
     "cando_writing": "Lên dàn ý và viết review ngắn",
     "ket_parts": "Key R Part 5 · Key L Part 3 · Chức năng giao tiếp · Key W Part 6",
     "video": "The Teenage Market",
     "project": "Kế hoạch kinh doanh 1 gian hàng chợ & pitch (mở rộng: chợ trong lớp)",
     "global_skills": "Tư duy tài chính · làm việc nhóm"
    },
    {
     "unit": "U5",
     "title": "That's entertainment!",
     "theme": "Entertainment",
     "sb_pages": "59–69",
     "sessions": "38–45",
     "grammar": "Past continuous (was/were + V-ing); Past continuous + past simple (when / while)",
     "vocabulary": "Sự kiện giải trí (festival, exhibition, talent show); tính từ đánh giá; danh từ chỉ người -or/-er/-ian/-ist",
     "cando_speaking": "Nói cảm nhận về 1 hoạt động và nêu lý do",
     "cando_writing": "Viết truyện ngắn theo 3 tranh",
     "ket_parts": "Key R Part 2 · Key L Part 1 · Key S Part 2 (Phase 1) · Key W Part 7 (3 tranh, 35+ từ)",
     "video": "Let me tell you a story",
     "project": "Ý tưởng phim 'mash-up' & storyboard",
     "global_skills": "Sáng tạo · kể chuyện"
    },
    {
     "unit": "U6",
     "title": "Are we there yet?",
     "theme": "Travel & transport",
     "sb_pages": "71–82",
     "sessions": "46–53",
     "grammar": "be going to (kế hoạch) vs will (dự đoán); Present continuous for future arrangements",
     "vocabulary": "Phương tiện (ferry, tram, underground…); take / catch / ride / fly / go by; airport, platform, bus stop",
     "cando_speaking": "Hỏi và trả lời về kế hoạch tương lai",
     "cando_writing": "Viết email trả lời đủ 3 ý",
     "ket_parts": "Key R Part 3 · Key L Part 5 · Key S Part 1 · Key W Part 6",
     "video": "Underwater adventures",
     "project": "Kế hoạch kỳ nghỉ của cả lớp / brochure",
     "global_skills": "Lập kế hoạch · hợp tác"
    },
    {
     "unit": "U7",
     "title": "Team spirit",
     "theme": "Sport",
     "sb_pages": "83–94",
     "sessions": "57–64",
     "grammar": "can / could – ability & possibility; have to / don't have to / had to; must",
     "vocabulary": "Môn thể thao & dụng cụ (goggles, helmet, racket…); play / go / do + sport; practice vs practise",
     "cando_speaking": "Đưa ra lời nhờ vả và đáp lại lịch sự",
     "cando_writing": "Trả lời câu hỏi về sở thích mới",
     "ket_parts": "Key R Part 4 · Key L Part 1 · Chức năng giao tiếp · Key W Part 6 (25+ từ)",
     "video": "Freestyle tricks",
     "project": "Sáng tạo môn thể thao mới (poster/video)",
     "global_skills": "Tinh thần đồng đội · sáng tạo luật chơi"
    },
    {
     "unit": "U8",
     "title": "Wild world",
     "theme": "The natural world",
     "sb_pages": "95–105",
     "sessions": "65–72",
     "grammar": "Present perfect (trải nghiệm) vs past simple; past participles; Present perfect + ever / never",
     "vocabulary": "Địa hình tự nhiên, châu lục; thời tiết (danh từ → tính từ rainy, foggy…); thang nhiệt độ; phương hướng",
     "cando_speaking": "Nêu ý kiến và lý do trong thảo luận",
     "cando_writing": "Viết email thân mật, nhấn mạnh tính từ",
     "ket_parts": "Key R Part 2 · Key L Part 3 · Key S Part 2 · Key W Part 6",
     "video": "Mountain life",
     "project": "Chiến dịch gây quỹ 'rewilding'",
     "global_skills": "Bảo vệ thiên nhiên · vận động cộng đồng"
    },
    {
     "unit": "U9",
     "title": "Feeling good",
     "theme": "Food, cooking & health",
     "sb_pages": "107–117",
     "sessions": "73–80",
     "grammar": "First conditional (If + present, will/won't); should / shouldn't – lời khuyên",
     "vocabulary": "Món ăn; động từ nấu (bake, boil, fry, grill, roast); tính từ từ động từ (fried, baked…); collocations sức khoẻ (have a headache, feel sick)",
     "cando_speaking": "Chọn ý mình thích nhất trong thảo luận và giải thích",
     "cando_writing": "Viết truyện ngắn theo tranh",
     "ket_parts": "Key R Part 3 · Key L Part 2 · Key S Part 2 · Key W Part 7 (35+ từ)",
     "video": "Space food",
     "project": "Thiết kế thực đơn không gian & viết blog review",
     "global_skills": "Lối sống lành mạnh · đánh giá sản phẩm"
    },
    {
     "unit": "U10",
     "title": "The place to be!",
     "theme": "Places (exam practice unit)",
     "sb_pages": "119–124",
     "sessions": "83–86",
     "grammar": "Ôn tổng hợp",
     "vocabulary": "Playground, house types, room adjectives",
     "cando_speaking": "Trả lời & mở rộng câu trả lời",
     "cando_writing": "Email mời + truyện theo tranh",
     "ket_parts": "R P1, P4 · L P1/3 · S P1 · W P6, P7",
     "video": "—",
     "project": "—",
     "global_skills": "—"
    }
   ],
   "grammar": {
    "cols": [
     "Ngữ pháp",
     "Unit",
     "Dạy lần đầu",
     "Ôn lại",
     "Mục tiêu"
    ],
    "rows": [
     [
      "be, have got, present simple, there is/are, some/any",
      "Starter",
      "Buổi 2–3",
      "U1 (present simple), U5 (some/any trong món ăn → U9)",
      "Nói & viết câu cơ bản không sai cấu trúc"
     ],
     [
      "Present simple + adverbs of frequency",
      "U1",
      "Buổi 5",
      "U2 (vs continuous), Review 1",
      "Đặt trạng từ đúng vị trí, -s ngôi 3"
     ],
     [
      "much / many / a lot of",
      "U1",
      "Buổi 7",
      "U9 (food), Review 1",
      "Phân biệt danh từ đếm được/không đếm được"
     ],
     [
      "Present continuous",
      "U2",
      "Buổi 13",
      "U6 (tương lai), Review 1",
      "Quy tắc -ing, dùng cho việc đang diễn ra"
     ],
     [
      "Present simple vs continuous; state verbs",
      "U2",
      "Buổi 15",
      "Review 1, Mid-course",
      "Chọn thì theo signal words"
     ],
     [
      "Past simple (regular / irregular, was/were)",
      "U3",
      "Buổi 21",
      "U5, U8 (vs present perfect)",
      "Bảng 50 động từ bất quy tắc thường gặp"
     ],
     [
      "Past simple questions & short answers",
      "U3",
      "Buổi 23",
      "U5 Speaking, U8",
      "Hỏi đáp về quá khứ với did"
     ],
     [
      "Comparative adjectives",
      "U4",
      "Buổi 31",
      "U4 Writing, Mid-course",
      "Quy tắc -er / more, so sánh với than"
     ],
     [
      "Superlative adjectives",
      "U4",
      "Buổi 33",
      "U4 Writing, U8",
      "the + -est / most"
     ],
     [
      "Past continuous",
      "U5",
      "Buổi 39",
      "U5 Writing (story), U9 Writing",
      "Diễn tả bối cảnh trong truyện"
     ],
     [
      "Past continuous + past simple (when / while)",
      "U5",
      "Buổi 41",
      "Review 2, Final",
      "Kể chuyện có hành động xen ngang"
     ],
     [
      "be going to vs will",
      "U6",
      "Buổi 47",
      "U9 (first conditional), Final",
      "Kế hoạch vs dự đoán"
     ],
     [
      "Present continuous for future arrangements",
      "U6",
      "Buổi 49",
      "Review 2",
      "Lịch hẹn đã sắp xếp"
     ],
     [
      "can / could – ability & possibility",
      "U7",
      "Buổi 58",
      "U7 Speaking (requests)",
      "Khả năng hiện tại & quá khứ"
     ],
     [
      "have to / don't have to / had to; must",
      "U7",
      "Buổi 60",
      "Review 2",
      "Nghĩa vụ & quy định"
     ],
     [
      "Present perfect (experience) vs past simple",
      "U8",
      "Buổi 66",
      "Review 2, Final",
      "Phân biệt trải nghiệm vs thời điểm xác định"
     ],
     [
      "Present perfect + ever / never",
      "U8",
      "Buổi 68",
      "U8 Speaking, Final",
      "Hỏi Have you ever…?"
     ],
     [
      "First conditional",
      "U9",
      "Buổi 74",
      "Review 2, Final",
      "If + present, will"
     ],
     [
      "should / shouldn't",
      "U9",
      "Buổi 76",
      "Review 2",
      "Đưa lời khuyên"
     ]
    ],
    "first_col": 2
   },
   "sessions": [
    {
     "session_id": "KO-OR-S1",
     "session_no": 1,
     "unit": "Orientation",
     "unit_title": "Bắt đầu khoá",
     "type": "Orientation",
     "sb_pages": "—",
     "focus": "Định hướng khoá học · kiểm tra đầu vào · làm quen web",
     "task": "Diagnostic test (R+W+L) + phỏng vấn nói 3'",
     "ket_part": "KET format rút gọn",
     "grammar": "—",
     "vocabulary": "—",
     "can_do": "Biết mục tiêu khoá, cách học & nộp bài trên web",
     "before": "—",
     "in_class": [
      {
       "minutes": 15,
       "activity": "Ice-breaker, làm quen lớp",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Giới thiệu lộ trình, KET, cách học",
       "category": "extension"
      },
      {
       "minutes": 50,
       "activity": "Diagnostic test (R+W+L rút gọn)",
       "category": "test"
      },
      {
       "minutes": 20,
       "activity": "Hướng dẫn tài khoản web, thói quen học mỗi ngày",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Đặt 3 mục tiêu cá nhân",
       "category": "routine"
      }
     ],
     "after": "Hoàn thiện hồ sơ học tập trên web; đặt 3 mục tiêu cá nhân",
     "photocopiable": "—",
     "global_skills": "—",
     "assessment": "Diagnostic test",
     "week": 1,
     "ket_codes": []
    },
    {
     "session_id": "KO-ST-S1",
     "session_no": 2,
     "unit": "Starter",
     "unit_title": "This is me!",
     "type": "Starter",
     "sb_pages": "6–7",
     "focus": "Gia đình & thông tin cá nhân · đánh vần",
     "task": "Nghe về gia đình Emma → vẽ family tree → hỏi đáp thông tin cá nhân",
     "ket_part": "Nền KET S Part 1",
     "grammar": "be, have got, present simple",
     "vocabulary": "Family; first name, surname, postcode, nationality, date of birth; Mr/Mrs/Ms; alphabet",
     "can_do": "Giới thiệu bản thân & gia đình; đánh vần tên, email",
     "before": "Wordwall: family + thông tin cá nhân",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Warm-up tên & sở thích",
       "category": "routine"
      },
      {
       "minutes": 15,
       "activity": "Alphabet, đánh vần tên/email",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Nghe gia đình Emma + family tree",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Vẽ & giới thiệu family tree",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Thẻ thông tin cá nhân: đọc & hỏi đáp",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Phỏng vấn cặp kiểu KET S Part 1",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Giao video giới thiệu bản thân",
       "category": "routine"
      }
     ],
     "after": "Quay video giới thiệu bản thân 1'",
     "photocopiable": "—",
     "global_skills": "—",
     "assessment": "—",
     "week": 1,
     "ket_codes": []
    },
    {
     "session_id": "KO-ST-S2",
     "session_no": 3,
     "unit": "Starter",
     "unit_title": "This is me!",
     "type": "Starter",
     "sb_pages": "8–10",
     "focus": "Classroom language · đồ vật lớp học · quần áo",
     "task": "Classroom language → there is/are + some/any về phòng học",
     "ket_part": "—",
     "grammar": "there is/are; countable/uncountable; a/an/some/any",
     "vocabulary": "Classroom instructions; classroom objects; clothes",
     "can_do": "Hiểu & dùng ngôn ngữ lớp học; hỏi 'Is there…? / Are there any…?'",
     "before": "Wordwall classroom language",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz đánh vần & gia đình",
       "category": "routine"
      },
      {
       "minutes": 20,
       "activity": "Classroom language + hội thoại lớp học",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Đồ vật lớp học, quần áo",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "there is/are, countable/uncountable, some/any",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Game: 'Is there…? / Are there any…?' về phòng học",
       "category": "extension"
      },
      {
       "minutes": 15,
       "activity": "Unit check Starter",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Giao bài",
       "category": "routine"
      }
     ],
     "after": "WB Starter; Grammar file p.127",
     "photocopiable": "—",
     "global_skills": "—",
     "assessment": "—",
     "week": 2,
     "ket_codes": []
    },
    {
     "unit": "U1",
     "unit_title": "My time",
     "global_skills": "—",
     "type": "Reading",
     "sb_pages": "11, 12–13",
     "focus": "Lead-in chủ đề 'Free time & hobbies' · Đọc: 3 teens & unusual hobbies",
     "task": "Matching 7 câu – gạch chân keyword, nhận diện từ đồng nghĩa",
     "ket_part": "Key R Part 2",
     "grammar": "—",
     "vocabulary": "Từ khoá của bài đọc (pre-teach 8–10 từ)",
     "can_do": "Đọc hiểu ý chính & chi tiết; làm được dạng KET R Part 2",
     "before": "Flashcard 8–10 từ của bài đọc (web)",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz ôn bài trước / chữa Language Test unit trước",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Lead-in: ảnh & câu nói mở unit (SB p.11)",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Power up + pre-teach 6–8 từ khoá",
       "category": "book"
      },
      {
       "minutes": 30,
       "activity": "Đọc '3 teens & unusual hobbies': gist → exam task + exam tip",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Sum up / Speak up: nói lại & liên hệ bản thân",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Luyện thêm 1 bài KET R Part 2 cùng chủ đề (tính giờ) + chữa",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt can-do, giao bài trên web",
       "category": "routine"
      }
     ],
     "after": "WB Reading; 1 bài đọc KET cùng dạng (web, tự chấm)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U01-S1",
     "session_no": 4,
     "week": 2,
     "ket_codes": []
    },
    {
     "unit": "U1",
     "unit_title": "My time",
     "global_skills": "—",
     "type": "Grammar",
     "sb_pages": "14",
     "focus": "Grammar 1: Present simple + adverbs of frequency (vị trí trạng từ)",
     "task": "Present (từ câu trong bài đọc) → controlled practice → open cloze → Speak up",
     "ket_part": "KET R Part 5 (open cloze)",
     "grammar": "Present simple + adverbs of frequency (vị trí trạng từ)",
     "vocabulary": "Ôn từ bài đọc",
     "can_do": "Dùng đúng Present simple + adverbs of frequency khi nói và viết",
     "before": "Video/slide ngữ pháp ngắn (Grammar presentation) + 5 câu tự kiểm tra",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng bài đọc",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Noticing: tìm cấu trúc trong bài đọc",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Present Present simple + adverbs of frequency (vị trí trạng từ) (Grammar presentation: form · use · signal words)",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Bài tập SB p.14 + watch out",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Game drill ngữ pháp (bảng nhóm)",
       "category": "extension"
      },
      {
       "minutes": 20,
       "activity": "KET Reading Part 5 (open cloze) + 5 câu Grammar file",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Speak up: dùng cấu trúc nói về bản thân",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Chốt bài, giao bài",
       "category": "routine"
      }
     ],
     "after": "WB Grammar 1; Grammar file SB p.128",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U01-S2",
     "session_no": 5,
     "week": 3,
     "ket_codes": []
    },
    {
     "unit": "U1",
     "unit_title": "My time",
     "global_skills": "—",
     "type": "Vocabulary",
     "sb_pages": "15, 146",
     "focus": "Vocabulary: Free time & hobbies",
     "task": "Lexical set → Explore language → collocation → dùng trong câu của mình",
     "ket_part": "KET R Part 4 (MC cloze) khi có",
     "grammar": "Ôn G1 trong ngữ cảnh",
     "vocabulary": "Free-time verbs → V-ing (paint→painting, dance→dancing); collocations: listen to / watch / play / go on / collect",
     "can_do": "Nhớ và dùng được từ vựng chủ đề, collocation, quy tắc cấu tạo từ của unit",
     "before": "Wordwall/flashcard toàn bộ từ của trang Vocabulary",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz Present simple + adverbs of frequency",
       "category": "routine"
      },
      {
       "minutes": 25,
       "activity": "Vocabulary SB p.15: lexical set, nghĩa, phát âm",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Explore language (quy tắc cấu tạo từ / collocation)",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Extend vocabulary SB p.146",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Photocopiable từ vựng",
       "category": "extension"
      },
      {
       "minutes": 15,
       "activity": "KET Reading Part 4 (MC cloze) hoặc nói cá nhân hoá với từ mới",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt bài, giao bài (sổ từ vựng)",
       "category": "routine"
      }
     ],
     "after": "WB Vocabulary; sổ từ vựng cá nhân (5 câu tự đặt)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "PC 1A: Guessing game – free time; PC 1B: Ghép collocation + adverb of frequency",
     "session_id": "KO-U01-S3",
     "session_no": 6,
     "week": 3,
     "ket_codes": []
    },
    {
     "unit": "U1",
     "unit_title": "My time",
     "global_skills": "—",
     "type": "Listening",
     "sb_pages": "16",
     "focus": "Nghe: Cooking day at a café · Grammar 2",
     "task": "Gap-fill ghi chú: đoán loại từ trước khi nghe, cẩn thận bẫy giá/giờ",
     "ket_part": "Key L Part 2",
     "grammar": "much / many / a lot of",
     "vocabulary": "Từ trong audio script",
     "can_do": "Làm được dạng KET L Part 2; dùng much / many / a lot of",
     "before": "Nghe trước 1 lần audio (không cần hiểu hết) + đoán nội dung",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng unit",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Power up + dự đoán nội dung, loại thông tin",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Nghe 'Cooking day at a café' 2 lần: KET L Part 2 + exam tip",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Khai thác audio script: từ, cụm, bẫy",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Grammar 2: much / many / a lot of – present + bài tập SB p.16",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Photocopiable / Speak up Grammar 2",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt bài, giao deep listening",
       "category": "routine"
      }
     ],
     "after": "WB Listening + Grammar 2; deep listening 10'/ngày (audio unit, shadowing)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U01-S4",
     "session_no": 7,
     "week": 4,
     "ket_codes": []
    },
    {
     "unit": "U1",
     "unit_title": "My time",
     "global_skills": "—",
     "type": "Speaking",
     "sb_pages": "17",
     "focus": "Nói: Nói về sở thích, điều thích/không thích, việc mình giỏi",
     "task": "Power up → nghe mẫu → Useful language → luyện cặp → mini exam task",
     "ket_part": "Key S Part 1 (topic free time)",
     "grammar": "Ôn G1 + G2",
     "vocabulary": "love/like/enjoy + V-ing; I'm good at…; Me too / Me neither",
     "can_do": "Nói về sở thích, điều mình thích/không thích và giỏi",
     "before": "Chuẩn bị ý cho 3–5 câu hỏi của chủ đề",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz much / many / a lot of",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Power up: khởi động chủ đề",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Nghe mẫu → điền Useful language",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Drill phát âm, ngữ điệu, câu mẫu",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Luyện cặp đổi bạn: Nói về sở thích, điều thích/không thích, việc mình giỏi",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Mô phỏng KET S Part 1 (topic free time) – GV quay & nhận xét 3–4 cặp",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Giao video nói + project nhóm ('Magic camp')",
       "category": "routine"
      }
     ],
     "after": "Quay video nói 1–2 phút nộp lên web",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U01-S5",
     "session_no": 8,
     "week": 4,
     "ket_codes": []
    },
    {
     "unit": "U1",
     "unit_title": "My time",
     "global_skills": "—",
     "type": "Writing",
     "sb_pages": "18–19",
     "focus": "Viết: Email mời bạn tham gia câu lạc bộ",
     "task": "Đọc bài mẫu → Explore language → lập dàn ý → viết nháp → Improve it (peer check)",
     "ket_part": "Key W Part 6 (3 ý, 25+ từ)",
     "grammar": "Explore language: Dấu câu (capital, . ? ,); nói rõ club gì, khi nào, ở đâu",
     "vocabulary": "Từ vựng unit dùng trong bài viết",
     "can_do": "Viết email mời bạn (đủ 3 ý)",
     "before": "Đọc bài mẫu, gạch chân cấu trúc cần dùng",
     "in_class": [
      {
       "minutes": 5,
       "activity": "Warm-up",
       "category": "routine"
      },
      {
       "minutes": 15,
       "activity": "Power up + đọc bài mẫu, phân tích đề",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Explore language: Dấu câu (capital, . ? ,); nói rõ club gì, khi nào, ở đâu",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Photocopiable viết",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Lập dàn ý (spidergram / trả lời câu hỏi gợi ý)",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Viết nháp tính giờ: Email mời bạn tham gia câu lạc bộ (KET W Part 6 (3 ý, 25+ từ))",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Improve it: chấm chéo theo checklist",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Giao bản final nộp web",
       "category": "routine"
      }
     ],
     "after": "Viết bản final nộp web (GV chấm theo rubric KET)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "PC 1C: Info gap – thông báo CLB",
     "session_id": "KO-U01-S6",
     "session_no": 9,
     "week": 5,
     "ket_codes": []
    },
    {
     "unit": "U1",
     "unit_title": "My time",
     "global_skills": "—",
     "type": "KET Lab",
     "sb_pages": "Workbook + tài liệu KET",
     "focus": "Luyện đề KET theo chủ đề unit + chữa bài viết S6",
     "task": "Làm đề có tính giờ → chữa → phân tích bẫy; trả bài viết, viết lại câu lỗi",
     "ket_part": "Key R Part 2 · Key L Part 2 · Key W Part 6 (3 ý, 25+ từ)",
     "grammar": "Sửa lỗi ngữ pháp G1, G2 thường gặp",
     "vocabulary": "Từ vựng unit trong đề",
     "can_do": "Áp dụng chiến lược làm bài đã học trong unit vào đề thật",
     "before": "—",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Trả bài viết S6: lỗi chung",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Viết lại 3 câu sai nhiều nhất",
       "category": "extension"
      },
      {
       "minutes": 40,
       "activity": "Skills Test A (Reading + Listening + Writing) tính giờ",
       "category": "test"
      },
      {
       "minutes": 15,
       "activity": "Chữa, phân tích lý do sai theo từng part",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Unit check SB p.21–22: Practice + Review",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Giao bài KET làm thêm",
       "category": "routine"
      }
     ],
     "after": "Bài KET cùng dạng nhưng khó hơn (web); HS yếu: Skills Test C (bản hỗ trợ)",
     "assessment": "Gold_Exp_A2_U1_Skills_Test_A",
     "photocopiable": "—",
     "session_id": "KO-U01-S7",
     "session_no": 10,
     "week": 5,
     "ket_codes": []
    },
    {
     "unit": "U1",
     "unit_title": "My time",
     "global_skills": "Sáng tạo · trình bày trước lớp",
     "type": "Project & Check",
     "sb_pages": "20, 21–22",
     "focus": "Switch on: video 'Magic camp' · Project · Unit check",
     "task": "Project: Học & biểu diễn 1 trò ảo thuật / thuyết trình 1 phút về 1 ảo thuật gia",
     "ket_part": "—",
     "grammar": "Ôn Present simple + adverbs of frequency + much / many / a lot of",
     "vocabulary": "Tổng ôn từ vựng unit",
     "can_do": "Dùng tiếng Anh để hoàn thành sản phẩm nhóm; tự đánh giá unit",
     "before": "Nhóm chuẩn bị project (giao từ S5)",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Game ôn từ vựng & ngữ pháp unit",
       "category": "routine"
      },
      {
       "minutes": 15,
       "activity": "Switch on: xem video 'Magic camp' + câu hỏi hiểu",
       "category": "book"
      },
      {
       "minutes": 35,
       "activity": "Trình bày project (Học & biểu diễn 1 trò ảo thuật / thuyết trình 1 phút về 1 ảo thuật gia) – 4–5 nhóm × 6' + nhận xét chéo",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Independent learning: tự đánh giá",
       "category": "book"
      },
      {
       "minutes": 30,
       "activity": "Language Test A Unit 1",
       "category": "test"
      },
      {
       "minutes": 5,
       "activity": "Chốt unit",
       "category": "routine"
      }
     ],
     "after": "Làm lại phần sai Unit check; HS < 70%: Language Test B (web)",
     "assessment": "Gold_Exp_A2_U1_Lang_Test_A",
     "photocopiable": "—",
     "session_id": "KO-U01-S8",
     "session_no": 11,
     "week": 6,
     "ket_codes": []
    },
    {
     "unit": "U2",
     "unit_title": "Are you online?",
     "global_skills": "—",
     "type": "Reading",
     "sb_pages": "23, 24–25",
     "focus": "Lead-in chủ đề 'Technology & the internet' · Đọc: Tubers UK – vlogging club",
     "task": "Open cloze: xác định loại từ cần điền (động từ, giới từ, đại từ…)",
     "ket_part": "Key R Part 5",
     "grammar": "—",
     "vocabulary": "Từ khoá của bài đọc (pre-teach 8–10 từ)",
     "can_do": "Đọc hiểu ý chính & chi tiết; làm được dạng KET R Part 5",
     "before": "Flashcard 8–10 từ của bài đọc (web)",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz ôn bài trước / chữa Language Test unit trước",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Lead-in: ảnh & câu nói mở unit (SB p.23)",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Power up + pre-teach 6–8 từ khoá",
       "category": "book"
      },
      {
       "minutes": 30,
       "activity": "Đọc 'Tubers UK – vlogging club': gist → exam task + exam tip",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Sum up / Speak up: nói lại & liên hệ bản thân",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Luyện thêm 1 bài KET R Part 5 cùng chủ đề (tính giờ) + chữa",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt can-do, giao bài trên web",
       "category": "routine"
      }
     ],
     "after": "WB Reading; 1 bài đọc KET cùng dạng (web, tự chấm)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U02-S1",
     "session_no": 12,
     "week": 6,
     "ket_codes": []
    },
    {
     "unit": "U2",
     "unit_title": "Are you online?",
     "global_skills": "—",
     "type": "Grammar",
     "sb_pages": "26",
     "focus": "Grammar 1: Present continuous (quy tắc thêm -ing)",
     "task": "Present (từ câu trong bài đọc) → controlled practice → open cloze → Speak up",
     "ket_part": "KET R Part 5 (open cloze)",
     "grammar": "Present continuous (quy tắc thêm -ing)",
     "vocabulary": "Ôn từ bài đọc",
     "can_do": "Dùng đúng Present continuous khi nói và viết",
     "before": "Video/slide ngữ pháp ngắn (Grammar presentation) + 5 câu tự kiểm tra",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng bài đọc",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Noticing: tìm cấu trúc trong bài đọc",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Present Present continuous (quy tắc thêm -ing) (Grammar presentation: form · use · signal words)",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Bài tập SB p.26 + watch out",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Game drill ngữ pháp (bảng nhóm)",
       "category": "extension"
      },
      {
       "minutes": 20,
       "activity": "KET Reading Part 5 (open cloze) + 5 câu Grammar file",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Speak up: dùng cấu trúc nói về bản thân",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Chốt bài, giao bài",
       "category": "routine"
      }
     ],
     "after": "WB Grammar 1; Grammar file SB p.130",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U02-S2",
     "session_no": 13,
     "week": 7,
     "ket_codes": []
    },
    {
     "unit": "U2",
     "unit_title": "Are you online?",
     "global_skills": "—",
     "type": "Vocabulary",
     "sb_pages": "27, 146",
     "focus": "Vocabulary: Technology & the internet",
     "task": "Lexical set → Explore language → collocation → dùng trong câu của mình",
     "ket_part": "KET R Part 4 (MC cloze) khi có",
     "grammar": "Ôn G1 trong ngữ cảnh",
     "vocabulary": "Thiết bị công nghệ (laptop, webcam, keyboard…); collocations công nghệ; đọc số điện thoại, email, website",
     "can_do": "Nhớ và dùng được từ vựng chủ đề, collocation, quy tắc cấu tạo từ của unit",
     "before": "Wordwall/flashcard toàn bộ từ của trang Vocabulary",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz Present continuous",
       "category": "routine"
      },
      {
       "minutes": 25,
       "activity": "Vocabulary SB p.27: lexical set, nghĩa, phát âm",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Explore language (quy tắc cấu tạo từ / collocation)",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Extend vocabulary SB p.146",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Photocopiable từ vựng",
       "category": "extension"
      },
      {
       "minutes": 15,
       "activity": "KET Reading Part 4 (MC cloze) hoặc nói cá nhân hoá với từ mới",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt bài, giao bài (sổ từ vựng)",
       "category": "routine"
      }
     ],
     "after": "WB Vocabulary; sổ từ vựng cá nhân (5 câu tự đặt)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "PC 2A: Bingo – technology",
     "session_id": "KO-U02-S3",
     "session_no": 14,
     "week": 7,
     "ket_codes": []
    },
    {
     "unit": "U2",
     "unit_title": "Are you online?",
     "global_skills": "—",
     "type": "Listening",
     "sb_pages": "28",
     "focus": "Nghe: Tình huống công nghệ (lễ hội robot, giải thưởng…) · Grammar 2",
     "task": "MCQ tranh 5 câu: nhìn tranh, dự đoán từ sẽ nghe",
     "ket_part": "Key L Part 1",
     "grammar": "Present simple vs present continuous; state verbs",
     "vocabulary": "Từ trong audio script",
     "can_do": "Làm được dạng KET L Part 1; dùng Present simple vs present continuous; state verbs",
     "before": "Nghe trước 1 lần audio (không cần hiểu hết) + đoán nội dung",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng unit",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Power up + dự đoán nội dung, loại thông tin",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Nghe 'Tình huống công nghệ (lễ hội robot, giải thưởng…)' 2 lần: KET L Part 1 + exam tip",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Khai thác audio script: từ, cụm, bẫy",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Grammar 2: Present simple vs present continuous; state verbs – present + bài tập SB p.28",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Photocopiable / Speak up Grammar 2",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt bài, giao deep listening",
       "category": "routine"
      }
     ],
     "after": "WB Listening + Grammar 2; deep listening 10'/ngày (audio unit, shadowing)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "PC 2B: Quiz present simple/continuous",
     "session_id": "KO-U02-S4",
     "session_no": 15,
     "week": 8,
     "ket_codes": []
    },
    {
     "unit": "U2",
     "unit_title": "Are you online?",
     "global_skills": "—",
     "type": "Speaking",
     "sb_pages": "29",
     "focus": "Nói: Mô tả bức ảnh (ngày hội công nghệ ở trường)",
     "task": "Power up → nghe mẫu → Useful language → luyện cặp → mini exam task",
     "ket_part": "Nền cho Key S Part 2",
     "grammar": "Ôn G1 + G2",
     "vocabulary": "in front of / opposite / between / next to / behind; There is/are…; He's …-ing",
     "can_do": "Mô tả bức ảnh, dùng giới từ chỉ vị trí",
     "before": "Chuẩn bị ý cho 3–5 câu hỏi của chủ đề",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz Present simple vs present continuous; state verbs",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Power up: khởi động chủ đề",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Nghe mẫu → điền Useful language",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Drill phát âm, ngữ điệu, câu mẫu",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Luyện cặp đổi bạn: Mô tả bức ảnh (ngày hội công nghệ ở trường)",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Mô phỏng Nền cho KET S Part 2 – GV quay & nhận xét 3–4 cặp",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Giao video nói + project nhóm ('Toddler tech')",
       "category": "routine"
      }
     ],
     "after": "Quay video nói 1–2 phút nộp lên web",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U02-S5",
     "session_no": 16,
     "week": 8,
     "ket_codes": []
    },
    {
     "unit": "U2",
     "unit_title": "Are you online?",
     "global_skills": "—",
     "type": "Writing",
     "sb_pages": "30–31",
     "focus": "Viết: Đoạn văn ngắn về app yêu thích",
     "task": "Đọc bài mẫu → Explore language → lập dàn ý → viết nháp → Improve it (peer check)",
     "ket_part": "Key W Part 6 (25+ từ)",
     "grammar": "Explore language: and / but / because; app làm gì, vì sao thích, có hạn chế gì",
     "vocabulary": "Từ vựng unit dùng trong bài viết",
     "can_do": "Viết đoạn mô tả ngắn có từ nối and/but/because",
     "before": "Đọc bài mẫu, gạch chân cấu trúc cần dùng",
     "in_class": [
      {
       "minutes": 5,
       "activity": "Warm-up",
       "category": "routine"
      },
      {
       "minutes": 15,
       "activity": "Power up + đọc bài mẫu, phân tích đề",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Explore language: and / but / because; app làm gì, vì sao thích, có hạn chế gì",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Photocopiable viết",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Lập dàn ý (spidergram / trả lời câu hỏi gợi ý)",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Viết nháp tính giờ: Đoạn văn ngắn về app yêu thích (KET W Part 6 (25+ từ))",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Improve it: chấm chéo theo checklist",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Giao bản final nộp web",
       "category": "routine"
      }
     ],
     "after": "Viết bản final nộp web (GV chấm theo rubric KET)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "PC 2C: Cloze theo ảnh",
     "session_id": "KO-U02-S6",
     "session_no": 17,
     "week": 9,
     "ket_codes": []
    },
    {
     "unit": "U2",
     "unit_title": "Are you online?",
     "global_skills": "—",
     "type": "KET Lab",
     "sb_pages": "Workbook + tài liệu KET",
     "focus": "Luyện đề KET theo chủ đề unit + chữa bài viết S6",
     "task": "Làm đề có tính giờ → chữa → phân tích bẫy; trả bài viết, viết lại câu lỗi",
     "ket_part": "Key R Part 5 · Key L Part 1 · Key W Part 6 (25+ từ)",
     "grammar": "Sửa lỗi ngữ pháp G1, G2 thường gặp",
     "vocabulary": "Từ vựng unit trong đề",
     "can_do": "Áp dụng chiến lược làm bài đã học trong unit vào đề thật",
     "before": "—",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Trả bài viết S6: lỗi chung",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Viết lại 3 câu sai nhiều nhất",
       "category": "extension"
      },
      {
       "minutes": 40,
       "activity": "Skills Test A (Reading + Listening + Writing) tính giờ",
       "category": "test"
      },
      {
       "minutes": 15,
       "activity": "Chữa, phân tích lý do sai theo từng part",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Unit check SB p.33–34: Practice + Review",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Giao bài KET làm thêm",
       "category": "routine"
      }
     ],
     "after": "Bài KET cùng dạng nhưng khó hơn (web); HS yếu: Skills Test C (bản hỗ trợ)",
     "assessment": "Gold_Exp_A2_U2_Skills_Test_A",
     "photocopiable": "—",
     "session_id": "KO-U02-S7",
     "session_no": 18,
     "week": 9,
     "ket_codes": []
    },
    {
     "unit": "U2",
     "unit_title": "Are you online?",
     "global_skills": "Công dân số · thiết kế sản phẩm",
     "type": "Project & Check",
     "sb_pages": "32, 33–34",
     "focus": "Switch on: video 'Toddler tech' · Project · Unit check",
     "task": "Project: Thiết kế app cho khách du lịch tới thành phố mình & thuyết trình",
     "ket_part": "—",
     "grammar": "Ôn Present continuous + Present simple vs present continuous; state verbs",
     "vocabulary": "Tổng ôn từ vựng unit",
     "can_do": "Dùng tiếng Anh để hoàn thành sản phẩm nhóm; tự đánh giá unit",
     "before": "Nhóm chuẩn bị project (giao từ S5)",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Game ôn từ vựng & ngữ pháp unit",
       "category": "routine"
      },
      {
       "minutes": 15,
       "activity": "Switch on: xem video 'Toddler tech' + câu hỏi hiểu",
       "category": "book"
      },
      {
       "minutes": 35,
       "activity": "Trình bày project (Thiết kế app cho khách du lịch tới thành phố mình & thuyết trình) – 4–5 nhóm × 6' + nhận xét chéo",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Independent learning: tự đánh giá",
       "category": "book"
      },
      {
       "minutes": 30,
       "activity": "Language Test A Unit 2",
       "category": "test"
      },
      {
       "minutes": 5,
       "activity": "Chốt unit",
       "category": "routine"
      }
     ],
     "after": "Làm lại phần sai Unit check; HS < 70%: Language Test B (web)",
     "assessment": "Gold_Exp_A2_U2_Lang_Test_A",
     "photocopiable": "—",
     "session_id": "KO-U02-S8",
     "session_no": 19,
     "week": 10,
     "ket_codes": []
    },
    {
     "unit": "U3",
     "unit_title": "The right answer!",
     "global_skills": "—",
     "type": "Reading",
     "sb_pages": "35, 36–37",
     "focus": "Lead-in chủ đề 'School & education' · Đọc: Studytracks – app biến ghi chú thành bài hát",
     "task": "MCQ + open cloze: câu hỏi theo thứ tự bài, tìm paraphrase",
     "ket_part": "Key R Part 3 & 5",
     "grammar": "—",
     "vocabulary": "Từ khoá của bài đọc (pre-teach 8–10 từ)",
     "can_do": "Đọc hiểu ý chính & chi tiết; làm được dạng KET R Part 3 & 5",
     "before": "Flashcard 8–10 từ của bài đọc (web)",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz ôn bài trước / chữa Language Test unit trước",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Lead-in: ảnh & câu nói mở unit (SB p.35)",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Power up + pre-teach 6–8 từ khoá",
       "category": "book"
      },
      {
       "minutes": 30,
       "activity": "Đọc 'Studytracks – app biến ghi chú thành bài hát': gist → exam task + exam tip",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Sum up / Speak up: nói lại & liên hệ bản thân",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Luyện thêm 1 bài KET R Part 3 & 5 cùng chủ đề (tính giờ) + chữa",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt can-do, giao bài trên web",
       "category": "routine"
      }
     ],
     "after": "WB Reading; 1 bài đọc KET cùng dạng (web, tự chấm)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U03-S1",
     "session_no": 20,
     "week": 10,
     "ket_codes": []
    },
    {
     "unit": "U3",
     "unit_title": "The right answer!",
     "global_skills": "—",
     "type": "Grammar",
     "sb_pages": "38",
     "focus": "Grammar 1: Past simple – regular / irregular, was/were",
     "task": "Present (từ câu trong bài đọc) → controlled practice → open cloze → Speak up",
     "ket_part": "KET R Part 5 (open cloze)",
     "grammar": "Past simple – regular / irregular, was/were",
     "vocabulary": "Ôn từ bài đọc",
     "can_do": "Dùng đúng Past simple – regular / irregular, was/were khi nói và viết",
     "before": "Video/slide ngữ pháp ngắn (Grammar presentation) + 5 câu tự kiểm tra",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng bài đọc",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Noticing: tìm cấu trúc trong bài đọc",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Present Past simple – regular / irregular, was/were (Grammar presentation: form · use · signal words)",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Bài tập SB p.38 + watch out",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Game drill ngữ pháp (bảng nhóm)",
       "category": "extension"
      },
      {
       "minutes": 20,
       "activity": "KET Reading Part 5 (open cloze) + 5 câu Grammar file",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Speak up: dùng cấu trúc nói về bản thân",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Chốt bài, giao bài",
       "category": "routine"
      }
     ],
     "after": "WB Grammar 1; Grammar file SB p.132",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U03-S2",
     "session_no": 21,
     "week": 11,
     "ket_codes": []
    },
    {
     "unit": "U3",
     "unit_title": "The right answer!",
     "global_skills": "—",
     "type": "Vocabulary",
     "sb_pages": "39, 146",
     "focus": "Vocabulary: School & education",
     "task": "Lexical set → Explore language → collocation → dùng trong câu của mình",
     "ket_part": "KET R Part 4 (MC cloze) khi có",
     "grammar": "Ôn G1 trong ngữ cảnh",
     "vocabulary": "Đồ dùng & địa điểm trong trường; compound nouns (timetable, bookshelf); collocations have/do homework, wear a uniform, get a mark",
     "can_do": "Nhớ và dùng được từ vựng chủ đề, collocation, quy tắc cấu tạo từ của unit",
     "before": "Wordwall/flashcard toàn bộ từ của trang Vocabulary",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz Past simple – regular / irregular, was/were",
       "category": "routine"
      },
      {
       "minutes": 25,
       "activity": "Vocabulary SB p.39: lexical set, nghĩa, phát âm",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Explore language (quy tắc cấu tạo từ / collocation)",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Extend vocabulary SB p.146",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Photocopiable từ vựng",
       "category": "extension"
      },
      {
       "minutes": 15,
       "activity": "KET Reading Part 4 (MC cloze) hoặc nói cá nhân hoá với từ mới",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt bài, giao bài (sổ từ vựng)",
       "category": "routine"
      }
     ],
     "after": "WB Vocabulary; sổ từ vựng cá nhân (5 câu tự đặt)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "PC 3A: Memory – collocations trường học",
     "session_id": "KO-U03-S3",
     "session_no": 22,
     "week": 11,
     "ket_codes": []
    },
    {
     "unit": "U3",
     "unit_title": "The right answer!",
     "global_skills": "—",
     "type": "Listening",
     "sb_pages": "40",
     "focus": "Nghe: Trường học trên thế giới · Grammar 2",
     "task": "MCQ 5 câu (hội thoại 2 người): gạch chân tên người trong câu hỏi",
     "ket_part": "Key L Part 3",
     "grammar": "Past simple questions & short answers (Did…? Was/Were…? Wh-)",
     "vocabulary": "Từ trong audio script",
     "can_do": "Làm được dạng KET L Part 3; dùng Past simple questions & short answers",
     "before": "Nghe trước 1 lần audio (không cần hiểu hết) + đoán nội dung",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng unit",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Power up + dự đoán nội dung, loại thông tin",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Nghe 'Trường học trên thế giới' 2 lần: KET L Part 3 + exam tip",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Khai thác audio script: từ, cụm, bẫy",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Grammar 2: Past simple questions & short answers (Did…? Was/Were…? Wh-) – present + bài tập SB p.40",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Photocopiable / Speak up Grammar 2",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt bài, giao deep listening",
       "category": "routine"
      }
     ],
     "after": "WB Listening + Grammar 2; deep listening 10'/ngày (audio unit, shadowing)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U03-S4",
     "session_no": 23,
     "week": 12,
     "ket_codes": []
    },
    {
     "unit": "U3",
     "unit_title": "The right answer!",
     "global_skills": "—",
     "type": "Speaking",
     "sb_pages": "41",
     "focus": "Nói: Ngày đầu tiên đi học – hỏi & trả lời về quá khứ",
     "task": "Power up → nghe mẫu → Useful language → luyện cặp → mini exam task",
     "ket_part": "Key S Part 1",
     "grammar": "Ôn G1 + G2",
     "vocabulary": "Wh- + did + S + V; yesterday / last week / ago; What does X mean?",
     "can_do": "Hỏi và trả lời về sự việc trong quá khứ",
     "before": "Chuẩn bị ý cho 3–5 câu hỏi của chủ đề",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz Past simple questions & short answers",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Power up: khởi động chủ đề",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Nghe mẫu → điền Useful language",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Drill phát âm, ngữ điệu, câu mẫu",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Luyện cặp đổi bạn: Ngày đầu tiên đi học – hỏi & trả lời về quá khứ + photocopiable",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Mô phỏng KET S Part 1 – GV quay & nhận xét 3–4 cặp",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Giao video nói + project nhóm ('Life at Gordonstoun')",
       "category": "routine"
      }
     ],
     "after": "Quay video nói 1–2 phút nộp lên web",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "PC 3B: Info gap – câu hỏi past simple",
     "session_id": "KO-U03-S5",
     "session_no": 24,
     "week": 12,
     "ket_codes": []
    },
    {
     "unit": "U3",
     "unit_title": "The right answer!",
     "global_skills": "—",
     "type": "Writing",
     "sb_pages": "42–43",
     "focus": "Viết: Tả một ngày học vui ở trường",
     "task": "Đọc bài mẫu → Explore language → lập dàn ý → viết nháp → Improve it (peer check)",
     "ket_part": "Key W Part 6 (25+ từ)",
     "grammar": "Explore language: Từ nối trình tự First / Then / After that / At the end of the day + past simple",
     "vocabulary": "Từ vựng unit dùng trong bài viết",
     "can_do": "Kể sự việc theo trình tự thời gian",
     "before": "Đọc bài mẫu, gạch chân cấu trúc cần dùng",
     "in_class": [
      {
       "minutes": 5,
       "activity": "Warm-up",
       "category": "routine"
      },
      {
       "minutes": 15,
       "activity": "Power up + đọc bài mẫu, phân tích đề",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Explore language: Từ nối trình tự First / Then / After that / At the end of the day + past simple",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Photocopiable viết",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Lập dàn ý (spidergram / trả lời câu hỏi gợi ý)",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Viết nháp tính giờ: Tả một ngày học vui ở trường (KET W Part 6 (25+ từ))",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Improve it: chấm chéo theo checklist",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Giao bản final nộp web",
       "category": "routine"
      }
     ],
     "after": "Viết bản final nộp web (GV chấm theo rubric KET)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "PC 3C: Sắp xếp truyện – sequencing",
     "session_id": "KO-U03-S6",
     "session_no": 25,
     "week": 13,
     "ket_codes": []
    },
    {
     "unit": "U3",
     "unit_title": "The right answer!",
     "global_skills": "—",
     "type": "KET Lab",
     "sb_pages": "Workbook + tài liệu KET",
     "focus": "Luyện đề KET theo chủ đề unit + chữa bài viết S6",
     "task": "Làm đề có tính giờ → chữa → phân tích bẫy; trả bài viết, viết lại câu lỗi",
     "ket_part": "Key R Part 3 & 5 · Key L Part 3 · Key W Part 6 (25+ từ)",
     "grammar": "Sửa lỗi ngữ pháp G1, G2 thường gặp",
     "vocabulary": "Từ vựng unit trong đề",
     "can_do": "Áp dụng chiến lược làm bài đã học trong unit vào đề thật",
     "before": "—",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Trả bài viết S6: lỗi chung",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Viết lại 3 câu sai nhiều nhất",
       "category": "extension"
      },
      {
       "minutes": 40,
       "activity": "Skills Test A (Reading + Listening + Writing) tính giờ",
       "category": "test"
      },
      {
       "minutes": 15,
       "activity": "Chữa, phân tích lý do sai theo từng part",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Unit check SB p.45: Practice + Review",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Giao bài KET làm thêm",
       "category": "routine"
      }
     ],
     "after": "Bài KET cùng dạng nhưng khó hơn (web); HS yếu: Skills Test C (bản hỗ trợ)",
     "assessment": "Gold_Exp_A2_U3_Skills_Test_A",
     "photocopiable": "—",
     "session_id": "KO-U03-S7",
     "session_no": 26,
     "week": 13,
     "ket_codes": []
    },
    {
     "unit": "U3",
     "unit_title": "The right answer!",
     "global_skills": "Tư duy phản biện · đề xuất cho cộng đồng trường",
     "type": "Project & Check",
     "sb_pages": "44, 45",
     "focus": "Switch on: video 'Life at Gordonstoun' · Project · Unit check",
     "task": "Project: Đề xuất 1 hoạt động ngoại khoá mới, trình bày với 'thầy hiệu trưởng'",
     "ket_part": "—",
     "grammar": "Ôn Past simple – regular / irregular, was/were + Past simple questions & short answers",
     "vocabulary": "Tổng ôn từ vựng unit",
     "can_do": "Dùng tiếng Anh để hoàn thành sản phẩm nhóm; tự đánh giá unit",
     "before": "Nhóm chuẩn bị project (giao từ S5)",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Game ôn từ vựng & ngữ pháp unit",
       "category": "routine"
      },
      {
       "minutes": 15,
       "activity": "Switch on: xem video 'Life at Gordonstoun' + câu hỏi hiểu",
       "category": "book"
      },
      {
       "minutes": 35,
       "activity": "Trình bày project (Đề xuất 1 hoạt động ngoại khoá mới, trình bày với 'thầy hiệu trưởng') – 4–5 nhóm × 6' + nhận xét chéo",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Independent learning: tự đánh giá",
       "category": "book"
      },
      {
       "minutes": 30,
       "activity": "Language Test A Unit 3",
       "category": "test"
      },
      {
       "minutes": 5,
       "activity": "Chốt unit",
       "category": "routine"
      }
     ],
     "after": "Làm lại phần sai Unit check; HS < 70%: Language Test B (web)",
     "assessment": "Gold_Exp_A2_U3_Lang_Test_A",
     "photocopiable": "—",
     "session_id": "KO-U03-S8",
     "session_no": 27,
     "week": 14,
     "ket_codes": []
    },
    {
     "session_id": "KO-RV1-S1",
     "session_no": 28,
     "unit": "Review 1",
     "unit_title": "Units 1–3",
     "type": "Review",
     "sb_pages": "—",
     "focus": "Tổng ôn U1–3: hệ thống ngữ pháp & từ vựng",
     "task": "—",
     "ket_part": "—",
     "grammar": "Present simple/continuous, much/many, past simple",
     "vocabulary": "U1–3",
     "can_do": "Tự hệ thống hoá kiến thức thành mind map",
     "before": "Quiz tổng hợp U1–3 (web)",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz tổng hợp",
       "category": "routine"
      },
      {
       "minutes": 25,
       "activity": "Mind map các thì theo nhóm (form · use · signal)",
       "category": "extension"
      },
      {
       "minutes": 20,
       "activity": "Game ôn từ vựng U1–3",
       "category": "extension"
      },
      {
       "minutes": 20,
       "activity": "Sửa lỗi điển hình từ bài viết U1–3",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Luyện nói KET Part 1 theo cặp",
       "category": "extension"
      },
      {
       "minutes": 5,
       "activity": "Giao bài ôn",
       "category": "routine"
      }
     ],
     "after": "Ôn theo danh sách lỗi cá nhân",
     "photocopiable": "—",
     "global_skills": "—",
     "assessment": "—",
     "week": 14,
     "ket_codes": []
    },
    {
     "session_id": "KO-RV1-S2",
     "session_no": 29,
     "unit": "Review 1",
     "unit_title": "Units 1–3",
     "type": "Test",
     "sb_pages": "—",
     "focus": "Progress test 1",
     "task": "R+W+L (KET format rút gọn) + nói theo cặp",
     "ket_part": "KET R/W/L/S",
     "grammar": "—",
     "vocabulary": "—",
     "can_do": "—",
     "before": "—",
     "in_class": [
      {
       "minutes": 5,
       "activity": "Ổn định, hướng dẫn",
       "category": "routine"
      },
      {
       "minutes": 60,
       "activity": "Progress test 1: R+W+L rút gọn",
       "category": "test"
      },
      {
       "minutes": 35,
       "activity": "Speaking theo cặp (5'/cặp); HS chờ làm bài tự học",
       "category": "test"
      },
      {
       "minutes": 5,
       "activity": "Thu bài",
       "category": "routine"
      }
     ],
     "after": "Nhận báo cáo kết quả trên web",
     "photocopiable": "—",
     "global_skills": "—",
     "assessment": "Progress test 1",
     "week": 15,
     "ket_codes": []
    },
    {
     "unit": "U4",
     "unit_title": "Open 24/7",
     "global_skills": "—",
     "type": "Reading",
     "sb_pages": "47, 48–49",
     "focus": "Lead-in chủ đề 'Shopping' · Đọc: Cách mua sắm mới (robot, gương thông minh, drone)",
     "task": "True/False + open cloze: tìm thông tin cụ thể, bỏ qua từ khó",
     "ket_part": "Key R Part 5",
     "grammar": "—",
     "vocabulary": "Từ khoá của bài đọc (pre-teach 8–10 từ)",
     "can_do": "Đọc hiểu ý chính & chi tiết; làm được dạng KET R Part 5",
     "before": "Flashcard 8–10 từ của bài đọc (web)",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz ôn bài trước / chữa Language Test unit trước",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Lead-in: ảnh & câu nói mở unit (SB p.47)",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Power up + pre-teach 6–8 từ khoá",
       "category": "book"
      },
      {
       "minutes": 30,
       "activity": "Đọc 'Cách mua sắm mới (robot, gương thông minh, drone)': gist → exam task + exam tip",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Sum up / Speak up: nói lại & liên hệ bản thân",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Luyện thêm 1 bài KET R Part 5 cùng chủ đề (tính giờ) + chữa",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt can-do, giao bài trên web",
       "category": "routine"
      }
     ],
     "after": "WB Reading; 1 bài đọc KET cùng dạng (web, tự chấm)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U04-S1",
     "session_no": 30,
     "week": 15,
     "ket_codes": []
    },
    {
     "unit": "U4",
     "unit_title": "Open 24/7",
     "global_skills": "—",
     "type": "Grammar",
     "sb_pages": "50",
     "focus": "Grammar 1: Comparative adjectives (-er / -ier / more / better / worse + than)",
     "task": "Present (từ câu trong bài đọc) → controlled practice → open cloze → Speak up",
     "ket_part": "KET R Part 5 (open cloze)",
     "grammar": "Comparative adjectives (-er / -ier / more / better / worse + than)",
     "vocabulary": "Ôn từ bài đọc",
     "can_do": "Dùng đúng Comparative adjectives khi nói và viết",
     "before": "Video/slide ngữ pháp ngắn (Grammar presentation) + 5 câu tự kiểm tra",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng bài đọc",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Noticing: tìm cấu trúc trong bài đọc",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Present Comparative adjectives (-er / -ier / more / better / worse + than) (Grammar presentation: form · use · signal words)",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Bài tập SB p.50 + watch out",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Game drill ngữ pháp (bảng nhóm)",
       "category": "extension"
      },
      {
       "minutes": 20,
       "activity": "KET Reading Part 5 (open cloze) + 5 câu Grammar file",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Speak up: dùng cấu trúc nói về bản thân",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Chốt bài, giao bài",
       "category": "routine"
      }
     ],
     "after": "WB Grammar 1; Grammar file SB p.134",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U04-S2",
     "session_no": 31,
     "week": 16,
     "ket_codes": []
    },
    {
     "unit": "U4",
     "unit_title": "Open 24/7",
     "global_skills": "—",
     "type": "Vocabulary",
     "sb_pages": "51, 146",
     "focus": "Vocabulary: Shopping",
     "task": "Lexical set → Explore language → collocation → dùng trong câu của mình",
     "ket_part": "KET R Part 4 (MC cloze) khi có",
     "grammar": "Ôn G1 trong ngữ cảnh",
     "vocabulary": "Mua sắm: receipt, bargain, sale, size, cash/card; save / cost / pay / spend / try on; đọc giá & đơn vị tiền",
     "can_do": "Nhớ và dùng được từ vựng chủ đề, collocation, quy tắc cấu tạo từ của unit",
     "before": "Wordwall/flashcard toàn bộ từ của trang Vocabulary",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz Comparative adjectives",
       "category": "routine"
      },
      {
       "minutes": 25,
       "activity": "Vocabulary SB p.51: lexical set, nghĩa, phát âm",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Explore language (quy tắc cấu tạo từ / collocation)",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Extend vocabulary SB p.146",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Photocopiable từ vựng",
       "category": "extension"
      },
      {
       "minutes": 15,
       "activity": "KET Reading Part 4 (MC cloze) hoặc nói cá nhân hoá với từ mới",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt bài, giao bài (sổ từ vựng)",
       "category": "routine"
      }
     ],
     "after": "WB Vocabulary; sổ từ vựng cá nhân (5 câu tự đặt)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "PC 4A: Definitions quiz – shopping",
     "session_id": "KO-U04-S3",
     "session_no": 32,
     "week": 16,
     "ket_codes": []
    },
    {
     "unit": "U4",
     "unit_title": "Open 24/7",
     "global_skills": "—",
     "type": "Listening",
     "sb_pages": "52",
     "focus": "Nghe: Lạc trong trung tâm thương mại · Grammar 2",
     "task": "MCQ 5 câu: gạch keyword, dự đoán từ cho từng phương án",
     "ket_part": "Key L Part 3",
     "grammar": "Superlative adjectives (the biggest / the most… / the best)",
     "vocabulary": "Từ trong audio script",
     "can_do": "Làm được dạng KET L Part 3; dùng Superlative adjectives",
     "before": "Nghe trước 1 lần audio (không cần hiểu hết) + đoán nội dung",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng unit",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Power up + dự đoán nội dung, loại thông tin",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Nghe 'Lạc trong trung tâm thương mại' 2 lần: KET L Part 3 + exam tip",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Khai thác audio script: từ, cụm, bẫy",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Grammar 2: Superlative adjectives (the biggest / the most… / the best) – present + bài tập SB p.52",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Photocopiable / Speak up Grammar 2",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt bài, giao deep listening",
       "category": "routine"
      }
     ],
     "after": "WB Listening + Grammar 2; deep listening 10'/ngày (audio unit, shadowing)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "PC 4B: Thảo luận chọn cửa hàng – so sánh hơn/nhất",
     "session_id": "KO-U04-S4",
     "session_no": 33,
     "week": 17,
     "ket_codes": []
    },
    {
     "unit": "U4",
     "unit_title": "Open 24/7",
     "global_skills": "—",
     "type": "Speaking",
     "sb_pages": "53",
     "focus": "Nói: Hỏi & chỉ đường, dịch vụ trong thị trấn",
     "task": "Power up → nghe mẫu → Useful language → luyện cặp → mini exam task",
     "ket_part": "Chức năng giao tiếp",
     "grammar": "Ôn G1 + G2",
     "vocabulary": "Can you tell me how to get to…? turn left/right, go straight on, opposite, on your right",
     "can_do": "Hỏi đường và chỉ đường",
     "before": "Chuẩn bị ý cho 3–5 câu hỏi của chủ đề",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz Superlative adjectives",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Power up: khởi động chủ đề",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Nghe mẫu → điền Useful language",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Drill phát âm, ngữ điệu, câu mẫu",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Luyện cặp đổi bạn: Hỏi & chỉ đường, dịch vụ trong thị trấn + photocopiable",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Mô phỏng Chức năng giao tiếp – GV quay & nhận xét 3–4 cặp",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Giao video nói + project nhóm ('The Teenage Market')",
       "category": "routine"
      }
     ],
     "after": "Quay video nói 1–2 phút nộp lên web",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "PC 4C: Hội thoại chỉ đường",
     "session_id": "KO-U04-S5",
     "session_no": 34,
     "week": 17,
     "ket_codes": []
    },
    {
     "unit": "U4",
     "unit_title": "Open 24/7",
     "global_skills": "—",
     "type": "Writing",
     "sb_pages": "54–55",
     "focus": "Viết: Review cửa hàng yêu thích",
     "task": "Đọc bài mẫu → Explore language → lập dàn ý → viết nháp → Improve it (peer check)",
     "ket_part": "Key W Part 6",
     "grammar": "Explore language: Lập dàn ý bằng spidergram; The best/worst thing is…; so sánh hơn/nhất",
     "vocabulary": "Từ vựng unit dùng trong bài viết",
     "can_do": "Lên dàn ý và viết review ngắn",
     "before": "Đọc bài mẫu, gạch chân cấu trúc cần dùng",
     "in_class": [
      {
       "minutes": 5,
       "activity": "Warm-up",
       "category": "routine"
      },
      {
       "minutes": 15,
       "activity": "Power up + đọc bài mẫu, phân tích đề",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Explore language: Lập dàn ý bằng spidergram; The best/worst thing is…; so sánh hơn/nhất",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Luyện câu với cấu trúc mới",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Lập dàn ý (spidergram / trả lời câu hỏi gợi ý)",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Viết nháp tính giờ: Review cửa hàng yêu thích (KET W Part 6)",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Improve it: chấm chéo theo checklist",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Giao bản final nộp web",
       "category": "routine"
      }
     ],
     "after": "Viết bản final nộp web (GV chấm theo rubric KET)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U04-S6",
     "session_no": 35,
     "week": 18,
     "ket_codes": []
    },
    {
     "unit": "U4",
     "unit_title": "Open 24/7",
     "global_skills": "—",
     "type": "KET Lab",
     "sb_pages": "Workbook + tài liệu KET",
     "focus": "Luyện đề KET theo chủ đề unit + chữa bài viết S6",
     "task": "Làm đề có tính giờ → chữa → phân tích bẫy; trả bài viết, viết lại câu lỗi",
     "ket_part": "Key R Part 5 · Key L Part 3 · Key W Part 6",
     "grammar": "Sửa lỗi ngữ pháp G1, G2 thường gặp",
     "vocabulary": "Từ vựng unit trong đề",
     "can_do": "Áp dụng chiến lược làm bài đã học trong unit vào đề thật",
     "before": "—",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Trả bài viết S6: lỗi chung",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Viết lại 3 câu sai nhiều nhất",
       "category": "extension"
      },
      {
       "minutes": 40,
       "activity": "Skills Test A (Reading + Listening + Writing) tính giờ",
       "category": "test"
      },
      {
       "minutes": 15,
       "activity": "Chữa, phân tích lý do sai theo từng part",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Unit check SB p.57: Practice + Review",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Giao bài KET làm thêm",
       "category": "routine"
      }
     ],
     "after": "Bài KET cùng dạng nhưng khó hơn (web); HS yếu: Skills Test C (bản hỗ trợ)",
     "assessment": "Gold_Exp_A2_U4_Skills_Test_A",
     "photocopiable": "—",
     "session_id": "KO-U04-S7",
     "session_no": 36,
     "week": 18,
     "ket_codes": []
    },
    {
     "unit": "U4",
     "unit_title": "Open 24/7",
     "global_skills": "Tư duy tài chính · làm việc nhóm",
     "type": "Project & Check",
     "sb_pages": "56, 57",
     "focus": "Switch on: video 'The Teenage Market' · Project · Unit check",
     "task": "Project: Kế hoạch kinh doanh 1 gian hàng chợ & pitch (mở rộng: chợ trong lớp)",
     "ket_part": "—",
     "grammar": "Ôn Comparative adjectives + Superlative adjectives",
     "vocabulary": "Tổng ôn từ vựng unit",
     "can_do": "Dùng tiếng Anh để hoàn thành sản phẩm nhóm; tự đánh giá unit",
     "before": "Nhóm chuẩn bị project (giao từ S5)",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Game ôn từ vựng & ngữ pháp unit",
       "category": "routine"
      },
      {
       "minutes": 15,
       "activity": "Switch on: xem video 'The Teenage Market' + câu hỏi hiểu",
       "category": "book"
      },
      {
       "minutes": 35,
       "activity": "Trình bày project (Kế hoạch kinh doanh 1 gian hàng chợ & pitch (mở rộng: chợ trong lớp)) – 4–5 nhóm × 6' + nhận xét chéo",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Independent learning: tự đánh giá",
       "category": "book"
      },
      {
       "minutes": 30,
       "activity": "Language Test A Unit 4",
       "category": "test"
      },
      {
       "minutes": 5,
       "activity": "Chốt unit",
       "category": "routine"
      }
     ],
     "after": "Làm lại phần sai Unit check; HS < 70%: Language Test B (web)",
     "assessment": "Gold_Exp_A2_U4_Lang_Test_A",
     "photocopiable": "—",
     "session_id": "KO-U04-S8",
     "session_no": 37,
     "week": 19,
     "ket_codes": []
    },
    {
     "unit": "U5",
     "unit_title": "That's entertainment!",
     "global_skills": "—",
     "type": "Reading",
     "sb_pages": "59, 60–61",
     "focus": "Lead-in chủ đề 'Entertainment' · Đọc: Những rạp chiếu phim khác lạ",
     "task": "Matching 7 câu / 3 đoạn: đọc câu hỏi trước, gạch keyword",
     "ket_part": "Key R Part 2",
     "grammar": "—",
     "vocabulary": "Từ khoá của bài đọc (pre-teach 8–10 từ)",
     "can_do": "Đọc hiểu ý chính & chi tiết; làm được dạng KET R Part 2",
     "before": "Flashcard 8–10 từ của bài đọc (web)",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz ôn bài trước / chữa Language Test unit trước",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Lead-in: ảnh & câu nói mở unit (SB p.59)",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Power up + pre-teach 6–8 từ khoá",
       "category": "book"
      },
      {
       "minutes": 30,
       "activity": "Đọc 'Những rạp chiếu phim khác lạ': gist → exam task + exam tip",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Sum up / Speak up: nói lại & liên hệ bản thân",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Luyện thêm 1 bài KET R Part 2 cùng chủ đề (tính giờ) + chữa",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt can-do, giao bài trên web",
       "category": "routine"
      }
     ],
     "after": "WB Reading; 1 bài đọc KET cùng dạng (web, tự chấm)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U05-S1",
     "session_no": 38,
     "week": 19,
     "ket_codes": []
    },
    {
     "unit": "U5",
     "unit_title": "That's entertainment!",
     "global_skills": "—",
     "type": "Grammar",
     "sb_pages": "62",
     "focus": "Grammar 1: Past continuous (was/were + V-ing)",
     "task": "Present (từ câu trong bài đọc) → controlled practice → open cloze → Speak up",
     "ket_part": "KET R Part 5 (open cloze)",
     "grammar": "Past continuous (was/were + V-ing)",
     "vocabulary": "Ôn từ bài đọc",
     "can_do": "Dùng đúng Past continuous khi nói và viết",
     "before": "Video/slide ngữ pháp ngắn (Grammar presentation) + 5 câu tự kiểm tra",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng bài đọc",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Noticing: tìm cấu trúc trong bài đọc",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Present Past continuous (was/were + V-ing) (Grammar presentation: form · use · signal words)",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Bài tập SB p.62 + watch out",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Game drill ngữ pháp (bảng nhóm)",
       "category": "extension"
      },
      {
       "minutes": 20,
       "activity": "KET Reading Part 5 (open cloze) + 5 câu Grammar file",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Speak up: dùng cấu trúc nói về bản thân",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Chốt bài, giao bài",
       "category": "routine"
      }
     ],
     "after": "WB Grammar 1; Grammar file SB p.136",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U05-S2",
     "session_no": 39,
     "week": 20,
     "ket_codes": []
    },
    {
     "unit": "U5",
     "unit_title": "That's entertainment!",
     "global_skills": "—",
     "type": "Vocabulary",
     "sb_pages": "63, 146",
     "focus": "Vocabulary: Entertainment",
     "task": "Lexical set → Explore language → collocation → dùng trong câu của mình",
     "ket_part": "KET R Part 4 (MC cloze) khi có",
     "grammar": "Ôn G1 trong ngữ cảnh",
     "vocabulary": "Sự kiện giải trí (festival, exhibition, talent show); tính từ đánh giá; danh từ chỉ người -or/-er/-ian/-ist",
     "can_do": "Nhớ và dùng được từ vựng chủ đề, collocation, quy tắc cấu tạo từ của unit",
     "before": "Wordwall/flashcard toàn bộ từ của trang Vocabulary",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz Past continuous",
       "category": "routine"
      },
      {
       "minutes": 25,
       "activity": "Vocabulary SB p.63: lexical set, nghĩa, phát âm",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Explore language (quy tắc cấu tạo từ / collocation)",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Extend vocabulary SB p.146",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Photocopiable từ vựng",
       "category": "extension"
      },
      {
       "minutes": 15,
       "activity": "KET Reading Part 4 (MC cloze) hoặc nói cá nhân hoá với từ mới",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt bài, giao bài (sổ từ vựng)",
       "category": "routine"
      }
     ],
     "after": "WB Vocabulary; sổ từ vựng cá nhân (5 câu tự đặt)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "PC 5A: Survey đánh giá phim",
     "session_id": "KO-U05-S3",
     "session_no": 40,
     "week": 20,
     "ket_codes": []
    },
    {
     "unit": "U5",
     "unit_title": "That's entertainment!",
     "global_skills": "—",
     "type": "Listening",
     "sb_pages": "64",
     "focus": "Nghe: Lễ hội âm nhạc · Grammar 2",
     "task": "MCQ tranh 5 câu: xem tranh trước, ghi từ khoá",
     "ket_part": "Key L Part 1",
     "grammar": "Past continuous + past simple (when / while)",
     "vocabulary": "Từ trong audio script",
     "can_do": "Làm được dạng KET L Part 1; dùng Past continuous + past simple",
     "before": "Nghe trước 1 lần audio (không cần hiểu hết) + đoán nội dung",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng unit",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Power up + dự đoán nội dung, loại thông tin",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Nghe 'Lễ hội âm nhạc' 2 lần: KET L Part 1 + exam tip",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Khai thác audio script: từ, cụm, bẫy",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Grammar 2: Past continuous + past simple (when / while) – present + bài tập SB p.64",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Photocopiable / Speak up Grammar 2",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt bài, giao deep listening",
       "category": "routine"
      }
     ],
     "after": "WB Listening + Grammar 2; deep listening 10'/ngày (audio unit, shadowing)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "PC 5B: Ghép thẻ past continuous + past simple",
     "session_id": "KO-U05-S4",
     "session_no": 41,
     "week": 21,
     "ket_codes": []
    },
    {
     "unit": "U5",
     "unit_title": "That's entertainment!",
     "global_skills": "—",
     "type": "Speaking",
     "sb_pages": "65",
     "focus": "Nói: Hoạt động giải trí cuối tuần – nói cảm nhận & lý do",
     "task": "Power up → nghe mẫu → Useful language → luyện cặp → mini exam task",
     "ket_part": "Key S Part 2 (Phase 1)",
     "grammar": "Ôn G1 + G2",
     "vocabulary": "I love… because…; I don't really like…; Which do you like best?",
     "can_do": "Nói cảm nhận về 1 hoạt động và nêu lý do",
     "before": "Chuẩn bị ý cho 3–5 câu hỏi của chủ đề",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz Past continuous + past simple",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Power up: khởi động chủ đề",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Nghe mẫu → điền Useful language",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Drill phát âm, ngữ điệu, câu mẫu",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Luyện cặp đổi bạn: Hoạt động giải trí cuối tuần – nói cảm nhận & lý do",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Mô phỏng KET S Part 2 (Phase 1) – GV quay & nhận xét 3–4 cặp",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Giao video nói + project nhóm ('Let me tell you a story')",
       "category": "routine"
      }
     ],
     "after": "Quay video nói 1–2 phút nộp lên web",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U05-S5",
     "session_no": 42,
     "week": 21,
     "ket_codes": []
    },
    {
     "unit": "U5",
     "unit_title": "That's entertainment!",
     "global_skills": "—",
     "type": "Writing",
     "sb_pages": "66–67",
     "focus": "Viết: Truyện: điện thoại reo trong rạp phim",
     "task": "Đọc bài mẫu → Explore language → lập dàn ý → viết nháp → Improve it (peer check)",
     "ket_part": "Key W Part 7 (3 tranh, 35+ từ)",
     "grammar": "Explore language: Mốc thời gian Last Saturday / A few seconds later / In the end; đặt tiêu đề",
     "vocabulary": "Từ vựng unit dùng trong bài viết",
     "can_do": "Viết truyện ngắn theo 3 tranh",
     "before": "Đọc bài mẫu, gạch chân cấu trúc cần dùng",
     "in_class": [
      {
       "minutes": 5,
       "activity": "Warm-up",
       "category": "routine"
      },
      {
       "minutes": 15,
       "activity": "Power up + đọc bài mẫu, phân tích đề",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Explore language: Mốc thời gian Last Saturday / A few seconds later / In the end; đặt tiêu đề",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Photocopiable viết",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Lập dàn ý (spidergram / trả lời câu hỏi gợi ý)",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Viết nháp tính giờ: Truyện: điện thoại reo trong rạp phim (KET W Part 7 (3 tranh, 35+ từ))",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Improve it: chấm chéo theo checklist",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Giao bản final nộp web",
       "category": "routine"
      }
     ],
     "after": "Viết bản final nộp web (GV chấm theo rubric KET)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "PC 5C: Info gap Right/Wrong (Key R&W)",
     "session_id": "KO-U05-S6",
     "session_no": 43,
     "week": 22,
     "ket_codes": []
    },
    {
     "unit": "U5",
     "unit_title": "That's entertainment!",
     "global_skills": "—",
     "type": "KET Lab",
     "sb_pages": "Workbook + tài liệu KET",
     "focus": "Luyện đề KET theo chủ đề unit + chữa bài viết S6",
     "task": "Làm đề có tính giờ → chữa → phân tích bẫy; trả bài viết, viết lại câu lỗi",
     "ket_part": "Key R Part 2 · Key L Part 1 · Key W Part 7 (3 tranh, 35+ từ)",
     "grammar": "Sửa lỗi ngữ pháp G1, G2 thường gặp",
     "vocabulary": "Từ vựng unit trong đề",
     "can_do": "Áp dụng chiến lược làm bài đã học trong unit vào đề thật",
     "before": "—",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Trả bài viết S6: lỗi chung",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Viết lại 3 câu sai nhiều nhất",
       "category": "extension"
      },
      {
       "minutes": 40,
       "activity": "Skills Test A (Reading + Listening + Writing) tính giờ",
       "category": "test"
      },
      {
       "minutes": 15,
       "activity": "Chữa, phân tích lý do sai theo từng part",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Unit check SB p.69: Practice + Review",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Giao bài KET làm thêm",
       "category": "routine"
      }
     ],
     "after": "Bài KET cùng dạng nhưng khó hơn (web); HS yếu: Skills Test C (bản hỗ trợ)",
     "assessment": "Gold_Exp_A2_U5_Skills_Test_A",
     "photocopiable": "—",
     "session_id": "KO-U05-S7",
     "session_no": 44,
     "week": 22,
     "ket_codes": []
    },
    {
     "unit": "U5",
     "unit_title": "That's entertainment!",
     "global_skills": "Sáng tạo · kể chuyện",
     "type": "Project & Check",
     "sb_pages": "68, 69",
     "focus": "Switch on: video 'Let me tell you a story' · Project · Unit check",
     "task": "Project: Ý tưởng phim 'mash-up' & storyboard",
     "ket_part": "—",
     "grammar": "Ôn Past continuous + Past continuous + past simple",
     "vocabulary": "Tổng ôn từ vựng unit",
     "can_do": "Dùng tiếng Anh để hoàn thành sản phẩm nhóm; tự đánh giá unit",
     "before": "Nhóm chuẩn bị project (giao từ S5)",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Game ôn từ vựng & ngữ pháp unit",
       "category": "routine"
      },
      {
       "minutes": 15,
       "activity": "Switch on: xem video 'Let me tell you a story' + câu hỏi hiểu",
       "category": "book"
      },
      {
       "minutes": 35,
       "activity": "Trình bày project (Ý tưởng phim 'mash-up' & storyboard) – 4–5 nhóm × 6' + nhận xét chéo",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Independent learning: tự đánh giá",
       "category": "book"
      },
      {
       "minutes": 30,
       "activity": "Language Test A Unit 5",
       "category": "test"
      },
      {
       "minutes": 5,
       "activity": "Chốt unit",
       "category": "routine"
      }
     ],
     "after": "Làm lại phần sai Unit check; HS < 70%: Language Test B (web)",
     "assessment": "Gold_Exp_A2_U5_Lang_Test_A",
     "photocopiable": "—",
     "session_id": "KO-U05-S8",
     "session_no": 45,
     "week": 23,
     "ket_codes": []
    },
    {
     "unit": "U6",
     "unit_title": "Are we there yet?",
     "global_skills": "—",
     "type": "Reading",
     "sb_pages": "71, 72–73",
     "focus": "Lead-in chủ đề 'Travel & transport' · Đọc: Phỏng vấn một bạn teen hay đi du lịch",
     "task": "MCQ 5 câu: câu hỏi theo thứ tự bài",
     "ket_part": "Key R Part 3",
     "grammar": "—",
     "vocabulary": "Từ khoá của bài đọc (pre-teach 8–10 từ)",
     "can_do": "Đọc hiểu ý chính & chi tiết; làm được dạng KET R Part 3",
     "before": "Flashcard 8–10 từ của bài đọc (web)",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz ôn bài trước / chữa Language Test unit trước",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Lead-in: ảnh & câu nói mở unit (SB p.71)",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Power up + pre-teach 6–8 từ khoá",
       "category": "book"
      },
      {
       "minutes": 30,
       "activity": "Đọc 'Phỏng vấn một bạn teen hay đi du lịch': gist → exam task + exam tip",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Sum up / Speak up: nói lại & liên hệ bản thân",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Luyện thêm 1 bài KET R Part 3 cùng chủ đề (tính giờ) + chữa",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt can-do, giao bài trên web",
       "category": "routine"
      }
     ],
     "after": "WB Reading; 1 bài đọc KET cùng dạng (web, tự chấm)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U06-S1",
     "session_no": 46,
     "week": 23,
     "ket_codes": []
    },
    {
     "unit": "U6",
     "unit_title": "Are we there yet?",
     "global_skills": "—",
     "type": "Grammar",
     "sb_pages": "74",
     "focus": "Grammar 1: be going to (kế hoạch) vs will (dự đoán)",
     "task": "Present (từ câu trong bài đọc) → controlled practice → open cloze → Speak up",
     "ket_part": "KET R Part 5 (open cloze)",
     "grammar": "be going to (kế hoạch) vs will (dự đoán)",
     "vocabulary": "Ôn từ bài đọc",
     "can_do": "Dùng đúng be going to khi nói và viết",
     "before": "Video/slide ngữ pháp ngắn (Grammar presentation) + 5 câu tự kiểm tra",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng bài đọc",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Noticing: tìm cấu trúc trong bài đọc",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Present be going to (kế hoạch) vs will (dự đoán) (Grammar presentation: form · use · signal words)",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Bài tập SB p.74 + watch out",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Photocopiable / game ngữ pháp",
       "category": "extension"
      },
      {
       "minutes": 20,
       "activity": "KET Reading Part 5 (open cloze) + 5 câu Grammar file",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Speak up: dùng cấu trúc nói về bản thân",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Chốt bài, giao bài",
       "category": "routine"
      }
     ],
     "after": "WB Grammar 1; Grammar file SB p.138",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "PC 6A: Info gap will/going to",
     "session_id": "KO-U06-S2",
     "session_no": 47,
     "week": 24,
     "ket_codes": []
    },
    {
     "unit": "U6",
     "unit_title": "Are we there yet?",
     "global_skills": "—",
     "type": "Vocabulary",
     "sb_pages": "75, 146",
     "focus": "Vocabulary: Travel & transport",
     "task": "Lexical set → Explore language → collocation → dùng trong câu của mình",
     "ket_part": "KET R Part 4 (MC cloze) khi có",
     "grammar": "Ôn G1 trong ngữ cảnh",
     "vocabulary": "Phương tiện (ferry, tram, underground…); take / catch / ride / fly / go by; airport, platform, bus stop",
     "can_do": "Nhớ và dùng được từ vựng chủ đề, collocation, quy tắc cấu tạo từ của unit",
     "before": "Wordwall/flashcard toàn bộ từ của trang Vocabulary",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz be going to",
       "category": "routine"
      },
      {
       "minutes": 25,
       "activity": "Vocabulary SB p.75: lexical set, nghĩa, phát âm",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Explore language (quy tắc cấu tạo từ / collocation)",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Extend vocabulary SB p.146",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Photocopiable từ vựng",
       "category": "extension"
      },
      {
       "minutes": 15,
       "activity": "KET Reading Part 4 (MC cloze) hoặc nói cá nhân hoá với từ mới",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt bài, giao bài (sổ từ vựng)",
       "category": "routine"
      }
     ],
     "after": "WB Vocabulary; sổ từ vựng cá nhân (5 câu tự đặt)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "PC 6B: Domino collocations du lịch",
     "session_id": "KO-U06-S3",
     "session_no": 48,
     "week": 24,
     "ket_codes": []
    },
    {
     "unit": "U6",
     "unit_title": "Are we there yet?",
     "global_skills": "—",
     "type": "Listening",
     "sb_pages": "76",
     "focus": "Nghe: Kỳ nghỉ của người thân & phương tiện · Grammar 2",
     "task": "Matching (2 người nói, 2 phương án thừa)",
     "ket_part": "Key L Part 5",
     "grammar": "Present continuous for future arrangements",
     "vocabulary": "Từ trong audio script",
     "can_do": "Làm được dạng KET L Part 5; dùng Present continuous for future arrangements",
     "before": "Nghe trước 1 lần audio (không cần hiểu hết) + đoán nội dung",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng unit",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Power up + dự đoán nội dung, loại thông tin",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Nghe 'Kỳ nghỉ của người thân & phương tiện' 2 lần: KET L Part 5 + exam tip",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Khai thác audio script: từ, cụm, bẫy",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Grammar 2: Present continuous for future arrangements – present + bài tập SB p.76",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Photocopiable / Speak up Grammar 2",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt bài, giao deep listening",
       "category": "routine"
      }
     ],
     "after": "WB Listening + Grammar 2; deep listening 10'/ngày (audio unit, shadowing)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U06-S4",
     "session_no": 49,
     "week": 25,
     "ket_codes": []
    },
    {
     "unit": "U6",
     "unit_title": "Are we there yet?",
     "global_skills": "—",
     "type": "Speaking",
     "sb_pages": "77",
     "focus": "Nói: Hỏi & nói về kế hoạch tương lai, kỳ nghỉ",
     "task": "Power up → nghe mẫu → Useful language → luyện cặp → mini exam task",
     "ket_part": "Key S Part 1",
     "grammar": "Ôn G1 + G2",
     "vocabulary": "What are you going to…? What about you? That sounds great! / Lucky you!",
     "can_do": "Hỏi và trả lời về kế hoạch tương lai",
     "before": "Chuẩn bị ý cho 3–5 câu hỏi của chủ đề",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz Present continuous for future arrangements",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Power up: khởi động chủ đề",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Nghe mẫu → điền Useful language",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Drill phát âm, ngữ điệu, câu mẫu",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Luyện cặp đổi bạn: Hỏi & nói về kế hoạch tương lai, kỳ nghỉ",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Mô phỏng KET S Part 1 – GV quay & nhận xét 3–4 cặp",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Giao video nói + project nhóm ('Underwater adventures')",
       "category": "routine"
      }
     ],
     "after": "Quay video nói 1–2 phút nộp lên web",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U06-S5",
     "session_no": 50,
     "week": 25,
     "ket_codes": []
    },
    {
     "unit": "U6",
     "unit_title": "Are we there yet?",
     "global_skills": "—",
     "type": "Writing",
     "sb_pages": "78–79",
     "focus": "Viết: Email kể về chuyến đi của trường",
     "task": "Đọc bài mẫu → Explore language → lập dàn ý → viết nháp → Improve it (peer check)",
     "ket_part": "Key W Part 6",
     "grammar": "Explore language: Giới từ to/by/at/in/on; travel vs journey vs trip; trả lời đủ 3 ý",
     "vocabulary": "Từ vựng unit dùng trong bài viết",
     "can_do": "Viết email trả lời đủ 3 ý",
     "before": "Đọc bài mẫu, gạch chân cấu trúc cần dùng",
     "in_class": [
      {
       "minutes": 5,
       "activity": "Warm-up",
       "category": "routine"
      },
      {
       "minutes": 15,
       "activity": "Power up + đọc bài mẫu, phân tích đề",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Explore language: Giới từ to/by/at/in/on; travel vs journey vs trip; trả lời đủ 3 ý",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Photocopiable viết",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Lập dàn ý (spidergram / trả lời câu hỏi gợi ý)",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Viết nháp tính giờ: Email kể về chuyến đi của trường (KET W Part 6)",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Improve it: chấm chéo theo checklist",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Giao bản final nộp web",
       "category": "routine"
      }
     ],
     "after": "Viết bản final nộp web (GV chấm theo rubric KET)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "PC 6C: Ghép quảng cáo – email chuyến đi",
     "session_id": "KO-U06-S6",
     "session_no": 51,
     "week": 26,
     "ket_codes": []
    },
    {
     "unit": "U6",
     "unit_title": "Are we there yet?",
     "global_skills": "—",
     "type": "KET Lab",
     "sb_pages": "Workbook + tài liệu KET",
     "focus": "Luyện đề KET theo chủ đề unit + chữa bài viết S6",
     "task": "Làm đề có tính giờ → chữa → phân tích bẫy; trả bài viết, viết lại câu lỗi",
     "ket_part": "Key R Part 3 · Key L Part 5 · Key W Part 6",
     "grammar": "Sửa lỗi ngữ pháp G1, G2 thường gặp",
     "vocabulary": "Từ vựng unit trong đề",
     "can_do": "Áp dụng chiến lược làm bài đã học trong unit vào đề thật",
     "before": "—",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Trả bài viết S6: lỗi chung",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Viết lại 3 câu sai nhiều nhất",
       "category": "extension"
      },
      {
       "minutes": 40,
       "activity": "Skills Test A (Reading + Listening + Writing) tính giờ",
       "category": "test"
      },
      {
       "minutes": 15,
       "activity": "Chữa, phân tích lý do sai theo từng part",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Unit check SB p.81–82: Practice + Review",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Giao bài KET làm thêm",
       "category": "routine"
      }
     ],
     "after": "Bài KET cùng dạng nhưng khó hơn (web); HS yếu: Skills Test C (bản hỗ trợ)",
     "assessment": "Gold_Exp_A2_U6_Skills_Test_A",
     "photocopiable": "—",
     "session_id": "KO-U06-S7",
     "session_no": 52,
     "week": 26,
     "ket_codes": []
    },
    {
     "unit": "U6",
     "unit_title": "Are we there yet?",
     "global_skills": "Lập kế hoạch · hợp tác",
     "type": "Project & Check",
     "sb_pages": "80, 81–82",
     "focus": "Switch on: video 'Underwater adventures' · Project · Unit check",
     "task": "Project: Kế hoạch kỳ nghỉ của cả lớp / brochure",
     "ket_part": "—",
     "grammar": "Ôn be going to + Present continuous for future arrangements",
     "vocabulary": "Tổng ôn từ vựng unit",
     "can_do": "Dùng tiếng Anh để hoàn thành sản phẩm nhóm; tự đánh giá unit",
     "before": "Nhóm chuẩn bị project (giao từ S5)",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Game ôn từ vựng & ngữ pháp unit",
       "category": "routine"
      },
      {
       "minutes": 15,
       "activity": "Switch on: xem video 'Underwater adventures' + câu hỏi hiểu",
       "category": "book"
      },
      {
       "minutes": 35,
       "activity": "Trình bày project (Kế hoạch kỳ nghỉ của cả lớp / brochure) – 4–5 nhóm × 6' + nhận xét chéo",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Independent learning: tự đánh giá",
       "category": "book"
      },
      {
       "minutes": 30,
       "activity": "Language Test A Unit 6",
       "category": "test"
      },
      {
       "minutes": 5,
       "activity": "Chốt unit",
       "category": "routine"
      }
     ],
     "after": "Làm lại phần sai Unit check; HS < 70%: Language Test B (web)",
     "assessment": "Gold_Exp_A2_U6_Lang_Test_A",
     "photocopiable": "—",
     "session_id": "KO-U06-S8",
     "session_no": 53,
     "week": 27,
     "ket_codes": []
    },
    {
     "session_id": "KO-MT-S1",
     "session_no": 54,
     "unit": "Mid-course",
     "unit_title": "Units 1–6",
     "type": "Review",
     "sb_pages": "—",
     "focus": "Ôn giữa khoá U1–6",
     "task": "—",
     "ket_part": "—",
     "grammar": "Toàn bộ thì đã học + so sánh + tương lai",
     "vocabulary": "U1–6",
     "can_do": "Tự tin với format bài thi",
     "before": "Đề ôn online",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz",
       "category": "routine"
      },
      {
       "minutes": 40,
       "activity": "Ôn theo trạm: grammar · vocab · writing · speaking",
       "category": "extension"
      },
      {
       "minutes": 45,
       "activity": "Luyện 1 đề KET rút gọn + chữa",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Giao đề ôn",
       "category": "routine"
      }
     ],
     "after": "Đề ôn giữa khoá",
     "photocopiable": "—",
     "global_skills": "—",
     "assessment": "—",
     "week": 27,
     "ket_codes": []
    },
    {
     "session_id": "KO-MT-S2",
     "session_no": 55,
     "unit": "Mid-course",
     "unit_title": "Units 1–6",
     "type": "Test",
     "sb_pages": "—",
     "focus": "Kiểm tra giữa khoá (R+W+L)",
     "task": "—",
     "ket_part": "KET format",
     "grammar": "—",
     "vocabulary": "—",
     "can_do": "—",
     "before": "—",
     "in_class": [
      {
       "minutes": 5,
       "activity": "Hướng dẫn",
       "category": "routine"
      },
      {
       "minutes": 60,
       "activity": "Reading & Writing (KET format)",
       "category": "test"
      },
      {
       "minutes": 35,
       "activity": "Listening (KET format)",
       "category": "test"
      },
      {
       "minutes": 5,
       "activity": "Thu bài",
       "category": "routine"
      }
     ],
     "after": "—",
     "photocopiable": "—",
     "global_skills": "—",
     "assessment": "Mid-course test",
     "week": 28,
     "ket_codes": []
    },
    {
     "session_id": "KO-MT-S3",
     "session_no": 56,
     "unit": "Mid-course",
     "unit_title": "Units 1–6",
     "type": "Test",
     "sb_pages": "—",
     "focus": "Speaking test giữa khoá + trả bài & kế hoạch cá nhân",
     "task": "—",
     "ket_part": "KET S Part 1–2",
     "grammar": "—",
     "vocabulary": "—",
     "can_do": "—",
     "before": "—",
     "in_class": [
      {
       "minutes": 60,
       "activity": "Speaking test theo cặp (~8–10'/cặp); HS chờ làm bài tự học",
       "category": "test"
      },
      {
       "minutes": 30,
       "activity": "Trả bài viết, chữa lỗi chung",
       "category": "extension"
      },
      {
       "minutes": 15,
       "activity": "Mỗi HS đặt 2 mục tiêu nửa sau khoá",
       "category": "routine"
      }
     ],
     "after": "Báo cáo phụ huynh giữa khoá",
     "photocopiable": "—",
     "global_skills": "—",
     "assessment": "Mid-course speaking",
     "week": 28,
     "ket_codes": []
    },
    {
     "unit": "U7",
     "unit_title": "Team spirit",
     "global_skills": "—",
     "type": "Reading",
     "sb_pages": "83, 84–85",
     "focus": "Lead-in chủ đề 'Sport' · Đọc: Chương trình thể thao ở trường",
     "task": "Multiple-choice cloze 6 câu: xét từ trước/sau chỗ trống, collocation",
     "ket_part": "Key R Part 4",
     "grammar": "—",
     "vocabulary": "Từ khoá của bài đọc (pre-teach 8–10 từ)",
     "can_do": "Đọc hiểu ý chính & chi tiết; làm được dạng KET R Part 4",
     "before": "Flashcard 8–10 từ của bài đọc (web)",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz ôn bài trước / chữa Language Test unit trước",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Lead-in: ảnh & câu nói mở unit (SB p.83)",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Power up + pre-teach 6–8 từ khoá",
       "category": "book"
      },
      {
       "minutes": 30,
       "activity": "Đọc 'Chương trình thể thao ở trường': gist → exam task + exam tip",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Sum up / Speak up: nói lại & liên hệ bản thân",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Luyện thêm 1 bài KET R Part 4 cùng chủ đề (tính giờ) + chữa",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt can-do, giao bài trên web",
       "category": "routine"
      }
     ],
     "after": "WB Reading; 1 bài đọc KET cùng dạng (web, tự chấm)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U07-S1",
     "session_no": 57,
     "week": 29,
     "ket_codes": []
    },
    {
     "unit": "U7",
     "unit_title": "Team spirit",
     "global_skills": "—",
     "type": "Grammar",
     "sb_pages": "86",
     "focus": "Grammar 1: can / could – ability & possibility",
     "task": "Present (từ câu trong bài đọc) → controlled practice → open cloze → Speak up",
     "ket_part": "KET R Part 5 (open cloze)",
     "grammar": "can / could – ability & possibility",
     "vocabulary": "Ôn từ bài đọc",
     "can_do": "Dùng đúng can / could – ability & possibility khi nói và viết",
     "before": "Video/slide ngữ pháp ngắn (Grammar presentation) + 5 câu tự kiểm tra",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng bài đọc",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Noticing: tìm cấu trúc trong bài đọc",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Present can / could – ability & possibility (Grammar presentation: form · use · signal words)",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Bài tập SB p.86 + watch out",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Photocopiable / game ngữ pháp",
       "category": "extension"
      },
      {
       "minutes": 20,
       "activity": "KET Reading Part 5 (open cloze) + 5 câu Grammar file",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Speak up: dùng cấu trúc nói về bản thân",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Chốt bài, giao bài",
       "category": "routine"
      }
     ],
     "after": "WB Grammar 1; Grammar file SB p.140",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "PC 7A: Survey can/could",
     "session_id": "KO-U07-S2",
     "session_no": 58,
     "week": 29,
     "ket_codes": []
    },
    {
     "unit": "U7",
     "unit_title": "Team spirit",
     "global_skills": "—",
     "type": "Vocabulary",
     "sb_pages": "87, 146",
     "focus": "Vocabulary: Sport",
     "task": "Lexical set → Explore language → collocation → dùng trong câu của mình",
     "ket_part": "KET R Part 4 (MC cloze) khi có",
     "grammar": "Ôn G1 trong ngữ cảnh",
     "vocabulary": "Môn thể thao & dụng cụ (goggles, helmet, racket…); play / go / do + sport; practice vs practise",
     "can_do": "Nhớ và dùng được từ vựng chủ đề, collocation, quy tắc cấu tạo từ của unit",
     "before": "Wordwall/flashcard toàn bộ từ của trang Vocabulary",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz can / could – ability & possibility",
       "category": "routine"
      },
      {
       "minutes": 25,
       "activity": "Vocabulary SB p.87: lexical set, nghĩa, phát âm",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Explore language (quy tắc cấu tạo từ / collocation)",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Extend vocabulary SB p.146",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Photocopiable từ vựng",
       "category": "extension"
      },
      {
       "minutes": 15,
       "activity": "KET Reading Part 4 (MC cloze) hoặc nói cá nhân hoá với từ mới",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt bài, giao bài (sổ từ vựng)",
       "category": "routine"
      }
     ],
     "after": "WB Vocabulary; sổ từ vựng cá nhân (5 câu tự đặt)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "PC 7B: Spinner play/go/do",
     "session_id": "KO-U07-S3",
     "session_no": 59,
     "week": 30,
     "ket_codes": []
    },
    {
     "unit": "U7",
     "unit_title": "Team spirit",
     "global_skills": "—",
     "type": "Listening",
     "sb_pages": "88",
     "focus": "Nghe: Thể thao · Grammar 2",
     "task": "MCQ tranh 5 câu: nghe lần 1 chọn, lần 2 kiểm tra",
     "ket_part": "Key L Part 1",
     "grammar": "have to / don't have to / had to; must",
     "vocabulary": "Từ trong audio script",
     "can_do": "Làm được dạng KET L Part 1; dùng have to / don't have to / had to; must",
     "before": "Nghe trước 1 lần audio (không cần hiểu hết) + đoán nội dung",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng unit",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Power up + dự đoán nội dung, loại thông tin",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Nghe 'Thể thao' 2 lần: KET L Part 1 + exam tip",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Khai thác audio script: từ, cụm, bẫy",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Grammar 2: have to / don't have to / had to; must – present + bài tập SB p.88",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Photocopiable / Speak up Grammar 2",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt bài, giao deep listening",
       "category": "routine"
      }
     ],
     "after": "WB Listening + Grammar 2; deep listening 10'/ngày (audio unit, shadowing)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U07-S4",
     "session_no": 60,
     "week": 30,
     "ket_codes": []
    },
    {
     "unit": "U7",
     "unit_title": "Team spirit",
     "global_skills": "—",
     "type": "Speaking",
     "sb_pages": "89",
     "focus": "Nói: Chuẩn bị đi tập – nhờ vả & đáp lời",
     "task": "Power up → nghe mẫu → Useful language → luyện cặp → mini exam task",
     "ket_part": "Chức năng giao tiếp",
     "grammar": "Ôn G1 + G2",
     "vocabulary": "Can/Could I/you…, please? Sure / No problem / Sorry, but…",
     "can_do": "Đưa ra lời nhờ vả và đáp lại lịch sự",
     "before": "Chuẩn bị ý cho 3–5 câu hỏi của chủ đề",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz have to / don't have to / had to; must",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Power up: khởi động chủ đề",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Nghe mẫu → điền Useful language",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Drill phát âm, ngữ điệu, câu mẫu",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Luyện cặp đổi bạn: Chuẩn bị đi tập – nhờ vả & đáp lời + photocopiable",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Mô phỏng Chức năng giao tiếp – GV quay & nhận xét 3–4 cặp",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Giao video nói + project nhóm ('Freestyle tricks')",
       "category": "routine"
      }
     ],
     "after": "Quay video nói 1–2 phút nộp lên web",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "PC 7C: Ghép câu hỏi – câu trả lời",
     "session_id": "KO-U07-S5",
     "session_no": 61,
     "week": 31,
     "ket_codes": []
    },
    {
     "unit": "U7",
     "unit_title": "Team spirit",
     "global_skills": "—",
     "type": "Writing",
     "sb_pages": "90–91",
     "focus": "Viết: Đoạn văn/email về môn thể thao hay sở thích mới",
     "task": "Đọc bài mẫu → Explore language → lập dàn ý → viết nháp → Improve it (peer check)",
     "ket_part": "Key W Part 6 (25+ từ)",
     "grammar": "Explore language: Trạng từ cách thức (well, badly, fast, easily)",
     "vocabulary": "Từ vựng unit dùng trong bài viết",
     "can_do": "Trả lời câu hỏi về sở thích mới",
     "before": "Đọc bài mẫu, gạch chân cấu trúc cần dùng",
     "in_class": [
      {
       "minutes": 5,
       "activity": "Warm-up",
       "category": "routine"
      },
      {
       "minutes": 15,
       "activity": "Power up + đọc bài mẫu, phân tích đề",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Explore language: Trạng từ cách thức (well, badly, fast, easily)",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Luyện câu với cấu trúc mới",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Lập dàn ý (spidergram / trả lời câu hỏi gợi ý)",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Viết nháp tính giờ: Đoạn văn/email về môn thể thao hay sở thích mới (KET W Part 6 (25+ từ))",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Improve it: chấm chéo theo checklist",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Giao bản final nộp web",
       "category": "routine"
      }
     ],
     "after": "Viết bản final nộp web (GV chấm theo rubric KET)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U07-S6",
     "session_no": 62,
     "week": 31,
     "ket_codes": []
    },
    {
     "unit": "U7",
     "unit_title": "Team spirit",
     "global_skills": "—",
     "type": "KET Lab",
     "sb_pages": "Workbook + tài liệu KET",
     "focus": "Luyện đề KET theo chủ đề unit + chữa bài viết S6",
     "task": "Làm đề có tính giờ → chữa → phân tích bẫy; trả bài viết, viết lại câu lỗi",
     "ket_part": "Key R Part 4 · Key L Part 1 · Key W Part 6 (25+ từ)",
     "grammar": "Sửa lỗi ngữ pháp G1, G2 thường gặp",
     "vocabulary": "Từ vựng unit trong đề",
     "can_do": "Áp dụng chiến lược làm bài đã học trong unit vào đề thật",
     "before": "—",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Trả bài viết S6: lỗi chung",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Viết lại 3 câu sai nhiều nhất",
       "category": "extension"
      },
      {
       "minutes": 40,
       "activity": "Skills Test A (Reading + Listening + Writing) tính giờ",
       "category": "test"
      },
      {
       "minutes": 15,
       "activity": "Chữa, phân tích lý do sai theo từng part",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Unit check SB p.93–94: Practice + Review",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Giao bài KET làm thêm",
       "category": "routine"
      }
     ],
     "after": "Bài KET cùng dạng nhưng khó hơn (web); HS yếu: Skills Test C (bản hỗ trợ)",
     "assessment": "Gold_Exp_A2_U7_Skills_Test_A",
     "photocopiable": "—",
     "session_id": "KO-U07-S7",
     "session_no": 63,
     "week": 32,
     "ket_codes": []
    },
    {
     "unit": "U7",
     "unit_title": "Team spirit",
     "global_skills": "Tinh thần đồng đội · sáng tạo luật chơi",
     "type": "Project & Check",
     "sb_pages": "92, 93–94",
     "focus": "Switch on: video 'Freestyle tricks' · Project · Unit check",
     "task": "Project: Sáng tạo môn thể thao mới (poster/video)",
     "ket_part": "—",
     "grammar": "Ôn can / could – ability & possibility + have to / don't have to / had to; must",
     "vocabulary": "Tổng ôn từ vựng unit",
     "can_do": "Dùng tiếng Anh để hoàn thành sản phẩm nhóm; tự đánh giá unit",
     "before": "Nhóm chuẩn bị project (giao từ S5)",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Game ôn từ vựng & ngữ pháp unit",
       "category": "routine"
      },
      {
       "minutes": 15,
       "activity": "Switch on: xem video 'Freestyle tricks' + câu hỏi hiểu",
       "category": "book"
      },
      {
       "minutes": 35,
       "activity": "Trình bày project (Sáng tạo môn thể thao mới (poster/video)) – 4–5 nhóm × 6' + nhận xét chéo",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Independent learning: tự đánh giá",
       "category": "book"
      },
      {
       "minutes": 30,
       "activity": "Language Test A Unit 7",
       "category": "test"
      },
      {
       "minutes": 5,
       "activity": "Chốt unit",
       "category": "routine"
      }
     ],
     "after": "Làm lại phần sai Unit check; HS < 70%: Language Test B (web)",
     "assessment": "Gold_Exp_A2_U7_Lang_Test_A",
     "photocopiable": "—",
     "session_id": "KO-U07-S8",
     "session_no": 64,
     "week": 32,
     "ket_codes": []
    },
    {
     "unit": "U8",
     "unit_title": "Wild world",
     "global_skills": "—",
     "type": "Reading",
     "sb_pages": "95, 96–97",
     "focus": "Lead-in chủ đề 'The natural world' · Đọc: National Mountain Day – những ngọn núi nổi tiếng",
     "task": "Matching 7 câu: gạch keyword trong câu hỏi",
     "ket_part": "Key R Part 2",
     "grammar": "—",
     "vocabulary": "Từ khoá của bài đọc (pre-teach 8–10 từ)",
     "can_do": "Đọc hiểu ý chính & chi tiết; làm được dạng KET R Part 2",
     "before": "Flashcard 8–10 từ của bài đọc (web)",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz ôn bài trước / chữa Language Test unit trước",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Lead-in: ảnh & câu nói mở unit (SB p.95)",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Power up + pre-teach 6–8 từ khoá",
       "category": "book"
      },
      {
       "minutes": 30,
       "activity": "Đọc 'National Mountain Day – những ngọn núi nổi tiếng': gist → exam task + exam tip",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Sum up / Speak up: nói lại & liên hệ bản thân",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Luyện thêm 1 bài KET R Part 2 cùng chủ đề (tính giờ) + chữa",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt can-do, giao bài trên web",
       "category": "routine"
      }
     ],
     "after": "WB Reading; 1 bài đọc KET cùng dạng (web, tự chấm)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U08-S1",
     "session_no": 65,
     "week": 33,
     "ket_codes": []
    },
    {
     "unit": "U8",
     "unit_title": "Wild world",
     "global_skills": "—",
     "type": "Grammar",
     "sb_pages": "98",
     "focus": "Grammar 1: Present perfect (trải nghiệm) vs past simple; past participles",
     "task": "Present (từ câu trong bài đọc) → controlled practice → open cloze → Speak up",
     "ket_part": "KET R Part 5 (open cloze)",
     "grammar": "Present perfect (trải nghiệm) vs past simple; past participles",
     "vocabulary": "Ôn từ bài đọc",
     "can_do": "Dùng đúng Present perfect khi nói và viết",
     "before": "Video/slide ngữ pháp ngắn (Grammar presentation) + 5 câu tự kiểm tra",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng bài đọc",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Noticing: tìm cấu trúc trong bài đọc",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Present Present perfect (trải nghiệm) vs past simple; past participles (Grammar presentation: form · use · signal words)",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Bài tập SB p.98 + watch out",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Game drill ngữ pháp (bảng nhóm)",
       "category": "extension"
      },
      {
       "minutes": 20,
       "activity": "KET Reading Part 5 (open cloze) + 5 câu Grammar file",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Speak up: dùng cấu trúc nói về bản thân",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Chốt bài, giao bài",
       "category": "routine"
      }
     ],
     "after": "WB Grammar 1; Grammar file SB p.142",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U08-S2",
     "session_no": 66,
     "week": 33,
     "ket_codes": []
    },
    {
     "unit": "U8",
     "unit_title": "Wild world",
     "global_skills": "—",
     "type": "Vocabulary",
     "sb_pages": "99, 146",
     "focus": "Vocabulary: The natural world",
     "task": "Lexical set → Explore language → collocation → dùng trong câu của mình",
     "ket_part": "KET R Part 4 (MC cloze) khi có",
     "grammar": "Ôn G1 trong ngữ cảnh",
     "vocabulary": "Địa hình tự nhiên, châu lục; thời tiết (danh từ → tính từ rainy, foggy…); thang nhiệt độ; phương hướng",
     "can_do": "Nhớ và dùng được từ vựng chủ đề, collocation, quy tắc cấu tạo từ của unit",
     "before": "Wordwall/flashcard toàn bộ từ của trang Vocabulary",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz Present perfect",
       "category": "routine"
      },
      {
       "minutes": 25,
       "activity": "Vocabulary SB p.99: lexical set, nghĩa, phát âm",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Explore language (quy tắc cấu tạo từ / collocation)",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Extend vocabulary SB p.146",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Game từ vựng (Wordwall/bảng nhóm)",
       "category": "extension"
      },
      {
       "minutes": 15,
       "activity": "KET Reading Part 4 (MC cloze) hoặc nói cá nhân hoá với từ mới",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt bài, giao bài (sổ từ vựng)",
       "category": "routine"
      }
     ],
     "after": "WB Vocabulary; sổ từ vựng cá nhân (5 câu tự đặt)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U08-S3",
     "session_no": 67,
     "week": 34,
     "ket_codes": []
    },
    {
     "unit": "U8",
     "unit_title": "Wild world",
     "global_skills": "—",
     "type": "Listening",
     "sb_pages": "100",
     "focus": "Nghe: Động vật hoang dã, chuyến đi rừng · Grammar 2",
     "task": "MCQ 3 phương án, 5 câu: cẩn thận bẫy",
     "ket_part": "Key L Part 3",
     "grammar": "Present perfect + ever / never",
     "vocabulary": "Từ trong audio script",
     "can_do": "Làm được dạng KET L Part 3; dùng Present perfect + ever / never",
     "before": "Nghe trước 1 lần audio (không cần hiểu hết) + đoán nội dung",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng unit",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Power up + dự đoán nội dung, loại thông tin",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Nghe 'Động vật hoang dã, chuyến đi rừng' 2 lần: KET L Part 3 + exam tip",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Khai thác audio script: từ, cụm, bẫy",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Grammar 2: Present perfect + ever / never – present + bài tập SB p.100",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Photocopiable / Speak up Grammar 2",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt bài, giao deep listening",
       "category": "routine"
      }
     ],
     "after": "WB Listening + Grammar 2; deep listening 10'/ngày (audio unit, shadowing)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "PC 8B: Câu hỏi Have you ever…?; PC 8A: Đoán con vật – natural world",
     "session_id": "KO-U08-S4",
     "session_no": 68,
     "week": 34,
     "ket_codes": []
    },
    {
     "unit": "U8",
     "unit_title": "Wild world",
     "global_skills": "—",
     "type": "Speaking",
     "sb_pages": "101",
     "focus": "Nói: Hoạt động ngoài trời mọi thời tiết – nêu ý kiến",
     "task": "Power up → nghe mẫu → Useful language → luyện cặp → mini exam task",
     "ket_part": "Key S Part 2",
     "grammar": "Ôn G1 + G2",
     "vocabulary": "I (don't) really think…; I'm not sure it's a good idea…; fun vs funny",
     "can_do": "Nêu ý kiến và lý do trong thảo luận",
     "before": "Chuẩn bị ý cho 3–5 câu hỏi của chủ đề",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz Present perfect + ever / never",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Power up: khởi động chủ đề",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Nghe mẫu → điền Useful language",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Drill phát âm, ngữ điệu, câu mẫu",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Luyện cặp đổi bạn: Hoạt động ngoài trời mọi thời tiết – nêu ý kiến",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Mô phỏng KET S Part 2 – GV quay & nhận xét 3–4 cặp",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Giao video nói + project nhóm ('Mountain life')",
       "category": "routine"
      }
     ],
     "after": "Quay video nói 1–2 phút nộp lên web",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U08-S5",
     "session_no": 69,
     "week": 35,
     "ket_codes": []
    },
    {
     "unit": "U8",
     "unit_title": "Wild world",
     "global_skills": "—",
     "type": "Writing",
     "sb_pages": "102–103",
     "focus": "Viết: Email kể về kỳ nghỉ cho bạn nước ngoài",
     "task": "Đọc bài mẫu → Explore language → lập dàn ý → viết nháp → Improve it (peer check)",
     "ket_part": "Key W Part 6",
     "grammar": "Explore language: very / really / a bit + adj; văn phong thân mật; đủ 3 ý, đúng số từ",
     "vocabulary": "Từ vựng unit dùng trong bài viết",
     "can_do": "Viết email thân mật, nhấn mạnh tính từ",
     "before": "Đọc bài mẫu, gạch chân cấu trúc cần dùng",
     "in_class": [
      {
       "minutes": 5,
       "activity": "Warm-up",
       "category": "routine"
      },
      {
       "minutes": 15,
       "activity": "Power up + đọc bài mẫu, phân tích đề",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Explore language: very / really / a bit + adj; văn phong thân mật; đủ 3 ý, đúng số từ",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Photocopiable viết",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Lập dàn ý (spidergram / trả lời câu hỏi gợi ý)",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Viết nháp tính giờ: Email kể về kỳ nghỉ cho bạn nước ngoài (KET W Part 6)",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Improve it: chấm chéo theo checklist",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Giao bản final nộp web",
       "category": "routine"
      }
     ],
     "after": "Viết bản final nộp web (GV chấm theo rubric KET)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "PC 8C: Cloze tin nhắn kỳ nghỉ – very/really/a bit",
     "session_id": "KO-U08-S6",
     "session_no": 70,
     "week": 35,
     "ket_codes": []
    },
    {
     "unit": "U8",
     "unit_title": "Wild world",
     "global_skills": "—",
     "type": "KET Lab",
     "sb_pages": "Workbook + tài liệu KET",
     "focus": "Luyện đề KET theo chủ đề unit + chữa bài viết S6",
     "task": "Làm đề có tính giờ → chữa → phân tích bẫy; trả bài viết, viết lại câu lỗi",
     "ket_part": "Key R Part 2 · Key L Part 3 · Key W Part 6",
     "grammar": "Sửa lỗi ngữ pháp G1, G2 thường gặp",
     "vocabulary": "Từ vựng unit trong đề",
     "can_do": "Áp dụng chiến lược làm bài đã học trong unit vào đề thật",
     "before": "—",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Trả bài viết S6: lỗi chung",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Viết lại 3 câu sai nhiều nhất",
       "category": "extension"
      },
      {
       "minutes": 40,
       "activity": "Skills Test A (Reading + Listening + Writing) tính giờ",
       "category": "test"
      },
      {
       "minutes": 15,
       "activity": "Chữa, phân tích lý do sai theo từng part",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Unit check SB p.105: Practice + Review",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Giao bài KET làm thêm",
       "category": "routine"
      }
     ],
     "after": "Bài KET cùng dạng nhưng khó hơn (web); HS yếu: Skills Test C (bản hỗ trợ)",
     "assessment": "Gold_Exp_A2_U8_Skills_Test_A",
     "photocopiable": "—",
     "session_id": "KO-U08-S7",
     "session_no": 71,
     "week": 36,
     "ket_codes": []
    },
    {
     "unit": "U8",
     "unit_title": "Wild world",
     "global_skills": "Bảo vệ thiên nhiên · vận động cộng đồng",
     "type": "Project & Check",
     "sb_pages": "104, 105",
     "focus": "Switch on: video 'Mountain life' · Project · Unit check",
     "task": "Project: Chiến dịch gây quỹ 'rewilding'",
     "ket_part": "—",
     "grammar": "Ôn Present perfect + Present perfect + ever / never",
     "vocabulary": "Tổng ôn từ vựng unit",
     "can_do": "Dùng tiếng Anh để hoàn thành sản phẩm nhóm; tự đánh giá unit",
     "before": "Nhóm chuẩn bị project (giao từ S5)",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Game ôn từ vựng & ngữ pháp unit",
       "category": "routine"
      },
      {
       "minutes": 15,
       "activity": "Switch on: xem video 'Mountain life' + câu hỏi hiểu",
       "category": "book"
      },
      {
       "minutes": 35,
       "activity": "Trình bày project (Chiến dịch gây quỹ 'rewilding') – 4–5 nhóm × 6' + nhận xét chéo",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Independent learning: tự đánh giá",
       "category": "book"
      },
      {
       "minutes": 30,
       "activity": "Language Test A Unit 8",
       "category": "test"
      },
      {
       "minutes": 5,
       "activity": "Chốt unit",
       "category": "routine"
      }
     ],
     "after": "Làm lại phần sai Unit check; HS < 70%: Language Test B (web)",
     "assessment": "Gold_Exp_A2_U8_Lang_Test_A",
     "photocopiable": "—",
     "session_id": "KO-U08-S8",
     "session_no": 72,
     "week": 36,
     "ket_codes": []
    },
    {
     "unit": "U9",
     "unit_title": "Feeling good",
     "global_skills": "—",
     "type": "Reading",
     "sb_pages": "107, 108–109",
     "focus": "Lead-in chủ đề 'Food, cooking & health' · Đọc: Tiny Kitchen – kênh nấu ăn tí hon",
     "task": "MCQ 5 câu: xác định đại từ it/they/this chỉ cái gì",
     "ket_part": "Key R Part 3",
     "grammar": "—",
     "vocabulary": "Từ khoá của bài đọc (pre-teach 8–10 từ)",
     "can_do": "Đọc hiểu ý chính & chi tiết; làm được dạng KET R Part 3",
     "before": "Flashcard 8–10 từ của bài đọc (web)",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz ôn bài trước / chữa Language Test unit trước",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Lead-in: ảnh & câu nói mở unit (SB p.107)",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Power up + pre-teach 6–8 từ khoá",
       "category": "book"
      },
      {
       "minutes": 30,
       "activity": "Đọc 'Tiny Kitchen – kênh nấu ăn tí hon': gist → exam task + exam tip",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Sum up / Speak up: nói lại & liên hệ bản thân",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Luyện thêm 1 bài KET R Part 3 cùng chủ đề (tính giờ) + chữa",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt can-do, giao bài trên web",
       "category": "routine"
      }
     ],
     "after": "WB Reading; 1 bài đọc KET cùng dạng (web, tự chấm)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U09-S1",
     "session_no": 73,
     "week": 37,
     "ket_codes": []
    },
    {
     "unit": "U9",
     "unit_title": "Feeling good",
     "global_skills": "—",
     "type": "Grammar",
     "sb_pages": "110",
     "focus": "Grammar 1: First conditional (If + present, will/won't)",
     "task": "Present (từ câu trong bài đọc) → controlled practice → open cloze → Speak up",
     "ket_part": "KET R Part 5 (open cloze)",
     "grammar": "First conditional (If + present, will/won't)",
     "vocabulary": "Ôn từ bài đọc",
     "can_do": "Dùng đúng First conditional khi nói và viết",
     "before": "Video/slide ngữ pháp ngắn (Grammar presentation) + 5 câu tự kiểm tra",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng bài đọc",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Noticing: tìm cấu trúc trong bài đọc",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Present First conditional (If + present, will/won't) (Grammar presentation: form · use · signal words)",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Bài tập SB p.110 + watch out",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Game drill ngữ pháp (bảng nhóm)",
       "category": "extension"
      },
      {
       "minutes": 20,
       "activity": "KET Reading Part 5 (open cloze) + 5 câu Grammar file",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Speak up: dùng cấu trúc nói về bản thân",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Chốt bài, giao bài",
       "category": "routine"
      }
     ],
     "after": "WB Grammar 1; Grammar file SB p.144",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U09-S2",
     "session_no": 74,
     "week": 37,
     "ket_codes": []
    },
    {
     "unit": "U9",
     "unit_title": "Feeling good",
     "global_skills": "—",
     "type": "Vocabulary",
     "sb_pages": "111, 146",
     "focus": "Vocabulary: Food, cooking & health",
     "task": "Lexical set → Explore language → collocation → dùng trong câu của mình",
     "ket_part": "KET R Part 4 (MC cloze) khi có",
     "grammar": "Ôn G1 trong ngữ cảnh",
     "vocabulary": "Món ăn; động từ nấu (bake, boil, fry, grill, roast); tính từ từ động từ (fried, baked…); collocations sức khoẻ (have a headache, feel sick)",
     "can_do": "Nhớ và dùng được từ vựng chủ đề, collocation, quy tắc cấu tạo từ của unit",
     "before": "Wordwall/flashcard toàn bộ từ của trang Vocabulary",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz First conditional",
       "category": "routine"
      },
      {
       "minutes": 25,
       "activity": "Vocabulary SB p.111: lexical set, nghĩa, phát âm",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Explore language (quy tắc cấu tạo từ / collocation)",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Extend vocabulary SB p.146",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Photocopiable từ vựng",
       "category": "extension"
      },
      {
       "minutes": 15,
       "activity": "KET Reading Part 4 (MC cloze) hoặc nói cá nhân hoá với từ mới",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt bài, giao bài (sổ từ vựng)",
       "category": "routine"
      }
     ],
     "after": "WB Vocabulary; sổ từ vựng cá nhân (5 câu tự đặt)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "PC 9A: Thay từ trong hội thoại – food",
     "session_id": "KO-U09-S3",
     "session_no": 75,
     "week": 38,
     "ket_codes": []
    },
    {
     "unit": "U9",
     "unit_title": "Feeling good",
     "global_skills": "—",
     "type": "Listening",
     "sb_pages": "112",
     "focus": "Nghe: Tin nhắn mời tiệc sinh nhật ở bể bơi · Grammar 2",
     "task": "Gap-fill 5 chỗ: chép đúng chính tả phần được đánh vần",
     "ket_part": "Key L Part 2",
     "grammar": "should / shouldn't – lời khuyên",
     "vocabulary": "Từ trong audio script",
     "can_do": "Làm được dạng KET L Part 2; dùng should / shouldn't – lời khuyên",
     "before": "Nghe trước 1 lần audio (không cần hiểu hết) + đoán nội dung",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng unit",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Power up + dự đoán nội dung, loại thông tin",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Nghe 'Tin nhắn mời tiệc sinh nhật ở bể bơi' 2 lần: KET L Part 2 + exam tip",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Khai thác audio script: từ, cụm, bẫy",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Grammar 2: should / shouldn't – lời khuyên – present + bài tập SB p.112",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Photocopiable / Speak up Grammar 2",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Chốt bài, giao deep listening",
       "category": "routine"
      }
     ],
     "after": "WB Listening + Grammar 2; deep listening 10'/ngày (audio unit, shadowing)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "PC 9B: Cho lời khuyên should/shouldn't",
     "session_id": "KO-U09-S4",
     "session_no": 76,
     "week": 38,
     "ket_codes": []
    },
    {
     "unit": "U9",
     "unit_title": "Feeling good",
     "global_skills": "—",
     "type": "Speaking",
     "sb_pages": "113",
     "focus": "Nói: Hoạt động hằng ngày – chọn ý mình thích nhất",
     "task": "Power up → nghe mẫu → Useful language → luyện cặp → mini exam task",
     "ket_part": "Key S Part 2",
     "grammar": "Ôn G1 + G2",
     "vocabulary": "I think… is the best because…; Which do you like best?",
     "can_do": "Chọn ý mình thích nhất trong thảo luận và giải thích",
     "before": "Chuẩn bị ý cho 3–5 câu hỏi của chủ đề",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz should / shouldn't – lời khuyên",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Power up: khởi động chủ đề",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Nghe mẫu → điền Useful language",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Drill phát âm, ngữ điệu, câu mẫu",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Luyện cặp đổi bạn: Hoạt động hằng ngày – chọn ý mình thích nhất",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Mô phỏng KET S Part 2 – GV quay & nhận xét 3–4 cặp",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Giao video nói + project nhóm ('Space food')",
       "category": "routine"
      }
     ],
     "after": "Quay video nói 1–2 phút nộp lên web",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "—",
     "session_id": "KO-U09-S5",
     "session_no": 77,
     "week": 39,
     "ket_codes": []
    },
    {
     "unit": "U9",
     "unit_title": "Feeling good",
     "global_skills": "—",
     "type": "Writing",
     "sb_pages": "114–115",
     "focus": "Viết: Truyện tranh 'The perfect medicine'",
     "task": "Đọc bài mẫu → Explore language → lập dàn ý → viết nháp → Improve it (peer check)",
     "ket_part": "Key W Part 7 (35+ từ)",
     "grammar": "Explore language: because (lý do) vs so (kết quả); Suddenly…; trả lời câu hỏi cho từng tranh để lập dàn ý",
     "vocabulary": "Từ vựng unit dùng trong bài viết",
     "can_do": "Viết truyện ngắn theo tranh",
     "before": "Đọc bài mẫu, gạch chân cấu trúc cần dùng",
     "in_class": [
      {
       "minutes": 5,
       "activity": "Warm-up",
       "category": "routine"
      },
      {
       "minutes": 15,
       "activity": "Power up + đọc bài mẫu, phân tích đề",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "Explore language: because (lý do) vs so (kết quả); Suddenly…; trả lời câu hỏi cho từng tranh để lập dàn ý",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Photocopiable viết",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Lập dàn ý (spidergram / trả lời câu hỏi gợi ý)",
       "category": "book"
      },
      {
       "minutes": 25,
       "activity": "Viết nháp tính giờ: Truyện tranh 'The perfect medicine' (KET W Part 7 (35+ từ))",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Improve it: chấm chéo theo checklist",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Giao bản final nộp web",
       "category": "routine"
      }
     ],
     "after": "Viết bản final nộp web (GV chấm theo rubric KET)",
     "assessment": "Quiz 10' đầu buổi (bài trước)",
     "photocopiable": "PC 9C: and/but/so/because trong truyện",
     "session_id": "KO-U09-S6",
     "session_no": 78,
     "week": 39,
     "ket_codes": []
    },
    {
     "unit": "U9",
     "unit_title": "Feeling good",
     "global_skills": "—",
     "type": "KET Lab",
     "sb_pages": "Workbook + tài liệu KET",
     "focus": "Luyện đề KET theo chủ đề unit + chữa bài viết S6",
     "task": "Làm đề có tính giờ → chữa → phân tích bẫy; trả bài viết, viết lại câu lỗi",
     "ket_part": "Key R Part 3 · Key L Part 2 · Key W Part 7 (35+ từ)",
     "grammar": "Sửa lỗi ngữ pháp G1, G2 thường gặp",
     "vocabulary": "Từ vựng unit trong đề",
     "can_do": "Áp dụng chiến lược làm bài đã học trong unit vào đề thật",
     "before": "—",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Trả bài viết S6: lỗi chung",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Viết lại 3 câu sai nhiều nhất",
       "category": "extension"
      },
      {
       "minutes": 40,
       "activity": "Skills Test A (Reading + Listening + Writing) tính giờ",
       "category": "test"
      },
      {
       "minutes": 15,
       "activity": "Chữa, phân tích lý do sai theo từng part",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Unit check SB p.117: Practice + Review",
       "category": "book"
      },
      {
       "minutes": 5,
       "activity": "Giao bài KET làm thêm",
       "category": "routine"
      }
     ],
     "after": "Bài KET cùng dạng nhưng khó hơn (web); HS yếu: Skills Test C (bản hỗ trợ)",
     "assessment": "Gold_Exp_A2_U9_Skills_Test_A",
     "photocopiable": "—",
     "session_id": "KO-U09-S7",
     "session_no": 79,
     "week": 40,
     "ket_codes": []
    },
    {
     "unit": "U9",
     "unit_title": "Feeling good",
     "global_skills": "Lối sống lành mạnh · đánh giá sản phẩm",
     "type": "Project & Check",
     "sb_pages": "116, 117",
     "focus": "Switch on: video 'Space food' · Project · Unit check",
     "task": "Project: Thiết kế thực đơn không gian & viết blog review",
     "ket_part": "—",
     "grammar": "Ôn First conditional + should / shouldn't – lời khuyên",
     "vocabulary": "Tổng ôn từ vựng unit",
     "can_do": "Dùng tiếng Anh để hoàn thành sản phẩm nhóm; tự đánh giá unit",
     "before": "Nhóm chuẩn bị project (giao từ S5)",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Game ôn từ vựng & ngữ pháp unit",
       "category": "routine"
      },
      {
       "minutes": 15,
       "activity": "Switch on: xem video 'Space food' + câu hỏi hiểu",
       "category": "book"
      },
      {
       "minutes": 35,
       "activity": "Trình bày project (Thiết kế thực đơn không gian & viết blog review) – 4–5 nhóm × 6' + nhận xét chéo",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Independent learning: tự đánh giá",
       "category": "book"
      },
      {
       "minutes": 30,
       "activity": "Language Test A Unit 9",
       "category": "test"
      },
      {
       "minutes": 5,
       "activity": "Chốt unit",
       "category": "routine"
      }
     ],
     "after": "Làm lại phần sai Unit check; HS < 70%: Language Test B (web)",
     "assessment": "Gold_Exp_A2_U9_Lang_Test_A",
     "photocopiable": "—",
     "session_id": "KO-U09-S8",
     "session_no": 80,
     "week": 40,
     "ket_codes": []
    },
    {
     "session_id": "KO-RV2-S1",
     "session_no": 81,
     "unit": "Review 2",
     "unit_title": "Units 7–9",
     "type": "Review",
     "sb_pages": "—",
     "focus": "Tổng ôn U7–9",
     "task": "—",
     "ket_part": "—",
     "grammar": "can/could, have to, present perfect, first conditional, should",
     "vocabulary": "U7–9",
     "can_do": "Phân biệt past simple vs present perfect; dùng câu điều kiện loại 1",
     "before": "Quiz tổng hợp U7–9",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz tổng hợp",
       "category": "routine"
      },
      {
       "minutes": 25,
       "activity": "Mind map: past simple vs present perfect, điều kiện loại 1, modal",
       "category": "extension"
      },
      {
       "minutes": 20,
       "activity": "Game ôn từ vựng U7–9",
       "category": "extension"
      },
      {
       "minutes": 20,
       "activity": "Sửa lỗi điển hình",
       "category": "extension"
      },
      {
       "minutes": 25,
       "activity": "Luyện nói KET Part 2",
       "category": "extension"
      },
      {
       "minutes": 5,
       "activity": "Giao bài ôn",
       "category": "routine"
      }
     ],
     "after": "Ôn theo danh sách lỗi cá nhân",
     "photocopiable": "—",
     "global_skills": "—",
     "assessment": "—",
     "week": 41,
     "ket_codes": []
    },
    {
     "session_id": "KO-RV2-S2",
     "session_no": 82,
     "unit": "Review 2",
     "unit_title": "Units 7–9",
     "type": "Test",
     "sb_pages": "—",
     "focus": "Progress test 2",
     "task": "R+W+L + nói theo cặp",
     "ket_part": "KET R/W/L/S",
     "grammar": "—",
     "vocabulary": "—",
     "can_do": "—",
     "before": "—",
     "in_class": [
      {
       "minutes": 5,
       "activity": "Ổn định",
       "category": "routine"
      },
      {
       "minutes": 60,
       "activity": "Progress test 2: R+W+L",
       "category": "test"
      },
      {
       "minutes": 35,
       "activity": "Speaking theo cặp",
       "category": "test"
      },
      {
       "minutes": 5,
       "activity": "Thu bài",
       "category": "routine"
      }
     ],
     "after": "—",
     "photocopiable": "—",
     "global_skills": "—",
     "assessment": "Progress test 2",
     "week": 41,
     "ket_codes": []
    },
    {
     "session_id": "KO-U10-S1",
     "session_no": 83,
     "unit": "U10",
     "unit_title": "The place to be!",
     "type": "Reading",
     "sb_pages": "120–121",
     "focus": "Đọc thông báo/biển báo ngắn (MCQ) + 'Paris beaches' (MC cloze)",
     "task": "Exam strategy → làm bài tính giờ → chữa & phân tích bẫy",
     "ket_part": "KET R Part 1 & 4",
     "grammar": "Ôn tổng hợp",
     "vocabulary": "Playground, leisure centre; house types; room adjectives",
     "can_do": "Nhận diện loại văn bản, gạch keyword",
     "before": "Bài luyện dạng tương ứng",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz",
       "category": "routine"
      },
      {
       "minutes": 10,
       "activity": "Lead-in SB p.119",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Đọc 6 thông báo ngắn (SB p.120) – KET R Part 1",
       "category": "book"
      },
      {
       "minutes": 20,
       "activity": "'Paris beaches' MC cloze (SB p.121) – KET R Part 4",
       "category": "book"
      },
      {
       "minutes": 40,
       "activity": "Đề thật R Part 2 + 3 tính giờ + chữa",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Giao bài",
       "category": "routine"
      }
     ],
     "after": "1 part KET tương ứng (web)",
     "photocopiable": "—",
     "global_skills": "—",
     "assessment": "—",
     "week": 42,
     "ket_codes": []
    },
    {
     "session_id": "KO-U10-S2",
     "session_no": 84,
     "unit": "U10",
     "unit_title": "The place to be!",
     "type": "Listening",
     "sb_pages": "122",
     "focus": "5 đoạn hội thoại ngắn – MCQ chữ",
     "task": "Exam strategy → làm bài tính giờ → chữa & phân tích bẫy",
     "ket_part": "KET L Part 1/3",
     "grammar": "Ôn tổng hợp",
     "vocabulary": "Playground, leisure centre; house types; room adjectives",
     "can_do": "Nắm thông tin chính trong hội thoại ngắn",
     "before": "Bài luyện dạng tương ứng",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz",
       "category": "routine"
      },
      {
       "minutes": 25,
       "activity": "5 hội thoại ngắn MCQ (SB p.122)",
       "category": "book"
      },
      {
       "minutes": 10,
       "activity": "Speak up: quà & sinh nhật",
       "category": "book"
      },
      {
       "minutes": 50,
       "activity": "Đề thật L Part 2, 4, 5 tính giờ + chữa",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Giao bài",
       "category": "routine"
      }
     ],
     "after": "1 part KET tương ứng (web)",
     "photocopiable": "—",
     "global_skills": "—",
     "assessment": "—",
     "week": 42,
     "ket_codes": []
    },
    {
     "session_id": "KO-U10-S3",
     "session_no": 85,
     "unit": "U10",
     "unit_title": "The place to be!",
     "type": "Speaking",
     "sb_pages": "123",
     "focus": "Chủ đề nhà ở – trả lời ngắn & mở rộng ('Tell me about…'); too / not enough",
     "task": "Exam strategy → làm bài tính giờ → chữa & phân tích bẫy",
     "ket_part": "KET S Part 1",
     "grammar": "Ôn tổng hợp",
     "vocabulary": "Playground, leisure centre; house types; room adjectives",
     "can_do": "Trả lời câu hỏi chủ đề và mở rộng ý",
     "before": "Bài luyện dạng tương ứng",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz",
       "category": "routine"
      },
      {
       "minutes": 30,
       "activity": "Phỏng vấn chủ đề nhà ở (SB p.123) – trả lời ngắn & mở rộng",
       "category": "book"
      },
      {
       "minutes": 15,
       "activity": "Speaking extra: too / not enough",
       "category": "book"
      },
      {
       "minutes": 40,
       "activity": "Mock S Part 1 + 2 theo cặp, GV chấm theo tiêu chí",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Giao video",
       "category": "routine"
      }
     ],
     "after": "1 part KET tương ứng (web)",
     "photocopiable": "—",
     "global_skills": "—",
     "assessment": "—",
     "week": 43,
     "ket_codes": []
    },
    {
     "session_id": "KO-U10-S4",
     "session_no": 86,
     "unit": "U10",
     "unit_title": "The place to be!",
     "type": "Writing",
     "sb_pages": "124",
     "focus": "Email mời bạn (3 ý) + truyện 3 tranh (adj + noun, từ trái nghĩa)",
     "task": "Exam strategy → làm bài tính giờ → chữa & phân tích bẫy",
     "ket_part": "KET W Part 6 & 7",
     "grammar": "Ôn tổng hợp",
     "vocabulary": "Playground, leisure centre; house types; room adjectives",
     "can_do": "Viết email mời + truyện theo tranh đạt tiêu chí KET",
     "before": "Bài luyện dạng tương ứng",
     "in_class": [
      {
       "minutes": 5,
       "activity": "Warm-up",
       "category": "routine"
      },
      {
       "minutes": 30,
       "activity": "Email mời bạn 3 ý (SB p.124) – W Part 6",
       "category": "book"
      },
      {
       "minutes": 30,
       "activity": "Truyện 3 tranh: adj + noun, từ trái nghĩa – W Part 7",
       "category": "book"
      },
      {
       "minutes": 30,
       "activity": "Chấm chéo theo tiêu chí KET + viết lại",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Giao bài",
       "category": "routine"
      }
     ],
     "after": "1 part KET tương ứng (web)",
     "photocopiable": "—",
     "global_skills": "—",
     "assessment": "—",
     "week": 43,
     "ket_codes": []
    },
    {
     "session_id": "KO-FN-S1",
     "session_no": 87,
     "unit": "Final",
     "unit_title": "Units 1–10",
     "type": "Test",
     "sb_pages": "—",
     "focus": "KET mock test (R&W + L)",
     "task": "—",
     "ket_part": "KET full",
     "grammar": "—",
     "vocabulary": "—",
     "can_do": "—",
     "before": "—",
     "in_class": [
      {
       "minutes": 5,
       "activity": "Hướng dẫn",
       "category": "routine"
      },
      {
       "minutes": 60,
       "activity": "KET mock: Reading & Writing",
       "category": "test"
      },
      {
       "minutes": 35,
       "activity": "KET mock: Listening",
       "category": "test"
      },
      {
       "minutes": 5,
       "activity": "Thu bài",
       "category": "routine"
      }
     ],
     "after": "—",
     "photocopiable": "—",
     "global_skills": "—",
     "assessment": "KET mock",
     "week": 44,
     "ket_codes": []
    },
    {
     "session_id": "KO-FN-S2",
     "session_no": 88,
     "unit": "Final",
     "unit_title": "Units 1–10",
     "type": "Review",
     "sb_pages": "—",
     "focus": "Chữa mock + Speaking mock",
     "task": "—",
     "ket_part": "KET S",
     "grammar": "—",
     "vocabulary": "—",
     "can_do": "—",
     "before": "—",
     "in_class": [
      {
       "minutes": 30,
       "activity": "Trả mock, phân tích kết quả theo part",
       "category": "extension"
      },
      {
       "minutes": 60,
       "activity": "Speaking mock theo cặp",
       "category": "test"
      },
      {
       "minutes": 15,
       "activity": "Lập kế hoạch ôn cá nhân",
       "category": "routine"
      }
     ],
     "after": "—",
     "photocopiable": "—",
     "global_skills": "—",
     "assessment": "—",
     "week": 44,
     "ket_codes": []
    },
    {
     "session_id": "KO-FN-S3",
     "session_no": 89,
     "unit": "Final",
     "unit_title": "Units 1–10",
     "type": "Review",
     "sb_pages": "—",
     "focus": "Ôn cuối khoá 1: grammar foundation (toàn bộ A2)",
     "task": "—",
     "ket_part": "—",
     "grammar": "Toàn bộ grammar spine",
     "vocabulary": "—",
     "can_do": "—",
     "before": "—",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz",
       "category": "routine"
      },
      {
       "minutes": 45,
       "activity": "Ôn grammar spine theo trạm",
       "category": "extension"
      },
      {
       "minutes": 40,
       "activity": "Luyện R Part 4–5 + chữa",
       "category": "extension"
      },
      {
       "minutes": 10,
       "activity": "Giao bài",
       "category": "routine"
      }
     ],
     "after": "—",
     "photocopiable": "—",
     "global_skills": "—",
     "assessment": "—",
     "week": 45,
     "ket_codes": []
    },
    {
     "session_id": "KO-FN-S4",
     "session_no": 90,
     "unit": "Final",
     "unit_title": "Units 1–10",
     "type": "Review",
     "sb_pages": "—",
     "focus": "Ôn cuối khoá 2: từ vựng + writing Part 6–7",
     "task": "—",
     "ket_part": "—",
     "grammar": "—",
     "vocabulary": "U1–10",
     "can_do": "—",
     "before": "—",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz",
       "category": "routine"
      },
      {
       "minutes": 30,
       "activity": "Game từ vựng U1–10",
       "category": "extension"
      },
      {
       "minutes": 50,
       "activity": "Viết Part 6 + Part 7 tính giờ, chấm chéo",
       "category": "extension"
      },
      {
       "minutes": 15,
       "activity": "Chiến lược ngày thi",
       "category": "routine"
      }
     ],
     "after": "—",
     "photocopiable": "—",
     "global_skills": "—",
     "assessment": "—",
     "week": 45,
     "ket_codes": []
    },
    {
     "session_id": "KO-FN-S5",
     "session_no": 91,
     "unit": "Final",
     "unit_title": "Units 1–10",
     "type": "Test",
     "sb_pages": "—",
     "focus": "Kiểm tra cuối khoá (R+W+L)",
     "task": "—",
     "ket_part": "KET format",
     "grammar": "—",
     "vocabulary": "—",
     "can_do": "—",
     "before": "—",
     "in_class": [
      {
       "minutes": 5,
       "activity": "Hướng dẫn",
       "category": "routine"
      },
      {
       "minutes": 60,
       "activity": "Final test: Reading & Writing",
       "category": "test"
      },
      {
       "minutes": 35,
       "activity": "Final test: Listening",
       "category": "test"
      },
      {
       "minutes": 5,
       "activity": "Thu bài",
       "category": "routine"
      }
     ],
     "after": "—",
     "photocopiable": "—",
     "global_skills": "—",
     "assessment": "Gold_Exp_A2 End-of-Year test",
     "week": 46,
     "ket_codes": []
    },
    {
     "session_id": "KO-FN-S6",
     "session_no": 92,
     "unit": "Final",
     "unit_title": "Units 1–10",
     "type": "Test",
     "sb_pages": "—",
     "focus": "Speaking test cuối khoá",
     "task": "—",
     "ket_part": "KET S Part 1–2",
     "grammar": "—",
     "vocabulary": "—",
     "can_do": "—",
     "before": "—",
     "in_class": [
      {
       "minutes": 90,
       "activity": "Final speaking test theo cặp",
       "category": "test"
      },
      {
       "minutes": 15,
       "activity": "Tổng kết, khảo sát cuối khoá",
       "category": "routine"
      }
     ],
     "after": "—",
     "photocopiable": "—",
     "global_skills": "—",
     "assessment": "Final speaking",
     "week": 46,
     "ket_codes": []
    },
    {
     "session_id": "KO-FN-S7",
     "session_no": 93,
     "unit": "Final",
     "unit_title": "Units 1–10",
     "type": "Feedback",
     "sb_pages": "—",
     "focus": "Trả kết quả · lộ trình cá nhân lên Boost (B1)",
     "task": "—",
     "ket_part": "—",
     "grammar": "—",
     "vocabulary": "—",
     "can_do": "—",
     "before": "—",
     "in_class": [
      {
       "minutes": 10,
       "activity": "Warm-up",
       "category": "routine"
      },
      {
       "minutes": 40,
       "activity": "Trả bài, chữa lỗi chung",
       "category": "extension"
      },
      {
       "minutes": 40,
       "activity": "Xem hồ sơ tiến bộ trên web, đặt mục tiêu B1",
       "category": "extension"
      },
      {
       "minutes": 15,
       "activity": "Hướng dẫn chuẩn bị lên Boost",
       "category": "routine"
      }
     ],
     "after": "—",
     "photocopiable": "—",
     "global_skills": "—",
     "assessment": "—",
     "week": 47,
     "ket_codes": []
    },
    {
     "session_id": "KO-FN-S8",
     "session_no": 94,
     "unit": "Final",
     "unit_title": "Units 1–10",
     "type": "Showcase",
     "sb_pages": "—",
     "focus": "Showcase: trưng bày project & portfolio, trao chứng nhận",
     "task": "—",
     "ket_part": "—",
     "grammar": "—",
     "vocabulary": "—",
     "can_do": "—",
     "before": "—",
     "in_class": [
      {
       "minutes": 15,
       "activity": "Chuẩn bị",
       "category": "routine"
      },
      {
       "minutes": 70,
       "activity": "Showcase: trình bày sản phẩm, portfolio",
       "category": "extension"
      },
      {
       "minutes": 20,
       "activity": "Trao chứng nhận",
       "category": "routine"
      }
     ],
     "after": "—",
     "photocopiable": "—",
     "global_skills": "—",
     "assessment": "—",
     "week": 47,
     "ket_codes": []
    }
   ],
   "homework_note": "Bài trước buổi và sau buổi nộp trên web; deep listening 10 phút/ngày."
  },
  {
   "id": "bo",
   "name": "Boost",
   "cefr": "B1",
   "book": "Gold Experience B1 (2nd ed.)",
   "exam": "b1",
   "status": "ready",
   "note": "94 buổi (82 buổi học + 12 sự kiện kỹ năng), định hướng B1 Preliminary for Schools (PET)",
   "session_minutes": 105,
   "sessions_per_week": 2,
   "total_sessions": 94,
   "cat": {
    "lang": "Học ngôn ngữ",
    "input": "Đầu vào",
    "output": "Đầu ra",
    "fluency": "Trôi chảy",
    "test": "Kiểm tra",
    "routine": "Khác"
   },
   "rhythm": "Mỗi unit 5 buổi: Reading + Grammar 1 → Vocabulary + Listening + Grammar 2 → Speaking → Writing → Ôn tập & Dự án, sau đó 1 sự kiện kỹ năng. Hết mỗi học phần có 4 buổi: củng cố Nghe–Đọc, củng cố Nói–Viết + kiểm tra Nói, kiểm tra học phần, linh hoạt. HP5 luyện thi PET và 2 lần thi thử.",
   "units": [
    {
     "unit": "Starter",
     "title": "Happy days",
     "theme": "Làm quen, kỳ nghỉ, sở thích",
     "sessions": "1–2",
     "grammar": "Ôn thì cơ bản, mạo từ",
     "hp": "1"
    },
    {
     "unit": "U1",
     "title": "Identity",
     "theme": "Bản sắc cá nhân, bình đẳng giới và định kiến (SDG 5)",
     "sessions": "5–9",
     "grammar": "Hiện tại đơn và hiện tại tiếp diễn; động từ trạng thái (think, feel, see, have); Trạng từ tần suất và vị trí, cụm thời gian",
     "cando_speaking": "Giới thiệu bản thân, cho thông tin cá nhân; đưa lý do và ví dụ",
     "cando_writing": "Email giới thiệu bản thân cho chương trình truyền hình Channel 1: mở thư, phản hồi, kết thư; quite/very + tính từ; and, but, so, because, or",
     "project": "Thuyết trình ý tưởng giúp trường học bình đẳng giới hơn, đánh giá chéo",
     "hp": "1"
    },
    {
     "unit": "U2",
     "title": "Get the message",
     "theme": "Ngôn ngữ và bản sắc văn hóa, hòa nhập và hỗ trợ bạn mới (SDG 10)",
     "sessions": "11–15",
     "grammar": "Quá khứ đơn và quá khứ tiếp diễn với when/while; động từ trạng thái không dùng tiếp diễn; Danh động từ (-ing) làm chủ ngữ và sau giới từ",
     "cando_speaking": "Tả ảnh về giao tiếp, sắp xếp ý khi tả (tổng quan → chi tiết → suy đoán)",
     "cando_writing": "Truyện về một lần mắc lỗi đáng nhớ: tạo không khí bằng tính từ mạnh (wonderful, brilliant) và trạng từ (really, finally)",
     "project": "Poster thông tin cho học sinh mới đến trường",
     "hp": "1"
    },
    {
     "unit": "U3",
     "title": "The future is now",
     "theme": "Sức khỏe số, cân bằng thời gian màn hình, tinh thần khởi nghiệp (SDG 9)",
     "sessions": "21–25",
     "grammar": "Các cách diễn đạt tương lai: will, going to, hiện tại tiếp diễn (lịch hẹn), hiện tại đơn (thời gian biểu); Động từ khuyết thiếu cho lời khuyên và gợi ý: should, could, ought to, Why don't you…?, How about…?, Shall…?",
     "cando_speaking": "Thảo luận tương lai của công nghệ (robot): hỏi và đưa ý kiến, đồng ý, không đồng ý",
     "cando_writing": "Email trả lời bạn về 'National Unplugged Day': đưa lời khuyên và gợi ý",
     "project": "Thiết kế một ứng dụng (tên, chức năng, người dùng), trình bày nhóm",
     "hp": "2"
    },
    {
     "unit": "U4",
     "title": "Taking part",
     "theme": "Lối sống năng động, sức khỏe thể chất, sự kiên trì (SDG 3)",
     "sessions": "27–31",
     "grammar": "Hiện tại hoàn thành với ever, never, already, yet, just, for, since; quá khứ phân từ; Quá khứ đơn và hiện tại hoàn thành",
     "cando_speaking": "Tả ảnh xem và chơi thể thao; nói khi không chắc (I can't remember what this is…)",
     "cando_writing": "Bài báo về một môn thể thao mới đã thử: nối ý với either…or, as soon as, except, so that, although",
     "project": "Lên kế hoạch chiến dịch vận động thanh thiếu niên năng động, chia vai nhóm, bình chọn",
     "hp": "2"
    },
    {
     "unit": "U5",
     "title": "In the spotlight",
     "theme": "Quyền riêng tư, hiểu biết về truyền thông, áp lực của sự nổi tiếng",
     "sessions": "33–37",
     "grammar": "Câu điều kiện loại 0, 1, 2; unless, in case, if I were you",
     "cando_speaking": "Tả ảnh nhạc sống (lễ hội, nhảy đường phố); xử lý từ không biết (It looks like…, a thing that…)",
     "cando_writing": "Bài báo về một buổi tối giải trí: khen điểm tốt, nêu vấn đề nhẹ nhàng (a bit, at times); venue, atmosphere, crowded, unforgettable",
     "project": "Viết hồ sơ (fact file) về một ngôi sao nhí, làm theo cặp",
     "hp": "2"
    },
    {
     "unit": "U6",
     "title": "Down to Earth",
     "theme": "Bảo vệ môi trường và đại dương, người trẻ tạo thay đổi (SDG 13, 14)",
     "sessions": "43–47",
     "grammar": "Câu bị động hiện tại đơn và quá khứ đơn (+ by); have/get something done",
     "cando_speaking": "Thảo luận cách sống thân thiện với môi trường; luân phiên lượt nói (What do you think? Go on…)",
     "cando_writing": "Email trao đổi học sinh về một nơi nên đến: cảm ơn, mời, nhận lời, từ chối",
     "project": "Thiết kế cộng đồng: kế hoạch hành động kết nối con người với thiên nhiên",
     "hp": "3"
    },
    {
     "unit": "U7",
     "title": "Travellers' tales",
     "theme": "Hiểu biết liên văn hóa, học qua trải nghiệm (SDG 4)",
     "sessions": "49–53",
     "grammar": "Mệnh đề quan hệ xác định: who, which, that, where, whose; khi nào được lược đại từ quan hệ; Động từ khuyết thiếu chỉ bắt buộc, cấm, cần thiết: must, mustn't, have to, don't have to, had to, need to",
     "cando_speaking": "Thảo luận sự cố khi đi du lịch; nhắc lại ý người khác (As X said…, Unlike X, I…)",
     "cando_writing": "Bài báo mẹo du lịch ~100 từ: tạo hứng thú bằng câu hỏi cho người đọc",
     "project": "Tìm hiểu và trình bày một nền văn hóa khác (đồ ăn, trang phục, nghề, giải trí) hoặc blog du lịch",
     "hp": "3"
    },
    {
     "unit": "U8",
     "title": "Time out",
     "theme": "Kiên nhẫn, tự chủ; làm nội dung số có trách nhiệm",
     "sessions": "59–63",
     "grammar": "Câu tường thuật: lùi thì, đổi đại từ, say/tell; câu hỏi tường thuật với if/whether và từ để hỏi; Câu hỏi gián tiếp: Can you tell me…? Do you know…? + if/từ để hỏi + trật tự câu khẳng định",
     "cando_speaking": "Lên kế hoạch cho cuộc thi tài năng: đưa và đáp lại gợi ý (How about…? Why don't we…? I like the idea, but…)",
     "cando_writing": "Bài báo về sở thích của người nổi tiếng: câu mở đoạn, tính từ và trạng từ",
     "project": "Viết kịch bản video giới thiệu kênh YouTube về một sở thích hoặc kỹ năng",
     "hp": "4"
    },
    {
     "unit": "U9",
     "title": "Life experiences",
     "theme": "Tự tin, nói trước công chúng, tôn trọng quan điểm khác (SDG 16)",
     "sessions": "65–69",
     "grammar": "Quá khứ hoàn thành và quá khứ đơn; before, once, when, just, never; used to / didn't use to / Did you use to…?",
     "cando_speaking": "Sống trên hoang đảo: nói điều thích và không thích (I absolutely love, I can't stand, I'm keen on, I don't mind)",
     "cando_writing": "Truyện về một ngày đi chơi (kẹt trên cáp treo) ~100 từ: sắp xếp sự việc (First, After that, Suddenly, Eventually)",
     "project": "Tranh biện một chủ đề: đưa ý kiến, đồng ý, phản bác",
     "hp": "4"
    },
    {
     "unit": "U10",
     "title": "Summertime!",
     "theme": "Kỹ năng sống, việc làm hè – ôn theo đề PET",
     "sessions": "71–72",
     "grammar": "Ôn tổng hợp",
     "hp": "4"
    }
   ],
   "modules": [
    {
     "name": "HP1 · Bản thân, giao tiếp và công nghệ",
     "sessions": "1–20 (T1–10)",
     "units": "Starter, U1, U2",
     "grammar": "B01, B02, B03, B04, B05, B08, B20, B22, B29, B31",
     "ket": "L2 L3 R1 R2 R3 R5 R6 S1 S2 S3 S4 W1 W2",
     "events": "E1 · My Best Moment Gallery; E2 · Beyond Stereotypes Talk Show; E3 · Welcome Buddy Day"
    },
    {
     "name": "HP2 · Tương lai, thể thao và giải trí",
     "sessions": "21–42 (T11–21)",
     "units": "U3, U4, U5",
     "grammar": "B06, B07, B08, B09, B10, B11, B22, B26, B27, B28",
     "ket": "L1 L2 L4 R1 R2 R3 R4 R5 R6 S1 S2 S3 S4 W1 W2",
     "events": "E4 · IVY App Pitch; E5 · Active Teens Campaign; E6 · IVY Talent & Media Night"
    },
    {
     "name": "HP3 · Trái Đất và những chuyến đi",
     "sessions": "43–58 (T22–29)",
     "units": "U6, U7",
     "grammar": "B12, B13, B14, B15, B21, B30",
     "ket": "L3 L4 R2 R4 R5 R6 S1 S2 S3 S4 W1 W2",
     "events": "E7 · Blue Planet Action Day; E8 · Around the World Culture Fair"
    },
    {
     "name": "HP4 · Sở thích, trải nghiệm và kỹ năng sống",
     "sessions": "59–76 (T30–38)",
     "units": "U8, U9, U10",
     "grammar": "B10, B12, B14, B16, B17, B18, B19, B20, B21, B22",
     "ket": "L1 L2 L3 L4 R1 R2 R3 R4 R5 R6 S1 S2 S3 S4 W1 W2",
     "events": "E9 · Hobby Expo & Creator Lab; E10 · IVY Debate Cup"
    },
    {
     "name": "HP5 · Luyện thi B1 Preliminary for Schools",
     "sessions": "77–94 (T39–47)",
     "units": "—",
     "grammar": "B01, B02, B03, B04, B05, B06, B07, B08, B09, B10, B11, B12, B13, B14, B15, B16, B17, B18, B19, B20, B21, B22, B23, B24, B25, B26, B27, B28, B29, B30, B31",
     "ket": "L1 L2 L3 L4 R1 R2 R3 R4 R5 R6 S1 S2 S3 S4 W1 W2",
     "events": "E11 · Life Skills & Summer Jobs Fair; E12 · Global Citizen Showcase và lễ tổng kết"
    }
   ],
   "grammar": {
    "cols": [
     "Mã",
     "Điểm ngữ pháp",
     "Dạy lần đầu",
     "Dùng lại ở buổi",
     "Kiểm tra ở buổi"
    ],
    "rows": [
     [
      "B01",
      "Hiện tại đơn và hiện tại tiếp diễn; động từ trạng thái",
      "Buổi 3",
      "5, 7, 9, 10, 17, 18, 19…",
      "19, 84"
     ],
     [
      "B02",
      "Trạng từ tần suất, vị trí; cụm thời gian",
      "Buổi 6",
      "7, 9, 17, 18, 19, 20, 84",
      "19, 84"
     ],
     [
      "B03",
      "Mạo từ a/an/the/không mạo từ",
      "Buổi 1",
      "2, 3, 4, 17, 18, 19, 20…",
      "19, 84"
     ],
     [
      "B04",
      "Quá khứ đơn và quá khứ tiếp diễn (when/while)",
      "Buổi 2",
      "3, 4, 11, 13, 15, 16, 17…",
      "19, 84"
     ],
     [
      "B05",
      "Danh động từ (-ing) làm chủ ngữ, sau giới từ",
      "Buổi 12",
      "13, 15, 16, 17, 18, 19, 20…",
      "19, 84"
     ],
     [
      "B06",
      "Các cách diễn đạt tương lai: will, going to, hiện tại tiếp diễn, hiện tại đơn",
      "Buổi 21",
      "23, 25, 26, 39, 40, 41, 42…",
      "41, 84"
     ],
     [
      "B07",
      "Khuyết thiếu cho lời khuyên, gợi ý: should, could, ought to, Why don't you…?",
      "Buổi 22",
      "23, 25, 26, 39, 40, 41, 42…",
      "41, 84"
     ],
     [
      "B08",
      "Hiện tại hoàn thành với ever/never/already/yet/just/for/since",
      "Buổi 3",
      "27, 29, 31, 32, 39, 40, 41…",
      "41, 84"
     ],
     [
      "B09",
      "Quá khứ đơn và hiện tại hoàn thành",
      "Buổi 28",
      "29, 31, 32, 39, 40, 41, 42…",
      "41, 84"
     ],
     [
      "B10",
      "Câu điều kiện loại 0, 1, 2",
      "Buổi 33",
      "35, 37, 38, 39, 40, 41, 42…",
      "41, 84"
     ],
     [
      "B11",
      "unless, in case, if I were you",
      "Buổi 34",
      "35, 37, 38, 39, 40, 41, 42…",
      "41, 84"
     ],
     [
      "B12",
      "Bị động hiện tại đơn và quá khứ đơn",
      "Buổi 43",
      "45, 47, 48, 55, 56, 57, 58…",
      "57, 84"
     ],
     [
      "B13",
      "have/get something done",
      "Buổi 44",
      "45, 47, 48, 55, 56, 57, 58…",
      "57, 84"
     ],
     [
      "B14",
      "Mệnh đề quan hệ xác định (who, which, that, where, whose)",
      "Buổi 49",
      "51, 53, 54, 55, 56, 57, 58…",
      "57, 84"
     ],
     [
      "B15",
      "Khuyết thiếu chỉ bắt buộc, cấm, cần thiết: must, have to, don't have to, need to",
      "Buổi 50",
      "51, 53, 54, 55, 56, 57, 58…",
      "57, 84"
     ],
     [
      "B16",
      "Câu tường thuật: câu kể và câu hỏi",
      "Buổi 59",
      "61, 63, 64, 71, 73, 74, 75…",
      "75, 84"
     ],
     [
      "B17",
      "Câu hỏi gián tiếp",
      "Buổi 60",
      "61, 63, 64, 73, 74, 75, 83…",
      "75, 84"
     ],
     [
      "B18",
      "Quá khứ hoàn thành",
      "Buổi 65",
      "67, 69, 70, 71, 73, 74, 75…",
      "75, 84"
     ],
     [
      "B19",
      "used to / didn't use to",
      "Buổi 66",
      "67, 69, 70, 73, 74, 75, 76…",
      "75, 84"
     ],
     [
      "B20",
      "Giới từ đi kèm tính từ và động từ (interested in, listen to, proud of…)",
      "Buổi 6",
      "10, 12, 17, 18, 19, 20, 66…",
      "19, 84"
     ],
     [
      "B21",
      "Trật tự tính từ; tính từ -ed/-ing",
      "Buổi 44",
      "55, 56, 57, 58, 66, 84",
      "57, 84"
     ],
     [
      "B22",
      "Từ nối: although, so that, either…or, as soon as, because, so",
      "Buổi 8",
      "30, 39, 40, 41, 42, 72, 74…",
      "41, 84"
     ],
     [
      "B23",
      "Hiện tại hoàn thành tiếp diễn (cầu nối B1+)",
      "Buổi 91",
      "—",
      "91"
     ],
     [
      "B24",
      "Bị động các thì khác và bị động với động từ khuyết thiếu (cầu nối B1+)",
      "Buổi 91",
      "—",
      "91"
     ],
     [
      "B25",
      "Mệnh đề quan hệ không xác định (cầu nối B1+)",
      "Buổi 91",
      "—",
      "91"
     ],
     [
      "B26",
      "may / might / could chỉ khả năng xảy ra",
      "Buổi 21",
      "39, 40, 41, 42, 84",
      "41, 84"
     ],
     [
      "B27",
      "So sánh hơn, so sánh nhất, (not) as…as; too/enough (to); so/such",
      "Buổi 30",
      "39, 40, 41, 42, 84",
      "41, 84"
     ],
     [
      "B28",
      "can / could / be able to chỉ khả năng làm được",
      "Buổi 27",
      "39, 40, 41, 42, 84",
      "41, 84"
     ],
     [
      "B29",
      "Động từ + V-ing / to V (enjoy, decide, want, stop, try…)",
      "Buổi 12",
      "17, 18, 19, 20, 84",
      "19, 84"
     ],
     [
      "B30",
      "Lượng từ: a few / a little, few / little, too much / too many, plenty of",
      "Buổi 44",
      "55, 56, 57, 58, 84",
      "57, 84"
     ],
     [
      "B31",
      "Câu hỏi đuôi (question tags)",
      "Buổi 7",
      "17, 18, 19, 20, 84",
      "19, 84"
     ]
    ],
    "first_col": 2,
    "note": "Ngữ pháp nền B1: B01–B22 và B26–B31 dạy và kiểm tra trong khoá; B23–B25 là cầu nối B1+ (chỉ nhận biết)."
   },
   "subskills": [
    {
     "code": "RS1",
     "what": "Đọc: hiểu mục đích, thông điệp văn bản ngắn (biển báo, tin nhắn)",
     "part": "R1 R2 R3 R4 R5 R6",
     "hp": "HP1",
     "target": "13 buổi: 11, 16, 17, 19, 33, 39, 41, 73, 75, 77, 85, 88…"
    },
    {
     "code": "RS2",
     "what": "Đọc: đọc lướt lấy ý chính",
     "part": "R1 R2 R3 R4 R5 R6",
     "hp": "HP1",
     "target": "15 buổi: 11, 17, 21, 33, 39, 59, 71, 73, 75, 78, 83, 85…"
    },
    {
     "code": "RS3",
     "what": "Đọc: đọc quét tìm chi tiết, nhận ra cách diễn đạt khác (paraphrase)",
     "part": "R1 R2 R3 R4 R5 R6",
     "hp": "HP1",
     "target": "16 buổi: 5, 17, 19, 27, 32, 39, 41, 49, 55, 57, 73, 75…"
    },
    {
     "code": "RS4",
     "what": "Đọc: nhận ra thái độ, ý kiến của người viết",
     "part": "R1 R2 R3 R4 R5 R6",
     "hp": "HP1",
     "target": "5 buổi: 11, 33, 59, 78, 88"
    },
    {
     "code": "RS5",
     "what": "Đọc: liên kết văn bản (từ quy chiếu, từ nối)",
     "part": "R1 R2 R3 R4 R5 R6",
     "hp": "HP2",
     "target": "13 buổi: 21, 39, 43, 48, 55, 57, 65, 73, 75, 78, 85, 88…"
    },
    {
     "code": "RS6",
     "what": "Đọc: đoán nghĩa từ mới qua ngữ cảnh",
     "part": "R2 R4",
     "hp": "HP1",
     "target": "4 buổi: 5, 27, 43, 65"
    },
    {
     "code": "RS7",
     "what": "Đọc: từ vựng và collocation trong ngữ cảnh",
     "part": "R1 R2 R3 R4 R5 R6",
     "hp": "HP1",
     "target": "17 buổi: 6, 12, 17, 22, 28, 34, 39, 50, 55, 60, 66, 71…"
    },
    {
     "code": "RS8",
     "what": "Đọc: ngữ pháp trong văn bản (từ chức năng)",
     "part": "R1 R2 R3 R4 R5 R6",
     "hp": "HP1",
     "target": "20 buổi: 1, 9, 15, 25, 28, 31, 37, 39, 47, 53, 63, 69…"
    },
    {
     "code": "RS9",
     "what": "Đọc mở rộng: sách đọc phân cấp (graded reader)",
     "part": "R1 R2 R3 R4 R5 R6",
     "hp": "HP1",
     "target": "8 buổi: 5, 17, 21, 39, 43, 55, 59, 73"
    },
    {
     "code": "LS1",
     "what": "Nghe: thông tin cụ thể để chọn tranh",
     "part": "L1 L2 L3 L4",
     "hp": "HP2",
     "target": "10 buổi: 22, 39, 41, 60, 73, 75, 80, 85, 87, 92"
    },
    {
     "code": "LS2",
     "what": "Nghe: ý chính (gist), ý kiến trong hội thoại ngắn",
     "part": "L1 L2 L3 L4",
     "hp": "HP1",
     "target": "14 buổi: 6, 17, 19, 34, 38, 39, 41, 66, 73, 75, 80, 85…"
    },
    {
     "code": "LS3",
     "what": "Nghe: ghi lại thông tin cụ thể, chính tả số, tên",
     "part": "L1 L2 L3 L4",
     "hp": "HP1",
     "target": "13 buổi: 12, 17, 19, 50, 54, 55, 57, 71, 75, 81, 85, 87…"
    },
    {
     "code": "LS4",
     "what": "Nghe: thái độ, ý kiến; tránh đáp án gây nhiễu",
     "part": "L1 L2 L3 L4",
     "hp": "HP2",
     "target": "13 buổi: 28, 39, 44, 55, 57, 70, 71, 75, 81, 85, 87, 91…"
    },
    {
     "code": "LS5",
     "what": "Nghe: dự đoán nội dung trước khi nghe",
     "part": "L1 L2 L3 L4",
     "hp": "HP1",
     "target": "17 buổi: 6, 12, 17, 22, 28, 34, 39, 44, 50, 55, 60, 66…"
    },
    {
     "code": "LS6",
     "what": "Nghe: thông báo, hướng dẫn",
     "part": "L1 L2",
     "hp": "HP2",
     "target": "3 buổi: 22, 60, 80"
    },
    {
     "code": "LS7",
     "what": "Nghe: âm nối, âm yếu, dạng rút gọn",
     "part": "L1 L2 L3 L4",
     "hp": "HP1",
     "target": "5 buổi: 6, 28, 50, 66, 87"
    },
    {
     "code": "SS1",
     "what": "Nói: trả lời câu hỏi cá nhân, mở rộng bằng lý do, ví dụ",
     "part": "S1 S2 S3 S4",
     "hp": "HP1",
     "target": "15 buổi: 1, 7, 10, 18, 40, 56, 64, 72, 74, 82, 83, 86…"
    },
    {
     "code": "SS2",
     "what": "Nói: tả ảnh (sắp xếp ý, vị trí, suy đoán, khi thiếu từ)",
     "part": "S1 S2 S3 S4",
     "hp": "HP1",
     "target": "20 buổi: 4, 13, 16, 18, 26, 29, 35, 38, 40, 53, 54, 64…"
    },
    {
     "code": "SS3",
     "what": "Nói: gợi ý, đáp lại gợi ý, thương lượng, đi đến quyết định",
     "part": "S1 S2 S3 S4",
     "hp": "HP1",
     "target": "17 buổi: 2, 23, 26, 32, 40, 45, 48, 56, 61, 67, 72, 74…"
    },
    {
     "code": "SS4",
     "what": "Nói: nêu ý kiến, lý do, đồng ý, không đồng ý",
     "part": "S1 S2 S3 S4",
     "hp": "HP1",
     "target": "27 buổi: 4, 9, 10, 15, 23, 25, 26, 31, 37, 40, 45, 47…"
    },
    {
     "code": "SS5",
     "what": "Nói: kể lại trải nghiệm, câu chuyện 1–2 phút",
     "part": "S1 S2 S3 S4",
     "hp": "HP1",
     "target": "9 buổi: 4, 17, 39, 51, 55, 64, 67, 73, 93"
    },
    {
     "code": "SS6",
     "what": "Nói: hỏi lại, làm rõ khi chưa hiểu",
     "part": "S1 S2 S3 S4",
     "hp": "HP1",
     "target": "8 buổi: 7, 13, 23, 45, 61, 67, 82, 90"
    },
    {
     "code": "SS7",
     "what": "Nói: phát âm (trọng âm, ngữ điệu, âm cuối, âm yếu)",
     "part": "S1 S2 S3 S4",
     "hp": "HP1",
     "target": "9 buổi: 7, 13, 23, 29, 35, 45, 51, 61, 67"
    },
    {
     "code": "WS1",
     "what": "Viết: email theo chức năng (cảm ơn, mời, khuyên, giải thích, từ chối)",
     "part": "W1 W2",
     "hp": "HP1",
     "target": "15 buổi: 8, 10, 18, 24, 40, 46, 48, 56, 72, 74, 79, 83…"
    },
    {
     "code": "WS2",
     "what": "Viết: bài báo (thu hút người đọc, nêu quan điểm)",
     "part": "W1 W2",
     "hp": "HP1",
     "target": "21 buổi: 4, 16, 18, 30, 32, 36, 38, 40, 52, 54, 56, 62…"
    },
    {
     "code": "WS3",
     "what": "Viết: truyện (mở đầu, trình tự, không khí, kết)",
     "part": "W1 W2",
     "hp": "HP1",
     "target": "12 buổi: 2, 14, 18, 40, 56, 68, 72, 74, 79, 84, 89, 92"
    },
    {
     "code": "WS4",
     "what": "Viết: lập dàn ý, chia đoạn, từ nối",
     "part": "W1 W2",
     "hp": "HP1",
     "target": "30 buổi: 2, 4, 8, 10, 14, 16, 18, 24, 30, 32, 36, 38…"
    },
    {
     "code": "WS5",
     "what": "Viết: đa dạng ngữ pháp, câu phức",
     "part": "W1 W2",
     "hp": "HP2",
     "target": "5 buổi: 36, 52, 62, 68, 89"
    },
    {
     "code": "WS6",
     "what": "Viết: tự soát lỗi, chính tả, dấu câu",
     "part": "W1 W2",
     "hp": "HP1",
     "target": "12 buổi: 8, 14, 24, 30, 36, 46, 52, 62, 68, 72, 79, 89"
    },
    {
     "code": "VS1",
     "what": "Từ vựng: chủ đề theo danh sách từ vựng PET",
     "part": "R5 R6",
     "hp": "HP1",
     "target": "18 buổi: 6, 9, 12, 15, 22, 25, 28, 31, 34, 37, 44, 47…"
    },
    {
     "code": "VS2",
     "what": "Từ vựng: cấu tạo từ (tiền tố, hậu tố)",
     "part": "R5 R6",
     "hp": "HP2",
     "target": "3 buổi: 28, 50, 66"
    },
    {
     "code": "VS3",
     "what": "Từ vựng: cụm động từ, collocation, giới từ đi kèm",
     "part": "R5 R6",
     "hp": "HP1",
     "target": "9 buổi: 6, 12, 22, 28, 34, 44, 50, 60, 66"
    }
   ],
   "sessions": [
    {
     "session_id": "BO-01",
     "session_no": 1,
     "week": 1,
     "hp": "HP1",
     "unit": "Starter",
     "unit_title": "Happy days",
     "type": "Starter",
     "kind": "Starter",
     "sb_pages": "6–7, 124, 167",
     "wb_pages": "4",
     "focus": "Starter Happy days · Power up + Read on",
     "task": "bài đăng mạng xã hội 5 ảnh; blog sưu tầm thẻ bóng đá",
     "content": "Từ vựng theo nhóm chủ đề: science, entertainment, home life, travel, free time · Mạo từ a/an/the/không mạo từ",
     "ket_part": "[R6] điền mạo từ vào blog (open cloze) · [S1] giới thiệu bản thân, kỳ nghỉ hè vừa qua",
     "ket_codes": [
      "R6",
      "S1"
     ],
     "subskills": [
      "RS8",
      "SS1"
     ],
     "grammar": "B03 Mạo từ a/an/the/không mạo từ",
     "vocabulary": "performance, science project, kitten, stage, hang out, hot chocolate, gorgeous, attractive, nervous, prize, hero, trip, birthday money, social media posts, science, entertainment, home life, travel, free time, blog, blogger, visitor, a lot of, good communication, being organised, collecting football stickers",
     "can_do": "Điền đúng mạo từ ≥ 7/10 chỗ; mỗi học sinh nói ≥ 5 câu về bản thân",
     "before": "1. [Từ vựng] Chuỗi 5 bước nhớ từ Starter: performance, science project, kitten, stage, hang out, hot chocolate, gorgeous, attractive, nervous, prize, hero, trip (10')\n2. [Nghe] Nghe – đọc bài đăng mạng xã hội SB tr. 7, đoán 5 ảnh thuộc chủ đề nào (5')\n3. [Ngữ pháp] Video mạo từ a/an/the/không mạo từ (Grammar file SB tr. 124) + 5 câu (7')\n4. [Nói] Ghi âm 1 phút giới thiệu bản thân và kỳ nghỉ hè (4')\n5. [Lồng tiếng] Làm quen trình lồng tiếng: clip mẫu 2 câu 'Happy days' (6')",
     "after": "1. [Ôn] Quiz nhớ lại 10 câu: từ Starter + mạo từ (5')\n2. [Ngữ pháp] Workbook tr. 4 (số hóa) (10')\n3. [Ngữ pháp] Grammar file SB tr. 125: bài luyện mạo từ (6')\n4. [Nghe] Chép chính tả 4 câu blog sưu tầm thẻ bóng đá (5')\n5. [Nói] Shadowing 5 câu của blog (5')\n6. [Nói] Ghi âm 1 phút 'My summer' dùng 3 từ mới (3')\n7. [Lồng tiếng] 2 clip chủ đề kỳ nghỉ (12')\n8. [Từ vựng] Ôn thẻ Starter (3')\n9. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 32,
     "after_min": 55,
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Grammar file SB tr. 124 (Starter); audioscript SB tr. 167",
     "assessment": "—"
    },
    {
     "session_id": "BO-02",
     "session_no": 2,
     "week": 1,
     "hp": "HP1",
     "unit": "Starter",
     "unit_title": "Happy days",
     "type": "Starter",
     "kind": "Starter",
     "sb_pages": "7–8, 125",
     "wb_pages": "5",
     "focus": "Starter · Speak up + Listen up + Write on",
     "task": "tìm người đã từng…; nghe về ảnh kỳ nghỉ; viết 'My best moment'",
     "content": "Câu hỏi quá khứ đơn (Did you…?) · Hoạt động hè: barbecue, new skill, swimming outdoors",
     "ket_part": "[S3] chọn hoạt động cho ngày đi chơi của gia đình (giống Speaking Part 3) · nghe S.1 nối ảnh A–H · [W2] bài 'My best moment' (giống Writing Part 2)",
     "ket_codes": [
      "S3",
      "W2"
     ],
     "subskills": [
      "SS3",
      "WS3",
      "WS4"
     ],
     "grammar": "B03 Mạo từ a/an/the/không mạo từ; B04 Quá khứ đơn và quá khứ tiếp diễn (when/while)",
     "vocabulary": "barbecue, go walking in the countryside, learn a new skill, travel to a new place, play a new game, have a barbecue with friends, try a new food or drink, take lots of photos, swim outdoors, perfect weekend, active, the city, the countryside, that's a good point, how about …?, I agree, holiday photos, lake, get to the other side, too sweet, buildings, views over the river, uncles, aunts, cousins, burgers, updates, skiing lessons, fall down, selfies, birds, farm animals, hike, best moment, achieve, win a prize, dress up, favourite book character, do research",
     "can_do": "Hỏi – đáp ≥ 6 câu quá khứ đơn; bài viết ~80–100 từ, ≤ 4 lỗi",
     "before": "1. [Từ vựng] Chuỗi 5 bước: barbecue, learn a new skill, play a new game, take lots of photos, swim outdoors, perfect weekend, active, the city, holiday photos, lake, too sweet, buildings, views over the river, uncles (10')\n2. [Nói] Ghi âm trả lời 3 câu 'Did you … last summer?' (5')\n3. [Nghe] Nghe mồi S.1 (ảnh kỳ nghỉ) SB tr. 8, đoán ảnh (4')\n4. [Viết] Đọc đề 'My best moment' và lập dàn ý (6')\n5. [Lồng tiếng] clip 2 câu chủ đề hoạt động hè (6')\n6. [Từ vựng] Ôn thẻ Starter (3')",
     "after": "1. [Viết] Hoàn thiện bài 'My best moment' ~100 từ để trưng bày ở E1 (15')\n2. [Từ vựng] Workbook tr. 5 (số hóa) (8')\n3. [Nghe] Nghe lại S.1 có lời thoại + chép chính tả 3 câu (7')\n4. [Nói] Ghi âm kể 'My best moment' 1 phút (chuẩn bị cho E1) (4')\n5. [Lồng tiếng] 2 clip (12')\n6. [Ôn] Quiz 8 câu quá khứ đơn (4')\n7. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 34,
     "after_min": 56,
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Grammar file SB tr. 125 (bài luyện Starter); audioscript SB tr. 167",
     "assessment": "—"
    },
    {
     "session_id": "BO-03",
     "session_no": 3,
     "week": 2,
     "hp": "HP1",
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Test",
     "kind": "Chẩn đoán",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Bài chẩn đoán đầu khóa + làm quen đề B1 Preliminary for Schools",
     "task": "—",
     "content": "Cấu trúc đề PET: Reading 45' (6 part), Writing 45' (2 part), Listening ~30' (4 part), Speaking 12–14' (4 part); thang Cambridge 140–159 = B1",
     "ket_part": "[E] làm bài chẩn đoán đúng thời gian · xem 1 câu mẫu mỗi part của đề mẫu chính thức",
     "ket_codes": [],
     "subskills": [],
     "grammar": "B01 Hiện tại đơn và hiện tại tiếp diễn; động từ trạng thái; B03 Mạo từ a/an/the/không mạo từ; B04 Quá khứ đơn và quá khứ tiếp diễn (when/while); B08 Hiện tại hoàn thành với ever/never/already/yet/just/for/since",
     "vocabulary": "—",
     "can_do": "Ghi nhận điểm nền từng học sinh; học sinh < 60% vào nhóm hỗ trợ ngữ pháp",
     "before": "1. [Thi] Xem video giới thiệu 4 bài thi B1 Preliminary for Schools + làm thử 1 câu mỗi part (15')\n2. [Tự học] Phiếu tự đánh giá 4 kỹ năng (can-do B1) (5')\n3. [Từ vựng] Ôn thẻ Starter (5')\n4. [Lồng tiếng] clip 2 câu (6')",
     "after": "1. [Tự học] Xem kết quả chẩn đoán từng kỹ năng, đặt 1 mục tiêu cho HP1 (5')\n2. [Ngữ pháp] Bài bổ trợ theo điểm ngữ pháp yếu nhất trong bài chẩn đoán (15')\n3. [Nghe] Nghe 1 part PET mẫu (đề mẫu Cambridge) có lời thoại (8')\n4. [Nói] Ghi âm 1 phút 'Why I want to reach B1' (4')\n5. [Lồng tiếng] 2 clip (12')\n6. [Từ vựng] Ôn thẻ (5')\n7. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 31,
     "after_min": 55,
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Diagnostic Test A (Assessment package, TRB tr. 7); Cambridge B1 Preliminary for Schools sample test 2020 (Reading, Writing, Listening, Speaking)",
     "assessment": "—"
    },
    {
     "session_id": "BO-04",
     "session_no": 4,
     "week": 2,
     "hp": "HP1",
     "unit": "Sự kiện",
     "unit_title": "Công dân toàn cầu",
     "type": "Sự kiện",
     "kind": "Sự kiện kỹ năng",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Sự kiện E1 · My Best Moment Gallery",
     "task": "—",
     "content": "Quá khứ đơn, mạo từ; từ vựng Starter (science, entertainment, travel, free time)",
     "ket_part": "[S2] kể khoảnh khắc đáng nhớ 1 phút bên ảnh của mình · [S4] hỏi bạn 2 câu · [W2] bài viết 'My best moment' ~100 từ",
     "ket_codes": [
      "S2",
      "S4",
      "W2"
     ],
     "subskills": [
      "SS2",
      "SS4",
      "SS5",
      "WS2",
      "WS4"
     ],
     "grammar": "B03 Mạo từ a/an/the/không mạo từ; B04 Quá khứ đơn và quá khứ tiếp diễn (when/while)",
     "vocabulary": "Dùng lại từ vựng của unit vừa học (xem cột này ở các buổi trước)",
     "can_do": "Mỗi học sinh trưng bày ảnh + bài viết, nói 1 phút, đặt ≥ 2 câu hỏi cho bạn",
     "before": "1. [Dự án] Chuẩn bị phần việc của mình cho sự kiện 'My Best Moment Gallery' (nội dung, đồ dùng, vai) (15')\n2. [Nói] Viết và ghi âm phần nói của mình 1–2 phút, nghe lại và sửa (8')\n3. [Từ vựng] Ôn từ vựng và cấu trúc cần dùng: Quá khứ đơn, mạo từ; từ vựng Starter (science, entertainment, travel, free time) (6')\n4. [Lồng tiếng] clip chủ đề sự kiện (6')",
     "after": "1. [Tự học] Tự đánh giá theo rubric 4 tiêu chí (3')\n2. [Viết] Bài viết sau sự kiện (dạng W2) ~100 từ (15')\n3. [Nói] Xem video sự kiện của nhóm, ghi âm nhận xét 1 phút (1 điểm tốt, 1 điểm cần cải thiện) (5')\n4. [Nghe] Nghe phần trình bày của 1 nhóm khác, trả lời 3 câu hỏi (6')\n5. [Từ vựng] Ôn thẻ đến hạn (4')\n6. [Lồng tiếng] 2 clip (12')\n7. [Ôn] Quiz trộn 10 câu unit vừa học (5')\n8. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 35,
     "after_min": 56,
     "in_class": [
      {
       "minutes": 20,
       "activity": "Chuẩn bị ngôn ngữ cho sản phẩm",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Thực hiện sản phẩm trước khán giả",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Phản hồi theo rubric",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá năng lực",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Lắng nghe và tôn trọng trải nghiệm khác nhau",
     "materials": "Rubric 4 tiêu chí: ngôn ngữ, nội dung, hợp tác, trình bày",
     "assessment": "—"
    },
    {
     "session_id": "BO-05",
     "session_no": 5,
     "week": 3,
     "hp": "HP1",
     "unit": "U1",
     "unit_title": "Identity",
     "type": "Reading",
     "kind": "Unit – Reading + Grammar",
     "sb_pages": "9–12, 126",
     "wb_pages": "6–8",
     "focus": "U1 Identity · Lead-in + Reading + Grammar 1",
     "task": "Đọc identity boxes và hồ sơ của Marla, nối thông tin",
     "content": "Ngữ pháp: Hiện tại đơn và hiện tại tiếp diễn; động từ trạng thái (think, feel, see, have) · Kỹ năng đọc: matching information",
     "ket_part": "[R2] nối 5 người với 8 văn bản — kỹ năng matching information; gạch từ khóa, tìm cách diễn đạt khác trong bài · [RS6] đoán nghĩa từ mới qua ngữ cảnh (loại từ, từ xung quanh, ví dụ trong câu) trước khi tra từ",
     "ket_codes": [
      "R2"
     ],
     "subskills": [
      "RS3",
      "RS6",
      "RS9"
     ],
     "grammar": "B01 Hiện tại đơn và hiện tại tiếp diễn; động từ trạng thái",
     "vocabulary": "identity, identity box, profile, valley, hang out with, stickers, background, member, skyscrapers, huge buildings, music teacher, walking boots, author, village, mountains, outdoors, musical, shows, take part in, TV programme, theatre programme, entertainment guide, surfboard, square, saucepan, diary, timetables, clubs, jewellery, postcard",
     "can_do": "≥ 4/5 câu nối Part 2; viết 6 câu dùng điểm ngữ pháp B01, ≥ 5 câu đúng",
     "before": "1. [Từ vựng] Chuỗi 5 bước nhớ từ của bài đọc (nghe–nhắc lại → ghép hình → nghe chọn → nghe gõ → điền câu từ bài đọc): identity, identity box, profile, valley, hang out with, stickers, background, member, skyscrapers, huge buildings, music teacher, walking boots (10')\n2. [Nói] Lead-in SB tr. 9: xem ảnh mở bài, ghi âm 30–45 giây trả lời câu hỏi mở bài (4')\n3. [Nghe] Nghe – đọc đoạn đầu bài đọc SB tr. 10 (audio gốc), trả lời 2 câu dự đoán ý chính (5')\n4. [Ngữ pháp] Video ngắn: Hiện tại đơn và hiện tại tiếp diễn; động từ trạng thái (think, feel, see, have) (theo Grammar file SB tr. 126, Grammar ppt U1) + 5 câu kiểm tra hiểu (7')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Identity' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'No more boys and girls') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (unit trước) (3')",
     "after": "1. [Ôn] Quiz nhớ lại 10 câu: từ bài đọc + điểm ngữ pháp vừa học, không mở sách (5')\n2. [Đọc] Workbook tr. 6–7 Reading (số hóa, chấm tự động; dạng R2) (10')\n3. [Ngữ pháp] Workbook tr. 8 Grammar (6')\n4. [Ngữ pháp] Grammar file SB tr. 127: 1–2 bài luyện phần Hiện tại đơn và hiện tại tiếp diễn (5')\n5. [Nghe] Chép chính tả 4 câu từ audio bài đọc SB tr. 10–11 (5')\n6. [Nói] Shadowing 5 câu của bài đọc (audio gốc, ghi âm, nhận dạng giọng nói đánh dấu từ chưa rõ) (5')\n7. [Nói] Ghi âm 1 phút nói lại nội dung bài đọc, dùng ít nhất 3 từ mới và điểm ngữ pháp vừa học (3')\n8. [Lồng tiếng] clip 20–40 giây chủ đề 'Identity' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'No more boys and girls') (12')\n9. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U1 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 35,
     "after_min": 57,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Khởi động: kiểm tra nhanh từ vựng đã học trước ở nhà (gói PRE)",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Lead-in: thảo luận ảnh và câu hỏi mở bài",
       "category": "fluency"
      },
      {
       "minutes": 30,
       "activity": "Reading: đọc lướt lấy ý chính → làm dạng bài PET → chữa bằng câu chứa đáp án",
       "category": "input"
      },
      {
       "minutes": 25,
       "activity": "Grammar 1: tìm quy tắc trong bài đọc → luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Dùng ngữ pháp mới để nói và viết về bản thân",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Tổng kết, giới thiệu gói POST-LESSON",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Grammar file SB tr. 126 (lý thuyết); Grammar ppt B1 U1; Photocopiable 1A (ngữ pháp)",
     "assessment": "—"
    },
    {
     "session_id": "BO-06",
     "session_no": 6,
     "week": 3,
     "hp": "HP1",
     "unit": "U1",
     "unit_title": "Identity",
     "type": "Listening",
     "kind": "Unit – Vocabulary + Listening",
     "sb_pages": "13–14, 144, 167–168",
     "wb_pages": "9–10",
     "focus": "U1 Identity · Vocabulary + Listening + Grammar 2",
     "task": "Nghe về cuộc sống thành phố và nông thôn, nhận ra người nói đồng ý hay không đồng ý",
     "content": "Từ vựng: Tính từ tính cách: bossy, lazy, lively, noisy, rude, confident, shy, calm, ambitious, generous, easy-going · tính từ + giới từ: interested in, keen on, good at, fed up with, excited about, afraid of, similar to · Ngữ pháp 2: Trạng từ tần suất và vị trí, cụm thời gian",
     "ket_part": "[R5] điền từ trắc nghiệm (từ vựng, collocation) · [L2] 6 hội thoại ngắn, ý kiến/thái độ — đọc câu hỏi trước khi nghe, dự đoán đáp án, nghe lần 2 để kiểm tra · [LS7] chép chính tả 3–4 câu từ lời thoại, chú ý âm nối, âm yếu, dạng rút gọn",
     "ket_codes": [
      "R5",
      "L2"
     ],
     "subskills": [
      "LS2",
      "LS5",
      "LS7",
      "RS7",
      "VS1",
      "VS3"
     ],
     "grammar": "B02 Trạng từ tần suất, vị trí; cụm thời gian; B20 Giới từ đi kèm tính từ và động từ (interested in, listen to, proud of…)",
     "vocabulary": "bossy, lazy, lively, noisy, rude, funny, clever, confident, sporty, serious, shy, calm, ambitious, generous, easy-going, positive, negative, neutral, good at, brilliant at, bad at, terrible at, bored with, fed up with, excited about, interested in, afraid of, frightened of, keen on, similar to, behaviour towards, follow rules, excited, interested, pleased, relaxed, dirty, stressed, tired, cross, annoying, amazed, surprised, great history, romantic, variety (of things to do), new buildings, friendly, wonderful, always, usually, often, never, hardly ever, rarely, (every) now and then, once a week, once or twice a week, twice a year, every weekend, most days, on Mondays, at the moment, this week",
     "can_do": "≥ 4/6 câu Part 5; ≥ 4/6 câu Part 2; dùng đúng B02 trong ≥ 5/6 câu",
     "before": "1. [Từ vựng] Chuỗi 5 bước nhớ từ của bài Vocabulary SB tr. 13: bossy, lazy, lively, noisy, rude, funny, clever, confident, sporty, serious, shy, calm, ambitious, generous (10')\n2. [Nghe] Nghe mồi 30–60 giây đầu bài nghe SB tr. 14 (audio gốc), dự đoán 2 câu (4')\n3. [Ngữ pháp] Video ngắn: Trạng từ tần suất và vị trí, cụm thời gian + 5 câu kiểm tra hiểu (6')\n4. [Từ vựng] Extend vocabulary SB tr. 144 (phần U1): ghép 8 từ mở rộng với hình/nghĩa (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Identity' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'No more boys and girls') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Ôn] Quiz nhớ lại 10 câu: từ vựng + ngữ pháp 2, không mở sách (5')\n2. [Từ vựng] Workbook tr. 9 Vocabulary (6')\n3. [Nghe] Workbook tr. 10 Listening (audio Workbook) (8')\n4. [Nghe] Nghe lại bài nghe SB tr. 14 có lời thoại theo câu + 1 part nghe PET rút gọn dạng L2 (8')\n5. [Nghe] Chép chính tả 4 câu từ bài nghe SB tr. 14, ưu tiên âm yếu, âm nối (5')\n6. [Nói] Shadowing 5 câu của bài nghe (5')\n7. [Lồng tiếng] clip 20–40 giây chủ đề 'Identity' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'No more boys and girls') (12')\n8. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U1 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 33,
     "after_min": 55,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng nhanh",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Vocabulary SB + Extend vocabulary",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Listening PET: dự đoán → nghe lần 1 → nghe lần 2 kiểm tra → đọc audioscript",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Grammar 2: giới thiệu và luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Nói theo cặp dùng từ và ngữ pháp mới",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Chép chính tả 3 câu từ bài nghe, giao bài",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Extend vocabulary SB tr. 144; Photocopiable 1B (từ vựng); audioscript SB tr. 167–168 (chữa bài nghe); Dictation trong Skills Test của unit (Assessment package)",
     "assessment": "—"
    },
    {
     "session_id": "BO-07",
     "session_no": 7,
     "week": 4,
     "hp": "HP1",
     "unit": "U1",
     "unit_title": "Identity",
     "type": "Speaking",
     "kind": "Unit – Speaking",
     "sb_pages": "15, 146",
     "wb_pages": "11",
     "focus": "U1 Identity · Speaking",
     "task": "Giới thiệu bản thân, cho thông tin cá nhân; đưa lý do và ví dụ",
     "content": "Cụm câu chức năng của bài nói; dùng lại ngữ pháp B01, B02 và từ vựng U1 khi nói · Bổ sung B31: câu hỏi đuôi để xác nhận thông tin (You're from Thái Bình, aren't you?)",
     "ket_part": "[S1] câu hỏi cá nhân — luyện theo cặp, đổi vai; giáo viên chấm mẫu theo thang Nói PET: Grammar & Vocabulary, Discourse management, Pronunciation, Interactive communication (0–5) · [SS7] phát âm 15 phút: trọng âm từ tính từ tính cách (CONfident, amBItious, EAsy-going); ngữ điệu câu hỏi đuôi · [SS6] hỏi lại, làm rõ: Sorry, could you say that again? What do you mean by…? Do you mean…?",
     "ket_codes": [
      "S1"
     ],
     "subskills": [
      "SS1",
      "SS6",
      "SS7"
     ],
     "grammar": "B01 Hiện tại đơn và hiện tại tiếp diễn; động từ trạng thái; B02 Trạng từ tần suất, vị trí; cụm thời gian; B31 Câu hỏi đuôi (question tags)",
     "vocabulary": "full name, first name, middle name, surname, family name, nickname, address, postcode, zip code, email address, How do you spell that?, one reason is that …, another reason is that …, on top of that …, for example, because",
     "can_do": "trả lời ≥ 6 câu hỏi cá nhân, mỗi câu mở rộng 2 ý (lý do, ví dụ); dùng đúng B31 trong ≥ 4/5 câu; đọc đúng ≥ 8/10 câu mẫu phát âm",
     "before": "1. [Nói] Học cụm câu chức năng (nghe – nhắc lại – ghi âm) theo Speaking file SB tr. 146: full name, first name, middle name, surname, family name, nickname, address, postcode (8')\n2. [Nói] Đọc câu hỏi bài nói SB tr. 15, ghi âm câu trả lời nháp 1 phút (5')\n3. [Nghe] Nghe câu trả lời mẫu (giọng Gemini) rồi đánh dấu 3 cụm câu muốn dùng (5')\n4. [Từ vựng] Ôn nhanh từ vựng U1 cần cho bài nói (quiz 10 câu) (5')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Identity' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'No more boys and girls') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Nói] Workbook tr. 11 Speaking (số hóa; ghi âm các đoạn hội thoại trong trang) (7')\n2. [Nói] Ghi âm lại bài nói hoàn chỉnh 1–2 phút theo dạng S1 sau góp ý trên lớp (6')\n3. [Phát âm] Luyện 10 câu: trọng âm từ tính từ tính cách (CONfident, amBItious, EAsy-going); ngữ điệu câu hỏi đuôi (6')\n4. [Nói] Shadowing câu trả lời mẫu (5')\n5. [Ôn] Quiz cụm câu chức năng (nghe chọn cụm phù hợp tình huống) (4')\n6. [Lồng tiếng] clip 20–40 giây chủ đề 'Identity' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'No more boys and girls') (12')\n7. [Từ vựng] Ôn thẻ từ đến hạn (3')\n8. [Nghe] Nghe bài nói của 2 bạn trong lớp (giáo viên chọn), chấm theo 2 tiêu chí (4')\n9. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U1 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 32,
     "after_min": 53,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Khởi động nói nhanh 4-3-2",
       "category": "fluency"
      },
      {
       "minutes": 15,
       "activity": "Nghe bài nói mẫu, ghi cụm câu chức năng (Speaking file)",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "Phát âm trọng tâm của buổi",
       "category": "lang"
      },
      {
       "minutes": 40,
       "activity": "Luyện part Nói PET theo cặp, đổi vai, đổi bạn",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Nói trước lớp, giáo viên chấm theo thang Nói PET",
       "category": "test"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá, giao bài ghi âm",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Speaking file SB tr. 146; Bài bổ sung ngữ pháp do IVY soạn (không có trong GE B1 2nd ed)",
     "assessment": "—"
    },
    {
     "session_id": "BO-08",
     "session_no": 8,
     "week": 4,
     "hp": "HP1",
     "unit": "U1",
     "unit_title": "Identity",
     "type": "Writing",
     "kind": "Unit – Writing",
     "sb_pages": "16–17, 150–151",
     "wb_pages": "12",
     "focus": "U1 Identity · Writing",
     "task": "Email giới thiệu bản thân cho chương trình truyền hình Channel 1: mở thư, phản hồi, kết thư; quite/very + tính từ; and, but, so, because, or",
     "content": "Lập dàn ý → viết nháp trên lớp → tự soát theo mục Improve it",
     "ket_part": "[W1] email ~100 từ theo 4 ghi chú — phân tích đề, gạch ý bắt buộc, viết 20–25 phút",
     "ket_codes": [
      "W1"
     ],
     "subskills": [
      "WS1",
      "WS4",
      "WS6"
     ],
     "grammar": "B22 Từ nối: although, so that, either…or, as soon as, because, so",
     "vocabulary": "personal profile, advertisement, documentary, reality TV show, quite unusual, very important, quite shy, very keen on, and, because, but, or, so, Choose me because …",
     "can_do": "email ~100 từ, đủ 4 ý trong ghi chú, ≤ 3 lỗi, thang PET ≥ 3/5 mỗi tiêu chí",
     "before": "1. [Viết] Đọc bài mẫu SB tr. 16–17 và Writing file SB tr. 150–151: bấm chọn câu mở bài, 3 từ nối, câu kết (6')\n2. [Từ vựng] Cụm câu cho bài viết (nghe – nhắc lại – điền câu): personal profile, advertisement, documentary, reality TV show, quite unusual, very important, quite shy, very keen on (6')\n3. [Viết] Lập dàn ý cho đề bài trên sơ đồ (ý chính mỗi đoạn) (6')\n4. [Nghe] Nghe – đọc bài mẫu (giọng Gemini) 2 lần (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Identity' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'No more boys and girls') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Viết] Viết lại bài theo nhận xét trên lớp, tự soát 4 mục (đủ ý, chia đoạn, từ nối, chính tả) (15')\n2. [Viết] Workbook tr. 12 Writing (8')\n3. [Viết] Nâng câu: viết lại 3 câu đơn trong bài thành câu phức (5')\n4. [Nói] Đọc to bài viết của mình và ghi âm (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Identity' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'No more boys and girls') (12')\n6. [Ôn] Quiz nhớ lại 8 câu: từ nối và cụm câu bài viết (4')\n7. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U1 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 31,
     "after_min": 54,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Sửa lỗi chung từ bài nói và bài tập về nhà",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Phân tích đề và bài mẫu (Writing file)",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "Cụm câu, từ nối, câu phức cho dạng bài",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Lập dàn ý theo cặp",
       "category": "output"
      },
      {
       "minutes": 25,
       "activity": "Viết nháp có bấm giờ",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Tự soát theo Improve it, chấm chéo theo thang PET",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tổng kết, giao bài viết lại",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Writing file SB tr. 150–151 (bài mẫu, cụm câu); thang chấm PET: Content, Communicative achievement, Organisation, Language (0–5); Photocopiable 1C (viết)",
     "assessment": "—"
    },
    {
     "session_id": "BO-09",
     "session_no": 9,
     "week": 5,
     "hp": "HP1",
     "unit": "U1",
     "unit_title": "Identity",
     "type": "Project & Check",
     "kind": "Unit – Ôn tập + Dự án",
     "sb_pages": "18–20, 127",
     "wb_pages": "13",
     "focus": "U1 Identity · Ôn tập và Dự án",
     "task": "Video 'No more boys and girls'; dự án: Thuyết trình ý tưởng giúp trường học bình đẳng giới hơn, đánh giá chéo; Independent learning; Unit check",
     "content": "Ôn từ vựng và ngữ pháp U1 · Independent learning: Think about your learning: tự đánh giá, lập portfolio",
     "ket_part": "[S4] thảo luận sau video · trình bày dự án nhóm 2–3 phút, mỗi thành viên nói ≥ 4 câu · [R6] 10 phút điền từ tự do (Part 6) theo ngữ pháp của unit",
     "ket_codes": [
      "S4",
      "R6"
     ],
     "subskills": [
      "RS8",
      "SS4",
      "VS1"
     ],
     "grammar": "B01 Hiện tại đơn và hiện tại tiếp diễn; động từ trạng thái; B02 Trạng từ tần suất, vị trí; cụm thời gian",
     "vocabulary": "gender, gender stereotypes, gender neutral, equal, experiment, psychologist, brains, build robots, sew teddy bears, behaviour, improve, toys, jobs, primary school, come round",
     "can_do": "Unit check ≥ 70%; Language test ≥ 70%; mỗi học sinh nói ≥ 4 câu khi trình bày dự án",
     "before": "1. [Dự án] Chuẩn bị phần dự án của mình: Thuyết trình ý tưởng giúp trường học bình đẳng giới hơn, đánh giá chéo (tìm thông tin, viết 4–5 câu sẽ nói) (12')\n2. [Nghe] Xem video Switch on 'No more boys and girls' (SB tr. 18) có phụ đề, trả lời 3 câu hỏi (6')\n3. [Nói] Ghi âm phần trình bày dự án của mình 1 phút để tập (4')\n4. [Ôn] Quiz trộn 20 câu từ vựng + ngữ pháp U1 (6')\n5. [Lồng tiếng] 1 đoạn video Switch on 'No more boys and girls' (20–40 giây) (6')",
     "after": "1. [Ôn] Workbook tr. 13 Unit check (8')\n2. [Ôn] Language Test A U1 trên website (Assessment package) (25')\n3. [Tự học] Independent learning SB tr. 18: phiếu tự đánh giá + ghi âm 1 phút 'Unit 1: em làm tốt… em cần…' (4')\n4. [Từ vựng] Từ vựng chủ đề PET tự học: 'Food and drink' – Wordwall 15 từ (6')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Identity' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'No more boys and girls') (6')\n6. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U1 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 34,
     "after_min": 55,
     "in_class": [
      {
       "minutes": 15,
       "activity": "Ôn từ vựng và ngữ pháp của unit qua trò chơi",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Video Switch on + thảo luận",
       "category": "input"
      },
      {
       "minutes": 35,
       "activity": "Dự án nhóm: hoàn thiện và trình bày, đánh giá chéo",
       "category": "output"
      },
      {
       "minutes": 30,
       "activity": "Unit check",
       "category": "test"
      },
      {
       "minutes": 10,
       "activity": "Independent learning, giao bài",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Bản sắc cá nhân, bình đẳng giới và định kiến (SDG 5) · Phân bổ 105': video + thảo luận 20', trình bày dự án 30', Part 6 mini 10', Unit check 25', Skills Test A 20'",
     "materials": "Video U1 (videoscript TB tr. 147); Grammar file SB tr. 127 (bài luyện); Unit test B1 U1: Skills Test A tại lớp 20' (Assessment package); Language Test A làm trên website",
     "assessment": "—"
    },
    {
     "session_id": "BO-10",
     "session_no": 10,
     "week": 5,
     "hp": "HP1",
     "unit": "Sự kiện",
     "unit_title": "Công dân toàn cầu",
     "type": "Sự kiện",
     "kind": "Sự kiện kỹ năng",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Sự kiện E2 · Beyond Stereotypes Talk Show",
     "task": "—",
     "content": "Tính cách, bản sắc; hiện tại đơn/tiếp diễn",
     "ket_part": "[S1] dẫn talk show phỏng vấn khách mời · [S4] đưa quan điểm có lý do · [W1] email mời khách ~100 từ",
     "ket_codes": [
      "S1",
      "S4",
      "W1"
     ],
     "subskills": [
      "SS1",
      "SS4",
      "WS1",
      "WS4"
     ],
     "grammar": "B01 Hiện tại đơn và hiện tại tiếp diễn; động từ trạng thái; B20 Giới từ đi kèm tính từ và động từ (interested in, listen to, proud of…)",
     "vocabulary": "Dùng lại từ vựng của unit vừa học (xem cột này ở các buổi trước)",
     "can_do": "Mỗi nhóm dựng 1 talk show 5 phút; mỗi học sinh hỏi hoặc trả lời ≥ 3 lượt",
     "before": "1. [Dự án] Chuẩn bị phần việc của mình cho sự kiện 'Beyond Stereotypes Talk Show' (nội dung, đồ dùng, vai) (15')\n2. [Nói] Viết và ghi âm phần nói của mình 1–2 phút, nghe lại và sửa (8')\n3. [Từ vựng] Ôn từ vựng và cấu trúc cần dùng: Tính cách, bản sắc; hiện tại đơn/tiếp diễn (6')\n4. [Lồng tiếng] clip chủ đề sự kiện (6')",
     "after": "1. [Tự học] Tự đánh giá theo rubric 4 tiêu chí (3')\n2. [Viết] Bài viết sau sự kiện (dạng W1) ~100 từ (15')\n3. [Nói] Xem video sự kiện của nhóm, ghi âm nhận xét 1 phút (1 điểm tốt, 1 điểm cần cải thiện) (5')\n4. [Nghe] Nghe phần trình bày của 1 nhóm khác, trả lời 3 câu hỏi (6')\n5. [Từ vựng] Ôn thẻ đến hạn (4')\n6. [Lồng tiếng] 2 clip (12')\n7. [Ôn] Quiz trộn 10 câu unit vừa học (5')\n8. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 35,
     "after_min": 56,
     "in_class": [
      {
       "minutes": 20,
       "activity": "Chuẩn bị ngôn ngữ cho sản phẩm",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Thực hiện sản phẩm trước khán giả",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Phản hồi theo rubric",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá năng lực",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Bình đẳng giới, phá bỏ định kiến (SDG 5)",
     "materials": "Rubric 4 tiêu chí: ngôn ngữ, nội dung, hợp tác, trình bày",
     "assessment": "—"
    },
    {
     "session_id": "BO-11",
     "session_no": 11,
     "week": 6,
     "hp": "HP1",
     "unit": "U2",
     "unit_title": "Get the message",
     "type": "Reading",
     "kind": "Unit – Reading + Grammar",
     "sb_pages": "21–24, 128",
     "wb_pages": "14–16",
     "focus": "U2 Get the message · Lead-in + Reading + Grammar 1",
     "task": "Đọc biển báo, thông báo và bài báo về các ngôn ngữ thiểu số (Welsh, Gaelic, Manx, Cornish); hiểu ý chính",
     "content": "Ngữ pháp: Quá khứ đơn và quá khứ tiếp diễn với when/while; động từ trạng thái không dùng tiếp diễn · Kỹ năng đọc: understanding overall meaning",
     "ket_part": "[R1] 5 văn bản ngắn (biển báo, tin nhắn), chọn ý đúng · [R3] bài dài, 5 câu trắc nghiệm — kỹ năng understanding overall meaning; gạch từ khóa, tìm cách diễn đạt khác trong bài · [RS4] nhận ra thái độ, ý kiến người viết: tìm tính từ, trạng từ đánh giá (surprisingly, unfortunately), phân biệt sự thật và ý kiến",
     "ket_codes": [
      "R1",
      "R3"
     ],
     "subskills": [
      "RS1",
      "RS2",
      "RS4"
     ],
     "grammar": "B04 Quá khứ đơn và quá khứ tiếp diễn (when/while)",
     "vocabulary": "international, increasing, pay attention, fashionable, local, realise, disappear, allowed, minority languages, bilingual, survive, die out, relatives, field of education, keep secrets, identity, culture, high grades, contact details, few people, Zulu, Inuit, Gaelic, Maori, Welsh, Manx, Cornish",
     "can_do": "≥ 4/5 câu Part 1; ≥ 4/5 câu Part 3; viết 6 câu dùng điểm ngữ pháp B04, ≥ 5 câu đúng; trả lời đúng ≥ 2/2 câu hỏi về thái độ người viết",
     "before": "1. [Từ vựng] Chuỗi 5 bước nhớ từ của bài đọc (nghe–nhắc lại → ghép hình → nghe chọn → nghe gõ → điền câu từ bài đọc): international, increasing, pay attention, fashionable, local, realise, disappear, allowed, minority languages, bilingual, survive, die out (10')\n2. [Nói] Lead-in SB tr. 21: xem ảnh mở bài, ghi âm 30–45 giây trả lời câu hỏi mở bài (4')\n3. [Nghe] Nghe – đọc đoạn đầu bài đọc SB tr. 22 (audio gốc), trả lời 2 câu dự đoán ý chính (5')\n4. [Ngữ pháp] Video ngắn: Quá khứ đơn và quá khứ tiếp diễn với when/while; động từ trạng thái không dùng tiếp diễn (theo Grammar file SB tr. 128, Grammar ppt U2) + 5 câu kiểm tra hiểu (7')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Get the message' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'School interpreters') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (unit trước) (3')",
     "after": "1. [Ôn] Quiz nhớ lại 10 câu: từ bài đọc + điểm ngữ pháp vừa học, không mở sách (5')\n2. [Đọc] Workbook tr. 14–15 Reading (số hóa, chấm tự động; dạng R1, R3) (10')\n3. [Ngữ pháp] Workbook tr. 16 Grammar (6')\n4. [Ngữ pháp] Grammar file SB tr. 129: 1–2 bài luyện phần Quá khứ đơn và quá khứ tiếp diễn với when/while (5')\n5. [Nghe] Chép chính tả 4 câu từ audio bài đọc SB tr. 22–23 (5')\n6. [Nói] Shadowing 5 câu của bài đọc (audio gốc, ghi âm, nhận dạng giọng nói đánh dấu từ chưa rõ) (5')\n7. [Nói] Ghi âm 1 phút nói lại nội dung bài đọc, dùng ít nhất 3 từ mới và điểm ngữ pháp vừa học (3')\n8. [Lồng tiếng] clip 20–40 giây chủ đề 'Get the message' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'School interpreters') (12')\n9. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U2 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 35,
     "after_min": 57,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Khởi động: kiểm tra nhanh từ vựng đã học trước ở nhà (gói PRE)",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Lead-in: thảo luận ảnh và câu hỏi mở bài",
       "category": "fluency"
      },
      {
       "minutes": 30,
       "activity": "Reading: đọc lướt lấy ý chính → làm dạng bài PET → chữa bằng câu chứa đáp án",
       "category": "input"
      },
      {
       "minutes": 25,
       "activity": "Grammar 1: tìm quy tắc trong bài đọc → luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Dùng ngữ pháp mới để nói và viết về bản thân",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Tổng kết, giới thiệu gói POST-LESSON",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Grammar file SB tr. 128 (lý thuyết); Grammar ppt B1 U2; Photocopiable 2A (ngữ pháp)",
     "assessment": "—"
    },
    {
     "session_id": "BO-12",
     "session_no": 12,
     "week": 6,
     "hp": "HP1",
     "unit": "U2",
     "unit_title": "Get the message",
     "type": "Listening",
     "kind": "Unit – Vocabulary + Listening",
     "sb_pages": "25–26, 144, 168",
     "wb_pages": "17–18",
     "focus": "U2 Get the message · Vocabulary + Listening + Grammar 2",
     "task": "Nghe về trại hè học kỹ năng (coding), dự đoán thông tin cần điền",
     "content": "Từ vựng: Ngôn ngữ và giao tiếp: repeat, pronounce, translate, explain, mean · phân biệt tell/talk/speak/say · động từ + giới từ: listen to, talk to/about, explain sth to sb · Ngữ pháp 2: Danh động từ (-ing) làm chủ ngữ và sau giới từ · Bổ sung B29: động từ + V-ing / to V (enjoy learning, decide to try, stop -ing / stop to)",
     "ket_part": "[R5] điền từ trắc nghiệm (từ vựng, collocation) · [L3] điền 6 thông tin — đọc câu hỏi trước khi nghe, dự đoán đáp án, nghe lần 2 để kiểm tra",
     "ket_codes": [
      "R5",
      "L3"
     ],
     "subskills": [
      "LS3",
      "LS5",
      "RS7",
      "VS1",
      "VS3"
     ],
     "grammar": "B05 Danh động từ (-ing) làm chủ ngữ, sau giới từ; B20 Giới từ đi kèm tính từ và động từ (interested in, listen to, proud of…); B29 Động từ + V-ing / to V (enjoy, decide, want, stop, try…)",
     "vocabulary": "explain, mean, pronounce, repeat, say, speak, translate, understand, listen to sb/sth, talk to sb, talk about sth, speak to sb, speak about sth, explain sth to sb, translate sth into, tell/talk, say/speak, listen/hear, tell a story, tell a joke, tell sb the answer, say the alphabet, speak a language, summer camp, app camp, apps, application, beginners, lowest level, basketball match, museum, computing, code, coding, developer's kit, calorie, barcode, celebrate, recommend, waste, choose",
     "can_do": "≥ 4/6 câu Part 5; ≥ 4/6 chỗ trống Part 3, đúng chính tả; dùng đúng B05 trong ≥ 5/6 câu; dùng đúng B29 trong ≥ 4/5 câu",
     "before": "1. [Từ vựng] Chuỗi 5 bước nhớ từ của bài Vocabulary SB tr. 25: explain, mean, pronounce, repeat, say, speak, translate, understand, listen to sb/sth, talk to sb, talk about sth, speak to sb, speak about sth, explain sth to sb (10')\n2. [Nghe] Nghe mồi 30–60 giây đầu bài nghe SB tr. 26 (audio gốc), dự đoán 2 câu (4')\n3. [Ngữ pháp] Video ngắn: Danh động từ (-ing) làm chủ ngữ và sau giới từ + 5 câu kiểm tra hiểu (6')\n4. [Từ vựng] Extend vocabulary SB tr. 144 (phần U2): ghép 8 từ mở rộng với hình/nghĩa (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Get the message' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'School interpreters') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Ôn] Quiz nhớ lại 10 câu: từ vựng + ngữ pháp 2, không mở sách (5')\n2. [Từ vựng] Workbook tr. 17 Vocabulary (6')\n3. [Nghe] Workbook tr. 18 Listening (audio Workbook) (8')\n4. [Nghe] Nghe lại bài nghe SB tr. 26 có lời thoại theo câu + 1 part nghe PET rút gọn dạng L3 (8')\n5. [Nghe] Chép chính tả 4 câu từ bài nghe SB tr. 26, ưu tiên âm yếu, âm nối (5')\n6. [Nói] Shadowing 5 câu của bài nghe (5')\n7. [Lồng tiếng] clip 20–40 giây chủ đề 'Get the message' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'School interpreters') (12')\n8. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U2 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 33,
     "after_min": 55,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng nhanh",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Vocabulary SB + Extend vocabulary",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Listening PET: dự đoán → nghe lần 1 → nghe lần 2 kiểm tra → đọc audioscript",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Grammar 2: giới thiệu và luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Nói theo cặp dùng từ và ngữ pháp mới",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Chép chính tả 3 câu từ bài nghe, giao bài",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Extend vocabulary SB tr. 144; Photocopiable 2B (từ vựng); audioscript SB tr. 168 (chữa bài nghe); Bài bổ sung ngữ pháp do IVY soạn (không có trong GE B1 2nd ed)",
     "assessment": "—"
    },
    {
     "session_id": "BO-13",
     "session_no": 13,
     "week": 7,
     "hp": "HP1",
     "unit": "U2",
     "unit_title": "Get the message",
     "type": "Speaking",
     "kind": "Unit – Speaking",
     "sb_pages": "27, 147",
     "wb_pages": "19",
     "focus": "U2 Get the message · Speaking",
     "task": "Tả ảnh về giao tiếp, sắp xếp ý khi tả (tổng quan → chi tiết → suy đoán)",
     "content": "Cụm câu chức năng của bài nói; dùng lại ngữ pháp B04, B05 và từ vựng U2 khi nói",
     "ket_part": "[S2] tả ảnh 1 phút — luyện theo cặp, đổi vai; giáo viên chấm mẫu theo thang Nói PET: Grammar & Vocabulary, Discourse management, Pronunciation, Interactive communication (0–5) · [SS7] phát âm 15 phút: đuôi -ed /t/ /d/ /ɪd/ khi kể chuyện quá khứ; nhấn từ quan trọng khi tả ảnh · [SS6] dùng câu hỏi lại, làm rõ khi chưa hiểu bạn hoặc giám khảo",
     "ket_codes": [
      "S2"
     ],
     "subskills": [
      "SS2",
      "SS6",
      "SS7"
     ],
     "grammar": "B04 Quá khứ đơn và quá khứ tiếp diễn (when/while); B05 Danh động từ (-ing) làm chủ ngữ, sau giới từ",
     "vocabulary": "queue, bus driver, shop assistant, public transport, fluent, fluency, speak at length, supermarket, shelves, till, paper bag, customer, uniform, basket, counter, This photo shows …, On the left / To the right of the photo, In the middle / At the front / In the background, Behind …, In front of …, It looks like …, I'm pretty sure …, It's probably …",
     "can_do": "tả ảnh liên tục 1 phút, ≥ 8 câu, dùng ≥ 3 cụm chỉ vị trí hoặc suy đoán; đọc đúng ≥ 8/10 câu mẫu phát âm",
     "before": "1. [Nói] Học cụm câu chức năng (nghe – nhắc lại – ghi âm) theo Speaking file SB tr. 147: queue, bus driver, shop assistant, public transport, fluent, fluency, speak at length, supermarket (8')\n2. [Nói] Đọc câu hỏi bài nói SB tr. 27, ghi âm câu trả lời nháp 1 phút (5')\n3. [Nghe] Nghe câu trả lời mẫu (giọng Gemini) rồi đánh dấu 3 cụm câu muốn dùng (5')\n4. [Từ vựng] Ôn nhanh từ vựng U2 cần cho bài nói (quiz 10 câu) (5')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Get the message' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'School interpreters') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Nói] Workbook tr. 19 Speaking (số hóa; ghi âm các đoạn hội thoại trong trang) (7')\n2. [Nói] Ghi âm lại bài nói hoàn chỉnh 1–2 phút theo dạng S2 sau góp ý trên lớp (6')\n3. [Phát âm] Luyện 10 câu: đuôi -ed /t/ /d/ /ɪd/ khi kể chuyện quá khứ; nhấn từ quan trọng khi tả ảnh (6')\n4. [Nói] Shadowing câu trả lời mẫu (5')\n5. [Ôn] Quiz cụm câu chức năng (nghe chọn cụm phù hợp tình huống) (4')\n6. [Lồng tiếng] clip 20–40 giây chủ đề 'Get the message' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'School interpreters') (12')\n7. [Từ vựng] Ôn thẻ từ đến hạn (3')\n8. [Nghe] Nghe bài nói của 2 bạn trong lớp (giáo viên chọn), chấm theo 2 tiêu chí (4')\n9. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U2 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 32,
     "after_min": 53,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Khởi động nói nhanh 4-3-2",
       "category": "fluency"
      },
      {
       "minutes": 15,
       "activity": "Nghe bài nói mẫu, ghi cụm câu chức năng (Speaking file)",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "Phát âm trọng tâm của buổi",
       "category": "lang"
      },
      {
       "minutes": 40,
       "activity": "Luyện part Nói PET theo cặp, đổi vai, đổi bạn",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Nói trước lớp, giáo viên chấm theo thang Nói PET",
       "category": "test"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá, giao bài ghi âm",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Speaking file SB tr. 147",
     "assessment": "—"
    },
    {
     "session_id": "BO-14",
     "session_no": 14,
     "week": 7,
     "hp": "HP1",
     "unit": "U2",
     "unit_title": "Get the message",
     "type": "Writing",
     "kind": "Unit – Writing",
     "sb_pages": "28–29, 154–155",
     "wb_pages": "20",
     "focus": "U2 Get the message · Writing",
     "task": "Truyện về một lần mắc lỗi đáng nhớ: tạo không khí bằng tính từ mạnh (wonderful, brilliant) và trạng từ (really, finally)",
     "content": "Lập dàn ý → viết nháp trên lớp → tự soát theo mục Improve it",
     "ket_part": "[W2] bài báo hoặc truyện ~100 từ — phân tích đề, gạch ý bắt buộc, viết 20–25 phút",
     "ket_codes": [
      "W2"
     ],
     "subskills": [
      "WS3",
      "WS4",
      "WS6"
     ],
     "grammar": "—",
     "vocabulary": "happy, embarrassed, exhausted, excited, nervous, scared, go red, panic, glance, freeze, my mind went blank, grow on sb, Sunday roast, gravy, smile/smell, vegetables/vegetarians, supper/suffer, flour/flower, library/bookshop, dish/plate, wonderful, brilliant, delicious, hilarious, disgusting, furious, fantastic, huge, awful, terrible, really, finally",
     "can_do": "bài ~100 từ có mở – thân – kết, ≥ 3 từ nối, ≤ 3 lỗi, thang PET ≥ 3/5 mỗi tiêu chí",
     "before": "1. [Viết] Đọc bài mẫu SB tr. 28–29 và Writing file SB tr. 154–155: bấm chọn câu mở bài, 3 từ nối, câu kết (6')\n2. [Từ vựng] Cụm câu cho bài viết (nghe – nhắc lại – điền câu): happy, embarrassed, exhausted, excited, nervous, scared, go red, panic (6')\n3. [Viết] Lập dàn ý cho đề bài trên sơ đồ (ý chính mỗi đoạn) (6')\n4. [Nghe] Nghe – đọc bài mẫu (giọng Gemini) 2 lần (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Get the message' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'School interpreters') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Viết] Viết lại bài theo nhận xét trên lớp, tự soát 4 mục (đủ ý, chia đoạn, từ nối, chính tả) (15')\n2. [Viết] Workbook tr. 20 Writing (8')\n3. [Viết] Nâng câu: viết lại 3 câu đơn trong bài thành câu phức (5')\n4. [Nói] Đọc to bài viết của mình và ghi âm (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Get the message' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'School interpreters') (12')\n6. [Ôn] Quiz nhớ lại 8 câu: từ nối và cụm câu bài viết (4')\n7. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U2 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 31,
     "after_min": 54,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Sửa lỗi chung từ bài nói và bài tập về nhà",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Phân tích đề và bài mẫu (Writing file)",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "Cụm câu, từ nối, câu phức cho dạng bài",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Lập dàn ý theo cặp",
       "category": "output"
      },
      {
       "minutes": 25,
       "activity": "Viết nháp có bấm giờ",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Tự soát theo Improve it, chấm chéo theo thang PET",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tổng kết, giao bài viết lại",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Writing file SB tr. 154–155 (bài mẫu, cụm câu); thang chấm PET: Content, Communicative achievement, Organisation, Language (0–5); Photocopiable 2C (viết)",
     "assessment": "—"
    },
    {
     "session_id": "BO-15",
     "session_no": 15,
     "week": 8,
     "hp": "HP1",
     "unit": "U2",
     "unit_title": "Get the message",
     "type": "Project & Check",
     "kind": "Unit – Ôn tập + Dự án",
     "sb_pages": "30–32, 129",
     "wb_pages": "21",
     "focus": "U2 Get the message · Ôn tập và Dự án",
     "task": "Video 'School interpreters'; dự án: Poster thông tin cho học sinh mới đến trường; Independent learning; Unit check",
     "content": "Ôn từ vựng và ngữ pháp U2 · Independent learning: Setting goals: đặt mục tiêu cụ thể, đo được; flashcard Quizlet",
     "ket_part": "[S4] thảo luận sau video · trình bày dự án nhóm 2–3 phút, mỗi thành viên nói ≥ 4 câu · [R6] 10 phút điền từ tự do (Part 6) theo ngữ pháp của unit",
     "ket_codes": [
      "S4",
      "R6"
     ],
     "subskills": [
      "RS8",
      "SS4",
      "VS1"
     ],
     "grammar": "B04 Quá khứ đơn và quá khứ tiếp diễn (when/while); B05 Danh động từ (-ing) làm chủ ngữ, sau giới từ",
     "vocabulary": "interpreter, student interpreter, binge watch, definition, grow in confidence, communication skills, job opportunities, bullied, professional, information poster, app, online, disappear, celebrate, recommend, choose, pay",
     "can_do": "Unit check ≥ 70%; Language test ≥ 70%; mỗi học sinh nói ≥ 4 câu khi trình bày dự án",
     "before": "1. [Dự án] Chuẩn bị phần dự án của mình: Poster thông tin cho học sinh mới đến trường (tìm thông tin, viết 4–5 câu sẽ nói) (12')\n2. [Nghe] Xem video Switch on 'School interpreters' (SB tr. 30) có phụ đề, trả lời 3 câu hỏi (6')\n3. [Nói] Ghi âm phần trình bày dự án của mình 1 phút để tập (4')\n4. [Ôn] Quiz trộn 20 câu từ vựng + ngữ pháp U2 (6')\n5. [Lồng tiếng] 1 đoạn video Switch on 'School interpreters' (20–40 giây) (6')",
     "after": "1. [Ôn] Workbook tr. 21 Unit check (8')\n2. [Ôn] Language Test A U2 trên website (Assessment package) (25')\n3. [Tự học] Independent learning SB tr. 30: phiếu tự đánh giá + ghi âm 1 phút 'Unit 2: em làm tốt… em cần…' (4')\n4. [Từ vựng] Từ vựng chủ đề PET tự học: 'Health, medicine and exercise' – Wordwall 15 từ (6')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Get the message' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'School interpreters') (6')\n6. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U2 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 34,
     "after_min": 55,
     "in_class": [
      {
       "minutes": 15,
       "activity": "Ôn từ vựng và ngữ pháp của unit qua trò chơi",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Video Switch on + thảo luận",
       "category": "input"
      },
      {
       "minutes": 35,
       "activity": "Dự án nhóm: hoàn thiện và trình bày, đánh giá chéo",
       "category": "output"
      },
      {
       "minutes": 30,
       "activity": "Unit check",
       "category": "test"
      },
      {
       "minutes": 10,
       "activity": "Independent learning, giao bài",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Ngôn ngữ và bản sắc văn hóa, hòa nhập và hỗ trợ bạn mới (SDG 10) · Phân bổ 105': video + thảo luận 20', trình bày dự án 30', Part 6 mini 10', Unit check 25', Skills Test A 20'",
     "materials": "Video U2 (videoscript TB tr. 147); Grammar file SB tr. 129 (bài luyện); Unit test B1 U2: Skills Test A tại lớp 20' (Assessment package); Language Test A làm trên website",
     "assessment": "—"
    },
    {
     "session_id": "BO-16",
     "session_no": 16,
     "week": 8,
     "hp": "HP1",
     "unit": "Sự kiện",
     "unit_title": "Công dân toàn cầu",
     "type": "Sự kiện",
     "kind": "Sự kiện kỹ năng",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Sự kiện E3 · Welcome Buddy Day",
     "task": "—",
     "content": "Giao tiếp, ngôn ngữ; quá khứ đơn/tiếp diễn, danh động từ",
     "ket_part": "[S2] giới thiệu poster cho học sinh mới · [R1] đọc biển báo trong trường · [W2] câu chuyện 'ngày đầu tiên' ~100 từ",
     "ket_codes": [
      "S2",
      "R1",
      "W2"
     ],
     "subskills": [
      "RS1",
      "SS2",
      "WS2",
      "WS4"
     ],
     "grammar": "B04 Quá khứ đơn và quá khứ tiếp diễn (when/while); B05 Danh động từ (-ing) làm chủ ngữ, sau giới từ",
     "vocabulary": "Dùng lại từ vựng của unit vừa học (xem cột này ở các buổi trước)",
     "can_do": "Mỗi nhóm làm poster chào đón và dẫn 'bạn mới' tham quan bằng tiếng Anh 5 phút",
     "before": "1. [Dự án] Chuẩn bị phần việc của mình cho sự kiện 'Welcome Buddy Day' (nội dung, đồ dùng, vai) (15')\n2. [Nói] Viết và ghi âm phần nói của mình 1–2 phút, nghe lại và sửa (8')\n3. [Từ vựng] Ôn từ vựng và cấu trúc cần dùng: Giao tiếp, ngôn ngữ; quá khứ đơn/tiếp diễn, danh động từ (6')\n4. [Lồng tiếng] clip chủ đề sự kiện (6')",
     "after": "1. [Tự học] Tự đánh giá theo rubric 4 tiêu chí (3')\n2. [Viết] Bài viết sau sự kiện (dạng W2) ~100 từ (15')\n3. [Nói] Xem video sự kiện của nhóm, ghi âm nhận xét 1 phút (1 điểm tốt, 1 điểm cần cải thiện) (5')\n4. [Nghe] Nghe phần trình bày của 1 nhóm khác, trả lời 3 câu hỏi (6')\n5. [Từ vựng] Ôn thẻ đến hạn (4')\n6. [Lồng tiếng] 2 clip (12')\n7. [Ôn] Quiz trộn 10 câu unit vừa học (5')\n8. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 35,
     "after_min": 56,
     "in_class": [
      {
       "minutes": 20,
       "activity": "Chuẩn bị ngôn ngữ cho sản phẩm",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Thực hiện sản phẩm trước khán giả",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Phản hồi theo rubric",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá năng lực",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Hòa nhập, hỗ trợ bạn mới, tôn trọng ngôn ngữ thiểu số (SDG 10)",
     "materials": "Rubric 4 tiêu chí: ngôn ngữ, nội dung, hợp tác, trình bày",
     "assessment": "—"
    },
    {
     "session_id": "BO-17",
     "session_no": 17,
     "week": 9,
     "hp": "HP1",
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Review",
     "kind": "Củng cố",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Củng cố · Nghe – Đọc (U1, U2)",
     "task": "—",
     "content": "Chủ đề U1, U2 · Nhận ra các điểm ngữ pháp B01, B02, B03, B04, B05, B20 trong bài đọc và lời thoại",
     "ket_part": "[R1] 5 văn bản ngắn (biển báo, tin nhắn), chọn ý đúng · [R2] nối 5 người với 8 văn bản · [R3] bài dài, 5 câu trắc nghiệm · [R5] điền từ trắc nghiệm (từ vựng, collocation) · [L2] 6 hội thoại ngắn, ý kiến/thái độ · [L3] điền 6 thông tin — làm theo thời gian thật của đề, chữa bằng cách gạch câu chứa đáp án · [RS9] kiểm tra nhật ký đọc: kể tóm tắt sách đọc phân cấp 1 phút",
     "ket_codes": [
      "R1",
      "R2",
      "R3",
      "R5",
      "L2",
      "L3"
     ],
     "subskills": [
      "LS2",
      "LS3",
      "LS5",
      "RS1",
      "RS2",
      "RS3",
      "RS7",
      "RS9",
      "SS5"
     ],
     "grammar": "B01 Hiện tại đơn và hiện tại tiếp diễn; động từ trạng thái; B02 Trạng từ tần suất, vị trí; cụm thời gian; B03 Mạo từ a/an/the/không mạo từ; B04 Quá khứ đơn và quá khứ tiếp diễn (when/while); B05 Danh động từ (-ing) làm chủ ngữ, sau giới từ; B20 Giới từ đi kèm tính từ và động từ (interested in, listen to, proud of…); B29 Động từ + V-ing / to V (enjoy, decide, want, stop, try…); B31 Câu hỏi đuôi (question tags)",
     "vocabulary": "Ôn từ vựng các unit trong học phần; làm lại từ sai trên Wordwall",
     "can_do": "≥ 4/5 câu Part 1; ≥ 4/5 câu nối Part 2; ≥ 4/5 câu Part 3; ≥ 4/6 câu Part 5; ≥ 4/6 câu Part 2; ≥ 4/6 chỗ trống Part 3, đúng chính tả",
     "before": "1. [Ôn] Quiz trộn 20 câu từ vựng + ngữ pháp các unit trong học phần (8')\n2. [Nghe] Nghe lại 2 bài nghe điểm thấp nhất trong học phần, có lời thoại (8')\n3. [Đọc] Đọc lại 1 bài đọc của sách, tìm 5 cụm diễn đạt khác (paraphrase) (8')\n4. [Từ vựng] Ôn thẻ đến hạn (5')\n5. [Lồng tiếng] clip ôn tập (6')",
     "after": "1. [Thi] Làm lại các câu sai của đề luyện trên lớp, ghi lý do sai (10')\n2. [Nghe] 1 part nghe tiếp theo của đề PTP (dạng L2, L3) + chép chính tả 4 câu (12')\n3. [Đọc] 1 part đọc của đề PTP (dạng R1, R2, R3, R5) (10')\n4. [Nói] Shadowing 5 câu của bài nghe (5')\n5. [Lồng tiếng] 2 clip (12')\n6. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 35,
     "after_min": 55,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn từ vựng học phần",
       "category": "lang"
      },
      {
       "minutes": 35,
       "activity": "Reading PET: làm có bấm giờ → chữa → rút chiến lược",
       "category": "input"
      },
      {
       "minutes": 35,
       "activity": "Listening PET: làm → chữa → nghe lại có lời",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "Làm lại câu sai với đề khác",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Đọc hoặc nghe mở rộng mức dễ",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Practice Tests Plus B1 Preliminary for Schools (PTP) Test 1: Reading Part 1, Part 2, Part 3, Part 5; Listening Part 2, Part 3; Skills Test A U1, U2",
     "assessment": "—"
    },
    {
     "session_id": "BO-18",
     "session_no": 18,
     "week": 9,
     "hp": "HP1",
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Test",
     "kind": "Củng cố + kiểm tra Nói",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Củng cố · Nói – Viết + kiểm tra Nói HP1",
     "task": "—",
     "content": "Câu hỏi cá nhân, tả ảnh, thảo luận theo chủ đề đã học · từ nối và câu mở rộng",
     "ket_part": "[S1] câu hỏi cá nhân · [S2] tả ảnh 1 phút — thi Nói theo cặp với giáo viên · [W1] email ~100 từ theo 4 ghi chú · [W2] bài báo hoặc truyện ~100 từ — viết có bấm giờ 22 phút",
     "ket_codes": [
      "S1",
      "S2",
      "W1",
      "W2"
     ],
     "subskills": [
      "SS1",
      "SS2",
      "WS1",
      "WS2",
      "WS3",
      "WS4"
     ],
     "grammar": "B01 Hiện tại đơn và hiện tại tiếp diễn; động từ trạng thái; B02 Trạng từ tần suất, vị trí; cụm thời gian; B03 Mạo từ a/an/the/không mạo từ; B04 Quá khứ đơn và quá khứ tiếp diễn (when/while); B05 Danh động từ (-ing) làm chủ ngữ, sau giới từ; B20 Giới từ đi kèm tính từ và động từ (interested in, listen to, proud of…); B29 Động từ + V-ing / to V (enjoy, decide, want, stop, try…); B31 Câu hỏi đuôi (question tags)",
     "vocabulary": "Ôn từ vựng các unit trong học phần; làm lại từ sai trên Wordwall",
     "can_do": "Thi Nói đạt ≥ 3/5 mỗi tiêu chí (thang Nói PET: Grammar & Vocabulary, Discourse management, Pronunciation, Interactive communication (0–5)); bài viết đạt ≥ 3/5 mỗi tiêu chí PET",
     "before": "1. [Nói] Luyện 4 part Nói theo bộ câu hỏi mẫu, ghi âm từng part (12')\n2. [Nghe] Xem video thí sinh mẫu Cambridge, ghi 3 cụm câu học được (8')\n3. [Viết] Lập dàn ý 1 email và 1 article/story (8')\n4. [Lồng tiếng] clip (6')",
     "after": "1. [Nói] Ghi âm lại part Nói chưa đạt theo nhận xét (8')\n2. [Viết] Viết lại bài viết có bấm giờ theo nhận xét (15')\n3. [Phát âm] Luyện 10 câu theo lỗi phát âm được ghi trong buổi thi Nói (6')\n4. [Nghe] 1 part nghe PET (7')\n5. [Lồng tiếng] 2 clip (12')\n6. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 34,
     "after_min": 54,
     "in_class": [
      {
       "minutes": 90,
       "activity": "GV thi Nói từng cặp 10–12'; các cặp khác viết PET Part 1/2 bấm giờ",
       "category": "test"
      },
      {
       "minutes": 15,
       "activity": "Tự chấm bài viết theo thang PET",
       "category": "lang"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "PTP Test 1: Speaking, Writing; Speaking file SB tr. 146–149; Writing file SB tr. 150–155",
     "assessment": "—"
    },
    {
     "session_id": "BO-19",
     "session_no": 19,
     "week": 10,
     "hp": "HP1",
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Test",
     "kind": "Kiểm tra học phần",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Ngữ pháp nền + kiểm tra HP1",
     "task": "—",
     "content": "Ôn ngữ pháp B01, B02, B03, B04, B05, B20, B29, B31 — ghi lỗi vào bảng lỗi cá nhân",
     "ket_part": "[E] làm bài đúng thời gian, chuyển đáp án sang phiếu trả lời · [R1] 5 văn bản ngắn (biển báo, tin nhắn), chọn ý đúng · [R2] nối 5 người với 8 văn bản · [L2] 6 hội thoại ngắn, ý kiến/thái độ · [L3] điền 6 thông tin",
     "ket_codes": [
      "R1",
      "R2",
      "L2",
      "L3"
     ],
     "subskills": [
      "LS2",
      "LS3",
      "RS1",
      "RS3"
     ],
     "grammar": "B01 Hiện tại đơn và hiện tại tiếp diễn; động từ trạng thái; B02 Trạng từ tần suất, vị trí; cụm thời gian; B03 Mạo từ a/an/the/không mạo từ; B04 Quá khứ đơn và quá khứ tiếp diễn (when/while); B05 Danh động từ (-ing) làm chủ ngữ, sau giới từ; B20 Giới từ đi kèm tính từ và động từ (interested in, listen to, proud of…); B29 Động từ + V-ing / to V (enjoy, decide, want, stop, try…); B31 Câu hỏi đuôi (question tags)",
     "vocabulary": "Ôn từ vựng các unit trong học phần; làm lại từ sai trên Wordwall",
     "can_do": "Kiểm tra ≥ 60% mỗi phần; ≥ 80% câu ngữ pháp mức có kiểm soát (B01, B02, B03, B04, B05, B20, B29, B31)",
     "before": "1. [Ngữ pháp] Quiz ôn ngữ pháp của học phần 30 câu (có giải thích) (12')\n2. [Từ vựng] Ôn thẻ: toàn bộ từ của học phần còn đến hạn (8')\n3. [Thi] Xem lại chiến lược các part sẽ kiểm tra (video 5') (5')\n4. [Nghe] Nghe 1 bài nghe của sách có lời thoại (5')\n5. [Lồng tiếng] clip (6')",
     "after": "1. [Tự học] Xem bài kiểm tra, ghi 5 lỗi chính vào bảng lỗi cá nhân (8')\n2. [Ngữ pháp] Làm lại câu sai dưới dạng mới (website tự tạo) (12')\n3. [Nghe] Nghe lại phần nghe của bài kiểm tra có lời thoại, chép chính tả 4 câu (10')\n4. [Nói] Ghi âm 1 phút: điều em làm tốt và điều em cần cải thiện (3')\n5. [Lồng tiếng] 2 clip (12')\n6. [Từ vựng] Ôn thẻ (5')\n7. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 36,
     "after_min": 56,
     "in_class": [
      {
       "minutes": 40,
       "activity": "Ôn các điểm ngữ pháp nền của học phần",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Kiểm tra: các part PET đã học + câu ngữ pháp nền",
       "category": "test"
      },
      {
       "minutes": 5,
       "activity": "Ghi lỗi vào bảng lỗi cá nhân",
       "category": "lang"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Language Test B U1, U2 (Assessment package); PTP Test 1 Reading Part 3, 6; Grammar file SB tr. 124–129; Câu hỏi bổ sung cho B29, B31 (IVY soạn)",
     "assessment": "—"
    },
    {
     "session_id": "BO-20",
     "session_no": 20,
     "week": 10,
     "hp": "HP1",
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Review",
     "kind": "Linh hoạt",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Linh hoạt 1: bù hoặc tăng cường",
     "task": "—",
     "content": "Nhóm bù: điểm ngữ pháp chưa đạt ở buổi kiểm tra · Nhóm tăng cường: dùng B05, B20 trong bài viết và bài nói dài hơn",
     "ket_part": "Nhóm bù: luyện lại part điểm thấp nhất, nghe lần 2 có lời thoại · Nhóm tăng cường: bài viết ~120 từ, nói 2 phút",
     "ket_codes": [],
     "subskills": [],
     "grammar": "B01 Hiện tại đơn và hiện tại tiếp diễn; động từ trạng thái; B02 Trạng từ tần suất, vị trí; cụm thời gian; B03 Mạo từ a/an/the/không mạo từ; B04 Quá khứ đơn và quá khứ tiếp diễn (when/while); B05 Danh động từ (-ing) làm chủ ngữ, sau giới từ; B20 Giới từ đi kèm tính từ và động từ (interested in, listen to, proud of…); B29 Động từ + V-ing / to V (enjoy, decide, want, stop, try…); B31 Câu hỏi đuôi (question tags)",
     "vocabulary": "Ôn từ vựng các unit trong học phần; làm lại từ sai trên Wordwall",
     "can_do": "Nhóm bù đúng ≥ 80% điểm chưa đạt; nhóm tăng cường đạt ≥ 4/5 ở ≥ 2 tiêu chí PET",
     "before": "1. [Ôn] Bài theo nhóm: nhóm bù – điểm ngữ pháp chưa đạt; nhóm tăng cường – bài viết/nói dài hơn (15')\n2. [Nghe] Nghe 1 bài nghe theo part yếu nhất (8')\n3. [Từ vựng] Ôn thẻ (5')\n4. [Lồng tiếng] clip (6')",
     "after": "1. [Ôn] Làm lại bài kiểm tra phần chưa đạt (Language Test C) (15')\n2. [Nói] Ghi âm 2 phút về chủ đề của học phần (5')\n3. [Nghe] Chép chính tả + shadowing 1 đoạn nghe (10')\n4. [Từ vựng] Ôn thẻ (5')\n5. [Lồng tiếng] 2 clip (12')\n6. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 34,
     "after_min": 53,
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Language Test C và Photocopiables 1A, 2A; Grammar ppt B1 U1, U2",
     "assessment": "—"
    },
    {
     "session_id": "BO-21",
     "session_no": 21,
     "week": 11,
     "hp": "HP2",
     "unit": "U3",
     "unit_title": "The future is now",
     "type": "Reading",
     "kind": "Unit – Reading + Grammar",
     "sb_pages": "33–36, 130",
     "wb_pages": "22–24",
     "focus": "U3 The future is now · Lead-in + Reading + Grammar 1",
     "task": "Đọc bài về tương lai của âm nhạc (concert VR, máy thông minh), đọc lướt rồi điền câu vào chỗ trống",
     "content": "Ngữ pháp: Các cách diễn đạt tương lai: will, going to, hiện tại tiếp diễn (lịch hẹn), hiện tại đơn (thời gian biểu) · Kỹ năng đọc: skim-reading · Bổ sung B26: may / might / could chỉ khả năng (It might rain. Robots could replace…) – so sánh với will chắc chắn",
     "ket_part": "[R4] điền 5 câu vào bài (3 câu thừa) — kỹ năng skim-reading; gạch từ khóa, tìm cách diễn đạt khác trong bài",
     "ket_codes": [
      "R4"
     ],
     "subskills": [
      "RS2",
      "RS5",
      "RS9"
     ],
     "grammar": "B06 Các cách diễn đạt tương lai: will, going to, hiện tại tiếp diễn, hiện tại đơn; B26 may / might / could chỉ khả năng xảy ra",
     "vocabulary": "live, common, successful, directly, produce, predict, bands, incredible, download (music) from, stream (music) from, silent disco, headphones, virtual reality, VR headset, file-sharing, intelligent machines, smartphone, block chain, fans, musicians, store music, record, come true, Walkman, cassette player, portable music player, laptop, fitness tracker, games console, digital camera, sat nav, calculator",
     "can_do": "≥ 3/5 câu Part 4; viết 6 câu dùng điểm ngữ pháp B06, ≥ 5 câu đúng; dùng đúng B26 trong ≥ 4/5 câu",
     "before": "1. [Từ vựng] Chuỗi 5 bước nhớ từ của bài đọc (nghe–nhắc lại → ghép hình → nghe chọn → nghe gõ → điền câu từ bài đọc): live, common, successful, directly, produce, predict, bands, incredible, download (music) from, stream (music) from, silent disco, headphones (10')\n2. [Nói] Lead-in SB tr. 33: xem ảnh mở bài, ghi âm 30–45 giây trả lời câu hỏi mở bài (4')\n3. [Nghe] Nghe – đọc đoạn đầu bài đọc SB tr. 34 (audio gốc), trả lời 2 câu dự đoán ý chính (5')\n4. [Ngữ pháp] Video ngắn: Các cách diễn đạt tương lai: will, going to, hiện tại tiếp diễn (lịch hẹn), hiện tại đơn (thời gian biểu) (theo Grammar file SB tr. 130, Grammar ppt U3) + 5 câu kiểm tra hiểu (7')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'The future is now' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'App entrepreneurs') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (unit trước) (3')",
     "after": "1. [Ôn] Quiz nhớ lại 10 câu: từ bài đọc + điểm ngữ pháp vừa học, không mở sách (5')\n2. [Đọc] Workbook tr. 22–23 Reading (số hóa, chấm tự động; dạng R4) (10')\n3. [Ngữ pháp] Workbook tr. 24 Grammar (6')\n4. [Ngữ pháp] Grammar file SB tr. 131: 1–2 bài luyện phần Các cách diễn đạt tương lai (5')\n5. [Nghe] Chép chính tả 4 câu từ audio bài đọc SB tr. 34–35 (5')\n6. [Nói] Shadowing 5 câu của bài đọc (audio gốc, ghi âm, nhận dạng giọng nói đánh dấu từ chưa rõ) (5')\n7. [Nói] Ghi âm 1 phút nói lại nội dung bài đọc, dùng ít nhất 3 từ mới và điểm ngữ pháp vừa học (3')\n8. [Lồng tiếng] clip 20–40 giây chủ đề 'The future is now' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'App entrepreneurs') (12')\n9. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U3 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 35,
     "after_min": 57,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Khởi động: kiểm tra nhanh từ vựng đã học trước ở nhà (gói PRE)",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Lead-in: thảo luận ảnh và câu hỏi mở bài",
       "category": "fluency"
      },
      {
       "minutes": 30,
       "activity": "Reading: đọc lướt lấy ý chính → làm dạng bài PET → chữa bằng câu chứa đáp án",
       "category": "input"
      },
      {
       "minutes": 25,
       "activity": "Grammar 1: tìm quy tắc trong bài đọc → luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Dùng ngữ pháp mới để nói và viết về bản thân",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Tổng kết, giới thiệu gói POST-LESSON",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Grammar file SB tr. 130 (lý thuyết); Grammar ppt B1 U3; Photocopiable 3A (ngữ pháp); Bài bổ sung B26: Grammar ppt + bài tập do IVY soạn (không có trong GE B1 2nd ed)",
     "assessment": "—"
    },
    {
     "session_id": "BO-22",
     "session_no": 22,
     "week": 11,
     "hp": "HP2",
     "unit": "U3",
     "unit_title": "The future is now",
     "type": "Listening",
     "kind": "Unit – Vocabulary + Listening",
     "sb_pages": "37–38, 144, 169–170",
     "wb_pages": "25–26",
     "focus": "U3 The future is now · Vocabulary + Listening + Grammar 2",
     "task": "Nghe về việc mua đồ mới, nhận ra điểm khác nhau giữa các tranh",
     "content": "Từ vựng: Đồ công nghệ trong nhà: washing machine, kettle, microwave, dishwasher, smart TV, remote control · cụm động từ: switch on/off, plug in, turn up/down, set up, pick up · Ngữ pháp 2: Động từ khuyết thiếu cho lời khuyên và gợi ý: should, could, ought to, Why don't you…?, How about…?, Shall…?",
     "ket_part": "[R5] điền từ trắc nghiệm (từ vựng, collocation) · [L1] 7 đoạn ngắn, chọn tranh — đọc câu hỏi trước khi nghe, dự đoán đáp án, nghe lần 2 để kiểm tra · [LS6] nghe thông báo, hướng dẫn (nhà ga, trường học, cửa hàng): ghi giờ, địa điểm, việc phải làm",
     "ket_codes": [
      "R5",
      "L1"
     ],
     "subskills": [
      "LS1",
      "LS5",
      "LS6",
      "RS7",
      "VS1",
      "VS3"
     ],
     "grammar": "B07 Khuyết thiếu cho lời khuyên, gợi ý: should, could, ought to, Why don't you…?",
     "vocabulary": "kettle, microwave, smart TV, fridge(-freezer), washing machine, dishwasher, coffee maker, remote control, central heating, air conditioning, efficient, white goods, appliances, turn up, turn down, switch on, switch off, plug in, set up, shut down, go off, take off, get on, try on, keep on, put off, get off, fill up, end up, pick up, smart watch, tablet, sweatshirt, sunglasses, cap, dictionary, paper book, e-book, microphone, magazines, guitar, camera, printer, records, CDs, DVDs, print out, should, shouldn't, ought to, could, Why don't you …?, How about …?, Shall I …?",
     "can_do": "≥ 4/6 câu Part 5; ≥ 5/7 câu Part 1; dùng đúng B07 trong ≥ 5/6 câu",
     "before": "1. [Từ vựng] Chuỗi 5 bước nhớ từ của bài Vocabulary SB tr. 37: kettle, microwave, smart TV, fridge(-freezer), washing machine, dishwasher, coffee maker, remote control, central heating, air conditioning, efficient, white goods, appliances, turn up (10')\n2. [Nghe] Nghe mồi 30–60 giây đầu bài nghe SB tr. 38 (audio gốc), dự đoán 2 câu (4')\n3. [Ngữ pháp] Video ngắn: Động từ khuyết thiếu cho lời khuyên và gợi ý: should, could, ought to, Why don't you…?, How about…?, Shall…? + 5 câu kiểm tra hiểu (6')\n4. [Từ vựng] Extend vocabulary SB tr. 144 (phần U3): ghép 8 từ mở rộng với hình/nghĩa (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'The future is now' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'App entrepreneurs') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Ôn] Quiz nhớ lại 10 câu: từ vựng + ngữ pháp 2, không mở sách (5')\n2. [Từ vựng] Workbook tr. 25 Vocabulary (6')\n3. [Nghe] Workbook tr. 26 Listening (audio Workbook) (8')\n4. [Nghe] Nghe lại bài nghe SB tr. 38 có lời thoại theo câu + 1 part nghe PET rút gọn dạng L1 (8')\n5. [Nghe] Chép chính tả 4 câu từ bài nghe SB tr. 38, ưu tiên âm yếu, âm nối (5')\n6. [Nói] Shadowing 5 câu của bài nghe (5')\n7. [Lồng tiếng] clip 20–40 giây chủ đề 'The future is now' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'App entrepreneurs') (12')\n8. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U3 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 33,
     "after_min": 55,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng nhanh",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Vocabulary SB + Extend vocabulary",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Listening PET: dự đoán → nghe lần 1 → nghe lần 2 kiểm tra → đọc audioscript",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Grammar 2: giới thiệu và luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Nói theo cặp dùng từ và ngữ pháp mới",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Chép chính tả 3 câu từ bài nghe, giao bài",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Extend vocabulary SB tr. 144; Photocopiable 3B (từ vựng); audioscript SB tr. 169–170 (chữa bài nghe)",
     "assessment": "—"
    },
    {
     "session_id": "BO-23",
     "session_no": 23,
     "week": 12,
     "hp": "HP2",
     "unit": "U3",
     "unit_title": "The future is now",
     "type": "Speaking",
     "kind": "Unit – Speaking",
     "sb_pages": "39, 148–149",
     "wb_pages": "27",
     "focus": "U3 The future is now · Speaking",
     "task": "Thảo luận tương lai của công nghệ (robot): hỏi và đưa ý kiến, đồng ý, không đồng ý",
     "content": "Cụm câu chức năng của bài nói; dùng lại ngữ pháp B06, B07 và từ vựng U3 khi nói",
     "ket_part": "[S3] thảo luận cặp theo tranh gợi ý · [S4] thảo luận mở rộng — luyện theo cặp, đổi vai; giáo viên chấm mẫu theo thang Nói PET: Grammar & Vocabulary, Discourse management, Pronunciation, Interactive communication (0–5) · [SS7] phát âm 15 phút: dạng rút gọn và âm yếu: I'll, it'll, going to; ngữ điệu khi đưa và hỏi ý kiến · [SS6] dùng câu hỏi lại, làm rõ khi chưa hiểu bạn hoặc giám khảo",
     "ket_codes": [
      "S3",
      "S4"
     ],
     "subskills": [
      "SS3",
      "SS4",
      "SS6",
      "SS7"
     ],
     "grammar": "B06 Các cách diễn đạt tương lai: will, going to, hiện tại tiếp diễn, hiện tại đơn; B07 Khuyết thiếu cho lời khuyên, gợi ý: should, could, ought to, Why don't you…?",
     "vocabulary": "calm, convenient, creative, human, intelligent, trust, useful, robot pet/doctor/teacher/cook/cleaner, in my opinion, in my view, for me, I'd say, What's your view on …?, that's a good point, you're right, I disagree, That's true but …, I'm not sure",
     "can_do": "thảo luận cặp 2–3 phút, xét ≥ 4/5 lựa chọn và đi đến quyết định; trả lời mỗi câu hỏi mở rộng ≥ 3 câu, có lý do, hỏi lại ý bạn; đọc đúng ≥ 8/10 câu mẫu phát âm",
     "before": "1. [Nói] Học cụm câu chức năng (nghe – nhắc lại – ghi âm) theo Speaking file SB tr. 148–149: calm, convenient, creative, human, intelligent, trust, useful, robot pet/doctor/teacher/cook/cleaner (8')\n2. [Nói] Đọc câu hỏi bài nói SB tr. 39, ghi âm câu trả lời nháp 1 phút (5')\n3. [Nghe] Nghe câu trả lời mẫu (giọng Gemini) rồi đánh dấu 3 cụm câu muốn dùng (5')\n4. [Từ vựng] Ôn nhanh từ vựng U3 cần cho bài nói (quiz 10 câu) (5')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'The future is now' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'App entrepreneurs') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Nói] Workbook tr. 27 Speaking (số hóa; ghi âm các đoạn hội thoại trong trang) (7')\n2. [Nói] Ghi âm lại bài nói hoàn chỉnh 1–2 phút theo dạng S3, S4 sau góp ý trên lớp (6')\n3. [Phát âm] Luyện 10 câu: dạng rút gọn và âm yếu: I'll, it'll, going to; ngữ điệu khi đưa và hỏi ý kiến (6')\n4. [Nói] Shadowing câu trả lời mẫu (5')\n5. [Ôn] Quiz cụm câu chức năng (nghe chọn cụm phù hợp tình huống) (4')\n6. [Lồng tiếng] clip 20–40 giây chủ đề 'The future is now' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'App entrepreneurs') (12')\n7. [Từ vựng] Ôn thẻ từ đến hạn (3')\n8. [Nghe] Nghe bài nói của 2 bạn trong lớp (giáo viên chọn), chấm theo 2 tiêu chí (4')\n9. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U3 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 32,
     "after_min": 53,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Khởi động nói nhanh 4-3-2",
       "category": "fluency"
      },
      {
       "minutes": 15,
       "activity": "Nghe bài nói mẫu, ghi cụm câu chức năng (Speaking file)",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "Phát âm trọng tâm của buổi",
       "category": "lang"
      },
      {
       "minutes": 40,
       "activity": "Luyện part Nói PET theo cặp, đổi vai, đổi bạn",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Nói trước lớp, giáo viên chấm theo thang Nói PET",
       "category": "test"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá, giao bài ghi âm",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Speaking file SB tr. 148–149; Photocopiable 3C (nói)",
     "assessment": "—"
    },
    {
     "session_id": "BO-24",
     "session_no": 24,
     "week": 12,
     "hp": "HP2",
     "unit": "U3",
     "unit_title": "The future is now",
     "type": "Writing",
     "kind": "Unit – Writing",
     "sb_pages": "40–41, 150–151",
     "wb_pages": "28",
     "focus": "U3 The future is now · Writing",
     "task": "Email trả lời bạn về 'National Unplugged Day': đưa lời khuyên và gợi ý",
     "content": "Lập dàn ý → viết nháp trên lớp → tự soát theo mục Improve it",
     "ket_part": "[W1] email ~100 từ theo 4 ghi chú — phân tích đề, gạch ý bắt buộc, viết 20–25 phút",
     "ket_codes": [
      "W1"
     ],
     "subskills": [
      "WS1",
      "WS4",
      "WS6"
     ],
     "grammar": "—",
     "vocabulary": "National Unplugged Day, gadget, give up, device, challenge, games console, music player, You should / ought to / could …, Why don't you …?, How about …?, Sorry to hear …, I'm glad you're feeling OK now, Good luck",
     "can_do": "email ~100 từ, đủ 4 ý trong ghi chú, ≤ 3 lỗi, thang PET ≥ 3/5 mỗi tiêu chí",
     "before": "1. [Viết] Đọc bài mẫu SB tr. 40–41 và Writing file SB tr. 150–151: bấm chọn câu mở bài, 3 từ nối, câu kết (6')\n2. [Từ vựng] Cụm câu cho bài viết (nghe – nhắc lại – điền câu): National Unplugged Day, gadget, give up, device, challenge, games console, music player, Good luck (6')\n3. [Viết] Lập dàn ý cho đề bài trên sơ đồ (ý chính mỗi đoạn) (6')\n4. [Nghe] Nghe – đọc bài mẫu (giọng Gemini) 2 lần (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'The future is now' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'App entrepreneurs') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Viết] Viết lại bài theo nhận xét trên lớp, tự soát 4 mục (đủ ý, chia đoạn, từ nối, chính tả) (15')\n2. [Viết] Workbook tr. 28 Writing (8')\n3. [Viết] Nâng câu: viết lại 3 câu đơn trong bài thành câu phức (5')\n4. [Nói] Đọc to bài viết của mình và ghi âm (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'The future is now' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'App entrepreneurs') (12')\n6. [Ôn] Quiz nhớ lại 8 câu: từ nối và cụm câu bài viết (4')\n7. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U3 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 31,
     "after_min": 54,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Sửa lỗi chung từ bài nói và bài tập về nhà",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Phân tích đề và bài mẫu (Writing file)",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "Cụm câu, từ nối, câu phức cho dạng bài",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Lập dàn ý theo cặp",
       "category": "output"
      },
      {
       "minutes": 25,
       "activity": "Viết nháp có bấm giờ",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Tự soát theo Improve it, chấm chéo theo thang PET",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tổng kết, giao bài viết lại",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Writing file SB tr. 150–151 (bài mẫu, cụm câu); thang chấm PET: Content, Communicative achievement, Organisation, Language (0–5)",
     "assessment": "—"
    },
    {
     "session_id": "BO-25",
     "session_no": 25,
     "week": 13,
     "hp": "HP2",
     "unit": "U3",
     "unit_title": "The future is now",
     "type": "Project & Check",
     "kind": "Unit – Ôn tập + Dự án",
     "sb_pages": "42–44, 131",
     "wb_pages": "29–31",
     "focus": "U3 The future is now · Ôn tập và Dự án",
     "task": "Video 'App entrepreneurs'; dự án: Thiết kế một ứng dụng (tên, chức năng, người dùng), trình bày nhóm; Independent learning; Unit check",
     "content": "Ôn từ vựng và ngữ pháp U3 · Independent learning: Measure your progress: đo tiến bộ của bản thân",
     "ket_part": "[S4] thảo luận sau video · trình bày dự án nhóm 2–3 phút, mỗi thành viên nói ≥ 4 câu · [R6] 10 phút điền từ tự do (Part 6) theo ngữ pháp của unit",
     "ket_codes": [
      "S4",
      "R6"
     ],
     "subskills": [
      "RS8",
      "SS4",
      "VS1"
     ],
     "grammar": "B06 Các cách diễn đạt tương lai: will, going to, hiện tại tiếp diễn, hiện tại đơn; B07 Khuyết thiếu cho lời khuyên, gợi ý: should, could, ought to, Why don't you…?",
     "vocabulary": "entrepreneur, invent, pitch, technology, coding, mentor, healthy eating, digital badges, futuristic, multiplayer games, logo, design an app, tap, battery, machine, electricity, ringtone, mobile shop, link",
     "can_do": "Unit check ≥ 70%; Language test ≥ 70%; mỗi học sinh nói ≥ 4 câu khi trình bày dự án",
     "before": "1. [Dự án] Chuẩn bị phần dự án của mình: Thiết kế một ứng dụng (tên, chức năng, người dùng), trình bày nhóm (tìm thông tin, viết 4–5 câu sẽ nói) (12')\n2. [Nghe] Xem video Switch on 'App entrepreneurs' (SB tr. 42) có phụ đề, trả lời 3 câu hỏi (6')\n3. [Nói] Ghi âm phần trình bày dự án của mình 1 phút để tập (4')\n4. [Ôn] Quiz trộn 20 câu từ vựng + ngữ pháp U3 (6')\n5. [Lồng tiếng] 1 đoạn video Switch on 'App entrepreneurs' (20–40 giây) (6')",
     "after": "1. [Ôn] Workbook tr. 29 Unit check (8')\n2. [Ôn] Language Test A U3 trên website (Assessment package) (25')\n3. [Tự học] Independent learning SB tr. 42: phiếu tự đánh giá + ghi âm 1 phút 'Unit 3: em làm tốt… em cần…' (4')\n4. [Từ vựng] Từ vựng chủ đề PET tự học: 'Clothes' – Wordwall 15 từ (6')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'The future is now' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'App entrepreneurs') (6')\n6. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U3 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 34,
     "after_min": 55,
     "in_class": [
      {
       "minutes": 15,
       "activity": "Ôn từ vựng và ngữ pháp của unit qua trò chơi",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Video Switch on + thảo luận",
       "category": "input"
      },
      {
       "minutes": 35,
       "activity": "Dự án nhóm: hoàn thiện và trình bày, đánh giá chéo",
       "category": "output"
      },
      {
       "minutes": 30,
       "activity": "Unit check",
       "category": "test"
      },
      {
       "minutes": 10,
       "activity": "Independent learning, giao bài",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Sức khỏe số, cân bằng thời gian màn hình, tinh thần khởi nghiệp (SDG 9) · Phân bổ 105': video + thảo luận 20', trình bày dự án 30', Part 6 mini 10', Unit check 25', Skills Test A 20'",
     "materials": "Video U3 (videoscript TB tr. 147–148); Grammar file SB tr. 131 (bài luyện); Unit test B1 U3: Skills Test A tại lớp 20' (Assessment package); Language Test A làm trên website",
     "assessment": "—"
    },
    {
     "session_id": "BO-26",
     "session_no": 26,
     "week": 13,
     "hp": "HP2",
     "unit": "Sự kiện",
     "unit_title": "Công dân toàn cầu",
     "type": "Sự kiện",
     "kind": "Sự kiện kỹ năng",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Sự kiện E4 · IVY App Pitch",
     "task": "—",
     "content": "Công nghệ, tương lai; will/going to, lời khuyên",
     "ket_part": "[S3] nhóm thống nhất ý tưởng ứng dụng · [S2] pitch 2 phút · [S4] trả lời câu hỏi ban giám khảo",
     "ket_codes": [
      "S2",
      "S3",
      "S4"
     ],
     "subskills": [
      "SS2",
      "SS3",
      "SS4"
     ],
     "grammar": "B06 Các cách diễn đạt tương lai: will, going to, hiện tại tiếp diễn, hiện tại đơn; B07 Khuyết thiếu cho lời khuyên, gợi ý: should, could, ought to, Why don't you…?",
     "vocabulary": "Dùng lại từ vựng của unit vừa học (xem cột này ở các buổi trước)",
     "can_do": "Mỗi nhóm pitch 1 ứng dụng giảm thời gian màn hình; mỗi thành viên nói ≥ 4 câu, trả lời ≥ 1 câu hỏi",
     "before": "1. [Dự án] Chuẩn bị phần việc của mình cho sự kiện 'IVY App Pitch' (nội dung, đồ dùng, vai) (15')\n2. [Nói] Viết và ghi âm phần nói của mình 1–2 phút, nghe lại và sửa (8')\n3. [Từ vựng] Ôn từ vựng và cấu trúc cần dùng: Công nghệ, tương lai; will/going to, lời khuyên (6')\n4. [Lồng tiếng] clip chủ đề sự kiện (6')",
     "after": "1. [Tự học] Tự đánh giá theo rubric 4 tiêu chí (3')\n2. [Viết] Viết phản tư ~80 từ về sự kiện (15')\n3. [Nói] Xem video sự kiện của nhóm, ghi âm nhận xét 1 phút (1 điểm tốt, 1 điểm cần cải thiện) (5')\n4. [Nghe] Nghe phần trình bày của 1 nhóm khác, trả lời 3 câu hỏi (6')\n5. [Từ vựng] Ôn thẻ đến hạn (4')\n6. [Lồng tiếng] 2 clip (12')\n7. [Ôn] Quiz trộn 10 câu unit vừa học (5')\n8. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 35,
     "after_min": 56,
     "in_class": [
      {
       "minutes": 20,
       "activity": "Chuẩn bị ngôn ngữ cho sản phẩm",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Thực hiện sản phẩm trước khán giả",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Phản hồi theo rubric",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá năng lực",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Sức khỏe số và tinh thần khởi nghiệp (SDG 9)",
     "materials": "Rubric 4 tiêu chí: ngôn ngữ, nội dung, hợp tác, trình bày",
     "assessment": "—"
    },
    {
     "session_id": "BO-27",
     "session_no": 27,
     "week": 14,
     "hp": "HP2",
     "unit": "U4",
     "unit_title": "Taking part",
     "type": "Reading",
     "kind": "Unit – Reading + Grammar",
     "sb_pages": "45–48, 132",
     "wb_pages": "32–34",
     "focus": "U4 Taking part · Lead-in + Reading + Grammar 1",
     "task": "Đọc về các môn thể thao lạ (bossaball, đua giường), tìm cụm từ đồng nghĩa để nối 5 người với 8 hoạt động",
     "content": "Ngữ pháp: Hiện tại hoàn thành với ever, never, already, yet, just, for, since; quá khứ phân từ · Kỹ năng đọc: identifying phrases with similar meanings · Bổ sung B28: can / could / be able to (I've been able to… since…; I couldn't swim when I was five)",
     "ket_part": "[R2] nối 5 người với 8 văn bản — kỹ năng identifying phrases with similar meanings; gạch từ khóa, tìm cách diễn đạt khác trong bài · [RS6] đoán nghĩa từ mới qua ngữ cảnh (loại từ, từ xung quanh, ví dụ trong câu) trước khi tra từ",
     "ket_codes": [
      "R2"
     ],
     "subskills": [
      "RS3",
      "RS6"
     ],
     "grammar": "B08 Hiện tại hoàn thành với ever/never/already/yet/just/for/since; B28 can / could / be able to chỉ khả năng làm được",
     "vocabulary": "equipment, goggles, helmet, net, racket, trainers, wetsuit, sack, spoon, tough, take place, keep going, take part, take something seriously, float, inflatable, court, have a go, attempt, opponents, forehand, backhand, teammates, egg-and-spoon race, sack race",
     "can_do": "≥ 4/5 câu nối Part 2; viết 6 câu dùng điểm ngữ pháp B08, ≥ 5 câu đúng; dùng đúng B28 trong ≥ 4/5 câu",
     "before": "1. [Từ vựng] Chuỗi 5 bước nhớ từ của bài đọc (nghe–nhắc lại → ghép hình → nghe chọn → nghe gõ → điền câu từ bài đọc): equipment, goggles, helmet, net, racket, trainers, wetsuit, sack, spoon, tough, take place, keep going (10')\n2. [Nói] Lead-in SB tr. 45: xem ảnh mở bài, ghi âm 30–45 giây trả lời câu hỏi mở bài (4')\n3. [Nghe] Nghe – đọc đoạn đầu bài đọc SB tr. 46 (audio gốc), trả lời 2 câu dự đoán ý chính (5')\n4. [Ngữ pháp] Video ngắn: Hiện tại hoàn thành với ever, never, already, yet, just, for, since; quá khứ phân từ (theo Grammar file SB tr. 132, Grammar ppt U4) + 5 câu kiểm tra hiểu (7')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Taking part' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Top spin') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (unit trước) (3')",
     "after": "1. [Ôn] Quiz nhớ lại 10 câu: từ bài đọc + điểm ngữ pháp vừa học, không mở sách (5')\n2. [Đọc] Workbook tr. 32–33 Reading (số hóa, chấm tự động; dạng R2) (10')\n3. [Ngữ pháp] Workbook tr. 34 Grammar (6')\n4. [Ngữ pháp] Grammar file SB tr. 133: 1–2 bài luyện phần Hiện tại hoàn thành với ever, never, already, yet, just, for, since (5')\n5. [Nghe] Chép chính tả 4 câu từ audio bài đọc SB tr. 46–47 (5')\n6. [Nói] Shadowing 5 câu của bài đọc (audio gốc, ghi âm, nhận dạng giọng nói đánh dấu từ chưa rõ) (5')\n7. [Nói] Ghi âm 1 phút nói lại nội dung bài đọc, dùng ít nhất 3 từ mới và điểm ngữ pháp vừa học (3')\n8. [Lồng tiếng] clip 20–40 giây chủ đề 'Taking part' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Top spin') (12')\n9. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U4 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 35,
     "after_min": 57,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Khởi động: kiểm tra nhanh từ vựng đã học trước ở nhà (gói PRE)",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Lead-in: thảo luận ảnh và câu hỏi mở bài",
       "category": "fluency"
      },
      {
       "minutes": 30,
       "activity": "Reading: đọc lướt lấy ý chính → làm dạng bài PET → chữa bằng câu chứa đáp án",
       "category": "input"
      },
      {
       "minutes": 25,
       "activity": "Grammar 1: tìm quy tắc trong bài đọc → luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Dùng ngữ pháp mới để nói và viết về bản thân",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Tổng kết, giới thiệu gói POST-LESSON",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Grammar file SB tr. 132 (lý thuyết); Grammar ppt B1 U4; Photocopiable 4A (ngữ pháp); Bài bổ sung ngữ pháp do IVY soạn (không có trong GE B1 2nd ed)",
     "assessment": "—"
    },
    {
     "session_id": "BO-28",
     "session_no": 28,
     "week": 14,
     "hp": "HP2",
     "unit": "U4",
     "unit_title": "Taking part",
     "type": "Listening",
     "kind": "Unit – Vocabulary + Listening",
     "sb_pages": "49–50, 144, 170–171",
     "wb_pages": "35–36",
     "focus": "U4 Taking part · Vocabulary + Listening + Grammar 2",
     "task": "Nghe phỏng vấn một bạn gái không giỏi thể thao; nghe đúng câu hỏi để chọn đáp án",
     "content": "Từ vựng: Thể thao: race, locker, prize, track, court, changing rooms, coach · hit, score, compete, train, beat · từ vừa là danh từ vừa là động từ (score, kick, race) · Ngữ pháp 2: Quá khứ đơn và hiện tại hoàn thành · Cấu tạo từ: danh từ – động từ cùng dạng (score, race); hậu tố -er/-or, -ment, -tion",
     "ket_part": "[R5] điền từ trắc nghiệm (từ vựng, collocation) · [R6] điền từ tự do (từ chức năng) · [L4] phỏng vấn dài, 6 câu trắc nghiệm — đọc câu hỏi trước khi nghe, dự đoán đáp án, nghe lần 2 để kiểm tra · [LS7] chép chính tả 3–4 câu từ lời thoại, chú ý âm nối, âm yếu, dạng rút gọn",
     "ket_codes": [
      "R5",
      "R6",
      "L4"
     ],
     "subskills": [
      "LS4",
      "LS5",
      "LS7",
      "RS7",
      "RS8",
      "VS1",
      "VS2",
      "VS3"
     ],
     "grammar": "B09 Quá khứ đơn và hiện tại hoàn thành",
     "vocabulary": "race, locker, prize, track, match, court, changing rooms, coach, hit, win, score, lose, kick, compete, train, beat, fans, disappointed, result, competition, distance, open air, freerunning, marathon",
     "can_do": "≥ 4/6 câu Part 5; ≥ 4/6 chỗ trống Part 6; ≥ 4/6 câu Part 4; dùng đúng B09 trong ≥ 5/6 câu; chuyển đúng dạng từ ≥ 8/10 câu",
     "before": "1. [Từ vựng] Chuỗi 5 bước nhớ từ của bài Vocabulary SB tr. 49: race, locker, prize, track, match, court, changing rooms, coach, hit, win, score, lose, kick, compete (10')\n2. [Nghe] Nghe mồi 30–60 giây đầu bài nghe SB tr. 50 (audio gốc), dự đoán 2 câu (4')\n3. [Ngữ pháp] Video ngắn: Quá khứ đơn và hiện tại hoàn thành + 5 câu kiểm tra hiểu (6')\n4. [Từ vựng] Extend vocabulary SB tr. 144 (phần U4): ghép 8 từ mở rộng với hình/nghĩa (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Taking part' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Top spin') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Ôn] Quiz nhớ lại 10 câu: từ vựng + ngữ pháp 2, không mở sách (5')\n2. [Từ vựng] Workbook tr. 35 Vocabulary (6')\n3. [Nghe] Workbook tr. 36 Listening (audio Workbook) (8')\n4. [Nghe] Nghe lại bài nghe SB tr. 50 có lời thoại theo câu + 1 part nghe PET rút gọn dạng L4 (8')\n5. [Nghe] Chép chính tả 4 câu từ bài nghe SB tr. 50, ưu tiên âm yếu, âm nối (5')\n6. [Nói] Shadowing 5 câu của bài nghe (5')\n7. [Lồng tiếng] clip 20–40 giây chủ đề 'Taking part' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Top spin') (12')\n8. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U4 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 33,
     "after_min": 55,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng nhanh",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Vocabulary SB + Extend vocabulary",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Listening PET: dự đoán → nghe lần 1 → nghe lần 2 kiểm tra → đọc audioscript",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Grammar 2: giới thiệu và luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Nói theo cặp dùng từ và ngữ pháp mới",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Chép chính tả 3 câu từ bài nghe, giao bài",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Extend vocabulary SB tr. 144; Photocopiable 4B (từ vựng), 4C; audioscript SB tr. 170–171 (chữa bài nghe); Dictation trong Skills Test của unit (Assessment package)",
     "assessment": "—"
    },
    {
     "session_id": "BO-29",
     "session_no": 29,
     "week": 15,
     "hp": "HP2",
     "unit": "U4",
     "unit_title": "Taking part",
     "type": "Speaking",
     "kind": "Unit – Speaking",
     "sb_pages": "51, 147, 157, 159",
     "wb_pages": "37",
     "focus": "U4 Taking part · Speaking",
     "task": "Tả ảnh xem và chơi thể thao; nói khi không chắc (I can't remember what this is…)",
     "content": "Cụm câu chức năng của bài nói; dùng lại ngữ pháp B08, B09 và từ vựng U4 khi nói",
     "ket_part": "[S2] tả ảnh 1 phút — luyện theo cặp, đổi vai; giáo viên chấm mẫu theo thang Nói PET: Grammar & Vocabulary, Discourse management, Pronunciation, Interactive communication (0–5) · [SS7] phát âm 15 phút: âm yếu have/has /həv/ /həz/ trong hiện tại hoàn thành; âm cuối -s/-es",
     "ket_codes": [
      "S2"
     ],
     "subskills": [
      "SS2",
      "SS7"
     ],
     "grammar": "B08 Hiện tại hoàn thành với ever/never/already/yet/just/for/since; B09 Quá khứ đơn và hiện tại hoàn thành",
     "vocabulary": "point, watch, sit, cheer, laugh, happy, excited, upset, sad, interested, angry, surprised, sofa, popcorn, sitting room, It's a photo of …, The photo shows …, On the left, there's …, at the front, It looks …, I can't remember what this is",
     "can_do": "tả ảnh liên tục 1 phút, ≥ 8 câu, dùng ≥ 3 cụm chỉ vị trí hoặc suy đoán; đọc đúng ≥ 8/10 câu mẫu phát âm",
     "before": "1. [Nói] Học cụm câu chức năng (nghe – nhắc lại – ghi âm) theo Speaking file SB tr. 147: point, watch, sit, cheer, laugh, happy, excited, upset (8')\n2. [Nói] Đọc câu hỏi bài nói SB tr. 51, ghi âm câu trả lời nháp 1 phút (5')\n3. [Nghe] Nghe câu trả lời mẫu (giọng Gemini) rồi đánh dấu 3 cụm câu muốn dùng (5')\n4. [Từ vựng] Ôn nhanh từ vựng U4 cần cho bài nói (quiz 10 câu) (5')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Taking part' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Top spin') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Nói] Workbook tr. 37 Speaking (số hóa; ghi âm các đoạn hội thoại trong trang) (7')\n2. [Nói] Ghi âm lại bài nói hoàn chỉnh 1–2 phút theo dạng S2 sau góp ý trên lớp (6')\n3. [Phát âm] Luyện 10 câu: âm yếu have/has /həv/ /həz/ trong hiện tại hoàn thành; âm cuối -s/-es (6')\n4. [Nói] Shadowing câu trả lời mẫu (5')\n5. [Ôn] Quiz cụm câu chức năng (nghe chọn cụm phù hợp tình huống) (4')\n6. [Lồng tiếng] clip 20–40 giây chủ đề 'Taking part' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Top spin') (12')\n7. [Từ vựng] Ôn thẻ từ đến hạn (3')\n8. [Nghe] Nghe bài nói của 2 bạn trong lớp (giáo viên chọn), chấm theo 2 tiêu chí (4')\n9. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U4 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 32,
     "after_min": 53,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Khởi động nói nhanh 4-3-2",
       "category": "fluency"
      },
      {
       "minutes": 15,
       "activity": "Nghe bài nói mẫu, ghi cụm câu chức năng (Speaking file)",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "Phát âm trọng tâm của buổi",
       "category": "lang"
      },
      {
       "minutes": 40,
       "activity": "Luyện part Nói PET theo cặp, đổi vai, đổi bạn",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Nói trước lớp, giáo viên chấm theo thang Nói PET",
       "category": "test"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá, giao bài ghi âm",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Speaking file SB tr. 147; SB tr. 157, 159 (task tả ảnh)",
     "assessment": "—"
    },
    {
     "session_id": "BO-30",
     "session_no": 30,
     "week": 15,
     "hp": "HP2",
     "unit": "U4",
     "unit_title": "Taking part",
     "type": "Writing",
     "kind": "Unit – Writing",
     "sb_pages": "52–53, 152–153",
     "wb_pages": "38",
     "focus": "U4 Taking part · Writing",
     "task": "Bài báo về một môn thể thao mới đã thử: nối ý với either…or, as soon as, except, so that, although",
     "content": "Lập dàn ý → viết nháp trên lớp → tự soát theo mục Improve it · Bổ sung B27: so sánh hơn/nhất, (not) as…as, too/enough (to), so/such khi so sánh môn thể thao mới với môn quen thuộc",
     "ket_part": "[W2] bài báo hoặc truyện ~100 từ — phân tích đề, gạch ý bắt buộc, viết 20–25 phút",
     "ket_codes": [
      "W2"
     ],
     "subskills": [
      "WS2",
      "WS4",
      "WS6"
     ],
     "grammar": "B22 Từ nối: although, so that, either…or, as soon as, because, so; B27 So sánh hơn, so sánh nhất, (not) as…as; too/enough (to); so/such",
     "vocabulary": "sports equipment, article, either … or, as soon as, except, so that, although, because",
     "can_do": "bài ~100 từ có mở – thân – kết, ≥ 3 từ nối, ≤ 3 lỗi, thang PET ≥ 3/5 mỗi tiêu chí; dùng đúng B27 trong ≥ 4/5 câu",
     "before": "1. [Viết] Đọc bài mẫu SB tr. 52–53 và Writing file SB tr. 152–153: bấm chọn câu mở bài, 3 từ nối, câu kết (6')\n2. [Từ vựng] Cụm câu cho bài viết (nghe – nhắc lại – điền câu): sports equipment, article, as soon as, except, so that, although, because (6')\n3. [Viết] Lập dàn ý cho đề bài trên sơ đồ (ý chính mỗi đoạn) (6')\n4. [Nghe] Nghe – đọc bài mẫu (giọng Gemini) 2 lần (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Taking part' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Top spin') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Viết] Viết lại bài theo nhận xét trên lớp, tự soát 4 mục (đủ ý, chia đoạn, từ nối, chính tả) (15')\n2. [Viết] Workbook tr. 38 Writing (8')\n3. [Viết] Nâng câu: viết lại 3 câu đơn trong bài thành câu phức (5')\n4. [Nói] Đọc to bài viết của mình và ghi âm (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Taking part' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Top spin') (12')\n6. [Ôn] Quiz nhớ lại 8 câu: từ nối và cụm câu bài viết (4')\n7. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U4 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 31,
     "after_min": 54,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Sửa lỗi chung từ bài nói và bài tập về nhà",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Phân tích đề và bài mẫu (Writing file)",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "Cụm câu, từ nối, câu phức cho dạng bài",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Lập dàn ý theo cặp",
       "category": "output"
      },
      {
       "minutes": 25,
       "activity": "Viết nháp có bấm giờ",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Tự soát theo Improve it, chấm chéo theo thang PET",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tổng kết, giao bài viết lại",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Writing file SB tr. 152–153 (bài mẫu, cụm câu); thang chấm PET: Content, Communicative achievement, Organisation, Language (0–5); Bài bổ sung ngữ pháp do IVY soạn (không có trong GE B1 2nd ed)",
     "assessment": "—"
    },
    {
     "session_id": "BO-31",
     "session_no": 31,
     "week": 16,
     "hp": "HP2",
     "unit": "U4",
     "unit_title": "Taking part",
     "type": "Project & Check",
     "kind": "Unit – Ôn tập + Dự án",
     "sb_pages": "54–56, 133",
     "wb_pages": "39",
     "focus": "U4 Taking part · Ôn tập và Dự án",
     "task": "Video 'Top spin'; dự án: Lên kế hoạch chiến dịch vận động thanh thiếu niên năng động, chia vai nhóm, bình chọn; Independent learning; Unit check",
     "content": "Ôn từ vựng và ngữ pháp U4 · Independent learning: Grammar and vocabulary: ôn và ghi chép ngôn ngữ của unit",
     "ket_part": "[S4] thảo luận sau video · trình bày dự án nhóm 2–3 phút, mỗi thành viên nói ≥ 4 câu · [R6] 10 phút điền từ tự do (Part 6) theo ngữ pháp của unit",
     "ket_codes": [
      "S4",
      "R6"
     ],
     "subskills": [
      "RS8",
      "SS4",
      "VS1"
     ],
     "grammar": "B08 Hiện tại hoàn thành với ever/never/already/yet/just/for/since; B09 Quá khứ đơn và hiện tại hoàn thành",
     "vocabulary": "individual, lonely, unusual, unique, sacrifice, quit, dedication, mental toughness, talent, supportive, record, practise, mud running",
     "can_do": "Unit check ≥ 70%; Language test ≥ 70%; mỗi học sinh nói ≥ 4 câu khi trình bày dự án",
     "before": "1. [Dự án] Chuẩn bị phần dự án của mình: Lên kế hoạch chiến dịch vận động thanh thiếu niên năng động, chia vai nhóm, bình chọn (tìm thông tin, viết 4–5 câu sẽ nói) (12')\n2. [Nghe] Xem video Switch on 'Top spin' (SB tr. 54) có phụ đề, trả lời 3 câu hỏi (6')\n3. [Nói] Ghi âm phần trình bày dự án của mình 1 phút để tập (4')\n4. [Ôn] Quiz trộn 20 câu từ vựng + ngữ pháp U4 (6')\n5. [Lồng tiếng] 1 đoạn video Switch on 'Top spin' (20–40 giây) (6')",
     "after": "1. [Ôn] Workbook tr. 39 Unit check (8')\n2. [Ôn] Language Test A U4 trên website (Assessment package) (25')\n3. [Tự học] Independent learning SB tr. 54: phiếu tự đánh giá + ghi âm 1 phút 'Unit 4: em làm tốt… em cần…' (4')\n4. [Từ vựng] Từ vựng chủ đề PET tự học: 'Shopping' – Wordwall 15 từ (6')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Taking part' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Top spin') (6')\n6. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U4 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 34,
     "after_min": 55,
     "in_class": [
      {
       "minutes": 15,
       "activity": "Ôn từ vựng và ngữ pháp của unit qua trò chơi",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Video Switch on + thảo luận",
       "category": "input"
      },
      {
       "minutes": 35,
       "activity": "Dự án nhóm: hoàn thiện và trình bày, đánh giá chéo",
       "category": "output"
      },
      {
       "minutes": 30,
       "activity": "Unit check",
       "category": "test"
      },
      {
       "minutes": 10,
       "activity": "Independent learning, giao bài",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Lối sống năng động, sức khỏe thể chất, sự kiên trì (SDG 3) · Phân bổ 105': video + thảo luận 20', trình bày dự án 30', Part 6 mini 10', Unit check 25', Skills Test A 20'",
     "materials": "Video U4 (videoscript TB tr. 148); Grammar file SB tr. 133 (bài luyện); Unit test B1 U4: Skills Test A tại lớp 20' (Assessment package); Language Test A làm trên website",
     "assessment": "—"
    },
    {
     "session_id": "BO-32",
     "session_no": 32,
     "week": 16,
     "hp": "HP2",
     "unit": "Sự kiện",
     "unit_title": "Công dân toàn cầu",
     "type": "Sự kiện",
     "kind": "Sự kiện kỹ năng",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Sự kiện E5 · Active Teens Campaign",
     "task": "—",
     "content": "Thể thao; hiện tại hoàn thành",
     "ket_part": "[R2] đọc 8 câu lạc bộ thể thao và chọn cho 5 bạn · [S3] thống nhất chiến dịch · [W2] bài báo kêu gọi ~100 từ",
     "ket_codes": [
      "R2",
      "S3",
      "W2"
     ],
     "subskills": [
      "RS3",
      "SS3",
      "WS2",
      "WS4"
     ],
     "grammar": "B08 Hiện tại hoàn thành với ever/never/already/yet/just/for/since; B09 Quá khứ đơn và hiện tại hoàn thành",
     "vocabulary": "Dùng lại từ vựng của unit vừa học (xem cột này ở các buổi trước)",
     "can_do": "Mỗi nhóm thiết kế chiến dịch 1 tuần vận động và báo cáo kết quả bằng tiếng Anh",
     "before": "1. [Dự án] Chuẩn bị phần việc của mình cho sự kiện 'Active Teens Campaign' (nội dung, đồ dùng, vai) (15')\n2. [Nói] Viết và ghi âm phần nói của mình 1–2 phút, nghe lại và sửa (8')\n3. [Từ vựng] Ôn từ vựng và cấu trúc cần dùng: Thể thao; hiện tại hoàn thành (6')\n4. [Lồng tiếng] clip chủ đề sự kiện (6')",
     "after": "1. [Tự học] Tự đánh giá theo rubric 4 tiêu chí (3')\n2. [Viết] Bài viết sau sự kiện (dạng W2) ~100 từ (15')\n3. [Nói] Xem video sự kiện của nhóm, ghi âm nhận xét 1 phút (1 điểm tốt, 1 điểm cần cải thiện) (5')\n4. [Nghe] Nghe phần trình bày của 1 nhóm khác, trả lời 3 câu hỏi (6')\n5. [Từ vựng] Ôn thẻ đến hạn (4')\n6. [Lồng tiếng] 2 clip (12')\n7. [Ôn] Quiz trộn 10 câu unit vừa học (5')\n8. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 35,
     "after_min": 56,
     "in_class": [
      {
       "minutes": 20,
       "activity": "Chuẩn bị ngôn ngữ cho sản phẩm",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Thực hiện sản phẩm trước khán giả",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Phản hồi theo rubric",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá năng lực",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Lối sống năng động (SDG 3)",
     "materials": "Rubric 4 tiêu chí: ngôn ngữ, nội dung, hợp tác, trình bày",
     "assessment": "—"
    },
    {
     "session_id": "BO-33",
     "session_no": 33,
     "week": 17,
     "hp": "HP2",
     "unit": "U5",
     "unit_title": "In the spotlight",
     "type": "Reading",
     "kind": "Unit – Reading + Grammar",
     "sb_pages": "57–60, 134",
     "wb_pages": "40–42",
     "focus": "U5 In the spotlight · Lead-in + Reading + Grammar 1",
     "task": "Đọc biển báo, thông báo và bài 'lớn lên dưới ánh đèn sân khấu' (gia đình Beckham, Willow Smith); hiểu điều câu hỏi đang kiểm tra",
     "content": "Ngữ pháp: Câu điều kiện loại 0, 1, 2 · Kỹ năng đọc: understanding what is being tested",
     "ket_part": "[R1] 5 văn bản ngắn (biển báo, tin nhắn), chọn ý đúng · [R3] bài dài, 5 câu trắc nghiệm — kỹ năng understanding what is being tested; gạch từ khóa, tìm cách diễn đạt khác trong bài · [RS4] nhận ra thái độ, ý kiến người viết: tìm tính từ, trạng từ đánh giá (surprisingly, unfortunately), phân biệt sự thật và ý kiến",
     "ket_codes": [
      "R1",
      "R3"
     ],
     "subskills": [
      "RS1",
      "RS2",
      "RS4"
     ],
     "grammar": "B10 Câu điều kiện loại 0, 1, 2",
     "vocabulary": "in the spotlight, leave someone alone, explore who you are, face, hurtful comments, end up with, have the right to, under a lot of stress, negative attention, the last thing I need, turn its back on, due to, location, follower, spare tickets, fancy coming along, contacts, connections, journalists",
     "can_do": "≥ 4/5 câu Part 1; ≥ 4/5 câu Part 3; viết 6 câu dùng điểm ngữ pháp B10, ≥ 5 câu đúng; trả lời đúng ≥ 2/2 câu hỏi về thái độ người viết",
     "before": "1. [Từ vựng] Chuỗi 5 bước nhớ từ của bài đọc (nghe–nhắc lại → ghép hình → nghe chọn → nghe gõ → điền câu từ bài đọc): in the spotlight, leave someone alone, explore who you are, face, hurtful comments, end up with, have the right to, negative attention, turn its back on, due to, location, follower (10')\n2. [Nói] Lead-in SB tr. 57: xem ảnh mở bài, ghi âm 30–45 giây trả lời câu hỏi mở bài (4')\n3. [Nghe] Nghe – đọc đoạn đầu bài đọc SB tr. 58 (audio gốc), trả lời 2 câu dự đoán ý chính (5')\n4. [Ngữ pháp] Video ngắn: Câu điều kiện loại 0, 1, 2 (theo Grammar file SB tr. 134, Grammar ppt U5) + 5 câu kiểm tra hiểu (7')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'In the spotlight' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'In search of fame') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (unit trước) (3')",
     "after": "1. [Ôn] Quiz nhớ lại 10 câu: từ bài đọc + điểm ngữ pháp vừa học, không mở sách (5')\n2. [Đọc] Workbook tr. 40–41 Reading (số hóa, chấm tự động; dạng R1, R3) (10')\n3. [Ngữ pháp] Workbook tr. 42 Grammar (6')\n4. [Ngữ pháp] Grammar file SB tr. 135: 1–2 bài luyện phần Câu điều kiện loại 0, 1, 2 (5')\n5. [Nghe] Chép chính tả 4 câu từ audio bài đọc SB tr. 58–59 (5')\n6. [Nói] Shadowing 5 câu của bài đọc (audio gốc, ghi âm, nhận dạng giọng nói đánh dấu từ chưa rõ) (5')\n7. [Nói] Ghi âm 1 phút nói lại nội dung bài đọc, dùng ít nhất 3 từ mới và điểm ngữ pháp vừa học (3')\n8. [Lồng tiếng] clip 20–40 giây chủ đề 'In the spotlight' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'In search of fame') (12')\n9. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U5 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 35,
     "after_min": 57,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Khởi động: kiểm tra nhanh từ vựng đã học trước ở nhà (gói PRE)",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Lead-in: thảo luận ảnh và câu hỏi mở bài",
       "category": "fluency"
      },
      {
       "minutes": 30,
       "activity": "Reading: đọc lướt lấy ý chính → làm dạng bài PET → chữa bằng câu chứa đáp án",
       "category": "input"
      },
      {
       "minutes": 25,
       "activity": "Grammar 1: tìm quy tắc trong bài đọc → luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Dùng ngữ pháp mới để nói và viết về bản thân",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Tổng kết, giới thiệu gói POST-LESSON",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Grammar file SB tr. 134 (lý thuyết); Grammar ppt B1 U5; Photocopiable 5A (ngữ pháp)",
     "assessment": "—"
    },
    {
     "session_id": "BO-34",
     "session_no": 34,
     "week": 17,
     "hp": "HP2",
     "unit": "U5",
     "unit_title": "In the spotlight",
     "type": "Listening",
     "kind": "Unit – Vocabulary + Listening",
     "sb_pages": "61–62, 144, 171–172",
     "wb_pages": "43–44",
     "focus": "U5 In the spotlight · Vocabulary + Listening + Grammar 2",
     "task": "Nghe các đoạn ngắn về âm nhạc, nhận ra hai người đồng ý ở điểm nào",
     "content": "Từ vựng: Giải trí: review, entertain, perform, clap, record, book · nhà hát: choir, stage, costume, orchestra, audience, row · Ngữ pháp 2: unless, in case, if I were you",
     "ket_part": "[R5] điền từ trắc nghiệm (từ vựng, collocation) · [L2] 6 hội thoại ngắn, ý kiến/thái độ — đọc câu hỏi trước khi nghe, dự đoán đáp án, nghe lần 2 để kiểm tra",
     "ket_codes": [
      "R5",
      "L2"
     ],
     "subskills": [
      "LS2",
      "LS5",
      "RS7",
      "VS1",
      "VS3"
     ],
     "grammar": "B11 unless, in case, if I were you",
     "vocabulary": "review, entertain, perform, clap, film, interview, record, book, choir, exit, stage, costume, orchestra, audience, row, album, show, concert hall, headphones, talent show, instrument, unless, in case, if I were you",
     "can_do": "≥ 4/6 câu Part 5; ≥ 4/6 câu Part 2; dùng đúng B11 trong ≥ 5/6 câu",
     "before": "1. [Từ vựng] Chuỗi 5 bước nhớ từ của bài Vocabulary SB tr. 61: review, entertain, perform, clap, film, interview, record, book, choir, exit, stage, costume, orchestra, audience (10')\n2. [Nghe] Nghe mồi 30–60 giây đầu bài nghe SB tr. 62 (audio gốc), dự đoán 2 câu (4')\n3. [Ngữ pháp] Video ngắn: unless, in case, if I were you + 5 câu kiểm tra hiểu (6')\n4. [Từ vựng] Extend vocabulary SB tr. 144 (phần U5): ghép 8 từ mở rộng với hình/nghĩa (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'In the spotlight' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'In search of fame') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Ôn] Quiz nhớ lại 10 câu: từ vựng + ngữ pháp 2, không mở sách (5')\n2. [Từ vựng] Workbook tr. 43 Vocabulary (6')\n3. [Nghe] Workbook tr. 44 Listening (audio Workbook) (8')\n4. [Nghe] Nghe lại bài nghe SB tr. 62 có lời thoại theo câu + 1 part nghe PET rút gọn dạng L2 (8')\n5. [Nghe] Chép chính tả 4 câu từ bài nghe SB tr. 62, ưu tiên âm yếu, âm nối (5')\n6. [Nói] Shadowing 5 câu của bài nghe (5')\n7. [Lồng tiếng] clip 20–40 giây chủ đề 'In the spotlight' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'In search of fame') (12')\n8. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U5 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 33,
     "after_min": 55,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng nhanh",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Vocabulary SB + Extend vocabulary",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Listening PET: dự đoán → nghe lần 1 → nghe lần 2 kiểm tra → đọc audioscript",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Grammar 2: giới thiệu và luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Nói theo cặp dùng từ và ngữ pháp mới",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Chép chính tả 3 câu từ bài nghe, giao bài",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Extend vocabulary SB tr. 144; Photocopiable 5B (từ vựng); audioscript SB tr. 171–172 (chữa bài nghe)",
     "assessment": "—"
    },
    {
     "session_id": "BO-35",
     "session_no": 35,
     "week": 18,
     "hp": "HP2",
     "unit": "U5",
     "unit_title": "In the spotlight",
     "type": "Speaking",
     "kind": "Unit – Speaking",
     "sb_pages": "63, 147",
     "wb_pages": "45",
     "focus": "U5 In the spotlight · Speaking",
     "task": "Tả ảnh nhạc sống (lễ hội, nhảy đường phố); xử lý từ không biết (It looks like…, a thing that…)",
     "content": "Cụm câu chức năng của bài nói; dùng lại ngữ pháp B10, B11 và từ vựng U5 khi nói",
     "ket_part": "[S2] tả ảnh 1 phút — luyện theo cặp, đổi vai; giáo viên chấm mẫu theo thang Nói PET: Grammar & Vocabulary, Discourse management, Pronunciation, Interactive communication (0–5) · [SS7] phát âm 15 phút: trọng âm câu trong câu điều kiện; nối âm phụ âm – nguyên âm (if I, turn it on)",
     "ket_codes": [
      "S2"
     ],
     "subskills": [
      "SS2",
      "SS7"
     ],
     "grammar": "B10 Câu điều kiện loại 0, 1, 2; B11 unless, in case, if I were you",
     "vocabulary": "festival, street dancing, live music, talented, balance, do tricks, mess, is made of metal, what kind of …, a thing that …, empty space, It looks like …",
     "can_do": "tả ảnh liên tục 1 phút, ≥ 8 câu, dùng ≥ 3 cụm chỉ vị trí hoặc suy đoán; đọc đúng ≥ 8/10 câu mẫu phát âm",
     "before": "1. [Nói] Học cụm câu chức năng (nghe – nhắc lại – ghi âm) theo Speaking file SB tr. 147: festival, street dancing, live music, talented, balance, do tricks, mess, is made of metal (8')\n2. [Nói] Đọc câu hỏi bài nói SB tr. 63, ghi âm câu trả lời nháp 1 phút (5')\n3. [Nghe] Nghe câu trả lời mẫu (giọng Gemini) rồi đánh dấu 3 cụm câu muốn dùng (5')\n4. [Từ vựng] Ôn nhanh từ vựng U5 cần cho bài nói (quiz 10 câu) (5')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'In the spotlight' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'In search of fame') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Nói] Workbook tr. 45 Speaking (số hóa; ghi âm các đoạn hội thoại trong trang) (7')\n2. [Nói] Ghi âm lại bài nói hoàn chỉnh 1–2 phút theo dạng S2 sau góp ý trên lớp (6')\n3. [Phát âm] Luyện 10 câu: trọng âm câu trong câu điều kiện; nối âm phụ âm – nguyên âm (if I, turn it on) (6')\n4. [Nói] Shadowing câu trả lời mẫu (5')\n5. [Ôn] Quiz cụm câu chức năng (nghe chọn cụm phù hợp tình huống) (4')\n6. [Lồng tiếng] clip 20–40 giây chủ đề 'In the spotlight' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'In search of fame') (12')\n7. [Từ vựng] Ôn thẻ từ đến hạn (3')\n8. [Nghe] Nghe bài nói của 2 bạn trong lớp (giáo viên chọn), chấm theo 2 tiêu chí (4')\n9. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U5 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 32,
     "after_min": 53,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Khởi động nói nhanh 4-3-2",
       "category": "fluency"
      },
      {
       "minutes": 15,
       "activity": "Nghe bài nói mẫu, ghi cụm câu chức năng (Speaking file)",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "Phát âm trọng tâm của buổi",
       "category": "lang"
      },
      {
       "minutes": 40,
       "activity": "Luyện part Nói PET theo cặp, đổi vai, đổi bạn",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Nói trước lớp, giáo viên chấm theo thang Nói PET",
       "category": "test"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá, giao bài ghi âm",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Speaking file SB tr. 147",
     "assessment": "—"
    },
    {
     "session_id": "BO-36",
     "session_no": 36,
     "week": 18,
     "hp": "HP2",
     "unit": "U5",
     "unit_title": "In the spotlight",
     "type": "Writing",
     "kind": "Unit – Writing",
     "sb_pages": "64–65, 152–153",
     "wb_pages": "46",
     "focus": "U5 In the spotlight · Writing",
     "task": "Bài báo về một buổi tối giải trí: khen điểm tốt, nêu vấn đề nhẹ nhàng (a bit, at times); venue, atmosphere, crowded, unforgettable",
     "content": "Lập dàn ý → viết nháp trên lớp → tự soát theo mục Improve it",
     "ket_part": "[W2] bài báo hoặc truyện ~100 từ — phân tích đề, gạch ý bắt buộc, viết 20–25 phút · [WS5] nâng câu: viết lại 3 câu đơn trong bài thành câu phức (mệnh đề quan hệ, điều kiện, bị động, although)",
     "ket_codes": [
      "W2"
     ],
     "subskills": [
      "WS2",
      "WS4",
      "WS5",
      "WS6"
     ],
     "grammar": "—",
     "vocabulary": "venue, tracks, can afford to, atmosphere, crowded, disappointed, unforgettable, mean, dull, slow, boring, weak, disappointing, predictable, relaxed, expensive, seems, can be, a bit, at times, talent show, game show, quiz show, reality TV show, soap opera, sci-fi film, superhero film, thriller, comedy, rap artist, rock band",
     "can_do": "bài ~100 từ có mở – thân – kết, ≥ 3 từ nối, ≤ 3 lỗi, thang PET ≥ 3/5 mỗi tiêu chí",
     "before": "1. [Viết] Đọc bài mẫu SB tr. 64–65 và Writing file SB tr. 152–153: bấm chọn câu mở bài, 3 từ nối, câu kết (6')\n2. [Từ vựng] Cụm câu cho bài viết (nghe – nhắc lại – điền câu): venue, tracks, can afford to, atmosphere, crowded, disappointed, unforgettable, mean (6')\n3. [Viết] Lập dàn ý cho đề bài trên sơ đồ (ý chính mỗi đoạn) (6')\n4. [Nghe] Nghe – đọc bài mẫu (giọng Gemini) 2 lần (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'In the spotlight' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'In search of fame') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Viết] Viết lại bài theo nhận xét trên lớp, tự soát 4 mục (đủ ý, chia đoạn, từ nối, chính tả) (15')\n2. [Viết] Workbook tr. 46 Writing (8')\n3. [Viết] Nâng câu: viết lại 3 câu đơn trong bài thành câu phức (5')\n4. [Nói] Đọc to bài viết của mình và ghi âm (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'In the spotlight' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'In search of fame') (12')\n6. [Ôn] Quiz nhớ lại 8 câu: từ nối và cụm câu bài viết (4')\n7. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U5 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 31,
     "after_min": 54,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Sửa lỗi chung từ bài nói và bài tập về nhà",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Phân tích đề và bài mẫu (Writing file)",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "Cụm câu, từ nối, câu phức cho dạng bài",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Lập dàn ý theo cặp",
       "category": "output"
      },
      {
       "minutes": 25,
       "activity": "Viết nháp có bấm giờ",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Tự soát theo Improve it, chấm chéo theo thang PET",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tổng kết, giao bài viết lại",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Writing file SB tr. 152–153 (bài mẫu, cụm câu); thang chấm PET: Content, Communicative achievement, Organisation, Language (0–5); Photocopiable 5C (viết)",
     "assessment": "—"
    },
    {
     "session_id": "BO-37",
     "session_no": 37,
     "week": 19,
     "hp": "HP2",
     "unit": "U5",
     "unit_title": "In the spotlight",
     "type": "Project & Check",
     "kind": "Unit – Ôn tập + Dự án",
     "sb_pages": "66–68, 135",
     "wb_pages": "47",
     "focus": "U5 In the spotlight · Ôn tập và Dự án",
     "task": "Video 'In search of fame'; dự án: Viết hồ sơ (fact file) về một ngôi sao nhí, làm theo cặp; Independent learning; Unit check",
     "content": "Ôn từ vựng và ngữ pháp U5 · Independent learning: Writing skills: đặt mục tiêu viết cụ thể",
     "ket_part": "[S4] thảo luận sau video · trình bày dự án nhóm 2–3 phút, mỗi thành viên nói ≥ 4 câu · [R6] 10 phút điền từ tự do (Part 6) theo ngữ pháp của unit",
     "ket_codes": [
      "S4",
      "R6"
     ],
     "subskills": [
      "RS8",
      "SS4",
      "VS1"
     ],
     "grammar": "B10 Câu điều kiện loại 0, 1, 2; B11 unless, in case, if I were you",
     "vocabulary": "fame, audition, opportunities, competitive, nerve-wracking, impress, make it big, backing vocalist, up and coming, brush it off, dedication, actors, rock star",
     "can_do": "Unit check ≥ 70%; Language test ≥ 70%; mỗi học sinh nói ≥ 4 câu khi trình bày dự án",
     "before": "1. [Dự án] Chuẩn bị phần dự án của mình: Viết hồ sơ (fact file) về một ngôi sao nhí, làm theo cặp (tìm thông tin, viết 4–5 câu sẽ nói) (12')\n2. [Nghe] Xem video Switch on 'In search of fame' (SB tr. 66) có phụ đề, trả lời 3 câu hỏi (6')\n3. [Nói] Ghi âm phần trình bày dự án của mình 1 phút để tập (4')\n4. [Ôn] Quiz trộn 20 câu từ vựng + ngữ pháp U5 (6')\n5. [Lồng tiếng] 1 đoạn video Switch on 'In search of fame' (20–40 giây) (6')",
     "after": "1. [Ôn] Workbook tr. 47 Unit check (8')\n2. [Ôn] Language Test A U5 trên website (Assessment package) (25')\n3. [Tự học] Independent learning SB tr. 66: phiếu tự đánh giá + ghi âm 1 phút 'Unit 5: em làm tốt… em cần…' (4')\n4. [Từ vựng] Từ vựng chủ đề PET tự học: 'Places and buildings' – Wordwall 15 từ (6')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'In the spotlight' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'In search of fame') (6')\n6. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U5 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 34,
     "after_min": 55,
     "in_class": [
      {
       "minutes": 15,
       "activity": "Ôn từ vựng và ngữ pháp của unit qua trò chơi",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Video Switch on + thảo luận",
       "category": "input"
      },
      {
       "minutes": 35,
       "activity": "Dự án nhóm: hoàn thiện và trình bày, đánh giá chéo",
       "category": "output"
      },
      {
       "minutes": 30,
       "activity": "Unit check",
       "category": "test"
      },
      {
       "minutes": 10,
       "activity": "Independent learning, giao bài",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Quyền riêng tư, hiểu biết về truyền thông, áp lực của sự nổi tiếng · Phân bổ 105': video + thảo luận 20', trình bày dự án 30', Part 6 mini 10', Unit check 25', Skills Test A 20'",
     "materials": "Video U5 (videoscript TB tr. 148); Grammar file SB tr. 135 (bài luyện); Unit test B1 U5: Skills Test A tại lớp 20' (Assessment package); Language Test A làm trên website",
     "assessment": "—"
    },
    {
     "session_id": "BO-38",
     "session_no": 38,
     "week": 19,
     "hp": "HP2",
     "unit": "Sự kiện",
     "unit_title": "Công dân toàn cầu",
     "type": "Sự kiện",
     "kind": "Sự kiện kỹ năng",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Sự kiện E6 · IVY Talent & Media Night",
     "task": "—",
     "content": "Giải trí, câu điều kiện",
     "ket_part": "[S2] dẫn chương trình, giới thiệu tiết mục · [L2] nghe khán giả nhận xét · [W2] review buổi diễn ~100 từ",
     "ket_codes": [
      "S2",
      "L2",
      "W2"
     ],
     "subskills": [
      "LS2",
      "SS2",
      "WS2",
      "WS4"
     ],
     "grammar": "B10 Câu điều kiện loại 0, 1, 2; B11 unless, in case, if I were you",
     "vocabulary": "Dùng lại từ vựng của unit vừa học (xem cột này ở các buổi trước)",
     "can_do": "Mỗi học sinh góp 1 tiết mục hoặc làm MC/ban giám khảo; viết review ≥ 100 từ",
     "before": "1. [Dự án] Chuẩn bị phần việc của mình cho sự kiện 'IVY Talent & Media Night' (nội dung, đồ dùng, vai) (15')\n2. [Nói] Viết và ghi âm phần nói của mình 1–2 phút, nghe lại và sửa (8')\n3. [Từ vựng] Ôn từ vựng và cấu trúc cần dùng: Giải trí, câu điều kiện (6')\n4. [Lồng tiếng] clip chủ đề sự kiện (6')",
     "after": "1. [Tự học] Tự đánh giá theo rubric 4 tiêu chí (3')\n2. [Viết] Bài viết sau sự kiện (dạng W2) ~100 từ (15')\n3. [Nói] Xem video sự kiện của nhóm, ghi âm nhận xét 1 phút (1 điểm tốt, 1 điểm cần cải thiện) (5')\n4. [Nghe] Nghe phần trình bày của 1 nhóm khác, trả lời 3 câu hỏi (6')\n5. [Từ vựng] Ôn thẻ đến hạn (4')\n6. [Lồng tiếng] 2 clip (12')\n7. [Ôn] Quiz trộn 10 câu unit vừa học (5')\n8. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 35,
     "after_min": 56,
     "in_class": [
      {
       "minutes": 20,
       "activity": "Chuẩn bị ngôn ngữ cho sản phẩm",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Thực hiện sản phẩm trước khán giả",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Phản hồi theo rubric",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá năng lực",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Quyền riêng tư, ứng xử trên mạng, áp lực nổi tiếng",
     "materials": "Rubric 4 tiêu chí: ngôn ngữ, nội dung, hợp tác, trình bày",
     "assessment": "—"
    },
    {
     "session_id": "BO-39",
     "session_no": 39,
     "week": 20,
     "hp": "HP2",
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Review",
     "kind": "Củng cố",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Củng cố · Nghe – Đọc (U3, U4, U5)",
     "task": "—",
     "content": "Chủ đề U3, U4, U5 · Nhận ra các điểm ngữ pháp B06, B07, B08, B09, B10, B11, B22 trong bài đọc và lời thoại",
     "ket_part": "[R1] 5 văn bản ngắn (biển báo, tin nhắn), chọn ý đúng · [R2] nối 5 người với 8 văn bản · [R3] bài dài, 5 câu trắc nghiệm · [R4] điền 5 câu vào bài (3 câu thừa) · [R5] điền từ trắc nghiệm (từ vựng, collocation) · [R6] điền từ tự do (từ chức năng) · [L1] 7 đoạn ngắn, chọn tranh · [L2] 6 hội thoại ngắn, ý kiến/thái độ · [L4] phỏng vấn dài, 6 câu trắc nghiệm — làm theo thời gian thật của đề, chữa bằng cách gạch câu chứa đáp án · [RS9] kiểm tra nhật ký đọc: kể tóm tắt sách đọc phân cấp 1 phút",
     "ket_codes": [
      "R1",
      "R2",
      "R3",
      "R4",
      "R5",
      "R6",
      "L1",
      "L2",
      "L4"
     ],
     "subskills": [
      "LS1",
      "LS2",
      "LS4",
      "LS5",
      "RS1",
      "RS2",
      "RS3",
      "RS5",
      "RS7",
      "RS8",
      "RS9",
      "SS5"
     ],
     "grammar": "B06 Các cách diễn đạt tương lai: will, going to, hiện tại tiếp diễn, hiện tại đơn; B07 Khuyết thiếu cho lời khuyên, gợi ý: should, could, ought to, Why don't you…?; B08 Hiện tại hoàn thành với ever/never/already/yet/just/for/since; B09 Quá khứ đơn và hiện tại hoàn thành; B10 Câu điều kiện loại 0, 1, 2; B11 unless, in case, if I were you; B22 Từ nối: although, so that, either…or, as soon as, because, so; B26 may / might / could chỉ khả năng xảy ra; B27 So sánh hơn, so sánh nhất, (not) as…as; too/enough (to); so/such; B28 can / could / be able to chỉ khả năng làm được",
     "vocabulary": "Ôn từ vựng các unit trong học phần; làm lại từ sai trên Wordwall",
     "can_do": "≥ 4/5 câu Part 1; ≥ 4/5 câu nối Part 2; ≥ 4/5 câu Part 3; ≥ 3/5 câu Part 4; ≥ 4/6 câu Part 5; ≥ 4/6 chỗ trống Part 6; ≥ 5/7 câu Part 1; ≥ 4/6 câu Part 2; ≥ 4/6 câu Part 4",
     "before": "1. [Ôn] Quiz trộn 20 câu từ vựng + ngữ pháp các unit trong học phần (8')\n2. [Nghe] Nghe lại 2 bài nghe điểm thấp nhất trong học phần, có lời thoại (8')\n3. [Đọc] Đọc lại 1 bài đọc của sách, tìm 5 cụm diễn đạt khác (paraphrase) (8')\n4. [Từ vựng] Ôn thẻ đến hạn (5')\n5. [Lồng tiếng] clip ôn tập (6')",
     "after": "1. [Thi] Làm lại các câu sai của đề luyện trên lớp, ghi lý do sai (10')\n2. [Nghe] 1 part nghe tiếp theo của đề PTP (dạng L1, L2, L4) + chép chính tả 4 câu (12')\n3. [Đọc] 1 part đọc của đề PTP (dạng R1, R2, R3, R4, R5, R6) (10')\n4. [Nói] Shadowing 5 câu của bài nghe (5')\n5. [Lồng tiếng] 2 clip (12')\n6. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 35,
     "after_min": 55,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn từ vựng học phần",
       "category": "lang"
      },
      {
       "minutes": 35,
       "activity": "Reading PET: làm có bấm giờ → chữa → rút chiến lược",
       "category": "input"
      },
      {
       "minutes": 35,
       "activity": "Listening PET: làm → chữa → nghe lại có lời",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "Làm lại câu sai với đề khác",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Đọc hoặc nghe mở rộng mức dễ",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Practice Tests Plus B1 Preliminary for Schools (PTP) Test 2: Reading Part 1, Part 2, Part 3, Part 4, Part 5, Part 6; Listening Part 1, Part 2, Part 4; Skills Test A U3, U4, U5",
     "assessment": "—"
    },
    {
     "session_id": "BO-40",
     "session_no": 40,
     "week": 20,
     "hp": "HP2",
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Test",
     "kind": "Củng cố + kiểm tra Nói",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Củng cố · Nói – Viết + kiểm tra Nói HP2",
     "task": "—",
     "content": "Câu hỏi cá nhân, tả ảnh, thảo luận theo chủ đề đã học · từ nối và câu mở rộng",
     "ket_part": "[S1] câu hỏi cá nhân · [S2] tả ảnh 1 phút · [S3] thảo luận cặp theo tranh gợi ý · [S4] thảo luận mở rộng — thi Nói theo cặp với giáo viên · [W1] email ~100 từ theo 4 ghi chú · [W2] bài báo hoặc truyện ~100 từ — viết có bấm giờ 22 phút",
     "ket_codes": [
      "S1",
      "S2",
      "S3",
      "S4",
      "W1",
      "W2"
     ],
     "subskills": [
      "SS1",
      "SS2",
      "SS3",
      "SS4",
      "WS1",
      "WS2",
      "WS3",
      "WS4"
     ],
     "grammar": "B06 Các cách diễn đạt tương lai: will, going to, hiện tại tiếp diễn, hiện tại đơn; B07 Khuyết thiếu cho lời khuyên, gợi ý: should, could, ought to, Why don't you…?; B08 Hiện tại hoàn thành với ever/never/already/yet/just/for/since; B09 Quá khứ đơn và hiện tại hoàn thành; B10 Câu điều kiện loại 0, 1, 2; B11 unless, in case, if I were you; B22 Từ nối: although, so that, either…or, as soon as, because, so; B26 may / might / could chỉ khả năng xảy ra; B27 So sánh hơn, so sánh nhất, (not) as…as; too/enough (to); so/such; B28 can / could / be able to chỉ khả năng làm được",
     "vocabulary": "Ôn từ vựng các unit trong học phần; làm lại từ sai trên Wordwall",
     "can_do": "Thi Nói đạt ≥ 3/5 mỗi tiêu chí (thang Nói PET: Grammar & Vocabulary, Discourse management, Pronunciation, Interactive communication (0–5)); bài viết đạt ≥ 3/5 mỗi tiêu chí PET",
     "before": "1. [Nói] Luyện 4 part Nói theo bộ câu hỏi mẫu, ghi âm từng part (12')\n2. [Nghe] Xem video thí sinh mẫu Cambridge, ghi 3 cụm câu học được (8')\n3. [Viết] Lập dàn ý 1 email và 1 article/story (8')\n4. [Lồng tiếng] clip (6')",
     "after": "1. [Nói] Ghi âm lại part Nói chưa đạt theo nhận xét (8')\n2. [Viết] Viết lại bài viết có bấm giờ theo nhận xét (15')\n3. [Phát âm] Luyện 10 câu theo lỗi phát âm được ghi trong buổi thi Nói (6')\n4. [Nghe] 1 part nghe PET (7')\n5. [Lồng tiếng] 2 clip (12')\n6. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 34,
     "after_min": 54,
     "in_class": [
      {
       "minutes": 90,
       "activity": "GV thi Nói từng cặp 10–12'; các cặp khác viết PET Part 1/2 bấm giờ",
       "category": "test"
      },
      {
       "minutes": 15,
       "activity": "Tự chấm bài viết theo thang PET",
       "category": "lang"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "PTP Test 2: Speaking, Writing; Speaking file SB tr. 146–149; Writing file SB tr. 150–155; Review Test 1 (Units 1–3): Writing, Speaking",
     "assessment": "—"
    },
    {
     "session_id": "BO-41",
     "session_no": 41,
     "week": 21,
     "hp": "HP2",
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Test",
     "kind": "Kiểm tra học phần",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Ngữ pháp nền + kiểm tra HP2",
     "task": "—",
     "content": "Ôn ngữ pháp B06, B07, B08, B09, B10, B11, B22, B26, B27, B28 — ghi lỗi vào bảng lỗi cá nhân",
     "ket_part": "[E] làm bài đúng thời gian, chuyển đáp án sang phiếu trả lời · [R1] 5 văn bản ngắn (biển báo, tin nhắn), chọn ý đúng · [R2] nối 5 người với 8 văn bản · [L1] 7 đoạn ngắn, chọn tranh · [L2] 6 hội thoại ngắn, ý kiến/thái độ",
     "ket_codes": [
      "R1",
      "R2",
      "L1",
      "L2"
     ],
     "subskills": [
      "LS1",
      "LS2",
      "RS1",
      "RS3"
     ],
     "grammar": "B06 Các cách diễn đạt tương lai: will, going to, hiện tại tiếp diễn, hiện tại đơn; B07 Khuyết thiếu cho lời khuyên, gợi ý: should, could, ought to, Why don't you…?; B08 Hiện tại hoàn thành với ever/never/already/yet/just/for/since; B09 Quá khứ đơn và hiện tại hoàn thành; B10 Câu điều kiện loại 0, 1, 2; B11 unless, in case, if I were you; B22 Từ nối: although, so that, either…or, as soon as, because, so; B26 may / might / could chỉ khả năng xảy ra; B27 So sánh hơn, so sánh nhất, (not) as…as; too/enough (to); so/such; B28 can / could / be able to chỉ khả năng làm được",
     "vocabulary": "Ôn từ vựng các unit trong học phần; làm lại từ sai trên Wordwall",
     "can_do": "Kiểm tra ≥ 60% mỗi phần; ≥ 80% câu ngữ pháp mức có kiểm soát (B06, B07, B08, B09, B10, B11, B22, B26, B27, B28)",
     "before": "1. [Ngữ pháp] Quiz ôn ngữ pháp của học phần 30 câu (có giải thích) (12')\n2. [Từ vựng] Ôn thẻ: toàn bộ từ của học phần còn đến hạn (8')\n3. [Thi] Xem lại chiến lược các part sẽ kiểm tra (video 5') (5')\n4. [Nghe] Nghe 1 bài nghe của sách có lời thoại (5')\n5. [Lồng tiếng] clip (6')",
     "after": "1. [Tự học] Xem bài kiểm tra, ghi 5 lỗi chính vào bảng lỗi cá nhân (8')\n2. [Ngữ pháp] Làm lại câu sai dưới dạng mới (website tự tạo) (12')\n3. [Nghe] Nghe lại phần nghe của bài kiểm tra có lời thoại, chép chính tả 4 câu (10')\n4. [Nói] Ghi âm 1 phút: điều em làm tốt và điều em cần cải thiện (3')\n5. [Lồng tiếng] 2 clip (12')\n6. [Từ vựng] Ôn thẻ (5')\n7. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 36,
     "after_min": 56,
     "in_class": [
      {
       "minutes": 40,
       "activity": "Ôn các điểm ngữ pháp nền của học phần",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Kiểm tra: các part PET đã học + câu ngữ pháp nền",
       "category": "test"
      },
      {
       "minutes": 5,
       "activity": "Ghi lỗi vào bảng lỗi cá nhân",
       "category": "lang"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Review Test 1 (Units 1–3) Grammar & Vocabulary; Language Test B U4, U5; Grammar file SB tr. 130–135; Câu hỏi bổ sung cho B26, B27, B28 (IVY soạn)",
     "assessment": "—"
    },
    {
     "session_id": "BO-42",
     "session_no": 42,
     "week": 21,
     "hp": "HP2",
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Review",
     "kind": "Linh hoạt",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Linh hoạt 2: bù hoặc tăng cường",
     "task": "—",
     "content": "Nhóm bù: điểm ngữ pháp chưa đạt ở buổi kiểm tra · Nhóm tăng cường: dùng B11, B22 trong bài viết và bài nói dài hơn",
     "ket_part": "Nhóm bù: luyện lại part điểm thấp nhất, nghe lần 2 có lời thoại · Nhóm tăng cường: bài viết ~120 từ, nói 2 phút",
     "ket_codes": [],
     "subskills": [],
     "grammar": "B06 Các cách diễn đạt tương lai: will, going to, hiện tại tiếp diễn, hiện tại đơn; B07 Khuyết thiếu cho lời khuyên, gợi ý: should, could, ought to, Why don't you…?; B08 Hiện tại hoàn thành với ever/never/already/yet/just/for/since; B09 Quá khứ đơn và hiện tại hoàn thành; B10 Câu điều kiện loại 0, 1, 2; B11 unless, in case, if I were you; B22 Từ nối: although, so that, either…or, as soon as, because, so; B26 may / might / could chỉ khả năng xảy ra; B27 So sánh hơn, so sánh nhất, (not) as…as; too/enough (to); so/such; B28 can / could / be able to chỉ khả năng làm được",
     "vocabulary": "Ôn từ vựng các unit trong học phần; làm lại từ sai trên Wordwall",
     "can_do": "Nhóm bù đúng ≥ 80% điểm chưa đạt; nhóm tăng cường đạt ≥ 4/5 ở ≥ 2 tiêu chí PET",
     "before": "1. [Ôn] Bài theo nhóm: nhóm bù – điểm ngữ pháp chưa đạt; nhóm tăng cường – bài viết/nói dài hơn (15')\n2. [Nghe] Nghe 1 bài nghe theo part yếu nhất (8')\n3. [Từ vựng] Ôn thẻ (5')\n4. [Lồng tiếng] clip (6')",
     "after": "1. [Ôn] Làm lại bài kiểm tra phần chưa đạt (Language Test C) (15')\n2. [Nói] Ghi âm 2 phút về chủ đề của học phần (5')\n3. [Nghe] Chép chính tả + shadowing 1 đoạn nghe (10')\n4. [Từ vựng] Ôn thẻ (5')\n5. [Lồng tiếng] 2 clip (12')\n6. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 34,
     "after_min": 53,
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Language Test C và Photocopiables 3A, 4A, 5A; Grammar ppt B1 U3, U4, U5",
     "assessment": "—"
    },
    {
     "session_id": "BO-43",
     "session_no": 43,
     "week": 22,
     "hp": "HP3",
     "unit": "U6",
     "unit_title": "Down to Earth",
     "type": "Reading",
     "kind": "Unit – Reading + Grammar",
     "sb_pages": "69–72, 136, 160, 162",
     "wb_pages": "48–50",
     "focus": "U6 Down to Earth · Lead-in + Reading + Grammar 1",
     "task": "Đọc blog 'Our blue planet' về Blue Planet II, dùng đại từ quy chiếu để điền câu vào đoạn",
     "content": "Ngữ pháp: Câu bị động hiện tại đơn và quá khứ đơn (+ by) · Kỹ năng đọc: referencing (pronouns)",
     "ket_part": "[R4] điền 5 câu vào bài (3 câu thừa) — kỹ năng referencing (pronouns); gạch từ khóa, tìm cách diễn đạt khác trong bài · [RS6] đoán nghĩa từ mới qua ngữ cảnh (loại từ, từ xung quanh, ví dụ trong câu) trước khi tra từ",
     "ket_codes": [
      "R4"
     ],
     "subskills": [
      "RS5",
      "RS6",
      "RS9"
     ],
     "grammar": "B12 Bị động hiện tại đơn và quá khứ đơn",
     "vocabulary": "incredible, survive, planet, sight, explore, tiny creature, whale, shark, seal, dolphin, turtle, shellfish, shell, hatch, documentary series, divide, inhabit, tonnes, discover, purify",
     "can_do": "≥ 3/5 câu Part 4; viết 6 câu dùng điểm ngữ pháp B12, ≥ 5 câu đúng",
     "before": "1. [Từ vựng] Chuỗi 5 bước nhớ từ của bài đọc (nghe–nhắc lại → ghép hình → nghe chọn → nghe gõ → điền câu từ bài đọc): incredible, survive, planet, sight, explore, tiny creature, whale, shark, seal, dolphin, turtle, shellfish (10')\n2. [Nói] Lead-in SB tr. 69: xem ảnh mở bài, ghi âm 30–45 giây trả lời câu hỏi mở bài (4')\n3. [Nghe] Nghe – đọc đoạn đầu bài đọc SB tr. 70 (audio gốc), trả lời 2 câu dự đoán ý chính (5')\n4. [Ngữ pháp] Video ngắn: Câu bị động hiện tại đơn và quá khứ đơn (+ by) (theo Grammar file SB tr. 136, Grammar ppt U6) + 5 câu kiểm tra hiểu (7')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Down to Earth' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Ocean culture') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (unit trước) (3')",
     "after": "1. [Ôn] Quiz nhớ lại 10 câu: từ bài đọc + điểm ngữ pháp vừa học, không mở sách (5')\n2. [Đọc] Workbook tr. 48–49 Reading (số hóa, chấm tự động; dạng R4) (10')\n3. [Ngữ pháp] Workbook tr. 50 Grammar (6')\n4. [Ngữ pháp] Grammar file SB tr. 137: 1–2 bài luyện phần Câu bị động hiện tại đơn và quá khứ đơn (+ by) (5')\n5. [Nghe] Chép chính tả 4 câu từ audio bài đọc SB tr. 70–71 (5')\n6. [Nói] Shadowing 5 câu của bài đọc (audio gốc, ghi âm, nhận dạng giọng nói đánh dấu từ chưa rõ) (5')\n7. [Nói] Ghi âm 1 phút nói lại nội dung bài đọc, dùng ít nhất 3 từ mới và điểm ngữ pháp vừa học (3')\n8. [Lồng tiếng] clip 20–40 giây chủ đề 'Down to Earth' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Ocean culture') (12')\n9. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U6 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 35,
     "after_min": 57,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Khởi động: kiểm tra nhanh từ vựng đã học trước ở nhà (gói PRE)",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Lead-in: thảo luận ảnh và câu hỏi mở bài",
       "category": "fluency"
      },
      {
       "minutes": 30,
       "activity": "Reading: đọc lướt lấy ý chính → làm dạng bài PET → chữa bằng câu chứa đáp án",
       "category": "input"
      },
      {
       "minutes": 25,
       "activity": "Grammar 1: tìm quy tắc trong bài đọc → luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Dùng ngữ pháp mới để nói và viết về bản thân",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Tổng kết, giới thiệu gói POST-LESSON",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Grammar file SB tr. 136 (lý thuyết); Grammar ppt B1 U6; Photocopiable 6A (ngữ pháp); SB tr. 160, 162 (info gap bị động)",
     "assessment": "—"
    },
    {
     "session_id": "BO-44",
     "session_no": 44,
     "week": 22,
     "hp": "HP3",
     "unit": "U6",
     "unit_title": "Down to Earth",
     "type": "Listening",
     "kind": "Unit – Vocabulary + Listening",
     "sb_pages": "73–74, 145, 172–173",
     "wb_pages": "51–52",
     "focus": "U6 Down to Earth · Vocabulary + Listening + Grammar 2",
     "task": "Nghe về các bạn trẻ thay đổi thế giới (ứng dụng eco-points của Holly), tránh đáp án gây nhiễu",
     "content": "Từ vựng: Thế giới tự nhiên: cloud, storm, fog, waves, waterfall, rocks, cliff, field · trật tự tính từ (ý kiến trước, sự thật sau): amazing, ancient, huge, narrow · Ngữ pháp 2: have/get something done · Bổ sung B30: lượng từ khi nói về rác thải, tài nguyên (too much plastic, a few bins, very little water)",
     "ket_part": "[L4] phỏng vấn dài, 6 câu trắc nghiệm — đọc câu hỏi trước khi nghe, dự đoán đáp án, nghe lần 2 để kiểm tra",
     "ket_codes": [
      "L4"
     ],
     "subskills": [
      "LS4",
      "LS5",
      "VS1",
      "VS3"
     ],
     "grammar": "B13 have/get something done; B21 Trật tự tính từ; tính từ -ed/-ing; B30 Lượng từ: a few / a little, few / little, too much / too many, plenty of",
     "vocabulary": "cloud, sunshine, snow, star, moon, storm, fog, waves, waterfall, rocks, sand, cliff, path, field, earth, layer, desert, hydroelectricity, reflected sunlight, ancient, flat, high, huge, low, narrow, amazing, dangerous, horrible, incredible, pretty, scary, headband, generator, advertise, environmental company, recycle, developing countries, have/get something done, shaved, mended, delivered",
     "can_do": "≥ 4/6 câu Part 4; dùng đúng B13 trong ≥ 5/6 câu; dùng đúng B30 trong ≥ 4/5 câu",
     "before": "1. [Từ vựng] Chuỗi 5 bước nhớ từ của bài Vocabulary SB tr. 73: cloud, sunshine, snow, star, moon, storm, fog, waves, waterfall, rocks, sand, cliff, path, field (10')\n2. [Nghe] Nghe mồi 30–60 giây đầu bài nghe SB tr. 74 (audio gốc), dự đoán 2 câu (4')\n3. [Ngữ pháp] Video ngắn: have/get something done + 5 câu kiểm tra hiểu (6')\n4. [Từ vựng] Extend vocabulary SB tr. 145 (phần U6): ghép 8 từ mở rộng với hình/nghĩa (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Down to Earth' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Ocean culture') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Ôn] Quiz nhớ lại 10 câu: từ vựng + ngữ pháp 2, không mở sách (5')\n2. [Từ vựng] Workbook tr. 51 Vocabulary (6')\n3. [Nghe] Workbook tr. 52 Listening (audio Workbook) (8')\n4. [Nghe] Nghe lại bài nghe SB tr. 74 có lời thoại theo câu + 1 part nghe PET rút gọn dạng L4 (8')\n5. [Nghe] Chép chính tả 4 câu từ bài nghe SB tr. 74, ưu tiên âm yếu, âm nối (5')\n6. [Nói] Shadowing 5 câu của bài nghe (5')\n7. [Lồng tiếng] clip 20–40 giây chủ đề 'Down to Earth' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Ocean culture') (12')\n8. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U6 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 33,
     "after_min": 55,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng nhanh",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Vocabulary SB + Extend vocabulary",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Listening PET: dự đoán → nghe lần 1 → nghe lần 2 kiểm tra → đọc audioscript",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Grammar 2: giới thiệu và luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Nói theo cặp dùng từ và ngữ pháp mới",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Chép chính tả 3 câu từ bài nghe, giao bài",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Extend vocabulary SB tr. 145; Photocopiable 6B (từ vựng); audioscript SB tr. 172–173 (chữa bài nghe); Bài bổ sung ngữ pháp do IVY soạn (không có trong GE B1 2nd ed)",
     "assessment": "—"
    },
    {
     "session_id": "BO-45",
     "session_no": 45,
     "week": 23,
     "hp": "HP3",
     "unit": "U6",
     "unit_title": "Down to Earth",
     "type": "Speaking",
     "kind": "Unit – Speaking",
     "sb_pages": "75, 148–149",
     "wb_pages": "53",
     "focus": "U6 Down to Earth · Speaking",
     "task": "Thảo luận cách sống thân thiện với môi trường; luân phiên lượt nói (What do you think? Go on…)",
     "content": "Cụm câu chức năng của bài nói; dùng lại ngữ pháp B12, B13 và từ vựng U6 khi nói",
     "ket_part": "[S3] thảo luận cặp theo tranh gợi ý · [S4] thảo luận mở rộng — luyện theo cặp, đổi vai; giáo viên chấm mẫu theo thang Nói PET: Grammar & Vocabulary, Discourse management, Pronunciation, Interactive communication (0–5) · [SS7] phát âm 15 phút: âm yếu was/were trong câu bị động; nối âm · [SS6] dùng câu hỏi lại, làm rõ khi chưa hiểu bạn hoặc giám khảo",
     "ket_codes": [
      "S3",
      "S4"
     ],
     "subskills": [
      "SS3",
      "SS4",
      "SS6",
      "SS7"
     ],
     "grammar": "B12 Bị động hiện tại đơn và quá khứ đơn; B13 have/get something done",
     "vocabulary": "carbon footprint, climate change, energy, loss of animal species, pollution, rubbish, transport, protect the environment, recycling bin, environmentally friendly, What do you think?, Go on, Why?, Do you …?",
     "can_do": "thảo luận cặp 2–3 phút, xét ≥ 4/5 lựa chọn và đi đến quyết định; trả lời mỗi câu hỏi mở rộng ≥ 3 câu, có lý do, hỏi lại ý bạn; đọc đúng ≥ 8/10 câu mẫu phát âm",
     "before": "1. [Nói] Học cụm câu chức năng (nghe – nhắc lại – ghi âm) theo Speaking file SB tr. 148–149: carbon footprint, climate change, energy, loss of animal species, pollution, rubbish, transport, protect the environment (8')\n2. [Nói] Đọc câu hỏi bài nói SB tr. 75, ghi âm câu trả lời nháp 1 phút (5')\n3. [Nghe] Nghe câu trả lời mẫu (giọng Gemini) rồi đánh dấu 3 cụm câu muốn dùng (5')\n4. [Từ vựng] Ôn nhanh từ vựng U6 cần cho bài nói (quiz 10 câu) (5')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Down to Earth' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Ocean culture') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Nói] Workbook tr. 53 Speaking (số hóa; ghi âm các đoạn hội thoại trong trang) (7')\n2. [Nói] Ghi âm lại bài nói hoàn chỉnh 1–2 phút theo dạng S3, S4 sau góp ý trên lớp (6')\n3. [Phát âm] Luyện 10 câu: âm yếu was/were trong câu bị động; nối âm (6')\n4. [Nói] Shadowing câu trả lời mẫu (5')\n5. [Ôn] Quiz cụm câu chức năng (nghe chọn cụm phù hợp tình huống) (4')\n6. [Lồng tiếng] clip 20–40 giây chủ đề 'Down to Earth' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Ocean culture') (12')\n7. [Từ vựng] Ôn thẻ từ đến hạn (3')\n8. [Nghe] Nghe bài nói của 2 bạn trong lớp (giáo viên chọn), chấm theo 2 tiêu chí (4')\n9. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U6 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 32,
     "after_min": 53,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Khởi động nói nhanh 4-3-2",
       "category": "fluency"
      },
      {
       "minutes": 15,
       "activity": "Nghe bài nói mẫu, ghi cụm câu chức năng (Speaking file)",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "Phát âm trọng tâm của buổi",
       "category": "lang"
      },
      {
       "minutes": 40,
       "activity": "Luyện part Nói PET theo cặp, đổi vai, đổi bạn",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Nói trước lớp, giáo viên chấm theo thang Nói PET",
       "category": "test"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá, giao bài ghi âm",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Speaking file SB tr. 148–149; Photocopiable 6C (nói)",
     "assessment": "—"
    },
    {
     "session_id": "BO-46",
     "session_no": 46,
     "week": 23,
     "hp": "HP3",
     "unit": "U6",
     "unit_title": "Down to Earth",
     "type": "Writing",
     "kind": "Unit – Writing",
     "sb_pages": "76–77, 150–151",
     "wb_pages": "54",
     "focus": "U6 Down to Earth · Writing",
     "task": "Email trao đổi học sinh về một nơi nên đến: cảm ơn, mời, nhận lời, từ chối",
     "content": "Lập dàn ý → viết nháp trên lớp → tự soát theo mục Improve it",
     "ket_part": "[W1] email ~100 từ theo 4 ghi chú — phân tích đề, gạch ý bắt buộc, viết 20–25 phút",
     "ket_codes": [
      "W1"
     ],
     "subskills": [
      "WS1",
      "WS4",
      "WS6"
     ],
     "grammar": "—",
     "vocabulary": "school exchange, coach, day trip, mountain biking, Thank you for …, Thanks so much for …, Would you like to …?, How about …?, I'm afraid that I can't …, I'd love to …, … sounds fantastic",
     "can_do": "email ~100 từ, đủ 4 ý trong ghi chú, ≤ 3 lỗi, thang PET ≥ 3/5 mỗi tiêu chí",
     "before": "1. [Viết] Đọc bài mẫu SB tr. 76–77 và Writing file SB tr. 150–151: bấm chọn câu mở bài, 3 từ nối, câu kết (6')\n2. [Từ vựng] Cụm câu cho bài viết (nghe – nhắc lại – điền câu): school exchange, coach, day trip, mountain biking (6')\n3. [Viết] Lập dàn ý cho đề bài trên sơ đồ (ý chính mỗi đoạn) (6')\n4. [Nghe] Nghe – đọc bài mẫu (giọng Gemini) 2 lần (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Down to Earth' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Ocean culture') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Viết] Viết lại bài theo nhận xét trên lớp, tự soát 4 mục (đủ ý, chia đoạn, từ nối, chính tả) (15')\n2. [Viết] Workbook tr. 54 Writing (8')\n3. [Viết] Nâng câu: viết lại 3 câu đơn trong bài thành câu phức (5')\n4. [Nói] Đọc to bài viết của mình và ghi âm (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Down to Earth' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Ocean culture') (12')\n6. [Ôn] Quiz nhớ lại 8 câu: từ nối và cụm câu bài viết (4')\n7. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U6 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 31,
     "after_min": 54,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Sửa lỗi chung từ bài nói và bài tập về nhà",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Phân tích đề và bài mẫu (Writing file)",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "Cụm câu, từ nối, câu phức cho dạng bài",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Lập dàn ý theo cặp",
       "category": "output"
      },
      {
       "minutes": 25,
       "activity": "Viết nháp có bấm giờ",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Tự soát theo Improve it, chấm chéo theo thang PET",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tổng kết, giao bài viết lại",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Writing file SB tr. 150–151 (bài mẫu, cụm câu); thang chấm PET: Content, Communicative achievement, Organisation, Language (0–5)",
     "assessment": "—"
    },
    {
     "session_id": "BO-47",
     "session_no": 47,
     "week": 24,
     "hp": "HP3",
     "unit": "U6",
     "unit_title": "Down to Earth",
     "type": "Project & Check",
     "kind": "Unit – Ôn tập + Dự án",
     "sb_pages": "78–80, 137",
     "wb_pages": "55–57",
     "focus": "U6 Down to Earth · Ôn tập và Dự án",
     "task": "Video 'Ocean culture'; dự án: Thiết kế cộng đồng: kế hoạch hành động kết nối con người với thiên nhiên; Independent learning; Unit check",
     "content": "Ôn từ vựng và ngữ pháp U6 · Independent learning: Reading skills: phiếu tự đánh giá, vấn đề và cách khắc phục, đặt mục tiêu",
     "ket_part": "[S4] thảo luận sau video · trình bày dự án nhóm 2–3 phút, mỗi thành viên nói ≥ 4 câu · [R6] 10 phút điền từ tự do (Part 6) theo ngữ pháp của unit",
     "ket_codes": [
      "S4",
      "R6"
     ],
     "subskills": [
      "RS8",
      "SS4",
      "VS1"
     ],
     "grammar": "B12 Bị động hiện tại đơn và quá khứ đơn; B13 have/get something done",
     "vocabulary": "remote, hold your breath, stilts, generation, ocean culture, plastic, sky, ground, recycling",
     "can_do": "Unit check ≥ 70%; Language test ≥ 70%; mỗi học sinh nói ≥ 4 câu khi trình bày dự án",
     "before": "1. [Dự án] Chuẩn bị phần dự án của mình: Thiết kế cộng đồng: kế hoạch hành động kết nối con người với thiên nhiên (tìm thông tin, viết 4–5 câu sẽ nói) (12')\n2. [Nghe] Xem video Switch on 'Ocean culture' (SB tr. 78) có phụ đề, trả lời 3 câu hỏi (6')\n3. [Nói] Ghi âm phần trình bày dự án của mình 1 phút để tập (4')\n4. [Ôn] Quiz trộn 20 câu từ vựng + ngữ pháp U6 (6')\n5. [Lồng tiếng] 1 đoạn video Switch on 'Ocean culture' (20–40 giây) (6')",
     "after": "1. [Ôn] Workbook tr. 55 Unit check (8')\n2. [Ôn] Language Test A U6 trên website (Assessment package) (25')\n3. [Tự học] Independent learning SB tr. 78: phiếu tự đánh giá + ghi âm 1 phút 'Unit 6: em làm tốt… em cần…' (4')\n4. [Từ vựng] Từ vựng chủ đề PET tự học: 'Services' – Wordwall 15 từ (6')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Down to Earth' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Ocean culture') (6')\n6. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U6 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 34,
     "after_min": 55,
     "in_class": [
      {
       "minutes": 15,
       "activity": "Ôn từ vựng và ngữ pháp của unit qua trò chơi",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Video Switch on + thảo luận",
       "category": "input"
      },
      {
       "minutes": 35,
       "activity": "Dự án nhóm: hoàn thiện và trình bày, đánh giá chéo",
       "category": "output"
      },
      {
       "minutes": 30,
       "activity": "Unit check",
       "category": "test"
      },
      {
       "minutes": 10,
       "activity": "Independent learning, giao bài",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Bảo vệ môi trường và đại dương, người trẻ tạo thay đổi (SDG 13, 14) · Phân bổ 105': video + thảo luận 20', trình bày dự án 30', Part 6 mini 10', Unit check 25', Skills Test A 20'",
     "materials": "Video U6 (videoscript TB tr. 149); Grammar file SB tr. 137 (bài luyện); Unit test B1 U6: Skills Test A tại lớp 20' (Assessment package); Language Test A làm trên website",
     "assessment": "—"
    },
    {
     "session_id": "BO-48",
     "session_no": 48,
     "week": 24,
     "hp": "HP3",
     "unit": "Sự kiện",
     "unit_title": "Công dân toàn cầu",
     "type": "Sự kiện",
     "kind": "Sự kiện kỹ năng",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Sự kiện E7 · Blue Planet Action Day",
     "task": "—",
     "content": "Thiên nhiên, môi trường; câu bị động, have sth done",
     "ket_part": "[R4] đọc tài liệu về một loài sinh vật biển · [S3] chọn hành động ưu tiên · [W1] email cam kết gửi trường ~100 từ",
     "ket_codes": [
      "R4",
      "S3",
      "W1"
     ],
     "subskills": [
      "RS5",
      "SS3",
      "WS1",
      "WS4"
     ],
     "grammar": "B12 Bị động hiện tại đơn và quá khứ đơn; B13 have/get something done",
     "vocabulary": "Dùng lại từ vựng của unit vừa học (xem cột này ở các buổi trước)",
     "can_do": "Mỗi nhóm trình bày 1 kế hoạch giảm rác nhựa 3 phút, dùng ≥ 3 câu bị động",
     "before": "1. [Dự án] Chuẩn bị phần việc của mình cho sự kiện 'Blue Planet Action Day' (nội dung, đồ dùng, vai) (15')\n2. [Nói] Viết và ghi âm phần nói của mình 1–2 phút, nghe lại và sửa (8')\n3. [Từ vựng] Ôn từ vựng và cấu trúc cần dùng: Thiên nhiên, môi trường; câu bị động, have sth done (6')\n4. [Lồng tiếng] clip chủ đề sự kiện (6')",
     "after": "1. [Tự học] Tự đánh giá theo rubric 4 tiêu chí (3')\n2. [Viết] Bài viết sau sự kiện (dạng W1) ~100 từ (15')\n3. [Nói] Xem video sự kiện của nhóm, ghi âm nhận xét 1 phút (1 điểm tốt, 1 điểm cần cải thiện) (5')\n4. [Nghe] Nghe phần trình bày của 1 nhóm khác, trả lời 3 câu hỏi (6')\n5. [Từ vựng] Ôn thẻ đến hạn (4')\n6. [Lồng tiếng] 2 clip (12')\n7. [Ôn] Quiz trộn 10 câu unit vừa học (5')\n8. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 35,
     "after_min": 56,
     "in_class": [
      {
       "minutes": 20,
       "activity": "Chuẩn bị ngôn ngữ cho sản phẩm",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Thực hiện sản phẩm trước khán giả",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Phản hồi theo rubric",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá năng lực",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Bảo vệ đại dương và khí hậu (SDG 13, 14)",
     "materials": "Rubric 4 tiêu chí: ngôn ngữ, nội dung, hợp tác, trình bày",
     "assessment": "—"
    },
    {
     "session_id": "BO-49",
     "session_no": 49,
     "week": 25,
     "hp": "HP3",
     "unit": "U7",
     "unit_title": "Travellers' tales",
     "type": "Reading",
     "kind": "Unit – Reading + Grammar",
     "sb_pages": "81–84, 138",
     "wb_pages": "58–60",
     "focus": "U7 Travellers' tales · Lead-in + Reading + Grammar 1",
     "task": "Đọc về các cách tham quan London (cáp treo, Segway, xe đạp, thuyền), nối chi tiết; cụm động từ jump on, stop off, sign up, get about",
     "content": "Ngữ pháp: Mệnh đề quan hệ xác định: who, which, that, where, whose; khi nào được lược đại từ quan hệ · Kỹ năng đọc: matching details",
     "ket_part": "[R2] nối 5 người với 8 văn bản — kỹ năng matching details; gạch từ khóa, tìm cách diễn đạt khác trong bài",
     "ket_codes": [
      "R2"
     ],
     "subskills": [
      "RS3"
     ],
     "grammar": "B14 Mệnh đề quan hệ xác định (who, which, that, where, whose)",
     "vocabulary": "tales, transport, convenient, cable car, Segway, backpacker, rail travel, jump on, jump off, stop off, sign up, get about, experienced guide, ancient, heart of the city, gently, resident",
     "can_do": "≥ 4/5 câu nối Part 2; viết 6 câu dùng điểm ngữ pháp B14, ≥ 5 câu đúng",
     "before": "1. [Từ vựng] Chuỗi 5 bước nhớ từ của bài đọc (nghe–nhắc lại → ghép hình → nghe chọn → nghe gõ → điền câu từ bài đọc): tales, transport, convenient, cable car, Segway, backpacker, rail travel, jump on, jump off, stop off, sign up, get about (10')\n2. [Nói] Lead-in SB tr. 81: xem ảnh mở bài, ghi âm 30–45 giây trả lời câu hỏi mở bài (4')\n3. [Nghe] Nghe – đọc đoạn đầu bài đọc SB tr. 82 (audio gốc), trả lời 2 câu dự đoán ý chính (5')\n4. [Ngữ pháp] Video ngắn: Mệnh đề quan hệ xác định: who, which, that, where, whose; khi nào được lược đại từ quan hệ (theo Grammar file SB tr. 138, Grammar ppt U7) + 5 câu kiểm tra hiểu (7')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Travellers' tales' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Surf around the world') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (unit trước) (3')",
     "after": "1. [Ôn] Quiz nhớ lại 10 câu: từ bài đọc + điểm ngữ pháp vừa học, không mở sách (5')\n2. [Đọc] Workbook tr. 58–59 Reading (số hóa, chấm tự động; dạng R2) (10')\n3. [Ngữ pháp] Workbook tr. 60 Grammar (6')\n4. [Ngữ pháp] Grammar file SB tr. 139: 1–2 bài luyện phần Mệnh đề quan hệ xác định (5')\n5. [Nghe] Chép chính tả 4 câu từ audio bài đọc SB tr. 82–83 (5')\n6. [Nói] Shadowing 5 câu của bài đọc (audio gốc, ghi âm, nhận dạng giọng nói đánh dấu từ chưa rõ) (5')\n7. [Nói] Ghi âm 1 phút nói lại nội dung bài đọc, dùng ít nhất 3 từ mới và điểm ngữ pháp vừa học (3')\n8. [Lồng tiếng] clip 20–40 giây chủ đề 'Travellers' tales' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Surf around the world') (12')\n9. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U7 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 35,
     "after_min": 57,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Khởi động: kiểm tra nhanh từ vựng đã học trước ở nhà (gói PRE)",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Lead-in: thảo luận ảnh và câu hỏi mở bài",
       "category": "fluency"
      },
      {
       "minutes": 30,
       "activity": "Reading: đọc lướt lấy ý chính → làm dạng bài PET → chữa bằng câu chứa đáp án",
       "category": "input"
      },
      {
       "minutes": 25,
       "activity": "Grammar 1: tìm quy tắc trong bài đọc → luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Dùng ngữ pháp mới để nói và viết về bản thân",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Tổng kết, giới thiệu gói POST-LESSON",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Grammar file SB tr. 138 (lý thuyết); Grammar ppt B1 U7; Photocopiable 7A (ngữ pháp)",
     "assessment": "—"
    },
    {
     "session_id": "BO-50",
     "session_no": 50,
     "week": 25,
     "hp": "HP3",
     "unit": "U7",
     "unit_title": "Travellers' tales",
     "type": "Listening",
     "kind": "Unit – Vocabulary + Listening",
     "sb_pages": "85–86, 145, 173",
     "wb_pages": "61–62",
     "focus": "U7 Travellers' tales · Vocabulary + Listening + Grammar 2",
     "task": "Nghe Sarah, bạn teen học qua du lịch thay vì đến trường; xác định loại thông tin còn thiếu",
     "content": "Từ vựng: Du lịch: flight, check in, take off, destination, abroad, border, delay, sightseeing, traffic jam · travel/journey/trip · dạng danh từ check-in, take-off · Ngữ pháp 2: Động từ khuyết thiếu chỉ bắt buộc, cấm, cần thiết: must, mustn't, have to, don't have to, had to, need to · Cấu tạo từ: danh từ ghép từ cụm động từ (check-in, take-off); hậu tố -ion, -al",
     "ket_part": "[R5] điền từ trắc nghiệm (từ vựng, collocation) · [L3] điền 6 thông tin — đọc câu hỏi trước khi nghe, dự đoán đáp án, nghe lần 2 để kiểm tra · [LS7] chép chính tả 3–4 câu từ lời thoại, chú ý âm nối, âm yếu, dạng rút gọn",
     "ket_codes": [
      "R5",
      "L3"
     ],
     "subskills": [
      "LS3",
      "LS5",
      "LS7",
      "RS7",
      "VS1",
      "VS2",
      "VS3"
     ],
     "grammar": "B15 Khuyết thiếu chỉ bắt buộc, cấm, cần thiết: must, have to, don't have to, need to",
     "vocabulary": "flight, land, check in, take off, destination, abroad, border, delay, passport, sightseeing, motorway, traffic jam, travel / journey / trip / voyage, check in / check-in, take off / take-off, delay / delayed, travelling, external, obligation, prohibition, necessity, must, mustn't, have to, don't have to, had to, will have to, won't have to, need to, travel guides, continents",
     "can_do": "≥ 4/6 câu Part 5; ≥ 4/6 chỗ trống Part 3, đúng chính tả; dùng đúng B15 trong ≥ 5/6 câu; chuyển đúng dạng từ ≥ 8/10 câu",
     "before": "1. [Từ vựng] Chuỗi 5 bước nhớ từ của bài Vocabulary SB tr. 85: flight, land, check in, take off, destination, abroad, border, delay, passport, sightseeing, motorway, traffic jam, check in / check-in, take off / take-off (10')\n2. [Nghe] Nghe mồi 30–60 giây đầu bài nghe SB tr. 86 (audio gốc), dự đoán 2 câu (4')\n3. [Ngữ pháp] Video ngắn: Động từ khuyết thiếu chỉ bắt buộc, cấm, cần thiết: must, mustn't, have to, don't have to, had to, need to + 5 câu kiểm tra hiểu (6')\n4. [Từ vựng] Extend vocabulary SB tr. 145 (phần U7): ghép 8 từ mở rộng với hình/nghĩa (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Travellers' tales' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Surf around the world') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Ôn] Quiz nhớ lại 10 câu: từ vựng + ngữ pháp 2, không mở sách (5')\n2. [Từ vựng] Workbook tr. 61 Vocabulary (6')\n3. [Nghe] Workbook tr. 62 Listening (audio Workbook) (8')\n4. [Nghe] Nghe lại bài nghe SB tr. 86 có lời thoại theo câu + 1 part nghe PET rút gọn dạng L3 (8')\n5. [Nghe] Chép chính tả 4 câu từ bài nghe SB tr. 86, ưu tiên âm yếu, âm nối (5')\n6. [Nói] Shadowing 5 câu của bài nghe (5')\n7. [Lồng tiếng] clip 20–40 giây chủ đề 'Travellers' tales' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Surf around the world') (12')\n8. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U7 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 33,
     "after_min": 55,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng nhanh",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Vocabulary SB + Extend vocabulary",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Listening PET: dự đoán → nghe lần 1 → nghe lần 2 kiểm tra → đọc audioscript",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Grammar 2: giới thiệu và luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Nói theo cặp dùng từ và ngữ pháp mới",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Chép chính tả 3 câu từ bài nghe, giao bài",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Extend vocabulary SB tr. 145; Photocopiable 7B (từ vựng), 7C; audioscript SB tr. 173 (chữa bài nghe); Dictation trong Skills Test của unit (Assessment package)",
     "assessment": "—"
    },
    {
     "session_id": "BO-51",
     "session_no": 51,
     "week": 26,
     "hp": "HP3",
     "unit": "U7",
     "unit_title": "Travellers' tales",
     "type": "Speaking",
     "kind": "Unit – Speaking",
     "sb_pages": "87, 149",
     "wb_pages": "63",
     "focus": "U7 Travellers' tales · Speaking",
     "task": "Thảo luận sự cố khi đi du lịch; nhắc lại ý người khác (As X said…, Unlike X, I…)",
     "content": "Cụm câu chức năng của bài nói; dùng lại ngữ pháp B14, B15 và từ vựng U7 khi nói",
     "ket_part": "[S4] thảo luận mở rộng — luyện theo cặp, đổi vai; giáo viên chấm mẫu theo thang Nói PET: Grammar & Vocabulary, Discourse management, Pronunciation, Interactive communication (0–5) · [SS7] phát âm 15 phút: must /mʌs/ (âm t câm trước phụ âm), have to /hæftə/ (theo TB U7) · [SS5] Speaking extra: kể sự cố khi đi du lịch 1–2 phút (mở – diễn biến – kết, thì quá khứ)",
     "ket_codes": [
      "S4"
     ],
     "subskills": [
      "SS4",
      "SS5",
      "SS7"
     ],
     "grammar": "B14 Mệnh đề quan hệ xác định (who, which, that, where, whose); B15 Khuyết thiếu chỉ bắt buộc, cấm, cần thiết: must, have to, don't have to, need to",
     "vocabulary": "souvenir, travel problems, valuable things, safe, information desk, As (Jack) said …, Like (Molly), I …, Unlike (Molly), I'm not sure I agree with …, I'd (wouldn't) do the same as …, That's never happened to me",
     "can_do": "trả lời mỗi câu hỏi mở rộng ≥ 3 câu, có lý do, hỏi lại ý bạn; đọc đúng ≥ 8/10 câu mẫu phát âm; kể liền mạch 1–2 phút, ≥ 3 từ nối thời gian",
     "before": "1. [Nói] Học cụm câu chức năng (nghe – nhắc lại – ghi âm) theo Speaking file SB tr. 149: souvenir, travel problems, valuable things, safe, information desk, Like (Molly), Unlike (Molly) (8')\n2. [Nói] Đọc câu hỏi bài nói SB tr. 87, ghi âm câu trả lời nháp 1 phút (5')\n3. [Nghe] Nghe câu trả lời mẫu (giọng Gemini) rồi đánh dấu 3 cụm câu muốn dùng (5')\n4. [Từ vựng] Ôn nhanh từ vựng U7 cần cho bài nói (quiz 10 câu) (5')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Travellers' tales' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Surf around the world') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Nói] Workbook tr. 63 Speaking (số hóa; ghi âm các đoạn hội thoại trong trang) (7')\n2. [Nói] Ghi âm lại bài nói hoàn chỉnh 1–2 phút theo dạng S4 sau góp ý trên lớp (6')\n3. [Phát âm] Luyện 10 câu: must /mʌs/ (âm t câm trước phụ âm), have to /hæftə/ (theo TB U7) (6')\n4. [Nói] Shadowing câu trả lời mẫu (5')\n5. [Ôn] Quiz cụm câu chức năng (nghe chọn cụm phù hợp tình huống) (4')\n6. [Lồng tiếng] clip 20–40 giây chủ đề 'Travellers' tales' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Surf around the world') (12')\n7. [Từ vựng] Ôn thẻ từ đến hạn (3')\n8. [Nghe] Nghe bài nói của 2 bạn trong lớp (giáo viên chọn), chấm theo 2 tiêu chí (4')\n9. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U7 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 32,
     "after_min": 53,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Khởi động nói nhanh 4-3-2",
       "category": "fluency"
      },
      {
       "minutes": 15,
       "activity": "Nghe bài nói mẫu, ghi cụm câu chức năng (Speaking file)",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "Phát âm trọng tâm của buổi",
       "category": "lang"
      },
      {
       "minutes": 40,
       "activity": "Luyện part Nói PET theo cặp, đổi vai, đổi bạn",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Nói trước lớp, giáo viên chấm theo thang Nói PET",
       "category": "test"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá, giao bài ghi âm",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Speaking file SB tr. 149",
     "assessment": "—"
    },
    {
     "session_id": "BO-52",
     "session_no": 52,
     "week": 26,
     "hp": "HP3",
     "unit": "U7",
     "unit_title": "Travellers' tales",
     "type": "Writing",
     "kind": "Unit – Writing",
     "sb_pages": "88–89, 152–153",
     "wb_pages": "64",
     "focus": "U7 Travellers' tales · Writing",
     "task": "Bài báo mẹo du lịch ~100 từ: tạo hứng thú bằng câu hỏi cho người đọc",
     "content": "Lập dàn ý → viết nháp trên lớp → tự soát theo mục Improve it",
     "ket_part": "[W2] bài báo hoặc truyện ~100 từ — phân tích đề, gạch ý bắt buộc, viết 20–25 phút · [WS5] nâng câu: viết lại 3 câu đơn trong bài thành câu phức (mệnh đề quan hệ, điều kiện, bị động, although)",
     "ket_codes": [
      "W2"
     ],
     "subskills": [
      "WS2",
      "WS4",
      "WS5",
      "WS6"
     ],
     "grammar": "—",
     "vocabulary": "travel sick, travel sickness, tip, top tip, take-off, landing, eye mask, ear plugs, What do you think of my suggestion?, How important is it for you to …?, Have you got any good suggestions for …?, Let me know what you think",
     "can_do": "bài ~100 từ có mở – thân – kết, ≥ 3 từ nối, ≤ 3 lỗi, thang PET ≥ 3/5 mỗi tiêu chí",
     "before": "1. [Viết] Đọc bài mẫu SB tr. 88–89 và Writing file SB tr. 152–153: bấm chọn câu mở bài, 3 từ nối, câu kết (6')\n2. [Từ vựng] Cụm câu cho bài viết (nghe – nhắc lại – điền câu): travel sick, travel sickness, tip, top tip, take-off, landing, eye mask, ear plugs (6')\n3. [Viết] Lập dàn ý cho đề bài trên sơ đồ (ý chính mỗi đoạn) (6')\n4. [Nghe] Nghe – đọc bài mẫu (giọng Gemini) 2 lần (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Travellers' tales' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Surf around the world') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Viết] Viết lại bài theo nhận xét trên lớp, tự soát 4 mục (đủ ý, chia đoạn, từ nối, chính tả) (15')\n2. [Viết] Workbook tr. 64 Writing (8')\n3. [Viết] Nâng câu: viết lại 3 câu đơn trong bài thành câu phức (5')\n4. [Nói] Đọc to bài viết của mình và ghi âm (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Travellers' tales' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Surf around the world') (12')\n6. [Ôn] Quiz nhớ lại 8 câu: từ nối và cụm câu bài viết (4')\n7. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U7 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 31,
     "after_min": 54,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Sửa lỗi chung từ bài nói và bài tập về nhà",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Phân tích đề và bài mẫu (Writing file)",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "Cụm câu, từ nối, câu phức cho dạng bài",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Lập dàn ý theo cặp",
       "category": "output"
      },
      {
       "minutes": 25,
       "activity": "Viết nháp có bấm giờ",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Tự soát theo Improve it, chấm chéo theo thang PET",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tổng kết, giao bài viết lại",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Writing file SB tr. 152–153 (bài mẫu, cụm câu); thang chấm PET: Content, Communicative achievement, Organisation, Language (0–5)",
     "assessment": "—"
    },
    {
     "session_id": "BO-53",
     "session_no": 53,
     "week": 27,
     "hp": "HP3",
     "unit": "U7",
     "unit_title": "Travellers' tales",
     "type": "Project & Check",
     "kind": "Unit – Ôn tập + Dự án",
     "sb_pages": "90–92, 139",
     "wb_pages": "65",
     "focus": "U7 Travellers' tales · Ôn tập và Dự án",
     "task": "Video 'Surf around the world'; dự án: Tìm hiểu và trình bày một nền văn hóa khác (đồ ăn, trang phục, nghề, giải trí) hoặc blog du lịch; Independent learning; Unit check",
     "content": "Ôn từ vựng và ngữ pháp U7 · Independent learning: Speaking skills: top 5 mẹo nói, mục tiêu phát âm",
     "ket_part": "[S2] trình bày dự án văn hóa 2–3 phút, mỗi thành viên nói ≥ 4 câu · [R6] 10 phút điền từ tự do (Part 6) theo ngữ pháp của unit",
     "ket_codes": [
      "S2",
      "R6"
     ],
     "subskills": [
      "RS8",
      "SS2",
      "VS1"
     ],
     "grammar": "B14 Mệnh đề quan hệ xác định (who, which, that, where, whose); B15 Khuyết thiếu chỉ bắt buộc, cấm, cần thiết: must, have to, don't have to, need to",
     "vocabulary": "surfer, surfing, culture, traditions, dancer, desert, nomadic, whose, unpack",
     "can_do": "Unit check ≥ 70%; Language test ≥ 70%; mỗi học sinh nói ≥ 4 câu khi trình bày dự án",
     "before": "1. [Dự án] Chuẩn bị phần dự án của mình: Tìm hiểu và trình bày một nền văn hóa khác (đồ ăn, trang phục, nghề, giải trí) hoặc blog du lịch (tìm thông tin, viết 4–5 câu sẽ nói) (12')\n2. [Nghe] Xem video Switch on 'Surf around the world' (SB tr. 90) có phụ đề, trả lời 3 câu hỏi (6')\n3. [Nói] Ghi âm phần trình bày dự án của mình 1 phút để tập (4')\n4. [Ôn] Quiz trộn 20 câu từ vựng + ngữ pháp U7 (6')\n5. [Lồng tiếng] 1 đoạn video Switch on 'Surf around the world' (20–40 giây) (6')",
     "after": "1. [Ôn] Workbook tr. 65 Unit check (8')\n2. [Ôn] Language Test A U7 trên website (Assessment package) (25')\n3. [Tự học] Independent learning SB tr. 90: phiếu tự đánh giá + ghi âm 1 phút 'Unit 7: em làm tốt… em cần…' (4')\n4. [Từ vựng] Từ vựng chủ đề PET tự học: 'Work and jobs' – Wordwall 15 từ (6')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Travellers' tales' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Surf around the world') (6')\n6. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U7 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 34,
     "after_min": 55,
     "in_class": [
      {
       "minutes": 15,
       "activity": "Ôn từ vựng và ngữ pháp của unit qua trò chơi",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Video Switch on + thảo luận",
       "category": "input"
      },
      {
       "minutes": 35,
       "activity": "Dự án nhóm: hoàn thiện và trình bày, đánh giá chéo",
       "category": "output"
      },
      {
       "minutes": 30,
       "activity": "Unit check",
       "category": "test"
      },
      {
       "minutes": 10,
       "activity": "Independent learning, giao bài",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Hiểu biết liên văn hóa, học qua trải nghiệm (SDG 4) · Phân bổ 105': video + thảo luận 20', trình bày dự án 30', Part 6 mini 10', Unit check 25', Skills Test A 20'",
     "materials": "Video U7 (videoscript TB tr. 149); Grammar file SB tr. 139 (bài luyện); Unit test B1 U7: Skills Test A tại lớp 20' (Assessment package); Language Test A làm trên website",
     "assessment": "—"
    },
    {
     "session_id": "BO-54",
     "session_no": 54,
     "week": 27,
     "hp": "HP3",
     "unit": "Sự kiện",
     "unit_title": "Công dân toàn cầu",
     "type": "Sự kiện",
     "kind": "Sự kiện kỹ năng",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Sự kiện E8 · Around the World Culture Fair",
     "task": "—",
     "content": "Du lịch, văn hóa; mệnh đề quan hệ, must/have to",
     "ket_part": "[S2] thuyết minh gian hàng 1 nước · [L3] nghe khách hỏi và ghi thông tin · [W2] bài báo mẹo du lịch ~100 từ",
     "ket_codes": [
      "S2",
      "L3",
      "W2"
     ],
     "subskills": [
      "LS3",
      "SS2",
      "WS2",
      "WS4"
     ],
     "grammar": "B14 Mệnh đề quan hệ xác định (who, which, that, where, whose); B15 Khuyết thiếu chỉ bắt buộc, cấm, cần thiết: must, have to, don't have to, need to",
     "vocabulary": "Dùng lại từ vựng của unit vừa học (xem cột này ở các buổi trước)",
     "can_do": "Mỗi nhóm dựng 1 gian văn hóa, giới thiệu luật lệ/phong tục bằng must/have to; mỗi học sinh tiếp ≥ 3 khách",
     "before": "1. [Dự án] Chuẩn bị phần việc của mình cho sự kiện 'Around the World Culture Fair' (nội dung, đồ dùng, vai) (15')\n2. [Nói] Viết và ghi âm phần nói của mình 1–2 phút, nghe lại và sửa (8')\n3. [Từ vựng] Ôn từ vựng và cấu trúc cần dùng: Du lịch, văn hóa; mệnh đề quan hệ, must/have to (6')\n4. [Lồng tiếng] clip chủ đề sự kiện (6')",
     "after": "1. [Tự học] Tự đánh giá theo rubric 4 tiêu chí (3')\n2. [Viết] Bài viết sau sự kiện (dạng W2) ~100 từ (15')\n3. [Nói] Xem video sự kiện của nhóm, ghi âm nhận xét 1 phút (1 điểm tốt, 1 điểm cần cải thiện) (5')\n4. [Nghe] Nghe phần trình bày của 1 nhóm khác, trả lời 3 câu hỏi (6')\n5. [Từ vựng] Ôn thẻ đến hạn (4')\n6. [Lồng tiếng] 2 clip (12')\n7. [Ôn] Quiz trộn 10 câu unit vừa học (5')\n8. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 35,
     "after_min": 56,
     "in_class": [
      {
       "minutes": 20,
       "activity": "Chuẩn bị ngôn ngữ cho sản phẩm",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Thực hiện sản phẩm trước khán giả",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Phản hồi theo rubric",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá năng lực",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Hiểu biết liên văn hóa (SDG 4)",
     "materials": "Rubric 4 tiêu chí: ngôn ngữ, nội dung, hợp tác, trình bày",
     "assessment": "—"
    },
    {
     "session_id": "BO-55",
     "session_no": 55,
     "week": 28,
     "hp": "HP3",
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Review",
     "kind": "Củng cố",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Củng cố · Nghe – Đọc (U6, U7)",
     "task": "—",
     "content": "Chủ đề U6, U7 · Nhận ra các điểm ngữ pháp B12, B13, B14, B15, B21 trong bài đọc và lời thoại",
     "ket_part": "[R2] nối 5 người với 8 văn bản · [R4] điền 5 câu vào bài (3 câu thừa) · [R5] điền từ trắc nghiệm (từ vựng, collocation) · [L3] điền 6 thông tin · [L4] phỏng vấn dài, 6 câu trắc nghiệm — làm theo thời gian thật của đề, chữa bằng cách gạch câu chứa đáp án · [RS9] kiểm tra nhật ký đọc: kể tóm tắt sách đọc phân cấp 1 phút",
     "ket_codes": [
      "R2",
      "R4",
      "R5",
      "L3",
      "L4"
     ],
     "subskills": [
      "LS3",
      "LS4",
      "LS5",
      "RS3",
      "RS5",
      "RS7",
      "RS9",
      "SS5"
     ],
     "grammar": "B12 Bị động hiện tại đơn và quá khứ đơn; B13 have/get something done; B14 Mệnh đề quan hệ xác định (who, which, that, where, whose); B15 Khuyết thiếu chỉ bắt buộc, cấm, cần thiết: must, have to, don't have to, need to; B21 Trật tự tính từ; tính từ -ed/-ing; B30 Lượng từ: a few / a little, few / little, too much / too many, plenty of",
     "vocabulary": "Ôn từ vựng các unit trong học phần; làm lại từ sai trên Wordwall",
     "can_do": "≥ 4/5 câu nối Part 2; ≥ 3/5 câu Part 4; ≥ 4/6 câu Part 5; ≥ 4/6 chỗ trống Part 3, đúng chính tả; ≥ 4/6 câu Part 4",
     "before": "1. [Ôn] Quiz trộn 20 câu từ vựng + ngữ pháp các unit trong học phần (8')\n2. [Nghe] Nghe lại 2 bài nghe điểm thấp nhất trong học phần, có lời thoại (8')\n3. [Đọc] Đọc lại 1 bài đọc của sách, tìm 5 cụm diễn đạt khác (paraphrase) (8')\n4. [Từ vựng] Ôn thẻ đến hạn (5')\n5. [Lồng tiếng] clip ôn tập (6')",
     "after": "1. [Thi] Làm lại các câu sai của đề luyện trên lớp, ghi lý do sai (10')\n2. [Nghe] 1 part nghe tiếp theo của đề PTP (dạng L3, L4) + chép chính tả 4 câu (12')\n3. [Đọc] 1 part đọc của đề PTP (dạng R2, R4, R5) (10')\n4. [Nói] Shadowing 5 câu của bài nghe (5')\n5. [Lồng tiếng] 2 clip (12')\n6. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 35,
     "after_min": 55,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn từ vựng học phần",
       "category": "lang"
      },
      {
       "minutes": 35,
       "activity": "Reading PET: làm có bấm giờ → chữa → rút chiến lược",
       "category": "input"
      },
      {
       "minutes": 35,
       "activity": "Listening PET: làm → chữa → nghe lại có lời",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "Làm lại câu sai với đề khác",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Đọc hoặc nghe mở rộng mức dễ",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Practice Tests Plus B1 Preliminary for Schools (PTP) Test 3: Reading Part 2, Part 4, Part 5; Listening Part 3, Part 4; Skills Test A U6, U7",
     "assessment": "—"
    },
    {
     "session_id": "BO-56",
     "session_no": 56,
     "week": 28,
     "hp": "HP3",
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Test",
     "kind": "Củng cố + kiểm tra Nói",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Củng cố · Nói – Viết + kiểm tra Nói HP3",
     "task": "—",
     "content": "Câu hỏi cá nhân, tả ảnh, thảo luận theo chủ đề đã học · từ nối và câu mở rộng",
     "ket_part": "[S1] câu hỏi cá nhân · [S3] thảo luận cặp theo tranh gợi ý · [S4] thảo luận mở rộng — thi Nói theo cặp với giáo viên · [W1] email ~100 từ theo 4 ghi chú · [W2] bài báo hoặc truyện ~100 từ — viết có bấm giờ 22 phút",
     "ket_codes": [
      "S1",
      "S3",
      "S4",
      "W1",
      "W2"
     ],
     "subskills": [
      "SS1",
      "SS3",
      "SS4",
      "WS1",
      "WS2",
      "WS3",
      "WS4"
     ],
     "grammar": "B12 Bị động hiện tại đơn và quá khứ đơn; B13 have/get something done; B14 Mệnh đề quan hệ xác định (who, which, that, where, whose); B15 Khuyết thiếu chỉ bắt buộc, cấm, cần thiết: must, have to, don't have to, need to; B21 Trật tự tính từ; tính từ -ed/-ing; B30 Lượng từ: a few / a little, few / little, too much / too many, plenty of",
     "vocabulary": "Ôn từ vựng các unit trong học phần; làm lại từ sai trên Wordwall",
     "can_do": "Thi Nói đạt ≥ 3/5 mỗi tiêu chí (thang Nói PET: Grammar & Vocabulary, Discourse management, Pronunciation, Interactive communication (0–5)); bài viết đạt ≥ 3/5 mỗi tiêu chí PET",
     "before": "1. [Nói] Luyện 4 part Nói theo bộ câu hỏi mẫu, ghi âm từng part (12')\n2. [Nghe] Xem video thí sinh mẫu Cambridge, ghi 3 cụm câu học được (8')\n3. [Viết] Lập dàn ý 1 email và 1 article/story (8')\n4. [Lồng tiếng] clip (6')",
     "after": "1. [Nói] Ghi âm lại part Nói chưa đạt theo nhận xét (8')\n2. [Viết] Viết lại bài viết có bấm giờ theo nhận xét (15')\n3. [Phát âm] Luyện 10 câu theo lỗi phát âm được ghi trong buổi thi Nói (6')\n4. [Nghe] 1 part nghe PET (7')\n5. [Lồng tiếng] 2 clip (12')\n6. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 34,
     "after_min": 54,
     "in_class": [
      {
       "minutes": 90,
       "activity": "GV thi Nói từng cặp 10–12'; các cặp khác viết PET Part 1/2 bấm giờ",
       "category": "test"
      },
      {
       "minutes": 15,
       "activity": "Tự chấm bài viết theo thang PET",
       "category": "lang"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "PTP Test 3: Speaking, Writing; Speaking file SB tr. 146–149; Writing file SB tr. 150–155; Review Test 2 (Units 4–6): Writing, Speaking",
     "assessment": "—"
    },
    {
     "session_id": "BO-57",
     "session_no": 57,
     "week": 29,
     "hp": "HP3",
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Test",
     "kind": "Kiểm tra học phần",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Ngữ pháp nền + kiểm tra HP3",
     "task": "—",
     "content": "Ôn ngữ pháp B12, B13, B14, B15, B21, B30 — ghi lỗi vào bảng lỗi cá nhân",
     "ket_part": "[E] làm bài đúng thời gian, chuyển đáp án sang phiếu trả lời · [R2] nối 5 người với 8 văn bản · [R4] điền 5 câu vào bài (3 câu thừa) · [L3] điền 6 thông tin · [L4] phỏng vấn dài, 6 câu trắc nghiệm",
     "ket_codes": [
      "R2",
      "R4",
      "L3",
      "L4"
     ],
     "subskills": [
      "LS3",
      "LS4",
      "RS3",
      "RS5"
     ],
     "grammar": "B12 Bị động hiện tại đơn và quá khứ đơn; B13 have/get something done; B14 Mệnh đề quan hệ xác định (who, which, that, where, whose); B15 Khuyết thiếu chỉ bắt buộc, cấm, cần thiết: must, have to, don't have to, need to; B21 Trật tự tính từ; tính từ -ed/-ing; B30 Lượng từ: a few / a little, few / little, too much / too many, plenty of",
     "vocabulary": "Ôn từ vựng các unit trong học phần; làm lại từ sai trên Wordwall",
     "can_do": "Kiểm tra ≥ 60% mỗi phần; ≥ 80% câu ngữ pháp mức có kiểm soát (B12, B13, B14, B15, B21, B30)",
     "before": "1. [Ngữ pháp] Quiz ôn ngữ pháp của học phần 30 câu (có giải thích) (12')\n2. [Từ vựng] Ôn thẻ: toàn bộ từ của học phần còn đến hạn (8')\n3. [Thi] Xem lại chiến lược các part sẽ kiểm tra (video 5') (5')\n4. [Nghe] Nghe 1 bài nghe của sách có lời thoại (5')\n5. [Lồng tiếng] clip (6')",
     "after": "1. [Tự học] Xem bài kiểm tra, ghi 5 lỗi chính vào bảng lỗi cá nhân (8')\n2. [Ngữ pháp] Làm lại câu sai dưới dạng mới (website tự tạo) (12')\n3. [Nghe] Nghe lại phần nghe của bài kiểm tra có lời thoại, chép chính tả 4 câu (10')\n4. [Nói] Ghi âm 1 phút: điều em làm tốt và điều em cần cải thiện (3')\n5. [Lồng tiếng] 2 clip (12')\n6. [Từ vựng] Ôn thẻ (5')\n7. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 36,
     "after_min": 56,
     "in_class": [
      {
       "minutes": 40,
       "activity": "Ôn các điểm ngữ pháp nền của học phần",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Kiểm tra: các part PET đã học + câu ngữ pháp nền",
       "category": "test"
      },
      {
       "minutes": 5,
       "activity": "Ghi lỗi vào bảng lỗi cá nhân",
       "category": "lang"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Review Test 2 (Units 4–6) Grammar & Vocabulary; Language Test B U7; Grammar file SB tr. 136–139; Câu hỏi bổ sung cho B30 (IVY soạn)",
     "assessment": "—"
    },
    {
     "session_id": "BO-58",
     "session_no": 58,
     "week": 29,
     "hp": "HP3",
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Review",
     "kind": "Linh hoạt",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Linh hoạt 3: bù hoặc tăng cường",
     "task": "—",
     "content": "Nhóm bù: điểm ngữ pháp chưa đạt ở buổi kiểm tra · Nhóm tăng cường: dùng B15, B21 trong bài viết và bài nói dài hơn",
     "ket_part": "Nhóm bù: luyện lại part điểm thấp nhất, nghe lần 2 có lời thoại · Nhóm tăng cường: bài viết ~120 từ, nói 2 phút",
     "ket_codes": [],
     "subskills": [],
     "grammar": "B12 Bị động hiện tại đơn và quá khứ đơn; B13 have/get something done; B14 Mệnh đề quan hệ xác định (who, which, that, where, whose); B15 Khuyết thiếu chỉ bắt buộc, cấm, cần thiết: must, have to, don't have to, need to; B21 Trật tự tính từ; tính từ -ed/-ing; B30 Lượng từ: a few / a little, few / little, too much / too many, plenty of",
     "vocabulary": "Ôn từ vựng các unit trong học phần; làm lại từ sai trên Wordwall",
     "can_do": "Nhóm bù đúng ≥ 80% điểm chưa đạt; nhóm tăng cường đạt ≥ 4/5 ở ≥ 2 tiêu chí PET",
     "before": "1. [Ôn] Bài theo nhóm: nhóm bù – điểm ngữ pháp chưa đạt; nhóm tăng cường – bài viết/nói dài hơn (15')\n2. [Nghe] Nghe 1 bài nghe theo part yếu nhất (8')\n3. [Từ vựng] Ôn thẻ (5')\n4. [Lồng tiếng] clip (6')",
     "after": "1. [Ôn] Làm lại bài kiểm tra phần chưa đạt (Language Test C) (15')\n2. [Nói] Ghi âm 2 phút về chủ đề của học phần (5')\n3. [Nghe] Chép chính tả + shadowing 1 đoạn nghe (10')\n4. [Từ vựng] Ôn thẻ (5')\n5. [Lồng tiếng] 2 clip (12')\n6. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 34,
     "after_min": 53,
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Language Test C và Photocopiables 6A, 7A; Grammar ppt B1 U6, U7",
     "assessment": "—"
    },
    {
     "session_id": "BO-59",
     "session_no": 59,
     "week": 30,
     "hp": "HP4",
     "unit": "U8",
     "unit_title": "Time out",
     "type": "Reading",
     "kind": "Unit – Reading + Grammar",
     "sb_pages": "93–96, 140",
     "wb_pages": "66–68",
     "focus": "U8 Time out · Lead-in + Reading + Grammar 1",
     "task": "Đọc bài về sự kiên nhẫn (thí nghiệm kẹo marshmallow), tìm từ đồng nghĩa để trả lời trắc nghiệm",
     "content": "Ngữ pháp: Câu tường thuật: lùi thì, đổi đại từ, say/tell; câu hỏi tường thuật với if/whether và từ để hỏi · Kỹ năng đọc: finding synonyms",
     "ket_part": "[R3] bài dài, 5 câu trắc nghiệm — kỹ năng finding synonyms; gạch từ khóa, tìm cách diễn đạt khác trong bài · [RS4] nhận ra thái độ, ý kiến người viết: tìm tính từ, trạng từ đánh giá (surprisingly, unfortunately), phân biệt sự thật và ý kiến",
     "ket_codes": [
      "R3"
     ],
     "subskills": [
      "RS2",
      "RS4",
      "RS9"
     ],
     "grammar": "B16 Câu tường thuật: câu kể và câu hỏi",
     "vocabulary": "patient, impatient, self-controlled, self-control, marshmallow, rewards, decrease, increase, progress, improve, development, continuously, constantly, expert, convinced, question (v), available, frequently, creative, intelligent, passionate, sociable, optimistic, self-confident",
     "can_do": "≥ 4/5 câu Part 3; viết 6 câu dùng điểm ngữ pháp B16, ≥ 5 câu đúng; trả lời đúng ≥ 2/2 câu hỏi về thái độ người viết",
     "before": "1. [Từ vựng] Chuỗi 5 bước nhớ từ của bài đọc (nghe–nhắc lại → ghép hình → nghe chọn → nghe gõ → điền câu từ bài đọc): patient, impatient, self-controlled, self-control, marshmallow, rewards, decrease, increase, progress, improve, development, continuously (10')\n2. [Nói] Lead-in SB tr. 93: xem ảnh mở bài, ghi âm 30–45 giây trả lời câu hỏi mở bài (4')\n3. [Nghe] Nghe – đọc đoạn đầu bài đọc SB tr. 94 (audio gốc), trả lời 2 câu dự đoán ý chính (5')\n4. [Ngữ pháp] Video ngắn: Câu tường thuật: lùi thì, đổi đại từ, say/tell; câu hỏi tường thuật với if/whether và từ để hỏi (theo Grammar file SB tr. 140, Grammar ppt U8) + 5 câu kiểm tra hiểu (7')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Time out' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Domino art') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (unit trước) (3')",
     "after": "1. [Ôn] Quiz nhớ lại 10 câu: từ bài đọc + điểm ngữ pháp vừa học, không mở sách (5')\n2. [Đọc] Workbook tr. 66–67 Reading (số hóa, chấm tự động; dạng R3) (10')\n3. [Ngữ pháp] Workbook tr. 68 Grammar (6')\n4. [Ngữ pháp] Grammar file SB tr. 141: 1–2 bài luyện phần Câu tường thuật (5')\n5. [Nghe] Chép chính tả 4 câu từ audio bài đọc SB tr. 94–95 (5')\n6. [Nói] Shadowing 5 câu của bài đọc (audio gốc, ghi âm, nhận dạng giọng nói đánh dấu từ chưa rõ) (5')\n7. [Nói] Ghi âm 1 phút nói lại nội dung bài đọc, dùng ít nhất 3 từ mới và điểm ngữ pháp vừa học (3')\n8. [Lồng tiếng] clip 20–40 giây chủ đề 'Time out' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Domino art') (12')\n9. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U8 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 35,
     "after_min": 57,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Khởi động: kiểm tra nhanh từ vựng đã học trước ở nhà (gói PRE)",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Lead-in: thảo luận ảnh và câu hỏi mở bài",
       "category": "fluency"
      },
      {
       "minutes": 30,
       "activity": "Reading: đọc lướt lấy ý chính → làm dạng bài PET → chữa bằng câu chứa đáp án",
       "category": "input"
      },
      {
       "minutes": 25,
       "activity": "Grammar 1: tìm quy tắc trong bài đọc → luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Dùng ngữ pháp mới để nói và viết về bản thân",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Tổng kết, giới thiệu gói POST-LESSON",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Grammar file SB tr. 140 (lý thuyết); Grammar ppt B1 U8; Photocopiable 8A (ngữ pháp)",
     "assessment": "—"
    },
    {
     "session_id": "BO-60",
     "session_no": 60,
     "week": 30,
     "hp": "HP4",
     "unit": "U8",
     "unit_title": "Time out",
     "type": "Listening",
     "kind": "Unit – Vocabulary + Listening",
     "sb_pages": "97–98, 145, 174",
     "wb_pages": "69–70",
     "focus": "U8 Time out · Vocabulary + Listening + Grammar 2",
     "task": "Nghe về sở thích lạ (bong bóng khổng lồ, e-sports), chọn tranh, tránh bị phân tán; đọc số",
     "content": "Từ vựng: Sở thích: taking photographs, keeping fit, online gaming, doing drama, making jewellery · dụng cụ: paintbrush, ingredients, zoom lens, glue · hang out with, be into, be mad about, join in · Ngữ pháp 2: Câu hỏi gián tiếp: Can you tell me…? Do you know…? + if/từ để hỏi + trật tự câu khẳng định",
     "ket_part": "[R5] điền từ trắc nghiệm (từ vựng, collocation) · [L1] 7 đoạn ngắn, chọn tranh — đọc câu hỏi trước khi nghe, dự đoán đáp án, nghe lần 2 để kiểm tra · [LS6] nghe thông báo, hướng dẫn (nhà ga, trường học, cửa hàng): ghi giờ, địa điểm, việc phải làm",
     "ket_codes": [
      "R5",
      "L1"
     ],
     "subskills": [
      "LS1",
      "LS5",
      "LS6",
      "RS7",
      "VS1",
      "VS3"
     ],
     "grammar": "B17 Câu hỏi gián tiếp",
     "vocabulary": "taking photographs, practising a musical instrument, keeping fit, online gaming, doing drama, making jewellery, collecting, making models, ingredients, recipe, zoom lens, battery, glue, paintbrush, paints, cardboard, hang out with, be into, be mad about, join in, hobbyist, batteries, giant bubbles, e-sports team, international league, figures, Can I ask …?, Do you know if …?, Could you tell me …?, Can you tell me whether …?",
     "can_do": "≥ 4/6 câu Part 5; ≥ 5/7 câu Part 1; dùng đúng B17 trong ≥ 5/6 câu",
     "before": "1. [Từ vựng] Chuỗi 5 bước nhớ từ của bài Vocabulary SB tr. 97: taking photographs, practising a musical instrument, keeping fit, online gaming, doing drama, making jewellery, collecting, making models, ingredients, recipe, zoom lens, battery, glue, paintbrush (10')\n2. [Nghe] Nghe mồi 30–60 giây đầu bài nghe SB tr. 98 (audio gốc), dự đoán 2 câu (4')\n3. [Ngữ pháp] Video ngắn: Câu hỏi gián tiếp: Can you tell me…? Do you know…? + if/từ để hỏi + trật tự câu khẳng định + 5 câu kiểm tra hiểu (6')\n4. [Từ vựng] Extend vocabulary SB tr. 145 (phần U8): ghép 8 từ mở rộng với hình/nghĩa (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Time out' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Domino art') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Ôn] Quiz nhớ lại 10 câu: từ vựng + ngữ pháp 2, không mở sách (5')\n2. [Từ vựng] Workbook tr. 69 Vocabulary (6')\n3. [Nghe] Workbook tr. 70 Listening (audio Workbook) (8')\n4. [Nghe] Nghe lại bài nghe SB tr. 98 có lời thoại theo câu + 1 part nghe PET rút gọn dạng L1 (8')\n5. [Nghe] Chép chính tả 4 câu từ bài nghe SB tr. 98, ưu tiên âm yếu, âm nối (5')\n6. [Nói] Shadowing 5 câu của bài nghe (5')\n7. [Lồng tiếng] clip 20–40 giây chủ đề 'Time out' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Domino art') (12')\n8. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U8 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 33,
     "after_min": 55,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng nhanh",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Vocabulary SB + Extend vocabulary",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Listening PET: dự đoán → nghe lần 1 → nghe lần 2 kiểm tra → đọc audioscript",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Grammar 2: giới thiệu và luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Nói theo cặp dùng từ và ngữ pháp mới",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Chép chính tả 3 câu từ bài nghe, giao bài",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Extend vocabulary SB tr. 145; Photocopiable 8B (từ vựng); audioscript SB tr. 174 (chữa bài nghe)",
     "assessment": "—"
    },
    {
     "session_id": "BO-61",
     "session_no": 61,
     "week": 31,
     "hp": "HP4",
     "unit": "U8",
     "unit_title": "Time out",
     "type": "Speaking",
     "kind": "Unit – Speaking",
     "sb_pages": "99, 148–149",
     "wb_pages": "71",
     "focus": "U8 Time out · Speaking",
     "task": "Lên kế hoạch cho cuộc thi tài năng: đưa và đáp lại gợi ý (How about…? Why don't we…? I like the idea, but…)",
     "content": "Cụm câu chức năng của bài nói; dùng lại ngữ pháp B16, B17 và từ vựng U8 khi nói",
     "ket_part": "[S3] thảo luận cặp theo tranh gợi ý · [S4] thảo luận mở rộng — luyện theo cặp, đổi vai; giáo viên chấm mẫu theo thang Nói PET: Grammar & Vocabulary, Discourse management, Pronunciation, Interactive communication (0–5) · [SS7] phát âm 15 phút: ngữ điệu câu hỏi gián tiếp và trực tiếp; lên giọng khi đưa gợi ý · [SS6] dùng câu hỏi lại, làm rõ khi chưa hiểu bạn hoặc giám khảo",
     "ket_codes": [
      "S3",
      "S4"
     ],
     "subskills": [
      "SS3",
      "SS4",
      "SS6",
      "SS7"
     ],
     "grammar": "B16 Câu tường thuật: câu kể và câu hỏi; B17 Câu hỏi gián tiếp",
     "vocabulary": "talent show, act, comedian, ventriloquist, gymnast, origami, acrobat, karate, shadow dancing, Why don't we …?, Shall we …?, How about …?, Let's …, I like the idea, That's a great idea!, That sounds like a good place to start, I like the idea … but …, I'm really not sure about that, I'd prefer to …, Agreed",
     "can_do": "thảo luận cặp 2–3 phút, xét ≥ 4/5 lựa chọn và đi đến quyết định; trả lời mỗi câu hỏi mở rộng ≥ 3 câu, có lý do, hỏi lại ý bạn; đọc đúng ≥ 8/10 câu mẫu phát âm",
     "before": "1. [Nói] Học cụm câu chức năng (nghe – nhắc lại – ghi âm) theo Speaking file SB tr. 148–149: talent show, act, comedian, ventriloquist, gymnast, origami, acrobat, karate (8')\n2. [Nói] Đọc câu hỏi bài nói SB tr. 99, ghi âm câu trả lời nháp 1 phút (5')\n3. [Nghe] Nghe câu trả lời mẫu (giọng Gemini) rồi đánh dấu 3 cụm câu muốn dùng (5')\n4. [Từ vựng] Ôn nhanh từ vựng U8 cần cho bài nói (quiz 10 câu) (5')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Time out' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Domino art') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Nói] Workbook tr. 71 Speaking (số hóa; ghi âm các đoạn hội thoại trong trang) (7')\n2. [Nói] Ghi âm lại bài nói hoàn chỉnh 1–2 phút theo dạng S3, S4 sau góp ý trên lớp (6')\n3. [Phát âm] Luyện 10 câu: ngữ điệu câu hỏi gián tiếp và trực tiếp; lên giọng khi đưa gợi ý (6')\n4. [Nói] Shadowing câu trả lời mẫu (5')\n5. [Ôn] Quiz cụm câu chức năng (nghe chọn cụm phù hợp tình huống) (4')\n6. [Lồng tiếng] clip 20–40 giây chủ đề 'Time out' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Domino art') (12')\n7. [Từ vựng] Ôn thẻ từ đến hạn (3')\n8. [Nghe] Nghe bài nói của 2 bạn trong lớp (giáo viên chọn), chấm theo 2 tiêu chí (4')\n9. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U8 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 32,
     "after_min": 53,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Khởi động nói nhanh 4-3-2",
       "category": "fluency"
      },
      {
       "minutes": 15,
       "activity": "Nghe bài nói mẫu, ghi cụm câu chức năng (Speaking file)",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "Phát âm trọng tâm của buổi",
       "category": "lang"
      },
      {
       "minutes": 40,
       "activity": "Luyện part Nói PET theo cặp, đổi vai, đổi bạn",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Nói trước lớp, giáo viên chấm theo thang Nói PET",
       "category": "test"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá, giao bài ghi âm",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Speaking file SB tr. 148–149; Photocopiable 8C (nói)",
     "assessment": "—"
    },
    {
     "session_id": "BO-62",
     "session_no": 62,
     "week": 31,
     "hp": "HP4",
     "unit": "U8",
     "unit_title": "Time out",
     "type": "Writing",
     "kind": "Unit – Writing",
     "sb_pages": "100–101, 152–153",
     "wb_pages": "72",
     "focus": "U8 Time out · Writing",
     "task": "Bài báo về sở thích của người nổi tiếng: câu mở đoạn, tính từ và trạng từ",
     "content": "Lập dàn ý → viết nháp trên lớp → tự soát theo mục Improve it",
     "ket_part": "[W2] bài báo hoặc truyện ~100 từ — phân tích đề, gạch ý bắt buộc, viết 20–25 phút · [WS5] nâng câu: viết lại 3 câu đơn trong bài thành câu phức (mệnh đề quan hệ, điều kiện, bị động, although)",
     "ket_codes": [
      "W2"
     ],
     "subskills": [
      "WS2",
      "WS4",
      "WS5",
      "WS6"
     ],
     "grammar": "—",
     "vocabulary": "wrestle, flag pole, seaweed, snow globes, creative crafts, creative, surprised, keen, fantastic, huge, successful, busy, close, different, important, completely, extremely",
     "can_do": "bài ~100 từ có mở – thân – kết, ≥ 3 từ nối, ≤ 3 lỗi, thang PET ≥ 3/5 mỗi tiêu chí",
     "before": "1. [Viết] Đọc bài mẫu SB tr. 100–101 và Writing file SB tr. 152–153: bấm chọn câu mở bài, 3 từ nối, câu kết (6')\n2. [Từ vựng] Cụm câu cho bài viết (nghe – nhắc lại – điền câu): wrestle, flag pole, seaweed, snow globes, creative crafts, creative, surprised, keen (6')\n3. [Viết] Lập dàn ý cho đề bài trên sơ đồ (ý chính mỗi đoạn) (6')\n4. [Nghe] Nghe – đọc bài mẫu (giọng Gemini) 2 lần (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Time out' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Domino art') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Viết] Viết lại bài theo nhận xét trên lớp, tự soát 4 mục (đủ ý, chia đoạn, từ nối, chính tả) (15')\n2. [Viết] Workbook tr. 72 Writing (8')\n3. [Viết] Nâng câu: viết lại 3 câu đơn trong bài thành câu phức (5')\n4. [Nói] Đọc to bài viết của mình và ghi âm (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Time out' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Domino art') (12')\n6. [Ôn] Quiz nhớ lại 8 câu: từ nối và cụm câu bài viết (4')\n7. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U8 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 31,
     "after_min": 54,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Sửa lỗi chung từ bài nói và bài tập về nhà",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Phân tích đề và bài mẫu (Writing file)",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "Cụm câu, từ nối, câu phức cho dạng bài",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Lập dàn ý theo cặp",
       "category": "output"
      },
      {
       "minutes": 25,
       "activity": "Viết nháp có bấm giờ",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Tự soát theo Improve it, chấm chéo theo thang PET",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tổng kết, giao bài viết lại",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Writing file SB tr. 152–153 (bài mẫu, cụm câu); thang chấm PET: Content, Communicative achievement, Organisation, Language (0–5)",
     "assessment": "—"
    },
    {
     "session_id": "BO-63",
     "session_no": 63,
     "week": 32,
     "hp": "HP4",
     "unit": "U8",
     "unit_title": "Time out",
     "type": "Project & Check",
     "kind": "Unit – Ôn tập + Dự án",
     "sb_pages": "102–104, 141",
     "wb_pages": "73",
     "focus": "U8 Time out · Ôn tập và Dự án",
     "task": "Video 'Domino art'; dự án: Viết kịch bản video giới thiệu kênh YouTube về một sở thích hoặc kỹ năng; Independent learning; Unit check",
     "content": "Ôn từ vựng và ngữ pháp U8 · Independent learning: Listening skills: chẩn đoán vấn đề khi nghe, tự đánh giá",
     "ket_part": "[S4] thảo luận sau video · trình bày dự án nhóm 2–3 phút, mỗi thành viên nói ≥ 4 câu · [R6] 10 phút điền từ tự do (Part 6) theo ngữ pháp của unit",
     "ket_codes": [
      "S4",
      "R6"
     ],
     "subskills": [
      "RS8",
      "SS4",
      "VS1"
     ],
     "grammar": "B16 Câu tường thuật: câu kể và câu hỏi; B17 Câu hỏi gián tiếp",
     "vocabulary": "YouTube, YouTuber, dominoes, tricks, chain reactions, fans, works of art, helpful, amazed, weird, amused, publicly",
     "can_do": "Unit check ≥ 70%; Language test ≥ 70%; mỗi học sinh nói ≥ 4 câu khi trình bày dự án",
     "before": "1. [Dự án] Chuẩn bị phần dự án của mình: Viết kịch bản video giới thiệu kênh YouTube về một sở thích hoặc kỹ năng (tìm thông tin, viết 4–5 câu sẽ nói) (12')\n2. [Nghe] Xem video Switch on 'Domino art' (SB tr. 102) có phụ đề, trả lời 3 câu hỏi (6')\n3. [Nói] Ghi âm phần trình bày dự án của mình 1 phút để tập (4')\n4. [Ôn] Quiz trộn 20 câu từ vựng + ngữ pháp U8 (6')\n5. [Lồng tiếng] 1 đoạn video Switch on 'Domino art' (20–40 giây) (6')",
     "after": "1. [Ôn] Workbook tr. 73 Unit check (8')\n2. [Ôn] Language Test A U8 trên website (Assessment package) (25')\n3. [Tự học] Independent learning SB tr. 102: phiếu tự đánh giá + ghi âm 1 phút 'Unit 8: em làm tốt… em cần…' (4')\n4. [Từ vựng] Từ vựng chủ đề PET tự học: 'Daily life' – Wordwall 15 từ (6')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Time out' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Domino art') (6')\n6. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U8 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 34,
     "after_min": 55,
     "in_class": [
      {
       "minutes": 15,
       "activity": "Ôn từ vựng và ngữ pháp của unit qua trò chơi",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Video Switch on + thảo luận",
       "category": "input"
      },
      {
       "minutes": 35,
       "activity": "Dự án nhóm: hoàn thiện và trình bày, đánh giá chéo",
       "category": "output"
      },
      {
       "minutes": 30,
       "activity": "Unit check",
       "category": "test"
      },
      {
       "minutes": 10,
       "activity": "Independent learning, giao bài",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Kiên nhẫn, tự chủ; làm nội dung số có trách nhiệm · Phân bổ 105': video + thảo luận 20', trình bày dự án 30', Part 6 mini 10', Unit check 25', Skills Test A 20'",
     "materials": "Video U8 (videoscript TB tr. 149); Grammar file SB tr. 141 (bài luyện); Unit test B1 U8: Skills Test A tại lớp 20' (Assessment package); Language Test A làm trên website",
     "assessment": "—"
    },
    {
     "session_id": "BO-64",
     "session_no": 64,
     "week": 32,
     "hp": "HP4",
     "unit": "Sự kiện",
     "unit_title": "Công dân toàn cầu",
     "type": "Sự kiện",
     "kind": "Sự kiện kỹ năng",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Sự kiện E9 · Hobby Expo & Creator Lab",
     "task": "—",
     "content": "Sở thích; câu tường thuật, câu hỏi gián tiếp",
     "ket_part": "[S1] phỏng vấn bạn về sở thích bằng câu hỏi gián tiếp · [S2] giới thiệu sở thích 1 phút · [W2] tường thuật cuộc phỏng vấn ~100 từ",
     "ket_codes": [
      "S1",
      "S2",
      "W2"
     ],
     "subskills": [
      "SS1",
      "SS2",
      "SS5",
      "WS2",
      "WS4"
     ],
     "grammar": "B16 Câu tường thuật: câu kể và câu hỏi; B17 Câu hỏi gián tiếp",
     "vocabulary": "Dùng lại từ vựng của unit vừa học (xem cột này ở các buổi trước)",
     "can_do": "Mỗi học sinh quay video 1 phút giới thiệu sở thích; viết bài tường thuật dùng ≥ 4 câu reported speech",
     "before": "1. [Dự án] Chuẩn bị phần việc của mình cho sự kiện 'Hobby Expo & Creator Lab' (nội dung, đồ dùng, vai) (15')\n2. [Nói] Viết và ghi âm phần nói của mình 1–2 phút, nghe lại và sửa (8')\n3. [Từ vựng] Ôn từ vựng và cấu trúc cần dùng: Sở thích; câu tường thuật, câu hỏi gián tiếp (6')\n4. [Lồng tiếng] clip chủ đề sự kiện (6')",
     "after": "1. [Tự học] Tự đánh giá theo rubric 4 tiêu chí (3')\n2. [Viết] Bài viết sau sự kiện (dạng W2) ~100 từ (15')\n3. [Nói] Xem video sự kiện của nhóm, ghi âm nhận xét 1 phút (1 điểm tốt, 1 điểm cần cải thiện) (5')\n4. [Nghe] Nghe phần trình bày của 1 nhóm khác, trả lời 3 câu hỏi (6')\n5. [Từ vựng] Ôn thẻ đến hạn (4')\n6. [Lồng tiếng] 2 clip (12')\n7. [Ôn] Quiz trộn 10 câu unit vừa học (5')\n8. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 35,
     "after_min": 56,
     "in_class": [
      {
       "minutes": 20,
       "activity": "Chuẩn bị ngôn ngữ cho sản phẩm",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Thực hiện sản phẩm trước khán giả",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Phản hồi theo rubric",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá năng lực",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Kiên nhẫn, tự chủ, sáng tạo nội dung có trách nhiệm",
     "materials": "Rubric 4 tiêu chí: ngôn ngữ, nội dung, hợp tác, trình bày",
     "assessment": "—"
    },
    {
     "session_id": "BO-65",
     "session_no": 65,
     "week": 33,
     "hp": "HP4",
     "unit": "U9",
     "unit_title": "Life experiences",
     "type": "Reading",
     "kind": "Unit – Reading + Grammar",
     "sb_pages": "105–108, 142",
     "wb_pages": "74–76",
     "focus": "U9 Life experiences · Lead-in + Reading + Grammar 1",
     "task": "Đọc blog 'summer bucket list' của Sophie, nhận ra từ nối, từ quy chiếu và thì để điền câu",
     "content": "Ngữ pháp: Quá khứ hoàn thành và quá khứ đơn; before, once, when, just, never · Kỹ năng đọc: identifying linking",
     "ket_part": "[R4] điền 5 câu vào bài (3 câu thừa) — kỹ năng identifying linking; gạch từ khóa, tìm cách diễn đạt khác trong bài · [RS6] đoán nghĩa từ mới qua ngữ cảnh (loại từ, từ xung quanh, ví dụ trong câu) trước khi tra từ",
     "ket_codes": [
      "R4"
     ],
     "subskills": [
      "RS5",
      "RS6"
     ],
     "grammar": "B18 Quá khứ hoàn thành",
     "vocabulary": "bucket list, put together, loads of, remind (sb) of, classic, original, proud of, sandcastle, board games, movie marathon, water fight",
     "can_do": "≥ 3/5 câu Part 4; viết 6 câu dùng điểm ngữ pháp B18, ≥ 5 câu đúng",
     "before": "1. [Từ vựng] Chuỗi 5 bước nhớ từ của bài đọc (nghe–nhắc lại → ghép hình → nghe chọn → nghe gõ → điền câu từ bài đọc): bucket list, put together, loads of, remind (sb) of, classic, original, proud of, sandcastle, board games, movie marathon, water fight (10')\n2. [Nói] Lead-in SB tr. 105: xem ảnh mở bài, ghi âm 30–45 giây trả lời câu hỏi mở bài (4')\n3. [Nghe] Nghe – đọc đoạn đầu bài đọc SB tr. 106 (audio gốc), trả lời 2 câu dự đoán ý chính (5')\n4. [Ngữ pháp] Video ngắn: Quá khứ hoàn thành và quá khứ đơn; before, once, when, just, never (theo Grammar file SB tr. 142, Grammar ppt U9) + 5 câu kiểm tra hiểu (7')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Life experiences' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Finding your voice') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (unit trước) (3')",
     "after": "1. [Ôn] Quiz nhớ lại 10 câu: từ bài đọc + điểm ngữ pháp vừa học, không mở sách (5')\n2. [Đọc] Workbook tr. 74–75 Reading (số hóa, chấm tự động; dạng R4) (10')\n3. [Ngữ pháp] Workbook tr. 76 Grammar (6')\n4. [Ngữ pháp] Grammar file SB tr. 143: 1–2 bài luyện phần Quá khứ hoàn thành và quá khứ đơn (5')\n5. [Nghe] Chép chính tả 4 câu từ audio bài đọc SB tr. 106–107 (5')\n6. [Nói] Shadowing 5 câu của bài đọc (audio gốc, ghi âm, nhận dạng giọng nói đánh dấu từ chưa rõ) (5')\n7. [Nói] Ghi âm 1 phút nói lại nội dung bài đọc, dùng ít nhất 3 từ mới và điểm ngữ pháp vừa học (3')\n8. [Lồng tiếng] clip 20–40 giây chủ đề 'Life experiences' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Finding your voice') (12')\n9. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U9 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 35,
     "after_min": 57,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Khởi động: kiểm tra nhanh từ vựng đã học trước ở nhà (gói PRE)",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Lead-in: thảo luận ảnh và câu hỏi mở bài",
       "category": "fluency"
      },
      {
       "minutes": 30,
       "activity": "Reading: đọc lướt lấy ý chính → làm dạng bài PET → chữa bằng câu chứa đáp án",
       "category": "input"
      },
      {
       "minutes": 25,
       "activity": "Grammar 1: tìm quy tắc trong bài đọc → luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Dùng ngữ pháp mới để nói và viết về bản thân",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Tổng kết, giới thiệu gói POST-LESSON",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Grammar file SB tr. 142 (lý thuyết); Grammar ppt B1 U9; Photocopiable 9A (ngữ pháp)",
     "assessment": "—"
    },
    {
     "session_id": "BO-66",
     "session_no": 66,
     "week": 33,
     "hp": "HP4",
     "unit": "U9",
     "unit_title": "Life experiences",
     "type": "Listening",
     "kind": "Unit – Vocabulary + Listening",
     "sb_pages": "109–110, 145, 165, 174–175",
     "wb_pages": "77–78",
     "focus": "U9 Life experiences · Vocabulary + Listening + Grammar 2",
     "task": "Nghe các đoạn hội thoại về kinh nghiệm làm việc, nghe lời khuyên (You ought to…, Why don't you…)",
     "content": "Từ vựng: Cảm xúc: confident, annoyed, embarrassed, guilty, jealous, nervous, amazed · tính từ -ed/-ing · tính từ + giới từ · Ngữ pháp 2: used to / didn't use to / Did you use to…? · Cấu tạo từ: tính từ -ed/-ing; tiền tố un-, dis-, im-/in- (unhappy, dishonest, impatient); hậu tố -ful/-less",
     "ket_part": "[R5] điền từ trắc nghiệm (từ vựng, collocation) · [L2] 6 hội thoại ngắn, ý kiến/thái độ — đọc câu hỏi trước khi nghe, dự đoán đáp án, nghe lần 2 để kiểm tra · [LS7] chép chính tả 3–4 câu từ lời thoại, chú ý âm nối, âm yếu, dạng rút gọn",
     "ket_codes": [
      "R5",
      "L2"
     ],
     "subskills": [
      "LS2",
      "LS5",
      "LS7",
      "RS7",
      "VS1",
      "VS2",
      "VS3"
     ],
     "grammar": "B19 used to / didn't use to; B20 Giới từ đi kèm tính từ và động từ (interested in, listen to, proud of…); B21 Trật tự tính từ; tính từ -ed/-ing",
     "vocabulary": "annoyed, calm, confident, disappointed, embarrassed, frightened, guilty, jealous, nervous, relaxed, worried, amazed, satisfied, disappointed/disappointing, bored/boring, excited/exciting, amazed/amazing, embarrassed/embarrassing, frightened/frightening, depressing, work experience, hang out with, deal with, go for (a job), look forward to, take part in, orienteering, compass, You could …, You ought to …, Why don't you …?, You should …, used to, didn't use to, Did you use to …?",
     "can_do": "≥ 4/6 câu Part 5; ≥ 4/6 câu Part 2; dùng đúng B19 trong ≥ 5/6 câu; chuyển đúng dạng từ ≥ 8/10 câu",
     "before": "1. [Từ vựng] Chuỗi 5 bước nhớ từ của bài Vocabulary SB tr. 109: annoyed, calm, confident, disappointed, embarrassed, frightened, guilty, jealous, nervous, relaxed, worried, amazed, satisfied, disappointed/disappointing (10')\n2. [Nghe] Nghe mồi 30–60 giây đầu bài nghe SB tr. 110 (audio gốc), dự đoán 2 câu (4')\n3. [Ngữ pháp] Video ngắn: used to / didn't use to / Did you use to…? + 5 câu kiểm tra hiểu (6')\n4. [Từ vựng] Extend vocabulary SB tr. 145 (phần U9): ghép 8 từ mở rộng với hình/nghĩa (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Life experiences' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Finding your voice') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Ôn] Quiz nhớ lại 10 câu: từ vựng + ngữ pháp 2, không mở sách (5')\n2. [Từ vựng] Workbook tr. 77 Vocabulary (6')\n3. [Nghe] Workbook tr. 78 Listening (audio Workbook) (8')\n4. [Nghe] Nghe lại bài nghe SB tr. 110 có lời thoại theo câu + 1 part nghe PET rút gọn dạng L2 (8')\n5. [Nghe] Chép chính tả 4 câu từ bài nghe SB tr. 110, ưu tiên âm yếu, âm nối (5')\n6. [Nói] Shadowing 5 câu của bài nghe (5')\n7. [Lồng tiếng] clip 20–40 giây chủ đề 'Life experiences' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Finding your voice') (12')\n8. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U9 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 33,
     "after_min": 55,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Quiz từ vựng nhanh",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Vocabulary SB + Extend vocabulary",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Listening PET: dự đoán → nghe lần 1 → nghe lần 2 kiểm tra → đọc audioscript",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Grammar 2: giới thiệu và luyện có kiểm soát",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Nói theo cặp dùng từ và ngữ pháp mới",
       "category": "output"
      },
      {
       "minutes": 10,
       "activity": "Chép chính tả 3 câu từ bài nghe, giao bài",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Extend vocabulary SB tr. 145; Photocopiable 9B (từ vựng); audioscript SB tr. 174–175 (chữa bài nghe); SB tr. 165 (quiz cảm xúc); Dictation trong Skills Test của unit (Assessment package)",
     "assessment": "—"
    },
    {
     "session_id": "BO-67",
     "session_no": 67,
     "week": 34,
     "hp": "HP4",
     "unit": "U9",
     "unit_title": "Life experiences",
     "type": "Speaking",
     "kind": "Unit – Speaking",
     "sb_pages": "111, 148–149",
     "wb_pages": "79",
     "focus": "U9 Life experiences · Speaking",
     "task": "Sống trên hoang đảo: nói điều thích và không thích (I absolutely love, I can't stand, I'm keen on, I don't mind)",
     "content": "Cụm câu chức năng của bài nói; dùng lại ngữ pháp B18, B19 và từ vựng U9 khi nói",
     "ket_part": "[S3] thảo luận cặp theo tranh gợi ý · [S4] thảo luận mở rộng — luyện theo cặp, đổi vai; giáo viên chấm mẫu theo thang Nói PET: Grammar & Vocabulary, Discourse management, Pronunciation, Interactive communication (0–5) · [SS7] phát âm 15 phút: 'd yếu, hadn't nhấn (theo TB U9); used to /juːstə/ · [SS6] dùng câu hỏi lại, làm rõ khi chưa hiểu bạn hoặc giám khảo · [SS5] Speaking extra: nói 1 phút về một trải nghiệm đáng nhớ (dùng quá khứ hoàn thành, used to)",
     "ket_codes": [
      "S3",
      "S4"
     ],
     "subskills": [
      "SS3",
      "SS4",
      "SS5",
      "SS6",
      "SS7"
     ],
     "grammar": "B18 Quá khứ hoàn thành; B19 used to / didn't use to",
     "vocabulary": "desert island, Swiss army knife, I absolutely love …, I can't stand …, I'm (not) keen on …, I don't mind …",
     "can_do": "thảo luận cặp 2–3 phút, xét ≥ 4/5 lựa chọn và đi đến quyết định; trả lời mỗi câu hỏi mở rộng ≥ 3 câu, có lý do, hỏi lại ý bạn; đọc đúng ≥ 8/10 câu mẫu phát âm; kể liền mạch 1–2 phút, ≥ 3 từ nối thời gian",
     "before": "1. [Nói] Học cụm câu chức năng (nghe – nhắc lại – ghi âm) theo Speaking file SB tr. 148–149: desert island, Swiss army knife (8')\n2. [Nói] Đọc câu hỏi bài nói SB tr. 111, ghi âm câu trả lời nháp 1 phút (5')\n3. [Nghe] Nghe câu trả lời mẫu (giọng Gemini) rồi đánh dấu 3 cụm câu muốn dùng (5')\n4. [Từ vựng] Ôn nhanh từ vựng U9 cần cho bài nói (quiz 10 câu) (5')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Life experiences' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Finding your voice') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Nói] Workbook tr. 79 Speaking (số hóa; ghi âm các đoạn hội thoại trong trang) (7')\n2. [Nói] Ghi âm lại bài nói hoàn chỉnh 1–2 phút theo dạng S3, S4 sau góp ý trên lớp (6')\n3. [Phát âm] Luyện 10 câu: 'd yếu, hadn't nhấn (theo TB U9); used to /juːstə/ (6')\n4. [Nói] Shadowing câu trả lời mẫu (5')\n5. [Ôn] Quiz cụm câu chức năng (nghe chọn cụm phù hợp tình huống) (4')\n6. [Lồng tiếng] clip 20–40 giây chủ đề 'Life experiences' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Finding your voice') (12')\n7. [Từ vựng] Ôn thẻ từ đến hạn (3')\n8. [Nghe] Nghe bài nói của 2 bạn trong lớp (giáo viên chọn), chấm theo 2 tiêu chí (4')\n9. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U9 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 32,
     "after_min": 53,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Khởi động nói nhanh 4-3-2",
       "category": "fluency"
      },
      {
       "minutes": 15,
       "activity": "Nghe bài nói mẫu, ghi cụm câu chức năng (Speaking file)",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "Phát âm trọng tâm của buổi",
       "category": "lang"
      },
      {
       "minutes": 40,
       "activity": "Luyện part Nói PET theo cặp, đổi vai, đổi bạn",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Nói trước lớp, giáo viên chấm theo thang Nói PET",
       "category": "test"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá, giao bài ghi âm",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Speaking file SB tr. 148–149",
     "assessment": "—"
    },
    {
     "session_id": "BO-68",
     "session_no": 68,
     "week": 34,
     "hp": "HP4",
     "unit": "U9",
     "unit_title": "Life experiences",
     "type": "Writing",
     "kind": "Unit – Writing",
     "sb_pages": "112–113, 154–155",
     "wb_pages": "80",
     "focus": "U9 Life experiences · Writing",
     "task": "Truyện về một ngày đi chơi (kẹt trên cáp treo) ~100 từ: sắp xếp sự việc (First, After that, Suddenly, Eventually)",
     "content": "Lập dàn ý → viết nháp trên lớp → tự soát theo mục Improve it",
     "ket_part": "[W2] bài báo hoặc truyện ~100 từ — phân tích đề, gạch ý bắt buộc, viết 20–25 phút · [WS5] nâng câu: viết lại 3 câu đơn trong bài thành câu phức (mệnh đề quan hệ, điều kiện, bị động, although)",
     "ket_codes": [
      "W2"
     ],
     "subskills": [
      "WS3",
      "WS4",
      "WS5",
      "WS6"
     ],
     "grammar": "—",
     "vocabulary": "chairlift, selfies, signal, First, Then, After that, Eventually, Suddenly, (a few hours) later",
     "can_do": "bài ~100 từ có mở – thân – kết, ≥ 3 từ nối, ≤ 3 lỗi, thang PET ≥ 3/5 mỗi tiêu chí",
     "before": "1. [Viết] Đọc bài mẫu SB tr. 112–113 và Writing file SB tr. 154–155: bấm chọn câu mở bài, 3 từ nối, câu kết (6')\n2. [Từ vựng] Cụm câu cho bài viết (nghe – nhắc lại – điền câu): chairlift, selfies, signal, First, Then, After that, Eventually, Suddenly (6')\n3. [Viết] Lập dàn ý cho đề bài trên sơ đồ (ý chính mỗi đoạn) (6')\n4. [Nghe] Nghe – đọc bài mẫu (giọng Gemini) 2 lần (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Life experiences' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Finding your voice') (6')\n6. [Từ vựng] Ôn thẻ từ đến hạn (3')",
     "after": "1. [Viết] Viết lại bài theo nhận xét trên lớp, tự soát 4 mục (đủ ý, chia đoạn, từ nối, chính tả) (15')\n2. [Viết] Workbook tr. 80 Writing (8')\n3. [Viết] Nâng câu: viết lại 3 câu đơn trong bài thành câu phức (5')\n4. [Nói] Đọc to bài viết của mình và ghi âm (4')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Life experiences' – 2 clip (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Finding your voice') (12')\n6. [Ôn] Quiz nhớ lại 8 câu: từ nối và cụm câu bài viết (4')\n7. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U9 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 31,
     "after_min": 54,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Sửa lỗi chung từ bài nói và bài tập về nhà",
       "category": "lang"
      },
      {
       "minutes": 20,
       "activity": "Phân tích đề và bài mẫu (Writing file)",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "Cụm câu, từ nối, câu phức cho dạng bài",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Lập dàn ý theo cặp",
       "category": "output"
      },
      {
       "minutes": 25,
       "activity": "Viết nháp có bấm giờ",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Tự soát theo Improve it, chấm chéo theo thang PET",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tổng kết, giao bài viết lại",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Writing file SB tr. 154–155 (bài mẫu, cụm câu); thang chấm PET: Content, Communicative achievement, Organisation, Language (0–5); Photocopiable 9C (viết)",
     "assessment": "—"
    },
    {
     "session_id": "BO-69",
     "session_no": 69,
     "week": 35,
     "hp": "HP4",
     "unit": "U9",
     "unit_title": "Life experiences",
     "type": "Project & Check",
     "kind": "Unit – Ôn tập + Dự án",
     "sb_pages": "114–116, 143",
     "wb_pages": "81–83",
     "focus": "U9 Life experiences · Ôn tập và Dự án",
     "task": "Video 'Finding your voice'; dự án: Tranh biện một chủ đề: đưa ý kiến, đồng ý, phản bác; Independent learning; Unit check",
     "content": "Ôn từ vựng và ngữ pháp U9 · Independent learning: Study skills: nhìn lại tiến bộ từ Unit 1, đặt mục tiêu dùng tiếng Anh",
     "ket_part": "[S4] thảo luận sau video · trình bày dự án nhóm 2–3 phút, mỗi thành viên nói ≥ 4 câu · [R6] 10 phút điền từ tự do (Part 6) theo ngữ pháp của unit",
     "ket_codes": [
      "S4",
      "R6"
     ],
     "subskills": [
      "RS8",
      "SS4",
      "VS1"
     ],
     "grammar": "B18 Quá khứ hoàn thành; B19 used to / didn't use to",
     "vocabulary": "debate, argue, self-esteem, shy, confident, nervousness, semi-finals",
     "can_do": "Unit check ≥ 70%; Language test ≥ 70%; mỗi học sinh nói ≥ 4 câu khi trình bày dự án",
     "before": "1. [Dự án] Chuẩn bị phần dự án của mình: Tranh biện một chủ đề: đưa ý kiến, đồng ý, phản bác (tìm thông tin, viết 4–5 câu sẽ nói) (12')\n2. [Nghe] Xem video Switch on 'Finding your voice' (SB tr. 114) có phụ đề, trả lời 3 câu hỏi (6')\n3. [Nói] Ghi âm phần trình bày dự án của mình 1 phút để tập (4')\n4. [Ôn] Quiz trộn 20 câu từ vựng + ngữ pháp U9 (6')\n5. [Lồng tiếng] 1 đoạn video Switch on 'Finding your voice' (20–40 giây) (6')",
     "after": "1. [Ôn] Workbook tr. 81 Unit check (8')\n2. [Ôn] Language Test A U9 trên website (Assessment package) (25')\n3. [Tự học] Independent learning SB tr. 114: phiếu tự đánh giá + ghi âm 1 phút 'Unit 9: em làm tốt… em cần…' (4')\n4. [Từ vựng] Từ vựng chủ đề PET tự học: 'Social interaction' – Wordwall 15 từ (6')\n5. [Lồng tiếng] clip 20–40 giây chủ đề 'Life experiences' (hội thoại IVY dựng bằng giọng Gemini hoặc đoạn video Switch on 'Finding your voice') (6')\n6. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U9 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 34,
     "after_min": 55,
     "in_class": [
      {
       "minutes": 15,
       "activity": "Ôn từ vựng và ngữ pháp của unit qua trò chơi",
       "category": "lang"
      },
      {
       "minutes": 15,
       "activity": "Video Switch on + thảo luận",
       "category": "input"
      },
      {
       "minutes": 35,
       "activity": "Dự án nhóm: hoàn thiện và trình bày, đánh giá chéo",
       "category": "output"
      },
      {
       "minutes": 30,
       "activity": "Unit check",
       "category": "test"
      },
      {
       "minutes": 10,
       "activity": "Independent learning, giao bài",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Tự tin, nói trước công chúng, tôn trọng quan điểm khác (SDG 16) · Phân bổ 105': video + thảo luận 20', trình bày dự án 30', Part 6 mini 10', Unit check 25', Skills Test A 20'",
     "materials": "Video U9 (videoscript TB tr. 150); Grammar file SB tr. 143 (bài luyện); Unit test B1 U9: Skills Test A tại lớp 20' (Assessment package); Language Test A làm trên website",
     "assessment": "—"
    },
    {
     "session_id": "BO-70",
     "session_no": 70,
     "week": 35,
     "hp": "HP4",
     "unit": "Sự kiện",
     "unit_title": "Công dân toàn cầu",
     "type": "Sự kiện",
     "kind": "Sự kiện kỹ năng",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Sự kiện E10 · IVY Debate Cup",
     "task": "—",
     "content": "Trải nghiệm, cảm xúc; quá khứ hoàn thành, used to",
     "ket_part": "[S4] tranh biện theo đội, phản bác có lý do · [L4] nghe ghi chú lập luận đội bạn · [W2] bài báo nêu quan điểm ~100 từ",
     "ket_codes": [
      "S4",
      "L4",
      "W2"
     ],
     "subskills": [
      "LS4",
      "SS4",
      "WS2",
      "WS4"
     ],
     "grammar": "B18 Quá khứ hoàn thành; B19 used to / didn't use to",
     "vocabulary": "Dùng lại từ vựng của unit vừa học (xem cột này ở các buổi trước)",
     "can_do": "Mỗi đội tranh biện 15 phút; mỗi học sinh nói ≥ 1 lượt 1 phút và phản bác ≥ 1 lần",
     "before": "1. [Dự án] Chuẩn bị phần việc của mình cho sự kiện 'IVY Debate Cup' (nội dung, đồ dùng, vai) (15')\n2. [Nói] Viết và ghi âm phần nói của mình 1–2 phút, nghe lại và sửa (8')\n3. [Từ vựng] Ôn từ vựng và cấu trúc cần dùng: Trải nghiệm, cảm xúc; quá khứ hoàn thành, used to (6')\n4. [Lồng tiếng] clip chủ đề sự kiện (6')",
     "after": "1. [Tự học] Tự đánh giá theo rubric 4 tiêu chí (3')\n2. [Viết] Bài viết sau sự kiện (dạng W2) ~100 từ (15')\n3. [Nói] Xem video sự kiện của nhóm, ghi âm nhận xét 1 phút (1 điểm tốt, 1 điểm cần cải thiện) (5')\n4. [Nghe] Nghe phần trình bày của 1 nhóm khác, trả lời 3 câu hỏi (6')\n5. [Từ vựng] Ôn thẻ đến hạn (4')\n6. [Lồng tiếng] 2 clip (12')\n7. [Ôn] Quiz trộn 10 câu unit vừa học (5')\n8. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 35,
     "after_min": 56,
     "in_class": [
      {
       "minutes": 20,
       "activity": "Chuẩn bị ngôn ngữ cho sản phẩm",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Thực hiện sản phẩm trước khán giả",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Phản hồi theo rubric",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá năng lực",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Tranh biện, tôn trọng quan điểm khác (SDG 16)",
     "materials": "Rubric 4 tiêu chí: ngôn ngữ, nội dung, hợp tác, trình bày",
     "assessment": "—"
    },
    {
     "session_id": "BO-71",
     "session_no": 71,
     "week": 36,
     "hp": "HP4",
     "unit": "U10",
     "unit_title": "Summertime!",
     "type": "Review",
     "kind": "Unit 10 – ôn theo đề",
     "sb_pages": "117–120, 176",
     "wb_pages": "—",
     "focus": "U10 Summertime! · Lead-in + Reading + Listening",
     "task": "kỹ năng sống ở trường; làm thêm hè hay nghỉ ngơi; làm tình nguyện cứu hộ; phỏng vấn chuyên viên trang điểm",
     "content": "Ôn tổng hợp trong ngữ cảnh đề thi · Chủ đề kỹ năng sống, việc làm thêm",
     "ket_part": "[R3] bài dài, 5 câu trắc nghiệm · [R5] điền từ trắc nghiệm (từ vựng, collocation) · [R6] điền từ tự do (từ chức năng) · [L3] điền 6 thông tin · [L4] phỏng vấn dài, 6 câu trắc nghiệm — làm như đề thật, có bấm giờ",
     "ket_codes": [
      "R3",
      "R5",
      "R6",
      "L3",
      "L4"
     ],
     "subskills": [
      "LS3",
      "LS4",
      "LS5",
      "RS2",
      "RS7",
      "RS8"
     ],
     "grammar": "B10 Câu điều kiện loại 0, 1, 2; B16 Câu tường thuật: câu kể và câu hỏi; B18 Quá khứ hoàn thành",
     "vocabulary": "life skills, real-life skills, problem solving, set aims, achieve, higher education, holiday job, part-time job, compete, work experience, lifeguard, certificates, water safety exams, leader, qualification, observant, make-up artist, cosmetics, face paints, imaginative",
     "can_do": "≥ 4/5 câu Part 3; ≥ 4/6 câu Part 5; ≥ 4/6 chỗ trống Part 6; ≥ 4/6 chỗ trống Part 3, đúng chính tả; ≥ 4/6 câu Part 4",
     "before": "1. [Từ vựng] Chuỗi 5 bước: life skills, real-life skills, problem solving, set aims, achieve, higher education, holiday job, part-time job, compete, work experience, lifeguard, certificates, water safety exams, leader (10')\n2. [Đọc] Đọc lướt 3 bài đọc SB tr. 118–119, nói ý chính mỗi bài 1 câu (ghi âm) (8')\n3. [Nghe] Nghe mồi bài nghe SB tr. 120 (4')\n4. [Ôn] Quiz trộn U1–U9 20 câu (6')\n5. [Lồng tiếng] clip chủ đề việc làm hè (6')",
     "after": "1. [Đọc] Workbook tr. 84–87 (Reading Part 1–3 của đề luyện) (15')\n2. [Nghe] Chép chính tả 4 câu bài nghe SB tr. 120 (5')\n3. [Nói] Shadowing 5 câu bài phỏng vấn (5')\n4. [Từ vựng] Ôn thẻ cả khóa (thẻ đến hạn) (5')\n5. [Lồng tiếng] 2 clip (12')\n6. [Nói] Ghi âm 1 phút 'A summer job I'd like' (4')\n7. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U10 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 34,
     "after_min": 52,
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "trường học có chuẩn bị cho cuộc sống thật không?",
     "materials": "Audioscript SB tr. 176",
     "assessment": "—"
    },
    {
     "session_id": "BO-72",
     "session_no": 72,
     "week": 36,
     "hp": "HP4",
     "unit": "U10",
     "unit_title": "Summertime!",
     "type": "Review",
     "kind": "Unit 10 – ôn theo đề",
     "sb_pages": "121–123, 146–155, 166",
     "wb_pages": "—",
     "focus": "U10 · Speaking + Writing",
     "task": "đủ 4 part Nói (Part 3 trên SB tr. 166); email Part 1 và bài báo/truyện Part 2",
     "content": "Ôn toàn bộ Speaking file và Writing file · tự đánh giá và đánh giá chéo",
     "ket_part": "[S1]–[S4] thi nói thử theo cặp, đánh giá chéo · [W1] email · [W2] chọn bài báo hoặc truyện",
     "ket_codes": [
      "S1",
      "S2",
      "S3",
      "S4",
      "W1",
      "W2"
     ],
     "subskills": [
      "SS1",
      "SS2",
      "SS3",
      "SS4",
      "WS1",
      "WS2",
      "WS3",
      "WS4",
      "WS6"
     ],
     "grammar": "B22 Từ nối: although, so that, either…or, as soon as, because, so",
     "vocabulary": "magician's show, dance class, theatre visit, dog show, orchestra, singing show, ballet",
     "can_do": "Nói đủ 4 part, ≥ 3/5 mỗi tiêu chí; 2 bài viết xong trong 45 phút",
     "before": "1. [Nói] Ôn cụm câu 4 part Nói (Speaking file SB tr. 146–149): nghe – nhắc lại – ghi âm (10')\n2. [Nói] Tả ảnh 1 phút với 2 ảnh mới (ghi âm) (5')\n3. [Viết] Đọc bài mẫu email và article/story (Writing file SB tr. 150–155), đánh dấu cấu trúc (8')\n4. [Lồng tiếng] clip (6')\n5. [Từ vựng] Ôn thẻ (4')",
     "after": "1. [Viết] Workbook tr. 88–91 (Reading Part 4–6 của đề luyện) (15')\n2. [Viết] Viết lại 1 bài (email hoặc article) theo nhận xét (12')\n3. [Nói] Ghi âm Part 3 với bạn (hoặc với giọng Gemini đóng vai bạn) (6')\n4. [Lồng tiếng] 2 clip (12')\n5. [Từ vựng] Ôn thẻ (4')\n6. [Nghe] Nghe ngấm: audio bài đọc/bài nghe của U10 (SB, Workbook) phát liên tục, lần 2 có lời thoại (6')",
     "before_min": 33,
     "after_min": 55,
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Speaking file SB tr. 146–149; Writing file SB tr. 150–155; thang chấm PET: Content, Communicative achievement, Organisation, Language (0–5)",
     "assessment": "—"
    },
    {
     "session_id": "BO-73",
     "session_no": 73,
     "week": 37,
     "hp": "HP4",
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Review",
     "kind": "Củng cố",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Củng cố · Nghe – Đọc (U8, U9, U10)",
     "task": "—",
     "content": "Nhận ra câu tường thuật, quá khứ hoàn thành, used to trong bài đọc và lời thoại",
     "ket_part": "[R1] 5 văn bản ngắn (biển báo, tin nhắn), chọn ý đúng · [R2] nối 5 người với 8 văn bản · [R3] bài dài, 5 câu trắc nghiệm · [R4] điền 5 câu vào bài (3 câu thừa) · [L1] 7 đoạn ngắn, chọn tranh · [L2] 6 hội thoại ngắn, ý kiến/thái độ — luyện theo đúng thời gian của đề · [RS9] kiểm tra nhật ký đọc: kể tóm tắt sách đọc phân cấp 1 phút",
     "ket_codes": [
      "R1",
      "R2",
      "R3",
      "R4",
      "L1",
      "L2"
     ],
     "subskills": [
      "LS1",
      "LS2",
      "LS5",
      "RS1",
      "RS2",
      "RS3",
      "RS5",
      "RS9",
      "SS5"
     ],
     "grammar": "B16 Câu tường thuật: câu kể và câu hỏi; B17 Câu hỏi gián tiếp; B18 Quá khứ hoàn thành; B19 used to / didn't use to",
     "vocabulary": "Ôn từ vựng các unit trong học phần; làm lại từ sai trên Wordwall",
     "can_do": "≥ 4/5 câu Part 1; ≥ 4/5 câu nối Part 2; ≥ 4/5 câu Part 3; ≥ 3/5 câu Part 4; ≥ 5/7 câu Part 1; ≥ 4/6 câu Part 2",
     "before": "1. [Ôn] Quiz trộn 20 câu từ vựng + ngữ pháp các unit trong học phần (8')\n2. [Nghe] Nghe lại 2 bài nghe điểm thấp nhất trong học phần, có lời thoại (8')\n3. [Đọc] Đọc lại 1 bài đọc của sách, tìm 5 cụm diễn đạt khác (paraphrase) (8')\n4. [Từ vựng] Ôn thẻ đến hạn (5')\n5. [Lồng tiếng] clip ôn tập (6')",
     "after": "1. [Thi] Làm lại các câu sai của đề luyện trên lớp, ghi lý do sai (10')\n2. [Nghe] 1 part nghe tiếp theo của đề PTP (dạng L1, L2) + chép chính tả 4 câu (12')\n3. [Đọc] 1 part đọc của đề PTP (dạng R1, R2, R3, R4) (10')\n4. [Nói] Shadowing 5 câu của bài nghe (5')\n5. [Lồng tiếng] 2 clip (12')\n6. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 35,
     "after_min": 55,
     "in_class": [
      {
       "minutes": 10,
       "activity": "Ôn từ vựng học phần",
       "category": "lang"
      },
      {
       "minutes": 35,
       "activity": "Reading PET: làm có bấm giờ → chữa → rút chiến lược",
       "category": "input"
      },
      {
       "minutes": 35,
       "activity": "Listening PET: làm → chữa → nghe lại có lời",
       "category": "input"
      },
      {
       "minutes": 15,
       "activity": "Làm lại câu sai với đề khác",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Đọc hoặc nghe mở rộng mức dễ",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "PTP Test 4: Reading Part 1–4, Listening Part 1–2; Skills Test A U8, U9",
     "assessment": "—"
    },
    {
     "session_id": "BO-74",
     "session_no": 74,
     "week": 37,
     "hp": "HP4",
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Test",
     "kind": "Củng cố + kiểm tra Nói",
     "sb_pages": "—",
     "wb_pages": "92–93, 98–99",
     "focus": "Củng cố · Nói – Viết + kiểm tra Nói HP4 (đề WB Unit 10)",
     "task": "—",
     "content": "Thi Nói đủ 4 part như đề thật · Writing Part 1 + Part 2 trong 45 phút",
     "ket_part": "[S1]–[S4] thi Nói theo cặp · [W1] [W2] viết có bấm giờ",
     "ket_codes": [
      "S1",
      "S2",
      "S3",
      "S4",
      "W1",
      "W2"
     ],
     "subskills": [
      "SS1",
      "SS2",
      "SS3",
      "SS4",
      "WS1",
      "WS2",
      "WS3",
      "WS4"
     ],
     "grammar": "B16 Câu tường thuật: câu kể và câu hỏi; B17 Câu hỏi gián tiếp; B18 Quá khứ hoàn thành; B19 used to / didn't use to; B22 Từ nối: although, so that, either…or, as soon as, because, so",
     "vocabulary": "Ôn từ vựng các unit trong học phần; làm lại từ sai trên Wordwall",
     "can_do": "Thi Nói ≥ 3/5 mỗi tiêu chí; 2 bài viết xong trong 45 phút, mỗi bài ≥ 3/5 tiêu chí PET",
     "before": "1. [Nói] Luyện 4 part Nói theo bộ câu hỏi mẫu, ghi âm từng part (12')\n2. [Nghe] Xem video thí sinh mẫu Cambridge, ghi 3 cụm câu học được (8')\n3. [Viết] Lập dàn ý 1 email và 1 article/story (8')\n4. [Lồng tiếng] clip (6')",
     "after": "1. [Nói] Ghi âm lại part Nói chưa đạt theo nhận xét (8')\n2. [Viết] Viết lại bài viết có bấm giờ theo nhận xét (15')\n3. [Phát âm] Luyện 10 câu theo lỗi phát âm được ghi trong buổi thi Nói (6')\n4. [Nghe] 1 part nghe PET (7')\n5. [Lồng tiếng] 2 clip (12')\n6. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 34,
     "after_min": 54,
     "in_class": [
      {
       "minutes": 90,
       "activity": "GV thi Nói từng cặp 10–12'; các cặp khác viết PET Part 1/2 bấm giờ",
       "category": "test"
      },
      {
       "minutes": 15,
       "activity": "Tự chấm bài viết theo thang PET",
       "category": "lang"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "WB Unit 10: Speaking tr. 98–99, Writing tr. 92–93; Review Test 3 (Units 7–9): Writing, Speaking",
     "assessment": "—"
    },
    {
     "session_id": "BO-75",
     "session_no": 75,
     "week": 38,
     "hp": "HP4",
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Test",
     "kind": "Kiểm tra học phần",
     "sb_pages": "—",
     "wb_pages": "84–91, 94–97",
     "focus": "Kiểm tra HP4 – đề luyện thi đầy đủ WB Unit 10 (Reading + Listening)",
     "task": "—",
     "content": "—",
     "ket_part": "[E] Reading 45 phút + Listening ~30 phút như đề thật",
     "ket_codes": [
      "R1",
      "R2",
      "R3",
      "R4",
      "R5",
      "R6",
      "L1",
      "L2",
      "L3",
      "L4"
     ],
     "subskills": [
      "LS1",
      "LS2",
      "LS3",
      "LS4",
      "RS1",
      "RS2",
      "RS3",
      "RS5",
      "RS7",
      "RS8"
     ],
     "grammar": "B16 Câu tường thuật: câu kể và câu hỏi; B17 Câu hỏi gián tiếp; B18 Quá khứ hoàn thành; B19 used to / didn't use to",
     "vocabulary": "Ôn từ vựng các unit trong học phần; làm lại từ sai trên Wordwall",
     "can_do": "100% làm đủ đề; ≥ 60% điểm mỗi bài",
     "before": "1. [Ngữ pháp] Quiz ôn ngữ pháp của học phần 30 câu (có giải thích) (12')\n2. [Từ vựng] Ôn thẻ: toàn bộ từ của học phần còn đến hạn (8')\n3. [Thi] Xem lại chiến lược các part sẽ kiểm tra (video 5') (5')\n4. [Nghe] Nghe 1 bài nghe của sách có lời thoại (5')\n5. [Lồng tiếng] clip (6')",
     "after": "1. [Tự học] Xem bài kiểm tra, ghi 5 lỗi chính vào bảng lỗi cá nhân (8')\n2. [Ngữ pháp] Làm lại câu sai dưới dạng mới (website tự tạo) (12')\n3. [Nghe] Nghe lại phần nghe của bài kiểm tra có lời thoại, chép chính tả 4 câu (10')\n4. [Nói] Ghi âm 1 phút: điều em làm tốt và điều em cần cải thiện (3')\n5. [Lồng tiếng] 2 clip (12')\n6. [Từ vựng] Ôn thẻ (5')\n7. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 36,
     "after_min": 56,
     "in_class": [
      {
       "minutes": 40,
       "activity": "Ôn các điểm ngữ pháp nền của học phần",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Kiểm tra: các part PET đã học + câu ngữ pháp nền",
       "category": "test"
      },
      {
       "minutes": 5,
       "activity": "Ghi lỗi vào bảng lỗi cá nhân",
       "category": "lang"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "WB Unit 10: Reading tr. 84–91, Listening tr. 94–97; đáp án WB (Gold_Exp_B1_WB_Answer_Key)",
     "assessment": "—"
    },
    {
     "session_id": "BO-76",
     "session_no": 76,
     "week": 38,
     "hp": "HP4",
     "unit": "Củng cố",
     "unit_title": "Củng cố học phần",
     "type": "Review",
     "kind": "Linh hoạt",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Linh hoạt 4: chữa đề + ngữ pháp nền",
     "task": "—",
     "content": "Review Test 3 (Units 7–9) Grammar & Vocabulary 30 phút, rồi chữa theo nhóm lỗi",
     "ket_part": "[E] phân tích lỗi theo mã part · làm lại câu sai và giải thích vì sao sai",
     "ket_codes": [],
     "subskills": [],
     "grammar": "B12 Bị động hiện tại đơn và quá khứ đơn; B14 Mệnh đề quan hệ xác định (who, which, that, where, whose); B16 Câu tường thuật: câu kể và câu hỏi; B18 Quá khứ hoàn thành; B19 used to / didn't use to",
     "vocabulary": "Ôn từ vựng các unit trong học phần; làm lại từ sai trên Wordwall",
     "can_do": "Mỗi học sinh sửa đúng ≥ 80% câu sai; chọn 2 part yếu nhất cho HP5",
     "before": "1. [Ôn] Bài theo nhóm: nhóm bù – điểm ngữ pháp chưa đạt; nhóm tăng cường – bài viết/nói dài hơn (15')\n2. [Nghe] Nghe 1 bài nghe theo part yếu nhất (8')\n3. [Từ vựng] Ôn thẻ (5')\n4. [Lồng tiếng] clip (6')",
     "after": "1. [Ôn] Làm lại bài kiểm tra phần chưa đạt (Language Test C) (15')\n2. [Nói] Ghi âm 2 phút về chủ đề của học phần (5')\n3. [Nghe] Chép chính tả + shadowing 1 đoạn nghe (10')\n4. [Từ vựng] Ôn thẻ (5')\n5. [Lồng tiếng] 2 clip (12')\n6. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 34,
     "after_min": 53,
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Review Test 3 (Units 7–9) Grammar & Vocabulary; Grammar file SB tr. 140–143; Language Test C U8, U9",
     "assessment": "—"
    },
    {
     "session_id": "BO-77",
     "session_no": 77,
     "week": 39,
     "hp": "HP5",
     "unit": "Luyện thi",
     "unit_title": "B1 Preliminary for Schools",
     "type": "PET Lab",
     "kind": "Luyện thi",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Luyện thi · Reading Part 1, 2, 5",
     "task": "—",
     "content": "Biển báo, tin nhắn, mô tả; collocation hay gặp",
     "ket_part": "[R1] 5 văn bản ngắn (biển báo, tin nhắn), chọn ý đúng · [R2] nối 5 người với 8 văn bản · [R5] điền từ trắc nghiệm (từ vựng, collocation) — dạy chiến lược → làm có bấm giờ → chữa bằng cách chỉ câu chứa đáp án",
     "ket_codes": [
      "R1",
      "R2",
      "R5"
     ],
     "subskills": [
      "RS1",
      "RS3",
      "RS7"
     ],
     "grammar": "B15 Khuyết thiếu chỉ bắt buộc, cấm, cần thiết: must, have to, don't have to, need to; B20 Giới từ đi kèm tính từ và động từ (interested in, listen to, proud of…)",
     "vocabulary": "Ôn từ vựng cả khóa + danh sách từ vựng B1 Preliminary theo chủ đề",
     "can_do": "≥ 4/5 câu Part 1; ≥ 4/5 câu nối Part 2; ≥ 4/6 câu Part 5",
     "before": "1. [Thi] Video chiến lược part R1, R2, R5 + làm 1 câu mẫu có giải thích (10')\n2. [Từ vựng] Từ vựng chủ đề PET theo danh sách B1 Preliminary (Wordwall 15 từ) (8')\n3. [Nghe] Nghe 1 bài nghe PET có lời thoại, đánh dấu từ khóa (6')\n4. [Từ vựng] Ôn thẻ (4')\n5. [Lồng tiếng] clip dạng Speaking Part 2 (6')",
     "after": "1. [Thi] Làm part tương ứng trong PTP Test 6 (R1, R2, R5) có bấm giờ (15')\n2. [Thi] Chữa: xem câu chứa đáp án, ghi lỗi vào bảng lỗi (6')\n3. [Nghe] Chép chính tả 4 câu đề nghe (5')\n4. [Nói] Ghi âm 1 câu trả lời Speaking Part 1–4 (theo lượt) (6')\n5. [Lồng tiếng] 2 clip (lồng tiếng + nói tiếp 2–3 câu của mình) (12')\n6. [Từ vựng] Ôn thẻ (4')\n7. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 34,
     "after_min": 54,
     "in_class": [
      {
       "minutes": 15,
       "activity": "Giới thiệu dạng bài và chiến lược",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Lượt 1: làm có bấm giờ → chữa",
       "category": "input"
      },
      {
       "minutes": 30,
       "activity": "Lượt 2: làm có bấm giờ → chữa",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Làm lại câu sai với đề khác",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "PTP Test 5 Reading Part 1, 2, 5; Cambridge B1 Preliminary 1 (2020) Test 1 Reading Part 1, 2, 5",
     "assessment": "—"
    },
    {
     "session_id": "BO-78",
     "session_no": 78,
     "week": 39,
     "hp": "HP5",
     "unit": "Luyện thi",
     "unit_title": "B1 Preliminary for Schools",
     "type": "PET Lab",
     "kind": "Luyện thi",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Luyện thi · Reading Part 3, 4, 6",
     "task": "—",
     "content": "Từ quy chiếu, từ nối, từ chức năng (giới từ, trợ động từ, đại từ quan hệ)",
     "ket_part": "[R3] bài dài, 5 câu trắc nghiệm · [R4] điền 5 câu vào bài (3 câu thừa) · [R6] điền từ tự do (từ chức năng) — dạy chiến lược → làm có bấm giờ → chữa bằng cách chỉ câu chứa đáp án · [RS4] nhận ra thái độ, ý kiến người viết: tìm tính từ, trạng từ đánh giá (surprisingly, unfortunately), phân biệt sự thật và ý kiến",
     "ket_codes": [
      "R3",
      "R4",
      "R6"
     ],
     "subskills": [
      "RS2",
      "RS4",
      "RS5",
      "RS8"
     ],
     "grammar": "B14 Mệnh đề quan hệ xác định (who, which, that, where, whose); B22 Từ nối: although, so that, either…or, as soon as, because, so",
     "vocabulary": "Ôn từ vựng cả khóa + danh sách từ vựng B1 Preliminary theo chủ đề",
     "can_do": "≥ 4/5 câu Part 3; ≥ 3/5 câu Part 4; ≥ 4/6 chỗ trống Part 6; trả lời đúng ≥ 2/2 câu hỏi về thái độ người viết",
     "before": "1. [Thi] Video chiến lược part R3, R4, R6 + làm 1 câu mẫu có giải thích (10')\n2. [Từ vựng] Từ vựng chủ đề PET theo danh sách B1 Preliminary (Wordwall 15 từ) (8')\n3. [Nghe] Nghe 1 bài nghe PET có lời thoại, đánh dấu từ khóa (6')\n4. [Từ vựng] Ôn thẻ (4')\n5. [Lồng tiếng] clip dạng Speaking Part 2 (6')",
     "after": "1. [Thi] Làm part tương ứng trong PTP Test 6 (R3, R4, R6) có bấm giờ (15')\n2. [Thi] Chữa: xem câu chứa đáp án, ghi lỗi vào bảng lỗi (6')\n3. [Nghe] Chép chính tả 4 câu đề nghe (5')\n4. [Nói] Ghi âm 1 câu trả lời Speaking Part 1–4 (theo lượt) (6')\n5. [Lồng tiếng] 2 clip (lồng tiếng + nói tiếp 2–3 câu của mình) (12')\n6. [Từ vựng] Ôn thẻ (4')\n7. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 34,
     "after_min": 54,
     "in_class": [
      {
       "minutes": 15,
       "activity": "Giới thiệu dạng bài và chiến lược",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Lượt 1: làm có bấm giờ → chữa",
       "category": "input"
      },
      {
       "minutes": 30,
       "activity": "Lượt 2: làm có bấm giờ → chữa",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Làm lại câu sai với đề khác",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "PTP Test 5 Reading Part 3, 4, 6; Cambridge B1 Preliminary 1 Test 1 Reading Part 3, 4, 6",
     "assessment": "—"
    },
    {
     "session_id": "BO-79",
     "session_no": 79,
     "week": 40,
     "hp": "HP5",
     "unit": "Luyện thi",
     "unit_title": "B1 Preliminary for Schools",
     "type": "PET Lab",
     "kind": "Luyện thi",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Luyện thi · Writing Part 1 và 2",
     "task": "—",
     "content": "Email đủ 4 ý; bài báo và truyện có cấu trúc, đa dạng ngữ pháp B1",
     "ket_part": "[W1] email ~100 từ theo 4 ghi chú · [W2] bài báo hoặc truyện ~100 từ — dạy chiến lược → làm có bấm giờ → chữa bằng cách chỉ câu chứa đáp án",
     "ket_codes": [
      "W1",
      "W2"
     ],
     "subskills": [
      "WS1",
      "WS2",
      "WS3",
      "WS4",
      "WS6"
     ],
     "grammar": "B18 Quá khứ hoàn thành; B22 Từ nối: although, so that, either…or, as soon as, because, so",
     "vocabulary": "Ôn từ vựng cả khóa + danh sách từ vựng B1 Preliminary theo chủ đề",
     "can_do": "email ~100 từ, đủ 4 ý trong ghi chú, ≤ 3 lỗi, thang PET ≥ 3/5 mỗi tiêu chí; bài ~100 từ có mở – thân – kết, ≥ 3 từ nối, ≤ 3 lỗi, thang PET ≥ 3/5 mỗi tiêu chí",
     "before": "1. [Thi] Video chiến lược part W1, W2 + làm 1 câu mẫu có giải thích (10')\n2. [Từ vựng] Từ vựng chủ đề PET theo danh sách B1 Preliminary (Wordwall 15 từ) (8')\n3. [Nghe] Nghe 1 bài nghe PET có lời thoại, đánh dấu từ khóa (6')\n4. [Từ vựng] Ôn thẻ (4')\n5. [Lồng tiếng] clip dạng Speaking Part 2 (6')",
     "after": "1. [Thi] Làm part tương ứng trong PTP Test 6 (W1, W2) có bấm giờ (15')\n2. [Thi] Chữa: xem câu chứa đáp án, ghi lỗi vào bảng lỗi (6')\n3. [Nghe] Chép chính tả 4 câu đề nghe (5')\n4. [Nói] Ghi âm 1 câu trả lời Speaking Part 1–4 (theo lượt) (6')\n5. [Lồng tiếng] 2 clip (lồng tiếng + nói tiếp 2–3 câu của mình) (12')\n6. [Từ vựng] Ôn thẻ (4')\n7. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 34,
     "after_min": 54,
     "in_class": [
      {
       "minutes": 15,
       "activity": "Giới thiệu dạng bài và chiến lược",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Lượt 1: làm có bấm giờ → chữa",
       "category": "input"
      },
      {
       "minutes": 30,
       "activity": "Lượt 2: làm có bấm giờ → chữa",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Làm lại câu sai với đề khác",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "PTP Test 5 Writing; Writing file SB tr. 150–155; thang chấm PET: Content, Communicative achievement, Organisation, Language (0–5)",
     "assessment": "—"
    },
    {
     "session_id": "BO-80",
     "session_no": 80,
     "week": 40,
     "hp": "HP5",
     "unit": "Luyện thi",
     "unit_title": "B1 Preliminary for Schools",
     "type": "PET Lab",
     "kind": "Luyện thi",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Luyện thi · Listening Part 1, 2",
     "task": "—",
     "content": "Nhận ra thay đổi ý, phủ định, ý kiến và thái độ",
     "ket_part": "[L1] 7 đoạn ngắn, chọn tranh · [L2] 6 hội thoại ngắn, ý kiến/thái độ — dạy chiến lược → làm có bấm giờ → chữa bằng cách chỉ câu chứa đáp án · [LS6] nghe thông báo, hướng dẫn (nhà ga, trường học, cửa hàng): ghi giờ, địa điểm, việc phải làm",
     "ket_codes": [
      "L1",
      "L2"
     ],
     "subskills": [
      "LS1",
      "LS2",
      "LS5",
      "LS6"
     ],
     "grammar": "—",
     "vocabulary": "Ôn từ vựng cả khóa + danh sách từ vựng B1 Preliminary theo chủ đề",
     "can_do": "≥ 5/7 câu Part 1; ≥ 4/6 câu Part 2",
     "before": "1. [Thi] Video chiến lược part L1, L2 + làm 1 câu mẫu có giải thích (10')\n2. [Từ vựng] Từ vựng chủ đề PET theo danh sách B1 Preliminary (Wordwall 15 từ) (8')\n3. [Nghe] Nghe 1 bài nghe PET có lời thoại, đánh dấu từ khóa (6')\n4. [Từ vựng] Ôn thẻ (4')\n5. [Lồng tiếng] clip dạng Speaking Part 2 (6')",
     "after": "1. [Thi] Làm part tương ứng trong PTP Test 6 (L1, L2) có bấm giờ (15')\n2. [Thi] Chữa: xem câu chứa đáp án, ghi lỗi vào bảng lỗi (6')\n3. [Nghe] Chép chính tả 4 câu đề nghe (5')\n4. [Nói] Ghi âm 1 câu trả lời Speaking Part 1–4 (theo lượt) (6')\n5. [Lồng tiếng] 2 clip (lồng tiếng + nói tiếp 2–3 câu của mình) (12')\n6. [Từ vựng] Ôn thẻ (4')\n7. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 34,
     "after_min": 54,
     "in_class": [
      {
       "minutes": 15,
       "activity": "Giới thiệu dạng bài và chiến lược",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Lượt 1: làm có bấm giờ → chữa",
       "category": "input"
      },
      {
       "minutes": 30,
       "activity": "Lượt 2: làm có bấm giờ → chữa",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Làm lại câu sai với đề khác",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "PTP Test 6 Listening Part 1, 2; Cambridge B1 Preliminary 1 Test 1 Listening Part 1, 2",
     "assessment": "—"
    },
    {
     "session_id": "BO-81",
     "session_no": 81,
     "week": 41,
     "hp": "HP5",
     "unit": "Luyện thi",
     "unit_title": "B1 Preliminary for Schools",
     "type": "PET Lab",
     "kind": "Luyện thi",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Luyện thi · Listening Part 3, 4",
     "task": "—",
     "content": "Đánh vần, số, ngày tháng; theo dõi bài phỏng vấn dài",
     "ket_part": "[L3] điền 6 thông tin · [L4] phỏng vấn dài, 6 câu trắc nghiệm — dạy chiến lược → làm có bấm giờ → chữa bằng cách chỉ câu chứa đáp án",
     "ket_codes": [
      "L3",
      "L4"
     ],
     "subskills": [
      "LS3",
      "LS4",
      "LS5"
     ],
     "grammar": "—",
     "vocabulary": "Ôn từ vựng cả khóa + danh sách từ vựng B1 Preliminary theo chủ đề",
     "can_do": "≥ 4/6 chỗ trống Part 3, đúng chính tả; ≥ 4/6 câu Part 4",
     "before": "1. [Thi] Video chiến lược part L3, L4 + làm 1 câu mẫu có giải thích (10')\n2. [Từ vựng] Từ vựng chủ đề PET theo danh sách B1 Preliminary (Wordwall 15 từ) (8')\n3. [Nghe] Nghe 1 bài nghe PET có lời thoại, đánh dấu từ khóa (6')\n4. [Từ vựng] Ôn thẻ (4')\n5. [Lồng tiếng] clip dạng Speaking Part 2 (6')",
     "after": "1. [Thi] Làm part tương ứng trong PTP Test 6 (L3, L4) có bấm giờ (15')\n2. [Thi] Chữa: xem câu chứa đáp án, ghi lỗi vào bảng lỗi (6')\n3. [Nghe] Chép chính tả 4 câu đề nghe (5')\n4. [Nói] Ghi âm 1 câu trả lời Speaking Part 1–4 (theo lượt) (6')\n5. [Lồng tiếng] 2 clip (lồng tiếng + nói tiếp 2–3 câu của mình) (12')\n6. [Từ vựng] Ôn thẻ (4')\n7. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 34,
     "after_min": 54,
     "in_class": [
      {
       "minutes": 15,
       "activity": "Giới thiệu dạng bài và chiến lược",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Lượt 1: làm có bấm giờ → chữa",
       "category": "input"
      },
      {
       "minutes": 30,
       "activity": "Lượt 2: làm có bấm giờ → chữa",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Làm lại câu sai với đề khác",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "PTP Test 6 Listening Part 3, 4; Cambridge B1 Preliminary 1 Test 1 Listening Part 3, 4",
     "assessment": "—"
    },
    {
     "session_id": "BO-82",
     "session_no": 82,
     "week": 41,
     "hp": "HP5",
     "unit": "Luyện thi",
     "unit_title": "B1 Preliminary for Schools",
     "type": "PET Lab",
     "kind": "Luyện thi",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Luyện thi · Speaking Part 1–4",
     "task": "—",
     "content": "Mở rộng câu trả lời, tả ảnh khi thiếu từ, thảo luận đi đến quyết định",
     "ket_part": "[S1] câu hỏi cá nhân · [S2] tả ảnh 1 phút · [S3] thảo luận cặp theo tranh gợi ý · [S4] thảo luận mở rộng — dạy chiến lược → làm có bấm giờ → chữa bằng cách chỉ câu chứa đáp án · [SS6] dùng câu hỏi lại, làm rõ khi chưa hiểu bạn hoặc giám khảo",
     "ket_codes": [
      "S1",
      "S2",
      "S3",
      "S4"
     ],
     "subskills": [
      "SS1",
      "SS2",
      "SS3",
      "SS4",
      "SS6"
     ],
     "grammar": "—",
     "vocabulary": "Ôn từ vựng cả khóa + danh sách từ vựng B1 Preliminary theo chủ đề",
     "can_do": "Mỗi cặp thi đủ 4 part trong 12–14 phút, ≥ 3/5 mỗi tiêu chí",
     "before": "1. [Thi] Video chiến lược part S1, S2, S3, S4 + làm 1 câu mẫu có giải thích (10')\n2. [Từ vựng] Từ vựng chủ đề PET theo danh sách B1 Preliminary (Wordwall 15 từ) (8')\n3. [Nghe] Nghe 1 bài nghe PET có lời thoại, đánh dấu từ khóa (6')\n4. [Từ vựng] Ôn thẻ (4')\n5. [Lồng tiếng] clip dạng Speaking Part 2 (6')",
     "after": "1. [Thi] Làm part tương ứng trong PTP Test 6 (S1, S2, S3, S4) có bấm giờ (15')\n2. [Thi] Chữa: xem câu chứa đáp án, ghi lỗi vào bảng lỗi (6')\n3. [Nghe] Chép chính tả 4 câu đề nghe (5')\n4. [Nói] Ghi âm 1 câu trả lời Speaking Part 1–4 (theo lượt) (6')\n5. [Lồng tiếng] 2 clip (lồng tiếng + nói tiếp 2–3 câu của mình) (12')\n6. [Từ vựng] Ôn thẻ (4')\n7. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 34,
     "after_min": 54,
     "in_class": [
      {
       "minutes": 15,
       "activity": "Giới thiệu dạng bài và chiến lược",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Lượt 1: làm có bấm giờ → chữa",
       "category": "input"
      },
      {
       "minutes": 30,
       "activity": "Lượt 2: làm có bấm giờ → chữa",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Làm lại câu sai với đề khác",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "PTP Test 5–6 Speaking; video thí sinh mẫu Cambridge (Roberto và Simone); thang Nói PET: Grammar & Vocabulary, Discourse management, Pronunciation, Interactive communication (0–5)",
     "assessment": "—"
    },
    {
     "session_id": "BO-83",
     "session_no": 83,
     "week": 42,
     "hp": "HP5",
     "unit": "Sự kiện",
     "unit_title": "Công dân toàn cầu",
     "type": "Sự kiện",
     "kind": "Sự kiện kỹ năng",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Sự kiện E11 · Life Skills & Summer Jobs Fair",
     "task": "—",
     "content": "Việc làm thêm, kỹ năng sống (U10)",
     "ket_part": "[R3] đọc mô tả công việc · [S1] phỏng vấn xin việc thử · [W1] email ứng tuyển ~100 từ",
     "ket_codes": [
      "R3",
      "S1",
      "W1"
     ],
     "subskills": [
      "RS2",
      "SS1",
      "WS1",
      "WS4"
     ],
     "grammar": "B17 Câu hỏi gián tiếp; B10 Câu điều kiện loại 0, 1, 2",
     "vocabulary": "Dùng lại từ vựng của unit vừa học (xem cột này ở các buổi trước)",
     "can_do": "Mỗi học sinh tham gia 1 buổi phỏng vấn thử 5 phút và nộp 1 email ứng tuyển",
     "before": "1. [Dự án] Chuẩn bị phần việc của mình cho sự kiện 'Life Skills & Summer Jobs Fair' (nội dung, đồ dùng, vai) (15')\n2. [Nói] Viết và ghi âm phần nói của mình 1–2 phút, nghe lại và sửa (8')\n3. [Từ vựng] Ôn từ vựng và cấu trúc cần dùng: Việc làm thêm, kỹ năng sống (U10) (6')\n4. [Lồng tiếng] clip chủ đề sự kiện (6')",
     "after": "1. [Tự học] Tự đánh giá theo rubric 4 tiêu chí (3')\n2. [Viết] Bài viết sau sự kiện (dạng W1) ~100 từ (15')\n3. [Nói] Xem video sự kiện của nhóm, ghi âm nhận xét 1 phút (1 điểm tốt, 1 điểm cần cải thiện) (5')\n4. [Nghe] Nghe phần trình bày của 1 nhóm khác, trả lời 3 câu hỏi (6')\n5. [Từ vựng] Ôn thẻ đến hạn (4')\n6. [Lồng tiếng] 2 clip (12')\n7. [Ôn] Quiz trộn 10 câu unit vừa học (5')\n8. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 35,
     "after_min": 56,
     "in_class": [
      {
       "minutes": 20,
       "activity": "Chuẩn bị ngôn ngữ cho sản phẩm",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Thực hiện sản phẩm trước khán giả",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Phản hồi theo rubric",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá năng lực",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Định hướng nghề nghiệp, kỹ năng sống (SDG 8)",
     "materials": "Rubric 4 tiêu chí: ngôn ngữ, nội dung, hợp tác, trình bày",
     "assessment": "—"
    },
    {
     "session_id": "BO-84",
     "session_no": 84,
     "week": 42,
     "hp": "HP5",
     "unit": "Luyện thi",
     "unit_title": "B1 Preliminary for Schools",
     "type": "Test",
     "kind": "Đánh giá ngữ pháp nền",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Đánh giá nền tảng ngữ pháp cuối khóa + Writing có bấm giờ",
     "task": "—",
     "content": "Đánh giá 28 điểm ngữ pháp nền B1 (B01–B22, B26–B31) theo 3 mức: nhận biết, có kiểm soát, tự động",
     "ket_part": "[W1] [W2] viết Part 1 + Part 2 trong 45 phút · [R6] điền từ chức năng",
     "ket_codes": [
      "W1",
      "W2",
      "R6"
     ],
     "subskills": [
      "RS8",
      "WS1",
      "WS2",
      "WS3",
      "WS4"
     ],
     "grammar": "B01 Hiện tại đơn và hiện tại tiếp diễn; động từ trạng thái; B02 Trạng từ tần suất, vị trí; cụm thời gian; B03 Mạo từ a/an/the/không mạo từ; B04 Quá khứ đơn và quá khứ tiếp diễn (when/while); B05 Danh động từ (-ing) làm chủ ngữ, sau giới từ; B06 Các cách diễn đạt tương lai: will, going to, hiện tại tiếp diễn, hiện tại đơn; B07 Khuyết thiếu cho lời khuyên, gợi ý: should, could, ought to, Why don't you…?; B08 Hiện tại hoàn thành với ever/never/already/yet/just/for/since; B09 Quá khứ đơn và hiện tại hoàn thành; B10 Câu điều kiện loại 0, 1, 2; B11 unless, in case, if I were you; B12 Bị động hiện tại đơn và quá khứ đơn; B13 have/get something done; B14 Mệnh đề quan hệ xác định (who, which, that, where, whose); B15 Khuyết thiếu chỉ bắt buộc, cấm, cần thiết: must, have to, don't have to, need to; B16 Câu tường thuật: câu kể và câu hỏi; B17 Câu hỏi gián tiếp; B18 Quá khứ hoàn thành; B19 used to / didn't use to; B20 Giới từ đi kèm tính từ và động từ (interested in, listen to, proud of…); B21 Trật tự tính từ; tính từ -ed/-ing; B22 Từ nối: although, so that, either…or, as soon as, because, so; B26 may / might / could chỉ khả năng xảy ra; B27 So sánh hơn, so sánh nhất, (not) as…as; too/enough (to); so/such; B28 can / could / be able to chỉ khả năng làm được; B29 Động từ + V-ing / to V (enjoy, decide, want, stop, try…); B30 Lượng từ: a few / a little, few / little, too much / too many, plenty of; B31 Câu hỏi đuôi (question tags)",
     "vocabulary": "Ôn từ vựng cả khóa + danh sách từ vựng B1 Preliminary theo chủ đề",
     "can_do": "Đúng mức ở ≥ 24/28 điểm ngữ pháp; 2 bài viết xong trong 45 phút",
     "before": "1. [Thi] Video chiến lược part W1, W2, R6 + làm 1 câu mẫu có giải thích (10')\n2. [Từ vựng] Từ vựng chủ đề PET theo danh sách B1 Preliminary (Wordwall 15 từ) (8')\n3. [Nghe] Nghe 1 bài nghe PET có lời thoại, đánh dấu từ khóa (6')\n4. [Từ vựng] Ôn thẻ (4')\n5. [Lồng tiếng] clip dạng Speaking Part 2 (6')",
     "after": "1. [Thi] Làm part tương ứng trong PTP Test 6 (W1, W2, R6) có bấm giờ (15')\n2. [Thi] Chữa: xem câu chứa đáp án, ghi lỗi vào bảng lỗi (6')\n3. [Nghe] Chép chính tả 4 câu đề nghe (5')\n4. [Nói] Ghi âm 1 câu trả lời Speaking Part 1–4 (theo lượt) (6')\n5. [Lồng tiếng] 2 clip (lồng tiếng + nói tiếp 2–3 câu của mình) (12')\n6. [Từ vựng] Ôn thẻ (4')\n7. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 34,
     "after_min": 54,
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Bài đánh giá ngữ pháp nền B1 (IVY soạn từ Grammar file SB tr. 124–143); PTP Test 6 Writing",
     "assessment": "—"
    },
    {
     "session_id": "BO-85",
     "session_no": 85,
     "week": 43,
     "hp": "HP5",
     "unit": "Luyện thi",
     "unit_title": "B1 Preliminary for Schools",
     "type": "Test",
     "kind": "Thi thử",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Thi thử lần 1",
     "task": "—",
     "content": "—",
     "ket_part": "[E] Reading 45' + Listening 30' tại lớp; Writing 45' làm tại nhà có bấm giờ trên website",
     "ket_codes": [
      "R1",
      "R2",
      "R3",
      "R4",
      "R5",
      "R6",
      "L1",
      "L2",
      "L3",
      "L4"
     ],
     "subskills": [
      "LS1",
      "LS2",
      "LS3",
      "LS4",
      "RS1",
      "RS2",
      "RS3",
      "RS5",
      "RS7",
      "RS8"
     ],
     "grammar": "—",
     "vocabulary": "Ôn từ vựng cả khóa + danh sách từ vựng B1 Preliminary theo chủ đề",
     "can_do": "100% làm đủ đề; ≥ 65% mỗi bài",
     "before": "1. [Thi] Ôn chiến lược 4 bài thi (checklist), làm 1 đề nghe ngắn (15')\n2. [Từ vựng] Ôn thẻ cả khóa (8')\n3. [Nói] Luyện Speaking Part 2 với 2 ảnh (5')\n4. [Lồng tiếng] clip (6')",
     "after": "1. [Thi] Writing 45 phút tại nhà có bấm giờ trên website (45')\n2. [Lồng tiếng] clip (6')\n3. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 34,
     "after_min": 57,
     "in_class": [
      {
       "minutes": 45,
       "activity": "Reading (45 phút)",
       "category": "test"
      },
      {
       "minutes": 30,
       "activity": "Listening (30 phút)",
       "category": "test"
      },
      {
       "minutes": 30,
       "activity": "Chuyển đáp án sang phiếu, ghi lỗi theo part; Writing làm tại nhà có bấm giờ",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "PTP Test 7: Reading, Listening, Writing",
     "assessment": "—"
    },
    {
     "session_id": "BO-86",
     "session_no": 86,
     "week": 43,
     "hp": "HP5",
     "unit": "Luyện thi",
     "unit_title": "B1 Preliminary for Schools",
     "type": "Review",
     "kind": "Chữa đề",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Chữa đề thi thử 1 + thi Nói thử",
     "task": "—",
     "content": "Phân tích lỗi theo mã part; ghi lỗi ngữ pháp vào bảng lỗi cá nhân",
     "ket_part": "[E] chữa đề theo nhóm part yếu · [S1]–[S4] thi Nói PTP Test 7 theo cặp (12 phút/cặp) trong lúc cả lớp chữa đề",
     "ket_codes": [
      "S1",
      "S2",
      "S3",
      "S4"
     ],
     "subskills": [
      "SS1",
      "SS2",
      "SS3",
      "SS4"
     ],
     "grammar": "—",
     "vocabulary": "Ôn từ vựng cả khóa + danh sách từ vựng B1 Preliminary theo chủ đề",
     "can_do": "Mỗi học sinh xác định 2 part yếu nhất và lập kế hoạch 2 tuần",
     "before": "1. [Thi] Xem kết quả thi thử theo từng part, chọn 2 part yếu (8')\n2. [Nói] Luyện 4 part Nói chuẩn bị thi Nói thử (12')\n3. [Từ vựng] Ôn thẻ (6')\n4. [Lồng tiếng] clip (6')",
     "after": "1. [Thi] Làm lại câu sai thi thử 1, ghi lý do (15')\n2. [Nghe] Nghe lại đề nghe có lời thoại, chép chính tả 5 câu (12')\n3. [Tự học] Lập kế hoạch ôn 2 tuần cho 2 part yếu (5')\n4. [Lồng tiếng] 2 clip (12')\n5. [Từ vựng] Ôn thẻ (5')\n6. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 32,
     "after_min": 55,
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Đáp án, lời thoại PTP Test 7; PTP Test 7 Speaking",
     "assessment": "—"
    },
    {
     "session_id": "BO-87",
     "session_no": 87,
     "week": 44,
     "hp": "HP5",
     "unit": "Luyện thi",
     "unit_title": "B1 Preliminary for Schools",
     "type": "PET Lab",
     "kind": "Luyện thi",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Chuyên sâu Listening",
     "task": "—",
     "content": "Luyện lại part yếu theo nhóm, nghe lần 2 có lời thoại để thấy chỗ bỏ sót; chép chính tả số, tên, giờ",
     "ket_part": "[L1] 7 đoạn ngắn, chọn tranh · [L2] 6 hội thoại ngắn, ý kiến/thái độ · [L3] điền 6 thông tin · [L4] phỏng vấn dài, 6 câu trắc nghiệm — dạy chiến lược → làm có bấm giờ → chữa bằng cách chỉ câu chứa đáp án · [LS7] chép chính tả 3–4 câu từ lời thoại, chú ý âm nối, âm yếu, dạng rút gọn",
     "ket_codes": [
      "L1",
      "L2",
      "L3",
      "L4"
     ],
     "subskills": [
      "LS1",
      "LS2",
      "LS3",
      "LS4",
      "LS5",
      "LS7"
     ],
     "grammar": "—",
     "vocabulary": "Ôn từ vựng cả khóa + danh sách từ vựng B1 Preliminary theo chủ đề",
     "can_do": "Tăng ≥ 2 câu ở part yếu nhất so với thi thử 1",
     "before": "1. [Thi] Video chiến lược part L1, L2, L3, L4 + làm 1 câu mẫu có giải thích (10')\n2. [Từ vựng] Từ vựng chủ đề PET theo danh sách B1 Preliminary (Wordwall 15 từ) (8')\n3. [Nghe] Nghe 1 bài nghe PET có lời thoại, đánh dấu từ khóa (6')\n4. [Từ vựng] Ôn thẻ (4')\n5. [Lồng tiếng] clip dạng Speaking Part 2 (6')",
     "after": "1. [Thi] Làm part tương ứng trong PTP Test 6 (L1, L2, L3, L4) có bấm giờ (15')\n2. [Thi] Chữa: xem câu chứa đáp án, ghi lỗi vào bảng lỗi (6')\n3. [Nghe] Chép chính tả 4 câu đề nghe (5')\n4. [Nói] Ghi âm 1 câu trả lời Speaking Part 1–4 (theo lượt) (6')\n5. [Lồng tiếng] 2 clip (lồng tiếng + nói tiếp 2–3 câu của mình) (12')\n6. [Từ vựng] Ôn thẻ (4')\n7. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 34,
     "after_min": 54,
     "in_class": [
      {
       "minutes": 15,
       "activity": "Giới thiệu dạng bài và chiến lược",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Lượt 1: làm có bấm giờ → chữa",
       "category": "input"
      },
      {
       "minutes": 30,
       "activity": "Lượt 2: làm có bấm giờ → chữa",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Làm lại câu sai với đề khác",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "PTP Test 8 Listening; lời thoại PTP Test 7; Lời thoại PTP Test 7–8",
     "assessment": "—"
    },
    {
     "session_id": "BO-88",
     "session_no": 88,
     "week": 44,
     "hp": "HP5",
     "unit": "Luyện thi",
     "unit_title": "B1 Preliminary for Schools",
     "type": "PET Lab",
     "kind": "Luyện thi",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Chuyên sâu Reading",
     "task": "—",
     "content": "Từ đồng nghĩa và cách diễn đạt khác; giải thích vì sao đáp án sai bị loại",
     "ket_part": "[R1] 5 văn bản ngắn (biển báo, tin nhắn), chọn ý đúng · [R2] nối 5 người với 8 văn bản · [R3] bài dài, 5 câu trắc nghiệm · [R4] điền 5 câu vào bài (3 câu thừa) · [R5] điền từ trắc nghiệm (từ vựng, collocation) · [R6] điền từ tự do (từ chức năng) — dạy chiến lược → làm có bấm giờ → chữa bằng cách chỉ câu chứa đáp án · [RS4] nhận ra thái độ, ý kiến người viết: tìm tính từ, trạng từ đánh giá (surprisingly, unfortunately), phân biệt sự thật và ý kiến",
     "ket_codes": [
      "R1",
      "R2",
      "R3",
      "R4",
      "R5",
      "R6"
     ],
     "subskills": [
      "RS1",
      "RS2",
      "RS3",
      "RS4",
      "RS5",
      "RS7",
      "RS8"
     ],
     "grammar": "—",
     "vocabulary": "Ôn từ vựng cả khóa + danh sách từ vựng B1 Preliminary theo chủ đề",
     "can_do": "Tăng ≥ 2 câu ở part yếu nhất so với thi thử 1; trả lời đúng ≥ 2/2 câu hỏi về thái độ người viết",
     "before": "1. [Thi] Video chiến lược part R1, R2, R3, R4, R5, R6 + làm 1 câu mẫu có giải thích (10')\n2. [Từ vựng] Từ vựng chủ đề PET theo danh sách B1 Preliminary (Wordwall 15 từ) (8')\n3. [Nghe] Nghe 1 bài nghe PET có lời thoại, đánh dấu từ khóa (6')\n4. [Từ vựng] Ôn thẻ (4')\n5. [Lồng tiếng] clip dạng Speaking Part 2 (6')",
     "after": "1. [Thi] Làm part tương ứng trong PTP Test 6 (R1, R2, R3, R4, R5, R6) có bấm giờ (15')\n2. [Thi] Chữa: xem câu chứa đáp án, ghi lỗi vào bảng lỗi (6')\n3. [Nghe] Chép chính tả 4 câu đề nghe (5')\n4. [Nói] Ghi âm 1 câu trả lời Speaking Part 1–4 (theo lượt) (6')\n5. [Lồng tiếng] 2 clip (lồng tiếng + nói tiếp 2–3 câu của mình) (12')\n6. [Từ vựng] Ôn thẻ (4')\n7. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 34,
     "after_min": 54,
     "in_class": [
      {
       "minutes": 15,
       "activity": "Giới thiệu dạng bài và chiến lược",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Lượt 1: làm có bấm giờ → chữa",
       "category": "input"
      },
      {
       "minutes": 30,
       "activity": "Lượt 2: làm có bấm giờ → chữa",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Làm lại câu sai với đề khác",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "PTP Test 8 Reading",
     "assessment": "—"
    },
    {
     "session_id": "BO-89",
     "session_no": 89,
     "week": 45,
     "hp": "HP5",
     "unit": "Luyện thi",
     "unit_title": "B1 Preliminary for Schools",
     "type": "PET Lab",
     "kind": "Luyện thi",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Chuyên sâu Writing",
     "task": "—",
     "content": "Lỗi hay gặp trong bảng lỗi cá nhân; câu phức (mệnh đề quan hệ, điều kiện, bị động) trong bài viết",
     "ket_part": "[W1] email ~100 từ theo 4 ghi chú · [W2] bài báo hoặc truyện ~100 từ — dạy chiến lược → làm có bấm giờ → chữa bằng cách chỉ câu chứa đáp án · [WS5] nâng câu: viết lại 3 câu đơn trong bài thành câu phức (mệnh đề quan hệ, điều kiện, bị động, although)",
     "ket_codes": [
      "W1",
      "W2"
     ],
     "subskills": [
      "WS1",
      "WS2",
      "WS3",
      "WS4",
      "WS5",
      "WS6"
     ],
     "grammar": "B10 Câu điều kiện loại 0, 1, 2; B12 Bị động hiện tại đơn và quá khứ đơn; B14 Mệnh đề quan hệ xác định (who, which, that, where, whose)",
     "vocabulary": "Ôn từ vựng cả khóa + danh sách từ vựng B1 Preliminary theo chủ đề",
     "can_do": "Mỗi bài viết đạt ≥ 4/5 ở ≥ 2 tiêu chí PET",
     "before": "1. [Thi] Video chiến lược part W1, W2 + làm 1 câu mẫu có giải thích (10')\n2. [Từ vựng] Từ vựng chủ đề PET theo danh sách B1 Preliminary (Wordwall 15 từ) (8')\n3. [Nghe] Nghe 1 bài nghe PET có lời thoại, đánh dấu từ khóa (6')\n4. [Từ vựng] Ôn thẻ (4')\n5. [Lồng tiếng] clip dạng Speaking Part 2 (6')",
     "after": "1. [Thi] Làm part tương ứng trong PTP Test 6 (W1, W2) có bấm giờ (15')\n2. [Thi] Chữa: xem câu chứa đáp án, ghi lỗi vào bảng lỗi (6')\n3. [Nghe] Chép chính tả 4 câu đề nghe (5')\n4. [Nói] Ghi âm 1 câu trả lời Speaking Part 1–4 (theo lượt) (6')\n5. [Lồng tiếng] 2 clip (lồng tiếng + nói tiếp 2–3 câu của mình) (12')\n6. [Từ vựng] Ôn thẻ (4')\n7. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 34,
     "after_min": 54,
     "in_class": [
      {
       "minutes": 15,
       "activity": "Giới thiệu dạng bài và chiến lược",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Lượt 1: làm có bấm giờ → chữa",
       "category": "input"
      },
      {
       "minutes": 30,
       "activity": "Lượt 2: làm có bấm giờ → chữa",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Làm lại câu sai với đề khác",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "PTP Test 8 Writing; bài mẫu Writing file SB tr. 150–155; thang chấm PET: Content, Communicative achievement, Organisation, Language (0–5)",
     "assessment": "—"
    },
    {
     "session_id": "BO-90",
     "session_no": 90,
     "week": 45,
     "hp": "HP5",
     "unit": "Luyện thi",
     "unit_title": "B1 Preliminary for Schools",
     "type": "PET Lab",
     "kind": "Luyện thi",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Chuyên sâu Speaking",
     "task": "—",
     "content": "Thi Nói thử từng cặp với giáo viên, nhận xét theo thang PET",
     "ket_part": "[S1] câu hỏi cá nhân · [S2] tả ảnh 1 phút · [S3] thảo luận cặp theo tranh gợi ý · [S4] thảo luận mở rộng — dạy chiến lược → làm có bấm giờ → chữa bằng cách chỉ câu chứa đáp án · [SS6] dùng câu hỏi lại, làm rõ khi chưa hiểu bạn hoặc giám khảo",
     "ket_codes": [
      "S1",
      "S2",
      "S3",
      "S4"
     ],
     "subskills": [
      "SS1",
      "SS2",
      "SS3",
      "SS4",
      "SS6"
     ],
     "grammar": "—",
     "vocabulary": "Ôn từ vựng cả khóa + danh sách từ vựng B1 Preliminary theo chủ đề",
     "can_do": "Mỗi học sinh đạt ≥ 4/5 ở ít nhất 2 tiêu chí",
     "before": "1. [Thi] Video chiến lược part S1, S2, S3, S4 + làm 1 câu mẫu có giải thích (10')\n2. [Từ vựng] Từ vựng chủ đề PET theo danh sách B1 Preliminary (Wordwall 15 từ) (8')\n3. [Nghe] Nghe 1 bài nghe PET có lời thoại, đánh dấu từ khóa (6')\n4. [Từ vựng] Ôn thẻ (4')\n5. [Lồng tiếng] clip dạng Speaking Part 2 (6')",
     "after": "1. [Thi] Làm part tương ứng trong PTP Test 6 (S1, S2, S3, S4) có bấm giờ (15')\n2. [Thi] Chữa: xem câu chứa đáp án, ghi lỗi vào bảng lỗi (6')\n3. [Nghe] Chép chính tả 4 câu đề nghe (5')\n4. [Nói] Ghi âm 1 câu trả lời Speaking Part 1–4 (theo lượt) (6')\n5. [Lồng tiếng] 2 clip (lồng tiếng + nói tiếp 2–3 câu của mình) (12')\n6. [Từ vựng] Ôn thẻ (4')\n7. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 34,
     "after_min": 54,
     "in_class": [
      {
       "minutes": 15,
       "activity": "Giới thiệu dạng bài và chiến lược",
       "category": "lang"
      },
      {
       "minutes": 30,
       "activity": "Lượt 1: làm có bấm giờ → chữa",
       "category": "input"
      },
      {
       "minutes": 30,
       "activity": "Lượt 2: làm có bấm giờ → chữa",
       "category": "input"
      },
      {
       "minutes": 20,
       "activity": "Làm lại câu sai với đề khác",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "PTP Test 8 Speaking; thang Nói PET: Grammar & Vocabulary, Discourse management, Pronunciation, Interactive communication (0–5)",
     "assessment": "—"
    },
    {
     "session_id": "BO-91",
     "session_no": 91,
     "week": 46,
     "hp": "HP5",
     "unit": "Luyện thi",
     "unit_title": "B1 Preliminary for Schools",
     "type": "Grammar",
     "kind": "Cầu nối B1+",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Cầu nối Advanced (B1+): nhận biết ngữ pháp nâng cao trong đề PET",
     "task": "—",
     "content": "Hiện tại hoàn thành tiếp diễn; bị động các thì và với động từ khuyết thiếu; mệnh đề quan hệ không xác định",
     "ket_part": "[R3] [R6] [L4] tìm và hiểu nghĩa các cấu trúc trên trong bài đọc và lời thoại của đề",
     "ket_codes": [
      "R3",
      "R6",
      "L4"
     ],
     "subskills": [
      "LS4",
      "RS2",
      "RS8"
     ],
     "grammar": "B23 Hiện tại hoàn thành tiếp diễn (cầu nối B1+); B24 Bị động các thì khác và bị động với động từ khuyết thiếu (cầu nối B1+); B25 Mệnh đề quan hệ không xác định (cầu nối B1+)",
     "vocabulary": "Ôn từ vựng cả khóa + danh sách từ vựng B1 Preliminary theo chủ đề",
     "can_do": "Nhận ra đúng nghĩa ≥ 8/10 câu; dùng đúng ≥ 2/3 cấu trúc trong bài nói 1 phút",
     "before": "1. [Thi] Video chiến lược part R3, R6, L4 + làm 1 câu mẫu có giải thích (10')\n2. [Từ vựng] Từ vựng chủ đề PET theo danh sách B1 Preliminary (Wordwall 15 từ) (8')\n3. [Nghe] Nghe 1 bài nghe PET có lời thoại, đánh dấu từ khóa (6')\n4. [Từ vựng] Ôn thẻ (4')\n5. [Lồng tiếng] clip dạng Speaking Part 2 (6')",
     "after": "1. [Thi] Làm part tương ứng trong PTP Test 6 (R3, R6, L4) có bấm giờ (15')\n2. [Thi] Chữa: xem câu chứa đáp án, ghi lỗi vào bảng lỗi (6')\n3. [Nghe] Chép chính tả 4 câu đề nghe (5')\n4. [Nói] Ghi âm 1 câu trả lời Speaking Part 1–4 (theo lượt) (6')\n5. [Lồng tiếng] 2 clip (lồng tiếng + nói tiếp 2–3 câu của mình) (12')\n6. [Từ vựng] Ôn thẻ (4')\n7. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 34,
     "after_min": 54,
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Gold Experience B1+ Grammar file (xem trước cho Advanced); lời thoại PTP Test 8",
     "assessment": "—"
    },
    {
     "session_id": "BO-92",
     "session_no": 92,
     "week": 46,
     "hp": "HP5",
     "unit": "Luyện thi",
     "unit_title": "B1 Preliminary for Schools",
     "type": "Test",
     "kind": "Thi thử",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Thi thử lần 2 – đề mẫu chính thức Cambridge",
     "task": "—",
     "content": "—",
     "ket_part": "[E] Reading 45' + Listening 30' tại lớp; Writing 45' tại nhà; Speaking theo cặp ở buổi 93",
     "ket_codes": [
      "R1",
      "R2",
      "R3",
      "R4",
      "R5",
      "R6",
      "L1",
      "L2",
      "L3",
      "L4",
      "W1",
      "W2",
      "S1",
      "S2",
      "S3",
      "S4"
     ],
     "subskills": [
      "LS1",
      "LS2",
      "LS3",
      "LS4",
      "RS1",
      "RS2",
      "RS3",
      "RS5",
      "RS7",
      "RS8",
      "SS1",
      "SS2",
      "SS3",
      "SS4",
      "WS1",
      "WS2",
      "WS3",
      "WS4"
     ],
     "grammar": "—",
     "vocabulary": "Ôn từ vựng cả khóa + danh sách từ vựng B1 Preliminary theo chủ đề",
     "can_do": "100% làm đủ đề; ≥ 70% mỗi bài (≈ 140, mức B1); ≥ 30% học sinh đạt ≥ 85% (≈ 160)",
     "before": "1. [Thi] Ôn chiến lược 4 bài thi (checklist), làm 1 đề nghe ngắn (15')\n2. [Từ vựng] Ôn thẻ cả khóa (8')\n3. [Nói] Luyện Speaking Part 2 với 2 ảnh (5')\n4. [Lồng tiếng] clip (6')",
     "after": "1. [Thi] Writing 45 phút tại nhà có bấm giờ trên website (45')\n2. [Lồng tiếng] clip (6')\n3. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 34,
     "after_min": 57,
     "in_class": [
      {
       "minutes": 45,
       "activity": "Reading (45 phút)",
       "category": "test"
      },
      {
       "minutes": 30,
       "activity": "Listening (30 phút)",
       "category": "test"
      },
      {
       "minutes": 30,
       "activity": "Chuyển đáp án sang phiếu, ghi lỗi theo part; Writing làm tại nhà có bấm giờ",
       "category": "routine"
      }
     ],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "Cambridge B1 Preliminary for Schools sample test 2020: Reading, Writing, Listening (kèm audio, lời thoại, đáp án), Speaking",
     "assessment": "—"
    },
    {
     "session_id": "BO-93",
     "session_no": 93,
     "week": 47,
     "hp": "HP5",
     "unit": "Luyện thi",
     "unit_title": "B1 Preliminary for Schools",
     "type": "Test",
     "kind": "Tổng kết",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Tổng kết khóa + End of Year Test",
     "task": "—",
     "content": "Hồ sơ năng lực: bảng lỗi cá nhân, bài viết, bản ghi âm Nói qua 4 học phần",
     "ket_part": "[E] End of Year Test (Listening & Reading 45') · [S1]–[S4] thi Nói đề mẫu theo cặp · so sánh kết quả từ chẩn đoán → thi thử 2 theo từng part",
     "ket_codes": [
      "S1",
      "S2",
      "S3",
      "S4"
     ],
     "subskills": [
      "SS1",
      "SS2",
      "SS3",
      "SS4",
      "SS5"
     ],
     "grammar": "—",
     "vocabulary": "Ôn từ vựng cả khóa + danh sách từ vựng B1 Preliminary theo chủ đề",
     "can_do": "100% học sinh có hồ sơ năng lực và mục tiêu cho Advanced (B1+)",
     "before": "1. [Tự học] Chuẩn bị hồ sơ năng lực: chọn 2 bài viết, 2 bản ghi âm, 3 video lồng tiếng tốt nhất (15')\n2. [Nói] Ghi âm 2 phút 'My English journey this year' (6')\n3. [Từ vựng] Ôn thẻ (6')\n4. [Lồng tiếng] clip (6')",
     "after": "1. [Tự học] Viết mục tiêu cho level Advanced (10')\n2. [Nghe] Nghe – đọc sách đọc phân cấp (15')\n3. [Nói] Ghi âm lời cảm ơn và mục tiêu 1 phút (5')\n4. [Lồng tiếng] video tổng kết khóa (12')\n5. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 33,
     "after_min": 48,
     "in_class": [],
     "photocopiable": "—",
     "global_skills": "—",
     "materials": "End of Year Test (Assessment package): Listening & Reading, Writing, Speaking; báo cáo tiến bộ gửi phụ huynh",
     "assessment": "—"
    },
    {
     "session_id": "BO-94",
     "session_no": 94,
     "week": 47,
     "hp": "HP5",
     "unit": "Sự kiện",
     "unit_title": "Công dân toàn cầu",
     "type": "Sự kiện",
     "kind": "Sự kiện kỹ năng",
     "sb_pages": "—",
     "wb_pages": "—",
     "focus": "Sự kiện E12 · Global Citizen Showcase và lễ tổng kết",
     "task": "—",
     "content": "Tổng hợp ngôn ngữ cả khóa",
     "ket_part": "[S2] trình bày hồ sơ năng lực 2 phút · [S4] trả lời câu hỏi phụ huynh/khách · [W2] bài phản tư ~100 từ",
     "ket_codes": [
      "S2",
      "S4",
      "W2"
     ],
     "subskills": [
      "SS2",
      "SS4",
      "WS2",
      "WS4"
     ],
     "grammar": "—",
     "vocabulary": "Dùng lại từ vựng của unit vừa học (xem cột này ở các buổi trước)",
     "can_do": "100% học sinh trình bày hồ sơ năng lực; mỗi học sinh nêu 1 cam kết hành động vì cộng đồng",
     "before": "1. [Dự án] Chuẩn bị phần việc của mình cho sự kiện 'Global Citizen Showcase và lễ tổng kết' (nội dung, đồ dùng, vai) (15')\n2. [Nói] Viết và ghi âm phần nói của mình 1–2 phút, nghe lại và sửa (8')\n3. [Từ vựng] Ôn từ vựng và cấu trúc cần dùng: Tổng hợp ngôn ngữ cả khóa (6')\n4. [Lồng tiếng] clip chủ đề sự kiện (6')",
     "after": "1. [Tự học] Tự đánh giá theo rubric 4 tiêu chí (3')\n2. [Viết] Bài viết sau sự kiện (dạng W2) ~100 từ (15')\n3. [Nói] Xem video sự kiện của nhóm, ghi âm nhận xét 1 phút (1 điểm tốt, 1 điểm cần cải thiện) (5')\n4. [Nghe] Nghe phần trình bày của 1 nhóm khác, trả lời 3 câu hỏi (6')\n5. [Từ vựng] Ôn thẻ đến hạn (4')\n6. [Lồng tiếng] 2 clip (12')\n7. [Ôn] Quiz trộn 10 câu unit vừa học (5')\n8. [Nghe] Nghe ngấm: sách đọc phân cấp có audio hoặc audio các unit đã học (6')",
     "before_min": 35,
     "after_min": 56,
     "in_class": [
      {
       "minutes": 20,
       "activity": "Chuẩn bị ngôn ngữ cho sản phẩm",
       "category": "lang"
      },
      {
       "minutes": 60,
       "activity": "Thực hiện sản phẩm trước khán giả",
       "category": "output"
      },
      {
       "minutes": 15,
       "activity": "Phản hồi theo rubric",
       "category": "lang"
      },
      {
       "minutes": 10,
       "activity": "Tự đánh giá năng lực",
       "category": "fluency"
      }
     ],
     "photocopiable": "—",
     "global_skills": "Hồ sơ năng lực, phản tư và cam kết hành động",
     "materials": "Rubric 4 tiêu chí: ngôn ngữ, nội dung, hợp tác, trình bày",
     "assessment": "—"
    }
   ],
   "exam_label": "PET",
   "exam_name": "B1 Preliminary for Schools",
   "exam_parts": {
    "Reading": [
     [
      "R1",
      "5 văn bản ngắn (biển báo, tin nhắn) – chọn ý đúng"
     ],
     [
      "R2",
      "Nối 5 người với 8 văn bản"
     ],
     [
      "R3",
      "Bài dài – 5 câu trắc nghiệm"
     ],
     [
      "R4",
      "Điền 5 câu vào bài (3 câu thừa)"
     ],
     [
      "R5",
      "Điền từ trắc nghiệm – 6 câu"
     ],
     [
      "R6",
      "Điền từ tự do – 6 chỗ"
     ]
    ],
    "Writing": [
     [
      "W1",
      "Email ~100 từ theo 4 ghi chú"
     ],
     [
      "W2",
      "Bài báo hoặc truyện ~100 từ"
     ]
    ],
    "Listening": [
     [
      "L1",
      "7 đoạn ngắn – chọn tranh"
     ],
     [
      "L2",
      "6 hội thoại – ý kiến, thái độ"
     ],
     [
      "L3",
      "Điền 6 thông tin"
     ],
     [
      "L4",
      "Phỏng vấn dài – 6 câu trắc nghiệm"
     ]
    ],
    "Speaking": [
     [
      "S1",
      "Câu hỏi cá nhân"
     ],
     [
      "S2",
      "Tả ảnh 1 phút"
     ],
     [
      "S3",
      "Thảo luận cặp theo tranh gợi ý"
     ],
     [
      "S4",
      "Thảo luận mở rộng"
     ]
    ]
   },
   "homework_note": "Mỗi buổi có gói PRE-LESSON (~34 phút, giao trước buổi) và POST-LESSON (~55 phút, giao sau buổi); website chia gói ra các ngày, khoảng 25–30 phút/ngày, có lồng tiếng video mỗi ngày. Làm lại và làm bù không giới hạn."
  },
  {
   "id": "pi",
   "name": "IELTS Skills up",
   "cefr": "B1+ (pre-IELTS)",
   "book": "Gold Experience B1+ + sách luyện IELTS",
   "exam": "pi",
   "status": "updating",
   "note": "Luyện kỹ năng và subskills IELTS"
  }
 ],
 "games": [
  {
   "grade": "Lớp 5",
   "age": "10–11 tuổi",
   "stage": "Chuyển tiếp từ tiểu học",
   "profile": "Các em vẫn thích vận động, màu sắc, phần thưởng tức thì và luật chơi đơn giản. Khả năng tập trung khoảng 10–15 phút.",
   "games": [
    {
     "name": "Lật thẻ ghép cặp (Memory/Matching)",
     "desc": "Ghép từ với hình, từ với nghĩa."
    },
    {
     "name": "Vòng quay may mắn (Spin the wheel)",
     "desc": "Quay ra chủ đề hoặc câu hỏi, có điểm thưởng."
    },
    {
     "name": "Kéo co kiến thức / đua xe theo đội",
     "desc": "Trả lời đúng thì đội tiến lên, rất hợp để ôn từ vựng."
    },
    {
     "name": "Tìm từ trong bảng (Word search), đoán chữ (Hangman)",
     "desc": ""
    },
    {
     "name": "Kéo thả hình vào đúng nhóm",
     "desc": "Phân loại animals, food, jobs."
    },
    {
     "name": "Nghe và chạm (Listen & Click)",
     "desc": "Nghe audio rồi chọn hình đúng."
    },
    {
     "name": "Trò vận động",
     "desc": "Simon says, Run & touch, Hot potato."
    }
   ]
  },
  {
   "grade": "Lớp 6",
   "age": "11–12 tuổi",
   "stage": "Mới vào THCS",
   "profile": "Các em vẫn thích thi đua theo đội nhưng muốn được đối xử “lớn” hơn. Bắt đầu thích thử thách có độ khó tăng dần.",
   "games": [
    {
     "name": "Quiz thi đua thời gian thực (kiểu Kahoot/Quizizz)",
     "desc": "Có bảng xếp hạng."
    },
    {
     "name": "Ô chữ (Crossword)",
     "desc": "Và ô chữ có từ khóa hàng dọc."
    },
    {
     "name": "Sắp xếp câu (Sentence scramble)",
     "desc": "Kéo thả từ để tạo câu đúng ngữ pháp."
    },
    {
     "name": "Điền vào chỗ trống có gợi ý",
     "desc": "Gap-fill với word bank."
    },
    {
     "name": "Hái hoa dân chủ / mở ô bí mật",
     "desc": "Mỗi ô là một câu hỏi hoặc một phần thưởng."
    },
    {
     "name": "Bingo từ vựng, Board game xúc xắc",
     "desc": "Đi đến ô nào thì làm nhiệm vụ ở ô đó."
    }
   ]
  },
  {
   "grade": "Lớp 7",
   "age": "12–13 tuổi",
   "stage": "Bắt đầu tuổi teen",
   "profile": "Các em thích hợp tác nhóm, thích yếu tố hài hước và có tính “chiến thuật”. Bắt đầu ngại thể hiện cá nhân trước lớp.",
   "games": [
    {
     "name": "Ai là triệu phú / Rung chuông vàng",
     "desc": "Có quyền trợ giúp, câu hỏi tăng độ khó."
    },
    {
     "name": "Đuổi hình bắt chữ, Pictionary, Charades",
     "desc": "Đoán từ qua hình vẽ hoặc diễn tả."
    },
    {
     "name": "Taboo",
     "desc": "Mô tả từ mà không được dùng các từ cấm, rất tốt cho kỹ năng nói."
    },
    {
     "name": "Truy tìm kho báu (Escape room mini)",
     "desc": "Giải chuỗi câu đố để mở khóa."
    },
    {
     "name": "Tìm lỗi sai (Error hunt)",
     "desc": "Các đội thi tìm lỗi trong đoạn văn."
    },
    {
     "name": "Đọc nhanh tìm thông tin",
     "desc": "Running dictation, Scavenger reading."
    }
   ]
  },
  {
   "grade": "Lớp 8",
   "age": "13–14 tuổi",
   "stage": "Tuổi teen rõ nét",
   "profile": "Các em coi trọng hình ảnh với bạn bè, thích chủ đề thực tế, mạng xã hội, tranh luận và được lựa chọn.",
   "games": [
    {
     "name": "Escape room đầy đủ",
     "desc": "Nhiều kỹ năng (nghe, đọc, ngữ pháp) trong một nhiệm vụ có cốt truyện."
    },
    {
     "name": "Two truths and a lie & Find someone who",
     "desc": ""
    },
    {
     "name": "Tranh luận dạng trò chơi",
     "desc": "Balloon debate, Agree/Disagree corners."
    },
    {
     "name": "Mô phỏng tình huống",
     "desc": "Role-play cards, Mystery game: giải vụ án bằng manh mối tiếng Anh."
    },
    {
     "name": "Đặt cược ngữ pháp (Grammar auction)",
     "desc": "Đấu giá câu đúng."
    },
    {
     "name": "Video tương tác",
     "desc": "Xem đoạn ngắn, video tự dừng để trả lời câu hỏi."
    }
   ]
  },
  {
   "grade": "Lớp 9",
   "age": "14–15 tuổi",
   "stage": "Định hướng thi cử",
   "profile": "Các em có mục tiêu rõ (thi vào 10, KET/PET), thích game “có ích”, ngắn gọn, mang tính chiến lược hoặc tự đánh giá.",
   "games": [
    {
     "name": "Quiz theo format đề thi",
     "desc": "Luyện từng dạng bài KET/PET hoặc đề vào 10, có tính giờ và chấm điểm ngay."
    },
    {
     "name": "Jeopardy theo chủ điểm",
     "desc": "Các đội tự chọn độ khó và mức điểm."
    },
    {
     "name": "Thử thách tốc độ (Speed challenge)",
     "desc": "Sentence transformation, word formation trong 60 giây."
    },
    {
     "name": "Flashcards có lặp lại ngắt quãng",
     "desc": "Dùng làm bài tập về nhà hằng ngày."
    },
    {
     "name": "Thử thách nói 1 phút (Just a minute)",
     "desc": "Nói liên tục về một chủ đề."
    },
    {
     "name": "Dự án dạng game (Gamified project)",
     "desc": "Tích điểm qua nhiệm vụ trong cả tuần."
    }
   ]
  }
 ],
 "game_notes": [
  "Với lứa tuổi nhỏ, chọn game ngắn, nhiều hình và tiếng. Càng lên lớp lớn, game càng nên gắn với kỹ năng và mục tiêu thi.",
  "Ở các lớp tuổi teen (7–9), ưu tiên chơi theo đội thay vì gọi cá nhân, để các em không ngại.",
  "Vì lớp ở IVY được xếp theo năng lực CEFR chứ không theo khối, thầy/cô chọn hình thức game theo độ tuổi và nội dung câu hỏi theo trình độ. Ví dụ, một lớp Bridge-up toàn học sinh lớp 8 vẫn nên chơi Escape room, Mystery game, nhưng dùng từ vựng A1."
 ]
};
