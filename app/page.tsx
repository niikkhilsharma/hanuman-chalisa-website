import PrayerCard from '@/components/prayer-card'

export default function Home() {
	const prayers = [
		{
			id: 1,
			title: 'Hanuman Chalisa',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			route: '/hanuman-chalisa',
			imageUrl: '/assets/images/prayers/hanuman-chalisa.jpg',
			prayerUrl: '/hanuman-chalisa',
		},
	]

	return (
		<div className="min-h-screen p-4 sm:p-6">
			<PrayerCard prayers={prayers} />
		</div>
	)
}
