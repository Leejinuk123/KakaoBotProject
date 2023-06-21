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
'''html
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
   <div class="special-info"> 
    <div class="special-info__item"> <span>특수장비</span> 
     <ul class="special-info__slot"> 
      <li> 
       <div class="slot" data-grade="3" data-item="E6ed580e_027"> 
        <div class="slot_img">
         <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Acc/Acc_310.png" alt="">
        </div> <span><p align="CENTER"><font color="#ce43fc">특제 순은 나침반</font></p></span> 
       </div> </li> 
      <li> 
       <div class="slot" data-grade="2" data-item="E6ed580e_028"> 
        <div class="slot_img">
         <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Acc/Acc_305.png" alt="">
        </div> <span><p align="CENTER"><font color="#00B0FA">은은한 원석 부적</font></p></span> 
       </div> </li> 
      <li> 
       <div class="slot" data-grade=""> 
        <div class="slot_img"></div> 
       </div> </li> 
     </ul> 
    </div> 
   </div> 
  </div> 
  <div class="profile-character"> 
   <div id="profile-tab" class="lui-tab profile-tab"> 
    <div class="lui-tab__menu"> <a href="#profile-ability">능력치</a> <a href="#profile-skill">스킬</a> <a href="#profile-proof">증명의 전장</a> <a href="#profile-collection">수집형 포인트</a> 
    </div> 
    <div id="profile-ability" class="lui-tab__content profile-ability"> 
     <div class="lui-tab profile-ability-tab"> 
      <div class="lui-tab__menu ability-menu"> <a href="#profile-equipment">장비</a> <a href="#profile-avatar">아바타</a> <a href="#profile-jewel" class="tab-full">보석</a> <a href="#profile-card" class="tab-full">카드</a> 
      </div> 
      <div id="profile-equipment" class="lui-tab__content profile-equipment"> 
       <div class="profile-equipment__character"> 
        <img src="https://img.lostark.co.kr/armory/1/4256D836F6B31EC68C9A5A823C6FEEE47EDA0EB94BC7B81AC38A0C56002DA940.png?v=20230619035836" alt="배틀마스터"> <span class="txt_notice">캐릭터 착용 장비와 이미지는 게임 내 이미지와 상이할 수 있습니다.</span> 
       </div> 
       <div class="profile-equipment__slot"> 
        <div class="slot1" data-grade="5" data-item="E6ed580e_001">
         <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BM_Item/BM_Item_01_139.png" alt="">
        </div> 
        <div class="slot2" data-grade="5" data-item="E6ed580e_005">
         <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BM_Item/BM_Item_01_140.png" alt="">
        </div> 
        <div class="slot3" data-grade="5" data-item="E6ed580e_002">
         <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BM_Item/BM_Item_01_142.png" alt="">
        </div> 
        <div class="slot4" data-grade="5" data-item="E6ed580e_003">
         <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BM_Item/BM_Item_01_143.png" alt="">
        </div> 
        <div class="slot5" data-grade="6" data-item="E6ed580e_004">
         <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BM_Item/BM_Item_01_141.png" alt="">
        </div> 
        <div class="slot6" data-grade="6" data-item="E6ed580e_000">
         <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/BM_Item/BM_Item_01_145.png" alt="">
        </div> 
        <div class="slot7" data-grade="6" data-item="E6ed580e_006">
         <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Acc/Acc_213.png" alt="">
        </div> 
        <div class="slot8" data-grade="6" data-item="E6ed580e_007">
         <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Acc/Acc_113.png" alt="">
        </div> 
        <div class="slot9" data-grade="6" data-item="E6ed580e_008">
         <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Acc/Acc_113.png" alt="">
        </div> 
        <div class="slot10" data-grade="6" data-item="E6ed580e_009">
         <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Acc/Acc_11.png" alt="">
        </div> 
        <div class="slot11" data-grade="6" data-item="E6ed580e_010">
         <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Acc/Acc_20.png" alt="">
        </div> 
        <div class="slot12" data-grade="6" data-item="E6ed580e_026">
         <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Acc/Acc_304.png" alt="">
        </div> 
        <div class="slot13" data-grade="5" data-item="E6ed580e_011">
         <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Ability/Ability_22.png" alt="">
        </div> 
        <div class="slot14" data-grade="0" data-item="G6ed580e_000">
         <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Ability/Ability_231.png" alt="">
        </div> 
        <div class="slot15" data-grade="0" data-item="G6ed580e_001">
         <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Ability/Ability_25.png" alt="">
        </div> 
       </div> 
      </div> 
      <div id="profile-avatar" class="lui-tab__content profile-avatar"> 
       <div class="profile-equipment__character"> 
        <img src="https://img.lostark.co.kr/armory/1/4256D836F6B31EC68C9A5A823C6FEEE47EDA0EB94BC7B81AC38A0C56002DA940.png?v=20230619035836" alt="배틀마스터"> <span class="txt_notice">캐릭터 착용 장비와 이미지는 게임 내 이미지와 상이할 수 있습니다.</span> 
       </div> 
       <div class="profile-avatar__slot"> 
        <div class="slot1" data-grade="3" data-item="E6ed580e_012">
         <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Shop_icon/Shop_icon_6212.png" alt="">
        </div> 
        <div class="slot2" data-grade=""></div> 
        <div class="slot3" data-grade="3" data-item="E6ed580e_013">
         <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Event_Avatar/Event_Avatar_173.png" alt="">
        </div> 
        <div class="slot4" data-grade=""></div> 
        <div class="slot5" data-grade="3" data-item="E6ed580e_018">
         <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Shop_icon/Shop_icon_6210.png" alt="">
        </div> 
        <div class="slot6" data-grade="3" data-item="E6ed580e_014">
         <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Shop_icon/Shop_icon_6208.png" alt="">
        </div> 
        <div class="slot7" data-grade="3" data-item="E6ed580e_015">
         <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Shop_icon/Shop_icon_6209.png" alt="">
        </div> 
        <div class="slot8" data-grade="3" data-item="E6ed580e_030">
         <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Moving_Effect/Moving_Effect_3.png" alt="">
        </div> 
       </div> 
      </div> 
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
      <div id="profile-card" class="lui-tab__content profile-card"> 
       <div id="card-tab" class="profile-card__list"> 
        <div class="card-set__button"> <button type="button" id="btnCardSet" data-cardlist="[0,1,2,3,4,5]" data-cardsetindex="0">세트효과0</button> <button type="button" id="btnCardSet" data-cardlist="[0,2]" data-cardsetindex="1">세트효과1</button> 
        </div> 
        <ul id="cardList" class="card-list"> 
         <li data-cardindex="0"> 
          <div class="card-slot" data-grade="5" data-awake="3" data-awakemax="5" data-item="C6ed580e_000"> <strong><font color="#F99200">바훈투르</font></strong> 
           <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Card_Legend/Card_Legend_02_1.png" alt=""> 
           <div class="card-awake">
            <div class="awake"></div>
           </div> 
          </div> </li> 
         <li data-cardindex="1"> 
          <div class="card-slot" data-grade="5" data-awake="4" data-awakemax="5" data-item="C6ed580e_001"> <strong><font color="#F99200">샨디</font></strong> 
           <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Card_Legend/Card_Legend_00_4.png" alt=""> 
           <div class="card-awake">
            <div class="awake"></div>
           </div> 
          </div> </li> 
         <li data-cardindex="2"> 
          <div class="card-slot" data-grade="5" data-awake="2" data-awakemax="5" data-item="C6ed580e_002"> <strong><font color="#F99200">아제나&amp;이난나</font></strong> 
           <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Card_Legend/Card_Legend_02_0.png" alt=""> 
           <div class="card-awake">
            <div class="awake"></div>
           </div> 
          </div> </li> 
         <li data-cardindex="3"> 
          <div class="card-slot" data-grade="5" data-awake="3" data-awakemax="5" data-item="C6ed580e_003"> <strong><font color="#F99200">실리안</font></strong> 
           <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Card_Legend/Card_Legend_00_1.png" alt=""> 
           <div class="card-awake">
            <div class="awake"></div>
           </div> 
          </div> </li> 
         <li data-cardindex="4"> 
          <div class="card-slot" data-grade="5" data-awake="4" data-awakemax="5" data-item="C6ed580e_004"> <strong><font color="#F99200">웨이</font></strong> 
           <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Card_Legend/Card_Legend_01_0.png" alt=""> 
           <div class="card-awake">
            <div class="awake"></div>
           </div> 
          </div> </li> 
         <li data-cardindex="5"> 
          <div class="card-slot" data-grade="5" data-awake="2" data-awakemax="5" data-item="C6ed580e_005"> <strong><font color="#F99200">카단</font></strong> 
           <img src="https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/Card_Legend/Card_Legend_02_7.png" alt=""> 
           <div class="card-awake">
            <div class="awake"></div>
           </div> 
          </div> </li> 
        </ul> 
       </div> 
       <div class="profile-card__text"> 
        <h4>장착 중인 카드 효과</h4> 
        <div class="profile-card__content"> 
         <ul id="cardSetList" class="card-effect"> 
          <li data-cardsetindex="0"> 
           <div class="card-effect__title">
            세상을 구하는 빛 2세트
           </div> 
           <div class="card-effect__dsc">
            암속성 피해 감소 +10.00%
           </div> </li> 
          <li data-cardsetindex="0"> 
           <div class="card-effect__title">
            세상을 구하는 빛 4세트
           </div> 
           <div class="card-effect__dsc">
            암속성 피해 감소 +10.00%
           </div> </li> 
          <li data-cardsetindex="0"> 
           <div class="card-effect__title">
            세상을 구하는 빛 6세트
           </div> 
           <div class="card-effect__dsc">
            암속성 피해 감소 +10.00%
           </div> </li> 
          <li data-cardsetindex="0"> 
           <div class="card-effect__title">
            세상을 구하는 빛 6세트 (12각성합계)
           </div> 
           <div class="card-effect__dsc">
            공격 속성을 성속성으로 변환
           </div> </li> 
          <li data-cardsetindex="0"> 
           <div class="card-effect__title">
            세상을 구하는 빛 6세트 (18각성합계)
           </div> 
           <div class="card-effect__dsc">
            성속성 피해 +7.00%
           </div> </li> 
         </ul> 
        </div> 
       </div> 
      </div> 
     </div> 
     <div class="profile-ability-basic"> 
      <h4>기본 특성</h4> 
      <ul> 
       <li> <span>공격력</span> <span>40725</span> 
        <div class="profile-ability-tooltip"> 
         <ul> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 적에게 주는 피해를 계산할 때 기준이 되는 값입니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 힘, 민첩, 지능과 무기 공격력을 기반으로 증가한 기본 공격력은 
            <font color="#99ff99">34513</font> 입니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 공격력 증감 효과로 공격력이 
            <font color="#99ff99">6212</font> 증가되었습니다.
           </textformat></li> 
         </ul> 
        </div> </li> 
       <li> <span>최대 생명력</span> <span>132945</span> 
        <div class="profile-ability-tooltip"> 
         <ul> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 캐릭터의 최대 생명력을 나타냅니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <textformat indent="-21" leftmargin="10">
             <font> </font> 체력으로 최대 생명력이 
             <font color="#99ff99">113429</font> 증가되었습니다.
            </textformat>
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 생명 활성력으로 최대 생명력이 
            <font color="#99ff99">13.79%</font> 증가되었습니다.
           </textformat></li> 
         </ul> 
        </div> </li> 
      </ul> 
     </div> 
     <div class="profile-ability-battle"> 
      <h4>전투 특성</h4> 
      <ul> 
       <li> <span>치명</span> <span>498</span> 
        <div class="profile-ability-tooltip"> 
         <ul> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 치명타 적중률이 
            <font color="#99ff99">17.82%</font> 증가합니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 물약 및 원정대 레벨 보상 효과로 
            <font color="#99ff99">12</font>만큼 영구적으로 증가되었습니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 카드 도감 누적 효과가 반영된 값으로 전투정보실에서는 별도 수치를 표기하지 않습니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 카드 도감 누적 효과가 반영된 값으로 전투정보실에서는 별도 수치를 표기하지 않습니다.
           </textformat></li> 
         </ul> 
        </div> </li> 
       <li> <span>특화</span> <span>51</span> 
        <div class="profile-ability-tooltip"> 
         <ul> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 오의 스킬의 피해량이 
            <font color="#99ff99">1.96%</font> 증가합니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 엘리멘탈 게이지 획득량이 
            <font color="#99ff99">5.10%</font> 증가합니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 각성 스킬의 피해량이 
            <font color="#99ff99">2.78%</font> 증가합니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 물약 및 원정대 레벨 보상 효과로 
            <font color="#99ff99">24</font>만큼 영구적으로 증가되었습니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 카드 도감 누적 효과가 반영된 값으로 전투정보실에서는 별도 수치를 표기하지 않습니다.
           </textformat></li> 
         </ul> 
        </div> </li> 
       <li> <span>제압</span> <span>40</span> 
        <div class="profile-ability-tooltip"> 
         <ul> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 피격이상 및 상태이상 대상에게 주는 피해량이 
            <font color="#99ff99">2.45%</font> 증가합니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 무력화 대상에게 주는 피해량이 
            <font color="#99ff99"></font> 증가합니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 물약 및 원정대 레벨 보상 효과로 
            <font color="#99ff99">24</font>만큼 영구적으로 증가되었습니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 카드 도감 누적 효과가 반영된 값으로 전투정보실에서는 별도 수치를 표기하지 않습니다.
           </textformat></li> 
         </ul> 
        </div> </li> 
       <li> <span>신속</span> <span>1686</span> 
        <div class="profile-ability-tooltip"> 
         <ul> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 공격 속도가 
            <font color="#99ff99">28.96%</font> 증가합니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 이동 속도가 
            <font color="#99ff99">28.96%</font> 증가합니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 스킬 재사용 대기시간이 
            <font color="#99ff99">36.20%</font> 감소합니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 물약 및 원정대 레벨 보상 효과로 
            <font color="#99ff99">16</font>만큼 영구적으로 증가되었습니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 카드 도감 누적 효과가 반영된 값으로 전투정보실에서는 별도 수치를 표기하지 않습니다.
           </textformat></li> 
         </ul> 
        </div> </li> 
       <li> <span>인내</span> <span>57</span> 
        <div class="profile-ability-tooltip"> 
         <ul> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 물리 방어력이 
            <font color="#99ff99">4.66%</font> 증가합니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 마법 방어력이 
            <font color="#99ff99">4.66%</font> 증가합니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 보호막 효과가 
            <font color="#99ff99">1.45%</font> 증가합니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 생명력 회복 효과가 
            <font color="#99ff99">2.03%</font> 증가합니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 물약 및 원정대 레벨 보상 효과로 
            <font color="#99ff99">28</font>만큼 영구적으로 증가되었습니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 카드 도감 누적 효과가 반영된 값으로 전투정보실에서는 별도 수치를 표기하지 않습니다.
           </textformat></li> 
         </ul> 
        </div> </li> 
       <li> <span>숙련</span> <span>40</span> 
        <div class="profile-ability-tooltip"> 
         <ul> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 상태이상 공격 지속시간이 
            <font color="#99ff99">1.71%</font> 증가합니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 상태이상 피해 지속시간이 
            <font color="#99ff99">1.43%</font> 감소합니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 무력화 피해량이 
            <font color="#99ff99">1.14%</font> 증가합니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 물약 및 원정대 레벨 보상 효과로 
            <font color="#99ff99">20</font>만큼 영구적으로 증가되었습니다.
           </textformat></li> 
          <li>
           <textformat indent="-21" leftmargin="10">
            <font> </font> 카드 도감 누적 효과가 반영된 값으로 전투정보실에서는 별도 수치를 표기하지 않습니다.
           </textformat></li> 
         </ul> 
        </div> </li> 
      </ul> 
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
       <div class="swiper-option"> 
        <div class="swiper-button-prev"></div> 
        <div class="swiper-pagination"></div> 
        <div class="swiper-button-next"></div> 
       </div> 
      </div> 
     </div> 
     <div class="profile-ability-tendency"> 
      <h4>성향</h4> 
      <div class="chart-states-wrap" id="chart-states-wrap"> 
       <canvas id="chart-states"></canvas> 
      </div> 
     </div> 
     <script type="text/javascript">
		$.Profile = {
  "Card": {
    "C6ed580e_000": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<FONT COLOR='#F99200'>바훈투르</FONT>"
      },
      "Element_001": {
        "type": "Card",
        "value": {
          "awakeCount": 3,
          "awakeTotal": 5,
          "cardStack": "",
          "iconData": {
            "iconPath": "EFUI_IconAtlas/Card_Legend/Card_Legend_02_1.png"
          },
          "isBookMark": false,
          "tierGrade": 5
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "에스더 갈라투르의 후계자. 유쾌하고 허세 많지만, 의리 넘치는 성격."
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "<Font color='#5FD3F1'>[어비스 던전] </font><BR><Font color='#5FD3F1'>[업적] 모험 - 쇼는 계속되어야 한다!</font><BR>"
      }
    },
    "C6ed580e_001": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<FONT COLOR='#F99200'>샨디</FONT>"
      },
      "Element_001": {
        "type": "Card",
        "value": {
          "awakeCount": 4,
          "awakeTotal": 5,
          "cardStack": "",
          "iconData": {
            "iconPath": "EFUI_IconAtlas/Card_Legend/Card_Legend_00_4.png"
          },
          "isBookMark": false,
          "tierGrade": 5
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "7인의 에스더 중 한 명. 자유분방한 성격으로, 제자와 함께 세상을 유랑하고 있다. "
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "<Font color='#5FD3F1'>[어비스 던전] </font><BR>"
      }
    },
    "C6ed580e_002": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<FONT COLOR='#F99200'>아제나&이난나</FONT>"
      },
      "Element_001": {
        "type": "Card",
        "value": {
          "awakeCount": 2,
          "awakeTotal": 5,
          "cardStack": "",
          "iconData": {
            "iconPath": "EFUI_IconAtlas/Card_Legend/Card_Legend_02_0.png"
          },
          "isBookMark": false,
          "tierGrade": 5
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "에스더의 일원으로, 실린들을 다스리는 실린여왕. 하나의 몸에 두 개의 영혼을 지니고 있다."
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "<Font color='#5FD3F1'>[어비스 던전] </font><BR><Font color='#5FD3F1'>[호감도] 로아룬 - 아제나</font><BR>"
      }
    },
    "C6ed580e_003": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<FONT COLOR='#F99200'>실리안</FONT>"
      },
      "Element_001": {
        "type": "Card",
        "value": {
          "awakeCount": 3,
          "awakeTotal": 5,
          "cardStack": "",
          "iconData": {
            "iconPath": "EFUI_IconAtlas/Card_Legend/Card_Legend_00_1.png"
          },
          "isBookMark": false,
          "tierGrade": 5
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "루테란의 왕자. 강직하고 올곧은 성품을 지니고 있다. "
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "<Font color='#5FD3F1'>[어비스 던전] </font><BR><Font color='#5FD3F1'>[모험의 서] 루테란 동부</font><BR>"
      }
    },
    "C6ed580e_004": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<FONT COLOR='#F99200'>웨이</FONT>"
      },
      "Element_001": {
        "type": "Card",
        "value": {
          "awakeCount": 4,
          "awakeTotal": 5,
          "cardStack": "",
          "iconData": {
            "iconPath": "EFUI_IconAtlas/Card_Legend/Card_Legend_01_0.png"
          },
          "isBookMark": false,
          "tierGrade": 5
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "에스더의 이름을 이어받은 무인. 스승을 죽인 불사귀 도철을 제압하여, 세상을 구하기 위해 나선다."
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "<Font color='#5FD3F1'>[물물교환] 애니츠 - 떠돌이 상인</font><BR><Font color='#5FD3F1'>[업적] 모험 - 보스 헌터 : 고급</font><BR>"
      }
    },
    "C6ed580e_005": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<FONT COLOR='#F99200'>카단</FONT>"
      },
      "Element_001": {
        "type": "Card",
        "value": {
          "awakeCount": 2,
          "awakeTotal": 5,
          "cardStack": "",
          "iconData": {
            "iconPath": "EFUI_IconAtlas/Card_Legend/Card_Legend_02_7.png"
          },
          "isBookMark": false,
          "tierGrade": 5
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "모든 것이 비밀에 감춰져 있는 에스더의 일원. 최초의 가디언 슬레이어로 불린다."
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "<Font color='#5FD3F1'>[퀘스트] 이스테르 - 상처 입은 새의 눈물</font><BR><Font color='#5FD3F1'>[어비스 던전] 카양겔</font><BR>"
      }
    }
  },
  "CardSet": {
    "CardSetEffect_000": {
      "EffectIndex": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "Effect_000": {
        "desc": "암속성 피해 감소 +10.00%",
        "title": "세상을 구하는 빛 2세트"
      },
      "Effect_001": {
        "desc": "암속성 피해 감소 +10.00%",
        "title": "세상을 구하는 빛 4세트"
      },
      "Effect_002": {
        "desc": "암속성 피해 감소 +10.00%",
        "title": "세상을 구하는 빛 6세트"
      },
      "Effect_003": {
        "desc": "공격 속성을 성속성으로 변환",
        "title": "세상을 구하는 빛 6세트 (12각성합계)"
      },
      "Effect_004": {
        "desc": "성속성 피해 +7.00%",
        "title": "세상을 구하는 빛 6세트 (18각성합계)"
      }
    },
    "CardSetEffect_001": {
      "EffectIndex": [
        0,
        2
      ]
    }
  },
  "Engrave": {
    "G6ed580e_000": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "질량 증가"
      },
      "Element_001": {
        "type": "EngraveSkillTitle",
        "value": {
          "forceMiddleText": "",
          "leftText": "<FONT COLOR='#F5ECCE'><img src='emoticon_tooltip_engrave_point' width='20' height='20' vspace='-7'></img>각인 활성 포인트 +12</FONT>",
          "name": "일반",
          "rightText": "",
          "slotData": {
            "iconGrade": 0,
            "iconPath": "EFUI_IconAtlas/Ability/Ability_231.png",
            "imagePath": ""
          }
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "장착 시, 캐릭터에 <FONT COLOR='#FFFFAC'>질량 증가</FONT> 각인의 각인 활성 포인트를 <FONT COLOR='#FFD200'>12</FONT>만큼 부여합니다."
      },
      "Element_003": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<font color='#A9D0F5'>레벨 별 효과보기</font>",
          "Element_001": "<font color='#686660'>레벨 1 (활성도 5) - 공격속도가 10% 감소하지만 공격력이 4% 증가한다.</font><BR><font color='#686660'>레벨 2 (활성도 10) - 공격속도가 10% 감소하지만 공격력이 10% 증가한다.</font><BR><font color='#686660'>레벨 3 (활성도 15) - 공격속도가 10% 감소하지만 공격력이 18% 증가한다.</font>"
        }
      },
      "Element_004": {
        "type": "BlinkLine",
        "value": 8
      }
    },
    "G6ed580e_001": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "초심"
      },
      "Element_001": {
        "type": "EngraveSkillTitle",
        "value": {
          "forceMiddleText": "배틀마스터 전용",
          "leftText": "<FONT COLOR='#F5ECCE'><img src='emoticon_tooltip_engrave_point' width='20' height='20' vspace='-7'></img>각인 활성 포인트 +12</FONT>",
          "name": "직업",
          "rightText": "",
          "slotData": {
            "iconGrade": 0,
            "iconPath": "EFUI_IconAtlas/Ability/Ability_25.png",
            "imagePath": ""
          }
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "장착 시, 캐릭터에 <FONT COLOR='#FFFFAC'>초심</FONT> 각인의 각인 활성 포인트를 <FONT COLOR='#FFD200'>12</FONT>만큼 부여합니다."
      },
      "Element_003": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<font color='#A9D0F5'>레벨 별 효과보기</font>",
          "Element_001": "<font color='#686660'>레벨 1 (활성도 5) - 적에게 주는 피해가 20% 증가하지만, 더 이상 엘리멘탈 게이지를 획득할 수 없다.</font><BR><font color='#686660'>레벨 2 (활성도 10) - 적에게 주는 피해가 30% 증가하지만, 더 이상 엘리멘탈 게이지를 획득할 수 없다.</font><BR><font color='#686660'>레벨 3 (활성도 15) - 적에게 주는 피해가 40% 증가하지만, 더 이상 엘리멘탈 게이지를 획득할 수 없다.</font>"
        }
      },
      "Element_004": {
        "type": "BlinkLine",
        "value": 8
      }
    }
  },
  "Equip": {
    "E6ed580eGem_000": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#F99200'>7레벨 홍염의 보석</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#F99200'>전설 보석</FONT></FONT>",
          "leftStr2": "<FONT SIZE='14'>아이템 티어 3</FONT>",
          "qualityValue": -1,
          "rightStr0": "",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 4,
            "iconPath": "EFUI_IconAtlas/Use/Use_9_62.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "Lv.7",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "MultiTextBox",
        "value": "|거래가능"
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "보석 레벨 7"
      },
      "Element_004": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>효과</FONT>",
          "Element_001": "[배틀마스터] <FONT COLOR='#FFD200'>섬열란아</FONT> 재사용 대기시간 14.00% 감소"
        }
      },
      "Element_005": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>분해불가</FONT></FONT>"
      }
    },
    "E6ed580eGem_001": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#F99200'>7레벨 홍염의 보석</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#F99200'>전설 보석</FONT></FONT>",
          "leftStr2": "<FONT SIZE='14'>아이템 티어 3</FONT>",
          "qualityValue": -1,
          "rightStr0": "",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 4,
            "iconPath": "EFUI_IconAtlas/Use/Use_9_62.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "Lv.7",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "MultiTextBox",
        "value": "|거래가능"
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "보석 레벨 7"
      },
      "Element_004": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>효과</FONT>",
          "Element_001": "[배틀마스터] <FONT COLOR='#FFD200'>용맹의 포효</FONT> 재사용 대기시간 14.00% 감소"
        }
      },
      "Element_005": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>분해불가</FONT></FONT>"
      }
    },
    "E6ed580eGem_002": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#F99200'>7레벨 홍염의 보석</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#F99200'>전설 보석</FONT></FONT>",
          "leftStr2": "<FONT SIZE='14'>아이템 티어 3</FONT>",
          "qualityValue": -1,
          "rightStr0": "",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 4,
            "iconPath": "EFUI_IconAtlas/Use/Use_9_62.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "Lv.7",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "MultiTextBox",
        "value": "|거래가능"
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "보석 레벨 7"
      },
      "Element_004": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>효과</FONT>",
          "Element_001": "[배틀마스터] <FONT COLOR='#FFD200'>월섬각</FONT> 재사용 대기시간 14.00% 감소"
        }
      },
      "Element_005": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>분해불가</FONT></FONT>"
      }
    },
    "E6ed580eGem_003": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#F99200'>7레벨 홍염의 보석</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#F99200'>전설 보석</FONT></FONT>",
          "leftStr2": "<FONT SIZE='14'>아이템 티어 3</FONT>",
          "qualityValue": -1,
          "rightStr0": "",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 4,
            "iconPath": "EFUI_IconAtlas/Use/Use_9_62.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "Lv.7",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "MultiTextBox",
        "value": "|거래가능"
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "보석 레벨 7"
      },
      "Element_004": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>효과</FONT>",
          "Element_001": "[배틀마스터] <FONT COLOR='#FFD200'>방천격</FONT> 재사용 대기시간 14.00% 감소"
        }
      },
      "Element_005": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>분해불가</FONT></FONT>"
      }
    },
    "E6ed580eGem_004": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#F99200'>7레벨 멸화의 보석</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#F99200'>전설 보석</FONT></FONT>",
          "leftStr2": "<FONT SIZE='14'>아이템 티어 3</FONT>",
          "qualityValue": -1,
          "rightStr0": "",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 4,
            "iconPath": "EFUI_IconAtlas/Use/Use_9_52.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "Lv.7",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "MultiTextBox",
        "value": "|거래가능"
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "보석 레벨 7"
      },
      "Element_004": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>효과</FONT>",
          "Element_001": "[배틀마스터] <FONT COLOR='#FFD200'>섬열란아</FONT> 피해 21.00% 증가"
        }
      },
      "Element_005": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>분해불가</FONT></FONT>"
      }
    },
    "E6ed580eGem_005": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#ce43fc'>5레벨 홍염의 보석</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#ce43fc'>영웅 보석</FONT></FONT>",
          "leftStr2": "<FONT SIZE='14'>아이템 티어 3</FONT>",
          "qualityValue": -1,
          "rightStr0": "",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 3,
            "iconPath": "EFUI_IconAtlas/Use/Use_9_60.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "Lv.5",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "MultiTextBox",
        "value": "|거래가능"
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "보석 레벨 5"
      },
      "Element_004": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>효과</FONT>",
          "Element_001": "[배틀마스터] <FONT COLOR='#FFD200'>내공연소</FONT> 재사용 대기시간 10.00% 감소"
        }
      },
      "Element_005": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>분해불가</FONT></FONT>"
      },
      "Element_006": {
        "type": "SingleTextBox",
        "value": "<Font color='#5FD3F1'>[에브니 큐브] </font>"
      }
    },
    "E6ed580eGem_006": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#F99200'>7레벨 멸화의 보석</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#F99200'>전설 보석</FONT></FONT>",
          "leftStr2": "<FONT SIZE='14'>아이템 티어 3</FONT>",
          "qualityValue": -1,
          "rightStr0": "",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 4,
            "iconPath": "EFUI_IconAtlas/Use/Use_9_52.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "Lv.7",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "MultiTextBox",
        "value": "|거래가능"
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "보석 레벨 7"
      },
      "Element_004": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>효과</FONT>",
          "Element_001": "[배틀마스터] <FONT COLOR='#FFD200'>방천격</FONT> 피해 21.00% 증가"
        }
      },
      "Element_005": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>분해불가</FONT></FONT>"
      }
    },
    "E6ed580eGem_007": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#F99200'>7레벨 멸화의 보석</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#F99200'>전설 보석</FONT></FONT>",
          "leftStr2": "<FONT SIZE='14'>아이템 티어 3</FONT>",
          "qualityValue": -1,
          "rightStr0": "",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 4,
            "iconPath": "EFUI_IconAtlas/Use/Use_9_52.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "Lv.7",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "MultiTextBox",
        "value": "|거래가능"
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "보석 레벨 7"
      },
      "Element_004": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>효과</FONT>",
          "Element_001": "[배틀마스터] <FONT COLOR='#FFD200'>내공연소</FONT> 피해 21.00% 증가"
        }
      },
      "Element_005": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>분해불가</FONT></FONT>"
      }
    },
    "E6ed580eGem_008": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#F99200'>7레벨 홍염의 보석</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#F99200'>전설 보석</FONT></FONT>",
          "leftStr2": "<FONT SIZE='14'>아이템 티어 3</FONT>",
          "qualityValue": -1,
          "rightStr0": "",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 4,
            "iconPath": "EFUI_IconAtlas/Use/Use_9_62.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "Lv.7",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "MultiTextBox",
        "value": "|거래가능"
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "보석 레벨 7"
      },
      "Element_004": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>효과</FONT>",
          "Element_001": "[배틀마스터] <FONT COLOR='#FFD200'>뇌명각</FONT> 재사용 대기시간 14.00% 감소"
        }
      },
      "Element_005": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>분해불가</FONT></FONT>"
      }
    },
    "E6ed580eGem_009": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#F99200'>7레벨 멸화의 보석</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#F99200'>전설 보석</FONT></FONT>",
          "leftStr2": "<FONT SIZE='14'>아이템 티어 3</FONT>",
          "qualityValue": -1,
          "rightStr0": "",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 4,
            "iconPath": "EFUI_IconAtlas/Use/Use_9_52.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "Lv.7",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "MultiTextBox",
        "value": "|거래가능"
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "보석 레벨 7"
      },
      "Element_004": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>효과</FONT>",
          "Element_001": "[배틀마스터] <FONT COLOR='#FFD200'>월섬각</FONT> 피해 21.00% 증가"
        }
      },
      "Element_005": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>분해불가</FONT></FONT>"
      }
    },
    "E6ed580eGem_010": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#F99200'>7레벨 홍염의 보석</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#F99200'>전설 보석</FONT></FONT>",
          "leftStr2": "<FONT SIZE='14'>아이템 티어 3</FONT>",
          "qualityValue": -1,
          "rightStr0": "",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 4,
            "iconPath": "EFUI_IconAtlas/Use/Use_9_62.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "Lv.7",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "MultiTextBox",
        "value": "|거래가능"
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "보석 레벨 7"
      },
      "Element_004": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>효과</FONT>",
          "Element_001": "[배틀마스터] <FONT COLOR='#FFD200'>바람의 속삭임</FONT> 재사용 대기시간 14.00% 감소"
        }
      },
      "Element_005": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>분해불가</FONT></FONT>"
      }
    },
    "E6ed580e_000": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#E3C7A1'>+16 굳건한 지배의 균형 건틀릿</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#E3C7A1'>고대 건틀릿</FONT></FONT>",
          "leftStr1": "<FONT SIZE='14'>품질</FONT>",
          "leftStr2": "<FONT SIZE='14'>아이템 레벨 1550 (티어 3)</FONT>",
          "qualityValue": 81,
          "rightStr0": "<FONT SIZE='12'><FONT COLOR='#FFD200'>장착중</FONT></FONT>",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 6,
            "iconPath": "EFUI_IconAtlas/BM_Item/BM_Item_01_145.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>배틀마스터 전용</FONT>"
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>캐릭터 귀속됨</FONT>"
      },
      "Element_004": {
        "type": "MultiTextBox",
        "value": "|<font color='#C24B46'>거래 불가</font>"
      },
      "Element_005": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>기본 효과</FONT>",
          "Element_001": "무기 공격력 +42232"
        }
      },
      "Element_006": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>추가 효과</FONT>",
          "Element_001": "추가 피해 +23.13%"
        }
      },
      "Element_007": {
        "type": "Progress",
        "value": {
          "forceValue": "장비 재련 가능",
          "maximum": 120000,
          "minimum": 0,
          "title": "<FONT SIZE='12'><FONT COLOR='#A9D0F5'>현재 단계 재련 경험치</FONT></FONT>",
          "value": 120000,
          "valueType": -1
        }
      },
      "Element_008": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>세트 효과 레벨</FONT>",
          "Element_001": "지배 <FONT COLOR='#FFD200'>Lv.2</FONT>"
        }
      },
      "Element_009": {
        "type": "IndentStringGroup",
        "value": {
          "Element_000": {
            "contentStr": {
              "Element_000": {
                "bPoint": false,
                "contentStr": "<font size='12'>지배 (건틀릿)</font> [<FONT COLOR='#FFD200'>Lv.2</FONT>]"
              },
              "Element_001": {
                "bPoint": false,
                "contentStr": "<font color='#aaaaaa'><font size='12'>지배 (머리 방어구)</font></font>"
              },
              "Element_002": {
                "bPoint": false,
                "contentStr": "<font color='#aaaaaa'><font size='12'>지배 (상의)</font></font>"
              },
              "Element_003": {
                "bPoint": false,
                "contentStr": "<font color='#aaaaaa'><font size='12'>지배 (하의)</font></font>"
              },
              "Element_004": {
                "bPoint": false,
                "contentStr": "<font size='12'>지배 (장갑)</font> [<FONT COLOR='#FFD200'>Lv.2</FONT>]"
              },
              "Element_005": {
                "bPoint": false,
                "contentStr": "<font color='#aaaaaa'><font size='12'>지배 (어깨 방어구)</font></font>"
              }
            },
            "topStr": "<font size='14'><font color='#91fe02'>지배</font></font>"
          },
          "Element_001": {
            "contentStr": {
              "Element_000": {
                "bPoint": true,
                "contentStr": "<font size='12'><font color='#ffffff'>각성기로 적에게 주는 피해가 <FONT COLOR='#ff9999'>30%</FONT> 감소하지만 각성기 사용횟수가 <FONT COLOR='#99FF99'>1</FONT>회 증가하며 재사용 대기시간이 <FONT COLOR='#99FF99'>20%</FONT> 감소한다.<BR>각성기 사용 시 <FONT COLOR='#99ff99'>2</FONT>분 동안 '내면의 각성' 효과를 부여한다.<BR>'내면의 각성' : 각성기 및 이동기를 제외한 스킬 재사용 대기시간이 <FONT COLOR='#99FF99'>18%</FONT> 감소하고 스킬피해가 <FONT COLOR='#99FF99'>10%</FONT> 증가한다. </font></font>"
              }
            },
            "topStr": "<font size='14'><font color='#91fe02'>2 세트 효과<BR>[<font size='14'><font color='#aaaaaa'>Lv.1 / <FONT COLOR='#FFD200'>Lv.2</FONT> / Lv.3</font></font>]</font></font>"
          },
          "Element_002": {
            "contentStr": {
              "Element_000": {
                "bPoint": true,
                "contentStr": "<font size='12'><font color='#aaaaaa'>각성기 사용횟수가 <FONT COLOR='#99FF99'>1</FONT>회 추가 증가한다. '내면의 각성' 효과가 강화되어 각성기 및 이동기를 제외한 스킬 재사용 대기시간이 <FONT COLOR='#99FF99'>18%</FONT> 감소하고 스킬피해가 <FONT COLOR='#99FF99'>28%</FONT> 증가한다. </font></font>"
              }
            },
            "topStr": "<font size='14'><font color='#aaaaaa'>4 세트 효과<BR>[<font size='14'><font color='#aaaaaa'>Lv.1 / Lv.2 / Lv.3</font></font>]</font></font>"
          },
          "Element_003": {
            "contentStr": {
              "Element_000": {
                "bPoint": true,
                "contentStr": "<font size='12'><font color='#aaaaaa'>각성기 사용횟수가 <FONT COLOR='#99FF99'>1</FONT>회 추가 증가한다. '내면의 각성' 적용 시 이동기 재사용 대기시간이 <FONT COLOR='#99FF99'>30%</FONT> 감소하며 적에게 주는 피해가 <FONT COLOR='#99FF99'>18%</FONT> 증가하는 '강화' 효과를 <FONT COLOR='#99ff99'>2</FONT>분 동안 부여한다.</font></font>"
              }
            },
            "topStr": "<font size='14'><font color='#aaaaaa'>6 세트 효과<BR>[<font size='14'><font color='#aaaaaa'>Lv.1 / Lv.2 / Lv.3</font></font>]</font></font>"
          }
        }
      },
      "Element_010": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>분해불가</FONT></FONT>"
      },
      "Element_011": {
        "type": "SingleTextBox",
        "value": "<Font color='#5FD3F1'>[세트 업그레이드] 대도시 - 세트 장비 관리</font>"
      },
      "Element_012": {
        "type": "ShowMeTheMoney",
        "value": "<FONT SIZE='12'><FONT COLOR='#FFFFFF'>내구도 <FONT COLOR='#FFFFFF'>68 / 175</FONT></FONT></FONT>|"
      }
    },
    "E6ed580e_001": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#FA5D00'>+15 타오르는 악몽의 그림자 머리장식</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#FA5D00'>유물 머리 방어구</FONT></FONT>",
          "leftStr1": "<FONT SIZE='14'>품질</FONT>",
          "leftStr2": "<FONT SIZE='14'>아이템 레벨 1540 (티어 3)</FONT>",
          "qualityValue": 46,
          "rightStr0": "<FONT SIZE='12'><FONT COLOR='#FFD200'>장착중</FONT></FONT>",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 5,
            "iconPath": "EFUI_IconAtlas/BM_Item/BM_Item_01_139.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>배틀마스터 전용</FONT>"
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>캐릭터 귀속됨</FONT>"
      },
      "Element_004": {
        "type": "MultiTextBox",
        "value": "|<font color='#C24B46'>거래 불가</font>"
      },
      "Element_005": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>기본 효과</FONT>",
          "Element_001": "물리 방어력 +4410<BR>마법 방어력 +4900<BR>힘 +21621<BR>체력 +3950"
        }
      },
      "Element_006": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>추가 효과</FONT>",
          "Element_001": "생명 활성력 +297"
        }
      },
      "Element_007": {
        "type": "Progress",
        "value": {
          "forceValue": " ",
          "maximum": 72000,
          "minimum": 0,
          "title": "<FONT SIZE='12'><FONT COLOR='#A9D0F5'>현재 단계 재련 경험치</FONT></FONT>",
          "value": 0,
          "valueType": 1
        }
      },
      "Element_008": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>세트 효과 레벨</FONT>",
          "Element_001": "악몽 <FONT COLOR='#FFD200'>Lv.2</FONT>"
        }
      },
      "Element_009": {
        "type": "IndentStringGroup",
        "value": {
          "Element_000": {
            "contentStr": {
              "Element_000": {
                "bPoint": false,
                "contentStr": "<font color='#aaaaaa'><font size='12'>악몽 (건틀릿)</font></font>"
              },
              "Element_001": {
                "bPoint": false,
                "contentStr": "<font size='12'>악몽 (머리 방어구)</font> [<FONT COLOR='#FFD200'>Lv.2</FONT>]"
              },
              "Element_002": {
                "bPoint": false,
                "contentStr": "<font color='#aaaaaa'><font size='12'>악몽 (상의)</font></font>"
              },
              "Element_003": {
                "bPoint": false,
                "contentStr": "<font color='#aaaaaa'><font size='12'>악몽 (하의)</font></font>"
              },
              "Element_004": {
                "bPoint": false,
                "contentStr": "<font color='#aaaaaa'><font size='12'>악몽 (장갑)</font></font>"
              },
              "Element_005": {
                "bPoint": false,
                "contentStr": "<font size='12'>악몽 (어깨 방어구)</font> [<FONT COLOR='#FFD200'>Lv.2</FONT>]"
              }
            },
            "topStr": "<font size='14'><font color='#91fe02'>악몽</font></font>"
          },
          "Element_001": {
            "contentStr": {
              "Element_000": {
                "bPoint": true,
                "contentStr": "<font size='12'><font color='#ffffff'>마나 소모량이 <FONT COLOR='#99FF99'>50%</FONT> 감소하고, 마나를 소모하는 스킬의 피해가 <FONT COLOR='#99FF99'>15%</FONT> 증가한다.</font></font>"
              }
            },
            "topStr": "<font size='14'><font color='#91fe02'>2 세트 효과<BR>[<font size='14'><font color='#aaaaaa'>Lv.1 / <FONT COLOR='#FFD200'>Lv.2</FONT> / Lv.3</font></font>]</font></font>"
          },
          "Element_002": {
            "contentStr": {
              "Element_000": {
                "bPoint": true,
                "contentStr": "<font size='12'><font color='#aaaaaa'>마나를 보유하고 있는 클래스가 각성기 사용 시 '마나 중독' 효과를 획득한다.<BR>현재 마나량이 <FONT COLOR='#99FF99'>30%</FONT> 이하에서 스킬 사용 시 '마나 중독' 효과가 제거 되고 '끝없는 마나' 효과로 변경된다.<BR>'끝없는 마나' 상태에서 현재 마나량이 <FONT COLOR='#99FF99'>100%</FONT>가 될 시 해당 효과가 제거 되고 '마나 중독' 효과로 변경된다. 두 효과는 동시에 적용되지 않는다.<BR>'마나 중독' : 추가 피해가 <FONT COLOR='#99FF99'>18%</FONT> 증가 하지만 마나를 소모하는 스킬 사용 시 최대 마나량의 <FONT COLOR='#ff9999'>7%</FONT>가 추가로 소모된다.<BR>'끝없는 마나' : 매 초 마다 최대 마나량의 <FONT COLOR='#99FF99'>3%</FONT>가 회복되며 스킬 재사용 대기시간이 <FONT COLOR='#99FF99'>22%</FONT> 감소하고 공격 및 이동속도가 <FONT COLOR='#99FF99'>12%</FONT> 증가한다.</font></font>"
              }
            },
            "topStr": "<font size='14'><font color='#aaaaaa'>4 세트 효과<BR>[<font size='14'><font color='#aaaaaa'>Lv.1 / Lv.2 / Lv.3</font></font>]</font></font>"
          },
          "Element_003": {
            "contentStr": {
              "Element_000": {
                "bPoint": true,
                "contentStr": "<font size='12'><font color='#aaaaaa'>'마나 중독' 효과 시 적에게 주는 피해가 <FONT COLOR='#99FF99'>18%</FONT> 추가 증가한다.<BR>'끝없는 마나' 효과 시 스킬 재사용 대기시간이 <FONT COLOR='#99FF99'>18%</FONT> 추가 감소하고, 공격 및 이동속도가 <FONT COLOR='#99FF99'>3%</FONT> 추가 증가한다.</font></font>"
              }
            },
            "topStr": "<font size='14'><font color='#aaaaaa'>6 세트 효과<BR>[<font size='14'><font color='#aaaaaa'>Lv.1 / Lv.2 / Lv.3</font></font>]</font></font>"
          }
        }
      },
      "Element_010": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>분해불가</FONT></FONT>"
      },
      "Element_011": {
        "type": "SingleTextBox",
        "value": "<Font color='#5FD3F1'>[세트 업그레이드] 대도시 - 세트 장비 관리</font>"
      },
      "Element_012": {
        "type": "ShowMeTheMoney",
        "value": "<FONT SIZE='12'><FONT COLOR='#FFFFFF'>내구도 <FONT COLOR='#FFFFFF'>41 / 64</FONT></FONT></FONT>|"
      }
    },
    "E6ed580e_002": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#FA5D00'>+15 메마른 사멸의 밤 상의</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#FA5D00'>유물 상의</FONT></FONT>",
          "leftStr1": "<FONT SIZE='14'>품질</FONT>",
          "leftStr2": "<FONT SIZE='14'>아이템 레벨 1540 (티어 3)</FONT>",
          "qualityValue": 45,
          "rightStr0": "<FONT SIZE='12'><FONT COLOR='#FFD200'>장착중</FONT></FONT>",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 5,
            "iconPath": "EFUI_IconAtlas/BM_Item/BM_Item_01_142.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>배틀마스터 전용</FONT>"
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>캐릭터 귀속됨</FONT>"
      },
      "Element_004": {
        "type": "MultiTextBox",
        "value": "|<font color='#C24B46'>거래 불가</font>"
      },
      "Element_005": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>기본 효과</FONT>",
          "Element_001": "물리 방어력 +5880<BR>마법 방어력 +5390<BR>힘 +16632<BR>체력 +5266"
        }
      },
      "Element_006": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>추가 효과</FONT>",
          "Element_001": "생명 활성력 +284"
        }
      },
      "Element_007": {
        "type": "Progress",
        "value": {
          "forceValue": " ",
          "maximum": 72000,
          "minimum": 0,
          "title": "<FONT SIZE='12'><FONT COLOR='#A9D0F5'>현재 단계 재련 경험치</FONT></FONT>",
          "value": 0,
          "valueType": 1
        }
      },
      "Element_008": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>세트 효과 레벨</FONT>",
          "Element_001": "사멸 <FONT COLOR='#FFD200'>Lv.2</FONT>"
        }
      },
      "Element_009": {
        "type": "IndentStringGroup",
        "value": {
          "Element_000": {
            "contentStr": {
              "Element_000": {
                "bPoint": false,
                "contentStr": "<font color='#aaaaaa'><font size='12'>사멸 (건틀릿)</font></font>"
              },
              "Element_001": {
                "bPoint": false,
                "contentStr": "<font color='#aaaaaa'><font size='12'>사멸 (머리 방어구)</font></font>"
              },
              "Element_002": {
                "bPoint": false,
                "contentStr": "<font size='12'>사멸 (상의)</font> [<FONT COLOR='#FFD200'>Lv.2</FONT>]"
              },
              "Element_003": {
                "bPoint": false,
                "contentStr": "<font size='12'>사멸 (하의)</font> [<FONT COLOR='#FFD200'>Lv.2</FONT>]"
              },
              "Element_004": {
                "bPoint": false,
                "contentStr": "<font color='#aaaaaa'><font size='12'>사멸 (장갑)</font></font>"
              },
              "Element_005": {
                "bPoint": false,
                "contentStr": "<font color='#aaaaaa'><font size='12'>사멸 (어깨 방어구)</font></font>"
              }
            },
            "topStr": "<font size='14'><font color='#91fe02'>사멸</font></font>"
          },
          "Element_001": {
            "contentStr": {
              "Element_000": {
                "bPoint": true,
                "contentStr": "<font size='12'><font color='#ffffff'>치명타 피해가 <FONT COLOR='#99FF99'>20%</FONT> 증가한다.<BR>백어택 및 헤드어택 공격 적중 시 치명타 피해 증가 수치가 <FONT COLOR='#99FF99'>60%</FONT>로 적용된다.</font></font>"
              }
            },
            "topStr": "<font size='14'><font color='#91fe02'>2 세트 효과<BR>[<font size='14'><font color='#aaaaaa'>Lv.1 / <FONT COLOR='#FFD200'>Lv.2</FONT> / Lv.3</font></font>]</font></font>"
          },
          "Element_002": {
            "contentStr": {
              "Element_000": {
                "bPoint": true,
                "contentStr": "<font size='12'><font color='#aaaaaa'>치명타 적중률이 <FONT COLOR='#99FF99'>20%</FONT> 증가한다.</font></font>"
              }
            },
            "topStr": "<font size='14'><font color='#aaaaaa'>4 세트 효과<BR>[<font size='14'><font color='#aaaaaa'>Lv.1 / Lv.2 / Lv.3</font></font>]</font></font>"
          },
          "Element_003": {
            "contentStr": {
              "Element_000": {
                "bPoint": true,
                "contentStr": "<font size='12'><font color='#aaaaaa'>적에게 주는 피해가 <FONT COLOR='#99ff99'>8%</FONT> 증가한다.<BR>백어택 및 헤드어택 공격 적중 시 적에게 주는 피해 수치가 <FONT COLOR='#99ff99'>24%</FONT>로 적용된다.</font></font>"
              }
            },
            "topStr": "<font size='14'><font color='#aaaaaa'>6 세트 효과<BR>[<font size='14'><font color='#aaaaaa'>Lv.1 / Lv.2 / Lv.3</font></font>]</font></font>"
          }
        }
      },
      "Element_010": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>분해불가</FONT></FONT>"
      },
      "Element_011": {
        "type": "SingleTextBox",
        "value": "<Font color='#5FD3F1'>[세트 업그레이드] 대도시 - 세트 장비 관리</font>"
      },
      "Element_012": {
        "type": "ShowMeTheMoney",
        "value": "<FONT SIZE='12'><FONT COLOR='#FFFFFF'>내구도 <FONT COLOR='#FFFFFF'>54 / 81</FONT></FONT></FONT>|"
      }
    },
    "E6ed580e_003": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#FA5D00'>+15 메마른 사멸의 밤 하의</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#FA5D00'>유물 하의</FONT></FONT>",
          "leftStr1": "<FONT SIZE='14'>품질</FONT>",
          "leftStr2": "<FONT SIZE='14'>아이템 레벨 1540 (티어 3)</FONT>",
          "qualityValue": 70,
          "rightStr0": "<FONT SIZE='12'><FONT COLOR='#FFD200'>장착중</FONT></FONT>",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 5,
            "iconPath": "EFUI_IconAtlas/BM_Item/BM_Item_01_143.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>배틀마스터 전용</FONT>"
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>캐릭터 귀속됨</FONT>"
      },
      "Element_004": {
        "type": "MultiTextBox",
        "value": "|<font color='#C24B46'>거래 불가</font>"
      },
      "Element_005": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>기본 효과</FONT>",
          "Element_001": "물리 방어력 +5390<BR>마법 방어력 +5880<BR>힘 +18295<BR>체력 +4476"
        }
      },
      "Element_006": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>추가 효과</FONT>",
          "Element_001": "생명 활성력 +687"
        }
      },
      "Element_007": {
        "type": "Progress",
        "value": {
          "forceValue": " ",
          "maximum": 72000,
          "minimum": 0,
          "title": "<FONT SIZE='12'><FONT COLOR='#A9D0F5'>현재 단계 재련 경험치</FONT></FONT>",
          "value": 0,
          "valueType": 1
        }
      },
      "Element_008": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>세트 효과 레벨</FONT>",
          "Element_001": "사멸 <FONT COLOR='#FFD200'>Lv.2</FONT>"
        }
      },
      "Element_009": {
        "type": "IndentStringGroup",
        "value": {
          "Element_000": {
            "contentStr": {
              "Element_000": {
                "bPoint": false,
                "contentStr": "<font color='#aaaaaa'><font size='12'>사멸 (건틀릿)</font></font>"
              },
              "Element_001": {
                "bPoint": false,
                "contentStr": "<font color='#aaaaaa'><font size='12'>사멸 (머리 방어구)</font></font>"
              },
              "Element_002": {
                "bPoint": false,
                "contentStr": "<font size='12'>사멸 (상의)</font> [<FONT COLOR='#FFD200'>Lv.2</FONT>]"
              },
              "Element_003": {
                "bPoint": false,
                "contentStr": "<font size='12'>사멸 (하의)</font> [<FONT COLOR='#FFD200'>Lv.2</FONT>]"
              },
              "Element_004": {
                "bPoint": false,
                "contentStr": "<font color='#aaaaaa'><font size='12'>사멸 (장갑)</font></font>"
              },
              "Element_005": {
                "bPoint": false,
                "contentStr": "<font color='#aaaaaa'><font size='12'>사멸 (어깨 방어구)</font></font>"
              }
            },
            "topStr": "<font size='14'><font color='#91fe02'>사멸</font></font>"
          },
          "Element_001": {
            "contentStr": {
              "Element_000": {
                "bPoint": true,
                "contentStr": "<font size='12'><font color='#ffffff'>치명타 피해가 <FONT COLOR='#99FF99'>20%</FONT> 증가한다.<BR>백어택 및 헤드어택 공격 적중 시 치명타 피해 증가 수치가 <FONT COLOR='#99FF99'>60%</FONT>로 적용된다.</font></font>"
              }
            },
            "topStr": "<font size='14'><font color='#91fe02'>2 세트 효과<BR>[<font size='14'><font color='#aaaaaa'>Lv.1 / <FONT COLOR='#FFD200'>Lv.2</FONT> / Lv.3</font></font>]</font></font>"
          },
          "Element_002": {
            "contentStr": {
              "Element_000": {
                "bPoint": true,
                "contentStr": "<font size='12'><font color='#aaaaaa'>치명타 적중률이 <FONT COLOR='#99FF99'>20%</FONT> 증가한다.</font></font>"
              }
            },
            "topStr": "<font size='14'><font color='#aaaaaa'>4 세트 효과<BR>[<font size='14'><font color='#aaaaaa'>Lv.1 / Lv.2 / Lv.3</font></font>]</font></font>"
          },
          "Element_003": {
            "contentStr": {
              "Element_000": {
                "bPoint": true,
                "contentStr": "<font size='12'><font color='#aaaaaa'>적에게 주는 피해가 <FONT COLOR='#99ff99'>8%</FONT> 증가한다.<BR>백어택 및 헤드어택 공격 적중 시 적에게 주는 피해 수치가 <FONT COLOR='#99ff99'>24%</FONT>로 적용된다.</font></font>"
              }
            },
            "topStr": "<font size='14'><font color='#aaaaaa'>6 세트 효과<BR>[<font size='14'><font color='#aaaaaa'>Lv.1 / Lv.2 / Lv.3</font></font>]</font></font>"
          }
        }
      },
      "Element_010": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>분해불가</FONT></FONT>"
      },
      "Element_011": {
        "type": "SingleTextBox",
        "value": "<Font color='#5FD3F1'>[세트 업그레이드] 대도시 - 세트 장비 관리</font>"
      },
      "Element_012": {
        "type": "ShowMeTheMoney",
        "value": "<FONT SIZE='12'><FONT COLOR='#FFFFFF'>내구도 <FONT COLOR='#FFFFFF'>50 / 74</FONT></FONT></FONT>|"
      }
    },
    "E6ed580e_004": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#E3C7A1'>+15 굳건한 지배의 균형 장갑</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#E3C7A1'>고대 장갑</FONT></FONT>",
          "leftStr1": "<FONT SIZE='14'>품질</FONT>",
          "leftStr2": "<FONT SIZE='14'>아이템 레벨 1540 (티어 3)</FONT>",
          "qualityValue": 45,
          "rightStr0": "<FONT SIZE='12'><FONT COLOR='#FFD200'>장착중</FONT></FONT>",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 6,
            "iconPath": "EFUI_IconAtlas/BM_Item/BM_Item_01_141.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>배틀마스터 전용</FONT>"
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>캐릭터 귀속됨</FONT>"
      },
      "Element_004": {
        "type": "MultiTextBox",
        "value": "|<font color='#C24B46'>거래 불가</font>"
      },
      "Element_005": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>기본 효과</FONT>",
          "Element_001": "물리 방어력 +3920<BR>마법 방어력 +3920<BR>힘 +27941<BR>체력 +2633"
        }
      },
      "Element_006": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>추가 효과</FONT>",
          "Element_001": "생명 활성력 +284"
        }
      },
      "Element_007": {
        "type": "Progress",
        "value": {
          "forceValue": "장비 재련 가능",
          "maximum": 72000,
          "minimum": 0,
          "title": "<FONT SIZE='12'><FONT COLOR='#A9D0F5'>현재 단계 재련 경험치</FONT></FONT>",
          "value": 72000,
          "valueType": -1
        }
      },
      "Element_008": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>세트 효과 레벨</FONT>",
          "Element_001": "지배 <FONT COLOR='#FFD200'>Lv.2</FONT>"
        }
      },
      "Element_009": {
        "type": "IndentStringGroup",
        "value": {
          "Element_000": {
            "contentStr": {
              "Element_000": {
                "bPoint": false,
                "contentStr": "<font size='12'>지배 (건틀릿)</font> [<FONT COLOR='#FFD200'>Lv.2</FONT>]"
              },
              "Element_001": {
                "bPoint": false,
                "contentStr": "<font color='#aaaaaa'><font size='12'>지배 (머리 방어구)</font></font>"
              },
              "Element_002": {
                "bPoint": false,
                "contentStr": "<font color='#aaaaaa'><font size='12'>지배 (상의)</font></font>"
              },
              "Element_003": {
                "bPoint": false,
                "contentStr": "<font color='#aaaaaa'><font size='12'>지배 (하의)</font></font>"
              },
              "Element_004": {
                "bPoint": false,
                "contentStr": "<font size='12'>지배 (장갑)</font> [<FONT COLOR='#FFD200'>Lv.2</FONT>]"
              },
              "Element_005": {
                "bPoint": false,
                "contentStr": "<font color='#aaaaaa'><font size='12'>지배 (어깨 방어구)</font></font>"
              }
            },
            "topStr": "<font size='14'><font color='#91fe02'>지배</font></font>"
          },
          "Element_001": {
            "contentStr": {
              "Element_000": {
                "bPoint": true,
                "contentStr": "<font size='12'><font color='#ffffff'>각성기로 적에게 주는 피해가 <FONT COLOR='#ff9999'>30%</FONT> 감소하지만 각성기 사용횟수가 <FONT COLOR='#99FF99'>1</FONT>회 증가하며 재사용 대기시간이 <FONT COLOR='#99FF99'>20%</FONT> 감소한다.<BR>각성기 사용 시 <FONT COLOR='#99ff99'>2</FONT>분 동안 '내면의 각성' 효과를 부여한다.<BR>'내면의 각성' : 각성기 및 이동기를 제외한 스킬 재사용 대기시간이 <FONT COLOR='#99FF99'>18%</FONT> 감소하고 스킬피해가 <FONT COLOR='#99FF99'>10%</FONT> 증가한다. </font></font>"
              }
            },
            "topStr": "<font size='14'><font color='#91fe02'>2 세트 효과<BR>[<font size='14'><font color='#aaaaaa'>Lv.1 / <FONT COLOR='#FFD200'>Lv.2</FONT> / Lv.3</font></font>]</font></font>"
          },
          "Element_002": {
            "contentStr": {
              "Element_000": {
                "bPoint": true,
                "contentStr": "<font size='12'><font color='#aaaaaa'>각성기 사용횟수가 <FONT COLOR='#99FF99'>1</FONT>회 추가 증가한다. '내면의 각성' 효과가 강화되어 각성기 및 이동기를 제외한 스킬 재사용 대기시간이 <FONT COLOR='#99FF99'>18%</FONT> 감소하고 스킬피해가 <FONT COLOR='#99FF99'>28%</FONT> 증가한다. </font></font>"
              }
            },
            "topStr": "<font size='14'><font color='#aaaaaa'>4 세트 효과<BR>[<font size='14'><font color='#aaaaaa'>Lv.1 / Lv.2 / Lv.3</font></font>]</font></font>"
          },
          "Element_003": {
            "contentStr": {
              "Element_000": {
                "bPoint": true,
                "contentStr": "<font size='12'><font color='#aaaaaa'>각성기 사용횟수가 <FONT COLOR='#99FF99'>1</FONT>회 추가 증가한다. '내면의 각성' 적용 시 이동기 재사용 대기시간이 <FONT COLOR='#99FF99'>30%</FONT> 감소하며 적에게 주는 피해가 <FONT COLOR='#99FF99'>18%</FONT> 증가하는 '강화' 효과를 <FONT COLOR='#99ff99'>2</FONT>분 동안 부여한다.</font></font>"
              }
            },
            "topStr": "<font size='14'><font color='#aaaaaa'>6 세트 효과<BR>[<font size='14'><font color='#aaaaaa'>Lv.1 / Lv.2 / Lv.3</font></font>]</font></font>"
          }
        }
      },
      "Element_010": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>분해불가</FONT></FONT>"
      },
      "Element_011": {
        "type": "SingleTextBox",
        "value": "<Font color='#5FD3F1'>[세트 업그레이드] 대도시 - 세트 장비 관리</font>"
      },
      "Element_012": {
        "type": "ShowMeTheMoney",
        "value": "<FONT SIZE='12'><FONT COLOR='#FFFFFF'>내구도 <FONT COLOR='#FFFFFF'>53 / 59</FONT></FONT></FONT>|"
      }
    },
    "E6ed580e_005": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#FA5D00'>+15 타오르는 악몽의 그림자 견갑</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#FA5D00'>유물 어깨 방어구</FONT></FONT>",
          "leftStr1": "<FONT SIZE='14'>품질</FONT>",
          "leftStr2": "<FONT SIZE='14'>아이템 레벨 1540 (티어 3)</FONT>",
          "qualityValue": 52,
          "rightStr0": "<FONT SIZE='12'><FONT COLOR='#FFD200'>장착중</FONT></FONT>",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 5,
            "iconPath": "EFUI_IconAtlas/BM_Item/BM_Item_01_140.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>배틀마스터 전용</FONT>"
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>캐릭터 귀속됨</FONT>"
      },
      "Element_004": {
        "type": "MultiTextBox",
        "value": "|<font color='#C24B46'>거래 불가</font>"
      },
      "Element_005": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>기본 효과</FONT>",
          "Element_001": "물리 방어력 +4900<BR>마법 방어력 +4410<BR>힘 +23284<BR>체력 +3423"
        }
      },
      "Element_006": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>추가 효과</FONT>",
          "Element_001": "생명 활성력 +379"
        }
      },
      "Element_007": {
        "type": "Progress",
        "value": {
          "forceValue": " ",
          "maximum": 72000,
          "minimum": 0,
          "title": "<FONT SIZE='12'><FONT COLOR='#A9D0F5'>현재 단계 재련 경험치</FONT></FONT>",
          "value": 0,
          "valueType": 1
        }
      },
      "Element_008": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>세트 효과 레벨</FONT>",
          "Element_001": "악몽 <FONT COLOR='#FFD200'>Lv.2</FONT>"
        }
      },
      "Element_009": {
        "type": "IndentStringGroup",
        "value": {
          "Element_000": {
            "contentStr": {
              "Element_000": {
                "bPoint": false,
                "contentStr": "<font color='#aaaaaa'><font size='12'>악몽 (건틀릿)</font></font>"
              },
              "Element_001": {
                "bPoint": false,
                "contentStr": "<font size='12'>악몽 (머리 방어구)</font> [<FONT COLOR='#FFD200'>Lv.2</FONT>]"
              },
              "Element_002": {
                "bPoint": false,
                "contentStr": "<font color='#aaaaaa'><font size='12'>악몽 (상의)</font></font>"
              },
              "Element_003": {
                "bPoint": false,
                "contentStr": "<font color='#aaaaaa'><font size='12'>악몽 (하의)</font></font>"
              },
              "Element_004": {
                "bPoint": false,
                "contentStr": "<font color='#aaaaaa'><font size='12'>악몽 (장갑)</font></font>"
              },
              "Element_005": {
                "bPoint": false,
                "contentStr": "<font size='12'>악몽 (어깨 방어구)</font> [<FONT COLOR='#FFD200'>Lv.2</FONT>]"
              }
            },
            "topStr": "<font size='14'><font color='#91fe02'>악몽</font></font>"
          },
          "Element_001": {
            "contentStr": {
              "Element_000": {
                "bPoint": true,
                "contentStr": "<font size='12'><font color='#ffffff'>마나 소모량이 <FONT COLOR='#99FF99'>50%</FONT> 감소하고, 마나를 소모하는 스킬의 피해가 <FONT COLOR='#99FF99'>15%</FONT> 증가한다.</font></font>"
              }
            },
            "topStr": "<font size='14'><font color='#91fe02'>2 세트 효과<BR>[<font size='14'><font color='#aaaaaa'>Lv.1 / <FONT COLOR='#FFD200'>Lv.2</FONT> / Lv.3</font></font>]</font></font>"
          },
          "Element_002": {
            "contentStr": {
              "Element_000": {
                "bPoint": true,
                "contentStr": "<font size='12'><font color='#aaaaaa'>마나를 보유하고 있는 클래스가 각성기 사용 시 '마나 중독' 효과를 획득한다.<BR>현재 마나량이 <FONT COLOR='#99FF99'>30%</FONT> 이하에서 스킬 사용 시 '마나 중독' 효과가 제거 되고 '끝없는 마나' 효과로 변경된다.<BR>'끝없는 마나' 상태에서 현재 마나량이 <FONT COLOR='#99FF99'>100%</FONT>가 될 시 해당 효과가 제거 되고 '마나 중독' 효과로 변경된다. 두 효과는 동시에 적용되지 않는다.<BR>'마나 중독' : 추가 피해가 <FONT COLOR='#99FF99'>18%</FONT> 증가 하지만 마나를 소모하는 스킬 사용 시 최대 마나량의 <FONT COLOR='#ff9999'>7%</FONT>가 추가로 소모된다.<BR>'끝없는 마나' : 매 초 마다 최대 마나량의 <FONT COLOR='#99FF99'>3%</FONT>가 회복되며 스킬 재사용 대기시간이 <FONT COLOR='#99FF99'>22%</FONT> 감소하고 공격 및 이동속도가 <FONT COLOR='#99FF99'>12%</FONT> 증가한다.</font></font>"
              }
            },
            "topStr": "<font size='14'><font color='#aaaaaa'>4 세트 효과<BR>[<font size='14'><font color='#aaaaaa'>Lv.1 / Lv.2 / Lv.3</font></font>]</font></font>"
          },
          "Element_003": {
            "contentStr": {
              "Element_000": {
                "bPoint": true,
                "contentStr": "<font size='12'><font color='#aaaaaa'>'마나 중독' 효과 시 적에게 주는 피해가 <FONT COLOR='#99FF99'>18%</FONT> 추가 증가한다.<BR>'끝없는 마나' 효과 시 스킬 재사용 대기시간이 <FONT COLOR='#99FF99'>18%</FONT> 추가 감소하고, 공격 및 이동속도가 <FONT COLOR='#99FF99'>3%</FONT> 추가 증가한다.</font></font>"
              }
            },
            "topStr": "<font size='14'><font color='#aaaaaa'>6 세트 효과<BR>[<font size='14'><font color='#aaaaaa'>Lv.1 / Lv.2 / Lv.3</font></font>]</font></font>"
          }
        }
      },
      "Element_010": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>분해불가</FONT></FONT>"
      },
      "Element_011": {
        "type": "SingleTextBox",
        "value": "<Font color='#5FD3F1'>[세트 업그레이드] 대도시 - 세트 장비 관리</font>"
      },
      "Element_012": {
        "type": "ShowMeTheMoney",
        "value": "<FONT SIZE='12'><FONT COLOR='#FFFFFF'>내구도 <FONT COLOR='#FFFFFF'>38 / 60</FONT></FONT></FONT>|"
      }
    },
    "E6ed580e_006": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#E3C7A1'>참혹한 파멸의 목걸이</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#E3C7A1'>고대 목걸이</FONT></FONT>",
          "leftStr1": "<FONT SIZE='14'>품질</FONT>",
          "leftStr2": "<FONT SIZE='14'>아이템 티어 3</FONT>",
          "qualityValue": 82,
          "rightStr0": "<FONT SIZE='12'><FONT COLOR='#FFD200'>장착중</FONT></FONT>",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 6,
            "iconPath": "EFUI_IconAtlas/Acc/Acc_213.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>캐릭터 귀속됨<BR>거래 <FONT COLOR='#FFD200'>2</FONT>회 가능<BR><FONT COLOR='#C24B46'>거래 제한 아이템 레벨</FONT> 1540</FONT>"
      },
      "Element_003": {
        "type": "MultiTextBox",
        "value": "|거래가능"
      },
      "Element_004": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>기본 효과</FONT>",
          "Element_001": "힘 +12546<BR><FONT COLOR='#686660'>민첩 +12546</FONT><BR><FONT COLOR='#686660'>지능 +12546</FONT><BR>체력 +3308"
        }
      },
      "Element_005": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>추가 효과</FONT>",
          "Element_001": "치명 +465<BR>신속 +500"
        }
      },
      "Element_006": {
        "type": "IndentStringGroup",
        "value": {
          "Element_000": {
            "contentStr": {
              "Element_000": {
                "bPoint": 0,
                "contentStr": "[<FONT COLOR='#FFFFAC'>원한</FONT>] 활성도 +4<BR>",
                "pointType": 2
              },
              "Element_001": {
                "bPoint": 0,
                "contentStr": "[<FONT COLOR='#FFFFAC'>예리한 둔기</FONT>] 활성도 +3<BR>",
                "pointType": 2
              },
              "Element_002": {
                "bPoint": 0,
                "contentStr": "[<FONT COLOR='#FE2E2E'>이동속도 감소</FONT>] 활성도 +3<BR>",
                "pointType": 2
              }
            },
            "topStr": "<FONT SIZE='12' COLOR='#A9D0F5'>무작위 각인 효과</FONT>"
          }
        }
      },
      "Element_007": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>품질 업그레이드 불가</FONT></FONT>"
      },
      "Element_008": {
        "type": "SingleTextBox",
        "value": "<Font color='#5FD3F1'>[군단장 레이드] 몽환군단장 아브렐슈드 - 하드</font><BR><Font color='#5FD3F1'>[어비스 던전] 카양겔</font>"
      }
    },
    "E6ed580e_007": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#E3C7A1'>참혹한 몰락의 귀걸이</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#E3C7A1'>고대 귀걸이</FONT></FONT>",
          "leftStr1": "<FONT SIZE='14'>품질</FONT>",
          "leftStr2": "<FONT SIZE='14'>아이템 티어 3</FONT>",
          "qualityValue": 71,
          "rightStr0": "<FONT SIZE='12'><FONT COLOR='#FFD200'>장착중</FONT></FONT>",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 6,
            "iconPath": "EFUI_IconAtlas/Acc/Acc_113.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>캐릭터 귀속됨<BR>거래 <FONT COLOR='#FFD200'>2</FONT>회 가능<BR><FONT COLOR='#C24B46'>거래 제한 아이템 레벨</FONT> 1540</FONT>"
      },
      "Element_003": {
        "type": "MultiTextBox",
        "value": "|거래가능"
      },
      "Element_004": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>기본 효과</FONT>",
          "Element_001": "힘 +9758<BR><FONT COLOR='#686660'>민첩 +9758</FONT><BR><FONT COLOR='#686660'>지능 +9758</FONT><BR>체력 +2363"
        }
      },
      "Element_005": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>추가 효과</FONT>",
          "Element_001": "신속 +283"
        }
      },
      "Element_006": {
        "type": "IndentStringGroup",
        "value": {
          "Element_000": {
            "contentStr": {
              "Element_000": {
                "bPoint": 0,
                "contentStr": "[<FONT COLOR='#FFFFAC'>초심</FONT>] 활성도 +3<BR>",
                "pointType": 2
              },
              "Element_001": {
                "bPoint": 0,
                "contentStr": "[<FONT COLOR='#FFFFAC'>아드레날린</FONT>] 활성도 +5<BR>",
                "pointType": 2
              },
              "Element_002": {
                "bPoint": 0,
                "contentStr": "[<FONT COLOR='#FE2E2E'>공격력 감소</FONT>] 활성도 +1<BR>",
                "pointType": 2
              }
            },
            "topStr": "<FONT SIZE='12' COLOR='#A9D0F5'>무작위 각인 효과</FONT>"
          }
        }
      },
      "Element_007": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>품질 업그레이드 불가</FONT></FONT>"
      },
      "Element_008": {
        "type": "SingleTextBox",
        "value": "<Font color='#5FD3F1'>[군단장 레이드] 질병군단장 일리아칸</font><BR><Font color='#5FD3F1'>[어비스 던전] 카양겔</font><BR><Font color='#5FD3F1'>[어비스 던전] 혼돈의 상아탑</font>"
      }
    },
    "E6ed580e_008": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#E3C7A1'>참혹한 파멸의 귀걸이</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#E3C7A1'>고대 귀걸이</FONT></FONT>",
          "leftStr1": "<FONT SIZE='14'>품질</FONT>",
          "leftStr2": "<FONT SIZE='14'>아이템 티어 3</FONT>",
          "qualityValue": 83,
          "rightStr0": "<FONT SIZE='12'><FONT COLOR='#FFD200'>장착중</FONT></FONT>",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 6,
            "iconPath": "EFUI_IconAtlas/Acc/Acc_113.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>캐릭터 귀속됨<BR>거래 <FONT COLOR='#FFD200'>2</FONT>회 가능<BR><FONT COLOR='#C24B46'>거래 제한 아이템 레벨</FONT> 1540</FONT>"
      },
      "Element_003": {
        "type": "MultiTextBox",
        "value": "|거래가능"
      },
      "Element_004": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>기본 효과</FONT>",
          "Element_001": "힘 +9758<BR><FONT COLOR='#686660'>민첩 +9758</FONT><BR><FONT COLOR='#686660'>지능 +9758</FONT><BR>체력 +2363"
        }
      },
      "Element_005": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>추가 효과</FONT>",
          "Element_001": "신속 +290"
        }
      },
      "Element_006": {
        "type": "IndentStringGroup",
        "value": {
          "Element_000": {
            "contentStr": {
              "Element_000": {
                "bPoint": 0,
                "contentStr": "[<FONT COLOR='#FFFFAC'>돌격대장</FONT>] 활성도 +6<BR>",
                "pointType": 2
              },
              "Element_001": {
                "bPoint": 0,
                "contentStr": "[<FONT COLOR='#FFFFAC'>질량 증가</FONT>] 활성도 +3<BR>",
                "pointType": 2
              },
              "Element_002": {
                "bPoint": 0,
                "contentStr": "[<FONT COLOR='#FE2E2E'>방어력 감소</FONT>] 활성도 +3<BR>",
                "pointType": 2
              }
            },
            "topStr": "<FONT SIZE='12' COLOR='#A9D0F5'>무작위 각인 효과</FONT>"
          }
        }
      },
      "Element_007": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>품질 업그레이드 불가</FONT></FONT>"
      },
      "Element_008": {
        "type": "SingleTextBox",
        "value": "<Font color='#5FD3F1'>[군단장 레이드] 몽환군단장 아브렐슈드 - 하드</font><BR><Font color='#5FD3F1'>[어비스 던전] 카양겔</font>"
      }
    },
    "E6ed580e_009": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#E3C7A1'>공허한 미래의 반지</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#E3C7A1'>고대 반지</FONT></FONT>",
          "leftStr1": "<FONT SIZE='14'>품질</FONT>",
          "leftStr2": "<FONT SIZE='14'>아이템 티어 3</FONT>",
          "qualityValue": 80,
          "rightStr0": "<FONT SIZE='12'><FONT COLOR='#FFD200'>장착중</FONT></FONT>",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 6,
            "iconPath": "EFUI_IconAtlas/Acc/Acc_11.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>캐릭터 귀속됨<BR>거래 <FONT COLOR='#FFD200'>2</FONT>회 가능<BR><FONT COLOR='#C24B46'>거래 제한 아이템 레벨</FONT> 1540</FONT>"
      },
      "Element_003": {
        "type": "MultiTextBox",
        "value": "|거래가능"
      },
      "Element_004": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>기본 효과</FONT>",
          "Element_001": "힘 +9061<BR><FONT COLOR='#686660'>민첩 +9061</FONT><BR><FONT COLOR='#686660'>지능 +9061</FONT><BR>체력 +1890"
        }
      },
      "Element_005": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>추가 효과</FONT>",
          "Element_001": "신속 +192"
        }
      },
      "Element_006": {
        "type": "IndentStringGroup",
        "value": {
          "Element_000": {
            "contentStr": {
              "Element_000": {
                "bPoint": 0,
                "contentStr": "[<FONT COLOR='#FFFFAC'>돌격대장</FONT>] 활성도 +6<BR>",
                "pointType": 2
              },
              "Element_001": {
                "bPoint": 0,
                "contentStr": "[<FONT COLOR='#FFFFAC'>원한</FONT>] 활성도 +3<BR>",
                "pointType": 2
              },
              "Element_002": {
                "bPoint": 0,
                "contentStr": "[<FONT COLOR='#FE2E2E'>공격력 감소</FONT>] 활성도 +3<BR>",
                "pointType": 2
              }
            },
            "topStr": "<FONT SIZE='12' COLOR='#A9D0F5'>무작위 각인 효과</FONT>"
          }
        }
      },
      "Element_007": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>품질 업그레이드 불가</FONT></FONT>"
      },
      "Element_008": {
        "type": "SingleTextBox",
        "value": "<Font color='#5FD3F1'>[카오스 던전] 엘가시아</font><BR><Font color='#5FD3F1'>[카오스 던전] 볼다이크</font><BR><Font color='#5FD3F1'>[필드 보스] 볼다이크 - 드라커스</font>"
      }
    },
    "E6ed580e_010": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#E3C7A1'>참혹한 파멸의 반지</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#E3C7A1'>고대 반지</FONT></FONT>",
          "leftStr1": "<FONT SIZE='14'>품질</FONT>",
          "leftStr2": "<FONT SIZE='14'>아이템 티어 3</FONT>",
          "qualityValue": 90,
          "rightStr0": "<FONT SIZE='12'><FONT COLOR='#FFD200'>장착중</FONT></FONT>",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 6,
            "iconPath": "EFUI_IconAtlas/Acc/Acc_20.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>캐릭터 귀속됨<BR>거래 <FONT COLOR='#FFD200'>2</FONT>회 가능<BR><FONT COLOR='#C24B46'>거래 제한 아이템 레벨</FONT> 1540</FONT>"
      },
      "Element_003": {
        "type": "MultiTextBox",
        "value": "|거래가능"
      },
      "Element_004": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>기본 효과</FONT>",
          "Element_001": "힘 +9061<BR><FONT COLOR='#686660'>민첩 +9061</FONT><BR><FONT COLOR='#686660'>지능 +9061</FONT><BR>체력 +1890"
        }
      },
      "Element_005": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>추가 효과</FONT>",
          "Element_001": "신속 +196"
        }
      },
      "Element_006": {
        "type": "IndentStringGroup",
        "value": {
          "Element_000": {
            "contentStr": {
              "Element_000": {
                "bPoint": 0,
                "contentStr": "[<FONT COLOR='#FFFFAC'>예리한 둔기</FONT>] 활성도 +6<BR>",
                "pointType": 2
              },
              "Element_001": {
                "bPoint": 0,
                "contentStr": "[<FONT COLOR='#FFFFAC'>돌격대장</FONT>] 활성도 +3<BR>",
                "pointType": 2
              },
              "Element_002": {
                "bPoint": 0,
                "contentStr": "[<FONT COLOR='#FE2E2E'>공격속도 감소</FONT>] 활성도 +2<BR>",
                "pointType": 2
              }
            },
            "topStr": "<FONT SIZE='12' COLOR='#A9D0F5'>무작위 각인 효과</FONT>"
          }
        }
      },
      "Element_007": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>품질 업그레이드 불가</FONT></FONT>"
      },
      "Element_008": {
        "type": "SingleTextBox",
        "value": "<Font color='#5FD3F1'>[군단장 레이드] 몽환군단장 아브렐슈드 - 하드</font><BR><Font color='#5FD3F1'>[어비스 던전] 카양겔</font>"
      }
    },
    "E6ed580e_011": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#FA5D00'>고고한 비상의 돌</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#FA5D00'>유물 어빌리티 스톤</FONT></FONT>",
          "leftStr2": "<FONT SIZE='14'>아이템 티어 3</FONT>",
          "qualityValue": -1,
          "rightStr0": "<FONT SIZE='12'><FONT COLOR='#FFD200'>장착중</FONT></FONT>",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 5,
            "iconPath": "EFUI_IconAtlas/Ability/Ability_22.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>캐릭터 귀속됨<BR><FONT COLOR='#C24B46'>거래 제한 아이템 레벨</FONT> 1415</FONT>"
      },
      "Element_003": {
        "type": "MultiTextBox",
        "value": "|<font color='#C24B46'>거래 불가</font>"
      },
      "Element_004": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>기본 효과</FONT>",
          "Element_001": "체력 +15254"
        }
      },
      "Element_005": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>세공 단계 보너스</FONT>",
          "Element_001": "체력 +763"
        }
      },
      "Element_006": {
        "type": "IndentStringGroup",
        "value": {
          "Element_000": {
            "contentStr": {
              "Element_000": {
                "bPoint": 0,
                "contentStr": "[<FONT COLOR='#FFFFAC'>원한</FONT>] 활성도 +8<BR>",
                "pointType": 2
              },
              "Element_001": {
                "bPoint": 0,
                "contentStr": "[<FONT COLOR='#FFFFAC'>예리한 둔기</FONT>] 활성도 +6<BR>",
                "pointType": 2
              },
              "Element_002": {
                "bPoint": 0,
                "contentStr": "[<FONT COLOR='#FE2E2E'>이동속도 감소</FONT>] 활성도 +1<BR>",
                "pointType": 2
              }
            },
            "topStr": "<FONT SIZE='12' COLOR='#A9D0F5'>무작위 각인 효과</FONT>"
          }
        }
      },
      "Element_007": {
        "type": "SingleTextBox",
        "value": "<FONT COLOR='#E2C87A'><FONT SIZE='12'>푸른 기운과 붉은 기운이 희미하게 뒤섞여 신묘한 느낌이 난다. 자세히 보고 싶지만 더 만졌다가는 부서져 버릴 것 같다.<br><br><FONT COLOR='#FFFFAC'>어빌리티 스톤 세공사에게 세공 완료 후 장착 가능합니다.</FONT></FONT></FONT>"
      },
      "Element_008": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>판매불가</FONT></FONT>"
      },
      "Element_009": {
        "type": "SingleTextBox",
        "value": "<Font color='#5FD3F1'>[카오스 던전] </font><BR><Font color='#5FD3F1'>[가디언 토벌] 토벌 6단계</font><BR><Font color='#5FD3F1'>[군단장 레이드] </font><BR><Font color='#5FD3F1'>그 외에 획득처가 더 존재합니다.</FONT>"
      }
    },
    "E6ed580e_012": {
      "AvatarAttribute": {
        "IsInner": false,
        "IsSet": false
      },
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#ce43fc'>4주년 마음 건틀릿 (이벤트)</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#ce43fc'>영웅 건틀릿 아바타</FONT></FONT>",
          "leftStr2": "",
          "qualityValue": -1,
          "rightStr0": "<FONT SIZE='12'><FONT COLOR='#FFD200'>장착중</FONT></FONT>",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 3,
            "iconPath": "EFUI_IconAtlas/Shop_icon/Shop_icon_6212.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>배틀마스터 전용</FONT>"
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>원정대 귀속됨 </FONT>"
      },
      "Element_004": {
        "type": "MultiTextBox",
        "value": "|<font color='#C24B46'>거래 불가</font>"
      },
      "Element_005": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>기본 효과</FONT>",
          "Element_001": "힘 +1.00%"
        }
      },
      "Element_006": {
        "type": "SymbolString",
        "value": {
          "contentStr": "&tdc_smart 지성 : 10<BR>&tdc_charm 매력 : 5<BR><BR>",
          "titleStr": "<FONT COLOR='#A9D0F5'>성향</FONT>"
        }
      },
      "Element_007": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>판매불가</FONT>, <FONT COLOR='#C24B46'>분해불가</FONT></FONT>"
      }
    },
    "E6ed580e_013": {
      "AvatarAttribute": {
        "IsInner": false,
        "IsSet": false
      },
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#ce43fc'>태극기 모자</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#ce43fc'>영웅 머리 아바타</FONT></FONT>",
          "leftStr2": "",
          "qualityValue": -1,
          "rightStr0": "<FONT SIZE='12'><FONT COLOR='#FFD200'>장착중</FONT></FONT>",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 3,
            "iconPath": "EFUI_IconAtlas/Event_Avatar/Event_Avatar_173.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>무도가(여)계열</FONT>"
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>원정대 귀속됨 </FONT>"
      },
      "Element_004": {
        "type": "MultiTextBox",
        "value": "|<font color='#C24B46'>거래 불가</font>"
      },
      "Element_005": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>기본 효과</FONT>",
          "Element_001": "힘 +1.00%"
        }
      },
      "Element_006": {
        "type": "SymbolString",
        "value": {
          "contentStr": "&tdc_courage 담력 : 10<BR>&tdc_charm 매력 : 5<BR><BR>",
          "titleStr": "<FONT COLOR='#A9D0F5'>성향</FONT>"
        }
      },
      "Element_007": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>판매불가</FONT>, <FONT COLOR='#C24B46'>분해불가</FONT></FONT>"
      }
    },
    "E6ed580e_014": {
      "AvatarAttribute": {
        "IsInner": false,
        "IsSet": false
      },
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#ce43fc'>4주년 마음 상의 (이벤트)</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#ce43fc'>영웅 상의 아바타</FONT></FONT>",
          "leftStr2": "",
          "qualityValue": -1,
          "rightStr0": "<FONT SIZE='12'><FONT COLOR='#FFD200'>장착중</FONT></FONT>",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 3,
            "iconPath": "EFUI_IconAtlas/Shop_icon/Shop_icon_6208.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>무도가(여)계열</FONT>"
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>원정대 귀속됨 </FONT>"
      },
      "Element_004": {
        "type": "MultiTextBox",
        "value": "|<font color='#C24B46'>거래 불가</font>"
      },
      "Element_005": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>기본 효과</FONT>",
          "Element_001": "힘 +1.00%"
        }
      },
      "Element_006": {
        "type": "SymbolString",
        "value": {
          "contentStr": "&tdc_smart 지성 : 15<BR>&tdc_charm 매력 : 5<BR><BR>",
          "titleStr": "<FONT COLOR='#A9D0F5'>성향</FONT>"
        }
      },
      "Element_007": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>판매불가</FONT>, <FONT COLOR='#C24B46'>분해불가</FONT></FONT>"
      }
    },
    "E6ed580e_015": {
      "AvatarAttribute": {
        "IsInner": false,
        "IsSet": false
      },
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#ce43fc'>4주년 마음 하의 (이벤트)</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#ce43fc'>영웅 하의 아바타</FONT></FONT>",
          "leftStr2": "",
          "qualityValue": -1,
          "rightStr0": "<FONT SIZE='12'><FONT COLOR='#FFD200'>장착중</FONT></FONT>",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 3,
            "iconPath": "EFUI_IconAtlas/Shop_icon/Shop_icon_6209.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>무도가(여)계열</FONT>"
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>원정대 귀속됨 </FONT>"
      },
      "Element_004": {
        "type": "MultiTextBox",
        "value": "|<font color='#C24B46'>거래 불가</font>"
      },
      "Element_005": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>기본 효과</FONT>",
          "Element_001": "힘 +1.00%"
        }
      },
      "Element_006": {
        "type": "SymbolString",
        "value": {
          "contentStr": "&tdc_smart 지성 : 15<BR>&tdc_charm 매력 : 5<BR><BR>",
          "titleStr": "<FONT COLOR='#A9D0F5'>성향</FONT>"
        }
      },
      "Element_007": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>판매불가</FONT>, <FONT COLOR='#C24B46'>분해불가</FONT></FONT>"
      }
    },
    "E6ed580e_018": {
      "AvatarAttribute": {
        "IsInner": false,
        "IsSet": false
      },
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#ce43fc'>4주년 마음 얼굴2 (이벤트)</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#ce43fc'>영웅 얼굴2 아바타</FONT></FONT>",
          "leftStr2": "",
          "qualityValue": -1,
          "rightStr0": "<FONT SIZE='12'><FONT COLOR='#FFD200'>장착중</FONT></FONT>",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 3,
            "iconPath": "EFUI_IconAtlas/Shop_icon/Shop_icon_6210.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>무도가(여)계열</FONT>"
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>원정대 귀속됨 </FONT>"
      },
      "Element_004": {
        "type": "MultiTextBox",
        "value": "|<font color='#C24B46'>거래 불가</font>"
      },
      "Element_005": {
        "type": "SymbolString",
        "value": {
          "contentStr": "&tdc_courage 담력 : 5<BR><BR>",
          "titleStr": "<FONT COLOR='#A9D0F5'>성향</FONT>"
        }
      },
      "Element_006": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>판매불가</FONT>, <FONT COLOR='#C24B46'>분해불가</FONT></FONT>"
      }
    },
    "E6ed580e_026": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#E3C7A1'>찬란한 영웅의 팔찌</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#E3C7A1'>고대 팔찌</FONT></FONT>",
          "leftStr2": "<FONT SIZE='14'>아이템 티어 3</FONT>",
          "qualityValue": -1,
          "rightStr0": "<FONT SIZE='12'><FONT COLOR='#FFD200'>장착중</FONT></FONT>",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 6,
            "iconPath": "EFUI_IconAtlas/Acc/Acc_304.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>캐릭터 귀속됨<BR><FONT COLOR='#C24B46'>거래 제한 아이템 레벨</FONT> 1540</FONT>"
      },
      "Element_003": {
        "type": "MultiTextBox",
        "value": "|<font color='#C24B46'>거래 불가</font>"
      },
      "Element_004": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>팔찌 효과</FONT>",
          "Element_001": "<img src='emoticon_tooltip_bracelet_locked' vspace='-5'></img> 힘 +3550<BR><img src='emoticon_tooltip_bracelet_changeable' width='20' height='20' vspace='-6'></img>신속 +70<BR><img src='emoticon_tooltip_bracelet_changeable' width='20' height='20' vspace='-6'></img>체력 +2600<BR><img src='emoticon_tooltip_bracelet_changeable' width='20' height='20' vspace='-6'></img>[<FONT COLOR=''>망치</FONT>] 몬스터에게 공격 적중 시 8초 동안 '망치' 효과를 획득한다.<BR>'강철 쐐기' 효과를 보유 시 치명타 피해가 8% 추가 증가한다.<BR>망치 : 공격 적중 시 치명타 피해량이 <FONT COLOR='#99ff99'>12%</FONT> 증가한다. <FONT COLOR='#969696'>(60레벨 초과 몬스터에게는 효과 감소)</FONT>"
        }
      },
      "Element_005": {
        "type": "SingleTextBox",
        "value": "<FONT COLOR='#C24B46'>효과 부여 불가</FONT>"
      },
      "Element_006": {
        "type": "SingleTextBox",
        "value": "<Font color='#5FD3F1'>[카오스 던전] </font><BR><Font color='#5FD3F1'>[가디언 토벌] 하누마탄</font><BR><Font color='#5FD3F1'>[군단장 레이드] 몽환군단장 아브렐슈드 - 하드</font><BR><Font color='#5FD3F1'>그 외에 획득처가 더 존재합니다.</FONT>"
      }
    },
    "E6ed580e_027": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#ce43fc'>특제 순은 나침반</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#ce43fc'>영웅 나침반</FONT></FONT>",
          "leftStr2": "",
          "qualityValue": -1,
          "rightStr0": "<FONT SIZE='12'><FONT COLOR='#FFD200'>장착중</FONT></FONT>",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 3,
            "iconPath": "EFUI_IconAtlas/Acc/Acc_310.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "MultiTextBox",
        "value": "|<FONT SIZE='12'><FONT COLOR='#808080'>장착 가능 레벨</FONT> 50</FONT>"
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>원정대 귀속됨 </FONT>"
      },
      "Element_004": {
        "type": "MultiTextBox",
        "value": "|<font color='#C24B46'>거래 불가</font>"
      },
      "Element_005": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>추가 효과</FONT>",
          "Element_001": "모든 선박의 최종 내구도 수리 비용 +10.00% 감소<BR>섬에서 이동 속도 +6.00%<BR>선박 통상 운항 속도(노트) +2.0"
        }
      },
      "Element_006": {
        "type": "SingleTextBox",
        "value": "<FONT COLOR='#E2C87A'><FONT SIZE='12'>순도 높은 은으로 만들어진 나침반.<br>고급스러운 재료를 사용해 쉽게 망가지지 않는다.</FONT></FONT>"
      },
      "Element_007": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>판매불가</FONT>, <FONT COLOR='#C24B46'>파괴불가</FONT>, <FONT COLOR='#C24B46'>분해불가</FONT>, <FONT COLOR='#C24B46'>품질 업그레이드 불가</FONT></FONT>"
      },
      "Element_008": {
        "type": "SingleTextBox",
        "value": "<Font color='#5FD3F1'>[제작] 외로운 섬 오페르 - 바욤</font>"
      }
    },
    "E6ed580e_028": {
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#00B0FA'>은은한 원석 부적</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#00B0FA'>희귀 부적</FONT></FONT>",
          "leftStr2": "",
          "qualityValue": -1,
          "rightStr0": "<FONT SIZE='12'><FONT COLOR='#FFD200'>장착중</FONT></FONT>",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 2,
            "iconPath": "EFUI_IconAtlas/Acc/Acc_305.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "MultiTextBox",
        "value": "|<FONT SIZE='12'><FONT COLOR='#808080'>장착 가능 레벨</FONT> 50</FONT>"
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>원정대 귀속됨 </FONT>"
      },
      "Element_004": {
        "type": "MultiTextBox",
        "value": "|<font color='#C24B46'>거래 불가</font>"
      },
      "Element_005": {
        "type": "ItemPartBox",
        "value": {
          "Element_000": "<FONT COLOR='#A9D0F5'>추가 효과</FONT>",
          "Element_001": "모든 생활 활동 가능 레벨 +1<BR>모든 생활 스킬의 기본 보상 추가 획득률 +5.00%<BR>모든 생활 마스터리 스킬 레벨 +1"
        }
      },
      "Element_006": {
        "type": "SingleTextBox",
        "value": "<FONT COLOR='#E2C87A'><FONT SIZE='12'>희미한 빛을 내는 원석을 가공해 만든 부적.<br>가지고 있으면 마음에 위안이 된다.</FONT></FONT>"
      },
      "Element_007": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>판매불가</FONT>, <FONT COLOR='#C24B46'>파괴불가</FONT>, <FONT COLOR='#C24B46'>분해불가</FONT>, <FONT COLOR='#C24B46'>품질 업그레이드 불가</FONT></FONT>"
      },
      "Element_008": {
        "type": "SingleTextBox",
        "value": "<Font color='#5FD3F1'>[수집품] 세계수의 잎</font>"
      }
    },
    "E6ed580e_030": {
      "AvatarAttribute": {
        "IsInner": false,
        "IsSet": false
      },
      "Element_000": {
        "type": "NameTagBox",
        "value": "<P ALIGN='CENTER'><FONT COLOR='#ce43fc'>벚꽃 모코코 이동 효과</FONT></P>"
      },
      "Element_001": {
        "type": "ItemTitle",
        "value": {
          "leftStr0": "<FONT SIZE='12'><FONT COLOR='#ce43fc'>영웅 이동 효과 아바타</FONT></FONT>",
          "leftStr2": "",
          "qualityValue": -1,
          "rightStr0": "<FONT SIZE='12'><FONT COLOR='#FFD200'>장착중</FONT></FONT>",
          "slotData": {
            "advBookIcon": 0,
            "battleItemTypeIcon": 0,
            "cardIcon": false,
            "friendship": 0,
            "iconGrade": 3,
            "iconPath": "EFUI_IconAtlas/Moving_Effect/Moving_Effect_3.png",
            "imagePath": "",
            "islandIcon": 0,
            "rtString": "",
            "seal": false,
            "temporary": 0,
            "town": 0,
            "trash": 0
          }
        }
      },
      "Element_002": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>무도가(여)계열</FONT>"
      },
      "Element_003": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'>원정대 귀속됨 </FONT>"
      },
      "Element_004": {
        "type": "MultiTextBox",
        "value": "|<font color='#C24B46'>거래 불가</font>"
      },
      "Element_005": {
        "type": "SingleTextBox",
        "value": "<FONT SIZE='12'><FONT COLOR='#C24B46'>판매불가</FONT>, <FONT COLOR='#C24B46'>분해불가</FONT></FONT>"
      }
    }
  },
  "GemSkillEffect": [
    {
      "EquipGemSlotIndex": 4,
      "SkillDesc": "<FONT COLOR='#FFD200'>섬열란아</FONT> 피해 21.00% 증가",
      "SkillIcon": "EFUI_IconAtlas/BM_Skill/BM_Skill_01_3.png",
      "SkillName": "섬열란아",
      "SkillSlotIndex": 3
    },
    {
      "EquipGemSlotIndex": 0,
      "SkillDesc": "<FONT COLOR='#FFD200'>섬열란아</FONT> 재사용 대기시간 14.00% 감소",
      "SkillIcon": "EFUI_IconAtlas/BM_Skill/BM_Skill_01_3.png",
      "SkillName": "섬열란아",
      "SkillSlotIndex": 3
    },
    {
      "EquipGemSlotIndex": 1,
      "SkillDesc": "<FONT COLOR='#FFD200'>용맹의 포효</FONT> 재사용 대기시간 14.00% 감소",
      "SkillIcon": "EFUI_IconAtlas/BM_Skill/BM_Skill_01_4.png",
      "SkillName": "용맹의 포효",
      "SkillSlotIndex": 10
    },
    {
      "EquipGemSlotIndex": 10,
      "SkillDesc": "<FONT COLOR='#FFD200'>바람

'''