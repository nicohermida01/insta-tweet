'use client'

import { Toaster, toast } from 'react-hot-toast'

import { PrimaryButton } from 'components/PrimaryButton'
import { FormEventHandler, useState } from 'react'
import { tweetService } from 'services/tweet.service'

const createTweetNotifications = {
	INCOMPLETE_CONTENT: 'Please write something',
	SUCCESS: 'Tweet successfully published!',
}

export default function CreateTweetPage() {
	const [content, setContent] = useState('')

	const handlePublish: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()

		if (content === '') {
			toast.error(createTweetNotifications.INCOMPLETE_CONTENT)
			return
		}

		tweetService
			.createTweet({
				content,
			})
			.then(res => {
				console.log({ res })
				toast.success(createTweetNotifications.SUCCESS)
			})
			.catch(err => {})

		setContent('')
	}

	return (
		<div>
			<Toaster />

			<form
				className=' flex flex-col items-end gap-[16px]'
				onSubmit={handlePublish}
			>
				<textarea
					className='w-full bg-transparent border border-text-secondary rounded-md resize-none h-[200px] p-4 focus:outline-none'
					placeholder='Write something ...'
					value={content}
					onChange={({ target }) => setContent(target.value)}
					required
				/>
				<PrimaryButton text='Publish' />
			</form>
		</div>
	)
}
