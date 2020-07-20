import React from 'react';
import '../../css/ImageList.css'
import ImageCard from "./ImageCard"

const ImageList = (props) => {
    const images = props.images.map((imag) => {
        return <ImageCard key={imag.id} image={imag} />
    });
    return <div className="image-list">{images}</div>
};

export default ImageList