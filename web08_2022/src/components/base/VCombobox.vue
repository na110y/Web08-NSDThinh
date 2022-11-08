<!-- components này hiển thị danh sách chức danh -->
<template>
  <nav>
    <div class="item-list1 itemdonvi">
      <div class="combobox__Posison">
        <label for="chucdanh" value="formatChucDanh"
          >Chức Danh <span class="information-reque">*</span>
        </label>
        <input
          type="text"
          name="donvi1"
          id="chucdanh"
          v-model="employee.PositionId"
          ref="input"
          tabindex="-1"
          @blur="onBlur"
          @focus="onFocus"
        />
        <img
          src="../../pages/icon/end.png"
          id="dropDown"
          @click="togglePosisons()"
        />
      </div>
      <div class="StyleCombobox combobox-dropdown" v-if="isShowPosion">
        <ul
          class="listPosison"
          v-for="employee in posions"
          :key="employee.PositionId"
          :value="employee.PositionId"
        >
          <li class="listItem" @click="selectItemPosi(employee.PositionId)">
            {{ employee.PositionName }}
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeView",
  props: ["modelValue"],

  data() {
    return {
      posions: [],
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
    onBlur() {
      this.isShowPosion = false;
    },
    /**
     * @description: Hàm này dùng để Format ra ngoài input  Chức danh và mở form
     * @param {Object} dob
     * Author: NSDThinh - 12//09/2022
     */
    onFocus() {
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
    selectItemPosi(PositionId) {
      this.employee.PositionId = PositionId;
      this.$emit("update:modelValue", PositionId);
      this.employee.PositionId = this.formatChucDanh(PositionId);
      this.togglePosisons();
    },
    /**
     * @description: Hàm này dùng để Format Chức danh
     * @param {Object} dob - gán sự kiện để format theo dạng theo mã ID của Chức danh
     * Author: NSDThinh - 12//09/2022
     */
    formatChucDanh(PositionId) {
      switch (PositionId) {
        case "30d41e52-5e66-72bc-6c1c-b47866e0b131":
          return "Trưởng phòng";
        case "548dce5f-5f29-4617-725d-e2ec561b0f41":
          return "Quản trị hệ thống";
        case "589edf01-198a-4ff5-958e-fb52fd75a1d4":
          return "Nhân viên";
        case "5bd71cda-209f-2ade-54d1-35c781481818":
          return "Trưởng nhóm";
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
        .get("https://cukcuk.manhnv.net/api/v1/Positions")
        .then((res) => {
          me.posions = res.data;
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
