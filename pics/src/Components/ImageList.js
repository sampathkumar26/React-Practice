import ImageShow from './ImageShow';
import './ImageList.css'

const ImageList = ( { images } ) => {

    const renderedImage = images.map(
        ( image ) => {
            return <ImageShow key={image.id} source={ image } />
        }
    );

    return (
        <div className='image-list'>
            {renderedImage}
       </div>
    );
}

export default ImageList;