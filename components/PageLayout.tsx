import { Topbar } from 'components/Topbar'
import { Navbar } from 'components/Navbar'
import { ProgressBar } from 'components/ProgressBar'

interface IPageLayoutProps {
	children: React.ReactNode
	withNav?: boolean
}

export function PageLayout({ children, withNav }: IPageLayoutProps) {
	return (
		<body className='bg-background-black text-white'>
			<ProgressBar />

			<Topbar />

			<main className='p-4'>{children}</main>

			{withNav && <Navbar />}
		</body>
	)
}
