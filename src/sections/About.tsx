import { SECTIONS } from '@/lib/constants.ts';
import quoteIcon from '@/assets/icons/quote-white.png';
import TechStack from '@/components/TechStack.tsx';

export default function About() {
  return (
    <section
      id={SECTIONS.ABOUT}
      className='flex w-full flex-col items-center gap-4 md:gap-8 xl:gap-12'>
      <h1 className='section-heading text-center lg:w-full lg:pr-10 lg:text-end'>
        Kilka słów <span className='text-yellow'>o mnie</span>.
      </h1>
      <div className='flex w-full flex-col items-center gap-8 lg:flex-row lg:justify-around'>
        <img
          src='/profile2.webp'
          alt='photo'
          className='border-yellow-dim max-h-100 rounded-md border-4 xl:max-h-150'
        />
        <div className='flex w-fit flex-col items-center gap-8'>
          <div className='bg-background-light text-light-dim font-poppins relative rounded-sm p-4 text-sm opacity-80 md:max-w-150 md:text-lg xl:max-w-200 xl:text-xl'>
            <img
              src={quoteIcon}
              alt='quote'
              className='absolute top-0 right-0 z-0 size-24 opacity-20'
            />
            <p className='relative z-1 mb-2 w-1/2 font-medium text-balance'>
              Wybierz pracę, którą kochasz, a nie przepracujesz ani jednego dnia
              w swoim życiu.
            </p>
            <p className='w-full text-end'>Konfucjusz</p>
          </div>
          <p className='text-light px-4 text-center text-lg leading-tight md:max-w-150 md:text-xl xl:max-w-175 xl:text-2xl'>
            W pełni zgadzam się z tymi słowami. Programowanie to moja pasja,
            którą rozwijam od wielu lat, dlatego postanowiłem uczynić z tego
            swoją ścieżkę zawodową. <br /> <br /> Kodowanie to nie tylko moje
            hobby, ale również styl życia, który daje mi niesamowitą satysfakcję
            i nieustannie inspiruje do rozwoju, a w niedługiej przyszłości
            stanie się również moją pracą.
          </p>
        </div>
      </div>
      <TechStack />
    </section>
  );
}
