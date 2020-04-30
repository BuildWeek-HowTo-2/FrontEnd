import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { postUserLogin, postInstructorLogin } from '../store/actions/login.action';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import styled from 'styled-components'

const formSchema = yup.object().shape({
  username: yup.string().required("User name is a required field"),
  password: yup.string().required('Password is required'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
 });

export default function Login() {
    let history = useHistory()
    let url = window.location.href;
    const dispatch = useDispatch()
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
    console.log({formState})
    url.match(/instructor/gi) ? 
    dispatch(postInstructorLogin(formState)) : 
    dispatch(postUserLogin(formState))
    url.match(/instructor/gi) ? history.push('/tutorialList') : history.push('/user/dashboard')
  }

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

