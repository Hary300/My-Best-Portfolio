import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface InputFieldProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  errorMessage?: string;
  label: string;
  isTextArea: boolean;
}

const InputField = <T extends FieldValues>({
  register,
  label,
  name,
  errorMessage,
  isTextArea,
}: InputFieldProps<T>) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between items-center'>
        <label htmlFor={name} className='text-sm'>
          {label}
        </label>
        {errorMessage && <p className='text-red-500 text-xs'>{errorMessage}</p>}
      </div>
      {isTextArea ? (
        <textarea
          id={name}
          rows={3}
          className='w-full border bg-portfolio-green-soft dark:bg-portfolio-card rounded-md focus: outline-0 px-4 py-2 text-sm'
          {...register(name)}
        ></textarea>
      ) : (
        <input
          type='text'
          id={name}
          className='w-full border bg-portfolio-green-soft dark:bg-portfolio-card rounded-md focus: outline-0 px-4 py-2 text-sm'
          {...register(name)}
        />
      )}
    </div>
  );
};

export default InputField;
