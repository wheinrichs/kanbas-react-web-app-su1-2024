export default function Dashboard() {
    return (
        <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />

        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpeg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/java.jpeg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1566/Home">
                CS1566 Java Intro
              </a>
              <p className="wd-dashboard-course-title">
                Intro to Java course
              </p>
              <a href="#/Kanbas/Courses/1556/Home"> Go </a>
            </div>
            </div>

            <div className="wd-dashboard-course">
            <img src="/images/python.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1000/Home">
                CS1000 Using Python to Start
              </a>
              <p className="wd-dashboard-course-title">
                Getting started with Python
              </p>
              <a href="#/Kanbas/Courses/1000/Home"> Go </a>
            </div>
          </div>


          <div className="wd-dashboard-course">
            <img src="/images/mechanics.jpeg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1558/Home">
                CS1558 Mechanics
              </a>
              <p className="wd-dashboard-course-title">
                Integrating software and mechanics
              </p>
              <a href="#/Kanbas/Courses/1558/Home"> Go </a>
            </div>
          </div>


          <div className="wd-dashboard-course">
            <img src="/images/Algorithm.jpeg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/9000/Home">
                CS9000 Algorithms
              </a>
              <p className="wd-dashboard-course-title">
                Advanced level algorithms
              </p>
              <a href="#/Kanbas/Courses/9000/Home"> Go </a>
            </div>
          </div>


          <div className="wd-dashboard-course">
            <img src="/images/mobile.jpeg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/6004/Home">
                CS6004 Mobile Development
              </a>
              <p className="wd-dashboard-course-title">
                Mobile development
              </p>
              <a href="#/Kanbas/Courses/6004/Home"> Go </a>
            </div>
          </div>


          <div className="wd-dashboard-course">
            <img src="/images/ar.jpeg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/7220/Home">
                CS7220 Augmented Reality
              </a>
              <p className="wd-dashboard-course-title">
                Development for AR and XR
              </p>
              <a href="#/Kanbas/Courses/7220/Home"> Go </a>
            </div>
          </div>

          
        </div>
      </div>
    )
}