import { ITweet } from 'interfaces/tweet.interface'

export const API_BASE_URL = 'http://localhost:8000/api/v1'

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

const createTweet = () => {}

const updateTweet = () => {}

export const tweetService = {
	getAllTweets,
	createTweet,
	updateTweet,
}
