import React from 'react'
import CreatePost from './CreatePost'
import Post from './Post'

const MiddleContainer = () => {
    return (
        <div>
            <div className="middle-offset">
                <div class="mid-container">
                    <div class="mid-container-left">
                        <div class="mid-container-top-left">
                            <CreatePost />
                        </div>
                        <div class="mid-container-bottom-left">
                            <Post />
                        </div>
                    </div>
                    <div class="mid-container-right">post data right-container</div>
                </div>
            </div>
        </div>
    )
}

export default MiddleContainer