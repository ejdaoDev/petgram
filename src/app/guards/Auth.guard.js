class AuthGuard {
  constructor() {
    if(localStorage.getItem("auth_token") == null){
      this.authenticated = true;
    }else{
      this.authenticated = false;
    }    
  }
  login(cb) { //cb = callback
    this.authenticated = true;
    cb();
  }
  logout(cb) {
    this.authenticated = false;
    cb();
  }
  isAuthenticated() {
    return this.authenticated;
  }
}
export default new AuthGuard();
