<img src='https://github.com/boostcampwm2023/web17_morak/assets/43867711/113814b6-0fc2-4ae0-adce-94238ecc2f6b' />

<p align='center'><a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fboostcampwm2023%2Fweb17_morak&count_bg=%231FAB70&title_bg=%23A8AEAC&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a></p>

<h3 align='center'><a href='https://morak.io/'>https://morak.io</a></h3>
<p align='center'>
<a href='https://www.notion.so/Morak-11ea873b5f3d4ac8b741bb933ee41170?pvs=21'>📒 팀 노션</a> | 
<a href='https://www.notion.so/e55bfedb723443adb14dfa0e3910cc42?pvs=21'>🖋️ 그라운드 룰</a> | 
<a href='https://www.notion.so/af66c77dc0f648ce9317a33a37510f24?pvs=21'>📜 기획서</a> | 
<a href='https://www.figma.com/file/ekdMdDQqhXwJBAf2bus6xJ/%EB%B6%80%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%94%84-%EB%AA%A8%EB%9D%BD?type=design&node-id=2-1066&mode=design&t=8trPIWAnQYrLKd6J-0'>🎨 디자인</a> | 
<a href='https://github.com/boostcampwm2023/web17_morak/wiki'>🔍 위키</a>
</p>

# 모락 | Morak

> **네이버 부스트캠프 내 모각코 모집/관리 플랫폼**

**모락**은 부스트캠프 웹·모바일 8기의 모각코 살롱 채널인 '카페인\_cafe人' 채널로부터 아이디어를 얻어 출발했습니다.

기존 슬랙 채널에 존재하던 정보 분산과 가독성 문제를 해결하고, 누구나 쉽고 빠르게 모각코를 열거나 참여할 수 있는 플랫폼을 목표로 개발된 서비스입니다.

이후의 모든 부스트캠프 캠퍼들이 이 서비스를 통해 더욱 활발한 오프라인 모각코 문화를 만들어가길 소망합니다.

## 기능 설명

**📌 내가 속한 그룹의 모임 글을 리스트 형태로 볼 수 있습니다**

<img width="1552" alt="모임 글 리스트 캡처 화면" src="https://github.com/boostcampwm2023/web17_morak/assets/43867711/eb832e09-b798-4866-bd7b-812a60b82402">

**🗓️ 내가 속한 그룹의 모임을 달력 뷰로 확인할 수 있습니다**

<img width="1508" alt="달력 뷰 캡처 화면" src="https://github.com/boostcampwm2023/web17_morak/assets/43867711/d6cd8dbd-70e1-4149-bf33-30add3faf3b8">

**🗺️ 내가 속한 그룹의 모임을 지도 뷰로 확인할 수 있습니다**
<img width="1552" alt="지도 뷰 캡처 화면" src="https://github.com/boostcampwm2023/web17_morak/assets/43867711/09a25d3c-2a0c-4bd7-82e5-cf6dbf505902">

**📌 달력과 지도 뷰에서 모임에 대한 상세 내용을 사이드 바로 확인할 수 있습니다**
|<img width="1508" alt="달력 뷰 사이드 바 캡처 화면" src="https://github.com/boostcampwm2023/web17_morak/assets/43867711/8986f0c4-58e1-47f7-a118-ce2c84838f79">|<img width="1552" alt="지도 뷰 사이드 바 캡처 화면" src="https://github.com/boostcampwm2023/web17_morak/assets/43867711/a357742e-1c18-4a2d-a213-9c82a73d5325">|
|:--:|:--:|

**📌 참여한 모임에서는 채팅으로 소통할 수 있습니다**
<img width="1552" alt="채팅 캡처 화면" src="https://github.com/boostcampwm2023/web17_morak/assets/43867711/b771289c-9b12-4211-82bd-1c683a193955">

**👥 그룹에서 참여하고 나갈 수 있습니다**
<img width="1552" alt="그룹 리스트 캡처 화면" src="https://github.com/boostcampwm2023/web17_morak/assets/43867711/2cf1e4a6-2d44-499c-a7f8-bd0b73fabc88">

## 🧑‍💻 기술적 도전


### **Monorepo With Turborepo**

- 모노레포를 도입하여 코드 공유, 일관된 코드 스타일, 빌드 및 테스트 캐싱을 통해 효율성을 올렸습니다.
    - 모노레포의 내부 패키지 사용으로 다음과 같은 이점을 얻었습니다.
        - FrontEnd/BackEnd 간 타입 불일치 문제를 예방하고 인터페이스 변경에 신속하고 정확하게 대응할 수 있도록 공통 타입을 사용합니다.
        - 공통 컴포넌트를 패키지화하여 컴포넌트의 재사용성을 높입니다.
        - configuration 파일 재사용으로 초기 세팅 비용을 줄입니다.
    - Turborepo의 캐싱 기능을 Docker 이미지 빌드에 적용하여 빌드 시간을 단축했습니다.
    - [TurboRepo 설정](https://www.notion.so/fe9bbfaed0cd411e9a5d0aae7550a863?pvs=21) by 서지원

### **Test Code**

- 보다 더 효율적인 개발과 QA 방식을 위한 테스트 코드 작성에 대해 고민했습니다.
    - [UI 테스트를 할 수 있는 방법은? (시각적 회귀 테스트)](https://www.notion.so/UI-ee39d501d6b6498a9583859cc64e8a38?pvs=21) by 이태림

### **지도**

- TMap API를 사용하여 사용자와 상호작용할 수 있는 지도 페이지를 개발했습니다.
- 좋은 사용자 경험을 주기 위해 Vector와 Raster 지도 SDK를 개발자 도구 성능 탭으로 비교해 보고, 선택한 과정을 담았습니다.
    - [Tmap API로 지도 렌더링](https://www.notion.so/TMap-API-06c9e324d093465ea8da56777d338aaa?pvs=21) by 이지원
    - [폼 작성 시 장소 선택 TMap API 적용하기](https://www.notion.so/TMAP-API-1645d224b33d4f968ee81dca843bd8ae?pvs=21) by 이태림
    - [느림의 미학 (feat. TMap 지도 성능 측정)](https://www.notion.so/TMap-063aa40efb0e4d0a95c61a990a188f45?pvs=21) by 이지원, 이태림

### **채팅**

- socket.io를 기반으로 사용자들이 실시간으로 대화를 나눌 수 있는 채팅 기능을 개발했습니다.
- FE에서 채팅 구현 중 겪은 여러 문제 상황과 해결 과정에 대하여 기록하였습니다.
    - [FE 채팅 기능 구현과 트러블슈팅](https://www.notion.so/9c866a10d5754c81bf86850a881486ef?pvs=21) by 맹지승

### **OAuth2.0과 인증/인가**

- NestJS에서 소셜 로그인에 대한 인증과 사용자 정보를 인지하여 인가 처리를 기록하였습니다.
- 로그인을 통해 해당 사용자의 정보를 추출해내어 사용하는 방법을 기록하였습니다.
    - [지금 접속한 당신 정체가 무엇이오?](https://www.notion.so/67f910a8f32140ccb43bf9d9622c8b84?pvs=21) by 임동혁
    - [인증(Authentication)과 인가(Authorization)](https://www.notion.so/Cookie-ea27c771aeef406aadc02709f587c99e?pvs=21) by 임동혁

### 기타

- [assets는 왜, 어디에서 관리해야 할까요? public? src?](https://www.notion.so/assets-9b3e50f913cb4fdbabce2c0b5a06851f?pvs=21) by 이태림
- [react-query와 컴포넌트 props 전달](https://www.notion.so/a86d59c0a6924b27b764e589df34af41?pvs=21) by 맹지승
- [NestJS 빡치는 라우팅 시스템에 대해 알아보자](https://www.notion.so/f3d7e301dd5040d2950f423ca211ecae?pvs=21) by 임동혁
- [Jest 경로를 일일히 지정해야 한다고?](https://www.notion.so/433965335b5845878257813e3e733cac?pvs=21) by 임동혁
- [Jotai vs. Zustand](https://www.notion.so/Jotai-vs-Zustand-e0837b29d53e4fe2a3793dee1a6487c9?pvs=21) by 맹지승
- [놀랍고 재미있는 접근성 개선](https://www.notion.so/5e26158dc5254aba9b6bff2d706be07d?pvs=21) by 맹지승
- [모바일에서 폼 입력 시 화면이 확대되는 현상… 접근성과 관련 있다고?](https://www.notion.so/6f3bad0053f04f84afed52d562d78be6?pvs=21) by 이태림
- [Nginx 설정](https://www.notion.so/dd2c18bdc779419b8928424f1a97048e?pvs=21) by 서지원
- [Docker Registry 설정](https://www.notion.so/61b9b8ab5f1440eeb738248832cfaaba?pvs=21) by 서지원


> 이 외에도 [모락 팀의 개발 일지](https://www.notion.so/ttaerrim/be56a4fcbd3f4fe9a6f29525b492ab0c?pvs=4)를 구경해 보세요!


## 기술 스택

|      분류 | 스택                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :---------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|    **Common**     | <img src="https://img.shields.io/badge/TypeScript-5.0.2-3178C6?logo=typescript&logoColor=white&color=5C5C5C&labelColor=3178C6"/> <img src="https://img.shields.io/badge/Node.js-20.9.0-339933?logo=Node.js&color=5C5C5C&labelColor=339933&logoColor=white"/> <img src="https://img.shields.io/badge/npm-10.1.0-CB3837?logo=npm&color=5C5C5C&labelColor=CB3837"/> <img src="https://img.shields.io/badge/Turborepo-EF4444?logo=turborepo&logoColor=white"/> <img src="https://img.shields.io/badge/Socket.io-4.7.2-010101?logo=Socket.io&logoColor=white&color=5C5C5C&labelColor=010101"/>                                                                                                         |
|   **FrontEnd**    | <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=5C5C5C"/> <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white"/> <img src="https://img.shields.io/badge/React_Query-FF4154?logo=reactquery&logoColor=white"/> <img src="https://img.shields.io/badge/Vanilla_Extract-CCFBF2?logo=vanillaextract&logoColor=white"/> <img src="https://img.shields.io/badge/Jotai-171717?logo=ghostery&logoColor=white"/> <img src="https://img.shields.io/badge/React_Hook_Form-EC5990?logo=reacthookform&logoColor=white"/> <img src="https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=white"/>                                                 |
|    **BackEnd**    | <img src="https://img.shields.io/badge/NextJS-10.0.0-E0234E?logo=nestjs&color=5C5C5C&labelColor=E0234E"/> <img src="https://img.shields.io/badge/Prisma-5.5.2-2D3748?logo=prisma&color=5C5C5C&labelColor=2D3748"/> <img src="https://img.shields.io/badge/MySQL-8.2.0-4479A1?logo=mysql&logoColor=white&color=5C5C5C&labelColor=4479A1"/> <img src="https://img.shields.io/badge/Redis-7.2.3-DC382D?logo=redis&color=5C5C5C&labelColor=DC382D&logoColor=white"/> <img src="https://img.shields.io/badge/MongoDB-7.0.3-47A248?logo=mongodb&color=5C5C5C&labelColor=47A248&logoColor=white"/> <img src="https://img.shields.io/badge/Jest-29.5.0-C21325?logo=jest&color=5C5C5C&labelColor=C21325"/> |
|     **Infra**     | <img src="https://img.shields.io/badge/Github_Action-2088FF?logo=githubactions&logoColor=white"/> <img src="https://img.shields.io/badge/Naver_Cloud_Platform-03C75A?logo=naver&logoColor=white"/> <img src="https://img.shields.io/badge/Docker-24.0.7-2496ED?logo=docker&color=5C5C5C&labelColor=2496ED&logoColor=white"/> <img src="https://img.shields.io/badge/Docker_Compose-2.21.0-2496ED?logo=docker&color=5C5C5C&labelColor=2496ED&logoColor=white"/> <img src="https://img.shields.io/badge/nginx-1.25.3-009639?logo=nginx&color=5C5C5C&labelColor=009639"/> <img src="https://img.shields.io/badge/Vault-1.13.3-FFEC6E?logo=vault&color=5C5C5C&labelColor=FFEC6E&logoColor=white"/>    |
| **Collaboration** | <img src="https://img.shields.io/badge/Slack-4A154B?logo=slack&logoColor=white"/> <img src="https://img.shields.io/badge/Notion-000000?logo=Notion"> <img src="https://img.shields.io/badge/Figma-F24E1E?logo=Figma&logoColor=ffffff"> <img src="https://img.shields.io/badge/Discord-5865F2?logo=Discord&logoColor=ffffff">                                                                                                                                                                                                                                                                                                                                                                      |

## 아키텍처 구조도

![image](https://github.com/boostcampwm2023/web17_morak/assets/43867711/adf6c3ca-7fff-4cf0-a7ae-4ae79ac1e28f)

## 브랜치 전략

![image](https://github.com/boostcampwm2023/web17_morak/assets/43867711/ffc35dc4-7c48-4526-b14e-325521d007d9)

1. upstream에서는 `main` 브랜치와 `develop` 브랜치만 관리한다.
2. 개발 feature는 `develop` 브랜치에서 따서 작업 후 `develop` 브랜치로 머지한다.
3. 협업으로 인한 추가 브랜치가 필요한 경우 upstream에서 `develop` 기준 `feature` 브랜치를 생성하여 2와 같은 방식으로 작업한다.

## 🧑🏻‍💻 `command`

### package install

```bash
$ npm install <package-name> -w=backend
$ npm install <package-name> -w=frontend
```

### run

```bash
$ npm run start:dev -w=backend
$ turbo run start:dev --filter backend

$ npm run dev -w=frontend
$ turbo run dev --filter frontend
```

- 이외 명령어들도 각 app 내의 script 명령어를 root(web17_morak)에서 `npm run <command> -w={workspace}` 형태로 입력하여 실행하면 됩니다.
- turbo scripts를 이용하고 싶을 경우 `turbo.json`에 추가가 필요합니다.

## 팀원

|                                   FrontEnd                                   |                                   FrontEnd                                    |                                   FrontEnd                                   |                                   BackEnd                                    |                                   BackEnd                                    |
| :--------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :--------------------------------------------------------------------------: | :--------------------------------------------------------------------------: | :--------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/43867711?v=4" width="100"> | <img src="https://avatars.githubusercontent.com/u/110762136?v=4" width="100"> | <img src="https://avatars.githubusercontent.com/u/50646827?v=4" width="100"> | <img src="https://avatars.githubusercontent.com/u/77393976?v=4" width="100"> | <img src="https://avatars.githubusercontent.com/u/22430531?v=4" width="100"> |
|                    [이태림](https://github.com/ttaerrim)                     |                    [이지원](https://github.com/LEEJW1953)                     |                      [맹지승](https://github.com/js43o)                      |                   [임동혁](https://github.com/ldhbenecia)                    |                     [서지원](https://github.com/ccxz84)                      |
