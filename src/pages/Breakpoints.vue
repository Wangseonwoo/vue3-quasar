<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Breakpoints</div>
      <q-separator class="q-my-md" />
      <div class="target"></div>
    </section>
  </q-page>
</template>

<script setup></script>

<style lang="scss" scoped>
.target {
  height: 200px;
  background-color: $dark;
}
@media (max-width: $breakpoint-xs-max) {
  .target {
    background-color: $red;
  }
}
.target {
  body.screen--sm & {
  }
}
</style>
