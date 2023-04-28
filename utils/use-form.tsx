import {
  DeepPartial,
  FieldValues,
  useForm as useFormExternal,
} from 'react-hook-form';

export default function useForm<T extends FieldValues>(
  defaultValues?: DeepPartial<T>
) {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useFormExternal<T>({ defaultValues });

  return { errors, handleSubmit, register };
}
