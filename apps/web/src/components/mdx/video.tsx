import { AspectRatio } from '@zxffo/ui'
import { cn } from '@zxffo/utils'
import * as React from 'react'

type VideoProps = {
  src: string
  width: number
  height: number
} & React.ComponentPropsWithoutRef<'video'>

const Video = (props: VideoProps) => {
  const { src, width, height, controls = true, className, ...rest } = props

  return (
    <AspectRatio ratio={16 / 9}>
      <video
        className={cn('object-fit my-4 rounded-lg shadow-lg', className)}
        loop
        muted
        src={src}
        controls={controls}
        width={width}
        height={height}
        {...rest}
      />
    </AspectRatio>
  )
}

export default Video
