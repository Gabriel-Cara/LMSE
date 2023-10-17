import Image from "next/image"

import hero from '@/assets/fundo/hero-pattern.png'

export function Hero() {
    return (
        <>
            <div id="video" className="h-screen lg:h-max max-w-screen pt-[calc(100vh-92vh)]">
                <Image
                    className="object-cover absolute -z-10"
                    src={hero}
                    fill={true}
                    alt="Hero Image"
                />
                <div className="">
                    <h1 className="text-sky-500 text-end uppercase font-extrabold text-3xl lg:text-5xl md:text-4xl mx-12 mt-[10%] h-max border-r-[6px] border-r-sky-500 px-2">
                        Integrando
                        <br />Teoria e Prática
                        <br />Para o Sucesso
                        <br />Do Seu Negócio</h1>
                </div>
                {/* Video */}
                <div className="bg-white w-max mx-auto rounded-xl mt-[10%]">
                    <h1 className="font-bold text-sky-600 border-b-2 border-b-blue-600 text-xl text-center  uppercase py-2 ">Vídeo Institucional</h1>
                    <iframe className="lg:w-[845px] lg:h-[500px] md:w-[617px] md:h-[365px]" width="300" height="177" src="https://www.youtube.com/embed/4fEmuL7viMo?si=96nxiULuUmCo3zfS" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
            </div>
        </>
    )
}