//Images
import logoBlog from 'svg/blog.svg';

//Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

//Link
import {Link} from 'react-router-dom';

const About = ()=>{
    return(
        <>
            <Header></Header>

            <section className="container">
                <div className="row">
                    <div className="grid-6">
                        <h1 className="h0">blog <span>.</span> </h1>
                        <p className="mt-1">Este projeto foi desenvolvido com o intuito de fixar os conhecimentos em React JS adquiridos no curso FrontPush.
                        É um projeto que faz uso dos Hooks, API com axios e Json-server, React Router DOM, SASS, CSS, HTML e JavaScript.</p>
                        <Link to="/Login" className="btn mt-4">Começar a escrever</Link>
                    </div>

                    <div className="grid-6">
                        <div className="">
                            <img src={logoBlog} alt="Logo do blog"></img>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </>
    );
}

export default About;