import React from 'react'
import { Button } from 'semantic-ui-react'

const Utils = {
    socialMediaMenu: [
    <Button key='linked' color='linkedin' as='a' href='https://www.linkedin.com/in/quinn-calhoun-074b3aa1/' content='Professional Business' icon={{name: 'linkedin', size: 'large'}} />,
    <Button key='twitter' color='twitter' as='a' href='https://twitter.com/WritePrettyCode' content='Musings of a Guy Who Walks For Coffee' icon={{name: 'twitter', size: 'large'}} />,
    <Button key='github' color='black' as='a' href='https://github.com/QuinnCalhoun' content='My Projects and Thoughts' icon={{name: 'github', size: 'large'}} />
],
}
export default Utils