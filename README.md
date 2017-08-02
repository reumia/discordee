# Discordee

discord 서버목록 검색 플랫폼.
    
## 개발로그

### 2017.08.09 Bye- Bye- Firebase

Firebase Cloud Functions + Firebase Hosting + React + Discord API

를 활용한 개발서버에서의 연동구조는 작성 및 테스트 완료하였으나, 배포서버에만 올라가면 Clound Functions 에서 500에러가 발생했다.
콘솔의 로그를 통해서 확인해본 바, [getaddrinfo ENOTFOUND ...](https://stackoverflow.com/questions/42774807/firebase-functions-getaddrinfo-enotfound-api-sandbox-paypal-com)로 인한 Carsh가 발생했고,
관련 내용을 검색해보니 Firebase Clound Functions 무료 서비스 정책은 Discord와 같은 External API와의 연결을 제한하여 나타나는 이슈였다...

Firebase를 활용한 Discordee의 개발은 여기에서 종료하고, Heroku에서 서버구성부터 다시 시작할 예정이다.

External API를 사용하지 않는 서비스의 경우에는 Firebase의 강력한 유틸리티를 활용해서 개발하는 것이 개발 속도와 안정성에서 이점이 여러모로 크다.
개발간 유용했던 팁을 기록하는 것으로 이 저장소에 관련한 작업을 마무리하고자 한다.

## Firebase 개발참고

- [호스팅과 Colud Functions 연결](https://firebase.google.com/docs/hosting/functions?hl=ko)
- [Webpack Dev Server와 Firebase Serve 함께 사용](http://qiita.com/koki_cheese/items/8892644c7ebff733466d)
- [Enabling CORS in Cloud Functions for Firebase](https://stackoverflow.com/questions/42755131/enabling-cors-in-cloud-functions-for-firebase)
- [All you need is React & Firebase](https://www.codementor.io/yurio/all-you-need-is-react-firebase-4v7g9p4kf)

## 기타 UI 및 서비스 개발참고
- [Material Icons](https://material.io/icons/)
- [Making a Discord Bot](https://newagesoldier.com/making-a-discord-bot/)
    - [Heroku Node.js Server](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)