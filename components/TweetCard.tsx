import Link from 'next/link'
import { getRelativeTime } from 'utils/getRelativeTime'

interface ITweetCardProps {
	id: string
	username: string
	createdAt: Date | string
	content: string
	name?: string
}

export function TweetCard({
	id,
	username,
	createdAt,
	content,
	name,
}: ITweetCardProps) {
	return (
		<Link
			href={`/tweet/${id}`}
			className='bg-topbar-background-black p-4 rounded-md text-[14px] flex flex-col gap-2 w-full'
		>
			<div className='flex justify-between text-[12px] text-text-secondary'>
				<div className='flex gap-1 items-end'>
					<span className='text-white text-sm'>{name}</span>
					<span>{`@${username}`}</span>
				</div>

				<span>{getRelativeTime(createdAt)}</span>
			</div>
			{content}
		</Link>
	)
}
