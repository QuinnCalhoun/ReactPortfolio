import React from 'react'
import { Segment } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import { Home, Portfolio, Contact } from '../Pages/index'


const ContentBody = (props) => {
    return (<Segment
        attached='bottom'
        content={<>
            <Route path='/' exact component={Home} {...props} />
            <Route path='/portfolio' exact component={Portfolio} />
            <Route path='/reachme' exact component={Contact} />
        </>} />)
}
export default ContentBody