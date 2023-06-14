const scriptName = "러샨룰렛";
/**
 * (string) room
 * (string) sender
 * (boolean) isGroupChat
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName
 */
var enabled = false;
var selectGun = false;
var participants = [];
var maxGamer = 6;
var gunName = '셰리프(6발)';
//---------------------
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
//러시안룰렛게임---------------------
  if (msg == "/러시안룰렛") {
    if (enabled) {
      replier.reply("이미 러시안룰렛이 진행중입니다.");
    } 
    else {
      replier.reply("러시안룰렛의 총을 골라주세요.\n"+"/셰리프 : 6발 \n"+"/헤드헌터 : 8발");
      participants = [];
      enabled = true;
    }
  }
  
  if (!enabled&&!selectGun) return; //enabled 값이 false면 !enabled == true이기때문에 return이 실행되어 아래 코드가 실행되지 않는다.
  
  if (msg == "/헤드헌터"){
    maxGamer = 8;
    gunName = '헤드헌터(8발)';
    replier.reply("철컥");
    replier.reply("["
                  +gunName
                  +"]\n"
                  +"러시안룰렛이 시작되었어요.\n"
                  +"참여를 원하시면 '/참여'를, \n"
                  +"참여자들이 다 모였으면 '/시작'을 \n"
                  +"입력해주세요."
                 );  
    selectGun = true;
  }
  else if(msg == '/셰리프'){
    replier.reply("철컥");
    replier.reply("["
                  +gunName
                  +"]\n"
                  +"러시안룰렛이 시작되었어요.\n"
                  +"참여를 원하시면 '/참여'를, \n"
                  +"참여자들이 다 모였으면 '/시작'을 \n"
                  +"입력해주세요."
                 );  
    selectGun = true;
  }
  
  if (!selectGun) return; //총이 선택이 안되면 코드 중지.
  
  if (msg == "/참여" || msg == "/참가") {
    if (participants.length == maxGamer) {
      replier.reply("이미 참여자가 모두 찼습니다.");
    } 
    else if (participants.includes(sender)) {
      replier.reply(sender + "님은 이미 참여하셨습니다.");
    }
    else {
      participants.push(sender);
      replier.reply(sender + "님께서 참여하셨습니다.\n"
                    +participants.length
                    +"/"
                    +maxGamer
                   );
    }
  }
  
  if (msg == "/시작") {
    if (participants.length == 0) {
      replier.reply("참여자가 없어서 시작할 수 없습니다.");
    } 
    else {
      var bullet = Math.floor(Math.random() * maxGamer);
      var died, result = [], index = 0;
      for (var n = 0; n < maxGamer; n++) {
        if (participants.length == 0) {
          result[n] = "생존자가 없어서 중단";
          break;
        }
        if (bullet == n) {
          result[n] = (n + 1) + "회: " + participants[index] + " 사망 ☚";
          died = participants[index];
          participants.splice(index, 1);
        } 
        else {
          result[n] = (n + 1) + "회: " + participants[index] + " 생존";
        }
        index++;
        if (index >= participants.length) index = 0;
      }
      replier.reply(died + "님께서 사망하셨습니다\n----------\n" + result.join("\n"));
      enabled = false;
      selectGun = false;
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
