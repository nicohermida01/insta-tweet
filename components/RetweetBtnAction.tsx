'use client'

import { RetweetIcon } from 'components/icons/RetweetIcon'
import { MouseEventHandler } from 'react'

export function RetweetActionButton() {
	const handleOnClick: MouseEventHandler<HTMLButtonElement> = event => {
		event.preventDefault()
		event.stopPropagation()
		console.log('retweet')
	}

	return (
		<button
			className='flex items-center gap-2 text-text-secondary tweet-action retweet-action'
			onClick={handleOnClick}
		>
			<div>
				<RetweetIcon height='16' width='16' className='fill-text-secondary' />
			</div>
			<span>30</span>
		</button>
	)
}
