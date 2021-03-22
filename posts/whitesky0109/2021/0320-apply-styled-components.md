---
title: 'Gatsby에 Styled-component 적용기'
tags: ['nodejs', 'javascript', 'css']
published: true
date: '2021-03-20'
---

사내에서 [Styled-component](https://www.daleseo.com/react-styled-components/)로 CSS를 수정하다 보니
[CSS-in-JS](https://velog.io/tags/CSS-in-JS)가 익숙해서 해당 블로그에도 styled-component를 적용해볼려고 한다.

---
## 설치

```powershell
PS D:\dev\blog> yarn add gatsby-plugin-styled-components styled-components babel-plugin-styled-components
```

---
## 설정

```javascript
{
  plugins: [
    `gatsby-plugin-styled-components`,
    ...
  ]
}
```

---
## 도움 받은 사이트

- [Styled Components](https://www.gatsbyjs.com/docs/how-to/styling/styled-components/)

## changed

[commit](https://github.com/whitesky0109/whitesky0109.github.io/commit/2840f7c7f434b1406e9c907d9f9aaf12fabb94e5)
