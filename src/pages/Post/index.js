//Components
import Header from 'pages/Header';
import Footer from 'pages/Footer';

//Hooks
import { useEffect, useState, } from 'react';

//Params
import { useParams } from 'react-router-dom';

//API
import api from 'services/api';


const Post = ()=>{

    const [post, setPost] = useState([]);
    const [user, setUser] = useState([]);
    const {idPost} = useParams();

    useEffect(()=>{
        api.get('/posts/' + idPost)
        .then((response)=>{
            setPost(response.data);

            api.get('/user/' + response.data.id_user)
            .then((response)=>{
                setUser(response.data);
            })
        })
    }, []);

    return(
        <>
        <Header></Header>

        <section className='container'>
            <h6 className='uppercase color-primary text-center'>{post.category}</h6>
            <h3 className='text-center'>{post.title}</h3>

            <div className="flex-center my-3">
                
                    <div className="profile">
                        <img src={user.ImageProfile} className="profile-img" alt="imagem do usuário"></img>
                    </div>

                    <div className="ml-2">
                        <h6 className="color-primary">{user.name} {user.surname}</h6>
                        <h6 className="color-gray">{user.user}</h6>
                    </div>
            
                    <p className='ml-4 color-gray'>{post.date} - {post.duration} min</p>
            </div>

            < div className='img-banner hidden'>
                <img src={post.imageUrl} alt="Imagem do post"></img>
            </div>

            <div className='row'>
                <h4 className='mt-3'>{post.title}</h4>
                <p className='mt-1'>{post.content}</p>
            </div>
            
            <div className='row mt-3'>
                <div className='grid-3 disappear'></div>

                <div className='grid-6 card'>
                    <div className='row'>
                        <div className='grid-3 flex-center pl-1'>
                            <div className='profile-big'>
                                <img src={user.ImageProfile} alt="Imagem do usuário" className='profile-img'></img>
                            </div>
                        </div>

                        <div className='grid-9'>
                            <h6 className='color-primary'>{user.name} {user.surname}</h6>
                            <h6 className='color-gray'>{user.user}</h6>
                            <p className='mt-1'>{user.description}</p>
                        </div>
                    </div>
                </div>

                <div className='grid-3 disappear'></div>
            </div>
        </section>

        <Footer></Footer>
        </>
    );
}

export default Post;