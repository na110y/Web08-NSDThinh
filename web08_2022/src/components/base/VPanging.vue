<!-- components này hiển thị danh sách số bản ghi -->
<template>
  <div class="item-list1 itemdonvi">
    <div class="combobox__Posison">
      <input
        type="text"
        name="donvi1"
        id="chucdanh"
        v-model="employee.id"
        ref="input"
        tabindex="1"
        placeholder="10 bản ghi trên trang"
      />
      <img
        src="../../pages/icon/end.png"
        id="dropDown"
        @click="togglePosisons()"
      />
    </div>
    <div class="StyleCombobox" v-if="isShowPosion">
      <ul
        class="listPosison"
        v-for="employee in employees"
        :key="employee"
        :value="employee.name"
        :class="{ activeBGC: activeClick === employee.name }"
        @change="papingTest"
      >
        <li class="listItem" @click="selectItemDepart(employee.name)">
          {{ employee.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["modelValue"],
  name: "VPanging",
  data() {
    return {
      employee: {},
      isShowPosion: false,
      // đặt ra 10 bản ghi trên 1 trang
      prePage: 10,
      // hiển thị bản ghi số 1
      currentPage: 1,
      // hiển thị 20 bản ghi trên 1 trang
      prePage20: 20,
      // hiển thị 50 bản ghi trên 1 trang
      prePage50: 50,
      // hiển thị 100 bản ghi trên 1 trang
      prePage100: 100,
      rows: 100,
      perPage: 1,
      currentPagee: 5,
      employees: [
        {
          id: 1,
          name: "10 bản ghi trên trang",
        },
        {
          id: 2,
          name: "20 bản ghi trên trang",
        },
        {
          id: 3,
          name: "50 bản ghi trên trang",
        },
        {
          id: 4,
          name: "100 bản ghi trên trang",
        },
        {
          id: 5,
          name: "Tất cả bản ghi trên trang",
        },
      ],
    };
  },
  computed: {
    // lọc hiển thị 10 bản ghi trên 1 trang
    filteredList() {
      const star = (this.currentPage - 1) * this.prePage;
      const end = this.currentPage * this.prePage;
      const result = this.employees.slice(star, end);
      return result;
    },
    // lọc hiển thị 20 bản ghi trên 1 trang

    filteredList20() {
      const star = (this.currentPage - 1) * this.prePage20;
      const end = this.currentPage * this.prePage20;
      const result = this.employees.slice(star, end);
      return result;
    },
    // lọc hiển thị 50 bản ghi trên 1 trang

    filteredList50() {
      const star = (this.currentPage - 1) * this.prePage50;
      const end = this.currentPage * this.prePage50;
      const result = this.employees.slice(star, end);
      return result;
    },
    // lọc hiển thị 100 bản ghi trên 1 trang

    filteredList100() {
      const star = (this.currentPage - 1) * this.prePage100;
      const end = this.currentPage * this.prePage100;
      const result = this.employees.slice(star, end);
      return result;
    },
  },
  methods: {
    /**
     * @description: Hàm này dùng để chuyển đổi giữa các bản ghi từ 1 - 10 và ngược lại
     * Author: NSDThinh - 12//09/2022
     */
    changePage(num) {
      this.currentPage = this.currentPage + num;
    },
    /**
     * @description: Hàm này dùng để Format ra ngoài input  Chức danh và đóng form đi
     * @param {Object} dob
     * Author: NSDThinh - 12//09/2022
     */

    onBlurClick() {
      this.isShowPosion = false;
    },
    /**
     * @description: Hàm này dùng để Format ra ngoài input  Chức danh và mở form
     * @param {Object} dob
     * Author: NSDThinh - 12//09/2022
     */
    onFocusClick() {
      this.isShowPosion = true;
    },
    /**
     * @description: Hàm này dùng để đóng form danh sách chức danh
     * @param {Object} dob
     * Author: NSDThinh - 12//09/2022
     */
    togglePosisons() {
      this.isShowPosion = !this.isShowPosion;
    },
    /**
     * @description: Hàm này dùng để lấy danh sách tên chức danh
     * @param {Object} PositionId - lấy ID chức danh theo tên
     * Author: NSDThinh - 12//09/2022
     */
    selectItemDepart(id) {
      this.employee.id = id;
      this.$emit("update:modelValue", id);
      this.togglePosisons();
    },
    /**
     * @description: Hàm này dùng để Format Chức danh
     * @param {Object} dob - gán sự kiện để format theo dạng theo mã ID của Chức danh
     * Author: NSDThinh - 12//09/2022
     */
  },
};
</script>
<style lang="scss" scoped>
.combobox__Posison {
}
label {
  display: block;
}
input {
  position: relative;
  width: 250px;
  height: 34px;
  border: 1px solid #999;
  outline: none;
  padding: 0 16px;
}

#dropDown {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 10px;
  height: 6px;
  padding: 14px;
  border: 1px solid #bbbbbb;
  cursor: pointer;
}
ul {
  list-style: none;
  width: 100%;
  z-index: 1;
  li {
    max-width: 260px;
    width: 100%;
    z-index: 1;
  }
}
.StyleCombobox .listPosison {
  list-style: none;
  width: 100%;
  z-index: 1;
}

.StyleCombobox {
  border: 1px solid #bbbbbb;
  width: 282px;
  cursor: pointer;
  position: absolute;
  bottom: 40px;
  .listPosison {
    &:hover {
      background-color: #109160;
      color: #fff;
    }
  }
}
* {
  padding: 0;
  margin: 0;
}
</style>
