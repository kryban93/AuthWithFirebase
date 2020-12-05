import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import * as style from './SignUpView.module.scss';

const SignUpView = () => {
  return (
    <div>
      <SignUpForm />
      <div className={style.container}>
        <p className={style.description}>Already have an account?</p>
        <Link to='/login'>
          <button className={`${style['btn-redirect']} ${style.btn}`}>log In</button>
        </Link>
      </div>
      <Link to='/'>
        <button className={`${style['btn-back']} ${style.btn}`}>back to landing page</button>
      </Link>
    </div>
  );
};

export default SignUpView;
