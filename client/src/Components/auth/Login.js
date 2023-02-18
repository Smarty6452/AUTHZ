import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();

  async function loginUser(event) {
    event.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    if (!password) {
      toast.error("Please enter your password");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/login",
        {
          email,
          password,
        }
      );

      const data = response.data;
      console.log(JSON.stringify(data) + "dataaa");

      if (data) {
        toast.success("Login successful");
        localStorage.setItem("user", JSON.stringify(data)); // Save user info to local storage
        history("/Dashboard"); // Navigate to dashboard after successful login
      }
    } catch (error) {
      console.log(error);
      toast.error("Incorrect username or password");
    }
  }

  return (
    <div className="section">
      <div class="register-container">
        <div class="register-title">
          <h2>Log In</h2>
        </div>
        <div className="register-form">
          <br />
          <br />
          <ToastContainer />
          <form onSubmit={loginUser}>
            <div className="form-group">
              <label>
                <FontAwesomeIcon icon={faEnvelope} />
              </label>
              <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>
                <FontAwesomeIcon icon={faLock} />
              </label>
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <br />

            <button type="submit" className="btn btn-danger centered ">
                Login
              </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
