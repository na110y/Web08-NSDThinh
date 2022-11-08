<template>
  <div class="content">
    <div class="content__employee">
      <div class="content__employee-btn">
        <div class="content__employee-txt">Danh sách nhân viên</div>
        <div class="content__employee-add" tabindex="1" @click="btnAddDetail">
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
                placeholder="Tìm kiếm theo Mã, tên nhân viên"
                id="search-manv"
              />
              <img
                src="../pages/icon/search.png"
                alt="error icon search"
                id="search"
              />
            </li>
            <li id="employee__refresh" @click="refreshData">
              <img
                src="../../src/pages/icon/refresh.png"
                alt="error icon refresh"
              />
            </li>
          </ul>
        </div>
        <div class="employeeL">
          <table id="employeeList" :class="loading">
            <thead>
              <tr>
                <th class="text-center">
                  <input
                    type="checkbox"
                    id="weekday-1"
                    name="weekday-1"
                    value="Friday"
                    checked
                  /><label for="weekday-1"></label>
                </th>
                <th class="text-left">MÃ NHÂN VIÊN</th>
                <th class="text-left">TÊN NHÂN VIÊN</th>
                <th class="text-left">GIỚI TÍNH</th>
                <th class="text-center">NGÀY SINH</th>
                <th class="text-left">SỐ CMND</th>
                <th class="text-left">CHỨC DANH</th>
                <th class="text-left">TÊN ĐƠN VỊ</th>
                <th class="text-left">SỐ TÀI KHOẢN</th>
                <th class="text-left bankcound">TÊN NGÂN HÀNG</th>
                <th class="text-left">CHI NHÁNH TK NGÂN HÀNG</th>
                <th class="text-center">CHỨC NĂNG</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="employee in filteredList"
                :key="employee.EmployeeId"
                @click="activeClickTable(employee.EmployeeId)"
                :class="{ activeBGC: activeClick === employee.EmployeeId }"
                @dblclick="rowOnClick(employee)"
                @change="papingTest"
              >
                <td class="text-center">
                  <input
                    type="checkbox"
                    id="weekday-1"
                    name="weekday-1"
                    value="Friday"
                    checked
                  /><label for="weekday-1"></label>
                </td>
                <td class="text-left">{{ employee.EmployeeCode }}</td>
                <td class="text-left">{{ employee.FullName }}</td>
                <td class="text-left">{{ formatGender(employee.Gender) }}</td>
                <td class="text-center">
                  {{ formatDate(employee.DateOfBirth) }}
                </td>
                <td class="text-left">{{ employee.IdentityNumber }}</td>
                <td class="text-left">
                  {{ formatChucDanh(employee.PositionId) }}
                </td>
                <td class="text-left">
                  {{ formatDonVi(employee.DepartmentId) }}
                </td>
                <td class="text-left">{{ employee.bankAccount }}</td>
                <td class="text-left">{{ employee.bankName }}</td>
                <td class="text-left">{{ employee.bankAddress }}</td>
                <td class="">
                  <div class="actionEdit">
                    <div class="editAction">Sửa</div>
                    <div
                      class="delEmployee"
                      @click="btnOnClickShowOption(employee.EmployeeCode)"
                    ></div>
                    <ul
                      class="option-down"
                      :ref="`dropdown-${employee.EmployeeCode}`"
                    >
                      <li class="btn-coppy">Nhân bản</li>
                      <li class="btn-delete" @click="btnOnClickDel(employee)">
                        Xóa
                      </li>
                      <li class="btn-ngung">Ngừng sử dụng</li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="loading" v-if="isLoading">
    <img
      src="../pages/img/loading.svg"
      alt=""
      id="loadingIcon"
      @click="OnClickShowDropdown"
    />
  </div>

  <div class="content-end">
    <div class="total">
      <div class="total-item1">Tổng số:</div>
      <div class="total-item2">1035</div>
      <div class="total-item3">bản ghi</div>
    </div>
    <div class="number">
      <!-- <select class="">
        <option>tất cả bản ghi trên trang</option>
        <option>10 bản ghi trên trang</option>
        <option>20 bản ghi trên trang</option>
        <option>50 bản ghi trên trang</option>
        <option>100 bản ghi trên trang</option>
      </select> -->
      <VPanging />
      <div
        class="v-pagination__container--right--item--text page-item"
        :disabled="currentPage === 1"
        @click="changePage(-1)"
      >
        Trước
      </div>
      <div class="number-item3">1</div>
      <div class="number-item4" @click="changePage(1)">2</div>
      <div class="number-item5" @click="changePage(1)">3</div>
      <div class="number-item6">...</div>
      <div class="number-item7">52</div>
      <div
        class="v-pagination__container--right--item--text page-item"
        :disabled="currentPage === 4"
        @click="changePage(1)"
      >
        Sau
      </div>
      <b-pagination
        v-model="currentPagee"
        :total-rows="rows"
        :per-page="perPage"
        first-number
        last-number
      ></b-pagination>
    </div>
  </div>
  <employee-detail
    @isShowDialogEmployee="showDialongEmployeeDetail"
    :isShowFormAdd="isShowDialog"
    :employeeSelected="employeeSelected"
    :employeeSelectedID="employeeSelectedID"
    :formMode="formDetailMode"
    :combobox="comboboxEmployeeDetail"
    :loadDataTable="loadDataTableDetail"
  />
</template>

<script>
import axios from "axios";
import employeeDetail from "./employeeDetail.vue";
import VPanging from "@/components/base/VPanging.vue";
export default {
  name: "the-employee",
  components: { employeeDetail, VPanging },
  props: ["employeeDetail", "VPanging"],
  data() {
    return {
      employees: [],
      isLoading: false,
      activeClick: null,
      isShowDialog: false,
      employeeSelectedID: null,
      formDetailMode: 0,
      isShowOption: false,
      employeeSelected: {},
      combobox: {},
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
     * @description: Hàm này dùng để làm mới lại trang khi nhấn vào refresh
     * Author: NSDThinh - 12//09/2022
     */
    refreshData() {
      window.location.reload();
    },

    /**
     * @description: Hàm này dùng để tắt form khi nhấn vào nút xóa nhân viên
     * Author: NSDThinh - 12//09/2022
     */
    btnOnClickDel(employee) {
      if (employee) {
        var confirmm = confirm(
          "Bạn có thực sự muốn xóa nhân viên" +
            " " +
            "<" +
            employee.EmployeeCode +
            ">" +
            " không? "
        );
        if (confirmm == true) {
          axios
            .delete(
              `https://cukcuk.manhnv.net/api/v1/Employees/${employee.EmployeeId}`
            )
            .then(() => {
              alert(
                "Xóa thanh công nhân viên" +
                  " " +
                  "<" +
                  employee.EmployeeCode +
                  ">"
              );
              // hàm này dùng để làm mới lại trang khi xóa nhân viên
              window.location.reload();
            })
            .catch(() => {
              alert(
                "Xóa không thành công" + " " + "<" + employee.EmployeeCode + ">"
              );
            });
        } else {
          alert("Hủy thanh cong");
        }
      }
    },

    /**
     * @description: Hàm này dùng để hiển thị form sửa nhân viên khi ấn đúp chuột ( editor employee )
     * @param {Object}  employee : lấy giá trị tham số EmployeeId từ api vào để binding giá trị khi sửa
     * Author: NSDThinh - 12/09/2022
     */
    rowOnClick(employee) {
      this.employeeSelected = employee;
      this.employeeSelectedID = employee.EmployeeId;
      this.showDialongEmployeeDetail(true);
      this.$emit("update:modelValue", employee);
      this.formDetailMode = 0;
    },

    /**
     * @description: Hàm này dùng để tắt form phân trang
     * Author: NSDThinh - 14/09/2022
     */
    isShowItemPaging() {
      this.isShowPaging = !this.isShowPaging;
    },
    /**
     * @description: Hàm này dùng để mở và đóng form phân trang
     * Author: NSDThinh - 14/09/2022
     */

    /**
     * @description: Hàm này dùng để hiển thị form chỉnh sửa nhi nhấn vào form dropdown trong danh sách nhân viên
     * Author: NSDThinh - 12/09/2022
     */
    btnOnClickShowOption(eCode) {
      let dropdown = this.$refs[`dropdown-${eCode}`][0];
      dropdown.style.display = "block";
      this.isShowOption = true;
    },

    /**
     * @description: Hàm này dùng để hiển thị form  nhân viên khi ấn chuột ( editor employee )
     * Author: NSDThinh - 12/09/2022
     */
    btnAddDetail() {
      this.showDialongEmployeeDetail(true);
      this.formDetailMode = 1;
    },

    /**
     * @description: Hàm này dùng để tắt hoặc mở form thêm nhân viên ( on/off form  employee )
     * @param {Object} isShowDialog - gán sự kiện để truyền giá trị từ form employeeList sang employeeDetail
     * Author: NSDThinh - 12/09/2022
     */
    showDialongEmployeeDetail(isShowDialog) {
      this.isShowDialog = isShowDialog;
    },

    loadDataTableDetail() {
      this.getAllEmployee(true);
    },
    /**
     * @description: Hàm này dùng để định dạng tiền lương (format)
     * @param {Object} value - gán sự kiện để format theo dạng có dấu " . " để phân cách tiền
     * Author: NSDThinh - 15//09/2022
     */
    inputSalaryFomat() {
      // lấy ra value của input mức lương
      let value = event.currentTarget.value;
      let currentText = event.currentTarget.data;
      if (currentText == ".") {
        return;
      }
      // thực hiện định dạng lại dữ liệu:
      if (value) {
        value = value.replaceAll(",", "");
        // chuyển dữ liệu sang dạng số
        value = Number(value);
        if (isNaN(value)) {
          return;
        }
        value = new Intl.NumberFormat("en-VI").format(value);
        event.currentTarget.value = value;
      }
      // sét lại giá trị hiển thị trên input
      console.log(value);
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
     * @description: Hàm này dùng để hiển thị nổi bật nhân viên
     * @param {Object} EmployeeId - Lấy dữ liệu ID của nhân nhân viên thông qua api
     * Author: NSDThinh - 12//09/2022
     */
    activeClickTable(EmployeeId) {
      this.activeClick = EmployeeId;
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
     * @description: Hàm này dùng để lấy giữ liệu từ API và hiển thị danh sách lên màn hình
     * Author: NSDThinh - 12/09/2022
     */
    getAllEmployee() {
      const response = axios.get("https://cukcuk.manhnv.net/api/v1/Employees");
      return response;
    },
  },

  created() {
    /**
     * @description: Hàm này dùng để lấy giữ liệu từ API và hiển thị danh sách lên màn hình
     * Author: NSDThinh - 12//09/2022
     */
    let me = this;
    try {
      me.isLoading = true;
      me.getAllEmployee()
        .then((res) => {
          me.employees = res.data;

          me.isLoading = false;
        })
        .catch((res) => {
          console.log(res);
          me.isLoading = true;
        });
    } catch (error) {
      console.log(error);
      me.isLoading = true;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../src/style/employee/employee";
</style>
