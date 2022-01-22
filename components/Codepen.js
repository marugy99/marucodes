const Codepen = ({ url }) => {
    return ( 
        <iframe
            height="450"
            style={{ width: '100%' }}
            scrolling="no"
            title="CodePen Embed"
            src={url}
            frameBorder="no"
            allowtransparency="true"
            allowFullScreen
          />
    );
}
 
export default Codepen;