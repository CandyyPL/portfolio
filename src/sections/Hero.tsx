export default function Hero() {
  return (
    <section className='flex flex-col items-center justify-center gap-6'>
      <div>
        <h3 className='text-light-dim text-lg'>Cześć, jestem</h3>
        <h1 className='text-light text-[5rem] font-medium'>Marcel.</h1>
        <h2 className='text-light text-4xl font-semibold'>
          Tworzę <span className='text-yellow'>strony internetowe</span>.
        </h2>
        <button className='bg-yellow my-4 flex h-15 w-44 items-center justify-center p-2 text-lg font-semibold'>
          NAPISZ DO MNIE
        </button>
      </div>
      <div>
        <img
          src='/profile.webp'
          alt='photo'
          className='border-yellow-dim rounded-md border-4'
        />
      </div>
    </section>
  );
}
