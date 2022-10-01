'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6ca64b8240226576910e855f26dfe8a3",
".git/config": "6ab49963272934bea3f19197c7a04e6c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ba9ce0a03fb829cdf4e325dd41a63791",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9639fb952beb0f4c9a493f7546144379",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4fc5fad48a9df1371ff6dbb1c0d98f8b",
".git/logs/refs/heads/master": "4fc5fad48a9df1371ff6dbb1c0d98f8b",
".git/logs/refs/remotes/origin/master": "c34f4b914d3808bdca325bb327c2fedf",
".git/objects/01/0fca3e742ea14d06fa1f8b5d55a973987fd964": "f0839e398fae1d897517efd1aa99a356",
".git/objects/0a/2efed7e20508674c57c71d977a71eb29fd7aca": "8e69aea1de7f6d02c604312bdc9edb83",
".git/objects/0b/2e75ff13967c24d0c5e90be6cc0a9f59d6a304": "069f4b9b4d0c6fab944cf8f121fe3557",
".git/objects/0d/f3a76d686c11410fa74db24c3488c38d91ead1": "2de926e7a9e22cf3d290f8bc7cb75f93",
".git/objects/10/042d9d807d6b6a3660c4e21ff987316f7f87f2": "d4827075f4eb9c20d7609ace032fe94a",
".git/objects/10/3e673f5145a279c9ca8ad5748cb00f52e313b2": "fbb0ad6cfe5de5b0963cf0ed41c1aedf",
".git/objects/17/58043aa9577ac9aa9dbfa5dfbc17e688931bf7": "0d173a320e8641c02bd2fc0662517e67",
".git/objects/19/2d95975e413ba0f32e987b993e673615003609": "9cb98555df2c8902236f01111f8b5fb5",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1f/380f9e639a4bf53461d2bb968415aa340b023e": "02e3e75611cb872ab2eb352eecb1873a",
".git/objects/26/8d6f3146dbcfa8e67dbcd5494db49881ddd090": "75e2d2f3ed7238c38adb91614315fbf3",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/30/b740a1d843fcc3dda286064c7326fe95114bcf": "ccab95dfc7c60092d07d4a5a12fbe031",
".git/objects/32/f736a491681f081749fb45f477a439249a343f": "819672edbc81d27418d1ab43cde22ad4",
".git/objects/35/87173168eedd16674ff2664a14e78c398f9d7a": "6e15b2a41198fe74fe1ebf3e5c534dd4",
".git/objects/35/b051b0a91d29ff0a881b167a58a64cf377867b": "915713e85fdf787e73374c1b162fb5f2",
".git/objects/35/dc9ee93d9d9f7132623d7b3721f7d37308cca4": "1834ce2551150c1871bb203089be7555",
".git/objects/37/1e4538b9ac04aa9ca46e0d428b5e7391d074de": "d4c4a19ec057dc2e91160dbdf5849f0c",
".git/objects/38/3c715dd27199e23ec49118449273c3c1292942": "b3f96d6f5087507124d48ce40448d438",
".git/objects/3c/5988cf54c907e4f05577dc302b4a0cfd9eec62": "b1ea77ea5f76ecef8ded8f487510d877",
".git/objects/3f/6967cd7ada259ae4f0532c6b435c4d24f4124b": "c75cb77f7dafc42b945830faaeb5d0fb",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/42/84184ea879d6abe8a63990824c88e8ae91460d": "32ccd2a09fff686f290f541d340dadcf",
".git/objects/43/815dae2f133680b28380814d810eb812bfd968": "74bb47ac244f6bb8513d94054d977f16",
".git/objects/45/24683c475f1d550b27334cf8aa3b672b6e9b1c": "7bb6213931ace7d9772abe754c8a2fb7",
".git/objects/47/3a61871cc060c3c70433dc738520ffebe89e33": "2f81e3024cca6ea4abe14f915be16f76",
".git/objects/48/60fdd8e71fcc16f22a1bb4cb50fc338167575d": "8711ed69238f9fc692c82cdf1f536557",
".git/objects/4b/8a9c3a55db3d63d8f961581b8422d594bf6f66": "6016053c1a40a8d885a6701bd8f4115f",
".git/objects/4c/65117d833ecc6448bce489ce67ce89d7268877": "28175cab7611afd51d39a54a4157feb0",
".git/objects/4d/dc6daf428c4a1f94aaad7948556212c0d9933b": "750e5510dfdd6f8ae16725a17c3b59f8",
".git/objects/4e/2d55e0730f9acbc640283df38fc9ae1aa0d5a5": "77174ca2d82efae9b8e8a8d5d64da67b",
".git/objects/52/4a6d7a5b16050b1f6fc462ab71c7eb6b5494dd": "4da321696e448018e55d8b727a08e030",
".git/objects/52/f329e4ef3c02ebc717aa2ce59f5553ab7464f3": "4e1bf37e11ecc5435550e0e6e0e43865",
".git/objects/56/9abdfb1851f8e512444efbe540e5a6b8566b09": "1392b9a4a668bdafc45d56161458094f",
".git/objects/57/6853e1ceb3effd01bdd70c3e18eb53481b5251": "79a567b7a25b5ecff50a0c5be81fa2ed",
".git/objects/57/b9cf2c8c1dcf9b8de594d988a1fee9f9bf2d71": "6c32d5e94510c6c95ca9c7df254c0f08",
".git/objects/5a/e81b5a0da0e305cb5bae596df422f7c1dc05dc": "79a887d6c08166ff4e15a129f30aa13a",
".git/objects/5b/9cc3b65ec706586a67e7df8e730efb101e1d15": "2816eeb9da93350aad7910be6d6377d4",
".git/objects/5c/e87ccceb5afaa1e5328babb0996af7b00e2ea2": "e7179190cf1e359320dcbfdf44df1e57",
".git/objects/66/583684f4aafa87b7f992dd4059decf68c2616d": "804fa0065b338ba468132e64a6c0a5e3",
".git/objects/67/9f152a17cdc53ff18514ba7dfec7551d4969a6": "77dbf4952ffdb96e820a9de0049ddbe0",
".git/objects/6a/9c0d18e2e42f73985aef25d82f69a180c91e61": "65ddf2bd5f2537c5cb718fbad43db7b7",
".git/objects/6c/7db71eb4f7c4c69c94fd61566221f15cd4f069": "b21d3267a6b195eff69509d579561a95",
".git/objects/6e/d452e025f8f1d950b9cb7d62ee479d59eaa1c8": "ffbfd411bccf6e17f6c4156304ee8218",
".git/objects/6e/f3a48605945a71e09c6cc1ce141aa0b3f62b9d": "f2d42ef61361924403dd2d209444c110",
".git/objects/73/61d290886774e8449a426196a342fa461a9f50": "9a67e4297adc655f1bf9b36689fc937a",
".git/objects/73/cd1ac8e797d987f6fad61eaf56d941f9cdd614": "627e05d2cc2f111c7ae0b29f21bdc1ec",
".git/objects/73/f0302b117dd3ff7bfec49bcc3df8b772884ac2": "28c0a0d6de63af752467303841ddb8b6",
".git/objects/75/67d4ad0993b4db80a729c684ba66e1796da42b": "124b67c12a0766befc10cee53dac0506",
".git/objects/77/91cc7a7840c00a4c044fbd3dce46cf4b1d2274": "f9c2325ea06571d909cca641e74becfd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/64ff189a0a80de0b3781788d0540ce26da021e": "8d01abeab5939ecba065e3269071aaba",
".git/objects/7a/e780c764639f157b30fb7cf6ecf5ca581781ac": "ccf054404abd2d70bd0e789f1f476d73",
".git/objects/7b/266e9e23489006e299dca88e0a809bbc6bc33d": "6ea2f12faa83b52e2240c63885796e1e",
".git/objects/7c/291478d324663b7c2fdae48269508ea895b152": "465d6173a9cee67e68c1a1992e0010cc",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/81/8ec892529278ba1336031e8bc0ef38806efecf": "40a3b3a1961caecf05a0ddb91cca7185",
".git/objects/88/69c07a054a517fc40cb67817a3752880207b7f": "1a064a3f1fb8020d3fba95ab71724997",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/f1fe5f1d501080ec4e97744c905c6f5cc9223c": "1df112dd03b1c89fe0078091613f4442",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/885772fcbc21b1c3049a0dce5de6f0c3b8cad4": "a04601102b1b6d41f8298c601e4178d0",
".git/objects/8f/3d916e1a57571eb00f7edae4793d28a26ce680": "a372d3f027a8f44db36550191d492bb8",
".git/objects/8f/71e19aa34e7f37ca43b7544606776416ede55a": "fe76d9b8feb1d4f38b48780a251e6e6d",
".git/objects/90/f886c3d1e4abf1bb20b4c739073324be4960b2": "fa90944db6aa635a7ce0210057326e65",
".git/objects/91/8c58ebf3bbae22e9068846cc0cfb33c5ae569f": "307c4bdc011f30037199599bfc0d1e90",
".git/objects/91/cf338e839ea7bd0fdc0939e91b343f7f6ea222": "19759dab2a3b3d36164a5fa7b91b404d",
".git/objects/92/a9c23dac8f5fd91c7854c0235fdc6290f2865b": "a9242ad7774cec00080c80733e33f77c",
".git/objects/93/771e7bfe74215886ac2bb0f20086d1ee6a354f": "9e007d7c2f17d7fe214c0ef1a1f0a3d5",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/56246f7acddce4457e60983446161ec5ff7a2c": "d00e65fa88fbbca2c5ace636231e4d35",
".git/objects/a1/e469d1ffd13f95a03f46d3a4f0ddbe7a61e016": "fc37be315daa22526d4f47646e960660",
".git/objects/a4/6aca1a940387923cba1e523baec9bd1da9c0d8": "b9737087452288cf6de7560730fad767",
".git/objects/a4/a81c115476437fc222dd645110b9ca724c824a": "29d7822aae358c2937c5b32876e94e42",
".git/objects/a7/9c81ef3c7f3b4c84756d093ea2d2f2fa6d335e": "269d31e5be2ded2f9622821993428736",
".git/objects/a8/9c245582e60d2253871b222ca541e6f5239a82": "6401f4663726729b76034d8888ec5d01",
".git/objects/a8/bc43ce1375cc1fc525a2977f87fb6e1a2ab6bf": "de4447c81959ea210704344cc0aa23f4",
".git/objects/a8/d09b6a881ebeffb4d380aed61f46abe290940c": "31013e90dd064ef13ae52f8cae31a2ef",
".git/objects/aa/1790b229992717c634ceb9ab509e204527c564": "9a575bcd38da48f92a6aeef74b8a47ce",
".git/objects/af/5a7f554c161e278207a4b2299d466f3acd8de7": "2628e9f51b17233b34549f6987f88ab2",
".git/objects/b0/7e143cbd6221953ac18e560b9de3763ca554d6": "fb65a5798412ed3461f8f631fca449c8",
".git/objects/b0/e0f8f4e67ce367be5590368190ca3fa409c7ab": "a038d8b38bd17c0788371ef9b8927664",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/ab6d97db303b138ecd0085ad7a03d261670d7d": "f50331095dd283779e05dea84ac08666",
".git/objects/bd/ef4dc8dd3920fe6f09c764b49e50b6a14e3901": "6326f40aedb4d6fec1fd5d92afc86d80",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/bf/6df52b129b571d93b5c8c52c86e0696011672d": "f9da0178986f223ca537bb8f8c071a20",
".git/objects/c1/2c20fc0aed294fda3ed218cf94435f810acbf0": "1b18941757ad3ea1adbfa680fb5b8916",
".git/objects/c6/17ac8164b1b92d7f95923b4c38883afb224338": "f0239b2401860b1c192028ac4e8a625e",
".git/objects/c6/63afee9aa1321c95e9a5fea09a603126c1b723": "e7d9766b19edf17b2d9dbc641d8611ba",
".git/objects/ca/930fe09a43e1f68f308e2099fc8d701c3a6fb0": "40ae9c11345d584492571bfa07ae731e",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/794072fe21d46585aa0d57c0b1e79fd0ce5193": "7ebe625534a1ee5978ec832f82143387",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/c956a8bed44e0d47824aced8a8b6d58ec35b03": "fdf734d2dd173ed5089b3cba7407292c",
".git/objects/ce/5f8ffe55ae4445328aab98bc292a431f489efd": "57afd7d190b4be17b1a693dfa5cc21b1",
".git/objects/d5/66fe93f9cd07ceaab2df1b46f9dda845691a88": "8f885651525ca0308c0beeaf746a1f8d",
".git/objects/d5/fca343458f5bd1f73199b36f13ed4122616553": "dd9e54df5165f2fcec0fe4f860b9eeb9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/1a6e1b5535106e41b502f7583d38e847a01411": "8ec25caf517a08905b6578fddf37e9f3",
".git/objects/d7/a5c7179c7bcae24018d179c8b74497db68db4f": "5b1bb7eb432b9e79b41876d982b0f4b2",
".git/objects/d7/a796ba6086efff6eb38f51ba4247da13726d04": "240cf07147ce84fb2149413519008941",
".git/objects/d8/db3f0033566ab9b05cf823fe0f365f44ff5eb9": "87d074dc9170047e268405c2b1eb7358",
".git/objects/dd/a82853a1ced71f5e1d1aeeaffd43d6740b9bec": "f555e4d3e05a1d68738428c33a556311",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e3/4f7d63860d2203c74aafdaa06cc2f24ccccb38": "e54b1c02ae82a53d84416e5f09d0a686",
".git/objects/e3/eec2e326c4ab8bd4e79604a893262bcc71fae0": "aa631d7d7066bc17264f39b01717a166",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/eabc1881f3b66c0d7309026e44da97bb94432b": "eea350362ceaa80422258d4b8cff6de9",
".git/objects/ea/4be5530cfa8adc378b56ac328583d456cd1d83": "2038fba70be55db8f127385727681887",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/52c601a17a2e2bee7480b290aa1e46bd4a32f9": "efb8ac2e4a366f459c2a89232da37642",
".git/objects/ee/55a4562c4e18ada3610d12153a8af29aba6ed1": "6d116035296e3d5338608cd9f515a1d4",
".git/objects/ef/b9ae933a1b0cb83906e43b0dde2e2e36d73019": "efe9c0a7402d45b14963f5d0df2b42a6",
".git/objects/ef/c5ba94e0e3ab324039f5ef395cf15c2c903835": "e1ff61cfc02b0acfe206240ea285d703",
".git/objects/f5/5e08ff8b0599c6f032e119aa759d5d3771fb83": "21dc9fa3362ee7cf5124fccd07cdfa32",
".git/objects/f6/9acf189083423a166b994131d47d20d0f51bc7": "74761fc7f97e34aeae45042bafe01e4d",
".git/objects/f6/ee0e610e5f5e6143a9d5722d1fd82123c94f21": "3034c61251d5ef61444e97959fe582c3",
".git/objects/fb/2f4721f1d385e3d2369b80a832842d853edb25": "c05646ccff855539eba8b028ccff192c",
".git/objects/fd/117be074e3222f9a2df34e85f26f19b229b19f": "baca611bb2d41db28b65143293dae85c",
".git/objects/fd/200063eaf4380748d1ef6f1acfa8c4041f4187": "9342e92fb5ca059c75d967ce4d7c8b3f",
".git/ORIG_HEAD": "584496642b4a3d6529d41e6c4f8d474e",
".git/refs/heads/master": "584496642b4a3d6529d41e6c4f8d474e",
".git/refs/remotes/origin/master": "4791d4178b33d49ddef3a9efdd433090",
"assets/AssetManifest.json": "6fca242f92ad2910c2148e1c6f61be62",
"assets/assets/images/atoz_eight.png": "6c32e6b9505029cc470c310686a24b15",
"assets/assets/images/atoz_five.png": "9fb9af938c9e189ceb12bf6b16756ec3",
"assets/assets/images/atoz_four.png": "a79df79668fb752a9bf962f266892c49",
"assets/assets/images/atoz_one.png": "0dc7fa2985b3e07d2378e0c1b166e255",
"assets/assets/images/atoz_seven.png": "abed5a383fd2d7329e810b5be05a55f6",
"assets/assets/images/atoz_six.png": "1f15f94196a14710d70e6a6f1c7d434d",
"assets/assets/images/atoz_three.png": "1a40d5b47ecaa6c55731d50fc6d57041",
"assets/assets/images/atoz_two.png": "78cda633ee3cd92a563ed0f88beeff6d",
"assets/assets/images/helex.png": "5065e6df347d5a6c9d6f2c18f564cc14",
"assets/assets/images/step_counter.png": "65f05762dc58960245d254e186280cfa",
"assets/assets/images/tictactoe.png": "3edf5b08962f0cc70ce68099bb7d5491",
"assets/assets/images/todo_one.png": "4d6747dd900e8e00b64260ca4fdb9892",
"assets/assets/images/todo_two.png": "2460903bb1aafae70d99f27895589ae6",
"assets/favicon.png": "f308cd3bea97fa45865fb695693e4ad3",
"assets/FontManifest.json": "760cc3770462a4d4092771fcdf1361d4",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "30084f9ae3a83cc7e9ccbd52c553b6ad",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "a71dbd49ad4a52020638190e30ac52e0",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "753221fa821d8b0d2655f7cb01c60220",
"/": "753221fa821d8b0d2655f7cb01c60220",
"main.dart.js": "cc1b791af5aa214feec3f1cfe976ab29",
"manifest.json": "580c4a4263273be38d8fc71fb12f8f0d",
"version.json": "e59fbd3fbc258d6916ee6cf303a4aa2c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
