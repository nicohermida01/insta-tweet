'use client'

import Link from 'next/link'
import { FormEventHandler, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

import { FormField } from 'components/FormField'
import { PrimaryButton } from 'components/PrimaryButton'
import { StyledInput } from 'components/StyledInput'
import { EyeIcon } from 'components/icons/EyeIcon'
import { EyeSlashIcon } from 'components/icons/EyeSlashIcon'
import { loginService } from 'services/login.service'
import { cookies } from 'ssot/cookies'

const loginNotifications = {
	UNKNOW_ERROR: 'Oh no! Something went wrong. Please try again',
	SUCCESS: 'Logged Successfully!',
	UNAUTHORIZED: 'Invalid username or password',
	INCOMPLETE_FIELDS: 'Please complete all fields',
}

export default function LoginPage() {
	const [usernameInput, setUsernameInput] = useState('')
	const [passwordInput, setPasswordInput] = useState('')

	const [showPassword, setShowPassword] = useState(false)

	const router = useRouter()

	const handleLogin: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()

		if (usernameInput === '' || passwordInput === '') {
			toast.error(loginNotifications.INCOMPLETE_FIELDS)
			return
		}

		loginService
			.login({ username: usernameInput, password: passwordInput })
			.then(res => {
				if (res.error) {
					toast.error(loginNotifications.UNAUTHORIZED)
					return
				}

				document.cookie = `${cookies.LOGGED_USER}=${JSON.stringify(res)}`

				toast.success(loginNotifications.SUCCESS)
				setTimeout(() => {
					router.push('/')
				}, 2000)
			})
			.catch(err => {
				console.error(err)
				toast.error(loginNotifications.UNKNOW_ERROR)
			})
			.finally(() => {
				setUsernameInput('')
				setPasswordInput('')
				setShowPassword(false)
			})
	}

	return (
		<div className='mt-[50px] px-[30px]'>
			<Toaster />

			<h1 className='font-bold flex flex-col text-center'>
				<span className='text-xl'>Welcome Back</span>
				<span className='text-sm'>Please sign in to your account</span>
			</h1>

			<form className='flex flex-col gap-5 mt-[20px]' onSubmit={handleLogin}>
				<FormField inputId='username' labelValue='Username'>
					<StyledInput
						type='text'
						placeholder='eg. nicohermida'
						id='username'
						onChangeFn={({ target }) => setUsernameInput(target.value)}
						value={usernameInput}
						isRequired
					/>
				</FormField>

				<FormField inputId='password' labelValue='Password'>
					<div className='relative'>
						<StyledInput
							type={showPassword ? 'text' : 'password'}
							id='password'
							onChangeFn={({ target }) => setPasswordInput(target.value)}
							value={passwordInput}
							isRequired
						/>
						{showPassword ? (
							<EyeIcon
								width={22}
								height={22}
								className='text-text-secondary absolute top-[16px] right-[13px]'
								onClick={() => setShowPassword(false)}
							/>
						) : (
							<EyeSlashIcon
								width={22}
								height={22}
								className='text-text-secondary absolute top-[16px] right-[13px]'
								onClick={() => setShowPassword(true)}
							/>
						)}
					</div>
				</FormField>

				<PrimaryButton text='Login' isSubmit />
			</form>

			<button className='bg-google-red font-bold text-xs py-[12px] rounded w-full mt-[20px]'>
				Login with Google
			</button>

			<div className='flex flex-col text-center mt-[20px]'>
				<span className='text-sm mb-[6px]'>- OR -</span>
				<Link
					href='/register'
					className='text-sm underline text-text-secondary'
				>
					Create new account
				</Link>
			</div>
		</div>
	)
}
