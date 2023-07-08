'use client'

import { useState } from 'react'

import { LogoutModal } from 'components/LogoutModal'

export default function ProfilePage() {
	const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)

	return (
		<div>
			<button
				onClick={() => setIsLogoutModalOpen(true)}
				className='bg-transparent text-google-red font-bold rounded-[32px] text-sm'
			>
				Logout
			</button>

			{isLogoutModalOpen && <LogoutModal setIsOpen={setIsLogoutModalOpen} />}
		</div>
	)
}
