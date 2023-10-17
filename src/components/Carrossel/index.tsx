'use client'

import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { TeamCard } from '../TeamCard';

import Alessandro from '@/assets/team/alessandro.png'
import Ana from '@/assets/team/ana.png'
import Arnaldo from '@/assets/team/arnaldo.png'
import Azizeh from '@/assets/team/azizeh.png'
import Christiane from '@/assets/team/christiane.png'
import Leandro from '@/assets/team/leandro.png'
import Claudia from '@/assets/team/claudia.png'
import Cleber from '@/assets/team/cleber.png'
import Cristiane from '@/assets/team/cristiane.png'
import Danilo from '@/assets/team/danilo.png'
import Fabio from '@/assets/team/fabio.png'
import Fernanda from '@/assets/team/fernanda.png'
import Giovana from '@/assets/team/giovana.png'
import João from '@/assets/team/joao.png'
import Marcelo from '@/assets/team/marcelo.png'
import Tatiana from '@/assets/team/tatiana.png'
import Sonia from '@/assets/team/sonia.png'

export function Carrossel() {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination ]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop
                className='cursor-grabbing'
            >
                <SwiperSlide>
                    <TeamCard
                        name='Leandro Morilhas'
                        img={Leandro}
                        list={[
                            'Formado em administração com mestrado e  doutorado pela FEA-USP com especialização em Contabilidade e Gestão Empresarial.',
                            'Possui cursos de extensão universitária, em Cambridge, Lyon, Harvard',
                            'É avaliador do MEC – INEP para abertura de faculdades e autorização de cursos de nível  superior.',
                            'Foi diretor da FIA-USP implantando vários programas, como mestrado, graduação e EAD.',
                            'Foi também membro do Board do PRME PnUD da ONU, entidade responsável pela  disseminação do ensino de sustentabilidade em empresas e organizações.',
                            'É conselheiro do Guia Mais do Estado de São Paulo, voltado para cursos de MBA.',
                            'Presidiu a ANAMBA, onde criou normas de acreditação de MBAs nos padrões Brasil e  Global.',
                            'Atua há 15 anos como executivo e acumula 23 anos na área de educação tanto no Brasil  quanto no exterior.',
                            'Já desenvolveu mais de 7.000 alunos, sendo destes cerca de 1.000 executivos C-level.',
                            'É professor de escolas de negócio no Brasil e no exterior: Escola de gestão da saúde do  hospital Albert Einstein, FIA-USP, Insper (Brasil) e ESAN –  Escuela Superior de Administración de Negocios – ESAN (Peru).',
                            'Tendo lecionado também em escolas como FECAP, FIPECAFI-USP e Trevisan Escola de Negócios.',
                        ]} />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard
                        name='Alessandro César Bigheto'
                        img={Alessandro}
                        list={[
                            'Mestre em Filosofia, história e educação pela Universidade Estadual de Campinas (2006).',
                            'Há mais de dez anos é professor do ensino superior: FIA Business School em cursos de graduação e de educação executiva e da pós graduação da Universidade Santa Cecilia, preparando executivos para trabalharem as questões éticas no ambiente organizacional.',
                            'Tem experiência na área de Educação, filosofia e temas afins, com ênfase em Filosofia da Educação, atuando principalmente nos seguintes temas: filosofia, ética, filosofia da educação, história da educação e tolerância religiosa.',
                            'Autor de mais de trinta livros sobre estas temáticas.',
                        ]} />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard
                        name='Ana Maria Gimenez Cafarelli'
                        img={Ana}
                        list={[
                            'Profissional independente que reúne conhecimento, experiência e métodos para oferecer soluções que respondam as demandas de desenvolvimento humano e organizacional.',
                            'Formada em Psicologia, complementou sua graduação com diferentes cursos volados ao desenvolvimento do comportamento humano.',
                            'Psicodrama voltado às Empresas, Coordenação de Grupos Operativos, Gestão Estratégica de RH, Gestão da Mudança, 9BOX entre outros.',
                            'Certificações diversas, dentre elas DISC, MBTI, Hogan, Birkman, OPQ32, Segurança Psicológica para Times, Plantão Psicológico Dirigido e em Empresas.',
                            'Atuou nas áreas de Treinamento & Desenvolvimento, por mais de 30 anos em diferentes empresas multinacionais e nacionais, além de consultorias.',
                            'Ocupou posições de liderança sênior como especialista em ações de desenvolvimento humano, sempre apoiando e desenhando projetos para as áreas de negócios, com foco nas equipes e nos indivíduos em busca de atender as demandas de desempenho e resultados.',
                            'Trabalhou em projetos de desenvolvimento de Lideranças, Performance, Banco de Talentos & Sucessão, Clima & Engajamento, Gestão Mudanças, Assessment, Coaching Interno, Processos de RH.',
                        ]} />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard
                        name='Arnaldo Marion'
                        img={Arnaldo}
                        list={[
                            'CEO da Coaching 4 Change LLC (EUA), uma empresa especializada em capacitação e desenvolvimento de líderes, capacitação gerencial e formação em coaching. Atua há mais de 15 anos em desenvolvimento, coordenação e implementação de projetos de aprendizagem e desenvolvimento em diferentes países e culturas.',
                            '​CFO do Grupo Action Corporations, sediado nos EUA. Tem experiência de 15 anos na indústria bancária e financeira no banco ABN Amro, Santander, Arthur Anderson e Credicard.',
                            'É professor e membro do Conselho Consultivo do programa de MBA da Anderson University, Carolina do Sul (EUA), e instrutor da Small Business Development Center, da University of Texas at San Antonio (UTSA) e membro do conselho executivo do Instituto Marion (IMEC).',
                            'Graduado em Administração e Mestrado em Administração pela PUC-SP, Pós-Graduado em Governança Corporativa e Avaliação de Empresas pelo BI Internacional e especialização em Inovação pela Berkeley University (EUA).',
                            'É coach certificado pela International Coaching Federation (ICF), com aperfeiçoamento na Creative Results Management.',
                            'É autor de 6 livros em temas relacionados a negócios, coaching e espiritualidade, entre eles Manual de Coaching e Coaching Financeiro, publicados pelo GEN | Atlas.',
                        ]} />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard
                        name='Azizeh Emleh'
                        img={Azizeh}
                        list={[
                            'Mais de 26 anos de carreira profissional como consultora em Desenvolvimento Humano e Organizacional, atuando em empresas como: Basf, MRV, Itaú, TOTVS, Pernambucanas, Swiss Re (UBS Seguros), Escola da Inteligência–Educação Socioemocional, SENAC, Gráfica Santa Marta e Medicina Nelson Faidiga filhos & Associados. Desenvolve treinamentos e programas de Liderança, Gestão de Equipes, Executive Coaching, Mentoring e Team Building.',
                            'Docente no Insper há 21 anos. Atualmente leciona na área de Educação Executiva, cursos abertos e customizados, em programas de Liderança, Negociação Estratégica e Gestão de Conflitos. Prêmio Chafi Haddad de Excelência em Ensino no programa de Pós-graduação Certificates. ',
                            'Certificação Internacional em Coaching pelo Integrated Coaching Institute (ICI), qualificação em Assessment pelo Center for Creative Leadership (CCL) e certificação nas ferramentas de perfil psicológico e comportamental - MBTI, LABEL e OPQ23 e Assessment Estilos Comportamentais de Negociação. Graduação em Administração de Empresa pela PUC-SP e Mestrado Interdisciplinar em Educação, Administração e Comunicação pela Universidade São Marcos-SP.',
                        ]} />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard
                        name='Christiane Ferreira Bersi'
                        img={Christiane}
                        list={[
                            'Psicóloga formada pela UNIP, MBA em Gestão Estratégica de Pessoas pela BBS - Brazilian Business School e especialização em Psicodrama pela ACTO - Desenvolvimento Pessoal e Profissional. Credenciada pela ICF (International Coach Federation) como ACC - Associate Certified Coach, com formação pela ICI (Integrated Coaching Institute) e certificação em Análise de Perfil Pessoal e de Equipes pela Extended DISC.',
                            'Exerceu a função de Gerente de Projetos na Brightlink Consultoria por mais de 15 anos onde atuou como facilitadora de inúmeros programas de treinamento e desenvolvimento, preprarou centenas de profissionais para atuarem como Líder Coach . Atua como consultora independente por mais de 6 anos.',
                            'Sempre atuando com Coaching de Executivos, Treinamento & Desenvolvimento em clientes de diversos segmentos: Johnson & Johnson, Danone, Castgroup,  Accorhotels, Parker Hannifin, Colliers International, Cargill, Tomé Engenharia, Pfizer, Abbott, Baxter, Fonterra, Nokia, Takata Petri, Eaton, Avon, entre outros.'
                        ]}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard
                        name='Claudia Maierá'
                        img={Claudia}
                        list={[
                            'Claudia Maierá é profissional e professora de Customer Experience e Customer Success certificada internacionalmente.',
                            'É palestrante e consultora de empresas de pequeno a grande porte.',
                            'Possui profunda experiência em empresas do setor automotivo, segmento de saúde e academia de esportes.',
                            'Criou o blog www.Exmocliente.com e ajudou muitas empresas a criar conexão emocional com seus clientes.'
                        ]}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard
                        name='Cleber Alan Musselli'
                        img={Cleber}
                        list={[
                            'Profissional com 15 anos de atuação em temas relacionados ao ESG no que tange a criação, implementação e coordenação de políticas, processos, programas, campanhas e Indicadores no ambiente corporativo de multinacional.',
                            'Entre os principais temas de experiência estão Programas Sociais, Ambientais, Diversidade e Inclusão, Sistemas de Gestão Ambiental, Inventário de Gases de Efeito Estufa, ODS (Objetivos do Desenvolvimento Sustentável), Pacto Global, entre outros.',
                            'Pós-graduado em Docência no Ensino Superior e em Gestão Integrada em Sistemas da Qualidade, Responsabilidade Social, Meio Ambiente, Saúde e Segurança do Trabalho.',
                        ]}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard
                        name='Cristiane Pellicano'
                        img={Cristiane}
                        list={[
                            'Graduada em Pedagogia, com Especialização em Ensino em Empresas pela FMU. Pós-graduada em Administração de RH pela FAAP. MBA em Gestão de Pessoas pelo Instituto Mauá de Tecnologia e Pós MBA em Negócios pela FIA. Certificada em Coaching pela ICC - Integral Coaching of Canada e membro da International Society of Female Professionals.',
                            'Possui 23 anos de atuação na área de Recursos Humanos em grandes organizações multinacionais, como Stryker, Johnson & Johnson, Laboratórios Abbott, Marsh Co. e Avon Cosméticos.  Sólida experiência como RH estratégico e parceiro do Negócio, atuando nos últimos 10 anos para a América Latina e apoiando executivos e líderes seniores de negócio.',
                            'É consultora de Comunicação, Educação de Adultos, Recursos Humanos e Desenvolvimento de Liderança.',
                        ]}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard
                        name='Danilo Olegário'
                        img={Danilo}
                        list={[
                            'É um especialista apaixonado em educação corporativa, área que atua há mais de vinte anos com experiências em grandes empresas como Hyundai Motors, São Martinho, Aegea Saneamento e atualmente Grupo CCR.',
                            'Possui ampla vivência no planejamento estratégico das diretrizes de treinamento e desenvolvimento, definindo e implementando as estratégias educacionais em sintonia com as necessidades da organização. Estruturação de Universidade Corporativa.',
                            'Um dos idealizadores da RHOER Educação Corporativa, uma consultoria que tem como propósito promover experiências de aprendizagem, conectando pessoas, gerando resultados para os negócios e transformando a sociedade através da educação disruptiva',
                            'Autor dos Livros: Uma questão de escolha: princípios valiosos para uma vida grandiosa - Editora Giostri; Treinamentos Comportamentais - Editora Ser Mais; Team e Leader Coaching - Editora Ser Mais; Planejamento Estratégico para a Vida - Editora Ser Mais; Educação Pós Pandemia : a revolução tecnológica e inovadora no processo de aprendizagem após o Coronavírus – Editora Almedina.',
                            'Formado em Administrador de Empresas - UNIMEP, com MBA em Gestão Estratégica de Pessoas - FGV , Pós-graduado em Gestão Estratégica EAD - SENAC e Pós-graduação em Pedagogia Empresarial e Educação Corporativa.'
                        ]}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard
                        name='Fábio Manzini'
                        img={Fabio}
                        list={[
                            'Profissional com experiência em gestão de relacionamentos de vendas e pós-vendas em clientes B2B e B2C, e sucesso no crescimento de receita, market share e margem (P&L completo).',
                            'Competente em liderança e gestão, atuando nas áreas de estratégia, marketing, vendas, comercial e pós-vendas.',
                            'Especialista em comunicação estratégica e negociação e gerenciamento de conflitos.',
                            'Forte formação acadêmica, com MBA Executivo Internacional pela FIA/USP, especialização em Gerenciamento de Vendas (FIA/USP) e em RH (FGV), e vários outros cursos realizados em renomadas instituições nacionais e internacionais.',
                            'Experiência como empreendedor. No mundo corporativo, vivência sólida nos seguimentos automotivo e ITS, eletrodomésticos (linha branca), mídia e alimentício.'
                        ]}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard
                        name='Fernanda Pimenta'
                        img={Fernanda}
                        list={[
                            'Possui Graduação em Direito pela Universidade São Francisco (1998).',
                            'Especialização em Gestão e Direito Educacional pelo Instituto Internacional de Ciências Sociais (2012). Mestrado em Educação, linha de pesquisa Políticas Públicas de Educação, na Universidade da Cidade de São Paulo (2013).',
                            'É Assessora Jurídico-Educacional de algumas Instituições, com experiência em Planejamento, Avaliação Educacional e Registro Acadêmico.',
                            'É Coordenadora e Assessora Jurídico-Educacional atuando nos processos de avaliação da educação superior e nos projetos de desenvolvimento institucional, com experiência profissional de mais de 20 anos.',
                            'É autora do Livro: Manual de Registro Acadêmico do Ensino Superior e Coautora do Capítulo: A Política de Acessibilidade nas Instituições de Ensino, no Livro: Políticas Públicas - Estudos e Casos.'
                        ]}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard
                        name='Giovana Vieira dos Santos'
                        img={Giovana}
                        list={[
                            'Giovana Vieira dos Santos é professora da Fundação Instituto de Administração, Mestre em Administração e exerce a função de Diretora de Negócios da empresa Korpex.',
                            'Responsável pelas áreas: Comercial, Televendas, Novos Negócios, Compras, Marketing, Inteligência de Mercado e Administrativo de Vendas, com staff de cerca de 70 profissionais e faturamento de R$ 9 milhões/mês.',
                            'Possui muita experiência em desenvolvimento de novos produtos; vantagem competitiva; comprar ou terceirizar; inovação, criatividade e competitividade; gestão de negócios; economia empresarial, gestão de cadeia de suprimentos; e mercados de trabalho nos cenários globais.',
                            'Giovana Santos é autora do livro “Ferramentas para obter sucesso no Comércio Eletrônico B2B”.'
                        ]}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard
                        name='João Paulo dos Santos Netto'
                        img={João}
                        list={[
                            'Graduado em Administração de Empresas – UNIFEI;',
                            'Doutor e Mestre em Administração pela USP/FEA/SP;',
                            'Aperfeiçoamento em Gestão de Recursos Humanos pela FGV/SP;',
                            'EX - Diretor Geral da Faculdade Sumaré;',
                            'EX- Diretor Nacional de Ensino Nacional SESES – Sociedade Educacional Estácio de Sá;',
                            'Foi Coordenador de Cursos no Centro Universitário Ibero-Americano, Faculdades Integradas Torricceli, São Paulo e Guarulhos; Professor de Programas em temas relacionados à Gestão de Pessoas e Estratégia de Negócios em IES como: UNIBERO, Faculdade Sumaré, SENAC, Trevisan e FMA em Jacareí;',
                            'Consultor de Gestão de negócios, com atuação nacional e internacional; Ex- Executivo de empresas como VASP, ARNO, SABESP e Intermédica Sistemas de Saúde.'
                        ]}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard
                        name='Marcelo Treff'
                        img={Marcelo}
                        list={[
                            'Doutor em Ciências Sociais pela PUC-SP e Mestre em Administração de Empresas pela Universidade Presbiteriana Mackenzie.',
                            'Atualmente é professor da Pontifícia Universidade Católica de São Paulo – PUC-SP e professor da FECAP.',
                            'Tem experiência em Comportamento Organizacional e Gestão de Pessoas, atuando com os seguintes temas: Gestão de Competências, Remuneração, Educação Corporativa e Políticas de Gestão de Pessoas. Exerce, ainda, a atividade de Consultor junto à Empresa Volens.',
                            'É autor dos seguintes livros: Gestão de pessoas: olhar estratégico com foco em competências; Manual do empreendedor de micro e pequenas empresas; Gestão de pessoas; Carreira e liderança: fronteira móveis entre o indivíduo e a organização; Temas contemporâneos de pesquisa em gestão.',
                        ]}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard
                        name='Tatiana Almendra Dutra'
                        img={Tatiana}
                        list={[
                            'Professora da FIA - Fundação Instituto de Administração,  Strong ESAGS FGV, SENAC, Belas Artes e UNIP e cursos in company. Atuação como Professora convidada da FEA/USP, Universidade Ibirapuera e FMU.',
                            'Doutora e mestre em administração de empresas, especialista em sucessão gerencial. MBA em Administração e Pós graduada em consultoria de Carreira pela FIA e em Dinâmica dos Grupos pela SBDG, Formação em Parentalidade pelo Instituto OPP, psicanalista e psicologia psicóloga em formação.',
                            'Atuação como consultora em gestão de pessoas para as principais empresas país, pela FIA e pela Growth Consultoria Desenvolvimento de Pessoas e Organizações, Dutra e Associados e Dutra e Salomão, desenhando e implantando programas de gestão estratégica de pessoas há mais de vinte anos.',
                            'Atuação com coaching, aconselhamento de carreira, orientação em processo de transição de carreira e orientação e planejamento parental.',
                        ]}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <TeamCard
                        name='Sônia Romeiro'
                        img={Sonia}
                        list={[
                            'É executiva com 27 anos na área de Recursos Humanos, com experiência em grandes corporações. Atualmente sócia da CHRO as a Service e professora convidada da Pós Graduação de gestão estratégica de pessoas no Senac, Sócia da DPC consultores e líder de Talent por 1 ano, e CHRO da Deloitte nos últimos 7 anos, antes disso trabalhou para o Banco Santander, Directv e InBev/Ambev.',
                            'Formada em Psicologia, com especialização em Recursos Humanos, em Banking pela FGV e Coaching pela FIA / USP; Mestre em Negócios e Administração de negócios pela FIA concluído em Março/2020 e seu tema de dissertação foi se Os brasileiros trazem resultados pra organizações?',
                            'Atuação como consultora em gestão de pessoas para as principais empresas país, pela FIA e pela Growth Consultoria Desenvolvimento de Pessoas e Organizações, Dutra e Associados e Dutra e Salomão, desenhando e implantando programas de gestão estratégica de pessoas há mais de vinte anos.',
                            'Alguns projetos relevantes são a criação e supervisão da Universidade corporativa da Deloitte (D. Influencers) para o desenvolvimento e ações de incentivo educacional com a parceria da Trevisan University e a criação de um campus físico dentro desta universidade, fornecendo todas as certificações regulatórias e treinamentos técnicos obrigatórios, como o CRC (Conselho Regional de Contabilidade) e CVM. (Comissão de Valores Mobiliários) e novo modelo de competências.',
                            'Projeto Cultura com metodologia Walk the Talk para 5.500 colaboradores. Metodologia de gestão de desempenho global baseada em check-ins, coaching, pesquisa de pulso, instantâneos e análises de talentos, eliminando todos os papéis e formulários. (mesmo modelo usado pela GE e Microsoft) e toda a transformação digital do RH da Deloitte.'
                        ]}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}