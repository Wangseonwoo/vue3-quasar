# Quasar App (learn-quasar) Note

A Quasar Project

## 1. Quasar CLI start

```
npm i -g @quasar/cli
npm init quasar
```

## 2. Typhography

### 링크 추가하는법

> MainLayout파일의 linksList에 추가 -> pages 폴더에 링크에 추가할 페이지 생성 -> router 폴더 안 routes.js 파일에 경로 추가하기

### class 속성 활용하여 태그 꾸미기

> class = 'text-h4 q-pa-xl' 등 이있다. 자세한건 공식문서 참조

## 3. Colors

### Quasar는 지정된 명령어에 기본으로 저장되어있는 색상 코드가 존재

> scss를 활용 하기에 $컬러명 작성 지정된 컬러명에 색상을 변경하고 싶으면  
> -> css 폴더 안의 quasar.variables.scss 파일에서 변경  
> 폰트 스타일등 스타일을 import 해서 사용 할때는  
> -> app.scss파일 에서 사용

## 4. Breakpoints

### mediaquery

> Quasar에서는 max-width: 사이즈 로 직접 지정하지 않아도 된다.  
> Quasar에서 지정한 Sass 변수를 활용하여 해당 사이즈에 맞는 것을 선언 하면됨  
> ex) max-width: $breakpoint-xs-max ► 나머지는 공식 홈페이지 참조

### How to enable body classes

> body class를 활용하여 mediaquery설정  
> -> quassar.config.js 파일에서 framework 검색 아래의 코드 추가

```js
 framework: {
      config: {
        screen: {
          bodyClasses: true, // <<< add this
        },
      },
 },
```

### How to Use

```scss
.target {
  body.screen--sm & {
    // &는 부모 선택자로 부모의 바디 클래스에 screen--sm이 있다면 적용
    background-color: $orange;
  }
}
```

> q오브젝트 활용법 $q를 활용 $q.screen을 활용하여 필요한 값을 확인 후 적절히 잘 사용하기

### Flex Addons

> Flex Addons를 활용하면 클래스 명으로 미디어 쿼리 설정 가능

```js
framework: {
      cssAddon: true,
}
```

### How to Use

> q-pa-md 라는 디폴트 값 생성후 q-pa-md-xl 과 같이 미디어쿼리 추가

```html
<q-page class="q-pa-md q-pa-md-xl"></q-page>
```

## 5. Classes & Variables

### Helper Class

- Shadows

1. shadow-1
1. shadow-7
1. shadow-24

---

- Body class

1. desktop
2. mobile
3. touch
4. no-touch
5. platform-android
6. platform-ios

---

- Visibilty

1. hidden
2. ... 너무 많으므로 공식 문서 확인

---

- Position

1. ... 너무 많으므로 공식 문서 확인

---

- Sass/Scss Variables
  > Vairables list 에서 변경하고 싶은 변수를 복사해  
  > quasar.variables.scss파일 에 붙여 넣고 원사는 값으로 수정 가능
