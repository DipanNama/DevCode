import React from 'react'

const CreatePost = () => {
    return (
        <div>
            <div class="create-post">
                <div class="create-post-top">
                    <div class="make-post">
                        <i class="fa-solid fa-pencil"></i>
                        <span>Make Post</span>
                    </div>
                    <div class="photo">
                        <i class="fa-regular fa-image"></i>
                        <span>Photo</span>
                    </div>
                    <div class="video">
                        <i class="fa-solid fa-video"></i>
                        <span>Video</span>
                    </div>
                    <div class="poll">
                        <i class="fa-solid fa-square-poll-horizontal"></i>
                        <span>Poll</span>
                    </div>
                </div>
                <div class="create-post-mid">
                    <div class="user-avatar">
                        <img src="./src/assets/avatars/avarar5.png" alt="user" />
                    </div>
                    <div class="textfield">
                        <input
                            type="text"
                            placeholder="Where you at? What are you doing?"
                        />
                    </div>
                </div>
                <div class="create-post-bottom">
                    <div class="fellings">
                        <i class="fa-regular fa-face-smile"></i>
                        <h5>Fellings</h5>
                    </div>
                    <div class="location">
                        <i class="fa-solid fa-location-dot"></i>
                        <h5>Location</h5>
                    </div>
                    <div class="extras">
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                    <div class="sendBtn" id="sendBtn">
                        <i class="fa-solid fa-paper-plane"></i>
                        <h5>Post</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost