'use client'

import { AppProgressBar } from 'next-nprogress-bar'

export function ProgressBar() {
	return (
		<AppProgressBar
			height='4px'
			color='#6C5DD3'
			options={{ showSpinner: false }}
			shallowRouting
		/>
	)
}
