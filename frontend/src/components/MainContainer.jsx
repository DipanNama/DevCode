import React from 'react'
import SideBar from './SideBar'
import MiddleContainer from './MiddleContainer'
import RightSideBar from './RightSideBar'

const MainContainer = () => {
    return (
        <div>
            <div class="main-container">
                <SideBar />
                <div className="middle-offset">
                    <MiddleContainer />
                </div>
                <RightSideBar />
            </div>
        </div>
    )
}

export default MainContainer