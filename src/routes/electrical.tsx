import { createFileRoute } from '@tanstack/react-router'
import { TradePage } from '@/components/jm-pages'
import { trades } from '@/lib/jm-data'
import { pageHead } from '@/lib/jm-seo'

export const Route = createFileRoute('/electrical')({
  head: () => pageHead('/electrical/', 'Electrician in Cape Town | JM Technical Services', 'Electrical fault finding, DB boards, wiring, lighting and 24/7 call-outs across Cape Town.', trades[0].label),
  component: () => <TradePage trade={trades[0]} />,
})
