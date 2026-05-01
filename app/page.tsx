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
		{
			id: 2,
			title: 'Durga Chalisa',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			route: '/durga-chalisa',
			imageUrl: '/assets/images/prayers/durga-chalisa.png',
			prayerUrl: '/durga-chalisa',
		},
	]

	return (
		<div className="min-h-screen p-4 sm:p-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
				<PrayerCard prayers={prayers} />
			</div>
		</div>
	)
}
