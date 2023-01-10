function ProfileCard( props ) {
    
    const { title, handle, image} = props;
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="img" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <h3 className="title is-4">{title}</h3>
                    <h6 className="subtitle is-6">{handle}</h6>
                </div>
                <p className="content">I'll help you to buy stuff on amazon</p> 
            </div>
        </div>
    );
}

export default ProfileCard;