import Link from 'next/link'

import { tweetService } from 'services/tweet.service'
import { getRelativeTime } from 'utils/getRelativeTime'

export default async function IndexPage() {
	const tweets = await tweetService.getAllTweets()

	if (!tweets) {
		return <span>No tweets found</span>
	}

	return (
		<div className='flex flex-col gap-4'>
			{tweets.map(tweet => (
				<Link
					href={`/tweet/${tweet.id}`}
					key={tweet.id}
					className='bg-topbar-background-black p-4 rounded-md text-[14px] flex flex-col gap-2'
				>
					<div className='flex justify-between text-[12px] text-text-secondary'>
						<span className=''>{`@${tweet.user.username}`}</span>
						<span>{getRelativeTime(tweet.createdAt)}</span>
					</div>
					{tweet.content}
				</Link>
			))}
		</div>
	)
}
