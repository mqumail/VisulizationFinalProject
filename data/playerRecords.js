function getPlayerData(playerName) {
var AlexO=[
    {State:'Apps',freq:{Test: 345, ODIs:30, T20Is:30}},
    {State:'Mins',freq:{Test: 345, ODIs:26, T20Is:19}},
    {State:'Total',freq:{Test: 345,ODIs:812, T20Is:228}},
    {State:'OB',freq:{Test: 345,ODIs:704, T20Is:352 }},
    {State:'6YD',freq:{Test: 345,ODIs:23, T20Is:8 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 345,ODIs:30, T20Is:44 }},
    {State:'THB',freq:{Test: 345,ODIs:5, T20Is:9 }},
    {State:'FC',freq:{Test: 345,ODIs:35, T20Is:28 }},
    {State:'THI',freq:{Test: 345,ODIs:2, T20Is:0 }},
    {State:'Rating',freq:{Test: 345,ODIs:0, T20Is:0 }}
];

var Mitchell=[
    {State:'Apps',freq:{Test: 36, ODIs:68, T20Is:22}},
    {State:'Mins',freq:{Test: 68, ODIs:68, T20Is:22}},
    {State:'Total',freq:{Test: 7355,ODIs:3359, T20Is:566}},
    {State:'OB',freq:{Test: 4197,ODIs:2698, T20Is:352 }},
    {State:'6YD',freq:{Test: 148,ODIs:134, T20Is:30 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 28,ODIs:21, T20Is:19 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 50,ODIs:25, T20Is:17 }},
    {State:'THI',freq:{Test: 8,ODIs:8, T20Is:0 }},
    {State:'Rating',freq:{Test: 7,ODIs:5, T20Is:0 }}
];

var pat=[
    {State:'Apps',freq:{Test: 4, ODIs:31, T20Is:18}},
    {State:'Mins',freq:{Test: 7, ODIs:31, T20Is:18}},
    {State:'Total',freq:{Test: 906,ODIs:1566, T20Is:414}},
    {State:'OB',freq:{Test: 460,ODIs:1447, T20Is:472 }},
    {State:'6YD',freq:{Test: 19,ODIs:53, T20Is:23 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 2248,ODIs:27, T20Is:21 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:7 }},
    {State:'FC',freq:{Test: 48,ODIs:30, T20Is:18 }},
    {State:'THI',freq:{Test: 1,ODIs:3, T20Is:0 }},
    {State:'Rating',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var andrew=[
    {State:'Apps',freq:{Test: 0, ODIs:0, T20Is:5}},
    {State:'Mins',freq:{Test: 0, ODIs:0, T20Is:5}},
    {State:'Total',freq:{Test: 0,ODIs:0, T20Is:110}},
    {State:'OB',freq:{Test: 0,ODIs:0, T20Is:188 }},
    {State:'6YD',freq:{Test: 0,ODIs:0, T20Is:5 }},
    {State:'Pty',freq:{Test: 0,ODIs:0, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:0, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:0, T20Is:38 }},
    {State:'THB',freq:{Test: 0,ODIs:0, T20Is:10 }},
    {State:'FC',freq:{Test: 0,ODIs:0, T20Is:22 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var adam=[
    {State:'Apps',freq:{Test: 0, ODIs:24, T20Is:10}},
    {State:'Mins',freq:{Test: 0, ODIs:24, T20Is:10}},
    {State:'Total',freq:{Test: 0,ODIs:1162, T20Is:210}},
    {State:'OB',freq:{Test: 0,ODIs:1056, T20Is:212 }},
    {State:'6YD',freq:{Test: 0,ODIs:36, T20Is:14 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:29, T20Is:15 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:6 }},
    {State:'FC',freq:{Test: 0,ODIs:32, T20Is:15 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var josh=[
    {State:'Apps',freq:{Test: 31, ODIs:38, T20Is:7}},
    {State:'Mins',freq:{Test: 58, ODIs:37, T20Is:7}},
    {State:'Total',freq:{Test: 6557,ODIs:1952, T20Is:168}},
    {State:'OB',freq:{Test: 3039,ODIs:1527, T20Is:269 }},
    {State:'6YD',freq:{Test: 118,ODIs:64, T20Is:8 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 26,ODIs:24, T20Is:34 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:10 }},
    {State:'FC',freq:{Test: 56,ODIs:31, T20Is:21 }},
    {State:'THI',freq:{Test: 4,ODIs:1, T20Is:1 }},
    {State:'Rating',freq:{Test: 5,ODIs:3, T20Is:0 }}
];

var nathan=[
    {State:'Apps',freq:{Test: 68, ODIs:13, T20Is:1}},
    {State:'Mins',freq:{Test: 130, ODIs:13, T20Is:1}},
    {State:'Total',freq:{Test: 15952,ODIs:720, T20Is:6}},
    {State:'OB',freq:{Test: 8410,ODIs:592, T20Is:15 }},
    {State:'6YD',freq:{Test: 256,ODIs:17, T20Is:0 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 33,ODIs:35, T20Is:0 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:15 }},
    {State:'FC',freq:{Test: 62,ODIs:42, T20Is:0 }},
    {State:'THI',freq:{Test: 9,ODIs:1, T20Is:0 }},
    {State:'Rating',freq:{Test: 10,ODIs:0, T20Is:0 }}
];

var james=[
    {State:'Apps',freq:{Test: 1, ODIs:67, T20Is:24}},
    {State:'Mins',freq:{Test: 2, ODIs:65, T20Is:24}},
    {State:'Total',freq:{Test: 166,ODIs:3116, T20Is:515}},
    {State:'OB',freq:{Test: 98,ODIs:2858, T20Is:684 }},
    {State:'6YD',freq:{Test: 6,ODIs:95, T20Is:36 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 16,ODIs:30, T20Is:19 }},
    {State:'THB',freq:{Test: 4,ODIs:6, T20Is:8 }},
    {State:'FC',freq:{Test: 28,ODIs:33, T20Is:14 }},
    {State:'THI',freq:{Test: 1,ODIs:4, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:1 }}
];

var alAmin=[
    {State:'Apps',freq:{Test: 6, ODIs:14, T20Is:25}},
    {State:'Mins',freq:{Test: 9, ODIs:14, T20Is:23}},
    {State:'Total',freq:{Test: 880,ODIs:603, T20Is:476}},
    {State:'OB',freq:{Test: 460,ODIs:523, T20Is:592 }},
    {State:'6YD',freq:{Test: 6,ODIs:21, T20Is:39 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 77,ODIs:25, T20Is:15 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 147,ODIs:28, T20Is:12 }},
    {State:'THI',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var saqlain=[
    {State:'Apps',freq:{Test: 0, ODIs:0, T20Is:1}},
    {State:'Mins',freq:{Test: 0, ODIs:0, T20Is:1}},
    {State:'Total',freq:{Test: 0,ODIs:0, T20Is:21}},
    {State:'OB',freq:{Test: 0,ODIs:0, T20Is:40 }},
    {State:'6YD',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Pty',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'CRS',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Corn',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'THB',freq:{Test: 0,ODIs:0, T20Is:11 }},
    {State:'FC',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var shuvagata =[
    {State:'Apps',freq:{Test: 8, ODIs:4, T20Is:5}},
    {State:'Mins',freq:{Test: 11, ODIs:1, T20Is:4}},
    {State:'Total',freq:{Test: 846,ODIs:12, T20Is:66}},
    {State:'OB',freq:{Test: 506,ODIs:9, T20Is:71 }},
    {State:'6YD',freq:{Test: 8,ODIs:0, T20Is:2 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 63,ODIs:0, T20Is:36 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 106,ODIs:0, T20Is:33 }},
    {State:'THI',freq:{Test: 8,ODIs:8, T20Is:0 }},
    {State:'Rating',freq:{Test: 7,ODIs:5, T20Is:0 }}
];

var mashrafe=[
    {State:'Apps',freq:{Test: 36, ODIs:179, T20Is:54}},
    {State:'Mins',freq:{Test: 51, ODIs:179, T20Is:53}},
    {State:'Total',freq:{Test: 5990,ODIs:8951, T20Is:1139}},
    {State:'OB',freq:{Test: 3239,ODIs:7089, T20Is:1527 }},
    {State:'6YD',freq:{Test: 78,ODIs:232, T20Is:42 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 42,ODIs:30, T20Is:36 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:8 }},
    {State:'FC',freq:{Test: 78,ODIs:39, T20Is:27 }},
    {State:'THI',freq:{Test: 4,ODIs:6, T20Is:1 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var shafiul=[
    {State:'Apps',freq:{Test: 10, ODIs:56, T20Is:11}},
    {State:'Mins',freq:{Test: 17, ODIs:56, T20Is:11}},
    {State:'Total',freq:{Test: 1506,ODIs:2342, T20Is:220}},
    {State:'OB',freq:{Test: 822,ODIs:2294, T20Is:275 }},
    {State:'6YD',freq:{Test: 15,ODIs:63, T20Is:8 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 55,ODIs:36, T20Is:34 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:8 }},
    {State:'FC',freq:{Test: 100,ODIs:37, T20Is:28 }},
    {State:'THI',freq:{Test: 0,ODIs:4, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var taijul=[
    {State:'Apps',freq:{Test: 14, ODIs:4, T20Is:0}},
    {State:'Mins',freq:{Test: 26, ODIs:4, T20Is:0}},
    {State:'Total',freq:{Test: 3321,ODIs:222, T20Is:0}},
    {State:'OB',freq:{Test: 1737,ODIs:151, T20Is:0 }},
    {State:'6YD',freq:{Test: 52,ODIs:5, T20Is:300 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:0 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:0 }},
    {State:'Corn',freq:{Test: 33,ODIs:30, T20Is:0 }},
    {State:'THB',freq:{Test: 3,ODIs:4, T20Is:0 }},
    {State:'FC',freq:{Test: 64,ODIs:44, T20Is:0 }},
    {State:'THI',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'Rating',freq:{Test: 37,ODIs:0, T20Is:0 }}
];

var taskin=[
    {State:'Apps',freq:{Test: 4, ODIs:29, T20Is:15}},
    {State:'Mins',freq:{Test: 8, ODIs:28, T20Is:13}},
    {State:'Total',freq:{Test: 738,ODIs:1269, T20Is:269}},
    {State:'OB',freq:{Test: 565,ODIs:1203, T20Is:308 }},
    {State:'6YD',freq:{Test: 7,ODIs:43, T20Is:10 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 81,ODIs:28, T20Is:31 }},
    {State:'THB',freq:{Test: 5,ODIs:6, T20Is:7 }},
    {State:'FC',freq:{Test: 106,ODIs:30, T20Is:27 }},
    {State:'THI',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var ABC=[
    {State:'Apps',freq:{Test: 3, ODIs:14, T20Is:0}},
    {State:'Mins',freq:{Test: 4, ODIs:14, T20Is:0}},
    {State:'Total',freq:{Test: 456,ODIs:737, T20Is:0}},
    {State:'OB',freq:{Test: 228,ODIs:731, T20Is:0 }},
    {State:'6YD',freq:{Test: 2,ODIs:20, T20Is:0 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:0 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:0 }},
    {State:'Corn',freq:{Test: 114,ODIs:37, T20Is:0 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:0 }},
    {State:'FC',freq:{Test: 228,ODIs:37, T20Is:0 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var stuart=[
    {State:'Apps',freq:{Test: 108, ODIs:121, T20Is:56}},
    {State:'Mins',freq:{Test: 198, ODIs:121, T20Is:55}},
    {State:'Total',freq:{Test: 22177,ODIs:6109, T20Is:1173}},
    {State:'OB',freq:{Test: 11122,ODIs:5364, T20Is:1491 }},
    {State:'6YD',freq:{Test: 386,ODIs:178, T20Is:65 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 29,ODIs:30, T20Is:23 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 57,ODIs:34, T20Is:18 }},
    {State:'THI',freq:{Test: 14,ODIs:9, T20Is:1 }},
    {State:'Rating',freq:{Test: 15,ODIs:1, T20Is:0 }}
];

var mark=[
    {State:'Apps',freq:{Test: 10, ODIs:19, T20Is:2}},
    {State:'Mins',freq:{Test: 19, ODIs:19, T20Is:2}},
    {State:'Total',freq:{Test: 1863,ODIs:997, T20Is:42}},
    {State:'OB',freq:{Test: 1057,ODIs:896, T20Is:62 }},
    {State:'6YD',freq:{Test: 26,ODIs:21, T20Is:5 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 41,ODIs:43, T20Is:13 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:9 }},
    {State:'FC',freq:{Test: 72,ODIs:47, T20Is:8 }},
    {State:'THI',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var steven=[
    {State:'Apps',freq:{Test: 36, ODIs:69, T20Is:21}},
    {State:'Mins',freq:{Test: 66, ODIs:67, T20Is:21}},
    {State:'Total',freq:{Test: 6412,ODIs:3550, T20Is:480}},
    {State:'OB',freq:{Test: 3800,ODIs:2996, T20Is:583 }},
    {State:'6YD',freq:{Test: 125,ODIs:102, T20Is:27 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 30,ODIs:29, T20Is:22 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 51,ODIs:35, T20Is:17 }},
    {State:'THI',freq:{Test: 6,ODIs:4, T20Is:0 }},
    {State:'Rating',freq:{Test: 5,ODIs:2, T20Is:0 }}
];


var chris=[
    {State:'Apps',freq:{Test: 8, ODIs:3, T20Is:25}},
    {State:'Mins',freq:{Test: 16, ODIs:31, T20Is:25}},
    {State:'Total',freq:{Test: 1530,ODIs:1532, T20Is:534}},
    {State:'OB',freq:{Test: 752,ODIs:1521, T20Is:766 }},
    {State:'6YD',freq:{Test: 21,ODIs:43, T20Is:30 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 36,ODIs:35, T20Is:26 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'FC',freq:{Test: 73,ODIs:36, T20Is:18 }},
    {State:'THI',freq:{Test: 1,ODIs:0, T20Is:1 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var toby=[
    {State:'Apps',freq:{Test: 3, ODIs:1, T20Is:0}},
    {State:'Mins',freq:{Test: 6, ODIs:1, T20Is:0}},
    {State:'Total',freq:{Test: 404,ODIs:42, T20Is:0}},
    {State:'OB',freq:{Test: 271,ODIs:34, T20Is:0 }},
    {State:'6YD',freq:{Test: 14,ODIs:1, T20Is:0 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:0 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:0 }},
    {State:'Corn',freq:{Test: 19,ODIs:34, T20Is:0 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:0 }},
    {State:'FC',freq:{Test: 29,ODIs:42, T20Is:0 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var james=[
    {State:'Apps',freq:{Test: 128, ODIs:194, T20Is:19}},
    {State:'Mins',freq:{Test: 240, ODIs:191, T20Is:19}},
    {State:'Total',freq:{Test: 28042,ODIs:9584, T20Is:422}},
    {State:'OB',freq:{Test: 13787,ODIs:7861, T20Is:552 }},
    {State:'6YD',freq:{Test: 497,ODIs:269, T20Is:18 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 28,ODIs:29, T20Is:31 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'FC',freq:{Test: 56,ODIs:36, T20Is:23 }},
    {State:'THI',freq:{Test: 8,ODIs:8, T20Is:0 }},
    {State:'Rating',freq:{Test: 7,ODIs:5, T20Is:0 }}
];

var liam=[
    {State:'Apps',freq:{Test: 13, ODIs:57, T20Is:13}},
    {State:'Mins',freq:{Test: 25, ODIs:57, T20Is:13}},
    {State:'Total',freq:{Test: 287,ODIs:2789, T20Is:2659}},
    {State:'OB',freq:{Test: 1536,ODIs:2687, T20Is:356 }},
    {State:'6YD',freq:{Test: 41,ODIs:88, T20Is:16 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 37,ODIs:31, T20Is:22 }},
    {State:'THB',freq:{Test: 4,ODIs:6, T20Is:7 }},
    {State:'FC',freq:{Test: 65,ODIs:32, T20Is:18 }},
    {State:'THI',freq:{Test: 1,ODIs:3, T20Is:0 }},
    {State:'Rating',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var cchris=[
    {State:'Apps',freq:{Test: 18, ODIs:63, T20Is:8}},
    {State:'Mins',freq:{Test: 34, ODIs:62, T20Is:8}},
    {State:'Total',freq:{Test: 2950,ODIs:3024, T20Is:162}},
    {State:'OB',freq:{Test: 1530,ODIs:2813, T20Is:253 }},
    {State:'6YD',freq:{Test: 50,ODIs:89, T20Is:7 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 31,ODIs:32, T20Is:36 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'FC',freq:{Test: 59,ODIs:34, T20Is:23 }},
    {State:'THI',freq:{Test: 1,ODIs:8, T20Is:0 }},
    {State:'Rating',freq:{Test: 2,ODIs:2, T20Is:0 }}
];

var lliam=[
    {State:'Apps',freq:{Test: 3, ODIs:1, T20Is:4}},
    {State:'Mins',freq:{Test: 5, ODIs:1, T20Is:4}},
    {State:'Total',freq:{Test: 526,ODIs:48, T20Is:84}},
    {State:'OB',freq:{Test: 298,ODIs:70, T20Is:102 }},
    {State:'6YD',freq:{Test: 7,ODIs:2, T20Is:4 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 43,ODIs:35, T20Is:25 }},
    {State:'THB',freq:{Test: 4,ODIs:9, T20Is:7 }},
    {State:'FC',freq:{Test: 75,ODIs:24, T20Is:21 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var adil=[
    {State:'Apps',freq:{Test: 10, ODIs:49, T20Is:23}},
    {State:'Mins',freq:{Test: 18, ODIs:47, T20Is:21}},
    {State:'Total',freq:{Test: 2544,ODIs:2452, T20Is:414}},
    {State:'OB',freq:{Test: 1629,ODIs:2292, T20Is:547 }},
    {State:'6YD',freq:{Test: 38,ODIs:70, T20Is:16 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 43,ODIs:33, T20Is:34 }},
    {State:'THB',freq:{Test: 4,ODIs:6, T20Is:8 }},
    {State:'FC',freq:{Test: 67,ODIs:35, T20Is:26 }},
    {State:'THI',freq:{Test: 5,ODIs:5, T20Is:0 }},
    {State:'Rating',freq:{Test: 1,ODIs:1, T20Is:0 }}
];

var kuldeep=[
    {State:'Apps',freq:{Test: 4, ODIs:6, T20Is:1}},
    {State:'Mins',freq:{Test: 4, ODIs:5, T20Is:1}},
    {State:'Total',freq:{Test: 800,ODIs:286, T20Is:24}},
    {State:'OB',freq:{Test: 187,ODIs:189, T20Is:34 }},
    {State:'6YD',freq:{Test: 9,ODIs:10, T20Is:1 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 21,ODIs:19, T20Is:34 }},
    {State:'THB',freq:{Test: 3,ODIs:4, T20Is:9 }},
    {State:'FC',freq:{Test: 39,ODIs:29, T20Is:24 }},
    {State:'THI',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var mohammeds=[
    {State:'Apps',freq:{Test: 25, ODIs:49, T20Is:7}},
    {State:'Mins',freq:{Test: 48, ODIs:48, T20Is:77}},
    {State:'Total',freq:{Test: 4671,ODIs:2465, T20Is:142}},
    {State:'OB',freq:{Test: 2655,ODIs:2247, T20Is:250 }},
    {State:'6YD',freq:{Test: 86,ODIs:91, T20Is:8 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 31,ODIs:25, T20Is:31 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:11 }},
    {State:'FC',freq:{Test: 54,ODIs:27, T20Is:18 }},
    {State:'THI',freq:{Test: 4,ODIs:6, T20Is:0 }},
    {State:'Rating',freq:{Test: 2,ODIs:0, T20Is:0 }}
];

var ashish=[
    {State:'Apps',freq:{Test: 17, ODIs:120, T20Is:26}},
    {State:'Mins',freq:{Test: 29, ODIs:120, T20Is:26}},
    {State:'Total',freq:{Test: 3447,ODIs:5751, T20Is:566}},
    {State:'OB',freq:{Test: 1866,ODIs:4981, T20Is:729 }},
    {State:'6YD',freq:{Test: 44,ODIs:157, T20Is:34 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 42,ODIs:32, T20Is:21 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'FC',freq:{Test: 78,ODIs:37, T20Is:17 }},
    {State:'THI',freq:{Test: 2,ODIs:5, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:2, T20Is:0 }}
];

var ishant=[
    {State:'Apps',freq:{Test: 77, ODIs:80, T20Is:14}},
    {State:'Mins',freq:{Test: 136, ODIs:78, T20Is:14}},
    {State:'Total',freq:{Test: 14775,ODIs:3733, T20Is:278}},
    {State:'OB',freq:{Test: 8051,ODIs:3563, T20Is:400 }},
    {State:'6YD',freq:{Test: 218,ODIs:115, T20Is:8 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 37,ODIs:31, T20Is:50 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'FC',freq:{Test: 68,ODIs:32, T20Is:35 }},
    {State:'THI',freq:{Test: 8,ODIs:6, T20Is:0 }},
    {State:'Rating',freq:{Test: 7,ODIs:0, T20Is:0 }}
];

var jayant=[
    {State:'Apps',freq:{Test: 0, ODIs:4, T20Is:1}},
    {State:'Mins',freq:{Test: 0, ODIs:8, T20Is:1}},
    {State:'Total',freq:{Test: 0,ODIs:627, T20Is:24}},
    {State:'OB',freq:{Test: 0,ODIs:367, T20Is:8 }},
    {State:'6YD',freq:{Test: 0,ODIs:11, T20Is:1 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:33, T20Is:8 }},
    {State:'THB',freq:{Test: 0,ODIs:4, T20Is:2 }},
    {State:'FC',freq:{Test: 0,ODIs:57, T20Is:24 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var jasprit=[
    {State:'Apps',freq:{Test: 0, ODIs:20, T20Is:24}},
    {State:'Mins',freq:{Test: 0, ODIs:20, T20Is:24}},
    {State:'Total',freq:{Test: 0,ODIs:1037, T20Is:535}},
    {State:'OB',freq:{Test: 0,ODIs:811, T20Is:587 }},
    {State:'6YD',freq:{Test: 0,ODIs:39, T20Is:33 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:27, T20Is:16 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:25, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:3, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var bhuvneshwar=[
    {State:'Apps',freq:{Test: 18, ODIs:70, T20Is:17}},
    {State:'Mins',freq:{Test: 31, ODIs:69, T20Is:17}},
    {State:'Total',freq:{Test: 2718,ODIs:3392, T20Is:366}},
    {State:'OB',freq:{Test: 1345,ODIs:2769, T20Is:408 }},
    {State:'6YD',freq:{Test: 45,ODIs:70, T20Is:16 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 30,ODIs:40, T20Is:26 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 60,ODIs:48, T20Is:23 }},
    {State:'THI',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'Rating',freq:{Test: 4,ODIs:0, T20Is:0 }}
];

var umesh=[
    {State:'Apps',freq:{Test: 34, ODIs:70, T20Is:1}},
    {State:'Mins',freq:{Test: 66, ODIs:68, T20Is:1}},
    {State:'Total',freq:{Test: 5598,ODIs:3259, T20Is:18}},
    {State:'OB',freq:{Test: 3378,ODIs:3219, T20Is:24 }},
    {State:'6YD',freq:{Test: 94,ODIs:98, T20Is:1 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 36,ODIs:33, T20Is:24 }},
    {State:'THB',freq:{Test: 4,ODIs:6, T20Is:8 }},
    {State:'FC',freq:{Test: 60,ODIs:33, T20Is:18 }},
    {State:'THI',freq:{Test: 4,ODIs:3, T20Is:0 }},
    {State:'Rating',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var yuzvendra=[
    {State:'Apps',freq:{Test: 0, ODIs:6, T20Is:6}},
    {State:'Mins',freq:{Test: 0, ODIs:6, T20Is:6}},
    {State:'Total',freq:{Test: 0,ODIs:324, T20Is:144}},
    {State:'OB',freq:{Test: 0,ODIs:229, T20Is:174 }},
    {State:'6YD',freq:{Test: 0,ODIs:10, T20Is:11 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:23, T20Is:16 }},
    {State:'THB',freq:{Test: 0,ODIs:4, T20Is:7 }},
    {State:'FC',freq:{Test: 50,ODIs:32, T20Is:13 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:1 }}
];

var amitm=[
    {State:'Apps',freq:{Test: 22, ODIs:36, T20Is:10}},
    {State:'Mins',freq:{Test: 40, ODIs:34, T20Is:10}},
    {State:'Total',freq:{Test: 5103,ODIs:1917, T20Is:228}},
    {State:'OB',freq:{Test: 2715,ODIs:1511, T20Is:240 }},
    {State:'6YD',freq:{Test: 76,ODIs:64, T20Is:16 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 28,ODIs:21, T20Is:19 }},
    {State:'THB',freq:{Test: 36,ODIs:24, T20Is:15 }},
    {State:'FC',freq:{Test: 3,ODIs:5, T20Is:6 }},
    {State:'THI',freq:{Test: 67,ODIs:29, T20Is:14 }},
    {State:'Rating',freq:{Test: 2,ODIs:2, T20Is:0 }}
];

var alexc=[
    {State:'Apps',freq:{Test: 0, ODIs:59, T20Is:37}},
    {State:'Mins',freq:{Test: 0, ODIs:52, T20Is:33}},
    {State:'Total',freq:{Test: 0,ODIs:1953, T20Is:606}},
    {State:'OB',freq:{Test: 0,ODIs:1510, T20Is:714 }},
    {State:'6YD',freq:{Test: 0,ODIs:63, T20Is:35 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:24, T20Is:20 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:31, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:1, T20Is:3 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var stuart=[
    {State:'Apps',freq:{Test: 0, ODIs:20, T20Is:20}},
    {State:'Mins',freq:{Test: 0, ODIs:16, T20Is:12}},
    {State:'Total',freq:{Test: 0,ODIs:559, T20Is:171}},
    {State:'OB',freq:{Test: 0,ODIs:490, T20Is:226 }},
    {State:'6YD',freq:{Test: 0,ODIs:12, T20Is:6 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:41, T20Is:38 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:8 }},
    {State:'FC',freq:{Test: 0,ODIs:47, T20Is:29 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var barry=[
    {State:'Apps',freq:{Test: 0, ODIs:13, T20Is:2}},
    {State:'Mins',freq:{Test: 0, ODIs:13, T20Is:2}},
    {State:'Total',freq:{Test: 0,ODIs:638, T20Is:48}},
    {State:'OB',freq:{Test: 0,ODIs:687, T20Is:102 }},
    {State:'6YD',freq:{Test: 0,ODIs:25, T20Is:4 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:28, T20Is:26 }},
    {State:'THB',freq:{Test: 0,ODIs:6, T20Is:13 }},
    {State:'FC',freq:{Test: 0,ODIs:26, T20Is:12 }},
    {State:'THI',freq:{Test: 0,ODIs:2, T20Is:1 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var timm=[
    {State:'Apps',freq:{Test: 0, ODIs:33, T20Is:14}},
    {State:'Mins',freq:{Test: 0, ODIs:32, T20Is:14}},
    {State:'Total',freq:{Test: 0,ODIs:1650, T20Is:268}},
    {State:'OB',freq:{Test: 0,ODIs:1313, T20Is:324 }},
    {State:'6YD',freq:{Test: 0,ODIs:34, T20Is:13 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:39, T20Is:25 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:49, T20Is:21 }},
    {State:'THI',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var george=[
    {State:'Apps',freq:{Test: 0, ODIs:68, T20Is:46}},
    {State:'Mins',freq:{Test: 0, ODIs:66, T20Is:42}},
    {State:'Total',freq:{Test: 0,ODIs:3284, T20Is:856}},
    {State:'OB',freq:{Test: 0,ODIs:2507, T20Is:927 }},
    {State:'6YD',freq:{Test: 0,ODIs:71, T20Is:52 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:5, T20Is:6 }},
    {State:'THB',freq:{Test: 0,ODIs:46, T20Is:16 }},
    {State:'FC',freq:{Test: 0,ODIs:5, T20Is:6 }},
    {State:'THI',freq:{Test: 0,ODIs:3, T20Is:1 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var boyd=[
    {State:'Apps',freq:{Test: 1, ODIs:46, T20Is:26}},
    {State:'Mins',freq:{Test: 2, ODIs:44, T20Is:25}},
    {State:'Total',freq:{Test: 125,ODIs:2139, T20Is:522}},
    {State:'OB',freq:{Test: 81,ODIs:1763, T20Is:537 }},
    {State:'6YD',freq:{Test: 1,ODIs:56, T20Is:28 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 81,ODIs:31, T20Is:19 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:6 }},
    {State:'FC',freq:{Test: 125,ODIs:38, T20Is:19 }},
    {State:'THI',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var maxs=[
    {State:'Apps',freq:{Test: 0, ODIs:13, T20Is:26}},
    {State:'Mins',freq:{Test: 0, ODIs:12, T20Is:22}},
    {State:'Total',freq:{Test: 0,ODIs:543, T20Is:390}},
    {State:'OB',freq:{Test: 0,ODIs:520, T20Is:471 }},
    {State:'6YD',freq:{Test: 0,ODIs:16, T20Is:26 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:32, T20Is:19 }},
    {State:'THB',freq:{Test: 0,ODIs:6, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:34, T20Is:15 }},
    {State:'THI',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var craig=[
    {State:'Apps',freq:{Test: 0, ODIs:13, T20Is:26}},
    {State:'Mins',freq:{Test: 0, ODIs:12, T20Is:22}},
    {State:'Total',freq:{Test: 0,ODIs:543, T20Is:390}},
    {State:'OB',freq:{Test: 0,ODIs:520, T20Is:471 }},
    {State:'6YD',freq:{Test: 0,ODIs:16, T20Is:26 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:33, T20Is:18 }},
    {State:'THB',freq:{Test: 0,ODIs:6, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:34, T20Is:15 }},
    {State:'THI',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var peterc=[
    {State:'Apps',freq:{Test: 0, ODIs:18, T20Is:0}},
    {State:'Mins',freq:{Test: 0, ODIs:17, T20Is:0}},
    {State:'Total',freq:{Test: 0,ODIs:878, T20Is:0}},
    {State:'OB',freq:{Test: 0,ODIs:1020, T20Is:0 }},
    {State:'6YD',freq:{Test: 0,ODIs:25, T20Is:0 }},
    {State:'Pty',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'CRS',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Corn',freq:{Test: 0,ODIs:41, T20Is:0 }},
    {State:'THB',freq:{Test: 0,ODIs:7, T20Is:0 }},
    {State:'FC',freq:{Test: 0,ODIs:35, T20Is:0 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var andym=[
    {State:'Apps',freq:{Test: 0, ODIs:22, T20Is:19}},
    {State:'Mins',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Total',freq:{Test: 0,ODIs:1044, T20Is:174}},
    {State:'OB',freq:{Test: 0,ODIs:835, T20Is:216 }},
    {State:'6YD',freq:{Test: 0,ODIs:22, T20Is:13 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:38, T20Is:17 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:47, T20Is:13 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var jacob=[
    {State:'Apps',freq:{Test: 0, ODIs:4, T20Is:8}},
    {State:'Mins',freq:{Test: 0, ODIs:4, T20Is:8}},
    {State:'Total',freq:{Test: 0,ODIs:186, T20Is:174}},
    {State:'OB',freq:{Test: 0,ODIs:155, T20Is:192 }},
    {State:'6YD',freq:{Test: 0,ODIs:5, T20Is:12 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:31, T20Is:16 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:5, T20Is:15 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:1 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var AppstH=[
    {State:'Apps',freq:{Test: 8, ODIs:16, T20Is:6}},
    {State:'Mins',freq:{Test: 16, ODIs:30, T20Is:6}},
    {State:'Total',freq:{Test: 1945,ODIs:1643, T20Is:132}},
    {State:'OB',freq:{Test: 1067,ODIs:1541, T20Is:191 }},
    {State:'6YD',freq:{Test: 22,ODIs:61, T20Is:7 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 49,ODIs:26, T20Is:27 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'FC',freq:{Test: 88,ODIs:27, T20Is:19 }},
    {State:'THI',freq:{Test: 2,ODIs:4, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:2, T20Is:0 }}
];

var adamM=[
    {State:'Apps',freq:{Test: 0, ODIs:37, T20Is:18}},
    {State:'Mins',freq:{Test: 0, ODIs:36, T20Is:18}},
    {State:'Total',freq:{Test: 0,ODIs:1639, T20Is:373}},
    {State:'OB',freq:{Test: 0,ODIs:1434, T20Is:458 }},
    {State:'6YD',freq:{Test: 0,ODIs:38, T20Is:21 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:37, T20Is:21 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:43, T20Is:18 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:1 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var benW=[
    {State:'Apps',freq:{Test: 0, ODIs:6, T20Is:4}},
    {State:'Mins',freq:{Test: 0, ODIs:6, T20Is:4}},
    {State:'Total',freq:{Test: 0,ODIs:309, T20Is:85}},
    {State:'OB',freq:{Test: 0,ODIs:315, T20Is:116 }},
    {State:'6YD',freq:{Test: 0,ODIs:8, T20Is:5 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:40, T20Is:23 }},
    {State:'THB',freq:{Test: 0,ODIs:6, T20Is:8 }},
    {State:'FC',freq:{Test: 0,ODIs:39, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var hamishB=[
    {State:'Apps',freq:{Test: 1, ODIs:16, T20Is:0}},
    {State:'Mins',freq:{Test: 1, ODIs:15, T20Is:0}},
    {State:'Total',freq:{Test: 90,ODIs:718, T20Is:0}},
    {State:'OB',freq:{Test: 47,ODIs:621, T20Is:0 }},
    {State:'6YD',freq:{Test: 0,ODIs:27, T20Is:0 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:0 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:0 }},
    {State:'Corn',freq:{Test: 0,ODIs:23, T20Is:0 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:0 }},
    {State:'FC',freq:{Test: 0,ODIs:27, T20Is:0 }},
    {State:'THI',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var ishS=[
    {State:'Apps',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Mins',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Total',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'OB',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'6YD',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'Pty',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'THI',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var neilW=[
    {State:'Apps',freq:{Test: 32, ODIs:0, T20Is:0}},
    {State:'Mins',freq:{Test: 61, ODIs:0, T20Is:0}},
    {State:'Total',freq:{Test: 7045,ODIs:0, T20Is:0}},
    {State:'OB',freq:{Test: 3758,ODIs:0, T20Is:0 }},
    {State:'6YD',freq:{Test: 130,ODIs:0, T20Is:0 }},
    {State:'Pty',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'CRS',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Corn',freq:{Test: 29,ODIs:0, T20Is:0 }},
    {State:'THB',freq:{Test: 3,ODIs:0, T20Is:0 }},
    {State:'FC',freq:{Test: 54,ODIs:0, T20Is:0 }},
    {State:'THI',freq:{Test: 5,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 4,ODIs:0, T20Is:0 }}
];

var trentB=[
    {State:'Apps',freq:{Test: 50, ODIs:51, T20Is:14}},
    {State:'Mins',freq:{Test: 94, ODIs:51, T20Is:14}},
    {State:'Total',freq:{Test:11041,ODIs:2748, T20Is:312}},
    {State:'OB',freq:{Test: 5464,ODIs:2294, T20Is:410 }},
    {State:'6YD',freq:{Test: 190,ODIs:90, T20Is:20 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 29,ODIs:25, T20Is:20 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'FC',freq:{Test: 58,ODIs:31, T20Is:16 }},
    {State:'THI',freq:{Test: 9,ODIs:4, T20Is:0 }},
    {State:'Rating',freq:{Test: 5,ODIs:2, T20Is:0 }}
];

var timS=[
    {State:'Apps',freq:{Test: 57, ODIs:119, T20Is:39}},
    {State:'Mins',freq:{Test: 105, ODIs:117, T20Is:38}},
    {State:'Total',freq:{Test: 12620,ODIs:5942, T20Is:846}},
    {State:'OB',freq:{Test: 6438,ODIs:5316, T20Is:1229 }},
    {State:'6YD',freq:{Test: 204,ODIs:160, T20Is:46 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 31,ODIs:33, T20Is:27 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:9 }},
    {State:'FC',freq:{Test: 62,ODIs:37, T20Is:18 }},
    {State:'THI',freq:{Test: 11,ODIs:4, T20Is:0 }},
    {State:'Rating',freq:{Test: 6,ODIs:2, T20Is:1 }}
];

var junaidK=[
    {State:'Apps',freq:{Test: 22, ODIs:62, T20Is:9}},
    {State:'Mins',freq:{Test: 41, ODIs:62, T20Is:9}},
    {State:'Total',freq:{Test: 4605,ODIs:2965, T20Is:162}},
    {State:'OB',freq:{Test: 2253,ODIs:2644, T20Is:236 }},
    {State:'6YD',freq:{Test: 71,ODIs:94, T20Is:8 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 31,ODIs:28, T20Is:30 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:9 }},
    {State:'FC',freq:{Test: 64,ODIs:32, T20Is:20 }},
    {State:'THI',freq:{Test: 1,ODIs:3, T20Is:0 }},
    {State:'Rating',freq:{Test: 5,ODIs:0, T20Is:0 }}
];

var sohailK=[
    {State:'Apps',freq:{Test: 9, ODIs:13, T20Is:3}},
    {State:'Mins',freq:{Test: 17, ODIs:13, T20Is:3}},
    {State:'Total',freq:{Test: 1828,ODIs:666, T20Is:42}},
    {State:'OB',freq:{Test: 1125,ODIs:597, T20Is:51 }},
    {State:'6YD',freq:{Test: 27,ODIs:19, T20Is:2 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 41,ODIs:31, T20Is:26 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 68,ODIs:35, T20Is:21 }},
    {State:'THI',freq:{Test: 1,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 2,ODIs:1, T20Is:0 }}
];

var wahabR=[
    {State:'Apps',freq:{Test: 25, ODIs:79, T20Is:27}},
    {State:'Mins',freq:{Test: 45, ODIs:78, T20Is:27}},
    {State:'Total',freq:{Test: 4646,ODIs:3695, T20Is:543}},
    {State:'OB',freq:{Test: 2680,ODIs:3503, T20Is:723 }},
    {State:'6YD',freq:{Test: 78,ODIs:102, T20Is:28 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 34,ODIs:34, T20Is:26 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'FC',freq:{Test: 60,ODIs:37, T20Is:19 }},
    {State:'THI',freq:{Test: 2,ODIs:4, T20Is:0 }},
    {State:'Rating',freq:{Test: 2,ODIs:1, T20Is:0 }}
];

var mohammadA=[
    {State:'Apps',freq:{Test: 28, ODIs:36, T20Is:31}},
    {State:'Mins',freq:{Test: 53, ODIs:36, T20Is:31}},
    {State:'Total',freq:{Test: 6067,ODIs:1867, T20Is:690}},
    {State:'OB',freq:{Test: 2959,ODIs:1508, T20Is:809 }},
    {State:'6YD',freq:{Test: 94,ODIs:55, T20Is:34 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 31,ODIs:27, T20Is:24 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 65,ODIs:34, T20Is:20 }},
    {State:'THI',freq:{Test: 3,ODIs:1, T20Is:0 }},
    {State:'Rating',freq:{Test: 4,ODIs:0, T20Is:0 }}
];

var sohailT=[
    {State:'Apps',freq:{Test: 2, ODIs:62, T20Is:57}},
    {State:'Mins',freq:{Test: 4, ODIs:60, T20Is:57}},
    {State:'Total',freq:{Test: 504,ODIs:2949, T20Is:1214}},
    {State:'OB',freq:{Test: 316,ODIs:2566, T20Is:1454 }},
    {State:'6YD',freq:{Test: 5,ODIs:71, T20Is:54 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 63,ODIs:36, T20Is:27 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:8 }},
    {State:'FC',freq:{Test: 101,ODIs:42, T20Is:22 }},
    {State:'THI',freq:{Test: 0,ODIs:3, T20Is:0 }},
    {State:'Rating',freq:{Test: 6,ODIs:1, T20Is:0 }}
];

var yasirS=[
    {State:'Apps',freq:{Test: 26, ODIs:17, T20Is:2}},
    {State:'Mins',freq:{Test: 50, ODIs:16, T20Is:2}},
    {State:'Total',freq:{Test: 8366,ODIs:849, T20Is:24}},
    {State:'OB',freq:{Test: 4457,ODIs:766, T20Is:39 }},
    {State:'6YD',freq:{Test: 149,ODIs:18, T20Is:0 }},
    {State:'Pty',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'CRS',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Corn',freq:{Test: 30,ODIs:43, T20Is:0 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:10 }},
    {State:'FC',freq:{Test: 56,ODIs:47, T20Is:0 }},
    {State:'THI',freq:{Test: 8,ODIs:1, T20Is:0 }},
    {State:'Rating',freq:{Test: 11,ODIs:1, T20Is:0 }}
];

var imranK=[
    {State:'Apps',freq:{Test: 9, ODIs:0, T20Is:0}},
    {State:'Mins',freq:{Test: 17, ODIs:0, T20Is:0}},
    {State:'Total',freq:{Test: 1492,ODIs:0, T20Is:0}},
    {State:'OB',freq:{Test: 844,ODIs:0, T20Is:0 }},
    {State:'6YD',freq:{Test: 28,ODIs:0, T20Is:0 }},
    {State:'Pty',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'CRS',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Corn',freq:{Test: 30,ODIs:0, T20Is:0 }},
    {State:'THB',freq:{Test: 3,ODIs:0, T20Is:0 }},
    {State:'FC',freq:{Test: 53,ODIs:0, T20Is:0 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var rummanR=[
    {State:'Apps',freq:{Test: 0, ODIs:1, T20Is:2}},
    {State:'Mins',freq:{Test: 0, ODIs:1, T20Is:2}},
    {State:'Total',freq:{Test: 0,ODIs:54, T20Is:42}},
    {State:'OB',freq:{Test: 0,ODIs:44, T20Is:35 }},
    {State:'6YD',freq:{Test: 0,ODIs:2, T20Is:1 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:22, T20Is:35 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:5 }},
    {State:'FC',freq:{Test: 0,ODIs:27, T20Is:42 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var kyleA=[
    {State:'Apps',freq:{Test: 11, ODIs:28, T20Is:21}},
    {State:'Mins',freq:{Test: 21, ODIs:27, T20Is:21}},
    {State:'Total',freq:{Test: 2081,ODIs:1303, T20Is:436}},
    {State:'OB',freq:{Test: 886,ODIs:1051, T20Is:579 }},
    {State:'6YD',freq:{Test: 39,ODIs:34, T20Is:26 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 23,ODIs:31, T20Is:22 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'FC',freq:{Test: 53,ODIs:38, T20Is:16 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var imranT=[
    {State:'Apps',freq:{Test: 20, ODIs:78, T20Is:33}},
    {State:'Mins',freq:{Test: 37, ODIs:76, T20Is:33}},
    {State:'Total',freq:{Test: 3925,ODIs:4057, T20Is:737}},
    {State:'OB',freq:{Test: 2294,ODIs:3152, T20Is:815 }},
    {State:'6YD',freq:{Test: 57,ODIs:132, T20Is:55 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 40,ODIs:24, T20Is:15 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 69,ODIs:30, T20Is:13 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var andileP=[
    {State:'Apps',freq:{Test: 0, ODIs:17, T20Is:7}},
    {State:'Mins',freq:{Test: 0, ODIs:17, T20Is:7}},
    {State:'Total',freq:{Test: 0,ODIs:694, T20Is:123}},
    {State:'OB',freq:{Test: 0,ODIs:679, T20Is:185 }},
    {State:'6YD',freq:{Test: 0,ODIs:18, T20Is:7 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:37, T20Is:26 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:9 }},
    {State:'FC',freq:{Test: 0,ODIs:38, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var wayneP=[
    {State:'Apps',freq:{Test: 5, ODIs:65, T20Is:40}},
    {State:'Mins',freq:{Test: 8, ODIs:61, T20Is:39}},
    {State:'Total',freq:{Test: 484,ODIs:2911, T20Is:749}},
    {State:'OB',freq:{Test: 347,ODIs:2738, T20Is:1038 }},
    {State:'6YD',freq:{Test: 13,ODIs:94, T20Is:41 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 27,ODIs:29, T20Is:25 }},
    {State:'THB',freq:{Test: 5,ODIs:6, T20Is:8 }},
    {State:'FC',freq:{Test: 37,ODIs:31, T20Is:18 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var kagisoR=[
    {State:'Apps',freq:{Test: 20, ODIs:40, T20Is:16}},
    {State:'Mins',freq:{Test: 35, ODIs:39, T20Is:16}},
    {State:'Total',freq:{Test: 3710,ODIs:2005, T20Is:362}},
    {State:'OB',freq:{Test: 2137,ODIs:1710, T20Is:498 }},
    {State:'6YD',freq:{Test: 87,ODIs:65, T20Is:22 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 24,ODIs:26, T20Is:16 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:9 }},
    {State:'FC',freq:{Test: 42,ODIs:31, T20Is:42 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var daneP=[
    {State:'Apps',freq:{Test: 0, ODIs:1, T20Is:4}},
    {State:'Mins',freq:{Test: 0, ODIs:1, T20Is:4}},
    {State:'Total',freq:{Test: 0,ODIs:54, T20Is:83}},
    {State:'OB',freq:{Test: 0,ODIs:44, T20Is:115 }},
    {State:'6YD',freq:{Test: 0,ODIs:2, T20Is:5 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:22, T20Is:23 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:8 }},
    {State:'FC',freq:{Test: 0,ODIs:27, T20Is:16 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var tabraizS=[
    {State:'Apps',freq:{Test: 1, ODIs:5, T20Is:2}},
    {State:'Mins',freq:{Test: 2, ODIs:5, T20Is:2}},
    {State:'Total',freq:{Test: 263,ODIs:264, T20Is:36}},
    {State:'OB',freq:{Test: 150,ODIs:212, T20Is:47 }},
    {State:'6YD',freq:{Test: 2,ODIs:7, T20Is:0 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:0 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:0 }},
    {State:'Corn',freq:{Test: 75,ODIs:30, T20Is:0 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:8 }},
    {State:'FC',freq:{Test: 131,ODIs:37, T20Is:0 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var keshavM=[
    {State:'Apps',freq:{Test: 11, ODIs:2, T20Is:0}},
    {State:'Mins',freq:{Test: 20, ODIs:2, T20Is:0}},
    {State:'Total',freq:{Test: 2463,ODIs:97, T20Is:0}},
    {State:'OB',freq:{Test: 1189,ODIs:97, T20Is:0 }},
    {State:'6YD',freq:{Test: 43,ODIs:4, T20Is:0 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:0 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:0 }},
    {State:'Corn',freq:{Test: 27,ODIs:24, T20Is:0 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:8 }},
    {State:'FC',freq:{Test: 57,ODIs:24, T20Is:0 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var chrisM=[
    {State:'Apps',freq:{Test: 4, ODIs:29, T20Is:14}},
    {State:'Mins',freq:{Test: 8, ODIs:28, T20Is:14}},
    {State:'Total',freq:{Test: 623,ODIs:1302, T20Is:306}},
    {State:'OB',freq:{Test: 459,ODIs:1206, T20Is:405 }},
    {State:'6YD',freq:{Test: 12,ODIs:33, T20Is:20 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 38,ODIs:37, T20Is:20 }},
    {State:'THB',freq:{Test: 5,ODIs:6, T20Is:8 }},
    {State:'FC',freq:{Test: 52,ODIs:40, T20Is:15 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var duanneO=[
    {State:'Apps',freq:{Test: 3, ODIs:1, T20Is:0}},
    {State:'Mins',freq:{Test: 6, ODIs:1, T20Is:0}},
    {State:'Total',freq:{Test: 404,ODIs:42, T20Is:0}},
    {State:'OB',freq:{Test: 271,ODIs:34, T20Is:0 }},
    {State:'6YD',freq:{Test: 14,ODIs:1, T20Is:0 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:0 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:0 }},
    {State:'Corn',freq:{Test: 19,ODIs:34, T20Is:0 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:0 }},
    {State:'FC',freq:{Test: 29,ODIs:42, T20Is:0 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var aaronP=[
    {State:'Apps',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Mins',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Total',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'OB',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'6YD',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var vishwaF=[
    {State:'Apps',freq:{Test: 2, ODIs:4, T20Is:0}},
    {State:'Mins',freq:{Test: 2, ODIs:4, T20Is:0}},
    {State:'Total',freq:{Test: 168,ODIs:171, T20Is:0}},
    {State:'OB',freq:{Test: 103,ODIs:186, T20Is:0 }},
    {State:'6YD',freq:{Test: 3,ODIs:2, T20Is:0 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:0 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:0 }},
    {State:'Corn',freq:{Test: 34,ODIs:93, T20Is:0 }},
    {State:'THB',freq:{Test: 3,ODIs:7, T20Is:0 }},
    {State:'FC',freq:{Test: 56,ODIs:86, T20Is:0 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var ranganaH=[
    {State:'Apps',freq:{Test: 10, ODIs:19, T20Is:2}},
    {State:'Mins',freq:{Test: 19, ODIs:19, T20Is:2}},
    {State:'Total',freq:{Test: 1863,ODIs:997, T20Is:42}},
    {State:'OB',freq:{Test: 1057,ODIs:896, T20Is:62 }},
    {State:'6YD',freq:{Test: 26,ODIs:21, T20Is:5 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 41,ODIs:43, T20Is:13 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:9 }},
    {State:'FC',freq:{Test: 72,ODIs:47, T20Is:8 }},
    {State:'THI',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var nuwanK=[
    {State:'Apps',freq:{Test: 3, ODIs:1, T20Is:4}},
    {State:'Mins',freq:{Test: 5, ODIs:1, T20Is:4}},
    {State:'Total',freq:{Test: 526,ODIs:48, T20Is:84}},
    {State:'OB',freq:{Test: 298,ODIs:70, T20Is:102 }},
    {State:'6YD',freq:{Test: 7,ODIs:2, T20Is:4 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 43,ODIs:35, T20Is:25 }},
    {State:'THB',freq:{Test: 4,ODIs:9, T20Is:7 }},
    {State:'FC',freq:{Test: 75,ODIs:24, T20Is:21 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var lakshanS=[
    {State:'Apps',freq:{Test: 2, ODIs:6, T20Is:1}},
    {State:'Mins',freq:{Test: 4, ODIs:5, T20Is:1}},
    {State:'Total',freq:{Test: 348,ODIs:286, T20Is:24}},
    {State:'OB',freq:{Test: 187,ODIs:189, T20Is:34 }},
    {State:'6YD',freq:{Test: 9,ODIs:10, T20Is:1 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 21,ODIs:19, T20Is:34 }},
    {State:'THB',freq:{Test: 3,ODIs:4, T20Is:9 }},
    {State:'FC',freq:{Test: 39,ODIs:29, T20Is:24 }},
    {State:'THI',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var dushmanthaC=[
    {State:'Apps',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Mins',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Total',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'OB',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'6YD',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var lahiruK=[
    {State:'Apps',freq:{Test: 36, ODIs:179, T20Is:54}},
    {State:'Mins',freq:{Test: 51, ODIs:179, T20Is:53}},
    {State:'Total',freq:{Test: 5990,ODIs:8951, T20Is:1139}},
    {State:'OB',freq:{Test: 3239,ODIs:7089, T20Is:1527 }},
    {State:'6YD',freq:{Test: 78,ODIs:232, T20Is:42 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 42,ODIs:30, T20Is:36 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:8 }},
    {State:'FC',freq:{Test: 78,ODIs:39, T20Is:27 }},
    {State:'THI',freq:{Test: 4,ODIs:6, T20Is:1 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var lasithM=[
    {State:'Apps',freq:{Test: 4, ODIs:29, T20Is:15}},
    {State:'Mins',freq:{Test: 8, ODIs:28, T20Is:13}},
    {State:'Total',freq:{Test: 738,ODIs:1269, T20Is:269}},
    {State:'OB',freq:{Test: 565,ODIs:1203, T20Is:308 }},
    {State:'6YD',freq:{Test: 7,ODIs:43, T20Is:10 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 81,ODIs:28, T20Is:31 }},
    {State:'THB',freq:{Test: 5,ODIs:6, T20Is:7 }},
    {State:'FC',freq:{Test: 106,ODIs:30, T20Is:27 }},
    {State:'THI',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var surangaL=[
    {State:'Apps',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Mins',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Total',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'OB',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'6YD',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var samuelB=[
    {State:'Apps',freq:{Test: 6, ODIs:14, T20Is:25}},
    {State:'Mins',freq:{Test: 9, ODIs:14, T20Is:23}},
    {State:'Total',freq:{Test: 880,ODIs:603, T20Is:476}},
    {State:'OB',freq:{Test: 460,ODIs:523, T20Is:592 }},
    {State:'6YD',freq:{Test: 6,ODIs:21, T20Is:39 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 77,ODIs:25, T20Is:15 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 147,ODIs:28, T20Is:12 }},
    {State:'THI',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var shannonG=[
    {State:'Apps',freq:{Test: 68, ODIs:13, T20Is:1}},
    {State:'Mins',freq:{Test: 130, ODIs:13, T20Is:1}},
    {State:'Total',freq:{Test: 15952,ODIs:720, T20Is:6}},
    {State:'OB',freq:{Test: 8410,ODIs:592, T20Is:15 }},
    {State:'6YD',freq:{Test: 256,ODIs:17, T20Is:0 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 33,ODIs:35, T20Is:0 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:15 }},
    {State:'FC',freq:{Test: 62,ODIs:42, T20Is:0 }},
    {State:'THI',freq:{Test: 9,ODIs:1, T20Is:0 }},
    {State:'Rating',freq:{Test: 10,ODIs:0, T20Is:0 }}
];

var alzarriJ=[
    {State:'Apps',freq:{Test: 1, ODIs:67, T20Is:24}},
    {State:'Mins',freq:{Test: 2, ODIs:65, T20Is:24}},
    {State:'Total',freq:{Test: 166,ODIs:3116, T20Is:515}},
    {State:'OB',freq:{Test: 98,ODIs:2858, T20Is:684 }},
    {State:'6YD',freq:{Test: 6,ODIs:95, T20Is:36 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 16,ODIs:30, T20Is:19 }},
    {State:'THB',freq:{Test: 4,ODIs:6, T20Is:8 }},
    {State:'FC',freq:{Test: 28,ODIs:33, T20Is:14 }},
    {State:'THI',freq:{Test: 1,ODIs:4, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:1 }}
];

var sunilN=[
    {State:'Apps',freq:{Test: 31, ODIs:38, T20Is:7}},
    {State:'Mins',freq:{Test: 58, ODIs:37, T20Is:7}},
    {State:'Total',freq:{Test: 6557,ODIs:1952, T20Is:168}},
    {State:'OB',freq:{Test: 3039,ODIs:1527, T20Is:269 }},
    {State:'6YD',freq:{Test: 118,ODIs:64, T20Is:8 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 26,ODIs:24, T20Is:34 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:10 }},
    {State:'FC',freq:{Test: 56,ODIs:31, T20Is:21 }},
    {State:'THI',freq:{Test: 4,ODIs:1, T20Is:1 }},
    {State:'Rating',freq:{Test: 5,ODIs:3, T20Is:0 }}
];

var jeromeT=[
    {State:'Apps',freq:{Test: 4, ODIs:31, T20Is:18}},
    {State:'Mins',freq:{Test: 7, ODIs:31, T20Is:18}},
    {State:'Total',freq:{Test: 906,ODIs:1566, T20Is:414}},
    {State:'OB',freq:{Test: 460,ODIs:1447, T20Is:472 }},
    {State:'6YD',freq:{Test: 19,ODIs:53, T20Is:23 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 2248,ODIs:27, T20Is:21 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:7 }},
    {State:'FC',freq:{Test: 48,ODIs:30, T20Is:18 }},
    {State:'THI',freq:{Test: 1,ODIs:3, T20Is:0 }},
    {State:'Rating',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var devendraB=[
    {State:'Apps',freq:{Test: 345, ODIs:30, T20Is:30}},
    {State:'Mins',freq:{Test: 345, ODIs:26, T20Is:19}},
    {State:'Total',freq:{Test: 345,ODIs:812, T20Is:228}},
    {State:'OB',freq:{Test: 345,ODIs:704, T20Is:352 }},
    {State:'6YD',freq:{Test: 345,ODIs:23, T20Is:8 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 345,ODIs:30, T20Is:44 }},
    {State:'THB',freq:{Test: 345,ODIs:5, T20Is:9 }},
    {State:'FC',freq:{Test: 345,ODIs:35, T20Is:28 }},
    {State:'THI',freq:{Test: 345,ODIs:2, T20Is:0 }},
    {State:'Rating',freq:{Test: 345,ODIs:0, T20Is:0 }}
];

var miguelC=[
    {State:'Apps',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Mins',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Total',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'OB',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'6YD',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var ashleyN=[
    {State:'Apps',freq:{Test: 20, ODIs:40, T20Is:16}},
    {State:'Mins',freq:{Test: 35, ODIs:39, T20Is:16}},
    {State:'Total',freq:{Test: 3710,ODIs:2005, T20Is:362}},
    {State:'OB',freq:{Test: 2137,ODIs:1710, T20Is:498 }},
    {State:'6YD',freq:{Test: 87,ODIs:65, T20Is:22 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 24,ODIs:26, T20Is:16 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:9 }},
    {State:'FC',freq:{Test: 42,ODIs:31, T20Is:42 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var kemarR=[
    {State:'Apps',freq:{Test: 4, ODIs:29, T20Is:14}},
    {State:'Mins',freq:{Test: 8, ODIs:28, T20Is:14}},
    {State:'Total',freq:{Test: 623,ODIs:1302, T20Is:306}},
    {State:'OB',freq:{Test: 459,ODIs:1206, T20Is:405 }},
    {State:'6YD',freq:{Test: 12,ODIs:33, T20Is:20 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 38,ODIs:37, T20Is:20 }},
    {State:'THB',freq:{Test: 5,ODIs:6, T20Is:8 }},
    {State:'FC',freq:{Test: 52,ODIs:40, T20Is:15 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var keFCickW=[
    {State:'Apps',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Mins',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Total',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'OB',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'6YD',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'Pty',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'THI',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var tendaiC=[
    {State:'Apps',freq:{Test: 16, ODIs:18, T20Is:12}},
    {State:'Mins',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Total',freq:{Test: 2544,ODIs:2452, T20Is:414}},
    {State:'OB',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'6YD',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'Pty',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'THI',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var michaelC=[
    {State:'Apps',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Mins',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Total',freq:{Test: 2544,ODIs:2452, T20Is:414}},
    {State:'OB',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'6YD',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'Pty',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 43,ODIs:33, T20Is:34 }},
    {State:'THB',freq:{Test: 4,ODIs:6, T20Is:8 }},
    {State:'FC',freq:{Test: 67,ODIs:35, T20Is:26 }},
    {State:'THI',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var brianV=[
    {State:'Apps',freq:{Test: 17, ODIs:120, T20Is:26}},
    {State:'Mins',freq:{Test: 29, ODIs:120, T20Is:26}},
    {State:'Total',freq:{Test: 3447,ODIs:5751, T20Is:566}},
    {State:'OB',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'6YD',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'Pty',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 31,ODIs:25, T20Is:31 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:11 }},
    {State:'FC',freq:{Test: 54,ODIs:27, T20Is:18 }},
    {State:'THI',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var tendaiC=[
    {State:'Apps',freq:{Test: 2, ODIs:6, T20Is:1}},
    {State:'Mins',freq:{Test: 48, ODIs:48, T20Is:77}},
    {State:'Total',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'OB',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'6YD',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'Pty',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 42,ODIs:32, T20Is:21 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'FC',freq:{Test: 78,ODIs:37, T20Is:17 }},
    {State:'THI',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var johnN=[
    {State:'Apps',freq:{Test: 0, ODIs:4, T20Is:1}},
    {State:'Mins',freq:{Test: 0, ODIs:8, T20Is:1}},
    {State:'Total',freq:{Test: 0,ODIs:627, T20Is:24}},
    {State:'OB',freq:{Test: 0,ODIs:367, T20Is:8 }},
    {State:'6YD',freq:{Test: 0,ODIs:11, T20Is:1 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:33, T20Is:8 }},
    {State:'THB',freq:{Test: 0,ODIs:4, T20Is:2 }},
    {State:'FC',freq:{Test: 0,ODIs:57, T20Is:24 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var graemeC=[
    {State:'Apps',freq:{Test: 34, ODIs:70, T20Is:1}},
    {State:'Mins',freq:{Test: 66, ODIs:68, T20Is:1}},
    {State:'Total',freq:{Test: 5598,ODIs:3259, T20Is:18}},
    {State:'OB',freq:{Test: 3378,ODIs:3219, T20Is:24 }},
    {State:'6YD',freq:{Test: 94,ODIs:98, T20Is:1 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 36,ODIs:33, T20Is:24 }},
    {State:'THB',freq:{Test: 4,ODIs:6, T20Is:8 }},
    {State:'FC',freq:{Test: 60,ODIs:33, T20Is:18 }},
    {State:'THI',freq:{Test: 4,ODIs:3, T20Is:0 }},
    {State:'Rating',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var chrisMp=[
    {State:'Apps',freq:{Test: 4, ODIs:29, T20Is:15}},
    {State:'Mins',freq:{Test: 8, ODIs:28, T20Is:13}},
    {State:'Total',freq:{Test: 738,ODIs:1269, T20Is:269}},
    {State:'OB',freq:{Test: 565,ODIs:1203, T20Is:308 }},
    {State:'6YD',freq:{Test: 7,ODIs:43, T20Is:10 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 81,ODIs:28, T20Is:31 }},
    {State:'THB',freq:{Test: 5,ODIs:6, T20Is:7 }},
    {State:'FC',freq:{Test: 106,ODIs:30, T20Is:27 }},
    {State:'THI',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var tauraiM=[
    {State:'Apps',freq:{Test: 10, ODIs:19, T20Is:2}},
    {State:'Mins',freq:{Test: 19, ODIs:19, T20Is:2}},
    {State:'Total',freq:{Test: 1863,ODIs:997, T20Is:42}},
    {State:'OB',freq:{Test: 1057,ODIs:896, T20Is:62 }},
    {State:'6YD',freq:{Test: 26,ODIs:21, T20Is:5 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 41,ODIs:43, T20Is:13 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:9 }},
    {State:'FC',freq:{Test: 72,ODIs:47, T20Is:8 }},
    {State:'THI',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var tinasheP=[
    {State:'Apps',freq:{Test: 8, ODIs:3, T20Is:25}},
    {State:'Mins',freq:{Test: 16, ODIs:31, T20Is:25}},
    {State:'Total',freq:{Test: 1530,ODIs:1532, T20Is:534}},
    {State:'OB',freq:{Test: 752,ODIs:1521, T20Is:766 }},
    {State:'6YD',freq:{Test: 21,ODIs:43, T20Is:30 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 36,ODIs:35, T20Is:26 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'FC',freq:{Test: 73,ODIs:36, T20Is:18 }},
    {State:'THI',freq:{Test: 1,ODIs:0, T20Is:1 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var donaldT=[
    {State:'Apps',freq:{Test: 128, ODIs:194, T20Is:19}},
    {State:'Mins',freq:{Test: 240, ODIs:191, T20Is:19}},
    {State:'Total',freq:{Test: 28042,ODIs:9584, T20Is:422}},
    {State:'OB',freq:{Test: 13787,ODIs:7861, T20Is:552 }},
    {State:'6YD',freq:{Test: 497,ODIs:269, T20Is:18 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 28,ODIs:29, T20Is:31 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'FC',freq:{Test: 56,ODIs:36, T20Is:23 }},
    {State:'THI',freq:{Test: 8,ODIs:8, T20Is:0 }},
    {State:'Rating',freq:{Test: 7,ODIs:5, T20Is:0 }}
];




var gulbadinN=[
    {State:'Apps',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Mins',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Total',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'OB',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'6YD',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'Pty',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'THI',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var shapoorZ=[
    {State:'Apps',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Mins',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Total',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'OB',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'6YD',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'Pty',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'THI',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var aftabA=[
    {State:'Apps',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Mins',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Total',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'OB',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'6YD',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'Pty',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'THI',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var dawlatZ=[
    {State:'Apps',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Mins',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Total',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'OB',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'6YD',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'Pty',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'THI',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var hamidH=[
    {State:'Apps',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Mins',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Total',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'OB',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'6YD',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'Pty',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'THI',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var mirwaisA=[
    {State:'Apps',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Mins',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Total',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'OB',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'6YD',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'Pty',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'THI',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var amirH=[
    {State:'Apps',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Mins',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Total',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'OB',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'6YD',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'Pty',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'THI',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var fareedA=[
    {State:'Apps',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Mins',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Total',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'OB',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'6YD',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'Pty',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'THI',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var rashidK=[
    {State:'Apps',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Mins',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Total',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'OB',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'6YD',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'Pty',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'THI',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var yaminA=[
    {State:'Apps',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Mins',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Total',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'OB',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'6YD',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'Pty',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'THI',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var AsgharS=[
    {State:'Apps',freq:{Test: 8, ODIs:3, T20Is:25}},
    {State:'Mins',freq:{Test: 16, ODIs:31, T20Is:25}},
    {State:'Total',freq:{Test: 1530,ODIs:1532, T20Is:534}},
    {State:'OB',freq:{Test: 752,ODIs:1521, T20Is:766 }},
    {State:'6YD',freq:{Test: 21,ODIs:43, T20Is:30 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 36,ODIs:35, T20Is:26 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'FC',freq:{Test: 73,ODIs:36, T20Is:18 }},
    {State:'THI',freq:{Test: 1,ODIs:0, T20Is:1 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var MohammadS=[
    {State:'Apps',freq:{Test: 3, ODIs:1, T20Is:0}},
    {State:'Mins',freq:{Test: 6, ODIs:1, T20Is:0}},
    {State:'Total',freq:{Test: 404,ODIs:42, T20Is:0}},
    {State:'OB',freq:{Test: 271,ODIs:34, T20Is:0 }},
    {State:'6YD',freq:{Test: 14,ODIs:1, T20Is:0 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:0 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:0 }},
    {State:'Corn',freq:{Test: 19,ODIs:34, T20Is:0 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:0 }},
    {State:'FC',freq:{Test: 29,ODIs:42, T20Is:0 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var NoorAli =[
    {State:'Apps',freq:{Test: 128, ODIs:194, T20Is:19}},
    {State:'Mins',freq:{Test: 240, ODIs:191, T20Is:19}},
    {State:'Total',freq:{Test: 28042,ODIs:9584, T20Is:422}},
    {State:'OB',freq:{Test: 13787,ODIs:7861, T20Is:552 }},
    {State:'6YD',freq:{Test: 497,ODIs:269, T20Is:18 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 28,ODIs:29, T20Is:31 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'FC',freq:{Test: 56,ODIs:36, T20Is:23 }},
    {State:'THI',freq:{Test: 8,ODIs:8, T20Is:0 }},
    {State:'Rating',freq:{Test: 7,ODIs:5, T20Is:0 }}
];

var SamiullahS=[
    {State:'Apps',freq:{Test: 13, ODIs:57, T20Is:13}},
    {State:'Mins',freq:{Test: 25, ODIs:57, T20Is:13}},
    {State:'Total',freq:{Test: 287,ODIs:2789, T20Is:2659}},
    {State:'OB',freq:{Test: 1536,ODIs:2687, T20Is:356 }},
    {State:'6YD',freq:{Test: 41,ODIs:88, T20Is:16 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 37,ODIs:31, T20Is:22 }},
    {State:'THB',freq:{Test: 4,ODIs:6, T20Is:7 }},
    {State:'FC',freq:{Test: 65,ODIs:32, T20Is:18 }},
    {State:'THI',freq:{Test: 1,ODIs:3, T20Is:0 }},
    {State:'Rating',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var MohammadN=[
    {State:'Apps',freq:{Test: 18, ODIs:63, T20Is:8}},
    {State:'Mins',freq:{Test: 34, ODIs:62, T20Is:8}},
    {State:'Total',freq:{Test: 2950,ODIs:3024, T20Is:162}},
    {State:'OB',freq:{Test: 1530,ODIs:2813, T20Is:253 }},
    {State:'6YD',freq:{Test: 50,ODIs:89, T20Is:7 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 31,ODIs:32, T20Is:36 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'FC',freq:{Test: 59,ODIs:34, T20Is:23 }},
    {State:'THI',freq:{Test: 1,ODIs:8, T20Is:0 }},
    {State:'Rating',freq:{Test: 2,ODIs:2, T20Is:0 }}
];

var shafiqullah=[
    {State:'Apps',freq:{Test: 3, ODIs:1, T20Is:4}},
    {State:'Mins',freq:{Test: 5, ODIs:1, T20Is:4}},
    {State:'Total',freq:{Test: 526,ODIs:48, T20Is:84}},
    {State:'OB',freq:{Test: 298,ODIs:70, T20Is:102 }},
    {State:'6YD',freq:{Test: 7,ODIs:2, T20Is:4 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 43,ODIs:35, T20Is:25 }},
    {State:'THB',freq:{Test: 4,ODIs:9, T20Is:7 }},
    {State:'FC',freq:{Test: 75,ODIs:24, T20Is:21 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var NajeebT=[
    {State:'Apps',freq:{Test: 10, ODIs:49, T20Is:23}},
    {State:'Mins',freq:{Test: 18, ODIs:47, T20Is:21}},
    {State:'Total',freq:{Test: 2544,ODIs:2452, T20Is:414}},
    {State:'OB',freq:{Test: 1629,ODIs:2292, T20Is:547 }},
    {State:'6YD',freq:{Test: 38,ODIs:70, T20Is:16 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 43,ODIs:33, T20Is:34 }},
    {State:'THB',freq:{Test: 4,ODIs:6, T20Is:8}},
    {State:'FC',freq:{Test: 67,ODIs:35, T20Is:26 }},
    {State:'THI',freq:{Test: 5,ODIs:5, T20Is:0 }},
    {State:'Rating',freq:{Test: 1,ODIs:1, T20Is:0 }}
];

var NawrozM=[
    {State:'Apps',freq:{Test: 2, ODIs:6, T20Is:1}},
    {State:'Mins',freq:{Test: 4, ODIs:5, T20Is:1}},
    {State:'Total',freq:{Test: 348,ODIs:286, T20Is:24}},
    {State:'OB',freq:{Test: 187,ODIs:189, T20Is:34 }},
    {State:'6YD',freq:{Test: 9,ODIs:10, T20Is:1 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 21,ODIs:19, T20Is:34 }},
    {State:'THB',freq:{Test: 3,ODIs:4, T20Is:9 }},
    {State:'FC',freq:{Test: 39,ODIs:29, T20Is:24 }},
    {State:'THI',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var KarimJ=[
    {State:'Apps',freq:{Test: 25, ODIs:49, T20Is:7}},
    {State:'Mins',freq:{Test: 48, ODIs:48, T20Is:77}},
    {State:'Total',freq:{Test: 4671,ODIs:2465, T20Is:142}},
    {State:'OB',freq:{Test: 2655,ODIs:2247, T20Is:250 }},
    {State:'6YD',freq:{Test: 86,ODIs:91, T20Is:8 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 31,ODIs:25, T20Is:31 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:11 }},
    {State:'FC',freq:{Test: 54,ODIs:27, T20Is:18 }},
    {State:'THI',freq:{Test: 4,ODIs:6, T20Is:0 }},
    {State:'Rating',freq:{Test: 2,ODIs:0, T20Is:0 }}
];

var JCorndA=[
    {State:'Apps',freq:{Test: 17, ODIs:120, T20Is:26}},
    {State:'Mins',freq:{Test: 29, ODIs:120, T20Is:26}},
    {State:'Total',freq:{Test: 3447,ODIs:5751, T20Is:566}},
    {State:'OB',freq:{Test: 1866,ODIs:4981, T20Is:729 }},
    {State:'6YD',freq:{Test: 44,ODIs:157, T20Is:34 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 42,ODIs:32, T20Is:21 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'FC',freq:{Test: 78,ODIs:37, T20Is:17 }},
    {State:'THI',freq:{Test: 2,ODIs:5, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:2, T20Is:0 }}
];

var Shkodran=[
    {State:'Apps',freq:{Test: 77, ODIs:80, T20Is:14}},
    {State:'Mins',freq:{Test: 136, ODIs:78, T20Is:14}},
    {State:'Total',freq:{Test: 14775,ODIs:3733, T20Is:278}},
    {State:'OB',freq:{Test: 8051,ODIs:3563, T20Is:400 }},
    {State:'6YD',freq:{Test: 218,ODIs:115, T20Is:8 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 37,ODIs:31, T20Is:50 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'FC',freq:{Test: 68,ODIs:32, T20Is:35 }},
    {State:'THI',freq:{Test: 8,ODIs:6, T20Is:0 }},
    {State:'Rating',freq:{Test: 7,ODIs:0, T20Is:0 }}
];

var Henrikh=[
    {State:'Apps',freq:{Test: 0, ODIs:4, T20Is:1}},
    {State:'Mins',freq:{Test: 0, ODIs:8, T20Is:1}},
    {State:'Total',freq:{Test: 0,ODIs:627, T20Is:24}},
    {State:'OB',freq:{Test: 0,ODIs:367, T20Is:8 }},
    {State:'6YD',freq:{Test: 0,ODIs:11, T20Is:1 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:33, T20Is:8 }},
    {State:'THB',freq:{Test: 0,ODIs:4, T20Is:2 }},
    {State:'FC',freq:{Test: 0,ODIs:57, T20Is:24 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var Alexis=[
    {State:'Apps',freq:{Test: 0, ODIs:20, T20Is:24}},
    {State:'Mins',freq:{Test: 0, ODIs:20, T20Is:24}},
    {State:'Total',freq:{Test: 0,ODIs:1037, T20Is:535}},
    {State:'OB',freq:{Test: 0,ODIs:811, T20Is:587 }},
    {State:'6YD',freq:{Test: 0,ODIs:39, T20Is:33 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:27, T20Is:16 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:25, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:3, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var UsmanG=[
    {State:'Apps',freq:{Test: 0, ODIs:20, T20Is:24}},
    {State:'Mins',freq:{Test: 0, ODIs:20, T20Is:24}},
    {State:'Total',freq:{Test: 0,ODIs:1037, T20Is:535}},
    {State:'OB',freq:{Test: 0,ODIs:811, T20Is:587 }},
    {State:'6YD',freq:{Test: 0,ODIs:39, T20Is:33 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:27, T20Is:16 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:25, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:3, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];
var Pierre=[
    {State:'Apps',freq:{Test: 18, ODIs:70, T20Is:17}},
    {State:'Mins',freq:{Test: 31, ODIs:69, T20Is:17}},
    {State:'Total',freq:{Test: 2718,ODIs:3392, T20Is:366}},
    {State:'OB',freq:{Test: 1345,ODIs:2769, T20Is:408 }},
    {State:'6YD',freq:{Test: 45,ODIs:70, T20Is:16 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 30,ODIs:40, T20Is:26 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 60,ODIs:48, T20Is:23 }},
    {State:'THI',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'Rating',freq:{Test: 4,ODIs:0, T20Is:0 }}
];

var Aaron=[
    {State:'Apps',freq:{Test: 34, ODIs:70, T20Is:1}},
    {State:'Mins',freq:{Test: 66, ODIs:68, T20Is:1}},
    {State:'Total',freq:{Test: 5598,ODIs:3259, T20Is:18}},
    {State:'OB',freq:{Test: 3378,ODIs:3219, T20Is:24 }},
    {State:'6YD',freq:{Test: 94,ODIs:98, T20Is:1 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 36,ODIs:33, T20Is:24 }},
    {State:'THB',freq:{Test: 4,ODIs:6, T20Is:8 }},
    {State:'FC',freq:{Test: 60,ODIs:33, T20Is:18 }},
    {State:'THI',freq:{Test: 4,ODIs:3, T20Is:0 }},
    {State:'Rating',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var Mesut=[
    {State:'Apps',freq:{Test: 0, ODIs:6, T20Is:6}},
    {State:'Mins',freq:{Test: 0, ODIs:6, T20Is:6}},
    {State:'Total',freq:{Test: 0,ODIs:324, T20Is:144}},
    {State:'OB',freq:{Test: 0,ODIs:229, T20Is:174 }},
    {State:'6YD',freq:{Test: 0,ODIs:10, T20Is:11 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:23, T20Is:16 }},
    {State:'THB',freq:{Test: 0,ODIs:4, T20Is:7 }},
    {State:'FC',freq:{Test: 50,ODIs:32, T20Is:13 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:1 }}
];

var Nacho=[
    {State:'Apps',freq:{Test: 22, ODIs:36, T20Is:10}},
    {State:'Mins',freq:{Test: 40, ODIs:34, T20Is:10}},
    {State:'Total',freq:{Test: 5103,ODIs:1917, T20Is:228}},
    {State:'OB',freq:{Test: 2715,ODIs:1511, T20Is:240 }},
    {State:'6YD',freq:{Test: 76,ODIs:64, T20Is:16 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 28,ODIs:21, T20Is:19 }},
    {State:'THB',freq:{Test: 36,ODIs:24, T20Is:15 }},
    {State:'FC',freq:{Test: 3,ODIs:5, T20Is:6 }},
    {State:'THI',freq:{Test: 67,ODIs:29, T20Is:14 }},
    {State:'Rating',freq:{Test: 2,ODIs:2, T20Is:0 }}
];

var Alexandre=[
    {State:'Apps',freq:{Test: 0, ODIs:59, T20Is:37}},
    {State:'Mins',freq:{Test: 0, ODIs:52, T20Is:33}},
    {State:'Total',freq:{Test: 0,ODIs:1953, T20Is:606}},
    {State:'OB',freq:{Test: 0,ODIs:1510, T20Is:714 }},
    {State:'6YD',freq:{Test: 0,ODIs:63, T20Is:35 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:24, T20Is:20 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:31, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:1, T20Is:3 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var Laurent=[
    {State:'Apps',freq:{Test: 0, ODIs:20, T20Is:20}},
    {State:'Mins',freq:{Test: 0, ODIs:16, T20Is:12}},
    {State:'Total',freq:{Test: 0,ODIs:559, T20Is:171}},
    {State:'OB',freq:{Test: 0,ODIs:490, T20Is:226 }},
    {State:'6YD',freq:{Test: 0,ODIs:12, T20Is:6 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:41, T20Is:38 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:8 }},
    {State:'FC',freq:{Test: 0,ODIs:47, T20Is:29 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var Granit=[
    {State:'Apps',freq:{Test: 0, ODIs:13, T20Is:2}},
    {State:'Mins',freq:{Test: 0, ODIs:13, T20Is:2}},
    {State:'Total',freq:{Test: 0,ODIs:638, T20Is:48}},
    {State:'OB',freq:{Test: 0,ODIs:687, T20Is:102 }},
    {State:'6YD',freq:{Test: 0,ODIs:25, T20Is:4 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:28, T20Is:26 }},
    {State:'THB',freq:{Test: 0,ODIs:6, T20Is:13 }},
    {State:'FC',freq:{Test: 0,ODIs:26, T20Is:12 }},
    {State:'THI',freq:{Test: 0,ODIs:2, T20Is:1 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var DavidO=[
    {State:'Apps',freq:{Test: 0, ODIs:33, T20Is:14}},
    {State:'Mins',freq:{Test: 0, ODIs:32, T20Is:14}},
    {State:'Total',freq:{Test: 0,ODIs:1650, T20Is:268}},
    {State:'OB',freq:{Test: 0,ODIs:1313, T20Is:324 }},
    {State:'6YD',freq:{Test: 0,ODIs:34, T20Is:13 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:39, T20Is:25 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:49, T20Is:21 }},
    {State:'THI',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var Sead=[
    {State:'Apps',freq:{Test: 0, ODIs:68, T20Is:46}},
    {State:'Mins',freq:{Test: 0, ODIs:66, T20Is:42}},
    {State:'Total',freq:{Test: 0,ODIs:3284, T20Is:856}},
    {State:'OB',freq:{Test: 0,ODIs:2507, T20Is:927 }},
    {State:'6YD',freq:{Test: 0,ODIs:71, T20Is:52 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:5, T20Is:6 }},
    {State:'THB',freq:{Test: 0,ODIs:46, T20Is:16 }},
    {State:'FC',freq:{Test: 0,ODIs:5, T20Is:6 }},
    {State:'THI',freq:{Test: 0,ODIs:3, T20Is:1 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var AlexI=[
    {State:'Apps',freq:{Test: 1, ODIs:46, T20Is:26}},
    {State:'Mins',freq:{Test: 2, ODIs:44, T20Is:25}},
    {State:'Total',freq:{Test: 125,ODIs:2139, T20Is:522}},
    {State:'OB',freq:{Test: 81,ODIs:1763, T20Is:537 }},
    {State:'6YD',freq:{Test: 1,ODIs:56, T20Is:28 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 81,ODIs:31, T20Is:19 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:6 }},
    {State:'FC',freq:{Test: 125,ODIs:38, T20Is:19 }},
    {State:'THI',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var JackW=[
    {State:'Apps',freq:{Test: 0, ODIs:13, T20Is:26}},
    {State:'Mins',freq:{Test: 0, ODIs:12, T20Is:22}},
    {State:'Total',freq:{Test: 0,ODIs:543, T20Is:390}},
    {State:'OB',freq:{Test: 0,ODIs:520, T20Is:471 }},
    {State:'6YD',freq:{Test: 0,ODIs:16, T20Is:26 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:32, T20Is:19 }},
    {State:'THB',freq:{Test: 0,ODIs:6, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:34, T20Is:15 }},
    {State:'THI',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var HéctorB=[
    {State:'Apps',freq:{Test: 0, ODIs:13, T20Is:26}},
    {State:'Mins',freq:{Test: 0, ODIs:12, T20Is:22}},
    {State:'Total',freq:{Test: 0,ODIs:543, T20Is:390}},
    {State:'OB',freq:{Test: 0,ODIs:520, T20Is:471 }},
    {State:'6YD',freq:{Test: 0,ODIs:16, T20Is:26 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:33, T20Is:18 }},
    {State:'THB',freq:{Test: 0,ODIs:6, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:34, T20Is:15 }},
    {State:'THI',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var CalumC=[
    {State:'Apps',freq:{Test: 0, ODIs:18, T20Is:0}},
    {State:'Mins',freq:{Test: 0, ODIs:17, T20Is:0}},
    {State:'Total',freq:{Test: 0,ODIs:878, T20Is:0}},
    {State:'OB',freq:{Test: 0,ODIs:1020, T20Is:0 }},
    {State:'6YD',freq:{Test: 0,ODIs:25, T20Is:0 }},
    {State:'Pty',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'CRS',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Corn',freq:{Test: 0,ODIs:41, T20Is:0 }},
    {State:'THB',freq:{Test: 0,ODIs:7, T20Is:0 }},
    {State:'FC',freq:{Test: 0,ODIs:35, T20Is:0 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var PetrC=[
    {State:'Apps',freq:{Test: 0, ODIs:22, T20Is:19}},
    {State:'Mins',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Total',freq:{Test: 0,ODIs:1044, T20Is:174}},
    {State:'OB',freq:{Test: 0,ODIs:835, T20Is:216 }},
    {State:'6YD',freq:{Test: 0,ODIs:22, T20Is:13 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:38, T20Is:17 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:47, T20Is:13 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var RobH=[
    {State:'Apps',freq:{Test: 0, ODIs:4, T20Is:8}},
    {State:'Mins',freq:{Test: 0, ODIs:4, T20Is:8}},
    {State:'Total',freq:{Test: 0,ODIs:186, T20Is:174}},
    {State:'OB',freq:{Test: 0,ODIs:155, T20Is:192 }},
    {State:'6YD',freq:{Test: 0,ODIs:5, T20Is:12 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:31, T20Is:16 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:5, T20Is:15 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:1 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var AinsleyM=[
    {State:'Apps',freq:{Test: 8, ODIs:16, T20Is:6}},
    {State:'Mins',freq:{Test: 16, ODIs:30, T20Is:6}},
    {State:'Total',freq:{Test: 1945,ODIs:1643, T20Is:132}},
    {State:'OB',freq:{Test: 1067,ODIs:1541, T20Is:191 }},
    {State:'6YD',freq:{Test: 22,ODIs:61, T20Is:7 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 49,ODIs:26, T20Is:27 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'FC',freq:{Test: 88,ODIs:27, T20Is:19 }},
    {State:'THI',freq:{Test: 2,ODIs:4, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:2, T20Is:0 }}
];

var SimonF=[
    {State:'Apps',freq:{Test: 0, ODIs:37, T20Is:18}},
    {State:'Mins',freq:{Test: 0, ODIs:36, T20Is:18}},
    {State:'Total',freq:{Test: 0,ODIs:1639, T20Is:373}},
    {State:'OB',freq:{Test: 0,ODIs:1434, T20Is:458 }},
    {State:'6YD',freq:{Test: 0,ODIs:38, T20Is:21 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:37, T20Is:21 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:43, T20Is:18 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:1 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var SteveC=[
    {State:'Apps',freq:{Test: 15, ODIs:39, T20Is:14}},
    {State:'Mins',freq:{Test: 25, ODIs:37, T20Is:14}},
    {State:'Total',freq:{Test: 2571,ODIs:1784, T20Is:295}},
    {State:'OB',freq:{Test: 1222,ODIs:1486, T20Is:327 }},
    {State:'6YD',freq:{Test: 31,ODIs:44, T20Is:20 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 39,ODIs:34, T20Is:16 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 83,ODIs:40, T20Is:15 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:1 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];


var NathanA=[
    {State:'Apps',freq:{Test: 31, ODIs:38, T20Is:7}},
    {State:'Mins',freq:{Test: 58, ODIs:37, T20Is:7}},
    {State:'Total',freq:{Test: 6557,ODIs:1952, T20Is:168}},
    {State:'OB',freq:{Test: 3039,ODIs:1527, T20Is:269 }},
    {State:'6YD',freq:{Test: 118,ODIs:64, T20Is:8 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 26,ODIs:24, T20Is:34 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:10 }},
    {State:'FC',freq:{Test: 56,ODIs:31, T20Is:21 }},
    {State:'THI',freq:{Test: 4,ODIs:1, T20Is:1 }},
    {State:'Rating',freq:{Test: 5,ODIs:3, T20Is:0 }}
];

var JoshuaK=[
    {State:'Apps',freq:{Test: 68, ODIs:13, T20Is:1}},
    {State:'Mins',freq:{Test: 130, ODIs:13, T20Is:1}},
    {State:'Total',freq:{Test: 15952,ODIs:720, T20Is:6}},
    {State:'OB',freq:{Test: 8410,ODIs:592, T20Is:15 }},
    {State:'6YD',freq:{Test: 256,ODIs:17, T20Is:0 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 33,ODIs:35, T20Is:0 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:15 }},
    {State:'FC',freq:{Test: 62,ODIs:42, T20Is:0 }},
    {State:'THI',freq:{Test: 9,ODIs:1, T20Is:0 }},
    {State:'Rating',freq:{Test: 10,ODIs:0, T20Is:0 }}
];

var JuniorS=[
    {State:'Apps',freq:{Test: 1, ODIs:67, T20Is:24}},
    {State:'Mins',freq:{Test: 2, ODIs:65, T20Is:24}},
    {State:'Total',freq:{Test: 166,ODIs:3116, T20Is:515}},
    {State:'OB',freq:{Test: 98,ODIs:2858, T20Is:684 }},
    {State:'6YD',freq:{Test: 6,ODIs:95, T20Is:36 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 16,ODIs:30, T20Is:19 }},
    {State:'THB',freq:{Test: 4,ODIs:6, T20Is:8 }},
    {State:'FC',freq:{Test: 28,ODIs:33, T20Is:14 }},
    {State:'THI',freq:{Test: 1,ODIs:4, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:1 }}
];

var LewisC=[
    {State:'Apps',freq:{Test: 6, ODIs:14, T20Is:25}},
    {State:'Mins',freq:{Test: 9, ODIs:14, T20Is:23}},
    {State:'Total',freq:{Test: 880,ODIs:603, T20Is:476}},
    {State:'OB',freq:{Test: 460,ODIs:523, T20Is:592 }},
    {State:'6YD',freq:{Test: 6,ODIs:21, T20Is:39 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 77,ODIs:25, T20Is:15 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 147,ODIs:28, T20Is:12 }},
    {State:'THI',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var AdamS=[
    {State:'Apps',freq:{Test: 0, ODIs:0, T20Is:1}},
    {State:'Mins',freq:{Test: 0, ODIs:0, T20Is:1}},
    {State:'Total',freq:{Test: 0,ODIs:0, T20Is:21}},
    {State:'OB',freq:{Test: 0,ODIs:0, T20Is:40 }},
    {State:'6YD',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Pty',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'CRS',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Corn',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'THB',freq:{Test: 0,ODIs:0, T20Is:11 }},
    {State:'FC',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var AndrewS =[
    {State:'Apps',freq:{Test: 8, ODIs:4, T20Is:5}},
    {State:'Mins',freq:{Test: 11, ODIs:1, T20Is:4}},
    {State:'Total',freq:{Test: 846,ODIs:12, T20Is:66}},
    {State:'OB',freq:{Test: 506,ODIs:9, T20Is:71 }},
    {State:'6YD',freq:{Test: 8,ODIs:0, T20Is:2 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 63,ODIs:0, T20Is:36 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 106,ODIs:0, T20Is:33 }},
    {State:'THI',freq:{Test: 8,ODIs:8, T20Is:0 }},
    {State:'Rating',freq:{Test: 7,ODIs:5, T20Is:0 }}
];

var RyanF=[
    {State:'Apps',freq:{Test: 36, ODIs:179, T20Is:54}},
    {State:'Mins',freq:{Test: 51, ODIs:179, T20Is:53}},
    {State:'Total',freq:{Test: 5990,ODIs:8951, T20Is:1139}},
    {State:'OB',freq:{Test: 3239,ODIs:7089, T20Is:1527 }},
    {State:'6YD',freq:{Test: 78,ODIs:232, T20Is:42 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 42,ODIs:30, T20Is:36 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:8 }},
    {State:'FC',freq:{Test: 78,ODIs:39, T20Is:27 }},
    {State:'THI',freq:{Test: 4,ODIs:6, T20Is:1 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var JordonI=[
    {State:'Apps',freq:{Test: 10, ODIs:56, T20Is:11}},
    {State:'Mins',freq:{Test: 17, ODIs:56, T20Is:11}},
    {State:'Total',freq:{Test: 1506,ODIs:2342, T20Is:220}},
    {State:'OB',freq:{Test: 822,ODIs:2294, T20Is:275 }},
    {State:'6YD',freq:{Test: 15,ODIs:63, T20Is:8 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 55,ODIs:36, T20Is:34 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:8 }},
    {State:'FC',freq:{Test: 100,ODIs:37, T20Is:28 }},
    {State:'THI',freq:{Test: 0,ODIs:4, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var CharlieD=[
    {State:'Apps',freq:{Test: 14, ODIs:4, T20Is:0}},
    {State:'Mins',freq:{Test: 26, ODIs:4, T20Is:0}},
    {State:'Total',freq:{Test: 3321,ODIs:222, T20Is:0}},
    {State:'OB',freq:{Test: 1737,ODIs:151, T20Is:0 }},
    {State:'6YD',freq:{Test: 52,ODIs:5, T20Is:300 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:0 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:0 }},
    {State:'Corn',freq:{Test: 33,ODIs:30, T20Is:0 }},
    {State:'THB',freq:{Test: 3,ODIs:4, T20Is:0 }},
    {State:'FC',freq:{Test: 64,ODIs:44, T20Is:0 }},
    {State:'THI',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'Rating',freq:{Test: 37,ODIs:0, T20Is:0 }}
];

var DanG=[
    {State:'Apps',freq:{Test: 4, ODIs:29, T20Is:15}},
    {State:'Mins',freq:{Test: 8, ODIs:28, T20Is:13}},
    {State:'Total',freq:{Test: 738,ODIs:1269, T20Is:269}},
    {State:'OB',freq:{Test: 565,ODIs:1203, T20Is:308 }},
    {State:'6YD',freq:{Test: 7,ODIs:43, T20Is:10 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 81,ODIs:28, T20Is:31 }},
    {State:'THB',freq:{Test: 5,ODIs:6, T20Is:7 }},
    {State:'FC',freq:{Test: 106,ODIs:30, T20Is:27 }},
    {State:'THI',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var CallumW=[
    {State:'Apps',freq:{Test: 3, ODIs:14, T20Is:0}},
    {State:'Mins',freq:{Test: 4, ODIs:14, T20Is:0}},
    {State:'Total',freq:{Test: 456,ODIs:737, T20Is:0}},
    {State:'OB',freq:{Test: 228,ODIs:731, T20Is:0 }},
    {State:'6YD',freq:{Test: 2,ODIs:20, T20Is:0 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:0 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:0 }},
    {State:'Corn',freq:{Test: 114,ODIs:37, T20Is:0 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:0 }},
    {State:'FC',freq:{Test: 228,ODIs:37, T20Is:0 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var AsmirB=[
    {State:'Apps',freq:{Test: 108, ODIs:121, T20Is:56}},
    {State:'Mins',freq:{Test: 198, ODIs:121, T20Is:55}},
    {State:'Total',freq:{Test: 22177,ODIs:6109, T20Is:1173}},
    {State:'OB',freq:{Test: 11122,ODIs:5364, T20Is:1491 }},
    {State:'6YD',freq:{Test: 386,ODIs:178, T20Is:65 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 29,ODIs:30, T20Is:23 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 57,ODIs:34, T20Is:18 }},
    {State:'THI',freq:{Test: 14,ODIs:9, T20Is:1 }},
    {State:'Rating',freq:{Test: 15,ODIs:1, T20Is:0 }}
];

var HarryA=[
    {State:'Apps',freq:{Test: 10, ODIs:19, T20Is:2}},
    {State:'Mins',freq:{Test: 19, ODIs:19, T20Is:2}},
    {State:'Total',freq:{Test: 1863,ODIs:997, T20Is:42}},
    {State:'OB',freq:{Test: 1057,ODIs:896, T20Is:62 }},
    {State:'6YD',freq:{Test: 26,ODIs:21, T20Is:5 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 41,ODIs:43, T20Is:13 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:9 }},
    {State:'FC',freq:{Test: 72,ODIs:47, T20Is:8 }},
    {State:'THI',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var alexoo=[
    {State:'App',freq:{Test: 36, ODIs:69, T20Is:21}},
    {State:'Mins',freq:{Test: 66, ODIs:67, T20Is:21}},
    {State:'Total',freq:{Test: 6412,ODIs:3550, T20Is:480}},
    {State:'OB',freq:{Test: 3800,ODIs:2996, T20Is:583 }},
    {State:'6YD',freq:{Test: 125,ODIs:102, T20Is:27 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 30,ODIs:29, T20Is:22 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 51,ODIs:35, T20Is:17 }},
    {State:'THI',freq:{Test: 6,ODIs:4, T20Is:0 }},
    {State:'Rating',freq:{Test: 5,ODIs:2, T20Is:0 }}
];


var JermainD=[
    {State:'Apps',freq:{Test: 8, ODIs:3, T20Is:25}},
    {State:'Mins',freq:{Test: 16, ODIs:31, T20Is:25}},
    {State:'Total',freq:{Test: 1530,ODIs:1532, T20Is:534}},
    {State:'OB',freq:{Test: 752,ODIs:1521, T20Is:766 }},
    {State:'6YD',freq:{Test: 21,ODIs:43, T20Is:30 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 36,ODIs:35, T20Is:26 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'FC',freq:{Test: 73,ODIs:36, T20Is:18 }},
    {State:'THI',freq:{Test: 1,ODIs:0, T20Is:1 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var MarcP=[
    {State:'Apps',freq:{Test: 3, ODIs:1, T20Is:0}},
    {State:'Mins',freq:{Test: 6, ODIs:1, T20Is:0}},
    {State:'Total',freq:{Test: 404,ODIs:42, T20Is:0}},
    {State:'OB',freq:{Test: 271,ODIs:34, T20Is:0 }},
    {State:'6YD',freq:{Test: 14,ODIs:1, T20Is:0 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:0 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:0 }},
    {State:'Corn',freq:{Test: 19,ODIs:34, T20Is:0 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:0 }},
    {State:'FC',freq:{Test: 29,ODIs:42, T20Is:0 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var LysM=[
    {State:'Apps',freq:{Test: 128, ODIs:194, T20Is:19}},
    {State:'Mins',freq:{Test: 240, ODIs:191, T20Is:19}},
    {State:'Total',freq:{Test: 28042,ODIs:9584, T20Is:422}},
    {State:'OB',freq:{Test: 13787,ODIs:7861, T20Is:552 }},
    {State:'6YD',freq:{Test: 497,ODIs:269, T20Is:18 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 28,ODIs:29, T20Is:31 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'FC',freq:{Test: 56,ODIs:36, T20Is:23 }},
    {State:'THI',freq:{Test: 8,ODIs:8, T20Is:0 }},
    {State:'Rating',freq:{Test: 7,ODIs:5, T20Is:0 }}
];

var TyroneM=[
    {State:'Apps',freq:{Test: 13, ODIs:57, T20Is:13}},
    {State:'Mins',freq:{Test: 25, ODIs:57, T20Is:13}},
    {State:'Total',freq:{Test: 287,ODIs:2789, T20Is:2659}},
    {State:'OB',freq:{Test: 1536,ODIs:2687, T20Is:356 }},
    {State:'6YD',freq:{Test: 41,ODIs:88, T20Is:16 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 37,ODIs:31, T20Is:22 }},
    {State:'THB',freq:{Test: 4,ODIs:6, T20Is:7 }},
    {State:'FC',freq:{Test: 65,ODIs:32, T20Is:18 }},
    {State:'THI',freq:{Test: 1,ODIs:3, T20Is:0 }},
    {State:'Rating',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var BenikA=[
    {State:'Apps',freq:{Test: 18, ODIs:63, T20Is:8}},
    {State:'Mins',freq:{Test: 34, ODIs:62, T20Is:8}},
    {State:'Total',freq:{Test: 2950,ODIs:3024, T20Is:162}},
    {State:'OB',freq:{Test: 1530,ODIs:2813, T20Is:253 }},
    {State:'6YD',freq:{Test: 50,ODIs:89, T20Is:7 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 31,ODIs:32, T20Is:36 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'FC',freq:{Test: 59,ODIs:34, T20Is:23 }},
    {State:'THI',freq:{Test: 1,ODIs:8, T20Is:0 }},
    {State:'Rating',freq:{Test: 2,ODIs:2, T20Is:0 }}
];

var EmersonH=[
    {State:'Apps',freq:{Test: 3, ODIs:1, T20Is:4}},
    {State:'Mins',freq:{Test: 5, ODIs:1, T20Is:4}},
    {State:'Total',freq:{Test: 526,ODIs:48, T20Is:84}},
    {State:'OB',freq:{Test: 298,ODIs:70, T20Is:102 }},
    {State:'6YD',freq:{Test: 7,ODIs:2, T20Is:4 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 43,ODIs:35, T20Is:25 }},
    {State:'THB',freq:{Test: 4,ODIs:9, T20Is:7 }},
    {State:'FC',freq:{Test: 75,ODIs:24, T20Is:21 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var SollyM=[
    {State:'Apps',freq:{Test: 10, ODIs:49, T20Is:23}},
    {State:'Mins',freq:{Test: 18, ODIs:47, T20Is:21}},
    {State:'Total',freq:{Test: 2544,ODIs:2452, T20Is:414}},
    {State:'OB',freq:{Test: 1629,ODIs:2292, T20Is:547 }},
    {State:'6YD',freq:{Test: 38,ODIs:70, T20Is:16 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 43,ODIs:33, T20Is:34 }},
    {State:'THB',freq:{Test: 4,ODIs:6, T20Is:8}},
    {State:'FC',freq:{Test: 67,ODIs:35, T20Is:26 }},
    {State:'THI',freq:{Test: 5,ODIs:5, T20Is:0 }},
    {State:'Rating',freq:{Test: 1,ODIs:1, T20Is:0 }}
];

var TomerH=[
    {State:'Apps',freq:{Test: 2, ODIs:6, T20Is:1}},
    {State:'Mins',freq:{Test: 4, ODIs:5, T20Is:1}},
    {State:'Total',freq:{Test: 348,ODIs:286, T20Is:24}},
    {State:'OB',freq:{Test: 187,ODIs:189, T20Is:34 }},
    {State:'6YD',freq:{Test: 9,ODIs:10, T20Is:1 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 21,ODIs:19, T20Is:34 }},
    {State:'THB',freq:{Test: 3,ODIs:4, T20Is:9 }},
    {State:'FC',freq:{Test: 39,ODIs:29, T20Is:24 }},
    {State:'THI',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var GaëtanB=[
    {State:'Apps',freq:{Test: 25, ODIs:49, T20Is:7}},
    {State:'Mins',freq:{Test: 48, ODIs:48, T20Is:77}},
    {State:'Total',freq:{Test: 4671,ODIs:2465, T20Is:142}},
    {State:'OB',freq:{Test: 2655,ODIs:2247, T20Is:250 }},
    {State:'6YD',freq:{Test: 86,ODIs:91, T20Is:8 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 31,ODIs:25, T20Is:31 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:11 }},
    {State:'FC',freq:{Test: 54,ODIs:27, T20Is:18 }},
    {State:'THI',freq:{Test: 4,ODIs:6, T20Is:0 }},
    {State:'Rating',freq:{Test: 2,ODIs:0, T20Is:0 }}
];

var GlennM=[
    {State:'Apps',freq:{Test: 17, ODIs:120, T20Is:26}},
    {State:'Mins',freq:{Test: 29, ODIs:120, T20Is:26}},
    {State:'Total',freq:{Test: 3447,ODIs:5751, T20Is:566}},
    {State:'OB',freq:{Test: 1866,ODIs:4981, T20Is:729 }},
    {State:'6YD',freq:{Test: 44,ODIs:157, T20Is:34 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 42,ODIs:32, T20Is:21 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'FC',freq:{Test: 78,ODIs:37, T20Is:17 }},
    {State:'THI',freq:{Test: 2,ODIs:5, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:2, T20Is:0 }}
];

var MarkusS=[
    {State:'Apps',freq:{Test: 77, ODIs:80, T20Is:14}},
    {State:'Mins',freq:{Test: 136, ODIs:78, T20Is:14}},
    {State:'Total',freq:{Test: 14775,ODIs:3733, T20Is:278}},
    {State:'OB',freq:{Test: 8051,ODIs:3563, T20Is:400 }},
    {State:'6YD',freq:{Test: 218,ODIs:115, T20Is:8 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 37,ODIs:31, T20Is:50 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'FC',freq:{Test: 68,ODIs:32, T20Is:35 }},
    {State:'THI',freq:{Test: 8,ODIs:6, T20Is:0 }},
    {State:'Rating',freq:{Test: 7,ODIs:0, T20Is:0 }}
];

var ConnorG=[
    {State:'Apps',freq:{Test: 0, ODIs:4, T20Is:1}},
    {State:'Mins',freq:{Test: 0, ODIs:8, T20Is:1}},
    {State:'Total',freq:{Test: 0,ODIs:627, T20Is:24}},
    {State:'OB',freq:{Test: 0,ODIs:367, T20Is:8 }},
    {State:'6YD',freq:{Test: 0,ODIs:11, T20Is:1 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:33, T20Is:8 }},
    {State:'THB',freq:{Test: 0,ODIs:4, T20Is:2 }},
    {State:'FC',freq:{Test: 0,ODIs:57, T20Is:24 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var EzequielS=[
    {State:'Apps',freq:{Test: 0, ODIs:20, T20Is:24}},
    {State:'Mins',freq:{Test: 0, ODIs:20, T20Is:24}},
    {State:'Total',freq:{Test: 0,ODIs:1037, T20Is:535}},
    {State:'OB',freq:{Test: 0,ODIs:811, T20Is:587 }},
    {State:'6YD',freq:{Test: 0,ODIs:39, T20Is:33 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:27, T20Is:16 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:25, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:3, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var LiamR=[
    {State:'Apps',freq:{Test: 18, ODIs:70, T20Is:17}},
    {State:'Mins',freq:{Test: 31, ODIs:69, T20Is:17}},
    {State:'Total',freq:{Test: 2718,ODIs:3392, T20Is:366}},
    {State:'OB',freq:{Test: 1345,ODIs:2769, T20Is:408 }},
    {State:'6YD',freq:{Test: 45,ODIs:70, T20Is:16 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 30,ODIs:40, T20Is:26 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 60,ODIs:48, T20Is:23 }},
    {State:'THI',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'Rating',freq:{Test: 4,ODIs:0, T20Is:0 }}
];

var UweH=[
    {State:'Apps',freq:{Test: 34, ODIs:70, T20Is:1}},
    {State:'Mins',freq:{Test: 66, ODIs:68, T20Is:1}},
    {State:'Total',freq:{Test: 5598,ODIs:3259, T20Is:18}},
    {State:'OB',freq:{Test: 3378,ODIs:3219, T20Is:24 }},
    {State:'6YD',freq:{Test: 94,ODIs:98, T20Is:1 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 36,ODIs:33, T20Is:24 }},
    {State:'THB',freq:{Test: 4,ODIs:6, T20Is:8 }},
    {State:'FC',freq:{Test: 60,ODIs:33, T20Is:18 }},
    {State:'THI',freq:{Test: 4,ODIs:3, T20Is:0 }},
    {State:'Rating',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var LeonardoU=[
    {State:'Apps',freq:{Test: 0, ODIs:6, T20Is:6}},
    {State:'Mins',freq:{Test: 0, ODIs:6, T20Is:6}},
    {State:'Total',freq:{Test: 0,ODIs:324, T20Is:144}},
    {State:'OB',freq:{Test: 0,ODIs:229, T20Is:174 }},
    {State:'6YD',freq:{Test: 0,ODIs:10, T20Is:11 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:23, T20Is:16 }},
    {State:'THB',freq:{Test: 0,ODIs:4, T20Is:7 }},
    {State:'FC',freq:{Test: 50,ODIs:32, T20Is:13 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:1 }}
];

var BeramK=[
    {State:'Apps',freq:{Test: 22, ODIs:36, T20Is:10}},
    {State:'Mins',freq:{Test: 40, ODIs:34, T20Is:10}},
    {State:'Total',freq:{Test: 5103,ODIs:1917, T20Is:228}},
    {State:'OB',freq:{Test: 2715,ODIs:1511, T20Is:240 }},
    {State:'6YD',freq:{Test: 76,ODIs:64, T20Is:16 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 28,ODIs:21, T20Is:19 }},
    {State:'THB',freq:{Test: 36,ODIs:24, T20Is:15 }},
    {State:'FC',freq:{Test: 3,ODIs:5, T20Is:6 }},
    {State:'THI',freq:{Test: 67,ODIs:29, T20Is:14 }},
    {State:'Rating',freq:{Test: 2,ODIs:2, T20Is:0 }}
];

var IsaiahB=[
    {State:'Apps',freq:{Test: 0, ODIs:59, T20Is:37}},
    {State:'Mins',freq:{Test: 0, ODIs:52, T20Is:33}},
    {State:'Total',freq:{Test: 0,ODIs:1953, T20Is:606}},
    {State:'OB',freq:{Test: 0,ODIs:1510, T20Is:714 }},
    {State:'6YD',freq:{Test: 0,ODIs:63, T20Is:35 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:24, T20Is:20 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:31, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:1, T20Is:3 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var JürgenL=[
    {State:'Apps',freq:{Test: 0, ODIs:20, T20Is:20}},
    {State:'Mins',freq:{Test: 0, ODIs:16, T20Is:12}},
    {State:'Total',freq:{Test: 0,ODIs:559, T20Is:171}},
    {State:'OB',freq:{Test: 0,ODIs:490, T20Is:226 }},
    {State:'6YD',freq:{Test: 0,ODIs:12, T20Is:6 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:41, T20Is:38 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:8 }},
    {State:'FC',freq:{Test: 0,ODIs:47, T20Is:29 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var JamieM=[
    {State:'Apps',freq:{Test: 345, ODIs:30, T20Is:30}},
    {State:'Mins',freq:{Test: 345, ODIs:26, T20Is:19}},
    {State:'Total',freq:{Test: 345,ODIs:812, T20Is:228}},
    {State:'OB',freq:{Test: 345,ODIs:704, T20Is:352 }},
    {State:'6YD',freq:{Test: 345,ODIs:23, T20Is:8 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 345,ODIs:30, T20Is:44 }},
    {State:'THB',freq:{Test: 345,ODIs:5, T20Is:9 }},
    {State:'FC',freq:{Test: 345,ODIs:35, T20Is:28 }},
    {State:'THI',freq:{Test: 345,ODIs:2, T20Is:0 }},
    {State:'Rating',freq:{Test: 345,ODIs:0, T20Is:0 }}
];

var SamB=[
    {State:'Apps',freq:{Test: 36, ODIs:68, T20Is:22}},
    {State:'Mins',freq:{Test: 68, ODIs:68, T20Is:22}},
    {State:'Total',freq:{Test: 7355,ODIs:3359, T20Is:566}},
    {State:'OB',freq:{Test: 4197,ODIs:2698, T20Is:352 }},
    {State:'6YD',freq:{Test: 148,ODIs:134, T20Is:30 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 28,ODIs:21, T20Is:19 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 50,ODIs:25, T20Is:17 }},
    {State:'THI',freq:{Test: 8,ODIs:8, T20Is:0 }},
    {State:'Rating',freq:{Test: 7,ODIs:5, T20Is:0 }}
];

var ShaneD=[
    {State:'Apps',freq:{Test: 4, ODIs:31, T20Is:18}},
    {State:'Mins',freq:{Test: 7, ODIs:31, T20Is:18}},
    {State:'Total',freq:{Test: 906,ODIs:1566, T20Is:414}},
    {State:'OB',freq:{Test: 460,ODIs:1447, T20Is:472 }},
    {State:'6YD',freq:{Test: 19,ODIs:53, T20Is:23 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 2248,ODIs:27, T20Is:21 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:7 }},
    {State:'FC',freq:{Test: 48,ODIs:30, T20Is:18 }},
    {State:'THI',freq:{Test: 1,ODIs:3, T20Is:0 }},
    {State:'Rating',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var LewisD=[
    {State:'Apps',freq:{Test: 0, ODIs:0, T20Is:5}},
    {State:'Mins',freq:{Test: 0, ODIs:0, T20Is:5}},
    {State:'Total',freq:{Test: 0,ODIs:0, T20Is:110}},
    {State:'OB',freq:{Test: 0,ODIs:0, T20Is:188 }},
    {State:'6YD',freq:{Test: 0,ODIs:0, T20Is:5 }},
    {State:'Pty',freq:{Test: 0,ODIs:0, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:0, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:0, T20Is:38 }},
    {State:'THB',freq:{Test: 0,ODIs:0, T20Is:10 }},
    {State:'FC',freq:{Test: 0,ODIs:0, T20Is:22 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var PascalG=[
    {State:'Apps',freq:{Test: 0, ODIs:24, T20Is:10}},
    {State:'Mins',freq:{Test: 0, ODIs:24, T20Is:10}},
    {State:'Total',freq:{Test: 0,ODIs:1162, T20Is:210}},
    {State:'OB',freq:{Test: 0,ODIs:1056, T20Is:212 }},
    {State:'6YD',freq:{Test: 0,ODIs:36, T20Is:14 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:29, T20Is:15 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:6 }},
    {State:'FC',freq:{Test: 0,ODIs:32, T20Is:15 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var MarcA=[
    {State:'Apps',freq:{Test: 31, ODIs:38, T20Is:7}},
    {State:'Mins',freq:{Test: 58, ODIs:37, T20Is:7}},
    {State:'Total',freq:{Test: 6557,ODIs:1952, T20Is:168}},
    {State:'OB',freq:{Test: 3039,ODIs:1527, T20Is:269 }},
    {State:'6YD',freq:{Test: 118,ODIs:64, T20Is:8 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 26,ODIs:24, T20Is:34 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:10 }},
    {State:'FC',freq:{Test: 56,ODIs:31, T20Is:21 }},
    {State:'THI',freq:{Test: 4,ODIs:1, T20Is:1 }},
    {State:'Rating',freq:{Test: 5,ODIs:3, T20Is:0 }}
];

var ChrisW=[
    {State:'Apps',freq:{Test: 68, ODIs:13, T20Is:1}},
    {State:'Mins',freq:{Test: 130, ODIs:13, T20Is:1}},
    {State:'Total',freq:{Test: 15952,ODIs:720, T20Is:6}},
    {State:'OB',freq:{Test: 8410,ODIs:592, T20Is:15 }},
    {State:'6YD',freq:{Test: 256,ODIs:17, T20Is:0 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 33,ODIs:35, T20Is:0 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:15 }},
    {State:'FC',freq:{Test: 62,ODIs:42, T20Is:0 }},
    {State:'THI',freq:{Test: 9,ODIs:1, T20Is:0 }},
    {State:'Rating',freq:{Test: 10,ODIs:0, T20Is:0 }}
];

var StevenD=[
    {State:'Apps',freq:{Test: 1, ODIs:67, T20Is:24}},
    {State:'Mins',freq:{Test: 2, ODIs:65, T20Is:24}},
    {State:'Total',freq:{Test: 166,ODIs:3116, T20Is:515}},
    {State:'OB',freq:{Test: 98,ODIs:2858, T20Is:684 }},
    {State:'6YD',freq:{Test: 6,ODIs:95, T20Is:36 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 16,ODIs:30, T20Is:19 }},
    {State:'THB',freq:{Test: 4,ODIs:6, T20Is:8 }},
    {State:'FC',freq:{Test: 28,ODIs:33, T20Is:14 }},
    {State:'THI',freq:{Test: 1,ODIs:4, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:1 }}
];

var CharlieT=[
    {State:'Apps',freq:{Test: 6, ODIs:14, T20Is:25}},
    {State:'Mins',freq:{Test: 9, ODIs:14, T20Is:23}},
    {State:'Total',freq:{Test: 880,ODIs:603, T20Is:476}},
    {State:'OB',freq:{Test: 460,ODIs:523, T20Is:592 }},
    {State:'6YD',freq:{Test: 6,ODIs:21, T20Is:39 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 77,ODIs:25, T20Is:15 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 147,ODIs:28, T20Is:12 }},
    {State:'THI',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var JackC=[
    {State:'Apps',freq:{Test: 0, ODIs:0, T20Is:1}},
    {State:'Mins',freq:{Test: 0, ODIs:0, T20Is:1}},
    {State:'Total',freq:{Test: 0,ODIs:0, T20Is:21}},
    {State:'OB',freq:{Test: 0,ODIs:0, T20Is:40 }},
    {State:'6YD',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Pty',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'CRS',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Corn',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'THB',freq:{Test: 0,ODIs:0, T20Is:11 }},
    {State:'FC',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var ScottA=[
    {State:'Apps',freq:{Test: 8, ODIs:4, T20Is:5}},
    {State:'Mins',freq:{Test: 11, ODIs:1, T20Is:4}},
    {State:'Total',freq:{Test: 846,ODIs:12, T20Is:66}},
    {State:'OB',freq:{Test: 506,ODIs:9, T20Is:71 }},
    {State:'6YD',freq:{Test: 8,ODIs:0, T20Is:2 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 63,ODIs:0, T20Is:36 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 106,ODIs:0, T20Is:33 }},
    {State:'THI',freq:{Test: 8,ODIs:8, T20Is:0 }},
    {State:'Rating',freq:{Test: 7,ODIs:5, T20Is:0 }}
];

var AaronL=[
    {State:'Apps',freq:{Test: 36, ODIs:179, T20Is:54}},
    {State:'Mins',freq:{Test: 51, ODIs:179, T20Is:53}},
    {State:'Total',freq:{Test: 5990,ODIs:8951, T20Is:1139}},
    {State:'OB',freq:{Test: 3239,ODIs:7089, T20Is:1527 }},
    {State:'6YD',freq:{Test: 78,ODIs:232, T20Is:42 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 42,ODIs:30, T20Is:36 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:8 }},
    {State:'FC',freq:{Test: 78,ODIs:39, T20Is:27 }},
    {State:'THI',freq:{Test: 4,ODIs:6, T20Is:1 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var AshleyB=[
    {State:'Apps',freq:{Test: 10, ODIs:56, T20Is:11}},
    {State:'Mins',freq:{Test: 17, ODIs:56, T20Is:11}},
    {State:'Total',freq:{Test: 1506,ODIs:2342, T20Is:220}},
    {State:'OB',freq:{Test: 822,ODIs:2294, T20Is:275 }},
    {State:'6YD',freq:{Test: 15,ODIs:63, T20Is:8 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 55,ODIs:36, T20Is:34 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:8 }},
    {State:'FC',freq:{Test: 100,ODIs:37, T20Is:28 }},
    {State:'THI',freq:{Test: 0,ODIs:4, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var TomH=[
    {State:'Apps',freq:{Test: 14, ODIs:4, T20Is:0}},
    {State:'Mins',freq:{Test: 26, ODIs:4, T20Is:0}},
    {State:'Total',freq:{Test: 3321,ODIs:222, T20Is:0}},
    {State:'OB',freq:{Test: 1737,ODIs:151, T20Is:0 }},
    {State:'6YD',freq:{Test: 52,ODIs:5, T20Is:300 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:0 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:0 }},
    {State:'Corn',freq:{Test: 33,ODIs:30, T20Is:0 }},
    {State:'THB',freq:{Test: 3,ODIs:4, T20Is:0 }},
    {State:'FC',freq:{Test: 64,ODIs:44, T20Is:0 }},
    {State:'THI',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'Rating',freq:{Test: 37,ODIs:0, T20Is:0 }}
];

var SamV=[
    {State:'Apps',freq:{Test: 4, ODIs:29, T20Is:15}},
    {State:'Mins',freq:{Test: 8, ODIs:28, T20Is:13}},
    {State:'Total',freq:{Test: 738,ODIs:1269, T20Is:269}},
    {State:'OB',freq:{Test: 565,ODIs:1203, T20Is:308 }},
    {State:'6YD',freq:{Test: 7,ODIs:43, T20Is:10 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 81,ODIs:28, T20Is:31 }},
    {State:'THB',freq:{Test: 5,ODIs:6, T20Is:7 }},
    {State:'FC',freq:{Test: 106,ODIs:30, T20Is:27 }},
    {State:'THI',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var AshleyW=[
    {State:'Apps',freq:{Test: 3, ODIs:14, T20Is:0}},
    {State:'Mins',freq:{Test: 4, ODIs:14, T20Is:0}},
    {State:'Total',freq:{Test: 456,ODIs:737, T20Is:0}},
    {State:'OB',freq:{Test: 228,ODIs:731, T20Is:0 }},
    {State:'6YD',freq:{Test: 2,ODIs:20, T20Is:0 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:0 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:0 }},
    {State:'Corn',freq:{Test: 114,ODIs:37, T20Is:0 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:0 }},
    {State:'FC',freq:{Test: 228,ODIs:37, T20Is:0 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var JeffH=[
    {State:'Apps',freq:{Test: 108, ODIs:121, T20Is:56}},
    {State:'Mins',freq:{Test: 198, ODIs:121, T20Is:55}},
    {State:'Total',freq:{Test: 22177,ODIs:6109, T20Is:1173}},
    {State:'OB',freq:{Test: 11122,ODIs:5364, T20Is:1491 }},
    {State:'6YD',freq:{Test: 386,ODIs:178, T20Is:65 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 29,ODIs:30, T20Is:23 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 57,ODIs:34, T20Is:18 }},
    {State:'THI',freq:{Test: 14,ODIs:9, T20Is:1 }},
    {State:'Rating',freq:{Test: 15,ODIs:1, T20Is:0 }}
];

var GeorgesK=[
    {State:'Apps',freq:{Test: 10, ODIs:19, T20Is:2}},
    {State:'Mins',freq:{Test: 19, ODIs:19, T20Is:2}},
    {State:'Total',freq:{Test: 1863,ODIs:997, T20Is:42}},
    {State:'OB',freq:{Test: 1057,ODIs:896, T20Is:62 }},
    {State:'6YD',freq:{Test: 26,ODIs:21, T20Is:5 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 41,ODIs:43, T20Is:13 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:9 }},
    {State:'FC',freq:{Test: 72,ODIs:47, T20Is:8 }},
    {State:'THI',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var NahkiW=[
    {State:'Apps',freq:{Test: 36, ODIs:69, T20Is:21}},
    {State:'Mins',freq:{Test: 66, ODIs:67, T20Is:21}},
    {State:'Total',freq:{Test: 6412,ODIs:3550, T20Is:480}},
    {State:'OB',freq:{Test: 3800,ODIs:2996, T20Is:583 }},
    {State:'6YD',freq:{Test: 125,ODIs:102, T20Is:27 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 30,ODIs:29, T20Is:22 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 51,ODIs:35, T20Is:17 }},
    {State:'THI',freq:{Test: 6,ODIs:4, T20Is:0 }},
    {State:'Rating',freq:{Test: 5,ODIs:2, T20Is:0 }}
];


var DwightM=[
    {State:'Apps',freq:{Test: 8, ODIs:3, T20Is:25}},
    {State:'Mins',freq:{Test: 16, ODIs:31, T20Is:25}},
    {State:'Total',freq:{Test: 1530,ODIs:1532, T20Is:534}},
    {State:'OB',freq:{Test: 752,ODIs:1521, T20Is:766 }},
    {State:'6YD',freq:{Test: 21,ODIs:43, T20Is:30 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 36,ODIs:35, T20Is:26 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'FC',freq:{Test: 73,ODIs:36, T20Is:18 }},
    {State:'THI',freq:{Test: 1,ODIs:0, T20Is:1 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var JonathanW=[
    {State:'Apps',freq:{Test: 3, ODIs:1, T20Is:0}},
    {State:'Mins',freq:{Test: 6, ODIs:1, T20Is:0}},
    {State:'Total',freq:{Test: 404,ODIs:42, T20Is:0}},
    {State:'OB',freq:{Test: 271,ODIs:34, T20Is:0 }},
    {State:'6YD',freq:{Test: 14,ODIs:1, T20Is:0 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:0 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:0 }},
    {State:'Corn',freq:{Test: 19,ODIs:34, T20Is:0 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:0 }},
    {State:'FC',freq:{Test: 29,ODIs:42, T20Is:0 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var JamesT=[
    {State:'Apps',freq:{Test: 128, ODIs:194, T20Is:19}},
    {State:'Mins',freq:{Test: 240, ODIs:191, T20Is:19}},
    {State:'Total',freq:{Test: 28042,ODIs:9584, T20Is:422}},
    {State:'OB',freq:{Test: 13787,ODIs:7861, T20Is:552 }},
    {State:'6YD',freq:{Test: 497,ODIs:269, T20Is:18 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 28,ODIs:29, T20Is:31 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'FC',freq:{Test: 56,ODIs:36, T20Is:23 }},
    {State:'THI',freq:{Test: 8,ODIs:8, T20Is:0 }},
    {State:'Rating',freq:{Test: 7,ODIs:5, T20Is:0 }}
];

var KevinL=[
    {State:'Apps',freq:{Test: 13, ODIs:57, T20Is:13}},
    {State:'Mins',freq:{Test: 25, ODIs:57, T20Is:13}},
    {State:'Total',freq:{Test: 287,ODIs:2789, T20Is:2659}},
    {State:'OB',freq:{Test: 1536,ODIs:2687, T20Is:356 }},
    {State:'6YD',freq:{Test: 41,ODIs:88, T20Is:16 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 37,ODIs:31, T20Is:22 }},
    {State:'THB',freq:{Test: 4,ODIs:6, T20Is:7 }},
    {State:'FC',freq:{Test: 65,ODIs:32, T20Is:18 }},
    {State:'THI',freq:{Test: 1,ODIs:3, T20Is:0 }},
    {State:'Rating',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var BenM=[
    {State:'Apps',freq:{Test: 18, ODIs:63, T20Is:8}},
    {State:'Mins',freq:{Test: 34, ODIs:62, T20Is:8}},
    {State:'Total',freq:{Test: 2950,ODIs:3024, T20Is:162}},
    {State:'OB',freq:{Test: 1530,ODIs:2813, T20Is:253 }},
    {State:'6YD',freq:{Test: 50,ODIs:89, T20Is:7 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 31,ODIs:32, T20Is:36 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'FC',freq:{Test: 59,ODIs:34, T20Is:23 }},
    {State:'THI',freq:{Test: 1,ODIs:8, T20Is:0 }},
    {State:'Rating',freq:{Test: 2,ODIs:2, T20Is:0 }}
];

var RobbieB=[
    {State:'Apps',freq:{Test: 3, ODIs:1, T20Is:4}},
    {State:'Mins',freq:{Test: 5, ODIs:1, T20Is:4}},
    {State:'Total',freq:{Test: 526,ODIs:48, T20Is:84}},
    {State:'OB',freq:{Test: 298,ODIs:70, T20Is:102 }},
    {State:'6YD',freq:{Test: 7,ODIs:2, T20Is:4 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 43,ODIs:35, T20Is:25 }},
    {State:'THB',freq:{Test: 4,ODIs:9, T20Is:7 }},
    {State:'FC',freq:{Test: 75,ODIs:24, T20Is:21 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var JohannB=[
    {State:'Apps',freq:{Test: 10, ODIs:49, T20Is:23}},
    {State:'Mins',freq:{Test: 18, ODIs:47, T20Is:21}},
    {State:'Total',freq:{Test: 2544,ODIs:2452, T20Is:414}},
    {State:'OB',freq:{Test: 1629,ODIs:2292, T20Is:547 }},
    {State:'6YD',freq:{Test: 38,ODIs:70, T20Is:16 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 43,ODIs:33, T20Is:34 }},
    {State:'THB',freq:{Test: 4,ODIs:6, T20Is:8}},
    {State:'FC',freq:{Test: 67,ODIs:35, T20Is:26 }},
    {State:'THI',freq:{Test: 5,ODIs:5, T20Is:0 }},
    {State:'Rating',freq:{Test: 1,ODIs:1, T20Is:0 }}
];

var DavidMiller=[
    {State:'Apps',freq:{Test: 2, ODIs:6, T20Is:1}},
    {State:'Mins',freq:{Test: 4, ODIs:5, T20Is:1}},
    {State:'Total',freq:{Test: 348,ODIs:286, T20Is:24}},
    {State:'OB',freq:{Test: 187,ODIs:189, T20Is:34 }},
    {State:'6YD',freq:{Test: 9,ODIs:10, T20Is:1 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 21,ODIs:19, T20Is:34 }},
    {State:'THB',freq:{Test: 3,ODIs:4, T20Is:9 }},
    {State:'FC',freq:{Test: 39,ODIs:29, T20Is:24 }},
    {State:'THI',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var JeanPaulDuminy=[
    {State:'Apps',freq:{Test: 25, ODIs:49, T20Is:7}},
    {State:'Mins',freq:{Test: 48, ODIs:48, T20Is:77}},
    {State:'Total',freq:{Test: 4671,ODIs:2465, T20Is:142}},
    {State:'OB',freq:{Test: 2655,ODIs:2247, T20Is:250 }},
    {State:'6YD',freq:{Test: 86,ODIs:91, T20Is:8 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 31,ODIs:25, T20Is:31 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:11 }},
    {State:'FC',freq:{Test: 54,ODIs:27, T20Is:18 }},
    {State:'THI',freq:{Test: 4,ODIs:6, T20Is:0 }},
    {State:'Rating',freq:{Test: 2,ODIs:0, T20Is:0 }}
];

var WayneParnell=[
    {State:'Apps',freq:{Test: 17, ODIs:120, T20Is:26}},
    {State:'Mins',freq:{Test: 29, ODIs:120, T20Is:26}},
    {State:'Total',freq:{Test: 3447,ODIs:5751, T20Is:566}},
    {State:'OB',freq:{Test: 1866,ODIs:4981, T20Is:729 }},
    {State:'6YD',freq:{Test: 44,ODIs:157, T20Is:34 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 42,ODIs:32, T20Is:21 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'FC',freq:{Test: 78,ODIs:37, T20Is:17 }},
    {State:'THI',freq:{Test: 2,ODIs:5, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:2, T20Is:0 }}
];

var ChrisMorris=[
    {State:'Apps',freq:{Test: 77, ODIs:80, T20Is:14}},
    {State:'Mins',freq:{Test: 136, ODIs:78, T20Is:14}},
    {State:'Total',freq:{Test: 14775,ODIs:3733, T20Is:278}},
    {State:'OB',freq:{Test: 8051,ODIs:3563, T20Is:400 }},
    {State:'6YD',freq:{Test: 218,ODIs:115, T20Is:8 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 37,ODIs:31, T20Is:50 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'FC',freq:{Test: 68,ODIs:32, T20Is:35 }},
    {State:'THI',freq:{Test: 8,ODIs:6, T20Is:0 }},
    {State:'Rating',freq:{Test: 7,ODIs:0, T20Is:0 }}
];

var MangalisoMosehle=[
    {State:'Apps',freq:{Test: 0, ODIs:4, T20Is:1}},
    {State:'Mins',freq:{Test: 0, ODIs:8, T20Is:1}},
    {State:'Total',freq:{Test: 0,ODIs:627, T20Is:24}},
    {State:'OB',freq:{Test: 0,ODIs:367, T20Is:8 }},
    {State:'6YD',freq:{Test: 0,ODIs:11, T20Is:1 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:33, T20Is:8 }},
    {State:'THB',freq:{Test: 0,ODIs:4, T20Is:2 }},
    {State:'FC',freq:{Test: 0,ODIs:57, T20Is:24 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var StephenCook=[
    {State:'Apps',freq:{Test: 0, ODIs:20, T20Is:24}},
    {State:'Mins',freq:{Test: 0, ODIs:20, T20Is:24}},
    {State:'Total',freq:{Test: 0,ODIs:1037, T20Is:535}},
    {State:'OB',freq:{Test: 0,ODIs:811, T20Is:587 }},
    {State:'6YD',freq:{Test: 0,ODIs:39, T20Is:33 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:27, T20Is:16 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:25, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:3, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var TembaBavuma=[
    {State:'Apps',freq:{Test: 18, ODIs:70, T20Is:17}},
    {State:'Mins',freq:{Test: 31, ODIs:69, T20Is:17}},
    {State:'Total',freq:{Test: 2718,ODIs:3392, T20Is:366}},
    {State:'OB',freq:{Test: 1345,ODIs:2769, T20Is:408 }},
    {State:'6YD',freq:{Test: 45,ODIs:70, T20Is:16 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 30,ODIs:40, T20Is:26 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 60,ODIs:48, T20Is:23 }},
    {State:'THI',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'Rating',freq:{Test: 4,ODIs:0, T20Is:0 }}
];


var RegisChakabva=[
    {State:'Apps',freq:{Test: 4, ODIs:29, T20Is:14}},
    {State:'Mins',freq:{Test: 8, ODIs:28, T20Is:14}},
    {State:'Total',freq:{Test: 623,ODIs:1302, T20Is:306}},
    {State:'OB',freq:{Test: 459,ODIs:1206, T20Is:405 }},
    {State:'6YD',freq:{Test: 12,ODIs:33, T20Is:20 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 38,ODIs:37, T20Is:20 }},
    {State:'THB',freq:{Test: 5,ODIs:6, T20Is:8 }},
    {State:'FC',freq:{Test: 52,ODIs:40, T20Is:15 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var PeterMoor=[
    {State:'Apps',freq:{Test: 3, ODIs:0, T20Is:0}},
    {State:'Mins',freq:{Test: 6, ODIs:0, T20Is:0}},
    {State:'Total',freq:{Test: 368,ODIs:0, T20Is:0}},
    {State:'OB',freq:{Test: 250,ODIs:0, T20Is:0 }},
    {State:'6YD',freq:{Test: 12,ODIs:0, T20Is:0 }},
    {State:'Pty',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'CRS',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Corn',freq:{Test: 21,ODIs:0, T20Is:0 }},
    {State:'THB',freq:{Test: 4,ODIs:0, T20Is:0 }},
    {State:'FC',freq:{Test: 31,ODIs:0, T20Is:0 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var ChamuChibhabha=[
    {State:'Apps',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Mins',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Total',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'OB',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'6YD',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var EltonChigumbura=[
    {State:'Apps',freq:{Test: 2, ODIs:4, T20Is:0}},
    {State:'Mins',freq:{Test: 2, ODIs:4, T20Is:0}},
    {State:'Total',freq:{Test: 168,ODIs:171, T20Is:0}},
    {State:'OB',freq:{Test: 103,ODIs:186, T20Is:0 }},
    {State:'6YD',freq:{Test: 3,ODIs:2, T20Is:0 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:0 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:0 }},
    {State:'Corn',freq:{Test: 34,ODIs:93, T20Is:0 }},
    {State:'THB',freq:{Test: 3,ODIs:7, T20Is:0 }},
    {State:'FC',freq:{Test: 56,ODIs:86, T20Is:0 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var TarisaiMusakanda=[
    {State:'Apps',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Mins',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Total',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'OB',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'6YD',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var SikandarRaza=[
    {State:'Apps',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Mins',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Total',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'OB',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'6YD',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var SeanWilliams=[
    {State:'Apps',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Mins',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Total',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'OB',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'6YD',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var VusiSibanda=[
    {State:'Apps',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Mins',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Total',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'OB',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'6YD',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var SolomonMire=[
    {State:'Apps',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Mins',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Total',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'OB',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'6YD',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var HamiltonMasakadza=[
    {State:'Apps',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Mins',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Total',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'OB',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'6YD',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var CraigErvine=[
    {State:'Apps',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Mins',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Total',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'OB',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'6YD',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var ShimronHetmyer=[
    {State:'Apps',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Mins',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Total',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'OB',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'6YD',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var ChadwickWalton=[
    {State:'Apps',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Mins',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Total',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'OB',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'6YD',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var KieronPollard=[
    {State:'Apps',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Mins',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Total',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'OB',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'6YD',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var LendlSimmons=[
    {State:'Apps',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Mins',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Total',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'OB',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'6YD',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var ChrisGayle=[
    {State:'Apps',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Mins',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Total',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'OB',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'6YD',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var KraiggBrathwaite=[
    {State:'Apps',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Mins',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Total',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'OB',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'6YD',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var MarlonSamuels=[
    {State:'Apps',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Mins',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Total',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'OB',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'6YD',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var KieranPowell=[
    {State:'Apps',freq:{Test: 20, ODIs:40, T20Is:16}},
    {State:'Mins',freq:{Test: 35, ODIs:39, T20Is:16}},
    {State:'Total',freq:{Test: 3710,ODIs:2005, T20Is:362}},
    {State:'OB',freq:{Test: 2137,ODIs:1710, T20Is:498 }},
    {State:'6YD',freq:{Test: 87,ODIs:65, T20Is:22 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 24,ODIs:26, T20Is:16 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:9 }},
    {State:'FC',freq:{Test: 42,ODIs:31, T20Is:42 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var RostonChase=[
    {State:'Apps',freq:{Test: 4, ODIs:29, T20Is:14}},
    {State:'Mins',freq:{Test: 8, ODIs:28, T20Is:14}},
    {State:'Total',freq:{Test: 623,ODIs:1302, T20Is:306}},
    {State:'OB',freq:{Test: 459,ODIs:1206, T20Is:405 }},
    {State:'6YD',freq:{Test: 12,ODIs:33, T20Is:20 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 38,ODIs:37, T20Is:20 }},
    {State:'THB',freq:{Test: 5,ODIs:6, T20Is:8 }},
    {State:'FC',freq:{Test: 52,ODIs:40, T20Is:15 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var CarlosBrathwaite=[
    {State:'Apps',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Mins',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Total',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'OB',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'6YD',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'Pty',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'THB',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'THI',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var KusalPerera=[
    {State:'Apps',freq:{Test: 25, ODIs:49, T20Is:7}},
    {State:'Mins',freq:{Test: 48, ODIs:48, T20Is:77}},
    {State:'Total',freq:{Test: 4671,ODIs:2465, T20Is:142}},
    {State:'OB',freq:{Test: 2655,ODIs:2247, T20Is:250 }},
    {State:'6YD',freq:{Test: 86,ODIs:91, T20Is:8 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 31,ODIs:25, T20Is:31 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:11 }},
    {State:'FC',freq:{Test: 54,ODIs:27, T20Is:18 }},
    {State:'THI',freq:{Test: 4,ODIs:6, T20Is:0 }},
    {State:'Rating',freq:{Test: 2,ODIs:0, T20Is:0 }}
];

var LahiruThirimanne=[
    {State:'Apps',freq:{Test: 17, ODIs:120, T20Is:26}},
    {State:'Mins',freq:{Test: 29, ODIs:120, T20Is:26}},
    {State:'Total',freq:{Test: 3447,ODIs:5751, T20Is:566}},
    {State:'OB',freq:{Test: 1866,ODIs:4981, T20Is:729 }},
    {State:'6YD',freq:{Test: 44,ODIs:157, T20Is:34 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 42,ODIs:32, T20Is:21 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'FC',freq:{Test: 78,ODIs:37, T20Is:17 }},
    {State:'THI',freq:{Test: 2,ODIs:5, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:2, T20Is:0 }}
];

var AngeloAppshews=[
    {State:'Apps',freq:{Test: 77, ODIs:80, T20Is:14}},
    {State:'Mins',freq:{Test: 136, ODIs:78, T20Is:14}},
    {State:'Total',freq:{Test: 14775,ODIs:3733, T20Is:278}},
    {State:'OB',freq:{Test: 8051,ODIs:3563, T20Is:400 }},
    {State:'6YD',freq:{Test: 218,ODIs:115, T20Is:8 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 37,ODIs:31, T20Is:50 }},
    {State:'THB',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'FC',freq:{Test: 68,ODIs:32, T20Is:35 }},
    {State:'THI',freq:{Test: 8,ODIs:6, T20Is:0 }},
    {State:'Rating',freq:{Test: 7,ODIs:0, T20Is:0 }}
];

var DimuthKarunaratne=[
    {State:'Apps',freq:{Test: 0, ODIs:4, T20Is:1}},
    {State:'Mins',freq:{Test: 0, ODIs:8, T20Is:1}},
    {State:'Total',freq:{Test: 0,ODIs:627, T20Is:24}},
    {State:'OB',freq:{Test: 0,ODIs:367, T20Is:8 }},
    {State:'6YD',freq:{Test: 0,ODIs:11, T20Is:1 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:33, T20Is:8 }},
    {State:'THB',freq:{Test: 0,ODIs:4, T20Is:2 }},
    {State:'FC',freq:{Test: 0,ODIs:57, T20Is:24 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var DanushkaGunathilaka=[
    {State:'Apps',freq:{Test: 0, ODIs:20, T20Is:24}},
    {State:'Mins',freq:{Test: 0, ODIs:20, T20Is:24}},
    {State:'Total',freq:{Test: 0,ODIs:1037, T20Is:535}},
    {State:'OB',freq:{Test: 0,ODIs:811, T20Is:587 }},
    {State:'6YD',freq:{Test: 0,ODIs:39, T20Is:33 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:27, T20Is:16 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:25, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:3, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var DineshChandimal=[
    {State:'Apps',freq:{Test: 18, ODIs:70, T20Is:17}},
    {State:'Mins',freq:{Test: 31, ODIs:69, T20Is:17}},
    {State:'Total',freq:{Test: 2718,ODIs:3392, T20Is:366}},
    {State:'OB',freq:{Test: 1345,ODIs:2769, T20Is:408 }},
    {State:'6YD',freq:{Test: 45,ODIs:70, T20Is:16 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 30,ODIs:40, T20Is:26 }},
    {State:'THB',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 60,ODIs:48, T20Is:23 }},
    {State:'THI',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'Rating',freq:{Test: 4,ODIs:0, T20Is:0 }}
];

var UpulTharanga=[
    {State:'Apps',freq:{Test: 34, ODIs:70, T20Is:1}},
    {State:'Mins',freq:{Test: 66, ODIs:68, T20Is:1}},
    {State:'Total',freq:{Test: 5598,ODIs:3259, T20Is:18}},
    {State:'OB',freq:{Test: 3378,ODIs:3219, T20Is:24 }},
    {State:'6YD',freq:{Test: 94,ODIs:98, T20Is:1 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 36,ODIs:33, T20Is:24 }},
    {State:'THB',freq:{Test: 4,ODIs:6, T20Is:8 }},
    {State:'FC',freq:{Test: 60,ODIs:33, T20Is:18 }},
    {State:'THI',freq:{Test: 4,ODIs:3, T20Is:0 }},
    {State:'Rating',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var ChamaraKapugedera=[
    {State:'Apps',freq:{Test: 0, ODIs:6, T20Is:6}},
    {State:'Mins',freq:{Test: 0, ODIs:6, T20Is:6}},
    {State:'Total',freq:{Test: 0,ODIs:324, T20Is:144}},
    {State:'OB',freq:{Test: 0,ODIs:229, T20Is:174 }},
    {State:'6YD',freq:{Test: 0,ODIs:10, T20Is:11 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:23, T20Is:16 }},
    {State:'THB',freq:{Test: 0,ODIs:4, T20Is:7 }},
    {State:'FC',freq:{Test: 50,ODIs:32, T20Is:13 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:1 }}
];

var AselaGunaratne=[
    {State:'Apps',freq:{Test: 22, ODIs:36, T20Is:10}},
    {State:'Mins',freq:{Test: 40, ODIs:34, T20Is:10}},
    {State:'Total',freq:{Test: 5103,ODIs:1917, T20Is:228}},
    {State:'OB',freq:{Test: 2715,ODIs:1511, T20Is:240 }},
    {State:'6YD',freq:{Test: 76,ODIs:64, T20Is:16 }},
    {State:'Pty',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 28,ODIs:21, T20Is:19 }},
    {State:'THB',freq:{Test: 36,ODIs:24, T20Is:15 }},
    {State:'FC',freq:{Test: 3,ODIs:5, T20Is:6 }},
    {State:'THI',freq:{Test: 67,ODIs:29, T20Is:14 }},
    {State:'Rating',freq:{Test: 2,ODIs:2, T20Is:0 }}
];

var DhananjayadeSilva=[
    {State:'Apps',freq:{Test: 0, ODIs:59, T20Is:37}},
    {State:'Mins',freq:{Test: 0, ODIs:52, T20Is:33}},
    {State:'Total',freq:{Test: 0,ODIs:1953, T20Is:606}},
    {State:'OB',freq:{Test: 0,ODIs:1510, T20Is:714 }},
    {State:'6YD',freq:{Test: 0,ODIs:63, T20Is:35 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:24, T20Is:20 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'FC',freq:{Test: 0,ODIs:31, T20Is:17 }},
    {State:'THI',freq:{Test: 0,ODIs:1, T20Is:3 }},
    {State:'Rating',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var NiroshanDickwella=[
    {State:'Apps',freq:{Test: 0, ODIs:20, T20Is:20}},
    {State:'Mins',freq:{Test: 0, ODIs:16, T20Is:12}},
    {State:'Total',freq:{Test: 0,ODIs:559, T20Is:171}},
    {State:'OB',freq:{Test: 0,ODIs:490, T20Is:226 }},
    {State:'6YD',freq:{Test: 0,ODIs:12, T20Is:6 }},
    {State:'Pty',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'CRS',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Corn',freq:{Test: 0,ODIs:41, T20Is:38 }},
    {State:'THB',freq:{Test: 0,ODIs:5, T20Is:8 }},
    {State:'FC',freq:{Test: 0,ODIs:47, T20Is:29 }},
    {State:'THI',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Rating',freq:{Test: 0,ODIs:0, T20Is:0 }}
];


switch(playerName) {
    case 'Mitchell Starc':
        return Mitchell;
        break;
    case 'Pat Cummins':
        return pat;
        break;
    case 'Josh Hazlewood':
        return josh;
        break;
    case 'Nathan Lyon':
        return nathan;
        break;
    case 'James Faulkner':
        return james;
        break;
    case 'Adam Zampa':
        return adam;
        break;
    case 'Andrew Tye':
        return andrew;
        break;
    case 'Al-Amin Hossainr':
        return alamin;
        break;
    case 'Saqlain Sajib':
        return saqlain;
        break;
    case 'Shuvagata Hom':
        return shuvagata;
        break;
    case 'Mashrafe Mortaza':
        return mashrafe;
        break;
    case 'Shafiul Islam':
        return shafiul;
        break;
    case 'Taijul Islam':
        return taijul;
        break;
    case 'Taskin Ahmed':
        return taskin;
        break;
    case 'ABC':
        return ABC;
        break;
    case 'Stuart Broad':
        return stuart;
        break;
    case 'Mark Wood':
        return mark;
        break;
    case 'Steven Finn':
        return steven;
        break;
    case 'Chris Jordan':
        return chris;
        break;
    case 'Toby Roland-Jones':
        return toby;
        break;
    case 'James Anderson':
        return james;
        break;
    case 'Liam Plunkett':
        return liam;
        break;
    case 'Chris Woakes':
        return cchris;
        break;
    case 'Liam Dawson':
        return lliam;
        break;
    case 'Adil Rashid':
        return adil;
        break;
    case 'Kuldeep Yadav':
        return kuldeep;
        break;
    case 'Mohammed Shami':
        return mohammeds;
        break;
    case 'Ashish Nehra':
        return ashish;
        break;
    case 'Ishant Sharma':
        return ishant;
        break;
    case 'Jayant Yadav':
        return jayant;
        break;
    case 'Jasprit Bumrah':
        return jasprit;
        break;
    case 'Bhuvneshwar Kumar':
        return bhuvneshwar;
        break;
    case 'Umesh Yadav':
        return umesh; 
        break;
    case 'Yuzvendra Chahal':
        return yuzvendra;
        break;
    case 'Amit Mishra':
        return amitm;
        break;
    case 'Alex Cusack':
        return alexc;
        break;
    case 'Stuart Thompson':
        return stuart;
        break;
    case 'Barry McCarthy':
        return barry;
        break;
    case 'Tim Murtagh':
        return timm;
        break;
    case 'George Dockrell':
        return george;
        break;
    case 'Boyd Rankin':
        return boyd;
        break;
    case 'Max Sorensen':
        return maxs;
        break;
    case 'Craig Young':
        return craig;
        break;
    case 'Peter Chase':
        return peterc;
        break;
    case 'Amit Mishra':
        return andym;
        break;
    case 'Andy McBrine':
        return amitm;
        break;
    case 'Jacob Mulder':
        return jacob;
        break;


    case 'Appst Henry':
        return Appsth;
        break;
    case 'Adam Milne':
        return adamM;
        break;
    case 'Ben Wheeler':
        return benW;
        break;
    case 'Hamish Bennett':
        return hamishB;
        break;
    case 'Ish Sodhi':
        return ishS;
        break;
    case 'Neil Wagner':
        return neilW;
        break;
    case 'Trent Boult':
        return trentB;
        break;
    case 'Tim Southee':
        return timS;
        break;

    case 'Junaid Khan':
        return junaidK;
        break;
    case 'Sohail Khan':
        return sohailK;
        break;
    case 'Wahab Riaz':
        return WahabR;
        break;
    case 'Mohammad Amir':
        return mohammadA;
        break;
    case 'Sohail Tanvir':
        return sohailT;
        break;
    case 'Yasir Shah':
        return yasirS;
        break;
    case 'Imran Khan':
        return imranK;
        break;
    case 'Rumman Raees':
        return rummanR;
        break;


    case 'Kyle Abbott':
        return kyleA;
        break;
    case 'Imran Tahir':
        return imranT;
        break;
    case 'Andile Phehlukwayo':
        return andileP;
        break;
    case 'Wayne Parnell':
        return wayneP;
        break;
    case 'Kagiso Rabada':
        return kagisoR;
        break;
    case 'Dane Paterson':
        return daneP;
        break;
    case 'Tabraiz Shamsi':
        return tabraizS;
        break;

    case 'Keshav Maharaj':
        return keshavM;
        break;
    case 'Chris Morris':
        return chrisM;
        break;
    case 'Duanne Olivier':
        return duanneO;
        break;
    case 'Aaron Phangiso':
        return aaronP;
        break;


    case 'Vishwa Fernando':
        return vishwaF;
        break;
    case 'Rangana Herath':
        return ranganaH;
        break;
    case 'Nuwan Kulasekara':
        return nuwanK;
        break;
    case 'Lakshan Sandakan':
        return lakshanS;
        break;
    case 'Dushmantha Chameera':
        return dushmanthaC;
        break;
    case 'Lahiru Kumara':
        return lahiruK;
        break;
    case 'Lasith Malinga':
        return lasithM;
        break;
    case 'Suranga Lakmal':
        return surangaL;
        break;


    case 'Samuel Badree':
        return samuelB;
        break;
    case 'Shannon Gabriel':
        return shannonG;
        break;
    case 'Alzarri Joseph':
        return alzarriJ;
        break;
    case 'Sunil Narine':
        return sunilN;
        break;
    case 'Jerome Taylor':
        return jeromeT;
        break;
    case 'Devendra Bishoo':
        return devendraB;
        break;
    case 'Miguel Cummins':
        return miguelC;
        break;
    case 'Ashley Nurse':
        return ashleyN;
        break;
    case 'Kemar Roach':
        return kemarR;
        break;
    case 'KeFCick Williams':
        return keFCickW;
        break;
    case 'Tendai Chatara':
        return tendaiC;
        break;
    case 'Michael Chinouya':
        return michaelC;
        break;
    case 'Brian Vitori':
        return brianV;
        break;
    case 'Tendai Chisoro':
        return tendaiC;
        break;
    case 'John Nyumbu':
        return johnN;
        break;
    case 'Graeme Cremer':
        return graemeC;
        break;
    case 'Chris Mpofu':
        return chrisMp;
        break;
    case 'Taurai Muzarabani':
        return tauraiM;
        break;
    case 'Tinashe Panyangara':
        return tinasheP;
        break;
    case 'Donald Tiripano':
        return donaldT;
        break;


    case 'Gulbadin Naib':
        return gulbadinN;
        break;
    case 'Shapoor Zadran':
        return shapoorZ;
        break;
    case 'Aftab Alam':
        return aftabA;
        break;
    case 'Dawlat Zadran':
        return dawlatZ;
        break;
    case 'Hamid Hassan':
        return hamidH;
        break;
    case 'Mirwais Ashraf':
        return mirwaisA;
        break;
    case 'Amir Hamza':
        return amirH;
        break;
    case 'Fareed Ahmad':
        return fareedA;
        break;
    case 'Rashid Khan':
        return rashidK;
        break;
    case 'Yamin Ahmadzai':
        return yaminA;
        break;



    case 'Asghar Stanikzai':
        return AsgharS;
        break;
    case 'Mohammad Shahzad':
        return MohammadS;
        break;
    case 'Noor Zadran':
        return NoorAli;
        break;
    case 'Samiullah Shenwari':
        return SamiullahS;
        break;
    case 'Mohammad Nabi':
        return MohammadN;
        break;
    case 'Usman Ghani':
        return UsmanG;
        break;
    case 'Shafiqullah':
        return shafiqullah;
        break;
    case 'Najeeb Tarakai':
        return NajeebT;
        break;
    case 'Nawroz Mangal':
        return NawrozM;
        break;
    case 'Karim Janat':
        return KarimJ;
        break;
    case 'JCornd Ahmadi':
        return JCorndA;
        break;


    case 'Alex Oxlade Chamberlain':
        return AlexO;
        break;
    case 'Shkodran Mustafi':
        return Shkodran;
        break;
    case 'Henrikh Mkhitaryan':
        return Henrikh;
        break;
    case 'Alexis Sánchez':
        return Alexis;
        break;
    case 'Pierre-Emerick Aubameyang':
        return Pierre;
        break;
    case 'Aaron Ramsey':
        return Aaron;
        break;
    case 'Mesut Özil':
        return Mesut;
        break;
    case 'Nacho Monreal':
        return Nacho;
        break;
    case 'Alexandre Lacazette':
        return Alexandre;
        break;
    case 'Laurent Koscielny':
        return Laurent;
        break;
    case 'Granit Xhaka':
        return Granit;
        break;

    case 'David Ospina':
        return DavidO;
        break;
    case 'Sead Kolasinac':
        return Sead;
        break;
    case 'Alex Iwobi':
        return AlexI;
        break;
    case 'Mahmudullah':
        return mahmudullah;
        break;
    case 'Imrul Kayes':
        return ImrulK;
        break;
    case 'Mominul Haque':
        return MominulH;
        break;
    case 'Mohammad Mithun':
        return MohammadMi;
        break;
    case 'SaPtyr Rahman':
        return SaPtyrR;
        break;
    case 'Soumya Sarkar':
        return SoumyaS;
        break;
    case 'Liton Das':
        return LitonD;
        break;
    case 'Subashis Roy':
        return SubashiFC;
        break;


        
    case 'Eoin Morgan':
        return EoinM;
        break;
    case 'Moeen Ali':
        return MoeenA;
        break;
    case 'David Willey':
        return DavidWi;
        break;
    case 'Jonny Bairstow':
        return JonnyB;
        break;
    case 'Alex Hales':
        return AlexH;
        break;
    case 'Jos Buttler':
        return JosB;
        break;
    case 'Joe Root':
        return JoeR;
        break;
    case 'Dawid Malan':
        return DawidM;
        break;
    case 'Jason Roy':
        return JasonR;
        break;
    case 'Alastair Cook':
        return AlastairC;
        break;
    case 'Ben Stokes':
        return BenSt;
        break;

    case 'Shikhar Dhawan':
        return ShikharD;
        break;
    case 'Wriddhiman Saha':
        return WriddhimanS;
        break;
    case 'Alex Iwobi':
        return alexoo;
        break;
    case 'Jack Wilshere':
        return JackW;
        break;
    case 'Héctor Bellerín':
        return HéctorB;
        break;
    case 'Calum Chambers':
        return CalumC;
        break;
    case 'Petr Cech':
        return PetrC;
        break;
    case 'Ainsley Maitland-Niles':
        return AinsleyM;
        break;
    case 'Simon Francis':
        return SimonF;
        break;
    case 'Steve Cook':
        return SteveC;
        break;
    case 'Nathan Aké':
        return NathanA;
        break;
    case 'Joshua King':
        return JoshuaK;
        break;
    case 'Junior Stanislas':
        return JuniorS;
        break;
    case 'Lewis Cook':
        return LewisC;
        break;
    case 'Adam Smith':
        return AdamS;
        break;
    case 'Andrew Surman':
        return AndrewS;
        break;
    case 'Ryan Fraser':
        return RyanF;
        break;
    case 'Jordon Ibe':
        return JordonI;
        break;
    case 'Charlie Daniels':
        return CharlieD ;
        break;
    case 'Dan Gosling':
        return DanG;
        break;
    case 'Callum Wilson':
        return CallumW;
        break;
    case 'Asmir Begovic':
        return AsmirB;
        break;


    case 'Harry Arter':
        return HarryA;
        break;
    case 'Jermain Defoe':
        return JermainD;
        break;
    case 'Marc Pugh':
        return MarcP;
        break;
    case 'Lys Mousset':
        return LysM;
        break;
    case 'Tyrone Mings':
        return TyroneM;
        break;
    case 'Benik Afobe':
        return BenikA;
        break;
    case 'Emerson Hyndman':
        return EmersonH;
        break;
    case 'Solly March':
        return SollyM;
        break;
    case 'Tomer Hemed':
        return TomerH;
        break;
    case 'Gaëtan Bong':
        return GaëtanB;
        break;
    case 'Glenn Murray':
        return GlennM;
        break;
    case 'Markus Suttner':
        return MarkusS;
        break;
    case 'Connor Goldson':
        return ConnorG;
        break;
    case 'Ezequiel Schelotto':
        return EzequielS;
        break;
    case 'Liam Rosenio':
        return LiamR;
        break;
    case 'Uwe Hünemeier':
        return UweH;
        break;
    case 'Leonardo Ullo':
        return LeonardoU;
        break;
    case 'Beram Kayal':
        return BeramK;
        break;
    case 'Isaiah Brown':
        return IsaiahB;
        break;
    case 'Jürgen Locadia':
        return JürgenL;
        break;
    case 'Jamie Murphy':
        return JamieM;
        break;
    case 'Sam Baldock':
        return SamB;
        break;
    case 'Shane Duffy':
        return ShaneD;
        break;
    case 'Lewis Dunk':
        return LewisD;
        break;
    case 'Pascal Groß':
        return PascalG;
        break;
    case 'Marc Albrighton':
        return MarcA;
        break;
    case 'Chris Wood':
        return ChrisW;
        break;
    case 'Steven Defour':
        return StevenD;
        break;
    case 'Charlie Taylor':
        return CharlieT;
        break;
    case 'Jack Cork':
        return JackC;
        break;
    case 'Scott Arfield':
        return ScottA;
        break;
    case 'Aaron Lennon':
        return AaronL;
        break;
    case 'Ashley Barnes':
        return AshleyB;
        break;



    case 'Tom Heaton':
        return TomH;
        break;
    case 'Sam Vokes':
        return SamV;
        break;
    case 'Ashley Westwood':
        return AshleyW;
        break;
    case 'Jeff Hendrick':
        return JeffH;
        break;
    case 'Georges-Kévin Nkoudou':
        return GeorgesK;
        break;
    case 'Nahki Wells':
        return NahkiW;
        break;
    case 'Dwight McNeil':
        return DwightM;
        break;
    case 'Jonathan Walters':
        return JonathanW;
        break;
    case 'James Tarkowski':
        return JamesT;
        break;
    case 'Kevin Long':
        return KevinL;
        break;
    case 'Ben Mee':
        return BenM;
        break;
    case 'Robbie Brady':
        return RobbieB;
        break;
    case 'Johann Berg Gudmundsson':
        return JohannB;
        break;
    case 'Kieran Powell':
        return KieranPowell;
        break;
    case 'Marlon Samuels':
        return MarlonSamuels;
        break;
    case 'Kraigg Brathwaite':
        return KraiggBrathwaite;
        break;
    case 'Chris Gayle':
        return ChrisGayle;
        break;
    case 'Lendl Simmons':
        return LendlSimmons;
        break;
    case 'Kieron Pollard':
        return KieronPollard;
        break;
    case 'Chadwick Walton':
        return ChadwickWalton;
        break;
    case 'Shimron Hetmyer':
        return ShimronHetmyer;
        break;
    case 'Craig Ervine':
        return CraigErvine;
        break;
    case 'Hamilton Masakadza ':
        return HamiltonMasakadza ;
        break;
    case 'Solomon Mire':
        return SolomonMire;
        break;
    case 'Vusi Sibanda':
        return VusiSibanda;
        break;
    case 'Sean Williams ':
        return SeanWilliams ;
        break;
    case 'Sikandar Raza':
        return SikandarRaza;
        break;
    case 'Tarisai Musakanda ':
        return TarisaiMusakanda ;
        break;
    case 'Elton Chigumbura ':
        return EltonChigumbura ;
        break;
    case 'Chamu Chibhabha':
        return ChamuChibhabha;
        break;
    case 'Peter Moor':
        return PeterMoor;
        break;
    case 'Regis Chakabva':
        return RegisChakabva;
        break;
    
    default:
        return false;
}

}


