'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { getAuthCookie } from 'utils/getAuthCookie'

export function ProfileLink() {
	const [username, setUsername] = useState('')

	useEffect(() => {
		setUsername(getAuthCookie().username)
	}, [])

	return (
		<Link href={`/${username}`}>
			<Image src='/user.svg' alt='User icon' width={24} height={24} priority />
		</Link>
	)
}
