import { SECTIONS } from '@/lib/constants.ts';

export default function Hero() {
  return (
    <section
      id={SECTIONS.HERO}
      className='flex w-full flex-col items-center justify-start gap-6 md:flex-row md:items-center md:justify-around'>
      <div className='w-full md:w-fit'>
        <h3 className='text-light-dim text-lg lg:text-xl xl:text-3xl'>
          Cześć, jestem
        </h3>
        <h1 className='text-light text-[5rem] font-medium lg:text-8xl xl:text-9xl'>
          Marcel.
        </h1>
        <h2 className='text-light text-4xl font-semibold lg:text-5xl xl:text-7xl'>
          Tworzę{' '}
          <span className='text-yellow'>
            strony <br /> internetowe
          </span>
          .
        </h2>
        <button className='bg-yellow my-4 flex h-15 items-center justify-center px-4 py-2 text-lg font-semibold lg:px-6 lg:py-8 lg:text-xl xl:px-8 xl:py-10 xl:text-2xl'>
          NAPISZ DO MNIE
        </button>
      </div>
      <div className='h-full'>
        <img
          src='/profile.webp'
          alt='photo'
          className='border-yellow-dim h-full rounded-md border-4 md:max-h-100 xl:max-h-150'
        />
      </div>
    </section>
  );
}
