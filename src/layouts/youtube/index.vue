<template>
  <q-layout view="hHh LpR lFf">
    <YoutubeHeader />
    <YoutubeDrawer />
    <YoutubeContent />
  </q-layout>
</template>

<script setup>
import YoutubeHeader from './YoutubeHeader.vue';
import YoutubeDrawer from './YoutubeDrawer.vue';
import YoutubeContent from './YoutubeContent.vue';
</script>

<style lang="scss" scoped></style>
