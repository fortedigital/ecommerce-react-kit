type IntlMessages = import('../localization/types').Dictionary;

type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
