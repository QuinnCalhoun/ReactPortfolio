import React, { useState, useEffect } from 'react'
import { Card, Header, Segment, } from 'semantic-ui-react'
import API from '../utils/API'

const GithubCard = () => {

    const [userInfo, setUserInfo] = useState({})
    const [starredRepoInfo, setStarredRepoInfo] = useState([])

    useEffect(() => {
        API.getUserInfo('quinncalhoun')
            .then(res => {
                setUserInfo(res.data)
                API.getStarredRepos(res.data.login)
                    .then(res => {
                        console.log(res)
                        let cock = []
                        res.data.map(item => cock.push(item))
                        setStarredRepoInfo(cock)
                    })
            })
    }, [])

    console.log(userInfo, starredRepoInfo)

    return (
        <Card fluid style={{ margin: 'auto', height: '300px' }}>
            <Card.Header>
                <Header as={Segment} attached='top' content={userInfo.name + ' on Github'} />
            </Card.Header>
            <Card.Content>
                {(starredRepoInfo.length !== 0) ?
                    starredRepoInfo.map(repoInfoObj => {
                        return (
                            <Segment>
                                <Header as='h4'>{repoInfoObj.name}</Header>
                                <p>{(repoInfoObj.description) ? repoInfoObj.description : 'No Description Given'} </p>
                            </Segment>)
                    }) :
                    null
                }
            </Card.Content>
        </Card>
    )
}

export default GithubCard