import React from 'react'
import CartWidget from '../cartWidget/CartWidget'
import Logo from '../logo/Marca'
import './NavBar.css'



const NavBar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid navbar bg-dark border-bottom border-body p-3" data-bs-theme="dark">



                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">


                        <Logo />



                        <ul className="navbar-nav me-auto mb-20 m-10 mb-lg-0 ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" >Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" >Ofertas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" >Temporada</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" >Remeras</a></li>
                                    <li><a className="dropdown-item" >Shorts</a></li>
                                    <li><a className="dropdown-item" >Medias</a></li>
                                    <li><a className="dropdown-item" >Zapatos</a></li>

                                </ul>
                            </li>


                        </ul>

                        <form className="d-flex " role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar.." aria-label="Search"></input>
                            <button className="btn btn-success btn-lg" type="submit">Buscar</button>
                        </form>


                        <CartWidget />
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default NavBar