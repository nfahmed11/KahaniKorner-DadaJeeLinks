const riddles = [
  {
    word: {
      romanUrdu: "Kutta",
      urdu: "کتا",
      english: "Dog",
    },
    image: "dog.png", // Replace with actual image path
    riddles: {
      easy: {
        romanUrdu: "Main wafadar aur bhonknay wala dost hoon. Main kaun hoon?",
        urdu: "میں وفادار اور بھونکنے والا دوست ہوں۔ میں کون ہوں؟",
        english: "I am a loyal friend who barks. Who am I?",
      },
      medium: {
        romanUrdu:
          "Mujhe insano ka sab se acha dost kaha jata hai, aur main raat ko chaukidari bhi karta hoon. Main kaun hoon?",
        urdu: "مجھے انسانوں کا سب سے اچھا دوست کہا جاتا ہے، اور میں رات کو چوکیداری بھی کرتا ہوں۔ میں کون ہوں؟",
        english:
          "I am called a human’s best friend, and I also guard at night. Who am I?",
      },
      hard: {
        romanUrdu:
          "Meri naak bohat tez hoti hai, aur mujhe police bhi istemal karti hai. Main kaun hoon?",
        urdu: "میری ناک بہت تیز ہوتی ہے، اور مجھے پولیس بھی استعمال کرتی ہے۔ میں کون ہوں؟",
        english: "I have a sharp nose, and even the police use me. Who am I?",
      },
    },
  },
  {
    word: {
      romanUrdu: "Billi",
      urdu: "بلی",
      english: "Cat",
    },
    image: "cat.png", // Replace with actual image path
    riddles: {
      easy: {
        romanUrdu: "Main chhoti hoon aur meow karti hoon. Main kaun hoon?",
        urdu: "میں چھوٹی ہوں اور میاؤں کرتی ہوں۔ میں کون ہوں؟",
        english: "I am small and say 'meow'. Who am I?",
      },
      medium: {
        romanUrdu:
          "Main andheray mein bhi dekh sakti hoon aur chhup kar shikar karti hoon. Main kaun hoon?",
        urdu: "میں اندھیرے میں بھی دیکھ سکتی ہوں اور چھپ کر شکار کرتی ہوں۔ میں کون ہوں؟",
        english: "I can see in the dark and sneakily hunt. Who am I?",
      },
      hard: {
        romanUrdu:
          "Main naram hoon, lambi chhalang lagati hoon aur doodh pasand karti hoon. Main kaun hoon?",
        urdu: "میں نرم ملائم ہوں، لمبی چھلانگ لگاتی ہوں اور دودھ پسند کرتی ہوں۔ میں کون ہوں؟",
        english: "I am soft and fluffy, jump high, and love milk. Who am I?",
      },
    },
  },
  {
    word: {
      romanUrdu: "Oont",
      urdu: "اونٹ",
      english: "Camel",
    },
    image: "camel.png", // Replace with actual image path
    riddles: {
      easy: {
        romanUrdu:
          "Meri peeth par kohan hota hai, aur main registan mein rehta hoon. Main kaun hoon?",
        urdu: "میری پیٹھ پر کوہان ہوتا ہے، اور میں ریگستان میں رہتا ہوں۔ میں کون ہوں؟",
        english: "I have a hump on my back and live in the desert. Who am I?",
      },
      medium: {
        romanUrdu:
          "Main bina paani ke dino tak zinda reh sakta hoon. Main kaun hoon?",
        urdu: "میں بغیر پانی کے دنوں تک زندہ رہ سکتا ہوں۔ میں کون ہوں؟",
        english: "I can survive for days without water. Who am I?",
      },
      hard: {
        romanUrdu:
          "Main oon bhi deta hoon, lamba safar karta hoon aur log mujhe 'registan ka jahaz' kehte hain. Main kaun hoon?",
        urdu: "میں اون بھی دیتا ہوں، لمبا سفر کرتا ہوں اور لوگ مجھے 'ریگستان کا جہاز' کہتے ہیں۔ میں کون ہوں؟",
        english:
          "I provide wool, travel long distances, and people call me the 'ship of the desert'. Who am I?",
      },
    },
  },
  {
    word: {
      romanUrdu: "Hans",
      urdu: "ہنس",
      english: "Goose",
    },
    image: "goose.png", // Replace with actual image path
    riddles: {
      easy: {
        romanUrdu:
          "Main safed hoon aur talaab mein tairta hoon. Main kaun hoon?",
        urdu: "میں سفید ہوں اور تالاب میں تیرتا ہوں۔ میں کون ہوں؟",
        english: "I am white and swim in the pond. Who am I?",
      },
      medium: {
        romanUrdu:
          "Main oonchi awaz nikalta hoon jab honk karta hoon, saath mil kar safar karta hoon aur paani mein tairta hoon. Main kaun hoon?",
        urdu: "میں اونچی آواز نکالتا ہوں جب ہانک کرتا ہوں، ساتھ مل کر سفر کرتا ہوں اور پانی میں تیرتا ہوں۔ میں کون ہوں؟",
        english:
          "I make a loud sound when I honk, travel together with others, and swim in the water. Who am I?",
      },
      hard: {
        romanUrdu:
          "Meri gardan lambi hoti hai, main apni aulaad ki dekhbhal karta hoon aur main honk karta hoon aur urta hoon. Main kaun hoon?",
        urdu: "میری گردن لمبی ہوتی ہے، میں اپنی اولاد کی دیکھ بھال کرتا ہوں اور میں ہانک کرتا ہوں اور اڑتا ہوں۔ میں کون ہوں؟",
        english:
          "I have a long neck, take care of my young, and I honk and fly. Who am I?",
      },
    },
  },

  {
    word: {
      romanUrdu: "Gadha",
      urdu: "گدھا",
      english: "Donkey",
    },
    image: "donkey.png", // Replace with actual image path
    riddles: {
      easy: {
        romanUrdu:
          "Main bojh uthata hoon aur ahista chalta hoon. Main kaun hoon?",
        urdu: "میں بوجھ اٹھاتا ہوں اور آہستہ چلتا ہوں۔ میں کون ہوں؟",
        english: "I carry loads and walk slowly. Who am I?",
      },
      medium: {
        romanUrdu:
          "Main ziddi kehlata hoon, lekin mehnati hoon. Main kaun hoon?",
        urdu: "میں ضدی کہلاتا ہوں، لیکن محنتی ہوں۔ میں کون ہوں؟",
        english: "I am called stubborn, but I am hardworking. Who am I?",
      },
      hard: {
        romanUrdu:
          "Mujhe zyada izzat nahi di jati, mai 'hee-haw' ki awaz nikalta hoon. Main kaun hoon?",
        urdu: "مجھے زیادہ عزت نہیں دی جاتی، میں 'ہی-ہا' کی آواز نکالتا ہوں۔ میں کون ہوں؟",
        english:
          "I am not given much respect, but I make a 'hee-haw' sound. Who am I?",
      },
    },
  },

  {
    word: {
      romanUrdu: "Khargosh",
      urdu: "خرگوش",
      english: "Rabbit",
    },
    image: "rabbit.png", // Replace with actual image path
    riddles: {
      easy: {
        romanUrdu:
          "Main chhota hoon, taiz bhagta hoon, aur apne pair se zor zor se thapthapata hoon. Main kaun hoon?",
        urdu: "میں چھوٹا ہوں، تیز بھاگتا ہوں، اور اپنے پیر سے زور زور سے تھپتھپاتا ہوں۔ میں کون ہوں؟",
        english: "I am small, run fast, and thump with my feet. Who am I?",
      },
      medium: {
        romanUrdu:
          "Mere lambay kaan hain aur mujhe gajar pasand hai. Main kaun hoon?",
        urdu: "میرے لمبے کان ہیں اور مجھے گاجر پسند ہے۔ میں کون ہوں؟",
        english: "I have long ears and love carrots. Who am I?",
      },
      hard: {
        romanUrdu:
          "Main zameen khodta hoon, raat ko jaagta hoon, aur gajar khata hoon. Main kaun hoon?",
        urdu: "میں زمین کھودتا ہوں، رات کو جاگتا ہوں، اور گاجر کھاتا ہوں۔ میں کون ہوں؟",
        english:
          "I dig the ground, stay awake at night, and eat carrots. Who am I?",
      },
    },
  },
  {
    word: {
      romanUrdu: "Turkey",
      urdu: "ٹرکی",
      english: "Turkey",
    },
    image: "turkey.png", // Replace with actual image path
    riddles: {
      easy: {
        romanUrdu:
          "Main bara parinda hoon aur Thanksgiving par log mujhe khaate hain. Main kaun hoon?",
        urdu: "میں بڑا پرندہ ہوں اور تھینکس گیونگ پر لوگ مجھے کھاتے ہیں۔ میں کون ہوں؟",
        english:
          "I am a big bird, and people eat me on Thanksgiving. Who am I?",
      },
      medium: {
        romanUrdu:
          "Meri gardan surkh hoti hai, main gobble gobble ki aawaz nikalta hoon aur zyada tar khet mein rehta hoon. Main kaun hoon?",
        urdu: "میری گردن سرخ ہوتی ہے، میں 'گبل گبل' کی آواز نکالتا ہوں اور زیادہ تر کھیت میں رہتا ہوں۔ میں کون ہوں؟",
        english:
          "I have a red neck, make a 'gobble gobble' sound, and mostly live on farms. Who am I?",
      },
      hard: {
        romanUrdu:
          "Mujhe North America ka aik native parinda mana jata hai. Main kaun hoon?",
        urdu: "مجھے شمالی امریکہ کا ایک مقامی پرندہ مانا جاتا ہے۔ میں کون ہوں؟",
        english: "I am considered a native bird of North America. Who am I?",
      },
    },
  },

  {
    word: {
      romanUrdu: "Ghora",
      urdu: "گھوڑا",
      english: "Horse",
    },
    image: "horse.png", // Replace with actual image path
    riddles: {
      easy: {
        romanUrdu:
          "Main taiz daur sakta hoon aur log mujhe sawari ke liye istemal karte hain. Main kaun hoon?",
        urdu: "میں تیز دوڑ سکتا ہوں اور لوگ مجھے سواری کے لئے استعمال کرتے ہیں۔ میں کون ہوں؟",
        english: "I can run fast, and people use me for riding. Who am I?",
      },
      medium: {
        romanUrdu:
          "Mere chaar taangain hain, mujhe ghass pasand hai, aur log mujhe race mein bhi istamaal karte hain. Main kaun hoon?",
        urdu: "میرے چار ٹانگیں ہیں، مجھے گھاس پسند ہے، اور لوگ مجھے ریس میں بھی استعمال کرتے ہیں۔ میں کون ہوں؟",
        english:
          "I have four legs, I like grass, and people also use me in races. Who am I?",
      },
      hard: {
        romanUrdu:
          "Main safar aur shikaar ke liye istemal ho sakta hoon, main jangon mein bhi istemal hota raha hoon, aur mujhe train kiya ja sakta hai ya main jungli ho sakta hoon. Main kaun hoon?",
        urdu: "میں سفر اور شکار کے لئے استعمال ہو سکتا ہوں، میں جنگوں میں بھی استعمال ہوتا رہا ہوں، اور مجھے تربیت دیا جا سکتا ہے یا میں جنگلی ہو سکتا ہوں۔ میں کون ہوں؟",
        english:
          "I can be used to travel, hunt, I have been used in wars, and can be trained or wild. Who am I?",
      },
    },
  },

  {
    word: {
      romanUrdu: "Choozay",
      urdu: "چوزے",
      english: "Chicks",
    },
    image: "chicks.png",
    riddles: {
      easy: {
        romanUrdu:
          "Main chhota hoon aur anday se nikalta hoon. Main kaun hoon?",
        urdu: "میں چھوٹا ہوں اور انڈے سے نکلتا ہوں۔ میں کون ہوں؟",
        english: "I am small and hatch from an egg. Who am I?",
      },
      medium: {
        romanUrdu:
          "Main apni maa ke sath rehta hoon aur cheep cheep karta hoon. Main kaun hoon?",
        urdu: "میں اپنی ماں کے ساتھ رہتا ہوں اور چپ چپ کرتا ہوں۔ میں کون ہوں؟",
        english:
          "I stay with my mother and make a cheep-cheep sound. Who am I?",
      },
      hard: {
        romanUrdu:
          "Main aik din bara murgha ya murghi ban jaoun ga. Main kaun hoon?",
        urdu: "میں ایک دن بڑا مرغہ یا مرغی بن جاؤں گا۔ میں کون ہوں؟",
        english: "One day, I will grow into a rooster or a hen. Who am I?",
      },
    },
  },
  {
    word: {
      romanUrdu: "Bhair",
      urdu: "بھیڑ",
      english: "Sheep",
    },
    image: "sheep.png",
    riddles: {
      easy: {
        romanUrdu:
          "Meri oon garam hoti hai aur main baa baa karti hoon. Main kaun hoon?",
        urdu: "میری اون گرم ہوتی ہے اور میں با با کرتی ہوں۔ میں کون ہوں؟",
        english: "My wool is warm, and I say 'baa baa.' Who am I?",
      },
      medium: {
        romanUrdu:
          "Main kaala ya safed ho sakta hoon, meri oon kapron ke liye istemal hoti hai. Main kaun hoon?",
        urdu: "میں کالا یا سفید ہو سکتا ہوں، میری اون کپڑوں کے لیے استعمال ہوتی ہے۔ میں کون ہوں؟",
        english:
          "I can be black or white, my wool is used for clothing. Who am I?",
      },
      hard: {
        romanUrdu:
          "Mujhe qurbani ke waqt yaad kiya jata hai, aur main baa baa karti hoon. Main kaun hoon?",
        urdu: "مجھے قربانی کے وقت یاد کیا جاتا ہے، اور میں با با کرتی ہوں۔ میں کون ہوں؟",
        english:
          "I am remembered during sacrifice time, and I say 'baa baa.' Who am I?",
      },
    },
  },
  {
    word: {
      romanUrdu: "Bakri",
      urdu: "بکری",
      english: "Goat",
    },
    image: "goat.png",
    riddles: {
      easy: {
        romanUrdu:
          "Meri chhoti seengh hoti hain, main doodh deti hoon, aur main meh meh karti hoon. Main kaun hoon?",
        urdu: "میری چھوٹی سینگھ ہوتی ہیں، میں دودھ دیتی ہوں، اور میں میں کرتی ہوں۔ میں کون ہوں؟",
        english:
          "I have small horns, give milk, and I say 'meh meh.' Who am I?",
      },
      medium: {
        romanUrdu:
          "Main ghaas khati hoon, main meh meh karti hoon, main kutay jitni bari ho sakti hoon magar main kutta nahi hoon. Main kaun hoon?",
        urdu: "میں گھاس کھاتی ہوں، میں میں کرتی ہوں، میں کتے جتنی بڑی ہو سکتی ہوں مگر میں کتا نہیں ہوں۔ میں کون ہوں؟",
        english:
          "I eat grass, I say 'meh meh,' I can be as big as a dog, but I am not a dog. Who am I?",
      },
      hard: {
        romanUrdu:
          "Log mujh se qurbani karte hain, main doodh deti hoon magar main gaayn nahi hoon, mere seengh chhoti ya baray ho sakte hain. Main kaun hoon?",
        urdu: "لوگ مجھ سے قربانی کرتے ہیں، میں دودھ دیتی ہوں مگر میں گائے نہیں ہوں، میرے سینگھ چھوٹے یا بڑے ہو سکتے ہیں۔ میں کون ہوں؟",
        english:
          "People sacrifice me, I give milk, but I am not a cow. My horns can be big or small. Who am I?",
      },
    },
  },

  {
    word: {
      romanUrdu: "Sewr",
      urdu: "سور",
      english: "Pig",
    },
    image: "pig.png",
    riddles: {
      easy: {
        romanUrdu:
          "Main gol matol hoon, mitti mein lotta hoon, aur oink oink karta hoon. Main kaun hoon?",
        urdu: "میں گول مٹول ہوں، مٹی میں لوٹتا ہوں، اور اوئنک اوئنک کرتا ہوں۔ میں کون ہوں؟",
        english:
          "I am round and chubby, roll in mud, and say 'oink oink.' Who am I?",
      },
      medium: {
        romanUrdu:
          "Meri naak chhoti aur gol hoti hai, main har cheez kha leta hoon, aur main gulabi rang ka bhi ho sakta hoon. Main kaun hoon?",
        urdu: "میری ناک چھوٹی اور گول ہوتی ہے، میں ہر چیز کھا لیتا ہوں، اور میں گلابی رنگ کا بھی ہو سکتا ہوں۔ میں کون ہوں؟",
        english:
          "I have a small, round nose, I eat everything, and I can be pink in color. Who am I?",
      },
      hard: {
        romanUrdu:
          "Main bohot tez hota hoon, mujhe doston ke sath rehna pasand hai, aur mujhe mitti mein lotna acha lagta hai. Main kaun hoon?",
        urdu: "میں بہت تیز ہوتا ہوں، مجھے دوستوں کے ساتھ رہنا پسند ہے، اور مجھے مٹی میں لوٹنا اچھا لگتا ہے۔ میں کون ہوں؟",
        english:
          "I am very fast, I like to stay with friends, and I love rolling in the mud. Who am I?",
      },
    },
  },
  {
    word: {
      romanUrdu: "Murghi",
      urdu: "مرغی",
      english: "Hen",
    },
    image: "hen.png",
    riddles: {
      easy: {
        romanUrdu:
          "Main anday deti hoon aur bawk bawk karti hoon. Main kaun hoon?",
        urdu: "میں انڈے دیتی ہوں اور باک باک کرتی ہوں۔ میں کون ہوں؟",
        english: "I lay eggs and say 'bawk bawk.' Who am I?",
      },
      medium: {
        romanUrdu:
          "Main apne bachon ko apne paron ke neeche rakhti hoon aur subha subha jagti hoon. Main kaun hoon?",
        urdu: "میں اپنے بچوں کو اپنے پروں کے نیچے رکھتی ہوں اور صبح صبح جاگتی ہوں۔ میں کون ہوں؟",
        english:
          "I keep my babies under my wings and wake up early in the morning. Who am I?",
      },
      hard: {
        romanUrdu:
          "Main anday deti hoon, log mujhe gosht ke liye bhi paalte hain, aur main bawk bawk karti hoon. Main kaun hoon?",
        urdu: "میں انڈے دیتی ہوں، لوگ مجھے گوشت کے لیے بھی پالتے ہیں، اور میں باک باک کرتی ہوں۔ میں کون ہوں؟",
        english:
          "I lay eggs, people also raise me for meat, and I say 'bawk bawk.' Who am I?",
      },
    },
  },
  {
    word: {
      romanUrdu: "Murgha",
      urdu: "مرغا",
      english: "Rooster",
    },
    image: "rooster.png",
    riddles: {
      easy: {
        romanUrdu:
          "Main subha sabse pehle ‘kukroo koo’ karta hoon. Main kaun hoon?",
        urdu: "میں صبح سب سے پہلے ‘ککڑو کُو’ کرتا ہوں۔ میں کون ہوں؟",
        english:
          "I am the first to say ‘cock-a-doodle-doo’ in the morning. Who am I?",
      },
      medium: {
        romanUrdu:
          "Mere sar par laal taj hoti hai aur main murghiyon ki hifazat karta hoon. Main kaun hoon?",
        urdu: "میرے سر پر لال تاج ہوتی ہے اور میں مرغیوں کی حفاظت کرتا ہوں۔ میں کون ہوں؟",
        english: "I have a red crown on my head and protect my hens. Who am I?",
      },
      hard: {
        romanUrdu:
          "Main anday nahi deta, lekin murghiyon ke sath rehta hoon aur subha jaldi awaaz nikalta hoon. Main kaun hoon?",
        urdu: "میں انڈے نہیں دیتا، لیکن مرغیوں کے ساتھ رہتا ہوں اور صبح جلدی آواز نکالتا ہوں۔ میں کون ہوں؟",
        english:
          "I don’t lay eggs, but I stay with hens and crow early in the morning. Who am I?",
      },
    },
  },

  {
    word: {
      romanUrdu: "Dada Jee",
      urdu: "دادا جی",
      english: "Grandpa",
    },
    image: "grandfather.png",
    riddles: {
      easy: {
        romanUrdu:
          "Main bohot bara hoon, mere baal safed hain. Main kaun hoon?",
        urdu: "میں بہت بڑا ہوں، میرے بال سفید ہیں۔ میں کون ہوں؟",
        english: "I am very old, and my hair is white. Who am I?",
      },
      medium: {
        romanUrdu:
          "Main khaandaan ka sabse bara hoon aur khet mein janwaron ka khayal rakhta hoon. Main kaun hoon?",
        urdu: "میں خاندان کا سب سے بڑا ہوں اور کھیت میں جانوروں کا خیال رکھتا ہوں۔ میں کون ہوں؟",
        english:
          "I am the eldest in the family and take care of the animals on the farm. Who am I?",
      },
      hard: {
        romanUrdu:
          "Main apni olaad aur pothay pothiyon se bohot pyar karta hoon, aur zindagi ka bohot tajurba rakhta hoon. Main kaun hoon?",
        urdu: "میں اپنی اولاد اور پوتے پوتیوں سے بہت پیار کرتا ہوں، اور زندگی کا بہت تجربہ رکھتا ہوں۔ میں کون ہوں؟",
        english:
          "I love my children and grandchildren a lot and have a lifetime of experience. Who am I?",
      },
    },
  },
  {
    word: {
      romanUrdu: "Khet",
      urdu: "کھیت",
      english: "Farm/Field",
    },
    image: "farm.png",
    riddles: {
      easy: {
        romanUrdu:
          "Main zyadatar hari jagah hoon jahan phal aur sabziyan ugti hain aur janwar rehte hain. Main kaun hoon?",
        urdu: "میں زیادہ تر ہری جگہ ہوں جہاں پھل اور سبزیاں اگتی ہیں اور جانور رہتے ہیں۔ میں کون ہوں؟",
        english:
          "I am a mostly green field where fruits and vegetables grow and animals live. Who am I?",
      },
      medium: {
        romanUrdu: "Main ek jagah hoon, koi cheez nahi. Main kaun hoon?",
        urdu: "میں ایک جگہ ہوں، کوئی چیز نہیں۔ میں کون ہوں؟",
        english: "I am a place, not a thing. Who am I?",
      },
      hard: {
        romanUrdu:
          "Main ek aisi jagah hoon jahan insaan aur janwar dono milkar kaam karte hain taake khana hasil ho sake. Main kaun hoon?",
        urdu: "میں ایک ایسی جگہ ہوں جہاں انسان اور جانور دونوں مل کر کام کرتے ہیں تاکہ کھانا حاصل ہو سکے۔ میں کون ہوں؟",
        english:
          "I am a place where both humans and animals work together to produce food. Who am I?",
      },
    },
  },
  {
    word: {
      romanUrdu: "Batakh",
      urdu: "بطخ",
      english: "Duck",
    },
    image: "duck.png",
    riddles: {
      easy: {
        romanUrdu:
          "Main paani mein tairti hoon aur quack quack karti hoon. Main kaun hoon?",
        urdu: "میں پانی میں تیرتی ہوں اور کواک کواک کرتی ہوں۔ میں کون ہوں؟",
        english: "I swim in water and say 'quack quack.' Who am I?",
      },
      medium: {
        romanUrdu:
          "Mere par hotay hain, main pani ke andar bhi ja sakti hoon, aur main quack karti hoon. Main kaun hoon?",
        urdu: "میرے پر ہوتے ہیں، میں پانی کے اندر بھی جا سکتی ہوں، اور میں کواک کرتی ہوں۔ میں کون ہوں؟",
        english:
          "I have wings, I can also go underwater, and I quack. Who am I?",
      },
      hard: {
        romanUrdu:
          "Main garam aur thanday ilaaqon dono mein rehti hoon, urr sakti hoon, darya ke paas milti hoon, aur main quack karti hoon. Main kaun hoon?",
        urdu: "میں گرم اور ٹھنڈے علاقوں دونوں میں رہتی ہوں، اُڑ سکتی ہوں، دریا کے پاس ملتی ہوں، اور میں کواک کرتی ہوں۔ میں کون ہوں؟",
        english:
          "I live in both hot and cold places, I can fly, I am found near rivers, and I quack. Who am I?",
      },
    },
  },
  {
    word: {
      romanUrdu: "Gaayn",
      urdu: "گائے",
      english: "Cow",
    },
    image: "cow.png",
    riddles: {
      easy: {
        romanUrdu:
          "Main doodh deti hoon aur mooo mooo karti hoon. Main kaun hoon?",
        urdu: "میں دودھ دیتی ہوں اور مووو مووو کرتی ہوں۔ میں کون ہوں؟",
        english: "I give milk and say 'moo moo.' Who am I?",
      },
      medium: {
        romanUrdu:
          "Mujhe log paalte hain taake mujhse doodh milay, main hari ghaas khati hoon, aur main moo karti hoon. Main kaun hoon?",
        urdu: "مجھے لوگ پالتے ہیں تاکہ مجھ سے دودھ ملے، میں ہری گھاس کھاتی ہوں، اور میں مووو کرتی ہوں۔ میں کون ہوں؟",
        english:
          "People keep me for milk, I eat green grass, and I go moo. Who am I?",
      },
      hard: {
        romanUrdu:
          "Main bada janwar hoon, log mujh se qurbani bhi karte hain, main kheton mein bhi kaam aati hoon, aur main moo karti hoon. Main kaun hoon?",
        urdu: "میں بڑا جانور ہوں، لوگ مجھ سے قربانی بھی کرتے ہیں، میں کھیتوں میں بھی کام آتی ہوں، اور میں مووو کرتی ہوں۔ میں کون ہوں؟",
        english:
          "I am a large animal, people sacrifice me, I also help on farms, and I go moo. Who am I?",
      },
    },
  },
];

// confetti function/code
function launchConfetti() {
  const confettiContainer = document.createElement("div");
  confettiContainer.classList.add("confetti-container");

  for (let i = 0; i < 30; i++) {
    // Create 30 pieces of confetti
    const confettiPiece = document.createElement("div");
    confettiPiece.classList.add("confetti");
    confettiPiece.style.left = `${Math.random() * 100}%`;
    confettiPiece.style.animationDelay = `${Math.random() * 2}s`;

    // Randomize confetti color
    confettiPiece.style.backgroundColor = `hsl(${
      Math.random() * 360
    }, 100%, 70%)`;

    confettiContainer.appendChild(confettiPiece);
  }

  document.body.appendChild(confettiContainer);

  // Remove confetti after 3 seconds
  setTimeout(() => {
    confettiContainer.remove();
  }, 3000);
}

// settings container
document.addEventListener("DOMContentLoaded", () => {
  const settingsContainer = document.querySelector(".settings-container");
  const settingsDropdown = document.getElementById("settings-dropdown");
  const difficultyOptions = document.querySelectorAll(
    "input[name='difficulty']"
  );
  const selectedDifficulty = document.getElementById("selected-difficulty");
  const correctSound = new Audio("sounds/success.wav"); // Load sound
  const incorrectSound = new Audio("sounds/incorrect.wav"); // Load sound

  // Toggle dropdown on hover
  settingsContainer.addEventListener("mouseenter", () => {
    settingsDropdown.classList.add("visible");
  });

  settingsContainer.addEventListener("mouseleave", () => {
    settingsDropdown.classList.remove("visible");
  });

  // Update difficulty text when a new option is selected
  difficultyOptions.forEach((option) => {
    option.addEventListener("change", () => {
      selectedDifficulty.textContent = option.value;
    });
  });

  const riddlesContainer = document.getElementById("riddle-container");
  const dropZone = document.getElementById("drop-zone");
  const wordOptions = document.getElementById("word-options");
  // const difficultyOptions = document.querySelectorAll("input[name='difficulty']");
  const languageCheckboxes = {
    romanUrdu: document.getElementById("romanUrdu"),
    urdu: document.getElementById("urdu"),
    english: document.getElementById("english"),
  };

  let currentDifficulty = "Easy";

  function getRandomRiddle() {
    const filteredRiddles = riddles.filter(
      (r) => r.riddles[currentDifficulty.toLowerCase()]
    );
    return filteredRiddles[Math.floor(Math.random() * filteredRiddles.length)];
  }

  let currentRiddle = null; // 🔹 Global variable to store current riddle

  function updateRiddle() {
    currentRiddle = getRandomRiddle(); // ✅ Ensures it's assigned first
    if (!currentRiddle) return; // ✅ Ensures it's valid before using it
    const riddleTexts = currentRiddle.riddles[currentDifficulty.toLowerCase()];

    riddlesContainer.innerHTML = ""; // Clear previous riddle
    wordOptions.innerHTML = ""; // 🔹 Ensures word options reset properly

    const selectedLanguages = Object.keys(languageCheckboxes).filter(
      (lang) => languageCheckboxes[lang].checked
    );

    if (selectedLanguages.length === 0) {
      riddlesContainer.innerHTML =
        "<p>Please select at least one language.</p>";
      return;
    }

    const riddleRow = document.createElement("div");
    riddleRow.classList.add("riddle-row");
    const riddleBox = document.createElement("div");

    riddleBox.classList.add("riddle-box");

    if (languageCheckboxes.romanUrdu.checked) {
      const romanText = document.createElement("p");

      romanText.textContent = riddleTexts.romanUrdu;

      romanText.classList.add("roman-text");

      riddleBox.appendChild(romanText);
    }

    if (languageCheckboxes.urdu.checked) {
      const urduText = document.createElement("p");

      urduText.textContent = riddleTexts.urdu;

      urduText.classList.add("urdu-text");

      riddleBox.appendChild(urduText);
    }

    if (languageCheckboxes.english.checked) {
      const englishText = document.createElement("p");

      englishText.textContent = riddleTexts.english;

      englishText.classList.add("english-text");

      riddleBox.appendChild(englishText);
    }

    riddleRow.appendChild(riddleBox);
    riddlesContainer.appendChild(riddleRow);
    generateWordOptions(currentRiddle.word);
  }

  function generateWordOptions(correctAnswer) {
    if (!correctAnswer) return; // ✅ Ensures correctAnswer is defined before using it
    wordOptions.innerHTML = "";

    const wordCount =
      currentDifficulty === "Easy"
        ? 3
        : currentDifficulty === "Medium"
        ? 5
        : 10;
    const words = [
      { romanUrdu: correctAnswer.romanUrdu, urdu: correctAnswer.urdu },
      ...getRandomIncorrectWords(wordCount - 1, correctAnswer),
    ];
    shuffleArray(words);
    words.forEach((word) => {
      const wordBox = document.createElement("div");
      wordBox.classList.add("word");
      wordBox.innerHTML = `<p class='roman-text'>${word.romanUrdu}</p><p class='urdu-text'>${word.urdu}</p>`; // 🔹 Inserting Roman Urdu & Urdu
      wordBox.draggable = true;
      wordBox.setAttribute("data-answer", JSON.stringify(word)); // 🔹 Storing correct answer as JSON
      wordBox.addEventListener("dragstart", dragStart);
      wordOptions.appendChild(wordBox);
    });
  }

  function getRandomIncorrectWords(count, correctAnswer) {
    const allWords = riddles
      .map((r) => ({ romanUrdu: r.word.romanUrdu, urdu: r.word.urdu })) // 🔹 Extracts only Roman Urdu & Urdu
      .filter((word) => word.romanUrdu !== correctAnswer.romanUrdu);
    shuffleArray(allWords);
    return allWords.slice(0, count);
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function dragStart(event) {
    event.dataTransfer.setData(
      "text",
      event.target.getAttribute("data-answer")
    );
  }

  dropZone.addEventListener("dragover", (event) => event.preventDefault());
  dropZone.addEventListener("drop", (event) => {
    if (!currentRiddle) return; // ✅ Prevents errors if riddle is missing

    event.preventDefault();

    const droppedWord = JSON.parse(event.dataTransfer.getData("text"));
    // const correctWord = getRandomRiddle().word;
    const correctWord = currentRiddle.word; // ✅ Uses the stored displayed riddle

    // 🔎 Checking if the dropped word matches the correct answer
    if (
      droppedWord.romanUrdu === correctWord.romanUrdu &&
      droppedWord.urdu === correctWord.urdu
    ) {
      dropZone.innerHTML = `<div class="roman">${droppedWord.romanUrdu}</div><div class="urdu">${droppedWord.urdu}</div>`;
      dropZone.classList.add("correct");

      correctSound.play(); // ✅ Play success sound
      launchConfetti(); // ✅ Launch confetti

      setTimeout(() => {
        updateRiddle();
        dropZone.textContent = "Drop the correct word here"; // ✅ Reset drop zone after 2 seconds
        dropZone.classList.remove("correct");
      }, 2000);
    } else {
      dropZone.textContent = "Try again!"; // ❌ Incorrect answer feedback
      dropZone.classList.add("incorrect");
      incorrectSound.play(); // ✅ Play incorrect sound
      setTimeout(() => {
        dropZone.classList.remove("incorrect");
      }, 300);
    }
  });

  difficultyOptions.forEach((option) => {
    option.addEventListener("change", (event) => {
      currentDifficulty = event.target.value;
      updateRiddle();
    });
  });

  Object.values(languageCheckboxes).forEach((checkbox) => {
    checkbox.addEventListener("change", updateRiddle);
  });

  updateRiddle();
});
