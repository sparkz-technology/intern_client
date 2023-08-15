import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormContainer, Container, Row, StyledLink } from "../styles/Form";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

function Signup() {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const onSubmit = async (data) => {
    const { email, password } = data;
    await login(email, password);
    console.log(isAuthenticated);
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/products");
    }
  }, [isAuthenticated, navigate]);
  return (
    <Container>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <Row>
          <label>Email</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input type="text" placeholder="Email" {...field} />
            )}
          />
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
        </Row>
        <StyledLink to="/signup">Don&apos;t have an account?</StyledLink>
        <button type="submit">Submit</button>
      </FormContainer>
    </Container>
  );
}

export default Signup;
