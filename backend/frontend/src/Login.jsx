import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter all fields');
      return;
    }

    try {
      const response = await fetch('https://placement-handler.onrender.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
        navigate('/dashboard'); // ✅ React Router redirection
      } else {
        setError(data.msg || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f7f9;
        }

        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          width: 100vw;
          background-color: #e6f0ff;
          padding: 2rem;
          box-sizing: border-box;
        }

        .login-card {
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          padding: 3rem 2rem;
          width: 100%;
          max-width: 400px;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .login-card:hover { transform: translateY(-5px); }

        .login-header h1 { color: #007bff; margin-bottom: 0.5rem; font-size: 2rem; font-weight: 600; }
        .login-header p { color: #666; margin-bottom: 2rem; font-size: 1rem; }

        .form-group { margin-bottom: 1.5rem; text-align: left; }
        .form-group label { display: block; margin-bottom: 0.5rem; font-weight: 600; color: #444; }
        .form-group input {
          width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 8px;
          box-sizing: border-box; font-size: 1rem; transition: border-color 0.3s;
        }
        .form-group input:focus {
          outline: none; border-color: #007bff;
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
        }

        .error-message { color: red; font-size: 0.9rem; margin-top: -1rem; margin-bottom: 1rem; }

        .forgot-password { text-align: right; margin-bottom: 1.5rem; }
        .forgot-password a { color: #007bff; text-decoration: none; font-size: 0.9rem; }
        .forgot-password a:hover { text-decoration: underline; }

        .button-group { display: flex; gap: 1rem; margin-top: 1.5rem; }

        .login-button {
          background-color: #28a745; color: white; border: none;
          padding: 0.75rem 1.5rem; border-radius: 8px; width: 100%;
          cursor: pointer; font-size: 1.1rem; font-weight: bold;
          transition: background-color 0.3s, transform 0.2s;
        }
        .login-button:hover { background-color: #218838; transform: translateY(-2px); }

        .register-button {
          background-color: #007bff; color: white; border: none;
          padding: 0.75rem 1.5rem; border-radius: 8px; width: 100%;
          cursor: pointer; font-size: 1.1rem; font-weight: bold;
          transition: background-color 0.3s, transform 0.2s;
        }
        .register-button:hover { background-color: #0056b3; transform: translateY(-2px); }

        .login-footer { font-size: 0.9rem; color: #666; margin-top: 1.5rem; }
        .login-footer a { color: #007bff; text-decoration: none; }
        .login-footer a:hover { text-decoration: underline; }

        @media (max-width: 768px) {
          .login-container { padding: 1rem; }
          .login-card { padding: 2rem 1.5rem; }
          .login-header h1 { font-size: 8vw; }
          .login-header p { font-size: 4vw; }
          .form-group label, .form-group input, .login-button, .register-button { font-size: 4vw; }
          .forgot-password a, .login-footer { font-size: 3.5vw; }
        }
      `}</style>

      <div className="login-card">
        <div className="login-header">
          <h1>PLACEMENT CELL</h1>
          <p>Welcome back! Please log in to your account.</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email" id="email" placeholder="Enter your email"
              value={email} onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password" id="password" placeholder="Enter your password"
              value={password} onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="forgot-password">
            <a href="#forgot">Forgot Password?</a>
          </div>

          <div className="button-group">
            <button type="submit" className="login-button">Log in</button>
            <Link to="/register">
              <button type="button" className="register-button">Register</button>
            </Link>
          </div>
        </form>

        <div className="login-footer">
          <p>Don't have an account? <a href="#signup">Contact Administrator</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

