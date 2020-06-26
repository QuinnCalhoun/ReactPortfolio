import React, { useEffect } from 'react';
import { Menu, Header } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';


const HeaderBar = () => {

  let location = useLocation()
  useEffect(() => {
    console.log(location)
  })
    return (
        <Menu
        style={{backgroundColor: 'rgba(255,255,255,0.6)'}}
        items={[
          <Menu.Item key='0' active={location.pathname === '/'}  content='Home' as={Link} to='/' />,
          <Menu.Item key='1' active={location.pathname === '/portfolio'} content='Portfolio' as={Link} to='/portfolio' />,
          <Menu.Item key='2' active={location.pathname === '/reachme'} content='Contact' as={Link} to='/reachme' />,
          <Menu.Item key='3' as={Header} style={{ letterSpacing: '11.11px' }} content={<b>Quinn Thomas Calhoun</b>} position='right' />
        ]}
        stackable
        attached='top'
        tabular />
    )
}
export default HeaderBar