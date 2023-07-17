'use client'

import { HeartIcon } from 'components/icons/HeartIcon'
import { MouseEventHandler } from 'react'

export function LikeBtnAction() {
	const handleOnClick: MouseEventHandler<HTMLButtonElement> = event => {
		event.preventDefault()
		event.stopPropagation()
		console.log('like')
	}

	return (
		<button
			className='flex items-center gap-2 text-text-secondary tweet-action like-action'
			onClick={handleOnClick}
		>
			<div>
				<HeartIcon height='16' width='16' className='fill-text-secondary' />
			</div>
			<span>100</span>
		</button>
	)
}
