const BgVideo = () => {
    return (
        <video
            src="/pigeonVideo.mp4"
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>
    )
}

export default BgVideo