import { createFileRoute } from '@tanstack/react-router'
import { TradePage } from '@/components/jm-pages'
import { trades } from '@/lib/jm-data'
import { pageHead } from '@/lib/jm-seo'

export const Route = createFileRoute('/welding')({
  head: () => pageHead('/welding/', 'Welding & Fabrication in Cape Town | JM Technical Services', 'Gates, burglar bars, palisade fencing and custom steel fabrication in Cape Town.', trades[2].label),
  component: () => <TradePage trade={trades[2]} />,
})
