import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../Auth";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import InputText from "./InputText";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState("");
  const [loading, setLoading] = useState();
  const [error, setError] = useState(false);

  const { signup } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Password not match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      history.push("/");
    } catch (err) {
      setLoading(false);
      setError("Create account failed!");
    }
  };
  return (
    <Form
      text="Already have an account ?"
      switch_text="Sign in instead"
      path="/login"
      onSubmit={handleSubmit}
    >
      <InputText
        required
        type="text"
        label="Username"
        placeholder="admin"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
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
      <InputText
        required
        type="password"
        label="Confirm Password"
        placeholder="....."
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Checkbox
        required
        label="I agree to"
        labelLink="privacy policy & terms"
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      />

      <Button disabled={loading} type="submit">
        Signup
      </Button>
      {error && <p className="pass__error">{error}</p>}
    </Form>
  );
};

export default SignupForm;
