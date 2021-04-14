export const get = async input => {
    let response = await fetch(`https://restcountries.eu/rest/v2/name/${input}`)
    response = await response.json()
    .catch(error => {
        console.error(error)
        response = []
    })
    return response
}