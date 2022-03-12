import React, { useState } from "react";
import logo from "../assets/logo.png";
import loginSVG from "../assets/loginSvg.svg";
import CheckBox from "../components/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";

export default function Login() {
  const navigate = useNavigate();
  const [isChecked, setIschecked] = useState(false);
  return (
    <div className="auth__container">
      <div className="auth__container__left">
        <img src={logo} alt="logo" className="auth__container__left__img" />
        <form
          onSubmit={() => {
            navigate("/dashboard");
          }}
          className="auth__container__left__form"
        >
          <div className="auth__container__left__form__heading">Login</div>
          <InputBox
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.166"
                height="17.562"
                viewBox="0 0 22.166 17.562"
              >
                <g
                  id="Icon_feather-mail"
                  data-name="Icon feather-mail"
                  transform="translate(-1.955 -5.25)"
                >
                  <path
                    id="Path_21801"
                    data-name="Path 21801"
                    d="M5.008,6H21.069a2.014,2.014,0,0,1,2.008,2.008V20.054a2.014,2.014,0,0,1-2.008,2.008H5.008A2.014,2.014,0,0,1,3,20.054V8.008A2.014,2.014,0,0,1,5.008,6Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    id="Path_21802"
                    data-name="Path 21802"
                    d="M23.077,9,13.038,16.027,3,9"
                    transform="translate(0 -0.992)"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </g>
              </svg>
            }
            type="email"
            placeholder="Email"
            error=""
          />
          <InputBox
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.099"
                height="19.976"
                viewBox="0 0 18.099 19.976"
              >
                <g
                  id="Icon_feather-lock"
                  data-name="Icon feather-lock"
                  transform="translate(0.6 0.6)"
                >
                  <path
                    id="Path_6620"
                    data-name="Path 6620"
                    d="M6.378,16.5H19.521A1.878,1.878,0,0,1,21.4,18.378v6.572a1.878,1.878,0,0,1-1.878,1.878H6.378A1.878,1.878,0,0,1,4.5,24.949V18.378A1.878,1.878,0,0,1,6.378,16.5Z"
                    transform="translate(-4.5 -8.051)"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                  />
                  <path
                    id="Path_6621"
                    data-name="Path 6621"
                    d="M10.5,11.449V7.694a4.694,4.694,0,1,1,9.388,0v3.755"
                    transform="translate(-6.745 -3)"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                  />
                </g>
              </svg>
            }
            type="password"
            placeholder="Password"
            error=""
          />
          <div className="auth__container__left__form__row">
            <CheckBox
              value={isChecked}
              label="Remember me"
              labelColor="#8d8c8c"
              checkedColor="transparent"
              unCheckedColor="transparent"
              iconColor="#ffffff"
              onChange={() => {
                isChecked ? setIschecked(false) : setIschecked(true);
              }}
            />
            <Link
              to="/forgot_password"
              className="auth__container__left__form__row__link"
            >
              Forget Password?
            </Link>
          </div>
          <button className="auth__container__left__form__button">Login</button>
          <div className="auth__container__left__form__row__link">
            Don't Have An Account ? <Link to="/sign_up">Sign Up</Link>
          </div>
        </form>
      </div>

      <div className="auth__container__right">
        <img
          src={loginSVG}
          alt="loginSVG"
          className="auth__container__right__img"
        />
      </div>
    </div>
  );
}
