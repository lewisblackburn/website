import { SocialIcons } from '@/components/social-icons'
import { Container } from '@/components/ui/container'
import { siteConfig } from '@/lib/site'
import Link from 'next/link'
import NowPlaying from './now-playing'

export default function Footer() {
    return (
        <section className="bg-background border-t">
            <Container className="py-12">
                <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
                    <div className="flex w-full flex-col justify-between gap-4 lg:items-start">
                        <div className="flex items-center gap-2 lg:justify-start">
                            <h2 className="text-xl font-semibold">
                                {siteConfig.name}
                            </h2>
                        </div>
                        <p className="text-muted-foreground max-w-[70%] text-sm">
                            {siteConfig.description}
                        </p>
                        <SocialIcons />
                    </div>
                    <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
                        <div>
                            <h3 className="mb-4 font-semibold text-xs text-muted-foreground">
                                General
                            </h3>
                            <ul className="space-y-3 text-sm">
                                {siteConfig.navigation.map((item) => (
                                    <li
                                        key={item.href}
                                        className="hover:text-primary font-medium"
                                    >
                                        <Link href={item.href}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 font-semibold text-xs text-muted-foreground">
                                The Website
                            </h3>
                            <ul className="space-y-3 text-sm">
                                {[
                                    ...siteConfig.horizontalNav,
                                    ...siteConfig.verticalNav,
                                ].map((item) => (
                                    <li
                                        key={item.href}
                                        className="hover:text-primary font-medium"
                                    >
                                        <Link href={item.href}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 font-semibold text-xs text-muted-foreground">
                                Other
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li className="hover:text-primary font-medium">
                                    <Link href="/rss">RSS</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
                    <p className="order-2 lg:order-1">
                        &copy; {new Date().getFullYear()} Lewis Blackburn. All
                        rights reserved.
                    </p>
                    <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
                        <NowPlaying />
                    </ul>
                </div>
            </Container>
        </section>
    )
}
