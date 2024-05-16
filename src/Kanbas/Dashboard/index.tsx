export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h4 id="wd-dashboard-published">Published Courses (12)</h4> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="/images/reactjs.jpeg" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS1234 React JS
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a
                  href="#/Kanbas/Courses/1234/Home"
                  className="btn btn-primary"
                >
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col course-card-width">
            <div className="card">
              <img src="/images/java.jpeg" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link course-card-title"
                  href="#/Kanbas/Courses/1566/Home"
                >
                  CS1566 Java Intro
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Intro to Java course
                </p>
                <a
                  href="#/Kanbas/Courses/1556/Home"
                  className="btn btn-primary"
                >
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col course-card-width">
            <div className="card">
              <img src="/images/python.jpg" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link course-card-title"
                  href="#/Kanbas/Courses/1000/Home"
                >
                  CS1000 Using Python to Start
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Getting started with Python
                </p>
                <a
                  href="#/Kanbas/Courses/1000/Home"
                  className="btn btn-primary"
                >
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course course-card-width">
            <div className="card">
              <img src="/images/mechanics.jpeg" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link course-card-title"
                  href="#/Kanbas/Courses/1558/Home"
                >
                  CS1558 Mechanics
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Integrating software and mechanics
                </p>
                <a
                  href="#/Kanbas/Courses/1558/Home"
                  className="btn btn-primary"
                >
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course course-card-width">
            <div className="card">
              <img src="/images/Algorithm.jpeg" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link course-card-title"
                  href="#/Kanbas/Courses/9000/Home"
                >
                  CS9000 Algorithms
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Advanced level algorithms
                </p>
                <a
                  href="#/Kanbas/Courses/9000/Home"
                  className="btn btn-primary"
                >
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course course-card-width">
            <div className="card">
              <img src="/images/mobile.jpeg" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link course-card-title"
                  href="#/Kanbas/Courses/6004/Home"
                >
                  CS6004 Mobile Development
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Mobile development
                </p>
                <a
                  href="#/Kanbas/Courses/6004/Home"
                  className="btn btn-primary"
                >
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course course-card-width">
            <div className="card">
              <img src="/images/ar.jpeg" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link course-card-title"
                  href="#/Kanbas/Courses/7220/Home"
                >
                  CS7220 Augmented Reality
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Development for AR and XR
                </p>
                <a
                  href="#/Kanbas/Courses/7220/Home"
                  className="btn btn-primary"
                >
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
