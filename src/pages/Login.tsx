import { FC } from "react";
import Logo from "../image/logo.png";
import Google from "../image/google.png";
import "../style/login.css";
import { IonButton, IonRouterLink } from "@ionic/react";
import { Link } from "react-router-dom";

const Login: FC = () => {
  return (
    <section className="loginSection container mx-auto relative h-full">
      <header className=" flex justify-center py-4 w-full">
        <img width="115px" src={Logo} alt="Logo" />
      </header>
      <img
        className="absolute top-0 bottom-0 w-full -z-10"
        width="100%"
        src="https://i.pinimg.com/474x/67/29/17/672917768ea26bdf4235647effa64b74.jpg"
        alt="background"
      />
      <div className="bottomSection text-center flex flex-col  absolute bottom-0 pt-10 pb-14 w-full">
        <p className="text-sm">
          Lorem ipsum dolor sit amet. <br /> Perspiciatis aperiam eos vel,
          fugiat <br /> enim ex autem at magnam dolor. Eveniet?
        </p>
        <IonRouterLink className="signbtn mx-10 my-5" href="/home">
          Sign In
        </IonRouterLink>
        <Link className="signbtn mx-10 my-5" to="/home">
          Sign In
        </Link>
        <button className="googlebtn mx-10 flex justify-center">
          <span className="me-3">
            <img width="20px" src={Google} alt="Google logo" />
          </span>
          <span>Continue with Google</span>
        </button>
      </div>
    </section>
  );
};
export default Login;
