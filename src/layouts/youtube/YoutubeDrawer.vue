<template>
  <q-drawer
    bordered
    v-model="drawer"
    :width="240"
    :mini="$q.screen.lt.md"
    :breakpoint="$q.screen.sizes.sm"
  >
    <q-scroll-area class="fit">
      <q-list>
        <template v-for="(menuItem, index) in menuList1" :key="index">
          <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + index" v-if="menuItem.separator" />
        </template>
      </q-list>
      <q-list>
        <q-item-label header>탐색</q-item-label>
        <template v-for="(menuItem, index) in menuList2" :key="index">
          <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + index" v-if="menuItem.separator" />
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(true);
const menuList1 = [
  {
    icon: 'inbox',
    label: '홈',
    separator: false,
  },
  {
    icon: 'send',
    label: 'shorts',
    separator: false,
  },
  {
    icon: 'delete',
    label: '구독',
    separator: true,
  },
  {
    icon: 'error',
    label: '보관함',
    separator: false,
  },
  {
    icon: 'error',
    label: '시청기록',
    separator: false,
  },
];

const menuList2 = [
  {
    icon: 'inbox',
    label: '인기',
    separator: false,
  },
  {
    icon: 'send',
    label: '영화',
    separator: false,
  },
  {
    icon: 'error',
    label: '음악',
    separator: false,
  },
  {
    icon: 'delete',
    label: '게임',
    separator: false,
  },
  {
    icon: 'error',
    label: '스포츠',
    separator: false,
  },
  {
    icon: 'error',
    label: '학습',
    separator: true,
  },
];
</script>

<style lang="scss" scoped></style>
