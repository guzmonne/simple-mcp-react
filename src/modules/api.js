const ApiConstructor = () => {
	let baseURL
	if (process.env.NODE_ENV === 'production')
		baseURL = 'https://u34nae5h40.execute-api.us-east-1.amazonaws.com/dev/v1/auth'
	else
		baseURL = 'http://api.conapps.local.com:3001/v1/auth'
	/**	
	 * This was taken from Mozilla's Documentation.
	 * Special error method to handle errors returning from Lambda
	 * @param {Object} response Lambda response object.
	 */
	function LambdaError(response) {
		this.name = 'LambdaError'
		this.message = response.errorMessage
		this.stack = response.stackTrace
	}
	/**
	 * Set LambdaError prototype to the Error.prototype
	 * @type {Error}
	 */
	LambdaError.prototype = Object.create(Error.prototype)
	/**
	 * Set the constructor to LambdaError
	 * @type {LambdaError}
	 */
	LambdaError.prototype.constructor = LambdaError
	/**
	 * Checks the lambda response object for an error
	 * message.
	 * @param  {Object} response    Lambda response
	 * @return {Object|LambdaError} The response object or an Error
	 */
	const checkError = (response) => {
		if (!!response.errorMessage || !!response.error) 
			throw new LambdaError(response)
		else
			return response
	}
	/**
	 * Takes fetch response and grabs the body of the response.
	 * @param  {Object} response Fetch json response body.
	 * @return {Object}          JSON response body.
	 */
	const parseJSON = (response) => response.json()
	/**
	 * Wrapper function around fetch to simplify calls to
	 * Lambda functions through API Gateway
	 * @param  {String} url     URL.
	 * @param  {Object} options Fetch options.
	 * @return {Promise}        The fetch promise.
	 */
	const fetchLambda = (url, options) =>
		fetch(url, Object.assign({}, options, {credentials: 'include'}))
			.then(parseJSON)
			.then(checkError)
	/**
	 * Wrapper function around fetchLambda to simplify calls
	 * to Lambda functions asking for JSON objects providing 
	 * some information inside the body..
	 * @param  {String} url            Lambda function URL.
	 * @param  {Any}    body           Fetch JSON body.
	 * @param  {String} options.method One of POST, GET, PUT, DESTROY
	 * @return {Promise}               The fetch promise.
	 */
	const fetchJSONLambda = (url, body, options) => 
		fetchLambda(url, {
			method: !!options && !!options.method ? options.method : 'POST',
			headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },
			body: JSON.stringify(body),
			credentials: 'include',
		})
	/**
	 * Convert a camelized string into a lowercased one with a custom separator
	 * Example: unicornRainbow → unicorn_rainbow
	 * @param  {String} string    String to convert.
	 * @param  {String} separator Separator.
	 * @return {String}           Decamelized string.
	 */
	const decamelize = (string, separator) => {
		if (typeof string !== 'string') {
			throw new TypeError('Expected a string');
		}
		separator = typeof separator === 'undefined' ? '_' : separator;
		return string
			.replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
			.replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
			.toLowerCase();
	}
	/**
	 * Creates &amp; separated params string
	 * @param params {object}
	 */
	const urlParams = (params) => Object.keys(params)
		.reduce((result, key) => {
			const decamelKey = decamelize(key)
			const value      = params[key]
			return params.hasOwnProperty(key) ? 
				result.concat(`${decamelKey}=${value}`) : result
		}, [])
		.join('&')
	/**
	 * Creates url with params
	 * @param url {string} url base
	 * @param params {object} url params
	 */
	const urlBuilder = (url, params) => `${url}?${urlParams(params)}`
	/**
	 * Fetches the user information from the server
	 * @param  {String} options.token   Token user credential
	 * @param  {String} options.profile Social auth provider.
	 * @return {Proomise}               The fetch promise.
	 */
	const getProfile = () =>
		fetchLambda(`${baseURL}/profile`)
	/**
	 * Calls the signup Lambda function.
	 * @param  {Object} data New user data.
	 * @return {Promise}     Lambda call promise.
	 */
	const signupUser = (data, query) => 
		fetchJSONLambda(urlBuilder(`${baseURL}/signup`, query), data)
	/**
	 * Calls the login Lambda function.
	 * @param  {Object} data New user data.
	 * @return {Promise}     Lambda call promise.
	 */
	const loginUser = (data, query) =>
		fetchJSONLambda(urlBuilder(`${baseURL}/login`, query), data)
	/**
	 * Redirects the user to the providers login page.
	 * @param  {String} provider Provider name.
	 * @param  {Object} query    Querystring to store on the DB.
	 * @return {Void}
	 */
	const socialLogin = (provider, query) =>
		location.href = urlBuilder(`${baseURL}/${provider}`, query)

	//////////////////
	
	return Object.freeze({
		getProfile,
		signupUser,
		loginUser,
		fetchLambda,
		fetchJSONLambda,
		LambdaError,
		urlBuilder,
		socialLogin,
	})
}

const Api = ApiConstructor()

export default Api
