import React from 'react'
import { Container, Segment, Grid } from 'semantic-ui-react'
import Utils from '../utils/Utils'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import { GithubCard } from '../Components/index'

const Home = (props) => (<>
    <Container content={[
        <Segment key='0' content={[
            <p key='p'>A full-stack developer by day, mild-mannered Quinn Calhoun spends his nights...
            still as a full-stack developer because his start-up hit Covid like
            a brick in snow and he's the only one left please someone send help or interns
                </p>,
            <Container key='media' textAlign='center' content={Utils.socialMediaMenu} />,

        ]} />,
        <Grid
            key='1'
            stackable
            relaxed
            columns='2'
            children={[
                <Grid.Column
                    key='0'
                    width='8'
                    // children={<TwitterTimelineEmbed
                    //     sourceType="profile"
                    //     screenName="WritePrettyCode"
                    //     options={{ height: 300, }}
                    //     noHeader
                    //     noFooter
                    //     noScrollbar
                    // />}
                />,
                <Grid.Column
                        key='1'
                    width='8'
                    children={
                        <GithubCard />
                    }
                />
            ]}
        />,

    ]} />

</>)


export default Home