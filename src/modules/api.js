const ApiConstructor = () => {
	let baseURL
	if (process.env.NODE_ENV === 'production')
		baseURL = 'https://kvmveb8o06.execute-api.us-east-1.amazonaws.com/prod/authentication'
	else
		baseURL = 'https://kvmveb8o06.execute-api.us-east-1.amazonaws.com/dev/authentication'
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
		if (!!response.errorMessage) 
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
		fetch(url, options)
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
		})
/**
 * Fetches the user information from the server
 * @param  {String} options.token   Token user credential
 * @param  {String} options.profile Social auth provider.
 * @return {Proomise}               The fetch promise.
 */
	const getProfile = ({token, provider}) =>
		fetchLambda(`${baseURL}/profile/${token}?provider=${provider}`)
	/**
	 * Calls the signup Lambda function.
	 * @param  {Object} data New user data.
	 * @return {Promise}     Lambda call promise.
	 */
	const signupUser = (data) => 
		fetchJSONLambda(`${baseURL}/signup`, data)

	//////////////////
	
	return Object.freeze({
		getProfile,
		signupUser,
		fetchLambda,
		fetchJSONLambda,
		LambdaError,
	})
}

const Api = ApiConstructor()

export default Api
