'use client'

import { useState, useEffect } from 'react'
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { HugeiconsIcon } from '@hugeicons/react'
import { LinkForwardIcon } from '@hugeicons/core-free-icons'

export default function PrayerCard({
	prayers,
}: {
	prayers: { id: number; title: string; description: string; route: string; imageUrl: string; prayerUrl: string }[]
}) {
	const [lastReadPrayerId, setLastReadPrayerId] = useState<number | null>(null)

	useEffect(() => {
		const storedPrayerId = localStorage.getItem('lastReadPrayerId')
		if (storedPrayerId) {
			setLastReadPrayerId(parseInt(storedPrayerId))
		}
	}, [])

	const handleCardClick = (prayerId: number) => {
		localStorage.setItem('lastReadPrayerId', prayerId.toString())
		setLastReadPrayerId(prayerId)
	}

	return (
		<>
			{prayers.map(prayer => (
				<Card key={prayer.id} className="relative pt-0">
					<div className="max-h-58 overflow-hidden">
						<Image
							src={prayer.imageUrl}
							alt={prayer.title}
							width={400}
							height={300}
							className="w-full object-cover hover:scale-110 transition-transform ease-in-out"
						/>
					</div>

					<CardHeader>
						<CardTitle>{prayer.title}</CardTitle>
						<CardDescription className="col-span-2">{prayer.description}</CardDescription>
						<CardAction>{prayer.id === lastReadPrayerId && <Badge variant="secondary">Last read</Badge>}</CardAction>
					</CardHeader>
					{/* <CardContent>
							<p>{prayer.description}</p>
						</CardContent> */}
					<CardFooter onClick={() => handleCardClick(prayer.id)}>
						<Link href={prayer.prayerUrl} className={cn(buttonVariants({ variant: 'default' }), 'w-full')}>
							Read Now <HugeiconsIcon icon={LinkForwardIcon} size={24} color="currentColor" strokeWidth={1.5} />
						</Link>
					</CardFooter>
				</Card>
			))}
		</>
	)
}
