import {
  type IconType,
  SiGithub,
  SiInstagram,
  SiLastdotfm,
  SiX,
  SiYoutube
} from '@icons-pack/react-simple-icons'
import {
  BarChartIcon,
  BookIcon,
  FlameIcon,
  MonitorIcon,
  PencilIcon,
  Text,
  UserCircleIcon,
  Video
} from 'lucide-react'

type HeaderLinks = Array<{
  icon: React.ReactNode
  href: string
  text: string
}>

type SocialLinks = Array<{
  href: string
  title: string
  icon: IconType
}>

export const HEADER_LINKS: HeaderLinks = [
  {
    icon: <PencilIcon className='size-3.5' />,
    href: '/blog',
    text: 'Blog'
  },
  {
    icon: <BarChartIcon className='size-3.5' />,
    href: '/dashboard',
    text: 'Dashboard'
  },
  {
    icon: <FlameIcon className='size-3.5' />,
    href: '/projects',
    text: 'Projects'
  },
  {
    icon: <UserCircleIcon className='size-3.5' />,
    href: '/about',
    text: 'About'
  },
  {
    icon: <MonitorIcon className='size-3.5' />,
    href: '/uses',
    text: 'Uses'
  },
  {
    icon: <BookIcon className='size-3.5' />,
    href: 'https://notes.lewisblackburn.me',
    text: 'Notes'
  },
  {
    icon: <Text className='size-3.5' />,
    href: '/resume.pdf',
    text: 'Resume'
  }
]

export const SOCIAL_LINKS: SocialLinks = [
  {
    href: 'https://github.com/zxffo',
    title: 'GitHub',
    icon: SiGithub
  },
  {
    href: 'https://www.themoviedb.org/u/zxffo',
    title: 'The Movie Database',
    icon: Video
  },
  {
    href: 'https://www.last.fm/user/zxffo',
    title: 'LastFM',
    icon: SiLastdotfm
  },
  {
    href: 'https://www.instagram.com/lewisjablackburn/',
    title: 'Instagram',
    icon: SiInstagram
  },
  {
    href: 'https://x.com/zxffo',
    title: 'X',
    icon: SiX
  },
  {
    href: 'https://www.youtube.com/@lewisjablackburn',
    title: 'YouTube',
    icon: SiYoutube
  }
]
