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
		<div className="min-h-screen bg-[#1a0e08] text-[#f5e6d3]">
			{/* Header */}
			<header className="text-center pt-20 pb-4">
				<div className="text-5xl mb-3 text-[#ff9800]">ॐ</div>
				<h1 className="text-5xl md:text-7xl font-bold tracking-wide text-[#ffe0b2]">Prarthana</h1>
				<p className="text-lg md:text-xl italic text-[#c49a6c] mt-2 tracking-widest">A sanctuary for sacred verses</p>
			</header>

			{/* Divider */}
			<div className="flex items-center justify-center gap-4 mx-auto my-8 max-w-[300px]">
				<span className="flex-1 h-px bg-[#8b5e3c]" />
				<span className="text-sm text-[#c49a6c]">✦</span>
				<span className="flex-1 h-px bg-[#8b5e3c]" />
			</div>

			{/* Intro */}
			<section className="max-w-xl mx-auto mb-12 text-center px-6">
				<p className="text-[17px] leading-7 font-light text-[#bfa07a]">
					Immerse yourself in timeless devotional hymns. Read, recite, and reconnect with the divine through sacred prayers passed
					down through generations.
				</p>
			</section>

			{/* Sacred Prayers */}
			<section className="max-w-3xl mx-auto mb-16 px-6">
				<h2 className="text-3xl font-semibold text-center mb-8 tracking-wide text-[#ffe0b2]">Sacred Prayers</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
					{prayers.map(prayer => (
						<a
							key={prayer.title}
							href={prayer.route}
							className="block rounded-2xl overflow-hidden bg-[#2e1a0e] border border-[#3d2415] hover:-translate-y-1 hover:border-[#ff9800]/30 transition-transform duration-300">
							<div className="py-7 px-6 flex items-center justify-between bg-gradient-to-br from-[#e65100] via-[#bf360c] to-[#8d1c06]">
								<span className="text-4xl">{prayer.symbol}</span>
								<span className="text-[13px] font-medium text-white/85 bg-black/25 px-3 py-1 rounded-full">
									{prayer.verses} verses
								</span>
							</div>
							<div className="p-6 flex flex-col gap-1">
								<h3 className="text-2xl font-bold text-[#ffe0b2]">{prayer.title}</h3>
								<p className="text-sm font-medium text-[#e8a54d]">{prayer.deity}</p>
								<p className="text-[13px] italic text-[#8b6f50] mb-2">{prayer.origin}</p>
								<p className="text-sm leading-relaxed font-light text-[#b08d6c]">{prayer.description}</p>
								<div className="mt-4 text-[15px] font-semibold text-[#ff9800] flex items-center gap-2">
									Read & Recite <span>→</span>
								</div>
							</div>
						</a>
					))}
				</div>
			</section>

			{/* Coming Soon */}
			<section className="max-w-3xl mx-auto mb-16 px-6">
				<h2 className="text-3xl font-semibold text-center mb-8 tracking-wide text-[#ffe0b2]">Coming Soon</h2>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
					{upcomingPrayers.map(p => (
						<div
							key={p.title}
							className="rounded-xl p-5 text-center relative bg-[#2e1a0e]/50 border border-dashed border-[#c49a6c]/20">
							<span className="absolute top-3 right-3 text-[11px] font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-lg text-[#8b6f50] bg-[#8b6f50]/15">
								Soon
							</span>
							<h4 className="text-xl font-semibold text-[#d4b896] mb-1">{p.title}</h4>
							<p className="text-[13px] text-[#8b6f50]">{p.deity}</p>
						</div>
					))}
				</div>
			</section>

			{/* Footer */}
			<footer className="text-center px-6 pt-10 pb-16">
				<div className="text-3xl mb-3 text-[#5a3a20]">ॐ</div>
				<p className="text-base italic tracking-wide text-[#5a3a20]">सर्वे भवन्तु सुखिनः — May all beings be happy</p>
			</footer>
		</div>
	)
}
