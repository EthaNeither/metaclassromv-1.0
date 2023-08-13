//超市對話的資料

const SupermarketdialogData = {
    // 題庫1
    questionBank1: [
      {
        question: "需要找什麼商品?",
        options: [
          { id: 1, text: "我想要雞蛋。", isCorrect: true },
          { id: 2, text: "他討厭蘋果。", isCorrect: false },
        ],
      },
      {
        question: "在最左邊那排。",
        options: [
          { id: 1, text: "我還需要牛奶。", isCorrect: true },
          { id: 2, text: "牛奶好喝。", isCorrect: false },
        ],
      },
      {
        question: "一樣在最左邊。",
        options: [
          { id: 1, text: "不客氣。", isCorrect: false },
          { id: 2, text: "好，謝謝。", isCorrect: true },
        ],
      },
    ],
  
    // 題庫2
    questionBank2: [
        {
            question: "請問有會員嗎?",
            options: [
              { id: 1, text: "沒有會員。", isCorrect: true },
              { id: 2, text: "不要這個。", isCorrect: false },
            ],
          },
          {
            question: "需要加購什麼嗎?",
            options: [
              { id: 1, text: "你好嗎?。", isCorrect: false },
              { id: 2, text: "不用加購。", isCorrect: true },
            ],
          },
          {
            question: "需要袋子嗎?",
            options: [
              { id: 1, text: "喝水。", isCorrect: false },
              { id: 2, text: "需要。", isCorrect: true },
            ],
          },
          {
            question: "一共是200元。",
            options: [
              { id: 1, text: "100元+100元", isCorrect: true },
              { id: 2, text: "50元+100元", isCorrect: false },
            ],
          },
          {
            question: "",
            options: [
              { id: 1, text: "謝謝。", isCorrect: true },
              { id: 2, text: "你好。", isCorrect: false },
            ],
          },
    ],
  };
  
  export default SupermarketdialogData;