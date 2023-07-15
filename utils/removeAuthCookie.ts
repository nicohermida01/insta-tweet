import { cookies } from 'ssot/cookies'

const REMOVE_COOKIE_STRING = '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'

export const removeAuthCookie = () => {
	document.cookie = cookies.LOGGED_USER + REMOVE_COOKIE_STRING
}
