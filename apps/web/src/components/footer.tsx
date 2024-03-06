import NowPlaying from './now-playing'

const Footer = () => {
  return (
    <footer className='relative mx-auto mb-24 flex max-w-5xl justify-between rounded-2xl p-8'>
      <NowPlaying />
      <span className='text-sm font-semibold'>
        &copy; {new Date().getFullYear()} Lewis
      </span>
    </footer>
  )
}

export default Footer
