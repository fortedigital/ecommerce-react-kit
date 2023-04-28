import { forwardRef } from 'react';

interface FormProps extends React.ComponentPropsWithoutRef<'form'> {
  className?: string;
}

const Form = forwardRef<HTMLFormElement, FormProps>(function Form(
  { children, className, onSubmit },
  ref
) {
  return (
    <form ref={ref} className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
});

export default Form;
