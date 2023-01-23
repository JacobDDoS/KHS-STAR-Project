import serverURL from "../data/serverURL";

export const handleRequest = async (method, path, payload = "") => {
    const opts = {  method: method, 
                    'credentials': 'include',
                    headers: new Headers({
                        'Accept': 'application/json',
                        'Access-Control-Allow-Origin':'http://localhost:3000/',
                        'Content-Type': 'application/json',
                    }),
                 }

    if (payload !== "") {
        opts.body = JSON.stringify(payload);
    }

    return fetch(`${serverURL}${path}`, opts)
    .then(res => res.json())
    .then(data => data);
  }