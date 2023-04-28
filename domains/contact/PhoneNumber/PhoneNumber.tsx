interface PhoneNumberProps {
  phoneNumber: string;
  className?: string;
}

export default function PhoneNumber({
  className,
  phoneNumber,
}: PhoneNumberProps) {
  return (
    <a className={className} href={`tel:${phoneNumber.replace(/\s/g, '')}`}>
      {phoneNumber}
    </a>
  );
}
