/**
 * @function formatMoney
 * @description Formats a number to a money string.
 * @param   {Number} number   Value to convert to money string.
 * @param   {Number} spaces   Ammount of numbers after the comma.
 * @param   {String} decimal  Decimal symbol string.
 * @param   {String} thousand Thousand symbol string.
 * @returns {String} Formatted number as money.
 */
export const formatMoney = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}