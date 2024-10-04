import React from 'react'
import { SiThemoviedatabase } from '@icons-pack/react-simple-icons'
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLastfm,
  IconBrandLinkedin,
  IconBrandTwitch,
  IconBrandTwitter,
  IconBrandYoutube,
  IconDeviceDesktop,
  IconFlame,
  IconListDetails,
  IconMessageCircle,
  IconPencil,
} from '@tabler/icons-react'
import { CarFront, Hand, MailQuestion, SpeechIcon, TerminalIcon, type LucideIcon } from 'lucide-react'

export const Icons = {
  developmentService: TerminalIcon,
  talkWithMeService: SpeechIcon,

  instagram: IconBrandInstagram,
  github: IconBrandGithub,
  linkedin: IconBrandLinkedin,
  twitter: IconBrandTwitter,
  twitch: IconBrandTwitch,
  youtube: IconBrandYoutube,
  lastfm: IconBrandLastfm,
  tmdb: SiThemoviedatabase,
  car: CarFront,
  email: Hand,
  question: MailQuestion,

  dashboardPage: IconListDetails,
  servicesPage: IconDeviceDesktop,
  projectsPage: IconFlame,
  contactsPage: IconMessageCircle,
  blogPage: IconPencil,
}

export const Icon = React.forwardRef<
  React.ElementRef<LucideIcon>,
  React.ComponentPropsWithoutRef<LucideIcon> & {
    name: keyof typeof Icons
  }
>(({ name, className, ...props }, ref) => {
  // Assuming the icon name is valid
  const IconComponent = Icons[name]

  if (!IconComponent) {
    console.error(`Icon '${name}' not found.`)
    return null
  }

  return <IconComponent ref={ref} className={className} {...props} />
})

Icon.displayName = 'Icon'
