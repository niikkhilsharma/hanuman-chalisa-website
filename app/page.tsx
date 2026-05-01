import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button, buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { cn } from '@/lib/utils'

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
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{prayers.map(prayer => (
					<Card key={prayer.id} className="relative">
						<Image src={prayer.imageUrl} alt={prayer.title} width={400} height={300} />

						<CardHeader>
							<CardTitle>{prayer.title}</CardTitle>
							<CardDescription className="col-span-2">{prayer.description}</CardDescription>
							<CardAction>
								<Badge variant="secondary">Featured</Badge>
							</CardAction>
						</CardHeader>
						{/* <CardContent>
							<p>{prayer.description}</p>
						</CardContent> */}
						<CardFooter>
							<Link href={prayer.prayerUrl} className={cn(buttonVariants({ variant: 'default' }), 'w-full')}>
								Read Now
							</Link>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	)
}
