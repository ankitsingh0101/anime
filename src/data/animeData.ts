export interface Character {
  id: string;
  name: string;
  abilities: string[];
  strength: number;
  quote: string;
  image: string; // <--- added
}

export interface Anime {
  id: string;
  title: string;
  description: string;
  episodes: number;
  seasons: number;
  color: "orange" | "purple" | "green";
  image: string;
  characters: Character[];
}

/* ----------------------------------------------
   NARUTO CHARACTERS
---------------------------------------------- */

const narutoCharacters: Character[] = [
  { id: "n1", name: "Naruto Uzumaki", abilities: ["Rasengan", "Shadow Clone Jutsu", "Sage Mode", "Nine-Tails Chakra Mode"], strength: 10, quote: "I'm not gonna run away. I never go back on my word!", image: "/Images/Characters/nrt/naruto-uzumaki.jpg" },
  { id: "n2", name: "Sasuke Uchiha", abilities: ["Sharingan", "Chidori", "Amaterasu", "Susanoo"], strength: 10, quote: "I have long since closed my eyes... My only goal is in the darkness.", image: "/Images/Characters/nrt/sasuke-uchiha.jpg" },
  { id: "n3", name: "Kakashi Hatake", abilities: ["Sharingan", "Lightning Blade", "Kamui", "Copy Ninja"], strength: 9, quote: "In the ninja world, those who break the rules are scum...", image: "/Images/Characters/nrt/kakashi-hatake.jpg" },
  { id: "n4", name: "Itachi Uchiha", abilities: ["Mangekyo Sharingan", "Tsukuyomi", "Amaterasu", "Susanoo"], strength: 10, quote: "You don't become the Hokage to be acknowledged...", image: "/Images/Characters/nrt/itachi-uchiha.jpg" },
  { id: "n5", name: "Sakura Haruno", abilities: ["Super Strength", "Medical Ninjutsu", "Byakugou Seal", "Chakra Control"], strength: 8, quote: "I'm not going to be a burden anymore...", image: "/Images/Characters/nrt/sakura-haruno.jpg" },
  { id: "n6", name: "Gaara", abilities: ["Sand Manipulation", "Sand Shield", "Sand Burial", "Shukaku"], strength: 9, quote: "A person's worth is not determined by how they are born...", image: "/Images/Characters/nrt/gaara.jpg" },
  { id: "n7", name: "Rock Lee", abilities: ["Eight Gates", "Leaf Hurricane", "Drunken Fist", "Taijutsu Master"], strength: 8, quote: "A genius who works hard is the scariest kind.", image: "/Images/Characters/nrt/rock-lee.jpg" },
  { id: "n8", name: "Hinata Hyuga", abilities: ["Byakugan", "Gentle Fist", "Twin Lion Fists", "Protective 64 Palms"], strength: 7, quote: "I will never give up. That is my ninja way!", image: "/Images/Characters/nrt/hinata-hyuga.jpg" },
  { id: "n9", name: "Shikamaru Nara", abilities: ["Shadow Possession", "Shadow Stitching", "Strategic Genius", "Shadow Strangle"], strength: 7, quote: "It's not because I'm lazy...", image: "/Images/Characters/nrt/shikamaru-nara.jpg" },
  { id: "n10", name: "Jiraiya", abilities: ["Sage Mode", "Rasengan", "Toad Summoning", "Barrier Jutsu"], strength: 9, quote: "A person grows up when they are able to overcome hardships.", image: "/Images/Characters/nrt/jiraiya.jpg" },
  { id: "n11", name: "Tsunade", abilities: ["Super Strength", "Medical Ninjutsu", "Byakugou Seal", "Slug Summoning"], strength: 9, quote: "I am a descendant of the First Hokage.", image: "/Images/Characters/nrt/tsunade.jpg" },
  { id: "n12", name: "Orochimaru", abilities: ["Snake Summoning", "Body Transfer", "Edo Tensei", "Immortality Jutsu"], strength: 9, quote: "I want to obtain all the jutsu in the world.", image: "/Images/Characters/nrt/orochimaru.jpg" },
  { id: "n13", name: "Minato Namikaze", abilities: ["Flying Thunder God", "Rasengan", "Sealing Jutsu", "Yellow Flash"], strength: 10, quote: "When a father has to protect his son...", image: "/Images/Characters/nrt/minato-namikaze.jpg" },
  { id: "n14", name: "Obito Uchiha", abilities: ["Kamui", "Mangekyo Sharingan", "Wood Style", "Six Paths Power"], strength: 10, quote: "Those who abandon their friends are worse than scum.", image: "/Images/Characters/nrt/obito-uchiha.jpg" },
  { id: "n15", name: "Madara Uchiha", abilities: ["Eternal Mangekyo Sharingan", "Susanoo", "Rinnegan", "Infinite Tsukuyomi"], strength: 10, quote: "Wake up to reality!", image: "/Images/Characters/nrt/madara-uchiha.jpg" },
  { id: "n16", name: "Neji Hyuga", abilities: ["Byakugan", "Gentle Fist", "Revolving Heaven", "64 Palms"], strength: 8, quote: "People are judged by their true nature.", image: "/Images/Characters/nrt/neji-hyuga.jpg" },
  { id: "n17", name: "Killer Bee", abilities: ["Eight-Tails", "Seven Swords Style", "Tailed Beast Bomb", "Lariat"], strength: 9, quote: "I'm the rap master!", image: "/Images/Characters/nrt/killer-bee.jpg" },
  { id: "n18", name: "Pain / Nagato", abilities: ["Rinnegan", "Six Paths", "Almighty Push", "Planetary Devastation"], strength: 10, quote: "Do you understand pain?", image: "/Images/Characters/nrt/pain-nagato.jpg" },
  { id: "n19", name: "Might Guy", abilities: ["Eight Gates", "Night Guy", "Evening Elephant", "Morning Peacock"], strength: 10, quote: "The power of youth!", image: "/Images/Characters/nrt/might-guy.jpg" },
  { id: "n20", name: "Hashirama Senju", abilities: ["Wood Style", "Sage Mode", "Healing", "Thousand Hands"], strength: 10, quote: "I'll do whatever it takes to protect the village!", image: "/Images/Characters/nrt/hashirama-senju.jpg" },
  { id: "n21", name: "Tobirama Senju", abilities: ["Water Style", "Flying Thunder God", "Edo Tensei", "Shadow Clone"], strength: 9, quote: "Senju and Uchiha are two sides of the same coin.", image: "/Images/Characters/nrt/tobirama-senju.jpg" },
  { id: "n22", name: "Kabuto Yakushi", abilities: ["Medical Ninjutsu", "Sage Mode", "Edo Tensei", "Body Modification"], strength: 8, quote: "I want to find out who I really am.", image: "/Images/Characters/nrt/kabuto-yakushi.jpg" },
  { id: "n23", name: "Konan", abilities: ["Paper Jutsu", "Paper Ocean", "Explosive Tags"], strength: 8, quote: "Yahiko's will shall not die.", image: "/Images/Characters/nrt/konan.jpg" },
  { id: "n24", name: "Deidara", abilities: ["Explosive Clay", "C1-C4 Bombs", "Clay Dragon"], strength: 8, quote: "Art is an explosion!", image: "/Images/Characters/nrt/deidara.jpg" },
  { id: "n25", name: "Sasori", abilities: ["Puppet Master", "Iron Sand", "Poison"], strength: 8, quote: "True art lasts forever.", image: "/Images/Characters/nrt/sasori.jpg" },
];

/* ----------------------------------------------
   JJK CHARACTERS
---------------------------------------------- */

const jjkCharacters: Character[] = [
  { id: "j1", name: "Yuji Itadori", abilities: ["Divergent Fist", "Black Flash", "Sukuna Vessel"], strength: 8, quote: "I don't want to regret the way I live!", image: "/Images/Characters/jjk/yuji-itadori.jpg" },
  { id: "j2", name: "Gojo Satoru", abilities: ["Infinity", "Limitless", "Six Eyes"], strength: 10, quote: "I alone am the honored one.", image: "/Images/Characters/jjk/gojo-satoru.jpg" },
  { id: "j3", name: "Megumi Fushiguro", abilities: ["Ten Shadows", "Domain"], strength: 8, quote: "I want to save people I think are good.", image: "/Images/Characters/jjk/megumi-fushiguro.jpg" },
  { id: "j4", name: "Ryomen Sukuna", abilities: ["Malevolent Shrine", "Cleave"], strength: 10, quote: "Know your place, fool.", image: "/Images/Characters/jjk/ryomen-sukuna.jpg" },
  { id: "j5", name: "Nobara Kugisaki", abilities: ["Straw Doll", "Resonance"], strength: 7, quote: "I'm perfect the way I am!", image: "/Images/Characters/jjk/nobara-kugisaki.jpg" },
  { id: "j6", name: "Toge Inumaki", abilities: ["Cursed Speech"], strength: 7, quote: "Salmon.", image: "/Images/Characters/jjk/toge-inumaki.jpg" },
  { id: "j7", name: "Maki Zenin", abilities: ["Cursed Tools", "Heavenly Restriction"], strength: 9, quote: "I'll destroy the Zenin clan.", image: "/Images/Characters/jjk/maki-zenin.jpg" },
  { id: "j8", name: "Panda", abilities: ["Gorilla Mode"], strength: 7, quote: "I'm not a panda!", image: "/Images/Characters/jjk/panda.jpg" },
  { id: "j9", name: "Todo Aoi", abilities: ["Boogie Woogie"], strength: 8, quote: "What kind of woman is your type?", image: "/Images/Characters/jjk/todo-aoi.jpg" },
  { id: "j10", name: "Nanami Kento", abilities: ["Ratio Technique"], strength: 8, quote: "I hate overtime.", image: "/Images/Characters/jjk/nanami-kento.jpg" },
  { id: "j11", name: "Yuta Okkotsu", abilities: ["Rika"], strength: 10, quote: "I want to live confidently.", image: "/Images/Characters/jjk/yuta-okkotsu.jpg" },
  { id: "j12", name: "Choso", abilities: ["Blood Manipulation"], strength: 8, quote: "I am your brother, Yuji.", image: "/Images/Characters/jjk/choso.jpg" },
  { id: "j13", name: "Mahito", abilities: ["Idle Transfiguration"], strength: 9, quote: "What is a soul?", image: "/Images/Characters/jjk/mahito.jpg" },
  { id: "j14", name: "Jogo", abilities: ["Disaster Flames"], strength: 8, quote: "We are the true humans!", image: "/Images/Characters/jjk/jogo.jpg" },
  { id: "j15", name: "Hanami", abilities: ["Disaster Plants"], strength: 8, quote: "Nature weeps.", image: "/Images/Characters/jjk/hanami.jpg" },
  { id: "j16", name: "Toji Fushiguro", abilities: ["Heavenly Restriction"], strength: 9, quote: "Go with the flow.", image: "/Images/Characters/jjk/toji-fushiguro.jpg" },
  { id: "j17", name: "Mei Mei", abilities: ["Bird Strike"], strength: 7, quote: "Money rules all.", image: "/Images/Characters/jjk/mei-mei.jpg" },
  { id: "j18", name: "Kamo Noritoshi", abilities: ["Blood Manipulation"], strength: 7, quote: "I will prove myself.", image: "/Images/Characters/jjk/kamo-noritoshi.jpg" },
  { id: "j19", name: "Miwa Kasumi", abilities: ["Simple Domain"], strength: 5, quote: "I just want to help!", image: "/Images/Characters/jjk/miwa-kasumi.jpg" },
  { id: "j20", name: "Geto Suguru", abilities: ["Cursed Spirit Manipulation"], strength: 9, quote: "Monkeys should die.", image: "/Images/Characters/jjk/geto-suguru.jpg" },
  { id: "j21", name: "Naoya Zenin", abilities: ["Projection Sorcery"], strength: 8, quote: "I am the rightful heir.", image: "/Images/Characters/jjk/naoya-zenin.jpg" },
  { id: "j22", name: "Yuki Tsukumo", abilities: ["Star Rage"], strength: 9, quote: "A world without curses.", image: "/Images/Characters/jjk/yuki-tsukumo.jpg" },
  { id: "j23", name: "Hakari Kinji", abilities: ["Jackpot"], strength: 9, quote: "When I'm on a roll...", image: "/Images/Characters/jjk/hakari-kinji.jpg" },
  { id: "j24", name: "Kashimo Hajime", abilities: ["Electrification"], strength: 9, quote: "A 400-year wait ends.", image: "/Images/Characters/jjk/kashimo-hajime.jpg" },
  { id: "j25", name: "Uraume", abilities: ["Ice Manipulation"], strength: 8, quote: "Sukuna's will be done.", image: "/Images/Characters/jjk/uraume.jpg" },
];

/* ----------------------------------------------
   MHA CHARACTERS
---------------------------------------------- */

const mhaCharacters: Character[] = [
  { id: "m1", name: "Izuku Midoriya", abilities: ["One For All"], strength: 9, quote: "I’ll do my best!", image: "/Images/Characters/mha/izuku-midoriya.jpg" },
  { id: "m2", name: "Katsuki Bakugo", abilities: ["Explosion"], strength: 9, quote: "I'll surpass you!", image: "/Images/Characters/mha/katsuki-bakugo.jpg" },
  { id: "m3", name: "Shoto Todoroki", abilities: ["Half-Cold Half-Hot"], strength: 9, quote: "I will rise.", image: "/Images/Characters/mha/shoto-todoroki.jpg" },
  { id: "m4", name: "All Might", abilities: ["One For All"], strength: 10, quote: "I am here!", image: "/Images/Characters/mha/all-might.jpg" },
  { id: "m5", name: "Ochaco Uraraka", abilities: ["Zero Gravity"], strength: 7, quote: "I’ll save people with a smile!", image: "/Images/Characters/mha/ochaco-uraraka.jpg" },
  { id: "m6", name: "Tenya Iida", abilities: ["Engine"], strength: 7, quote: "As class president…", image: "/Images/Characters/mha/tenya-iida.jpg" },
  { id: "m7", name: "Fumikage Tokoyami", abilities: ["Dark Shadow"], strength: 8, quote: "Revelry in the dark.", image: "/Images/Characters/mha/fumikage-tokoyami.jpg" },
  { id: "m8", name: "Eijiro Kirishima", abilities: ["Hardening"], strength: 7, quote: "I will be strong!", image: "/Images/Characters/mha/eijiro-kirishima.jpg" },
  { id: "m9", name: "Momo Yaoyorozu", abilities: ["Creation"], strength: 7, quote: "Believe in yourself!", image: "/Images/Characters/mha/momo-yaoyorozu.jpg" },
  { id: "m10", name: "Tsuyu Asui", abilities: ["Frog"], strength: 6, quote: "Ribbit.", image: "/Images/Characters/mha/tsuyu-asui.jpg" },
  { id: "m11", name: "Denki Kaminari", abilities: ["Electrification"], strength: 6, quote: "Too cool!", image: "/Images/Characters/mha/denki-kaminari.jpg" },
  { id: "m12", name: "Shota Aizawa", abilities: ["Erasure"], strength: 8, quote: "Go home.", image: "/Images/Characters/mha/shota-aizawa.jpg" },
  { id: "m13", name: "Endeavor", abilities: ["Hellflame"], strength: 9, quote: "Watch me.", image: "/Images/Characters/mha/endeavor.jpg" },
  { id: "m14", name: "Hawks", abilities: ["Fierce Wings"], strength: 8, quote: "Too much free time…", image: "/Images/Characters/mha/hawks.jpg" },
  { id: "m15", name: "Tomura Shigaraki", abilities: ["Decay"], strength: 10, quote: "I'll destroy everything.", image: "/Images/Characters/mha/tomura-shigaraki.jpg" },
  { id: "m16", name: "Dabi", abilities: ["Cremation"], strength: 8, quote: "That's all you need to know.", image: "/Images/Characters/mha/dabi.jpg" },
  { id: "m17", name: "Himiko Toga", abilities: ["Transform"], strength: 7, quote: "I love who I love!", image: "/Images/Characters/mha/himiko-toga.jpg" },
  { id: "m18", name: "Twice", abilities: ["Double"], strength: 7, quote: "I'm me!", image: "/Images/Characters/mha/twice.jpg" },
  { id: "m19", name: "Overhaul", abilities: ["Overhaul"], strength: 9, quote: "Restore the yakuza.", image: "/Images/Characters/mha/overhaul.jpg" },
  { id: "m20", name: "Mirio Togata", abilities: ["Permeation"], strength: 9, quote: "I'll save a million!", image: "/Images/Characters/mha/mirio-togata.jpg" },
  { id: "m21", name: "Tamaki Amajiki", abilities: ["Manifest"], strength: 8, quote: "I'm just boring…", image: "/Images/Characters/mha/tamaki-amajiki.jpg" },
  { id: "m22", name: "Nejire Hado", abilities: ["Wave Motion"], strength: 8, quote: "Tell me everything!", image: "/Images/Characters/mha/nejire-hado.jpg" },
  { id: "m23", name: "Best Jeanist", abilities: ["Fiber Master"], strength: 8, quote: "A hero must save all.", image: "/Images/Characters/mha/best-jeanist.jpg" },
  { id: "m24", name: "Midnight", abilities: ["Somnambulist"], strength: 6, quote: "Sweet dreams~", image: "/Images/Characters/mha/midnight.jpg" },
  { id: "m25", name: "Present Mic", abilities: ["Voice"], strength: 7, quote: "YEAHH!!", image: "/Images/Characters/mha/present-mic.jpg" },
];

/* ----------------------------------------------
   EXPORT FINAL LIST
---------------------------------------------- */

export const animeList: Anime[] = [
  {
    id: "naruto",
    title: "Naruto",
    description: "Follow Naruto Uzumaki, a young ninja who seeks recognition...",
    episodes: 720,
    seasons: 21,
    color: "orange",
    image: "/Images/naruto.jpg",
    characters: narutoCharacters,
  },
  {
    id: "jujutsu-kaisen",
    title: "Jujutsu Kaisen",
    description: "Yuji Itadori joins Jujutsu Sorcerers to defeat Sukuna...",
    episodes: 48,
    seasons: 2,
    color: "purple",
    image: "/Images/jujutsu-kaisen.jpg",
    characters: jjkCharacters,
  },
  {
    id: "my-hero-academia",
    title: "My Hero Academia",
    description: "In a world of quirks, Izuku Midoriya rises as a hero...",
    episodes: 138,
    seasons: 7,
    color: "green",
    image: "/Images/my-hero-academia.jpg",
    characters: mhaCharacters,
  },
];

export const getAnimeById = (id: string): Anime | undefined =>
  animeList.find((anime) => anime.id === id);
