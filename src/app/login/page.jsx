"use client";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { toast } from "sonner";



const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  

  const fixedUser = {
    email: "atofail50@gmail.com",
    password: "123456"
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { email, password };
    console.log(user);

    if (user.email === fixedUser.email && user.password === fixedUser.password) {
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Login Successful");
      setEmail('');
      setPassword('');
      router.push("/dashboard");
    } else {
      toast.error("Login Failed");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="text-primary-500 font-bold text-center my-2">Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <style jsx>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f0f2f5;
        }
        .login-form {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          width: 300px;
        }
        .form-group {
          margin-bottom: 1rem;
        }
        label {
          display: block;
          margin-bottom: 0.5rem;
        }
        input {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .login-button {
          width: 100%;
          padding: 0.5rem;
          border: none;
          border-radius: 4px;
          background-color: #0070f3;
          color: white;
          cursor: pointer;
        }
        .login-button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
