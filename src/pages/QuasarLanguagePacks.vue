<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Change Quasar Language Pack at Runtime</div>
      <q-separator class="q-my-md" />
      <q-select
        v-model="lang"
        :options="langOptions"
        label="퀘이사 언어"
        outlined
        emit-value
        map-options
      />
      {{ lang }}
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">$q.lang</div>
      <q-separator class="q-my-md" />
      <div>{{ $q.lang }}</div>
    </section>
  </q-page>
</template>

<script>
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
    $q.lang.set(lang.default);
    $q.localStorage.set('lang', val);
  });
});
</script>

<style lang="scss" scoped></style>
