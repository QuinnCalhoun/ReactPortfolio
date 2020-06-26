import React from 'react'

const MyContext = React.createContext({
    activeItem: '',
    toggleActive: () => {},
})

export default MyContext
