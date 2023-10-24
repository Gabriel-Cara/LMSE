import Image from 'next/image';

import AllLearn from '@/assets/logos/logo-alllearn.png'

export function Alllearn() {
    return (
        <div className="max-w-screen h-fit py-16 flex flex-col gap-8">
            <h1 className="text-white bg-blue-500 uppercase w-[65vw] text-center text-lg md:text-xl lg:text-2xl font-bold rounded-r-xl py-4"><span className="bg-gradient-to-r from-white to-blue-400 block h-[32px] max-w-screen w-full absolute -z-10"></span>Conheça nossa plataforma de cursos</h1>
            <Image className="max-w-[80vw] mx-auto" src={AllLearn} alt="" />
            <a className="flex justify-center items-center max-w-screen bg-gradient-to-r from-blue-600 via-blue-200 to-blue-600 h-[32px]" href="https://www.alllearn.com.br"><span className="text-white bg-blue-600 uppercase absolute text-center text-2xl md:text-4xl lg:text-6xl font-bold rounded-xl py-4 px-6 hover:bg-sky-300 hover:shadow-[1px_1px_200px_#252525] duration-500">Saiba Mais</span></a>
        </div>
    );
}