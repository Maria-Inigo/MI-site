import Head from 'next/head';
import Image from 'next/image'

import '../node_modules/bootstrap/dist/css/bootstrap.css'

import ProfileImage from '../assets/profile.png'

function Home() {
  return (
    <>
      <body data-new-gr-c-s-check-loaded="9.70.0" data-gr-ext-installed="">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <div className="container d-flex justify-content-center">
            <div id="navbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">About Me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Trips</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        <main className="container">
          <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <Image src={ProfileImage} className="d-block mx-lg-auto img-fluid" width={700} height={500} alt="Maria" />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">Maria Iñigo</h1>
                <p className="lead">TO DO: Intro </p>
              </div>
            </div>
          </div>
        </main>
      
      </body>
    </>
  )
}

export default Home;

