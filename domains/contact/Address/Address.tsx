import EmailAddress from '../EmailAddress';
import PhoneNumber from '../PhoneNumber';

import { AddressData } from '../../../types/models';

import styles from './Address.module.css';

interface AddressProps {
  address?: AddressData;
}

export default function Address({ address }: AddressProps) {
  return (
    <address className={styles.root}>
      {address?.fullName && (
        <span className={styles.record}>{address?.fullName}</span>
      )}
      {address?.email && (
        <EmailAddress className={styles.record} emailAddress={address.email} />
      )}
      {address?.phoneNumber && (
        <PhoneNumber
          className={styles.record}
          phoneNumber={address.phoneNumber}
        />
      )}
      {address?.addressLine && (
        <span className={styles.record}>{address.addressLine}</span>
      )}
      {(address?.postcode || address?.city) && (
        <span className={styles.record}>
          {address.postcode} {address.city}
        </span>
      )}
      {address?.country && (
        <span className={styles.record}>{address.country}</span>
      )}
    </address>
  );
}
