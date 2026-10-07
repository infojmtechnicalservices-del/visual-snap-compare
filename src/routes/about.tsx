import { createFileRoute } from '@tanstack/react-router'
import { AboutPage } from '@/components/jm-pages'
import { pageHead } from '@/lib/jm-seo'

export const Route = createFileRoute('/about')({
  head: () => pageHead('/about/', 'About JM Technical Services and Projects | Cape Town', 'One dependable Cape Town team for electrical, plumbing, welding and building services.'),
  component: AboutPage,
})
