//프리셋 이름 xyiuwpkw
//클라우드 이름 dnzj9lruv
const scriptName = "로아봇";
//---------------------
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if(msg == "test"){
    const con = org.jsoup.Jsoup.connect("https://api.cloudinary.com/v1_1/dnzj9lruv/image/upload");
    const pictureURL = 
          con.data('file','https://imgnews.pstatic.net/image/006/2023/06/16/0000118483_001_20230616091501003.jpg?type=w647')
            .data('upload_preset','xyiuwpkw')
            .ignoreContentType(true)
            .post();

    json = JSON.parse(pictureURL.text()); //html 형식의 파일을 json으로 파싱
    messageOut = json.url;
    replier.reply(messageOut);
    replier.reply(pictureURL);
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
