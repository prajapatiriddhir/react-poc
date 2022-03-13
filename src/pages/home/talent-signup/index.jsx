import { Input } from "../../../components";

export const TalentSignup = ({
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
}) => {
  return (
    <>
      <Input
        placeholder="First Name"
        fullWidth
        label="First Name *"
        name="firstName"
        error={errors.firstName}
        helperText={touched.firstName && errors.firstName}
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Input
        placeholder="Last Name"
        fullWidth
        label="Last Name *"
        name="lastName"
        error={errors.lastName}
        helperText={touched.lastName && errors.lastName}
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Input
        placeholder="Username"
        fullWidth
        label="Username *"
        name="username"
        error={errors.username}
        helperText={touched.username && errors.username}
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Input
        placeholder="Email"
        fullWidth
        label="Email *"
        name="email"
        error={errors.email}
        helperText={touched.email && errors.email}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Input
        placeholder="Password"
        fullWidth
        label="Password *"
        name="password"
        error={errors.password}
        helperText={touched.password && errors.password}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        type='password'
      />
    </>
  );
};
