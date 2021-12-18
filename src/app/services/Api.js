export const BaseURL = "http://localhost:8000/api/";
//export const BaseURL = "https://api.emmasoft.net/api/";
//const BaseURL = "https://api.jasrdesarrolloweb.com/api/";

export const config = {
  headers: {
    'Authorization': "Bearer " + localStorage.getItem("auth.token"),
  },
};

export async function get(url) {
  // Default options are marked with *
  const response = await fetch(BaseURL+url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
       //'Content-Type': 'application/x-www-form-urlencoded',
       'Authorization': "Bearer " + localStorage.getItem("auth_token"),
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export async function post(url, data) {
    // Default options are marked with *
    const response = await fetch(BaseURL+url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

//export BaseURL;


    /*const url = BaseURL+"users";
    console.log("tratando de acceder a ",url);
    const fetchApi = async () => {
        const response = await fetch(url);
        const resToJson = await response.json();
        console.log(resToJson.data);
    }
     fetchApi()*/