import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
// import styled from 'styled-components'

const formSchema = yup.object().shape({
  username: yup.string().required("User name is a required field"),
  password: yup.string().required('Password is required'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
 });

export default function Login() {
  // state for whether our button should be disabled or not.
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // managing state for our form inputs
  const [formState, setFormState] = useState({
    username: "",
    password: ""
  });

  // state for our errors
  const [errors, setErrors] = useState({
    username: "",
    password: ""
  });

  // new state to set post request to. 
  const [post, setPost] = useState([]);

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const formSubmit = e => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then(res => {
        setPost(res.data); // get form data from the REST api

        // reset form if successful
        setFormState({
          username: "",
          password: ""
        });
      })
      .catch(err => console.log(err.response));
  };

  const validateChange = e => {
    // Reach will allow us to "reach" into the schema and test only one part.
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [e.target.name]: ""
        });
      })
      .catch(err => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0]
        });
      });
  };

  const inputChange = e => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value
    };

    validateChange(e);
    setFormState(newFormData);
  };

  return (
    <form onSubmit={formSubmit}>
      <h2>Login</h2>
      <label htmlFor="username">
      User Name 
      <input
          type="text"
          name="username"
          value={formState.username}
          onChange={inputChange}
        />      
        {errors.username.length > 0 ? <p className="error">{errors.username}</p> : null}
      </label>
      
      <label htmlFor="password">
      Password
      <input 
          type="password"
          name="password"
          value={formState.password}
          onChange={inputChange}
        />
        {errors.password.length > 0 ? (
          <p className="error">{errors.password}</p>
        ) : null}
      </label>
     
      <pre>{post.length > 0 && JSON.stringify(post, null, 2)}</pre>
      <button disabled={buttonDisabled}>Submit</button>
    
    </form>
    
  );
}


// styled components below...

// const Form = styled.form`
// width: 40%;
// height: 500px;
// margin: 1rem auto;
// background: #E3C291;
// font-family: Roboto;
// `
// const BigDiv = styled.div`
// display: flex-flow;
// align-items: center;
// margin: 10% 10% 10% 10%;
// justify-content: space-around;

// `

// const SignInH2 = styled.h2`
// margin-top: 20%; 
// text-align: center;
// font-size: 2rem;
// margin: 30% 30% 30% 10%;
// `
// const Label = styled.label`
// text-align: center;
// font-size: 1rem;
// margin: 30% 30% 30% 10%;
// margin-left: 10%;
// `
// const Button = styled.button `
// margin: 30% 30% 30% 10%;
// width: 200px;
// height: 40px;
// font-weight: bold;
// font-size: 24px;
// // line-height: 28px;
// text-align: center;
// color: #FFFFFF;
// background: #45933E;
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
// border-radius: 4px;
// `



