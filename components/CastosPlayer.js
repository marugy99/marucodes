const CastosPlayer = ({ url }) => {
    return (
        <iframe
            class="castos-iframe-player"
            src={url}
            width="100%"
            height="600"
        ></iframe>
    );
};

export default CastosPlayer;
