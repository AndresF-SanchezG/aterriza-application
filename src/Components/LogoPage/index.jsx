
import logoAterriza from '../../images/LOGO ATERRIZA.CO.png'

const LogoPage = () => {
    return(
        <div className="bg-white cursor-pointer w-64 h-auto rounded-lg flex justify-center items-center ">
            <figure className='relative mb-2 w-64 h-auto flex justify-center items-center'>
                <img className='w-full h-full object-cover rounded-lg w-64 h-auto' src={ logoAterriza } alt=''/>
            </figure>
        
        </div>
    )
}

export { LogoPage }