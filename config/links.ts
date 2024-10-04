import { Icons } from '@/components/icon'

import { Routes } from './routes'

type NavigationLinkGroups = {
  icon?: keyof typeof Icons
  href: string
  title: string
}[]

export const NavigationLinkGroups: NavigationLinkGroups = [
  {
    href: Routes.Services,
    title: 'Services',
  },
  {
    href: Routes.Dashboard,
    title: 'Dashboard',
  },
  {
    href: Routes.Blog,
    title: 'Articles',
  },
  {
    href: Routes.Projects,
    title: 'Projects',
  },
  {
    href: Routes.Uses,
    title: 'Uses',
  },

  {
    href: Routes.Contact,
    title: 'Contact',
  },
  {
    href: Routes.Resume,
    title: 'Resumè',
  },
]

type SocialLinks = {
  name: string
  url: string
  handle: string
  icon: keyof typeof Icons
}[]

export const SocialLinks: SocialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lewisblackburn',
    handle: '@lewisblackburn',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/lewisblackburn',
    handle: '@lewisblackburn',
    icon: 'github',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/lewisjablackburn',
    handle: '@lewisjablackburn',
    icon: 'instagram',
  },
  {
    name: 'X',
    url: 'https://twitter.com/zxffo',
    handle: '@zxffo',
    icon: 'twitter',
  },
  {
    name: 'Last.FM',
    url: 'https://www.last.fm/user/lewisblackburn',
    handle: '@lewisblackburn',
    icon: 'lastfm',
  },
  {
    name: 'The Movie Database',
    url: 'https://www.themoviedb.org/u/zxffo',
    handle: '@zxffo',
    icon: 'tmdb',
  },
]

type ContactLinks = {
  name: string
  mailto: string
  icon?: keyof typeof Icons
  logo?: string
}[]

export const ContactLinks: ContactLinks = [
  {
    name: 'Business',
    mailto: 'hi@lewisblackburn.me',
    icon: 'email',
  },
  {
    name: 'Enquiries',
    mailto: 'askme@lewisblackburn.me',
    icon: 'question',
  },
]
