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
var enabled = false;
var participants = [];
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
//러시안룰렛게임---------------------
  if (msg == "/러시안룰렛") {
    if (enabled) {
      replier.reply("이미 러시안룰렛이 진행중입니다.");
    } else {
      replier.reply("러시안룰렛이 시작되었어요. 참여를 원하시면 '/참여'를, 참여자들이 다 모였으면 '/시작'을 입력해주세요.");
      participants = [];
      enabled = true;
      }
    }
    if (!enabled) return;
    if (msg == "/참여" || msg == "/참가") {
        if (participants.length == 6) {
            replier.reply("이미 참여자가 모두 찼습니다.");
        } else if (participants.includes(sender)) {
            replier.reply(sender + "님은 이미 참여하셨습니다.");
        } else {
            participants.push(sender);
            replier.reply(sender + "님께서 참여하셨습니다.");
        }
    }
    if (msg == "/시작") {
        if (participants.length == 0) {
            replier.reply("참여자가 없어서 시작할 수 없습니다.");
        } else {
            var bullet = Math.floor(Math.random() * 6);
            var died, result = [], index = 0;
            for (var n = 0; n < 6; n++) {
                if (participants.length == 0) {
                    result[n] = "생존자가 없어서 중단";
                    break;
                }
                if (bullet == n) {
                    result[n] = (n + 1) + "회: " + participants[index] + " 사망 ☚";
                    died = participants[index];
                    participants.splice(index, 1);
                } else {
                    result[n] = (n + 1) + "회: " + participants[index] + " 생존";
                }
                index++;
                if (index >= participants.length) index = 0;
            }
            replier.reply(died + "님께서 사망하셨습니다\n----------\n" + result.join("\n"));
            enabled = false;
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
