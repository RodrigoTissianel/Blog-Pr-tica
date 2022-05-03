//Imagens
import logo from 'svg/blog-logo.svg';

//Link
import { Link } from 'react-router-dom';

const Header = () =>{
    return(
        <>
        <header className="bb-black px-2">
            <nav>
                <div className='logo'>
                    <Link to="/"> <img src={logo} alt="Logo do blog"></img></Link>
                </div>

                
                    <ul className='menu'>
                        <li className='ml-3'> <Link to="/About">Sobre</Link> </li>
                        <li className='ml-3'> <Link to="/Contact">Contato</Link> </li>
                        <li className='ml-3'> <Link to="/Profile">Perfil</Link> </li>
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
                    <Link to="/Login" className='btn'>Login</Link>
                </div>
                <div className='cta-mobile'>
                    <Link to="/Login" className='color-primary'>Login</Link>
                </div>
            </div>
        </header>

        <div className='relative'>
            <div className='menu-mobile'>
                <ul className='nav-mobile'>
                    <li> <Link to="/About" className='link-menu-mobile'>Sobre</Link> </li>
                    <li> <Link to="/Contact" className='link-menu-mobile'>Contato</Link> </li>
                    <li> <Link to="/Profile" className='link-menu-mobile'>Perfil</Link> </li>
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