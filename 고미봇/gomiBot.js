const scriptName = "고미봇";
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
  // if (msg.includes('고미봇')) {
  //   replier.reply("멍멍");}
  if (msg.includes('고미봇')){
    switch (Math.floor(Math.random() * 9)) {
      case 0:
        replier.reply("멍멍");
        break;
      case 1:
        replier.reply("멍멍");
        break;
      case 2:
        replier.reply("멍멍");
        break;
      case 3:
        replier.reply("멍멍");
        break;
      case 4:
        replier.reply("(모른척)");
        break;
      case 5:
        replier.reply("멍멍");
        break;
      case 6:
        replier.reply("왈왈");
        break;
      case 7:
        replier.reply("멍멍");
        break;
      case 8:
        replier.reply("부르지마라");
        break;
    }
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
//인사해주기---------------------
  if (msg.includes('들어오면 인사해주시고 닉변')) {
    replier.reply("안녕하세요~! 공지확인하시고 닉변해주세요!");
  }
//디스코드 링크 보내주기---------------------
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
