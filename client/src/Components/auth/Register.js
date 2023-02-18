import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock,faCalendar, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({});
  const [dob, setDob] = useState("");
  const navigate = useNavigate();

  async function registerUser(event) {
    event.preventDefault();
    if (password !== password2) {
      setErrors({ password2: "Passwords must match" });
      return;
    }

    // Check if any field is empty
    if (!name) {
      toast.error("Please enter your name");
      return;
    }
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    if (!dob) {
      toast.error("Please enter your date of birth");
      return;
    }

    if (!password) {
      toast.error("Please enter your password");
      return;
    }
    if (!password2) {
      toast.error("Please confirm your password");
      return;
    }
    const params = new URLSearchParams();
    params.append("name", name);
    params.append("email", email);
    params.append("password", password);
    params.append("password2", password2);
    params.append("dob", dob);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/register",
        params,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      const data = response.data;
      toast.success("Registration Successful!");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      console.log(JSON.stringify(data) + "dataaa");
    } catch (error) {
      console.error(error);
      console.log(errors);
      toast.error("Registration Failed!");
    }
  }

  return (
    <div className="section">
      <div class="register-container">
        <div class="register-title">
          <h2>Sign In</h2>
        </div>

        <div className="register-form">
          <br />
          <br />
          <form onSubmit={registerUser}>
            <div className="form-group">
              <label>
                <FontAwesomeIcon icon={faUser} />
              </label>
              <input
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>
                <FontAwesomeIcon icon={faEnvelope} />
              </label>
              <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
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
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>
                <FontAwesomeIcon icon={faLock} />
              </label>
              <input
                type="password"
                value={password2}
                placeholder="Confirm Password"
                onChange={(e) => setPassword2(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>
                <FontAwesomeIcon icon={faCalendar} />
              </label>
              <input
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-danger centered ">
              Register
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Register;
