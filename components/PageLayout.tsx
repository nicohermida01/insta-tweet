import { Topbar } from 'components/Topbar'
import { Navbar } from 'components/Navbar'

interface IPageLayoutProps {
	children: React.ReactNode
	withNav?: boolean
}

export function PageLayout({ children, withNav }: IPageLayoutProps) {
	return (
		<body className='bg-background-black text-white'>
			<Topbar />

			<main className='p-4'>{children}</main>

			{withNav && <Navbar />}
		</body>
	)
}
