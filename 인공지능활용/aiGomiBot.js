const scriptName = "인공지능고미봇";
//---------------------
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  getchatGPTResponse(msg);
  function getchatGPTResponse(msg) {
    let json;
    let result;
    try {
        let data = {
        };
        let response = org.jsoup.Jsoup.connect("https://vapis.run.goorm.site/api/chatgpt?plusId=eZpOMB_kCJ1o&word="+msg)
            .header("Authorization", "KakaoAK ") // Open ai 토큰값 Authorization: KakaoAK {REST_API_KEY}
            .header("Content-Type", "application/json")
            .ignoreContentType(true)
            .ignoreHttpErrors(true)
            .timeout(200000)
            .post();
        
        json = JSON.parse(response.text()); //html 형식의 파일을 json으로 파싱
        messageOut = json.message;
        replier.reply(messageOut);
    }
     catch(e){
         result = e;
         Log.e(json);
         Log.e(json);
     }
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
