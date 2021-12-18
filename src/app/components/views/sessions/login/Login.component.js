import * as API from "../../../../services/Api";
//import AuthGuard from "../../../../guards/Auth.guard";
//import { useHistory } from "react-router";
export async function Login(form) {
    let status;
    //let history = useHistory();
    form.project = "CreditoFacil";
    await API.post('login',form).then(
        response => {
            if(response.status === "200"){
                localStorage.setItem('auth_token',response.data.token);
                localStorage.setItem('auth_user',JSON.stringify(response.data.user));
                //history.push('home');
                //window.location.href = "/home";
                status = true;
            } else{
                status = false;
            }
        }
    );
    return status;
  }

  