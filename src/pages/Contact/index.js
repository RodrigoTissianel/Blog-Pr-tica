//Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

//Images
import twitter from 'svg/icon-twitter.svg';
import facebook from 'svg/icon-facebook.svg';
import instagram from 'svg/icon-instagram.svg';
import youtube from 'svg/icon-youtube.svg';

const Contact = ()=>{
    return(
        <>
        <Header></Header>

        <section className="container">
            <div className="row">
                <div className="grid-6">
                    <h3>Entre em contato</h3>
                    <p>Aqui você vai conseguir mais informações sobre o projeto Blog utilizando React.js.</p>

                    <form>
                        <input type="text" name="nome" placeholder="Nome" className="mt-2"></input>
                        <input type="e-mail" name="e-mail" placeholder="E-mail" className="mt-2"></input>
                        <textarea rows="8" cols="50" placeholder="Mensagem" className="mt-2" ></textarea>
                        <button className="btn mt-2" value="enviar">Enviar</button>
                    </form>
                </div>
                <div className="grid-1 disappear"></div>
               
                <div className="grid-5">
                    <h5 className="mt-4">Algumas Informações</h5>

                    <h6 className="color-primary mt-4">Informações</h6>
                    <p>Projeto Blog. em React.js do curso FrontPUSH.</p>

                    <h6 className="color-primary mt-4">Endereço</h6>
                    <p>Rio de Janeiro, RJ</p>

                    <h6 className="color-primary mt-4">E-mail</h6>
                    <p>rodrigotissainel96@hotmail.com</p>

                    <h6 className="color-primary mt-4">E-mail</h6>
                    <div className="mt-2">

                        <a href="#">
                            <img src={facebook} alt='facebook' className='icon-s'></img>
                        </a>

                        <a href="#" className='ml-2'>
                            <img src={instagram} alt='instagram' className='icon-s'></img>
                        </a>

                        <a href="#" className='ml-2'>
                            <img src={youtube} alt='youtube' className='icon-s'></img>
                        </a>

                        <a href="#" className='ml-2'>
                            <img src={twitter} alt='twitter' className='icon-s'></img>
                        </a>
                    </div>

                </div>
            </div>
        </section>


        <Footer></Footer>
        </>
    );
}

export default Contact;