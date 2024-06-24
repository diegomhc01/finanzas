import { Link, NavLink } from "react-router-dom"


function Menu() {
  return (
    <>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Finanzas Personales</Link>
          </div>
          <ul className="nav navbar-nav">
            <li><NavLink to="/listaarticulos" className="link">
              Artículos </NavLink></li>
              <li><NavLink to="/marca" className="link">
              Marcas </NavLink></li>
              <li><NavLink to="/producto" className="link">
              Productos </NavLink></li>
              <li><NavLink to="/listasuper" className="link">
              Compras Super </NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Menu;