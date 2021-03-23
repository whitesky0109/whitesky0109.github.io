---
title: 'Gatsby 배포된 문서에 이미지 표시 방법'
tags: ['gatsby']
published: true
date: '2021-03-22'
---

해당 문서(.md)에 이미지를 가져와 보여주고 싶은데 방법을 몰랐다.

그래서 [아래와 같은 방법](https://www.gatsbyjs.com/docs/how-to/images-and-media/static-folder/)으로 추가했다.

1. static 디렉토리에 이미지 파일을 넣는다.

2. static 디렉토리가 md 파일 입장에서 root(/)로 시작한다.
  (예를 들어 static/images/diary.svg 이면 -> /images/diary.svg)

3. 테스트 해보자.

![](/images/diary.svg)

(이렇게...)

## 궁금점
1. static 디렉토리를 변경 방법은?

2. static 말고 가져오는 방법은?

3. posts 디렉토리에 두고 가져오는 방법은?

## 도움 받은 사이트

- [Using the Static Folder](https://www.gatsbyjs.com/docs/how-to/images-and-media/static-folder/)