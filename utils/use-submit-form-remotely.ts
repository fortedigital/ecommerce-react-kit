import { useCallback, useRef } from 'react';

export default function useSubmitFormRemotely() {
  const formRef = useRef<HTMLFormElement>(null);

  const submit = useCallback(() => {
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true })
      );
    }
  }, [formRef]);

  return { formRef, submit };
}
