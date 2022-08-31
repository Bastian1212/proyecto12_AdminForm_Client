import clienteAxios from "./axios";


const tokenAuth = token => {
    if(token) {
        // console.log("desde token ");
        // console.log(token);
        clienteAxios.defaults.headers.common['x-auth-token'] = token;
    } else {
        // console.log("paso al else ");
        delete clienteAxios.defaults.headers.common['x-auth-token'];
    }
}

export default tokenAuth;