/* =====================================================================
   しゅがけくじ 景品データ（このファイルだけ書き換えればOK）
   ---------------------------------------------------------------------
   ■ COLLABS … コラボ相手
     キー        : 半角英数のID（景品の collab から参照する）
     name        : 表示名
     handle      : @ を除いたID（表示用）
     kind        : "art"（イラスト） / "music"（音楽）
     avatar      : アイコン画像のパス（正方形）。空なら頭文字を表示
     bio         : 一言紹介（1〜2行）
     links       : 使うものだけ書く。いちばん上がメインリンクになる
                   x / pixiv / suno / spotify / youtube / site

   ■ PRIZES … 景品（A〜H賞）。合計 count が箱の枚数（いまは100）
     id          : "A1" "H3" など（賞＋番号）
     tier        : "A"〜"H"
     count       : 箱に入れる枚数
     type        : "art"（イラスト） / "music"（オルゴール・楽曲）
     title       : 作品名
     collab      : COLLABS のキー
     img         : 画像（3:4 推奨）。music はジャケット画像
     comment     : 作品コメント（任意・2〜3行まで）
     audio       : 試聴ファイル（music のみ。30秒前後の mp3）
     full        : フルで聴く先（music のみ）{ suno:"URL", spotify:"URL" }
                   書いたものだけボタンになる（最大2つ）

   ■ THIEF … 泥棒猫賞（箱を空にした人だけの専用景品）
     id:"TC" 固定 / name_ja・name_en（賞の名前）/ icon（絵文字1つ）/ title / collab / img / comment

   ■ MINE … しゅがけ（べに）のコンテンツ一覧
     label / desc / url / img（任意）
   ===================================================================== */
window.KUJI_DATA = {

collabs: {
  c01: { name:"Collab 01", handle:"collab_01", kind:"art",   avatar:"", bio:"サンプルのコラボ作家さん。", links:{ x:"https://x.com/" } },
  c02: { name:"Collab 02", handle:"collab_02", kind:"art",   avatar:"", bio:"サンプルのコラボ作家さん。", links:{ x:"https://x.com/", pixiv:"https://www.pixiv.net/" } },
  c03: { name:"Collab 03", handle:"collab_03", kind:"music", avatar:"", bio:"Suno で曲を作っているサンプルの音楽家さん。", links:{ suno:"https://suno.com/", spotify:"https://open.spotify.com/", x:"https://x.com/" } },
  c04: { name:"Collab 04", handle:"collab_04", kind:"art",   avatar:"", bio:"サンプルのコラボ作家さん。", links:{ x:"https://x.com/" } },
  c05: { name:"Collab 05", handle:"collab_05", kind:"art",   avatar:"", bio:"サンプルのコラボ作家さん。", links:{ x:"https://x.com/" } },
  c06: { name:"Collab 06", handle:"collab_06", kind:"music", avatar:"", bio:"オルゴールアレンジのサンプル。", links:{ suno:"https://suno.com/", x:"https://x.com/" } },
},

thief: { id:"TC", name_ja:"ピロートーク賞", name_en:"PILLOW TALK", icon:"🌙", title:"ピロートーク賞 (TBD)", collab:"c02", img:"assets/riu.jpg", comment:"箱を空にした人だけがもらえる、専用の豪華版。" },

prizes: [
  { id:"A1", tier:"A", count:2, type:"art",   title:"A1 (TBD)", collab:"c01", img:"assets/bani.jpg",      comment:"" },
  { id:"B1", tier:"B", count:5, type:"art",   title:"B1 (TBD)", collab:"c02", img:"assets/riu.jpg",       comment:"" },
  { id:"C1", tier:"C", count:8, type:"art",   title:"C1 (TBD)", collab:"c04", img:"assets/rako.jpg",      comment:"" },
  { id:"D1", tier:"D", count:5, type:"art",   title:"D1 (TBD)", collab:"c05", img:"assets/minari.jpg",    comment:"" },
  { id:"D2", tier:"D", count:5, type:"art",   title:"D2 (TBD)", collab:"c01", img:"assets/pafu.jpg",      comment:"" },
  { id:"E1", tier:"E", count:5, type:"art",   title:"E1 (TBD)", collab:"c02", img:"assets/mayuu.jpg",     comment:"" },
  { id:"E2", tier:"E", count:5, type:"music", title:"E2 オルゴール (TBD)", collab:"c06", img:"assets/yuunarina.jpg", comment:"試聴のサンプル音源です。",
    audio:"assets/prizes/sample_music.mp3", full:{ suno:"https://suno.com/" } },
  { id:"E3", tier:"E", count:5, type:"art",   title:"E3 (TBD)", collab:"c04", img:"assets/mokokun.jpg",   comment:"" },
  { id:"F1", tier:"F", count:4, type:"art",   title:"F1 (TBD)", collab:"c05", img:"assets/bani.jpg",      comment:"" },
  { id:"F2", tier:"F", count:4, type:"art",   title:"F2 (TBD)", collab:"c01", img:"assets/riu.jpg",       comment:"" },
  { id:"F3", tier:"F", count:4, type:"art",   title:"F3 (TBD)", collab:"c02", img:"assets/rako.jpg",      comment:"" },
  { id:"F4", tier:"F", count:4, type:"art",   title:"F4 (TBD)", collab:"c04", img:"assets/minari.jpg",    comment:"" },
  { id:"G1", tier:"G", count:4, type:"art",   title:"G1 (TBD)", collab:"c05", img:"assets/pafu.jpg",      comment:"" },
  { id:"G2", tier:"G", count:4, type:"art",   title:"G2 (TBD)", collab:"c01", img:"assets/mayuu.jpg",     comment:"" },
  { id:"G3", tier:"G", count:4, type:"music", title:"G3 (TBD)", collab:"c03", img:"assets/yuunarina.jpg", comment:"試聴のサンプル音源です。",
    audio:"assets/prizes/sample_music.mp3", full:{ suno:"https://suno.com/", spotify:"https://open.spotify.com/" } },
  { id:"G4", tier:"G", count:4, type:"art",   title:"G4 (TBD)", collab:"c02", img:"assets/mokokun.jpg",   comment:"" },
  { id:"G5", tier:"G", count:4, type:"art",   title:"G5 (TBD)", collab:"c04", img:"assets/bani.jpg",      comment:"" },
  { id:"H1", tier:"H", count:4, type:"art",   title:"H1 (TBD)", collab:"c05", img:"assets/riu.jpg",       comment:"" },
  { id:"H2", tier:"H", count:4, type:"art",   title:"H2 (TBD)", collab:"c01", img:"assets/rako.jpg",      comment:"" },
  { id:"H3", tier:"H", count:4, type:"art",   title:"H3 (TBD)", collab:"c02", img:"assets/minari.jpg",    comment:"" },
  { id:"H4", tier:"H", count:4, type:"art",   title:"H4 (TBD)", collab:"c04", img:"assets/pafu.jpg",      comment:"" },
  { id:"H5", tier:"H", count:4, type:"art",   title:"H5 (TBD)", collab:"c05", img:"assets/mayuu.jpg",     comment:"" },
  { id:"H6", tier:"H", count:4, type:"art",   title:"H6 (TBD)", collab:"c01", img:"assets/yuunarina.jpg", comment:"" },
],

mine: [
  { label:"X",        desc:"毎日の新作イラスト",           url:"https://x.com/" },
  { label:"Patreon",  desc:"高画質・限定イラスト",         url:"https://www.patreon.com/sugarcage" },
  { label:"Etsy",     desc:"壁紙セット",                   url:"https://www.etsy.com/shop/SugarCage" },
],
};
