---
title: 'Gatsby에 ESLint 적용기'
tags: ['nodejs', 'javascript', 'vscode']
published: true
date: '2021-03-19'
---

내 블로그에 추가하는 코드들의 [ESLint](https://poiemaweb.com/eslint)를 적용하여 VSCode 코드 제안을 받아보자.

---

## airbnb 설치

```powershell
PS D:\dev\blog> yarn add -D eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

---

## ESLint 설정

```javascript
// .eslintrc.js
module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: 'airbnb',
};
```

## 적용했더니...?

![](/snapshot/lintError1.PNG)
(헉....)

---

## 도움 받은 사이트

- [Using ESLint](https://www.gatsbyjs.com/docs/how-to/custom-configuration/eslint/)
- [github blog 생성하기 (feat. gatsby)](https://velog.io/@hwang-eunji/create-github-blog-feat.-gatsby)

## changed

[commit](https://github.com/whitesky0109/whitesky0109.github.io/commit/094d853b0d38d6f8cf23642d418479b232382f16)
