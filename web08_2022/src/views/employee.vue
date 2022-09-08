<template>
  <div class="content">
    <div class="content__employee">
      <div class="content__employee-btn">
        <div class="content__employee-txt">Danh sách nhân viên</div>
        <div class="content__employee-add" tabindex="1">
          <img
            src="../pages/icon/add.png"
            alt="error add employee"
            id="btn__employee-add"
          />
          <div class="btn__employee-txt">Thêm nhân viên</div>
        </div>
      </div>
      <div class="employee__content">
        <div class="content__employee-search">
          <ul class="employee__listSearch">
            <li class="employee__listSearch-item">
              <input
                type="text"
                placeholder="Tìm kiếm theo Mã, Tên hoặc số điện thoại"
                id="search-manv"
              />
              <img
                src="../pages/icon/search.png"
                alt="error icon search"
                id="search"
              />
            </li>
            <div id="employee__refresh"></div>
          </ul>
        </div>
        <table id="customers"></table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "the-employee",
  data() {
    return {
      employee: [],
    };
  },
  created() {
    // fetch("https://randomuser.me/api/?results=20", { methods: get });
    // then((res) => res.json());
    // then((data) => {
    //   this.employee = data;
    // }).catch((res) => {
    // });
  },
};
</script>

<style lang="scss" scoped>
@import "../../src/style/employee/employee";
</style>
