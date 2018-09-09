function getPlayerData(playerName) {
var AlexO=[
    {State:'Apps',freq:{Goals: 345, Assists:30, Shots:30}},
    {State:'Mins',freq:{Goals: 345, Assists:26, Shots:19}},
    {State:'Total',freq:{Goals: 345,Assists:812, Shots:228}},
    {State:'OB',freq:{Goals: 345,Assists:704, Shots:352 }},
    {State:'6YD',freq:{Goals: 345,Assists:23, Shots:8 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 345,Assists:30, Shots:44 }},
    {State:'THB',freq:{Goals: 345,Assists:5, Shots:9 }},
    {State:'FC',freq:{Goals: 345,Assists:35, Shots:28 }},
    {State:'THI',freq:{Goals: 345,Assists:2, Shots:0 }},
    {State:'Rating',freq:{Goals: 345,Assists:0, Shots:0 }}
];

var Mitchell=[
    {State:'Apps',freq:{Goals: 36, Assists:68, Shots:22}},
    {State:'Mins',freq:{Goals: 68, Assists:68, Shots:22}},
    {State:'Total',freq:{Goals: 7355,Assists:3359, Shots:566}},
    {State:'OB',freq:{Goals: 4197,Assists:2698, Shots:352 }},
    {State:'6YD',freq:{Goals: 148,Assists:134, Shots:30 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 28,Assists:21, Shots:19 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 50,Assists:25, Shots:17 }},
    {State:'THI',freq:{Goals: 8,Assists:8, Shots:0 }},
    {State:'Rating',freq:{Goals: 7,Assists:5, Shots:0 }}
];

var pat=[
    {State:'Apps',freq:{Goals: 4, Assists:31, Shots:18}},
    {State:'Mins',freq:{Goals: 7, Assists:31, Shots:18}},
    {State:'Total',freq:{Goals: 906,Assists:1566, Shots:414}},
    {State:'OB',freq:{Goals: 460,Assists:1447, Shots:472 }},
    {State:'6YD',freq:{Goals: 19,Assists:53, Shots:23 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 2248,Assists:27, Shots:21 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:7 }},
    {State:'FC',freq:{Goals: 48,Assists:30, Shots:18 }},
    {State:'THI',freq:{Goals: 1,Assists:3, Shots:0 }},
    {State:'Rating',freq:{Goals: 1,Assists:0, Shots:0 }}
];

var andrew=[
    {State:'Apps',freq:{Goals: 0, Assists:0, Shots:5}},
    {State:'Mins',freq:{Goals: 0, Assists:0, Shots:5}},
    {State:'Total',freq:{Goals: 0,Assists:0, Shots:110}},
    {State:'OB',freq:{Goals: 0,Assists:0, Shots:188 }},
    {State:'6YD',freq:{Goals: 0,Assists:0, Shots:5 }},
    {State:'Pty',freq:{Goals: 0,Assists:0, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:0, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:0, Shots:38 }},
    {State:'THB',freq:{Goals: 0,Assists:0, Shots:10 }},
    {State:'FC',freq:{Goals: 0,Assists:0, Shots:22 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var adam=[
    {State:'Apps',freq:{Goals: 0, Assists:24, Shots:10}},
    {State:'Mins',freq:{Goals: 0, Assists:24, Shots:10}},
    {State:'Total',freq:{Goals: 0,Assists:1162, Shots:210}},
    {State:'OB',freq:{Goals: 0,Assists:1056, Shots:212 }},
    {State:'6YD',freq:{Goals: 0,Assists:36, Shots:14 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:29, Shots:15 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:6 }},
    {State:'FC',freq:{Goals: 0,Assists:32, Shots:15 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var josh=[
    {State:'Apps',freq:{Goals: 31, Assists:38, Shots:7}},
    {State:'Mins',freq:{Goals: 58, Assists:37, Shots:7}},
    {State:'Total',freq:{Goals: 6557,Assists:1952, Shots:168}},
    {State:'OB',freq:{Goals: 3039,Assists:1527, Shots:269 }},
    {State:'6YD',freq:{Goals: 118,Assists:64, Shots:8 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 26,Assists:24, Shots:34 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:10 }},
    {State:'FC',freq:{Goals: 56,Assists:31, Shots:21 }},
    {State:'THI',freq:{Goals: 4,Assists:1, Shots:1 }},
    {State:'Rating',freq:{Goals: 5,Assists:3, Shots:0 }}
];

var nathan=[
    {State:'Apps',freq:{Goals: 68, Assists:13, Shots:1}},
    {State:'Mins',freq:{Goals: 130, Assists:13, Shots:1}},
    {State:'Total',freq:{Goals: 15952,Assists:720, Shots:6}},
    {State:'OB',freq:{Goals: 8410,Assists:592, Shots:15 }},
    {State:'6YD',freq:{Goals: 256,Assists:17, Shots:0 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 33,Assists:35, Shots:0 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:15 }},
    {State:'FC',freq:{Goals: 62,Assists:42, Shots:0 }},
    {State:'THI',freq:{Goals: 9,Assists:1, Shots:0 }},
    {State:'Rating',freq:{Goals: 10,Assists:0, Shots:0 }}
];

var james=[
    {State:'Apps',freq:{Goals: 1, Assists:67, Shots:24}},
    {State:'Mins',freq:{Goals: 2, Assists:65, Shots:24}},
    {State:'Total',freq:{Goals: 166,Assists:3116, Shots:515}},
    {State:'OB',freq:{Goals: 98,Assists:2858, Shots:684 }},
    {State:'6YD',freq:{Goals: 6,Assists:95, Shots:36 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 16,Assists:30, Shots:19 }},
    {State:'THB',freq:{Goals: 4,Assists:6, Shots:8 }},
    {State:'FC',freq:{Goals: 28,Assists:33, Shots:14 }},
    {State:'THI',freq:{Goals: 1,Assists:4, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:1 }}
];

var alAmin=[
    {State:'Apps',freq:{Goals: 6, Assists:14, Shots:25}},
    {State:'Mins',freq:{Goals: 9, Assists:14, Shots:23}},
    {State:'Total',freq:{Goals: 880,Assists:603, Shots:476}},
    {State:'OB',freq:{Goals: 460,Assists:523, Shots:592 }},
    {State:'6YD',freq:{Goals: 6,Assists:21, Shots:39 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 77,Assists:25, Shots:15 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 147,Assists:28, Shots:12 }},
    {State:'THI',freq:{Goals: 0,Assists:2, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var saqlain=[
    {State:'Apps',freq:{Goals: 0, Assists:0, Shots:1}},
    {State:'Mins',freq:{Goals: 0, Assists:0, Shots:1}},
    {State:'Total',freq:{Goals: 0,Assists:0, Shots:21}},
    {State:'OB',freq:{Goals: 0,Assists:0, Shots:40 }},
    {State:'6YD',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Pty',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'CRS',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Corn',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'THB',freq:{Goals: 0,Assists:0, Shots:11 }},
    {State:'FC',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var shuvagata =[
    {State:'Apps',freq:{Goals: 8, Assists:4, Shots:5}},
    {State:'Mins',freq:{Goals: 11, Assists:1, Shots:4}},
    {State:'Total',freq:{Goals: 846,Assists:12, Shots:66}},
    {State:'OB',freq:{Goals: 506,Assists:9, Shots:71 }},
    {State:'6YD',freq:{Goals: 8,Assists:0, Shots:2 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 63,Assists:0, Shots:36 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 106,Assists:0, Shots:33 }},
    {State:'THI',freq:{Goals: 8,Assists:8, Shots:0 }},
    {State:'Rating',freq:{Goals: 7,Assists:5, Shots:0 }}
];

var mashrafe=[
    {State:'Apps',freq:{Goals: 36, Assists:179, Shots:54}},
    {State:'Mins',freq:{Goals: 51, Assists:179, Shots:53}},
    {State:'Total',freq:{Goals: 5990,Assists:8951, Shots:1139}},
    {State:'OB',freq:{Goals: 3239,Assists:7089, Shots:1527 }},
    {State:'6YD',freq:{Goals: 78,Assists:232, Shots:42 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 42,Assists:30, Shots:36 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:8 }},
    {State:'FC',freq:{Goals: 78,Assists:39, Shots:27 }},
    {State:'THI',freq:{Goals: 4,Assists:6, Shots:1 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var shafiul=[
    {State:'Apps',freq:{Goals: 10, Assists:56, Shots:11}},
    {State:'Mins',freq:{Goals: 17, Assists:56, Shots:11}},
    {State:'Total',freq:{Goals: 1506,Assists:2342, Shots:220}},
    {State:'OB',freq:{Goals: 822,Assists:2294, Shots:275 }},
    {State:'6YD',freq:{Goals: 15,Assists:63, Shots:8 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 55,Assists:36, Shots:34 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:8 }},
    {State:'FC',freq:{Goals: 100,Assists:37, Shots:28 }},
    {State:'THI',freq:{Goals: 0,Assists:4, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var taijul=[
    {State:'Apps',freq:{Goals: 14, Assists:4, Shots:0}},
    {State:'Mins',freq:{Goals: 26, Assists:4, Shots:0}},
    {State:'Total',freq:{Goals: 3321,Assists:222, Shots:0}},
    {State:'OB',freq:{Goals: 1737,Assists:151, Shots:0 }},
    {State:'6YD',freq:{Goals: 52,Assists:5, Shots:300 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:0 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:0 }},
    {State:'Corn',freq:{Goals: 33,Assists:30, Shots:0 }},
    {State:'THB',freq:{Goals: 3,Assists:4, Shots:0 }},
    {State:'FC',freq:{Goals: 64,Assists:44, Shots:0 }},
    {State:'THI',freq:{Goals: 0,Assists:1, Shots:0 }},
    {State:'Rating',freq:{Goals: 37,Assists:0, Shots:0 }}
];

var taskin=[
    {State:'Apps',freq:{Goals: 4, Assists:29, Shots:15}},
    {State:'Mins',freq:{Goals: 8, Assists:28, Shots:13}},
    {State:'Total',freq:{Goals: 738,Assists:1269, Shots:269}},
    {State:'OB',freq:{Goals: 565,Assists:1203, Shots:308 }},
    {State:'6YD',freq:{Goals: 7,Assists:43, Shots:10 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 81,Assists:28, Shots:31 }},
    {State:'THB',freq:{Goals: 5,Assists:6, Shots:7 }},
    {State:'FC',freq:{Goals: 106,Assists:30, Shots:27 }},
    {State:'THI',freq:{Goals: 0,Assists:2, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var ABC=[
    {State:'Apps',freq:{Goals: 3, Assists:14, Shots:0}},
    {State:'Mins',freq:{Goals: 4, Assists:14, Shots:0}},
    {State:'Total',freq:{Goals: 456,Assists:737, Shots:0}},
    {State:'OB',freq:{Goals: 228,Assists:731, Shots:0 }},
    {State:'6YD',freq:{Goals: 2,Assists:20, Shots:0 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:0 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:0 }},
    {State:'Corn',freq:{Goals: 114,Assists:37, Shots:0 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:0 }},
    {State:'FC',freq:{Goals: 228,Assists:37, Shots:0 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var stuart=[
    {State:'Apps',freq:{Goals: 108, Assists:121, Shots:56}},
    {State:'Mins',freq:{Goals: 198, Assists:121, Shots:55}},
    {State:'Total',freq:{Goals: 22177,Assists:6109, Shots:1173}},
    {State:'OB',freq:{Goals: 11122,Assists:5364, Shots:1491 }},
    {State:'6YD',freq:{Goals: 386,Assists:178, Shots:65 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 29,Assists:30, Shots:23 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 57,Assists:34, Shots:18 }},
    {State:'THI',freq:{Goals: 14,Assists:9, Shots:1 }},
    {State:'Rating',freq:{Goals: 15,Assists:1, Shots:0 }}
];

var mark=[
    {State:'Apps',freq:{Goals: 10, Assists:19, Shots:2}},
    {State:'Mins',freq:{Goals: 19, Assists:19, Shots:2}},
    {State:'Total',freq:{Goals: 1863,Assists:997, Shots:42}},
    {State:'OB',freq:{Goals: 1057,Assists:896, Shots:62 }},
    {State:'6YD',freq:{Goals: 26,Assists:21, Shots:5 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 41,Assists:43, Shots:13 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:9 }},
    {State:'FC',freq:{Goals: 72,Assists:47, Shots:8 }},
    {State:'THI',freq:{Goals: 0,Assists:1, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var steven=[
    {State:'Apps',freq:{Goals: 36, Assists:69, Shots:21}},
    {State:'Mins',freq:{Goals: 66, Assists:67, Shots:21}},
    {State:'Total',freq:{Goals: 6412,Assists:3550, Shots:480}},
    {State:'OB',freq:{Goals: 3800,Assists:2996, Shots:583 }},
    {State:'6YD',freq:{Goals: 125,Assists:102, Shots:27 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 30,Assists:29, Shots:22 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 51,Assists:35, Shots:17 }},
    {State:'THI',freq:{Goals: 6,Assists:4, Shots:0 }},
    {State:'Rating',freq:{Goals: 5,Assists:2, Shots:0 }}
];


var chris=[
    {State:'Apps',freq:{Goals: 8, Assists:3, Shots:25}},
    {State:'Mins',freq:{Goals: 16, Assists:31, Shots:25}},
    {State:'Total',freq:{Goals: 1530,Assists:1532, Shots:534}},
    {State:'OB',freq:{Goals: 752,Assists:1521, Shots:766 }},
    {State:'6YD',freq:{Goals: 21,Assists:43, Shots:30 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 36,Assists:35, Shots:26 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:9 }},
    {State:'FC',freq:{Goals: 73,Assists:36, Shots:18 }},
    {State:'THI',freq:{Goals: 1,Assists:0, Shots:1 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var toby=[
    {State:'Apps',freq:{Goals: 3, Assists:1, Shots:0}},
    {State:'Mins',freq:{Goals: 6, Assists:1, Shots:0}},
    {State:'Total',freq:{Goals: 404,Assists:42, Shots:0}},
    {State:'OB',freq:{Goals: 271,Assists:34, Shots:0 }},
    {State:'6YD',freq:{Goals: 14,Assists:1, Shots:0 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:0 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:0 }},
    {State:'Corn',freq:{Goals: 19,Assists:34, Shots:0 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:0 }},
    {State:'FC',freq:{Goals: 29,Assists:42, Shots:0 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 1,Assists:0, Shots:0 }}
];

var james=[
    {State:'Apps',freq:{Goals: 128, Assists:194, Shots:19}},
    {State:'Mins',freq:{Goals: 240, Assists:191, Shots:19}},
    {State:'Total',freq:{Goals: 28042,Assists:9584, Shots:422}},
    {State:'OB',freq:{Goals: 13787,Assists:7861, Shots:552 }},
    {State:'6YD',freq:{Goals: 497,Assists:269, Shots:18 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 28,Assists:29, Shots:31 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:8 }},
    {State:'FC',freq:{Goals: 56,Assists:36, Shots:23 }},
    {State:'THI',freq:{Goals: 8,Assists:8, Shots:0 }},
    {State:'Rating',freq:{Goals: 7,Assists:5, Shots:0 }}
];

var liam=[
    {State:'Apps',freq:{Goals: 13, Assists:57, Shots:13}},
    {State:'Mins',freq:{Goals: 25, Assists:57, Shots:13}},
    {State:'Total',freq:{Goals: 287,Assists:2789, Shots:2659}},
    {State:'OB',freq:{Goals: 1536,Assists:2687, Shots:356 }},
    {State:'6YD',freq:{Goals: 41,Assists:88, Shots:16 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 37,Assists:31, Shots:22 }},
    {State:'THB',freq:{Goals: 4,Assists:6, Shots:7 }},
    {State:'FC',freq:{Goals: 65,Assists:32, Shots:18 }},
    {State:'THI',freq:{Goals: 1,Assists:3, Shots:0 }},
    {State:'Rating',freq:{Goals: 1,Assists:0, Shots:0 }}
];

var cchris=[
    {State:'Apps',freq:{Goals: 18, Assists:63, Shots:8}},
    {State:'Mins',freq:{Goals: 34, Assists:62, Shots:8}},
    {State:'Total',freq:{Goals: 2950,Assists:3024, Shots:162}},
    {State:'OB',freq:{Goals: 1530,Assists:2813, Shots:253 }},
    {State:'6YD',freq:{Goals: 50,Assists:89, Shots:7 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 31,Assists:32, Shots:36 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:9 }},
    {State:'FC',freq:{Goals: 59,Assists:34, Shots:23 }},
    {State:'THI',freq:{Goals: 1,Assists:8, Shots:0 }},
    {State:'Rating',freq:{Goals: 2,Assists:2, Shots:0 }}
];

var lliam=[
    {State:'Apps',freq:{Goals: 3, Assists:1, Shots:4}},
    {State:'Mins',freq:{Goals: 5, Assists:1, Shots:4}},
    {State:'Total',freq:{Goals: 526,Assists:48, Shots:84}},
    {State:'OB',freq:{Goals: 298,Assists:70, Shots:102 }},
    {State:'6YD',freq:{Goals: 7,Assists:2, Shots:4 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 43,Assists:35, Shots:25 }},
    {State:'THB',freq:{Goals: 4,Assists:9, Shots:7 }},
    {State:'FC',freq:{Goals: 75,Assists:24, Shots:21 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var adil=[
    {State:'Apps',freq:{Goals: 10, Assists:49, Shots:23}},
    {State:'Mins',freq:{Goals: 18, Assists:47, Shots:21}},
    {State:'Total',freq:{Goals: 2544,Assists:2452, Shots:414}},
    {State:'OB',freq:{Goals: 1629,Assists:2292, Shots:547 }},
    {State:'6YD',freq:{Goals: 38,Assists:70, Shots:16 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 43,Assists:33, Shots:34 }},
    {State:'THB',freq:{Goals: 4,Assists:6, Shots:8 }},
    {State:'FC',freq:{Goals: 67,Assists:35, Shots:26 }},
    {State:'THI',freq:{Goals: 5,Assists:5, Shots:0 }},
    {State:'Rating',freq:{Goals: 1,Assists:1, Shots:0 }}
];

var kuldeep=[
    {State:'Apps',freq:{Goals: 4, Assists:6, Shots:1}},
    {State:'Mins',freq:{Goals: 4, Assists:5, Shots:1}},
    {State:'Total',freq:{Goals: 800,Assists:286, Shots:24}},
    {State:'OB',freq:{Goals: 187,Assists:189, Shots:34 }},
    {State:'6YD',freq:{Goals: 9,Assists:10, Shots:1 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 21,Assists:19, Shots:34 }},
    {State:'THB',freq:{Goals: 3,Assists:4, Shots:9 }},
    {State:'FC',freq:{Goals: 39,Assists:29, Shots:24 }},
    {State:'THI',freq:{Goals: 2,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var mohammeds=[
    {State:'Apps',freq:{Goals: 25, Assists:49, Shots:7}},
    {State:'Mins',freq:{Goals: 48, Assists:48, Shots:77}},
    {State:'Total',freq:{Goals: 4671,Assists:2465, Shots:142}},
    {State:'OB',freq:{Goals: 2655,Assists:2247, Shots:250 }},
    {State:'6YD',freq:{Goals: 86,Assists:91, Shots:8 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 31,Assists:25, Shots:31 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:11 }},
    {State:'FC',freq:{Goals: 54,Assists:27, Shots:18 }},
    {State:'THI',freq:{Goals: 4,Assists:6, Shots:0 }},
    {State:'Rating',freq:{Goals: 2,Assists:0, Shots:0 }}
];

var ashish=[
    {State:'Apps',freq:{Goals: 17, Assists:120, Shots:26}},
    {State:'Mins',freq:{Goals: 29, Assists:120, Shots:26}},
    {State:'Total',freq:{Goals: 3447,Assists:5751, Shots:566}},
    {State:'OB',freq:{Goals: 1866,Assists:4981, Shots:729 }},
    {State:'6YD',freq:{Goals: 44,Assists:157, Shots:34 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 42,Assists:32, Shots:21 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:8 }},
    {State:'FC',freq:{Goals: 78,Assists:37, Shots:17 }},
    {State:'THI',freq:{Goals: 2,Assists:5, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:2, Shots:0 }}
];

var ishant=[
    {State:'Apps',freq:{Goals: 77, Assists:80, Shots:14}},
    {State:'Mins',freq:{Goals: 136, Assists:78, Shots:14}},
    {State:'Total',freq:{Goals: 14775,Assists:3733, Shots:278}},
    {State:'OB',freq:{Goals: 8051,Assists:3563, Shots:400 }},
    {State:'6YD',freq:{Goals: 218,Assists:115, Shots:8 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 37,Assists:31, Shots:50 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:9 }},
    {State:'FC',freq:{Goals: 68,Assists:32, Shots:35 }},
    {State:'THI',freq:{Goals: 8,Assists:6, Shots:0 }},
    {State:'Rating',freq:{Goals: 7,Assists:0, Shots:0 }}
];

var jayant=[
    {State:'Apps',freq:{Goals: 0, Assists:4, Shots:1}},
    {State:'Mins',freq:{Goals: 0, Assists:8, Shots:1}},
    {State:'Total',freq:{Goals: 0,Assists:627, Shots:24}},
    {State:'OB',freq:{Goals: 0,Assists:367, Shots:8 }},
    {State:'6YD',freq:{Goals: 0,Assists:11, Shots:1 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:33, Shots:8 }},
    {State:'THB',freq:{Goals: 0,Assists:4, Shots:2 }},
    {State:'FC',freq:{Goals: 0,Assists:57, Shots:24 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var jasprit=[
    {State:'Apps',freq:{Goals: 0, Assists:20, Shots:24}},
    {State:'Mins',freq:{Goals: 0, Assists:20, Shots:24}},
    {State:'Total',freq:{Goals: 0,Assists:1037, Shots:535}},
    {State:'OB',freq:{Goals: 0,Assists:811, Shots:587 }},
    {State:'6YD',freq:{Goals: 0,Assists:39, Shots:33 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:27, Shots:16 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:25, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:3, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var bhuvneshwar=[
    {State:'Apps',freq:{Goals: 18, Assists:70, Shots:17}},
    {State:'Mins',freq:{Goals: 31, Assists:69, Shots:17}},
    {State:'Total',freq:{Goals: 2718,Assists:3392, Shots:366}},
    {State:'OB',freq:{Goals: 1345,Assists:2769, Shots:408 }},
    {State:'6YD',freq:{Goals: 45,Assists:70, Shots:16 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 30,Assists:40, Shots:26 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 60,Assists:48, Shots:23 }},
    {State:'THI',freq:{Goals: 0,Assists:2, Shots:0 }},
    {State:'Rating',freq:{Goals: 4,Assists:0, Shots:0 }}
];

var umesh=[
    {State:'Apps',freq:{Goals: 34, Assists:70, Shots:1}},
    {State:'Mins',freq:{Goals: 66, Assists:68, Shots:1}},
    {State:'Total',freq:{Goals: 5598,Assists:3259, Shots:18}},
    {State:'OB',freq:{Goals: 3378,Assists:3219, Shots:24 }},
    {State:'6YD',freq:{Goals: 94,Assists:98, Shots:1 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 36,Assists:33, Shots:24 }},
    {State:'THB',freq:{Goals: 4,Assists:6, Shots:8 }},
    {State:'FC',freq:{Goals: 60,Assists:33, Shots:18 }},
    {State:'THI',freq:{Goals: 4,Assists:3, Shots:0 }},
    {State:'Rating',freq:{Goals: 1,Assists:0, Shots:0 }}
];

var yuzvendra=[
    {State:'Apps',freq:{Goals: 0, Assists:6, Shots:6}},
    {State:'Mins',freq:{Goals: 0, Assists:6, Shots:6}},
    {State:'Total',freq:{Goals: 0,Assists:324, Shots:144}},
    {State:'OB',freq:{Goals: 0,Assists:229, Shots:174 }},
    {State:'6YD',freq:{Goals: 0,Assists:10, Shots:11 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:23, Shots:16 }},
    {State:'THB',freq:{Goals: 0,Assists:4, Shots:7 }},
    {State:'FC',freq:{Goals: 50,Assists:32, Shots:13 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:1 }}
];

var amitm=[
    {State:'Apps',freq:{Goals: 22, Assists:36, Shots:10}},
    {State:'Mins',freq:{Goals: 40, Assists:34, Shots:10}},
    {State:'Total',freq:{Goals: 5103,Assists:1917, Shots:228}},
    {State:'OB',freq:{Goals: 2715,Assists:1511, Shots:240 }},
    {State:'6YD',freq:{Goals: 76,Assists:64, Shots:16 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 28,Assists:21, Shots:19 }},
    {State:'THB',freq:{Goals: 36,Assists:24, Shots:15 }},
    {State:'FC',freq:{Goals: 3,Assists:5, Shots:6 }},
    {State:'THI',freq:{Goals: 67,Assists:29, Shots:14 }},
    {State:'Rating',freq:{Goals: 2,Assists:2, Shots:0 }}
];

var alexc=[
    {State:'Apps',freq:{Goals: 0, Assists:59, Shots:37}},
    {State:'Mins',freq:{Goals: 0, Assists:52, Shots:33}},
    {State:'Total',freq:{Goals: 0,Assists:1953, Shots:606}},
    {State:'OB',freq:{Goals: 0,Assists:1510, Shots:714 }},
    {State:'6YD',freq:{Goals: 0,Assists:63, Shots:35 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:24, Shots:20 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:31, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:1, Shots:3 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var stuart=[
    {State:'Apps',freq:{Goals: 0, Assists:20, Shots:20}},
    {State:'Mins',freq:{Goals: 0, Assists:16, Shots:12}},
    {State:'Total',freq:{Goals: 0,Assists:559, Shots:171}},
    {State:'OB',freq:{Goals: 0,Assists:490, Shots:226 }},
    {State:'6YD',freq:{Goals: 0,Assists:12, Shots:6 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:41, Shots:38 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:8 }},
    {State:'FC',freq:{Goals: 0,Assists:47, Shots:29 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var barry=[
    {State:'Apps',freq:{Goals: 0, Assists:13, Shots:2}},
    {State:'Mins',freq:{Goals: 0, Assists:13, Shots:2}},
    {State:'Total',freq:{Goals: 0,Assists:638, Shots:48}},
    {State:'OB',freq:{Goals: 0,Assists:687, Shots:102 }},
    {State:'6YD',freq:{Goals: 0,Assists:25, Shots:4 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:28, Shots:26 }},
    {State:'THB',freq:{Goals: 0,Assists:6, Shots:13 }},
    {State:'FC',freq:{Goals: 0,Assists:26, Shots:12 }},
    {State:'THI',freq:{Goals: 0,Assists:2, Shots:1 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var timm=[
    {State:'Apps',freq:{Goals: 0, Assists:33, Shots:14}},
    {State:'Mins',freq:{Goals: 0, Assists:32, Shots:14}},
    {State:'Total',freq:{Goals: 0,Assists:1650, Shots:268}},
    {State:'OB',freq:{Goals: 0,Assists:1313, Shots:324 }},
    {State:'6YD',freq:{Goals: 0,Assists:34, Shots:13 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:39, Shots:25 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:49, Shots:21 }},
    {State:'THI',freq:{Goals: 0,Assists:1, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var george=[
    {State:'Apps',freq:{Goals: 0, Assists:68, Shots:46}},
    {State:'Mins',freq:{Goals: 0, Assists:66, Shots:42}},
    {State:'Total',freq:{Goals: 0,Assists:3284, Shots:856}},
    {State:'OB',freq:{Goals: 0,Assists:2507, Shots:927 }},
    {State:'6YD',freq:{Goals: 0,Assists:71, Shots:52 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:5, Shots:6 }},
    {State:'THB',freq:{Goals: 0,Assists:46, Shots:16 }},
    {State:'FC',freq:{Goals: 0,Assists:5, Shots:6 }},
    {State:'THI',freq:{Goals: 0,Assists:3, Shots:1 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var boyd=[
    {State:'Apps',freq:{Goals: 1, Assists:46, Shots:26}},
    {State:'Mins',freq:{Goals: 2, Assists:44, Shots:25}},
    {State:'Total',freq:{Goals: 125,Assists:2139, Shots:522}},
    {State:'OB',freq:{Goals: 81,Assists:1763, Shots:537 }},
    {State:'6YD',freq:{Goals: 1,Assists:56, Shots:28 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 81,Assists:31, Shots:19 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:6 }},
    {State:'FC',freq:{Goals: 125,Assists:38, Shots:19 }},
    {State:'THI',freq:{Goals: 0,Assists:1, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var maxs=[
    {State:'Apps',freq:{Goals: 0, Assists:13, Shots:26}},
    {State:'Mins',freq:{Goals: 0, Assists:12, Shots:22}},
    {State:'Total',freq:{Goals: 0,Assists:543, Shots:390}},
    {State:'OB',freq:{Goals: 0,Assists:520, Shots:471 }},
    {State:'6YD',freq:{Goals: 0,Assists:16, Shots:26 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:32, Shots:19 }},
    {State:'THB',freq:{Goals: 0,Assists:6, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:34, Shots:15 }},
    {State:'THI',freq:{Goals: 0,Assists:1, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var craig=[
    {State:'Apps',freq:{Goals: 0, Assists:13, Shots:26}},
    {State:'Mins',freq:{Goals: 0, Assists:12, Shots:22}},
    {State:'Total',freq:{Goals: 0,Assists:543, Shots:390}},
    {State:'OB',freq:{Goals: 0,Assists:520, Shots:471 }},
    {State:'6YD',freq:{Goals: 0,Assists:16, Shots:26 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:33, Shots:18 }},
    {State:'THB',freq:{Goals: 0,Assists:6, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:34, Shots:15 }},
    {State:'THI',freq:{Goals: 0,Assists:1, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var peterc=[
    {State:'Apps',freq:{Goals: 0, Assists:18, Shots:0}},
    {State:'Mins',freq:{Goals: 0, Assists:17, Shots:0}},
    {State:'Total',freq:{Goals: 0,Assists:878, Shots:0}},
    {State:'OB',freq:{Goals: 0,Assists:1020, Shots:0 }},
    {State:'6YD',freq:{Goals: 0,Assists:25, Shots:0 }},
    {State:'Pty',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'CRS',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Corn',freq:{Goals: 0,Assists:41, Shots:0 }},
    {State:'THB',freq:{Goals: 0,Assists:7, Shots:0 }},
    {State:'FC',freq:{Goals: 0,Assists:35, Shots:0 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var andym=[
    {State:'Apps',freq:{Goals: 0, Assists:22, Shots:19}},
    {State:'Mins',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Total',freq:{Goals: 0,Assists:1044, Shots:174}},
    {State:'OB',freq:{Goals: 0,Assists:835, Shots:216 }},
    {State:'6YD',freq:{Goals: 0,Assists:22, Shots:13 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:38, Shots:17 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:47, Shots:13 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var jacob=[
    {State:'Apps',freq:{Goals: 0, Assists:4, Shots:8}},
    {State:'Mins',freq:{Goals: 0, Assists:4, Shots:8}},
    {State:'Total',freq:{Goals: 0,Assists:186, Shots:174}},
    {State:'OB',freq:{Goals: 0,Assists:155, Shots:192 }},
    {State:'6YD',freq:{Goals: 0,Assists:5, Shots:12 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:31, Shots:16 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:5, Shots:15 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:1 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var AppstH=[
    {State:'Apps',freq:{Goals: 8, Assists:16, Shots:6}},
    {State:'Mins',freq:{Goals: 16, Assists:30, Shots:6}},
    {State:'Total',freq:{Goals: 1945,Assists:1643, Shots:132}},
    {State:'OB',freq:{Goals: 1067,Assists:1541, Shots:191 }},
    {State:'6YD',freq:{Goals: 22,Assists:61, Shots:7 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 49,Assists:26, Shots:27 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:9 }},
    {State:'FC',freq:{Goals: 88,Assists:27, Shots:19 }},
    {State:'THI',freq:{Goals: 2,Assists:4, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:2, Shots:0 }}
];

var adamM=[
    {State:'Apps',freq:{Goals: 0, Assists:37, Shots:18}},
    {State:'Mins',freq:{Goals: 0, Assists:36, Shots:18}},
    {State:'Total',freq:{Goals: 0,Assists:1639, Shots:373}},
    {State:'OB',freq:{Goals: 0,Assists:1434, Shots:458 }},
    {State:'6YD',freq:{Goals: 0,Assists:38, Shots:21 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:37, Shots:21 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:43, Shots:18 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:1 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var benW=[
    {State:'Apps',freq:{Goals: 0, Assists:6, Shots:4}},
    {State:'Mins',freq:{Goals: 0, Assists:6, Shots:4}},
    {State:'Total',freq:{Goals: 0,Assists:309, Shots:85}},
    {State:'OB',freq:{Goals: 0,Assists:315, Shots:116 }},
    {State:'6YD',freq:{Goals: 0,Assists:8, Shots:5 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:40, Shots:23 }},
    {State:'THB',freq:{Goals: 0,Assists:6, Shots:8 }},
    {State:'FC',freq:{Goals: 0,Assists:39, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var hamishB=[
    {State:'Apps',freq:{Goals: 1, Assists:16, Shots:0}},
    {State:'Mins',freq:{Goals: 1, Assists:15, Shots:0}},
    {State:'Total',freq:{Goals: 90,Assists:718, Shots:0}},
    {State:'OB',freq:{Goals: 47,Assists:621, Shots:0 }},
    {State:'6YD',freq:{Goals: 0,Assists:27, Shots:0 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:0 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:0 }},
    {State:'Corn',freq:{Goals: 0,Assists:23, Shots:0 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:0 }},
    {State:'FC',freq:{Goals: 0,Assists:27, Shots:0 }},
    {State:'THI',freq:{Goals: 0,Assists:2, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var ishS=[
    {State:'Apps',freq:{Goals: 14, Assists:18, Shots:12}},
    {State:'Mins',freq:{Goals: 26, Assists:17, Shots:12}},
    {State:'Total',freq:{Goals: 2826,Assists:868, Shots:268}},
    {State:'OB',freq:{Goals: 1774,Assists:773, Shots:304 }},
    {State:'6YD',freq:{Goals: 38,Assists:19, Shots:21 }},
    {State:'Pty',freq:{Goals: 19,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 21,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 47,Assists:41, Shots:15 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 74,Assists:46, Shots:13 }},
    {State:'THI',freq:{Goals: 2,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var neilW=[
    {State:'Apps',freq:{Goals: 32, Assists:0, Shots:0}},
    {State:'Mins',freq:{Goals: 61, Assists:0, Shots:0}},
    {State:'Total',freq:{Goals: 7045,Assists:0, Shots:0}},
    {State:'OB',freq:{Goals: 3758,Assists:0, Shots:0 }},
    {State:'6YD',freq:{Goals: 130,Assists:0, Shots:0 }},
    {State:'Pty',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'CRS',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Corn',freq:{Goals: 29,Assists:0, Shots:0 }},
    {State:'THB',freq:{Goals: 3,Assists:0, Shots:0 }},
    {State:'FC',freq:{Goals: 54,Assists:0, Shots:0 }},
    {State:'THI',freq:{Goals: 5,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 4,Assists:0, Shots:0 }}
];

var trentB=[
    {State:'Apps',freq:{Goals: 50, Assists:51, Shots:14}},
    {State:'Mins',freq:{Goals: 94, Assists:51, Shots:14}},
    {State:'Total',freq:{Goals:11041,Assists:2748, Shots:312}},
    {State:'OB',freq:{Goals: 5464,Assists:2294, Shots:410 }},
    {State:'6YD',freq:{Goals: 190,Assists:90, Shots:20 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 29,Assists:25, Shots:20 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:8 }},
    {State:'FC',freq:{Goals: 58,Assists:31, Shots:16 }},
    {State:'THI',freq:{Goals: 9,Assists:4, Shots:0 }},
    {State:'Rating',freq:{Goals: 5,Assists:2, Shots:0 }}
];

var timS=[
    {State:'Apps',freq:{Goals: 57, Assists:119, Shots:39}},
    {State:'Mins',freq:{Goals: 105, Assists:117, Shots:38}},
    {State:'Total',freq:{Goals: 12620,Assists:5942, Shots:846}},
    {State:'OB',freq:{Goals: 6438,Assists:5316, Shots:1229 }},
    {State:'6YD',freq:{Goals: 204,Assists:160, Shots:46 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 31,Assists:33, Shots:27 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:9 }},
    {State:'FC',freq:{Goals: 62,Assists:37, Shots:18 }},
    {State:'THI',freq:{Goals: 11,Assists:4, Shots:0 }},
    {State:'Rating',freq:{Goals: 6,Assists:2, Shots:1 }}
];

var junaidK=[
    {State:'Apps',freq:{Goals: 22, Assists:62, Shots:9}},
    {State:'Mins',freq:{Goals: 41, Assists:62, Shots:9}},
    {State:'Total',freq:{Goals: 4605,Assists:2965, Shots:162}},
    {State:'OB',freq:{Goals: 2253,Assists:2644, Shots:236 }},
    {State:'6YD',freq:{Goals: 71,Assists:94, Shots:8 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 31,Assists:28, Shots:30 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:9 }},
    {State:'FC',freq:{Goals: 64,Assists:32, Shots:20 }},
    {State:'THI',freq:{Goals: 1,Assists:3, Shots:0 }},
    {State:'Rating',freq:{Goals: 5,Assists:0, Shots:0 }}
];

var sohailK=[
    {State:'Apps',freq:{Goals: 9, Assists:13, Shots:3}},
    {State:'Mins',freq:{Goals: 17, Assists:13, Shots:3}},
    {State:'Total',freq:{Goals: 1828,Assists:666, Shots:42}},
    {State:'OB',freq:{Goals: 1125,Assists:597, Shots:51 }},
    {State:'6YD',freq:{Goals: 27,Assists:19, Shots:2 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 41,Assists:31, Shots:26 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 68,Assists:35, Shots:21 }},
    {State:'THI',freq:{Goals: 1,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 2,Assists:1, Shots:0 }}
];

var wahabR=[
    {State:'Apps',freq:{Goals: 25, Assists:79, Shots:27}},
    {State:'Mins',freq:{Goals: 45, Assists:78, Shots:27}},
    {State:'Total',freq:{Goals: 4646,Assists:3695, Shots:543}},
    {State:'OB',freq:{Goals: 2680,Assists:3503, Shots:723 }},
    {State:'6YD',freq:{Goals: 78,Assists:102, Shots:28 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 34,Assists:34, Shots:26 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:8 }},
    {State:'FC',freq:{Goals: 60,Assists:37, Shots:19 }},
    {State:'THI',freq:{Goals: 2,Assists:4, Shots:0 }},
    {State:'Rating',freq:{Goals: 2,Assists:1, Shots:0 }}
];

var mohammadA=[
    {State:'Apps',freq:{Goals: 28, Assists:36, Shots:31}},
    {State:'Mins',freq:{Goals: 53, Assists:36, Shots:31}},
    {State:'Total',freq:{Goals: 6067,Assists:1867, Shots:690}},
    {State:'OB',freq:{Goals: 2959,Assists:1508, Shots:809 }},
    {State:'6YD',freq:{Goals: 94,Assists:55, Shots:34 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 31,Assists:27, Shots:24 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 65,Assists:34, Shots:20 }},
    {State:'THI',freq:{Goals: 3,Assists:1, Shots:0 }},
    {State:'Rating',freq:{Goals: 4,Assists:0, Shots:0 }}
];

var sohailT=[
    {State:'Apps',freq:{Goals: 2, Assists:62, Shots:57}},
    {State:'Mins',freq:{Goals: 4, Assists:60, Shots:57}},
    {State:'Total',freq:{Goals: 504,Assists:2949, Shots:1214}},
    {State:'OB',freq:{Goals: 316,Assists:2566, Shots:1454 }},
    {State:'6YD',freq:{Goals: 5,Assists:71, Shots:54 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 63,Assists:36, Shots:27 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:8 }},
    {State:'FC',freq:{Goals: 101,Assists:42, Shots:22 }},
    {State:'THI',freq:{Goals: 0,Assists:3, Shots:0 }},
    {State:'Rating',freq:{Goals: 6,Assists:1, Shots:0 }}
];

var yasirS=[
    {State:'Apps',freq:{Goals: 26, Assists:17, Shots:2}},
    {State:'Mins',freq:{Goals: 50, Assists:16, Shots:2}},
    {State:'Total',freq:{Goals: 8366,Assists:849, Shots:24}},
    {State:'OB',freq:{Goals: 4457,Assists:766, Shots:39 }},
    {State:'6YD',freq:{Goals: 149,Assists:18, Shots:0 }},
    {State:'Pty',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'CRS',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Corn',freq:{Goals: 30,Assists:43, Shots:0 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:10 }},
    {State:'FC',freq:{Goals: 56,Assists:47, Shots:0 }},
    {State:'THI',freq:{Goals: 8,Assists:1, Shots:0 }},
    {State:'Rating',freq:{Goals: 11,Assists:1, Shots:0 }}
];

var imranK=[
    {State:'Apps',freq:{Goals: 9, Assists:0, Shots:0}},
    {State:'Mins',freq:{Goals: 17, Assists:0, Shots:0}},
    {State:'Total',freq:{Goals: 1492,Assists:0, Shots:0}},
    {State:'OB',freq:{Goals: 844,Assists:0, Shots:0 }},
    {State:'6YD',freq:{Goals: 28,Assists:0, Shots:0 }},
    {State:'Pty',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'CRS',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Corn',freq:{Goals: 30,Assists:0, Shots:0 }},
    {State:'THB',freq:{Goals: 3,Assists:0, Shots:0 }},
    {State:'FC',freq:{Goals: 53,Assists:0, Shots:0 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 1,Assists:0, Shots:0 }}
];

var rummanR=[
    {State:'Apps',freq:{Goals: 0, Assists:1, Shots:2}},
    {State:'Mins',freq:{Goals: 0, Assists:1, Shots:2}},
    {State:'Total',freq:{Goals: 0,Assists:54, Shots:42}},
    {State:'OB',freq:{Goals: 0,Assists:44, Shots:35 }},
    {State:'6YD',freq:{Goals: 0,Assists:2, Shots:1 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:22, Shots:35 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:5 }},
    {State:'FC',freq:{Goals: 0,Assists:27, Shots:42 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var kyleA=[
    {State:'Apps',freq:{Goals: 11, Assists:28, Shots:21}},
    {State:'Mins',freq:{Goals: 21, Assists:27, Shots:21}},
    {State:'Total',freq:{Goals: 2081,Assists:1303, Shots:436}},
    {State:'OB',freq:{Goals: 886,Assists:1051, Shots:579 }},
    {State:'6YD',freq:{Goals: 39,Assists:34, Shots:26 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 23,Assists:31, Shots:22 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:8 }},
    {State:'FC',freq:{Goals: 53,Assists:38, Shots:16 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var imranT=[
    {State:'Apps',freq:{Goals: 20, Assists:78, Shots:33}},
    {State:'Mins',freq:{Goals: 37, Assists:76, Shots:33}},
    {State:'Total',freq:{Goals: 3925,Assists:4057, Shots:737}},
    {State:'OB',freq:{Goals: 2294,Assists:3152, Shots:815 }},
    {State:'6YD',freq:{Goals: 57,Assists:132, Shots:55 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 40,Assists:24, Shots:15 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 69,Assists:30, Shots:13 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var andileP=[
    {State:'Apps',freq:{Goals: 0, Assists:17, Shots:7}},
    {State:'Mins',freq:{Goals: 0, Assists:17, Shots:7}},
    {State:'Total',freq:{Goals: 0,Assists:694, Shots:123}},
    {State:'OB',freq:{Goals: 0,Assists:679, Shots:185 }},
    {State:'6YD',freq:{Goals: 0,Assists:18, Shots:7 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:37, Shots:26 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:9 }},
    {State:'FC',freq:{Goals: 0,Assists:38, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var wayneP=[
    {State:'Apps',freq:{Goals: 5, Assists:65, Shots:40}},
    {State:'Mins',freq:{Goals: 8, Assists:61, Shots:39}},
    {State:'Total',freq:{Goals: 484,Assists:2911, Shots:749}},
    {State:'OB',freq:{Goals: 347,Assists:2738, Shots:1038 }},
    {State:'6YD',freq:{Goals: 13,Assists:94, Shots:41 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 27,Assists:29, Shots:25 }},
    {State:'THB',freq:{Goals: 5,Assists:6, Shots:8 }},
    {State:'FC',freq:{Goals: 37,Assists:31, Shots:18 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var kagisoR=[
    {State:'Apps',freq:{Goals: 20, Assists:40, Shots:16}},
    {State:'Mins',freq:{Goals: 35, Assists:39, Shots:16}},
    {State:'Total',freq:{Goals: 3710,Assists:2005, Shots:362}},
    {State:'OB',freq:{Goals: 2137,Assists:1710, Shots:498 }},
    {State:'6YD',freq:{Goals: 87,Assists:65, Shots:22 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 24,Assists:26, Shots:16 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:9 }},
    {State:'FC',freq:{Goals: 42,Assists:31, Shots:42 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var daneP=[
    {State:'Apps',freq:{Goals: 0, Assists:1, Shots:4}},
    {State:'Mins',freq:{Goals: 0, Assists:1, Shots:4}},
    {State:'Total',freq:{Goals: 0,Assists:54, Shots:83}},
    {State:'OB',freq:{Goals: 0,Assists:44, Shots:115 }},
    {State:'6YD',freq:{Goals: 0,Assists:2, Shots:5 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:22, Shots:23 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:8 }},
    {State:'FC',freq:{Goals: 0,Assists:27, Shots:16 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var tabraizS=[
    {State:'Apps',freq:{Goals: 1, Assists:5, Shots:2}},
    {State:'Mins',freq:{Goals: 2, Assists:5, Shots:2}},
    {State:'Total',freq:{Goals: 263,Assists:264, Shots:36}},
    {State:'OB',freq:{Goals: 150,Assists:212, Shots:47 }},
    {State:'6YD',freq:{Goals: 2,Assists:7, Shots:0 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:0 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:0 }},
    {State:'Corn',freq:{Goals: 75,Assists:30, Shots:0 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:8 }},
    {State:'FC',freq:{Goals: 131,Assists:37, Shots:0 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var keshavM=[
    {State:'Apps',freq:{Goals: 11, Assists:2, Shots:0}},
    {State:'Mins',freq:{Goals: 20, Assists:2, Shots:0}},
    {State:'Total',freq:{Goals: 2463,Assists:97, Shots:0}},
    {State:'OB',freq:{Goals: 1189,Assists:97, Shots:0 }},
    {State:'6YD',freq:{Goals: 43,Assists:4, Shots:0 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:0 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:0 }},
    {State:'Corn',freq:{Goals: 27,Assists:24, Shots:0 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:8 }},
    {State:'FC',freq:{Goals: 57,Assists:24, Shots:0 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var chrisM=[
    {State:'Apps',freq:{Goals: 4, Assists:29, Shots:14}},
    {State:'Mins',freq:{Goals: 8, Assists:28, Shots:14}},
    {State:'Total',freq:{Goals: 623,Assists:1302, Shots:306}},
    {State:'OB',freq:{Goals: 459,Assists:1206, Shots:405 }},
    {State:'6YD',freq:{Goals: 12,Assists:33, Shots:20 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 38,Assists:37, Shots:20 }},
    {State:'THB',freq:{Goals: 5,Assists:6, Shots:8 }},
    {State:'FC',freq:{Goals: 52,Assists:40, Shots:15 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var duanneO=[
    {State:'Apps',freq:{Goals: 3, Assists:1, Shots:0}},
    {State:'Mins',freq:{Goals: 6, Assists:1, Shots:0}},
    {State:'Total',freq:{Goals: 404,Assists:42, Shots:0}},
    {State:'OB',freq:{Goals: 271,Assists:34, Shots:0 }},
    {State:'6YD',freq:{Goals: 14,Assists:1, Shots:0 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:0 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:0 }},
    {State:'Corn',freq:{Goals: 19,Assists:34, Shots:0 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:0 }},
    {State:'FC',freq:{Goals: 29,Assists:42, Shots:0 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 1,Assists:0, Shots:0 }}
];

var aaronP=[
    {State:'Apps',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Mins',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Total',freq:{Goals: 0,Assists:1085, Shots:288}},
    {State:'OB',freq:{Goals: 0,Assists:829, Shots:369 }},
    {State:'6YD',freq:{Goals: 0,Assists:26, Shots:17 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:32, Shots:22 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:41, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var vishwaF=[
    {State:'Apps',freq:{Goals: 2, Assists:4, Shots:0}},
    {State:'Mins',freq:{Goals: 2, Assists:4, Shots:0}},
    {State:'Total',freq:{Goals: 168,Assists:171, Shots:0}},
    {State:'OB',freq:{Goals: 103,Assists:186, Shots:0 }},
    {State:'6YD',freq:{Goals: 3,Assists:2, Shots:0 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:0 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:0 }},
    {State:'Corn',freq:{Goals: 34,Assists:93, Shots:0 }},
    {State:'THB',freq:{Goals: 3,Assists:7, Shots:0 }},
    {State:'FC',freq:{Goals: 56,Assists:86, Shots:0 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var ranganaH=[
    {State:'Apps',freq:{Goals: 10, Assists:19, Shots:2}},
    {State:'Mins',freq:{Goals: 19, Assists:19, Shots:2}},
    {State:'Total',freq:{Goals: 1863,Assists:997, Shots:42}},
    {State:'OB',freq:{Goals: 1057,Assists:896, Shots:62 }},
    {State:'6YD',freq:{Goals: 26,Assists:21, Shots:5 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 41,Assists:43, Shots:13 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:9 }},
    {State:'FC',freq:{Goals: 72,Assists:47, Shots:8 }},
    {State:'THI',freq:{Goals: 0,Assists:1, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var nuwanK=[
    {State:'Apps',freq:{Goals: 3, Assists:1, Shots:4}},
    {State:'Mins',freq:{Goals: 5, Assists:1, Shots:4}},
    {State:'Total',freq:{Goals: 526,Assists:48, Shots:84}},
    {State:'OB',freq:{Goals: 298,Assists:70, Shots:102 }},
    {State:'6YD',freq:{Goals: 7,Assists:2, Shots:4 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 43,Assists:35, Shots:25 }},
    {State:'THB',freq:{Goals: 4,Assists:9, Shots:7 }},
    {State:'FC',freq:{Goals: 75,Assists:24, Shots:21 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var lakshanS=[
    {State:'Apps',freq:{Goals: 2, Assists:6, Shots:1}},
    {State:'Mins',freq:{Goals: 4, Assists:5, Shots:1}},
    {State:'Total',freq:{Goals: 348,Assists:286, Shots:24}},
    {State:'OB',freq:{Goals: 187,Assists:189, Shots:34 }},
    {State:'6YD',freq:{Goals: 9,Assists:10, Shots:1 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 21,Assists:19, Shots:34 }},
    {State:'THB',freq:{Goals: 3,Assists:4, Shots:9 }},
    {State:'FC',freq:{Goals: 39,Assists:29, Shots:24 }},
    {State:'THI',freq:{Goals: 2,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var dushmanthaC=[
    {State:'Apps',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Mins',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Total',freq:{Goals: 0,Assists:1085, Shots:288}},
    {State:'OB',freq:{Goals: 0,Assists:829, Shots:369 }},
    {State:'6YD',freq:{Goals: 0,Assists:26, Shots:17 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:32, Shots:22 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:41, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var lahiruK=[
    {State:'Apps',freq:{Goals: 36, Assists:179, Shots:54}},
    {State:'Mins',freq:{Goals: 51, Assists:179, Shots:53}},
    {State:'Total',freq:{Goals: 5990,Assists:8951, Shots:1139}},
    {State:'OB',freq:{Goals: 3239,Assists:7089, Shots:1527 }},
    {State:'6YD',freq:{Goals: 78,Assists:232, Shots:42 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 42,Assists:30, Shots:36 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:8 }},
    {State:'FC',freq:{Goals: 78,Assists:39, Shots:27 }},
    {State:'THI',freq:{Goals: 4,Assists:6, Shots:1 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var lasithM=[
    {State:'Apps',freq:{Goals: 4, Assists:29, Shots:15}},
    {State:'Mins',freq:{Goals: 8, Assists:28, Shots:13}},
    {State:'Total',freq:{Goals: 738,Assists:1269, Shots:269}},
    {State:'OB',freq:{Goals: 565,Assists:1203, Shots:308 }},
    {State:'6YD',freq:{Goals: 7,Assists:43, Shots:10 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 81,Assists:28, Shots:31 }},
    {State:'THB',freq:{Goals: 5,Assists:6, Shots:7 }},
    {State:'FC',freq:{Goals: 106,Assists:30, Shots:27 }},
    {State:'THI',freq:{Goals: 0,Assists:2, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var surangaL=[
    {State:'Apps',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Mins',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Total',freq:{Goals: 0,Assists:1085, Shots:288}},
    {State:'OB',freq:{Goals: 0,Assists:829, Shots:369 }},
    {State:'6YD',freq:{Goals: 0,Assists:26, Shots:17 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:32, Shots:22 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:41, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var samuelB=[
    {State:'Apps',freq:{Goals: 6, Assists:14, Shots:25}},
    {State:'Mins',freq:{Goals: 9, Assists:14, Shots:23}},
    {State:'Total',freq:{Goals: 880,Assists:603, Shots:476}},
    {State:'OB',freq:{Goals: 460,Assists:523, Shots:592 }},
    {State:'6YD',freq:{Goals: 6,Assists:21, Shots:39 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 77,Assists:25, Shots:15 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 147,Assists:28, Shots:12 }},
    {State:'THI',freq:{Goals: 0,Assists:2, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var shannonG=[
    {State:'Apps',freq:{Goals: 68, Assists:13, Shots:1}},
    {State:'Mins',freq:{Goals: 130, Assists:13, Shots:1}},
    {State:'Total',freq:{Goals: 15952,Assists:720, Shots:6}},
    {State:'OB',freq:{Goals: 8410,Assists:592, Shots:15 }},
    {State:'6YD',freq:{Goals: 256,Assists:17, Shots:0 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 33,Assists:35, Shots:0 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:15 }},
    {State:'FC',freq:{Goals: 62,Assists:42, Shots:0 }},
    {State:'THI',freq:{Goals: 9,Assists:1, Shots:0 }},
    {State:'Rating',freq:{Goals: 10,Assists:0, Shots:0 }}
];

var alzarriJ=[
    {State:'Apps',freq:{Goals: 1, Assists:67, Shots:24}},
    {State:'Mins',freq:{Goals: 2, Assists:65, Shots:24}},
    {State:'Total',freq:{Goals: 166,Assists:3116, Shots:515}},
    {State:'OB',freq:{Goals: 98,Assists:2858, Shots:684 }},
    {State:'6YD',freq:{Goals: 6,Assists:95, Shots:36 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 16,Assists:30, Shots:19 }},
    {State:'THB',freq:{Goals: 4,Assists:6, Shots:8 }},
    {State:'FC',freq:{Goals: 28,Assists:33, Shots:14 }},
    {State:'THI',freq:{Goals: 1,Assists:4, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:1 }}
];

var sunilN=[
    {State:'Apps',freq:{Goals: 31, Assists:38, Shots:7}},
    {State:'Mins',freq:{Goals: 58, Assists:37, Shots:7}},
    {State:'Total',freq:{Goals: 6557,Assists:1952, Shots:168}},
    {State:'OB',freq:{Goals: 3039,Assists:1527, Shots:269 }},
    {State:'6YD',freq:{Goals: 118,Assists:64, Shots:8 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 26,Assists:24, Shots:34 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:10 }},
    {State:'FC',freq:{Goals: 56,Assists:31, Shots:21 }},
    {State:'THI',freq:{Goals: 4,Assists:1, Shots:1 }},
    {State:'Rating',freq:{Goals: 5,Assists:3, Shots:0 }}
];

var jeromeT=[
    {State:'Apps',freq:{Goals: 4, Assists:31, Shots:18}},
    {State:'Mins',freq:{Goals: 7, Assists:31, Shots:18}},
    {State:'Total',freq:{Goals: 906,Assists:1566, Shots:414}},
    {State:'OB',freq:{Goals: 460,Assists:1447, Shots:472 }},
    {State:'6YD',freq:{Goals: 19,Assists:53, Shots:23 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 2248,Assists:27, Shots:21 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:7 }},
    {State:'FC',freq:{Goals: 48,Assists:30, Shots:18 }},
    {State:'THI',freq:{Goals: 1,Assists:3, Shots:0 }},
    {State:'Rating',freq:{Goals: 1,Assists:0, Shots:0 }}
];

var devendraB=[
    {State:'Apps',freq:{Goals: 345, Assists:30, Shots:30}},
    {State:'Mins',freq:{Goals: 345, Assists:26, Shots:19}},
    {State:'Total',freq:{Goals: 345,Assists:812, Shots:228}},
    {State:'OB',freq:{Goals: 345,Assists:704, Shots:352 }},
    {State:'6YD',freq:{Goals: 345,Assists:23, Shots:8 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 345,Assists:30, Shots:44 }},
    {State:'THB',freq:{Goals: 345,Assists:5, Shots:9 }},
    {State:'FC',freq:{Goals: 345,Assists:35, Shots:28 }},
    {State:'THI',freq:{Goals: 345,Assists:2, Shots:0 }},
    {State:'Rating',freq:{Goals: 345,Assists:0, Shots:0 }}
];

var miguelC=[
    {State:'Apps',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Mins',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Total',freq:{Goals: 0,Assists:1085, Shots:288}},
    {State:'OB',freq:{Goals: 0,Assists:829, Shots:369 }},
    {State:'6YD',freq:{Goals: 0,Assists:26, Shots:17 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:32, Shots:22 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:41, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var ashleyN=[
    {State:'Apps',freq:{Goals: 20, Assists:40, Shots:16}},
    {State:'Mins',freq:{Goals: 35, Assists:39, Shots:16}},
    {State:'Total',freq:{Goals: 3710,Assists:2005, Shots:362}},
    {State:'OB',freq:{Goals: 2137,Assists:1710, Shots:498 }},
    {State:'6YD',freq:{Goals: 87,Assists:65, Shots:22 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 24,Assists:26, Shots:16 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:9 }},
    {State:'FC',freq:{Goals: 42,Assists:31, Shots:42 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var kemarR=[
    {State:'Apps',freq:{Goals: 4, Assists:29, Shots:14}},
    {State:'Mins',freq:{Goals: 8, Assists:28, Shots:14}},
    {State:'Total',freq:{Goals: 623,Assists:1302, Shots:306}},
    {State:'OB',freq:{Goals: 459,Assists:1206, Shots:405 }},
    {State:'6YD',freq:{Goals: 12,Assists:33, Shots:20 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 38,Assists:37, Shots:20 }},
    {State:'THB',freq:{Goals: 5,Assists:6, Shots:8 }},
    {State:'FC',freq:{Goals: 52,Assists:40, Shots:15 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var keFCickW=[
    {State:'Apps',freq:{Goals: 14, Assists:18, Shots:12}},
    {State:'Mins',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Total',freq:{Goals: 0,Assists:1085, Shots:288}},
    {State:'OB',freq:{Goals: 0,Assists:829, Shots:369 }},
    {State:'6YD',freq:{Goals: 38,Assists:19, Shots:21 }},
    {State:'Pty',freq:{Goals: 19,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 21,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 47,Assists:41, Shots:15 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 74,Assists:46, Shots:13 }},
    {State:'THI',freq:{Goals: 2,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var tendaiC=[
    {State:'Apps',freq:{Goals: 16, Assists:18, Shots:12}},
    {State:'Mins',freq:{Goals: 26, Assists:17, Shots:12}},
    {State:'Total',freq:{Goals: 2544,Assists:2452, Shots:414}},
    {State:'OB',freq:{Goals: 1774,Assists:773, Shots:304 }},
    {State:'6YD',freq:{Goals: 38,Assists:19, Shots:21 }},
    {State:'Pty',freq:{Goals: 19,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 21,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 47,Assists:41, Shots:15 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 74,Assists:46, Shots:13 }},
    {State:'THI',freq:{Goals: 2,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var michaelC=[
    {State:'Apps',freq:{Goals: 14, Assists:18, Shots:12}},
    {State:'Mins',freq:{Goals: 26, Assists:17, Shots:12}},
    {State:'Total',freq:{Goals: 2544,Assists:2452, Shots:414}},
    {State:'OB',freq:{Goals: 1774,Assists:773, Shots:304 }},
    {State:'6YD',freq:{Goals: 38,Assists:19, Shots:21 }},
    {State:'Pty',freq:{Goals: 19,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 21,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 43,Assists:33, Shots:34 }},
    {State:'THB',freq:{Goals: 4,Assists:6, Shots:8 }},
    {State:'FC',freq:{Goals: 67,Assists:35, Shots:26 }},
    {State:'THI',freq:{Goals: 2,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var brianV=[
    {State:'Apps',freq:{Goals: 17, Assists:120, Shots:26}},
    {State:'Mins',freq:{Goals: 29, Assists:120, Shots:26}},
    {State:'Total',freq:{Goals: 3447,Assists:5751, Shots:566}},
    {State:'OB',freq:{Goals: 1774,Assists:773, Shots:304 }},
    {State:'6YD',freq:{Goals: 38,Assists:19, Shots:21 }},
    {State:'Pty',freq:{Goals: 19,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 21,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 31,Assists:25, Shots:31 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:11 }},
    {State:'FC',freq:{Goals: 54,Assists:27, Shots:18 }},
    {State:'THI',freq:{Goals: 2,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var tendaiC=[
    {State:'Apps',freq:{Goals: 2, Assists:6, Shots:1}},
    {State:'Mins',freq:{Goals: 48, Assists:48, Shots:77}},
    {State:'Total',freq:{Goals: 2826,Assists:868, Shots:268}},
    {State:'OB',freq:{Goals: 1774,Assists:773, Shots:304 }},
    {State:'6YD',freq:{Goals: 38,Assists:19, Shots:21 }},
    {State:'Pty',freq:{Goals: 19,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 21,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 42,Assists:32, Shots:21 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:8 }},
    {State:'FC',freq:{Goals: 78,Assists:37, Shots:17 }},
    {State:'THI',freq:{Goals: 2,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var johnN=[
    {State:'Apps',freq:{Goals: 0, Assists:4, Shots:1}},
    {State:'Mins',freq:{Goals: 0, Assists:8, Shots:1}},
    {State:'Total',freq:{Goals: 0,Assists:627, Shots:24}},
    {State:'OB',freq:{Goals: 0,Assists:367, Shots:8 }},
    {State:'6YD',freq:{Goals: 0,Assists:11, Shots:1 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:33, Shots:8 }},
    {State:'THB',freq:{Goals: 0,Assists:4, Shots:2 }},
    {State:'FC',freq:{Goals: 0,Assists:57, Shots:24 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var graemeC=[
    {State:'Apps',freq:{Goals: 34, Assists:70, Shots:1}},
    {State:'Mins',freq:{Goals: 66, Assists:68, Shots:1}},
    {State:'Total',freq:{Goals: 5598,Assists:3259, Shots:18}},
    {State:'OB',freq:{Goals: 3378,Assists:3219, Shots:24 }},
    {State:'6YD',freq:{Goals: 94,Assists:98, Shots:1 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 36,Assists:33, Shots:24 }},
    {State:'THB',freq:{Goals: 4,Assists:6, Shots:8 }},
    {State:'FC',freq:{Goals: 60,Assists:33, Shots:18 }},
    {State:'THI',freq:{Goals: 4,Assists:3, Shots:0 }},
    {State:'Rating',freq:{Goals: 1,Assists:0, Shots:0 }}
];

var chrisMp=[
    {State:'Apps',freq:{Goals: 4, Assists:29, Shots:15}},
    {State:'Mins',freq:{Goals: 8, Assists:28, Shots:13}},
    {State:'Total',freq:{Goals: 738,Assists:1269, Shots:269}},
    {State:'OB',freq:{Goals: 565,Assists:1203, Shots:308 }},
    {State:'6YD',freq:{Goals: 7,Assists:43, Shots:10 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 81,Assists:28, Shots:31 }},
    {State:'THB',freq:{Goals: 5,Assists:6, Shots:7 }},
    {State:'FC',freq:{Goals: 106,Assists:30, Shots:27 }},
    {State:'THI',freq:{Goals: 0,Assists:2, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var tauraiM=[
    {State:'Apps',freq:{Goals: 10, Assists:19, Shots:2}},
    {State:'Mins',freq:{Goals: 19, Assists:19, Shots:2}},
    {State:'Total',freq:{Goals: 1863,Assists:997, Shots:42}},
    {State:'OB',freq:{Goals: 1057,Assists:896, Shots:62 }},
    {State:'6YD',freq:{Goals: 26,Assists:21, Shots:5 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 41,Assists:43, Shots:13 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:9 }},
    {State:'FC',freq:{Goals: 72,Assists:47, Shots:8 }},
    {State:'THI',freq:{Goals: 0,Assists:1, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var tinasheP=[
    {State:'Apps',freq:{Goals: 8, Assists:3, Shots:25}},
    {State:'Mins',freq:{Goals: 16, Assists:31, Shots:25}},
    {State:'Total',freq:{Goals: 1530,Assists:1532, Shots:534}},
    {State:'OB',freq:{Goals: 752,Assists:1521, Shots:766 }},
    {State:'6YD',freq:{Goals: 21,Assists:43, Shots:30 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 36,Assists:35, Shots:26 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:9 }},
    {State:'FC',freq:{Goals: 73,Assists:36, Shots:18 }},
    {State:'THI',freq:{Goals: 1,Assists:0, Shots:1 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var donaldT=[
    {State:'Apps',freq:{Goals: 128, Assists:194, Shots:19}},
    {State:'Mins',freq:{Goals: 240, Assists:191, Shots:19}},
    {State:'Total',freq:{Goals: 28042,Assists:9584, Shots:422}},
    {State:'OB',freq:{Goals: 13787,Assists:7861, Shots:552 }},
    {State:'6YD',freq:{Goals: 497,Assists:269, Shots:18 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 28,Assists:29, Shots:31 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:8 }},
    {State:'FC',freq:{Goals: 56,Assists:36, Shots:23 }},
    {State:'THI',freq:{Goals: 8,Assists:8, Shots:0 }},
    {State:'Rating',freq:{Goals: 7,Assists:5, Shots:0 }}
];




var gulbadinN=[
    {State:'Apps',freq:{Goals: 14, Assists:18, Shots:12}},
    {State:'Mins',freq:{Goals: 26, Assists:17, Shots:12}},
    {State:'Total',freq:{Goals: 2826,Assists:868, Shots:268}},
    {State:'OB',freq:{Goals: 1774,Assists:773, Shots:304 }},
    {State:'6YD',freq:{Goals: 38,Assists:19, Shots:21 }},
    {State:'Pty',freq:{Goals: 19,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 21,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 47,Assists:41, Shots:15 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 74,Assists:46, Shots:13 }},
    {State:'THI',freq:{Goals: 2,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var shapoorZ=[
    {State:'Apps',freq:{Goals: 14, Assists:18, Shots:12}},
    {State:'Mins',freq:{Goals: 26, Assists:17, Shots:12}},
    {State:'Total',freq:{Goals: 2826,Assists:868, Shots:268}},
    {State:'OB',freq:{Goals: 1774,Assists:773, Shots:304 }},
    {State:'6YD',freq:{Goals: 38,Assists:19, Shots:21 }},
    {State:'Pty',freq:{Goals: 19,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 21,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 47,Assists:41, Shots:15 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 74,Assists:46, Shots:13 }},
    {State:'THI',freq:{Goals: 2,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var aftabA=[
    {State:'Apps',freq:{Goals: 14, Assists:18, Shots:12}},
    {State:'Mins',freq:{Goals: 26, Assists:17, Shots:12}},
    {State:'Total',freq:{Goals: 2826,Assists:868, Shots:268}},
    {State:'OB',freq:{Goals: 1774,Assists:773, Shots:304 }},
    {State:'6YD',freq:{Goals: 38,Assists:19, Shots:21 }},
    {State:'Pty',freq:{Goals: 19,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 21,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 47,Assists:41, Shots:15 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 74,Assists:46, Shots:13 }},
    {State:'THI',freq:{Goals: 2,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var dawlatZ=[
    {State:'Apps',freq:{Goals: 14, Assists:18, Shots:12}},
    {State:'Mins',freq:{Goals: 26, Assists:17, Shots:12}},
    {State:'Total',freq:{Goals: 2826,Assists:868, Shots:268}},
    {State:'OB',freq:{Goals: 1774,Assists:773, Shots:304 }},
    {State:'6YD',freq:{Goals: 38,Assists:19, Shots:21 }},
    {State:'Pty',freq:{Goals: 19,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 21,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 47,Assists:41, Shots:15 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 74,Assists:46, Shots:13 }},
    {State:'THI',freq:{Goals: 2,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var hamidH=[
    {State:'Apps',freq:{Goals: 14, Assists:18, Shots:12}},
    {State:'Mins',freq:{Goals: 26, Assists:17, Shots:12}},
    {State:'Total',freq:{Goals: 2826,Assists:868, Shots:268}},
    {State:'OB',freq:{Goals: 1774,Assists:773, Shots:304 }},
    {State:'6YD',freq:{Goals: 38,Assists:19, Shots:21 }},
    {State:'Pty',freq:{Goals: 19,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 21,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 47,Assists:41, Shots:15 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 74,Assists:46, Shots:13 }},
    {State:'THI',freq:{Goals: 2,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var mirwaisA=[
    {State:'Apps',freq:{Goals: 14, Assists:18, Shots:12}},
    {State:'Mins',freq:{Goals: 26, Assists:17, Shots:12}},
    {State:'Total',freq:{Goals: 2826,Assists:868, Shots:268}},
    {State:'OB',freq:{Goals: 1774,Assists:773, Shots:304 }},
    {State:'6YD',freq:{Goals: 38,Assists:19, Shots:21 }},
    {State:'Pty',freq:{Goals: 19,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 21,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 47,Assists:41, Shots:15 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 74,Assists:46, Shots:13 }},
    {State:'THI',freq:{Goals: 2,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var amirH=[
    {State:'Apps',freq:{Goals: 14, Assists:18, Shots:12}},
    {State:'Mins',freq:{Goals: 26, Assists:17, Shots:12}},
    {State:'Total',freq:{Goals: 2826,Assists:868, Shots:268}},
    {State:'OB',freq:{Goals: 1774,Assists:773, Shots:304 }},
    {State:'6YD',freq:{Goals: 38,Assists:19, Shots:21 }},
    {State:'Pty',freq:{Goals: 19,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 21,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 47,Assists:41, Shots:15 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 74,Assists:46, Shots:13 }},
    {State:'THI',freq:{Goals: 2,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var fareedA=[
    {State:'Apps',freq:{Goals: 14, Assists:18, Shots:12}},
    {State:'Mins',freq:{Goals: 26, Assists:17, Shots:12}},
    {State:'Total',freq:{Goals: 2826,Assists:868, Shots:268}},
    {State:'OB',freq:{Goals: 1774,Assists:773, Shots:304 }},
    {State:'6YD',freq:{Goals: 38,Assists:19, Shots:21 }},
    {State:'Pty',freq:{Goals: 19,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 21,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 47,Assists:41, Shots:15 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 74,Assists:46, Shots:13 }},
    {State:'THI',freq:{Goals: 2,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var rashidK=[
    {State:'Apps',freq:{Goals: 14, Assists:18, Shots:12}},
    {State:'Mins',freq:{Goals: 26, Assists:17, Shots:12}},
    {State:'Total',freq:{Goals: 2826,Assists:868, Shots:268}},
    {State:'OB',freq:{Goals: 1774,Assists:773, Shots:304 }},
    {State:'6YD',freq:{Goals: 38,Assists:19, Shots:21 }},
    {State:'Pty',freq:{Goals: 19,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 21,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 47,Assists:41, Shots:15 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 74,Assists:46, Shots:13 }},
    {State:'THI',freq:{Goals: 2,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var yaminA=[
    {State:'Apps',freq:{Goals: 14, Assists:18, Shots:12}},
    {State:'Mins',freq:{Goals: 26, Assists:17, Shots:12}},
    {State:'Total',freq:{Goals: 2826,Assists:868, Shots:268}},
    {State:'OB',freq:{Goals: 1774,Assists:773, Shots:304 }},
    {State:'6YD',freq:{Goals: 38,Assists:19, Shots:21 }},
    {State:'Pty',freq:{Goals: 19,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 21,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 47,Assists:41, Shots:15 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 74,Assists:46, Shots:13 }},
    {State:'THI',freq:{Goals: 2,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var AsgharS=[
    {State:'Apps',freq:{Goals: 8, Assists:3, Shots:25}},
    {State:'Mins',freq:{Goals: 16, Assists:31, Shots:25}},
    {State:'Total',freq:{Goals: 1530,Assists:1532, Shots:534}},
    {State:'OB',freq:{Goals: 752,Assists:1521, Shots:766 }},
    {State:'6YD',freq:{Goals: 21,Assists:43, Shots:30 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 36,Assists:35, Shots:26 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:9 }},
    {State:'FC',freq:{Goals: 73,Assists:36, Shots:18 }},
    {State:'THI',freq:{Goals: 1,Assists:0, Shots:1 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var MohammadS=[
    {State:'Apps',freq:{Goals: 3, Assists:1, Shots:0}},
    {State:'Mins',freq:{Goals: 6, Assists:1, Shots:0}},
    {State:'Total',freq:{Goals: 404,Assists:42, Shots:0}},
    {State:'OB',freq:{Goals: 271,Assists:34, Shots:0 }},
    {State:'6YD',freq:{Goals: 14,Assists:1, Shots:0 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:0 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:0 }},
    {State:'Corn',freq:{Goals: 19,Assists:34, Shots:0 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:0 }},
    {State:'FC',freq:{Goals: 29,Assists:42, Shots:0 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 1,Assists:0, Shots:0 }}
];

var NoorAli =[
    {State:'Apps',freq:{Goals: 128, Assists:194, Shots:19}},
    {State:'Mins',freq:{Goals: 240, Assists:191, Shots:19}},
    {State:'Total',freq:{Goals: 28042,Assists:9584, Shots:422}},
    {State:'OB',freq:{Goals: 13787,Assists:7861, Shots:552 }},
    {State:'6YD',freq:{Goals: 497,Assists:269, Shots:18 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 28,Assists:29, Shots:31 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:8 }},
    {State:'FC',freq:{Goals: 56,Assists:36, Shots:23 }},
    {State:'THI',freq:{Goals: 8,Assists:8, Shots:0 }},
    {State:'Rating',freq:{Goals: 7,Assists:5, Shots:0 }}
];

var SamiullahS=[
    {State:'Apps',freq:{Goals: 13, Assists:57, Shots:13}},
    {State:'Mins',freq:{Goals: 25, Assists:57, Shots:13}},
    {State:'Total',freq:{Goals: 287,Assists:2789, Shots:2659}},
    {State:'OB',freq:{Goals: 1536,Assists:2687, Shots:356 }},
    {State:'6YD',freq:{Goals: 41,Assists:88, Shots:16 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 37,Assists:31, Shots:22 }},
    {State:'THB',freq:{Goals: 4,Assists:6, Shots:7 }},
    {State:'FC',freq:{Goals: 65,Assists:32, Shots:18 }},
    {State:'THI',freq:{Goals: 1,Assists:3, Shots:0 }},
    {State:'Rating',freq:{Goals: 1,Assists:0, Shots:0 }}
];

var MohammadN=[
    {State:'Apps',freq:{Goals: 18, Assists:63, Shots:8}},
    {State:'Mins',freq:{Goals: 34, Assists:62, Shots:8}},
    {State:'Total',freq:{Goals: 2950,Assists:3024, Shots:162}},
    {State:'OB',freq:{Goals: 1530,Assists:2813, Shots:253 }},
    {State:'6YD',freq:{Goals: 50,Assists:89, Shots:7 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 31,Assists:32, Shots:36 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:9 }},
    {State:'FC',freq:{Goals: 59,Assists:34, Shots:23 }},
    {State:'THI',freq:{Goals: 1,Assists:8, Shots:0 }},
    {State:'Rating',freq:{Goals: 2,Assists:2, Shots:0 }}
];

var shafiqullah=[
    {State:'Apps',freq:{Goals: 3, Assists:1, Shots:4}},
    {State:'Mins',freq:{Goals: 5, Assists:1, Shots:4}},
    {State:'Total',freq:{Goals: 526,Assists:48, Shots:84}},
    {State:'OB',freq:{Goals: 298,Assists:70, Shots:102 }},
    {State:'6YD',freq:{Goals: 7,Assists:2, Shots:4 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 43,Assists:35, Shots:25 }},
    {State:'THB',freq:{Goals: 4,Assists:9, Shots:7 }},
    {State:'FC',freq:{Goals: 75,Assists:24, Shots:21 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var NajeebT=[
    {State:'Apps',freq:{Goals: 10, Assists:49, Shots:23}},
    {State:'Mins',freq:{Goals: 18, Assists:47, Shots:21}},
    {State:'Total',freq:{Goals: 2544,Assists:2452, Shots:414}},
    {State:'OB',freq:{Goals: 1629,Assists:2292, Shots:547 }},
    {State:'6YD',freq:{Goals: 38,Assists:70, Shots:16 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 43,Assists:33, Shots:34 }},
    {State:'THB',freq:{Goals: 4,Assists:6, Shots:8}},
    {State:'FC',freq:{Goals: 67,Assists:35, Shots:26 }},
    {State:'THI',freq:{Goals: 5,Assists:5, Shots:0 }},
    {State:'Rating',freq:{Goals: 1,Assists:1, Shots:0 }}
];

var NawrozM=[
    {State:'Apps',freq:{Goals: 2, Assists:6, Shots:1}},
    {State:'Mins',freq:{Goals: 4, Assists:5, Shots:1}},
    {State:'Total',freq:{Goals: 348,Assists:286, Shots:24}},
    {State:'OB',freq:{Goals: 187,Assists:189, Shots:34 }},
    {State:'6YD',freq:{Goals: 9,Assists:10, Shots:1 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 21,Assists:19, Shots:34 }},
    {State:'THB',freq:{Goals: 3,Assists:4, Shots:9 }},
    {State:'FC',freq:{Goals: 39,Assists:29, Shots:24 }},
    {State:'THI',freq:{Goals: 2,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var KarimJ=[
    {State:'Apps',freq:{Goals: 25, Assists:49, Shots:7}},
    {State:'Mins',freq:{Goals: 48, Assists:48, Shots:77}},
    {State:'Total',freq:{Goals: 4671,Assists:2465, Shots:142}},
    {State:'OB',freq:{Goals: 2655,Assists:2247, Shots:250 }},
    {State:'6YD',freq:{Goals: 86,Assists:91, Shots:8 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 31,Assists:25, Shots:31 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:11 }},
    {State:'FC',freq:{Goals: 54,Assists:27, Shots:18 }},
    {State:'THI',freq:{Goals: 4,Assists:6, Shots:0 }},
    {State:'Rating',freq:{Goals: 2,Assists:0, Shots:0 }}
];

var JCorndA=[
    {State:'Apps',freq:{Goals: 17, Assists:120, Shots:26}},
    {State:'Mins',freq:{Goals: 29, Assists:120, Shots:26}},
    {State:'Total',freq:{Goals: 3447,Assists:5751, Shots:566}},
    {State:'OB',freq:{Goals: 1866,Assists:4981, Shots:729 }},
    {State:'6YD',freq:{Goals: 44,Assists:157, Shots:34 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 42,Assists:32, Shots:21 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:8 }},
    {State:'FC',freq:{Goals: 78,Assists:37, Shots:17 }},
    {State:'THI',freq:{Goals: 2,Assists:5, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:2, Shots:0 }}
];

var Shkodran=[
    {State:'Apps',freq:{Goals: 77, Assists:80, Shots:14}},
    {State:'Mins',freq:{Goals: 136, Assists:78, Shots:14}},
    {State:'Total',freq:{Goals: 14775,Assists:3733, Shots:278}},
    {State:'OB',freq:{Goals: 8051,Assists:3563, Shots:400 }},
    {State:'6YD',freq:{Goals: 218,Assists:115, Shots:8 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 37,Assists:31, Shots:50 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:9 }},
    {State:'FC',freq:{Goals: 68,Assists:32, Shots:35 }},
    {State:'THI',freq:{Goals: 8,Assists:6, Shots:0 }},
    {State:'Rating',freq:{Goals: 7,Assists:0, Shots:0 }}
];

var Henrikh=[
    {State:'Apps',freq:{Goals: 0, Assists:4, Shots:1}},
    {State:'Mins',freq:{Goals: 0, Assists:8, Shots:1}},
    {State:'Total',freq:{Goals: 0,Assists:627, Shots:24}},
    {State:'OB',freq:{Goals: 0,Assists:367, Shots:8 }},
    {State:'6YD',freq:{Goals: 0,Assists:11, Shots:1 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:33, Shots:8 }},
    {State:'THB',freq:{Goals: 0,Assists:4, Shots:2 }},
    {State:'FC',freq:{Goals: 0,Assists:57, Shots:24 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var Alexis=[
    {State:'Apps',freq:{Goals: 0, Assists:20, Shots:24}},
    {State:'Mins',freq:{Goals: 0, Assists:20, Shots:24}},
    {State:'Total',freq:{Goals: 0,Assists:1037, Shots:535}},
    {State:'OB',freq:{Goals: 0,Assists:811, Shots:587 }},
    {State:'6YD',freq:{Goals: 0,Assists:39, Shots:33 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:27, Shots:16 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:25, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:3, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var UsmanG=[
    {State:'Apps',freq:{Goals: 0, Assists:20, Shots:24}},
    {State:'Mins',freq:{Goals: 0, Assists:20, Shots:24}},
    {State:'Total',freq:{Goals: 0,Assists:1037, Shots:535}},
    {State:'OB',freq:{Goals: 0,Assists:811, Shots:587 }},
    {State:'6YD',freq:{Goals: 0,Assists:39, Shots:33 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:27, Shots:16 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:25, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:3, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];
var Pierre=[
    {State:'Apps',freq:{Goals: 18, Assists:70, Shots:17}},
    {State:'Mins',freq:{Goals: 31, Assists:69, Shots:17}},
    {State:'Total',freq:{Goals: 2718,Assists:3392, Shots:366}},
    {State:'OB',freq:{Goals: 1345,Assists:2769, Shots:408 }},
    {State:'6YD',freq:{Goals: 45,Assists:70, Shots:16 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 30,Assists:40, Shots:26 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 60,Assists:48, Shots:23 }},
    {State:'THI',freq:{Goals: 0,Assists:2, Shots:0 }},
    {State:'Rating',freq:{Goals: 4,Assists:0, Shots:0 }}
];

var Aaron=[
    {State:'Apps',freq:{Goals: 34, Assists:70, Shots:1}},
    {State:'Mins',freq:{Goals: 66, Assists:68, Shots:1}},
    {State:'Total',freq:{Goals: 5598,Assists:3259, Shots:18}},
    {State:'OB',freq:{Goals: 3378,Assists:3219, Shots:24 }},
    {State:'6YD',freq:{Goals: 94,Assists:98, Shots:1 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 36,Assists:33, Shots:24 }},
    {State:'THB',freq:{Goals: 4,Assists:6, Shots:8 }},
    {State:'FC',freq:{Goals: 60,Assists:33, Shots:18 }},
    {State:'THI',freq:{Goals: 4,Assists:3, Shots:0 }},
    {State:'Rating',freq:{Goals: 1,Assists:0, Shots:0 }}
];

var Mesut=[
    {State:'Apps',freq:{Goals: 0, Assists:6, Shots:6}},
    {State:'Mins',freq:{Goals: 0, Assists:6, Shots:6}},
    {State:'Total',freq:{Goals: 0,Assists:324, Shots:144}},
    {State:'OB',freq:{Goals: 0,Assists:229, Shots:174 }},
    {State:'6YD',freq:{Goals: 0,Assists:10, Shots:11 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:23, Shots:16 }},
    {State:'THB',freq:{Goals: 0,Assists:4, Shots:7 }},
    {State:'FC',freq:{Goals: 50,Assists:32, Shots:13 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:1 }}
];

var Nacho=[
    {State:'Apps',freq:{Goals: 22, Assists:36, Shots:10}},
    {State:'Mins',freq:{Goals: 40, Assists:34, Shots:10}},
    {State:'Total',freq:{Goals: 5103,Assists:1917, Shots:228}},
    {State:'OB',freq:{Goals: 2715,Assists:1511, Shots:240 }},
    {State:'6YD',freq:{Goals: 76,Assists:64, Shots:16 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 28,Assists:21, Shots:19 }},
    {State:'THB',freq:{Goals: 36,Assists:24, Shots:15 }},
    {State:'FC',freq:{Goals: 3,Assists:5, Shots:6 }},
    {State:'THI',freq:{Goals: 67,Assists:29, Shots:14 }},
    {State:'Rating',freq:{Goals: 2,Assists:2, Shots:0 }}
];

var Alexandre=[
    {State:'Apps',freq:{Goals: 0, Assists:59, Shots:37}},
    {State:'Mins',freq:{Goals: 0, Assists:52, Shots:33}},
    {State:'Total',freq:{Goals: 0,Assists:1953, Shots:606}},
    {State:'OB',freq:{Goals: 0,Assists:1510, Shots:714 }},
    {State:'6YD',freq:{Goals: 0,Assists:63, Shots:35 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:24, Shots:20 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:31, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:1, Shots:3 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var Laurent=[
    {State:'Apps',freq:{Goals: 0, Assists:20, Shots:20}},
    {State:'Mins',freq:{Goals: 0, Assists:16, Shots:12}},
    {State:'Total',freq:{Goals: 0,Assists:559, Shots:171}},
    {State:'OB',freq:{Goals: 0,Assists:490, Shots:226 }},
    {State:'6YD',freq:{Goals: 0,Assists:12, Shots:6 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:41, Shots:38 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:8 }},
    {State:'FC',freq:{Goals: 0,Assists:47, Shots:29 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var Granit=[
    {State:'Apps',freq:{Goals: 0, Assists:13, Shots:2}},
    {State:'Mins',freq:{Goals: 0, Assists:13, Shots:2}},
    {State:'Total',freq:{Goals: 0,Assists:638, Shots:48}},
    {State:'OB',freq:{Goals: 0,Assists:687, Shots:102 }},
    {State:'6YD',freq:{Goals: 0,Assists:25, Shots:4 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:28, Shots:26 }},
    {State:'THB',freq:{Goals: 0,Assists:6, Shots:13 }},
    {State:'FC',freq:{Goals: 0,Assists:26, Shots:12 }},
    {State:'THI',freq:{Goals: 0,Assists:2, Shots:1 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var DavidO=[
    {State:'Apps',freq:{Goals: 0, Assists:33, Shots:14}},
    {State:'Mins',freq:{Goals: 0, Assists:32, Shots:14}},
    {State:'Total',freq:{Goals: 0,Assists:1650, Shots:268}},
    {State:'OB',freq:{Goals: 0,Assists:1313, Shots:324 }},
    {State:'6YD',freq:{Goals: 0,Assists:34, Shots:13 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:39, Shots:25 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:49, Shots:21 }},
    {State:'THI',freq:{Goals: 0,Assists:1, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var Sead=[
    {State:'Apps',freq:{Goals: 0, Assists:68, Shots:46}},
    {State:'Mins',freq:{Goals: 0, Assists:66, Shots:42}},
    {State:'Total',freq:{Goals: 0,Assists:3284, Shots:856}},
    {State:'OB',freq:{Goals: 0,Assists:2507, Shots:927 }},
    {State:'6YD',freq:{Goals: 0,Assists:71, Shots:52 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:5, Shots:6 }},
    {State:'THB',freq:{Goals: 0,Assists:46, Shots:16 }},
    {State:'FC',freq:{Goals: 0,Assists:5, Shots:6 }},
    {State:'THI',freq:{Goals: 0,Assists:3, Shots:1 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var AlexI=[
    {State:'Apps',freq:{Goals: 1, Assists:46, Shots:26}},
    {State:'Mins',freq:{Goals: 2, Assists:44, Shots:25}},
    {State:'Total',freq:{Goals: 125,Assists:2139, Shots:522}},
    {State:'OB',freq:{Goals: 81,Assists:1763, Shots:537 }},
    {State:'6YD',freq:{Goals: 1,Assists:56, Shots:28 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 81,Assists:31, Shots:19 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:6 }},
    {State:'FC',freq:{Goals: 125,Assists:38, Shots:19 }},
    {State:'THI',freq:{Goals: 0,Assists:1, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var JackW=[
    {State:'Apps',freq:{Goals: 0, Assists:13, Shots:26}},
    {State:'Mins',freq:{Goals: 0, Assists:12, Shots:22}},
    {State:'Total',freq:{Goals: 0,Assists:543, Shots:390}},
    {State:'OB',freq:{Goals: 0,Assists:520, Shots:471 }},
    {State:'6YD',freq:{Goals: 0,Assists:16, Shots:26 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:32, Shots:19 }},
    {State:'THB',freq:{Goals: 0,Assists:6, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:34, Shots:15 }},
    {State:'THI',freq:{Goals: 0,Assists:1, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var HéctorB=[
    {State:'Apps',freq:{Goals: 0, Assists:13, Shots:26}},
    {State:'Mins',freq:{Goals: 0, Assists:12, Shots:22}},
    {State:'Total',freq:{Goals: 0,Assists:543, Shots:390}},
    {State:'OB',freq:{Goals: 0,Assists:520, Shots:471 }},
    {State:'6YD',freq:{Goals: 0,Assists:16, Shots:26 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:33, Shots:18 }},
    {State:'THB',freq:{Goals: 0,Assists:6, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:34, Shots:15 }},
    {State:'THI',freq:{Goals: 0,Assists:1, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var CalumC=[
    {State:'Apps',freq:{Goals: 0, Assists:18, Shots:0}},
    {State:'Mins',freq:{Goals: 0, Assists:17, Shots:0}},
    {State:'Total',freq:{Goals: 0,Assists:878, Shots:0}},
    {State:'OB',freq:{Goals: 0,Assists:1020, Shots:0 }},
    {State:'6YD',freq:{Goals: 0,Assists:25, Shots:0 }},
    {State:'Pty',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'CRS',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Corn',freq:{Goals: 0,Assists:41, Shots:0 }},
    {State:'THB',freq:{Goals: 0,Assists:7, Shots:0 }},
    {State:'FC',freq:{Goals: 0,Assists:35, Shots:0 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var PetrC=[
    {State:'Apps',freq:{Goals: 0, Assists:22, Shots:19}},
    {State:'Mins',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Total',freq:{Goals: 0,Assists:1044, Shots:174}},
    {State:'OB',freq:{Goals: 0,Assists:835, Shots:216 }},
    {State:'6YD',freq:{Goals: 0,Assists:22, Shots:13 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:38, Shots:17 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:47, Shots:13 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var RobH=[
    {State:'Apps',freq:{Goals: 0, Assists:4, Shots:8}},
    {State:'Mins',freq:{Goals: 0, Assists:4, Shots:8}},
    {State:'Total',freq:{Goals: 0,Assists:186, Shots:174}},
    {State:'OB',freq:{Goals: 0,Assists:155, Shots:192 }},
    {State:'6YD',freq:{Goals: 0,Assists:5, Shots:12 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:31, Shots:16 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:5, Shots:15 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:1 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var AinsleyM=[
    {State:'Apps',freq:{Goals: 8, Assists:16, Shots:6}},
    {State:'Mins',freq:{Goals: 16, Assists:30, Shots:6}},
    {State:'Total',freq:{Goals: 1945,Assists:1643, Shots:132}},
    {State:'OB',freq:{Goals: 1067,Assists:1541, Shots:191 }},
    {State:'6YD',freq:{Goals: 22,Assists:61, Shots:7 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 49,Assists:26, Shots:27 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:9 }},
    {State:'FC',freq:{Goals: 88,Assists:27, Shots:19 }},
    {State:'THI',freq:{Goals: 2,Assists:4, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:2, Shots:0 }}
];

var SimonF=[
    {State:'Apps',freq:{Goals: 0, Assists:37, Shots:18}},
    {State:'Mins',freq:{Goals: 0, Assists:36, Shots:18}},
    {State:'Total',freq:{Goals: 0,Assists:1639, Shots:373}},
    {State:'OB',freq:{Goals: 0,Assists:1434, Shots:458 }},
    {State:'6YD',freq:{Goals: 0,Assists:38, Shots:21 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:37, Shots:21 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:43, Shots:18 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:1 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var SteveC=[
    {State:'Apps',freq:{Goals: 15, Assists:39, Shots:14}},
    {State:'Mins',freq:{Goals: 25, Assists:37, Shots:14}},
    {State:'Total',freq:{Goals: 2571,Assists:1784, Shots:295}},
    {State:'OB',freq:{Goals: 1222,Assists:1486, Shots:327 }},
    {State:'6YD',freq:{Goals: 31,Assists:44, Shots:20 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 39,Assists:34, Shots:16 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 83,Assists:40, Shots:15 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:1 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];


var NathanA=[
    {State:'Apps',freq:{Goals: 31, Assists:38, Shots:7}},
    {State:'Mins',freq:{Goals: 58, Assists:37, Shots:7}},
    {State:'Total',freq:{Goals: 6557,Assists:1952, Shots:168}},
    {State:'OB',freq:{Goals: 3039,Assists:1527, Shots:269 }},
    {State:'6YD',freq:{Goals: 118,Assists:64, Shots:8 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 26,Assists:24, Shots:34 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:10 }},
    {State:'FC',freq:{Goals: 56,Assists:31, Shots:21 }},
    {State:'THI',freq:{Goals: 4,Assists:1, Shots:1 }},
    {State:'Rating',freq:{Goals: 5,Assists:3, Shots:0 }}
];

var JoshuaK=[
    {State:'Apps',freq:{Goals: 68, Assists:13, Shots:1}},
    {State:'Mins',freq:{Goals: 130, Assists:13, Shots:1}},
    {State:'Total',freq:{Goals: 15952,Assists:720, Shots:6}},
    {State:'OB',freq:{Goals: 8410,Assists:592, Shots:15 }},
    {State:'6YD',freq:{Goals: 256,Assists:17, Shots:0 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 33,Assists:35, Shots:0 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:15 }},
    {State:'FC',freq:{Goals: 62,Assists:42, Shots:0 }},
    {State:'THI',freq:{Goals: 9,Assists:1, Shots:0 }},
    {State:'Rating',freq:{Goals: 10,Assists:0, Shots:0 }}
];

var JuniorS=[
    {State:'Apps',freq:{Goals: 1, Assists:67, Shots:24}},
    {State:'Mins',freq:{Goals: 2, Assists:65, Shots:24}},
    {State:'Total',freq:{Goals: 166,Assists:3116, Shots:515}},
    {State:'OB',freq:{Goals: 98,Assists:2858, Shots:684 }},
    {State:'6YD',freq:{Goals: 6,Assists:95, Shots:36 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 16,Assists:30, Shots:19 }},
    {State:'THB',freq:{Goals: 4,Assists:6, Shots:8 }},
    {State:'FC',freq:{Goals: 28,Assists:33, Shots:14 }},
    {State:'THI',freq:{Goals: 1,Assists:4, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:1 }}
];

var LewisC=[
    {State:'Apps',freq:{Goals: 6, Assists:14, Shots:25}},
    {State:'Mins',freq:{Goals: 9, Assists:14, Shots:23}},
    {State:'Total',freq:{Goals: 880,Assists:603, Shots:476}},
    {State:'OB',freq:{Goals: 460,Assists:523, Shots:592 }},
    {State:'6YD',freq:{Goals: 6,Assists:21, Shots:39 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 77,Assists:25, Shots:15 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 147,Assists:28, Shots:12 }},
    {State:'THI',freq:{Goals: 0,Assists:2, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var AdamS=[
    {State:'Apps',freq:{Goals: 0, Assists:0, Shots:1}},
    {State:'Mins',freq:{Goals: 0, Assists:0, Shots:1}},
    {State:'Total',freq:{Goals: 0,Assists:0, Shots:21}},
    {State:'OB',freq:{Goals: 0,Assists:0, Shots:40 }},
    {State:'6YD',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Pty',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'CRS',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Corn',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'THB',freq:{Goals: 0,Assists:0, Shots:11 }},
    {State:'FC',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var AndrewS =[
    {State:'Apps',freq:{Goals: 8, Assists:4, Shots:5}},
    {State:'Mins',freq:{Goals: 11, Assists:1, Shots:4}},
    {State:'Total',freq:{Goals: 846,Assists:12, Shots:66}},
    {State:'OB',freq:{Goals: 506,Assists:9, Shots:71 }},
    {State:'6YD',freq:{Goals: 8,Assists:0, Shots:2 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 63,Assists:0, Shots:36 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 106,Assists:0, Shots:33 }},
    {State:'THI',freq:{Goals: 8,Assists:8, Shots:0 }},
    {State:'Rating',freq:{Goals: 7,Assists:5, Shots:0 }}
];

var RyanF=[
    {State:'Apps',freq:{Goals: 36, Assists:179, Shots:54}},
    {State:'Mins',freq:{Goals: 51, Assists:179, Shots:53}},
    {State:'Total',freq:{Goals: 5990,Assists:8951, Shots:1139}},
    {State:'OB',freq:{Goals: 3239,Assists:7089, Shots:1527 }},
    {State:'6YD',freq:{Goals: 78,Assists:232, Shots:42 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 42,Assists:30, Shots:36 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:8 }},
    {State:'FC',freq:{Goals: 78,Assists:39, Shots:27 }},
    {State:'THI',freq:{Goals: 4,Assists:6, Shots:1 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var JordonI=[
    {State:'Apps',freq:{Goals: 10, Assists:56, Shots:11}},
    {State:'Mins',freq:{Goals: 17, Assists:56, Shots:11}},
    {State:'Total',freq:{Goals: 1506,Assists:2342, Shots:220}},
    {State:'OB',freq:{Goals: 822,Assists:2294, Shots:275 }},
    {State:'6YD',freq:{Goals: 15,Assists:63, Shots:8 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 55,Assists:36, Shots:34 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:8 }},
    {State:'FC',freq:{Goals: 100,Assists:37, Shots:28 }},
    {State:'THI',freq:{Goals: 0,Assists:4, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var CharlieD=[
    {State:'Apps',freq:{Goals: 14, Assists:4, Shots:0}},
    {State:'Mins',freq:{Goals: 26, Assists:4, Shots:0}},
    {State:'Total',freq:{Goals: 3321,Assists:222, Shots:0}},
    {State:'OB',freq:{Goals: 1737,Assists:151, Shots:0 }},
    {State:'6YD',freq:{Goals: 52,Assists:5, Shots:300 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:0 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:0 }},
    {State:'Corn',freq:{Goals: 33,Assists:30, Shots:0 }},
    {State:'THB',freq:{Goals: 3,Assists:4, Shots:0 }},
    {State:'FC',freq:{Goals: 64,Assists:44, Shots:0 }},
    {State:'THI',freq:{Goals: 0,Assists:1, Shots:0 }},
    {State:'Rating',freq:{Goals: 37,Assists:0, Shots:0 }}
];

var DanG=[
    {State:'Apps',freq:{Goals: 4, Assists:29, Shots:15}},
    {State:'Mins',freq:{Goals: 8, Assists:28, Shots:13}},
    {State:'Total',freq:{Goals: 738,Assists:1269, Shots:269}},
    {State:'OB',freq:{Goals: 565,Assists:1203, Shots:308 }},
    {State:'6YD',freq:{Goals: 7,Assists:43, Shots:10 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 81,Assists:28, Shots:31 }},
    {State:'THB',freq:{Goals: 5,Assists:6, Shots:7 }},
    {State:'FC',freq:{Goals: 106,Assists:30, Shots:27 }},
    {State:'THI',freq:{Goals: 0,Assists:2, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var CallumW=[
    {State:'Apps',freq:{Goals: 3, Assists:14, Shots:0}},
    {State:'Mins',freq:{Goals: 4, Assists:14, Shots:0}},
    {State:'Total',freq:{Goals: 456,Assists:737, Shots:0}},
    {State:'OB',freq:{Goals: 228,Assists:731, Shots:0 }},
    {State:'6YD',freq:{Goals: 2,Assists:20, Shots:0 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:0 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:0 }},
    {State:'Corn',freq:{Goals: 114,Assists:37, Shots:0 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:0 }},
    {State:'FC',freq:{Goals: 228,Assists:37, Shots:0 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var AsmirB=[
    {State:'Apps',freq:{Goals: 108, Assists:121, Shots:56}},
    {State:'Mins',freq:{Goals: 198, Assists:121, Shots:55}},
    {State:'Total',freq:{Goals: 22177,Assists:6109, Shots:1173}},
    {State:'OB',freq:{Goals: 11122,Assists:5364, Shots:1491 }},
    {State:'6YD',freq:{Goals: 386,Assists:178, Shots:65 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 29,Assists:30, Shots:23 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 57,Assists:34, Shots:18 }},
    {State:'THI',freq:{Goals: 14,Assists:9, Shots:1 }},
    {State:'Rating',freq:{Goals: 15,Assists:1, Shots:0 }}
];

var HarryA=[
    {State:'Apps',freq:{Goals: 10, Assists:19, Shots:2}},
    {State:'Mins',freq:{Goals: 19, Assists:19, Shots:2}},
    {State:'Total',freq:{Goals: 1863,Assists:997, Shots:42}},
    {State:'OB',freq:{Goals: 1057,Assists:896, Shots:62 }},
    {State:'6YD',freq:{Goals: 26,Assists:21, Shots:5 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 41,Assists:43, Shots:13 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:9 }},
    {State:'FC',freq:{Goals: 72,Assists:47, Shots:8 }},
    {State:'THI',freq:{Goals: 0,Assists:1, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var alexoo=[
    {State:'App',freq:{Goals: 36, Assists:69, Shots:21}},
    {State:'Mins',freq:{Goals: 66, Assists:67, Shots:21}},
    {State:'Total',freq:{Goals: 6412,Assists:3550, Shots:480}},
    {State:'OB',freq:{Goals: 3800,Assists:2996, Shots:583 }},
    {State:'6YD',freq:{Goals: 125,Assists:102, Shots:27 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 30,Assists:29, Shots:22 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 51,Assists:35, Shots:17 }},
    {State:'THI',freq:{Goals: 6,Assists:4, Shots:0 }},
    {State:'Rating',freq:{Goals: 5,Assists:2, Shots:0 }}
];


var JermainD=[
    {State:'Apps',freq:{Goals: 8, Assists:3, Shots:25}},
    {State:'Mins',freq:{Goals: 16, Assists:31, Shots:25}},
    {State:'Total',freq:{Goals: 1530,Assists:1532, Shots:534}},
    {State:'OB',freq:{Goals: 752,Assists:1521, Shots:766 }},
    {State:'6YD',freq:{Goals: 21,Assists:43, Shots:30 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 36,Assists:35, Shots:26 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:9 }},
    {State:'FC',freq:{Goals: 73,Assists:36, Shots:18 }},
    {State:'THI',freq:{Goals: 1,Assists:0, Shots:1 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var MarcP=[
    {State:'Apps',freq:{Goals: 3, Assists:1, Shots:0}},
    {State:'Mins',freq:{Goals: 6, Assists:1, Shots:0}},
    {State:'Total',freq:{Goals: 404,Assists:42, Shots:0}},
    {State:'OB',freq:{Goals: 271,Assists:34, Shots:0 }},
    {State:'6YD',freq:{Goals: 14,Assists:1, Shots:0 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:0 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:0 }},
    {State:'Corn',freq:{Goals: 19,Assists:34, Shots:0 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:0 }},
    {State:'FC',freq:{Goals: 29,Assists:42, Shots:0 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 1,Assists:0, Shots:0 }}
];

var LysM=[
    {State:'Apps',freq:{Goals: 128, Assists:194, Shots:19}},
    {State:'Mins',freq:{Goals: 240, Assists:191, Shots:19}},
    {State:'Total',freq:{Goals: 28042,Assists:9584, Shots:422}},
    {State:'OB',freq:{Goals: 13787,Assists:7861, Shots:552 }},
    {State:'6YD',freq:{Goals: 497,Assists:269, Shots:18 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 28,Assists:29, Shots:31 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:8 }},
    {State:'FC',freq:{Goals: 56,Assists:36, Shots:23 }},
    {State:'THI',freq:{Goals: 8,Assists:8, Shots:0 }},
    {State:'Rating',freq:{Goals: 7,Assists:5, Shots:0 }}
];

var TyroneM=[
    {State:'Apps',freq:{Goals: 13, Assists:57, Shots:13}},
    {State:'Mins',freq:{Goals: 25, Assists:57, Shots:13}},
    {State:'Total',freq:{Goals: 287,Assists:2789, Shots:2659}},
    {State:'OB',freq:{Goals: 1536,Assists:2687, Shots:356 }},
    {State:'6YD',freq:{Goals: 41,Assists:88, Shots:16 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 37,Assists:31, Shots:22 }},
    {State:'THB',freq:{Goals: 4,Assists:6, Shots:7 }},
    {State:'FC',freq:{Goals: 65,Assists:32, Shots:18 }},
    {State:'THI',freq:{Goals: 1,Assists:3, Shots:0 }},
    {State:'Rating',freq:{Goals: 1,Assists:0, Shots:0 }}
];

var BenikA=[
    {State:'Apps',freq:{Goals: 18, Assists:63, Shots:8}},
    {State:'Mins',freq:{Goals: 34, Assists:62, Shots:8}},
    {State:'Total',freq:{Goals: 2950,Assists:3024, Shots:162}},
    {State:'OB',freq:{Goals: 1530,Assists:2813, Shots:253 }},
    {State:'6YD',freq:{Goals: 50,Assists:89, Shots:7 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 31,Assists:32, Shots:36 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:9 }},
    {State:'FC',freq:{Goals: 59,Assists:34, Shots:23 }},
    {State:'THI',freq:{Goals: 1,Assists:8, Shots:0 }},
    {State:'Rating',freq:{Goals: 2,Assists:2, Shots:0 }}
];

var EmersonH=[
    {State:'Apps',freq:{Goals: 3, Assists:1, Shots:4}},
    {State:'Mins',freq:{Goals: 5, Assists:1, Shots:4}},
    {State:'Total',freq:{Goals: 526,Assists:48, Shots:84}},
    {State:'OB',freq:{Goals: 298,Assists:70, Shots:102 }},
    {State:'6YD',freq:{Goals: 7,Assists:2, Shots:4 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 43,Assists:35, Shots:25 }},
    {State:'THB',freq:{Goals: 4,Assists:9, Shots:7 }},
    {State:'FC',freq:{Goals: 75,Assists:24, Shots:21 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var SollyM=[
    {State:'Apps',freq:{Goals: 10, Assists:49, Shots:23}},
    {State:'Mins',freq:{Goals: 18, Assists:47, Shots:21}},
    {State:'Total',freq:{Goals: 2544,Assists:2452, Shots:414}},
    {State:'OB',freq:{Goals: 1629,Assists:2292, Shots:547 }},
    {State:'6YD',freq:{Goals: 38,Assists:70, Shots:16 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 43,Assists:33, Shots:34 }},
    {State:'THB',freq:{Goals: 4,Assists:6, Shots:8}},
    {State:'FC',freq:{Goals: 67,Assists:35, Shots:26 }},
    {State:'THI',freq:{Goals: 5,Assists:5, Shots:0 }},
    {State:'Rating',freq:{Goals: 1,Assists:1, Shots:0 }}
];

var TomerH=[
    {State:'Apps',freq:{Goals: 2, Assists:6, Shots:1}},
    {State:'Mins',freq:{Goals: 4, Assists:5, Shots:1}},
    {State:'Total',freq:{Goals: 348,Assists:286, Shots:24}},
    {State:'OB',freq:{Goals: 187,Assists:189, Shots:34 }},
    {State:'6YD',freq:{Goals: 9,Assists:10, Shots:1 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 21,Assists:19, Shots:34 }},
    {State:'THB',freq:{Goals: 3,Assists:4, Shots:9 }},
    {State:'FC',freq:{Goals: 39,Assists:29, Shots:24 }},
    {State:'THI',freq:{Goals: 2,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var GaëtanB=[
    {State:'Apps',freq:{Goals: 25, Assists:49, Shots:7}},
    {State:'Mins',freq:{Goals: 48, Assists:48, Shots:77}},
    {State:'Total',freq:{Goals: 4671,Assists:2465, Shots:142}},
    {State:'OB',freq:{Goals: 2655,Assists:2247, Shots:250 }},
    {State:'6YD',freq:{Goals: 86,Assists:91, Shots:8 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 31,Assists:25, Shots:31 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:11 }},
    {State:'FC',freq:{Goals: 54,Assists:27, Shots:18 }},
    {State:'THI',freq:{Goals: 4,Assists:6, Shots:0 }},
    {State:'Rating',freq:{Goals: 2,Assists:0, Shots:0 }}
];

var GlennM=[
    {State:'Apps',freq:{Goals: 17, Assists:120, Shots:26}},
    {State:'Mins',freq:{Goals: 29, Assists:120, Shots:26}},
    {State:'Total',freq:{Goals: 3447,Assists:5751, Shots:566}},
    {State:'OB',freq:{Goals: 1866,Assists:4981, Shots:729 }},
    {State:'6YD',freq:{Goals: 44,Assists:157, Shots:34 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 42,Assists:32, Shots:21 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:8 }},
    {State:'FC',freq:{Goals: 78,Assists:37, Shots:17 }},
    {State:'THI',freq:{Goals: 2,Assists:5, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:2, Shots:0 }}
];

var MarkusS=[
    {State:'Apps',freq:{Goals: 77, Assists:80, Shots:14}},
    {State:'Mins',freq:{Goals: 136, Assists:78, Shots:14}},
    {State:'Total',freq:{Goals: 14775,Assists:3733, Shots:278}},
    {State:'OB',freq:{Goals: 8051,Assists:3563, Shots:400 }},
    {State:'6YD',freq:{Goals: 218,Assists:115, Shots:8 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 37,Assists:31, Shots:50 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:9 }},
    {State:'FC',freq:{Goals: 68,Assists:32, Shots:35 }},
    {State:'THI',freq:{Goals: 8,Assists:6, Shots:0 }},
    {State:'Rating',freq:{Goals: 7,Assists:0, Shots:0 }}
];

var ConnorG=[
    {State:'Apps',freq:{Goals: 0, Assists:4, Shots:1}},
    {State:'Mins',freq:{Goals: 0, Assists:8, Shots:1}},
    {State:'Total',freq:{Goals: 0,Assists:627, Shots:24}},
    {State:'OB',freq:{Goals: 0,Assists:367, Shots:8 }},
    {State:'6YD',freq:{Goals: 0,Assists:11, Shots:1 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:33, Shots:8 }},
    {State:'THB',freq:{Goals: 0,Assists:4, Shots:2 }},
    {State:'FC',freq:{Goals: 0,Assists:57, Shots:24 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var EzequielS=[
    {State:'Apps',freq:{Goals: 0, Assists:20, Shots:24}},
    {State:'Mins',freq:{Goals: 0, Assists:20, Shots:24}},
    {State:'Total',freq:{Goals: 0,Assists:1037, Shots:535}},
    {State:'OB',freq:{Goals: 0,Assists:811, Shots:587 }},
    {State:'6YD',freq:{Goals: 0,Assists:39, Shots:33 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:27, Shots:16 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:25, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:3, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var LiamR=[
    {State:'Apps',freq:{Goals: 18, Assists:70, Shots:17}},
    {State:'Mins',freq:{Goals: 31, Assists:69, Shots:17}},
    {State:'Total',freq:{Goals: 2718,Assists:3392, Shots:366}},
    {State:'OB',freq:{Goals: 1345,Assists:2769, Shots:408 }},
    {State:'6YD',freq:{Goals: 45,Assists:70, Shots:16 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 30,Assists:40, Shots:26 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 60,Assists:48, Shots:23 }},
    {State:'THI',freq:{Goals: 0,Assists:2, Shots:0 }},
    {State:'Rating',freq:{Goals: 4,Assists:0, Shots:0 }}
];

var UweH=[
    {State:'Apps',freq:{Goals: 34, Assists:70, Shots:1}},
    {State:'Mins',freq:{Goals: 66, Assists:68, Shots:1}},
    {State:'Total',freq:{Goals: 5598,Assists:3259, Shots:18}},
    {State:'OB',freq:{Goals: 3378,Assists:3219, Shots:24 }},
    {State:'6YD',freq:{Goals: 94,Assists:98, Shots:1 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 36,Assists:33, Shots:24 }},
    {State:'THB',freq:{Goals: 4,Assists:6, Shots:8 }},
    {State:'FC',freq:{Goals: 60,Assists:33, Shots:18 }},
    {State:'THI',freq:{Goals: 4,Assists:3, Shots:0 }},
    {State:'Rating',freq:{Goals: 1,Assists:0, Shots:0 }}
];

var LeonardoU=[
    {State:'Apps',freq:{Goals: 0, Assists:6, Shots:6}},
    {State:'Mins',freq:{Goals: 0, Assists:6, Shots:6}},
    {State:'Total',freq:{Goals: 0,Assists:324, Shots:144}},
    {State:'OB',freq:{Goals: 0,Assists:229, Shots:174 }},
    {State:'6YD',freq:{Goals: 0,Assists:10, Shots:11 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:23, Shots:16 }},
    {State:'THB',freq:{Goals: 0,Assists:4, Shots:7 }},
    {State:'FC',freq:{Goals: 50,Assists:32, Shots:13 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:1 }}
];

var BeramK=[
    {State:'Apps',freq:{Goals: 22, Assists:36, Shots:10}},
    {State:'Mins',freq:{Goals: 40, Assists:34, Shots:10}},
    {State:'Total',freq:{Goals: 5103,Assists:1917, Shots:228}},
    {State:'OB',freq:{Goals: 2715,Assists:1511, Shots:240 }},
    {State:'6YD',freq:{Goals: 76,Assists:64, Shots:16 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 28,Assists:21, Shots:19 }},
    {State:'THB',freq:{Goals: 36,Assists:24, Shots:15 }},
    {State:'FC',freq:{Goals: 3,Assists:5, Shots:6 }},
    {State:'THI',freq:{Goals: 67,Assists:29, Shots:14 }},
    {State:'Rating',freq:{Goals: 2,Assists:2, Shots:0 }}
];

var IsaiahB=[
    {State:'Apps',freq:{Goals: 0, Assists:59, Shots:37}},
    {State:'Mins',freq:{Goals: 0, Assists:52, Shots:33}},
    {State:'Total',freq:{Goals: 0,Assists:1953, Shots:606}},
    {State:'OB',freq:{Goals: 0,Assists:1510, Shots:714 }},
    {State:'6YD',freq:{Goals: 0,Assists:63, Shots:35 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:24, Shots:20 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:31, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:1, Shots:3 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var JürgenL=[
    {State:'Apps',freq:{Goals: 0, Assists:20, Shots:20}},
    {State:'Mins',freq:{Goals: 0, Assists:16, Shots:12}},
    {State:'Total',freq:{Goals: 0,Assists:559, Shots:171}},
    {State:'OB',freq:{Goals: 0,Assists:490, Shots:226 }},
    {State:'6YD',freq:{Goals: 0,Assists:12, Shots:6 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:41, Shots:38 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:8 }},
    {State:'FC',freq:{Goals: 0,Assists:47, Shots:29 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var JamieM=[
    {State:'Apps',freq:{Goals: 345, Assists:30, Shots:30}},
    {State:'Mins',freq:{Goals: 345, Assists:26, Shots:19}},
    {State:'Total',freq:{Goals: 345,Assists:812, Shots:228}},
    {State:'OB',freq:{Goals: 345,Assists:704, Shots:352 }},
    {State:'6YD',freq:{Goals: 345,Assists:23, Shots:8 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 345,Assists:30, Shots:44 }},
    {State:'THB',freq:{Goals: 345,Assists:5, Shots:9 }},
    {State:'FC',freq:{Goals: 345,Assists:35, Shots:28 }},
    {State:'THI',freq:{Goals: 345,Assists:2, Shots:0 }},
    {State:'Rating',freq:{Goals: 345,Assists:0, Shots:0 }}
];

var SamB=[
    {State:'Apps',freq:{Goals: 36, Assists:68, Shots:22}},
    {State:'Mins',freq:{Goals: 68, Assists:68, Shots:22}},
    {State:'Total',freq:{Goals: 7355,Assists:3359, Shots:566}},
    {State:'OB',freq:{Goals: 4197,Assists:2698, Shots:352 }},
    {State:'6YD',freq:{Goals: 148,Assists:134, Shots:30 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 28,Assists:21, Shots:19 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 50,Assists:25, Shots:17 }},
    {State:'THI',freq:{Goals: 8,Assists:8, Shots:0 }},
    {State:'Rating',freq:{Goals: 7,Assists:5, Shots:0 }}
];

var ShaneD=[
    {State:'Apps',freq:{Goals: 4, Assists:31, Shots:18}},
    {State:'Mins',freq:{Goals: 7, Assists:31, Shots:18}},
    {State:'Total',freq:{Goals: 906,Assists:1566, Shots:414}},
    {State:'OB',freq:{Goals: 460,Assists:1447, Shots:472 }},
    {State:'6YD',freq:{Goals: 19,Assists:53, Shots:23 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 2248,Assists:27, Shots:21 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:7 }},
    {State:'FC',freq:{Goals: 48,Assists:30, Shots:18 }},
    {State:'THI',freq:{Goals: 1,Assists:3, Shots:0 }},
    {State:'Rating',freq:{Goals: 1,Assists:0, Shots:0 }}
];

var LewisD=[
    {State:'Apps',freq:{Goals: 0, Assists:0, Shots:5}},
    {State:'Mins',freq:{Goals: 0, Assists:0, Shots:5}},
    {State:'Total',freq:{Goals: 0,Assists:0, Shots:110}},
    {State:'OB',freq:{Goals: 0,Assists:0, Shots:188 }},
    {State:'6YD',freq:{Goals: 0,Assists:0, Shots:5 }},
    {State:'Pty',freq:{Goals: 0,Assists:0, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:0, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:0, Shots:38 }},
    {State:'THB',freq:{Goals: 0,Assists:0, Shots:10 }},
    {State:'FC',freq:{Goals: 0,Assists:0, Shots:22 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var PascalG=[
    {State:'Apps',freq:{Goals: 0, Assists:24, Shots:10}},
    {State:'Mins',freq:{Goals: 0, Assists:24, Shots:10}},
    {State:'Total',freq:{Goals: 0,Assists:1162, Shots:210}},
    {State:'OB',freq:{Goals: 0,Assists:1056, Shots:212 }},
    {State:'6YD',freq:{Goals: 0,Assists:36, Shots:14 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:29, Shots:15 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:6 }},
    {State:'FC',freq:{Goals: 0,Assists:32, Shots:15 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var MarcA=[
    {State:'Apps',freq:{Goals: 31, Assists:38, Shots:7}},
    {State:'Mins',freq:{Goals: 58, Assists:37, Shots:7}},
    {State:'Total',freq:{Goals: 6557,Assists:1952, Shots:168}},
    {State:'OB',freq:{Goals: 3039,Assists:1527, Shots:269 }},
    {State:'6YD',freq:{Goals: 118,Assists:64, Shots:8 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 26,Assists:24, Shots:34 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:10 }},
    {State:'FC',freq:{Goals: 56,Assists:31, Shots:21 }},
    {State:'THI',freq:{Goals: 4,Assists:1, Shots:1 }},
    {State:'Rating',freq:{Goals: 5,Assists:3, Shots:0 }}
];

var ChrisW=[
    {State:'Apps',freq:{Goals: 68, Assists:13, Shots:1}},
    {State:'Mins',freq:{Goals: 130, Assists:13, Shots:1}},
    {State:'Total',freq:{Goals: 15952,Assists:720, Shots:6}},
    {State:'OB',freq:{Goals: 8410,Assists:592, Shots:15 }},
    {State:'6YD',freq:{Goals: 256,Assists:17, Shots:0 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 33,Assists:35, Shots:0 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:15 }},
    {State:'FC',freq:{Goals: 62,Assists:42, Shots:0 }},
    {State:'THI',freq:{Goals: 9,Assists:1, Shots:0 }},
    {State:'Rating',freq:{Goals: 10,Assists:0, Shots:0 }}
];

var StevenD=[
    {State:'Apps',freq:{Goals: 1, Assists:67, Shots:24}},
    {State:'Mins',freq:{Goals: 2, Assists:65, Shots:24}},
    {State:'Total',freq:{Goals: 166,Assists:3116, Shots:515}},
    {State:'OB',freq:{Goals: 98,Assists:2858, Shots:684 }},
    {State:'6YD',freq:{Goals: 6,Assists:95, Shots:36 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 16,Assists:30, Shots:19 }},
    {State:'THB',freq:{Goals: 4,Assists:6, Shots:8 }},
    {State:'FC',freq:{Goals: 28,Assists:33, Shots:14 }},
    {State:'THI',freq:{Goals: 1,Assists:4, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:1 }}
];

var CharlieT=[
    {State:'Apps',freq:{Goals: 6, Assists:14, Shots:25}},
    {State:'Mins',freq:{Goals: 9, Assists:14, Shots:23}},
    {State:'Total',freq:{Goals: 880,Assists:603, Shots:476}},
    {State:'OB',freq:{Goals: 460,Assists:523, Shots:592 }},
    {State:'6YD',freq:{Goals: 6,Assists:21, Shots:39 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 77,Assists:25, Shots:15 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 147,Assists:28, Shots:12 }},
    {State:'THI',freq:{Goals: 0,Assists:2, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var JackC=[
    {State:'Apps',freq:{Goals: 0, Assists:0, Shots:1}},
    {State:'Mins',freq:{Goals: 0, Assists:0, Shots:1}},
    {State:'Total',freq:{Goals: 0,Assists:0, Shots:21}},
    {State:'OB',freq:{Goals: 0,Assists:0, Shots:40 }},
    {State:'6YD',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Pty',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'CRS',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Corn',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'THB',freq:{Goals: 0,Assists:0, Shots:11 }},
    {State:'FC',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var ScottA=[
    {State:'Apps',freq:{Goals: 8, Assists:4, Shots:5}},
    {State:'Mins',freq:{Goals: 11, Assists:1, Shots:4}},
    {State:'Total',freq:{Goals: 846,Assists:12, Shots:66}},
    {State:'OB',freq:{Goals: 506,Assists:9, Shots:71 }},
    {State:'6YD',freq:{Goals: 8,Assists:0, Shots:2 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 63,Assists:0, Shots:36 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 106,Assists:0, Shots:33 }},
    {State:'THI',freq:{Goals: 8,Assists:8, Shots:0 }},
    {State:'Rating',freq:{Goals: 7,Assists:5, Shots:0 }}
];

var AaronL=[
    {State:'Apps',freq:{Goals: 36, Assists:179, Shots:54}},
    {State:'Mins',freq:{Goals: 51, Assists:179, Shots:53}},
    {State:'Total',freq:{Goals: 5990,Assists:8951, Shots:1139}},
    {State:'OB',freq:{Goals: 3239,Assists:7089, Shots:1527 }},
    {State:'6YD',freq:{Goals: 78,Assists:232, Shots:42 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 42,Assists:30, Shots:36 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:8 }},
    {State:'FC',freq:{Goals: 78,Assists:39, Shots:27 }},
    {State:'THI',freq:{Goals: 4,Assists:6, Shots:1 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var AshleyB=[
    {State:'Apps',freq:{Goals: 10, Assists:56, Shots:11}},
    {State:'Mins',freq:{Goals: 17, Assists:56, Shots:11}},
    {State:'Total',freq:{Goals: 1506,Assists:2342, Shots:220}},
    {State:'OB',freq:{Goals: 822,Assists:2294, Shots:275 }},
    {State:'6YD',freq:{Goals: 15,Assists:63, Shots:8 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 55,Assists:36, Shots:34 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:8 }},
    {State:'FC',freq:{Goals: 100,Assists:37, Shots:28 }},
    {State:'THI',freq:{Goals: 0,Assists:4, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var TomH=[
    {State:'Apps',freq:{Goals: 14, Assists:4, Shots:0}},
    {State:'Mins',freq:{Goals: 26, Assists:4, Shots:0}},
    {State:'Total',freq:{Goals: 3321,Assists:222, Shots:0}},
    {State:'OB',freq:{Goals: 1737,Assists:151, Shots:0 }},
    {State:'6YD',freq:{Goals: 52,Assists:5, Shots:300 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:0 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:0 }},
    {State:'Corn',freq:{Goals: 33,Assists:30, Shots:0 }},
    {State:'THB',freq:{Goals: 3,Assists:4, Shots:0 }},
    {State:'FC',freq:{Goals: 64,Assists:44, Shots:0 }},
    {State:'THI',freq:{Goals: 0,Assists:1, Shots:0 }},
    {State:'Rating',freq:{Goals: 37,Assists:0, Shots:0 }}
];

var SamV=[
    {State:'Apps',freq:{Goals: 4, Assists:29, Shots:15}},
    {State:'Mins',freq:{Goals: 8, Assists:28, Shots:13}},
    {State:'Total',freq:{Goals: 738,Assists:1269, Shots:269}},
    {State:'OB',freq:{Goals: 565,Assists:1203, Shots:308 }},
    {State:'6YD',freq:{Goals: 7,Assists:43, Shots:10 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 81,Assists:28, Shots:31 }},
    {State:'THB',freq:{Goals: 5,Assists:6, Shots:7 }},
    {State:'FC',freq:{Goals: 106,Assists:30, Shots:27 }},
    {State:'THI',freq:{Goals: 0,Assists:2, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var AshleyW=[
    {State:'Apps',freq:{Goals: 3, Assists:14, Shots:0}},
    {State:'Mins',freq:{Goals: 4, Assists:14, Shots:0}},
    {State:'Total',freq:{Goals: 456,Assists:737, Shots:0}},
    {State:'OB',freq:{Goals: 228,Assists:731, Shots:0 }},
    {State:'6YD',freq:{Goals: 2,Assists:20, Shots:0 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:0 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:0 }},
    {State:'Corn',freq:{Goals: 114,Assists:37, Shots:0 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:0 }},
    {State:'FC',freq:{Goals: 228,Assists:37, Shots:0 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var JeffH=[
    {State:'Apps',freq:{Goals: 108, Assists:121, Shots:56}},
    {State:'Mins',freq:{Goals: 198, Assists:121, Shots:55}},
    {State:'Total',freq:{Goals: 22177,Assists:6109, Shots:1173}},
    {State:'OB',freq:{Goals: 11122,Assists:5364, Shots:1491 }},
    {State:'6YD',freq:{Goals: 386,Assists:178, Shots:65 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 29,Assists:30, Shots:23 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 57,Assists:34, Shots:18 }},
    {State:'THI',freq:{Goals: 14,Assists:9, Shots:1 }},
    {State:'Rating',freq:{Goals: 15,Assists:1, Shots:0 }}
];

var GeorgesK=[
    {State:'Apps',freq:{Goals: 10, Assists:19, Shots:2}},
    {State:'Mins',freq:{Goals: 19, Assists:19, Shots:2}},
    {State:'Total',freq:{Goals: 1863,Assists:997, Shots:42}},
    {State:'OB',freq:{Goals: 1057,Assists:896, Shots:62 }},
    {State:'6YD',freq:{Goals: 26,Assists:21, Shots:5 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 41,Assists:43, Shots:13 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:9 }},
    {State:'FC',freq:{Goals: 72,Assists:47, Shots:8 }},
    {State:'THI',freq:{Goals: 0,Assists:1, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var NahkiW=[
    {State:'Apps',freq:{Goals: 36, Assists:69, Shots:21}},
    {State:'Mins',freq:{Goals: 66, Assists:67, Shots:21}},
    {State:'Total',freq:{Goals: 6412,Assists:3550, Shots:480}},
    {State:'OB',freq:{Goals: 3800,Assists:2996, Shots:583 }},
    {State:'6YD',freq:{Goals: 125,Assists:102, Shots:27 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 30,Assists:29, Shots:22 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 51,Assists:35, Shots:17 }},
    {State:'THI',freq:{Goals: 6,Assists:4, Shots:0 }},
    {State:'Rating',freq:{Goals: 5,Assists:2, Shots:0 }}
];


var DwightM=[
    {State:'Apps',freq:{Goals: 8, Assists:3, Shots:25}},
    {State:'Mins',freq:{Goals: 16, Assists:31, Shots:25}},
    {State:'Total',freq:{Goals: 1530,Assists:1532, Shots:534}},
    {State:'OB',freq:{Goals: 752,Assists:1521, Shots:766 }},
    {State:'6YD',freq:{Goals: 21,Assists:43, Shots:30 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 36,Assists:35, Shots:26 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:9 }},
    {State:'FC',freq:{Goals: 73,Assists:36, Shots:18 }},
    {State:'THI',freq:{Goals: 1,Assists:0, Shots:1 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var JonathanW=[
    {State:'Apps',freq:{Goals: 3, Assists:1, Shots:0}},
    {State:'Mins',freq:{Goals: 6, Assists:1, Shots:0}},
    {State:'Total',freq:{Goals: 404,Assists:42, Shots:0}},
    {State:'OB',freq:{Goals: 271,Assists:34, Shots:0 }},
    {State:'6YD',freq:{Goals: 14,Assists:1, Shots:0 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:0 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:0 }},
    {State:'Corn',freq:{Goals: 19,Assists:34, Shots:0 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:0 }},
    {State:'FC',freq:{Goals: 29,Assists:42, Shots:0 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 1,Assists:0, Shots:0 }}
];

var JamesT=[
    {State:'Apps',freq:{Goals: 128, Assists:194, Shots:19}},
    {State:'Mins',freq:{Goals: 240, Assists:191, Shots:19}},
    {State:'Total',freq:{Goals: 28042,Assists:9584, Shots:422}},
    {State:'OB',freq:{Goals: 13787,Assists:7861, Shots:552 }},
    {State:'6YD',freq:{Goals: 497,Assists:269, Shots:18 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 28,Assists:29, Shots:31 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:8 }},
    {State:'FC',freq:{Goals: 56,Assists:36, Shots:23 }},
    {State:'THI',freq:{Goals: 8,Assists:8, Shots:0 }},
    {State:'Rating',freq:{Goals: 7,Assists:5, Shots:0 }}
];

var KevinL=[
    {State:'Apps',freq:{Goals: 13, Assists:57, Shots:13}},
    {State:'Mins',freq:{Goals: 25, Assists:57, Shots:13}},
    {State:'Total',freq:{Goals: 287,Assists:2789, Shots:2659}},
    {State:'OB',freq:{Goals: 1536,Assists:2687, Shots:356 }},
    {State:'6YD',freq:{Goals: 41,Assists:88, Shots:16 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 37,Assists:31, Shots:22 }},
    {State:'THB',freq:{Goals: 4,Assists:6, Shots:7 }},
    {State:'FC',freq:{Goals: 65,Assists:32, Shots:18 }},
    {State:'THI',freq:{Goals: 1,Assists:3, Shots:0 }},
    {State:'Rating',freq:{Goals: 1,Assists:0, Shots:0 }}
];

var BenM=[
    {State:'Apps',freq:{Goals: 18, Assists:63, Shots:8}},
    {State:'Mins',freq:{Goals: 34, Assists:62, Shots:8}},
    {State:'Total',freq:{Goals: 2950,Assists:3024, Shots:162}},
    {State:'OB',freq:{Goals: 1530,Assists:2813, Shots:253 }},
    {State:'6YD',freq:{Goals: 50,Assists:89, Shots:7 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 31,Assists:32, Shots:36 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:9 }},
    {State:'FC',freq:{Goals: 59,Assists:34, Shots:23 }},
    {State:'THI',freq:{Goals: 1,Assists:8, Shots:0 }},
    {State:'Rating',freq:{Goals: 2,Assists:2, Shots:0 }}
];

var RobbieB=[
    {State:'Apps',freq:{Goals: 3, Assists:1, Shots:4}},
    {State:'Mins',freq:{Goals: 5, Assists:1, Shots:4}},
    {State:'Total',freq:{Goals: 526,Assists:48, Shots:84}},
    {State:'OB',freq:{Goals: 298,Assists:70, Shots:102 }},
    {State:'6YD',freq:{Goals: 7,Assists:2, Shots:4 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 43,Assists:35, Shots:25 }},
    {State:'THB',freq:{Goals: 4,Assists:9, Shots:7 }},
    {State:'FC',freq:{Goals: 75,Assists:24, Shots:21 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var JohannB=[
    {State:'Apps',freq:{Goals: 10, Assists:49, Shots:23}},
    {State:'Mins',freq:{Goals: 18, Assists:47, Shots:21}},
    {State:'Total',freq:{Goals: 2544,Assists:2452, Shots:414}},
    {State:'OB',freq:{Goals: 1629,Assists:2292, Shots:547 }},
    {State:'6YD',freq:{Goals: 38,Assists:70, Shots:16 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 43,Assists:33, Shots:34 }},
    {State:'THB',freq:{Goals: 4,Assists:6, Shots:8}},
    {State:'FC',freq:{Goals: 67,Assists:35, Shots:26 }},
    {State:'THI',freq:{Goals: 5,Assists:5, Shots:0 }},
    {State:'Rating',freq:{Goals: 1,Assists:1, Shots:0 }}
];

var DavidMiller=[
    {State:'Apps',freq:{Goals: 2, Assists:6, Shots:1}},
    {State:'Mins',freq:{Goals: 4, Assists:5, Shots:1}},
    {State:'Total',freq:{Goals: 348,Assists:286, Shots:24}},
    {State:'OB',freq:{Goals: 187,Assists:189, Shots:34 }},
    {State:'6YD',freq:{Goals: 9,Assists:10, Shots:1 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 21,Assists:19, Shots:34 }},
    {State:'THB',freq:{Goals: 3,Assists:4, Shots:9 }},
    {State:'FC',freq:{Goals: 39,Assists:29, Shots:24 }},
    {State:'THI',freq:{Goals: 2,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var JeanPaulDuminy=[
    {State:'Apps',freq:{Goals: 25, Assists:49, Shots:7}},
    {State:'Mins',freq:{Goals: 48, Assists:48, Shots:77}},
    {State:'Total',freq:{Goals: 4671,Assists:2465, Shots:142}},
    {State:'OB',freq:{Goals: 2655,Assists:2247, Shots:250 }},
    {State:'6YD',freq:{Goals: 86,Assists:91, Shots:8 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 31,Assists:25, Shots:31 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:11 }},
    {State:'FC',freq:{Goals: 54,Assists:27, Shots:18 }},
    {State:'THI',freq:{Goals: 4,Assists:6, Shots:0 }},
    {State:'Rating',freq:{Goals: 2,Assists:0, Shots:0 }}
];

var WayneParnell=[
    {State:'Apps',freq:{Goals: 17, Assists:120, Shots:26}},
    {State:'Mins',freq:{Goals: 29, Assists:120, Shots:26}},
    {State:'Total',freq:{Goals: 3447,Assists:5751, Shots:566}},
    {State:'OB',freq:{Goals: 1866,Assists:4981, Shots:729 }},
    {State:'6YD',freq:{Goals: 44,Assists:157, Shots:34 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 42,Assists:32, Shots:21 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:8 }},
    {State:'FC',freq:{Goals: 78,Assists:37, Shots:17 }},
    {State:'THI',freq:{Goals: 2,Assists:5, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:2, Shots:0 }}
];

var ChrisMorris=[
    {State:'Apps',freq:{Goals: 77, Assists:80, Shots:14}},
    {State:'Mins',freq:{Goals: 136, Assists:78, Shots:14}},
    {State:'Total',freq:{Goals: 14775,Assists:3733, Shots:278}},
    {State:'OB',freq:{Goals: 8051,Assists:3563, Shots:400 }},
    {State:'6YD',freq:{Goals: 218,Assists:115, Shots:8 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 37,Assists:31, Shots:50 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:9 }},
    {State:'FC',freq:{Goals: 68,Assists:32, Shots:35 }},
    {State:'THI',freq:{Goals: 8,Assists:6, Shots:0 }},
    {State:'Rating',freq:{Goals: 7,Assists:0, Shots:0 }}
];

var MangalisoMosehle=[
    {State:'Apps',freq:{Goals: 0, Assists:4, Shots:1}},
    {State:'Mins',freq:{Goals: 0, Assists:8, Shots:1}},
    {State:'Total',freq:{Goals: 0,Assists:627, Shots:24}},
    {State:'OB',freq:{Goals: 0,Assists:367, Shots:8 }},
    {State:'6YD',freq:{Goals: 0,Assists:11, Shots:1 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:33, Shots:8 }},
    {State:'THB',freq:{Goals: 0,Assists:4, Shots:2 }},
    {State:'FC',freq:{Goals: 0,Assists:57, Shots:24 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var StephenCook=[
    {State:'Apps',freq:{Goals: 0, Assists:20, Shots:24}},
    {State:'Mins',freq:{Goals: 0, Assists:20, Shots:24}},
    {State:'Total',freq:{Goals: 0,Assists:1037, Shots:535}},
    {State:'OB',freq:{Goals: 0,Assists:811, Shots:587 }},
    {State:'6YD',freq:{Goals: 0,Assists:39, Shots:33 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:27, Shots:16 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:25, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:3, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var TembaBavuma=[
    {State:'Apps',freq:{Goals: 18, Assists:70, Shots:17}},
    {State:'Mins',freq:{Goals: 31, Assists:69, Shots:17}},
    {State:'Total',freq:{Goals: 2718,Assists:3392, Shots:366}},
    {State:'OB',freq:{Goals: 1345,Assists:2769, Shots:408 }},
    {State:'6YD',freq:{Goals: 45,Assists:70, Shots:16 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 30,Assists:40, Shots:26 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 60,Assists:48, Shots:23 }},
    {State:'THI',freq:{Goals: 0,Assists:2, Shots:0 }},
    {State:'Rating',freq:{Goals: 4,Assists:0, Shots:0 }}
];


var RegisChakabva=[
    {State:'Apps',freq:{Goals: 4, Assists:29, Shots:14}},
    {State:'Mins',freq:{Goals: 8, Assists:28, Shots:14}},
    {State:'Total',freq:{Goals: 623,Assists:1302, Shots:306}},
    {State:'OB',freq:{Goals: 459,Assists:1206, Shots:405 }},
    {State:'6YD',freq:{Goals: 12,Assists:33, Shots:20 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 38,Assists:37, Shots:20 }},
    {State:'THB',freq:{Goals: 5,Assists:6, Shots:8 }},
    {State:'FC',freq:{Goals: 52,Assists:40, Shots:15 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var PeterMoor=[
    {State:'Apps',freq:{Goals: 3, Assists:0, Shots:0}},
    {State:'Mins',freq:{Goals: 6, Assists:0, Shots:0}},
    {State:'Total',freq:{Goals: 368,Assists:0, Shots:0}},
    {State:'OB',freq:{Goals: 250,Assists:0, Shots:0 }},
    {State:'6YD',freq:{Goals: 12,Assists:0, Shots:0 }},
    {State:'Pty',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'CRS',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Corn',freq:{Goals: 21,Assists:0, Shots:0 }},
    {State:'THB',freq:{Goals: 4,Assists:0, Shots:0 }},
    {State:'FC',freq:{Goals: 31,Assists:0, Shots:0 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var ChamuChibhabha=[
    {State:'Apps',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Mins',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Total',freq:{Goals: 0,Assists:1085, Shots:288}},
    {State:'OB',freq:{Goals: 0,Assists:829, Shots:369 }},
    {State:'6YD',freq:{Goals: 0,Assists:26, Shots:17 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:32, Shots:22 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:41, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var EltonChigumbura=[
    {State:'Apps',freq:{Goals: 2, Assists:4, Shots:0}},
    {State:'Mins',freq:{Goals: 2, Assists:4, Shots:0}},
    {State:'Total',freq:{Goals: 168,Assists:171, Shots:0}},
    {State:'OB',freq:{Goals: 103,Assists:186, Shots:0 }},
    {State:'6YD',freq:{Goals: 3,Assists:2, Shots:0 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:0 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:0 }},
    {State:'Corn',freq:{Goals: 34,Assists:93, Shots:0 }},
    {State:'THB',freq:{Goals: 3,Assists:7, Shots:0 }},
    {State:'FC',freq:{Goals: 56,Assists:86, Shots:0 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var TarisaiMusakanda=[
    {State:'Apps',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Mins',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Total',freq:{Goals: 0,Assists:1085, Shots:288}},
    {State:'OB',freq:{Goals: 0,Assists:829, Shots:369 }},
    {State:'6YD',freq:{Goals: 0,Assists:26, Shots:17 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:32, Shots:22 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:41, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var SikandarRaza=[
    {State:'Apps',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Mins',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Total',freq:{Goals: 0,Assists:1085, Shots:288}},
    {State:'OB',freq:{Goals: 0,Assists:829, Shots:369 }},
    {State:'6YD',freq:{Goals: 0,Assists:26, Shots:17 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:32, Shots:22 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:41, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var SeanWilliams=[
    {State:'Apps',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Mins',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Total',freq:{Goals: 0,Assists:1085, Shots:288}},
    {State:'OB',freq:{Goals: 0,Assists:829, Shots:369 }},
    {State:'6YD',freq:{Goals: 0,Assists:26, Shots:17 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:32, Shots:22 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:41, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var VusiSibanda=[
    {State:'Apps',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Mins',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Total',freq:{Goals: 0,Assists:1085, Shots:288}},
    {State:'OB',freq:{Goals: 0,Assists:829, Shots:369 }},
    {State:'6YD',freq:{Goals: 0,Assists:26, Shots:17 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:32, Shots:22 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:41, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var SolomonMire=[
    {State:'Apps',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Mins',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Total',freq:{Goals: 0,Assists:1085, Shots:288}},
    {State:'OB',freq:{Goals: 0,Assists:829, Shots:369 }},
    {State:'6YD',freq:{Goals: 0,Assists:26, Shots:17 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:32, Shots:22 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:41, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var HamiltonMasakadza=[
    {State:'Apps',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Mins',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Total',freq:{Goals: 0,Assists:1085, Shots:288}},
    {State:'OB',freq:{Goals: 0,Assists:829, Shots:369 }},
    {State:'6YD',freq:{Goals: 0,Assists:26, Shots:17 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:32, Shots:22 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:41, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var CraigErvine=[
    {State:'Apps',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Mins',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Total',freq:{Goals: 0,Assists:1085, Shots:288}},
    {State:'OB',freq:{Goals: 0,Assists:829, Shots:369 }},
    {State:'6YD',freq:{Goals: 0,Assists:26, Shots:17 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:32, Shots:22 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:41, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var ShimronHetmyer=[
    {State:'Apps',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Mins',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Total',freq:{Goals: 0,Assists:1085, Shots:288}},
    {State:'OB',freq:{Goals: 0,Assists:829, Shots:369 }},
    {State:'6YD',freq:{Goals: 0,Assists:26, Shots:17 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:32, Shots:22 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:41, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var ChadwickWalton=[
    {State:'Apps',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Mins',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Total',freq:{Goals: 0,Assists:1085, Shots:288}},
    {State:'OB',freq:{Goals: 0,Assists:829, Shots:369 }},
    {State:'6YD',freq:{Goals: 0,Assists:26, Shots:17 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:32, Shots:22 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:41, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var KieronPollard=[
    {State:'Apps',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Mins',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Total',freq:{Goals: 0,Assists:1085, Shots:288}},
    {State:'OB',freq:{Goals: 0,Assists:829, Shots:369 }},
    {State:'6YD',freq:{Goals: 0,Assists:26, Shots:17 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:32, Shots:22 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:41, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var LendlSimmons=[
    {State:'Apps',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Mins',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Total',freq:{Goals: 0,Assists:1085, Shots:288}},
    {State:'OB',freq:{Goals: 0,Assists:829, Shots:369 }},
    {State:'6YD',freq:{Goals: 0,Assists:26, Shots:17 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:32, Shots:22 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:41, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var ChrisGayle=[
    {State:'Apps',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Mins',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Total',freq:{Goals: 0,Assists:1085, Shots:288}},
    {State:'OB',freq:{Goals: 0,Assists:829, Shots:369 }},
    {State:'6YD',freq:{Goals: 0,Assists:26, Shots:17 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:32, Shots:22 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:41, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var KraiggBrathwaite=[
    {State:'Apps',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Mins',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Total',freq:{Goals: 0,Assists:1085, Shots:288}},
    {State:'OB',freq:{Goals: 0,Assists:829, Shots:369 }},
    {State:'6YD',freq:{Goals: 0,Assists:26, Shots:17 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:32, Shots:22 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:41, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var MarlonSamuels=[
    {State:'Apps',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Mins',freq:{Goals: 0, Assists:21, Shots:13}},
    {State:'Total',freq:{Goals: 0,Assists:1085, Shots:288}},
    {State:'OB',freq:{Goals: 0,Assists:829, Shots:369 }},
    {State:'6YD',freq:{Goals: 0,Assists:26, Shots:17 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:32, Shots:22 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:41, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var KieranPowell=[
    {State:'Apps',freq:{Goals: 20, Assists:40, Shots:16}},
    {State:'Mins',freq:{Goals: 35, Assists:39, Shots:16}},
    {State:'Total',freq:{Goals: 3710,Assists:2005, Shots:362}},
    {State:'OB',freq:{Goals: 2137,Assists:1710, Shots:498 }},
    {State:'6YD',freq:{Goals: 87,Assists:65, Shots:22 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 24,Assists:26, Shots:16 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:9 }},
    {State:'FC',freq:{Goals: 42,Assists:31, Shots:42 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var RostonChase=[
    {State:'Apps',freq:{Goals: 4, Assists:29, Shots:14}},
    {State:'Mins',freq:{Goals: 8, Assists:28, Shots:14}},
    {State:'Total',freq:{Goals: 623,Assists:1302, Shots:306}},
    {State:'OB',freq:{Goals: 459,Assists:1206, Shots:405 }},
    {State:'6YD',freq:{Goals: 12,Assists:33, Shots:20 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 38,Assists:37, Shots:20 }},
    {State:'THB',freq:{Goals: 5,Assists:6, Shots:8 }},
    {State:'FC',freq:{Goals: 52,Assists:40, Shots:15 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var CarlosBrathwaite=[
    {State:'Apps',freq:{Goals: 14, Assists:18, Shots:12}},
    {State:'Mins',freq:{Goals: 26, Assists:17, Shots:12}},
    {State:'Total',freq:{Goals: 2826,Assists:868, Shots:268}},
    {State:'OB',freq:{Goals: 1774,Assists:773, Shots:304 }},
    {State:'6YD',freq:{Goals: 38,Assists:19, Shots:21 }},
    {State:'Pty',freq:{Goals: 19,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 21,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 47,Assists:41, Shots:15 }},
    {State:'THB',freq:{Goals: 4,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 74,Assists:46, Shots:13 }},
    {State:'THI',freq:{Goals: 2,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var KusalPerera=[
    {State:'Apps',freq:{Goals: 25, Assists:49, Shots:7}},
    {State:'Mins',freq:{Goals: 48, Assists:48, Shots:77}},
    {State:'Total',freq:{Goals: 4671,Assists:2465, Shots:142}},
    {State:'OB',freq:{Goals: 2655,Assists:2247, Shots:250 }},
    {State:'6YD',freq:{Goals: 86,Assists:91, Shots:8 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 31,Assists:25, Shots:31 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:11 }},
    {State:'FC',freq:{Goals: 54,Assists:27, Shots:18 }},
    {State:'THI',freq:{Goals: 4,Assists:6, Shots:0 }},
    {State:'Rating',freq:{Goals: 2,Assists:0, Shots:0 }}
];

var LahiruThirimanne=[
    {State:'Apps',freq:{Goals: 17, Assists:120, Shots:26}},
    {State:'Mins',freq:{Goals: 29, Assists:120, Shots:26}},
    {State:'Total',freq:{Goals: 3447,Assists:5751, Shots:566}},
    {State:'OB',freq:{Goals: 1866,Assists:4981, Shots:729 }},
    {State:'6YD',freq:{Goals: 44,Assists:157, Shots:34 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 42,Assists:32, Shots:21 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:8 }},
    {State:'FC',freq:{Goals: 78,Assists:37, Shots:17 }},
    {State:'THI',freq:{Goals: 2,Assists:5, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:2, Shots:0 }}
];

var AngeloAppshews=[
    {State:'Apps',freq:{Goals: 77, Assists:80, Shots:14}},
    {State:'Mins',freq:{Goals: 136, Assists:78, Shots:14}},
    {State:'Total',freq:{Goals: 14775,Assists:3733, Shots:278}},
    {State:'OB',freq:{Goals: 8051,Assists:3563, Shots:400 }},
    {State:'6YD',freq:{Goals: 218,Assists:115, Shots:8 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 37,Assists:31, Shots:50 }},
    {State:'THB',freq:{Goals: 3,Assists:6, Shots:9 }},
    {State:'FC',freq:{Goals: 68,Assists:32, Shots:35 }},
    {State:'THI',freq:{Goals: 8,Assists:6, Shots:0 }},
    {State:'Rating',freq:{Goals: 7,Assists:0, Shots:0 }}
];

var DimuthKarunaratne=[
    {State:'Apps',freq:{Goals: 0, Assists:4, Shots:1}},
    {State:'Mins',freq:{Goals: 0, Assists:8, Shots:1}},
    {State:'Total',freq:{Goals: 0,Assists:627, Shots:24}},
    {State:'OB',freq:{Goals: 0,Assists:367, Shots:8 }},
    {State:'6YD',freq:{Goals: 0,Assists:11, Shots:1 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:33, Shots:8 }},
    {State:'THB',freq:{Goals: 0,Assists:4, Shots:2 }},
    {State:'FC',freq:{Goals: 0,Assists:57, Shots:24 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
];

var DanushkaGunathilaka=[
    {State:'Apps',freq:{Goals: 0, Assists:20, Shots:24}},
    {State:'Mins',freq:{Goals: 0, Assists:20, Shots:24}},
    {State:'Total',freq:{Goals: 0,Assists:1037, Shots:535}},
    {State:'OB',freq:{Goals: 0,Assists:811, Shots:587 }},
    {State:'6YD',freq:{Goals: 0,Assists:39, Shots:33 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:27, Shots:16 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:25, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:3, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var DineshChandimal=[
    {State:'Apps',freq:{Goals: 18, Assists:70, Shots:17}},
    {State:'Mins',freq:{Goals: 31, Assists:69, Shots:17}},
    {State:'Total',freq:{Goals: 2718,Assists:3392, Shots:366}},
    {State:'OB',freq:{Goals: 1345,Assists:2769, Shots:408 }},
    {State:'6YD',freq:{Goals: 45,Assists:70, Shots:16 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 30,Assists:40, Shots:26 }},
    {State:'THB',freq:{Goals: 3,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 60,Assists:48, Shots:23 }},
    {State:'THI',freq:{Goals: 0,Assists:2, Shots:0 }},
    {State:'Rating',freq:{Goals: 4,Assists:0, Shots:0 }}
];

var UpulTharanga=[
    {State:'Apps',freq:{Goals: 34, Assists:70, Shots:1}},
    {State:'Mins',freq:{Goals: 66, Assists:68, Shots:1}},
    {State:'Total',freq:{Goals: 5598,Assists:3259, Shots:18}},
    {State:'OB',freq:{Goals: 3378,Assists:3219, Shots:24 }},
    {State:'6YD',freq:{Goals: 94,Assists:98, Shots:1 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 36,Assists:33, Shots:24 }},
    {State:'THB',freq:{Goals: 4,Assists:6, Shots:8 }},
    {State:'FC',freq:{Goals: 60,Assists:33, Shots:18 }},
    {State:'THI',freq:{Goals: 4,Assists:3, Shots:0 }},
    {State:'Rating',freq:{Goals: 1,Assists:0, Shots:0 }}
];

var ChamaraKapugedera=[
    {State:'Apps',freq:{Goals: 0, Assists:6, Shots:6}},
    {State:'Mins',freq:{Goals: 0, Assists:6, Shots:6}},
    {State:'Total',freq:{Goals: 0,Assists:324, Shots:144}},
    {State:'OB',freq:{Goals: 0,Assists:229, Shots:174 }},
    {State:'6YD',freq:{Goals: 0,Assists:10, Shots:11 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:23, Shots:16 }},
    {State:'THB',freq:{Goals: 0,Assists:4, Shots:7 }},
    {State:'FC',freq:{Goals: 50,Assists:32, Shots:13 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:1 }}
];

var AselaGunaratne=[
    {State:'Apps',freq:{Goals: 22, Assists:36, Shots:10}},
    {State:'Mins',freq:{Goals: 40, Assists:34, Shots:10}},
    {State:'Total',freq:{Goals: 5103,Assists:1917, Shots:228}},
    {State:'OB',freq:{Goals: 2715,Assists:1511, Shots:240 }},
    {State:'6YD',freq:{Goals: 76,Assists:64, Shots:16 }},
    {State:'Pty',freq:{Goals: 345,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 345,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 28,Assists:21, Shots:19 }},
    {State:'THB',freq:{Goals: 36,Assists:24, Shots:15 }},
    {State:'FC',freq:{Goals: 3,Assists:5, Shots:6 }},
    {State:'THI',freq:{Goals: 67,Assists:29, Shots:14 }},
    {State:'Rating',freq:{Goals: 2,Assists:2, Shots:0 }}
];

var DhananjayadeSilva=[
    {State:'Apps',freq:{Goals: 0, Assists:59, Shots:37}},
    {State:'Mins',freq:{Goals: 0, Assists:52, Shots:33}},
    {State:'Total',freq:{Goals: 0,Assists:1953, Shots:606}},
    {State:'OB',freq:{Goals: 0,Assists:1510, Shots:714 }},
    {State:'6YD',freq:{Goals: 0,Assists:63, Shots:35 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:24, Shots:20 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:7 }},
    {State:'FC',freq:{Goals: 0,Assists:31, Shots:17 }},
    {State:'THI',freq:{Goals: 0,Assists:1, Shots:3 }},
    {State:'Rating',freq:{Goals: 0,Assists:1, Shots:0 }}
];

var NiroshanDickwella=[
    {State:'Apps',freq:{Goals: 0, Assists:20, Shots:20}},
    {State:'Mins',freq:{Goals: 0, Assists:16, Shots:12}},
    {State:'Total',freq:{Goals: 0,Assists:559, Shots:171}},
    {State:'OB',freq:{Goals: 0,Assists:490, Shots:226 }},
    {State:'6YD',freq:{Goals: 0,Assists:12, Shots:6 }},
    {State:'Pty',freq:{Goals: 0,Assists:1619, Shots:1152 }},
    {State:'CRS',freq:{Goals: 0,Assists:1819, Shots:1152 }},
    {State:'Corn',freq:{Goals: 0,Assists:41, Shots:38 }},
    {State:'THB',freq:{Goals: 0,Assists:5, Shots:8 }},
    {State:'FC',freq:{Goals: 0,Assists:47, Shots:29 }},
    {State:'THI',freq:{Goals: 0,Assists:0, Shots:0 }},
    {State:'Rating',freq:{Goals: 0,Assists:0, Shots:0 }}
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


