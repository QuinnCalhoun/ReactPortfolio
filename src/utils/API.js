import axios from 'axios'

const API =  {
    getUserInfo: (username) => {
        return axios.get(`https://api.github.com/users/${username}`)
    },
    getAllRepos: (username) => {
        return axios.get((`https://api.github.com/users/${username}/repos`))
    },
    getStarredRepos: (username) => {
        return axios.get(`https://api.github.com/users/${username}/starred`) 
    },
    getRepoData: (starredRepoResult) => {
        return axios.get(`https://api.github.com/repos/${starredRepoResult.full_name}`)
    },
}

export default API