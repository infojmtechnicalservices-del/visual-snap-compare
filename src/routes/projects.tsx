import { createFileRoute } from '@tanstack/react-router'
import { ProjectsPage } from '@/components/jm-pages'
import { pageHead } from '@/lib/jm-seo'

export const Route = createFileRoute('/projects')({
  head: () => pageHead('/projects/', 'Our Work & Before-and-After | JM Technical Services', 'Explore electrical, plumbing, welding and renovation work examples and a before-and-after comparison.'),
  component: ProjectsPage,
})
