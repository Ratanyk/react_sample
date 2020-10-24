import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import './login.less';

class Login extends React.Component {
  login = () => {
    // console.log('login clicked');
    var userData = {
      displayName: "Kumar, Harish Madugula [JJCUS, Non J&J]"
    }
    localStorage.setItem("storedUserData", JSON.stringify(userData))
    // console.log(localStorage, ':: Localstorage')
  }
  render() {
    return (<section className="luis-models">
      <div className="container mt-5">
        <div className="row justify-content-center login-card-row">
          <div className="col-md-5 col-sm-8">
          <div className="login-card-wrapepr float-center mx-0 my-auto">
            <div className="card">
              <div className="card-body">
                <img src="../../../public/jnj_logo_rgb.jpg" alt="" className="logo_main mb-2"/>
                <div className="section-name-wrapper text-danger weight-700">
                  Genie
                  <span className="weight-400 text-default"> the Genius</span>
                </div>
                <div className="text-muted">
                  Superpower of building the conversational bots in common hands.
                </div>

                <div className="w-25 mt-4">
                  <hr/>
                </div>

                <div className="login-form mt-4">
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address or Username</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>

                    <div className="float-right w-50 mt-3 mb-3">
                      <div className="">
                        <Link className="btn btn-block btn-outline-primary" to="/bots" onClick={this.login}>
                          Login
                        </Link>
                      </div>

                    </div>

                  </form>
                </div>

              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="my-5 py-5 bottom-gutter"></div>

    </section>)
  }
}
export default Login
