import { IUserAuth } from 'interfaces/auth.interface'

export const getAuthCookie = (): IUserAuth => {
	const loggedUser = document.cookie.split('=')
	return JSON.parse(loggedUser[1])
}
