import Head from 'next/head'
import { useForm } from "react-hook-form";


function Login() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = () => {};

  return (
    <div className="container">
    <Head>
      <title>Fasta > Login </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="Container">
      <div className="FormContainer">
        <p className="AppTitle">Fasta</p>
        <form className="FormGroup" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="FormTitle">Login</h1>
          <input className="Input"
            type="text"
            ref={register({
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address",
              },
            })}
            name="email"
            placeholder="Email"
          />
          {errors.email && (
            <div className="ValidationError">{errors.email.message}</div>
          )}
          <input className="Input"
            type="text"
            ref={register({ required: "Password is required" })}
            name="password"
            placeholder="Password"
          />
          {errors.password && (
            <div className="ValidationError">{errors.password.message}</div>
          )}
          <p className="Text">Forgot Password</p>
          <button className="FormButton">LOGIN</button>
          <p className="Text">Don&apos;t have an Account? </p>
        </form>
          <div className="FormLink">REGISTER</div>
      </div>
    </div>

    <style jsx>{`
    //    * {
    //     box-sizing: border-box;
    //     margin: 0;
    //     padding: 0;
    //   }
    div.Container {
      margin: 0 auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    
    div.FormContainer {
      height: 100vh;
      margin: 0 auto;
      background: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    
    p.AppTitle {
      display: block;
      padding: 1.2rem 0;
      width: 23.4rem;
      text-align: center;
      font: Bold 14px/16px Arial;
      letter-spacing: 0px;
      color: #43a047;
      text-transform: uppercase;
    }
    
    h1.FormTitle {
      margin: 1.5rem 0;
      height: 22px;
      text-align: center;
      font: Bold 20px/30px Arial;
      letter-spacing: 0px;
      color: #43a047;
    }
    
    form.FormGroup {
      min-height: 80vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    
    input.Input {
      margin: 0 auto;
      margin-bottom: 0.5rem;
      padding-left: 1rem;
      width: 20rem;
      height: 2.5rem;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #afdeb1;
    }
    
    p.Text {
      width: 20rem;
      height: 3rem;
      width: 100%;
      font-size: 0.7rem;
      text-align: center;
      font: Regular 10px/20px Arial;
      letter-spacing: 0px;
      color: #43a047;
    }
    
    button.FormButton {
      margin: 0 auto;
      margin-bottom: 1rem;
      width: 20rem;
      height: 3rem;
      color: white;
      background: #43a047 0% 0% no-repeat padding-box;
      border-radius: 4px;
    }
    
    div.FormLink {
      width: 23.4rem;
      margin: 0 auto;
      padding: 1rem 0;
      padding-top: -5rem;
      color: white;
      text-align: center;
      background: #7ac77d 0% 0% no-repeat padding-box;
      position: relative;
      bottom: 0;
      left: 0;
    }
    
    div.ValidationError {
      font-size: 0.8rem;
      color: red;
      text-align: left;
      margin-bottom: 0.3rem;
    }
        
      
    @media only screen and (min-width: 600px) {
    form.FormGroup {
        width: 23.4rem;
        min-height: 60vh;
        }

    div.FormContainer {
            height: fit-content;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        border: 1px solid #afdeb1;
        }

    div.Container {
        width: 23.4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        }
    }
    `}</style>

    <style jsx global>{`
        html,
        body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
        box-sizing: border-box;
        }
    `}</style>
    </div>
  );
};

export default Login;
