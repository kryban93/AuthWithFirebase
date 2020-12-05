import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import * as style from './LoginView.module.scss';

const LoginView = () => {
  return (
    <div>
      <LoginForm />
      <div className={style.container}>
        <p className={style.description}>Need an account? </p>
        <Link to='/signup'>
          <button className={`${style['btn-redirect']} ${style.btn}`}>sign Up</button>
        </Link>
      </div>
      <Link to='/'>
        <button className={`${style['btn-back']} ${style.btn}`}>back to landing page</button>
      </Link>
    </div>
  );
};

export default LoginView;
