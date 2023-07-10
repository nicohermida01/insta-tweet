import { TweetCard } from 'components/TweetCard'
import { tweetService } from 'services/tweet.service'

export default async function IndexPage() {
	const tweets = await tweetService.getAllTweets()

	return (
		<div className='flex flex-col gap-4 items-center'>
			{tweets.length > 0 ? (
				tweets.map(tweet => (
					<TweetCard
						key={tweet.id}
						id={tweet.id}
						content={tweet.content}
						createdAt={tweet.createdAt}
						username={tweet.user.username}
						{...(tweet.user.name ? { name: tweet.user.username } : {})}
					/>
				))
			) : (
				<span className='text-text-secondary'>~ No tweets found ~</span>
			)}
		</div>
	)
}
