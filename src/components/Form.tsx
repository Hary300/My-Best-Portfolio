import {
  contactFormSchema,
  type ContactFormSchema,
} from '@/schema/contactFormSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';
import { contactData } from '@/data/contact';
import InputField from './InputField';
import { toast } from 'sonner';

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormSchema>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormSchema) => {
    try {
      const request = await fetch('https://formspree.io/f/xljrkyaa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!request.ok) {
        throw new Error('Failed to send message');
      }

      reset();
      toast.success('Message sent successfully');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Something went wrong');
      }
    }
  };

  const fields = contactData.form.fields;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      {fields.map((field) => {
        const errorMessage = errors[field.name]?.message;
        return (
          <InputField
            key={field.name}
            register={register}
            isTextArea={field.isTextArea}
            label={field.label}
            name={field.name}
            errorMessage={errorMessage}
          />
        );
      })}
      <Button
        type='submit'
        disabled={isSubmitting}
        className='bg-portfolio-green text-portfolio-white'
      >
        {isSubmitting
          ? contactData.form.loadingButtonText
          : contactData.form.submitButtonText}
      </Button>
    </form>
  );
};

export default Form;
