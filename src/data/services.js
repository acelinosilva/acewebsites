import { Globe, Rocket, Building2, Stethoscope, Search, Wrench, Smartphone, ShoppingCart } from 'lucide-react';

export const services = [
    {
        id: 'criacao-sites',
        icon: Globe,
        title: 'Criação de Sites Profissionais',
        shortDescription: 'Sites modernos, responsivos e otimizados para converter visitantes em clientes.',
        description: `Desenvolvemos sites profissionais que representam sua marca com excelência. 
    Cada projeto é único e personalizado para atender às necessidades específicas do seu negócio.
    Utilizamos as mais modernas tecnologias para garantir velocidade, segurança e uma experiência 
    excepcional para seus visitantes.`,
        benefits: [
            'Design exclusivo e personalizado',
            'Totalmente responsivo (mobile, tablet, desktop)',
            'Otimizado para velocidade de carregamento',
            'SEO integrado para ranqueamento no Google',
            'Integração com redes sociais',
            'Painel de gerenciamento fácil de usar'
        ],
        features: [
            'Até 10 páginas',
            'Formulário de contato',
            'Integração WhatsApp',
            'SSL/HTTPS incluso',
            'Hospedagem por 1 ano',
            'Suporte técnico'
        ]
    },
    {
        id: 'landing-pages',
        icon: Rocket,
        title: 'Landing Pages de Alta Conversão',
        shortDescription: 'Páginas focadas em conversão para campanhas de marketing e vendas.',
        description: `Landing pages são páginas estratégicas desenvolvidas para uma única ação: 
    converter visitantes em leads ou clientes. Criamos páginas com foco em resultados, 
    utilizando técnicas de copywriting e design persuasivo para maximizar suas conversões.`,
        benefits: [
            'Foco total em conversão',
            'Design persuasivo e profissional',
            'Copywriting estratégico',
            'Carregamento ultra-rápido',
            'Testes A/B inclusos',
            'Métricas e analytics'
        ],
        features: [
            'Página única otimizada',
            'Formulário de captura',
            'Integração com CRM',
            'Pixel do Facebook/Google',
            'Certificado SSL',
            'Relatórios de conversão'
        ]
    },
    {
        id: 'sites-institucionais',
        icon: Building2,
        title: 'Sites Institucionais',
        shortDescription: 'Presença digital profissional para empresas que buscam credibilidade.',
        description: `Sites institucionais são a vitrine digital da sua empresa. 
    Desenvolvemos plataformas que transmitem profissionalismo, credibilidade 
    e confiança para seus clientes e parceiros. Ideal para empresas que 
    desejam fortalecer sua marca no ambiente digital.`,
        benefits: [
            'Fortalecimento da marca',
            'Credibilidade profissional',
            'Apresentação de serviços',
            'Portfólio integrado',
            'Blog corporativo',
            'Área de contato completa'
        ],
        features: [
            'Páginas ilimitadas',
            'Sistema de blog',
            'Galeria de projetos',
            'Mapa de localização',
            'Formulários personalizados',
            'Integração com redes sociais'
        ]
    },
    {
        id: 'sites-clinicas',
        icon: Stethoscope,
        title: 'Sites para Clínicas e Profissionais',
        shortDescription: 'Soluções especializadas para profissionais da saúde e clínicas.',
        description: `Sites desenvolvidos especialmente para profissionais da saúde, 
    clínicas médicas, odontológicas e estéticas. Transmitimos a confiança e 
    profissionalismo que seus pacientes esperam, com funcionalidades específicas 
    para o setor de saúde.`,
        benefits: [
            'Design clean e profissional',
            'Agendamento online',
            'Apresentação de especialidades',
            'Currículo do profissional',
            'Localização e contato',
            'Conformidade com normas'
        ],
        features: [
            'Sistema de agendamento',
            'Apresentação de convênios',
            'Galeria do consultório',
            'Blog de saúde',
            'WhatsApp integrado',
            'Google Maps'
        ]
    },
    {
        id: 'otimizacao-seo',
        icon: Search,
        title: 'Otimização SEO',
        shortDescription: 'Apareça no topo do Google e atraia clientes qualificados.',
        description: `Otimização para mecanismos de busca (SEO) é essencial para 
    que seu site seja encontrado pelos seus potenciais clientes. Implementamos 
    estratégias completas de SEO on-page e off-page para posicionar sua empresa 
    nas primeiras posições do Google.`,
        benefits: [
            'Mais visibilidade orgânica',
            'Tráfego qualificado',
            'Credibilidade aumentada',
            'ROI a longo prazo',
            'Competitividade digital',
            'Autoridade no segmento'
        ],
        features: [
            'Análise de palavras-chave',
            'Otimização on-page',
            'Link building',
            'Conteúdo otimizado',
            'Relatórios mensais',
            'Google Search Console'
        ]
    },
    {
        id: 'manutencao-suporte',
        icon: Wrench,
        title: 'Manutenção e Suporte',
        shortDescription: 'Mantenha seu site sempre atualizado, seguro e funcionando perfeitamente.',
        description: `Oferecemos planos de manutenção e suporte técnico para garantir 
    que seu site esteja sempre atualizado, seguro e funcionando perfeitamente. 
    Conte com nossa equipe para resolver qualquer problema rapidamente.`,
        benefits: [
            'Site sempre atualizado',
            'Backups automáticos',
            'Segurança reforçada',
            'Suporte prioritário',
            'Monitoramento 24/7',
            'Correções rápidas'
        ],
        features: [
            'Atualizações mensais',
            'Backup semanal',
            'Monitoramento de uptime',
            'Correção de bugs',
            'Suporte via WhatsApp',
            'Relatórios de desempenho'
        ]
    },
    {
        id: 'sites-responsivos',
        icon: Smartphone,
        title: 'Sites Responsivos',
        shortDescription: 'Sites que funcionam perfeitamente em qualquer dispositivo.',
        description: `Desenvolvemos sites 100% responsivos que se adaptam perfeitamente 
    a qualquer tamanho de tela. Seus clientes terão uma experiência excepcional 
    seja no celular, tablet ou computador.`,
        benefits: [
            'Experiência mobile perfeita',
            'Maior alcance de público',
            'Melhor ranqueamento no Google',
            'Menos abandono de página',
            'Maior conversão mobile',
            'Navegação intuitiva'
        ],
        features: [
            'Design mobile-first',
            'Testes em múltiplos dispositivos',
            'Touch-friendly',
            'Imagens otimizadas',
            'Carregamento rápido',
            'Menu mobile adaptado'
        ]
    },
    {
        id: 'ecommerce',
        icon: ShoppingCart,
        title: 'E-commerce e Lojas Virtuais',
        shortDescription: 'Venda online com uma loja virtual profissional e segura.',
        description: `Desenvolva sua loja virtual e comece a vender para todo o Brasil. 
    Criamos e-commerces completos com sistemas de pagamento, gestão de estoque 
    e todas as funcionalidades necessárias para o sucesso das suas vendas online.`,
        benefits: [
            'Venda 24 horas por dia',
            'Alcance nacional',
            'Gestão simplificada',
            'Múltiplas formas de pagamento',
            'Frete automatizado',
            'Relatórios de vendas'
        ],
        features: [
            'Catálogo de produtos',
            'Carrinho de compras',
            'Gateway de pagamento',
            'Cálculo de frete',
            'Gestão de estoque',
            'Painel administrativo'
        ]
    }
];

export const getServiceById = (id) => {
    return services.find(service => service.id === id);
};
