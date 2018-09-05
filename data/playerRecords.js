function getPlayerData(playerName) {
var aaron=[
    {State:'Mat',freq:{Test: 345, ODIs:30, T20Is:30}},
    {State:'Inns',freq:{Test: 345, ODIs:26, T20Is:19}},
    {State:'Balls',freq:{Test: 345,ODIs:812, T20Is:228}},
    {State:'Runs',freq:{Test: 345,ODIs:704, T20Is:352 }},
    {State:'Wkts',freq:{Test: 345,ODIs:23, T20Is:8 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 345,ODIs:30, T20Is:44 }},
    {State:'Econ',freq:{Test: 345,ODIs:5, T20Is:9 }},
    {State:'SR',freq:{Test: 345,ODIs:35, T20Is:28 }},
    {State:'4W',freq:{Test: 345,ODIs:2, T20Is:0 }},
    {State:'5w',freq:{Test: 345,ODIs:0, T20Is:0 }}
];

var Mitchell=[
    {State:'Mat',freq:{Test: 36, ODIs:68, T20Is:22}},
    {State:'Inns',freq:{Test: 68, ODIs:68, T20Is:22}},
    {State:'Balls',freq:{Test: 7355,ODIs:3359, T20Is:566}},
    {State:'Runs',freq:{Test: 4197,ODIs:2698, T20Is:352 }},
    {State:'Wkts',freq:{Test: 148,ODIs:134, T20Is:30 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 28,ODIs:21, T20Is:19 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 50,ODIs:25, T20Is:17 }},
    {State:'4W',freq:{Test: 8,ODIs:8, T20Is:0 }},
    {State:'5w',freq:{Test: 7,ODIs:5, T20Is:0 }}
];

var pat=[
    {State:'Mat',freq:{Test: 4, ODIs:31, T20Is:18}},
    {State:'Inns',freq:{Test: 7, ODIs:31, T20Is:18}},
    {State:'Balls',freq:{Test: 906,ODIs:1566, T20Is:414}},
    {State:'Runs',freq:{Test: 460,ODIs:1447, T20Is:472 }},
    {State:'Wkts',freq:{Test: 19,ODIs:53, T20Is:23 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 2248,ODIs:27, T20Is:21 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:7 }},
    {State:'SR',freq:{Test: 48,ODIs:30, T20Is:18 }},
    {State:'4W',freq:{Test: 1,ODIs:3, T20Is:0 }},
    {State:'5w',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var andrew=[
    {State:'Mat',freq:{Test: 0, ODIs:0, T20Is:5}},
    {State:'Inns',freq:{Test: 0, ODIs:0, T20Is:5}},
    {State:'Balls',freq:{Test: 0,ODIs:0, T20Is:110}},
    {State:'Runs',freq:{Test: 0,ODIs:0, T20Is:188 }},
    {State:'Wkts',freq:{Test: 0,ODIs:0, T20Is:5 }},
    {State:'BBi',freq:{Test: 0,ODIs:0, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:0, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:0, T20Is:38 }},
    {State:'Econ',freq:{Test: 0,ODIs:0, T20Is:10 }},
    {State:'SR',freq:{Test: 0,ODIs:0, T20Is:22 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var adam=[
    {State:'Mat',freq:{Test: 0, ODIs:24, T20Is:10}},
    {State:'Inns',freq:{Test: 0, ODIs:24, T20Is:10}},
    {State:'Balls',freq:{Test: 0,ODIs:1162, T20Is:210}},
    {State:'Runs',freq:{Test: 0,ODIs:1056, T20Is:212 }},
    {State:'Wkts',freq:{Test: 0,ODIs:36, T20Is:14 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:29, T20Is:15 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:6 }},
    {State:'SR',freq:{Test: 0,ODIs:32, T20Is:15 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var josh=[
    {State:'Mat',freq:{Test: 31, ODIs:38, T20Is:7}},
    {State:'Inns',freq:{Test: 58, ODIs:37, T20Is:7}},
    {State:'Balls',freq:{Test: 6557,ODIs:1952, T20Is:168}},
    {State:'Runs',freq:{Test: 3039,ODIs:1527, T20Is:269 }},
    {State:'Wkts',freq:{Test: 118,ODIs:64, T20Is:8 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 26,ODIs:24, T20Is:34 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:10 }},
    {State:'SR',freq:{Test: 56,ODIs:31, T20Is:21 }},
    {State:'4W',freq:{Test: 4,ODIs:1, T20Is:1 }},
    {State:'5w',freq:{Test: 5,ODIs:3, T20Is:0 }}
];

var nathan=[
    {State:'Mat',freq:{Test: 68, ODIs:13, T20Is:1}},
    {State:'Inns',freq:{Test: 130, ODIs:13, T20Is:1}},
    {State:'Balls',freq:{Test: 15952,ODIs:720, T20Is:6}},
    {State:'Runs',freq:{Test: 8410,ODIs:592, T20Is:15 }},
    {State:'Wkts',freq:{Test: 256,ODIs:17, T20Is:0 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 33,ODIs:35, T20Is:0 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:15 }},
    {State:'SR',freq:{Test: 62,ODIs:42, T20Is:0 }},
    {State:'4W',freq:{Test: 9,ODIs:1, T20Is:0 }},
    {State:'5w',freq:{Test: 10,ODIs:0, T20Is:0 }}
];

var james=[
    {State:'Mat',freq:{Test: 1, ODIs:67, T20Is:24}},
    {State:'Inns',freq:{Test: 2, ODIs:65, T20Is:24}},
    {State:'Balls',freq:{Test: 166,ODIs:3116, T20Is:515}},
    {State:'Runs',freq:{Test: 98,ODIs:2858, T20Is:684 }},
    {State:'Wkts',freq:{Test: 6,ODIs:95, T20Is:36 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 16,ODIs:30, T20Is:19 }},
    {State:'Econ',freq:{Test: 4,ODIs:6, T20Is:8 }},
    {State:'SR',freq:{Test: 28,ODIs:33, T20Is:14 }},
    {State:'4W',freq:{Test: 1,ODIs:4, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:1 }}
];

var alAmin=[
    {State:'Mat',freq:{Test: 6, ODIs:14, T20Is:25}},
    {State:'Inns',freq:{Test: 9, ODIs:14, T20Is:23}},
    {State:'Balls',freq:{Test: 880,ODIs:603, T20Is:476}},
    {State:'Runs',freq:{Test: 460,ODIs:523, T20Is:592 }},
    {State:'Wkts',freq:{Test: 6,ODIs:21, T20Is:39 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 77,ODIs:25, T20Is:15 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 147,ODIs:28, T20Is:12 }},
    {State:'4W',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var saqlain=[
    {State:'Mat',freq:{Test: 0, ODIs:0, T20Is:1}},
    {State:'Inns',freq:{Test: 0, ODIs:0, T20Is:1}},
    {State:'Balls',freq:{Test: 0,ODIs:0, T20Is:21}},
    {State:'Runs',freq:{Test: 0,ODIs:0, T20Is:40 }},
    {State:'Wkts',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'BBi',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'BBM',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Ave',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Econ',freq:{Test: 0,ODIs:0, T20Is:11 }},
    {State:'SR',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var shuvagata =[
    {State:'Mat',freq:{Test: 8, ODIs:4, T20Is:5}},
    {State:'Inns',freq:{Test: 11, ODIs:1, T20Is:4}},
    {State:'Balls',freq:{Test: 846,ODIs:12, T20Is:66}},
    {State:'Runs',freq:{Test: 506,ODIs:9, T20Is:71 }},
    {State:'Wkts',freq:{Test: 8,ODIs:0, T20Is:2 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 63,ODIs:0, T20Is:36 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 106,ODIs:0, T20Is:33 }},
    {State:'4W',freq:{Test: 8,ODIs:8, T20Is:0 }},
    {State:'5w',freq:{Test: 7,ODIs:5, T20Is:0 }}
];

var mashrafe=[
    {State:'Mat',freq:{Test: 36, ODIs:179, T20Is:54}},
    {State:'Inns',freq:{Test: 51, ODIs:179, T20Is:53}},
    {State:'Balls',freq:{Test: 5990,ODIs:8951, T20Is:1139}},
    {State:'Runs',freq:{Test: 3239,ODIs:7089, T20Is:1527 }},
    {State:'Wkts',freq:{Test: 78,ODIs:232, T20Is:42 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 42,ODIs:30, T20Is:36 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:8 }},
    {State:'SR',freq:{Test: 78,ODIs:39, T20Is:27 }},
    {State:'4W',freq:{Test: 4,ODIs:6, T20Is:1 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var shafiul=[
    {State:'Mat',freq:{Test: 10, ODIs:56, T20Is:11}},
    {State:'Inns',freq:{Test: 17, ODIs:56, T20Is:11}},
    {State:'Balls',freq:{Test: 1506,ODIs:2342, T20Is:220}},
    {State:'Runs',freq:{Test: 822,ODIs:2294, T20Is:275 }},
    {State:'Wkts',freq:{Test: 15,ODIs:63, T20Is:8 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 55,ODIs:36, T20Is:34 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:8 }},
    {State:'SR',freq:{Test: 100,ODIs:37, T20Is:28 }},
    {State:'4W',freq:{Test: 0,ODIs:4, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var taijul=[
    {State:'Mat',freq:{Test: 14, ODIs:4, T20Is:0}},
    {State:'Inns',freq:{Test: 26, ODIs:4, T20Is:0}},
    {State:'Balls',freq:{Test: 3321,ODIs:222, T20Is:0}},
    {State:'Runs',freq:{Test: 1737,ODIs:151, T20Is:0 }},
    {State:'Wkts',freq:{Test: 52,ODIs:5, T20Is:300 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:0 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:0 }},
    {State:'Ave',freq:{Test: 33,ODIs:30, T20Is:0 }},
    {State:'Econ',freq:{Test: 3,ODIs:4, T20Is:0 }},
    {State:'SR',freq:{Test: 64,ODIs:44, T20Is:0 }},
    {State:'4W',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'5w',freq:{Test: 37,ODIs:0, T20Is:0 }}
];

var taskin=[
    {State:'Mat',freq:{Test: 4, ODIs:29, T20Is:15}},
    {State:'Inns',freq:{Test: 8, ODIs:28, T20Is:13}},
    {State:'Balls',freq:{Test: 738,ODIs:1269, T20Is:269}},
    {State:'Runs',freq:{Test: 565,ODIs:1203, T20Is:308 }},
    {State:'Wkts',freq:{Test: 7,ODIs:43, T20Is:10 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 81,ODIs:28, T20Is:31 }},
    {State:'Econ',freq:{Test: 5,ODIs:6, T20Is:7 }},
    {State:'SR',freq:{Test: 106,ODIs:30, T20Is:27 }},
    {State:'4W',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var jake=[
    {State:'Mat',freq:{Test: 3, ODIs:14, T20Is:0}},
    {State:'Inns',freq:{Test: 4, ODIs:14, T20Is:0}},
    {State:'Balls',freq:{Test: 456,ODIs:737, T20Is:0}},
    {State:'Runs',freq:{Test: 228,ODIs:731, T20Is:0 }},
    {State:'Wkts',freq:{Test: 2,ODIs:20, T20Is:0 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:0 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:0 }},
    {State:'Ave',freq:{Test: 114,ODIs:37, T20Is:0 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:0 }},
    {State:'SR',freq:{Test: 228,ODIs:37, T20Is:0 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var stuart=[
    {State:'Mat',freq:{Test: 108, ODIs:121, T20Is:56}},
    {State:'Inns',freq:{Test: 198, ODIs:121, T20Is:55}},
    {State:'Balls',freq:{Test: 22177,ODIs:6109, T20Is:1173}},
    {State:'Runs',freq:{Test: 11122,ODIs:5364, T20Is:1491 }},
    {State:'Wkts',freq:{Test: 386,ODIs:178, T20Is:65 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 29,ODIs:30, T20Is:23 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 57,ODIs:34, T20Is:18 }},
    {State:'4W',freq:{Test: 14,ODIs:9, T20Is:1 }},
    {State:'5w',freq:{Test: 15,ODIs:1, T20Is:0 }}
];

var mark=[
    {State:'Mat',freq:{Test: 10, ODIs:19, T20Is:2}},
    {State:'Inns',freq:{Test: 19, ODIs:19, T20Is:2}},
    {State:'Balls',freq:{Test: 1863,ODIs:997, T20Is:42}},
    {State:'Runs',freq:{Test: 1057,ODIs:896, T20Is:62 }},
    {State:'Wkts',freq:{Test: 26,ODIs:21, T20Is:5 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 41,ODIs:43, T20Is:13 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:9 }},
    {State:'SR',freq:{Test: 72,ODIs:47, T20Is:8 }},
    {State:'4W',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var steven=[
    {State:'Mat',freq:{Test: 36, ODIs:69, T20Is:21}},
    {State:'Inns',freq:{Test: 66, ODIs:67, T20Is:21}},
    {State:'Balls',freq:{Test: 6412,ODIs:3550, T20Is:480}},
    {State:'Runs',freq:{Test: 3800,ODIs:2996, T20Is:583 }},
    {State:'Wkts',freq:{Test: 125,ODIs:102, T20Is:27 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 30,ODIs:29, T20Is:22 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 51,ODIs:35, T20Is:17 }},
    {State:'4W',freq:{Test: 6,ODIs:4, T20Is:0 }},
    {State:'5w',freq:{Test: 5,ODIs:2, T20Is:0 }}
];


var chris=[
    {State:'Mat',freq:{Test: 8, ODIs:3, T20Is:25}},
    {State:'Inns',freq:{Test: 16, ODIs:31, T20Is:25}},
    {State:'Balls',freq:{Test: 1530,ODIs:1532, T20Is:534}},
    {State:'Runs',freq:{Test: 752,ODIs:1521, T20Is:766 }},
    {State:'Wkts',freq:{Test: 21,ODIs:43, T20Is:30 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 36,ODIs:35, T20Is:26 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'SR',freq:{Test: 73,ODIs:36, T20Is:18 }},
    {State:'4W',freq:{Test: 1,ODIs:0, T20Is:1 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var toby=[
    {State:'Mat',freq:{Test: 3, ODIs:1, T20Is:0}},
    {State:'Inns',freq:{Test: 6, ODIs:1, T20Is:0}},
    {State:'Balls',freq:{Test: 404,ODIs:42, T20Is:0}},
    {State:'Runs',freq:{Test: 271,ODIs:34, T20Is:0 }},
    {State:'Wkts',freq:{Test: 14,ODIs:1, T20Is:0 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:0 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:0 }},
    {State:'Ave',freq:{Test: 19,ODIs:34, T20Is:0 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:0 }},
    {State:'SR',freq:{Test: 29,ODIs:42, T20Is:0 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var james=[
    {State:'Mat',freq:{Test: 128, ODIs:194, T20Is:19}},
    {State:'Inns',freq:{Test: 240, ODIs:191, T20Is:19}},
    {State:'Balls',freq:{Test: 28042,ODIs:9584, T20Is:422}},
    {State:'Runs',freq:{Test: 13787,ODIs:7861, T20Is:552 }},
    {State:'Wkts',freq:{Test: 497,ODIs:269, T20Is:18 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 28,ODIs:29, T20Is:31 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'SR',freq:{Test: 56,ODIs:36, T20Is:23 }},
    {State:'4W',freq:{Test: 8,ODIs:8, T20Is:0 }},
    {State:'5w',freq:{Test: 7,ODIs:5, T20Is:0 }}
];

var liam=[
    {State:'Mat',freq:{Test: 13, ODIs:57, T20Is:13}},
    {State:'Inns',freq:{Test: 25, ODIs:57, T20Is:13}},
    {State:'Balls',freq:{Test: 287,ODIs:2789, T20Is:2659}},
    {State:'Runs',freq:{Test: 1536,ODIs:2687, T20Is:356 }},
    {State:'Wkts',freq:{Test: 41,ODIs:88, T20Is:16 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 37,ODIs:31, T20Is:22 }},
    {State:'Econ',freq:{Test: 4,ODIs:6, T20Is:7 }},
    {State:'SR',freq:{Test: 65,ODIs:32, T20Is:18 }},
    {State:'4W',freq:{Test: 1,ODIs:3, T20Is:0 }},
    {State:'5w',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var cchris=[
    {State:'Mat',freq:{Test: 18, ODIs:63, T20Is:8}},
    {State:'Inns',freq:{Test: 34, ODIs:62, T20Is:8}},
    {State:'Balls',freq:{Test: 2950,ODIs:3024, T20Is:162}},
    {State:'Runs',freq:{Test: 1530,ODIs:2813, T20Is:253 }},
    {State:'Wkts',freq:{Test: 50,ODIs:89, T20Is:7 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 31,ODIs:32, T20Is:36 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'SR',freq:{Test: 59,ODIs:34, T20Is:23 }},
    {State:'4W',freq:{Test: 1,ODIs:8, T20Is:0 }},
    {State:'5w',freq:{Test: 2,ODIs:2, T20Is:0 }}
];

var lliam=[
    {State:'Mat',freq:{Test: 3, ODIs:1, T20Is:4}},
    {State:'Inns',freq:{Test: 5, ODIs:1, T20Is:4}},
    {State:'Balls',freq:{Test: 526,ODIs:48, T20Is:84}},
    {State:'Runs',freq:{Test: 298,ODIs:70, T20Is:102 }},
    {State:'Wkts',freq:{Test: 7,ODIs:2, T20Is:4 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 43,ODIs:35, T20Is:25 }},
    {State:'Econ',freq:{Test: 4,ODIs:9, T20Is:7 }},
    {State:'SR',freq:{Test: 75,ODIs:24, T20Is:21 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var adil=[
    {State:'Mat',freq:{Test: 10, ODIs:49, T20Is:23}},
    {State:'Inns',freq:{Test: 18, ODIs:47, T20Is:21}},
    {State:'Balls',freq:{Test: 2544,ODIs:2452, T20Is:414}},
    {State:'Runs',freq:{Test: 1629,ODIs:2292, T20Is:547 }},
    {State:'Wkts',freq:{Test: 38,ODIs:70, T20Is:16 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 43,ODIs:33, T20Is:34 }},
    {State:'Econ',freq:{Test: 4,ODIs:6, T20Is:8 }},
    {State:'SR',freq:{Test: 67,ODIs:35, T20Is:26 }},
    {State:'4W',freq:{Test: 5,ODIs:5, T20Is:0 }},
    {State:'5w',freq:{Test: 1,ODIs:1, T20Is:0 }}
];

var kuldeep=[
    {State:'Mat',freq:{Test: 4, ODIs:6, T20Is:1}},
    {State:'Inns',freq:{Test: 4, ODIs:5, T20Is:1}},
    {State:'Balls',freq:{Test: 800,ODIs:286, T20Is:24}},
    {State:'Runs',freq:{Test: 187,ODIs:189, T20Is:34 }},
    {State:'Wkts',freq:{Test: 9,ODIs:10, T20Is:1 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 21,ODIs:19, T20Is:34 }},
    {State:'Econ',freq:{Test: 3,ODIs:4, T20Is:9 }},
    {State:'SR',freq:{Test: 39,ODIs:29, T20Is:24 }},
    {State:'4W',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var mohammeds=[
    {State:'Mat',freq:{Test: 25, ODIs:49, T20Is:7}},
    {State:'Inns',freq:{Test: 48, ODIs:48, T20Is:77}},
    {State:'Balls',freq:{Test: 4671,ODIs:2465, T20Is:142}},
    {State:'Runs',freq:{Test: 2655,ODIs:2247, T20Is:250 }},
    {State:'Wkts',freq:{Test: 86,ODIs:91, T20Is:8 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 31,ODIs:25, T20Is:31 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:11 }},
    {State:'SR',freq:{Test: 54,ODIs:27, T20Is:18 }},
    {State:'4W',freq:{Test: 4,ODIs:6, T20Is:0 }},
    {State:'5w',freq:{Test: 2,ODIs:0, T20Is:0 }}
];

var ashish=[
    {State:'Mat',freq:{Test: 17, ODIs:120, T20Is:26}},
    {State:'Inns',freq:{Test: 29, ODIs:120, T20Is:26}},
    {State:'Balls',freq:{Test: 3447,ODIs:5751, T20Is:566}},
    {State:'Runs',freq:{Test: 1866,ODIs:4981, T20Is:729 }},
    {State:'Wkts',freq:{Test: 44,ODIs:157, T20Is:34 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 42,ODIs:32, T20Is:21 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'SR',freq:{Test: 78,ODIs:37, T20Is:17 }},
    {State:'4W',freq:{Test: 2,ODIs:5, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:2, T20Is:0 }}
];

var ishant=[
    {State:'Mat',freq:{Test: 77, ODIs:80, T20Is:14}},
    {State:'Inns',freq:{Test: 136, ODIs:78, T20Is:14}},
    {State:'Balls',freq:{Test: 14775,ODIs:3733, T20Is:278}},
    {State:'Runs',freq:{Test: 8051,ODIs:3563, T20Is:400 }},
    {State:'Wkts',freq:{Test: 218,ODIs:115, T20Is:8 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 37,ODIs:31, T20Is:50 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'SR',freq:{Test: 68,ODIs:32, T20Is:35 }},
    {State:'4W',freq:{Test: 8,ODIs:6, T20Is:0 }},
    {State:'5w',freq:{Test: 7,ODIs:0, T20Is:0 }}
];

var jayant=[
    {State:'Mat',freq:{Test: 0, ODIs:4, T20Is:1}},
    {State:'Inns',freq:{Test: 0, ODIs:8, T20Is:1}},
    {State:'Balls',freq:{Test: 0,ODIs:627, T20Is:24}},
    {State:'Runs',freq:{Test: 0,ODIs:367, T20Is:8 }},
    {State:'Wkts',freq:{Test: 0,ODIs:11, T20Is:1 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:33, T20Is:8 }},
    {State:'Econ',freq:{Test: 0,ODIs:4, T20Is:2 }},
    {State:'SR',freq:{Test: 0,ODIs:57, T20Is:24 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var jasprit=[
    {State:'Mat',freq:{Test: 0, ODIs:20, T20Is:24}},
    {State:'Inns',freq:{Test: 0, ODIs:20, T20Is:24}},
    {State:'Balls',freq:{Test: 0,ODIs:1037, T20Is:535}},
    {State:'Runs',freq:{Test: 0,ODIs:811, T20Is:587 }},
    {State:'Wkts',freq:{Test: 0,ODIs:39, T20Is:33 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:27, T20Is:16 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:25, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:3, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var bhuvneshwar=[
    {State:'Mat',freq:{Test: 18, ODIs:70, T20Is:17}},
    {State:'Inns',freq:{Test: 31, ODIs:69, T20Is:17}},
    {State:'Balls',freq:{Test: 2718,ODIs:3392, T20Is:366}},
    {State:'Runs',freq:{Test: 1345,ODIs:2769, T20Is:408 }},
    {State:'Wkts',freq:{Test: 45,ODIs:70, T20Is:16 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 30,ODIs:40, T20Is:26 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 60,ODIs:48, T20Is:23 }},
    {State:'4W',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'5w',freq:{Test: 4,ODIs:0, T20Is:0 }}
];

var umesh=[
    {State:'Mat',freq:{Test: 34, ODIs:70, T20Is:1}},
    {State:'Inns',freq:{Test: 66, ODIs:68, T20Is:1}},
    {State:'Balls',freq:{Test: 5598,ODIs:3259, T20Is:18}},
    {State:'Runs',freq:{Test: 3378,ODIs:3219, T20Is:24 }},
    {State:'Wkts',freq:{Test: 94,ODIs:98, T20Is:1 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 36,ODIs:33, T20Is:24 }},
    {State:'Econ',freq:{Test: 4,ODIs:6, T20Is:8 }},
    {State:'SR',freq:{Test: 60,ODIs:33, T20Is:18 }},
    {State:'4W',freq:{Test: 4,ODIs:3, T20Is:0 }},
    {State:'5w',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var yuzvendra=[
    {State:'Mat',freq:{Test: 0, ODIs:6, T20Is:6}},
    {State:'Inns',freq:{Test: 0, ODIs:6, T20Is:6}},
    {State:'Balls',freq:{Test: 0,ODIs:324, T20Is:144}},
    {State:'Runs',freq:{Test: 0,ODIs:229, T20Is:174 }},
    {State:'Wkts',freq:{Test: 0,ODIs:10, T20Is:11 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:23, T20Is:16 }},
    {State:'Econ',freq:{Test: 0,ODIs:4, T20Is:7 }},
    {State:'SR',freq:{Test: 50,ODIs:32, T20Is:13 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:1 }}
];

var amitm=[
    {State:'Mat',freq:{Test: 22, ODIs:36, T20Is:10}},
    {State:'Inns',freq:{Test: 40, ODIs:34, T20Is:10}},
    {State:'Balls',freq:{Test: 5103,ODIs:1917, T20Is:228}},
    {State:'Runs',freq:{Test: 2715,ODIs:1511, T20Is:240 }},
    {State:'Wkts',freq:{Test: 76,ODIs:64, T20Is:16 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 28,ODIs:21, T20Is:19 }},
    {State:'Econ',freq:{Test: 36,ODIs:24, T20Is:15 }},
    {State:'SR',freq:{Test: 3,ODIs:5, T20Is:6 }},
    {State:'4W',freq:{Test: 67,ODIs:29, T20Is:14 }},
    {State:'5w',freq:{Test: 2,ODIs:2, T20Is:0 }}
];

var alexc=[
    {State:'Mat',freq:{Test: 0, ODIs:59, T20Is:37}},
    {State:'Inns',freq:{Test: 0, ODIs:52, T20Is:33}},
    {State:'Balls',freq:{Test: 0,ODIs:1953, T20Is:606}},
    {State:'Runs',freq:{Test: 0,ODIs:1510, T20Is:714 }},
    {State:'Wkts',freq:{Test: 0,ODIs:63, T20Is:35 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:24, T20Is:20 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:31, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:1, T20Is:3 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var stuart=[
    {State:'Mat',freq:{Test: 0, ODIs:20, T20Is:20}},
    {State:'Inns',freq:{Test: 0, ODIs:16, T20Is:12}},
    {State:'Balls',freq:{Test: 0,ODIs:559, T20Is:171}},
    {State:'Runs',freq:{Test: 0,ODIs:490, T20Is:226 }},
    {State:'Wkts',freq:{Test: 0,ODIs:12, T20Is:6 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:41, T20Is:38 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:8 }},
    {State:'SR',freq:{Test: 0,ODIs:47, T20Is:29 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var barry=[
    {State:'Mat',freq:{Test: 0, ODIs:13, T20Is:2}},
    {State:'Inns',freq:{Test: 0, ODIs:13, T20Is:2}},
    {State:'Balls',freq:{Test: 0,ODIs:638, T20Is:48}},
    {State:'Runs',freq:{Test: 0,ODIs:687, T20Is:102 }},
    {State:'Wkts',freq:{Test: 0,ODIs:25, T20Is:4 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:28, T20Is:26 }},
    {State:'Econ',freq:{Test: 0,ODIs:6, T20Is:13 }},
    {State:'SR',freq:{Test: 0,ODIs:26, T20Is:12 }},
    {State:'4W',freq:{Test: 0,ODIs:2, T20Is:1 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var timm=[
    {State:'Mat',freq:{Test: 0, ODIs:33, T20Is:14}},
    {State:'Inns',freq:{Test: 0, ODIs:32, T20Is:14}},
    {State:'Balls',freq:{Test: 0,ODIs:1650, T20Is:268}},
    {State:'Runs',freq:{Test: 0,ODIs:1313, T20Is:324 }},
    {State:'Wkts',freq:{Test: 0,ODIs:34, T20Is:13 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:39, T20Is:25 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:49, T20Is:21 }},
    {State:'4W',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var george=[
    {State:'Mat',freq:{Test: 0, ODIs:68, T20Is:46}},
    {State:'Inns',freq:{Test: 0, ODIs:66, T20Is:42}},
    {State:'Balls',freq:{Test: 0,ODIs:3284, T20Is:856}},
    {State:'Runs',freq:{Test: 0,ODIs:2507, T20Is:927 }},
    {State:'Wkts',freq:{Test: 0,ODIs:71, T20Is:52 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:5, T20Is:6 }},
    {State:'Econ',freq:{Test: 0,ODIs:46, T20Is:16 }},
    {State:'SR',freq:{Test: 0,ODIs:5, T20Is:6 }},
    {State:'4W',freq:{Test: 0,ODIs:3, T20Is:1 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var boyd=[
    {State:'Mat',freq:{Test: 1, ODIs:46, T20Is:26}},
    {State:'Inns',freq:{Test: 2, ODIs:44, T20Is:25}},
    {State:'Balls',freq:{Test: 125,ODIs:2139, T20Is:522}},
    {State:'Runs',freq:{Test: 81,ODIs:1763, T20Is:537 }},
    {State:'Wkts',freq:{Test: 1,ODIs:56, T20Is:28 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 81,ODIs:31, T20Is:19 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:6 }},
    {State:'SR',freq:{Test: 125,ODIs:38, T20Is:19 }},
    {State:'4W',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var maxs=[
    {State:'Mat',freq:{Test: 0, ODIs:13, T20Is:26}},
    {State:'Inns',freq:{Test: 0, ODIs:12, T20Is:22}},
    {State:'Balls',freq:{Test: 0,ODIs:543, T20Is:390}},
    {State:'Runs',freq:{Test: 0,ODIs:520, T20Is:471 }},
    {State:'Wkts',freq:{Test: 0,ODIs:16, T20Is:26 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:32, T20Is:19 }},
    {State:'Econ',freq:{Test: 0,ODIs:6, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:34, T20Is:15 }},
    {State:'4W',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var craig=[
    {State:'Mat',freq:{Test: 0, ODIs:13, T20Is:26}},
    {State:'Inns',freq:{Test: 0, ODIs:12, T20Is:22}},
    {State:'Balls',freq:{Test: 0,ODIs:543, T20Is:390}},
    {State:'Runs',freq:{Test: 0,ODIs:520, T20Is:471 }},
    {State:'Wkts',freq:{Test: 0,ODIs:16, T20Is:26 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:33, T20Is:18 }},
    {State:'Econ',freq:{Test: 0,ODIs:6, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:34, T20Is:15 }},
    {State:'4W',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var peterc=[
    {State:'Mat',freq:{Test: 0, ODIs:18, T20Is:0}},
    {State:'Inns',freq:{Test: 0, ODIs:17, T20Is:0}},
    {State:'Balls',freq:{Test: 0,ODIs:878, T20Is:0}},
    {State:'Runs',freq:{Test: 0,ODIs:1020, T20Is:0 }},
    {State:'Wkts',freq:{Test: 0,ODIs:25, T20Is:0 }},
    {State:'BBi',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'BBM',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Ave',freq:{Test: 0,ODIs:41, T20Is:0 }},
    {State:'Econ',freq:{Test: 0,ODIs:7, T20Is:0 }},
    {State:'SR',freq:{Test: 0,ODIs:35, T20Is:0 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var andym=[
    {State:'Mat',freq:{Test: 0, ODIs:22, T20Is:19}},
    {State:'Inns',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Balls',freq:{Test: 0,ODIs:1044, T20Is:174}},
    {State:'Runs',freq:{Test: 0,ODIs:835, T20Is:216 }},
    {State:'Wkts',freq:{Test: 0,ODIs:22, T20Is:13 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:38, T20Is:17 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:47, T20Is:13 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var jacob=[
    {State:'Mat',freq:{Test: 0, ODIs:4, T20Is:8}},
    {State:'Inns',freq:{Test: 0, ODIs:4, T20Is:8}},
    {State:'Balls',freq:{Test: 0,ODIs:186, T20Is:174}},
    {State:'Runs',freq:{Test: 0,ODIs:155, T20Is:192 }},
    {State:'Wkts',freq:{Test: 0,ODIs:5, T20Is:12 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:31, T20Is:16 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:5, T20Is:15 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:1 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var mattH=[
    {State:'Mat',freq:{Test: 8, ODIs:16, T20Is:6}},
    {State:'Inns',freq:{Test: 16, ODIs:30, T20Is:6}},
    {State:'Balls',freq:{Test: 1945,ODIs:1643, T20Is:132}},
    {State:'Runs',freq:{Test: 1067,ODIs:1541, T20Is:191 }},
    {State:'Wkts',freq:{Test: 22,ODIs:61, T20Is:7 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 49,ODIs:26, T20Is:27 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'SR',freq:{Test: 88,ODIs:27, T20Is:19 }},
    {State:'4W',freq:{Test: 2,ODIs:4, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:2, T20Is:0 }}
];

var adamM=[
    {State:'Mat',freq:{Test: 0, ODIs:37, T20Is:18}},
    {State:'Inns',freq:{Test: 0, ODIs:36, T20Is:18}},
    {State:'Balls',freq:{Test: 0,ODIs:1639, T20Is:373}},
    {State:'Runs',freq:{Test: 0,ODIs:1434, T20Is:458 }},
    {State:'Wkts',freq:{Test: 0,ODIs:38, T20Is:21 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:37, T20Is:21 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:43, T20Is:18 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:1 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var benW=[
    {State:'Mat',freq:{Test: 0, ODIs:6, T20Is:4}},
    {State:'Inns',freq:{Test: 0, ODIs:6, T20Is:4}},
    {State:'Balls',freq:{Test: 0,ODIs:309, T20Is:85}},
    {State:'Runs',freq:{Test: 0,ODIs:315, T20Is:116 }},
    {State:'Wkts',freq:{Test: 0,ODIs:8, T20Is:5 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:40, T20Is:23 }},
    {State:'Econ',freq:{Test: 0,ODIs:6, T20Is:8 }},
    {State:'SR',freq:{Test: 0,ODIs:39, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var hamishB=[
    {State:'Mat',freq:{Test: 1, ODIs:16, T20Is:0}},
    {State:'Inns',freq:{Test: 1, ODIs:15, T20Is:0}},
    {State:'Balls',freq:{Test: 90,ODIs:718, T20Is:0}},
    {State:'Runs',freq:{Test: 47,ODIs:621, T20Is:0 }},
    {State:'Wkts',freq:{Test: 0,ODIs:27, T20Is:0 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:0 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:0 }},
    {State:'Ave',freq:{Test: 0,ODIs:23, T20Is:0 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:0 }},
    {State:'SR',freq:{Test: 0,ODIs:27, T20Is:0 }},
    {State:'4W',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var ishS=[
    {State:'Mat',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Inns',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Balls',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'Runs',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'Wkts',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'BBi',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'4W',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var neilW=[
    {State:'Mat',freq:{Test: 32, ODIs:0, T20Is:0}},
    {State:'Inns',freq:{Test: 61, ODIs:0, T20Is:0}},
    {State:'Balls',freq:{Test: 7045,ODIs:0, T20Is:0}},
    {State:'Runs',freq:{Test: 3758,ODIs:0, T20Is:0 }},
    {State:'Wkts',freq:{Test: 130,ODIs:0, T20Is:0 }},
    {State:'BBi',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'BBM',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Ave',freq:{Test: 29,ODIs:0, T20Is:0 }},
    {State:'Econ',freq:{Test: 3,ODIs:0, T20Is:0 }},
    {State:'SR',freq:{Test: 54,ODIs:0, T20Is:0 }},
    {State:'4W',freq:{Test: 5,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 4,ODIs:0, T20Is:0 }}
];

var trentB=[
    {State:'Mat',freq:{Test: 50, ODIs:51, T20Is:14}},
    {State:'Inns',freq:{Test: 94, ODIs:51, T20Is:14}},
    {State:'Balls',freq:{Test:11041,ODIs:2748, T20Is:312}},
    {State:'Runs',freq:{Test: 5464,ODIs:2294, T20Is:410 }},
    {State:'Wkts',freq:{Test: 190,ODIs:90, T20Is:20 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 29,ODIs:25, T20Is:20 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'SR',freq:{Test: 58,ODIs:31, T20Is:16 }},
    {State:'4W',freq:{Test: 9,ODIs:4, T20Is:0 }},
    {State:'5w',freq:{Test: 5,ODIs:2, T20Is:0 }}
];

var timS=[
    {State:'Mat',freq:{Test: 57, ODIs:119, T20Is:39}},
    {State:'Inns',freq:{Test: 105, ODIs:117, T20Is:38}},
    {State:'Balls',freq:{Test: 12620,ODIs:5942, T20Is:846}},
    {State:'Runs',freq:{Test: 6438,ODIs:5316, T20Is:1229 }},
    {State:'Wkts',freq:{Test: 204,ODIs:160, T20Is:46 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 31,ODIs:33, T20Is:27 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:9 }},
    {State:'SR',freq:{Test: 62,ODIs:37, T20Is:18 }},
    {State:'4W',freq:{Test: 11,ODIs:4, T20Is:0 }},
    {State:'5w',freq:{Test: 6,ODIs:2, T20Is:1 }}
];

var junaidK=[
    {State:'Mat',freq:{Test: 22, ODIs:62, T20Is:9}},
    {State:'Inns',freq:{Test: 41, ODIs:62, T20Is:9}},
    {State:'Balls',freq:{Test: 4605,ODIs:2965, T20Is:162}},
    {State:'Runs',freq:{Test: 2253,ODIs:2644, T20Is:236 }},
    {State:'Wkts',freq:{Test: 71,ODIs:94, T20Is:8 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 31,ODIs:28, T20Is:30 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:9 }},
    {State:'SR',freq:{Test: 64,ODIs:32, T20Is:20 }},
    {State:'4W',freq:{Test: 1,ODIs:3, T20Is:0 }},
    {State:'5w',freq:{Test: 5,ODIs:0, T20Is:0 }}
];

var sohailK=[
    {State:'Mat',freq:{Test: 9, ODIs:13, T20Is:3}},
    {State:'Inns',freq:{Test: 17, ODIs:13, T20Is:3}},
    {State:'Balls',freq:{Test: 1828,ODIs:666, T20Is:42}},
    {State:'Runs',freq:{Test: 1125,ODIs:597, T20Is:51 }},
    {State:'Wkts',freq:{Test: 27,ODIs:19, T20Is:2 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 41,ODIs:31, T20Is:26 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 68,ODIs:35, T20Is:21 }},
    {State:'4W',freq:{Test: 1,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 2,ODIs:1, T20Is:0 }}
];

var wahabR=[
    {State:'Mat',freq:{Test: 25, ODIs:79, T20Is:27}},
    {State:'Inns',freq:{Test: 45, ODIs:78, T20Is:27}},
    {State:'Balls',freq:{Test: 4646,ODIs:3695, T20Is:543}},
    {State:'Runs',freq:{Test: 2680,ODIs:3503, T20Is:723 }},
    {State:'Wkts',freq:{Test: 78,ODIs:102, T20Is:28 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 34,ODIs:34, T20Is:26 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'SR',freq:{Test: 60,ODIs:37, T20Is:19 }},
    {State:'4W',freq:{Test: 2,ODIs:4, T20Is:0 }},
    {State:'5w',freq:{Test: 2,ODIs:1, T20Is:0 }}
];

var mohammadA=[
    {State:'Mat',freq:{Test: 28, ODIs:36, T20Is:31}},
    {State:'Inns',freq:{Test: 53, ODIs:36, T20Is:31}},
    {State:'Balls',freq:{Test: 6067,ODIs:1867, T20Is:690}},
    {State:'Runs',freq:{Test: 2959,ODIs:1508, T20Is:809 }},
    {State:'Wkts',freq:{Test: 94,ODIs:55, T20Is:34 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 31,ODIs:27, T20Is:24 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 65,ODIs:34, T20Is:20 }},
    {State:'4W',freq:{Test: 3,ODIs:1, T20Is:0 }},
    {State:'5w',freq:{Test: 4,ODIs:0, T20Is:0 }}
];

var sohailT=[
    {State:'Mat',freq:{Test: 2, ODIs:62, T20Is:57}},
    {State:'Inns',freq:{Test: 4, ODIs:60, T20Is:57}},
    {State:'Balls',freq:{Test: 504,ODIs:2949, T20Is:1214}},
    {State:'Runs',freq:{Test: 316,ODIs:2566, T20Is:1454 }},
    {State:'Wkts',freq:{Test: 5,ODIs:71, T20Is:54 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 63,ODIs:36, T20Is:27 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:8 }},
    {State:'SR',freq:{Test: 101,ODIs:42, T20Is:22 }},
    {State:'4W',freq:{Test: 0,ODIs:3, T20Is:0 }},
    {State:'5w',freq:{Test: 6,ODIs:1, T20Is:0 }}
];

var yasirS=[
    {State:'Mat',freq:{Test: 26, ODIs:17, T20Is:2}},
    {State:'Inns',freq:{Test: 50, ODIs:16, T20Is:2}},
    {State:'Balls',freq:{Test: 8366,ODIs:849, T20Is:24}},
    {State:'Runs',freq:{Test: 4457,ODIs:766, T20Is:39 }},
    {State:'Wkts',freq:{Test: 149,ODIs:18, T20Is:0 }},
    {State:'BBi',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'BBM',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Ave',freq:{Test: 30,ODIs:43, T20Is:0 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:10 }},
    {State:'SR',freq:{Test: 56,ODIs:47, T20Is:0 }},
    {State:'4W',freq:{Test: 8,ODIs:1, T20Is:0 }},
    {State:'5w',freq:{Test: 11,ODIs:1, T20Is:0 }}
];

var imranK=[
    {State:'Mat',freq:{Test: 9, ODIs:0, T20Is:0}},
    {State:'Inns',freq:{Test: 17, ODIs:0, T20Is:0}},
    {State:'Balls',freq:{Test: 1492,ODIs:0, T20Is:0}},
    {State:'Runs',freq:{Test: 844,ODIs:0, T20Is:0 }},
    {State:'Wkts',freq:{Test: 28,ODIs:0, T20Is:0 }},
    {State:'BBi',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'BBM',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Ave',freq:{Test: 30,ODIs:0, T20Is:0 }},
    {State:'Econ',freq:{Test: 3,ODIs:0, T20Is:0 }},
    {State:'SR',freq:{Test: 53,ODIs:0, T20Is:0 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var rummanR=[
    {State:'Mat',freq:{Test: 0, ODIs:1, T20Is:2}},
    {State:'Inns',freq:{Test: 0, ODIs:1, T20Is:2}},
    {State:'Balls',freq:{Test: 0,ODIs:54, T20Is:42}},
    {State:'Runs',freq:{Test: 0,ODIs:44, T20Is:35 }},
    {State:'Wkts',freq:{Test: 0,ODIs:2, T20Is:1 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:22, T20Is:35 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:5 }},
    {State:'SR',freq:{Test: 0,ODIs:27, T20Is:42 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var kyleA=[
    {State:'Mat',freq:{Test: 11, ODIs:28, T20Is:21}},
    {State:'Inns',freq:{Test: 21, ODIs:27, T20Is:21}},
    {State:'Balls',freq:{Test: 2081,ODIs:1303, T20Is:436}},
    {State:'Runs',freq:{Test: 886,ODIs:1051, T20Is:579 }},
    {State:'Wkts',freq:{Test: 39,ODIs:34, T20Is:26 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 23,ODIs:31, T20Is:22 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'SR',freq:{Test: 53,ODIs:38, T20Is:16 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var imranT=[
    {State:'Mat',freq:{Test: 20, ODIs:78, T20Is:33}},
    {State:'Inns',freq:{Test: 37, ODIs:76, T20Is:33}},
    {State:'Balls',freq:{Test: 3925,ODIs:4057, T20Is:737}},
    {State:'Runs',freq:{Test: 2294,ODIs:3152, T20Is:815 }},
    {State:'Wkts',freq:{Test: 57,ODIs:132, T20Is:55 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 40,ODIs:24, T20Is:15 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 69,ODIs:30, T20Is:13 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var andileP=[
    {State:'Mat',freq:{Test: 0, ODIs:17, T20Is:7}},
    {State:'Inns',freq:{Test: 0, ODIs:17, T20Is:7}},
    {State:'Balls',freq:{Test: 0,ODIs:694, T20Is:123}},
    {State:'Runs',freq:{Test: 0,ODIs:679, T20Is:185 }},
    {State:'Wkts',freq:{Test: 0,ODIs:18, T20Is:7 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:37, T20Is:26 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:9 }},
    {State:'SR',freq:{Test: 0,ODIs:38, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var wayneP=[
    {State:'Mat',freq:{Test: 5, ODIs:65, T20Is:40}},
    {State:'Inns',freq:{Test: 8, ODIs:61, T20Is:39}},
    {State:'Balls',freq:{Test: 484,ODIs:2911, T20Is:749}},
    {State:'Runs',freq:{Test: 347,ODIs:2738, T20Is:1038 }},
    {State:'Wkts',freq:{Test: 13,ODIs:94, T20Is:41 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 27,ODIs:29, T20Is:25 }},
    {State:'Econ',freq:{Test: 5,ODIs:6, T20Is:8 }},
    {State:'SR',freq:{Test: 37,ODIs:31, T20Is:18 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var kagisoR=[
    {State:'Mat',freq:{Test: 20, ODIs:40, T20Is:16}},
    {State:'Inns',freq:{Test: 35, ODIs:39, T20Is:16}},
    {State:'Balls',freq:{Test: 3710,ODIs:2005, T20Is:362}},
    {State:'Runs',freq:{Test: 2137,ODIs:1710, T20Is:498 }},
    {State:'Wkts',freq:{Test: 87,ODIs:65, T20Is:22 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 24,ODIs:26, T20Is:16 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:9 }},
    {State:'SR',freq:{Test: 42,ODIs:31, T20Is:42 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var daneP=[
    {State:'Mat',freq:{Test: 0, ODIs:1, T20Is:4}},
    {State:'Inns',freq:{Test: 0, ODIs:1, T20Is:4}},
    {State:'Balls',freq:{Test: 0,ODIs:54, T20Is:83}},
    {State:'Runs',freq:{Test: 0,ODIs:44, T20Is:115 }},
    {State:'Wkts',freq:{Test: 0,ODIs:2, T20Is:5 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:22, T20Is:23 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:8 }},
    {State:'SR',freq:{Test: 0,ODIs:27, T20Is:16 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var tabraizS=[
    {State:'Mat',freq:{Test: 1, ODIs:5, T20Is:2}},
    {State:'Inns',freq:{Test: 2, ODIs:5, T20Is:2}},
    {State:'Balls',freq:{Test: 263,ODIs:264, T20Is:36}},
    {State:'Runs',freq:{Test: 150,ODIs:212, T20Is:47 }},
    {State:'Wkts',freq:{Test: 2,ODIs:7, T20Is:0 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:0 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:0 }},
    {State:'Ave',freq:{Test: 75,ODIs:30, T20Is:0 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:8 }},
    {State:'SR',freq:{Test: 131,ODIs:37, T20Is:0 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var keshavM=[
    {State:'Mat',freq:{Test: 11, ODIs:2, T20Is:0}},
    {State:'Inns',freq:{Test: 20, ODIs:2, T20Is:0}},
    {State:'Balls',freq:{Test: 2463,ODIs:97, T20Is:0}},
    {State:'Runs',freq:{Test: 1189,ODIs:97, T20Is:0 }},
    {State:'Wkts',freq:{Test: 43,ODIs:4, T20Is:0 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:0 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:0 }},
    {State:'Ave',freq:{Test: 27,ODIs:24, T20Is:0 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:8 }},
    {State:'SR',freq:{Test: 57,ODIs:24, T20Is:0 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var chrisM=[
    {State:'Mat',freq:{Test: 4, ODIs:29, T20Is:14}},
    {State:'Inns',freq:{Test: 8, ODIs:28, T20Is:14}},
    {State:'Balls',freq:{Test: 623,ODIs:1302, T20Is:306}},
    {State:'Runs',freq:{Test: 459,ODIs:1206, T20Is:405 }},
    {State:'Wkts',freq:{Test: 12,ODIs:33, T20Is:20 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 38,ODIs:37, T20Is:20 }},
    {State:'Econ',freq:{Test: 5,ODIs:6, T20Is:8 }},
    {State:'SR',freq:{Test: 52,ODIs:40, T20Is:15 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var duanneO=[
    {State:'Mat',freq:{Test: 3, ODIs:1, T20Is:0}},
    {State:'Inns',freq:{Test: 6, ODIs:1, T20Is:0}},
    {State:'Balls',freq:{Test: 404,ODIs:42, T20Is:0}},
    {State:'Runs',freq:{Test: 271,ODIs:34, T20Is:0 }},
    {State:'Wkts',freq:{Test: 14,ODIs:1, T20Is:0 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:0 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:0 }},
    {State:'Ave',freq:{Test: 19,ODIs:34, T20Is:0 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:0 }},
    {State:'SR',freq:{Test: 29,ODIs:42, T20Is:0 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var aaronP=[
    {State:'Mat',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Inns',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Balls',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'Runs',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'Wkts',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var vishwaF=[
    {State:'Mat',freq:{Test: 2, ODIs:4, T20Is:0}},
    {State:'Inns',freq:{Test: 2, ODIs:4, T20Is:0}},
    {State:'Balls',freq:{Test: 168,ODIs:171, T20Is:0}},
    {State:'Runs',freq:{Test: 103,ODIs:186, T20Is:0 }},
    {State:'Wkts',freq:{Test: 3,ODIs:2, T20Is:0 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:0 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:0 }},
    {State:'Ave',freq:{Test: 34,ODIs:93, T20Is:0 }},
    {State:'Econ',freq:{Test: 3,ODIs:7, T20Is:0 }},
    {State:'SR',freq:{Test: 56,ODIs:86, T20Is:0 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var ranganaH=[
    {State:'Mat',freq:{Test: 10, ODIs:19, T20Is:2}},
    {State:'Inns',freq:{Test: 19, ODIs:19, T20Is:2}},
    {State:'Balls',freq:{Test: 1863,ODIs:997, T20Is:42}},
    {State:'Runs',freq:{Test: 1057,ODIs:896, T20Is:62 }},
    {State:'Wkts',freq:{Test: 26,ODIs:21, T20Is:5 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 41,ODIs:43, T20Is:13 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:9 }},
    {State:'SR',freq:{Test: 72,ODIs:47, T20Is:8 }},
    {State:'4W',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var nuwanK=[
    {State:'Mat',freq:{Test: 3, ODIs:1, T20Is:4}},
    {State:'Inns',freq:{Test: 5, ODIs:1, T20Is:4}},
    {State:'Balls',freq:{Test: 526,ODIs:48, T20Is:84}},
    {State:'Runs',freq:{Test: 298,ODIs:70, T20Is:102 }},
    {State:'Wkts',freq:{Test: 7,ODIs:2, T20Is:4 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 43,ODIs:35, T20Is:25 }},
    {State:'Econ',freq:{Test: 4,ODIs:9, T20Is:7 }},
    {State:'SR',freq:{Test: 75,ODIs:24, T20Is:21 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var lakshanS=[
    {State:'Mat',freq:{Test: 2, ODIs:6, T20Is:1}},
    {State:'Inns',freq:{Test: 4, ODIs:5, T20Is:1}},
    {State:'Balls',freq:{Test: 348,ODIs:286, T20Is:24}},
    {State:'Runs',freq:{Test: 187,ODIs:189, T20Is:34 }},
    {State:'Wkts',freq:{Test: 9,ODIs:10, T20Is:1 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 21,ODIs:19, T20Is:34 }},
    {State:'Econ',freq:{Test: 3,ODIs:4, T20Is:9 }},
    {State:'SR',freq:{Test: 39,ODIs:29, T20Is:24 }},
    {State:'4W',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var dushmanthaC=[
    {State:'Mat',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Inns',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Balls',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'Runs',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'Wkts',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var lahiruK=[
    {State:'Mat',freq:{Test: 36, ODIs:179, T20Is:54}},
    {State:'Inns',freq:{Test: 51, ODIs:179, T20Is:53}},
    {State:'Balls',freq:{Test: 5990,ODIs:8951, T20Is:1139}},
    {State:'Runs',freq:{Test: 3239,ODIs:7089, T20Is:1527 }},
    {State:'Wkts',freq:{Test: 78,ODIs:232, T20Is:42 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 42,ODIs:30, T20Is:36 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:8 }},
    {State:'SR',freq:{Test: 78,ODIs:39, T20Is:27 }},
    {State:'4W',freq:{Test: 4,ODIs:6, T20Is:1 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var lasithM=[
    {State:'Mat',freq:{Test: 4, ODIs:29, T20Is:15}},
    {State:'Inns',freq:{Test: 8, ODIs:28, T20Is:13}},
    {State:'Balls',freq:{Test: 738,ODIs:1269, T20Is:269}},
    {State:'Runs',freq:{Test: 565,ODIs:1203, T20Is:308 }},
    {State:'Wkts',freq:{Test: 7,ODIs:43, T20Is:10 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 81,ODIs:28, T20Is:31 }},
    {State:'Econ',freq:{Test: 5,ODIs:6, T20Is:7 }},
    {State:'SR',freq:{Test: 106,ODIs:30, T20Is:27 }},
    {State:'4W',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var surangaL=[
    {State:'Mat',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Inns',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Balls',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'Runs',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'Wkts',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var samuelB=[
    {State:'Mat',freq:{Test: 6, ODIs:14, T20Is:25}},
    {State:'Inns',freq:{Test: 9, ODIs:14, T20Is:23}},
    {State:'Balls',freq:{Test: 880,ODIs:603, T20Is:476}},
    {State:'Runs',freq:{Test: 460,ODIs:523, T20Is:592 }},
    {State:'Wkts',freq:{Test: 6,ODIs:21, T20Is:39 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 77,ODIs:25, T20Is:15 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 147,ODIs:28, T20Is:12 }},
    {State:'4W',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var shannonG=[
    {State:'Mat',freq:{Test: 68, ODIs:13, T20Is:1}},
    {State:'Inns',freq:{Test: 130, ODIs:13, T20Is:1}},
    {State:'Balls',freq:{Test: 15952,ODIs:720, T20Is:6}},
    {State:'Runs',freq:{Test: 8410,ODIs:592, T20Is:15 }},
    {State:'Wkts',freq:{Test: 256,ODIs:17, T20Is:0 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 33,ODIs:35, T20Is:0 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:15 }},
    {State:'SR',freq:{Test: 62,ODIs:42, T20Is:0 }},
    {State:'4W',freq:{Test: 9,ODIs:1, T20Is:0 }},
    {State:'5w',freq:{Test: 10,ODIs:0, T20Is:0 }}
];

var alzarriJ=[
    {State:'Mat',freq:{Test: 1, ODIs:67, T20Is:24}},
    {State:'Inns',freq:{Test: 2, ODIs:65, T20Is:24}},
    {State:'Balls',freq:{Test: 166,ODIs:3116, T20Is:515}},
    {State:'Runs',freq:{Test: 98,ODIs:2858, T20Is:684 }},
    {State:'Wkts',freq:{Test: 6,ODIs:95, T20Is:36 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 16,ODIs:30, T20Is:19 }},
    {State:'Econ',freq:{Test: 4,ODIs:6, T20Is:8 }},
    {State:'SR',freq:{Test: 28,ODIs:33, T20Is:14 }},
    {State:'4W',freq:{Test: 1,ODIs:4, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:1 }}
];

var sunilN=[
    {State:'Mat',freq:{Test: 31, ODIs:38, T20Is:7}},
    {State:'Inns',freq:{Test: 58, ODIs:37, T20Is:7}},
    {State:'Balls',freq:{Test: 6557,ODIs:1952, T20Is:168}},
    {State:'Runs',freq:{Test: 3039,ODIs:1527, T20Is:269 }},
    {State:'Wkts',freq:{Test: 118,ODIs:64, T20Is:8 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 26,ODIs:24, T20Is:34 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:10 }},
    {State:'SR',freq:{Test: 56,ODIs:31, T20Is:21 }},
    {State:'4W',freq:{Test: 4,ODIs:1, T20Is:1 }},
    {State:'5w',freq:{Test: 5,ODIs:3, T20Is:0 }}
];

var jeromeT=[
    {State:'Mat',freq:{Test: 4, ODIs:31, T20Is:18}},
    {State:'Inns',freq:{Test: 7, ODIs:31, T20Is:18}},
    {State:'Balls',freq:{Test: 906,ODIs:1566, T20Is:414}},
    {State:'Runs',freq:{Test: 460,ODIs:1447, T20Is:472 }},
    {State:'Wkts',freq:{Test: 19,ODIs:53, T20Is:23 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 2248,ODIs:27, T20Is:21 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:7 }},
    {State:'SR',freq:{Test: 48,ODIs:30, T20Is:18 }},
    {State:'4W',freq:{Test: 1,ODIs:3, T20Is:0 }},
    {State:'5w',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var devendraB=[
    {State:'Mat',freq:{Test: 345, ODIs:30, T20Is:30}},
    {State:'Inns',freq:{Test: 345, ODIs:26, T20Is:19}},
    {State:'Balls',freq:{Test: 345,ODIs:812, T20Is:228}},
    {State:'Runs',freq:{Test: 345,ODIs:704, T20Is:352 }},
    {State:'Wkts',freq:{Test: 345,ODIs:23, T20Is:8 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 345,ODIs:30, T20Is:44 }},
    {State:'Econ',freq:{Test: 345,ODIs:5, T20Is:9 }},
    {State:'SR',freq:{Test: 345,ODIs:35, T20Is:28 }},
    {State:'4W',freq:{Test: 345,ODIs:2, T20Is:0 }},
    {State:'5w',freq:{Test: 345,ODIs:0, T20Is:0 }}
];

var miguelC=[
    {State:'Mat',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Inns',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Balls',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'Runs',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'Wkts',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var ashleyN=[
    {State:'Mat',freq:{Test: 20, ODIs:40, T20Is:16}},
    {State:'Inns',freq:{Test: 35, ODIs:39, T20Is:16}},
    {State:'Balls',freq:{Test: 3710,ODIs:2005, T20Is:362}},
    {State:'Runs',freq:{Test: 2137,ODIs:1710, T20Is:498 }},
    {State:'Wkts',freq:{Test: 87,ODIs:65, T20Is:22 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 24,ODIs:26, T20Is:16 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:9 }},
    {State:'SR',freq:{Test: 42,ODIs:31, T20Is:42 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var kemarR=[
    {State:'Mat',freq:{Test: 4, ODIs:29, T20Is:14}},
    {State:'Inns',freq:{Test: 8, ODIs:28, T20Is:14}},
    {State:'Balls',freq:{Test: 623,ODIs:1302, T20Is:306}},
    {State:'Runs',freq:{Test: 459,ODIs:1206, T20Is:405 }},
    {State:'Wkts',freq:{Test: 12,ODIs:33, T20Is:20 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 38,ODIs:37, T20Is:20 }},
    {State:'Econ',freq:{Test: 5,ODIs:6, T20Is:8 }},
    {State:'SR',freq:{Test: 52,ODIs:40, T20Is:15 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var kesrickW=[
    {State:'Mat',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Inns',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Balls',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'Runs',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'Wkts',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'BBi',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'4W',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var tendaiC=[
    {State:'Mat',freq:{Test: 16, ODIs:18, T20Is:12}},
    {State:'Inns',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Balls',freq:{Test: 2544,ODIs:2452, T20Is:414}},
    {State:'Runs',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'Wkts',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'BBi',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'4W',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var michaelC=[
    {State:'Mat',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Inns',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Balls',freq:{Test: 2544,ODIs:2452, T20Is:414}},
    {State:'Runs',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'Wkts',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'BBi',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 43,ODIs:33, T20Is:34 }},
    {State:'Econ',freq:{Test: 4,ODIs:6, T20Is:8 }},
    {State:'SR',freq:{Test: 67,ODIs:35, T20Is:26 }},
    {State:'4W',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var brianV=[
    {State:'Mat',freq:{Test: 17, ODIs:120, T20Is:26}},
    {State:'Inns',freq:{Test: 29, ODIs:120, T20Is:26}},
    {State:'Balls',freq:{Test: 3447,ODIs:5751, T20Is:566}},
    {State:'Runs',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'Wkts',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'BBi',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 31,ODIs:25, T20Is:31 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:11 }},
    {State:'SR',freq:{Test: 54,ODIs:27, T20Is:18 }},
    {State:'4W',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var tendaiC=[
    {State:'Mat',freq:{Test: 2, ODIs:6, T20Is:1}},
    {State:'Inns',freq:{Test: 48, ODIs:48, T20Is:77}},
    {State:'Balls',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'Runs',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'Wkts',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'BBi',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 42,ODIs:32, T20Is:21 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'SR',freq:{Test: 78,ODIs:37, T20Is:17 }},
    {State:'4W',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var johnN=[
    {State:'Mat',freq:{Test: 0, ODIs:4, T20Is:1}},
    {State:'Inns',freq:{Test: 0, ODIs:8, T20Is:1}},
    {State:'Balls',freq:{Test: 0,ODIs:627, T20Is:24}},
    {State:'Runs',freq:{Test: 0,ODIs:367, T20Is:8 }},
    {State:'Wkts',freq:{Test: 0,ODIs:11, T20Is:1 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:33, T20Is:8 }},
    {State:'Econ',freq:{Test: 0,ODIs:4, T20Is:2 }},
    {State:'SR',freq:{Test: 0,ODIs:57, T20Is:24 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var graemeC=[
    {State:'Mat',freq:{Test: 34, ODIs:70, T20Is:1}},
    {State:'Inns',freq:{Test: 66, ODIs:68, T20Is:1}},
    {State:'Balls',freq:{Test: 5598,ODIs:3259, T20Is:18}},
    {State:'Runs',freq:{Test: 3378,ODIs:3219, T20Is:24 }},
    {State:'Wkts',freq:{Test: 94,ODIs:98, T20Is:1 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 36,ODIs:33, T20Is:24 }},
    {State:'Econ',freq:{Test: 4,ODIs:6, T20Is:8 }},
    {State:'SR',freq:{Test: 60,ODIs:33, T20Is:18 }},
    {State:'4W',freq:{Test: 4,ODIs:3, T20Is:0 }},
    {State:'5w',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var chrisMp=[
    {State:'Mat',freq:{Test: 4, ODIs:29, T20Is:15}},
    {State:'Inns',freq:{Test: 8, ODIs:28, T20Is:13}},
    {State:'Balls',freq:{Test: 738,ODIs:1269, T20Is:269}},
    {State:'Runs',freq:{Test: 565,ODIs:1203, T20Is:308 }},
    {State:'Wkts',freq:{Test: 7,ODIs:43, T20Is:10 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 81,ODIs:28, T20Is:31 }},
    {State:'Econ',freq:{Test: 5,ODIs:6, T20Is:7 }},
    {State:'SR',freq:{Test: 106,ODIs:30, T20Is:27 }},
    {State:'4W',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var tauraiM=[
    {State:'Mat',freq:{Test: 10, ODIs:19, T20Is:2}},
    {State:'Inns',freq:{Test: 19, ODIs:19, T20Is:2}},
    {State:'Balls',freq:{Test: 1863,ODIs:997, T20Is:42}},
    {State:'Runs',freq:{Test: 1057,ODIs:896, T20Is:62 }},
    {State:'Wkts',freq:{Test: 26,ODIs:21, T20Is:5 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 41,ODIs:43, T20Is:13 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:9 }},
    {State:'SR',freq:{Test: 72,ODIs:47, T20Is:8 }},
    {State:'4W',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var tinasheP=[
    {State:'Mat',freq:{Test: 8, ODIs:3, T20Is:25}},
    {State:'Inns',freq:{Test: 16, ODIs:31, T20Is:25}},
    {State:'Balls',freq:{Test: 1530,ODIs:1532, T20Is:534}},
    {State:'Runs',freq:{Test: 752,ODIs:1521, T20Is:766 }},
    {State:'Wkts',freq:{Test: 21,ODIs:43, T20Is:30 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 36,ODIs:35, T20Is:26 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'SR',freq:{Test: 73,ODIs:36, T20Is:18 }},
    {State:'4W',freq:{Test: 1,ODIs:0, T20Is:1 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var donaldT=[
    {State:'Mat',freq:{Test: 128, ODIs:194, T20Is:19}},
    {State:'Inns',freq:{Test: 240, ODIs:191, T20Is:19}},
    {State:'Balls',freq:{Test: 28042,ODIs:9584, T20Is:422}},
    {State:'Runs',freq:{Test: 13787,ODIs:7861, T20Is:552 }},
    {State:'Wkts',freq:{Test: 497,ODIs:269, T20Is:18 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 28,ODIs:29, T20Is:31 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'SR',freq:{Test: 56,ODIs:36, T20Is:23 }},
    {State:'4W',freq:{Test: 8,ODIs:8, T20Is:0 }},
    {State:'5w',freq:{Test: 7,ODIs:5, T20Is:0 }}
];




var gulbadinN=[
    {State:'Mat',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Inns',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Balls',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'Runs',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'Wkts',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'BBi',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'4W',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var shapoorZ=[
    {State:'Mat',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Inns',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Balls',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'Runs',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'Wkts',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'BBi',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'4W',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var aftabA=[
    {State:'Mat',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Inns',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Balls',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'Runs',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'Wkts',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'BBi',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'4W',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var dawlatZ=[
    {State:'Mat',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Inns',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Balls',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'Runs',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'Wkts',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'BBi',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'4W',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var hamidH=[
    {State:'Mat',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Inns',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Balls',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'Runs',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'Wkts',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'BBi',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'4W',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var mirwaisA=[
    {State:'Mat',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Inns',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Balls',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'Runs',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'Wkts',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'BBi',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'4W',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var amirH=[
    {State:'Mat',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Inns',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Balls',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'Runs',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'Wkts',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'BBi',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'4W',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var fareedA=[
    {State:'Mat',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Inns',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Balls',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'Runs',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'Wkts',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'BBi',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'4W',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var rashidK=[
    {State:'Mat',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Inns',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Balls',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'Runs',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'Wkts',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'BBi',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'4W',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var yaminA=[
    {State:'Mat',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Inns',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Balls',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'Runs',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'Wkts',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'BBi',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'4W',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var AsgharS=[
    {State:'Mat',freq:{Test: 8, ODIs:3, T20Is:25}},
    {State:'Inns',freq:{Test: 16, ODIs:31, T20Is:25}},
    {State:'Balls',freq:{Test: 1530,ODIs:1532, T20Is:534}},
    {State:'Runs',freq:{Test: 752,ODIs:1521, T20Is:766 }},
    {State:'Wkts',freq:{Test: 21,ODIs:43, T20Is:30 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 36,ODIs:35, T20Is:26 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'SR',freq:{Test: 73,ODIs:36, T20Is:18 }},
    {State:'4W',freq:{Test: 1,ODIs:0, T20Is:1 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var MohammadS=[
    {State:'Mat',freq:{Test: 3, ODIs:1, T20Is:0}},
    {State:'Inns',freq:{Test: 6, ODIs:1, T20Is:0}},
    {State:'Balls',freq:{Test: 404,ODIs:42, T20Is:0}},
    {State:'Runs',freq:{Test: 271,ODIs:34, T20Is:0 }},
    {State:'Wkts',freq:{Test: 14,ODIs:1, T20Is:0 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:0 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:0 }},
    {State:'Ave',freq:{Test: 19,ODIs:34, T20Is:0 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:0 }},
    {State:'SR',freq:{Test: 29,ODIs:42, T20Is:0 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var NoorAli =[
    {State:'Mat',freq:{Test: 128, ODIs:194, T20Is:19}},
    {State:'Inns',freq:{Test: 240, ODIs:191, T20Is:19}},
    {State:'Balls',freq:{Test: 28042,ODIs:9584, T20Is:422}},
    {State:'Runs',freq:{Test: 13787,ODIs:7861, T20Is:552 }},
    {State:'Wkts',freq:{Test: 497,ODIs:269, T20Is:18 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 28,ODIs:29, T20Is:31 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'SR',freq:{Test: 56,ODIs:36, T20Is:23 }},
    {State:'4W',freq:{Test: 8,ODIs:8, T20Is:0 }},
    {State:'5w',freq:{Test: 7,ODIs:5, T20Is:0 }}
];

var SamiullahS=[
    {State:'Mat',freq:{Test: 13, ODIs:57, T20Is:13}},
    {State:'Inns',freq:{Test: 25, ODIs:57, T20Is:13}},
    {State:'Balls',freq:{Test: 287,ODIs:2789, T20Is:2659}},
    {State:'Runs',freq:{Test: 1536,ODIs:2687, T20Is:356 }},
    {State:'Wkts',freq:{Test: 41,ODIs:88, T20Is:16 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 37,ODIs:31, T20Is:22 }},
    {State:'Econ',freq:{Test: 4,ODIs:6, T20Is:7 }},
    {State:'SR',freq:{Test: 65,ODIs:32, T20Is:18 }},
    {State:'4W',freq:{Test: 1,ODIs:3, T20Is:0 }},
    {State:'5w',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var MohammadN=[
    {State:'Mat',freq:{Test: 18, ODIs:63, T20Is:8}},
    {State:'Inns',freq:{Test: 34, ODIs:62, T20Is:8}},
    {State:'Balls',freq:{Test: 2950,ODIs:3024, T20Is:162}},
    {State:'Runs',freq:{Test: 1530,ODIs:2813, T20Is:253 }},
    {State:'Wkts',freq:{Test: 50,ODIs:89, T20Is:7 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 31,ODIs:32, T20Is:36 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'SR',freq:{Test: 59,ODIs:34, T20Is:23 }},
    {State:'4W',freq:{Test: 1,ODIs:8, T20Is:0 }},
    {State:'5w',freq:{Test: 2,ODIs:2, T20Is:0 }}
];

var shafiqullah=[
    {State:'Mat',freq:{Test: 3, ODIs:1, T20Is:4}},
    {State:'Inns',freq:{Test: 5, ODIs:1, T20Is:4}},
    {State:'Balls',freq:{Test: 526,ODIs:48, T20Is:84}},
    {State:'Runs',freq:{Test: 298,ODIs:70, T20Is:102 }},
    {State:'Wkts',freq:{Test: 7,ODIs:2, T20Is:4 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 43,ODIs:35, T20Is:25 }},
    {State:'Econ',freq:{Test: 4,ODIs:9, T20Is:7 }},
    {State:'SR',freq:{Test: 75,ODIs:24, T20Is:21 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var NajeebT=[
    {State:'Mat',freq:{Test: 10, ODIs:49, T20Is:23}},
    {State:'Inns',freq:{Test: 18, ODIs:47, T20Is:21}},
    {State:'Balls',freq:{Test: 2544,ODIs:2452, T20Is:414}},
    {State:'Runs',freq:{Test: 1629,ODIs:2292, T20Is:547 }},
    {State:'Wkts',freq:{Test: 38,ODIs:70, T20Is:16 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 43,ODIs:33, T20Is:34 }},
    {State:'Econ',freq:{Test: 4,ODIs:6, T20Is:8}},
    {State:'SR',freq:{Test: 67,ODIs:35, T20Is:26 }},
    {State:'4W',freq:{Test: 5,ODIs:5, T20Is:0 }},
    {State:'5w',freq:{Test: 1,ODIs:1, T20Is:0 }}
];

var NawrozM=[
    {State:'Mat',freq:{Test: 2, ODIs:6, T20Is:1}},
    {State:'Inns',freq:{Test: 4, ODIs:5, T20Is:1}},
    {State:'Balls',freq:{Test: 348,ODIs:286, T20Is:24}},
    {State:'Runs',freq:{Test: 187,ODIs:189, T20Is:34 }},
    {State:'Wkts',freq:{Test: 9,ODIs:10, T20Is:1 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 21,ODIs:19, T20Is:34 }},
    {State:'Econ',freq:{Test: 3,ODIs:4, T20Is:9 }},
    {State:'SR',freq:{Test: 39,ODIs:29, T20Is:24 }},
    {State:'4W',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var KarimJ=[
    {State:'Mat',freq:{Test: 25, ODIs:49, T20Is:7}},
    {State:'Inns',freq:{Test: 48, ODIs:48, T20Is:77}},
    {State:'Balls',freq:{Test: 4671,ODIs:2465, T20Is:142}},
    {State:'Runs',freq:{Test: 2655,ODIs:2247, T20Is:250 }},
    {State:'Wkts',freq:{Test: 86,ODIs:91, T20Is:8 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 31,ODIs:25, T20Is:31 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:11 }},
    {State:'SR',freq:{Test: 54,ODIs:27, T20Is:18 }},
    {State:'4W',freq:{Test: 4,ODIs:6, T20Is:0 }},
    {State:'5w',freq:{Test: 2,ODIs:0, T20Is:0 }}
];

var JavedA=[
    {State:'Mat',freq:{Test: 17, ODIs:120, T20Is:26}},
    {State:'Inns',freq:{Test: 29, ODIs:120, T20Is:26}},
    {State:'Balls',freq:{Test: 3447,ODIs:5751, T20Is:566}},
    {State:'Runs',freq:{Test: 1866,ODIs:4981, T20Is:729 }},
    {State:'Wkts',freq:{Test: 44,ODIs:157, T20Is:34 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 42,ODIs:32, T20Is:21 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'SR',freq:{Test: 78,ODIs:37, T20Is:17 }},
    {State:'4W',freq:{Test: 2,ODIs:5, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:2, T20Is:0 }}
];

var ShaunM=[
    {State:'Mat',freq:{Test: 77, ODIs:80, T20Is:14}},
    {State:'Inns',freq:{Test: 136, ODIs:78, T20Is:14}},
    {State:'Balls',freq:{Test: 14775,ODIs:3733, T20Is:278}},
    {State:'Runs',freq:{Test: 8051,ODIs:3563, T20Is:400 }},
    {State:'Wkts',freq:{Test: 218,ODIs:115, T20Is:8 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 37,ODIs:31, T20Is:50 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'SR',freq:{Test: 68,ODIs:32, T20Is:35 }},
    {State:'4W',freq:{Test: 8,ODIs:6, T20Is:0 }},
    {State:'5w',freq:{Test: 7,ODIs:0, T20Is:0 }}
];

var StevenS=[
    {State:'Mat',freq:{Test: 0, ODIs:4, T20Is:1}},
    {State:'Inns',freq:{Test: 0, ODIs:8, T20Is:1}},
    {State:'Balls',freq:{Test: 0,ODIs:627, T20Is:24}},
    {State:'Runs',freq:{Test: 0,ODIs:367, T20Is:8 }},
    {State:'Wkts',freq:{Test: 0,ODIs:11, T20Is:1 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:33, T20Is:8 }},
    {State:'Econ',freq:{Test: 0,ODIs:4, T20Is:2 }},
    {State:'SR',freq:{Test: 0,ODIs:57, T20Is:24 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var UsmanK=[
    {State:'Mat',freq:{Test: 0, ODIs:20, T20Is:24}},
    {State:'Inns',freq:{Test: 0, ODIs:20, T20Is:24}},
    {State:'Balls',freq:{Test: 0,ODIs:1037, T20Is:535}},
    {State:'Runs',freq:{Test: 0,ODIs:811, T20Is:587 }},
    {State:'Wkts',freq:{Test: 0,ODIs:39, T20Is:33 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:27, T20Is:16 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:25, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:3, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var UsmanG=[
    {State:'Mat',freq:{Test: 0, ODIs:20, T20Is:24}},
    {State:'Inns',freq:{Test: 0, ODIs:20, T20Is:24}},
    {State:'Balls',freq:{Test: 0,ODIs:1037, T20Is:535}},
    {State:'Runs',freq:{Test: 0,ODIs:811, T20Is:587 }},
    {State:'Wkts',freq:{Test: 0,ODIs:39, T20Is:33 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:27, T20Is:16 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:25, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:3, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];
var DavidW=[
    {State:'Mat',freq:{Test: 18, ODIs:70, T20Is:17}},
    {State:'Inns',freq:{Test: 31, ODIs:69, T20Is:17}},
    {State:'Balls',freq:{Test: 2718,ODIs:3392, T20Is:366}},
    {State:'Runs',freq:{Test: 1345,ODIs:2769, T20Is:408 }},
    {State:'Wkts',freq:{Test: 45,ODIs:70, T20Is:16 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 30,ODIs:40, T20Is:26 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 60,ODIs:48, T20Is:23 }},
    {State:'4W',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'5w',freq:{Test: 4,ODIs:0, T20Is:0 }}
];

var MitchellM=[
    {State:'Mat',freq:{Test: 34, ODIs:70, T20Is:1}},
    {State:'Inns',freq:{Test: 66, ODIs:68, T20Is:1}},
    {State:'Balls',freq:{Test: 5598,ODIs:3259, T20Is:18}},
    {State:'Runs',freq:{Test: 3378,ODIs:3219, T20Is:24 }},
    {State:'Wkts',freq:{Test: 94,ODIs:98, T20Is:1 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 36,ODIs:33, T20Is:24 }},
    {State:'Econ',freq:{Test: 4,ODIs:6, T20Is:8 }},
    {State:'SR',freq:{Test: 60,ODIs:33, T20Is:18 }},
    {State:'4W',freq:{Test: 4,ODIs:3, T20Is:0 }},
    {State:'5w',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var GlennM=[
    {State:'Mat',freq:{Test: 0, ODIs:6, T20Is:6}},
    {State:'Inns',freq:{Test: 0, ODIs:6, T20Is:6}},
    {State:'Balls',freq:{Test: 0,ODIs:324, T20Is:144}},
    {State:'Runs',freq:{Test: 0,ODIs:229, T20Is:174 }},
    {State:'Wkts',freq:{Test: 0,ODIs:10, T20Is:11 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:23, T20Is:16 }},
    {State:'Econ',freq:{Test: 0,ODIs:4, T20Is:7 }},
    {State:'SR',freq:{Test: 50,ODIs:32, T20Is:13 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:1 }}
];

var JhyeR=[
    {State:'Mat',freq:{Test: 22, ODIs:36, T20Is:10}},
    {State:'Inns',freq:{Test: 40, ODIs:34, T20Is:10}},
    {State:'Balls',freq:{Test: 5103,ODIs:1917, T20Is:228}},
    {State:'Runs',freq:{Test: 2715,ODIs:1511, T20Is:240 }},
    {State:'Wkts',freq:{Test: 76,ODIs:64, T20Is:16 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 28,ODIs:21, T20Is:19 }},
    {State:'Econ',freq:{Test: 36,ODIs:24, T20Is:15 }},
    {State:'SR',freq:{Test: 3,ODIs:5, T20Is:6 }},
    {State:'4W',freq:{Test: 67,ODIs:29, T20Is:14 }},
    {State:'5w',freq:{Test: 2,ODIs:2, T20Is:0 }}
];

var MoisesH=[
    {State:'Mat',freq:{Test: 0, ODIs:59, T20Is:37}},
    {State:'Inns',freq:{Test: 0, ODIs:52, T20Is:33}},
    {State:'Balls',freq:{Test: 0,ODIs:1953, T20Is:606}},
    {State:'Runs',freq:{Test: 0,ODIs:1510, T20Is:714 }},
    {State:'Wkts',freq:{Test: 0,ODIs:63, T20Is:35 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:24, T20Is:20 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:31, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:1, T20Is:3 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var TravisH=[
    {State:'Mat',freq:{Test: 0, ODIs:20, T20Is:20}},
    {State:'Inns',freq:{Test: 0, ODIs:16, T20Is:12}},
    {State:'Balls',freq:{Test: 0,ODIs:559, T20Is:171}},
    {State:'Runs',freq:{Test: 0,ODIs:490, T20Is:226 }},
    {State:'Wkts',freq:{Test: 0,ODIs:12, T20Is:6 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:41, T20Is:38 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:8 }},
    {State:'SR',freq:{Test: 0,ODIs:47, T20Is:29 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var JohnH=[
    {State:'Mat',freq:{Test: 0, ODIs:13, T20Is:2}},
    {State:'Inns',freq:{Test: 0, ODIs:13, T20Is:2}},
    {State:'Balls',freq:{Test: 0,ODIs:638, T20Is:48}},
    {State:'Runs',freq:{Test: 0,ODIs:687, T20Is:102 }},
    {State:'Wkts',freq:{Test: 0,ODIs:25, T20Is:4 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:28, T20Is:26 }},
    {State:'Econ',freq:{Test: 0,ODIs:6, T20Is:13 }},
    {State:'SR',freq:{Test: 0,ODIs:26, T20Is:12 }},
    {State:'4W',freq:{Test: 0,ODIs:2, T20Is:1 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var MushfiqurR=[
    {State:'Mat',freq:{Test: 0, ODIs:33, T20Is:14}},
    {State:'Inns',freq:{Test: 0, ODIs:32, T20Is:14}},
    {State:'Balls',freq:{Test: 0,ODIs:1650, T20Is:268}},
    {State:'Runs',freq:{Test: 0,ODIs:1313, T20Is:324 }},
    {State:'Wkts',freq:{Test: 0,ODIs:34, T20Is:13 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:39, T20Is:25 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:49, T20Is:21 }},
    {State:'4W',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var TamimI=[
    {State:'Mat',freq:{Test: 0, ODIs:68, T20Is:46}},
    {State:'Inns',freq:{Test: 0, ODIs:66, T20Is:42}},
    {State:'Balls',freq:{Test: 0,ODIs:3284, T20Is:856}},
    {State:'Runs',freq:{Test: 0,ODIs:2507, T20Is:927 }},
    {State:'Wkts',freq:{Test: 0,ODIs:71, T20Is:52 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:5, T20Is:6 }},
    {State:'Econ',freq:{Test: 0,ODIs:46, T20Is:16 }},
    {State:'SR',freq:{Test: 0,ODIs:5, T20Is:6 }},
    {State:'4W',freq:{Test: 0,ODIs:3, T20Is:1 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var NasirH=[
    {State:'Mat',freq:{Test: 1, ODIs:46, T20Is:26}},
    {State:'Inns',freq:{Test: 2, ODIs:44, T20Is:25}},
    {State:'Balls',freq:{Test: 125,ODIs:2139, T20Is:522}},
    {State:'Runs',freq:{Test: 81,ODIs:1763, T20Is:537 }},
    {State:'Wkts',freq:{Test: 1,ODIs:56, T20Is:28 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 81,ODIs:31, T20Is:19 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:6 }},
    {State:'SR',freq:{Test: 125,ODIs:38, T20Is:19 }},
    {State:'4W',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var mahmudullah=[
    {State:'Mat',freq:{Test: 0, ODIs:13, T20Is:26}},
    {State:'Inns',freq:{Test: 0, ODIs:12, T20Is:22}},
    {State:'Balls',freq:{Test: 0,ODIs:543, T20Is:390}},
    {State:'Runs',freq:{Test: 0,ODIs:520, T20Is:471 }},
    {State:'Wkts',freq:{Test: 0,ODIs:16, T20Is:26 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:32, T20Is:19 }},
    {State:'Econ',freq:{Test: 0,ODIs:6, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:34, T20Is:15 }},
    {State:'4W',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var ImrulK=[
    {State:'Mat',freq:{Test: 0, ODIs:13, T20Is:26}},
    {State:'Inns',freq:{Test: 0, ODIs:12, T20Is:22}},
    {State:'Balls',freq:{Test: 0,ODIs:543, T20Is:390}},
    {State:'Runs',freq:{Test: 0,ODIs:520, T20Is:471 }},
    {State:'Wkts',freq:{Test: 0,ODIs:16, T20Is:26 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:33, T20Is:18 }},
    {State:'Econ',freq:{Test: 0,ODIs:6, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:34, T20Is:15 }},
    {State:'4W',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var MominulH=[
    {State:'Mat',freq:{Test: 0, ODIs:18, T20Is:0}},
    {State:'Inns',freq:{Test: 0, ODIs:17, T20Is:0}},
    {State:'Balls',freq:{Test: 0,ODIs:878, T20Is:0}},
    {State:'Runs',freq:{Test: 0,ODIs:1020, T20Is:0 }},
    {State:'Wkts',freq:{Test: 0,ODIs:25, T20Is:0 }},
    {State:'BBi',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'BBM',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Ave',freq:{Test: 0,ODIs:41, T20Is:0 }},
    {State:'Econ',freq:{Test: 0,ODIs:7, T20Is:0 }},
    {State:'SR',freq:{Test: 0,ODIs:35, T20Is:0 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var MohammadMi=[
    {State:'Mat',freq:{Test: 0, ODIs:22, T20Is:19}},
    {State:'Inns',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Balls',freq:{Test: 0,ODIs:1044, T20Is:174}},
    {State:'Runs',freq:{Test: 0,ODIs:835, T20Is:216 }},
    {State:'Wkts',freq:{Test: 0,ODIs:22, T20Is:13 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:38, T20Is:17 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:47, T20Is:13 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var SabbirR=[
    {State:'Mat',freq:{Test: 0, ODIs:4, T20Is:8}},
    {State:'Inns',freq:{Test: 0, ODIs:4, T20Is:8}},
    {State:'Balls',freq:{Test: 0,ODIs:186, T20Is:174}},
    {State:'Runs',freq:{Test: 0,ODIs:155, T20Is:192 }},
    {State:'Wkts',freq:{Test: 0,ODIs:5, T20Is:12 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:31, T20Is:16 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:5, T20Is:15 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:1 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var SoumyaS=[
    {State:'Mat',freq:{Test: 8, ODIs:16, T20Is:6}},
    {State:'Inns',freq:{Test: 16, ODIs:30, T20Is:6}},
    {State:'Balls',freq:{Test: 1945,ODIs:1643, T20Is:132}},
    {State:'Runs',freq:{Test: 1067,ODIs:1541, T20Is:191 }},
    {State:'Wkts',freq:{Test: 22,ODIs:61, T20Is:7 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 49,ODIs:26, T20Is:27 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'SR',freq:{Test: 88,ODIs:27, T20Is:19 }},
    {State:'4W',freq:{Test: 2,ODIs:4, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:2, T20Is:0 }}
];

var LitonD=[
    {State:'Mat',freq:{Test: 0, ODIs:37, T20Is:18}},
    {State:'Inns',freq:{Test: 0, ODIs:36, T20Is:18}},
    {State:'Balls',freq:{Test: 0,ODIs:1639, T20Is:373}},
    {State:'Runs',freq:{Test: 0,ODIs:1434, T20Is:458 }},
    {State:'Wkts',freq:{Test: 0,ODIs:38, T20Is:21 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:37, T20Is:21 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:43, T20Is:18 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:1 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var SubashisR=[
    {State:'Mat',freq:{Test: 15, ODIs:39, T20Is:14}},
    {State:'Inns',freq:{Test: 25, ODIs:37, T20Is:14}},
    {State:'Balls',freq:{Test: 2571,ODIs:1784, T20Is:295}},
    {State:'Runs',freq:{Test: 1222,ODIs:1486, T20Is:327 }},
    {State:'Wkts',freq:{Test: 31,ODIs:44, T20Is:20 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 39,ODIs:34, T20Is:16 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 83,ODIs:40, T20Is:15 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:1 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];


var EoinM=[
    {State:'Mat',freq:{Test: 31, ODIs:38, T20Is:7}},
    {State:'Inns',freq:{Test: 58, ODIs:37, T20Is:7}},
    {State:'Balls',freq:{Test: 6557,ODIs:1952, T20Is:168}},
    {State:'Runs',freq:{Test: 3039,ODIs:1527, T20Is:269 }},
    {State:'Wkts',freq:{Test: 118,ODIs:64, T20Is:8 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 26,ODIs:24, T20Is:34 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:10 }},
    {State:'SR',freq:{Test: 56,ODIs:31, T20Is:21 }},
    {State:'4W',freq:{Test: 4,ODIs:1, T20Is:1 }},
    {State:'5w',freq:{Test: 5,ODIs:3, T20Is:0 }}
];

var MoeenA=[
    {State:'Mat',freq:{Test: 68, ODIs:13, T20Is:1}},
    {State:'Inns',freq:{Test: 130, ODIs:13, T20Is:1}},
    {State:'Balls',freq:{Test: 15952,ODIs:720, T20Is:6}},
    {State:'Runs',freq:{Test: 8410,ODIs:592, T20Is:15 }},
    {State:'Wkts',freq:{Test: 256,ODIs:17, T20Is:0 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 33,ODIs:35, T20Is:0 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:15 }},
    {State:'SR',freq:{Test: 62,ODIs:42, T20Is:0 }},
    {State:'4W',freq:{Test: 9,ODIs:1, T20Is:0 }},
    {State:'5w',freq:{Test: 10,ODIs:0, T20Is:0 }}
];

var DavidWi=[
    {State:'Mat',freq:{Test: 1, ODIs:67, T20Is:24}},
    {State:'Inns',freq:{Test: 2, ODIs:65, T20Is:24}},
    {State:'Balls',freq:{Test: 166,ODIs:3116, T20Is:515}},
    {State:'Runs',freq:{Test: 98,ODIs:2858, T20Is:684 }},
    {State:'Wkts',freq:{Test: 6,ODIs:95, T20Is:36 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 16,ODIs:30, T20Is:19 }},
    {State:'Econ',freq:{Test: 4,ODIs:6, T20Is:8 }},
    {State:'SR',freq:{Test: 28,ODIs:33, T20Is:14 }},
    {State:'4W',freq:{Test: 1,ODIs:4, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:1 }}
];

var JonnyB=[
    {State:'Mat',freq:{Test: 6, ODIs:14, T20Is:25}},
    {State:'Inns',freq:{Test: 9, ODIs:14, T20Is:23}},
    {State:'Balls',freq:{Test: 880,ODIs:603, T20Is:476}},
    {State:'Runs',freq:{Test: 460,ODIs:523, T20Is:592 }},
    {State:'Wkts',freq:{Test: 6,ODIs:21, T20Is:39 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 77,ODIs:25, T20Is:15 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 147,ODIs:28, T20Is:12 }},
    {State:'4W',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var AlexH=[
    {State:'Mat',freq:{Test: 0, ODIs:0, T20Is:1}},
    {State:'Inns',freq:{Test: 0, ODIs:0, T20Is:1}},
    {State:'Balls',freq:{Test: 0,ODIs:0, T20Is:21}},
    {State:'Runs',freq:{Test: 0,ODIs:0, T20Is:40 }},
    {State:'Wkts',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'BBi',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'BBM',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Ave',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Econ',freq:{Test: 0,ODIs:0, T20Is:11 }},
    {State:'SR',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var JosB =[
    {State:'Mat',freq:{Test: 8, ODIs:4, T20Is:5}},
    {State:'Inns',freq:{Test: 11, ODIs:1, T20Is:4}},
    {State:'Balls',freq:{Test: 846,ODIs:12, T20Is:66}},
    {State:'Runs',freq:{Test: 506,ODIs:9, T20Is:71 }},
    {State:'Wkts',freq:{Test: 8,ODIs:0, T20Is:2 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 63,ODIs:0, T20Is:36 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 106,ODIs:0, T20Is:33 }},
    {State:'4W',freq:{Test: 8,ODIs:8, T20Is:0 }},
    {State:'5w',freq:{Test: 7,ODIs:5, T20Is:0 }}
];

var JoeR=[
    {State:'Mat',freq:{Test: 36, ODIs:179, T20Is:54}},
    {State:'Inns',freq:{Test: 51, ODIs:179, T20Is:53}},
    {State:'Balls',freq:{Test: 5990,ODIs:8951, T20Is:1139}},
    {State:'Runs',freq:{Test: 3239,ODIs:7089, T20Is:1527 }},
    {State:'Wkts',freq:{Test: 78,ODIs:232, T20Is:42 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 42,ODIs:30, T20Is:36 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:8 }},
    {State:'SR',freq:{Test: 78,ODIs:39, T20Is:27 }},
    {State:'4W',freq:{Test: 4,ODIs:6, T20Is:1 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var DawidM=[
    {State:'Mat',freq:{Test: 10, ODIs:56, T20Is:11}},
    {State:'Inns',freq:{Test: 17, ODIs:56, T20Is:11}},
    {State:'Balls',freq:{Test: 1506,ODIs:2342, T20Is:220}},
    {State:'Runs',freq:{Test: 822,ODIs:2294, T20Is:275 }},
    {State:'Wkts',freq:{Test: 15,ODIs:63, T20Is:8 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 55,ODIs:36, T20Is:34 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:8 }},
    {State:'SR',freq:{Test: 100,ODIs:37, T20Is:28 }},
    {State:'4W',freq:{Test: 0,ODIs:4, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var JasonR=[
    {State:'Mat',freq:{Test: 14, ODIs:4, T20Is:0}},
    {State:'Inns',freq:{Test: 26, ODIs:4, T20Is:0}},
    {State:'Balls',freq:{Test: 3321,ODIs:222, T20Is:0}},
    {State:'Runs',freq:{Test: 1737,ODIs:151, T20Is:0 }},
    {State:'Wkts',freq:{Test: 52,ODIs:5, T20Is:300 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:0 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:0 }},
    {State:'Ave',freq:{Test: 33,ODIs:30, T20Is:0 }},
    {State:'Econ',freq:{Test: 3,ODIs:4, T20Is:0 }},
    {State:'SR',freq:{Test: 64,ODIs:44, T20Is:0 }},
    {State:'4W',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'5w',freq:{Test: 37,ODIs:0, T20Is:0 }}
];

var AlastairC=[
    {State:'Mat',freq:{Test: 4, ODIs:29, T20Is:15}},
    {State:'Inns',freq:{Test: 8, ODIs:28, T20Is:13}},
    {State:'Balls',freq:{Test: 738,ODIs:1269, T20Is:269}},
    {State:'Runs',freq:{Test: 565,ODIs:1203, T20Is:308 }},
    {State:'Wkts',freq:{Test: 7,ODIs:43, T20Is:10 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 81,ODIs:28, T20Is:31 }},
    {State:'Econ',freq:{Test: 5,ODIs:6, T20Is:7 }},
    {State:'SR',freq:{Test: 106,ODIs:30, T20Is:27 }},
    {State:'4W',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var BenSt=[
    {State:'Mat',freq:{Test: 3, ODIs:14, T20Is:0}},
    {State:'Inns',freq:{Test: 4, ODIs:14, T20Is:0}},
    {State:'Balls',freq:{Test: 456,ODIs:737, T20Is:0}},
    {State:'Runs',freq:{Test: 228,ODIs:731, T20Is:0 }},
    {State:'Wkts',freq:{Test: 2,ODIs:20, T20Is:0 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:0 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:0 }},
    {State:'Ave',freq:{Test: 114,ODIs:37, T20Is:0 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:0 }},
    {State:'SR',freq:{Test: 228,ODIs:37, T20Is:0 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var ShikharD=[
    {State:'Mat',freq:{Test: 108, ODIs:121, T20Is:56}},
    {State:'Inns',freq:{Test: 198, ODIs:121, T20Is:55}},
    {State:'Balls',freq:{Test: 22177,ODIs:6109, T20Is:1173}},
    {State:'Runs',freq:{Test: 11122,ODIs:5364, T20Is:1491 }},
    {State:'Wkts',freq:{Test: 386,ODIs:178, T20Is:65 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 29,ODIs:30, T20Is:23 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 57,ODIs:34, T20Is:18 }},
    {State:'4W',freq:{Test: 14,ODIs:9, T20Is:1 }},
    {State:'5w',freq:{Test: 15,ODIs:1, T20Is:0 }}
];

var WriddhimanS=[
    {State:'Mat',freq:{Test: 10, ODIs:19, T20Is:2}},
    {State:'Inns',freq:{Test: 19, ODIs:19, T20Is:2}},
    {State:'Balls',freq:{Test: 1863,ODIs:997, T20Is:42}},
    {State:'Runs',freq:{Test: 1057,ODIs:896, T20Is:62 }},
    {State:'Wkts',freq:{Test: 26,ODIs:21, T20Is:5 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 41,ODIs:43, T20Is:13 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:9 }},
    {State:'SR',freq:{Test: 72,ODIs:47, T20Is:8 }},
    {State:'4W',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var ViratK=[
    {State:'Mat',freq:{Test: 36, ODIs:69, T20Is:21}},
    {State:'Inns',freq:{Test: 66, ODIs:67, T20Is:21}},
    {State:'Balls',freq:{Test: 6412,ODIs:3550, T20Is:480}},
    {State:'Runs',freq:{Test: 3800,ODIs:2996, T20Is:583 }},
    {State:'Wkts',freq:{Test: 125,ODIs:102, T20Is:27 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 30,ODIs:29, T20Is:22 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 51,ODIs:35, T20Is:17 }},
    {State:'4W',freq:{Test: 6,ODIs:4, T20Is:0 }},
    {State:'5w',freq:{Test: 5,ODIs:2, T20Is:0 }}
];


var YuvrajS=[
    {State:'Mat',freq:{Test: 8, ODIs:3, T20Is:25}},
    {State:'Inns',freq:{Test: 16, ODIs:31, T20Is:25}},
    {State:'Balls',freq:{Test: 1530,ODIs:1532, T20Is:534}},
    {State:'Runs',freq:{Test: 752,ODIs:1521, T20Is:766 }},
    {State:'Wkts',freq:{Test: 21,ODIs:43, T20Is:30 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 36,ODIs:35, T20Is:26 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'SR',freq:{Test: 73,ODIs:36, T20Is:18 }},
    {State:'4W',freq:{Test: 1,ODIs:0, T20Is:1 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var CheteshwarP=[
    {State:'Mat',freq:{Test: 3, ODIs:1, T20Is:0}},
    {State:'Inns',freq:{Test: 6, ODIs:1, T20Is:0}},
    {State:'Balls',freq:{Test: 404,ODIs:42, T20Is:0}},
    {State:'Runs',freq:{Test: 271,ODIs:34, T20Is:0 }},
    {State:'Wkts',freq:{Test: 14,ODIs:1, T20Is:0 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:0 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:0 }},
    {State:'Ave',freq:{Test: 19,ODIs:34, T20Is:0 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:0 }},
    {State:'SR',freq:{Test: 29,ODIs:42, T20Is:0 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var RavindraJ=[
    {State:'Mat',freq:{Test: 128, ODIs:194, T20Is:19}},
    {State:'Inns',freq:{Test: 240, ODIs:191, T20Is:19}},
    {State:'Balls',freq:{Test: 28042,ODIs:9584, T20Is:422}},
    {State:'Runs',freq:{Test: 13787,ODIs:7861, T20Is:552 }},
    {State:'Wkts',freq:{Test: 497,ODIs:269, T20Is:18 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 28,ODIs:29, T20Is:31 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'SR',freq:{Test: 56,ODIs:36, T20Is:23 }},
    {State:'4W',freq:{Test: 8,ODIs:8, T20Is:0 }},
    {State:'5w',freq:{Test: 7,ODIs:5, T20Is:0 }}
];

var MuraliV=[
    {State:'Mat',freq:{Test: 13, ODIs:57, T20Is:13}},
    {State:'Inns',freq:{Test: 25, ODIs:57, T20Is:13}},
    {State:'Balls',freq:{Test: 287,ODIs:2789, T20Is:2659}},
    {State:'Runs',freq:{Test: 1536,ODIs:2687, T20Is:356 }},
    {State:'Wkts',freq:{Test: 41,ODIs:88, T20Is:16 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 37,ODIs:31, T20Is:22 }},
    {State:'Econ',freq:{Test: 4,ODIs:6, T20Is:7 }},
    {State:'SR',freq:{Test: 65,ODIs:32, T20Is:18 }},
    {State:'4W',freq:{Test: 1,ODIs:3, T20Is:0 }},
    {State:'5w',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var DineshK=[
    {State:'Mat',freq:{Test: 18, ODIs:63, T20Is:8}},
    {State:'Inns',freq:{Test: 34, ODIs:62, T20Is:8}},
    {State:'Balls',freq:{Test: 2950,ODIs:3024, T20Is:162}},
    {State:'Runs',freq:{Test: 1530,ODIs:2813, T20Is:253 }},
    {State:'Wkts',freq:{Test: 50,ODIs:89, T20Is:7 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 31,ODIs:32, T20Is:36 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'SR',freq:{Test: 59,ODIs:34, T20Is:23 }},
    {State:'4W',freq:{Test: 1,ODIs:8, T20Is:0 }},
    {State:'5w',freq:{Test: 2,ODIs:2, T20Is:0 }}
];

var MSDhoni=[
    {State:'Mat',freq:{Test: 3, ODIs:1, T20Is:4}},
    {State:'Inns',freq:{Test: 5, ODIs:1, T20Is:4}},
    {State:'Balls',freq:{Test: 526,ODIs:48, T20Is:84}},
    {State:'Runs',freq:{Test: 298,ODIs:70, T20Is:102 }},
    {State:'Wkts',freq:{Test: 7,ODIs:2, T20Is:4 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 43,ODIs:35, T20Is:25 }},
    {State:'Econ',freq:{Test: 4,ODIs:9, T20Is:7 }},
    {State:'SR',freq:{Test: 75,ODIs:24, T20Is:21 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var AjinkyaR=[
    {State:'Mat',freq:{Test: 10, ODIs:49, T20Is:23}},
    {State:'Inns',freq:{Test: 18, ODIs:47, T20Is:21}},
    {State:'Balls',freq:{Test: 2544,ODIs:2452, T20Is:414}},
    {State:'Runs',freq:{Test: 1629,ODIs:2292, T20Is:547 }},
    {State:'Wkts',freq:{Test: 38,ODIs:70, T20Is:16 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 43,ODIs:33, T20Is:34 }},
    {State:'Econ',freq:{Test: 4,ODIs:6, T20Is:8}},
    {State:'SR',freq:{Test: 67,ODIs:35, T20Is:26 }},
    {State:'4W',freq:{Test: 5,ODIs:5, T20Is:0 }},
    {State:'5w',freq:{Test: 1,ODIs:1, T20Is:0 }}
];

var LokeshR=[
    {State:'Mat',freq:{Test: 2, ODIs:6, T20Is:1}},
    {State:'Inns',freq:{Test: 4, ODIs:5, T20Is:1}},
    {State:'Balls',freq:{Test: 348,ODIs:286, T20Is:24}},
    {State:'Runs',freq:{Test: 187,ODIs:189, T20Is:34 }},
    {State:'Wkts',freq:{Test: 9,ODIs:10, T20Is:1 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 21,ODIs:19, T20Is:34 }},
    {State:'Econ',freq:{Test: 3,ODIs:4, T20Is:9 }},
    {State:'SR',freq:{Test: 39,ODIs:29, T20Is:24 }},
    {State:'4W',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var WPorterfield=[
    {State:'Mat',freq:{Test: 25, ODIs:49, T20Is:7}},
    {State:'Inns',freq:{Test: 48, ODIs:48, T20Is:77}},
    {State:'Balls',freq:{Test: 4671,ODIs:2465, T20Is:142}},
    {State:'Runs',freq:{Test: 2655,ODIs:2247, T20Is:250 }},
    {State:'Wkts',freq:{Test: 86,ODIs:91, T20Is:8 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 31,ODIs:25, T20Is:31 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:11 }},
    {State:'SR',freq:{Test: 54,ODIs:27, T20Is:18 }},
    {State:'4W',freq:{Test: 4,ODIs:6, T20Is:0 }},
    {State:'5w',freq:{Test: 2,ODIs:0, T20Is:0 }}
];

var KevinO=[
    {State:'Mat',freq:{Test: 17, ODIs:120, T20Is:26}},
    {State:'Inns',freq:{Test: 29, ODIs:120, T20Is:26}},
    {State:'Balls',freq:{Test: 3447,ODIs:5751, T20Is:566}},
    {State:'Runs',freq:{Test: 1866,ODIs:4981, T20Is:729 }},
    {State:'Wkts',freq:{Test: 44,ODIs:157, T20Is:34 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 42,ODIs:32, T20Is:21 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'SR',freq:{Test: 78,ODIs:37, T20Is:17 }},
    {State:'4W',freq:{Test: 2,ODIs:5, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:2, T20Is:0 }}
];

var GaryW=[
    {State:'Mat',freq:{Test: 77, ODIs:80, T20Is:14}},
    {State:'Inns',freq:{Test: 136, ODIs:78, T20Is:14}},
    {State:'Balls',freq:{Test: 14775,ODIs:3733, T20Is:278}},
    {State:'Runs',freq:{Test: 8051,ODIs:3563, T20Is:400 }},
    {State:'Wkts',freq:{Test: 218,ODIs:115, T20Is:8 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 37,ODIs:31, T20Is:50 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'SR',freq:{Test: 68,ODIs:32, T20Is:35 }},
    {State:'4W',freq:{Test: 8,ODIs:6, T20Is:0 }},
    {State:'5w',freq:{Test: 7,ODIs:0, T20Is:0 }}
];

var EdJoyce=[
    {State:'Mat',freq:{Test: 0, ODIs:4, T20Is:1}},
    {State:'Inns',freq:{Test: 0, ODIs:8, T20Is:1}},
    {State:'Balls',freq:{Test: 0,ODIs:627, T20Is:24}},
    {State:'Runs',freq:{Test: 0,ODIs:367, T20Is:8 }},
    {State:'Wkts',freq:{Test: 0,ODIs:11, T20Is:1 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:33, T20Is:8 }},
    {State:'Econ',freq:{Test: 0,ODIs:4, T20Is:2 }},
    {State:'SR',freq:{Test: 0,ODIs:57, T20Is:24 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var JohnMooney=[
    {State:'Mat',freq:{Test: 0, ODIs:20, T20Is:24}},
    {State:'Inns',freq:{Test: 0, ODIs:20, T20Is:24}},
    {State:'Balls',freq:{Test: 0,ODIs:1037, T20Is:535}},
    {State:'Runs',freq:{Test: 0,ODIs:811, T20Is:587 }},
    {State:'Wkts',freq:{Test: 0,ODIs:39, T20Is:33 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:27, T20Is:16 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:25, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:3, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var PStirling=[
    {State:'Mat',freq:{Test: 18, ODIs:70, T20Is:17}},
    {State:'Inns',freq:{Test: 31, ODIs:69, T20Is:17}},
    {State:'Balls',freq:{Test: 2718,ODIs:3392, T20Is:366}},
    {State:'Runs',freq:{Test: 1345,ODIs:2769, T20Is:408 }},
    {State:'Wkts',freq:{Test: 45,ODIs:70, T20Is:16 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 30,ODIs:40, T20Is:26 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 60,ODIs:48, T20Is:23 }},
    {State:'4W',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'5w',freq:{Test: 4,ODIs:0, T20Is:0 }}
];

var AndrewP=[
    {State:'Mat',freq:{Test: 34, ODIs:70, T20Is:1}},
    {State:'Inns',freq:{Test: 66, ODIs:68, T20Is:1}},
    {State:'Balls',freq:{Test: 5598,ODIs:3259, T20Is:18}},
    {State:'Runs',freq:{Test: 3378,ODIs:3219, T20Is:24 }},
    {State:'Wkts',freq:{Test: 94,ODIs:98, T20Is:1 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 36,ODIs:33, T20Is:24 }},
    {State:'Econ',freq:{Test: 4,ODIs:6, T20Is:8 }},
    {State:'SR',freq:{Test: 60,ODIs:33, T20Is:18 }},
    {State:'4W',freq:{Test: 4,ODIs:3, T20Is:0 }},
    {State:'5w',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var SThompson=[
    {State:'Mat',freq:{Test: 0, ODIs:6, T20Is:6}},
    {State:'Inns',freq:{Test: 0, ODIs:6, T20Is:6}},
    {State:'Balls',freq:{Test: 0,ODIs:324, T20Is:144}},
    {State:'Runs',freq:{Test: 0,ODIs:229, T20Is:174 }},
    {State:'Wkts',freq:{Test: 0,ODIs:10, T20Is:11 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:23, T20Is:16 }},
    {State:'Econ',freq:{Test: 0,ODIs:4, T20Is:7 }},
    {State:'SR',freq:{Test: 50,ODIs:32, T20Is:13 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:1 }}
];

var ABalbirnie=[
    {State:'Mat',freq:{Test: 22, ODIs:36, T20Is:10}},
    {State:'Inns',freq:{Test: 40, ODIs:34, T20Is:10}},
    {State:'Balls',freq:{Test: 5103,ODIs:1917, T20Is:228}},
    {State:'Runs',freq:{Test: 2715,ODIs:1511, T20Is:240 }},
    {State:'Wkts',freq:{Test: 76,ODIs:64, T20Is:16 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 28,ODIs:21, T20Is:19 }},
    {State:'Econ',freq:{Test: 36,ODIs:24, T20Is:15 }},
    {State:'SR',freq:{Test: 3,ODIs:5, T20Is:6 }},
    {State:'4W',freq:{Test: 67,ODIs:29, T20Is:14 }},
    {State:'5w',freq:{Test: 2,ODIs:2, T20Is:0 }}
];

var NBrien=[
    {State:'Mat',freq:{Test: 0, ODIs:59, T20Is:37}},
    {State:'Inns',freq:{Test: 0, ODIs:52, T20Is:33}},
    {State:'Balls',freq:{Test: 0,ODIs:1953, T20Is:606}},
    {State:'Runs',freq:{Test: 0,ODIs:1510, T20Is:714 }},
    {State:'Wkts',freq:{Test: 0,ODIs:63, T20Is:35 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:24, T20Is:20 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:31, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:1, T20Is:3 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var JAnderson=[
    {State:'Mat',freq:{Test: 0, ODIs:20, T20Is:20}},
    {State:'Inns',freq:{Test: 0, ODIs:16, T20Is:12}},
    {State:'Balls',freq:{Test: 0,ODIs:559, T20Is:171}},
    {State:'Runs',freq:{Test: 0,ODIs:490, T20Is:226 }},
    {State:'Wkts',freq:{Test: 0,ODIs:12, T20Is:6 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:41, T20Is:38 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:8 }},
    {State:'SR',freq:{Test: 0,ODIs:47, T20Is:29 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var RossTaylor=[
    {State:'Mat',freq:{Test: 345, ODIs:30, T20Is:30}},
    {State:'Inns',freq:{Test: 345, ODIs:26, T20Is:19}},
    {State:'Balls',freq:{Test: 345,ODIs:812, T20Is:228}},
    {State:'Runs',freq:{Test: 345,ODIs:704, T20Is:352 }},
    {State:'Wkts',freq:{Test: 345,ODIs:23, T20Is:8 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 345,ODIs:30, T20Is:44 }},
    {State:'Econ',freq:{Test: 345,ODIs:5, T20Is:9 }},
    {State:'SR',freq:{Test: 345,ODIs:35, T20Is:28 }},
    {State:'4W',freq:{Test: 345,ODIs:2, T20Is:0 }},
    {State:'5w',freq:{Test: 345,ODIs:0, T20Is:0 }}
];

var KaneWilliamson=[
    {State:'Mat',freq:{Test: 36, ODIs:68, T20Is:22}},
    {State:'Inns',freq:{Test: 68, ODIs:68, T20Is:22}},
    {State:'Balls',freq:{Test: 7355,ODIs:3359, T20Is:566}},
    {State:'Runs',freq:{Test: 4197,ODIs:2698, T20Is:352 }},
    {State:'Wkts',freq:{Test: 148,ODIs:134, T20Is:30 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 28,ODIs:21, T20Is:19 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 50,ODIs:25, T20Is:17 }},
    {State:'4W',freq:{Test: 8,ODIs:8, T20Is:0 }},
    {State:'5w',freq:{Test: 7,ODIs:5, T20Is:0 }}
];

var MartinGuptill=[
    {State:'Mat',freq:{Test: 4, ODIs:31, T20Is:18}},
    {State:'Inns',freq:{Test: 7, ODIs:31, T20Is:18}},
    {State:'Balls',freq:{Test: 906,ODIs:1566, T20Is:414}},
    {State:'Runs',freq:{Test: 460,ODIs:1447, T20Is:472 }},
    {State:'Wkts',freq:{Test: 19,ODIs:53, T20Is:23 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 2248,ODIs:27, T20Is:21 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:7 }},
    {State:'SR',freq:{Test: 48,ODIs:30, T20Is:18 }},
    {State:'4W',freq:{Test: 1,ODIs:3, T20Is:0 }},
    {State:'5w',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var CoreyAnderson=[
    {State:'Mat',freq:{Test: 0, ODIs:0, T20Is:5}},
    {State:'Inns',freq:{Test: 0, ODIs:0, T20Is:5}},
    {State:'Balls',freq:{Test: 0,ODIs:0, T20Is:110}},
    {State:'Runs',freq:{Test: 0,ODIs:0, T20Is:188 }},
    {State:'Wkts',freq:{Test: 0,ODIs:0, T20Is:5 }},
    {State:'BBi',freq:{Test: 0,ODIs:0, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:0, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:0, T20Is:38 }},
    {State:'Econ',freq:{Test: 0,ODIs:0, T20Is:10 }},
    {State:'SR',freq:{Test: 0,ODIs:0, T20Is:22 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var TomLatham=[
    {State:'Mat',freq:{Test: 0, ODIs:24, T20Is:10}},
    {State:'Inns',freq:{Test: 0, ODIs:24, T20Is:10}},
    {State:'Balls',freq:{Test: 0,ODIs:1162, T20Is:210}},
    {State:'Runs',freq:{Test: 0,ODIs:1056, T20Is:212 }},
    {State:'Wkts',freq:{Test: 0,ODIs:36, T20Is:14 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:29, T20Is:15 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:6 }},
    {State:'SR',freq:{Test: 0,ODIs:32, T20Is:15 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var JamesNeesham=[
    {State:'Mat',freq:{Test: 31, ODIs:38, T20Is:7}},
    {State:'Inns',freq:{Test: 58, ODIs:37, T20Is:7}},
    {State:'Balls',freq:{Test: 6557,ODIs:1952, T20Is:168}},
    {State:'Runs',freq:{Test: 3039,ODIs:1527, T20Is:269 }},
    {State:'Wkts',freq:{Test: 118,ODIs:64, T20Is:8 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 26,ODIs:24, T20Is:34 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:10 }},
    {State:'SR',freq:{Test: 56,ODIs:31, T20Is:21 }},
    {State:'4W',freq:{Test: 4,ODIs:1, T20Is:1 }},
    {State:'5w',freq:{Test: 5,ODIs:3, T20Is:0 }}
];

var ColinMunro=[
    {State:'Mat',freq:{Test: 68, ODIs:13, T20Is:1}},
    {State:'Inns',freq:{Test: 130, ODIs:13, T20Is:1}},
    {State:'Balls',freq:{Test: 15952,ODIs:720, T20Is:6}},
    {State:'Runs',freq:{Test: 8410,ODIs:592, T20Is:15 }},
    {State:'Wkts',freq:{Test: 256,ODIs:17, T20Is:0 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 33,ODIs:35, T20Is:0 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:15 }},
    {State:'SR',freq:{Test: 62,ODIs:42, T20Is:0 }},
    {State:'4W',freq:{Test: 9,ODIs:1, T20Is:0 }},
    {State:'5w',freq:{Test: 10,ODIs:0, T20Is:0 }}
];

var LukeRonchi=[
    {State:'Mat',freq:{Test: 1, ODIs:67, T20Is:24}},
    {State:'Inns',freq:{Test: 2, ODIs:65, T20Is:24}},
    {State:'Balls',freq:{Test: 166,ODIs:3116, T20Is:515}},
    {State:'Runs',freq:{Test: 98,ODIs:2858, T20Is:684 }},
    {State:'Wkts',freq:{Test: 6,ODIs:95, T20Is:36 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 16,ODIs:30, T20Is:19 }},
    {State:'Econ',freq:{Test: 4,ODIs:6, T20Is:8 }},
    {State:'SR',freq:{Test: 28,ODIs:33, T20Is:14 }},
    {State:'4W',freq:{Test: 1,ODIs:4, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:1 }}
];

var HenryNicholls=[
    {State:'Mat',freq:{Test: 6, ODIs:14, T20Is:25}},
    {State:'Inns',freq:{Test: 9, ODIs:14, T20Is:23}},
    {State:'Balls',freq:{Test: 880,ODIs:603, T20Is:476}},
    {State:'Runs',freq:{Test: 460,ODIs:523, T20Is:592 }},
    {State:'Wkts',freq:{Test: 6,ODIs:21, T20Is:39 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 77,ODIs:25, T20Is:15 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 147,ODIs:28, T20Is:12 }},
    {State:'4W',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var MitchellSantner=[
    {State:'Mat',freq:{Test: 0, ODIs:0, T20Is:1}},
    {State:'Inns',freq:{Test: 0, ODIs:0, T20Is:1}},
    {State:'Balls',freq:{Test: 0,ODIs:0, T20Is:21}},
    {State:'Runs',freq:{Test: 0,ODIs:0, T20Is:40 }},
    {State:'Wkts',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'BBi',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'BBM',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Ave',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Econ',freq:{Test: 0,ODIs:0, T20Is:11 }},
    {State:'SR',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var deGrandhomme=[
    {State:'Mat',freq:{Test: 8, ODIs:4, T20Is:5}},
    {State:'Inns',freq:{Test: 11, ODIs:1, T20Is:4}},
    {State:'Balls',freq:{Test: 846,ODIs:12, T20Is:66}},
    {State:'Runs',freq:{Test: 506,ODIs:9, T20Is:71 }},
    {State:'Wkts',freq:{Test: 8,ODIs:0, T20Is:2 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 63,ODIs:0, T20Is:36 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 106,ODIs:0, T20Is:33 }},
    {State:'4W',freq:{Test: 8,ODIs:8, T20Is:0 }},
    {State:'5w',freq:{Test: 7,ODIs:5, T20Is:0 }}
];

var MohammadHa=[
    {State:'Mat',freq:{Test: 36, ODIs:179, T20Is:54}},
    {State:'Inns',freq:{Test: 51, ODIs:179, T20Is:53}},
    {State:'Balls',freq:{Test: 5990,ODIs:8951, T20Is:1139}},
    {State:'Runs',freq:{Test: 3239,ODIs:7089, T20Is:1527 }},
    {State:'Wkts',freq:{Test: 78,ODIs:232, T20Is:42 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 42,ODIs:30, T20Is:36 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:8 }},
    {State:'SR',freq:{Test: 78,ODIs:39, T20Is:27 }},
    {State:'4W',freq:{Test: 4,ODIs:6, T20Is:1 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var MisbahHaq=[
    {State:'Mat',freq:{Test: 10, ODIs:56, T20Is:11}},
    {State:'Inns',freq:{Test: 17, ODIs:56, T20Is:11}},
    {State:'Balls',freq:{Test: 1506,ODIs:2342, T20Is:220}},
    {State:'Runs',freq:{Test: 822,ODIs:2294, T20Is:275 }},
    {State:'Wkts',freq:{Test: 15,ODIs:63, T20Is:8 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 55,ODIs:36, T20Is:34 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:8 }},
    {State:'SR',freq:{Test: 100,ODIs:37, T20Is:28 }},
    {State:'4W',freq:{Test: 0,ODIs:4, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var KamranAkmal=[
    {State:'Mat',freq:{Test: 14, ODIs:4, T20Is:0}},
    {State:'Inns',freq:{Test: 26, ODIs:4, T20Is:0}},
    {State:'Balls',freq:{Test: 3321,ODIs:222, T20Is:0}},
    {State:'Runs',freq:{Test: 1737,ODIs:151, T20Is:0 }},
    {State:'Wkts',freq:{Test: 52,ODIs:5, T20Is:300 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:0 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:0 }},
    {State:'Ave',freq:{Test: 33,ODIs:30, T20Is:0 }},
    {State:'Econ',freq:{Test: 3,ODIs:4, T20Is:0 }},
    {State:'SR',freq:{Test: 64,ODIs:44, T20Is:0 }},
    {State:'4W',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'5w',freq:{Test: 37,ODIs:0, T20Is:0 }}
];

var AzharAli=[
    {State:'Mat',freq:{Test: 4, ODIs:29, T20Is:15}},
    {State:'Inns',freq:{Test: 8, ODIs:28, T20Is:13}},
    {State:'Balls',freq:{Test: 738,ODIs:1269, T20Is:269}},
    {State:'Runs',freq:{Test: 565,ODIs:1203, T20Is:308 }},
    {State:'Wkts',freq:{Test: 7,ODIs:43, T20Is:10 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 81,ODIs:28, T20Is:31 }},
    {State:'Econ',freq:{Test: 5,ODIs:6, T20Is:7 }},
    {State:'SR',freq:{Test: 106,ODIs:30, T20Is:27 }},
    {State:'4W',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var SarfrazAhmed=[
    {State:'Mat',freq:{Test: 3, ODIs:14, T20Is:0}},
    {State:'Inns',freq:{Test: 4, ODIs:14, T20Is:0}},
    {State:'Balls',freq:{Test: 456,ODIs:737, T20Is:0}},
    {State:'Runs',freq:{Test: 228,ODIs:731, T20Is:0 }},
    {State:'Wkts',freq:{Test: 2,ODIs:20, T20Is:0 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:0 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:0 }},
    {State:'Ave',freq:{Test: 114,ODIs:37, T20Is:0 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:0 }},
    {State:'SR',freq:{Test: 228,ODIs:37, T20Is:0 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var BabarAzam=[
    {State:'Mat',freq:{Test: 108, ODIs:121, T20Is:56}},
    {State:'Inns',freq:{Test: 198, ODIs:121, T20Is:55}},
    {State:'Balls',freq:{Test: 22177,ODIs:6109, T20Is:1173}},
    {State:'Runs',freq:{Test: 11122,ODIs:5364, T20Is:1491 }},
    {State:'Wkts',freq:{Test: 386,ODIs:178, T20Is:65 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 29,ODIs:30, T20Is:23 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 57,ODIs:34, T20Is:18 }},
    {State:'4W',freq:{Test: 14,ODIs:9, T20Is:1 }},
    {State:'5w',freq:{Test: 15,ODIs:1, T20Is:0 }}
];

var SharjeelKhan=[
    {State:'Mat',freq:{Test: 10, ODIs:19, T20Is:2}},
    {State:'Inns',freq:{Test: 19, ODIs:19, T20Is:2}},
    {State:'Balls',freq:{Test: 1863,ODIs:997, T20Is:42}},
    {State:'Runs',freq:{Test: 1057,ODIs:896, T20Is:62 }},
    {State:'Wkts',freq:{Test: 26,ODIs:21, T20Is:5 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 41,ODIs:43, T20Is:13 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:9 }},
    {State:'SR',freq:{Test: 72,ODIs:47, T20Is:8 }},
    {State:'4W',freq:{Test: 0,ODIs:1, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var AhmedShehzad=[
    {State:'Mat',freq:{Test: 36, ODIs:69, T20Is:21}},
    {State:'Inns',freq:{Test: 66, ODIs:67, T20Is:21}},
    {State:'Balls',freq:{Test: 6412,ODIs:3550, T20Is:480}},
    {State:'Runs',freq:{Test: 3800,ODIs:2996, T20Is:583 }},
    {State:'Wkts',freq:{Test: 125,ODIs:102, T20Is:27 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 30,ODIs:29, T20Is:22 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 51,ODIs:35, T20Is:17 }},
    {State:'4W',freq:{Test: 6,ODIs:4, T20Is:0 }},
    {State:'5w',freq:{Test: 5,ODIs:2, T20Is:0 }}
];


var AsadShafiq=[
    {State:'Mat',freq:{Test: 8, ODIs:3, T20Is:25}},
    {State:'Inns',freq:{Test: 16, ODIs:31, T20Is:25}},
    {State:'Balls',freq:{Test: 1530,ODIs:1532, T20Is:534}},
    {State:'Runs',freq:{Test: 752,ODIs:1521, T20Is:766 }},
    {State:'Wkts',freq:{Test: 21,ODIs:43, T20Is:30 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 36,ODIs:35, T20Is:26 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'SR',freq:{Test: 73,ODIs:36, T20Is:18 }},
    {State:'4W',freq:{Test: 1,ODIs:0, T20Is:1 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var ShoaibMalik=[
    {State:'Mat',freq:{Test: 3, ODIs:1, T20Is:0}},
    {State:'Inns',freq:{Test: 6, ODIs:1, T20Is:0}},
    {State:'Balls',freq:{Test: 404,ODIs:42, T20Is:0}},
    {State:'Runs',freq:{Test: 271,ODIs:34, T20Is:0 }},
    {State:'Wkts',freq:{Test: 14,ODIs:1, T20Is:0 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:0 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:0 }},
    {State:'Ave',freq:{Test: 19,ODIs:34, T20Is:0 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:0 }},
    {State:'SR',freq:{Test: 29,ODIs:42, T20Is:0 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var YounisKhan=[
    {State:'Mat',freq:{Test: 128, ODIs:194, T20Is:19}},
    {State:'Inns',freq:{Test: 240, ODIs:191, T20Is:19}},
    {State:'Balls',freq:{Test: 28042,ODIs:9584, T20Is:422}},
    {State:'Runs',freq:{Test: 13787,ODIs:7861, T20Is:552 }},
    {State:'Wkts',freq:{Test: 497,ODIs:269, T20Is:18 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 28,ODIs:29, T20Is:31 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'SR',freq:{Test: 56,ODIs:36, T20Is:23 }},
    {State:'4W',freq:{Test: 8,ODIs:8, T20Is:0 }},
    {State:'5w',freq:{Test: 7,ODIs:5, T20Is:0 }}
];

var HashimAmla=[
    {State:'Mat',freq:{Test: 13, ODIs:57, T20Is:13}},
    {State:'Inns',freq:{Test: 25, ODIs:57, T20Is:13}},
    {State:'Balls',freq:{Test: 287,ODIs:2789, T20Is:2659}},
    {State:'Runs',freq:{Test: 1536,ODIs:2687, T20Is:356 }},
    {State:'Wkts',freq:{Test: 41,ODIs:88, T20Is:16 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 37,ODIs:31, T20Is:22 }},
    {State:'Econ',freq:{Test: 4,ODIs:6, T20Is:7 }},
    {State:'SR',freq:{Test: 65,ODIs:32, T20Is:18 }},
    {State:'4W',freq:{Test: 1,ODIs:3, T20Is:0 }},
    {State:'5w',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var QuintondeKock=[
    {State:'Mat',freq:{Test: 18, ODIs:63, T20Is:8}},
    {State:'Inns',freq:{Test: 34, ODIs:62, T20Is:8}},
    {State:'Balls',freq:{Test: 2950,ODIs:3024, T20Is:162}},
    {State:'Runs',freq:{Test: 1530,ODIs:2813, T20Is:253 }},
    {State:'Wkts',freq:{Test: 50,ODIs:89, T20Is:7 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 31,ODIs:32, T20Is:36 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'SR',freq:{Test: 59,ODIs:34, T20Is:23 }},
    {State:'4W',freq:{Test: 1,ODIs:8, T20Is:0 }},
    {State:'5w',freq:{Test: 2,ODIs:2, T20Is:0 }}
];

var FafuPlessis=[
    {State:'Mat',freq:{Test: 3, ODIs:1, T20Is:4}},
    {State:'Inns',freq:{Test: 5, ODIs:1, T20Is:4}},
    {State:'Balls',freq:{Test: 526,ODIs:48, T20Is:84}},
    {State:'Runs',freq:{Test: 298,ODIs:70, T20Is:102 }},
    {State:'Wkts',freq:{Test: 7,ODIs:2, T20Is:4 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 43,ODIs:35, T20Is:25 }},
    {State:'Econ',freq:{Test: 4,ODIs:9, T20Is:7 }},
    {State:'SR',freq:{Test: 75,ODIs:24, T20Is:21 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var ABdeVilliers=[
    {State:'Mat',freq:{Test: 10, ODIs:49, T20Is:23}},
    {State:'Inns',freq:{Test: 18, ODIs:47, T20Is:21}},
    {State:'Balls',freq:{Test: 2544,ODIs:2452, T20Is:414}},
    {State:'Runs',freq:{Test: 1629,ODIs:2292, T20Is:547 }},
    {State:'Wkts',freq:{Test: 38,ODIs:70, T20Is:16 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 43,ODIs:33, T20Is:34 }},
    {State:'Econ',freq:{Test: 4,ODIs:6, T20Is:8}},
    {State:'SR',freq:{Test: 67,ODIs:35, T20Is:26 }},
    {State:'4W',freq:{Test: 5,ODIs:5, T20Is:0 }},
    {State:'5w',freq:{Test: 1,ODIs:1, T20Is:0 }}
];

var DavidMiller=[
    {State:'Mat',freq:{Test: 2, ODIs:6, T20Is:1}},
    {State:'Inns',freq:{Test: 4, ODIs:5, T20Is:1}},
    {State:'Balls',freq:{Test: 348,ODIs:286, T20Is:24}},
    {State:'Runs',freq:{Test: 187,ODIs:189, T20Is:34 }},
    {State:'Wkts',freq:{Test: 9,ODIs:10, T20Is:1 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 21,ODIs:19, T20Is:34 }},
    {State:'Econ',freq:{Test: 3,ODIs:4, T20Is:9 }},
    {State:'SR',freq:{Test: 39,ODIs:29, T20Is:24 }},
    {State:'4W',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var JeanPaulDuminy=[
    {State:'Mat',freq:{Test: 25, ODIs:49, T20Is:7}},
    {State:'Inns',freq:{Test: 48, ODIs:48, T20Is:77}},
    {State:'Balls',freq:{Test: 4671,ODIs:2465, T20Is:142}},
    {State:'Runs',freq:{Test: 2655,ODIs:2247, T20Is:250 }},
    {State:'Wkts',freq:{Test: 86,ODIs:91, T20Is:8 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 31,ODIs:25, T20Is:31 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:11 }},
    {State:'SR',freq:{Test: 54,ODIs:27, T20Is:18 }},
    {State:'4W',freq:{Test: 4,ODIs:6, T20Is:0 }},
    {State:'5w',freq:{Test: 2,ODIs:0, T20Is:0 }}
];

var WayneParnell=[
    {State:'Mat',freq:{Test: 17, ODIs:120, T20Is:26}},
    {State:'Inns',freq:{Test: 29, ODIs:120, T20Is:26}},
    {State:'Balls',freq:{Test: 3447,ODIs:5751, T20Is:566}},
    {State:'Runs',freq:{Test: 1866,ODIs:4981, T20Is:729 }},
    {State:'Wkts',freq:{Test: 44,ODIs:157, T20Is:34 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 42,ODIs:32, T20Is:21 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'SR',freq:{Test: 78,ODIs:37, T20Is:17 }},
    {State:'4W',freq:{Test: 2,ODIs:5, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:2, T20Is:0 }}
];

var ChrisMorris=[
    {State:'Mat',freq:{Test: 77, ODIs:80, T20Is:14}},
    {State:'Inns',freq:{Test: 136, ODIs:78, T20Is:14}},
    {State:'Balls',freq:{Test: 14775,ODIs:3733, T20Is:278}},
    {State:'Runs',freq:{Test: 8051,ODIs:3563, T20Is:400 }},
    {State:'Wkts',freq:{Test: 218,ODIs:115, T20Is:8 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 37,ODIs:31, T20Is:50 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'SR',freq:{Test: 68,ODIs:32, T20Is:35 }},
    {State:'4W',freq:{Test: 8,ODIs:6, T20Is:0 }},
    {State:'5w',freq:{Test: 7,ODIs:0, T20Is:0 }}
];

var MangalisoMosehle=[
    {State:'Mat',freq:{Test: 0, ODIs:4, T20Is:1}},
    {State:'Inns',freq:{Test: 0, ODIs:8, T20Is:1}},
    {State:'Balls',freq:{Test: 0,ODIs:627, T20Is:24}},
    {State:'Runs',freq:{Test: 0,ODIs:367, T20Is:8 }},
    {State:'Wkts',freq:{Test: 0,ODIs:11, T20Is:1 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:33, T20Is:8 }},
    {State:'Econ',freq:{Test: 0,ODIs:4, T20Is:2 }},
    {State:'SR',freq:{Test: 0,ODIs:57, T20Is:24 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var StephenCook=[
    {State:'Mat',freq:{Test: 0, ODIs:20, T20Is:24}},
    {State:'Inns',freq:{Test: 0, ODIs:20, T20Is:24}},
    {State:'Balls',freq:{Test: 0,ODIs:1037, T20Is:535}},
    {State:'Runs',freq:{Test: 0,ODIs:811, T20Is:587 }},
    {State:'Wkts',freq:{Test: 0,ODIs:39, T20Is:33 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:27, T20Is:16 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:25, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:3, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var TembaBavuma=[
    {State:'Mat',freq:{Test: 18, ODIs:70, T20Is:17}},
    {State:'Inns',freq:{Test: 31, ODIs:69, T20Is:17}},
    {State:'Balls',freq:{Test: 2718,ODIs:3392, T20Is:366}},
    {State:'Runs',freq:{Test: 1345,ODIs:2769, T20Is:408 }},
    {State:'Wkts',freq:{Test: 45,ODIs:70, T20Is:16 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 30,ODIs:40, T20Is:26 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 60,ODIs:48, T20Is:23 }},
    {State:'4W',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'5w',freq:{Test: 4,ODIs:0, T20Is:0 }}
];


var RegisChakabva=[
    {State:'Mat',freq:{Test: 4, ODIs:29, T20Is:14}},
    {State:'Inns',freq:{Test: 8, ODIs:28, T20Is:14}},
    {State:'Balls',freq:{Test: 623,ODIs:1302, T20Is:306}},
    {State:'Runs',freq:{Test: 459,ODIs:1206, T20Is:405 }},
    {State:'Wkts',freq:{Test: 12,ODIs:33, T20Is:20 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 38,ODIs:37, T20Is:20 }},
    {State:'Econ',freq:{Test: 5,ODIs:6, T20Is:8 }},
    {State:'SR',freq:{Test: 52,ODIs:40, T20Is:15 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var PeterMoor=[
    {State:'Mat',freq:{Test: 3, ODIs:0, T20Is:0}},
    {State:'Inns',freq:{Test: 6, ODIs:0, T20Is:0}},
    {State:'Balls',freq:{Test: 368,ODIs:0, T20Is:0}},
    {State:'Runs',freq:{Test: 250,ODIs:0, T20Is:0 }},
    {State:'Wkts',freq:{Test: 12,ODIs:0, T20Is:0 }},
    {State:'BBi',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'BBM',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'Ave',freq:{Test: 21,ODIs:0, T20Is:0 }},
    {State:'Econ',freq:{Test: 4,ODIs:0, T20Is:0 }},
    {State:'SR',freq:{Test: 31,ODIs:0, T20Is:0 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var ChamuChibhabha=[
    {State:'Mat',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Inns',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Balls',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'Runs',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'Wkts',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var EltonChigumbura=[
    {State:'Mat',freq:{Test: 2, ODIs:4, T20Is:0}},
    {State:'Inns',freq:{Test: 2, ODIs:4, T20Is:0}},
    {State:'Balls',freq:{Test: 168,ODIs:171, T20Is:0}},
    {State:'Runs',freq:{Test: 103,ODIs:186, T20Is:0 }},
    {State:'Wkts',freq:{Test: 3,ODIs:2, T20Is:0 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:0 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:0 }},
    {State:'Ave',freq:{Test: 34,ODIs:93, T20Is:0 }},
    {State:'Econ',freq:{Test: 3,ODIs:7, T20Is:0 }},
    {State:'SR',freq:{Test: 56,ODIs:86, T20Is:0 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var TarisaiMusakanda=[
    {State:'Mat',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Inns',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Balls',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'Runs',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'Wkts',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var SikandarRaza=[
    {State:'Mat',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Inns',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Balls',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'Runs',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'Wkts',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var SeanWilliams=[
    {State:'Mat',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Inns',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Balls',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'Runs',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'Wkts',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var VusiSibanda=[
    {State:'Mat',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Inns',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Balls',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'Runs',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'Wkts',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var SolomonMire=[
    {State:'Mat',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Inns',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Balls',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'Runs',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'Wkts',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var HamiltonMasakadza=[
    {State:'Mat',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Inns',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Balls',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'Runs',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'Wkts',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var CraigErvine=[
    {State:'Mat',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Inns',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Balls',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'Runs',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'Wkts',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var ShimronHetmyer=[
    {State:'Mat',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Inns',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Balls',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'Runs',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'Wkts',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var ChadwickWalton=[
    {State:'Mat',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Inns',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Balls',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'Runs',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'Wkts',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var KieronPollard=[
    {State:'Mat',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Inns',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Balls',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'Runs',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'Wkts',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var LendlSimmons=[
    {State:'Mat',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Inns',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Balls',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'Runs',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'Wkts',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var ChrisGayle=[
    {State:'Mat',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Inns',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Balls',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'Runs',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'Wkts',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var KraiggBrathwaite=[
    {State:'Mat',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Inns',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Balls',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'Runs',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'Wkts',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var MarlonSamuels=[
    {State:'Mat',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Inns',freq:{Test: 0, ODIs:21, T20Is:13}},
    {State:'Balls',freq:{Test: 0,ODIs:1085, T20Is:288}},
    {State:'Runs',freq:{Test: 0,ODIs:829, T20Is:369 }},
    {State:'Wkts',freq:{Test: 0,ODIs:26, T20Is:17 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:32, T20Is:22 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:41, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var KieranPowell=[
    {State:'Mat',freq:{Test: 20, ODIs:40, T20Is:16}},
    {State:'Inns',freq:{Test: 35, ODIs:39, T20Is:16}},
    {State:'Balls',freq:{Test: 3710,ODIs:2005, T20Is:362}},
    {State:'Runs',freq:{Test: 2137,ODIs:1710, T20Is:498 }},
    {State:'Wkts',freq:{Test: 87,ODIs:65, T20Is:22 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 24,ODIs:26, T20Is:16 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:9 }},
    {State:'SR',freq:{Test: 42,ODIs:31, T20Is:42 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var RostonChase=[
    {State:'Mat',freq:{Test: 4, ODIs:29, T20Is:14}},
    {State:'Inns',freq:{Test: 8, ODIs:28, T20Is:14}},
    {State:'Balls',freq:{Test: 623,ODIs:1302, T20Is:306}},
    {State:'Runs',freq:{Test: 459,ODIs:1206, T20Is:405 }},
    {State:'Wkts',freq:{Test: 12,ODIs:33, T20Is:20 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 38,ODIs:37, T20Is:20 }},
    {State:'Econ',freq:{Test: 5,ODIs:6, T20Is:8 }},
    {State:'SR',freq:{Test: 52,ODIs:40, T20Is:15 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var CarlosBrathwaite=[
    {State:'Mat',freq:{Test: 14, ODIs:18, T20Is:12}},
    {State:'Inns',freq:{Test: 26, ODIs:17, T20Is:12}},
    {State:'Balls',freq:{Test: 2826,ODIs:868, T20Is:268}},
    {State:'Runs',freq:{Test: 1774,ODIs:773, T20Is:304 }},
    {State:'Wkts',freq:{Test: 38,ODIs:19, T20Is:21 }},
    {State:'BBi',freq:{Test: 19,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 21,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 47,ODIs:41, T20Is:15 }},
    {State:'Econ',freq:{Test: 4,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 74,ODIs:46, T20Is:13 }},
    {State:'4W',freq:{Test: 2,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var KusalPerera=[
    {State:'Mat',freq:{Test: 25, ODIs:49, T20Is:7}},
    {State:'Inns',freq:{Test: 48, ODIs:48, T20Is:77}},
    {State:'Balls',freq:{Test: 4671,ODIs:2465, T20Is:142}},
    {State:'Runs',freq:{Test: 2655,ODIs:2247, T20Is:250 }},
    {State:'Wkts',freq:{Test: 86,ODIs:91, T20Is:8 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 31,ODIs:25, T20Is:31 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:11 }},
    {State:'SR',freq:{Test: 54,ODIs:27, T20Is:18 }},
    {State:'4W',freq:{Test: 4,ODIs:6, T20Is:0 }},
    {State:'5w',freq:{Test: 2,ODIs:0, T20Is:0 }}
];

var LahiruThirimanne=[
    {State:'Mat',freq:{Test: 17, ODIs:120, T20Is:26}},
    {State:'Inns',freq:{Test: 29, ODIs:120, T20Is:26}},
    {State:'Balls',freq:{Test: 3447,ODIs:5751, T20Is:566}},
    {State:'Runs',freq:{Test: 1866,ODIs:4981, T20Is:729 }},
    {State:'Wkts',freq:{Test: 44,ODIs:157, T20Is:34 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 42,ODIs:32, T20Is:21 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:8 }},
    {State:'SR',freq:{Test: 78,ODIs:37, T20Is:17 }},
    {State:'4W',freq:{Test: 2,ODIs:5, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:2, T20Is:0 }}
];

var AngeloMathews=[
    {State:'Mat',freq:{Test: 77, ODIs:80, T20Is:14}},
    {State:'Inns',freq:{Test: 136, ODIs:78, T20Is:14}},
    {State:'Balls',freq:{Test: 14775,ODIs:3733, T20Is:278}},
    {State:'Runs',freq:{Test: 8051,ODIs:3563, T20Is:400 }},
    {State:'Wkts',freq:{Test: 218,ODIs:115, T20Is:8 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 37,ODIs:31, T20Is:50 }},
    {State:'Econ',freq:{Test: 3,ODIs:6, T20Is:9 }},
    {State:'SR',freq:{Test: 68,ODIs:32, T20Is:35 }},
    {State:'4W',freq:{Test: 8,ODIs:6, T20Is:0 }},
    {State:'5w',freq:{Test: 7,ODIs:0, T20Is:0 }}
];

var DimuthKarunaratne=[
    {State:'Mat',freq:{Test: 0, ODIs:4, T20Is:1}},
    {State:'Inns',freq:{Test: 0, ODIs:8, T20Is:1}},
    {State:'Balls',freq:{Test: 0,ODIs:627, T20Is:24}},
    {State:'Runs',freq:{Test: 0,ODIs:367, T20Is:8 }},
    {State:'Wkts',freq:{Test: 0,ODIs:11, T20Is:1 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:33, T20Is:8 }},
    {State:'Econ',freq:{Test: 0,ODIs:4, T20Is:2 }},
    {State:'SR',freq:{Test: 0,ODIs:57, T20Is:24 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
];

var DanushkaGunathilaka=[
    {State:'Mat',freq:{Test: 0, ODIs:20, T20Is:24}},
    {State:'Inns',freq:{Test: 0, ODIs:20, T20Is:24}},
    {State:'Balls',freq:{Test: 0,ODIs:1037, T20Is:535}},
    {State:'Runs',freq:{Test: 0,ODIs:811, T20Is:587 }},
    {State:'Wkts',freq:{Test: 0,ODIs:39, T20Is:33 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:27, T20Is:16 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:25, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:3, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var DineshChandimal=[
    {State:'Mat',freq:{Test: 18, ODIs:70, T20Is:17}},
    {State:'Inns',freq:{Test: 31, ODIs:69, T20Is:17}},
    {State:'Balls',freq:{Test: 2718,ODIs:3392, T20Is:366}},
    {State:'Runs',freq:{Test: 1345,ODIs:2769, T20Is:408 }},
    {State:'Wkts',freq:{Test: 45,ODIs:70, T20Is:16 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 30,ODIs:40, T20Is:26 }},
    {State:'Econ',freq:{Test: 3,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 60,ODIs:48, T20Is:23 }},
    {State:'4W',freq:{Test: 0,ODIs:2, T20Is:0 }},
    {State:'5w',freq:{Test: 4,ODIs:0, T20Is:0 }}
];

var UpulTharanga=[
    {State:'Mat',freq:{Test: 34, ODIs:70, T20Is:1}},
    {State:'Inns',freq:{Test: 66, ODIs:68, T20Is:1}},
    {State:'Balls',freq:{Test: 5598,ODIs:3259, T20Is:18}},
    {State:'Runs',freq:{Test: 3378,ODIs:3219, T20Is:24 }},
    {State:'Wkts',freq:{Test: 94,ODIs:98, T20Is:1 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 36,ODIs:33, T20Is:24 }},
    {State:'Econ',freq:{Test: 4,ODIs:6, T20Is:8 }},
    {State:'SR',freq:{Test: 60,ODIs:33, T20Is:18 }},
    {State:'4W',freq:{Test: 4,ODIs:3, T20Is:0 }},
    {State:'5w',freq:{Test: 1,ODIs:0, T20Is:0 }}
];

var ChamaraKapugedera=[
    {State:'Mat',freq:{Test: 0, ODIs:6, T20Is:6}},
    {State:'Inns',freq:{Test: 0, ODIs:6, T20Is:6}},
    {State:'Balls',freq:{Test: 0,ODIs:324, T20Is:144}},
    {State:'Runs',freq:{Test: 0,ODIs:229, T20Is:174 }},
    {State:'Wkts',freq:{Test: 0,ODIs:10, T20Is:11 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:23, T20Is:16 }},
    {State:'Econ',freq:{Test: 0,ODIs:4, T20Is:7 }},
    {State:'SR',freq:{Test: 50,ODIs:32, T20Is:13 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:1 }}
];

var AselaGunaratne=[
    {State:'Mat',freq:{Test: 22, ODIs:36, T20Is:10}},
    {State:'Inns',freq:{Test: 40, ODIs:34, T20Is:10}},
    {State:'Balls',freq:{Test: 5103,ODIs:1917, T20Is:228}},
    {State:'Runs',freq:{Test: 2715,ODIs:1511, T20Is:240 }},
    {State:'Wkts',freq:{Test: 76,ODIs:64, T20Is:16 }},
    {State:'BBi',freq:{Test: 345,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 345,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 28,ODIs:21, T20Is:19 }},
    {State:'Econ',freq:{Test: 36,ODIs:24, T20Is:15 }},
    {State:'SR',freq:{Test: 3,ODIs:5, T20Is:6 }},
    {State:'4W',freq:{Test: 67,ODIs:29, T20Is:14 }},
    {State:'5w',freq:{Test: 2,ODIs:2, T20Is:0 }}
];

var DhananjayadeSilva=[
    {State:'Mat',freq:{Test: 0, ODIs:59, T20Is:37}},
    {State:'Inns',freq:{Test: 0, ODIs:52, T20Is:33}},
    {State:'Balls',freq:{Test: 0,ODIs:1953, T20Is:606}},
    {State:'Runs',freq:{Test: 0,ODIs:1510, T20Is:714 }},
    {State:'Wkts',freq:{Test: 0,ODIs:63, T20Is:35 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:24, T20Is:20 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:7 }},
    {State:'SR',freq:{Test: 0,ODIs:31, T20Is:17 }},
    {State:'4W',freq:{Test: 0,ODIs:1, T20Is:3 }},
    {State:'5w',freq:{Test: 0,ODIs:1, T20Is:0 }}
];

var NiroshanDickwella=[
    {State:'Mat',freq:{Test: 0, ODIs:20, T20Is:20}},
    {State:'Inns',freq:{Test: 0, ODIs:16, T20Is:12}},
    {State:'Balls',freq:{Test: 0,ODIs:559, T20Is:171}},
    {State:'Runs',freq:{Test: 0,ODIs:490, T20Is:226 }},
    {State:'Wkts',freq:{Test: 0,ODIs:12, T20Is:6 }},
    {State:'BBi',freq:{Test: 0,ODIs:1619, T20Is:1152 }},
    {State:'BBM',freq:{Test: 0,ODIs:1819, T20Is:1152 }},
    {State:'Ave',freq:{Test: 0,ODIs:41, T20Is:38 }},
    {State:'Econ',freq:{Test: 0,ODIs:5, T20Is:8 }},
    {State:'SR',freq:{Test: 0,ODIs:47, T20Is:29 }},
    {State:'4W',freq:{Test: 0,ODIs:0, T20Is:0 }},
    {State:'5w',freq:{Test: 0,ODIs:0, T20Is:0 }}
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
    case 'Jake Ball':
        return jake;
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


    case 'Matt Henry':
        return matth;
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
    case 'Kesrick Williams':
        return kesrickW;
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
    case 'Javed Ahmadi':
        return JavedA;
        break;


    case 'Aaron Finch':
        return aaron;
        break;
    case 'Shaun Marsh':
        return ShaunM;
        break;
    case 'Steven Smith':
        return StevenS;
        break;
    case 'Usman Khawaja':
        return UsmanK;
        break;
    case 'David Warner':
        return DavidW;
        break;
    case 'Mitchell Marsh':
        return MitchellM;
        break;
    case 'Glenn Maxwell':
        return GlennM;
        break;
    case 'Jhye Richardson':
        return JhyeR;
        break;
    case 'Moises Henriques':
        return MoisesH;
        break;
    case 'Travis Head':
        return TravisH;
        break;
    case 'John Hastings':
        return JohnH;
        break;


    case 'Mushfiqur Rahim':
        return MushfiqurR;
        break;
    case 'Tamim Iqbal':
        return TamimI;
        break;
    case 'Nasir Hossain':
        return NasirH;
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
    case 'Sabbir Rahman':
        return SabbirR;
        break;
    case 'Soumya Sarkar':
        return SoumyaS;
        break;
    case 'Liton Das':
        return LitonD;
        break;
    case 'Subashis Roy':
        return SubashisR;
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
    case 'Virat Kohli':
        return ViratK;
        break;
    case 'Yuvraj Singh':
        return YuvrajS;
        break;
    case 'Cheteshwar Pujara':
        return CheteshwarP;
        break;
    case 'Ravindra Jadeja':
        return RavindraJ;
        break;
    case 'Murali Vijay':
        return MuraliV;
        break;
    case 'Dinesh Karthik':
        return DineshK;
        break;
    case 'MS Dhoni':
        return MSDhoni;
        break;
    case 'Ajinkya Rahane':
        return AjinkyaR;
        break;
    case 'Lokesh Rahul':
        return LokeshR;
        break;
    case 'William Porterfield':
        return WPorterfield;
        break;
    case 'Kevin Brien':
        return KevinO;
        break;
    case 'Gary Wilson':
        return GaryW;
        break;
    case 'Ed Joyce':
        return EdJoyce;
        break;
    case 'John Mooney':
        return JohnMooney;
        break;
    case 'Paul Stirling':
        return PStirling;
        break;
    case 'Andrew Poynter':
        return AndrewP;
        break;
    case 'Stuart Thompson ':
        return SThompson ;
        break;
    case 'Andy Balbirnie':
        return ABalbirnie;
        break;
    case 'Niall OBrien':
        return NBrien;
        break;
    case 'John Anderson':
        return JAnderson;
        break;


    case 'Ross Taylor':
        return RossTaylor;
        break;
    case 'Kane Williamson':
        return KaneWilliamson;
        break;
    case 'Martin Guptill':
        return MartinGuptill;
        break;
    case 'Corey Anderson':
        return CoreyAnderson;
        break;
    case 'Tom Latham':
        return TomLatham;
        break;
    case 'James Neesham':
        return JamesNeesham;
        break;
    case 'Colin Munro':
        return ColinMunro;
        break;
    case 'Luke Ronchi':
        return LukeRonchi;
        break;
    case 'Henry Nicholls':
        return HenryNicholls;
        break;
    case 'Mitchell Santner':
        return MitchellSantner;
        break;
    case 'Colin Grandhomme':
        return deGrandhomme;
        break;
    case 'Mohammad Hafeez':
        return MohammadHa;
        break;
    case 'MisbahulHaq':
        return MisbahHaq;
        break;
    case 'Kamran Akmal':
        return KamranAkmal;
        break;
    case 'Azhar Ali':
        return AzharAli;
        break;
    case 'Sarfraz Ahmed':
        return SarfrazAhmed;
        break;
    case 'Babar Azam':
        return BabarAzam;
        break;
    case 'Sharjeel Khan':
        return SharjeelKhan;
        break;
    case 'Ahmed Shehzad':
        return AhmedShehzad;
        break;
    case 'Asad Shafiq':
        return AsadShafiq;
        break;
    case 'Shoaib Malik':
        return ShoaibMalik;
        break;
    case 'Younis Khan':
        return YounisKhan;
        break;
    case 'Hashim Amla':
        return HashimAmla;
        break;
    case 'Quinton deKock':
        return QuintondeKock;
        break;
    case 'Faf duPlessis':
        return FafuPlessis;
        break;
    case 'AB deVilliers':
        return ABdeVilliers;
        break;
    case 'David Miller':
        return DavidMiller;
        break;
    case 'Jean PaulDuminy':
        return JeanPaulDuminy;
        break;
    case 'Wayne Parnell':
        return WayneParnell;
        break;
    case 'Chris Morris':
        return ChrisMorris;
        break;
    case 'Mangaliso Mosehle':
        return MangalisoMosehle;
        break;
    case 'Stephen Cook':
        return StephenCook;
        break;
    case 'Temba Bavuma':
        return TembaBavuma;
        break;



    case 'Niroshan Dickwella':
        return NiroshanDickwella;
        break;
    case 'Dhananjaya deSilva':
        return DhananjayadeSilva;
        break;
    case 'Asela Gunaratne':
        return AselaGunaratne;
        break;
    case 'Chamara Kapugedera':
        return ChamaraKapugedera;
        break;
    case 'Upul Tharanga':
        return UpulTharanga;
        break;
    case 'Dinesh Chandimal':
        return DineshChandimal;
        break;
    case 'Danushka Gunathilaka':
        return DanushkaGunathilaka;
        break;
    case 'Dimuth Karunaratne':
        return DimuthKarunaratne;
        break;
    case 'Angelo Mathews':
        return AngeloMathews;
        break;
    case 'Lahiru Thirimanne':
        return LahiruThirimanne;
        break;
    case 'Kusal Perera':
        return KusalPerera;
        break;
    case 'Carlos Brathwaite':
        return CarlosBrathwaite;
        break;
    case 'Roston Chase':
        return RostonChase;
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


