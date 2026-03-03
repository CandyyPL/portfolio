import { SECTIONS } from '@/lib/constants.ts';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailIcon from '@/assets/icons/email.png';

const FormDataSchema = z.object({
  email: z.email(),
  message: z.string().min(20).max(400),
});

type FormData = z.infer<typeof FormDataSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(FormDataSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
    <section
      id={SECTIONS.CONTACT}
      className='mb-4 flex w-full flex-col items-center gap-4 md:mb-8 md:gap-8 xl:mb-12 xl:gap-12'>
      <h1 className='section-heading text-center md:w-full md:text-start'>
        <span className='text-yellow'>Skontaktuj się</span> ze mną.
      </h1>
      <div className='flex w-full flex-col items-center justify-center gap-20 lg:flex-row'>
        <img
          src={emailIcon}
          alt='mail'
          className='max-h-100'
        />
        <div className='bg-light-dim w-full max-w-150'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex h-full w-full flex-col items-center gap-4 p-4'>
            <div className='field-wrapper'>
              <label
                htmlFor='email'
                className='ml-1'>
                E-mail
              </label>
              <input
                type='text'
                id='email'
                className='form-input'
                {...register('email')}
              />
              {errors.email && (
                <p className='input-error'>Niepoprawny adres e-mail.</p>
              )}
            </div>
            <div className='field-wrapper'>
              <label htmlFor='message'>Wiadomość</label>
              <textarea
                id='message'
                className='form-input h-50 resize-none'
                {...register('message')}></textarea>
              {errors.message && (
                <p className='input-error'>Wpisz pomiędzy 20 a 400 znaków.</p>
              )}
            </div>
            <button className='bg-yellow hover:bg-yellow-dim transition-bg h-14 w-30 cursor-pointer text-xl font-medium duration-200'>
              WYŚLIJ
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
