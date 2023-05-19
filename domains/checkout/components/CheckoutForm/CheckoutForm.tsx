import { forwardRef } from 'react';
import clsx from 'clsx';

import ShippingOption from '../ShippingOption';

import useDictionary from '../../../../localization/use-dictionary';
import {
  CheckoutFormData,
  PaymentMethodData,
  ShippingOptionData,
} from '../../../../types/models';
import { Fieldset, Form, Input, Radio, RadioGroup } from '../../../../ui';
import {
  emailValidationRule,
  requiredValidationRule,
  useForm,
} from '../../../../utils';

interface CheckoutFormProps {
  onShippingOptionChange: (name: string) => void;
  onSubmit: (data: CheckoutFormData) => void;
  paymentMethods: PaymentMethodData[];
  shippingOptions: ShippingOptionData[];
  className?: string;
}

const CheckoutForm = forwardRef<HTMLFormElement, CheckoutFormProps>(
  function CheckoutForm(
    {
      className,
      onShippingOptionChange,
      onSubmit,
      paymentMethods,
      shippingOptions,
    },
    ref
  ) {
    const translate = useDictionary('checkoutForm');
    const { errors, handleSubmit, register } = useForm<CheckoutFormData>();

    return (
      <Form
        ref={ref}
        className={clsx('grid-m gap-row-m', className)}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Fieldset className="grid-s gap-row-s col-span-full">
          <Fieldset.Legend>{translate('contact.title')}</Fieldset.Legend>
          <Input
            className="col-span-6"
            type="text"
            label={translate('contact.fields.firstName.label')}
            error={errors?.contact?.firstName?.message}
            required
            {...register('contact.firstName', {
              required: requiredValidationRule(
                translate('contact.fields.firstName.errors.required')
              ),
            })}
          />
          <Input
            className="col-span-6"
            type="text"
            label={translate('contact.fields.lastName.label')}
            error={errors?.contact?.lastName?.message}
            required
            {...register('contact.lastName', {
              required: requiredValidationRule(
                translate('contact.fields.lastName.errors.required')
              ),
            })}
          />
          <Input
            className="col-span-6"
            type="email"
            label={translate('contact.fields.email.label')}
            error={errors?.contact?.email?.message}
            required
            {...register('contact.email', {
              required: requiredValidationRule(
                translate('contact.fields.email.errors.required')
              ),
              pattern: emailValidationRule(
                translate('contact.fields.email.errors.invalid')
              ),
            })}
          />
          <Input
            className="col-span-6"
            type="tel"
            label={translate('contact.fields.phoneNumber.label')}
            error={errors?.contact?.phoneNumber?.message}
            required
            {...register('contact.phoneNumber', {
              required: requiredValidationRule(
                translate('contact.fields.phoneNumber.errors.required')
              ),
            })}
          />
        </Fieldset>

        <Fieldset className="grid-s gap-row-s col-span-full">
          <Fieldset.Legend>{translate('delivery.title')}</Fieldset.Legend>
          <Input
            className="col-span-full"
            type="text"
            label={translate('delivery.fields.addressLine.label')}
            error={errors?.delivery?.addressLine?.message}
            required
            {...register('delivery.addressLine', {
              required: requiredValidationRule(
                translate('delivery.fields.addressLine.errors.required')
              ),
            })}
          />
          <Input
            className="col-span-6"
            type="text"
            label={translate('delivery.fields.zipCode.label')}
            error={errors?.delivery?.postcode?.message}
            required
            {...register('delivery.postcode', {
              required: requiredValidationRule(
                translate('delivery.fields.zipCode.errors.required')
              ),
            })}
          />
          <Input
            className="col-span-6"
            type="text"
            label={translate('delivery.fields.city.label')}
            error={errors?.delivery?.city?.message}
            required
            {...register('delivery.city', {
              required: requiredValidationRule(
                translate('delivery.fields.city.errors.required')
              ),
            })}
          />
          <Input
            className="col-span-6"
            type="text"
            label={translate('delivery.fields.country.label')}
            error={errors?.delivery?.country?.message}
            required
            {...register('delivery.country', {
              required: requiredValidationRule(
                translate('delivery.fields.country.errors.required')
              ),
            })}
          />
          <RadioGroup
            className="col-span-full"
            title={translate('delivery.fields.shippingMethod.label')}
            error={errors?.delivery?.shippingMethod?.message}
            required
          >
            <div className="grid-xs gap-row-xs">
              {shippingOptions.map((option) => (
                <Radio
                  className="col-span-6"
                  label={<ShippingOption option={option} />}
                  value={option.methodName}
                  {...register('delivery.shippingMethod', {
                    onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
                      onShippingOptionChange(event.target.value),
                    required: requiredValidationRule(
                      translate(
                        'delivery.fields.shippingMethod.errors.required'
                      )
                    ),
                  })}
                  key={option.methodName}
                />
              ))}
            </div>
          </RadioGroup>
        </Fieldset>
        <Fieldset className="grid-s gap-row-s col-span-full">
          <Fieldset.Legend>{translate('payment.title')}</Fieldset.Legend>
          <RadioGroup
            className="col-span-full"
            title={translate('payment.fields.paymentMethod.label')}
            error={errors.paymentMethod?.message}
            required
          >
            <div className="grid-xs gap-row-xs">
              {paymentMethods.map((method) => (
                <Radio
                  className="col-span-6"
                  label={method.name}
                  value={method.id}
                  {...register('paymentMethod', {
                    required: requiredValidationRule(
                      translate('payment.fields.paymentMethod.errors.required')
                    ),
                  })}
                  key={method.id}
                />
              ))}
            </div>
          </RadioGroup>
        </Fieldset>
      </Form>
    );
  }
);

export default CheckoutForm;
