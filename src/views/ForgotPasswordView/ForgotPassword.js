import React, { useState } from 'react';
import * as style from './ForgotPassword.module.scss';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [emailState, setEmailState] = useState('');

  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailState);
      setMessage('Check email for further instructions');
    } catch {
      setError('Failed to reset password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <h1 className={style.form_title}>Password Reset</h1>
      {error && <p className={style.form_error}>{error}</p>}
      {message && <p className={style.form_message}>{message}</p>}
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
      <button disabled={loading} type='submit' className={style.form_btn}>
        pasword reset
      </button>

      <div>
        <Link to='/login'>Login</Link>
      </div>
    </form>
  );
};

export default ForgotPassword;
