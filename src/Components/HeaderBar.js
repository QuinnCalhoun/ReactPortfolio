import React, { useState } from 'react';
import { Menu, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const HeaderBar = (props) => {
    const [state, setState] = useState({ activeItem: 'Home' })

    const itemClicked = ((e, { content }) => setState({ activeItem: content }))
    return (
        <Menu
        items={[
          <Menu.Item key='0' active={state.activeItem === 'Home'} onClick={itemClicked} content='Home' as={Link} to='/' />,
          <Menu.Item key='1' active={state.activeItem === 'Portfolio'} onClick={itemClicked} content='Portfolio' as={Link} to='/portfolio' />,
          <Menu.Item key='2' active={state.activeItem === 'Contact'} onClick={itemClicked} content='Contact' as={Link} to='/reachme' />,
          <Menu.Item key='3' as={Header} style={{ letterSpacing: '11.11px' }} content={<b>Quinn Thomas Calhoun</b>} position='right' />
        ]}
        stackable
        fluid
        attached='top'
        tabular />
    )
}
export default HeaderBar