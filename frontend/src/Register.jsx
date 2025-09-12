import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Client-side validation to ensure all fields are filled
    if (!username || !email || !password) {
        setError('Please enter all fields');
        return;
    }

    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('User registered successfully:', data);
        // Redirect to dashboard on successful registration
        window.location.href = '/dashboard';
      } else {
        // Display error message from the backend
        setError(data.msg || 'Registration failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <style>{`
        /* General body styles */
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f7f9;
        }

        /* Login container */
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

        /* Login card */
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

        .login-card:hover {
          transform: translateY(-5px);
        }

        /* Header */
        .login-header h1 {
          color: #007bff;
          margin-bottom: 0.5rem;
          font-size: 2rem;
          font-weight: 600;
        }

        .login-header p {
          color: #666;
          margin-bottom: 2rem;
          font-size: 1rem;
        }

        /* Form styling */
        .form-group {
          margin-bottom: 1.5rem;
          text-align: left;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #444;
        }

        .form-group input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-sizing: border-box;
          font-size: 1rem;
          transition: border-color 0.3s;
        }

        .form-group input:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
        }

        .error-message {
            color: red;
            font-size: 0.9rem;
            margin-top: -1rem;
            margin-bottom: 1rem;
        }

        /* Login button */
        .login-button {
          background-color: #28a745;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          width: 100%;
          cursor: pointer;
          font-size: 1.1rem;
          font-weight: bold;
          transition: background-color 0.3s, transform 0.2s;
        }

        .login-button:hover {
          background-color: #218838;
          transform: translateY(-2px);
        }

        /* Footer */
        .login-footer {
          font-size: 0.9rem;
          color: #666;
          margin-top: 1.5rem;
        }

        .login-footer a {
          color: #007bff;
          text-decoration: none;
        }

        .login-footer a:hover {
          text-decoration: underline;
        }

        /* Media Queries for responsiveness */
        @media (max-width: 768px) {
          .login-container {
            padding: 1rem;
          }

          .login-card {
            padding: 2rem 1.5rem;
          }

          .login-header h1 {
            font-size: 8vw;
          }

          .login-header p {
            font-size: 4vw;
          }

          .form-group label, .form-group input, .login-button {
            font-size: 4vw;
          }

          .forgot-password a, .login-footer {
            font-size: 3.5vw;
          }
        }
      `}</style>

      <div className="login-card">
        <div className="login-header">
          <h1>PLACEMENT CELL</h1>
          <p>Create your new account.</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}

          
          <button type="submit" className="login-button">Register</button>
          
        </form>

        <div className="login-footer">
          <p>Already have an account? <Link to="/">Log in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
