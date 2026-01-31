import { useState, Link, signinBtn, signinForm, signinFormDiv, signinHeaderDiv, signinHeaderH1, signinHeaderP, signinInputClass, signinLabelClass, signinMainDiv, signinSignUp, signinSignUpLink, signinWFull } from '../../constants/imports';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  }

  return (
    <div className={signinMainDiv}>

      <div className={signinHeaderDiv}>
        <h1 className={signinHeaderH1}> Sign In </h1>
        <p className={signinHeaderP}> Access your organization dashboard </p>
      </div>

      <div className={signinFormDiv}>
        <form onSubmit={submitHandler} className={signinForm}>

          <div className={signinWFull}>
            <label className={signinLabelClass}> Email Address </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="Enter your email" className={signinInputClass} />
          </div>

          <div className={signinWFull}>
            <label className={signinLabelClass}> Password </label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} required type="password" placeholder="Enter your password" className={signinInputClass} />
          </div>

          <button className={signinBtn}> Sign In </button>

          <p className={signinSignUp}> Not a registered user ?
            <Link to="/signup" className={signinSignUpLink}> Sign Up </Link>
          </p>

        </form>
      </div>
    </div>
  )
}

export default Login;