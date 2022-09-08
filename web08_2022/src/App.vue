<template>
  <div>
    <the-menu />
    <the-header />
    <the-content />
    <router-view />
  </div>
</template>

<script>
import theHeader from "@/components/layout/theHeader.vue";
import theMenu from "@/components/layout/theMenu.vue";
import theContent from "@/components/layout/theContent.vue";
export default {
  components: { theHeader, theMenu, theContent },
};
</script>

<style lang="scss" scoped></style>
