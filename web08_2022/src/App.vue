<template>
  <div>
    <the-menu />
    <the-header />
    <router-view />
    <the-content />
  </div>
</template>

<script>
import theHeader from "@/components/layout/theHeader.vue";
import theMenu from "@/components/layout/theMenu.vue";
import TheContent from "./components/layout/theContent.vue";
export default {
  components: { theHeader, theMenu, TheContent },
};
</script>

<style lang="scss" scoped></style>
