/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#6C5DD3',
				secondary: '#0049C6',
				'background-black': '#1B1D21',
				'topbar-background-black': '#21262d',
				'text-secondary': '#7D8187',
				'google-red': '#E94235',
			},
		},
	},
	plugins: [],
}
