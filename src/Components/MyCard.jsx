function MyCard(props) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={props.img} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">
                    {props.buttonText}
                </a>
            </div>
        </div>
    );
}

export default MyCard;