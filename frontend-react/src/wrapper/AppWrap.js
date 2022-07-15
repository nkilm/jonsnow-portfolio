import React from 'react'
import { NavigationDots, SocialMedia } from "../components"

// HOC - Higher Order Component

const AppWrap = (Component,idName,classNames) => function HOC(){
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia/>

            <div className="app__wrapper app__flex">
                <Component/>
            </div>

            <div className="copyrights">
                <p className="p-text">@2022 Jon Snow</p>
                <p className="p-text">All Rights Reserved</p>
            </div>

            <NavigationDots active={idName}/>
        </div>
    )
}

export default AppWrap;