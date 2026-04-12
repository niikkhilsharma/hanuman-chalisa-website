import { NextRequest, NextResponse } from 'next/server'

const prayers = [
	{ slug: 'hanuman-chalisa', title: 'Hanuman Chalisa' },
	{ slug: 'shiv-chalisa', title: 'Shiv Chalisa' },
	{ slug: 'durga-chalisa', title: 'Durga Chalisa' },
]

export async function GET(request: NextRequest) {
	const baseUrl = request.nextUrl.origin

	const prayerLinks = prayers.map(p => `- [${p.title}](${baseUrl}/${p.slug}/llms.txt)`).join('\n')

	const content = `# Sacred Prayers Collection

> Full text, transliteration, and meaning of Hindu prayers and hymns.

## Available Prayers
${prayerLinks}

## Intended Audience
Devotees, spiritual seekers, students of Sanskrit and Hindi.

## Canonical URL
${baseUrl}
`

	return new NextResponse(content, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	})
}
