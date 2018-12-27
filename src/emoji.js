const emojis = [
    {
        title: 'Heart',
        title_cn: '心',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s01.png'
    },
    {
        title: 'Touch',
        title_cn: '摸头',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s02.png'
    },
    {
        title: 'Despise',
        title_cn: '鄙视',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s03.png'
    },
    {
        title: 'Cry',
        title_cn: '大哭',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s04.png'
    },
    {
        title: 'Laugh',
        title_cn: '大笑',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s05.png'
    },
    {
        title: 'Cake',
        title_cn: '蛋糕',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s06.png'
    },
    {
        title: 'ThrowSomeoneAKiss',
        title_cn: '飞吻',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s07.png'
    },
    {
        title: 'Anger',
        title_cn: '愤怒',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s08.png'
    },
    {
        title: 'Applause',
        title_cn: '鼓掌',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s09.png'
    },
    {
        title: 'Funny',
        title_cn: '搞怪',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s10.png'
    },
    {
        title: 'Shy',
        title_cn: '害羞',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s11.png'
    },
    {
        title: 'Sweat',
        title_cn: '流汗',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s12.png'
    },
    {
        title: 'Speechless',
        title_cn: '无语',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s13.png'
    },
    {
        title: 'Upset',
        title_cn: '懊恼',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s14.png'
    },
    {
        title: 'ShowTeeth',
        title_cn: '龇牙',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s15.png'
    },
    {
        title: 'Embarrassed',
        title_cn: '囧',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s16.png'
    },
    {
        title: 'Poor',
        title_cn: '可怜',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s17.png'
    },
    {
        title: 'Joseph',
        title_cn: '嘚瑟',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s18.png'
    },
    {
        title: 'Gift',
        title_cn: '礼盒',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s19.png'
    },
    {
        title: 'Smile',
        title_cn: '微笑',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s20.png'
    },
    {
        title: 'Rose',
        title_cn: '玫瑰',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s21.png'
    },
    {
        title: 'Kiss',
        title_cn: '亲',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s22.png'
    },
    {
        title: 'Beckoning',
        title_cn: '心动',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s23.png'
    },
    {
        title: 'FallIll',
        title_cn: '生病',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s24.png'
    },
    {
        title: 'Decline',
        title_cn: '衰',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s25.png'
    },
    {
        title: 'FallAsleep',
        title_cn: '睡着',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s26.png'
    },
    {
        title: 'Sigh',
        title_cn: '叹气',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s27.png'
    },
    {
        title: 'LadySmile',
        title_cn: '淑女笑',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s28.png'
    },
    {
        title: 'Spit',
        title_cn: '吐',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s29.png'
    },
    {
        title: 'Witty',
        title_cn: '俏皮',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s30.png'
    },
    {
        title: 'SmileLightly',
        title_cn: '抿嘴笑',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s31.png'
    },
    {
        title: 'Grievances',
        title_cn: '委屈',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s32.png'
    },
    {
        title: 'Handshake',
        title_cn: '握手',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s33.png'
    },
    {
        title: 'Doubt',
        title_cn: '疑惑',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s34.png'
    },
    {
        title: 'Insidious',
        title_cn: '阴险',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s35.png'
    },
    {
        title: 'Happy',
        title_cn: '开心',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s36.png'
    },
    {
        title: 'Halo',
        title_cn: '晕',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s37.png'
    },
    {
        title: 'ByeBye',
        title_cn: '再见',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s38.png'
    },
    {
        title: 'Good',
        title_cn: '大拇指',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s39.png'
    },
    {
        title: 'Irate',
        title_cn: '发怒',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s40.png'
    },
    {
        title: 'Arrogant',
        title_cn: '傲慢',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s41.png'
    },
    {
        title: 'ShutUp',
        title_cn: '闭嘴',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s42.png'
    },
    {
        title: 'Cool',
        title_cn: '酷',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s43.png'
    },
    {
        title: 'Bulb',
        title_cn: '灯泡',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s44.png'
    },
    {
        title: 'Tel',
        title_cn: '电话',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s45.png'
    },
    {
        title: 'InADaze',
        title_cn: '发呆',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s46.png'
    },
    {
        title: 'Yawn',
        title_cn: '哈欠',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s47.png'
    },
    {
        title: 'Miser',
        title_cn: '财迷',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s48.png'
    },
    {
        title: 'Struggle',
        title_cn: '奋斗',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s49.png'
    },
    {
        title: 'Crazy',
        title_cn: '抓狂',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s50.png'
    },
    {
        title: 'SuperSpeechless',
        title_cn: '超级无语',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s51.png'
    },
    {
        title: 'VeryHappy',
        title_cn: '超级开心',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s52.png'
    },
    {
        title: 'HeavyPressure',
        title_cn: '重压',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s53.png'
    },
    {
        title: 'Greedy',
        title_cn: '馋嘴',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s54.png'
    },
    {
        title: 'Shock',
        title_cn: '惊吓',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s55.png'
    },
    {
        title: 'Coffee',
        title_cn: '咖啡',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s56.png'
    },
    {
        title: 'Lovely',
        title_cn: '可爱',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s57.png'
    },
    {
        title: 'CoCo',
        title_cn: '可乐',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s58.png'
    },
    {
        title: 'Cold',
        title_cn: '感冒',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s59.png'
    },
    {
        title: 'HumanSkeleton',
        title_cn: '骷髅',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s60.png'
    },
    {
        title: 'SuperPoor',
        title_cn: '超级可怜',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s61.png'
    },
    {
        title: 'Rice',
        title_cn: '米饭',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s62.png'
    },
    {
        title: 'Orange',
        title_cn: '橙子',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s63.png'
    },
    {
        title: 'VeryAngry',
        title_cn: '火大',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s64.png'
    },
    {
        title: 'VeryGrievance',
        title_cn: '非常委屈',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s65.png'
    },
    {
        title: 'Win',
        title_cn: '胜利',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s66.png'
    },
    {
        title: 'Clock',
        title_cn: '时钟',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s67.png'
    },
    {
        title: 'Sun',
        title_cn: '太阳',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s68.png'
    },
    {
        title: 'Surprised',
        title_cn: '惊讶',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s69.png'
    },
    {
        title: 'PigHead',
        title_cn: '猪头',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s70.png'
    },
    {
        title: 'Football',
        title_cn: '足球',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s71.png'
    },
    {
        title: 'ScareStiff',
        title_cn: '吓傻',
        url: 'http://storage.jd.com/open-chat-web/dd_web/emoji/s72.png'
    }
];

export default emojis;
