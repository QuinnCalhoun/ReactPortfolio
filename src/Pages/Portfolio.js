import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import { Grid, Segment, Button, Divider, Label } from 'semantic-ui-react'

const Portfolio = () => {

    const [repos, setRepos] = useState([])

    useEffect(() => {
        API.getAllRepos('quinncalhoun')
            .then(res => {
                let sortedRepos = res.data.sort((a, b) => a.stargazers_count - b.stargazers_count ? -1 : 1)
                setRepos(sortedRepos)
            })
    }, [])
    const GridBuilder = (repoArray) => {
        return repoArray.map(repo => (
            <Grid.Column key={repo.id}>
                <Segment style={{ height: '225px' }} content={[
                    <Label attached='top' content={repo.name} />,
                    <Divider />,
                    `${(repo.description) ? repo.description : 'This repo has no description'}`,
                    <Divider />,
                    <Label attached='bottom' content={[
                        <Button as='a' color='black' href={repo.svn_url} content='View on Github' />,
                        <Button as='a' color='blue' href={repo.homepage} content='View Live' />]} />
                ]} />
            </Grid.Column>
        )
        )
    }
    const columnDecider = (array) => {
        for (let i = 3; i < 5; i++) {
            if (array.length % i === 0) {
                return i
            } else {
                console.log('this one work')
            }
        }
    }
    return (
        <Grid
            style={{maxHeight: '60vh', overflowY: 'scroll'}}
            stackable
            columns={columnDecider(repos)}>
            {GridBuilder(repos)}
        </Grid>
    )
}


export default Portfolio