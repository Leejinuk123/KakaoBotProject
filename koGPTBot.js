// const scriptName = "고미봇";
// //카카오링크 관련 모듈 선언부-----------------
//Kakao.init('2642767733346608749b39371caaabc7');
const REST_API_KEY = "8efcbd9e5bfe39410994c53a66fa92d7"; //REST API KEY값
const scriptName = "kakao_link_test";
var messageOut = "";
function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
  function getKoGPTResponse(msg) {
    //replier.reply("확인용0");
    let json;
    let result;
    try {
        replier.reply("확인용4"+ msg);
        let data = {
            "max_tokens": 16,
            "temperature": 0.9,
            "top_p": 1,
            "n": 1,
            "prompt": msg
        };
        let response = org.jsoup.Jsoup.connect("https://api.kakaobrain.com/v1/inference/kogpt/generation")
            .header("Authorization", "KakaoAK " + REST_API_KEY) // Open ai 토큰값 Authorization: KakaoAK {REST_API_KEY}
            .header("Content-Type", "application/json")
            .requestBody(JSON.stringify(data))
            .ignoreContentType(true)
            .ignoreHttpErrors(true)
            .timeout(200000)
            .post();
        
        json = JSON.parse(response.text()); //html 형식의 파일을 json으로 파싱
        //replier.reply(json.generations[0].text); //json에서 []은 배열을 의미한다. {}은 키 밸류 값
        messageOut = json.generations[0].text;
        replier.reply(messageOut);
    }
     catch(e){
         result = e;
         Log.e(json);
         Log.e(json);
     }
  }
  getKoGPTResponse(msg);
}

//-----------------------------------------------------------------------------------
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
