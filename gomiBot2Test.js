const scriptName = "고미봇2";
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  
  if (msg.includes('들어오면 인사해주시고 닉변')) {
    replier.reply("안녕하세요~! 공지확인하시고 닉변해주세요!");
  }
  
  if (msg == "/디코"){
   replier.reply("디스코드 링크 여기있어요~ \n"+"https://discord.gg/h627T9gTtp"+"\n"+"여기로 오시면 됩니다.");
   java.lang.Thread.sleep(1500);
   replier.reply("아 맞다");
   java.lang.Thread.sleep(1500);
   replier.reply("디코닉이랑 카톡닉이랑 맞춰주세요!");
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