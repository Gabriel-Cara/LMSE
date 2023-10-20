import { Paragraph } from '@/components/Paragraph';
import { Topic } from '@/components/Topic';


export function Blog() {
    return (
        <div className="row py-10">
            <Topic name="Blog de Gestão de Pessoas" />
            <ul className="mx-5 lg:ml-10">
                <li>
                    <Paragraph content="- Um conjunto de textos dicas e orientações sobre carreira, mercado de trabalho, educação corporativa 4.0 e 5.0."/>
                </li>
                <li>
                    <Paragraph content="- Conteúdo gratuito e oferecido por All Learn e patrocinado pela LMSE." />
                </li>
                <li>
                    <p className="mx-8 font-medium text-stone-600 text-lg text-justify">- Acesse: <a className="text-sky-600" href="https://alllearn.com.br/blog" target="_blank">https://alllearn.com.br/blog</a> para ler todos os artios na íntegra.</p>
                </li>
            </ul>
            <hr className="mt-20 mx-auto max-w-3xl"/>
        </div>
    )
}