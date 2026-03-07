import profilePhoto from '@/assets/photos/profile.webp';

export default function Hero() {
  const handleScrollToContact = () => {
    const contact = document.getElementById('contact');

    const scrollOptions: ScrollIntoViewOptions = {
      behavior: 'smooth',
      block: 'center',
    };

    contact?.scrollIntoView(scrollOptions);
  };

  return (
    <section className='mt-6 flex w-full flex-col items-start justify-start gap-10 sm:mt-25 sm:flex-row sm:items-center sm:justify-around'>
      <header className='w-full md:w-fit'>
        <h3 className='text-light-dim text-lg leading-4.5 xl:text-3xl xl:leading-7'>
          Cześć, jestem
        </h3>
        <h1 className='text-light text-7xl leading-20 font-medium xl:text-9xl xl:leading-32'>
          Marcel.
        </h1>
        <h2 className='text-light text-4xl leading-10 font-semibold xl:text-7xl xl:leading-20'>
          Tworzę{' '}
          <span className='text-yellow'>
            strony <br /> internetowe
          </span>
          .
        </h2>
        <button
          onClick={() => handleScrollToContact()}
          className='bg-yellow hover:bg-yellow-dim transition-bg my-4 flex h-15 w-44 cursor-pointer items-center justify-center text-lg leading-5 font-semibold duration-200 xl:h-20 xl:w-62 xl:text-2xl'>
          NAPISZ DO MNIE
        </button>
      </header>
      <div className='sm:max-w-100 xl:max-w-150'>
        <img
          src={profilePhoto}
          alt='photo'
          className='border-yellow-dim w-full rounded-lg border-6'
        />
      </div>
    </section>
  );
}
