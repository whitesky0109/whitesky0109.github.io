---
title: 'Gatsby로 Github.io 생성기'
tags: ["gatsby"]
published: true
date: '2021-03-18'
---

---
gatsby를 이용하여 개인 사이트를 github.io에 업로드까지 과정을 설명해보려고 한다.

---
# [Gatsby](https://blog.outsider.ne.kr/1426)란?

* [JAMstack](https://pks2974.medium.com/jam-stack-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-17dd5c34edf7)(Javascript / API / Markup) SSG(Static Site Generator) 중 하나

---
# [개발 환경](https://www.gatsbyjs.com/docs/tutorial/part-zero/) 구성
- windows 10
- [git](https://git-scm.com/download)
- [node.js](https://nodejs.org/ko/) 나 [NVM](https://github.com/coreybutler/nvm-windows/releases/)
  - v12.13.0 이상 사용을 권장 한다. ([왜?](https://www.gatsbyjs.com/docs/upgrading-node-js/))

    ```powershell
    PS D:\dev> gatsby new hello

    ERROR

    Gatsby requires Node.js 12.13.0 or higher (you have v10.23.0).
    Upgrade Node to the latest stable release:
    https://gatsby.dev/upgrading-node-js
    ```

---
# github.io에 내 저장소 만들기
호스팅할 곳을 정해야하는데,

나는 {githubUserId}.github.io/ 라는 URL로 접근하면 바로 페이지를 볼 수 있는 환경을 원했다.

그러기 위해선,
내 github에서 내 계정으로 로그인 후 Repository를 생성을 해야하는데,
Repository 이름을 어떻게 만드냐에 따라 root URL로 접근할 수 있었다.

### Repository [name]

- {githubUserId}.github.io/{name} 로 접근해야 페이지에 접근이 가능하다.
![](/images/snapshot/newRepositoryGuide2.png)

### Repository [githubUserId].github.io

- {githubUserId}.github.io/ 로 접근하면 페이지에 접근이 가능했다.
![](/images/snapshot/newRepositoryGuide1.png)
(자세히 보면 친절하게 github에서 잘못 썻다고 경고하고 있다.)

- 다만 이러는 경우 git source가 github.com/{githubUserId}/{githubUserId}.github.io가 되어 소스 URL이 길어지는건 조금 아쉬움이 남는다.

---
# [Gatsby staters](https://www.gatsbyjs.com/starters/)
- boilerplate 라이브러리 모음집
- [너로 정했다!](https://www.gatsbyjs.com/starters/willjw3/gatsby-starter-developer-diary/)
- 깔끔하고 이뻐서 선택했다.

---
# Gatsby 빌드하기
- 소스 가져오기
```powershell
PS D:\dev> gatsby new diary https://github.com/willjw3/gatsby-starter-developer-diary 
```
(window의 경우 아래와 같이 오류가 나온다)
```powershell
gyp ERR! stack Error: Could not find any Python installation to use
gyp ERR! stack     at PythonFinder.fail (C:\nvm\v14.16.0\node_modules\npm\node_modules\node-gyp\lib\find-python.js:307:47)
gyp ERR! stack     at PythonFinder.runChecks (C:\nvm\v14.16.0\node_modules\npm\node_modules\node-gyp\lib\find-python.js:136:21)
gyp ERR! stack     at PythonFinder.<anonymous> (C:\nvm\v14.16.0\node_modules\npm\node_modules\node-gyp\lib\find-python.js:225:16)
gyp ERR! stack     at PythonFinder.execFileCallback (C:\nvm\v14.16.0\node_modules\npm\node_modules\node-gyp\lib\find-python.js:271:16)
gyp ERR! stack     at exithandler (child_process.js:315:5)
gyp ERR! stack     at ChildProcess.errorhandler (child_process.js:327:5)
gyp ERR! stack     at ChildProcess.emit (events.js:315:20)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:275:12)
gyp ERR! stack     at onErrorNT (internal/child_process.js:465:16)
gyp ERR! stack     at processTicksAndRejections (internal/process/task_queues.js:80:21)
gyp ERR! System Windows_NT 10.0.19042
```
그래서 오류 발생 후 디렉토리로 들어가서 다시 빌드하자.
```powershell
PS D:\dev> cd .\diary\
PS D:\dev\diary> yarn # npm install -g yarn
```

### 빌드
```powershell
PS D:\dev\diary> gatsby build
```

---
# Gatsby 배포하기
1. github에 배포하기 위한 command를 추가하자
```powershell
PS D:\dev\diary> yarn add -D gh-pages
```

2. 소스 배포 주소를 지정하자.
```powershell
PS D:\dev\diary> git push -u origin master
PS D:\dev\diary> git remote add origin https://github.com/[githubUserId]/[githubUserId].github.io.git
```

3. package.json에 명령어 추가하자.
```json
{
  ...
  "scripts": {
    ...
    "deploy": "gatsby build && gh-pages -d public -b master",
  },
}
```

3. 배포 하자.
```powershell
PS D:\dev\diary> yarn deploy
```
(이렇게 해서 현재 페이지를 보게 되었다.)

---
## 도움 받은 사이트
- [정적 사이트 생성기](https://blog.outsider.ne.kr/1426)
- [Set Up Your Development Environment](https://www.gatsbyjs.com/docs/tutorial/part-zero/)
- [Gatsby.js로 블로그 만들기[1]](https://siisee111.medium.com/gatsby-js%EB%A1%9C-%EC%9B%B9%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0-1-11d5cf3336c6)