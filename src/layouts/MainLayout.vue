<template>
  <q-layout view="hHh lpR fFf" class="app-bg">
    <q-header class="header-brand">
      <q-toolbar class="header-inner">
        <q-btn v-if="$route.path !== '/'" flat round icon="arrow_back" @click="$router.back()" />
        <q-toolbar-title class="text-weight-bold">十九甲雞排 <span class="text-caption">智慧無人門市</span></q-toolbar-title>
        <q-btn flat round icon="home" to="/" aria-label="返回首頁" />
      </q-toolbar>
    </q-header>
    <q-page-container><div class="phone-stage"><router-view /></div></q-page-container>
    <q-footer class="footer-brand text-center q-py-xs">期中查核展示版｜所有營運數值均為模擬資料｜非實際設備連線</q-footer>
  </q-layout>
</template>
