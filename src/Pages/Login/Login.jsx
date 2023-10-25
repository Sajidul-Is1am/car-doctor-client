import { Link } from "react-router-dom";
import registar1 from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const {handleLogin} = useContext(AuthContext)

  const loingSubmit = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value
    const password = form.password.value
    handleLogin(email, password)
      .then(res => {
      console.log(res.user);
      })
      .then(error => {
      console.log(error.message);
    })
  }



  return (
    <div>
      <div className="hero min-h-screen bg-base-200 mt-10">
        <div className="hero-content flex gap-10 items-center">
          <div className="text-center lg:text-left">
            <img src={registar1} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h3 className="text-3xl font-bold text-center my-4">Login</h3>
            <form onSubmit={loingSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  You don't have any Account?
                  <Link
                    to={"/registration"}
                    href="#"
                    className="label-text-alt link link-hover text-blue-600 text-sm underline"
                  >
                    Registration
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary text-white">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
