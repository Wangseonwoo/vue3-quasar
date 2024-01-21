import { boot } from 'quasar/wrappers';
import { LocalStorage, Dark } from 'quasar';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  console.log('### initialization ###');
  // Dark mode 설정
  const darkMode = LocalStorage.getItem('darkMode');
  Dark.set(darkMode);
});
// boot 파일에 만들면 파일명을 콰이사 컴픽 파일에 세팅을 해야함
