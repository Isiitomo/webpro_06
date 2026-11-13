const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

let station = [
  { id:1, code:"JE01", name:"東京駅"},
  { id:2, code:"JE07", name:"舞浜駅"},
  { id:3, code:"JE12", name:"新習志野駅"},
  { id:4, code:"JE13", name:"幕張豊砂駅"},
  { id:5, code:"JE14", name:"海浜幕張駅"},
  { id:6, code:"JE05", name:"新浦安駅"},
];

app.get("/keiyo", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.re('db1', { data: station });
});

let station2 = [
  { id:1, code:"JE01", name:"東京駅", change:"総武本線，中央線，etc", passengers:403831, distance:0 },
  { id:2, code:"JE02", name:"八丁堀駅", change:"日比谷線", passengers:31071, distance:1.2 },
  { id:3, code:"JE05", name:"新木場駅", change:"有楽町線，りんかい線", passengers:67206, distance:7.4 },
  { id:4, code:"JE07", name:"舞浜駅", change:"舞浜リゾートライン", passengers:76156,distance:12.7 },
  { id:5, code:"JE12", name:"新習志野駅", change:"", passengers:11655, distance:28.3 },
  { id:6, code:"JE17", name:"千葉みなと駅", change:"千葉都市モノレール", passengers:16602, distance:39.0 },
  { id:7, code:"JE18", name:"蘇我駅", change:"内房線，外房線", passengers:31328, distance:43.0 },
];

app.get("/keiyo2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('keiyo2', {data: station2} );
});

app.get("/keiyo2/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = station2[ number ];
  res.render('keiyo2_detail', {data: detail} );
});

"use strict";

let soccerplayers = [
  { id: 1, position: "GK", name: "ジャンルイジ・ブッフォン", club: "引退", country: "イタリア", foot: "右足" },
  { id: 2, position: "LSB", name: "ジャンルカ・ザンブロッタ", club: "引退", country: "イタリア", foot: "両足" },
  { id: 3, position: "CB", name: "リリアン・テュラム", club: "引退", country: "フランス", foot: "右足" },
  { id: 4, position: "CB", name: "リオ・ファーディナンド", club: "引退", country: "イングランド", foot: "右足" },
  { id: 5, position: "RSB", name: "アルベルト・フェレール", club: "引退", country: "スペイン", foot: "右足" },
  { id: 6, position: "DMF", name: "ロドリ", club: "マンチェスター・シティ", country: "スペイン", foot: "右足" },
  { id: 7, position: "CMF", name: "パトリック・ヴィエラ", club: "引退", country: "フランス", foot: "右足" },
  { id: 8, position: "CF", name: "ズラタン・イブラヒモビッチ", club: "引退", country: "スウェーデン", foot: "右足" },
  { id: 9, position: "ST", name: "ハリー・ケイン", club: "バイエルン・ミュンヘン", country: "イングランド", foot: "右足" },
  { id: 10, position: "CF", name: "キリアン・エムバペ", club: "レアル・マドリード", country: "フランス", foot: "右足" },
  { id: 11, position: "ST", name: "リオネル・メッシ", club: "インテル・マイアミ", country: "アルゼンチン", foot: "左足" }
];

app.get("/soccerplayers", (req, res) => {
  res.render('db3', { data: soccerplayers });
});

app.get("/soccerplayers/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = soccerplayers[ number -1];
  res.render('db3_detail', {data: detail} );
});

let baseballplayers = [
  { id: 1, position: "ショートストッパー", name: "田中広輔", type: "バッター", syougaiDatsuritsu: ".256", syougaiHR: 69, touda: "右投左打", syougaiBougyoritsu: "-", iten: "広島東洋カープ" },
  { id: 2, position: "セカンド", name: "菊池涼介", type: "バッター", syougaiDatsuritsu: ".265", syougaiHR: 142, touda: "右投右打", syougaiBougyoritsu: "-", iten: "広島東洋カープ" },
  { id: 3, position: "ファースト", name: "衣笠祥雄", type: "バッター", syougaiDatsuritsu: ".270", syougaiHR: 504, touda: "右投右打", syougaiBougyoritsu: "-", iten: "広島東洋カープ" },
  { id: 4, position: "センター", name: "山本浩二", type: "バッター", syougaiDatsuritsu: ".290", syougaiHR: 536, touda: "右投右打", syougaiBougyoritsu: "-", iten: "広島東洋カープ" },
  { id: 5, position: "レフト", name: "金本知憲", type: "バッター", syougaiDatsuritsu: ".285", syougaiHR: 476, touda: "左投左打", syougaiBougyoritsu: "-", iten: "広島東洋カープ → 阪神タイガース" },
  { id: 6, position: "サード", name: "新井貴浩", type: "バッター", syougaiDatsuritsu: ".278", syougaiHR: 319, touda: "右投右打", syougaiBougyoritsu: "-", iten: "広島東洋カープ → 阪神タイガース → 広島東洋カープ" },
  { id: 7, position: "ライト", name: "鈴木誠也", type: "バッター", syougaiDatsuritsu: ".315", syougaiHR: 182, touda: "右投右打", syougaiBougyoritsu: "-", iten: "広島東洋カープ → シカゴ・カブス" },
  { id: 8, position: "キャッチャー", name: "達川光男", type: "バッター", syougaiDatsuritsu: ".246", syougaiHR: 51, touda: "右投右打", syougaiBougyoritsu: "-", iten: "広島東洋カープ" },
  { id: 9, position: "ピッチャー", name: "黒田博樹", type: "ピッチャー", syougaiDatsuritsu: "-", syougaiHR: "-", touda: "右投右打", syougaiBougyoritsu: "3.55", iten: "広島東洋カープ → ロサンゼルス・ドジャース → ニューヨーク・ヤンキース → 広島東洋カープ" }
];

app.get("/baseballplayers", (req, res) => {
  res.render('db4', { data: baseballplayers });
});

app.get("/baseballplayers/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = baseballplayers[ number -1 ];
  res.render('db4_detail', {data: detail} );
});

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/omikuji1", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';

  res.send( '今日の運勢は' + luck + 'です' );
});

app.get("/omikuji2", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';

  res.render( 'omikuji2', {result:luck} );
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  let judgement = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';
  // ここに勝敗の判定を入れる
  // 以下の数行は人間の勝ちの場合の処理なので，
  // 判定に沿ってあいこと負けの処理を追加する
  judgement = '勝ち';
  win += 1;
  total += 1;
  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
