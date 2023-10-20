'use client'

import LMSE from '@/assets/logos/logo-lmse-fundo-escuro.png';
import AbStartups from '@/assets/logos/logo-abstartups.png';
import DNA from '@/assets/logos/dna-negativo.png';

import Image from 'next/image';

import { Envelope, FacebookLogo, InstagramLogo, LinkedinLogo, MapPin, Phone, SpotifyLogo, WhatsappLogo, YoutubeLogo } from '@phosphor-icons/react';

export default function Footer() {
    return (
        <div id="footer" className="bg-zinc-900 pt-4 w-full">
            <div className="row flex flex-col lg:grid grid-cols-2 justify-items-center items-center text-gray-400 gap-6 lg:gap-0">
                <div className="w-1/2">
                    <Image 
                        className="w-[250px] lg:w-1/2"
                        src={LMSE}
                        alt="Logo LMSE Negativo"
                    />
                    <em className="">
                        Ser a maior empresa de soluções educacionais corporativas  inovadoras do Brasil, capaz de oferecer serviços de alta qualidade e  excelência, nas áreas de: treinamentos, consultorias, assessorias e  desenvolvimento humano, ajudando nossos clientes, as empresas,  bem como seus parceiros de negócios a atingirem a melhor  performance rumo aos seus objetivos estratégicos.
                    </em>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-4">
                    <div id="contact" className="flex flex-col items-center lg:items-start gap-4">
                        <h4 className="font-bold text-lg">Contate-nos</h4>
                        <p className="flex items-center"><WhatsappLogo size={24}/>+55 &#40;11&#41; 91098-5191</p>
                        <p className="flex items-center"><Phone size={24}/>+55 &#40;11&#41; 2923-9699</p>
                        <p className="flex items-center"><Phone size={24}/>+55 &#40;11&#41; 2923-8695</p>
                        <p className="flex items-center"><MapPin color="#0284c7" size={24} />R. 23 de Maio, 790
                            Sala 61B - Vila Vianelo
                            <br />CEP: 13207-070 - Jundiaí - SP</p>
                        <p className="flex items-center"><Envelope color="#0284c7" size={24} />contato@lmse.com.br</p>
                    </div>
                    <div id="social-media" className="flex gap-2">
                        <a className="hover:scale-110 duration-150" href="https://www.facebook.com/LMSEedutech"><FacebookLogo weight="fill" color="white" size={32} /></a>
                        <a className="hover:scale-110 duration-150" href="https://www.instagram.com/lmse_edutech/"><InstagramLogo weight="fill" color="white" size={32} /></a>
                        <a className="hover:scale-110 duration-150" href="https://www.linkedin.com/company/lmse/"><LinkedinLogo weight="fill" color="white" size={32} /></a>
                        <a className="hover:scale-110 duration-150" href="https://open.spotify.com/show/2hvoOx5a3WApLiXr1x3L3X"><SpotifyLogo weight="fill" color="white" size={32} /></a>
                        <a className="hover:scale-110 duration-150" href="https://www.youtube.com/@lmseedutech"><YoutubeLogo weight="fill" color="white" size={32} /></a>
                    </div>
                </div>
            </div>
            <div className="row flex flex-col items-center lg:grid grid-cols-2 justify-items-center text-gray-400 my-10">
                <div>
                    <p>Empresa associada à:</p>

                    <Image 
                        className="w-60"
                        src={AbStartups}
                        alt="Logo_Abstartups_negativa"
                    />
                </div>
                <div>
                    <p>Empresa do ecossistema:</p>

                    <Image 
                        className="w-40"
                        src={DNA}
                        alt="Logo_dna_negativa" 
                    />
                </div>
            </div>
            <div className="row flex justify-center text-center text-stone-100 bg-stone-950 p-3 border-t-2 border-t-stone-700">
                <p>Copyright &copy; 2023 LMSE | Desenvolvido por <a className="font-medium hover:bg-zinc-100 hover:text-zinc-950 hover:px-1.5 rounded-lg duration-150" href="https://github.com/Gabriel-Cara" target="_blank">Gabriel Cara</a> para LMSE - Soluções educacionais corporativa sob medida</p>
            </div>
        </div>
    );
}