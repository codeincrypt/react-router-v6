import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { UserContext } from "../App";

const Login = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({ username: "", password: "" });
  const { dispatch } = useContext(UserContext);
  const handleChange = (e) => {
    data[e.target.name] = e.target.value;
    setData({ ...data });
  };

  const handleSubmit = async () => {
    let url = "https://dummyjson.com/auth/login";
    let setting = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(url, setting);
      const result = await response.json();
      console.log("result", result);
      if (result.message === "Invalid credentials") {
        alert("Invalid username & password");
      } else {
        localStorage.setItem("adminlogin", result.token);
        localStorage.setItem("admin", JSON.stringify(result));
        dispatch({ type: "ADMIN", payload: result.token });
        navigate("/admin");
        alert("Login Successfully");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const admin = localStorage.getItem("adminlogin");
    if (admin) {
      navigate('/admin');
    }
  }, [navigate]);

  return (
    <React.Fragment>
      <div style={{ height: "60vh", paddingTop: 100 }}>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <h2>Login </h2>
            <Form.Control
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => handleChange(e)}
            />
            <Form.Control
              type="text"
              name="password"
              className="mt-2"
              placeholder="Password"
              onChange={(e) => handleChange(e)}
            />
            <div className="text-center mt-3">
              <button className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
            </div>

            <div className="mt-4">
              <h6><span>Demo Login Credentials</span></h6>
              <span>Username: <b>kminchelle</b> - </span>
              <span>Password: <b>0lelplR</b></span>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
