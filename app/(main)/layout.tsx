import { PropsWithChildren } from 'react'

import 'app/globals.css'
import { PageLayout } from 'components/PageLayout'

export const APP_NAME = 'InstaTweet'

export const metadata = {
	title: APP_NAME,
	description:
		'Experience the freedom of expression without barriers. Our application offers you a safe space where you can share your ideas, regardless of your background, gender, or beliefs. All viewpoints are welcome.',
	keyword: 'social network,sharing ideas, ...',
}

export default function RootLayoutMain({ children }: PropsWithChildren) {
	return (
		<html lang='en'>
			<PageLayout withNav>{children}</PageLayout>
		</html>
	)
}
