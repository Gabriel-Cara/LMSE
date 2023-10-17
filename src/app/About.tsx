
import { Topic } from "@/components/Topic";
import { Paragraph } from "@/components/Paragraph";

import img1 from '@/assets/team/img1.png';
import Image from "next/image";

export function About() {
    return (
        <div id="about" className="flex flex-col-reverse gap-4 lg:flex-row items-center h-full text-justify">
            <div className="flex flex-col gap-2 max-w-[100vw] lg:max-w-[50vw]">
                <Topic name="Quem Somos" />
                <Paragraph content="Somos uma edtech, uma startup de educação." />
                <Paragraph content="Não somos faculdade e não somos apenas uma empresa de uma consultoria em gestão." />
                <Paragraph content="Somos tudo isto junto e muito mais: uma empresa de soluções educacionais, gestora de um grande ecossistema composto por universidades de excelência no Brasil e no Exterior, por  empresas de consultoria e professores com elevado nível de  conhecimento, levando educação para empresas e gestão para  instituições de ensino de forma totalmente personalizada." />
                <Paragraph content="Uma empresa moderna, jovem e dinâmica, criada para fechar o gap entre teoria e prática, para unir o mundo corporativo e o acadêmico a fim de ajudar as organizações a atingirem seus objetivos estratégicos" />
                <Paragraph content="Fundada por profissionais formados na Faculdade de Economia e Administração da Universidadede São Paulo &#40;FEA-USP&#41; em 2005, a então Alternativa Cursos - Consultorias e Treinamentos, passou, em 2018, a chamar-se LMSE – Soluções Educacionais Corporativas sob Medida." />
                <Paragraph content="A LMSE tem por propósito transformador massivo:" />
                <Paragraph content="Ser a maior empresa de soluções educacionais corporativas inovadoras do Brasil, capaz de oferecer serviços de alta qualidade e excelência, nas áreas de: treinamentos, consultorias, assessorias e desenvolvimento humano, ajudando nossos clientes, as empresas, bem como seus parceiros de negócios a atingirem a melhor performance rumo aos seus objetivos estratégicos." />
            </div>
            <Image
                className="w-[90vw] mt-4 lg:w-[50vw] lg:h-screen"
                src={img1}
                width={500}
                height={500}
                quality={100}
                alt=""
            />
        </div>
    )
}