// //카카오링크 관련 모듈 선언부-----------------
const scriptName = "kakao_link_test";
const REST_API_KEY = "8efcbd9e5bfe39410994c53a66fa92d7";
function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
  function getKoGPTResponse(msg) {
    replier.reply("확인용0");
    let json;
    let result;
    try {
        
        let data = {
            "max_tokens": 16,
            "temperature": 0.9,
            "top_p": 1,
            "n": 1,
            "prompt": msg
        };
//{\"max_tokens\":16,\"temperature\":1,\"top_p\":1,\"n\":1,\"prompt\":\"안녕하세요\"}"
        let response = org.jsoup.Jsoup.connect("https://api.kakaobrain.com/v1/inference/kogpt/generation")
            .header("Authorization", "KakaoAK " + REST_API_KEY) // Open ai 토큰값 Authorization: KakaoAK {REST_API_KEY}
            .header("Content-Type", "application/json")
            .requestBody(JSON.stringify(data))
            .ignoreContentType(true)
            .ignoreHttpErrors(true)
            .timeout(200000)
            .post();

        json = JSON.parse(response.text());
        result = json.choices[0].message.content;
        console.log(json,result);
        replier.reply("확인용1");
    }
     catch(e){
         result = e;
         Log.e(json.id);
         Log.e(json.id);
         replier.reply("확인용2");
    }
    replier.reply(JSON.stringify(json));
    // return result;

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
