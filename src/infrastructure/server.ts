import express from "express";
import bodyParser from "body-parser";
import { router } from "./web/routes";
import { errorHandler } from "./web/middleware/errorHandler";
import { authenticate } from "./web/middleware/authenticate";

const app = express();

// ミドルウェアの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ルートの設定
app.use("/", router);

// エラーハンドリングミドルウェアの設定
app.use(errorHandler);
// 認証ミドルウェアの設定
app.use(authenticate);

const PORT = process.env.PORT || 3000;

// サーバーの起動
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});