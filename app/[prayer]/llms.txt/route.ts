import { NextRequest, NextResponse } from 'next/server'

// Your prayers data — this could come from a DB or CMS too
const prayersData: Record<
	string,
	{
		title: string
		description: string
		language: string
		verses: number
		sections: string[]
	}
> = {
	'hanuman-chalisa': {
		title: 'Hanuman Chalisa',
		description: '40-verse hymn devoted to Lord Hanuman, written by Tulsidas in Awadhi.',
		language: 'Hindi (Awadhi), with English transliteration and translation',
		verses: 40,
		sections: ['Doha (couplets)', 'Chaupai (40 verses)', 'Meaning', 'Transliteration'],
	},
	'shiv-chalisa': {
		title: 'Shiv Chalisa',
		description: '40-verse devotional hymn dedicated to Lord Shiva.',
		language: 'Hindi, with English transliteration and translation',
		verses: 40,
		sections: ['Doha', 'Chaupai (40 verses)', 'Meaning', 'Transliteration'],
	},
	'durga-chalisa': {
		title: 'Durga Chalisa',
		description: '40-verse hymn in praise of Goddess Durga.',
		language: 'Hindi, with English transliteration and translation',
		verses: 40,
		sections: ['Doha', 'Chaupai (40 verses)', 'Meaning', 'Transliteration'],
	},
	// Add more prayers here...
}

export async function GET(request: NextRequest, { params }: { params: { prayer: string } }) {
	const prayer = prayersData[params.prayer]

	if (!prayer) {
		return new NextResponse('Not found', { status: 404 })
	}

	const baseUrl = request.nextUrl.origin
	const pageUrl = `${baseUrl}/${params.prayer}`

	const content = `# ${prayer.title}

> ${prayer.description}

## Language
${prayer.language}

## Content
- Total verses: ${prayer.verses}
- Sections: ${prayer.sections.join(', ')}

## Pages
- ${pageUrl} : Full text with meaning and transliteration

## Canonical URL
${pageUrl}

## Part of
${baseUrl}/llms.txt
`

	return new NextResponse(content, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	})
}
