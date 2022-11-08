/**
 * @description: Hàm này dùng để format số thập phân về dạng số nguyên
 * @param: {number} number - Số thập phân
 * @return: {number} - Số nguyên
 * Author: NSDThinh 14/09/2022
 */
export function formatNumber(number) {
  return Math.round(number);
}

/**
 * @description: Hàm này dùng để format ngày giờ từ dạng timestamp sang dạng dd/mm/yyyy
 * @param: {number} timestamp - Thời gian dạng timestamp
 * @return: {string} - Thời gian dạng dd/mm/yyyy
 * Author: NSDThinh 14/09/2022
 */
export function formatDate(timestamp) {
  const date = new Date(timestamp);
  let day = date.getDate();
  day = day < 10 ? `0${day}` : day;
  let month = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
export default {
  formatNumber,
  formatDate,
};
