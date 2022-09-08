import employeeNew from "./employee.js"


/* chức năng tìm kiếm
   author : NĐThinh
 */
$('#inputNV').keyup(function () {
    var value = $(this).val().toLowerCase();
    $('#employee tr ').each(function () {
        var lcval = $(this).text().toLowerCase();
        if (lcval.indexOf(value) > -1) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});

/* click vào nhân viên muốn chọn và sẽ làm nv đc chọn nổi bật lên
   author : NĐThinh
 */

$(document).on('click', 'table#employee tbody tr', function () {
    $(this).siblings('.activeClick').removeClass('activeClick');
    this.classList.add('activeClick');
});

$(document).on('click', '.menu .menu-list .menu-list-itemTxt .menu-list-item_TXT', function () {
    $(this).siblings('.activeClassClick').removeClass('activeClassClick');
    this.classList.add('activeClassClick');
});




/* click "btn-sua" để hiển thị form chỉnh sửa  nhân viên 
   author : NĐThinh
 */
$(document).on('click', 'table#employee tbody tr .action', function (e) {
    $('table#employee tbody tr .action').next().hide();
    let currenEle = $(e.target);
    let targetEle = $(currenEle).next();
    $(targetEle).show();

});



$(document).on('click', 'windown', function (e) {
        $('.option-down').hide();
});

/* click employee listTable delete || chọn nhân viên để xóa
   author : NĐThinh
 */
$(document).on('click', '#employee tbody .btn-delete', function (e) {
    let id = $(e.target).attr("value");
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
            alert("Xóa thanh công nhân viên" + ' ' + '<' + id + '>');
            employeeNew.loadData();
        } else {
            alert("Hủy thanh cong");
        }

    } else {
        alert("mời bạn chọn nhân viên cần xóa!")
    }
});


/* refresh data || làm mới lại data
   author : NĐThinh
 */
if ($('#rset').length) {

    var scrollTrigger = 10, //khoảng cách đến khi bắt đầu hiện nút (px)
    backToTop = function () { };
    backToTop();
    $(window).on('scroll', function () {
        backToTop(); //gọi function 'backToTop()' mỗi khi người dùng cuộn trang
    });
    $('#rset').on('click', function (e) {


        e.preventDefault();
        $('.employeeTablee').animate({
            scrollTop: 0
        }, 500);
    });
}


/* hiển thị chi tiết menu và ẩn bớt menu
   author : NĐThinh
 */
$(document).on('click', '#iconHeader', function () {
    $('.menu').toggle();
    $('.contentActive').toggleClass();
});



var common = {
    /**
     * Hiển thị form date
     * @param {any} date Ngày tháng
    * Athor: NĐThinh (26/08/2022)
     */
    formatDate(date) {
        try {
            if (date) {
                date = new Date(date)
                // Lấy ra ngày:
                let day = date.getDate();
                day = day < 10 ? `0${day}` : day;
                let month = date.getMonth() + 1;
                month = month < 10 ? `0${month}` : month;
                let year = date.getFullYear();
                return `${day}/${month}/${year}`;
            } else {
                return "";
            }
        } catch (error) {
            console.log(error);
            return "";
        }
    },

    /**
     * Định dạng tiền VND
     * @param {Number} money Tiền
     * Athor: NSDThinh (26/08/2022)
     */
    formatMoneyVND(money) {
        try {
            money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(money);
            return money
        } catch (error) {
            console.log(error);
            return "";
        }
    }
}
