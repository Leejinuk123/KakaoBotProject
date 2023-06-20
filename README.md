# KakaoBotProject
> 카카오톡 봇을 개발해보자~ 
<br><br>
**JavaScript**를 이용해서 **카카오톡 봇을 개발**해보려고 한다. <br><br> 
개인적인 플젝이니 **마음가는 대로 작성**할 예정이다. <br><br>
물론 개발하고 싶은 것도 내 마음대로 고를 예정.


---
### 1. [bobBot.js](https://github.com/Leejinuk123/KakaoBotProject/tree/main/%EC%8B%9D%EB%8B%A8%EB%B4%87) ( 밥봇 )
> '오밥', '낼밥' 등의 명령어로 **오늘내일의 식단**을 확인할 수 있는 **카카오톡 봇** 개발
>
> **Jsoup을 이용**해서 식단 사이트를 **파싱**해 가공한 데이터를 이용.
>
> 세부내용은 **[해당 폴더](https://github.com/Leejinuk123/KakaoBotProject/tree/main/%EC%8B%9D%EB%8B%A8%EB%B4%87)**에서 기술
---
### 2. [russianRoulette.js](https://github.com/Leejinuk123/KakaoBotProject/tree/main/%EB%9F%AC%EC%8B%9C%EC%95%88%EB%A3%B0%EB%A0%9B) (러시안룰렛봇)
> 말그대로 러시안룰렛을 할 수 있는 봇이다.
>
> 잘 모르겠다면 해당 문서에 걸어둔 링크를 통해 알아보자..
>
> 2023/06/15 '발로란트 버전'도 추가했다!
---
### 3. [aiGomiBot.js](https://github.com/Leejinuk123/KakaoBotProject/tree/main/%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%ED%99%9C%EC%9A%A9) ( GPT활용 카카오톡 챗봇 )
> **카카오의 ChatGPT API**와 **OPENAI의 ChatGPT API를 활용**한 각각 두 개의 봇을 개발했다.
>
> 카카오의 API를 사용한 봇은 대화를 하기에는 적합하기 않지만, **[해당 문서](https://developers.kakao.com/docs/latest/ko/kogpt/common)(Kakao developers docs)**에 가면 사용방법이 나와있으니 참고바람
>
> 이와 다르게 OPENAI의 API를 활용한 Chatbot은 대화가 가능한 AI 어시스턴스 모델이다. 우리가 흔히 아는 챗봇이라는 것.
>
> 사용 방법은 하위 문서에서 기술했으니 참고바람.
---
### 4. [loaBot.js](https://github.com/Leejinuk123/KakaoBotProject/tree/main/%EB%A1%9C%EC%95%84%EB%B4%87) ( 로스트아크 군장검사 봇 )
> '스마일게이트'사의 **'로스트아크(LostArk)' 게임의 캐릭터 정보를 크롤링해 이미지화 시켜 출력**해주는 봇이다.
> 
> 설명이 딱히 필요없다. 그냥 전적검색 봇이랑 비슷한 로직이다.
> 
> 현재는 캐릭터 이미지와 닉네임을 불러와 이미지화 시키는 기능밖에 없다.
>
> 명령어는 '/로아 {닉네임}'
>
> 이미지화에는 **'Cloudinary'** 플랫폼을 사용했고, 해당 플랫폼 사용법에 관한 문서는 아래 참고문서를 참고했다.
> 
>> 참고문서
>> 
>> [카카오톡 봇 카페 Cloudinary 설명 게시글](https://cafe.naver.com/nameyee/36139)
---
