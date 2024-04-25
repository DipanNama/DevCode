import React from 'react'

const Post = () => {
    return (
        <div>
            <div class="post">
                <div class="card">
                    <div class="card-top">
                        <div class="card-top-info">
                            <div class="card-user-avatar"></div>
                            <div class="card-user-data">
                                <div class="card-user-id">
                                    <h6>Dipan Nama</h6>
                                </div>
                                <div class="card-user-id-info">
                                    got a new position at Google
                                </div>
                                <div class="card-creation-date">December 30, 2001</div>
                            </div>
                            <div class="card-top-settings">
                                <i class="fa-solid fa-ellipsis"></i>
                            </div>
                        </div>
                        <div class="card-top-description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Nobis, fugit.
                        </div>
                    </div>
                    <div class="card-mid">
                        <div class="card-image"></div>
                    </div>
                    <div class="card-bottom">
                        <div class="actions">
                            <div class="like-icon">
                                <h6>Like</h6>
                                <i class="fa-regular fa-heart"></i>
                            </div>
                            <div class="comment-icon">
                                <h6>Comment</h6>
                                <i class="fa-regular fa-comment"></i>
                            </div>
                            <div class="share-icon">
                                <h6>Share</h6>
                                <i class="fa-solid fa-location-arrow"></i>
                            </div>
                        </div>
                        <div class="interactions">
                            <div class="reactions">
                                <i class="fa-regular fa-face-laugh-squint"></i>
                            </div>
                            <div class="reacted-users">
                                Tony Stark, Thor and 100k othersf
                            </div>
                        </div>
                        <div class="comment-box"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post