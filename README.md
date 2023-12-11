<img src='https://github.com/boostcampwm2023/web17_morak/assets/43867711/113814b6-0fc2-4ae0-adce-94238ecc2f6b' />

<p align='center'><a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fboostcampwm2023%2Fweb17_morak&count_bg=%231FAB70&title_bg=%23A8AEAC&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a></p>

<h3 align='center'><a href='https://morak.io/'>https://morak.io/</a></h3>
<p align='center'>
<a href='https://www.notion.so/Morak-11ea873b5f3d4ac8b741bb933ee41170?pvs=21'>📒 팀 노션</a> | 
<a href='https://www.notion.so/e55bfedb723443adb14dfa0e3910cc42?pvs=21'>🖋️ 그라운드 룰</a> | 
<a href='https://www.notion.so/af66c77dc0f648ce9317a33a37510f24?pvs=21'>📜 기획서</a> | 
<a href='https://www.figma.com/file/ekdMdDQqhXwJBAf2bus6xJ/%EB%B6%80%EC%8A%A4%ED%8A%B8%EC%BA%A0%ED%94%84-%EB%AA%A8%EB%9D%BD?type=design&node-id=2-1066&mode=design&t=8trPIWAnQYrLKd6J-0'>🎨 디자인</a> | 
<a href='https://github.com/boostcampwm2023/web17_morak/wik'>🔍 위키</a>
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

| <!-- -->     | <!-- -->                                                                                                       |
| ------------ | :------------------------------------------------------------------------------------------------------------- |
| **Common**   | • Monorepo <br/>• socket.io 채팅                                                                               |
| **FrontEnd** | • Test Code 작성 <br/>• 성능 최적화 <br/>• 패키지 배포                                                         |
| **BackEnd**  | • OAuth, 인증・인가 <br/>• Unit Test Code 작성                                                                 |
| **Infra**    | • Github Action CI/CD 구축 <br/>• VPN 서버 구축 <br/>• Nginx 서버 구축 <br/>• Docker Registry, Vault 서버 구축 |

## 기술 스택

|                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
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

## 개발 일지

|        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 이태림 | • [assets는 어디에 두어야 할까요?](https://www.notion.so/assets-9b3e50f913cb4fdbabce2c0b5a06851f?pvs=21)<br/>• [폼 작성 시 장소 선택 TMAP API 적용하기](https://www.notion.so/1645d224b33d4f968ee81dca843bd8ae?pvs=21)                                                                                                                                                                                                                                                               |
| 맹지승 | • [FE 채팅 기능 구현과 트러블슈팅](https://www.notion.so/FE-9c866a10d5754c81bf86850a881486ef?pvs=21)<br/>• [react-query와 컴포넌트 props 전달](https://www.notion.so/a86d59c0a6924b27b764e589df34af41?pvs=21)                                                                                                                                                                                                                                                                        |
| 임동혁 | • [NestJS JWT 유저 정보 반환](https://www.notion.so/NestJS-JWT-67f910a8f32140ccb43bf9d9622c8b84?pvs=4)<br/>• [NestJS의 복잡한 라우팅 시스템에 대해 알아보자](https://www.notion.so/NestJS-f3d7e301dd5040d2950f423ca211ecae?pvs=4)<br/>• [인증(Authentication)과 인가(Authorization)](https://www.notion.so/Cookie-HttpOnly-Secure-ea27c771aeef406aadc02709f587c99e?pvs=4)<br/>• [Jest path alios 설정](https://www.notion.so/Jest-path-alios-433965335b5845878257813e3e733cac?pvs=4) |
| 이지원 | • [Tmap API로 지도 렌더링](https://www.notion.so/Tmap-API-06c9e324d093465ea8da56777d338aaa?pvs=21)                                                                                                                                                                                                                                                                                                                                                                                   |
| 서지원 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 공동   | • [Jotai vs. Zustand](https://www.notion.so/Jotai-vs-Zustand-e0837b29d53e4fe2a3793dee1a6487c9?pvs=21)                                                                                                                                                                                                                                                                                                                                                                                |

이 외에도 [모락 팀의 개발 일지](https://www.notion.so/ttaerrim/50a6652038d04e61920dbf8faecb80db?v=5eec47d4350b45b8b10da4c1ec7dc5d6)를 구경해 보세요!

## 🧑🏻‍💻 `command`

### package install

```bash
$ npm install <package-name> -w=backend
$ npm install <package-name> -w=frontend
```

### run

```bash
$ npm run start:dev -w=backend
$ npm run dev -w=frontend
```

- 이외 명령어들도 각 app 내의 script 명령어를 root(web17_morak)에서 `npm run <command> -w={workspace}` 형태로 입력하여 실행하면 됩니다.

## 팀원

|                                   FrontEnd                                   |                                   FrontEnd                                    |                                   FrontEnd                                   |                                   BackEnd                                    |                                   BackEnd                                    |
| :--------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :--------------------------------------------------------------------------: | :--------------------------------------------------------------------------: | :--------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/43867711?v=4" width="100"> | <img src="https://avatars.githubusercontent.com/u/110762136?v=4" width="100"> | <img src="https://avatars.githubusercontent.com/u/50646827?v=4" width="100"> | <img src="https://avatars.githubusercontent.com/u/77393976?v=4" width="100"> | <img src="https://avatars.githubusercontent.com/u/22430531?v=4" width="100"> |
|                    [이태림](https://github.com/ttaerrim)                     |                    [이지원](https://github.com/LEEJW1953)                     |                      [맹지승](https://github.com/js43o)                      |                   [임동혁](https://github.com/ldhbenecia)                    |                     [서지원](https://github.com/ccxz84)                      |
