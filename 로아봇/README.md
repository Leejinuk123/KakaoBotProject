# 로아봇
> 로아봇은 '스마일게이트'사의 **'로스트아크(LostArk)'라는 게임**의 **캐릭터 정보를 출력**해주는 봇이다.
---
### 설명
> **'/로아 {캐릭터명}'으로** 캐릭터명과 캐릭터 이미지를 **og태그**로 **카카오톡 미리보기에 출력**해준다.
>
> 여러 기능을 추가 구현할 계획이다.
>
> 구상으로는 '아이템레벨', '서버이름', '보석' 등을 추가출력해줄 예정이다.
>
> 배럭을 확인하는 기능도 최종적으로 추가할 예정이다. 배럭들은 간략한 테이블형식으로 아이템레벨과 닉네임만 표출할 예정.
---
### 실행 사진
<center><img src="https://user-images.githubusercontent.com/50895677/246991826-dcf55275-1ab2-4ca4-a067-77d62a08556a.jpeg" width="50%" height="10%"></center>

---
```html
<div class="content content--profile"> 
 <div class="profile-character-info" aria-label="대표캐릭터"> 
  <img class="profile-character-info__img" src="https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/emblem_battle_master.png" alt="배틀마스터"> <span class="profile-character-info__lv">Lv.60</span> <span class="profile-character-info__name" title="배마욱">배마욱</span> <span class="profile-character-info__server" title="@니나브">@니나브</span> <button type="button" class="button button--profile-character-list" aria-haspopup="true" aria-controls="expand-character-list" aria-expanded="false">대표캐릭터 설정</button> 
  <div id="expand-character-list" class="profile-character-list" aria-label="대표캐릭터 설정"> 
   <h3 class="profile-character-count">보유 캐릭터 <span>(<em>6</em>)</span></h3> <strong class="profile-character-list__server">@니나브</strong> 
   <ul class="profile-character-list__char"> 
    <li> <span> <button type="button" onclick="location.href='/Profile/Character/블래스터키우는우비욱'"> <img src="https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/blaster.png" alt="블래스터">Lv.60<span>블래스터키우는우비욱</span> </button> </span> </li> 
    <li> <span> <button type="button" onclick="location.href='/Profile/Character/소류향'"> <img src="https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/lance_master.png" alt="창술사">Lv.60<span>소류향</span> </button> </span> </li> 
    <li> <span> <button type="button" onclick="location.href='/Profile/Character/이름에공백도쓸수있게해줘'"> <img src="https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/destroyer.png" alt="디스트로이어">Lv.60<span>이름에공백도쓸수있게해줘</span> </button> </span> </li> 
    <li> <span> <button type="button" onclick="location.href='/Profile/Character/배마욱'"> <img src="https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/battle_master.png" alt="배틀마스터">Lv.60<span>배마욱</span> </button> </span> </li> 
    <li> <span> <button type="button" onclick="location.href='/Profile/Character/스카우터키우는우비욱'"> <img src="https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/scouter.png" alt="스카우터">Lv.60<span>스카우터키우는우비욱</span> </button> </span> </li> 
    <li> <span> <button type="button" onclick="location.href='/Profile/Character/우비욱'"> <img src="https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/holyknight.png" alt="홀리나이트">Lv.60<span>우비욱</span> </button> </span> </li> 
   </ul> <button type="button" class="button button--profile-character-close" aria-expanded="false">레이어 닫기</button> 
  </div> 
 </div> 
 <div class="profile-search"> 
  <form action=""> 
   <fieldset> 
    <input type="text" class="input input--profile-search" maxlength="12" value="" placeholder="캐릭터명을 입력해주세요."> <button type="submit" class="button button--profile-search">조회하기</button> 
   </fieldset> 
  </form> 
 </div> 
 <div class="profile-ingame"> 
  <div class="profile-info"> 
   <div class="level-info"> 
    <div class="level-info__expedition">
     <span>원정대 레벨</span><span><small>Lv.</small>162</span>
    </div> 
    <div class="level-info__item">
     <span>전투 레벨</span><span><small>Lv.</small>60</span>
    </div> 
   </div> 
   <div class="level-info2"> 
    <div class="level-info2__expedition">
     <span>장착 아이템 레벨</span><span><small>Lv.</small>1,541<small>.67</small></span>
    </div> 
    <div class="level-info2__item">
     <span>달성 아이템 레벨</span><span><small>Lv.</small>1,541<small>.67</small></span>
    </div> 
   </div> 
   <div class="game-info"> 
    <div class="game-info__title">
     <span>칭호</span><span>하얀 늑대의 친구</span>
    </div> 
    <div class="game-info__guild">
     <span>길드</span><span>짐승임시선별소</span>
    </div> 
    <div class="level-info__pvp">
     <span>PVP</span><span>20급</span>
    </div> 
    <div class="game-info__wisdom">
     <span>영지</span><span><small>Lv.</small>52</span><span>우비욱의은밀한공간</span>
    </div> 
   </div> 
  </div> 
  <div class="profile-character"> 
   <div id="profile-tab" class="lui-tab profile-tab"> 
    <div class="lui-tab__menu"> <a href="#profile-ability">능력치</a> <a href="#profile-skill">스킬</a> <a href="#profile-proof">증명의 전장</a> <a href="#profile-collection">수집형 포인트</a> 
    </div> 
    <div id="profile-ability" class="lui-tab__content profile-ability"> 
     <div class="lui-tab profile-ability-tab"> 
      <div id="profile-jewel" class="lui-tab__content profile-jewel"> 
       <div class="jewel-effect__wrap"> 
        <div class="jewel__wrap"> <span id="gem00" class="jewel_btn" data-grade="4" data-item="E6ed580eGem_000"> <span class="info">1번째 보석</span> <span class="jewel_img"><img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_62.png" alt=""></span> <span class="jewel_level">Lv.7</span> </span> <span id="gem01" class="jewel_btn" data-grade="4" data-item="E6ed580eGem_001"> <span class="info">2번째 보석</span> <span class="jewel_img"><img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_62.png" alt=""></span> <span class="jewel_level">Lv.7</span> </span> <span id="gem02" class="jewel_btn" data-grade="4" data-item="E6ed580eGem_002"> <span class="info">3번째 보석</span> <span class="jewel_img"><img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_62.png" alt=""></span> <span class="jewel_level">Lv.7</span> </span> <span id="gem03" class="jewel_btn" data-grade="4" data-item="E6ed580eGem_003"> <span class="info">4번째 보석</span> <span class="jewel_img"><img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_62.png" alt=""></span> <span class="jewel_level">Lv.7</span> </span> <span id="gem04" class="jewel_btn" data-grade="4" data-item="E6ed580eGem_004"> <span class="info">5번째 보석</span> <span class="jewel_img"><img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_52.png" alt=""></span> <span class="jewel_level">Lv.7</span> </span> <span id="gem05" class="jewel_btn" data-grade="3" data-item="E6ed580eGem_005"> <span class="info">6번째 보석</span> <span class="jewel_img"><img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_60.png" alt=""></span> <span class="jewel_level">Lv.5</span> </span> <span id="gem06" class="jewel_btn" data-grade="4" data-item="E6ed580eGem_006"> <span class="info">7번째 보석</span> <span class="jewel_img"><img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_52.png" alt=""></span> <span class="jewel_level">Lv.7</span> </span> <span id="gem07" class="jewel_btn" data-grade="4" data-item="E6ed580eGem_007"> <span class="info">8번째 보석</span> <span class="jewel_img"><img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_52.png" alt=""></span> <span class="jewel_level">Lv.7</span> </span> <span id="gem08" class="jewel_btn" data-grade="4" data-item="E6ed580eGem_008"> <span class="info">9번째 보석</span> <span class="jewel_img"><img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_62.png" alt=""></span> <span class="jewel_level">Lv.7</span> </span> <span id="gem09" class="jewel_btn" data-grade="4" data-item="E6ed580eGem_009"> <span class="info">10번째 보석</span> <span class="jewel_img"><img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_52.png" alt=""></span> <span class="jewel_level">Lv.7</span> </span> <span id="gem10" class="jewel_btn" data-grade="4" data-item="E6ed580eGem_010"> <span class="info">11번째 보석</span> <span class="jewel_img"><img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Use/Use_9_62.png" alt=""></span> <span class="jewel_level">Lv.7</span> </span> 
        </div> 
        <div class="jewel-effect__list"> 
         <h4>장착 중인 보석 효과</h4> 
         <div class="box_wrapper"> 
          <ul> 
           <li> <span class="slot" data-item="S6ed580e_003" data-gemkey="gem04"> <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BM_Skill/BM_Skill_01_3.png" alt=""> </span> <strong class="skill_tit">섬열란아</strong> <p class="skill_detail"><font color="#FFD200">섬열란아</font> 피해 21.00% 증가</p> </li> 
           <li> <span class="slot" data-item="S6ed580e_003" data-gemkey="gem00"> <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BM_Skill/BM_Skill_01_3.png" alt=""> </span> <strong class="skill_tit">섬열란아</strong> <p class="skill_detail"><font color="#FFD200">섬열란아</font> 재사용 대기시간 14.00% 감소</p> </li> 
           <li> <span class="slot" data-item="S6ed580e_010" data-gemkey="gem01"> <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BM_Skill/BM_Skill_01_4.png" alt=""> </span> <strong class="skill_tit">용맹의 포효</strong> <p class="skill_detail"><font color="#FFD200">용맹의 포효</font> 재사용 대기시간 14.00% 감소</p> </li> 
           <li> <span class="slot" data-item="S6ed580e_007" data-gemkey="gem10"> <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BM_Skill/BM_Skill_01_7.png" alt=""> </span> <strong class="skill_tit">바람의 속삭임</strong> <p class="skill_detail"><font color="#FFD200">바람의 속삭임</font> 재사용 대기시간 14.00% 감소</p> </li> 
           <li> <span class="slot" data-item="S6ed580e_002" data-gemkey="gem08"> <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BM_Skill/BM_Skill_01_18.png" alt=""> </span> <strong class="skill_tit">뇌명각</strong> <p class="skill_detail"><font color="#FFD200">뇌명각</font> 재사용 대기시간 14.00% 감소</p> </li> 
           <li> <span class="slot" data-item="S6ed580e_004" data-gemkey="gem09"> <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BM_Skill/BM_Skill_01_16.png" alt=""> </span> <strong class="skill_tit">월섬각</strong> <p class="skill_detail"><font color="#FFD200">월섬각</font> 피해 21.00% 증가</p> </li> 
           <li> <span class="slot" data-item="S6ed580e_004" data-gemkey="gem02"> <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BM_Skill/BM_Skill_01_16.png" alt=""> </span> <strong class="skill_tit">월섬각</strong> <p class="skill_detail"><font color="#FFD200">월섬각</font> 재사용 대기시간 14.00% 감소</p> </li> 
           <li> <span class="slot" data-item="S6ed580e_012" data-gemkey="gem07"> <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BM_Skill/BM_Skill_01_24.png" alt=""> </span> <strong class="skill_tit">내공연소</strong> <p class="skill_detail"><font color="#FFD200">내공연소</font> 피해 21.00% 증가</p> </li> 
           <li> <span class="slot" data-item="S6ed580e_012" data-gemkey="gem05"> <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BM_Skill/BM_Skill_01_24.png" alt=""> </span> <strong class="skill_tit">내공연소</strong> <p class="skill_detail"><font color="#FFD200">내공연소</font> 재사용 대기시간 10.00% 감소</p> </li> 
           <li> <span class="slot" data-item="S6ed580e_011" data-gemkey="gem06"> <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BM_Skill/BM_Skill_01_26.png" alt=""> </span> <strong class="skill_tit">방천격</strong> <p class="skill_detail"><font color="#FFD200">방천격</font> 피해 21.00% 증가</p> </li> 
           <li> <span class="slot" data-item="S6ed580e_011" data-gemkey="gem03"> <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BM_Skill/BM_Skill_01_26.png" alt=""> </span> <strong class="skill_tit">방천격</strong> <p class="skill_detail"><font color="#FFD200">방천격</font> 재사용 대기시간 14.00% 감소</p> </li> 
          </ul> 
         </div> 
        </div> 
       </div> 
      </div> 
      
     <div class="profile-ability-engrave"> 
      <h4>각인 효과</h4> 
      <div class="swiper-container"> 
       <div class="swiper-wrapper"> 
        <ul class="swiper-slide"> 
         <li> <span>원한 Lv. 3</span> 
          <div class="profile-ability-tooltip"> 
           <p>보스 등급 이상 몬스터에게 주는 피해가 20% 증가하지만, 받는 피해가 20% 증가한다.</p> 
          </div> </li> 
         <li> <span>예리한 둔기 Lv. 3</span> 
          <div class="profile-ability-tooltip"> 
           <p>치명타 피해량이 50% 증가하지만, 공격 시 일정 확률로 20% 감소된 피해를 준다.</p> 
          </div> </li> 
         <li> <span>초심 Lv. 3</span> 
          <div class="profile-ability-tooltip"> 
           <p>적에게 주는 피해가 40% 증가하지만, 더 이상 엘리멘탈 게이지를 획득할 수 없다.</p> 
          </div> </li> 
        </ul> 
        <ul class="swiper-slide"> 
         <li> <span>돌격대장 Lv. 3</span> 
          <div class="profile-ability-tooltip"> 
           <p>기본 이동 속도 증가량 % 의 45% 만큼 적에게 주는 피해량이 증가한다.</p> 
          </div> </li> 
         <li> <span>질량 증가 Lv. 3</span> 
          <div class="profile-ability-tooltip"> 
           <p>공격속도가 10% 감소하지만 공격력이 18% 증가한다.</p> 
          </div> </li> 
         <li> <span>아드레날린 Lv. 1</span> 
          <div class="profile-ability-tooltip"> 
           <p>이동기 및 기본공격을 제외한 스킬 사용 시 6초 동안 공격력이 0.3% 증가하며 (최대 6중첩) 해당 효과가 최대 중첩 도달 시 치명타 적중률이 추가로 5% 증가한다. 해당 효과는 스킬 취소에 따른 재사용 대기시간 감소가 적용되는 경우, 스킬 종료 후 적용된다.</p> 
          </div> </li> 
        </ul> 
       </div> 
```
