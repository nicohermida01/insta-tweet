'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { removeAuthCookie } from 'utils/removeAuthCookie'

export function LogoutModal() {
	const [isOpen, setIsOpen] = useState(false)

	const router = useRouter()

	const handleLogout = () => {
		removeAuthCookie()
		router.push('/login')
	}

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className='bg-transparent text-google-red font-bold rounded-[32px] text-sm'
			>
				Logout
			</button>

			{isOpen && (
				<div className='w-screen h-screen bg-[rgba(0,0,0,.7)] z-10 p-[16px] absolute top-0 left-0 grid items-center'>
					<div className='bg-topbar-background-black p-[16px] rounded h-[160px] flex flex-col justify-between'>
						<p className='text-google-red'>
							Are you sure you want to close the session?
						</p>
						<div className='text-sm flex justify-end gap-[10px]'>
							<button
								onClick={() => setIsOpen(false)}
								className='py-[4px] px-[10px] rounded-[16px]'
							>
								Cancel
							</button>
							<button
								className='font-bold bg-transparent border border-google-red text-google-red py-[4px] px-[10px] rounded-[16px]'
								onClick={handleLogout}
							>
								Logout
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
