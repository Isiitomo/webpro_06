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

// 一覧
app.get("/keiyo2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('keiyo2', {data: station2} );
});

// Create
app.get("/keiyo2/create", (req, res) => {
  res.redirect('/public/keiyo2_new.html');
});

// Read
app.get("/keiyo2/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = station2[ number ];
  res.render('keiyo2_detail', {id: number, data: detail} );
});

// Delete
app.get("/keiyo2/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  station2.splice( req.params.number, 1 );
  res.redirect('/keiyo2' );
});

// Create
app.post("/keiyo2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = station2.length + 1;
  const code = req.body.code;
  const name = req.body.name;
  const change = req.body.change;
  const passengers = req.body.passengers;
  const distance = req.body.distance;
  station2.push( { id: id, code: code, name: name, change: change, passengers: passengers, distance: distance } );
  console.log( station2 );
  res.render('keiyo2', {data: station2} );
});

// Edit
app.get("/keiyo2/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = station2[ number ];
  res.render('keiyo2_edit', {id: number, data: detail} );
});

// Update
app.post("/keiyo2/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  station2[req.params.number].code = req.body.code;
  station2[req.params.number].name = req.body.name;
  station2[req.params.number].change = req.body.change;
  station2[req.params.number].passengers = req.body.passengers;
  station2[req.params.number].distance = req.body.distance;
  console.log( station2 );
  res.redirect('/keiyo2' );
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

let movies = [
  { id: 1, title: "アベンジャーズ／エンドゲーム", year: 2019, genre: "アクション・SF・アドベンチャー", cast: "ロバート・ダウニー・Jr.、クリス・エヴァンス、クリス・ヘムズワース、スカーレット・ヨハンソン", story: "サノスによって宇宙の生命の半分が消滅した後、生き残ったアベンジャーズが仲間を取り戻すため、最後の戦いに挑む。", similar: "アベンジャーズ／インフィニティ・ウォー" },
  { id: 2, title: "スパイダーマン：ブランド・ニュー・デイ", year: 2026, genre: "アクション・アドベンチャー", cast: "トム・ホランド、ゼンデイヤ、ジェイコブ・バタロン、ジョン・バーンサル、マーク・ラファロ", story: "人々の記憶から自分の存在が消えたピーター・パーカーが、スパイダーマンとして街を守る中で、新たな脅威に立ち向かう。", similar: "スパイダーマン：ノー・ウェイ・ホーム" },
  { id: 3, title: "最強のふたり", year: 2011, genre: "ヒューマン・コメディ・ドラマ", cast: "フランソワ・クリュゼ、オマール・シー、アンヌ・ル・ニ", story: "事故で首から下が麻痺した大富豪フィリップと、介護人として雇われた青年ドリスが、生活や価値観の違いを乗り越えて友情を深めていく。", similar: "グリーンブック" },
  { id: 4, title: "余命10年", year: 2022, genre: "恋愛・ドラマ", cast: "小松菜奈、坂口健太郎、山田裕貴、奈緒、井口理", story: "余命10年と宣告された茉莉が、同窓会で再会した和人と恋に落ちる。限られた時間の中で、人生や愛することの意味を見つめていく。", similar: "8年越しの花嫁" },
  { id: 5, title: "余命一年の僕が、余命半年の君と出会った話。", year: 2024, genre: "恋愛・青春・ドラマ", cast: "永瀬廉、出口夏希、横田真悠、木村文乃、大塚寧々", story: "余命1年を宣告された秋人は、病院の屋上で絵を描く春奈と出会う。彼女も余命半年であることを知り、互いに残された時間を大切に過ごしていく。", similar: "君の膵臓をたべたい" },
  { id: 6, title: "今夜、世界からこの恋が消えても", year: 2022, genre: "恋愛・青春・ドラマ", cast: "道枝駿佑、福本莉子、古川琴音、松本穂香", story: "前向性健忘症によって眠るとその日の記憶を失ってしまう真織と、彼女を支える透。二人は毎日新しい恋を積み重ねていく。", similar: "君の膵臓をたべたい" },
  { id: 7, title: "君の膵臓をたべたい", year: 2017, genre: "青春・恋愛・ドラマ", cast: "浜辺美波、北村匠海、北川景子、小栗旬", story: "膵臓の病気を患うクラスメイトの桜良が書いた闘病日記を偶然見つけた僕は、彼女と一緒に過ごすようになる。二人の交流を通して、生きることの意味を描く。", similar: "余命10年" },
  { id: 8, title: "クレヨンしんちゃん 嵐を呼ぶ アッパレ！戦国大合戦", year: 2002, genre: "アニメ・コメディ・時代劇", cast: "矢島晶子、屋良有作、小林愛、ならはしみき、藤原啓治", story: "突然戦国時代にタイムスリップしたしんのすけは、侍の井尻又兵衛を助ける。春日城を舞台に、しんのすけたちの活躍と戦国時代の人々との交流を描く。", similar: "クレヨンしんちゃん 嵐を呼ぶ モーレツ！オトナ帝国の逆襲" }
];

app.get("/movies", (req, res) => {
  res.render('db5', { data: movies });
});

app.get("/movies/:number", (req, res) => {
  const number = req.params.number;
  const detail = movies[number - 1];
  res.render('db5_detail', { data: detail });
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
