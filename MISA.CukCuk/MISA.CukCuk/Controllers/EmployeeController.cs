using MISA.CukCuk.Models;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MISA.CukCuk.Controllers
{
    [RoutePrefix("employees")]

    public class EmployeeController : ApiController
    {
            [Route("")]
            public IEnumerable<Employee> Get()
            {
                var employees = new List<Employee>();
                string connectionString = @"Server=3.0.89.182;Port=3306;Database=WDT.2022.Thinh;Uid=dev;Pwd=12345678;";
                // khởi tạo connection 
                MySqlConnection mySqlConnection = new MySqlConnection(connectionString);
                // khởi tạo đối tượng mySqlCommand cho phép thao tác truy vấn với csdl
                MySqlCommand mySqlCommand = mySqlConnection.CreateCommand();
                mySqlCommand.CommandText = "SELECT * FROM employee";
                mySqlConnection.Open();
                // thực thi công việc với database
                MySqlDataReader mySqlDataReader = mySqlCommand.ExecuteReader();
                // xử lý dữ liệu trả về
                while (mySqlDataReader.Read())
                {
                    var employeesNew = new Employee();
                    for (int i = 0; i < mySqlDataReader.FieldCount; i++)
                    {
                        // lay cot du liệu đang đọc
                        var colName = mySqlDataReader.GetName(i);
                        // lấy giá trị dữ liệu 
                        var value = mySqlDataReader.GetValue(i);
                        var property = employeesNew.GetType().GetProperty(colName);
                        // nếu có propety tương ứng với tên cột thì gán giá trị tương ứng
                        if (property != null && value != DBNull.Value)
                        {
                            property.SetValue(employeesNew, value);
                        }
                    }

                    // them đối tượng khách hàng
                    employees.Add(employeesNew);
                }
                mySqlConnection.Close();
                return employees;
            }


        // lấy dữ liệu thông tin nhân viên 
        [Route("{EmployeeCode}")]
        public Employee GetEmployee(string EmployeeCode)
        {
            string connectionString = @"Server=3.0.89.182;Port=3306;Database=WDT.2022.Thinh;Uid=dev;Pwd=12345678;";
            MySqlConnection mySqlConnection = new MySqlConnection(connectionString);
            MySqlCommand mySqlCommand = mySqlConnection.CreateCommand();
            mySqlCommand.CommandText = "SELECT EmployeeCode,EmployeeName,DateOfBirth,Gender,IdentityNumber,IdentityNumber,IdentityIssuedPlace,IdentityIssuedDate,Email,PositionName,PhoneNumber,DepartmentName,Address,BankAccount,NameBankAccount,branch FROM employee where EmployeeCode = @EmployeeCode";
            // Parameters gọi đến tham số biến được cung cấp thông qua EmployeeCode
            mySqlCommand.Parameters.AddWithValue("@EmployeeCode", EmployeeCode);
            mySqlConnection.Open();
            // thực thi công việc với database
            MySqlDataReader mySqlDataReader = mySqlCommand.ExecuteReader();
            while (mySqlDataReader.Read())
            {
                var employeesNew = new Employee();
                for (int i = 0; i < mySqlDataReader.FieldCount; i++)
                {
                    // lay cot du liệu đang đọc
                    var colName = mySqlDataReader.GetName(i);
                    // lấy giá trị dữ liệu 
                    var value = mySqlDataReader.GetValue(i);
                    var property = employeesNew.GetType().GetProperty(colName);
                    if (property != null && value != DBNull.Value)
                    {
                        property.SetValue(employeesNew, value);
                    }
                }
                return employeesNew;
            }
            mySqlConnection.Close();
            return null;
        }
        // thực hiện thêm nhân viên
        [Route("")]
        public int Post([FromBody] Employee employee)
        {
            var employees = new List<Employee>();
            string connectionString = @"Server=3.0.89.182;Port=3306;Database=WDT.2022.Thinh;Uid=dev;Pwd=12345678;";
            MySqlConnection mySqlConnection = new MySqlConnection(connectionString);
            MySqlCommand mySqlCommand = mySqlConnection.CreateCommand();
            mySqlCommand.CommandText = "INSERT INTO employee (EmployeeCode, EmployeeName, DateOfBirth, Gender, IdentityNumber, IdentityIssuedPlace, IdentityIssuedDate, Email, PositionName, PhoneNumber, DepartmentName, Address, BankAccount, NameBankAccount, branch) " +
                    "VALUES (@EmployeeCode, @EmployeeName, @DateOfBirth, @Gender, @IdentityNumber, @IdentityIssuedPlace, @IdentityIssuedDate, @Email, @PositionName, @PhoneNumber, @DepartmentName, @Address, @BankAccount, @NameBankAccount, @branch);";
            // Parameters gọi đến tham số biến được cung cấp
            mySqlCommand.Parameters.AddWithValue("@EmployeeCode", employee.EmployeeCode);
            mySqlCommand.Parameters.AddWithValue("@EmployeeName", employee.EmployeeName);
            mySqlCommand.Parameters.AddWithValue("@DateOfBirth", employee.DateOfBirth);
            mySqlCommand.Parameters.AddWithValue("@Gender", employee.Gender);
            mySqlCommand.Parameters.AddWithValue("@IdentityNumber", employee.IdentityNumber);
            mySqlCommand.Parameters.AddWithValue("@IdentityIssuedPlace", employee.IdentityIssuedPlace);
            mySqlCommand.Parameters.AddWithValue("@IdentityIssuedDate", employee.IdentityIssuedDate);
            mySqlCommand.Parameters.AddWithValue("@Email", employee.Email);
            mySqlCommand.Parameters.AddWithValue("@PositionName", employee.PositionName);
            mySqlCommand.Parameters.AddWithValue("@PhoneNumber", employee.PhoneNumber);
            mySqlCommand.Parameters.AddWithValue("@DepartmentName", employee.DepartmentName);
            mySqlCommand.Parameters.AddWithValue("@Address", employee.Address);
            mySqlCommand.Parameters.AddWithValue("@BankAccount", employee.BankAccount);
            mySqlCommand.Parameters.AddWithValue("@NameBankAccount", employee.NameBankAccount);
            mySqlCommand.Parameters.AddWithValue("@branch", employee.branch);
            mySqlConnection.Open();
            var result = mySqlCommand.ExecuteNonQuery();
            mySqlConnection.Close();
            return result;
        }

        // thực hiên sửa thông tin nhân viên 
        [Route("")]
        public int Put([FromBody] Employee employee)
        {
            var employees = new List<Employee>();
            string connectionString = @"Server=3.0.89.182;Port=3306;Database=WDT.2022.Thinh;Uid=dev;Pwd=12345678;";
            MySqlConnection mySqlConnection = new MySqlConnection(connectionString);
            MySqlCommand mySqlCommand = mySqlConnection.CreateCommand();
            mySqlCommand.CommandText = "UPDATE employee " +
                    "SET EmployeeName = @EmployeeName, " +
                    "DateOfBirth = @DateOfBirth, " +
                    "Gender = @Gender, " +
                    "IdentityNumber = @IdentityNumber, " +
                    "IdentityIssuedPlace = @IdentityIssuedPlace, " +
                    "IdentityIssuedDate = @IdentityIssuedDate, " +
                    "Email = @Email, " +
                    "PositionName = @PositionName, " +
                    "PhoneNumber = @PhoneNumber, " +
                    "DepartmentName = @DepartmentName, " +
                    "Address = @Address, " +
                    "BankAccount = @BankAccount, " +
                    "NameBankAccount = @NameBankAccount, " +
                    "branch = @branch " +
                    "WHERE EmployeeCode = @EmployeeCode;";
            // Parameters gọi đến tham số biến được cung cấp
            mySqlCommand.Parameters.AddWithValue("@EmployeeCode", employee.EmployeeCode);
            mySqlCommand.Parameters.AddWithValue("@EmployeeName", employee.EmployeeName);
            mySqlCommand.Parameters.AddWithValue("@DateOfBirth", employee.DateOfBirth);
            mySqlCommand.Parameters.AddWithValue("@Gender", employee.Gender);
            mySqlCommand.Parameters.AddWithValue("@IdentityNumber", employee.IdentityNumber);
            mySqlCommand.Parameters.AddWithValue("@IdentityIssuedPlace", employee.IdentityIssuedPlace);
            mySqlCommand.Parameters.AddWithValue("@IdentityIssuedDate", employee.IdentityIssuedDate);
            mySqlCommand.Parameters.AddWithValue("@Email", employee.Email);
            mySqlCommand.Parameters.AddWithValue("@PositionName", employee.PositionName);
            mySqlCommand.Parameters.AddWithValue("@PhoneNumber", employee.PhoneNumber);
            mySqlCommand.Parameters.AddWithValue("@DepartmentName", employee.DepartmentName);
            mySqlCommand.Parameters.AddWithValue("@Address", employee.Address);
            mySqlCommand.Parameters.AddWithValue("@BankAccount", employee.BankAccount);
            mySqlCommand.Parameters.AddWithValue("@NameBankAccount", employee.NameBankAccount);
            mySqlCommand.Parameters.AddWithValue("@branch", employee.branch);
            mySqlConnection.Open();
            // mySqlCommand.ExecuteNonQuery trả về kết quả số dòng bị ảnh hưởng truy vấn xóa hoặc sửa
            var update = mySqlCommand.ExecuteNonQuery();
            var employeeEdit = Employee.EmployeeList.Where(e => e.EmployeeCode == employee.EmployeeCode).FirstOrDefault();
            Employee.EmployeeList.Remove(employeeEdit);
            Employee.EmployeeList.Add(employee);
            mySqlConnection.Close();
            return update;
        }
        // thực hiện xóa thông tin nhân viên thông qua ID nhân viên
        [HttpDelete]
        [Route("{EmployeeCode}")]
        public int Delete(string EmployeeCode)
        {
            var employees = new List<Employee>();
            string connectionString = @"Server=3.0.89.182;Port=3306;Database=WDT.2022.Thinh;Uid=dev;Pwd=12345678;";
            MySqlConnection mySqlConnection = new MySqlConnection(connectionString);
            MySqlCommand mySqlCommand = mySqlConnection.CreateCommand();
            mySqlCommand.CommandText = "DELETE FROM employee WHERE EmployeeCode = @EmployeeCode";
            mySqlCommand.Parameters.AddWithValue("@EmployeeCode", EmployeeCode);
            mySqlConnection.Open();
            // mySqlCommand.ExecuteNonQuery trả về kết quả số dòng bị ảnh hưởng truy vấn xóa hoặc sửa
            var result = mySqlCommand.ExecuteNonQuery();
            mySqlConnection.Close();
            return result;
        }


    }
    
}
