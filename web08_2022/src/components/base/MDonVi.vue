<!-- components này hiển thị danh sách đơn vị -->
<template>
  <nav>
    <div class="item-list1 itemdonvi">
      <div class="combobox__Posison">
        <label for="donvi1"
          >Đơn vị <span class="information-reque">*</span>
        </label>
        <input
          type="text"
          name="donvi1"
          id="chucdanh"
          v-model="employee.DepartmentId"
          ref="input"
          tabindex="1"
          @blur="onBlurClick"
          @focus="onFocusClick"
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
          v-for="employee in Department"
          :key="employee.DepartmentId"
          :value="employee.DepartmentName"
        >
          <li class="listItem" @click="selectItemDepart(employee.DepartmentId)">
            {{ employee.DepartmentName }}
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
export default {
  props: ["modelValue"],

  data() {
    return {
      Department: [],
      employee: {},
      isShowPosion: false,
    };
  },
  components: {},

  methods: {
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
    selectItemDepart(DepartmentId) {
      this.employee.DepartmentId = DepartmentId;
      this.$emit("update:modelValue", DepartmentId);
      this.employee.DepartmentId = this.formatDonVi(DepartmentId);
      this.togglePosisons();
    },
    /**
     * @description: Hàm này dùng để Format Chức danh
     * @param {Object} dob - gán sự kiện để format theo dạng theo mã ID của Chức danh
     * Author: NSDThinh - 12//09/2022
     */
    formatDonVi(DepartmentId) {
      switch (DepartmentId) {
        case "3f8e6896-4c7d-15f5-a018-75d8bd200d7c":
          return "Phòng Công Nghệ Thông Tin";
        case "45ac3d26-18f2-18a9-3031-644313fbb055":
          return "Phòng Hành Chính";
        case "78aafe4a-67a7-2076-3bf3-eb0223d0a4f7":
          return "Phòng Nhân Sự";
        case "7c4f14d8-66fb-14ae-198f-6354f958f4c0":
          return "Phòng Kế Toán";
      }
    },
  },
  created() {
    let me = this;
    /**
     * @description: Hàm này dùng để lấy giữ liệu từ API và trả về combobox giá trị
     * Author: NSDThinh - 12//09/2022
     */
    try {
      axios
        .get("https://cukcuk.manhnv.net/api/v1/Departments")
        .then((res) => {
          me.Department = res.data;
        })
        .catch((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
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
  width: 444px;
  height: 34px;
  border: 1px solid #999;
  outline: none;
  padding: 0 16px;
}

#dropDown {
  position: absolute;
  top: 20px;
  right: 0px;
  width: 12px;
  height: 10px;
  padding: 14px;
  border: 1px solid #bbbbbb;
  cursor: pointer;
}

ul,
li {
  list-style: none;
}
.StyleCombobox {
  margin-top: 10px;
  border: 1px solid #bbbbbb;
  width: 442px;
  cursor: pointer;
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
