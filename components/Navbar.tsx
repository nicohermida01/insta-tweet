import Image from 'next/image'
import Link from 'next/link'

import { ProfileLink } from 'components/ProfileLink'

export function Navbar() {
	return (
		<footer className='fixed bottom-0 left-0 bg-topbar-background-black w-full'>
			<nav>
				<ul className='flex py-3 justify-center gap-10 items-center'>
					<li>
						<Link href='/'>
							<Image
								src='/home.svg'
								alt='Home icon'
								width={24}
								height={24}
								priority
							/>
						</Link>
					</li>
					<li>
						<Link
							className='flex items-center gap-2 bg-primary py-2 px-4 rounded-[32px]'
							href='/tweet/create'
						>
							<span className='text-sm font-bold'>Write</span>
							<Image
								src='/pencil.svg'
								alt='Pencil icon'
								width={24}
								height={24}
								priority
							/>
						</Link>
					</li>
					<li>
						<ProfileLink />
					</li>
				</ul>
			</nav>
		</footer>
	)
}
