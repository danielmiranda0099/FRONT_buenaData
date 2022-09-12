import axios from "axios"

export async function http(url, method='get', data={}) {
    const options = {
        method,
        url,
        data
    }
    const response = await axios(options)
    return response;
}

