

const Authenticate = () => {
   
 
    return (
        <div className="flex flex-col space-y-4 w-full h-screen items-center justify-center bg-gray-400">
            <h2 className="text-purple-800 font-bold">MODULO ADMINISTRATIVO</h2>
            <input className="w-60 h-10 border border-black px-2" placeholder="Usuario"/>
            <input className="w-60 h-10 border border-black px-2" placeholder="Contraseña"/>
        </div>
    );
}

export { Authenticate };