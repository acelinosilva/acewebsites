
import {
    ShoppingCart,
    Layout,
    Building2,
    Smartphone,
    Gavel,
    PartyPopper,
    Monitor,
    HeartPulse,
    GraduationCap,
    Waves,
    Shield,
    Bug,
    Megaphone,
    Brain,
    Store,
    Key,
    Smile,
    Radio,
    Hammer,
    TrendingUp,
    Anchor,
    ShoppingBag,
    Trophy,
    Briefcase,
    Umbrella
} from 'lucide-react';

import unityItImg from '../assets/portfolio/unity-it.jpg';
import ligieImg from '../assets/portfolio/ligie-odonto.jpg';
import portalJuridicoImg from '../assets/portfolio/portal-juridico.jpg';
import alineResendeImg from '../assets/portfolio/aline-resende.jpg';
import lagoNorteImg from '../assets/portfolio/lago-norte.jpg';

import lwaImg from '../assets/portfolio/lwa-neurologia.png';
import alineResendeLpImg from '../assets/portfolio/aline-resende-lp.png';
import pratikaPiscinasImg from '../assets/portfolio/pratika-piscinas.png';
import sistenorioImg from '../assets/portfolio/sistenorio-pools.png';
import academiaLetrasImg from '../assets/portfolio/academia-letras.png';

import odontosilImg from '../assets/portfolio/odontosil.png';
import alineImplantesImg from '../assets/portfolio/aline-implantes.png';
import trust7itImg from '../assets/portfolio/trust7it.png';
import profCarolImg from '../assets/portfolio/prof-carol.png';
import dedetizaImg from '../assets/portfolio/dedetiza-brasilia.png';

import gabrielMatoGrossoImg from '../assets/portfolio/gabriel-mato-grosso.png';
import alineAlanPsiImg from '../assets/portfolio/aline-alan-psi.png';
import dedetizadoraUniversalImg from '../assets/portfolio/dedetizadora-universal.png';
import idamirBandeiraImg from '../assets/portfolio/idamir-bandeira.png';
import feiraGuaraImg from '../assets/portfolio/feira-guara.png';

import fapesOdontoImg from '../assets/portfolio/fapes-odonto.png';
import teletronicImg from '../assets/portfolio/teletronic.png';
import preventOdontoImg from '../assets/portfolio/prevent-odonto.png';
import maxTelhasImg from '../assets/portfolio/max-telhas.png';
import almoAssessoriaImg from '../assets/portfolio/almo-assessoria.png';

import setemaresImg from '../assets/portfolio/setemares.png';
import mouraImg from '../assets/portfolio/moura-embalagens.png';
import centroHipicoImg from '../assets/portfolio/centro-hipico.png';
import b2bServicosImg from '../assets/portfolio/b2b-servicos.png';
import hmSegurosImg from '../assets/portfolio/hm-seguros.png';


export const projects = [
    {
        id: 1,
        title: 'Unity IT - Tecnologia',
        category: 'Institucional',
        image: unityItImg,
        description: 'Site corporativo para empresa de tecnologia focada em segurança da informação, controle patrimonial e desenvolvimento de software.',
        tags: ['Tecnologia', 'Segurança', 'Software', 'Corporativo'],
        link: '#',
        icon: Monitor,
        featured: true
    },
    {
        id: 2,
        title: 'Ligiê - Saúde Integrada',
        category: 'Institucional',
        image: ligieImg,
        description: 'Portal completo para clínica de saúde, acupuntura e odontologia. Apresenta tratamentos, equipe e facilita o agendamento de consultas.',
        tags: ['Saúde', 'Odontologia', 'Acupuntura', 'Bem-estar'],
        link: '#',
        icon: HeartPulse,
        featured: true
    },
    {
        id: 3,
        title: 'LWA Neurologia Pediátrica',
        category: 'Saúde',
        image: lwaImg,
        description: 'Landing page acolhedora e informativa para clínica de neuropediatria. Design focado em transmitir confiança e carinho para os pais.',
        tags: ['Saúde', 'Pediatria', 'Neurologia', 'Acolhimento'],
        link: '#',
        icon: HeartPulse,
        featured: true
    },
    {
        id: 4,
        title: 'Clínica Aline Resende (LP)',
        category: 'Landing Page',
        image: alineResendeLpImg,
        description: 'Landing Page de alta conversão focada em captação de pacientes para tratamentos odontológicos estéticos.',
        tags: ['Odontologia', 'Landing Page', 'Conversão', 'Estética'],
        link: '#',
        icon: Smartphone,
        featured: false
    },
    {
        id: 5,
        title: 'Portal Jurídico',
        category: 'Portal',
        image: portalJuridicoImg,
        description: 'Plataforma de conteúdo jurídico voltada para estudantes de direito, com artigos, colunas e notícias atualizadas.',
        tags: ['Direito', 'Blog', 'Conteúdo', 'Portal'],
        link: '#',
        icon: Gavel,
        featured: false
    },
    {
        id: 6,
        title: 'Clínica Aline Resende',
        category: 'Institucional',
        image: alineResendeImg,
        description: 'Site institucional elegante para clínica de odontologia e harmonização facial, com foco na apresentação de tratamentos e resultados.',
        tags: ['Odontologia', 'Harmonização', 'Estética', 'Saúde'],
        link: '#',
        icon: HeartPulse,
        featured: true
    },
    {
        id: 7,
        title: 'Pratika Piscinas',
        category: 'Institucional',
        image: pratikaPiscinasImg,
        description: 'Site moderno para empresa especializada em manutenção e instalação de piscinas, destacando serviços e qualidade.',
        tags: ['Serviços', 'Piscinas', 'Manutenção', 'Institucional'],
        link: '#',
        icon: Waves,
        featured: false
    },
    {
        id: 8,
        title: 'Sistenório / Crystal Clear',
        category: 'Internacional',
        image: sistenorioImg,
        description: 'Site internacional para empresa de limpeza de piscinas na Flórida (EUA). Design focado no mercado americano.',
        tags: ['Internacional', 'Pool Service', 'Business', 'EUA'],
        link: '#',
        icon: Waves,
        featured: true
    },
    {
        id: 9,
        title: 'Academia Rondonopolitana de Letras',
        category: 'Institucional',
        image: academiaLetrasImg,
        description: 'Portal institucional para academia de letras, com acervo histórico, notícias e perfil dos acadêmicos.',
        tags: ['Cultura', 'História', 'Literatura', 'Institucional'],
        link: '#',
        icon: GraduationCap,
        featured: false
    },
    {
        id: 10,
        title: 'Lago Norte Eventos',
        category: 'Landing Page',
        image: lagoNorteImg,
        description: 'Landing Page de alta conversão para aluguel de tendas e mobiliário para eventos. Foco em solicitação de orçamentos.',
        tags: ['Eventos', 'Aluguel', 'Variedade', 'Conversão'],
        link: '#',
        icon: PartyPopper,
        featured: false
    },
    {
        id: 11,
        title: 'OdontoSil Cidade Líder',
        category: 'Saúde',
        image: odontosilImg,
        description: 'Site para clínica odontológica com foco em atendimento humanizado e apresentação das especialidades.',
        tags: ['Odontologia', 'Saúde', 'Clinica Geral', 'Local'],
        link: '#',
        icon: HeartPulse,
        featured: false
    },
    {
        id: 12,
        title: 'Implantes Casa Verde',
        category: 'Landing Page',
        image: alineImplantesImg,
        description: 'Landing Page específica para campanha de implantes dentários. Focada em conversão e agendamento via WhatsApp.',
        tags: ['Implantes', 'Landing Page', 'Campanha', 'Odontologia'],
        link: '#',
        icon: Smartphone,
        featured: false
    },
    {
        id: 13,
        title: 'Trust 7 IT',
        category: 'Institucional',
        image: trust7itImg,
        description: 'Site moderno com tema dark para empresa de cibersegurança e proteção de dados. Design tecnológico e impactante.',
        tags: ['Security', 'Tech', 'Cybersecurity', 'Dados'],
        link: '#',
        icon: Shield,
        featured: true
    },
    {
        id: 14,
        title: 'Prof. Carol Camilo',
        category: 'Institucional',
        image: profCarolImg,
        description: 'Site pessoal e profissional para consultoria acadêmica. Design limpo e focado na autoridade da profissional.',
        tags: ['Educação', 'Consultoria', 'Acadêmico', 'Personal Branding'],
        link: '#',
        icon: GraduationCap,
        featured: false
    },
    {
        id: 15,
        title: 'Dedetiza Brasília',
        category: 'Landing Page',
        image: dedetizaImg,
        description: 'Landing Page de serviços com foco em urgência e conversão.  Ideal para prestadores de serviços locais.',
        tags: ['Serviços', 'Dedetização', 'Landing Page', 'Local'],
        link: '#',
        icon: Bug,
        featured: false
    },
    {
        id: 16,
        title: 'Gabriel Mato Grosso',
        category: 'Institucional',
        image: gabrielMatoGrossoImg,
        description: 'Site pessoal para figura pública/política, apresentando biografia, projetos e agenda. Design sóbrio e direto.',
        tags: ['Política', 'Pessoal', 'Projetos', 'Mato Grosso'],
        link: '#',
        icon: Megaphone,
        featured: false
    },
    {
        id: 17,
        title: 'Psicóloga Aline Álan',
        category: 'Saúde',
        image: alineAlanPsiImg,
        description: 'Site profissional para psicóloga, transmitindo acolhimento e profissionalismo. Foco em agendamento de consultas.',
        tags: ['Psicologia', 'Saúde Mental', 'Bem-estar', 'Consultório'],
        link: '#',
        icon: Brain,
        featured: true
    },
    {
        id: 18,
        title: 'Dedetizadora Universal',
        category: 'Landing Page',
        image: dedetizadoraUniversalImg,
        description: 'Landing page focada em serviços de dedetização e controle de pragas, com formulário de orçamento em destaque.',
        tags: ['Dedetização', 'Serviços', 'Orçamento', 'Landing Page'],
        link: '#',
        icon: Bug,
        featured: false
    },
    {
        id: 19,
        title: 'Idamir Bandeira Imóveis',
        category: 'Institucional',
        image: idamirBandeiraImg,
        description: 'Site para corretor de imóveis ou imobiliária, exibindo catálogo de propriedades e facilitando o contato.',
        tags: ['Imóveis', 'Corretor', 'Vendas', 'Real Estate'],
        link: '#',
        icon: Key,
        featured: true
    },
    {
        id: 20,
        title: 'Feira do Guará',
        category: 'Portal',
        image: feiraGuaraImg,
        description: 'Portal informativo e diretório de lojas da Feira do Guará. Facilita a localização de produtos e serviços no local.',
        tags: ['Guará', 'Feira', 'Portal', 'Diretório'],
        link: '#',
        icon: Store,
        featured: false
    },
    {
        id: 21,
        title: 'Fapes Odontologia',
        category: 'Saúde',
        image: fapesOdontoImg,
        description: 'Site focado em Harmonização e Rejuvenescimento Facial. Design clean transmitindo confiança e bem-estar.',
        tags: ['Odontologia', 'Harmonização', 'Estética', 'Saúde'],
        link: '#',
        icon: Smile,
        featured: true
    },
    {
        id: 22,
        title: 'Teletronic Soluções',
        category: 'Institucional',
        image: teletronicImg,
        description: 'Site empresarial para Integradora de Soluções e RFID. Foco em apresentação de produtos de tecnologia e segurança.',
        tags: ['Tecnologia', 'RFID', 'Segurança', 'B2B'],
        link: '#',
        icon: Radio,
        featured: false
    },
    {
        id: 23,
        title: 'Prevent Odontologia',
        category: 'Saúde',
        image: preventOdontoImg,
        description: 'Site moderno para clínica de odontologia especializada, com foco em implantes e estética dental.',
        tags: ['Odontologia', 'Implantes', 'Saúde', 'Clinica'],
        link: '#',
        icon: HeartPulse,
        featured: false
    },
    {
        id: 24,
        title: 'Max Telhas e Coberturas',
        category: 'Institucional',
        image: maxTelhasImg,
        description: 'Site para empresa de telhados e coberturas. Galeria de obras e facilidade de contato para orçamentos.',
        tags: ['Construção', 'Serviços', 'Obras', 'Reforma'],
        link: '#',
        icon: Hammer,
        featured: false
    },
    {
        id: 25,
        title: 'Almo Assessoria',
        category: 'Institucional',
        image: almoAssessoriaImg,
        description: 'Landing page para assessoria de marketing digital focada em dentistas. Uso de vídeo e copy persuasiva.',
        tags: ['Marketing', 'Consultoria', 'Digital', 'Vendas'],
        link: '#',
        icon: TrendingUp,
        featured: true
    },
    {
        id: 26,
        title: 'Setemares Boats',
        category: 'Institucional',
        image: setemaresImg,
        description: 'Site para empresa especializada em reparos e upgrade de embarcações. Design náutico inspirador.',
        tags: ['Náutico', 'Manutenção', 'Embarcações', 'Serviços'],
        link: '#',
        icon: Anchor,
        featured: false
    },
    {
        id: 27,
        title: 'Moura Embalagens',
        category: 'Institucional',
        image: mouraImg,
        description: 'Catálogo digital para empresa de sacos para lixo e embalagens plásticas. Foco em B2B e varejo.',
        tags: ['Indústria', 'Varejo', 'Embalagens', 'Produtos'],
        link: '#',
        icon: ShoppingBag,
        featured: true
    },
    {
        id: 28,
        title: 'Centro Hípico do Parque',
        category: 'Institucional',
        image: centroHipicoImg,
        description: 'Site convidativo para escola de equitação. Apresenta cursos, equipe e eventos de forma elegante.',
        tags: ['Esportes', 'Equitação', 'Lazer', 'Cursos'],
        link: '#',
        icon: Trophy,
        featured: false
    },
    {
        id: 29,
        title: 'B2B Serviços',
        category: 'Institucional',
        image: b2bServicosImg,
        description: 'Site corporativo para terceirização de mão de obra e serviços. Transmite seriedade e capacidade técnica.',
        tags: ['Serviços', 'Terceirização', 'Facility', 'Corporativo'],
        link: '#',
        icon: Briefcase,
        featured: false
    },
    {
        id: 30,
        title: 'HM SEG Corretora',
        category: 'Institucional',
        image: hmSegurosImg,
        description: 'Site para corretora de seguros e planos de saúde. Facilitador de cotações com design familiar e seguro.',
        tags: ['Seguros', 'Saúde', 'Planos', 'Proteção'],
        link: '#',
        icon: Umbrella,
        featured: true
    }
];

export const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'Institucional', label: 'Institucional' },
    { id: 'Saúde', label: 'Saúde' },
    { id: 'Landing Page', label: 'Landing Pages' },
    { id: 'Portal', label: 'Portais' },
    { id: 'Internacional', label: 'Internacional' }
];
