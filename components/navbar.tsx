'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UtmUrl } from '@/utils/urls'
import { ArrowUpRight } from 'lucide-react'

import { UtmMediums } from '@/types/links'
import { Routes } from '@/config/routes'
import { services } from '@/config/services'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { Icons } from './icon'
import { Badge } from './ui/badge'

export function Navbar() {
  const pathname = usePathname()

  return (
    <NavigationMenu className='hidden md:block'>
      <NavigationMenuList key={'navbar'}>
        <NavigationMenuItem key='business-menu-item'>
          <NavigationMenuTrigger>Services For You</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-2 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <NavigationMenuLink asChild>
                  <Link
                    className='bg-opacity/20 flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-sky-700 to-sky-950 p-3 no-underline outline-none focus:shadow-md'
                    href={UtmUrl(Routes.Services, {
                      medium: UtmMediums.Navbar,
                    })}>
                    <div className='text-lg font-semibold leading-tight'>What I can do for you</div>
                    <p className='mt-2 text-sm leading-tight text-sky-100'>
                      Work with me to get the best out of your business.
                    </p>
                    <p className='mt-4 text-sm underline underline-offset-2'>
                      Find out more <ArrowUpRight className='ml-1 inline-block size-4' />
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {services.map((service) => (
                <ListItem
                  key={service.title}
                  href={UtmUrl(service.url, {
                    medium: UtmMediums.Navbar,
                  })}
                  title={service.title}
                  icon={service.icon}>
                  {service.short_desctiption}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem key='about-me-menu-item'>
          <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-2 p-6 md:w-[400px] lg:w-[500px]'>
              <ListItem
                key='Dashboard'
                href={UtmUrl(Routes.Dashboard, {
                  medium: UtmMediums.Navbar,
                })}
                title='Dashboard'>
                Here are some of the latest statistics and insights for my own vein interest.
              </ListItem>
              <ListItem
                key='Uses'
                href={UtmUrl(Routes.Uses, {
                  medium: UtmMediums.Navbar,
                })}
                title='Uses'>
                These are the tools and services I use to build and maintain my projects.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem key='blog-menu-item'>
          <Link
            href={UtmUrl(Routes.Blog, {
              medium: UtmMediums.Navbar,
            })}
            legacyBehavior
            passHref>
            <NavigationMenuLink active={pathname === Routes.Blog} className={navigationMenuTriggerStyle()}>
              Articles
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem key='projects-menu-item'>
          <Link
            href={UtmUrl(Routes.Projects, {
              medium: UtmMediums.Navbar,
            })}
            legacyBehavior
            passHref>
            <NavigationMenuLink active={pathname === Routes.Projects} className={navigationMenuTriggerStyle()}>
              Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem key='contacts-menu-item'>
          <Link
            href={UtmUrl(Routes.Contact, {
              medium: UtmMediums.Navbar,
            })}
            legacyBehavior
            passHref>
            <NavigationMenuLink active={pathname === Routes.Contact} className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem key='resume-menu-item'>
          <Link
            href={UtmUrl(Routes.Resume, {
              medium: UtmMediums.Navbar,
            })}
            legacyBehavior
            passHref>
            <NavigationMenuLink active={pathname === Routes.Resume} className={navigationMenuTriggerStyle()}>
              Resumè
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & {
    title: string
    href: string
    image?: string
    badge?: string
    icon?: keyof typeof Icons
  }
>(({ className, title, image, children, ...props }, _ref) => {
  return (
    <li key={props.key}>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            'focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent',
            className,
          )}
          target={props.target || '_self'}
          {...props}>
          <div className='flex flex-row items-center gap-4'>
            {image ? (
              <Image src={image} height={40} width={80} alt='Logo' className='h-fit w-[80px] opacity-70' />
            ) : null}

            <div className='flex flex-1 flex-col'>
              <div className='flex flex-row gap-1'>
                <div className='items-center text-sm font-semibold leading-tight'>
                  {title}{' '}
                  {props.badge && (
                    <Badge className='ml-2' variant={'secondary'}>
                      {props.badge}
                    </Badge>
                  )}
                </div>
              </div>
              <p className='mt-1 line-clamp-2 text-sm leading-tight text-muted-foreground'>{children}</p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})

ListItem.displayName = 'ListItem'
