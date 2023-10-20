import { Card } from './_components/Card';

import img1 from '@/app/cases/_assets/img1.png';
import img2 from '@/app/cases/_assets/img2.jpg';
import img3 from '@/app/cases/_assets/img3.png';
import img4 from '@/app/cases/_assets/img4.png';
import img5 from '@/app/cases/_assets/img5.jpg';
import img6 from '@/app/cases/_assets/img6.png';
import img7 from '@/app/cases/_assets/img7.png';
import img8 from '@/app/cases/_assets/img8.jpg';
import img9 from '@/app/cases/_assets/img9.jpg';
import img10 from '@/app/cases/_assets/img10.jpg';
import img11 from '@/app/cases/_assets/img11.jpg';
import img12 from '@/app/cases/_assets/img12.jpg';
import img13 from '@/app/cases/_assets/img13.jpg';
import img14 from '@/app/cases/_assets/img14.jpg';
import img15 from '@/app/cases/_assets/img15.jpg';
import img16 from '@/app/cases/_assets/img16.jpg';
import img18 from '@/app/cases/_assets/img18.jpg';
import img19 from '@/app/cases/_assets/img19.jpg';
import img20 from '@/app/cases/_assets/img20.jpg';

import { Navbar } from './_components/Navbar';

export default function Cases() {
    return (
        <div className="">
            <Navbar />
            <div className="bg-neutral-100 w-full h-full flex flex-wrap justify-center pt-20">
                <div id="row" className="flex flex-wrap gap-4 mx-2 md:flex-nowrap pt-8 pb-4">
                    <Card image={img1} title="Palestras" description="A inovação em produtos, serviços e modelos de negócios" />
                    <Card image={img2} title="Palestras" description="O papel da liderança na mudança" />
                    <Card image={img3} title="Palestras" description={`A busca de um "novo normal" para a educação: desafios e oportunidades`} />
                </div>
                <div id="row" className="flex flex-wrap gap-4 mx-2 md:flex-nowrap py-4">
                    <Card image={img4} title="Palestras" description="A 4ª Revolução Industrial e seus impactos na educação corporativa" />
                    <Card image={img6} title="Palestras" description="Teleperformance - Super Day" contain/>
                    <Card image={img10} title="Palestras" description="Palestras para América do Sul"  contain/>
                </div>
                <div id="row" className="flex flex-wrap gap-4 mx-2 md:flex-nowrap py-4">
                    <Card image={img7} title="Palestras" description="Teleperformance - Super Day"/>
                    <Card image={img8} title="Palestras" description="Teleperformance - Super Day" />
                    <Card image={img9} title="Palestras" description="Palestras para América do Sul" />
                </div>
                <div id="row" className="flex flex-wrap gap-4 mx-2 md:flex-nowrap py-4">
                    <Card image={img11} title="Organização de Eventos" description="Fresenius Kabi" />
                    <Card image={img12} title="Cursos de Educação Executiva" description="Workshops - Fresenius Kabi" />
                    <Card image={img20} title="Universidade Corporativa" description="Edição n° 29" />
                </div>
                <div id="row" className="flex flex-wrap gap-4 mx-2 md:flex-nowrap py-4">
                    <Card image={img13} title="Cursos de Educação Executiva" description="Workshops - Fresenius Kabi" />
                    <Card image={img14} title="Trilhas de Aprendizagem" description="Workshops - BrasilPrev" />
                    <Card image={img15} title="Consultoria de Educação Corporativa" description="Workshops - Ourofino agrociência" />
                </div>
                <div id="row" className="flex flex-wrap gap-4 mx-2 md:flex-nowrap py-4">
                    <Card image={img5} title="Palestras" description="Banner de apresentação" contain/>
                    <Card image={img18} title="Universidade Corporativa" description="Edição n° 27" contain/>
                    <Card image={img19} title="Universidade Corporativa" description="Edição n° 28" contain/>
                </div>
                <div id="row" className="flex flex-wrap gap-4 mx-2 md:flex-nowrap py-4">
                    <Card image={img16} title="Universidade Corporativa" description="Primeira graduação incompany" />
                </div>
            </div>
        </div>
    )
}