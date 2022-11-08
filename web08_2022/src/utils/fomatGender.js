/**
 * @description: Hàm này dùng để convert giới tính từ số sang chuỗi
 * @param: number - Giới tính dạng số
 * @return: string - Giới tính dạng chuỗi
 * Author: NSDThinh 14/09/2022
 */
export function convertGender(number) {
  if (number === 0) {
    return "Nam";
  } else if (number === 1) {
    return "Nữ";
  } else {
    return "Khác";
  }
}
export default {
  convertGender,
};
