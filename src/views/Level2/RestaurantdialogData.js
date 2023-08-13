// 餐廳詳細對話的資料
const RestaurantdialogData = {

    // 題庫1
    questionBank1: [
      {
        options: [
          { id: 1, text: "你好，幾位?", isCorrect: true },
          { id: 2, text: "不說話。", isCorrect: false },
        ],
        answer: "1位用餐。", // 新增回答語句
      },
      {
        options: [
          { id: 1, text: "餐廳很好吃。", isCorrect: false },
          { id: 2, text: "請問有訂位嗎?", isCorrect: true },
        ],
        answer: "有，我是訂下午3點。", 
      },
      {
        options: [
          { id: 1, text: "請問貴姓?", isCorrect: true },
          { id: 2, text: "廁所在哪?", isCorrect: false },
        ],
        answer: "我姓陳。", 
      },
      {
        options: [
          { id: 1, text: "好的，這邊請。", isCorrect: true },
          { id: 2, text: "我很開心。", isCorrect: false },
        ],
        answer: "", 
      },
      {
        options: [
          { id: 1, text: "我想喝水。", isCorrect: false },
          { id: 2, text: "這是菜單。", isCorrect: true },
        ],
        answer: "", 
      },
    ],
  
    // 題庫2
    questionBank2: [
      {
        options: [
          { id: 1, text: "請問需要什麼?", isCorrect: true },
          { id: 2, text: "餐廳很好吃。", isCorrect: false },
        ],
        answer: "一杯果汁和雞腿餐。", // 新增回答語句
      },
      {
        options: [
          { id: 1, text: "廁所在哪?", isCorrect: false },
          { id: 2, text: "還需要什麼?", isCorrect: true },
        ],
        answer: "還要一個蛋糕。\n 這樣就好。", 
      },
      {
        options: [
          { id: 1, text: "好，請稍等。", isCorrect: true },
          { id: 2, text: "我不要。", isCorrect: false },
        ],
        answer: "", 
      },
    ],

    // 題庫3
    questionBank3: [
        {
          question: "不好意思，我想要一根吸管。",
          options: [
            { id: 1, text: "好，還需要什麼嗎?", isCorrect: true },
            { id: 2, text: "我沒有湯匙。", isCorrect: false },
          ],
        },
        {
            question: "我想要再一個碗。",
            options: [
              { id: 1, text: "好的，請稍等。", isCorrect: true },
              { id: 2, text: "我想要喝水。", isCorrect: false },
            ],
        },
      ],

      // 題庫4
    questionBank4: [
        {
          options: [
            { id: 1, text: "我不喜歡苦瓜。", isCorrect: true },
            { id: 2, text: "請問是哪一桌?", isCorrect: false },
          ],
          answer: "5號桌。", // 新增回答語句
        },
        {
          options: [
            { id: 1, text: "總共80元。", isCorrect: false },
            { id: 2, text: "我有點累。", isCorrect: true },
          ],
          answer: "", 
        },
        {
          options: [
            { id: 1, text: "我沒有多的錢。", isCorrect: false },
            { id: 2, text: "刷卡還是付現?", isCorrect: true },
          ],
          answer: "刷卡，不用統編。", 
        },
        {
            options: [
              { id: 1, text: "需要載具嗎?", isCorrect: true },
              { id: 2, text: "我喜歡吸管。", isCorrect: false },
            ],
            answer: "不用，謝謝。", 
          },
          {
            options: [
              { id: 1, text: "我好漂亮。", isCorrect: false },
              { id: 2, text: "謝謝光臨。", isCorrect: true },
            ],
            answer: "", 
          },
      ],
  };
  
  export default RestaurantdialogData;