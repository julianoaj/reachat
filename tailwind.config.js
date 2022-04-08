module.exports = {
    content: [
        "./src/pages/_app.js",
        "./src/pages/home.js",
        "./src/pages/chat.js",
        "./src/components/matrixBackground/matrixRain.js",
        "./src/components/matrixBackground/rainStream.js"
    ],
    theme: {
        colors: {
            'grey-700': '#212931',
            'grey-800': '#181F25',
            'grey-900': '#101418',
            'grey-999': '#080A0C',
            'green-400': '#57AE5B',
            'green-500': '#3F9142',
            'green-600': '#2F8132',
        },
        extend: {
            colors: {
                'white-500': '#CBD2D9',
                'white-600': '#9AA5B1',
                'white': '#FFFFFF',
                'grey-800': '#181F25',
            },
            height: {
                '600': '600px',
                '240': '240px',
            }
        },
    },
    plugins: [],
}
