<template>
  <!-- form thêm nhân viên -->
  <div class="formadd" v-if="isShowFormAdd">
    <div class="infoTXT">
      <div class="infoTXT-list">
        <div class="infoTXT-list_item">
          <div class="NVTXT">Thông tin nhân viên</div>
          <div class="infoTXT-list_item">
            <input
              type="checkbox"
              id="weekday-2"
              name="weekday-1"
              value="Friday"
              checked
            />
            <label for="weekday-2"> Là khách hàng</label>
          </div>
          <div class="infoTXT-list_item">
            <input
              type="checkbox"
              id="weekday-3"
              name="weekday-1"
              value="Friday"
              checked
            />
            <label for="weekday-3"> Là nhà cung cấp</label>
          </div>
        </div>
        <div class="close">
          <img src="../pages/icon/iconhoi.png" alt="" id="iconhoi" />
          <img
            src="../pages/icon/iconclose.png"
            alt=""
            id="iconClose"
            @click="btnCloesOnClick"
          />
        </div>
      </div>

      <div class="information">
        <div class="information">
          <ul class="information-list">
            <li class="information-list_item">
              <div class="item-list">
                <label for="item1"
                  >Mã <span class="information-reque">*</span></label
                >
                <input
                  type="text"
                  name="manv"
                  id="manv"
                  ref="txtEmployeeCode"
                  v-model="employee.EmployeeCode"
                  @blur="validateRequired"
                />
              </div>
              <div class="item-list">
                <label for="item1"
                  >Tên<span class="information-reque">*</span></label
                >
                <input
                  type="text"
                  name="name"
                  id="tennv"
                  v-model="employee.FullName"
                  @blur="validateRequired"
                />
              </div>
              <div class="item-list">
                <label for="ngaysinh" value="formatDate">Ngày Sinh</label>
                <input
                  id="ngaysinh"
                  v-model="employee.DateOfBirth"
                  type="date"
                />
              </div>
              <div class="item-list">
                <label id="gender">Giới Tính</label>
                <div class="item-list-col">
                  <div class="itemm">
                    <input
                      type="radio"
                      id="nam"
                      name="radioGroup"
                      :value="0"
                      v-model="employee.Gender"
                    />
                    <label for="nam" value="0">Nam</label>
                  </div>
                  <div class="itemm">
                    <input
                      type="radio"
                      id="nu"
                      name="radioGroup"
                      :value="1"
                      v-model="employee.Gender"
                    />
                    <label for="nu" value="1">Nữ</label>
                  </div>
                  <div class="itemm">
                    <input
                      type="radio"
                      id="khac"
                      :value="2"
                      name="radioGroup"
                      v-model="employee.Gender"
                    />
                    <label for="khac" value="2">khác</label>
                  </div>
                </div>
              </div>
            </li>
            <li class="information-list_item">
              <MDonVi
                v-model="employee.DepartmentId"
                :value="employee.DepartmentId"
              />
              <div class="item-list1">
                <label for="cmnd">Số CMND </label>
                <input
                  type="text"
                  name="cmnd"
                  id="cmnd"
                  v-model="employee.IdentityNumber"
                />
              </div>
              <div class="item-list1 itemngaycap">
                <label for="ngaycap">Ngày Cấp </label>
                <input
                  name="ngaycap"
                  id="ngaycap"
                  type="date"
                  v-model="employee.IdentityDate"
                />
              </div>
            </li>
            <li class="information-list_item col2">
              <VCombobox
                v-model="employee.PositionId"
                :value="employee.PositionId"
              />

              <div class="item-list">
                <label for="noicap">Nơi cấp </label>
                <input
                  type="text"
                  name="noicap"
                  id="noicap"
                  v-model="employee.IdentityPlace"
                />
              </div>
            </li>
            <li class="information-list_item col3">
              <div class="item-list">
                <label for="diachi">Địa chỉ </label>
                <input
                  type="text"
                  name="diachi"
                  id="diachi"
                  v-model="employee.Address"
                />
              </div>
            </li>
            <li class="information-list_item">
              <div class="item-list1">
                <label for="dtdidong">ĐT di động </label>
                <input
                  type="text"
                  name="dtdidong"
                  id="dtdidong"
                  v-model="employee.PhoneNumber"
                />
              </div>
              <div class="item-list1">
                <label for="dtcodinh">ĐT cố định </label>
                <input
                  type="text"
                  name="dtcodinh"
                  id="dtcodinh"
                  v-model="employee.PhoneNumber"
                />
              </div>
              <div class="item-list1">
                <label for="email">Email </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  v-model="employee.Email"
                />
              </div>
            </li>
            <li class="information-list_item cal4">
              <div class="item-list1">
                <label for="tknganhang">Tài khoản ngân hàng </label>
                <input
                  type="text"
                  name="tknganhang"
                  id="tknganhang"
                  v-model="employee.bankAccount"
                />
              </div>
              <div class="item-list1">
                <label for="tennganhang">Tên ngân hàng </label>
                <input
                  type="text"
                  name="tennganhang"
                  id="tennganhang"
                  v-model="employee.bankName"
                />
              </div>
              <div class="item-list1">
                <label for="chinhanh">Chi nhánh </label>
                <input
                  type="text"
                  name="chinhanh"
                  id="chinhanh"
                  v-model="employee.bankAddress"
                />
              </div>
            </li>
          </ul>
        </div>
        <div class="employeeEnd">
          <div class="catvaluu">
            <div id="huy" @click="btnCloesOnClick">Hủy</div>
            <div class="cat">
              <div id="addd" @click="btnSaveOnClick">Cất</div>
              <div id="saveofadd">Cất và Thêm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <VAddToast @showToast="isShowAddToast" :showAddToast="isShowAddToast" />
</template>

<script>
/* eslint-disable */

import axios from "axios";
import VCombobox from "@/components/base/VCombobox.vue";
import MDonVi from "@/components/base/MDonVi.vue";
import VAddToast from "@/components/VToat/VAddToast.vue";
export default {
  name: "employee-detail",
  components: { VCombobox, MDonVi, VAddToast },
  props: [
    "isShowFormAdd",
    "employeeSelected",
    "employeeSelectedID",
    "formMode",
    "combobox",
    "loadDataTable",
    "VAddToast",
    "modelValue",
  ],

  data() {
    return {
      employees: [],
      employee: {},
      isShowDepass: false,
      isShowPosion: false,
      textInputDepart: "",
      Depas: [],
      posions: [],
      categoryDepass: "",
      categoryPosison: "",
      gender: 0,
      dropDown: false,
      depart: {},
      comboboxDepas: 0,
      comboboxPosi: 0,
      //   isShowAddToast: false,
      isShowAddToast: true,
    };
  },

  /**
   * @description: Hàm này dùng để theo dõi sự thay đổi của sự kiện khi click
   * Author: NSDThinh - 12/09/2022
   */
  watch: {
    /**
     * @description: Hàm này dùng để lấy thông tin giá trị của api trả về
     * @param {Object} value - Lấy giá trị( value ) dữ liệu từ api trả về
     * Author: NSDThinh - 12//09/2022
     */

    formMode() {
      let seft = this;

      if (seft.formMode == 1) {
        seft.employee = {};
        // gọi lên api để lấy mã nhân viên mới
        axios
          .get("https://cukcuk.manhnv.net/api/v1/Employees/NewEmployeeCode")
          .then((response) => {
            seft.employee.EmployeeCode = response.data;
          })
          .catch((response) => {
            console.log(response);
          });
      }
    },
    /**
     * @description: Hàm này dùng để lấy thông tin giá trị của api trả về
     * @param {Object} value - Lấy giá trị( value ) dữ liệu từ api trả về
     * Author: NSDThinh - 12/09/2022
     */
    employeeSelectedID(value) {
      let seft = this;
      if (value) {
        // gọi api thực hiện lấy dữ liệu
        axios
          .get(
            `https://cukcuk.manhnv.net/api/v1/Employees/${this.employeeSelectedID}`
          )
          .then((response) => {
            seft.employee = response.data;
          })
          .catch((res) => {
            console.log(res);
          });
      } else {
        // resert lại nhân viên thông tin
        seft.employeeSelected = {};

        // gọi lên api để lấy mã nhân viên mới
        axios
          .get("https://cukcuk.manhnv.net/api/v1/Employees/NewEmployeeCode")
          .then((response) => {
            seft.employee.EmployeeCode = response.data;
          })
          .catch(() => {});
      }
    },
  },

  methods: {
    /**
     * @description: Hàm này dùng để tắt hoặc mở form thêm nhân viên ( on/off form  employee )
     * @param {Object} isShowToastSuss - gán sự kiện để truyền giá trị từ form VAddToast sang employeeDetail
     * Author: NSDThinh - 12/09/2022
     */
    isShowToast(isShowAddToast) {
      this.isShowAddToast = isShowAddToast;
    },
    /**
     * @description: Hàm này dùng để hiển thị thông báo khi thành công thêm nhân viên
     * Author: NSDThinh - 12/09/2022
     */
    showAddMess() {
      this.isShowToast(true);
    },

    /**
     * @description: thực hiện validate dữ liệu
     * Author: NSDThinh - 15//09/2022
     */
    validateRequired() {
      let value = event.currentTarget.value;
      if (!value) {
        // them border mầu đỏ cho mã nhân viên hiện tại
        event.currentTarget.classList.add("validateInput");
        // them attr thông báo lỗi cho input hiện tại
        event.currentTarget.setAttribute(
          "title",
          "thông tin này không được phép để trống"
        );
      }
    },

    /**
     * @description: Format Gender (giới tính)
     * @param {Object} gender - Lấy dữ liệu api trả về thông qua dạng enum
     * Author: NSDThinh - 12//09/2022
     */
    formatGender(gender) {
      switch (gender) {
        case 0:
          return "Nam";
        case 1:
          return "Nữ";
        default:
          return "Khác";
      }
    },

    /**
     * @description: Hàm này dùng để Format Date (ngày sinh)
     * @param {Object} dob - gán sự kiện để format theo dạng ngày tháng năm
     * Author: NSDThinh - 12//09/2022
     */
    formatDate: function (dob) {
      if (dob) {
        dob = new Date(dob);
        // Lấy ra ngày:
        let date = dob.getDate();
        date = date < 10 ? `0${date}` : date;
        // Lấy ra tháng:
        let month = dob.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        // Lấy ra năm:
        let year = dob.getFullYear();
        dob = `${date}/${month}/${year}`;
      } else {
        dob = "";
      }
      return dob;
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

    /**
     * @description: Hàm này dùng để Format đơn vị
     * @param {Object} dob - gán sự kiện để format theo dạng theo mã ID của đơn vị
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
    /**
     * @description: Hàm này dùng để hiển thị danh sách dữ liệu chức vụ  ( form combobox Departments)
     * Author: NSDThinh - 12//09/2022
     */
    toggleDepas() {
      this.isShowDepass = !this.isShowDepass;
      this.dropDown = !this.dropDown;
    },

    /**
     * @description: Hàm này dùng để hiển thị danh sách hiển thị danh sách dữ liệu vị trí  ( form combobox Positions)
     * Author: NSDThinh - 12//09/2022
     */
    togglePosisons() {
      this.isShowPosion = !this.isShowPosion;
    },

    /**
     * @description: Hàm này dùng để Ẩn hiện form thêm nhân viên ( on/off form employee )
     * Author: NSDThinh - 12/09/2022
     */
    btnCloesOnClick() {
      this.$emit("isShowDialogEmployee", false);
    },

    /**
     * @description: Hàm này dùng để lưu lại dữ liệu khi đã chỉnh sửa hoặc thêm mới nhân viên
     * @param {Object} formMode - Nếu formMode == 1 => khi nhấn vào thêm nhân viên và ấn cất form sẽ thực hiện lưu dữ liệu
     * @param {Object} formMode - Nếu formMode != 1 => khi nhấn đúp chuột vào danh sách nhân viên và ấn cất form sẽ thực hiện chỉnh sửa lại dữ liệu nhân viên
     * Author: NSDThinh - 12//09/2022
     */
    btnSaveOnClick() {
      let me = this;
      // 1. validate giữ liệu
      let isValid = me.validateDate();
      if (!isValid) {
        return;
      }

      // 2. biuld object thông tin nhân viên

      // 3 kiểm tra trạng thái form là thêm mới hay sửa
      if (this.formMode == 1) {
        try {
          axios
            // 3.1 gọi api thực hiện thêm mới
            .post("https://cukcuk.manhnv.net/api/v1/Employees", me.employee)
            .then(() => {
              // 4. nếu thêm mới thành công hiển thị toasmegs báo thành công

              me.$emit("isShowDialogEmployee", false);
              me.$emit("loadDataTable", true);

              // loading trang khi thêm nhân viên thành công
              window.location.reload();
            })
            .catch((res) => {
              console.log(res);
            });
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          axios
            .put(
              `https://cukcuk.manhnv.net/api/v1/Employees/${me.employeeSelectedID}`,
              me.employee
            )
            .then(() => {
              // 5. nếu cập sửa  thành công hiển thị toasmegs báo thành công
              alert("sửa thành công");

              me.$emit("loadDataTable", true);
              me.$emit("isShowDialogEmployee", false);
              // 6. loading lại dữ liệu khi sửa xong
              window.location.reload();
            })
            .catch(() => {
              alert("sửa không thành công");
            });
        } catch (error) {
          console.log(error);
        }
      }
    },

    validateDate() {
      let isValid = true;
      if (!this.employee.EmployeeCode) {
        isValid = false;
        this.$refs["txtEmployeeCode"].classList.add("validateInput");
        this.$refs["txtEmployeeCode"].setAttribute(
          "title",
          "Thông tin này không được phép để trống"
        );
      }
      if (!this.employee.FullName) {
        isValid = false;
        this.$refs["txtEmployeeName"].classList.add("validateInput");
        this.$refs["txtEmployeeName"].setAttribute(
          "title",
          "Thông tin này không được phép để trống"
        );
      }
      return isValid;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../src/style/employee/employeeDetail";
</style>
