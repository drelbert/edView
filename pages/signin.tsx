import AuthForm from "../components/authForm";

const Signin = function signin() {
  return <AuthForm mode="signin" />;
};

// adding a property to the object Signin, opt out of the global theme
Signin.authPage = true;

export default Signin;
