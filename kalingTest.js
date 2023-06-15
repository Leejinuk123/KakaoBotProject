// const scriptName = "고미봇";
// //카카오링크 관련 모듈 선언부-----------------
//const kalingModule = require('kaling').Kakao();
//const Kakao = new kalingModule();
//Kakao.init('2642767733346608749b39371caaabc7');
const REST_API_KEY = "8efcbd9e5bfe39410994c53a66fa92d7";
//Kakao.login('leejinouk123@gmail.com', 'djswpsk1!');



const scriptName = "kakao_link_test";
// const kalingModule = require('kaling').Kakao();
// const Kakao = new kalingModule();
// importClass(org.jsoup.Jsoup);

// Kakao.init(''); // 자바스크립트 키
// Kakao.login('', '');  // 카카오 계정 아이디와 비밀번호

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
  function getKoGPTResponse(msg) {
    replier.reply("확인용0");
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
        replier.reply(json.generations[0].text);
        result = json.choices[0].message.content;
        //console.log(json,resul:t);
        replier.reply("1 "+response);
        replier.reply("3 "+result);
    }
     catch(e){
         result = e;
         Log.e(json);
         Log.e(json);
         //replier.reply("확인용2");
    }
    //replier.reply("1 "+response);
    //    replier.reply("2 "+json.generations[text]);
    //    replier.reply("3 "+result);
    //replier.reply("4 "+JSON.stringify(json));
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
