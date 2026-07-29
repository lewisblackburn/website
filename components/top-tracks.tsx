'use client'
import { fetcher } from '@/lib/fetcher'
import { ApiResponseSuccess, GetTopTracksResponse } from '@/types/api'
import { RiSpotifyFill } from '@remixicon/react'
import Image from 'next/image'
import useSWR from 'swr'
import { Card, CardContent } from './ui/card'
import { Container } from './ui/container'
import { IconButton } from './ui/icon-button'

type TrackProps = {
    name: string
    artist: string
    album: string
    albumImage: string
    songUrl: string
}

function Track({ name, artist, album, albumImage, songUrl }: TrackProps) {
    return (
        <a
            href={songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-full"
        >
            <Card className="h-full flex flex-col">
                <CardContent className="flex-1 flex flex-col justify-center">
                    <div className="flex items-center space-x-3">
                        <Image
                            src={albumImage}
                            alt={`${album} cover`}
                            width={48}
                            height={48}
                            className="w-12 h-12 rounded object-cover"
                        />
                        <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm truncate">
                                {name}
                            </div>
                            <div className="text-xs text-muted-foreground truncate">
                                {artist}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </a>
    )
}

export default function TopTracks() {
    const { data: topTracks } = useSWR<
        ApiResponseSuccess<GetTopTracksResponse>
    >('/api/spotify/top-tracks', fetcher)

    if (!topTracks?.data?.length) {
        return null
    }

    return (
        <section className="bg-background relative py-12">
            <Container className="space-y-12">
                <div className="flex flex-col items-center gap-5 ">
                    <IconButton icon={<RiSpotifyFill />} />

                    <h3 className="font-semibold text-3xl md:text-4xl tracking-tighter">
                        Top Tracks
                    </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {topTracks?.data?.slice(0, 9).map((track) => (
                        <Track
                            key={track.id}
                            name={track.name}
                            artist={track.artists
                                .map((artist) => artist.name)
                                .join(', ')}
                            album={track.album.name}
                            albumImage={
                                track.album.images[0]
                                    ? track.album.images[0].url
                                    : '/placeholder.png'
                            }
                            songUrl={track.external_urls.spotify}
                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}
