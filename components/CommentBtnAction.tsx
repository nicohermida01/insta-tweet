'use client'

import { MouseEventHandler } from 'react'
import { MessageIcon } from './icons/MessageIcon'

export function CommentBtnAction() {
	const handleOnClick: MouseEventHandler<HTMLButtonElement> = event => {
		event.preventDefault()
		event.stopPropagation()
		console.log('comment')
	}

	return (
		<button
			className='flex items-center gap-2 text-text-secondary tweet-action comment-action'
			onClick={handleOnClick}
		>
			<div>
				<MessageIcon height='16' width='16' className='fill-text-secondary' />
			</div>
			<span>10</span>
		</button>
	)
}
