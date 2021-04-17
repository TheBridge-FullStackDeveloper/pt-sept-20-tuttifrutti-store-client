import { useForm } from 'react-hook-form';

import { errorMessage } from '../../constants/formErrors';

export default function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  const handleFormSubmit = (formValues, e) => {
    const parsedData = {
      ...formValues,
      houseNum: Number(formValues.houseNum),
      phone: Number(formValues.phone),
      monthExpirationDate: Number(formValues.monthExpirationDate),
      yearExpirationDate: Number(formValues.yearExpirationDate)
    };
    console.log(parsedData); // transform the parsed data into signup context function
    e.target.reset();
  };
  return (
    <>
      <h3>Welcome to the Tutti-Frutti Store</h3>
      <h6>
        Please fill the fields with your data
        <br />
        <label>(*)Required Fields</label>
      </h6>

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <label>Name (*)</label>
        <input
          type="text"
          id="firstName"
          placeholder="First name"
          {...register('firstName', {
            required: true,
            minLength: {
              value: 2
            },
            maxLength: 80
          })}
        />
        {errors.firstName && errors.firstName.type === 'required' ? (
          <p>{errorMessage.required}</p>
        ) : null}
        {errors.firstName && errors.firstName.type === 'minLength' ? (
          <p>{errorMessage.nameFieldLenght}</p>
        ) : null}
        <label>Surname</label>
        <input
          type="text"
          id="lastName"
          placeholder="Last name"
          {...register('lastName', { required: false, maxLength: 100 })}
        />
        <label>Email (*)</label>
        <input
          type="text"
          id="mail"
          placeholder="jondoe@gmail.com"
          {...register('mail', {
            required: true,
            pattern: {
              value: /^\S+@\S+$/i
            }
          })}
        />
        {errors.mail && errors.mail.type === 'required' ? (
          <p>{errorMessage.required}</p>
        ) : null}
        {errors.mail && errors.mail.type === 'pattern' ? (
          <p>{errorMessage.emailPattern}</p>
        ) : null}
        <label>Password (*)</label>
        <input
          type="text"
          id="password"
          name="password"
          {...register('password', {
            required: true,
            minLength: 6,
            maxLength: 20
          })}
        />
        {errors.password && errors.password.type === 'required' ? (
          <p>{errorMessage.required}</p>
        ) : null}
        {errors.password && errors.password.type === 'minLength' ? (
          <p>{errorMessage.passwordFieldLenght}</p>
        ) : null}
        {errors.password && errors.password.type === 'maxLength' ? (
          <p>{errorMessage.passwordFieldLenght}</p>
        ) : null}
        <br />
        <label>Address:</label>
        <br />
        <label>Street</label>
        <input
          type="text"
          id="street"
          placeholder="Street name"
          {...register('street', { required: false, maxLength: 100 })}
        />
        <label>Number</label>
        <input
          type="text"
          id="houseNum"
          min="1"
          placeholder="House Number"
          {...register('houseNum', {
            pattern: {
              value: /^\+?(0|[1-9]\d*)$/
            }
          })}
        />
        {errors.houseNum && errors.houseNum.type === 'pattern' ? (
          <p>{errorMessage.integerPattern}</p>
        ) : null}
        <label>Apartament Number</label>
        <input
          type="text"
          id="aptNum"
          placeholder="Street name"
          {...register('aptNum')}
        />
        <label>Zipcode</label>
        <input
          type="text"
          id="zipcode"
          placeholder="15900"
          {...register('zipcode')}
        />
        <label>City</label>
        <input
          type="text"
          id="city"
          placeholder="Madrid"
          {...register('city')}
        />
        <label>Country</label>
        <input
          type="text"
          id="country"
          placeholder="Spain"
          {...register('country')}
        />
        <label>Phone</label>
        <input
          type="text"
          id="phone"
          placeholder="787652901"
          {...register('phone', {
            maxLength: 9,
            pattern: {
              value: /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[-. \\/]?)?((?:\(?\d{1,}\)?[-. \\/]?){0,})(?:[-. \\/]?(?:#|ext\.?|extension|x)[-. \\/]?(\d+))?$/i
            }
          })}
        />
        {errors.phone && errors.phone.type === 'maxLength' ? (
          <p>{errorMessage.maxPhoneLength}</p>
        ) : null}
        {errors.phone && errors.phone.type === 'pattern' ? (
          <p>{errorMessage.integerPattern}</p>
        ) : null}
        <br />
        <label>Payment Method Info:</label>
        <br />
        <label>Credit Card Number</label>
        <input
          type="text"
          id="creditCard"
          placeholder="4552..."
          {...register('creditCard', {
            maxLength: 16,
            minLength: 16,
            pattern: {
              value: /^\+?(0|[1-9]\d*)$/
            }
          })}
        />
        {errors.creditCard && errors.creditCard.type === 'pattern' ? (
          <p>{errorMessage.integerPattern}</p>
        ) : null}
        {errors.creditCard && errors.creditCard.type === 'maxLength' ? (
          <p>{errorMessage.maxCCLength}</p>
        ) : null}
        {errors.creditCard && errors.creditCard.type === 'minLength' ? (
          <p>{errorMessage.minCCLength}</p>
        ) : null}
        <br />
        <label>Expiration Date (MM/YY)</label>
        <input
          type="text"
          id="monthExpirationDate"
          placeholder="09"
          {...register('monthExpirationDate', {
            maxLength: 2,
            minLength: 2
          })}
        />
        {errors.monthExpirationDate &&
        errors.monthExpirationDate.type === 'maxLength' ? (
          <p>{errorMessage.maxExpLength}</p>
        ) : null}
        {errors.monthExpirationDate &&
        errors.monthExpirationDate.type === 'minLength' ? (
          <p>{errorMessage.minExpLength}</p>
        ) : null}
        /
        <input
          type="text"
          id="yearExpirationDate"
          placeholder="29"
          {...register('yearExpirationDate', {
            maxLength: 2,
            minLength: 2
          })}
        />
        {errors.yearExpirationDate &&
        errors.yearExpirationDate.type === 'maxLength' ? (
          <p>{errorMessage.maxExpLength}</p>
        ) : null}
        {errors.yearExpirationDate &&
        errors.yearExpirationDate.type === 'minLength' ? (
          <p>{errorMessage.minExpLength}</p>
        ) : null}
        <br />
        <button type="submit">Register</button>
        <br />
      </form>
    </>
  );
}