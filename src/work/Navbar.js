import React from 'react'

export default function Navbar(props) {
    return (
        <div className="App">
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <a className="navbar-brand mx-3" href="/"><h1>{props.title}</h1></a>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                {/* <div className="navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                    </ul> */}
                    {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <form className="form-inline my-2 my-lg-0">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
                    <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'} d-flex flex-row-reverse`}>
                        <input className="form-check-input p-3 mx-3" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" 
                            htmlFor="flexSwitchCheckDefault"></label>
                    </div> 
                {/* </div> */}
            </nav>
        </div>
    )
}
