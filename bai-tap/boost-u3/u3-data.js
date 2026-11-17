/* IVY Boost (B1) · Unit 3 "The future is now" – bài tập hằng ngày (bản thử)
 * Buổi 21–26. Mỗi buổi: gói PRE-LESSON (giao trước buổi) + POST-LESSON (giao sau buổi).
 * Nội dung bài đọc, hội thoại, câu hỏi là bản soạn mới theo dạng bài và chủ đề của
 * Gold Experience B1 Unit 3 (SB tr. 33–44, WB tr. 22–31) – không chép nguyên văn sách.
 * Mỗi đoạn có tiếng có id (aid) để sinh audio bằng Gemini Flash TTS (tools/gen_tts_u3.py);
 * khi chưa có file audio, trang dùng giọng đọc của trình duyệt.
 */
window.U3 = (function () {
  const V = (w, vi, e, s, a) => ({ w, vi, e, s, a: a || w });

  // ---------- giọng đọc (Gemini prebuilt voices) ----------
  const VOICES = {
    nar: { name: "Narrator", gemini: "Charon", style: "Clear, friendly British English, moderate pace, for 12–14 year-old learners" },
    mai: { name: "Mai", gemini: "Leda", style: "Cheerful teenage girl, natural pace" },
    nam: { name: "Nam", gemini: "Puck", style: "Upbeat teenage boy, natural pace" },
    tch: { name: "Teacher", gemini: "Kore", style: "Warm teacher, slow and clear" },
    adl: { name: "Adult", gemini: "Algieba", style: "Relaxed adult, natural pace" },
  };

  // ---------- từ vựng ----------
  const W21 = [
    V("live", "trực tiếp (biểu diễn)", "🎤", "We watched a ___ concert, not a recording."),
    V("common", "phổ biến", "👥", "Streaming is now the most ___ way to listen to music."),
    V("successful", "thành công", "🏆", "Her first song was very ___ – millions of people heard it."),
    V("directly", "trực tiếp (không qua ai)", "➡️", "Fans can now send messages ___ to the band."),
    V("produce", "tạo ra, sản xuất", "🎛️", "Some computers can ___ simple songs."),
    V("predict", "dự đoán", "🔮", "Experts ___ that VR concerts will be popular."),
    V("band", "ban nhạc", "🎸", "My brother plays the drums in a ___."),
    V("incredible", "tuyệt vời, khó tin", "🤩", "The light show was ___!"),
    V("download", "tải xuống", "⬇️", "I ___ songs from this website so I can listen offline."),
    V("stream", "phát trực tuyến", "📶", "Most teenagers ___ music from apps."),
    V("silent disco", "tiệc nhảy im lặng (đeo tai nghe)", "🎧💃", "At a ___, everyone dances with headphones on."),
    V("headphones", "tai nghe", "🎧", "Put your ___ on so you don't disturb anyone."),
  ];
  const W22 = [
    V("kettle", "ấm đun nước", "🫖", "Can you switch on the ___? I'd like some tea."),
    V("microwave", "lò vi sóng", "♨️", "Heat the soup in the ___ for two minutes."),
    V("smart TV", "tivi thông minh", "📺", "We watch videos from the internet on our ___."),
    V("fridge-freezer", "tủ lạnh có ngăn đá", "🧊", "Put the ice cream in the ___."),
    V("washing machine", "máy giặt", "🧺", "My clothes are in the ___."),
    V("dishwasher", "máy rửa bát", "🍽️", "Put the dirty plates in the ___."),
    V("coffee maker", "máy pha cà phê", "☕", "Dad uses the ___ every morning."),
    V("remote control", "điều khiển từ xa", "🔘", "Where's the ___? I want to change the channel."),
    V("central heating", "hệ thống sưởi trung tâm", "🔥", "In winter, the ___ keeps the whole house warm."),
    V("air conditioning", "điều hòa không khí", "❄️", "It's 38 degrees – turn on the ___!"),
    V("efficient", "tiết kiệm năng lượng, hiệu quả", "⚡", "This new fridge is more ___ – it uses less electricity."),
    V("appliances", "đồ gia dụng (điện)", "🔌", "Kettles and microwaves are kitchen ___."),
  ];
  const W23 = [
    V("convenient", "tiện lợi", "👌", "A robot cleaner is very ___ – you don't have to do anything."),
    V("creative", "sáng tạo", "🎨", "Humans are more ___ than machines."),
    V("intelligent", "thông minh", "🧠", "Robots are becoming more ___ every year."),
    V("trust", "tin tưởng", "🤝", "Would you ___ a robot doctor?"),
    V("useful", "hữu ích", "🛠️", "A robot cook would be really ___ for busy families."),
    V("calm", "bình tĩnh", "😌", "A robot teacher never gets angry – it's always ___."),
    V("human", "(thuộc) con người", "🙋", "Robots can't understand ___ feelings."),
  ];
  const W24 = [
    V("gadget", "thiết bị nhỏ, đồ công nghệ", "📱", "My favourite ___ is my smart watch."),
    V("device", "thiết bị", "💻", "Turn off every electronic ___ for one day."),
    V("give up", "từ bỏ", "🙅", "Can you ___ your phone for 24 hours?"),
    V("challenge", "thử thách", "🎯", "Unplugged Day is a big ___ for me."),
  ];
  const W25 = [
    V("entrepreneur", "doanh nhân khởi nghiệp", "🚀", "At 15, she was already an ___ with her own app."),
    V("invent", "phát minh", "💡", "I want to ___ an app that helps people sleep."),
    V("pitch", "bài thuyết trình gọi vốn / giới thiệu ý tưởng", "📣", "We had three minutes to give our ___."),
    V("coding", "lập trình", "👩‍💻", "She learned ___ online when she was eleven."),
    V("mentor", "người hướng dẫn", "🧑‍🏫", "Her ___ helped her improve the app."),
    V("battery", "pin", "🔋", "My phone ___ is almost dead."),
  ];
  const W_U2 = [ // ôn thẻ unit trước (U2 Get the message)
    V("communicate", "giao tiếp", "💬", ""), V("gesture", "cử chỉ", "👋", ""), V("translate", "dịch", "🔤", ""),
    V("misunderstand", "hiểu lầm", "😕", ""), V("body language", "ngôn ngữ cơ thể", "🙆", ""), V("polite", "lịch sự", "🙇", ""),
    V("rude", "thô lỗ", "😤", ""), V("accent", "giọng (vùng miền)", "🗣️", ""),
  ];
  const PHRASAL = [
    ["switch on", "bật (máy, đèn)"], ["switch off", "tắt (máy, đèn)"], ["plug in", "cắm điện"], ["set up", "cài đặt, lắp đặt"],
    ["shut down", "tắt hẳn (máy tính)"], ["go off", "(chuông báo) reo"], ["turn up", "vặn to"], ["turn down", "vặn nhỏ"],
  ];
  const CLOTHES = [ // PET topic: Clothes
    ["T-shirt", "👕"], ["jeans", "👖"], ["dress", "👗"], ["jacket", "🧥"], ["scarf", "🧣"], ["gloves", "🧤"], ["socks", "🧦"],
    ["trainers", "👟"], ["boots", "🥾"], ["cap", "🧢"], ["sunglasses", "🕶️"], ["tie", "👔"], ["swimsuit", "🩱"], ["backpack", "🎒"], ["handbag", "👜"],
  ];

  // ---------- văn bản có tiếng ----------
  const T = {};
  T.read21 = {
    title: "Music in 2045: what will it sound like?", voice: "nar",
    paras: [
      "Twenty years ago, most teenagers bought CDs or downloaded music from websites. Today, almost everyone streams music from apps on their smartphone. [1] So what will happen next? We asked three people to predict the future.",
      "Jade Moreno writes songs for successful bands. 'I think live concerts will change the most,' she says. 'Lots of fans can't travel to big cities. [2] They'll wear a VR headset at home and feel like they're standing next to the stage.' Jade is going to perform her first VR concert next month.",
      "Dr Ken Ito studies intelligent machines. 'Computers can already produce simple songs,' he explains. '[3] But I don't think they'll replace musicians. People want to hear real stories from real people.'",
      "Fourteen-year-old Lucy Park writes a music blog. She thinks the silent disco is the future. 'Everyone dances with headphones on, so the neighbours don't complain,' she laughs. '[4] My school is having one on Friday – the party starts at seven!'",
      "All three agree on one thing: in the future, fans will connect directly with the artists they love. [5] Maybe the future is already here.",
    ],
    gaps: ["It's already hard to remember how different things were.", "In the future, they won't need to.", "Soon they'll write music that sounds incredible.", "You can even choose which DJ you want to listen to.", "Some musicians already sell their songs to fans without a record company."],
    extra: ["Most people stopped listening to the radio in 1990.", "That's why concerts are getting more expensive every year.", "He has never been to a concert in his life."],
  };
  T.read21.full = T.read21.paras.map((p, i) => p.replace(/\[(\d)\]/g, (_, n) => T.read21.gaps[n - 1])).join(" ");

  T.lis22 = { title: "A new fridge", lines: [
    ["adl", "Nam, can you help me choose a new fridge-freezer? Ours is fifteen years old."],
    ["nam", "Sure, Mum. What about this one? It's got a big freezer and it's very efficient."],
    ["adl", "It's nice, but it's too tall for our kitchen. And it's quite expensive."],
    ["nam", "OK. How about the silver one next to it? It's smaller and it's on sale."],
    ["adl", "Hmm. Does it make ice?"],
    ["nam", "No, but you could buy ice trays. They're cheap!"],
    ["adl", "Good idea. Shall we ask the assistant if they can deliver it on Saturday?"],
    ["nam", "Yes. And then we should take the old one to the recycling centre."],
  ] };
  T.wb22 = { title: "Grandpa's smart TV", lines: [
    ["mai", "Grandpa, why are you holding three remote controls?"],
    ["adl", "Because I don't understand this new smart TV, Mai! I switched it on, but nothing happened."],
    ["mai", "Is it plugged in? … Ah, it isn't. There you go."],
    ["adl", "Wonderful. Now, how do I watch the football?"],
    ["mai", "First we need to set it up. It'll only take five minutes. You should write down your password."],
    ["adl", "Can you turn the volume up a bit? I can't hear anything."],
    ["mai", "Of course. Why don't you use this one remote and put the other two in the drawer?"],
    ["adl", "Good idea. I'm going to tidy that drawer tomorrow anyway."],
  ] };
  T.pet22 = [
    { q: "What did Lan buy for her brother?", lines: [["mai", "I didn't buy him headphones in the end – he's got some. And smart watches were too expensive, so I got him a camera."]], o: ["🎧", "⌚", "📷"], a: 2 },
    { q: "Which appliance is broken?", lines: [["adl", "The washing machine's fine now – the man fixed it yesterday. But the dishwasher's making a strange noise, so I'll call him again."]], o: ["🧺", "🍽️", "♨️"], a: 1 },
    { q: "What time does the film start?", lines: [["nam", "The film was at six, but they changed it. Now it starts at seven fifteen, so we can eat first. Let's meet at half past six."]], o: ["🕕 6:00", "🕡 6:30", "🕖 7:15"], a: 2 },
  ];
  T.model23 = { title: "Which robot would be most useful?", lines: [
    ["mai", "So, which robot do you think would be most useful? What's your view?"],
    ["nam", "In my opinion, a robot cleaner would be really useful. Cleaning takes so much time."],
    ["mai", "That's a good point. But I'd say a robot cook is better. It could make healthy meals every day."],
    ["nam", "That's true, but I'm not sure I'd trust a robot with food. What about a robot teacher?"],
    ["mai", "I disagree. Teachers need to be human. A robot can't understand how students feel."],
    ["nam", "You're right. Robots aren't very creative either. So, the cleaner or the cook?"],
    ["mai", "Let's choose the cleaner. It's the most convenient for busy families."],
  ] };
  T.email24 = { title: "Email: National Unplugged Day", voice: "mai", text: [
    "Hi Lily,",
    "Thanks for your email. Sorry to hear you were ill last week – I'm glad you're feeling OK now!",
    "I think National Unplugged Day is a great idea, but I know it's a big challenge for you because you love your phone. Why don't you give it to your mum in the morning? Then you won't check it every five minutes.",
    "You could also plan some fun things to do. How about going for a bike ride or baking a cake with your brother? You should invite some friends to play board games too, so you won't feel bored.",
    "Good luck – tell me how it goes!",
    "Love,",
    "Mai",
  ] };
  T.vid25 = { title: "Teen app makers", voice: "nar", lines: [
    "Meet Anna. She's fifteen, and she's an entrepreneur.",
    "Two years ago, she learned coding online. Then she invented an app called StudyBuddy.",
    "It reminds students to take a break every thirty minutes.",
    "Last month, Anna gave a pitch to a group of mentors. They loved it!",
    "Next year, she's going to add a game for younger children.",
    "'Don't wait until you're older,' she says. 'Start your idea today.'",
  ] };
  T.pitch26 = { title: "Group pitch: GreenRoute", lines: [
    ["nam", "Hi everyone. Our app is called GreenRoute."],
    ["mai", "It's for students who cycle or walk to school. It shows the safest and greenest way to get there."],
    ["nam", "You can also collect points. When you have a hundred points, you get a free drink at the school café."],
    ["mai", "We think it'll be popular because it's healthy, it's free, and it's good for the planet."],
    ["nam", "Next month, we're going to test it with Class 8A. Thank you for listening!"],
  ] };

  // ---------- truyện dài kỳ của Unit 3 (đọc mở rộng, 12 tập) ----------
  const STORY = [
    ["A strange poster", "It was Monday morning at Green Hill School. Mai stopped in front of a big, colourful poster. 'IVY App Pitch – design the app of the future! The winning team will present their idea at the City Tech Fair.' 'Nam, look at this!' Mai shouted. Nam was listening to music on his headphones. He took them off. 'An app competition? I'm going to enter, of course,' he said. 'We are going to enter,' Mai said with a smile. 'Together. But first we need a third person.' Just then, a quiet new girl walked past them with a laptop under her arm.",
      [{ q: "What is the poster about?", o: ["A competition to design an app", "A music concert", "A new computer shop"], a: 0 }, { q: "What do Mai and Nam need?", o: ["A third person for their team", "A new laptop", "Some headphones"], a: 0 }]],
    ["The silent disco plan", "The new girl's name was Linh. She was from Da Nang, and she loved coding. 'I'd love to join your team,' she said. 'But what will our app do?' The three friends sat in the school library after class. 'Something for music,' Nam said. 'Everyone streams music now. What about an app for silent discos? You choose your DJ on your phone.' 'That already exists,' Linh said. Mai laughed. 'OK, let's not decide today. The school is having a silent disco on Friday. It starts at seven. Let's go and ask people what they want!'",
      [{ q: "What does Linh love?", o: ["Coding", "Dancing", "Football"], a: 0 }, { q: "What are they going to do on Friday?", o: ["Ask people at the silent disco what they want", "Start coding the app", "Visit Da Nang"], a: 0 }]],
    ["Grandpa's kitchen", "On Saturday, the three friends went to Mai's grandparents' house. Grandpa had a brand-new kitchen. 'Look at all these appliances!' Nam said. There was a smart fridge-freezer, a coffee maker, a microwave and a dishwasher. 'They're very efficient,' Grandpa said proudly. 'But I don't know how to use half of them.' Just then, the kettle started singing a song. Everyone jumped. 'Why is it doing that?' Grandma asked. Linh looked at the kettle. 'It's a smart kettle. It's connected to the internet.' Mai smiled slowly. 'I think I've got an idea…'",
      [{ q: "What did the kettle do?", o: ["It played a song.", "It broke.", "It made coffee."], a: 0 }, { q: "What is Grandpa's problem?", o: ["He can't use many of his appliances.", "His kitchen is too small.", "He hasn't got a dishwasher."], a: 0 }]],
    ["Too many gadgets", "Mai explained her idea. 'Lots of older people buy smart appliances, but the instructions are too difficult. Our app could help them. You take a photo of the appliance, and the app shows a short video: how to switch it on, how to set it up, how to turn it down.' 'Brilliant!' said Linh. Nam wasn't sure. 'Shouldn't we make something for teenagers? Old people don't use apps.' 'My grandpa uses three remote controls,' Mai said. 'He'll use an app if it's easy.' Nam shrugged. 'OK. But I'm going to ask my class what they think.'",
      [{ q: "How will the app help?", o: ["You take a photo and it shows a short video.", "It switches off all the appliances.", "It calls a repair shop."], a: 0 }, { q: "What does Nam think at first?", o: ["The app should be for teenagers.", "The idea is brilliant.", "Grandpa should buy a new TV."], a: 0 }]],
    ["Robots in class", "On Monday, Nam's class had a debate about robots. 'In my opinion, robots will do all the housework in the future,' said Tuan. 'That's true, but would you trust a robot cook?' asked Hoa. Nam put up his hand. 'I'd say robots are useful, but people need help to use them. My friend's grandpa can't even use his kettle!' Everyone laughed. After class, the teacher, Ms Vy, stopped him. 'Nam, that was a good point. Are you entering the App Pitch?' 'Yes,' Nam said. 'Then you should talk to your users,' she said. 'Real people, not just your friends.'",
      [{ q: "What does Nam say about robots?", o: ["They're useful, but people need help to use them.", "They will replace teachers.", "Nobody trusts them."], a: 0 }, { q: "What advice does Ms Vy give Nam?", o: ["Talk to real users.", "Buy a robot.", "Stop the debate."], a: 0 }]],
    ["The big argument", "That evening, the team had a video call. 'Ms Vy is right,' Nam said. 'We should talk to real users.' 'I disagree,' said Linh. 'We don't have time. The pitch is in three weeks. I'm going to start coding tonight.' 'You can't code an app without a plan!' Mai said. Linh was quiet. Then she said, 'I'm not sure this team is going to work.' And she left the call. Mai and Nam looked at each other. 'What do we do now?' Nam asked. 'We give her some time,' Mai said. 'And tomorrow, I'll bring her some cake.'",
      [{ q: "Why does Linh want to start coding now?", o: ["The pitch is in three weeks.", "She is bored.", "Ms Vy told her to."], a: 0 }, { q: "What will Mai do tomorrow?", o: ["Bring Linh some cake", "Leave the team", "Call Ms Vy"], a: 0 }]],
    ["Unplugged Saturday", "The next morning, Mai gave Linh a piece of chocolate cake and a card. 'National Unplugged Day – this Saturday. No phones, no laptops, no games consoles. Will you join us?' Linh frowned. 'A whole day without my laptop? That's a big challenge.' 'Exactly,' said Mai. 'We'll visit the old people's club near my house. We can talk to real users – and you can watch how they use their gadgets.' Linh thought for a moment. 'OK,' she said finally. 'But on Sunday, I'm coding.'",
      [{ q: "What is on the card?", o: ["An invitation to an Unplugged Day", "A birthday message", "A coding lesson"], a: 0 }, { q: "Where will they go on Saturday?", o: ["To an old people's club", "To a tech shop", "To the cinema"], a: 0 }]],
    ["An email from Linh", "Saturday at the club was full of surprises. Mrs Lan, who was eighty-two, showed them her tablet. 'My son set it up for me, but I'm afraid to touch it. What if I break it?' Mr Binh asked, 'How about a big button that says HELP?' Linh wrote everything down – on paper. On Sunday evening, Mai got an email. 'Hi Mai, thanks for Saturday. Sorry I was rude on the call. You were right: I needed a plan. I've made a list of ten things our users want. Why don't we meet tomorrow and choose the best three? Linh'",
      [{ q: "What is Mrs Lan afraid of?", o: ["Breaking her tablet", "Her son", "Big buttons"], a: 0 }, { q: "What does Linh suggest in her email?", o: ["Meeting to choose the best three ideas", "Leaving the competition", "Coding all night"], a: 0 }]],
    ["EasyHome", "On Monday, the team chose three functions. One: take a photo of any appliance and get a one-minute video. Two: a big red HELP button that calls a family member. Three: a 'Did I switch it off?' reminder for the cooker and the iron. 'What's our app called?' Nam asked. They thought for a long time. 'HomeHelper?' 'TechGran?' Finally Mai said, 'EasyHome.' Everyone agreed. Linh opened her laptop. 'Right. I'll build the first version this week. Nam, you're going to design the logo. Mai, you're writing the pitch.'",
      [{ q: "What does the HELP button do?", o: ["It calls a family member.", "It switches off the cooker.", "It plays a video."], a: 0 }, { q: "Who is going to design the logo?", o: ["Nam", "Mai", "Linh"], a: 0 }]],
    ["A mentor", "By Thursday, EasyHome was almost ready, but there was a problem. The photo function didn't work. 'I'll stay up and fix it tonight,' Linh said. 'You shouldn't do that,' Mai said. 'You're always tired at school.' 'Why don't you ask Mr Duc?' Nam suggested. 'He teaches coding at the IVY club. He could be our mentor.' Linh didn't like asking for help, but she sent Mr Duc a message. Ten minutes later, he replied: 'Come at four tomorrow. Bring your laptop – and your battery charger!'",
      [{ q: "What was the problem?", o: ["The photo function didn't work.", "Linh lost her laptop.", "Nam didn't finish the logo."], a: 0 }, { q: "Who is Mr Duc?", o: ["A coding teacher who could be their mentor", "Linh's father", "A judge"], a: 0 }]],
    ["Pitch day", "Pitch day arrived. Twelve teams sat in the school hall. Some apps were incredible: a robot pet that does your homework (the teachers didn't like that one), a music app for silent discos, and an app that predicts the weather in your garden. Then it was EasyHome's turn. Nam's hands were shaking. Mai started: 'Our app is for people like Mrs Lan…' Linh showed the photo function. It worked perfectly. Then Nam pressed the big red HELP button. Suddenly, music came out of the speakers, very loud. Everyone looked at Linh. Linh looked at her laptop. 'Oh no,' she whispered.",
      [{ q: "Which app did the teachers not like?", o: ["The robot pet that does your homework", "The weather app", "The silent disco app"], a: 0 }, { q: "What happened when Nam pressed HELP?", o: ["Loud music came out of the speakers.", "Mai's phone rang.", "The laptop switched off."], a: 0 }]],
    ["And the winner is…", "For a moment, nobody moved. Then Nam had an idea. He took the microphone. 'As you can hear,' he said, 'even smart people have problems with smart gadgets. That's why everyone needs EasyHome!' The hall laughed, and the judges clapped. Linh quickly fixed the problem, and the HELP button called Mai's phone. At the end, the head judge stood up. 'The winner of the IVY App Pitch is… EasyHome!' Mai screamed, Nam jumped, and Linh smiled her biggest smile. 'Next stop, the City Tech Fair,' said Mai. 'And this time,' said Linh, 'I'm going to test everything twice.'",
      [{ q: "How did Nam save the pitch?", o: ["He made a joke about smart gadgets.", "He fixed the laptop.", "He sang a song."], a: 0 }, { q: "What is Linh going to do next time?", o: ["Test everything twice", "Stop coding", "Leave the team"], a: 0 }]],
  ];
  STORY.forEach((s, i) => (T["story" + (i + 1)] = { title: `The App Kids ${i + 1}: ${s[0]}`, voice: "nar", text: s[1].match(/[^.!?…]+[.!?…]+['’]?|[^.!?…]+$/g).map((x) => x.trim()) }));

  // ---------- clip lồng tiếng (monologue, 20–40 giây) ----------
  const CLIPS = {
    c1: { title: "Mai's weekend plans", who: "mai", bg: ["#ffd6e7", "#c9d8ff"], hair: "#2b1d16", skin: "#f6d1b5", props: ["🎬", "🍿", "🏸"], lines: [
      "Hi guys, it's Mai! This weekend is going to be busy.",
      "On Saturday morning, I'm playing badminton with my cousin.",
      "The film starts at three, so we're meeting at the cinema at half past two.",
      "On Sunday, I'm going to finish my science project.",
      "What are you doing this weekend?" ] },
    c2: { title: "Nam's world in 2050", who: "nam", bg: ["#d7f7ff", "#e0d4ff"], hair: "#111", skin: "#e9bf9a", props: ["🤖", "🚗", "🛰️"], lines: [
      "Hello! I'm Nam, and here are my predictions for 2050.",
      "I think cars will drive themselves.",
      "Robots will cook our dinner and clean our houses.",
      "But I don't think robots will replace teachers.",
      "And maybe we'll go on holiday to the moon!" ] },
    c3: { title: "Grandpa's new smart TV", who: "mai", bg: ["#fff3c4", "#ffd9c2"], hair: "#2b1d16", skin: "#f6d1b5", props: ["📺", "🔘", "👴"], lines: [
      "My grandpa bought a smart TV yesterday.",
      "He switched it on, but nothing happened. It wasn't plugged in!",
      "So I set it up for him and showed him the remote control.",
      "Now he turns the volume up very loud every evening.",
      "I think I'll buy him some headphones!" ] },
    c4: { title: "Advice for a tired gamer", who: "nam", bg: ["#dfffe2", "#d4e6ff"], hair: "#111", skin: "#e9bf9a", props: ["🎮", "😴", "⏰"], lines: [
      "Do you play games until midnight? Here's my advice.",
      "You should switch off your games console at nine.",
      "Why don't you charge your phone outside your bedroom?",
      "How about reading a paper book before bed?",
      "And you ought to get up at the same time every day." ] },
    c5: { title: "Would you trust a robot?", who: "mai", bg: ["#e8e4ff", "#ffe1f0"], hair: "#2b1d16", skin: "#f6d1b5", props: ["🤖", "🩺", "🍳"], lines: [
      "Would you trust a robot doctor? In my opinion, no.",
      "Robots are intelligent, but they aren't human.",
      "I'd say a robot cook is more useful. It never gets tired!",
      "That's true for cleaning robots too. They're so convenient.",
      "What's your view? Tell me in the comments!" ] },
    c6: { title: "My app pitch", who: "nam", bg: ["#ffe9cf", "#d3f3ff"], hair: "#111", skin: "#e9bf9a", props: ["📱", "💡", "🚀"], lines: [
      "Hi, I'm Nam, and this is my app, HomeworkHero.",
      "It's for students who forget their homework.",
      "It sends you a reminder at five o'clock every day.",
      "Next month, I'm going to show it to my mentor.",
      "I think it'll help thousands of students!" ] },
  };

  // ---------- ngữ pháp ----------
  const G21 = {
    cards: [
      { h: "will – dự đoán, ý kiến, quyết định ngay lúc nói", ex: ["I think robots will cook our dinner.", "It's cold – I'll close the window."], tip: "Hay đi với: I think, I'm sure, probably, maybe." },
      { h: "be going to – kế hoạch, dự định đã có; dự đoán có dấu hiệu", ex: ["I'm going to learn coding this summer.", "Look at those clouds! It's going to rain."], tip: "Kế hoạch đã nghĩ từ trước → going to." },
      { h: "Hiện tại tiếp diễn – lịch hẹn đã sắp xếp", ex: ["We're meeting at the cinema at six.", "My school is having a silent disco on Friday."], tip: "Có người, giờ, địa điểm cụ thể." },
      { h: "Hiện tại đơn – thời gian biểu, lịch trình", ex: ["The film starts at seven thirty.", "The train leaves at 8 a.m."], tip: "Lịch của phim, tàu, trường học…" },
    ],
    check: [
      { q: "A: The phone's ringing! – B: I ___ it.", o: ["'ll answer", "'m going to answer", "answer"], a: 0, ex: "Quyết định ngay lúc nói → will." },
      { q: "I ___ a new laptop next month. I've saved the money.", o: ["'ll buy", "'m going to buy", "buy"], a: 1, ex: "Kế hoạch đã có từ trước → going to." },
      { q: "The concert ___ at 8 p.m. on Saturday.", o: ["starts", "is going to start", "will starting"], a: 0, ex: "Lịch trình → hiện tại đơn." },
      { q: "I ___ my friends at the mall at four. We arranged it yesterday.", o: ["will meet", "am meeting", "meet"], a: 1, ex: "Lịch hẹn đã sắp xếp → hiện tại tiếp diễn." },
      { q: "I'm sure people ___ in VR concerts in the future.", o: ["are going", "will go", "go"], a: 1, ex: "Ý kiến, dự đoán với I'm sure → will." },
    ],
  };
  const G22 = {
    cards: [
      { h: "should / shouldn't / ought to – lời khuyên", ex: ["You should switch off your phone at night.", "You ought to ask your teacher.", "You shouldn't play games all night."], tip: "should + động từ nguyên mẫu (không có to); ought TO + động từ." },
      { h: "could – gợi ý nhẹ nhàng", ex: ["You could buy a cheaper one.", "We could go by bike."], tip: "Đưa ra một lựa chọn, không ép buộc." },
      { h: "Why don't you…? / How about…? / Shall I/we…?", ex: ["Why don't you ask your brother?", "How about going for a walk?", "Shall we take the bus?"], tip: "How about + V-ing; Why don't you + V; Shall I/we + V." },
    ],
    check: [
      { q: "You look tired. You ___ go to bed earlier.", o: ["should", "ought", "shall"], a: 0 },
      { q: "How about ___ a film tonight?", o: ["watch", "to watch", "watching"], a: 2 },
      { q: "Why don't you ___ your old phone?", o: ["sell", "selling", "to sell"], a: 0 },
      { q: "You ought ___ the instructions first.", o: ["read", "to read", "reading"], a: 1 },
      { q: "It's hot in here. ___ I turn on the air conditioning?", o: ["Should", "Shall", "How about"], a: 1 },
    ],
  };

  // ---------- trộn câu hỏi ôn ----------
  const vocabQ = (list, n) => list.slice(0, n).map((x, i) => ({ q: `“${x.vi}” là từ nào?`, o: rot([x.w, list[(i + 1) % list.length].w, list[(i + 2) % list.length].w], i), a: i % 3 }));
  function rot(arr, i) { const k = i % 3; return arr.slice(3 - k).concat(arr.slice(0, 3 - k)); }

  const U3TEST = [
    { q: "Experts ___ that we'll all have robot cleaners by 2040.", o: ["predict", "produce", "download"], a: 0 },
    { q: "Everyone at the ___ disco wore headphones.", o: ["silent", "quiet", "calm"], a: 0 },
    { q: "This dishwasher is very ___ – it uses less water.", o: ["efficient", "common", "human"], a: 0 },
    { q: "Can you ___ the music? It's too loud.", o: ["turn down", "turn up", "go off"], a: 0 },
    { q: "My alarm ___ at six every morning.", o: ["goes off", "sets up", "plugs in"], a: 0 },
    { q: "Don't forget to ___ the laptop – the battery is low.", o: ["plug in", "shut down", "pick up"], a: 0 },
    { q: "Would you ___ a robot to look after your pet?", o: ["trust", "predict", "invent"], a: 0 },
    { q: "Fans can buy tickets ___ from the band's website.", o: ["directly", "successful", "live"], a: 0 },
    { q: "Look at that dark sky! It ___ rain.", o: ["is going to", "will", "is raining"], a: 0 },
    { q: "My flight ___ at 10.45 tomorrow.", o: ["leaves", "is going to leave", "will leaving"], a: 0 },
    { q: "I'm hungry. – I ___ you a sandwich.", o: ["'ll make", "'m making", "make"], a: 0 },
    { q: "We ___ Grandma on Sunday. Mum booked the train.", o: ["are visiting", "visit", "will to visit"], a: 0 },
    { q: "In 2060, people ___ live on Mars.", o: ["will probably", "probably are going", "are probably living"], a: 0 },
    { q: "You ___ eat so many sweets.", o: ["shouldn't", "ought not", "don't should"], a: 0 },
    { q: "How about ___ to the science museum?", o: ["going", "go", "to go"], a: 0 },
    { q: "Why don't you ___ your teacher for help?", o: ["ask", "asking", "to ask"], a: 0 },
    { q: "You ought ___ your password somewhere safe.", o: ["to write", "write", "writing"], a: 0 },
    { q: "A: I've lost my charger. – B: You ___ borrow mine.", o: ["could", "shall", "ought"], a: 0 },
    { q: "Agree: “That's a good point.” – Disagree: “___”", o: ["I'm not sure about that.", "You're right.", "Exactly!"], a: 0 },
    { q: "Asking for an opinion:", o: ["What's your view on this?", "In my opinion, …", "I'd say …"], a: 0 },
    { q: "Email ending to a friend:", o: ["Good luck – tell me how it goes!", "Yours faithfully,", "Dear Sir,"], a: 0 },
    { q: "Thanks for your email. Sorry to ___ you were ill.", o: ["hear", "listen", "know"], a: 0 },
    { q: "A person who starts a new business:", o: ["entrepreneur", "mentor", "musician"], a: 0 },
    { q: "She learned ___ and made her own app.", o: ["coding", "codes", "coder"], a: 0 },
    { q: "My phone ___ is almost empty.", o: ["battery", "electricity", "machine"], a: 0 },
  ];

  // ---------- gói bài theo buổi ----------
  const A = (o) => o; // đánh dấu hoạt động
  const sessions = [
    {
      no: 21, title: "U3 · Reading + Grammar 1", topic: "Tương lai của âm nhạc · will, going to, hiện tại tiếp diễn, hiện tại đơn", sb: "SB tr. 33–36, 130", wb: "WB tr. 22–24",
      pre: [
        A({ id: "21a", k: "vocab", cat: "Từ vựng", min: 10, t: "Chuỗi 5 bước nhớ 12 từ của bài đọc", src: "SB tr. 34–35", words: W21 }),
        A({ id: "21b", k: "rec", cat: "Nói", min: 4, t: "Lead-in: em nghe nhạc thế nào?", src: "SB tr. 33", prompt: "How do you usually listen to music? How do you think people will listen to music in 20 years?", hint: ["I usually stream music from …", "I think people will …", "Maybe we'll …"], sec: [30, 45], scene: "🎧📱🎤🕶️" }),
        A({ id: "21c", k: "listen", cat: "Nghe", min: 5, t: "Nghe – đọc đoạn đầu bài đọc, đoán ý chính", src: "SB tr. 34", text: { voice: "nar", lines: [T.read21.paras[0].replace("[1] ", "")] }, showText: true, qs: [
          { q: "What is the text probably about?", o: ["How music will change in the future", "The history of the CD", "How to become a singer"], a: 0 },
          { q: "Who will talk about the future in the text?", o: ["Three different people", "Only scientists", "A teenager and her parents"], a: 0 } ] }),
        A({ id: "21d", k: "slides", cat: "Ngữ pháp", min: 7, t: "Bài giảng ngắn: 4 cách nói về tương lai + 5 câu kiểm tra", src: "Grammar file SB tr. 130", g: G21 }),
        A({ id: "21e", k: "dub", cat: "Lồng tiếng", min: 6, t: "Lồng tiếng: Mai's weekend plans", clip: "c1" }),
        A({ id: "21f", k: "flash", cat: "Từ vựng", min: 3, t: "Ôn thẻ từ đến hạn (Unit 2)", words: W_U2 }),
      ],
      post: [
        A({ id: "21g", k: "mcq", cat: "Ôn", min: 5, t: "Quiz nhớ lại 10 câu – không mở sách", qs: vocabQ(W21, 5).concat(G21.check.map((x) => Object.assign({}, x, { q: x.q.replace("A: The phone's ringing! – B:", "A: Someone's at the door! – B:") }))) }),
        A({ id: "21h", k: "read", cat: "Đọc", min: 10, t: "Reading PET Part 4: điền 5 câu vào bài (3 câu thừa)", src: "theo dạng WB tr. 22–23", text: T.read21 }),
        A({ id: "21i", k: "mcq", cat: "Ngữ pháp", min: 6, t: "Chọn dạng tương lai đúng (8 câu)", src: "theo dạng WB tr. 24", qs: [
          { q: "I've decided. I ___ a band with my friends.", o: ["'m going to start", "start", "'ll starting"], a: 0 },
          { q: "Our music lesson ___ at 9.15 on Mondays.", o: ["begins", "is beginning", "will begin"], a: 0 },
          { q: "A: This box is heavy. – B: Wait, I ___ you.", o: ["'ll help", "'m helping", "help"], a: 0 },
          { q: "Jade ___ in a VR concert next month. It's all organised.", o: ["is performing", "performs", "will perform"], a: 0 },
          { q: "I don't think computers ___ musicians.", o: ["will replace", "are replacing", "replace"], a: 0 },
          { q: "Be careful! You ___ drop your phone!", o: ["'re going to", "will", "drop"], a: 0 },
          { q: "What ___ this evening? – I'm going to the cinema with Lucy.", o: ["are you doing", "do you do", "will you do"], a: 0 },
          { q: "The next bus ___ at 5.20.", o: ["leaves", "is going to leave", "will be leave"], a: 0 } ] }),
        A({ id: "21j", k: "gap", cat: "Ngữ pháp", min: 5, t: "Viết dạng đúng của động từ (6 câu)", src: "theo dạng Grammar file SB tr. 131", items: [
          { s: "Look at that cat! It ___ (jump) on the table.", a: ["is going to jump", "'s going to jump"] },
          { s: "I think people ___ (listen) to music in VR one day.", a: ["will listen", "'ll listen"] },
          { s: "We ___ (have) a party on Saturday – we've invited everyone.", a: ["are having", "'re having"] },
          { s: "The silent disco ___ (start) at 7 p.m.", a: ["starts"] },
          { s: "I'm thirsty. – I ___ (get) you some water.", a: ["will get", "'ll get"] },
          { s: "My sister ___ (study) music at university next year. She's already applied.", a: ["is going to study", "'s going to study", "is studying", "'s studying"] } ] }),
        A({ id: "21k", k: "dict", cat: "Nghe", min: 5, t: "Chép chính tả 4 câu từ bài đọc", voice: "nar", items: [
          "Today, almost everyone streams music from apps on their smartphone.",
          "Jade is going to perform her first VR concert next month.",
          "Computers can already produce simple songs.",
          "My school is having one on Friday." ] }),
        A({ id: "21l", k: "shadow", cat: "Nói", min: 5, t: "Shadowing 5 câu của bài đọc", voice: "nar", items: [
          "I think live concerts will change the most.",
          "Lots of fans can't travel to big cities.",
          "People want to hear real stories from real people.",
          "Everyone dances with headphones on.",
          "Maybe the future is already here." ] }),
        A({ id: "21m", k: "rec", cat: "Nói", min: 3, t: "Nói lại nội dung bài đọc trong 1 phút", prompt: "Retell the article 'Music in 2045'. Use at least 3 new words and one future form.", hint: ["The article is about …", "Jade thinks …", "Dr Ito says computers can …", "Lucy is going to …"], sec: [45, 75], target: ["live", "predict", "produce", "successful", "incredible", "stream", "headphones", "directly", "silent disco", "band"], scene: "🎤🎧🤖" }),
        A({ id: "21n", k: "dub", cat: "Lồng tiếng", min: 6, t: "Lồng tiếng: Nam's world in 2050", clip: "c2" }),
        A({ id: "21o", k: "dub", cat: "Lồng tiếng", min: 6, t: "Lồng tiếng lại: Mai's weekend plans (bản đẹp gửi phụ huynh)", clip: "c1" }),
        A({ id: "21p", k: "playlist", cat: "Nghe", min: 6, t: "Nghe ngấm: bài đọc Unit 3 (lần 2 có lời)", items: ["read21"] }),
      ],
    },
    {
      no: 22, title: "U3 · Vocabulary + Listening + Grammar 2", topic: "Đồ công nghệ trong nhà, cụm động từ · should, could, ought to, Why don't you…?", sb: "SB tr. 37–38, 144", wb: "WB tr. 25–26",
      pre: [
        A({ id: "22a", k: "vocab", cat: "Từ vựng", min: 10, t: "Chuỗi 5 bước nhớ 12 từ: đồ gia dụng", src: "SB tr. 37", words: W22 }),
        A({ id: "22b", k: "listen", cat: "Nghe", min: 4, t: "Nghe mồi đoạn đầu bài nghe, đoán nội dung", src: "SB tr. 38", text: { lines: T.lis22.lines.slice(0, 3) }, qs: [
          { q: "Where are Nam and his mum?", o: ["In a shop", "In their kitchen", "At school"], a: 0 },
          { q: "What do you think they will do?", o: ["Choose a new fridge-freezer", "Cook dinner", "Repair the TV"], a: 0 } ] }),
        A({ id: "22c", k: "slides", cat: "Ngữ pháp", min: 6, t: "Bài giảng ngắn: lời khuyên và gợi ý + 5 câu kiểm tra", src: "Grammar file SB tr. 130", g: G22 }),
        A({ id: "22d", k: "match", cat: "Từ vựng", min: 4, t: "Extend vocabulary: ghép 8 cụm động từ với nghĩa", src: "SB tr. 144", pairs: PHRASAL }),
        A({ id: "22e", k: "dub", cat: "Lồng tiếng", min: 6, t: "Lồng tiếng: Grandpa's new smart TV", clip: "c3" }),
        A({ id: "22f", k: "flash", cat: "Từ vựng", min: 3, t: "Ôn thẻ từ đến hạn (buổi 21)", words: W21 }),
      ],
      post: [
        A({ id: "22g", k: "mcq", cat: "Ôn", min: 5, t: "Quiz nhớ lại 10 câu – không mở sách", qs: vocabQ(W22, 6).concat(G22.check.slice(0, 4)) }),
        A({ id: "22h", k: "gap", cat: "Từ vựng", min: 6, t: "Điền cụm động từ (8 câu)", src: "theo dạng WB tr. 25", bank: PHRASAL.map((p) => p[0]), items: [
          { s: "Can you ___ the TV? I want to watch the news.", a: ["switch on"] },
          { s: "Please ___ the lights when you leave the room.", a: ["switch off"] },
          { s: "My phone is dead. I need to ___ it ___.", a: ["plug in"], split: true },
          { s: "Dad spent an hour trying to ___ the new printer.", a: ["set up"] },
          { s: "Save your work before you ___ the computer.", a: ["shut down"] },
          { s: "My alarm didn't ___ this morning, so I was late.", a: ["go off"] },
          { s: "I love this song! ___ it ___!", a: ["turn up"], split: true },
          { s: "The music is too loud. Please ___ it ___.", a: ["turn down"], split: true } ] }),
        A({ id: "22i", k: "listen", cat: "Nghe", min: 8, t: "Nghe hội thoại: Grandpa's smart TV (5 câu)", src: "theo dạng WB tr. 26", text: T.wb22, qs: [
          { q: "Why didn't the TV work at first?", o: ["It wasn't plugged in.", "It was broken.", "The remote had no batteries."], a: 0 },
          { q: "How long will it take to set up the TV?", o: ["Five minutes", "Fifteen minutes", "An hour"], a: 0 },
          { q: "What does Mai tell Grandpa to write down?", o: ["His password", "The channel numbers", "Her phone number"], a: 0 },
          { q: "What does Grandpa ask Mai to do?", o: ["Turn the volume up", "Turn the TV off", "Buy headphones"], a: 0 },
          { q: "What is Grandpa going to do tomorrow?", o: ["Tidy a drawer", "Watch football", "Buy a new remote"], a: 0 } ] }),
        A({ id: "22j", k: "pet1", cat: "Nghe", min: 8, t: "Nghe lại bài nghe có lời + PET Listening Part 1 rút gọn", src: "SB tr. 38", text: T.lis22, items: T.pet22 }),
        A({ id: "22k", k: "dict", cat: "Nghe", min: 5, t: "Chép chính tả 4 câu – chú ý âm yếu, âm nối", voice: "nam", items: [
          "It's got a big freezer and it's very efficient.",
          "How about the silver one next to it?",
          "You could buy ice trays.",
          "Shall we ask the assistant?" ] }),
        A({ id: "22l", k: "shadow", cat: "Nói", min: 5, t: "Shadowing 5 câu của bài nghe", voice: "nam", items: [
          "Can you help me choose a new fridge-freezer?",
          "It's too tall for our kitchen.",
          "It's smaller and it's on sale.",
          "Good idea.",
          "We should take the old one to the recycling centre." ] }),
        A({ id: "22m", k: "dub", cat: "Lồng tiếng", min: 6, t: "Lồng tiếng: Advice for a tired gamer", clip: "c4" }),
        A({ id: "22n", k: "dub", cat: "Lồng tiếng", min: 6, t: "Lồng tiếng lại: Grandpa's new smart TV (bản gửi phụ huynh)", clip: "c3" }),
        A({ id: "22o", k: "playlist", cat: "Nghe", min: 6, t: "Nghe ngấm: bài đọc + 2 bài nghe Unit 3", items: ["read21", "lis22", "wb22"] }),
      ],
    },
    {
      no: 23, title: "U3 · Speaking", topic: "Thảo luận về robot: hỏi và đưa ý kiến, đồng ý, không đồng ý (PET Speaking Part 3–4)", sb: "SB tr. 39, 148–149", wb: "WB tr. 27",
      pre: [
        A({ id: "23a", k: "phrases", cat: "Nói", min: 8, t: "Học cụm câu chức năng: nghe – nhắc lại – ghi âm", src: "Speaking file SB tr. 148–149", groups: [
          ["Hỏi ý kiến", ["What's your view on robot teachers?", "What do you think?"]],
          ["Đưa ý kiến", ["In my opinion, a robot cleaner is useful.", "I'd say a robot cook is better.", "For me, robots aren't creative."]],
          ["Đồng ý", ["That's a good point.", "You're right."]],
          ["Không đồng ý lịch sự", ["That's true, but robots can't feel.", "I'm not sure about that.", "I disagree, because teachers need to be human."]] ] }),
        A({ id: "23b", k: "rec", cat: "Nói", min: 5, t: "Ghi âm câu trả lời nháp 1 phút", src: "SB tr. 39", prompt: "Look at the robots: robot pet, robot doctor, robot teacher, robot cook, robot cleaner. Which robot would be the most useful? Why?", scene: "🐶🤖 🩺🤖 🧑‍🏫🤖 🍳🤖 🧹🤖", hint: ["In my opinion, the … would be the most useful because …", "I'd say … is less useful because …", "I wouldn't trust a robot …"], sec: [45, 75] }),
        A({ id: "23c", k: "listenmark", cat: "Nghe", min: 5, t: "Nghe bài thảo luận mẫu, đánh dấu 3 cụm câu em muốn dùng", text: T.model23 }),
        A({ id: "23d", k: "mcq", cat: "Từ vựng", min: 5, t: "Ôn nhanh từ vựng cho bài nói (10 câu)", qs: vocabQ(W23, 7).concat([
          { q: "A robot that cleans your house is very ___.", o: ["convenient", "human", "calm"], a: 0 },
          { q: "I don't ___ robots to drive my car.", o: ["trust", "predict", "produce"], a: 0 },
          { q: "Machines can't be as ___ as artists.", o: ["creative", "efficient", "common"], a: 0 } ]) }),
        A({ id: "23e", k: "dub", cat: "Lồng tiếng", min: 6, t: "Lồng tiếng: Would you trust a robot?", clip: "c5" }),
        A({ id: "23f", k: "flash", cat: "Từ vựng", min: 3, t: "Ôn thẻ từ đến hạn (buổi 22)", words: W22 }),
      ],
      post: [
        A({ id: "23g", k: "dialog", cat: "Nói", min: 7, t: "Hoàn thành hội thoại rồi ghi âm vai của em", src: "theo dạng WB tr. 27", lines: [
          ["nam", "What's your view on robot pets?", null],
          ["you", "___, they're a great idea. You don't need to feed them!", ["In my opinion", "You're right", "I'm not sure"], 0],
          ["nam", "That's true, but real pets love you back.", null],
          ["you", "___. But robot pets are good for people with allergies.", ["That's a good point", "What do you think", "I'd say"], 0],
          ["nam", "And what about robot teachers?", null],
          ["you", "___ about that. I think teachers need to be human.", ["I'm not sure", "That's a good point", "In my view"], 0] ] }),
        A({ id: "23h", k: "rec", cat: "Nói", min: 6, t: "Ghi âm lại bài nói hoàn chỉnh (Part 3 + Part 4) sau góp ý trên lớp", prompt: "Part 3: Which robot would be the most useful for a family? Part 4: Would you like a robot in your home? Do you think robots will replace some jobs?", hint: ["What's your view on …?", "In my opinion …", "That's true, but …", "I'd say …"], sec: [60, 120], target: ["useful", "convenient", "trust", "intelligent", "creative", "human", "in my opinion", "i'd say", "that's true", "i'm not sure"], scene: "🤖🏠👨‍👩‍👧" }),
        A({ id: "23i", k: "shadow", cat: "Phát âm", min: 6, t: "Phát âm: dạng rút gọn I'll, it'll, going to; ngữ điệu khi hỏi ý kiến", voice: "tch", items: [
          "I'll help you.", "It'll be fun.", "We'll see.", "I'm going to try.", "It's going to rain.",
          "They'll love it.", "What do you think?", "What's your view?", "I'm not sure about that.", "That's a good point." ] }),
        A({ id: "23j", k: "shadow", cat: "Nói", min: 5, t: "Shadowing câu trả lời mẫu", voice: "mai", items: T.model23.lines.slice(0, 5).map((l) => l[1]) }),
        A({ id: "23k", k: "mcq", cat: "Ôn", min: 4, t: "Nghe tình huống – chọn cụm câu phù hợp", qs: [
          { audio: ["nam", "I think robot teachers are a great idea."], q: "You disagree politely:", o: ["I'm not sure about that.", "That's a good point.", "Exactly."], a: 0 },
          { audio: ["mai", "Robots never get tired, so they can work all day."], q: "You agree:", o: ["You're right.", "I disagree.", "What's your view?"], a: 0 },
          { audio: ["tch", "Now, talk together about the pictures."], q: "You start by asking your partner:", o: ["What do you think about the robot cook?", "Good luck!", "I'm glad you're OK."], a: 0 },
          { audio: ["nam", "A robot doctor is cheaper than a real one."], q: "You partly agree:", o: ["That's true, but I wouldn't trust it.", "You're right, I'm agree.", "In my opinion yes."], a: 0 },
          { audio: ["tch", "Which robot is the least useful? Why?"], q: "You give your opinion:", o: ["I'd say the robot pet, because real pets are better.", "What's your view?", "That's a good point."], a: 0 } ] }),
        A({ id: "23l", k: "dub", cat: "Lồng tiếng", min: 6, t: "Lồng tiếng: Nam's world in 2050 (luyện I'll / will)", clip: "c2" }),
        A({ id: "23m", k: "dub", cat: "Lồng tiếng", min: 6, t: "Lồng tiếng lại: Would you trust a robot? (bản gửi phụ huynh)", clip: "c5" }),
        A({ id: "23n", k: "flash", cat: "Từ vựng", min: 3, t: "Ôn thẻ từ đến hạn (buổi 21 + 23)", words: W21.slice(0, 6).concat(W23) }),
        A({ id: "23o", k: "rate", cat: "Nghe", min: 4, t: "Nghe bài nói của 2 bạn và chấm theo 2 tiêu chí", note: "Bản thử dùng 2 bài mẫu. Trên web thật, giáo viên chọn 2 bài ghi âm của lớp.", samples: [
          { who: "Bạn A", voice: "nam", text: "In my opinion, a robot cleaner would be the most useful. It's convenient and it saves time. I wouldn't trust a robot doctor because it isn't human." },
          { who: "Bạn B", voice: "mai", text: "I think robot cook is good. It make food. Robot teacher is not good. I don't like." } ],
          crit: ["Dùng cụm câu nêu ý kiến / đồng ý / không đồng ý", "Giải thích lý do (because, so)"] }),
        A({ id: "23p", k: "playlist", cat: "Nghe", min: 6, t: "Nghe ngấm: bài thảo luận mẫu + các bài nghe Unit 3", items: ["model23", "lis22", "wb22"] }),
      ],
    },
    {
      no: 24, title: "U3 · Writing", topic: "Email trả lời bạn về National Unplugged Day: đưa lời khuyên và gợi ý (PET Writing Part 1)", sb: "SB tr. 40–41, 150–151", wb: "WB tr. 28",
      pre: [
        A({ id: "24a", k: "select", cat: "Viết", min: 6, t: "Đọc email mẫu: bấm chọn câu mở đầu, 3 cách khuyên/gợi ý, câu kết", src: "SB tr. 40–41, Writing file SB tr. 150–151", text: T.email24, tasks: [
          { label: "Câu mở đầu (trả lời thư bạn)", ans: ["Thanks for your email."] },
          { label: "3 cách đưa lời khuyên / gợi ý", ans: ["Why don't you give it to your mum in the morning?", "How about going for a bike ride or baking a cake with your brother?", "You should invite some friends to play board games too, so you won't feel bored.", "You could also plan some fun things to do."], need: 3 },
          { label: "Câu kết", ans: ["Good luck – tell me how it goes!"] } ] }),
        A({ id: "24b", k: "gap", cat: "Từ vựng", min: 6, t: "Cụm câu cho bài viết: nghe – nhắc lại – điền", audio: true, voice: "mai", items: [
          { s: "Sorry to ___ you were ill last week.", a: ["hear"] },
          { s: "I'm glad you're ___ OK now.", a: ["feeling"] },
          { s: "Why don't you ___ your phone to your mum?", a: ["give"] },
          { s: "How about ___ for a bike ride?", a: ["going"] },
          { s: "You ___ to switch off your games console.", a: ["ought"] },
          { s: "Unplugged Day is a big ___ for me.", a: ["challenge"] },
          { s: "Can you ___ up your gadgets for a day?", a: ["give"] },
          { s: "Good ___ – tell me how it goes!", a: ["luck"] } ] }),
        A({ id: "24c", k: "form", cat: "Viết", min: 6, t: "Lập dàn ý cho đề bài", prompt: "Đề: Your English friend Tom writes: 'I play on my games console every night and I'm always tired at school. It's National Unplugged Day next Saturday. What should I do all day without my console?' Write an email to Tom (about 100 words).", fields: [
          ["Mở đầu: cảm ơn / hỏi thăm", "Thanks for your email. …"], ["Ý 1: lời khuyên cho buổi tối", "You should …"], ["Ý 2: gợi ý hoạt động ngày Unplugged", "Why don't you … / How about …"], ["Ý 3: thêm một gợi ý + lý do", "You could … so …"], ["Kết thư", "Good luck …"] ] }),
        A({ id: "24d", k: "playlist", cat: "Nghe", min: 4, t: "Nghe – đọc email mẫu 2 lần", items: ["email24"], rounds: 2 }),
        A({ id: "24e", k: "dub", cat: "Lồng tiếng", min: 6, t: "Lồng tiếng: Advice for a tired gamer", clip: "c4" }),
        A({ id: "24f", k: "flash", cat: "Từ vựng", min: 3, t: "Ôn thẻ từ đến hạn (buổi 22 + 23)", words: W22.slice(6).concat(W23.slice(0, 4)) }),
      ],
      post: [
        A({ id: "24g", k: "write", cat: "Viết", min: 15, t: "Viết lại email gửi Tom theo nhận xét trên lớp", prompt: "Write your email to Tom again (about 100 words). Answer all his questions, give advice and suggestions.", minW: 90, maxW: 130, outline: "24c", checks: ["Đủ ý: lời khuyên buổi tối + gợi ý cho ngày Unplugged", "Chia đoạn: mở đầu – thân – kết", "Dùng ít nhất 3 cách: should / could / ought to / Why don't you / How about", "Soát chính tả, chữ hoa, dấu câu"], must: [["should", "could", "ought to", "why don't you", "how about"], 3] }),
        A({ id: "24h", k: "write", cat: "Viết", min: 8, t: "Viết email ngắn trả lời bạn", src: "theo dạng WB tr. 28", prompt: "Your friend Anna writes: 'My grandparents want to buy a smart TV, but they're worried it's too difficult. What advice can you give them?' Write a reply (60–80 words).", minW: 55, maxW: 100, checks: ["Mở thư và kết thư thân mật", "Ít nhất 2 lời khuyên", "Dùng ít nhất 2 cụm động từ (switch on, set up, plug in, turn up…)"], must: [["switch on", "switch off", "set up", "plug in", "turn up", "turn down", "shut down"], 2] }),
        A({ id: "24i", k: "upgrade", cat: "Viết", min: 5, t: "Nâng câu: nối 2 câu đơn thành câu phức", items: [
          ["You love your phone.", "Unplugged Day will be hard for you.", "so / because"],
          ["Give your phone to your mum.", "You won't check it.", "so / then"],
          ["You finish your homework.", "You can go for a bike ride.", "when / after"] ] }),
        A({ id: "24j", k: "rec", cat: "Nói", min: 4, t: "Đọc to email của em và ghi âm", prompt: "Read your email to Tom aloud. Read slowly and clearly.", fromWrite: "24g", sec: [30, 90], scene: "✉️🎮📵" }),
        A({ id: "24k", k: "dub", cat: "Lồng tiếng", min: 6, t: "Lồng tiếng: Mai's weekend plans", clip: "c1" }),
        A({ id: "24l", k: "dub", cat: "Lồng tiếng", min: 6, t: "Lồng tiếng lại: Advice for a tired gamer (bản gửi phụ huynh)", clip: "c4" }),
        A({ id: "24m", k: "mcq", cat: "Ôn", min: 4, t: "Quiz 8 câu: từ nối và cụm câu viết thư", qs: [
          { q: "Opening to a friend:", o: ["Hi Tom,", "Dear Sir or Madam,", "To whom it may concern,"], a: 0 },
          { q: "Thanks ___ your email.", o: ["for", "about", "to"], a: 0 },
          { q: "I love games, ___ I play every day.", o: ["so", "because", "but"], a: 0 },
          { q: "I'm tired ___ I went to bed late.", o: ["because", "so", "or"], a: 0 },
          { q: "It's a great idea, ___ it's not easy.", o: ["but", "so", "because"], a: 0 },
          { q: "How about ___ a picnic?", o: ["having", "have", "to have"], a: 0 },
          { q: "Which is NOT a way to end an email to a friend?", o: ["Yours faithfully,", "Love,", "See you soon,"], a: 0 },
          { q: "___ to hear that you were ill.", o: ["Sorry", "Glad", "Good luck"], a: 0 } ] }),
        A({ id: "24n", k: "playlist", cat: "Nghe", min: 6, t: "Nghe ngấm: email mẫu + bài đọc Unit 3", items: ["email24", "read21"] }),
      ],
    },
    {
      no: 25, title: "U3 · Ôn tập + Dự án", topic: "Video Teen app makers · Dự án: thiết kế một ứng dụng · Unit check", sb: "SB tr. 42–44, 131", wb: "WB tr. 29–31",
      pre: [
        A({ id: "25a", k: "form", cat: "Dự án", min: 12, t: "Chuẩn bị dự án: thiết kế một ứng dụng", prompt: "Nhóm em sẽ trình bày một app mới. Em chuẩn bị phần của mình (viết 4–5 câu em sẽ nói).", fields: [
          ["Tên app", "e.g. HomeworkHero"], ["App dành cho ai?", "It's for students who …"], ["App làm được gì? (2 chức năng)", "It sends you … / You can …"], ["Vì sao mọi người sẽ thích?", "We think it'll be popular because …"], ["Kế hoạch tiếp theo (going to)", "Next month, we're going to …"] ] }),
        A({ id: "25b", k: "video", cat: "Nghe", min: 6, t: "Xem video Teen app makers có phụ đề, trả lời 3 câu", src: "thay cho video Switch on SB tr. 42", clip: "v25", qs: [
          { q: "How did Anna learn coding?", o: ["Online", "At school", "From her mentor"], a: 0 },
          { q: "What does StudyBuddy do?", o: ["It reminds students to take breaks.", "It helps students cook.", "It plays music."], a: 0 },
          { q: "What is Anna going to do next year?", o: ["Add a game for younger children", "Sell the app", "Start university"], a: 0 } ] }),
        A({ id: "25c", k: "rec", cat: "Nói", min: 4, t: "Ghi âm phần trình bày dự án 1 phút để tập", prompt: "Present your part of the app pitch.", fromForm: "25a", sec: [40, 75], scene: "📱💡🚀" }),
        A({ id: "25d", k: "mcq", cat: "Ôn", min: 6, t: "Quiz trộn 20 câu từ vựng + ngữ pháp Unit 3", qs: U3TEST.filter((_, i) => i % 5 !== 4).slice(0, 20) }),
        A({ id: "25e", k: "dub", cat: "Lồng tiếng", min: 6, t: "Lồng tiếng: My app pitch", clip: "c6" }),
      ],
      post: [
        A({ id: "25f", k: "mcq", cat: "Ôn", min: 8, t: "Unit check (12 câu)", src: "theo dạng WB tr. 29–31", qs: [
          { q: "We ___ a new dishwasher tomorrow. The shop is delivering it at ten.", o: ["are getting", "get", "will get"], a: 0 },
          { q: "I'm not sure, but I think it ___ sunny tomorrow.", o: ["will be", "is being", "is"], a: 0 },
          { q: "Our train ___ at 6.40, so don't be late.", o: ["leaves", "is leaving to", "will leaving"], a: 0 },
          { q: "You ___ tell your parents where you're going.", o: ["ought to", "ought", "should to"], a: 0 },
          { q: "___ we turn off the lights to save electricity?", o: ["Shall", "How about", "Ought"], a: 0 },
          { q: "This ___ makes great coffee.", o: ["coffee maker", "kettle", "microwave"], a: 0 },
          { q: "It's freezing! Can you turn on the ___?", o: ["central heating", "air conditioning", "fridge"], a: 0 },
          { q: "Please ___ the computer before you leave.", o: ["shut down", "go off", "turn up"], a: 0 },
          { q: "I ___ to music while I run.", o: ["stream", "produce", "predict"], a: 0 },
          { q: "The band played ___ on TV last night.", o: ["live", "alive", "living"], a: 0 },
          { q: "A: I've got a headache. – B: Why don't you ___ some water?", o: ["drink", "drinking", "to drink"], a: 0 },
          { q: "She ___ a famous singer one day – she's so talented!", o: ["will be", "is being", "is"], a: 0 } ] }),
        A({ id: "25g", k: "mcq", cat: "Ôn", min: 25, t: "Bài kiểm tra Unit 3 trên web (25 câu, tính giờ 25 phút)", src: "soạn mới theo dạng Language Test", timer: 25, qs: U3TEST }),
        A({ id: "25h", k: "selfcheck", cat: "Tự học", min: 4, t: "Independent learning: tự đánh giá + ghi âm 1 phút", src: "SB tr. 42", items: ["Em dùng được will / going to / hiện tại tiếp diễn để nói về tương lai", "Em đưa được lời khuyên với should, could, Why don't you…", "Em nghe hiểu được hội thoại về đồ công nghệ", "Em nêu ý kiến, đồng ý và không đồng ý lịch sự", "Em viết được email khuyên bạn khoảng 100 từ"], prompt: "Unit 3: I'm good at … I need to practise …" }),
        A({ id: "25i", k: "match", cat: "Từ vựng", min: 6, t: "Từ vựng chủ đề PET tự học: Clothes (15 từ)", pairs: CLOTHES, emoji: true }),
        A({ id: "25j", k: "dub", cat: "Lồng tiếng", min: 6, t: "Lồng tiếng lại: My app pitch (bản gửi phụ huynh)", clip: "c6" }),
        A({ id: "25k", k: "playlist", cat: "Nghe", min: 6, t: "Nghe ngấm: toàn bộ audio Unit 3", items: ["read21", "lis22", "wb22", "model23", "email24", "vid25"] }),
      ],
    },
    {
      no: 26, title: "Sự kiện E4 · IVY App Pitch", topic: "Trình bày ý tưởng app trước lớp, dùng từ vựng công nghệ, will / going to, lời khuyên", sb: "—", wb: "—",
      pre: [
        A({ id: "26a", k: "form", cat: "Dự án", min: 15, t: "Chuẩn bị phần việc của em cho IVY App Pitch", prompt: "Hoàn thiện phần nói và đồ dùng của em (poster, ảnh màn hình app, slide).", fields: [["Vai của em trong nhóm", "e.g. I introduce the app / I explain the functions"], ["Phần em sẽ nói (4–6 câu)", "…"], ["Đồ dùng em mang theo", "poster, tablet…"], ["1 câu hỏi khán giả có thể hỏi và câu trả lời của em", "Q: … A: …"]], big: [1] }),
        A({ id: "26b", k: "rec", cat: "Nói", min: 8, t: "Ghi âm phần nói 1–2 phút, nghe lại và sửa", prompt: "Record your part of the pitch. Listen again: Is it clear? Did you use will / going to?", fromForm: "26a", sec: [60, 120], scene: "📣📱🏆" }),
        A({ id: "26c", k: "mcq", cat: "Từ vựng", min: 6, t: "Ôn từ vựng và cấu trúc cho bài pitch", qs: vocabQ(W25, 6).concat(U3TEST.slice(8, 12)) }),
        A({ id: "26d", k: "dub", cat: "Lồng tiếng", min: 6, t: "Lồng tiếng: My app pitch", clip: "c6" }),
      ],
      post: [
        A({ id: "26e", k: "selfcheck", cat: "Tự học", min: 3, t: "Tự đánh giá theo rubric 4 tiêu chí", items: ["Nội dung: rõ app làm gì, cho ai", "Ngôn ngữ: dùng từ vựng Unit 3, will / going to", "Phát âm và độ trôi chảy", "Phối hợp nhóm, trả lời câu hỏi"] }),
        A({ id: "26f", k: "write", cat: "Viết", min: 15, t: "Viết phản tư khoảng 80 từ về sự kiện", prompt: "Write about the IVY App Pitch: What was your app? What did you do well? What will you do better next time? Which group's app did you like best? Why?", minW: 70, maxW: 110, checks: ["Trả lời đủ 4 câu hỏi", "Có ít nhất 1 câu dùng will / going to", "Có because hoặc so"] }),
        A({ id: "26g", k: "rec", cat: "Nói", min: 5, t: "Xem video nhóm, ghi âm nhận xét 1 phút", prompt: "Watch your group's video. Say one thing your group did well and one thing to improve.", hint: ["I think we did well at …", "Next time, we should …"], sec: [40, 70], scene: "🎬👍🛠️" }),
        A({ id: "26h", k: "listen", cat: "Nghe", min: 6, t: "Nghe bài pitch của một nhóm khác, trả lời 3 câu", text: T.pitch26, qs: [
          { q: "Who is GreenRoute for?", o: ["Students who walk or cycle to school", "Parents who drive", "Teachers"], a: 0 },
          { q: "What do you get with 100 points?", o: ["A free drink", "A new bike", "A school prize"], a: 0 },
          { q: "What are they going to do next month?", o: ["Test the app with a class", "Sell the app", "Make a video"], a: 0 } ] }),
        A({ id: "26i", k: "flash", cat: "Từ vựng", min: 4, t: "Ôn thẻ đến hạn (Unit 3)", words: W21.slice(6).concat(W22.slice(0, 4), W25) }),
        A({ id: "26j", k: "dub", cat: "Lồng tiếng", min: 6, t: "Lồng tiếng: Nam's world in 2050", clip: "c2" }),
        A({ id: "26k", k: "dub", cat: "Lồng tiếng", min: 6, t: "Lồng tiếng: Grandpa's new smart TV", clip: "c3" }),
        A({ id: "26l", k: "mcq", cat: "Ôn", min: 5, t: "Quiz trộn 10 câu Unit 3", qs: U3TEST.filter((_, i) => i % 5 === 4).concat(U3TEST.slice(0, 5)) }),
        A({ id: "26m", k: "playlist", cat: "Nghe", min: 6, t: "Nghe ngấm: audio Unit 3 (lần 2 có lời)", items: ["vid25", "pitch26", "model23"] }),
      ],
    },
  ];

  sessions.forEach((s, k) => ["pre", "post"].forEach((ph, j) => { const n = k * 2 + j + 1;
    const act = { id: s.no + (ph === "pre" ? "s1" : "s2"), k: "story", cat: "Đọc", min: 8, t: `Truyện dài kỳ – Tập ${n}: ${STORY[n - 1][0]}`, src: "đọc mở rộng, nghe – đọc theo", story: "story" + n, qs: STORY[n - 1][2] };
    const at = s[ph].findIndex((a) => a.k === "dub"); s[ph].splice(at < 0 ? s[ph].length : at, 0, act); }));
  CLIPS.v25 = { title: T.vid25.title, who: "nar", bg: ["#dfe6ff", "#ffe8d6"], hair: "#6b3b1f", skin: "#f3c9a8", props: ["👩‍💻", "📱", "🚀"], lines: T.vid25.lines, narrator: true };
  return { VOICES, T, CLIPS, sessions, W: { W21, W22, W23, W24, W25 } };
})();
