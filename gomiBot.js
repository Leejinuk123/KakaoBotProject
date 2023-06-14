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
//---------------------
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  let rand_1_2;
//짖기, 죽이기, 맞춤법훈수하기---------------------
  if (msg.includes('고미봇')) {
    replier.reply("멍멍");
  }   
  if (msg.includes('죽일까')) {
    replier.reply("죽일까요 보스?");
  }
  if(msg.includes('됬')){
    rand_1_2 = Math.floor(Math.random() * 2 + 1);
    if(rand_1_2 == '1'){
      output = '됬은 없는 글자인데요.';}
    else if(rand_1_2 == '2'){
      output = '됬이 아니라 됐인데요.';}
      replier.reply(output);
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
