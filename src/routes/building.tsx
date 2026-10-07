import { createFileRoute } from '@tanstack/react-router'
import { TradePage } from '@/components/jm-pages'
import { trades } from '@/lib/jm-data'
import { pageHead } from '@/lib/jm-seo'

export const Route = createFileRoute('/building')({
  head: () => pageHead('/building/', 'Building & Renovations in Cape Town | JM Technical Services', 'Home alterations, tiling, plastering, painting and kitchen and bathroom renovations in Cape Town.', trades[3].label),
  component: () => <TradePage trade={trades[3]} />,
})
