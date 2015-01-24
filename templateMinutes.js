/* ———— 日付 ———— */
Date( 2015, 01, 24 );
/* ———— 場所 ———— */
Location( Room 3 );
/* ———— 出席者 ———— */
personPresent = [ "Aさん", "Bさん", "Cさん"];
/* ———— 資料 ———— */
material[0] = {
        name: "資料名1";
        path: "http://www.xxx.com/xxx1.html";
    }
material[1] = {
        name: "資料名2";
        path: "http://www.xxx.com/xxx2.html";
    }

/* ———— 議題1 ———— */
/* 議題を入力 */
Topic1 = new discussionTopic("議題1");
/* 内容（箇条書き） */
Topic1.content = [
        "内容1-1",
        "内容1-2",
        "内容1-3"
    ];
/* 決定事項 */
Topic1.decision = [
        "決定事項1-1",
        "決定事項1-2"
    ];
/* 宿題事項 */
Topic1.actionItem = [
    /*    期限       担当     宿題事項  */
        ["期限1-1", "担当1", "宿題事項1-1"],
        ["期限1-2", "担当2", "宿題事項1-2"]
    ];

/* ———— 議題2 ———— */
/* 議題を入力 */
Topic2 = new discussionTopic("議題1");
/* 内容（箇条書き） */
Topic2.content = [
        "内容2-1",
        "内容2-2",
        "内容2-3"
    ];
/* 決定事項 */
Topic2.decision = [
        "決定事項2-1",
        "決定事項2-2"
    ];
/* 宿題事項 */
Topic2.actionItem = [
    /*    期限       担当     宿題事項  */
        ["期限2-1", "担当3", "宿題事項2-1"],
        ["期限2-2", "担当4", "宿題事項2-2"]
    ];


/* ———— 追記 ———— */
