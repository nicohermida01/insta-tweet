import { IAbstract } from 'interfaces/abstract.interface'
import { ITweet } from 'interfaces/tweet.interface'

export interface IUser extends IAbstract {
	username: string
	name?: string
}

interface IUserTweet extends IAbstract {
	content: string
}

export interface IUserPopulated extends IUser {
	tweets: IUserTweet[]
}
