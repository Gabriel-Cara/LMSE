import { CardService } from "@/components/CardService";
import { Topic } from "@/components/Topic";

export function Service() {
    return (
        <div id="service" className="overflow-x-hidden h-fit my-40">
            <Topic name="Nossos Serviços" custom="text-4xl" />
            <div className="flex flex-col bg-[url('../assets/fundo/service-pattern.png')] bg-cover justify-center gap-10 mt-20 py-10 ">
                <div className="flex flex-col lg:flex-row w-screen">
                    <CardService blackCardTitle="Desenvolvimento de Talentos" list={['- Cursos livres', '- Graduação – Bacharelado e Tecnológico', '- Pós-graduação: Especialização e MBAs:  Executivo, Generalista, Especializado e  Setorial', '- Módulos internacionais na Europa']} btnTitle="Tenho Interesse" />

                    <CardService blackCardTitle="Consultoria e Desenvolvimento e de Soluções Educacionais" list={['- Estruturação de Universidades Corporativas', '- Transformação de Universidades Corporativas presenciais para digitais', '- Avaliação de AVAs – Ambiente Virtuais de Aprendizagem', '- Desenvolvimento de soluções educacionais totalmente customizadas para as empresas clientes', '- Curadoria educacional de projetos de treinamento']} btnTitle="Tenho Interesse" />
                </div>


                <div className="flex flex-col lg:flex-row w-screen">
                    <CardService blackCardTitle="Gestão de Pessoas" list={['- Liderança', '- Educação Corporativa', '- Mudança e cultura', '- Gestão Estratégica de Pessoas', '- Saúde Emocional', '- Equipes e Segurança psicológica', '- Soft Skills', '- Carreira', '- Diversidade e Inclusão']} btnTitle="Tenho Interesse" />

                    <CardService blackCardTitle="Desenvolvimento de Talentos" list={['- Palestras', '- Análise de posicionamento estratégico']} btnTitle="Tenho Interesse" />
                </div>
            </div>
        </div>
    )
}