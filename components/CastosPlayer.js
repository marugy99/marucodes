const CastosPlayer = ({ url }) => {
    return (
        <iframe
            className="castos-iframe-player"
            src={url}
            width="100%"
            height="600"
        ></iframe>
    );
};

export default CastosPlayer;
