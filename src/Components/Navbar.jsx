import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import { Button, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import MyCar from "./Pages/myCar";
import Preference from './Pages/Preference'
import Contact from './Pages/Contact'
import Register from './Pages/Register'
import AddNewProduct from "./Pages/AddNewProduct";
import ProductDetail from "./Pages/ItemDetail"

import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   NavLink
} from 'react-router-dom'
import ProductsGrid from "./Organisms/ProductsGrid";

const useStyles = makeStyles((theme) => ({
   offset: theme.mixins.toolbar,
   menuButton: {
      marginRight: theme.spacing(1)
   },
   title: {
      flexGrow: 1
   },
   navStyle: {
      background: 'rgb(33, 37, 43)',
      height: '55px',
   },
   buttonLabel: {
      textTransform: 'capitalize',
      fontSize: '15px',
      marginLeft: '5px'
   },
   NoumButton: {
      textTransform: 'capitalize',
      fontSize: '20px',
   },
   SearchStyle: {
      padding: '2px 2px',
      display: 'flex',
      width: 400,
      color: 'white'
   },
   btnhidden: {
      display: 'none'
   }
}));

const LinksStyle = {
   margin: '20px'
}

export const descriptionPage = () => {
   document.getElementById('description').click();
}

const Navbar = () => {

   const classes = useStyles()

   return (
      <Router>
         <AppBar position="fixed" className={classes.navStyle}>
            <Toolbar>
               <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
               </IconButton>
               <Typography variant="h6" className={classes.title}>
                  <Button className={classes.NoumButton} color="inherit" component={Link} to="/">NoumPro</Button>
                  <Button className={classes.buttonLabel} color="inherit" component={Link} to='/myCar'>Mi Carrito</Button>
                  <Button className={classes.buttonLabel} color="inherit" component={Link} to="/prefer">Mis preferencias</Button>
                  <Button className={classes.buttonLabel} color="inherit" component={Link} to="/register">Registrarse</Button>
                  <Button className={classes.buttonLabel} color="inherit" component={Link} to="/contact">Contacto</Button>
                  <Button className={classes.buttonLabel} color="inherit" component={Link} to="/addNewProduct">Añadir Producto</Button>
                  <NavLink className={classes.buttonLabel} activeClassName="activo" to="/addNewProduct">Test</NavLink> {/* Para menus utilizar NavLink. El activeClassname se alterna el "activo" entre los menus (Verificar en consola que pasa una vez haciendo click en el elemento)*/}
               </Typography>
               <Button color="inherit">Iniciar Sesión</Button>
            </Toolbar>
            <Button className={classes.btnhidden} id="description" component={Link} to="/description"></Button>
         </AppBar>
         <div className={classes.offset}></div>
         <div style={LinksStyle}>
            <Switch>
               <Route path="/" exact> <ProductsGrid /> </Route>
               <Route path="/myCar"> <MyCar /> </Route>
               <Route path="/prefer"> <Preference /> </Route>
               <Route path="/register"> <Register /> </Route>
               <Route path="/contact"> <Contact /> </Route>
               <Route path="/addNewProduct"> <AddNewProduct /> </Route>
               <Route path="/description"> <ProductDetail /> </Route>
            </Switch>
         </div>
      </Router>
   );
};

export default Navbar;
