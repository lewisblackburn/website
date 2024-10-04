'use client'

import React from 'react'
import Link from 'next/link'
import { UtmUrl } from '@/utils/urls'
import { IconMenu } from '@tabler/icons-react'

import { UtmMediums } from '@/types/links'
import { NavigationLinkGroups } from '@/config/links'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export function NavbarMobile() {
  const [open, setOpen] = React.useState(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          className='flex size-9 items-center justify-center p-0 md:hidden'
          type='button'
          aria-label='Toggle menu'
          title='Toggle menu'
          variant='ghost'>
          <IconMenu size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='mt-2 w-screen' align='center'>
        {NavigationLinkGroups.map((link) => (
          <DropdownMenuItem key={link.title} asChild>
            <Link
              href={UtmUrl(link.href, {
                medium: UtmMediums.Navbar,
              })}
              className='m-2 flex items-center gap-3'
              onClick={() => setOpen(false)}>
              {/* <Icon name={link.icon} className='size-4' /> */}
              <div>{link.title}</div>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
