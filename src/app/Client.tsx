import Image from 'next/image';

import CLIENTS from '../assets/fundo/clients-pattern.png';

import { Topic } from '@/components/Topic';

export function Client() {
    return (
        <div id="client" className="max-w-screen h-fit">
            <div className="mx-5 flex flex-col gap-8">
                <Topic name="Empresas Clientes" reverse />

                <Image
                    style={{ objectFit: "cover", marginInline: "auto" }}
                    src={CLIENTS}
                    alt=""
                />
            </div>
            <hr className="mt-20 mx-auto max-w-3xl" />
        </div>
    )
}