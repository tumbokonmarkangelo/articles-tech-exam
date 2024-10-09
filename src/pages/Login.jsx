import LoginForm from "../components/LoginForm";
import logo from "../logo.svg";

const Login = () => {
  return (
    <>
      <div className="max-w-lg mx-auto py-6 px-5 border border-black rounded">
        <div className="flex justify-center py-5">
          <img src={logo} alt="logoipsum" />
        </div>
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
