
$(document).ready(function () {
    var employeeJS = new EmplogyeeJS();
    employeeJS.loadData();
})

let employeeNew = {

    loadData() {
        // Lấy giữ liệu từ api trả về
        try {
            $.ajax({
                url: "/employees",
                method: "GET",
                data: "",
                contentType: "application/json",
                dataType: "",
            }).done(function (res) {
                $(".loadingListApi").show();
                $('#employee tbody').empty();
                $.each(res, function (index, item) {
                    // check giới tính và sét điều kiện cho giới tính
                    var checkGender = item.Gender;
                    switch (checkGender) {
                        case 0:
                            checkGender = 'Nữ';
                            break;
                        case 1:
                            checkGender = 'Nam';
                            break;
                        case 2:
                            checkGender = 'Khác';
                            break;
                    }
                    /*  khởi tạo giá trị datetime và bỏ múi giờ từ api trả về*/

                    var yourDate = new Date(item.DateOfBirth);
                    var yourDate = item.DateOfBirth;
                    var dateOfBirth = yourDate.split('T')[0].split("-").reverse().join("-");

                    /*khởi tạo giá trị truyền vào nếu ko truyền giá trị gì thì trả về rỗng*/

                    item.checkGender = item.checkGender || '';
                    item.DateOfBirth = item.DateOfBirth || '';
                    item.IdentityNumber = item.IdentityNumber || '';
                    item.DepartmentName = item.DepartmentName || '';
                    item.PositionName = item.IdentityNumber || '';
                    item.BankAccount = item.BankAccount || '';
                    item.NameBankAccount = item.NameBankAccount || '';
                    item.branch = item.branch || '';

                    var EmployeeList = $(`<tr EmployeeCode = ` + item.EmployeeCode + `> 
                          <td><input type="checkbox" id="weekday-1" name="weekday-1" value="Friday" checked><label for="weekday-1"></label></td>
                          <td >`+ item.EmployeeCode + `</td>
                          <td >`+ item.EmployeeName + `</td>
                          <td >`+ checkGender + `</td>
                          <td id ="Date">`+ dateOfBirth + `</td>
                          <td >`+ item.IdentityNumber + `</td>
                          <td >`+ item.DepartmentName + `</td>
                          <td class="repons">`+ item.PositionName + `</td>
                          <td class="repon">`+ item.BankAccount + `</td>
                          <td class="repon">`+ item.NameBankAccount + `</td>
                          <td class="repon">`+ item.branch + `</td>
                          <td ><div class="actionEdit">
                               <div class="editAction">Sửa</div>
                               <div class="action" id="actionClick"></div>
                                <div class="option-down">
                                    <div class="btn-coppy" value="${item.EmployeeCode}">Nhân bản</div>
                                    <div class="btn-delete" value="${item.EmployeeCode}">Xóa</div>
                                    <div class="btn-ngung" value="${item.EmployeeCode}">Ngừng sử dụng</div>
                                </div>

                          </td>
                          </tr>`);
                    $('#employee tbody').append(EmployeeList);
                    $(".loadingListApi").hide();

                })
            }).fail(function (res) {

            })
        } catch (error) {
            console.log(error)
        }

    },


}

class EmplogyeeJS {
    constructor() {
        // gán mặc định formMode
        this.FormMode = null;
        this.initEvents();
    }
    /*
     * lấy dữ liệu từ data và in ra màn hình
     */
    loadData() {

/*
        try {
            // Gọi api thực hiện lấy dữ liệu:
            fetch("https://localhost:44395/employees", { method: "GET" })
                .then(res => res.json())
                .then(res => {
                    console.log(res);

                    // Clear dữ liệu cũ: 
                    $("table#employee tbody").empty();
                    // Lấy thông tin các cột dữ liệu của bảng:
                    var ths = $("table#employee thead th");
                    for (const emp of res) {
                        var employeeList = $(`<tr></tr>`);
                        for (const th of ths) {
                            // Lấy ra thông tin propName:
                            const propName = $(th).attr("prop-name");
                            // Lấy ra value:
                            let value = emp[propName];
                            const formatDate = th.hasAttribute("format-date");
                            const formatMoney = th.hasAttribute("format-money");
                            if (formatDate)
                                value = common.formatDate(value);

                            if (formatMoney)
                                value = common.formatMoneyVND(value);

                            var td = `<td>${value || ""}</td>`
                            employeeList.append(td);
                        }
                        employeeList.data("id", emp.EmployeeId);
                        employeeList.data("entity", emp);
                        $("table#employee tbody").append(employeeList);

                    }

                })
                .catch(res => {

                })

        } catch (error) {
            console.log(error);
        }
*/


        // Lấy giữ liệu từ api trả về
        try {
            $.ajax({
                url: "/employees",
                method: "GET",
                data: "",
                contentType: "application/json",
                dataType: "",
            }).done(function (res) {
                $(".loadingListApi").show();
                $('#employee tbody').empty();
                $.each(res, function (index, item) {
                    // check giới tính và sét điều kiện cho giới tính
                    var checkGender = item.Gender;
                    switch (checkGender) {
                        case 0:
                            checkGender = 'Nữ';
                            break;
                        case 1:
                            checkGender = 'Nam';
                            break;
                        case 2:
                            checkGender = 'Khác';
                            break;
                    }


                    
                    /*  khởi tạo giá trị datetime và bỏ múi giờ từ api trả về*/
                     
                    var yourDate = new Date(item.DateOfBirth);
                    var yourDate = item.DateOfBirth;
                    var dateOfBirth = yourDate.split('T')[0].split("-").reverse().join("-");

                  
                    
                     /*khởi tạo giá trị truyền vào nếu ko truyền giá trị gì thì trả về rỗng*/
                     
                    item.checkGender = item.checkGender || '';
                    item.DateOfBirth = item.DateOfBirth || '';
                    item.IdentityNumber = item.IdentityNumber || '';
                    item.DepartmentName = item.DepartmentName || '';
                    item.PositionName = item.IdentityNumber || '';
                    item.BankAccount = item.BankAccount || '';
                    item.NameBankAccount = item.NameBankAccount || '';
                    item.branch = item.branch || '';

                    var EmployeeList = $(`<tr EmployeeCode = ` + item.EmployeeCode + `> 
                          <td><input type="checkbox" id="weekday-1" name="weekday-1" value="Friday" checked><label for="weekday-1"></label></td>
                          <td >`+ item.EmployeeCode + `</td>
                          <td >`+ item.EmployeeName + `</td>
                          <td >`+ checkGender + `</td>
                          <td id ="Date">`+ dateOfBirth + `</td>
                          <td >`+ item.IdentityNumber + `</td>
                          <td >`+ item.DepartmentName + `</td>
                          <td class="repons">`+ item.PositionName + `</td>
                          <td class="repon">`+ item.BankAccount + `</td>
                          <td class="repon">`+ item.NameBankAccount + `</td>
                          <td class="repon">`+ item.branch + `</td>
                          <td ><div class="actionEdit">
                               <div class="editAction">Sửa</div>
                               <div class="action" id="actionClick"></div>

                                <div class="option-down">
                                    <div class="btn-coppy" value="${item.EmployeeCode}">Nhân bản</div>
                                    <div class="btn-delete" value="${item.EmployeeCode}">Xóa</div>
                                    <div class="btn-ngung" value="${item.EmployeeCode}">Ngừng sử dụng</div>

                                </div>

                          </td>
                          </tr>`);
                    $('#employee tbody').append(EmployeeList);
                    $(".loadingListApi").hide();

                })
            }).fail(function (res) {

            })
        }catch(error) {
            console.log(error)
        }
    }


    /*
     * dùng để khởi tạo các sự kiện và bind con trỏ this
     * Nguyễn Sỹ Đức Thịnh
     */
    initEvents() {
        
        $('.addNV').click(this.btnAddOnClick.bind(this));
        $('#iconClose').click(this.btnCancelOnClick.bind(this));
        $('#huy').click(this.btnCancelOnClick.bind(this));
        $('#addd').click(this.btnSaveOnClick.bind(this));
        $('#saveofadd').click(this.btnCatofAddOnClick.bind(this));
        $('#nhanban').click(this.btnCoppyonClick.bind(this)); 
        $('#rset').click(this.btnRefreshOnClick.bind(this));

        $('img #action').click(this.btnDown.bind(this));
        
        $('#employee tbody').dblclick(this.btnEditOnClick.bind(this));
        $('#employee tbody tr .option-down .btn-delete').click(this.btnDeleteOnClick.bind(this));
        $("#manv").blur(this.checkRequired);
        $("#tennv").blur(this.checkRequired);
        $("#donvi1").blur(this.checkRequired);
    }




    

    /* click sự kiện show
     * Nguyễn Sỹ Đức Thịnh
     */
    btnShowlOnClick() {
        this.FormMode = "add";
        this.btnAddOnClick();

    }

    btnDown() {
        $('.option-down').show();
    }

    /*Load lại data khi click vào nút Refres
     */
    btnRefreshOnClick() {
        this.loadData();
        $(".loadingListApi").show();
    }

    /* click sự kiện hide ẩn đi
     * Nguyễn Sỹ Đức Thịnh
     */
    btnHideOnClick() {
        this.btnCancelOnClick();
    }

    /*gán sự kiện show
     * Nguyễn Sỹ Đức Thịnh
     */
    btnAddOnClick() {
        $('.information input[type="text"]').val(null);
        $('.information input[type="datetime"]').val(null);
        $('.formadd ').show();
        $('.infoTXT').show();
        $("#manv").focus();
    }

    btnEditerEmployee() {
        $('.information input[type="text"]').val(null);
        $('.information input[type="datetime"]').val(null);
        $('.formadd ').show();
        $('.infoTXT').show();
        $("#manv").focus();
    }
    /* gán sự kiện show
     * Nguyễn Sỹ Đức Thịnh
     */
    btnCancelOnClick() {
        $('.formadd').hide();
        $('.infoTXT').hide();
    }

    /*check required kiểm tra đã nhập thông tin hợp lệ chưa
     * Nguyễn Sỹ Đức Thịnh
     */
    checkRequired() {
        var value = this.value;
        if (!value) {
            $(this).addClass('testCheck');
            $(this).attr("title", " bạn phải nhập thông tin này");
            return false;
        } else {
            $(this).removeClass('testCheck');
            $(this).removeAttr('title');
            return true;
        }

    }

    /* tạo form cất và thêm có thể thêm nhân viên liên tục mà ko bị thoát khỏi form
     */
    btnCatofAddOnClick() {
        var self = this;
        var method = "POST";
        var inputRequireds = $("[required]");
        var isValid = true;

        $.each(inputRequireds, function (index, input) {
            var valid = $(input).trigger("blur");
            if (isValid && valid.hasClass("testCheck")) {
                isValid = false;
            }

        })
        /*nhập thông tin vào form
         */
        if (isValid) {
            var checkGender = $("input[type='radio'][name='radioGroup']:checked").val();
            var employee = {};
            employee.EmployeeCode = $("#manv").val();
            employee.EmployeeName = $("#tennv").val();
            employee.Gender = checkGender;
            employee.DateOfBirth = $("#ngaysinh").val();
            employee.IdentityNumber = $("#cmnd").val();
            employee.DepartmentName = $("#chucdanh").val();
            employee.PositionName = $("#donvi1").val();
            employee.BankAccount = $("#tknganhang").val();
            employee.NameBankAccount = $("#tennganhang").val();
            employee.branch = $("#chinhanh").val();
            switch (checkGender) {
                case 0:
                    checkGender = 'Nữ';
                    break;
                case 1:
                    checkGender = 'Nam';
                    break;
                case 2:
                    checkGender = 'Khác';
                    break;
            }

            /*
             * nếu người dùng chọn nút sửa thì method sẽ đổi từ post sang put
             * thực hiện cất dữ liệu vào trong data
             */
            if (self.FormMode === "edit") {
                method = "PUT";
            }
            if (self.FormMode === "cop") {
                method = "POST";
            }
            if ($("#manv").val() != '' && $("#tennv").val() != '' && $("#donvi1").val() != '') {
                $.ajax({
                    url: "/employees",
                    method: method,
                    data: JSON.stringify(employee),
                    contentType: "application/json",
                    dataType: "json",


                }).done(function (res = true) {

                    self.loadData();
                    $('input').val(null);
                    self.FormMode = null;
                }).fail(function (res) {
                    /* kiểm tra xem mã nhân viên đã tồn tại hay chưa */
                    if ($("#manv").val()) {
                        let nvFail = employee.EmployeeCode;
                        alert("Mã nhân viên" + ' ' + '<' + nvFail + '>' + " đã tồn tại trong hệ thống, vui lòng kiểm tra lại");
                    }
                })
            } else {


                /*  kiểm tra xem người dùng đã nhập đủ thông tin chưa*/
                if ($("#manv").val() == '') {
                    alert("Mã nhân viên không được để trống!");
                }
                if ($("#tennv").val() == '') {

                    alert("Tên nhân viên không được để trống!");
                }
                if ($("#donvi1").val() == '') {
                    alert("Đơn vị không được để trống!");
                }
            }
        } else {

        }
    }


    
    /* Thực hiện Lưu dữ liệu lên data
     */
    btnSaveOnClick() {
        var self = this;
        var method = "POST";
        var inputRequireds = $("[required]");
        var isValid = true;

        $.each(inputRequireds, function (index, input) {
            var valid = $(input).trigger("blur");
            if (isValid && valid.hasClass("testCheck")) {
                isValid = false;
            }
        })
        /*nhập thông tin vào form
         */
        if (isValid) {
            var checkGender = $("input[type='radio'][name='radioGroup']:checked").val();
            var employee = {};
            employee.EmployeeCode = $("#manv").val();
            employee.EmployeeName = $("#tennv").val();
            employee.Gender = checkGender;
            employee.DateOfBirth = $("#ngaysinh").val();
            employee.IdentityNumber = $("#cmnd").val();
            employee.DepartmentName = $("#chucdanh").val();
            employee.PositionName = $("#donvi1").val();
            employee.BankAccount = $("#tknganhang").val();
            employee.NameBankAccount = $("#tennganhang").val();
            employee.branch = $("#chinhanh").val();
            switch (checkGender) {
                case 0:
                    checkGender = 'Nữ';
                    break;
                case 1:
                    checkGender = 'Nam';
                    break;
                case 2:
                    checkGender = 'Khác';
                    break;
            }
            /*
             * nếu người dùng chọn nút sửa thì method sẽ đổi từ post sang put
             * thực hiện cất dữ liệu vào trong data
             */
            if (self.FormMode === "edit") {
                method = "PUT";
            }
            if (self.FormMode === "cop") {
                method = "POST";
            }
            if ($("#manv").val() != '' && $("#tennv").val() != '' && $("#donvi1").val() != '') {
                $.ajax({
                    url: "/employees",
                    method: method,
                    data: JSON.stringify(employee),
                    contentType: "application/json",
                    dataType: "json",


                }).done(function (res = true) {

                    self.loadData();
                    self.btnHideOnClick();
                    self.FormMode = null;
                }).fail(function (res) {
                    /* kiểm tra xem mã nhân viên đã tồn tại hay chưa */
                    if ($("#manv").val()) {
/*                        $('.notify__content').show();*/
                        let nvFail = employee.EmployeeCode;

                      
                        alert("Mã nhân viên" + ' ' + '<' + nvFail + '>' + " đã tồn tại trong hệ thống, vui lòng kiểm tra lại");
                    }

                    if ($("#tennv").val() == '') {

                        alert("Tên nhân viên không được để trống!");
                    }
                    if ($("#donvi1").val() == '') {
                        alert("Đơn vị không được để trống!");
                    }
                })
            } else {

                /*  kiểm tra xem người dùng đã nhập đủ thông tin chưa*/
                if ($("#manv").val() == ''  ) {
                    alert("Mã nhân viên không được để trống!");
                }
                if ($("#tennv").val() == '') {

                    alert("Tên nhân viên không được để trống!");
                }
                if ($("#donvi1").val() == '') {
                    alert("Đơn vị không được để trống!");
                }
            }

        } else {

        }
    }
    getID() {
        var id = $('#employee tr.activeClick[EmployeeCode]');
        return id.attr("EmployeeCode");
    }


    /*Form nhân bản nhân viên
     */

    btnCoppyonClick() {
        this.FormMode = "cop";
        var EmployeeCode = this.getID();
        if (EmployeeCode) {
            this.btnAddOnClick();
            $.ajax({
                url: "/employees/" + EmployeeCode,
                method: "GET",

            }).done(function (employee) {
                if (employee) {
                    var yourDate = employee["DateOfBirth"];
                    var dateOfBirth = yourDate.split('T')[0].split("-").reverse().join("-");

                    var ngaycap = employee["IdentityIssuedDate"];
                    var ngayCap = ngaycap.split('T')[0].split("-").reverse().join("-");
                    var checkGender = $("input[type='radio'][name='radioGroup']:checked").val(employee["Gender"]);
                    // bindding thông tin của dữ liệu lên form
                    $("#manv").val(employee["EmployeeCode"]);
                    $("#tennv").val(employee["EmployeeName"]);
                    $("#gender").val(checkGender);
                    $("#ngaysinh").val(dateOfBirth);
                    $("#ngaycap").val(ngayCap);
                    $("#cmnd").val(employee["IdentityNumber"]);
                    $("#chucdanh").val(employee["DepartmentName"]);
                    $("#donvi1").val(employee["PositionName"]);
                    $("#tknganhang").val(employee["BankAccount"]);
                    $("#tennganhang").val(employee["NameBankAccount"]);
                    $("#chinhanh").val(employee["branch"]);

                    switch (checkGender) {
                        case 0:
                            checkGender = 'Nữ';
                            break;
                        case 1:
                            checkGender = 'Nam';
                            break;
                        case 2:
                            checkGender = 'Khác';
                            break;
                    }
                } else {

                }

            }).fail(function (res) {

            })

            // thực hiện cất dữ liệu
        } else {
            alert("Bạn chưa chọn nhân viên để nhân bản!")
        }
    }

   
    /* Gán sự kiện cho form edit để sửa và lưu dữ liệu lên data
    */
    btnEditOnClick() {
        this.FormMode = "edit";
        //2 lấy dữ liệu từ form đã chọn
        var EmployeeCode = this.getID();
        //3 lấy thông tin id nhân viên
        if (EmployeeCode) {
            // hiển thị form chi tiết
            this.btnAddOnClick();
            $.ajax({
                url: "/employees/" + EmployeeCode,
                method: "GET",
            }).done(function (employee) {
                if (employee) {
                    var yourDate = employee["DateOfBirth"];
                    var dateOfBirth = yourDate.split('T')[0].split("-").reverse().join("-");
                    var ngaycap = employee["IdentityIssuedDate"];
                    var ngayCap = ngaycap.split('T')[0].split("-").reverse().join("-");
                    var checkGender = $("input[type='radio'][name='radioGroup']:checked").val(employee["Gender"]);

                    // bindding thông tin của dữ liệu lên form
                    $("#manv").val(employee["EmployeeCode"]);
                    $("#tennv").val(employee["EmployeeName"]);
                    $("#gender").val(checkGender);
                    $("#ngaysinh").val(dateOfBirth);
                    $("#ngaycap").val(ngayCap);
                    $("#diachi").val(employee["Address"]);
                    $("#email").val(employee["Email"]);
                    $("#dtdidong").val(employee["PhoneNumber"]);
                    $("#dtcodinh").val(employee["Landlinephone"]);
                    $("#cmnd").val(employee["IdentityNumber"]);
                    $("#chucdanh").val(employee["DepartmentName"]);
                    $("#donvi1").val(employee["PositionName"]);
                    $("#tknganhang").val(employee["BankAccount"]);
                    $("#tennganhang").val(employee["NameBankAccount"]);
                    $("#chinhanh").val(employee["branch"]);

                    /* Đổi giá trị giới tính
                     */
                    switch (checkGender) {
                        case 0:
                            checkGender = 'Nữ';
                            break;
                        case 1:
                            checkGender = 'Nam';
                            break;
                        case 2:
                            checkGender = 'Khác';
                            break;
                    }

                } else {

                }

            }).fail(function (res) {

            })

            // thực hiện cất dữ liệu
        } else {
            alert("Bạn chưa chọn nhân viên để sửa!!!")
        }

    }


    /*
     * xóa nhân viên đã chọn
     */




    btnDeleteOnClick(e) {
        var self = this;
        
        let id = $(e.target).attr("value");
        
        // lấy mã nhân viên được chọn
        var EmployeeCode = this.getID();
        if (id) {
            var confirmm = confirm("Bạn có thực sự muốn xóa nhân viên" + ' ' + '<' + id + '>' + " không? ");
            if (confirmm == true) {
                $.ajax({
                    url: "/employees/" + id,
                    method: "DELETE",

                }).done(function (res) {

                }).fail(function (res) {
                    window.alert("Vui lòng kiểm tra lại!")
                })
                self.loadData();

                alert("Xóa thanh công nhân viên" + ' ' + '<' + EmployeeCode + '>');
                self.loadData();
            } else {
                alert("Hủy thanh cong");
                self.loadData();
            }

            // gọi api thực hiện xóa nhân viên đã chọn
           
        } else {
            alert("mời bạn chọn nhân viên cần xóa!")
        }

    }

    /*Lấy mã nhân viên được chọn trong list danh sách
     */
    getEmployeeCodeSelect() {
        var employeeCode = null;
        var trSelect = $('#employee tr.activeClick');
        if (trSelect.length > 0) {
            employeeCode = $(trSelect).children()[0].textContent;
        }
        return employeeCode;
    }



}


export default employeeNew