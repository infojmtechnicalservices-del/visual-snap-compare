import house from '@/assets/cape-town-house.jpg'
import electrical from '@/assets/technical-work.jpg'
import before from '@/assets/kitchen-before.jpg'
import after from '@/assets/kitchen-after.jpg'

export const images = { house, electrical, before, after }
export const phone = '083 241 2126'
export const email = 'info.jmtechnicalservice@gmail.com'
export const whatsapp = (message = 'Hi JM Technical Services, I need assistance with a project in Cape Town.') => `https://wa.me/27832412126?text=${encodeURIComponent(message)}`
export const areas = ['Cape Town CBD', 'Goodwood', 'Thornton', 'Northern Suburbs', 'Southern Suburbs', 'Cape Flats', 'Atlantic Seaboard', 'Helderberg']
export const trades = [
 { slug: 'electrical', name: 'Electrical', label: 'Electrical services', title: 'Electrician in Cape Town', intro: 'From a tripping circuit to a full installation, get practical electrical support for your home or business.', short: 'Safe connections. Reliable power.', tasks: ['Electrical fault finding', 'DB board repairs & upgrades', 'House wiring & rewiring', 'Lighting installation', 'Plug points & switches', 'Electrical repairs & maintenance'], message: 'Hi JM Technical Services, I need help with an electrical issue. My area is [AREA].' },
 { slug: 'plumbing', name: 'Plumbing', label: 'Plumbing services', title: 'Plumber in Cape Town', intro: 'Leaking taps, burst pipes or a faulty geyser? Get local help with repairs, installations and everyday plumbing maintenance.', short: 'Small leaks. Big solutions.', tasks: ['Leak detection & repairs', 'Geyser repairs & installation', 'Blocked drains', 'Burst pipe repairs', 'Bathroom & kitchen plumbing', 'Tap & sanitaryware installation'], message: 'Hi JM Technical Services, I need a plumber. My issue is [PROBLEM] and I am located in [AREA].' },
 { slug: 'welding', name: 'Welding & Fabrication', label: 'Welding & fabrication', title: 'Welding & Fabrication in Cape Town', intro: 'Practical steelwork, made for your property. Speak to us about gates, security features, repairs and custom fabrication.', short: 'Strong steel. Precise workmanship.', tasks: ['Custom steel fabrication', 'Gates & gate repairs', 'Burglar bars', 'Palisade fencing', 'Steel structures & frames', 'Welding repairs'], message: 'Hi JM Technical Services, I need welding/fabrication work. Please contact me regarding my project.' },
 { slug: 'building', name: 'Building & Renovations', label: 'Building & renovations', title: 'Building & Renovations in Cape Town', intro: 'Bring your next improvement together with one team for building work, renovations and the finishing details.', short: 'Better spaces. Built properly.', tasks: ['Home alterations', 'Plastering & painting', 'Floor & wall tiling', 'Kitchen & bathroom renovations', 'Property repairs', 'General building maintenance'], message: 'Hi JM Technical Services, I need building/renovation work. Please contact me regarding my project.' },
] as const
export type Trade = typeof trades[number]
export const tradePaths = ['/electrical', '/plumbing', '/welding', '/building'] as const
export const faqs = [
 ['Do you offer emergency call-outs?', 'Yes. We offer 24/7 call-outs for urgent technical issues. Call 083 241 2126 and tell us your suburb and what has happened so we can discuss availability.'],
 ['Which areas do you cover?', 'We serve Cape Town CBD, Goodwood, Thornton, the Northern and Southern Suburbs, Cape Flats, Atlantic Seaboard, Helderberg and surrounding areas.'],
 ['Can one team handle multiple trades?', 'Yes. You can arrange electrical, plumbing, welding and building work through a single point of contact. Tell us what your project involves.'],
 ['How do I request a quote?', 'Send your job details and suburb through our quote form, WhatsApp us, or call. We will discuss the scope and whether a site assessment is needed.'],
 ['Do you work on homes and businesses?', 'We handle technical repairs, installations and maintenance for residential and commercial properties. Contact us to discuss your specific requirements.'],
 ['Can I send photos of the problem?', 'Yes. Send photos through WhatsApp or email to help us understand the issue. Some jobs will still need an on-site assessment.'],
] as const