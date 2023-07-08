/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/',
				missing: [
					{
						type: 'cookie',
						key: 'loggedUser',
					},
				],
				permanent: false,
				destination: '/login',
			},
			{
				source: '/profile',
				missing: [
					{
						type: 'cookie',
						key: 'loggedUser',
					},
				],
				permanent: false,
				destination: '/login',
			},
			{
				source: '/tweet/:path',
				missing: [
					{
						type: 'cookie',
						key: 'loggedUser',
					},
				],
				permanent: false,
				destination: '/login',
			},
		]
	},
}

module.exports = nextConfig
