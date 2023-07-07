import { ReactNode } from 'react'

interface IFormInputProps {
	labelValue: string
	inputId: string
	children: ReactNode
}

export function FormField({ labelValue, inputId, children }: IFormInputProps) {
	return (
		<div className='flex flex-col'>
			<label htmlFor={inputId} className='text-sm mb-2 text-text-secondary'>
				{labelValue}
			</label>
			{children}
		</div>
	)
}
