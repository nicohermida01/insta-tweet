import { LogoutModal } from 'components/LogoutModal'
import { TweetCard } from 'components/TweetCard'
import { userService } from 'services/user.service'
import { getAuthCookie } from 'utils/getAuthCookie'

interface IProfilePageProps {
	params: {
		username: string
	}
}

export default async function ProfilePage({ params }: IProfilePageProps) {
	const { username, name, tweets } = await userService.getUserPopulated(
		params.username
	)

	return (
		<div>
			<div className='flex flex-col mb-[16px]'>
				<span className='font-bold'>{name}</span>
				<span className='text-text-secondary text-sm'>{`@${username}`}</span>
			</div>

			<LogoutModal />

			<ul className='flex gap-[32px] font-bold text-text-secondary my-[16px]'>
				<li className='border-b-[4px] border-primary p-[2px]'>Tweets</li>
				<li>Retweets</li>
				<li>Likes</li>
			</ul>

			<div className='flex flex-col gap-4 items-center'>
				{tweets.length > 0
					? tweets.map(tweet => (
							<TweetCard
								id={tweet.id}
								key={tweet.id}
								content={tweet.content}
								createdAt={tweet.createdAt}
								username={username}
								{...(name ? { name: name } : {})}
							/>
					  ))
					: "You haven't tweeted anything yet"}
			</div>
		</div>
	)
}
