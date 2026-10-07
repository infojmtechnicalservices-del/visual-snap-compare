import { createFileRoute } from '@tanstack/react-router'
import { TradePage } from '@/components/jm-pages'
import { trades } from '@/lib/jm-data'
import { pageHead } from '@/lib/jm-seo'

export const Route = createFileRoute('/plumbing')({
  head: () => pageHead('/plumbing/', 'Plumber in Cape Town | JM Technical Services', 'Leak repairs, geysers, blocked drains and burst pipes across Cape Town. 24/7 call-outs.', trades[1].label),
  component: () => <TradePage trade={trades[1]} />,
})
