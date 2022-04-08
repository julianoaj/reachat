import {useEffect, useState} from "react";
import useInterval from "@use-it/interval";

const chars = 'abcdefghijklmnopqrstuvwxys0123456789$+-*/=%*#&_(),.;:?!\\|{}<>[]^~';
const streamMutation = 0.02;

const minStreamssSize = 10;
const maxStreamsSize = 30;

const minIntervalDelay = 50;
const maxIntervalDelay = 100;

const minDelayBetweenStreams = 0;
const maxDelayBetweenStreams = 8000;

const getRandInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const getRandChar = () => chars.charAt(Math.floor(Math.random() * chars.length));
const getRandStream = () => new Array(getRandInRange(minStreamssSize, maxStreamsSize))
                            .fill()
                            .map(_ => getRandChar());
const getMutateStream = stream => {
    const newStream = [];
    for (let i=1; i<stream.length; i++) {
        if (Math.random() < streamMutation) {
            newStream.push(getRandChar())
        } else {
            newStream.push(stream[i])
        }
    }
    newStream.push(getRandChar());
    return newStream;
}

function RainStream(props) {
    const [stream, setStream] = useState(getRandStream());
    const [topPad, setTopPad] = useState(stream.length * -50);
    const [intervalDelay, setIntervalDelay] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIntervalDelay(getRandInRange(minIntervalDelay, maxIntervalDelay));
        }, getRandInRange(minDelayBetweenStreams, maxDelayBetweenStreams));

        return () => {
            clearTimeout(timer);
        }
    }, []);

    useInterval(() => {
        if (!props.height) return;

        if (!intervalDelay) return;

        // If stream is off the screen, reset it after timeout
        if (topPad > props.height) {
            setStream([]);
            const newStream = getRandStream();
            setStream(newStream);
            setTopPad(newStream.length * -44);
            setIntervalDelay(null);
            setTimeout(
                () =>
                    setIntervalDelay(
                        getRandInRange(minIntervalDelay, maxIntervalDelay),
                    ),
                getRandInRange(minDelayBetweenStreams, maxDelayBetweenStreams),
            );
        } else {
            setTopPad(topPad + 44);
        }
        // setStream(stream => [...stream.slice(1, stream.length), getRandChar()]);
        setStream(getMutateStream);
    }, intervalDelay);

    return (
        <div style={{
            marginTop: topPad,
            fontFamily: 'matrixfont',
            color: '#6cc563',
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
            userSelect: 'none',
            whiteSpace: 'nowrap',
            textShadow: '0px 0px 8px rgba(32, 194, 14, 0.8)',
            fontSize: 25,
            letterSpacing: -12
        }}>
            {stream.map((char, index) => (
                <a key={index.toString()} style={{
                    color: index === stream.length - 1 ? '#fff' : undefined,
                    opacity: index < 6 ? 0.1 + index * 0.15 : 1,
                    textShadow: index === stream.length - 1 ? '0px 0px 20px rgba(255, 255, 255, 1)' : undefined,
                }}>
                    {char}
                </a>
            ))}
        </div>
    );
}

export default RainStream;