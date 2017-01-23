/**
 * @function formatMoney
 * @description Formats a number to a money string.
 * @param   {Number} number   Value to convert to money string.
 * @param   {Number} spaces   Ammount of numbers after the comma.
 * @param   {String} decimal  Decimal symbol string.
 * @param   {String} thousand Thousand symbol string.
 * @returns {String} Formatted number as money.
 */
export const formatMoney = (number, spaces=2, decimal=',', thousand='.') => {
	const sign = number < 0 ? '-' : ''
	const integer = String(parseInt(number = Math.abs(Number(number) || 0), 10).toFixed(spaces))
	const length = integer.length > 3 ? integer.length % 3 : 0;
	return (
		sign +
		(length ? integer.substr(0, length) + thousand : '') +
		integer.substr(length).replace(/(\d{3})(?=\d)/g, '$1' + thousand) +
		(spaces ? decimal + Math.abs(number - integer).toFixed(spaces).slice(2) : '')
	)
}