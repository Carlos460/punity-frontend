import React from "react"
// CSS Imports
import {Head} from './style'

function Header(props){
    return(
        <>
            <Head theme={{backgroundColor: props.backgroundColor, backgroundImage: props.backgroundImage}}>
                {props.children}
            </Head>
        </>
    );
}

export default Header;