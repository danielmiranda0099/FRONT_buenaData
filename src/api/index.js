import axios from "axios"

export async function http(url, method, data={}) {
    const options = {
        method,
        url,
        data: JSON.stringify(data)
    }
    const response = await axios(options)
    return response;
}

