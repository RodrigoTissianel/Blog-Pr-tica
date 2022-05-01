


const Banner = ({content})=>{
    return(
        <>
            <div className="img-banner hidden">
                <img src={content.imageUrl} alt="Banner do blog"></img>
            </div>

            <div className="text-center">
                <h6 className="color-gray mt-3 ">{content.date}</h6>
                <h6 className="uppercase color-primary ">{content.category}</h6>
                <a href="#" className="link"> <h2>{content.title}</h2> </a>
                <p className=" mt-1">{content.resume}</p>
                <div className="my-3">
                    <a href="#" className="color-primary">Ler mais</a>
                </div>
            </div>

        </>
    );
}

export default Banner;