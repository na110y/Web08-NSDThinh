<template>
  <div class="VToast" v-if="showAddToast">
    <div class="success">
      <div class="icon-success">
        <img
          src="../../pages/icon/check.svg"
          alt="error iconCheck"
          id="iconSuccess"
        />
      </div>
      <div class="list-Success">
        <div class="success-title">Thành Công</div>
        <div class="success-txt">Thêm nhân viên thành công.</div>
      </div>
      <div class="icon-close" @click="isShowFormToast">
        <img src="@/pages/icon/x.svg" alt="" id="iconClose" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data() {
        return {};
      },
      name: "VAddToast",
      props: ["showAddToast", "showToas", "modelValue"],
      methods: {
        isShowFormToast() {
          this.$emit("showToast", false);
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
.list-Success {
  flex: 1;
}

.success {
  width: 350px;
  height: 80px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  position: absolute;
  top: 100px;
  right: 20px;
  z-index: 1;
  border-radius: 4px;
  flex: 1;
  border-left: 3px solid #2bde3f;
}
.icon-success {
  margin-right: 15px;
  margin-left: 15px;
  #iconSuccess {
    background-color: #2bde3f;
    padding: 4px;
    border-radius: 50px;
  }
}
.success-title {
  font-weight: 600;
}
.success-txt {
  color: #000;
  padding: 8px 0;
  opacity: 0.7;
}
.icon-close {
  #iconClose {
    margin-right: 10px;
    opacity: 0.6;
  }
}
</style>
