import React, { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../Auth";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import InputText from "./InputText";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState("");
  const [loading, setLoading] = useState();
  const [error, setError] = useState(false);

  const { login } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Login failed!");
    }
  };

  return (
    <Form
      text="New on our platform?"
      switch_text=" Create an account"
      path="/signup"
      onSubmit={handleSubmit}
    >
      <InputText
        required
        type="email"
        label="Email"
        placeholder="example@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputText
        required
        type="password"
        label="Password"
        placeholder="....."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Checkbox
        label="Remember me!"
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      />

      <Button disabled={loading} type="submit">
        Login
      </Button>
      {error && <p className="login__error">{error}</p>}
    </Form>
  );
};

export default LoginForm;
