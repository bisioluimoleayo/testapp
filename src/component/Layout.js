import React from 'react'
import Header from './Header'


export default function Layout({children}) {
    return (
        <div>
            <h1>Spacious</h1>
            <Header/>
            
            {children}

        </div>
    )
}
