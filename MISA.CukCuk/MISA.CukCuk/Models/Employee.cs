using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MISA.CukCuk.Models
{
    public class Employee
    {
        public static List<Employee> EmployeeList = new List<Employee>() { };


        /// <summary>
        /// Mã nhân viên
        /// </summary>
        public string EmployeeCode { get; set; }

        /// <summary>
        /// Tên nhân viên
        /// </summary>
        public string EmployeeName { get; set; }

        /// Ngày sinh
        public DateTime DateOfBirth { get; set; }


        /// Giới tính
        public Gender Gender { get; set; }

        /// Số CMND
        public int IdentityNumber { get; set; }

        /// Nơi cấp CMND
        public string IdentityIssuedPlace { get; set; }

        /// Ngày cấp CMND
        public DateTime IdentityIssuedDate { get; set; }

        /// Email

        public string Email { get; set; }

        /// đơn vị
        public string PositionName { get; set; }
        /// Số điện thoại
        public int PhoneNumber { get; set; }


        /// chức danh
        public string DepartmentName { get; set; }


        /// địa chỉ

        public string Address { get; set; }

        /// đt cố định
        public string Landlinephone { get; set; }

        /// tài khoản ngân hàng
        public string BankAccount { get; set; }
        
        
        /// tên tk ngân hàng
        public string NameBankAccount { get; set; }

        /// chi nhánh

        public string branch { get; set; }


    }
}
