import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TermsModal from './TermCondition';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  username: yup.string().required('Full Name is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirm_password: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export default function Register({ onRegister }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched', // Validate on blur
  });

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    const modalElement = document.getElementById('termsModal');
    const modal = window.bootstrap.Modal.getInstance(modalElement);
    modal.hide();
  };

  const onSubmit = data => {
    delete data.confirm_password;
    onRegister(data);
  };

  return (
    <div className="sign-in-form-wrapper signup-form-wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="default-input-label-wrap">
          <label htmlFor="email" className="form-label">Email</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1"><i className="bi bi-envelope"></i></span>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              placeholder="Enter Your Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
              id="email"
              {...register('email')}
            />
            {errors.email && <div className="invalid-feedback d-block">{errors.email.message}</div>}
          </div>
        </div>
        <div className="default-input-label-wrap">
          <label htmlFor="name" className="form-label">Full Name</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2"><i className="bi bi-person"></i></span>
            <input
              type="text"
              className={`form-control ${errors.username ? 'is-invalid' : ''}`}
              placeholder="Enter Your Name"
              aria-label="Enter Your Name"
              aria-describedby="basic-addon2"
              id="name"
              {...register('username')}
            />
            {errors.username && <div className="invalid-feedback d-block">{errors.username.message}</div>}
          </div>
        </div>
        <div className="default-input-label-wrap">
          <label htmlFor="password" className="form-label">Password</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3"><i className="bi bi-shield-lock"></i></span>
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              placeholder="Enter Password"
              aria-label="Enter Password"
              aria-describedby="basic-addon3"
              id="password"
              {...register('password')}
            />
            {errors.password && <div className="invalid-feedback d-block">{errors.password.message}</div>}
          </div>
        </div>
        <div className="default-input-label-wrap">
          <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon4"><i className="bi bi-shield-lock"></i></span>
            <input
              type="password"
              className={`form-control ${errors.confirm_password ? 'is-invalid' : ''}`}
              placeholder="Enter Confirm Password"
              aria-label="Enter Confirm Password"
              aria-describedby="basic-addon4"
              id="confirm_password"
              {...register('confirm_password')}
            />
            {errors.confirm_password && <div className="invalid-feedback d-block">{errors.confirm_password.message}</div>}
          </div>
        </div>
        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="terms_conditions" required />
          <label className="form-check-label" htmlFor="terms_conditions">
            I agree to the <a href="/" onClick={handleModalOpen}>Terms & Conditions</a>
          </label>
        </div>
        <div className="submit-btn-wrap">
          <button className="btn btn-primary" type="submit">Register</button>
        </div>
      </form>
      <TermsModal show={showModal} handleClose={handleModalClose} />
    </div>
  );
}
