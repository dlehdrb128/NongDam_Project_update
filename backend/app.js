const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const connection = require("./db/db");

const Main = require("./Server/Router/Main/index");
const Product = require("./Server/Router/Product/index");
const uploadTest = require("./Server/Router/uploadTest");
const recipe = require("./Server/Router/Recipe/index");
const login = require("./Server/Router/Login/index");
const signUp = require("./Server/Router/SignUp/index");
const order = require("./Server/Router/Orders/index");
const Market = require("./Server/Router/Market/index");

const PORT = process.env.PORT || 8080;

connection.connect((err) => {
  if (err) console.error("error connecting :", err);
  console.log("데이터베이스 연결 성공");
});

const app = express();

app.use(express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("keyboard cat"));

app.use(
  cors({
    origin: "http://localhost:3000", // 출처 허용 옵션
    credentials: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
  })
);

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false, // 자바스크립트를 통해 세션 쿠키를 사용할 수있는 지여부
      Secure: true,
    },
  })
);

app.use("/", Main);
app.use("/product", Product);
app.use("/upload", uploadTest);
app.use("/recipe", recipe);
app.use("/login", login);
app.use("/signUp", signUp);
app.use("/order", order);
app.use("/login", login);
app.use("/market", Market);
try {
  fs.readdirSync("uploads");
} catch (error) {
  fs.mkdirSync("uploads");
  console.log("uploads 파일이 없어서 생성합니다!");
}

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("keyboard cat"));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false, // 자바스크립트를 통해 세션 쿠키를 사용할 수
      Secure: true,
    },
  })
);

app.listen(PORT, () => {
  console.log(`EXPRESS SERVER START ${PORT} `);
});
