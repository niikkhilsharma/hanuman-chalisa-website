import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

const prayers = [
	{
		title: 'Hanuman Chalisa',
		deity: 'Lord Hanuman',
		origin: 'Tulsidas • Awadhi',
		verses: 40,
		description: 'A devotional hymn of forty verses praising the glory, strength, and divine grace of Lord Hanuman.',
		route: '/hanuman-chalisa',
		symbol: '🙏',
	},
]

const upcomingPrayers = [
	{ title: 'Gayatri Mantra', deity: 'Goddess Gayatri' },
	{ title: 'Shiv Tandav Stotram', deity: 'Lord Shiva' },
	{ title: 'Vishnu Sahasranamam', deity: 'Lord Vishnu' },
]

export default function Home() {
	return (
		<div className="min-h-screen bg-background text-foreground py-4">
			{/* Sacred Prayers */}
			<section className="max-w-3xl mx-auto mb-16 px-6">
				<h2 className="text-3xl font-semibold text-center mb-8 tracking-wide text-foreground">Sacred Prayers</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{prayers.map(prayer => (
						<a key={prayer.title} href={prayer.route}>
							<Card className="pt-0">
								<div className="overflow-hidden h-44">
									<Image
										src={'/assets/photos/prayers/lord-hanuman.jpg'}
										alt={prayer.title}
										width={4000}
										height={6000}
										className="h-44 object-cover object-[center_35%] hover:scale-105 transition-transform duration-300 rounded-t-md"
									/>
								</div>
								<CardHeader>
									<CardTitle className="text-2xl">{prayer.title}</CardTitle>
									<CardDescription className="text-sm font-medium text-primary">{prayer.deity}</CardDescription>
									<p className="text-[13px] italic text-muted-foreground">{prayer.origin}</p>
								</CardHeader>
								<CardContent className="pt-0">
									<p className="text-sm leading-relaxed font-light text-muted-foreground">{prayer.description}</p>
									<Button variant="link" className="mt-3 px-0 text-[15px] font-semibold text-primary">
										Read & Recite <span>→</span>
									</Button>
								</CardContent>
							</Card>
						</a>
					))}
				</div>
			</section>

			{/* Coming Soon */}
			<section className="max-w-3xl mx-auto mb-16 px-6">
				<h2 className="text-3xl font-semibold text-center mb-8 tracking-wide text-foreground">Coming Soon</h2>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
					{upcomingPrayers.map(p => (
						<Card key={p.title} className="p-5 text-center relative border-dashed bg-card/50">
							<Badge
								variant="outline"
								className="absolute top-3 right-3 text-[11px] uppercase tracking-widest text-muted-foreground">
								Soon
							</Badge>
							<CardTitle className="text-xl mb-1">{p.title}</CardTitle>
							<CardDescription className="text-[13px]">{p.deity}</CardDescription>
						</Card>
					))}
				</div>
			</section>
		</div>
	)
}
