//Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

//Components
import Main from './Main';
import Hero from './Hero';
import MaisVistos from "./MaisVistos";
import Banner from "./Banner";

//Images
import star from 'svg/icon-star.svg';

//Hooks
import { useState, useEffect } from "react";

//API
import api from 'services/api';

const Home = ()=>{

    const [main, setMain] = useState([]);
    const [mostSeen, setMostSeen] = useState([]);
    const [banner, setBanner] = useState([]);

    useEffect(()=>{
        api.get('/posts?star=5&_limit=2&_order=desc')
        .then((response)=>{
            setMain(response.data);
        })

        api.get('/posts?_sort=views&_limit=3&_order=desc')
        .then((response)=>{
            setMostSeen(response.data);
        })

        api.get('/posts?_sort=date&_limit=1&_order=desc')
        .then((response)=>{
            setBanner(response.data);
        })
    }, []);


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

            <section className="container">
                <h3>Posts com mais visitas</h3>
                <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eius possimus asperiores rerum, iure beatae corporis optio ducimus, sed quaerat doloribus dolor?</p>
                
                <div className="row mt-4">
                    {
                        mostSeen.map((item)=>{
                            return(
                                <MaisVistos key={item.id} content={item}></MaisVistos>
                            );
                        })
                    }
                </div>
            </section>

            <section className="container">
                {
                    banner.map((item)=>{
                        return(
                            <Banner key={item.id} content={item}></Banner>
                        );
                    })
                }
            </section>

            <Footer></Footer>
        </>
    );
};

export default Home;