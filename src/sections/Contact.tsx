import { SECTIONS } from '@/lib/constants.ts';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailIcon from '@/assets/icons/email.png';
import ContactForm from '@/components/ContactForm.tsx';
import successIcon from '@/assets/icons/check.png';
import { Activity, useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { cn } from '@/lib/utils.ts';

const FormDataSchema = z.object({
  email: z.email(),
  message: z.string().min(20).max(400),
});

export type FormDataType = z.infer<typeof FormDataSchema>;

export default function Contact() {
  const [overlayActive, setOverlayActive] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormDataType>({
    resolver: zodResolver(FormDataSchema),
  });

  const onSubmit = handleSubmit(async (data: FormDataType) => {
    setOverlayActive(true);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    reset();
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      const fadeTimer = setTimeout(() => setOverlayActive(false), 3000);

      return () => {
        clearTimeout(fadeTimer);
      };
    }
  }, [isSubmitting, isSubmitSuccessful]);

  const form = { register, errors };

  return (
    <section
      id={SECTIONS.CONTACT}
      className='flex w-full flex-col items-center gap-12 pt-5 xl:mb-25'>
      <h1 className='section-heading text-center xl:text-left'>
        <span className='text-yellow'>Skontaktuj się</span> ze mną.
      </h1>
      <div className='flex w-full flex-col items-center justify-center gap-20 lg:flex-row'>
        <img
          src={emailIcon}
          alt='mail'
          className='hidden max-w-100 xl:block'
        />
        <div className='bg-light-dim relative w-full max-w-131.25 p-4'>
          <div
            className={cn(
              'bg-dark-transparent absolute top-0 left-0 z-10 flex h-full w-full flex-col items-center justify-center gap-4',
              'transition-opacity duration-200',
              overlayActive ? 'opacity-100' : 'pointer-events-none opacity-0'
            )}>
            <Activity mode={isSubmitting ? 'visible' : 'hidden'}>
              <TailSpin
                width='50px'
                height='50px'
                color='#C1C3C2'
              />
              <p className='text-light text-xl'>Wysyłanie</p>
            </Activity>
            <Activity mode={isSubmitSuccessful ? 'visible' : 'hidden'}>
              <img
                src={successIcon}
                alt='success'
                className='size-20'
              />
              <p className='text-light text-xl'>Wiadomość wysłana!</p>
            </Activity>
          </div>
          <ContactForm
            form={form}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </section>
  );
}
