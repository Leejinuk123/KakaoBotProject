
//프리셋 이름 xyiuwpkw
//클라우드 이름 dnzj9lruv
//800x400 카카오톡 미리보기 사진 크기
const scriptName = "뉴로아봇v0.1";
const LOSTARK_API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAxNzc2NTIifQ.Rwe6dpgOwbw-16KtuUyGBr6BI4ChWJMwXwC2xokoTWdkcsPM91CXajmz-BeXqLSZTPGCxZ9VMEDuRBMNJHePPWlkvVDmu_1FAuSOtsdPU463TIN61nhQF-GgzhFn5eazLjLBnzeTmCQrcs-zJ8DORn-1wB58ZQr44ZhY-xX4zSngYvyQMCvow6A8y0ccjf1AgOgleJpmiS0mlaaSWADjUb_YGrEnA1O84Kal6SzFUZRU5Mf1GxA_NEeixjatF9kk5nLgx3k0vSipwYhvQ5qif8BGTxm4psOznzWkDH74Z4riLLhWKM33knqynP9DLQMBtC5u5xoHOsYuRB9pBgwMyw";
const allsee = "\u200b".repeat(500); //전체보기
const cloudinary = "https://res.cloudinary.com/dnzj9lruv/image/upload"; //cloudinary url정보
var dataJSON = JSON.parse(FileStream.read("/sdcard/imgIndex.json")); //경로에 있는 파일을 읽습니다. 읽어서 imgNumber라는 변수에 몇 번째 사진인지 할당  JSON.parse(FileStream.read(path));

//---------------------
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  //명령어를 전달받고 로스트아크 공식 홈페이지에서 프로필 정보를 크롤링
  if(msg.startsWith("/정보 ")){
    let characterName = ""; //캐릭터 이름이 들어있는 변수
    characterName = msg.split(" "); characterName = characterName[1];

    let characterProfile = getJson(characterName,"profiles");
    if(characterProfile == null||characterProfile.CharacterImage == null) {replier.reply("없거나 휴면 캐릭터인 정보입니다."); return;}
    let characterEngravings = getJson(characterName,"engravings");
    let characterCards = getJson(characterName,"cards");
    let characterGems = getJson(characterName,"gems");
    let characterSiblings = getJsonSiblings(characterName, "siblings");
    //테스트후보군 :  배마욱, 우비욱, 근브렐유지캐릭터
    //템렙(),전투렙(),원대렙()
    //길드(서버)
    if(characterProfile.GuildName == null) var gulidName = "-";
    else var guildName = characterProfile.GuildName;
    //특성비
    //공격력,체력
    if(characterProfile.Stats == null){
      var stats = "-";
      var HPAD = "-";
    }
    else {
      var stats = "치(" + characterProfile.Stats[0].Value + ") 특(" + characterProfile.Stats[1].Value + ") 신(" + characterProfile.Stats[3].Value + ")";
      var HPAD = "체력(" + characterProfile.Stats[6].Value + ") 공격력(" + characterProfile.Stats[7].Value + ")"
    }
    //각인
    if(characterEngravings == null) var engravings = "-";
    else {
      var engravings = "";
      for(let i = 0 ; i < characterEngravings.Effects.length ; i++){
        engravings = engravings + characterEngravings.Effects[i].Name + " ";
      }
      engravings = engravings.replace(/ Lv. /g,""); //정규식 사용 전체 제거
    }
    //카드(세트이름만)
    if(characterCards == null) var cards = "-";
    else {
      var cards = "";
      var cardsIndex = "";
      for(let i = 0 ; i < characterCards.Effects.length ; i++){
        for(let j = 0 ; j < characterCards.Effects[i].Items.length ; j++){
          cardsIndex = characterCards.Effects[i].Items[j].Name;
        }
        cards = cards + cardsIndex + " ";
        cardsIndex = "";
      }
    }
    //보석----------------------------------
    if(characterGems == null) var gems = "-";
    else {
      var gems = "";
      for(let i = 0; i < characterGems.Gems.length ; i++){
        gems = gems + "[" + characterGems.Gems[i].Name + "] ";
        for(let j = 0; j < characterGems.Gems.length ; j ++){
          if(characterGems.Gems[i].Slot == characterGems.Effects[j].GemSlot) gems = gems + characterGems.Effects[j].Name + "\n";
        }
      }
    }
    //배럭------------------------------------
    if(characterSiblings == null) var siblings = "-";
    else {
      var siblings = ""; //배럭
      for(let i = 0 ; i < characterSiblings.length ; i++){
        siblings = siblings + "[" + characterSiblings[i].ServerName + "/" + characterSiblings[i].CharacterClassName + "/" + characterSiblings[i].ItemMaxLevel + "] " + characterSiblings[i].CharacterName + "\n";
      }
    }

    //메세지출력폼
    let profileMessageOut = "장비" + "(" + characterProfile.ItemAvgLevel + ") 전투(" + characterProfile.CharacterLevel + ") 원정대(" + characterProfile.ExpeditionLevel + ")" + "\n"
                          + "길드 : " + guildName + "(" + characterProfile.ServerName + ")" + "\n"
                          + "특성 : " + stats + "\n"
                          + "체공 : " + HPAD + "\n"
                          + "각인 : " + engravings + "\n"
                          + "카드 : " + cards + "\n"
                          + "\n보석과 배럭 정보는 전체보기를 눌러주세요!\n"
                          + allsee
                          + "보석 : \n" + gems + "\n"
                          + "배럭 : \n" + siblings + "\n"
                          + ""; 
    //로아 API 끝-----------------------------
    
    //이미지url을 받아서 cloudinary에 업로드------------------
    //replier.reply(dataJSON.imgIndex);
    dataJSON.imgIndex = dataJSON.imgIndex + 1;
    const con = org.jsoup.Jsoup.connect("https://api.cloudinary.com/v1_1/dnzj9lruv/image/upload");
    const pictureURL = 
                    con.data('file',characterProfile.CharacterImage)
                            .data('upload_preset','xyiuwpkw')
                            .data('public_id',"_"+dataJSON.imgIndex)
                            .ignoreContentType(true)
                            .post();
    replier.reply("http://loa.dothome.co.kr/index.html/?cN="+charName[1]+"&iL=_"+dataJSON.imgIndex);
    FileStream.write("/sdcard/imgIndex.json", JSON.stringify(dataJSON));
    -------------------------------------정보출력 시작
    replier.reply(profileMessageOut);
  }
  
}
function getJson(characterName, apiName){
  let LOSTARKGETAPI = org.jsoup.Jsoup.connect("https://developer-lostark.game.onstove.com/armories/characters/" + characterName + "/" + apiName)
                                        .header("Authorization", "bearer " + LOSTARK_API_KEY)
                                        .header("Content-Type", "application/json")
                                        .ignoreContentType(true)
                                        .ignoreHttpErrors(true)
                                        .get();
  if(LOSTARKGETAPI == null) return;
  let jsonData = JSON.parse(LOSTARKGETAPI.text());
  return jsonData;
}
function getJsonSiblings(characterName, apiName){
  let LOSTARKGETAPI = org.jsoup.Jsoup.connect("https://developer-lostark.game.onstove.com/characters/" + characterName + "/" + apiName)
                                        .header("Authorization", "bearer " + LOSTARK_API_KEY)
                                        .header("Content-Type", "application/json")
                                        .ignoreContentType(true)
                                        .ignoreHttpErrors(true)
                                        .get();
  if(LOSTARKGETAPI == null) return;
  let jsonData = JSON.parse(LOSTARKGETAPI.text());
  return jsonData;
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
