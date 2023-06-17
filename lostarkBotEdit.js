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
const cloudinary = "https://res.cloudinary.com/dnzj9lruv/image/upload";
var enabled = false;
var i = 1;
//---------------------
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if(msg.startsWith("/로아 ")){
    charName = msg.split(" ");
    loaInfoHtml = org.jsoup.Jsoup.connect("https://lostark.game.onstove.com/Profile/Character/" + charName[1]).get();
    dataWrap = loaInfoHtml.select("div.content.content--profile");
    charImg = dataWrap.select("div.profile-equipment__character").select("img").attr("src");
    //replier.reply(charImg);
    if(charImg.startsWith("http")){
      enabled = true;
    }

    if(!enabled) {
      replier.reply("없는 캐릭터 정보입니다.");  
      return;
    }    
    const con = org.jsoup.Jsoup.connect("https://api.cloudinary.com/v1_1/dnzj9lruv/image/upload");
    const pictureURL = 
                    con.data('file',charImg)
                            .data('upload_preset','xyiuwpkw')
                            .data('public_id',"_"+i)
                            .ignoreContentType(true)
                            .post();
    // json = JSON.parse(pictureURL.text());
    // charImg = json.public_id; //사진이름
    //charImg = cloudinary+"/c_thumb,w_800,h_400,c_fill/c_thumb,w_400,h_400,l_"+ charImg +"/fl_layer_apply,g_north_east,x_0,y_0/l_text:Arial_45_bold:"+ charName[1] +",g_north_west,x_100,y_80,co_rgb:EAEAEA/sasasa_csje7s";
    //replier.reply(charImg);
    //charImg = org.jsoup.Jsoup.connect("http://leejinouk123.dothome.co.kr/index.html/?charName="+charName[1]+"&imageLink="+charImg).get();
    replier.reply("http://leejinouk123.dothome.co.kr/index.html/?cN="+charName[1]+"&iL_="+i);
    //const sendHtml = org.jsoup.Jsoup.connect("");
    
    //json = JSON.parse(dataWrap.text()); //html 형식의 파일을 json으로 파싱
    //replier.reply(dataWrap);
    i++;
    enabled = false;
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
