import '../assets/css/global.css'
import MatrixRain from "../components/matrixBackground/matrixRain";
import React from "react";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function MyApp({Component, pageProps}) {
    return (
        <>
            <MatrixRain/>
            <Component {...pageProps} />
        </>
);
}
