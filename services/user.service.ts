import { API_BASE_URL } from './tweet.service'

interface ICreateUserDTO {
	username: string
	password: string
	name?: string
}

const createUser = async (dto: ICreateUserDTO) => {
	const res = await fetch(`${API_BASE_URL}/users`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(dto),
	})

	return res.json()
}

const updateUser = () => {}

export const userService = {
	createUser,
	updateUser,
}
