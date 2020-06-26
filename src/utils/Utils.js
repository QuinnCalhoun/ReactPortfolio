import React from 'react'
import { Button } from 'semantic-ui-react'

const Utils = {
    socialMediaMenu: (contentArr) => ([
    <Button key='linked' color='linkedin' as='a' href='https://www.linkedin.com/in/quinn-calhoun-074b3aa1/' content={(contentArr) ? contentArr[0] : null} icon={{name: 'linkedin', size: 'large'}} />,
    <Button key='twitter' color='twitter' as='a' href='https://twitter.com/WritePrettyCode' content={(contentArr) ? contentArr[1] : null} icon={{name: 'twitter', size: 'large'}} />,
    <Button key='github' color='black' as='a' href='https://github.com/QuinnCalhoun' content={(contentArr) ? contentArr[2] : null} icon={{name: 'github', size: 'large'}} />
]),
}
export default Utils