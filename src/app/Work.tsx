import Image from "next/image";

import work from "@/assets/fundo/work-pattern.png";

import { Paragraph } from "@/components/Paragraph";
import { Topic } from "@/components/Topic";

export function Work() {
    return (
        <div className="row py-10">
            <Topic name="Como Trabalhamos – Programa UniCa, Universidade Corporativa Aplicada" />
            <Image
                className="w-[90vw] lg:w-[40vw] mx-auto my-8"
                src={work}
                alt="Work Pattern"
            />
            <ul className="mx-5 lg:ml-10">
                <li>
                    <Paragraph content="- O programa UniCA foi criado com o intuito de desenvolver uma Business School dentro das organizações com os seguintes produtos e serviços: ensino, pesquisa, consultoria, treinamentos e desenvolvimento humano." />
                </li>
                <li>
                    <Paragraph content="- A ideia é que em grandes centros urbanos com uma logística complexa, faz todo sentido levar a faculdade para dentro do ambiente empresarial ou dar acesso virtual aos colaboradores para se qualificarem quando e onde quiserem discutindo de forma prática, os problemas reais com os quais a organização se depara." />
                </li>
                <li>
                    <h1 className="text-lg md:text-xl font-bold text-stone-600">Modelo de Gestão:</h1>
                    <Paragraph content="- Dentro do Programa UniCA – Universidade Corporativa Aplicada, é utilizado o modelo do Seven Steps Model for Effective Education for the Organizational Environment que vem a ser um modelo de gestão criado pela empresa LMSE - Soluções Educacionais corporativas sob medida para garantir que os colaboradores de sua empresa efetivamente aprendam e consigam ajudar a organização a atingir seus objetivos estratégicos." />
                </li>
            </ul>

            <hr className="mt-20 mx-auto max-w-3xl" />
        </div>
    )
}