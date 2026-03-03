import { SECTIONS } from '@/lib/constants.ts';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const FormDataSchema = z.object({
  email: z.email(),
  message: z.string().min(20),
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
      className='flex flex-col items-center gap-4'>
      <h1 className='section-heading text-center'>
        <span className='text-yellow'>Skontaktuj się</span> ze mną.
      </h1>
      <div className='bg-light-dim w-full'>
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
              <p className='input-error'>Wpisz co najmniej 20 znaków.</p>
            )}
          </div>
          <button className='bg-yellow h-14 w-30 cursor-pointer text-xl font-medium'>
            WYŚLIJ
          </button>
        </form>
      </div>
    </section>
  );
}
