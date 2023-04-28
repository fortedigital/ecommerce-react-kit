interface EmailAddressProps {
  emailAddress: string;
  className?: string;
}

export default function EmailAddress({
  className,
  emailAddress,
}: EmailAddressProps) {
  return (
    <a className={className} href={`mailto:${emailAddress}`}>
      {emailAddress}
    </a>
  );
}
