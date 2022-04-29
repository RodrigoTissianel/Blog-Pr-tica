


const MaisVistos = ({content})=>{
    return(
        <>
            <div className="grid-4 card p-0">
                <div className="hidden thumb">
                    <a href="#">
                        <img src={content.imageUrl} alt="Posts mais vistos"></img>
                    </a>
                </div>
                <div className="px-2">
                    <h6 className="color-gray mt-2">{content.date}</h6>
                    <h6 className="uppercase color-primary">{content.category}</h6>
                    <a href="#">
                        <h4 className="">{content.title}</h4>
                    </a>
                    <p className="mt-1">{content.resume}</p>

                    <div className="my-3">
                        <a href="#" className="color-primary">Ler mais</a>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default MaisVistos;