import React, { useState } from 'react';
import * as style from './LoginForm.module.scss';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory, Link } from 'react-router-dom';

const LoginForm = () => {
  const [emailState, setEmailState] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailState, passwordState);
      history.push('/dashboard');
    } catch {
      setError('Failed to log in');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <h1 className={style.form_title}>Log In</h1>
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

      <button disabled={loading} type='submit' className={style.form_btn}>
        login
      </button>

      <div>
        <Link to='/forgot-password'>Forgot password?</Link>
      </div>
    </form>
  );
};

export default LoginForm;
