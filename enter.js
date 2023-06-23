function getRoomInfo(link, name) {
  let urls = ["https://open.kakao.com/c/search/unified?q=" + name + "&c=100&p=1", "https://open.kakao.com/c/search/unified?q=" + name + "&c=100&p=2", "https://open.kakao.com/c/search/unified?q=" + name + "&c=100&p=3", "https://open.kakao.com/c/search/unified?q=" + name + "&c=100&p=4", "https://open.kakao.com/c/search/unified?q=" + name + "&c=100&p=5"];
  var ExecutorService = java.util.concurrent.ExecutorService;
  var Executors = java.util.concurrent.Executors;
  var Callable = java.util.concurrent.Callable;
  var Future = java.util.concurrent.Future;
  function getUrlText(url) {
    try {
      return org.jsoup.Jsoup.connect(url).ignoreContentType(true).get().text();
    }
    catch (e) {
      return "";
    }
  }
  var executorService = Executors.newCachedThreadPool();
  var futures = [];
  for (var i = 0; i < 5; i++) {
    var task = new Callable({call: (function (i) {
      return function () {
        return getUrlText(urls[i]);
            };
    })(i)});
    var future = executorService.submit(task);
    futures.push(future);
  }
  executorService.shutdown();
  while (!executorService.isTerminated()) {
    }
  var results = [];
  for (var i = 0; i < futures.length; i++) {
    var result = futures[i].get();
    results.push(result);
  }
  for (var c in results) {
    let tar = JSON.parse(results[c]);
    if (tar.items.length == 0) {
      result = {"page": 0, "count": 0, "totalCount": 0, "status": 0};
      break;
    } else {
      let b = tar.items.find((obj) => obj.lu === link);
      if (b == undefined) {
        continue;
      } else {
        result = b;
        break;
      }
    }
  }  
  return result;
}
function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName){
  if( msg==("/방정보")){
    let jsonData = JSON.stringify(getRoomInfo("https://open.kakao.com/o/giQ3rfrf","테스트1"),0,2); //데이터 받아오기
    if(jsonData == null) return; //예외처리
    
    let jsonObj = JSON.parse(jsonData.text()); //json으로 파싱
    replier.reply(jsonObj.mcnt, jsonObj.rc);
  }
}
