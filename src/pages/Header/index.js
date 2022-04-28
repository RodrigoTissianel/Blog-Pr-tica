//Imagens
import logo from 'svg/blog-logo.svg';

const Header = () =>{
    return(
        <>
        <header className="bb-black px-2">
            <nav>
                <div className='logo'>
                    <a href="#"> <img src={logo} alt="Logo do blog"></img></a>
                </div>

                
                    <ul className='menu'>
                        <li className='ml-3'> <a href="#">Sobre</a> </li>
                        <li className='ml-3'> <a href="#">Contato</a> </li>
                        <li className='ml-3'> <a href="#">Perfil</a> </li>
                    </ul>
                </nav>
            

            <div className='bx'></div>

            <div className='flex-start-row'>
                <div className='search'>
                    <form className='flex'>
                        <input type="text" name='search' placeholder='Buscar'></input>
                        <button className='btn-search'></button>
                    </form>
                </div>
                

                <div className='cta-desktop ml-3'>
                    <a href="#" className='btn'>Login</a>
                </div>
                <div className='cta-mobile'>
                    <a href="#" className='color-primary'>Login</a>
                </div>
            </div>
        </header>

        <div className='relative'>
            <div className='menu-mobile'>
                <ul className='nav-mobile'>
                    <li> <a href="#" className='link-menu-mobile'>Sobre</a> </li>
                    <li> <a href="#" className='link-menu-mobile'>Contato</a> </li>
                    <li> <a href="#" className='link-menu-mobile'>Perfil</a> </li>
                    <li className='px-2 py-2'>
                        <form className='flex '>
                            <input type="text" name='search' placeholder='Buscar'></input>
                            <button className='btn-search'></button>
                        </form>
                    </li>
                </ul>
                
            </div>
        </div>
        </>
    );
};

export default Header;