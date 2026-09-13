const  Cards = (props) => {
    return (
        <div className="cardUI">
            <div className="imgPart">
                <img className="img" src={props.image} ></img>
                <span className="img-heading">{props.pin}</span>
            </div>
            
            <div className="about">
                <h1 className="itsname">{props.name}</h1>
                <p className="itsdescription">{props.desc}</p>
            </div>

            <div className="details">
                <span className="details-ele">{props.moreDetail1}</span>
                <span className="details-ele">{props.moreDetail2}</span>
                <span className="details-ele">{props.moreDetail3}</span>
            </div>

            <div className="bottom">
                <span>{props.btmspan1}</span>
                <span>{props.btmspan2}</span>
                <span>{props.btmspan3}</span>
                <button className="btn">{props.button}</button>
            </div> 
                        
        </div>

    )

}

export default Cards