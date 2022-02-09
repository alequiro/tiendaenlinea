import React from 'react';
import './NavBar.css';

function Menu(){
    return(
        <nav class="navegador" >
            <ul class= "lista">
                <li><a href= "todo">TODO</a></li>
                <li><a href= "ofertas">OFERTAS</a></li>
                <li><a href= "lo mas vendido">LO MAS VENDIDO</a></li>
                <li><a href= "ultimas novedades">ULTIMAS NOVEDADES</a></li>
                <li><a href= "atencion al cliente">ATENCION AL CLIENTE</a></li>
            </ul>
        </nav>
    )
}
export default Menu;