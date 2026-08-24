import {
  contactFormSchema,
  type ContactFormSchema,
} from '@/schema/contactFormSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';
import { contactData } from '@/data/contact';
import InputField from './InputField';

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isLoading },
  } = useForm<ContactFormSchema>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormSchema) => {
    console.log(data);
    reset();
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
        disabled={isLoading}
        className='bg-portfolio-green text-portfolio-white'
      >
        {isLoading
          ? contactData.form.loadingButtonText
          : contactData.form.submitButtonText}
      </Button>
    </form>
  );
};

export default Form;
