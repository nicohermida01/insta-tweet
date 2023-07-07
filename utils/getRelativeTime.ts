type TDateUnits = {
	[key: string]: number
}

const DATE_UNITS: TDateUnits = {
	// in seconds
	year: 31536000,
	month: 2629800,
	day: 86400,
	hour: 3600,
	minute: 60,
	second: 1,
}

const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

export const getRelativeTime = (timestamp: string | number | Date) => {
	const from = new Date(timestamp).getTime()
	const now = new Date().getTime()

	const elapsed = (from - now) / 1000

	for (const unit in DATE_UNITS) {
		if (Math.abs(elapsed) > DATE_UNITS[unit]) {
			return rtf.format(Math.floor(elapsed / DATE_UNITS[unit]), unit)
		}
	}

	// If less than one second, the  is now
	return rtf.format(0, 'second')
}
