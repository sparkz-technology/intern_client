import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { FormContainer, Container, Row, StyledLink } from "../styles/Form";
import { signup } from "../services/apiAuth";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])/,
      "Password must contain at least one lowercase letter"
    )
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter"
    )
    .matches(/^(?=.*\d)/, "Password must contain at least one number")
    .matches(
      /^(?=.*[@$!%*?&])/,
      "Password must contain at least one special character"
    ),
});

function Signup() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navivate = useNavigate();
  const onSubmit = async (data) => {
    const { name, email, password } = data;
    const res = await signup(name, email, password);
    if (!res.error) {
      navivate("/login");
    }
  };

  return (
    <>
      <Container>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <h1>Signup</h1>
          <Row>
            <label>Name</label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input type="text" placeholder="Name" {...field} />
              )}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </Row>
          <Row>
            <label>Email</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input type="text" placeholder="Email" {...field} />
              )}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </Row>
          <Row>
            <label>Password</label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input type="password" placeholder="Password" {...field} />
              )}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </Row>
          <StyledLink to="/login">Already have an account ?</StyledLink>
          <button type="submit">Submit</button>
        </FormContainer>
      </Container>
    </>
  );
}

export default Signup;
