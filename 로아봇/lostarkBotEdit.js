//프리셋 이름 xyiuwpkw
//클라우드 이름 dnzj9lruv
//800x400 카카오톡 미리보기 사진 크기
//https://res.cloudinary.com/dnzj9lruv/image/upload/colors-gold-thread-600x600_vax2ea
// https://res.cloudinary.com/dnzj9lruv/image/upload/w_800,h_400/colors-gold-thread-600x600_vax2ea

// FileStream.read("/sdcard/경로"); //경로에 있는 파일을 읽습니다.
// FileStream.write("/sdcard/경로", 데이터); //경로에 데이터를 씁니다.
// FileStream.append("/sdcard/경로", "데이터") //경로에 데이터를 이어 씁니다.
// FileStream.remove("/sdcard/경로") //경로를 삭제합니다.

// let data = {
// 	"ProfileImageHashCode":java.lang.String(ImageDB.getProfileImage()).hashCode()
// };
// FileStream.write("/sdcard/DataBase/", JSON.stringify(data))

const scriptName = "로아봇";
var loaInfoHtml; //로아 공식홈페이지 전체 크롤링
var dataWrap = ""; //프로필 정보가 들어있는 변수
var charName = ""; //캐릭터 이름이 들어있는 변수

var otherChar = "";
var charItemLv = "";
var charExpLv = "";
var charServer = "";
var charGems = "";

var charImg = ""; //프로필 안의 캐릭터 사진 url이 담겨있는 변수 
const cloudinary = "https://res.cloudinary.com/dnzj9lruv/image/upload"; //cloudinary url정보
var enabled = false; //캐릭터가 있는지 없는지 유무 체크용
var dataJSON = JSON.parse(FileStream.read("/sdcard/imgIndex.json")); //경로에 있는 파일을 읽습니다. 읽어서 imgNumber라는 변수에 몇 번째 사진인지 할당  JSON.parse(FileStream.read(path));
//---------------------
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  //명령어를 전달받고 로스트아크 공식 홈페이지에서 프로필 정보를 크롤링
  if(msg.startsWith("/로아 ")){
    charName = msg.split(" ");
    //-----------------------------크롤링과 할당부분
    loaInfoHtml = org.jsoup.Jsoup.connect("https://lostark.game.onstove.com/Profile/Character/" + charName[1]).get(); //공식 홈페이지 프로필 html 전체 크롤링
    const test = org.jsoup.Jsoup.connect("https://loawa.com/char/우비욱")
                                                                        .userAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.152 Safari/537.36")
                                                                        .ignoreContentType(true)
                                                                        .ignoreHttpErrors(true)
                                                                        .get();
    replier.reply("test");
    dataWrap = loaInfoHtml.select("div.content.content--profile"); //전체 html에서 프로필 정보만 추출
    charImg = dataWrap.select("div.profile-equipment__character").select("img").attr("src"); //프로필 안의 캐릭터 사진 url이 담겨있는 변수
    
    otherChar = dataWrap.select("ul.profile-character-list__char").select("li").text(); //배럭보여주기 
    otherChar = otherChar.split(' '); //배럭들 text가 담기는 통
    otherChar = otherChar.join('\n');
    charExpLv = dataWrap.select("div.level-info__expedition").text(); //원정대레벨
    charItemLv = dataWrap.select("div.level-info2__item").text(); //아이템레벨
    charServer = dataWrap.select("span.profile-character-info__server").text(); //서버이름
    //level-info__expedition
    //-----------------------------크롤링과 할당부분

    //캐릭터가 있는지없는지 검사------------------------------------------------------------------------------
    if(charImg.startsWith("http")) enabled = true;
    if(!enabled) {replier.reply("없는 캐릭터 정보입니다."); return;}    
    //캐릭터가 있는지없는지 검사------------------------------------------------------------------------------

    //이미지url을 받아서 cloudinary에 업로드------------------
    //replier.reply(dataJSON.imgIndex);
    dataJSON.imgIndex = dataJSON.imgIndex + 1;
    const con = org.jsoup.Jsoup.connect("https://api.cloudinary.com/v1_1/dnzj9lruv/image/upload");
    const pictureURL = 
                    con.data('file',charImg)
                            .data('upload_preset','xyiuwpkw')
                            .data('public_id',"_"+dataJSON.imgIndex)
                            .ignoreContentType(true)
                            .post();
    // json = JSON.parse(pictureURL.text());
    // charImg = json.public_id; //사진이름
    //charImg = cloudinary+"/c_thumb,w_800,h_400,c_fill/c_thumb,w_400,h_400,l_"+ charImg +"/fl_layer_apply,g_north_east,x_0,y_0/l_text:Arial_45_bold:"+ charName[1] +",g_north_west,x_100,y_80,co_rgb:EAEAEA/sasasa_csje7s";
    //replier.reply(charImg);
    //charImg = org.jsoup.Jsoup.connect("http://leejinouk123.dothome.co.kr/index.html/?charName="+charName[1]+"&imageLink="+charImg).get();
    
    //php서버에 get방식으로 정보를 전달 후 웹페이지 생성한 다음에 카카오톡으로 링크 전송------------------------------
    replier.reply("http://leejinouk123.dothome.co.kr/index.html/?cN="+charName[1]+"&iL=_"+dataJSON.imgIndex);
    FileStream.write("/sdcard/imgIndex.json", JSON.stringify(dataJSON));
    //const sendHtml = org.jsoup.Jsoup.connect("");
    
    //json = JSON.parse(dataWrap.text()); //html 형식의 파일을 json으로 파싱
    //replier.reply(dataWrap);
    enabled = false;
    //-------------------------------------사진보여주기 끝
    //-------------------------------------정보출력 시작
    replier.reply(""
                  +"-----레벨-----\n"
                  +charExpLv+ "\n" //원정대레벨 //원정대 레벨Lv.162
                  +charItemLv.substring(3)+ "\n" //아이템레벨 //달성 아이템 레벨Lv.1,543.33
                  +"-----서버-----\n"
                  +charServer.substring(1)+ "\n" //서버이름 //@니나브
                  +"-----보석-----\n"
                  +"\n"
                  +"-----배럭-----\n"
                  +otherChar
                  +"");
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
