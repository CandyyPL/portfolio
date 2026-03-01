import { SECTIONS } from '@/lib/constants.ts';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const FormDataSchema = z.object({
  name: z.string().min(3),
  email: z.email(),
  message: z.string().min(20),
});

type FormData = z.infer<typeof FormDataSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <section
      id={SECTIONS.CONTACT}
      className='flex flex-col items-center gap-4'>
      <h1 className='section-heading text-center'>
        <span className='text-yellow'>Skontaktuj się</span> ze mną.
      </h1>
      <div className='bg-light-dim w-80'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex h-full w-full flex-col items-center gap-8 p-4'>
          <div className='field-wrapper'>
            <label
              htmlFor='name'
              className='ml-1'>
              Imię
            </label>
            <input
              type='text'
              id='name'
              className='form-input'
              {...register('name')}
            />
            {errors.name && (
              <p className='input-error'>{errors.name.message}</p>
            )}
          </div>
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
              <p className='input-error'>{errors.email.message}</p>
            )}
          </div>
          <div className='field-wrapper'>
            <label htmlFor='message'>Wiadomość</label>
            <textarea
              id='message'
              className='form-input h-50 resize-none'
              {...register('message')}></textarea>
            {errors.message && (
              <p className='input-error'>{errors.message.message}</p>
            )}
          </div>
          <button className='bg-yellow h-14 w-30 text-xl font-medium'>
            WYŚLIJ
          </button>
        </form>
      </div>
    </section>
  );
}
