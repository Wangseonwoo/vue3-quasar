# Quasar App (learn-quasar) Note

A Quasar Project

## 1. Quasar CLI start

```
npm i -g @quasar/cli
npm init quasar
```

<br><br>

## 2. Typhography

### 링크 추가하는법

> MainLayout파일의 linksList에 추가 -> pages 폴더에 링크에 추가할 페이지 생성 -> router 폴더 안 routes.js 파일에 경로 추가하기

### class 속성 활용하여 태그 꾸미기

> class = 'text-h4 q-pa-xl' 등 이있다. 자세한건 공식문서 참조

<br><br>

## 3. Colors

### Quasar는 지정된 명령어에 기본으로 저장되어있는 색상 코드가 존재

> scss를 활용 하기에 $컬러명 작성 지정된 컬러명에 색상을 변경하고 싶으면  
> -> css 폴더 안의 quasar.variables.scss 파일에서 변경  
> 폰트 스타일등 스타일을 import 해서 사용 할때는  
> -> app.scss파일 에서 사용

<br><br>

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

<br><br>

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

<br><br>

## 6. Dark Mode

### Quasar 지원 내장 플러그인 사용

```js
plugins: ['LocalStorage'],
```

> dark Mode 플러그인을 사용하기 위해 quasar.config.js 파일의 quasar.config.js 파일에 추가

```js
const darkModeIcon = computed(() =>
  $q.dark.isActive ? 'dark_mode' : 'light_mode',
);
```

> computed로 상태 저장변수 선언
> 내장 플러그인으로 $q.dark 사용

```js
const toggleDarkMode = () => {
  $q.dark.toggle();
  $q.localStorage.set('darkMode', $q.dark.isActive);
};
```

> toggle을 사용하여 다크, 라이트로 상태 변환

### localStorage를 활용 하여 웹 로컬스토리지에 상태 저장

> ❗️새로 고침시 상태가 바뀜 그러므로 로컬 스토리지 getItem을 사용하여 상태 불러오기

```js
const init = () => {
  const darkMode = $q.localStorage.getItem('darkMode');
  $q.dark.set(darkMode);
};
init();
```

### ❓ 위의 코드를 boot 폴더로 생성하여 따로 관리

```bash
$ quasar new boot <파일 명>
```

```js
export default boot(async (/* { app, router, ... } */) => {
  console.log('### initialization ###');
  // Dark mode 설정
  const darkMode = LocalStorage.getItem('darkMode');
  Dark.set(darkMode);
});
```

> boot 파일에 만들면 파일명을 콰이사 컴픽 파일에 세팅을 해야함  
> 뷰컴포넌트에 해당하는 파일이 아니어서 q오브젝트에 접근하려면  
> import { LocalStorage, Dark } from 'quasar'; 이런식으로 임포트해서  
> $q.localStorage -> LocalStorage , $q.dark -> Dark 로 사용이 가능

```scss
// body.body--light {
//   /* ... */
// }

body.body--dark {
/_ ... _/
--q-primary: #161717; // css의 루트 변수 변경 동적 변경
}
```

> 위의 코드와 같이 app.scss 파일에서 동적으로 변경할 수 있다.

<br><br>

## 7. Flexbox & Grid

### flexbox 지정하는 법

```html
<div class="row"></div>
<div class="column"></div>
```

> Flex는 12 column 사이즈로 되어있음 col 합이 12가 넘으면 아래로 줄 이동 함

### gutter 주는 법

> 일반 아이템일 경우

```html
<!-- 상하좌우 전부  -->
<div class="q-gutter-md"></div>
<!-- 좌우 만  -->
<div class="q-gutter-x-md"></div>
<!-- 상하 만  -->
<div class="q-gutter-y-md"></div>
```

> flex 요소 아이템일 경우

```html
<!-- q 뒤에 col을 붙인다. -->
<div class="q-col-gutter-md"></div>
```

> breakpoint를 설정할수 있다.

```html
<div class="col-12 col-sm-6 col-md-4 col-lg-3"></div>
<!-- default값, 사이즈별 값을 설정할 수 있다. -->
```

<br><br>

## 8. Multi-Layout

### Layout 생성 및 설정 법

> layouts 폴더에 파일 생성 및 하위 경로 추가

```js
import { ref } from 'vue';

const items = ref([
  { title: 'Sub Page 1', to: '/sub/sub-page-1' },
  { title: 'Sub Page 2', to: '/sub/sub-page-2' },
]);

const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
```

> routes.js 파일에 경로 배열 추가

```js
  {
  path: '/',
  component: () => import('layouts/MainLayout.vue'),
  children: [
    { path: '', component: () => import('pages/IndexPage.vue') },
    { path: '/typography', component: () => import('pages/Typography.vue') },
    { path: '/colors', component: () => import('pages/Colors.vue') },
    { path: '/spacing', component: () => import('pages/Spacing.vue') },
    { path: '/flex-grid-1', component: () => import('pages/FlexGrid1.vue') },
    { path: '/flex-grid-2', component: () => import('pages/FlexGrid2.vue') },
    {
      path: '/breakpoints',
      component: () => import('pages/Breakpoints.vue'),
    },
    {
      path: '/classes-variables',
      component: () => import('pages/ClassesVariables.vue'),
    },
  ],
},
<!-- 추가한 경로 -->
{
  path: '/sub',
  component: () => import('layouts/SubLayout.vue'),
  children: [
    { path: '', component: () => import('pages/sub/IndexPage.vue') },
    { path: 'sub-page-1', component: () => import('pages/sub/SubPage1.vue') },
    { path: 'sub-page-2', component: () => import('pages/sub/SubPage2.vue') },
  ],
},
```

### CLI 활용 자동 생성

```bash
  $ quasar new layout <파일 명>
```

> 나머지는 위와 동일

<br><br>

## 9. 중첩 Router-View

> 중첩 Router-View를 사용할 페이지에 Router-View태그 선언  
> routes.js 파일에 경로 설정

```js
{
        path: '/profile',
        component: () => import('pages/profile/ProfilePage.vue'),
        children: [
          {
            path: '',
            component: () => import('pages/profile/ProfilePosts.vue'),
          },
          {
            path: 'saved',
            component: () => import('pages/profile/ProfileSaved.vue'),
          },
          {
            path: 'tagged',
            component: () => import('pages/profile/ProfileTagged.vue'),
          },
        ],
      },
```

<br><br>

## 10. Q-Input

### q-input 사용 방법

```html
<q-form>
  <q-input
    filled
    type="password"
    label="비밀번호"
    hint="영문 대/소문자 포함 8자 이상."
  ></q-input>
  <q-input
    input-class="text-right"
    filled
    label="나이"
    prefix="만 나이"
    suffix="세"
  ></q-input>
  <q-input
    filled
    v-model="card"
    label="Card"
    mask="#### - #### - #### - ####"
    fill-mask="#"
    unmasked-value
  />
</q-form>
```

> prefix = 입력시 앞 부분에 작성한 텍스트 노출  
> suffix = 입력시 뒷 부분에 작성한 텍스트 노출  
> mask = 입력 양식(?) 설정  
> fill-mask = 양식에 기본 값(?) 설정  
> input-class = input 태그의 class를 지정

### etc

> 클래스 안에 window-height를 사용하면 윈도우 뷰포트 기준으로 함

<br><br>

## 11. Form-Handling

### 태그에 작성하는 기능 소개

1. emit-value

   ```js
   const tagOptions = ref([
     { label: '구글', value: 'Google' },
     { label: '페이스북', value: 'Facebook' },
     { label: '트위터', value: 'Twitter' },
     { label: '애플', value: 'Apple' },
     { label: '오라클', value: 'Oracle' },
   ]);
   ```

   > 위의 예시와 같이 label이 value 값과 다를 때 화면에 출력시 Object 값으로 출력 되는 것을 방지하여 value 값 출력

1. rules

   ```html
   <q-input :rules="[val => !!val || '필수 항목입니다.']" />
   ```

   > 예시 와 같이 유효성 검사를 위해 사용

1. autofocus

   ```html
   <q-form ref="myForm" class="q-gutter-y-md q-mt-lg" autofocus></q-form>
   ```

   > 페이지 랜더링 시 form 태그 안의 첫 번째 input태그에 포커스

1. greedy

   ```html
   <q-form ref="myForm" class="q-gutter-y-md q-mt-lg" greedy></q-form>
   ```

   > form 안의 input 요소를 한번에 유효성 검사를 체크함

<br><br>

## 12. Utils

### 간략한 utils 소개

- Date Util

  > 날짜 관련 util

  ```html
  <div class="text-h6">formatDate - {{ formatDate(new Date(), FORMAT) }}</div>
  <div class="text-h6">
    addToDate - {{ formatDate(addToDate(new Date(), { days: 7 }), FORMAT) }}
  </div>
  <div class="text-h6">
    subtractFromDate - {{ formatDate(subtractFromDate(new Date(), { days: 7 }),
    FORMAT) }}
  </div>
  ```

  ```js
  import { date } from 'quasar';

  const FORMAT = 'YYYY-MM_DD HH:mm:ss';
  const { formatDate, addToDate, subtractFromDate } = date;
  ```

  > formatDate: 날짜를 원하는 형식으로 출력 도움  
  > addToDate: 옵션 값으로 넣은 날짜 만큼 날짜를 더함  
  > subtractFromDate: 옵션 값으로 넣은 날짜 만큼 날짜를 뺌

- Format Util

  > 출력 형식 관련 util

  ```html
  <div class="text-h6">pad - {{ pad('hello', 10, '#') }}</div>
  ```

  ```js
  import { format } from 'quasar';

  const { pad } = format;
  ```

  > pad('문자', 문자수, 출력 문자 형식)  
  > 문자: 출력할 문자  
  > 문자 수: 기본으로 출력할 문자 갯수  
  >  출력 문자 형식: 기본으로 보여질 문자

- Type Checking Util

  > 비교 util

  ```html
  <!-- 얕은 비교 -->
  <div class="text-h6">objA === objB - {{ objA === objB }}</div>
  <!-- 깊은 비교 -->
  <div class="text-h6">
    deepEqual objA === objB - {{ deepEqual(objA, objB) }}
  </div>
  ```

  ```js
  import { is } from 'quasar';

  const { deepEqual } = is;

  const objA = { name: 'abc', age: 30, hobby: 'game' };
  const objB = { name: 'abc', age: 30, hobby: 'game' };
  ```

  > objA === objB로 비교시 얕은 비교가 되어 주소를 찾아가 비교 하여 false값이 나옴  
  > util을 사용하여 deepEqual(objA, objB) 깊은 비교를 하면 객체 안의 값들을 비교하여 true값이 나옴

* 나머지는 공식문서 참조

<br><br>

## 13. Plugin

### Plugin 사용법

> quasar.config.js 파일 framework 부분 plugin에 추가

### 1) 해당 뷰 페이지에서 사용

```js
import { useQuasar } from 'quasar';
const $q = useQuasar();

const onSubmit = () => {
  if (form.value.accept !== true) {
    alert('동의 해주세요!!!');
    return;
  }
  $q.loading.show({
    message: 'loading',
  });
  setTimeout(() => {
    $q.loading.hide();
    alert('성공');
  }, 3000);
};
```

### 2) quasar.config.js에서 전역적으로 사용하는 방법

> [1)](#1-해당-뷰-페이지에서-사용)의 방법과 같이 뷰페이지에서 사용하고 관련 옵션을 불러 옴

```js
 plugins: ['LocalStorage', 'Loading', 'LoadingBar'], // 새로고침시 다크모드 풀림
      config: {
        //로딩관련 옵션 전역 설정
        loading: { message: 'loading' },
      },
```

### 3) boot 파일을 생성하여 전역적으로 사용하는 방법

> [1)](#1-해당-뷰-페이지에서-사용)의 방법과 같이 뷰페이지에서 사용하고 관련 옵션을 불러 옴  
> [CLI boot 폴더 파일 생성법](#❓-위의-코드를-boot-폴더로-생성하여-따로-관리)

```js
import { boot } from 'quasar/wrappers';
import { LoadingBar } from 'quasar';

export default boot(async ) => {
  LoadingBar.setDefaults({
    color: 'yellow',
    size: '4px',
  });
});
```

### ❓ 다양한 Plugin은 공식문서 참조

<br><br>

## 14. LanguagePacks

### 언어 설정 사용법

```js
// framework 부분에 추가
lang: 'ko-KR',
```

#### 내장 모듈 사용

```js
<script> // 반응형을 사용하지 않으므로 setup 부분에서 안하고 따로 뺌
import language from 'quasar/lang/index.json';
console.log('language: ', language);

const appLanguages = language.filter(lang =>
  ['ko-KR', 'en-US'].includes(lang.isoName),
);
console.log('appLanguages: ', appLanguages);

const langOptions = appLanguages.map(lang => ({
  label: lang.nativeName,
  value: lang.isoName,
}));

console.log('langOptions: ', langOptions);
</script>

<script setup>
import { useQuasar } from 'quasar';
import { ref, watch } from 'vue';

const $q = useQuasar();
const lang = ref($q.lang.isoName);

watch(lang, val => {
  console.log('val: ', val);
  import('../../node_modules/quasar/lang/' + val).then(lang => {
    $q.lang.set(lang.default);  // 기본 언어 변경
    $q.localStorage.set('lang', val); // localStorage에 저장
  });
});
</script>
```

### localStorage에 상태 저장한 데이터 유지

- 부트 파일 생성

  ```js
  import { boot } from 'quasar/wrappers';
  import { LocalStorage, Quasar } from 'quasar';

  export default boot(async () => {
    const val = LocalStorage.getItem('lang');
    import('../../node_modules/quasar/lang/' + val).then(lang => {
      Quasar.lang.set(lang.default); // localStorage에 저장된 값 default로 사용
    });
  });
  ```

* 부트 경로 추가

  ```js
  boot: [
      'initialization',
      'constants',
      'loading-plugin',
      'loading-bar-plugin',
      'quasar-lang-pack',
    ],
  ```

  <br><br>

## 14. App Internationalization (i18n)

### 설치 방법

```shell
$ npm install vue-i18n@next
```

### 1. boot 파일 생성

```js
import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import { LocalStorage } from 'quasar';
import messages from 'src/i18n';

export default boot(async ({ app }) => {
  const locale = LocalStorage.getItem('lang') || 'ko-KR';
  const i18n = createI18n({
    legacy: false, // 오류 막기
    locale,
    messages,
  });
  app.use(i18n);
});
```

> Uncaught (in promise) SyntaxError: Not available in legacy mode 이러한 오류로 인하여 legacy: false 옵션 사용

#### ❗ boot 파일 안에서 설정및 옵션을 전부 줄수 있으나 언어의 갯수 및 메시지가 많아지면 구분 및 파악이 어려워 지기 때문에 i18n 폴더를 별도로 생성해서 언어별로 관리

### 2. i18n 폴더 생성

```js
// index.js
import enUS from './en-US';
import koKR from './ko-KR';
export default {
  'en-US': enUS,
  'ko-KR': koKR,
};
```

### 3. 언어별로 파일 분할

```js
// en-US.js
export default {
  productName: 'Quasar App',
  hello: 'hello',
};
```

```js
// ko-KR.js
export default {
  productName: '퀘이사 앱',
  hello: '안녕하세요',
};
```

### 4. vue 페이지에 적용

```html
<!-- 템플릿에 사용시 -->
<section class="q-mb-xl">
  <div class="text-h4">i18n - locale</div>
  <q-separator class="q-my-md" />
  <div>locale - {{ locale }}</div>
  <div>locale - {{ $t('hello') }}</div>
  <div>locale - {{ $t('productName') }}</div>
</section>
```

> 템플릿에 사용시 {{ $t(변수명) }} 으로 사용

```js
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
console.log('hello: ', t('hello'));
console.log('productName: ', t('productName'));
```

### 5. 새로고침을 안하고 언어 변경시마다 자동 적용 시키기

```js
import { useQuasar } from 'quasar';
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
const $q = useQuasar();
const lang = ref($q.lang.isoName);

watch(lang, val => {
  console.log('val: ', val);
  import('../../node_modules/quasar/lang/' + val).then(lang => {
    $q.lang.set(lang.default);
    locale.value = val;
    $q.localStorage.set('lang', val);
  });
});
```

> 로컬소토리지에 저장 및 locale 값 설정으로 언어 자동 변경
