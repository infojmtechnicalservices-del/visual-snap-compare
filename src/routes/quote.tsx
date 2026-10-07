import { createFileRoute } from '@tanstack/react-router'
import { ContactPage } from '@/components/jm-contact'
import { pageHead } from '@/lib/jm-seo'

export const Route = createFileRoute('/quote')({
  head: () => pageHead('/quote/', 'Request a Quote | JM Technical Services Cape Town', 'Send your electrical, plumbing, welding or building job details for a quote in Cape Town.'),
  component: () => <ContactPage quote={true} />,
})
