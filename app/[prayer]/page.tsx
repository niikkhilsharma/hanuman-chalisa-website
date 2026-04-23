import { prayers } from '@/lib/prayers'
import PrayerViewer from '@/components/PrayerViewer'

export default async function PrayerPage({ params }: { params: Promise<{ prayer: string }> }) {
	const { prayer } = await params
	const prayerData = prayers[prayer]

	if (!prayerData || !prayerData.items || prayerData.items.length === 0) {
		return <div>Prayer not found</div>
	}

	return <PrayerViewer title={prayerData.title} data={prayerData.items} />
}
