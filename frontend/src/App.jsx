import { useState } from 'react'
import './index.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <body>
        {/* <!-- Navigation Bar starts here --> */}
        <nav>
          <div class="navbar">
            <div class="nav-left">
              <div class="logo-icon">
                <i class="fa-regular fa-compass"></i>
              </div>
              <div class="domain">DevCode</div>
            </div>

            <div class="nav-mid">
              <div class="search-bar">
                <div class="search-icon">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <input type="text" placeholder="Search..." />
              </div>
            </div>

            <div class="nav-right">
              <div class="notification">
                <i class="fa-regular fa-envelope"></i>
              </div>
              <div class="account">
                <div class="account-avatar">
                  {/* <!-- Include Image for account avatar --> */}
                  <img src="./src/assets/avatars/avarar2.png" alt="user" />
                </div>
              </div>
              <div class="menu">
                <div class="hamburger">
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* <!-- Navigation Bar ends here --> */}

        {/* <!-- Main container starts here --> */}
        <div class="main-container">
          {/* <!-- Left Container starts here --> */}
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
          {/* <!-- Left Container ends here --> */}

          {/* <!-- Middle Container starts here --> */}
          <div class="mid-container">
            <div class="mid-container-left">
              <div class="mid-container-top-left">
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
                        placeholder="Where you at? What are you doing?Any new technology learned? Share it!"
                      />
                    </div>
                  </div>
                  <div class="create-post-bottom">
                    <div class="fellings">
                      <i class="fa-regular fa-face-smile"></i>
                      <h5>Fellings/Activity</h5>
                    </div>
                    <div class="location">
                      <i class="fa-solid fa-location-dot"></i>
                      <h5>Location</h5>
                    </div>
                    <div class="extras">
                      <i class="fa-solid fa-ellipsis"></i>
                    </div>
                    <div id="sendBtn">
                      <i class="fa-solid fa-paper-plane"></i>
                      <h5>Post</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mid-container-bottom-left">
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
            </div>
            <div class="mid-container-right">post data right-container</div>
          </div>
          {/* <!-- Middle Container ends here --> */}

          {/* <!-- Right Container starts here --> */}
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
                <input type="text" placeholder="Search..." />
              </div>
              <div class="right-container-footer-right">
                <div class="settings">
                  <i class="fa-solid fa-gear"></i>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Right Container ends here --> */}
        </div>
        {/* <!-- Main Container ends here --> */}
      </body>
      {/* </html> */}



    </>
  )
}

export default App;
