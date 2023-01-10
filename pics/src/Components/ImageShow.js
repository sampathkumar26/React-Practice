const ImageShow = ({source}) => {
    //console.log(source.urls)
    return <div>
        <img src={ source.urls.small } alt={ source.alt_description } />
    </div>;
}

export default ImageShow;