//프리셋 이름 xyiuwpkw
//클라우드 이름 dnzj9lruv
//800x400 카카오톡 미리보기 사진 크기
//https://res.cloudinary.com/dnzj9lruv/image/upload/colors-gold-thread-600x600_vax2ea
// [출처] 이미지api강좌-이미지 편집(이미지 합성등)#3 (카카오톡 봇 커뮤니티) | 작성자 WaitingLava
// https://res.cloudinary.com/dnzj9lruv/image/upload/w_800,h_400/colors-gold-thread-600x600_vax2ea
const scriptName = "로아봇";
var loaInfoHtml;
var dataWrap = "";
var charName = "";
var charImg = "";
//---------------------
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if(msg.startsWith("/로아 ")){
    charName = msg.split(" ");
    // const con = org.jsoup.Jsoup.connect("https://api.cloudinary.com/v1_1/dnzj9lruv/image/upload");
    // const pictureURL = 
    //       con.data('file','https://imgnews.pstatic.net/image/006/2023/06/16/0000118483_001_20230616091501003.jpg?type=w647')
    //         .data('upload_preset','xyiuwpkw')
    //         .ignoreContentType(true)
    //         .post();
    loaInfoHtml = org.jsoup.Jsoup.connect("https://lostark.game.onstove.com/Profile/Character/" + charName[1]).get();
  
    dataWrap = loaInfoHtml.select("div.content.content--profile");
    dataImg = dataWrap.select("profile-equipment__character").select("img").attr("src");
    //json = JSON.parse(dataWrap.text()); //html 형식의 파일을 json으로 파싱
    replier.reply(dataWrap);
    replier.reply(dataImg);
  }
  
}

//아래 4개의 메소드는 액티비티 화면을 수정할때 사용됩니다.
function onCreate(savedInstanceState, activity) {
  var textView = new android.widget.TextView(activity);
  textView.setText("Hello, World!");
  textView.setTextColor(android.graphics.Color.DKGRAY);
  activity.setContentView(textView);
}

function onStart(activity) {}

function onResume(activity) {}

function onPause(activity) {}

function onStop(activity) {}
