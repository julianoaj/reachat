import RainStream from "./rainStream";
import {useEffect, useRef, useState} from "react";

function MatrixRain(props) {
    const containerRef = useRef(null);
    const [containerSize, setContainerSize] = useState(null); // ?{width, height}

    useEffect(() => {
        const boundingClientRect = containerRef.current.getBoundingClientRect();
        setContainerSize({
            width: boundingClientRect.width,
            height: boundingClientRect.height,
        });
    }, []);

    const streamCount = containerSize ? Math.floor(containerSize.width / 26) : 0;
    const arrayStreamCount = Array(streamCount).fill()

    return (
        <div
            style={{
                background: 'black',
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                overflow: 'ignore',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
            }}
            ref={containerRef}>
            {new Array(streamCount).fill().map((_) => (
                <RainStream key={Math.random().toString(36).substr(2, 9)} height={containerSize?.height} />
            ))}
        </div>
    );
}

export default MatrixRain;