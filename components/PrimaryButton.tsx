interface IPrimaryButtonProps {
	text: string
	isSubmit?: boolean
}

export function PrimaryButton({ text, isSubmit }: IPrimaryButtonProps) {
	return (
		<button
			className='font-bold bg-primary text-xs p-[12px] rounded'
			{...(isSubmit ? { type: 'submit' } : {})}
		>
			{text}
		</button>
	)
}
