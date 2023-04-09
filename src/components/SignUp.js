  import React, { useState } from "react";
  import Form from "react-bootstrap/Form";
  import Button from "react-bootstrap/Button";
  import { NavLink } from "react-router-dom";


  function SignUp() {
    const [showForm, setShowForm] = useState(false);
    const [inpval, setInpval] = useState({
      name: "",
      email: "",
      date: "",
      phone: "",
      password: "",
      confirmpassword: "",
    });
    

    const [data, setData] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false); 

    console.log(inpval);

    const getdata = (e) => {

      const { value, name } = e.target;

      setInpval(() => {
        return {
          ...inpval,
          [name]: value,
        };
      });
    };

    const handleClick = () => {
    setShowForm(!showForm);
  };
    const addData = (e) => {
      e.preventDefault();
      console.log(inpval);

      const { name, email, date, phone, password, confirmpassword } = inpval;

      if (name === "") {
        alert("name field is required");
      } else if (email === "") {
        alert("email field is required");
      } else if (!email.includes("@")) {
        alert("please Enter Vaild Email Address");
      } else if (!email.includes(".com")) {
        alert("please Enter Vaild Email Address");
      } else if (date === "") {
        alert("Date Field is Required");
      } else if (phone === "") {
        alert("Phone Number field is required ");
      } else if (phone.length < 10) {
        alert("Required Phone Number Legnth greater Than 10 ");
      } else if (password === "") {
        alert("password field is required");
      } else if (password.length < 5) {
        alert("Required Password Legnth greater Than 5 ");
      } else if (password !== confirmpassword) {
        
        alert("Password and Confirm Password fields do not match");
      } else {
        console.log("data added sucessfully");

        localStorage.setItem("userwhatapp", JSON.stringify(...data, [inpval]));
        setIsSuccess(true); 
      }
    };
    if (isSuccess) { 
      return (
        <>
          <div className="container mt-3">
            <section>
              <div className="center-data">
                <h3 className="text-center col-lg-5">Thank you for signing up!</h3>
                <NavLink to='/' className="col-lg-4 mt-4">
                  <Button variant="secondary"onClick={handleClick}>Go to Home Page</Button>
                </NavLink>
              </div>
            </section>
          </div>
        </>
      );
    }
  
    return (
      <>
        <div className="container" mt-3>
          <section>
            <div className="center-data">
              <h3 className="text-center col-lg-5">Sign Up</h3>
              <Form>
                <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                  <Form.Label> Name </Form.Label>
                  <Form.Control
                    type="name"
                    name="name"
                    onChange={getdata}
                    placeholder="Enter Your Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={getdata}
                    placeholder="Enter Your Email "
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                  <Form.Label>Date</Form.Label>
                  <Form.Control name="date" onChange={getdata} type="date" />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                  <Form.Label> Mobile Number </Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    onChange={getdata}
                    placeholder="Enter Your Mobile Number"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 col-lg-4"
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
                <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                  <Form.Label> Confirm Password </Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmpassword"
                    onChange={getdata}
                    placeholder="Confirm Password "
                  />
                </Form.Group>

                <Button
                  variant="secondary"
                  className="col-lg-4 mt-4"
                  type="submit"
                  onClick={addData}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </section>
        </div>
      </>
    );
  }

  export default SignUp;
