import { IAbstract } from 'interfaces/abstract.interface'
import { IUser } from 'interfaces/user.interface'

export interface ITweet extends IAbstract {
	user: IUser
	content: string
}
