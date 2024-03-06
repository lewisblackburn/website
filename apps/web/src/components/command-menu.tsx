'use client'

import {
  Button,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from '@zxffo/ui'
import {
  BookIcon,
  CodeIcon,
  CommandIcon,
  HomeIcon,
  LinkIcon
} from 'lucide-react'
import * as React from 'react'

import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'
import { type BlogMetadata } from '@/lib/mdx'

type Groups = Array<{
  name: string
  actions: Array<{
    title: string
    icon: React.ReactNode
    onSelect: () => void | Promise<void>
  }>
}>

const CommandMenu = ({ posts }: { posts: BlogMetadata[] }) => {
  const [open, setOpen] = React.useState(false)
  const [copy] = useCopyToClipboard()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((value) => !value)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const openLink = React.useCallback((url: string) => {
    setOpen(false)
    window.open(url, '_blank', 'noopener')
  }, [])

  const groups: Groups = [
    {
      name: 'General',
      actions: [
        {
          title: 'Home',
          icon: <HomeIcon className='mr-3 size-4' />,
          onSelect: () => window.location.replace('/')
        },
        {
          title: 'Copy Link',
          icon: <LinkIcon className='mr-3 size-4' />,
          onSelect: async () => {
            setOpen(false)

            await copy({
              text: window.location.href,
              successMessage: (
                <div className='flex flex-col'>
                  <div>Copied</div>
                  <div className='text-sm text-muted-foreground'>
                    You can now share it with anyone.
                  </div>
                </div>
              )
            })
          }
        },
        {
          title: 'Source code',
          icon: <CodeIcon className='mr-3 size-4' />,
          onSelect: () => openLink('https://github.com/zxffo/website')
        }
      ]
    }
  ]

  if (posts) {
    groups.push({
      name: 'Blog',
      actions: posts.map((post: BlogMetadata) => ({
        title: post.title,
        icon: <BookIcon className='mr-3 size-4' />,
        onSelect: () => window.location.replace(`/blog/${post.slug}`)
      }))
    })
  }

  return (
    <>
      <Button
        variant='ghost'
        className='size-9 p-0'
        onClick={() => setOpen(true)}
        type='button'
        aria-label='Open command menu'
      >
        <span className='sr-only'>Open command menu</span>
        <CommandIcon className='size-4' />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {groups.map((group, i) => (
            <React.Fragment key={group.name}>
              <CommandGroup heading={group.name}>
                {group.actions.map((action) => (
                  <CommandItem key={action.title} onSelect={action.onSelect}>
                    {action.icon}
                    {action.title}
                  </CommandItem>
                ))}
              </CommandGroup>
              {i !== groups.length - 1 && <CommandSeparator />}
            </React.Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default CommandMenu
