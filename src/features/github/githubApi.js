import axios from 'axios'

const githubAPI = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
})

// Fetch user profile
export const fetchUser = async (username) => {
    const { data } = await githubAPI.get(`/users/${username}`)
    return data
}

// Fetch user repositories
export const fetchRepos = async (username) => {
    const { data } = await githubAPI.get(
        `/users/${username}/repos?sort=stars&per_page=6`
    )
    return data
}