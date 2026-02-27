import { SECTIONS } from '@/lib/constants.ts';
import quoteIcon from '@/assets/icons/quote-white.png';

export default function About() {
  return (
    <section
      id={SECTIONS.ABOUT}
      className='flex flex-col items-center gap-4'>
      <h1 className='section-heading text-center'>
        Kilka słów <span className='text-yellow'>o mnie</span>..
      </h1>
      <img
        src='/profile2.webp'
        alt='photo'
        className='border-yellow-dim rounded-md border-4'
      />
      <div className='bg-background-light relative rounded-sm p-4 opacity-80'>
        <img
          src={quoteIcon}
          alt='quote'
          className='absolute top-0 right-0 z-0 size-24 opacity-20'
        />
        <p className='text-light-dim font-poppins relative z-1 mb-2 text-sm font-medium text-balance shadow-xs'>
          Wybierz pracę, którą kochasz, a nie przepracujesz ani jednego dnia w
          swoim życiu.
        </p>
        <p className='text-light-dim font-poppins w-full text-end text-sm'>
          Konfucjusz
        </p>
      </div>
      <p className='text-light text-center text-lg leading-tight'>
        W pełni zgadzam się z tymi słowami. Programowanie to moja pasja, którą
        rozwijam od wielu lat, dlatego postanowiłem uczynić z tego swoją ścieżkę
        zawodową. Kodowanie to nie tylko moje hobby, ale również styl życia,
        który daje mi niesamowitą satysfakcję i nieustannie inspiruje do
        rozwoju, a w niedługiej przyszłości stanie się również moją pracą.
      </p>
    </section>
  );
}
