export const getAuthToken = () => {
	const loggedUser = document.cookie.split('=')
	return JSON.parse(loggedUser[1]).token
}
