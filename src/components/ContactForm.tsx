import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import type { FormDataType } from '@/sections/Contact.tsx';
import { cn } from '@/lib/utils.ts';
import type { BaseSyntheticEvent } from 'react';

type Props = {
  form: {
    register: UseFormRegister<FormDataType>;
    errors: FieldErrors<FormDataType>;
  };
  onSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
};

const inputErrorStyle = 'border-2 border-red-500';

export default function ContactForm({ form, onSubmit }: Props) {
  const { register, errors } = form;

  return (
    <form
      onSubmit={onSubmit}
      className='flex w-full flex-col items-center gap-7'>
      <div className='field-wrapper'>
        <label
          htmlFor='email'
          className='ml-1'>
          E-mail
        </label>
        <input
          type='text'
          id='email'
          className={cn('form-input', errors.email && inputErrorStyle)}
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
          className={cn(
            'form-input h-50 resize-none',
            errors.email && inputErrorStyle
          )}
          {...register('message')}></textarea>
        {errors.message && (
          <p className='input-error'>Wpisz pomiędzy 20 a 400 znaków.</p>
        )}
      </div>
      <button className='bg-yellow hover:bg-yellow-dim transition-bg h-14 w-30 cursor-pointer text-xl font-medium duration-200'>
        WYŚLIJ
      </button>
    </form>
  );
}
