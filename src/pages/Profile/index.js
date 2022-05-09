//Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

//Images
import perfil from 'profile/ny.jpg';

const Profile = ()=>{
    return(
        <>
            <Header></Header>

            <section className="container">
                <div className="row">
                    <div className="grid-6">
                        < div className="flex-start-row">
                        <div className="profile-big">
                            < img src={perfil} alt="imagem de perfil" className="profile-img"></img>
                        </div>

                        <div className="ml-3">
                            <h3 >Nasser Yousef Ali</h3>
                            <h6 className="color-gray">@Nasseryousef</h6>
                        </div>
                    </div>
                        <p className="mt-3">Olá, seja bem vindo ao blog. Compartilhe conhecimento!</p>
                    </div>

                    <div className="grid-6 flex-center">
                        <a href="#" className="btn">Meus dados</a>
                        <a href="#" className="btn ml-3">Adicionar post</a>
                    </div>
                </div>
            </section>

            <section className="container">
                <h3>Adicionar um novo post</h3>
                <p className="mt-1">Preencha os campos abaixo para adicionar um novo post ao blog</p>

                <form>
                    <div className="row">
                        <div className="grid-3 p-0">
                            <label for="Date"> <h6>Data</h6> </label>
                            <input type="date" name="date" id="Date" className="mt-1"></input>
                        </div>

                        <div className="grid-3 p-0">
                            <label for="category"> <h6>Categoria</h6> </label>
                            <select name="category" id="category" className="mt-1">
                                <option value="Tecnologia">Tecnologia</option>
                                <option value="Games">Games</option>
                                <option value="Fotografia">Fotografia</option>
                                <option value="Cinema">Cinema</option>
                            </select>
                        </div>

                        <div className="grid-6 p-0">
                            <label for="title"> <h6>Título</h6> </label>
                            <input type="text" name="title" id="title" className="mt-1"></input>
                        </div>
                    </div>

                    <div className="row">
                        <div className="grid-9 p-0">
                            <label for="resume"> <h6>Resumo</h6> </label>
                            <input type="text" name="resume" id="resume" className="mt-1"></input>
                        </div>

                        <div className="grid-3 p-0">
                            <label for="duration"> <h6>Duração</h6> </label>
                            <select name="duration" id="duration" className="mt-1">
                                <option value="5 min.">5 min.</option>
                                <option value="7min.">7min.</option>
                                <option value="10 min.">10 min.</option>
                                <option value="15 min.">15 min.</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="grid-12 p-0">
                            <label for="description"> <h6>Descrição</h6> </label>
                            <textarea rows="10" name="description" id="description" className="w-100 mt-1"></textarea>
                        </div>
                    </div>

                    <div className="row flex-end-row">
                        <button className="btn mr-2" value="adicionar">Adicionar</button>
                    </div>
                </form>
            </section>
            <Footer></Footer>
        </>
    );
}

export default Profile;