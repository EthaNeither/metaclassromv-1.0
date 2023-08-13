//捷運對話的資料

const MRTdialogData = {
    // 題庫1
    questionBank1: [
      {
        question: "需要什麼服務?",
        options: [
          { id: 1, text: "請教我用售票機。", isCorrect: true },
          { id: 2, text: "我想要吃哈密瓜。", isCorrect: false },
        ],
      },
      {
        question: "好的請來這邊。",
        options: [
          { id: 1, text: "點選購票。", isCorrect: true },
          { id: 2, text: "點選問路。", isCorrect: false },
        ],
      },
      {
        question: "再選擇你的目的地(站)。",
        options: [
          { id: 1, text: "我想跑步。", isCorrect: false },
          { id: 2, text: "選擇站名。", isCorrect: true },
        ],
      },
      {
        question: "總共金額50元，是否列印收據?",
        options: [
          { id: 1, text: "點選否。", isCorrect: true },
          { id: 2, text: "很好吃。", isCorrect: false},
        ],
        anwser:"交易結束",
      },
    ],
  
    // 題庫2
    questionBank2: [
        {
            question: "需要什麼服務 ?",
            options: [
              { id: 1, text: "請教我加值。", isCorrect: true },
              { id: 2, text: "我是乖寶寶。", isCorrect: false },
            ],
            anwser:"好的請來這邊。",
          },
          {
            question: "先選擇你要的項目。",
            options: [
              { id: 1, text: "我要吃飯。", isCorrect: false },
              { id: 2, text: "點選加值。", isCorrect: true },
            ],
          },
          {
            question: "再選擇你的加值金額。",
            options: [
              { id: 1, text: "放入現金100元。", isCorrect: true },
              { id: 2, text: "我不喜歡跑步。", isCorrect: false },
            ],
          },
          {
            question: "是否列印收據?",
            options: [
              { id: 1, text: "點選否。", isCorrect: true },
              { id: 2, text: "你好嗎?", isCorrect: false },
            ],
            anwser:"交易結束",
          },
    ],
    
    // 題庫3
    questionBank3: [
        {
            question: "需要什麼服務 ? ",
            options: [
              { id: 1, text: "淡水怎麼去 ?", isCorrect: true },
              { id: 2, text: "我喜歡吃飯。", isCorrect: false },
            ],
          },
          {
            question: "搭乘紅線到最後一站。",
            options: [
              { id: 1, text: "捷運很乾淨。", isCorrect: false },
              { id: 2, text: "該怎麼走 ?", isCorrect: true },
            ],
          },
          {
            question: "下樓後在您右側。",
            options: [
              { id: 1, text: "好，謝謝。", isCorrect: true },
              { id: 2, text: "餅乾好吃。", isCorrect: false },
            ],
          },
    ],
  };
  
  export default MRTdialogData;