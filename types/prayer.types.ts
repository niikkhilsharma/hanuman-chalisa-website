export interface PrayerItem {
	type: 'doha' | 'chaupai'
	lines: string[]
}

export interface Prayer {
	title: string
	items: PrayerItem[]
}
