import { SECTIONS } from '@/lib/constants.ts';
import quoteIcon from '@/assets/icons/quote-white.png';
import TechStack from '@/components/TechStack.tsx';
import profilePhoto from '@/assets/photos/profile2.webp';

export default function About() {
  return (
    <section
      id={SECTIONS.ABOUT}
      className='flex w-full flex-col items-center justify-center gap-15 pt-5'>
      <h1 className='section-heading text-center lg:text-right'>
        Kilka słów <span className='text-yellow'>o mnie</span>.
      </h1>
      <div className='flex flex-col items-center gap-7 lg:flex-row lg:justify-center lg:gap-25'>
        <div className='max-h-108.75 w-4/5 max-w-81.25 sm:min-h-108.75 sm:min-w-81.25'>
          <img
            src={profilePhoto}
            alt='photo'
            className='border-yellow-dim w-full rounded-md border-4'
          />
        </div>
        <div className='flex w-full flex-col items-center gap-8 max-lg:mt-8 lg:max-w-187.5 lg:text-left'>
          <div className='bg-background-light text-light-dim font-poppins relative rounded-sm p-4 text-sm opacity-80 md:max-w-150 md:text-lg xl:max-w-175 xl:text-xl'>
            <img
              src={quoteIcon}
              alt='quote'
              className='absolute top-0 right-0 z-0 size-24 opacity-20'
            />
            <p className='relative z-1 mb-2 w-4/5 font-medium text-balance'>
              Wybierz pracę, którą kochasz, a nie przepracujesz ani jednego dnia
              w swoim życiu.
            </p>
            <p className='w-full text-end'>Konfucjusz</p>
          </div>
          <p className='text-light max-w-150 px-4 text-center text-lg leading-6 lg:text-left xl:max-w-200 xl:text-2xl xl:leading-9'>
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
