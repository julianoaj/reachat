import appConfig from "../../config.json";
import animationData from "../assets/lottie/photoScam.json";
import Lottie from "react-lottie-player";
import React, {useEffect} from "react";
import {useRouter} from "next/router";

export default function BoxLogin() {
    const [username, setUsername] = React.useState('lsk-dev')
    const [dataGithub, setDataGithub] = React.useState([])
    const route = useRouter()
    const [lottie, setLottie] = React.useState(true)

    React.useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then((res) => {
                if (res.ok) {
                    if (username !== 'lsk-dev') {
                        setLottie(false)
                    }
                    return res.json()
                } else {
                    setLottie(true)
                    return res.json()
                }
            }).then((conv) => {
            setDataGithub(conv)
        })

        replaceValidationUI()
    }, [username])

    return (
        <div className="grid place-content-center relative">
            <div className="bg-grey-700 rounded-2xl p-7 h-600 w-80 flex flex-col items-center space-y-4">
                <div className="box-content bg-grey-800 p-5 rounded-lg border-x w-40">
                    <Lottie
                        loop
                        animationData={animationData}
                        play
                        style={{width: 166, height: 166, display: lottie ? 'flex' : 'none'}}
                    />
                    <img
                        className="rounded-full mb-6 "
                        style={{
                            display: lottie ? 'none' : 'flex',
                        }}
                        src={username === 'lsk-dev' ? '' : `https://github.com/${username}.png`}
                        alt="Perfil Photo"
                    />
                    <div className="text-center">
                        <p
                            className="text-white-500 bg-grey-900 p-2 text-xs rounded-full inline">
                            {dataGithub.name}
                        </p>
                    </div>
                </div>
                <div className="box-content text-white font-bold text-2xl">
                    <h1>Seja bem vindo(a)</h1>
                </div>
                <div className="box-content text-white-600 text-sm text-center">
                    <p>Se clicar em entrar ira descobrir até a onde a toca do coelho vai. Se não, ira continuar vivendo
                        sua vida como ela sempre foi. A escolha é sua!</p>
                </div>
                <div className="box-content text-white-600 text-sm text-center w-full teste" data-error="PREENCHE AI IRMÃO">
                    <form
                        onSubmit={function (submitEvent) {
                            submitEvent.preventDefault();


                            setTimeout(() => {
                                route.push('/chat')
                            }, 3000)
                        }}
                    >
                        <label className="flex flex-col items-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="bi bi-github" viewBox="0 0 16 16"><path
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
                        </label>
                        <input
                            type="text" name="text"
                            className="mt-1 px-4 py-3 bg-grey-800 focus:outline-none ring-[#3F9142] block w-full rounded-md sm:text-sm focus:ring-1 placeholder:italic"
                            placeholder="Seu nome de usuário GitHub"
                            onChange={function (event) {
                                const onChangeValue = event.target.value
                                if (onChangeValue.length >= 2) {
                                    setUsername(event.target.value);
                                }
                            }}
                            required
                        />
                        <button
                            className="bg-green-500 w-full px-4 py-2.5 text-white rounded-md mt-4 hover:bg-green-600 active:bg-green-600 focus:outline-none">
                            Entrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

function replaceValidationUI () {
    document.querySelector( "form > input" ).addEventListener( "invalid", (event) => {
        event.preventDefault()
    })
}
