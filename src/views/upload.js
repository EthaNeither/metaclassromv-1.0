const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 8000;

// 設定儲存上傳音檔的路徑和固定檔案名稱
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // 存放在專案資料夾的 uploads 子資料夾中
  },
  filename: function (req, file, cb) {
    cb(null, 'howmuch.mp3'); // 指定固定的檔案名稱
  }
});

const upload = multer({ storage: storage });

// 設定靜態資源目錄，以便可以訪問上傳的音檔
app.use('/uploads', express.static('uploads'));

// 處理上傳音檔的路由
app.post('/upload', upload.single('audioFile'), (req, res) => {
  res.send('音檔上傳成功！');
});

app.listen(port, () => {
  console.log(`伺服器正在監聽 http://localhost:${port}`);
});
