import { NavLink } from "react-router-dom";
import logoAterriza from '../../images/LOGO ATERRIZAH.CO.png'

const Navbar = ({ colorText}) => {
    const activeStyle = 'underline underline-offset-4'
    colorText='text-red-500'
    return (
        <nav className="absolute flex justify-between items-center z-10 w-full py-6 px-6 text-sm font-light top-0 ">
            <ul className="flex items-center">
                <li className={`font-bold text-lg ${colorText}`}>
                    <NavLink to='/'>
                        Aterriza.co
                    </NavLink>
                </li>
                {/* <li className=" w-40 flex justify-center items-center">
                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? activeStyle: undefined
                }>
                    <span className="flex justify-center items-center gap-2"><img className="w-full h-14 flex" src={logoAterriza}/></span>
                        
                    </NavLink>
                </li> */}
            </ul>
            <ul className="flex items-center gap-3">
                <li >
                    <NavLink  to='/quienes-somos' className={({ isActive }) =>
                        isActive ? activeStyle: undefined
                }>
                        Quienes Somos
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/blogs' className={({ isActive }) =>
                        isActive ? activeStyle: undefined
                }>
                        BlogsPost
                    </NavLink>
                </li>
            </ul>
        </nav>

    )
}

export { Navbar }