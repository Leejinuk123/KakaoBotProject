// const scriptName = "고미봇";
// //카카오링크 관련 모듈 선언부-----------------
const kalingModule = require('kaling').Kakao();
const Kakao = new kalingModule();
Kakao.init('2642767733346608749b39371caaabc7');
Kakao.login('leejinouk123@gmail.com', 'djswpsk1!');
// //-----------------
// function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

  
  
// }



const scriptName = "kakao_link_test";
// const kalingModule = require('kaling').Kakao();
// const Kakao = new kalingModule();
// importClass(org.jsoup.Jsoup);

// Kakao.init(''); // 자바스크립트 키
// Kakao.login('', '');  // 카카오 계정 아이디와 비밀번호

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
  if(msg=='테스트'){
  Kakao.send(room, 
                  { "link_ver": "4.0", 
                    "template_object": { "object_type" : "feed", 
                                         "button_title": "테스트", 
                                         "content"     : { "title": "테스트1", 
                                                           "image_url": '', 
                                                           "link": { "web_url": "", 
                                                                     "mobile_web_url": "" }, 
                                                           "description": "테스트2" }, 
                                         "buttons"     : [{ "title": "버튼", 
                                                            "link" : { "web_url": "",
                                                                       "mobile_web_url": "" } 
                                                         }]
                                       }
                  }
            );
  }
  else if (msg == "test")
  {
    Kakao.send(room, {"link_ver"      : "4.0",
                      "template_id"   : 38890,
                      "template_args" : {}
                                            },"custom");
  }
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
