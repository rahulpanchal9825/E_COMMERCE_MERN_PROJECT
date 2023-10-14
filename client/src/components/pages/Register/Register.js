import "../Register/Register.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [name, setname] = useState();
  const [phone, setphone] = useState();
  const [address, setaddress] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();
  
  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3002/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password,name,phone,address }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (result.success === true) {
      navigate("/login");
	  alert("Registered successful");
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
            <h2 style={{ marginTop: "10px" }}>Register</h2>
            <form class="login">
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input
                  type="text"
                  class="login__input"
                  placeholder="Enter Your Name"
                  onChange={(e) => setname(e.target.value)}
                  value={name}
                />
                <input
                  type="email"
                  class="login__input"
                  placeholder="Enter Your Email"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                />
                 <input
                  type="text"
                  class="login__input"
                  placeholder="Enter Your Phone"
                  onChange={(e) => setphone(e.target.value)}
                  value={phone}
                />
              </div>
              <input
                  type="text"
                  class="login__input"
                  placeholder="Enter Your Address"
                  onChange={(e) => setaddress(e.target.value)}
                  value={address}
                />
              
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
                <span class="button__text">Register Now</span>
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

export default Register;
