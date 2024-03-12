import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate("/signin");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Signup now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                id="username"
                placeholder="username"
                className="input input-bordered"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="email"
                className="input input-bordered"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                id="password"
                placeholder="password"
                className="input input-bordered"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button disabled={loading} className="btn btn-primary">
                {loading ? (
                  <span className="loading loading-dots loading-md"></span>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
            <label className="label">
              Have an account?
              <Link
                to="/signin"
                className="text-blue-700 label-text-alt link link-hover"
              >
                signin
              </Link>
            </label>
            <p className="text-red-700 mt-5">
              {error && "Something went wrong!"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
