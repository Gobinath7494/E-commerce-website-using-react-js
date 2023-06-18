import React from "react"
import MainNav from "./Mainnav"
import classes from "./home.module.css"

const Layout = (props) => {
    return (
        <React.Fragment>
            <MainNav onClick={props.onClick}>
            </MainNav>
            <header className={classes.header}>The Generics</header>
            <main>{props.children}</main>
        </React.Fragment>

    )
}

export default Layout