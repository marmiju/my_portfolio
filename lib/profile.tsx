

export const getProfileData = async () => {
    const url = 'http://localhost:5000/api/profile'
    const result = await fetch(url)
    console.log(result)
    return result.json()
}
