'use client'

import { cn } from '@/lib/utils'
import { PrayerItem } from '@/types/prayer.types'
import { useState } from 'react'

export default function PrayerViewer({
	title,
	data,
	storageKey = 'lastReadIndex',
}: {
	title: string
	data: PrayerItem[]
	storageKey?: string
}) {
	const [lastReadIndex, setLastReadIndex] = useState<number | null>(() => {
		if (typeof window === 'undefined') return null
		const savedIndex = localStorage.getItem(storageKey)
		return savedIndex ? parseInt(savedIndex) : null
	})

	const markAsLastRead = (index: number) => {
		setLastReadIndex(index)
		localStorage.setItem(storageKey, index.toString())
	}

	return (
		<div className="min-h-screen py-10">
			<h1 className="text-4xl font-bold text-center text-primary mb-8">{title}</h1>

			<div className="max-w-2xl mx-auto px-4">
				{data.map((item, index) => (
					<div
						onClick={() => markAsLastRead(index)}
						key={index}
						className={cn(
							'p-4 rounded-xl border-2 transition cursor-pointer',
							lastReadIndex === index ? 'border-border py-4 bg-secondary' : 'border-transparent',
						)}>
						{item.type === 'doha' ?
							<h2 className="text-3xl font-semibold text-center text-orange-600">{item.lines[0]}</h2>
						:	<p className="text-center leading-loose text-2xl whitespace-pre-line">{item.lines.join('\n')}</p>}
					</div>
				))}
			</div>
		</div>
	)
}
