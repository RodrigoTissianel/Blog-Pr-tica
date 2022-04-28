//Header e Footer
import Header from "pages/Header";

//Components
import Main from './Main';
import Hero from './Hero';

//Images
import star from 'svg/icon-star.svg';

//Hooks
import { useState, useEffect } from "react";

//API
import api from 'services/api';

const Home = ()=>{

    const [main, setMain] = useState([]);


    useEffect(()=>{
        api.get('/posts?star=5&_limit=2&_order=desc')
        .then((response)=>{
            setMain(response.data);
        })
    }, [])





    return(
        <>
            <Header></Header>
            
            <Hero></Hero>

            <section className="container">
                <div className="row flex-center">
                    <div className="grid-6">
                        <div className="icon-l">
                            <img src={star} alt="star icon"></img>
                        </div>

                        <h2 className="mt-2">Os melhores e mais bem votados posts do mês</h2>
                        <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis a unde libero architecto nemo, dignissimos necessitatibus quibusdam nobis expedita, eligendi!</p>
                    </div>

                    <div className="grid-6">
                        {
                            main.map((item)=>{
                                return(
                                    <Main key={item.id} content={item}></Main>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;