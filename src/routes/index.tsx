import { createFileRoute } from '@tanstack/react-router'
import { HomePage } from '@/components/jm-home'
import { pageHead } from '@/lib/jm-seo'

export const Route = createFileRoute('/')({
  head: () => pageHead('/', 'JM Technical Services | Electrical, Plumbing, Welding & Building in Cape Town', 'Cape Town multi-trade team for electrical, plumbing, welding and building work. 24/7 call-outs. Call or WhatsApp 083 241 2126.'),
  component: HomePage,
})
