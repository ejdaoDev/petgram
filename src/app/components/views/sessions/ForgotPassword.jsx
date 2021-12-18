import * as React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import AuthGuard from '../../../guards/Auth.guard';

export default function ForgotPassword() {
  React.useEffect(() => {
    document.title = "Generic Company | Get New Password"
  }, []);

  return (
    <div>
      {!AuthGuard.isAuthenticated() ?
        <div className="row">
          <div className="col-1 col-md-2 col-xl-3 bg"></div>
          <div className="bg col-10 col-md-8 col-xl-6">
            <br /><br /><br /><br />
            <div className=" shadow cg" style={{ padding: "20px" }}>
              <div className="text-center">
                <h5 className="mt-2">CreditoFacil</h5>
                <p><small className="text-muted">Forgot your password? Here you can easily recover it</small></p>
              </div>
              <form>
                <div className="mb-3">
                  <div className="input-group position-relative">
                    <input type="text" className="form-control" name="email" placeholder="Email" />
                  </div>
                </div>
                <div className="">
                  <button className="btn btn-outline-primary btn-block " type="button">Get new password</button>
                </div>
              </form>
              <div className="mb-3">
                <Link to="/session/signin" style={{ textDecoration: "none" }}>Login</Link>
              </div>
            </div>
            <br />
          </div>
          <div className="col-1 col-md-2 col-xl-3 bg"></div>
        </div> : <Redirect to="/home" />}
    </div>
  );
}