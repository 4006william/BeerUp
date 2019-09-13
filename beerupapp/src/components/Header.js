import React, { Components } from 'react'

const Header = (props) => {
    return (
        <div>
            <h1>BeerUp</h1>
            <h4>{props.subtitle}</h4>
        </div>
    )
}
export default Header