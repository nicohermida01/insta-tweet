import { PropsWithChildren } from 'react'

import 'app/globals.css'
import { PageLayout } from 'components/PageLayout'

export default function RootLayoutAuth({ children }: PropsWithChildren) {
	return (
		<html lang='en'>
			<PageLayout>{children}</PageLayout>
		</html>
	)
}
