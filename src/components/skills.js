import "./skills.css"
function Skills() {
    return (
        <div id="AboutMe">
            <br></br>
            <h3 class="text-center my-3">About Me</h3>
            <br></br>
            <div class="row my-3">
                <div class="col-md-5">
                    <div class="about-info mx-3">
                        <h3 class = "py-3">My introduction</h3>
                        <p class="px-5">I am well-versed in HTML, CSS and JavaScript , and other cutting edge
                            frameworks and libraries,which allows me to implement interactive features.
                            Additionally, I have experirence working with content management systems (CMS) like
                            WordPress.
                        </p>
                    </div>
                </div>
                <div class="skills-box col-md-2">
                    <div class="skills-header">
                        <h3>Web Development</h3>
                    </div>
                    <div class="skills-list">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Bootstrap</span>
                        <span>JavaScript</span>
                        <span>React</span>
                        <span>PHP</span>
                        <span>MongoDB(Database)</span>
                        <span>MySQL(Database)</span>
                    </div>
                </div>
                <div class="skills-box col-md-2">
                    <div class="skills-header">
                        <h3>Data Science</h3>
                    </div>
                    <br></br>
                    <div class="skills-list">
                        <span>Numpy</span>
                        <span>Pandas</span>
                        <span>Matplotlib</span>
                        <span>Classification</span>
                        <span>Regression</span>
                        <span>Clustering</span>
                    </div>
                </div>
                <div class="skills-box col-md-2">
                    <div class="skills-header">
                        <h3>programming Languages</h3>
                    </div>
                    <div class="skills-list">
                        <span>Python</span>
                        <span>Java</span>
                        {/* <span>C</span> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;