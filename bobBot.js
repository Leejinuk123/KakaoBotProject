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
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if (msg == "오밥") {
    var command;
    var date = new Date();
    command = date.getDay();
    showMenu(command);
  } else if (msg == "낼밥") {
    var command;
    var date = new Date();
    if (date.getDay() == 6) command = date.getDay() - 6;
    else command = date.getDay() + 1;
    showMenu(command);
  }
  //data[1] : 월 ~ data[7] : 일
  //data는 아침~점심~저녁 다음요일 첫글자 출력
  //weekMenu[0]을 해야 아침~점심~저녁만 나온다.
  //getDay를 사용하면 일:0 월:1 순으로 숫자가 출력
  //case문으로 사용하면된다.
  function showMenu(command) {
    var data = org.jsoup.Jsoup.connect("https://dorm.andong.ac.kr/2019//food_menu/food_menu.htm").get();
    data = data.select("tbody").text();
    data = data.split("요일");
    splitString = [" 화", " 수", " 목", " 금", " 토", " 일", " "];
    switch (command) {
      //월
      case 1:
        bringMenu(command, data);
        break;

      case 2:
        bringMenu(command, data);
        break;

      case 3:
        bringMenu(command, data);
        break;

      case 4:
        bringMenu(command, data);
        break;
      //금
      case 5:
        bringMenu(command, data);
        break;
      //토
      case 6:
        bringMenu(command, data);
        break;
      //일 command = 0 일요일은 data[7]
      case 0:
        bringMenu(command, data);
        break;
    }
  }
  function messageOut(weekMenu) {
    breakfast = weekMenu[0].split("점심"); //breakfast[0] 아침
    lunch = breakfast[1].split("저녁"); // lunch[0] 점심
    dinner = lunch[1]; // dinner 저녁
    message =
      "아침\n-----\n" +
      breakfast[0] +
      "\n점심\n-----\n" +
      lunch[0] +
      "\n저녁\n-----\n" +
      dinner;
    replier.reply(message);
  }
  function bringMenu(command, data) {
    //일요일이면? command=0, data[7]
    if (command == 0) command = 7;
    weekMenu = data[command].split("아침");
    weekMenu = weekMenu[1].split(splitString[command - 1]);
    messageOut(weekMenu);
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
