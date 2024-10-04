import { Icons } from '@/components/icon'

type Service = {
  id: string
  title: string
  short_desctiption: string
  description: string
  icon: keyof typeof Icons
  url: string
  min_price: string
}

export const services: Service[] = [
  {
    id: 'development',
    title: 'Web Development',
    short_desctiption: "Let's work together to build your dream website.",
    description:
      'Let me help you bring your ideas to life with a custom website that fits your needs. I specialize in building fast, responsive, and SEO-friendly websites.',
    icon: 'developmentService',
    url: '/services#development',
    min_price: '£500',
  },
  {
    id: 'talk-with-me',
    title: 'Talk with me',
    short_desctiption: 'Feel free to contact me for any questions or inquiries.',
    description:
      'I am always available to answer any questions you may have, or to discuss your project. Feel free to reach out to me at any time.',
    icon: 'talkWithMeService',
    url: '/services#talk-with-me',
    min_price: '£0',
  },
]
