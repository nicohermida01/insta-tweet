import { ITweet } from 'interfaces/tweet.interface'
import { getAuthCookie } from 'utils/getAuthCookie'

export const API_BASE_URL = 'http://localhost:8000/api/v1'

interface ICreateTweetDTO {
	content: string
}

const getAllTweets = async (): Promise<ITweet[] | []> => {
	const res = await fetch(`${API_BASE_URL}/tweets`, {
		method: 'GET',
	})

	if (!res.ok) {
		/* Handle error */
		return []
	}

	return res.json()
}

const createTweet = async (dto: ICreateTweetDTO) => {
	const authToken = getAuthCookie().token

	const res = await fetch(`${API_BASE_URL}/tweets`, {
		method: 'POST',
		body: JSON.stringify(dto),
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${authToken}`,
		},
	})

	return res.json()
}

const updateTweet = () => {}

export const tweetService = {
	getAllTweets,
	createTweet,
	updateTweet,
}
