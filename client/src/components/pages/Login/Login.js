import "../Login/Login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [auth, setauth] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  
  const navigate = useNavigate();
  
  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3002/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (result.auth) {
      navigate("/");
      setauth({
        ...auth,
        user: result.user,
        token: result.auth,
      });
      localStorage.setItem("user",JSON.stringify(result.user));
      localStorage.setItem("token",JSON.stringify(result.auth));
      
	  
	  alert("Login successful");
    }
    if (result.success === false) {
      alert(result.message);
      console.log(result);
    }
  };
  return (
    <div>
      <div class="container">
        <div class="screen">
          <div class="screen__content">
            <h2 style={{ marginTop: "10px" }}>LOGIN</h2>
            <form class="login">
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input
                  type="text"
                  class="login__input"
                  placeholder="Enter Your Email"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                />
              </div>
              <div class="login__field">
                <i class="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  class="login__input"
                  value={password}
                  placeholder="Enter Your Password"
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <button class="button login__submit" onClick={handlesubmit}>
                <span class="button__text">Log In Now</span>
                <i class="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
            <div class="social-login"></div>
          </div>
          <div class="screen__background">
            <span class="screen__background__shape screen__background__shape4"></span>
            <span class="screen__background__shape screen__background__shape3"></span>
            <span class="screen__background__shape screen__background__shape2"></span>
            <span class="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
