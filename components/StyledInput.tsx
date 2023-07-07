import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react'

interface IStyledInputProps {
	type: HTMLInputTypeAttribute
	id: string
	value: string
	onChangeFn: ChangeEventHandler<HTMLInputElement>
	placeholder?: string
	isRequired?: boolean
}

export function StyledInput({
	type,
	id,
	value,
	onChangeFn,
	placeholder,
	isRequired,
}: IStyledInputProps) {
	return (
		<input
			type={type}
			placeholder={placeholder}
			id={id}
			required={isRequired}
			value={value}
			onChange={onChangeFn}
			className='w-full bg-transparent border-2 border-text-secondary rounded py-[12px] pl-[12px] focus:outline-none'
		/>
	)
}
