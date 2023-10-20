import Abimed from '@/assets/logos/logo-abimed.png'
import Uniacomac from '@/assets/logos/logo-uniacomac.png'
import Uniampar from '@/assets/logos/logo-uniampar.png'
import { Paragraph } from '@/components/Paragraph';
import { Topic } from '@/components/Topic';

import Image from 'next/image';

export function College() {
    return (
        <div className="max-w-screen h-fit py-16">
            <Topic name="Universidades Corporativas LMSE" />
            <div className="flex flex-col flex-wrap md:flex-row gap-10 items-center justify-center mx-5 my-16 max-[80vw]">
                <Image
                    src={Abimed}
                    alt="Logo Uniabimed"
                />
                <Image
                    src={Uniacomac}
                    alt="Logo Uniacomac"
                />
                <Image
                    src={Uniampar}
                    alt="Logo Uniampar"
                />
            </div>
            <div className="mt-16">
                <Paragraph content="Clique nas figuras para conhecer como a LMSE pode levar até sua entidade de classe, associação ou sindicado cursos totalmente sob medida para seus parceiros e associados."/>
                <p className="mx-8 font-medium text-stone-600 text-lg text-justify">Entre em contato conosco no e-mail <a className="text-blue-400" href="mailto:comercial@lmse.com.br "> comercial@lmse.com.br </a>e saiba mais.</p>
            </div>
        </div>
    );
}