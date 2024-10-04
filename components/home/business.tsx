import { UtmMediums } from '@/types/links'
import { CtaBusiness } from '@/components/cta-business'

export function Business() {
  return (
    <>
      <section id='business' className='mt-32'>
        <div className='mx-auto max-w-7xl pb-8 lg:px-8'>
          <div className='max-w-2xl lg:mx-auto lg:text-center'>
            <h2 className='text-base font-semibold leading-7 text-sky-400'>Services For You</h2>
            <p className='tracking-tigh mt-2 text-3xl font-bold sm:text-4xl'>
              Help you unlock your <strong className='underline decoration-sky-400 underline-offset-4'>idea</strong>{' '}
              with <strong className='underline decoration-sky-400 underline-offset-4'>technology</strong>
            </p>
            <p className='mt-6 text-lg leading-8 text-muted-foreground dark:text-gray-300'>
              I offer a range of services to help you bring your idea to life.
            </p>
          </div>
        </div>
      </section>

      <CtaBusiness medium={UtmMediums.Homepage} />
    </>
  )
}
