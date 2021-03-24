---
title: 'Travis를 활용하여 github.io에 자동 배포 적용기'
tags: ['git']
published: true
date: '2021-03-23'
---

현재 github에 코드를 업로드 하고 있는 상태에서

간편하게 git을 통해 github에 코드가 반영되면 자동으로 [githubUserId].github.io가 반영되길 원했다.

그래서 자동 배포하는 방법을 찾아보았고, 자동 배포에서 내가 원하는 기능은 아래와 같다.

1. github와 유기적 연동
2. github에서 자동 배포 현황 기본 UI 제공
3. 자동 배포 사이트 및 현황 UI 제공
4. git push와 동시에 배포 빌드를 원격(외부 시스템)에서 동작
5. 장애 처리에 대한 다양한 레퍼런스(커뮤니티) 제공

그리고 내 코드를 보니 travis 설정 파일(.travis.yml)이 적용되어 이를 활용하여 자동 배포를 적용기를 작성하고자 한다.

---
## [Travis?](https://owin2828.github.io/devlog/2020/01/09/cicd-1.html)

CI(Continuous Integration)/CD(Continuous Delivery) 도구 중 하나

---
## 사전 준비

(자세한 내용은 [해당 링크](https://anpigon.github.io/blog/kr/@anpigon/travisci-gatsby--1545840561400/)를 참조 바랍니다.)

### github token 생성

내 github 수정 권한을 Travis에 제공해야하는데, 이를 얻기 위해 github token 생성이 필요하다.

아래의 링크에서 github token을 생성해야 한다.

https://github.com/settings/tokens

![](/snapshot/2021/0323/createGithubTokenGuide1.PNG)
(repo와 관련한 설정은 허용하도록 설정하자.)

그리고 저장하면 아래의 그림과 같이토 토큰 값을 볼 수 있다.
생성된 토큰 값은 어딘가 저장하자.(이후에 사용해야 하는 값)
![](/snapshot/2021/0323/createGithubTokenGuide2.PNG)
(Token 생성 후 토큰 값을 볼 수 있는데, 페이지 새로 고침하면 다시는 볼 수 없다.
다만 토큰 값을 재생성은 가능하다.)

---
## Travis 연동 환경 설정

[travis](https://travis-ci.com/) 페이지에 접근하여 github 계정으로 로그인하여 Travis github 계정을 만들자.

[repositories](https://travis-ci.com/account/repositories)에 접근하여 Github Integration 활성화 하자.

#### Repositories 활성화

![](/snapshot/2021/0323/activeRepositoryTravisGuide1.PNG)
(활성화 버튼을 클릭 하면 Github 페이지로 리다이렉트가 됩니다.)

Travis에서 접근가능한 Repository를 지정하자.
![](/snapshot/2021/0323/activeRepositoryTravisGuide2.PNG)
(나는 Travis에서는 github.io만 사용할 예정이라 특정 Repository를 지정했다.)

#### Repository 등록 확인

[dashboard](https://travis-ci.com/dashboard)에 접근하면 활성화된 Repository 목록을 확인 할 수 있다.

![](/snapshot/2021/0323/activeRepositoryTravisGuide3.PNG)

#### Repository 설정으로 GITHUB_TOKEN 추가

Travis를 통해 Github에 배포(Commit)를 위해서는 Git 접근 권한을 설정해줘야 한다.

1. 특정 Repository의 설정 페이지에 접근하자.
  ![](/snapshot/2021/0323/settingRepositoryInTravisGuide1.PNG)
2. 설정 하단에 Environment Variables에 앞에서 받아온 Github token값을 등록하자.
  ![](/snapshot/2021/0323/settingRepositoryInTravisGuide3.PNG)
  (나는 배포 코드는 master에 있기에 master 브랜치도 지정했다.)

---
### Travis 빌드 환경 설정

지금까지 Github와 Travis간의 연동 설정을 했다면 지금부터는 Travis에서 실행 될 빌드동작과 환경을 설정한다.

git 코드 최상단 디렉토리에 .travis.yml 파일을 생성 후 아래와 같이 수정하자.

```yml
# .travis.yml
language: node_js

node_js:
  - "lts/*"

cache:
  yarn: true
  directories:
    - node_modules
    - public
    - .cache

deploy:
  provider: pages # Use Github pages deploy process
  skip-cleanup: true
  local_dir: public
  github_token: $GITHUB_TOKEN # Github security/auth token
  keep_history: true
  target_branch: public
  on:
    branch: master

# before_script:
#   - "npm i -g gatsby-cli"
#   - "yarn"

script:
  - gatsby build
```

그리고 저장된 내용을 github에 push하면 바로 Travis가 동작할 것이다.

---
## 빌드 결과

git의 빌드 결과는 build history에서 볼 수 있다.
![](/snapshot/2021/0323/buildTravisGuide1.PNG)


---
## 도움 받은 사이트

- [Travis-CI를 이용한 Gatsby 블로그 자동 배포하기](https://anpigon.github.io/blog/kr/@anpigon/travisci-gatsby--1545840561400/)
- [Deploying a Gatsby site to GitHub Pages from Travis CI](https://snyk.io/blog/deploying-a-gatsby-site-to-github-pages-from-travis-ci/)
- [How to deploy on Github Pages with Travis CI?](https://slashgear.github.io/how-to-deploy-on-github-pages-with-travis-ci/)

---
## changed

- [[master][CI] change config](https://github.com/whitesky0109/whitesky0109.github.io/commit/4280fad341c83bbbd3e0a4bb5903e5c91dcfc530)
- [[master][CI] fixed build config](https://github.com/whitesky0109/whitesky0109.github.io/commit/21b99bc5b3a0f0c5bf946399f1f7448bdf3f9335)
- [[master][travis] disabled before_script](https://github.com/whitesky0109/whitesky0109.github.io/commit/f869f2d2e45203e32b29d267f9858862016ad7cd)
- [[master] update travis config](https://github.com/whitesky0109/whitesky0109.github.io/commit/e2dbc5018acc8c276f39fe466ade9283f28cf026)
- [[master][post][incomplete] write testing travis](https://github.com/whitesky0109/whitesky0109.github.io/commit/730f64ccc3dc00c2f66f2a95bcdfd5efc9d70f7e)
- [[master] fixed gh-pages config](https://github.com/whitesky0109/whitesky0109.github.io/commit/b2462231d8abf4712b66a5c9777bf6a4691b420c)
- [[masater] update travis config & deploy config](https://github.com/whitesky0109/whitesky0109.github.io/commit/5109d85be0c90b1488be30257ab5ee2506a5c072)
- [[master] update travis config](https://github.com/whitesky0109/whitesky0109.github.io/commit/9a0c3835b23aebcaf08ffdbaad7685b829e29d77)
- [[master] edit travis settings](https://github.com/whitesky0109/whitesky0109.github.io/commit/4bbd85915cbe78cebe53de5e71b8a2edf9e46b3b)
- [test travis](https://github.com/whitesky0109/whitesky0109.github.io/commit/1e9455871640fc57dc21595e421a4b22684a2f55)