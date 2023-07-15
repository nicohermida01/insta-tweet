import { IUserPopulated } from 'interfaces/user.interface'
import { API_BASE_URL } from 'services/tweet.service'

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

	return await res.json()
}

const getUserPopulated = async (username: string): Promise<IUserPopulated> => {
	const res = await fetch(`${API_BASE_URL}/users/username/${username}`)

	return await res.json()
}

const updateUser = () => {}

export const userService = {
	createUser,
	updateUser,
	getUserPopulated,
}
