import {NavLink} from 'react-router-dom';
import classnames from 'classnames';

export default function Navbar(){
    const activeStyle = {
        borderBottom: '2px solid hsl(var(--clr-orange)',
        fontSize: 'var(--fs-400)'
    }
    const allClasses = classnames('main-nav', 'flex')
    return(
        <nav className={allClasses}>
            <NavLink 
            style={({isActive}) => isActive ? activeStyle : null}
            to='/' end>
                Home
            </NavLink>
            <NavLink 
            style={({isActive}) => isActive ? activeStyle : null}
            to='sofa'>
                Sofas
            </NavLink>
            <NavLink 
            style={({isActive}) => isActive ? activeStyle : null}
            to='livingroom'>
                Living
            </NavLink>
            <NavLink 
            style={({isActive}) => isActive ? activeStyle : null}
            to='bedroom'>
                Bedroom
            </NavLink>
            <NavLink 
            style={({isActive}) => isActive ? activeStyle : null}
            to='dining&kitchen'>
                Dining & Kitchen
            </NavLink>
            <NavLink 
            style={({isActive}) => isActive ? activeStyle : null}
            to='study&office'>
                Study & Office
            </NavLink>
            <NavLink 
            style={({isActive}) => isActive ? activeStyle : null}
            to='storage'>
                Storage
            </NavLink>
            <NavLink 
            style={({isActive}) => isActive ? activeStyle : null}
            to='productgallery'>
                Product Gallery
            </NavLink>
        </nav>
    )

}