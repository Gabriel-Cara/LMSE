import { Comment } from '@/components/Comment';
import { Topic } from '@/components/Topic';

export function Commentary() {
    return (
        <div className="max-w-screen h-fit py-16">
            <Topic name="O que falam da LMSE" />
            <div className="flex flex-1 flex-wrap items-center justify-center gap-8">
                <Comment text="É um projeto inovador que tem muita sinergia com a missão da AMPAR de capacitar e qualificar recursos humanos nos municípios de sua área de atuação...Ele é um curso em que os conteúdos são transformados em projetos práticos e a pessoa integra, com isso, teoria e prática." />
                <Comment text="Metodologia inovadora de gestão baseada nos princípios da administração pública, legislação vigente, tecnologias gerenciais, aspectos ambientais e ética profissional" />
                <Comment text="Leandro Morilhas Soluções Educacionais é um parceiro de destaque, fornecendo soluções de Educação 4.0 sob medida para empresas e promovendo o desenvolvimento educacional personalizado para atender às necessidades do mundo corporativo." />
                <Comment text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, facilis illo. Accusamus quam, sint at deserunt voluptatibus harum pariatur perferendis magni. Perspiciatis quaerat tenetur quibusdam, magnam placeat error blanditiis quod?" /> 
            </div>
        </div>
    );
}