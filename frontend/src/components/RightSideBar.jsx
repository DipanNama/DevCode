import React from 'react'

const RightSideBar = () => {
    return (
        <div>
            <div class="right-container">
                <h1>Right container data</h1>

                <div class="roles"></div>

                <div class="members"></div>

                <div class="teams"></div>

                <div class="right-container-footer">
                    <div class="right-container-footer-left">
                        <div class="footer-search-bar">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        {/* <input type="text" placeholder="Search..." /> */}
                    </div>
                    <div class="right-container-footer-right">
                        <div class="settings">
                            <i class="fa-solid fa-gear"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSideBar