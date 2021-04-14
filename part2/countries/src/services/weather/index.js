const api_key = process.env.REACT_APP_API_KEY

export const get = async capital => {
    let response = await fetch(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
    response = response.json()
    .catch(err => {
        console.error(err)
        response = undefined
    })
    return response
}