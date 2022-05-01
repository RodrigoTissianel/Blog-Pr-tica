//Images
import logo from 'svg/blog-logo2.svg';

//Components
import Header from 'pages/Header';
import Footer from 'pages/Footer';

const Login = ()=>{
    return(
        <>
        <Header></Header>

            <section className="container">
                <div className="row">
                    <div className="grid-4 disappear"></div>

                    <div className="grid-4">
                        <div className="flex-center">
                            <img src={logo} alt="logo do blog" className='icon-l'></img>
                        </div>
                        <h5 className='text-center'>Olá! Faça o login para continuar</h5>

                        <form>
                            <input type="text" name="user" placeholder='Digite seu usuário' className='mt-3'></input>
                            <input type="password" name="password" placeholder='Digite sua senha'className='mt-2'></input>
                            <button className='btn w-100 mt-4'>Entrar</button>
                        </form>
                    </div>

                    <div className="grid-4 disappear"></div>
                </div>
            </section>

            <Footer></Footer>
        </>
    );
}

export default Login;