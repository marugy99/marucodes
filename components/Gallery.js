const Gallery = ({ images, callback }) => {
  return ( 
    <div className="gallery">
      {
        images.map((img, index) => (
          <img key={index} src={callback(img.asset)} alt={img.alt} />
        ))
      }
    </div>
  );
}

export default Gallery;