import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [message, setMessage] = useState('');

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    rollNumber: '',
    course: '',
    password: '',
    confirmPassword: ''
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage('');

    if (!isLogin) {
      if (
        form.password.length < 8 ||
        !/[A-Z]/.test(form.password) ||
        !/[^A-Za-z0-9]/.test(form.password)
      ) {
        setMessage(
          'Password needs 8 characters, one uppercase letter and one special character.'
        );
        return;
      }

      if (form.password !== form.confirmPassword) {
        setMessage('Passwords do not match.');
        return;
      }
    }

    try {
      const url = isLogin
        ? 'http://localhost:5000/api/auth/login'
        : 'http://localhost:5000/api/auth/register';

      const data = isLogin
        ? {
            email: form.email,
            password: form.password
          }
        : {
            name: form.name,
            email: form.email,
            phone: form.phone,
            rollNumber: form.rollNumber,
            course: form.course,
            password: form.password
          };

      const response = await axios.post(url, data);

      setMessage(response.data.message);

      if (isLogin) {
        localStorage.setItem('token', response.data.token);
        setMessage('Welcome, ' + response.data.student.name + '! Login successful.');
      } else {
        setForm({
          name: '',
          email: '',
          phone: '',
          rollNumber: '',
          course: '',
          password: '',
          confirmPassword: ''
        });
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message || 'Unable to connect to the server.'
      );
    }
  }

  return (
    <div className="page">
      <div className="form-box">
        <h1>{isLogin ? 'Student Login' : 'Student Registration'}</h1>

        <p>
          {isLogin
            ? 'Login to your student account'
            : 'Create your student account'}
        </p>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
              />

              <input
                name="rollNumber"
                placeholder="Roll Number"
                value={form.rollNumber}
                onChange={handleChange}
                required
              />

              <input
                name="course"
                placeholder="Course / Department"
                value={form.course}
                onChange={handleChange}
                required
              />
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          {!isLogin && (
            <>
              <div className="rules">
                <p>Choose a password with:</p>
                <p>{form.password.length >= 8 ? '✓' : '○'} At least 8 characters</p>
                <p>{/[A-Z]/.test(form.password) ? '✓' : '○'} One uppercase letter</p>
                <p>{/[^A-Za-z0-9]/.test(form.password) ? '✓' : '○'} One special character</p>
              </div>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </>
          )}

          <button type="submit">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        {message && <p className="message">{message}</p>}

        <p>
          {isLogin ? "Don't have an account?" : 'Already registered?'}
          <button
            className="switch-button"
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage('');
            }}
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default App;