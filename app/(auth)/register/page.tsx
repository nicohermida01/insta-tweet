'use client'

import Link from 'next/link'
import { FormEventHandler, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

import { FormField } from 'components/FormField'
import { PrimaryButton } from 'components/PrimaryButton'
import { EyeIcon } from 'components/icons/EyeIcon'
import { StyledInput } from 'components/StyledInput'
import { EyeSlashIcon } from 'components/icons/EyeSlashIcon'
import { userService } from 'services/user.service'

const registerNotifications = {
	UNKNOW_ERROR: 'Oh no! Something went wrong. Please try again',
	INCOMPLETE_FIELDS: 'Please complete all fields',
	UNMATCH_PASSWORDS: 'Passwords must be the same',
	SUCCESS: 'Account created successfully!',
}

export default function RegisterPage() {
	const [usernameInput, setUsernameInput] = useState('')
	const [emailInput, setEmailInput] = useState('')
	const [passwordInput, setPasswordInput] = useState('')
	const [repeatPasswordInput, setRepeatPasswordInput] = useState('')
	const [nameInput, setNameInput] = useState('')

	const [showPasswordInput, setShowPasswordInput] = useState(false)
	const [showRepeatPasswordInput, setShowRepeatPasswordInput] = useState(false)

	const router = useRouter()

	const resetForm = () => {
		setUsernameInput('')
		setEmailInput('')
		setPasswordInput('')
		setRepeatPasswordInput('')
		setNameInput('')
		setShowPasswordInput(false)
		setShowRepeatPasswordInput(false)
	}

	const handleRegister: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()

		if (
			usernameInput === '' ||
			passwordInput === '' ||
			repeatPasswordInput === ''
		) {
			// add check for email input
			toast.error(registerNotifications.INCOMPLETE_FIELDS)
			return
		}

		if (passwordInput !== repeatPasswordInput) {
			toast.error(registerNotifications.UNMATCH_PASSWORDS)
			return
		}

		userService
			.createUser({
				username: usernameInput,
				password: passwordInput,
				...(nameInput ? { name: nameInput } : {}),
			})
			.then(res => {
				toast.success(registerNotifications.SUCCESS)
				setTimeout(() => {
					router.push('/login')
				}, 2000)
			})
			.catch(err => {
				console.error(err)
				toast.error(registerNotifications.UNKNOW_ERROR)
			})
	}

	return (
		<div className='mt-[20px] px-[30px]'>
			<Toaster />

			<h1 className='font-bold flex flex-col text-center'>
				<span className='text-xl'>Create an Account</span>
				<span className='text-sm'>Please sign up to start twitting!</span>
			</h1>

			<form className='flex flex-col gap-4 mt-[20px]' onSubmit={handleRegister}>
				<FormField inputId='username' labelValue='Username'>
					<StyledInput
						type='text'
						placeholder=' eg. nicohermida'
						id='username'
						isRequired
						value={usernameInput}
						onChangeFn={({ target }) => setUsernameInput(target.value)}
					/>
				</FormField>

				{/* <FormField inputId='email' labelValue='Email'>
					<StyledInput
						type='email'
						placeholder='eg. nico@correo.com'
						id='email'
						isRequired
						value={emailInput}
						onChangeFn={({ target }) => setEmailInput(target.value)}
					/>
				</FormField> */}

				<FormField inputId='password' labelValue='Password'>
					<div className='relative'>
						<StyledInput
							type={showPasswordInput ? 'text' : 'password'}
							isRequired
							id='password'
							value={passwordInput}
							onChangeFn={({ target }) => setPasswordInput(target.value)}
						/>
						{showPasswordInput ? (
							<EyeIcon
								width={22}
								height={22}
								className='text-text-secondary absolute top-[16px] right-[13px]'
								onClick={() => setShowPasswordInput(false)}
							/>
						) : (
							<EyeSlashIcon
								width={22}
								height={22}
								className='text-text-secondary absolute top-[16px] right-[13px]'
								onClick={() => setShowPasswordInput(true)}
							/>
						)}
					</div>
				</FormField>

				<FormField inputId='password-repeat' labelValue='Repeat Password'>
					<div className='relative'>
						<StyledInput
							type={showRepeatPasswordInput ? 'text' : 'password'}
							isRequired
							id='password-repeat'
							value={repeatPasswordInput}
							onChangeFn={({ target }) => setRepeatPasswordInput(target.value)}
						/>
						{showRepeatPasswordInput ? (
							<EyeIcon
								width={22}
								height={22}
								className='text-text-secondary absolute top-[16px] right-[13px]'
								onClick={() => setShowRepeatPasswordInput(false)}
							/>
						) : (
							<EyeSlashIcon
								width={22}
								height={22}
								className='text-text-secondary absolute top-[16px] right-[13px]'
								onClick={() => setShowRepeatPasswordInput(true)}
							/>
						)}
					</div>
				</FormField>

				<FormField inputId='name' labelValue='Name'>
					<StyledInput
						type='text'
						placeholder='eg. Nicolas Hermida'
						id='name'
						value={nameInput}
						onChangeFn={({ target }) => setNameInput(target.value)}
					/>
				</FormField>

				<PrimaryButton text='Sign Up' isSubmit />
			</form>

			<div className='flex flex-col text-center mt-[20px]'>
				<span className='text-sm mb-[6px]'>- OR -</span>
				<Link href='/login' className='text-sm underline text-text-secondary'>
					Login with an existing account
				</Link>
			</div>
		</div>
	)
}
