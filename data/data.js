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
   "book": "Gold Experience B1",
   "exam": "b1",
   "status": "updating",
   "note": "Định hướng B1 Preliminary for Schools (PET)"
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
