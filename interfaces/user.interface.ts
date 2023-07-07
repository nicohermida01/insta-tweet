import { IAbstract } from './abstract.interface'

export interface IUser extends IAbstract {
	username: string
	name?: string
}
