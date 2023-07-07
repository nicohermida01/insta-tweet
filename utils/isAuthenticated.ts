export const isAuthenticated = () => {
	const cookies = document.cookie

	if (!cookies) {
		return false
	}

	const loggedUser = cookies.split('=')
	console.log(loggedUser)
}
