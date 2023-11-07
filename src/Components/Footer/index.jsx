import { NavLink } from "react-router-dom";
import logotipoInstagram from '../../images/instagram.png'
import logoFacebook from '../../images/social.png'
import logoWhatsapp from '../../images/social (1).png'


const Footer = () => {
    
    
    return (
        <footer className="relative   z-10 w-full py-5 px-6 md:px-60 text-sm font-light bg-purple-800">
            <ul className="w-full flex items-center gap-3  justify-around  ">
                <li className=" w-40 flex justify-center items-center">
                    <NavLink  to='https://www.instagram.com/aterriza.co/' className={({ isActive }) =>
                        isActive ? activeStyle: undefined
                }>
                    <span className="flex justify-center items-center gap-2 text-white font-bold"><img className="w-6 h-6 " src={logotipoInstagram}/>Aterriza.co</span>
                       
                    </NavLink>
                </li>
                <li className=" w-40 flex justify-center items-center">
                    <NavLink to='https://www.facebook.com/profile.php?id=100064084713525&locale=es_LA' className={({ isActive }) =>
                        isActive ? activeStyle: undefined
                }>
                    <span className="flex justify-center items-center gap-2 text-white font-bold"><img className="w-6 h-6 flex" src={logoFacebook}/>Facebook</span>
                        
                    </NavLink>
                </li>
                <li className=" w-40 flex justify-center items-center">
                    <NavLink to='https://api.whatsapp.com/message/YLPVIZPCJH2JN1?autoload=1&app_absent=0' className={({ isActive }) =>
                        isActive ? activeStyle: undefined
                }>
                    <span className="flex justify-center items-center gap-2 text-white font-bold"><img className="w-6 h-6 flex" src={logoWhatsapp}/>Whatsapp</span>
                        
                    </NavLink>
                </li>
            
            </ul>
        </footer>

    )
}

export { Footer }