const Gallery = ({ images, callback }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
      {images.map((img, index) => (
        <img
          className="rounded-md"
          key={index}
          src={callback(img.asset)}
          alt={img.alt}
        />
      ))}
    </div>
  );
};

export default Gallery;
