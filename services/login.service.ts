import { IUserAuth } from 'interfaces/auth.interface'
import { API_BASE_URL } from 'services/tweet.service'

interface ILoginDTO {
	username: string
	password: string
}

interface ErrorResponse {
	error: string
}

export type TLoginResponse = IUserAuth | ErrorResponse

const login = async (loginDto: ILoginDTO): Promise<TLoginResponse> => {
	const res = await fetch(`${API_BASE_URL}/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(loginDto),
	})

	return res.json()
}

export const loginService = {
	login,
}
