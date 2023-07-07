interface ITweetPageProps {
	params: { id: string }
}

export default function TweetPage({ params }: ITweetPageProps) {
	return <div>Tweet id: {params.id}</div>
}
