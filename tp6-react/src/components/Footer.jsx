import { useState } from 'react';
function Footer () {
    const añoActual= new Date().getFullYear();
        
    return(
        <footer>
            <p>&copy; {añoActual}-new year</p>
        </footer>
    )
}
export default Footer;