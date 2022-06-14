import AuthForm from "../components/authForm";

const Signup = function signup() {
  return <AuthForm mode="signup" />;
};

// adding a property to the object Signup, opt out of the global theme
Signup.authPage = true;

export default Signup;
