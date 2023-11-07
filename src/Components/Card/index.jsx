import { NavLink } from "react-router-dom";

const Card = () => {
    return(
        <div className="bg-white cursor-pointer h-full rounded-lg flex flex-col justify-center  items-center  gap-4 md:flex-row md:gap-7 mb-14" >
            <NavLink to='/hoteles'>
            <figure className='relative mb-2 w-56 h-56 flex justify-center items-center md:mt-6'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>Hotelessss</span>
                <img className='w-full h-full object-cover rounded-lg w-52 h-52' src='https://images.pexels.com/photos/3678857/pexels-photo-3678857.jpeg?auto=compress&cs=tinysrgb&w=600' alt='hotelGeneric'/>
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>+</div>
            </figure>

            </NavLink>

            <figure className='relative mb-2 w-56 h-56 flex justify-center items-center md:mt-6'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>Experiencias</span>
                <img className='w-full h-full object-cover rounded-lg w-52 h-52' src='https://images.pexels.com/photos/15350765/pexels-photo-15350765/free-photo-of-monaco-palacio-deportes-de-motor-museo.jpeg?auto=compress&cs=tinysrgb&w=600' alt='hotelGeneric'/>
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>+</div>
            </figure>
        </div>
    )
}



export { Card }
