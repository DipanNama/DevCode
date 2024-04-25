import React from 'react'

const SideBar = () => {
    return (
        <div>
            <div class="left-container">
                <div class="category-menu">
                    <div class="category-title">
                        <h2>Menu</h2>
                    </div>
                    <div class="menu-data">
                        <div class="menu-list">
                            <ul class="menu-list-items">
                                <li><span></span>Home</li>
                                <li><span></span>Friends</li>
                                <li><span></span>Computer Science</li>
                                <li><span></span>Roadmaps</li>
                                <li><span></span>Project Ideas</li>
                                <li><span></span>Open Source</li>
                                <li><span></span>Events</li>
                                <li><span></span>Forum</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="topic">
                    <div class="topic-title">
                        <h2>Trending Topics</h2>
                    </div>
                    <ul class="topic-chips">
                        <span>Web Dev</span>
                        <span>App Dev</span>
                        <span>Cyber Securiry</span>
                        <span>DevOps</span>
                        <span>UI/UX</span>
                        <span>AI Tools</span>
                        <span>AI/ML</span>
                        <span>MongoDB</span>
                        <span>Express JS</span>
                        <span>React JS</span>
                        <span>Python</span>
                        <span>OOPS</span>
                        <span>C++ Language</span>
                        <span>Mathematics</span>
                        <span>Node JS</span>
                        <span>Flutter</span>
                        <span>Typescript</span>
                        <span>Kubernetes</span>
                    </ul>
                </div>
                <div class="Portfolio"></div>
                <div class="calender"></div>
                <div class="skills"></div>
                <div class="bookmarks"></div>

                <div class="left-container-footer">
                    <div class="social-network">
                        <div class="social-media-links">
                            <div class="linkedin">
                                <i class="fa-brands fa-linkedin"></i>
                            </div>
                            <div class="github">
                                <i class="fa-brands fa-github"></i>
                            </div>
                            <div class="x-twitter">
                                <i class="fa-brands fa-x-twitter"></i>
                            </div>
                            <div class="youtube">
                                <i class="fa-brands fa-youtube"></i>
                            </div>
                        </div>
                    </div>
                    <div class="help">
                        <h5>Help?</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar