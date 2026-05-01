'use client'

import { useState, useEffect } from 'react'

export default function Home() {
	const durgaChalisa = [
		{
			type: 'doha',
			lines: ['दोहा'],
		},
		{
			type: 'chaupai',
			lines: ['या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता।', 'नमस्तस्यै नमस्तस्यै, नमस्तस्यै नमो नमः।।', 'चौपाई'],
		},
		{
			type: 'chaupai',
			lines: ['नमो नमो दुर्गे सुख करनी।', 'नमो नमो अंबे दुःख हरनी।।'],
		},
		{
			type: 'chaupai',
			lines: ['निरंकार है ज्योति तुम्हारी।', 'तिहूं लोक फैली उजियारी।।'],
		},
		{
			type: 'chaupai',
			lines: ['शशि ललाट मुख महाविशाला।', 'नेत्र लाल भृकुटि विकराला।।'],
		},
		{
			type: 'chaupai',
			lines: ['रूप मातु को अधिक सुहावे।', 'दरश करत जन अति सुख पावे।।'],
		},
		{
			type: 'chaupai',
			lines: ['तुम संसार शक्ति लै कीना।', 'पालन हेतु अन्न धन दीना।।'],
		},
		{
			type: 'chaupai',
			lines: ['अन्नपूर्णा हुई जग पाला।', 'तुम ही आदि सुन्दरी बाला।।'],
		},
		{
			type: 'chaupai',
			lines: ['प्रलयकाल सब नाशन हारी।', 'तुम गौरी शिवशंकर प्यारी।।'],
		},
		{
			type: 'chaupai',
			lines: ['शिव योगी तुम्हरे गुण गावें।', 'ब्रह्मा विष्णु तुम्हें नित ध्यावें।।'],
		},
		{
			type: 'chaupai',
			lines: ['रूप सरस्वती को तुम धारा।', 'दे सुबुद्धि ऋषि मुनिन उबारा।।'],
		},
		{
			type: 'chaupai',
			lines: ['धरयो रूप नरसिंह को अम्बा।', 'परगट भई फाड़कर खम्बा।।'],
		},
		{
			type: 'chaupai',
			lines: ['रक्षा करि प्रह्लाद बचायो।', 'हिरण्याक्ष को स्वर्ग पठायो।।'],
		},
		{
			type: 'chaupai',
			lines: ['लक्ष्मी रूप धरो जग माहीं।', 'श्री नारायण अंग समाहीं।।'],
		},
		{
			type: 'chaupai',
			lines: ['क्षीरसिन्धु में करत विलासा।', 'दयासिन्धु दीजै मन आसा।।'],
		},
		{
			type: 'chaupai',
			lines: ['हिंगलाज में तुम्हीं भवानी।', 'महिमा अमित न जात बखानी।।'],
		},
		{
			type: 'chaupai',
			lines: ['मातंगी धूमावति माता।', 'भुवनेश्वरी बगला सुख दाता।।'],
		},
		{
			type: 'chaupai',
			lines: ['श्री भैरवी तारा जग तारिणी।', 'छिन्न भाल भव दुःख निवारिणी।।'],
		},
		{
			type: 'chaupai',
			lines: ['केहरि वाहन सोहे भवानी।', 'लांगुर वीर चलत अगवानी।।'],
		},
		{
			type: 'chaupai',
			lines: ['कर में खप्पर खड्ग विराजै।', 'जाको देख काल डर भाजै।।'],
		},
		{
			type: 'chaupai',
			lines: ['सोहै अस्त्र और त्रिशूला।', 'जाते उठत शत्रु हिय शूला।।'],
		},
		{
			type: 'chaupai',
			lines: ['नगरकोट में तुम्हीं विराजत।', 'तिहुंलोक में डंका बाजत।।'],
		},
		{
			type: 'chaupai',
			lines: ['शुंभ निशुंभ दानव तुम मारे।', 'रक्तबीज शंखन संहारे।।'],
		},
		{
			type: 'chaupai',
			lines: ['महिषासुर नृप अति अभिमानी।', 'जेहि अघ भार मही अकुलानी।।'],
		},
		{
			type: 'chaupai',
			lines: ['रूप कराल कालिका धारा।', 'सेन सहित तुम तिहि संहारा।।'],
		},
		{
			type: 'chaupai',
			lines: ['परी गाढ़ संतन पर जब जब।', 'भई सहाय मातु तुम तब तब।।'],
		},
		{
			type: 'chaupai',
			lines: ['अमरपुरी अरु बासव लोका।', 'तव महिमा सब रहें अशोका।।'],
		},
		{
			type: 'chaupai',
			lines: ['ज्वाला में है ज्योति तुम्हारी।', 'तुम्हें सदा पूजें नर-नारी।।'],
		},
		{
			type: 'chaupai',
			lines: ['प्रेम भक्ति से जो यश गावें।', 'दुःख दारिद्र निकट नहिं आवें।।'],
		},
		{
			type: 'chaupai',
			lines: ['ध्यावे तुम्हें जो नर मन लाई।', 'जन्म-मरण ताकौ छुटि जाई।।'],
		},
		{
			type: 'chaupai',
			lines: ['जोगी सुर मुनि कहत पुकारी।', 'योग न हो बिन शक्ति तुम्हारी।।'],
		},
		{
			type: 'chaupai',
			lines: ['शंकर आचारज तप कीनो।', 'काम क्रोध जीति सब लीनो।।'],
		},
		{
			type: 'chaupai',
			lines: ['निशिदिन ध्यान धरो शंकर को।', 'काहु काल नहिं सुमिरो तुमको।।'],
		},
		{
			type: 'chaupai',
			lines: ['शक्ति रूप का मरम न पायो।', 'शक्ति गई तब मन पछितायो।।'],
		},
		{
			type: 'chaupai',
			lines: ['शरणागत हुई कीर्ति बखानी।', 'जय जय जय जगदम्ब भवानी।।'],
		},
		{
			type: 'chaupai',
			lines: ['भई प्रसन्न आदि जगदम्बा।', 'दई शक्ति नहिं कीन विलम्बा।।'],
		},
		{
			type: 'chaupai',
			lines: ['मोको मातु कष्ट अति घेरो।', 'तुम बिन कौन हरै दुःख मेरो।।'],
		},
		{
			type: 'chaupai',
			lines: ['आशा तृष्णा निपट सतावें।', 'मोह मदादिक सब बिनसावें।।'],
		},
		{
			type: 'chaupai',
			lines: ['शत्रु नाश कीजै महारानी।', 'सुमिरौं एक चित तुम्हें भवानी।।'],
		},
		{
			type: 'chaupai',
			lines: ['करो कृपा हे मातु दयाला।', 'ऋद्धि-सिद्धि दै करहु निहाला।।'],
		},
		{
			type: 'chaupai',
			lines: ['जब लगि जिऊं दया फल पाऊं।', 'तुम्हरो यश मैं सदा सुनाऊं।।'],
		},
		{
			type: 'chaupai',
			lines: ['दुर्गा चालीसा जो कोई गावै।', 'सब सुख भोग परमपद पावै।।'],
		},
		{
			type: 'chaupai',
			lines: ['देवीदास शरण निज जानी।', 'करहु कृपा जगदम्ब भवानी।।'],
		},
		{
			type: 'doha',
			lines: ['दोहा'],
		},
		{
			type: 'chaupai',
			lines: ['शरणागत रक्षा कर, भक्त रहे निःशंक।', 'मैं आया तेरी शरण में, मातु लीजिए अंक।।'],
		},
	]

	const [lastReadIndex, setLastReadIndex] = useState<number | null>(null)

	useEffect(() => {
		const savedIndex = localStorage.getItem('lastReadIndex')
		if (savedIndex) {
			setLastReadIndex(parseInt(savedIndex))
		}
	}, [])

	const markAsLastRead = (index: number) => {
		setLastReadIndex(index)
		localStorage.setItem('lastReadIndex', index.toString())
	}

	return (
		<>
			<div className="min-h-screen py-10">
				<h1 className="text-4xl font-bold text-center text-primary mb-8">श्री दुर्गा चालीसा</h1>

				<div className="max-w-2xl mx-auto px-4">
					{durgaChalisa.map((item, index) => (
						<div
							onClick={() => markAsLastRead(index)}
							key={index}
							className={`p-4 rounded-xl border-2 transition ${lastReadIndex === index ? 'border-border  py-4 bg-secondary' : 'border-transparent'}`}>
							{item.type === 'doha' ?
								<h2 className="text-3xl font-semibold text-center text-orange-600">{item.lines[0]}</h2>
							:	<p className="text-center leading-loose text-2xl whitespace-pre-line">{item.lines.join('\n')}</p>}
						</div>
					))}
				</div>
			</div>
		</>
	)
}
