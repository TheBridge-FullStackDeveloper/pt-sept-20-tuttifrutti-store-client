import { useForm } from 'react-hook-form';

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  const handleFormSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <>
      <h3>Welcome to the Tutti-Frutti Store</h3>
      <h6>Please login with your credentials</h6>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="jondoe@gmail.com"
          {...register('email', {
            required: true
          })}
        />
        {errors.email && errors.email.type === 'required' ? (
          <p>Email field is required</p>
        ) : null}
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          {...register('password', { required: true })}
        />
        {errors.password && errors.password.type === 'required' ? (
          <p>Password field is required</p>
        ) : null}
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
