import React, { useState } from 'react';
import * as style from './SignUpForm.module.scss';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const SignUpForm = () => {
  const [emailState, setEmailState] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const [confirmPassword, setConfirmPasswordState] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordState !== confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);

      await signUp(emailState, passwordState);
      history.push('/dashboard');
    } catch {
      setError('Failed to create user');

      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <h1 className={style.form_title}>Sign Up</h1>

      {error && <p className={style.form_error}>{error}</p>}
      <label className={style.form_label}>
        <p>email</p>
        <input
          className={style.form_input}
          type='email'
          onChange={(e) => setEmailState(e.target.value)}
          value={emailState}
          required
        />
      </label>
      <label className={style.form_label}>
        <p>password</p>
        <input
          className={style.form_input}
          type='password'
          onChange={(e) => setPasswordState(e.target.value)}
          value={passwordState}
          required
        />
      </label>
      <label className={style.form_label}>
        <p>confirm password</p>
        <input
          className={style.form_input}
          type='password'
          onChange={(e) => setConfirmPasswordState(e.target.value)}
          value={confirmPassword}
          required
        />
      </label>

      <button disabled={loading} type='submit' className={style.form_btn}>
        sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
