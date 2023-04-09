import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    phone: "",
    password: "",
  });
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("userwhatapp");
    console.log(getuserArr);
    const { email, password } = inpval;

    if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("please Enter Vaild Email Address");
    } else if (!email.includes(".com")) {
      alert("please Enter Vaild Email Address");
    } else if (password === "") {
      alert("password field is required");
    } else if (password.length < 5) {
      alert("Required Password Legnth greater Than 5 ");
    } else {
      if (getuserArr && getuserArr.length) {
        const userData = JSON.parse(getuserArr);
        const userlogin = userData.filter((el, k) => {
          return el.email === email && el.password === password;
        });
        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("User Login Sucessfully");

          const currentUser = userlogin[0];
          localStorage.setItem("name", currentUser.name);
          localStorage.setItem("phone", currentUser.phone);
          localStorage.setItem("date", currentUser.date);

          
          setInpval(currentUser);
          setIsLoggedIn(true); 
          localStorage.setItem("user_login", JSON.stringify(getuserArr));
          setIsLoggedIn(true); 
        }
      }
    }
  };

  return (
    <>
      <div className="">
        <section>
          <div className="row">
            <div className="col-md-4">
              <div className="container mt-3">
                <h3 className="text-center mb-3 col-lg-6">Sign In</h3>
                <Form>
                  <Form.Group
                    className="mb-3 col-lg-6"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      onChange={getdata}
                      placeholder="Enter Your Email "
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 col-lg-6"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      onChange={getdata}
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Button
                    variant="secondary"
                    className="col-lg-6 mt-4"
                    type="submit"
                    onClick={addData}
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
            {isLoggedIn && (
              <div className="col-md-5" style={{ marginTop: "4px" }}>
                <div
                  className="container mt-3 p-3 bg-dark rounded"
                  style={{ fontSize: "1.2em" }}
                >
                  <h4 className="text-center mb-3">
                    <strong>Profile Information</strong>
                  </h4>
                  <div>
                    <p>
                      <strong>Email:</strong> {inpval.email}
                    </p>
                    <p>
                      <strong>Name:</strong> {localStorage.getItem("name")}
                    </p>
                    <p>
                      <strong>Phone:</strong> {localStorage.getItem("phone")}
                    </p>
                    <p>
                      <strong>Date Of Registration:</strong>{" "}
                      {localStorage.getItem("date")}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
