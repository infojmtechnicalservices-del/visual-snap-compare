import { createFileRoute } from '@tanstack/react-router'
import { ContactPage } from '@/components/jm-contact'
import { pageHead } from '@/lib/jm-seo'

export const Route = createFileRoute('/contact')({
  head: () => pageHead('/contact/', 'Contact JM Technical Services | Cape Town', 'Call, WhatsApp or email JM Technical Services and Projects in Cape Town. 24/7 call-outs available.'),
  component: () => <ContactPage quote={false} />,
})
