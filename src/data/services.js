import { Globe, Rocket, Building2, Stethoscope, Search, Wrench, Smartphone, ShoppingCart } from 'lucide-react';
import criacaoSitesImg from '../assets/services/criacao-sites.jpg';
import landingPagesImg from '../assets/services/landing-pages.jpg';
import sitesInstitucionaisImg from '../assets/services/sites-institucionais.jpg';
import sitesClinicasImg from '../assets/services/sites-clinicas.jpg';
import otimizacaoSeoImg from '../assets/services/otimizacao-seo.jpg';
import manutencaoSuporteImg from '../assets/services/manutencao-suporte.jpg';
import sitesResponsivosImg from '../assets/services/sites-responsivos.jpg';
import ecommerceImg from '../assets/services/ecommerce.jpg';

export const services = [
    {
        id: 'criacao-sites',
        icon: Globe,
        image: criacaoSitesImg,
        ogImage: 'https://acewebsites.com.br/images/services/criacao-sites.jpg',
        badge: 'Mais Popular',
        title: 'Criação de Sites Profissionais',
        headline: 'Sites modernos, ultrarrápidos e estruturados para gerar negócios todos os dias.',
        shortDescription: 'Sites modernos, responsivos e otimizados para converter. Planos a partir de R$ 400.',
        heroSubtitle: 'Desenvolvemos sites exclusivos com tecnologia de ponta, design responsivo de alto impacto e otimização total para o Google. Transforme visitantes em clientes fiéis.',
        description: `Desenvolvemos sites profissionais que representam sua marca com excelência e autoridade. 
    Cada projeto é único e personalizado para atender às metas específicas do seu negócio. 
    Utilizamos as mais modernas tecnologias do mercado para garantir velocidade de carregamento, segurança com SSL 
    e uma experiência de navegação impecável que converte visitantes em clientes reais.`,
        metaTitle: 'Criação de Sites Profissionais | Sites Rápidos a partir de R$ 400',
        metaDescription: 'Criação de sites profissionais sob medida a partir de R$ 400. Design exclusivo, 100% responsivo, otimizado para o Google (SEO) e entrega ágil. Peça seu orçamento!',
        keywords: 'criação de sites profissionais, desenvolvimento de sites, criar site para empresa, site responsivo, criar site profissional preço, orçamento criação de site, desenvolvedor web brasilia, agencia criacao de sites',
        priceStarting: 'R$ 400',
        benefits: [
            'Design exclusivo e personalizado para o seu nicho',
            'Totalmente responsivo (perfeito em celular, tablet e computador)',
            'Otimizado para velocidade de carregamento ultrarrápida (PageSpeed 90+)',
            'SEO integrado para ranqueamento no topo do Google',
            'Integração direta com WhatsApp e formulários de contato',
            'Painel administrativo intuitivo para gestão facilitada',
            'Segurança reforçada com Certificado SSL HTTPS incluso',
            'Estrutura preparada para expansões e campanhas de anúncios'
        ],
        features: [
            'Até 10 páginas institucionais e de serviços',
            'Formulários inteligentes de contato com envio para e-mail e WhatsApp',
            'Botão flutuante de atendimento via WhatsApp',
            'Certificado de Segurança SSL incluso sem custo extra',
            'Configuração de Domínio e Hospedagem inclusa por 1 ano',
            'Indexação no Google Search Console e Google Analytics',
            'Layout mobile-first desenhado para experiência touch',
            'Suporte técnico dedicado pós-entrega'
        ],
        process: [
            { step: '01', title: 'Diagnóstico & Briefing', desc: 'Entendemos seu mercado, público-alvo e objetivos comerciais.' },
            { step: '02', title: 'Design & Arquitetura', desc: 'Criamos o layout exclusivo focado na identidade da sua marca e conversão.' },
            { step: '03', title: 'Desenvolvimento & SEO', desc: 'Programamos com código limpo, rápido e 100% otimizado para o Google.' },
            { step: '04', title: 'Testes & Lançamento', desc: 'Revisão minuciosa em múltiplos dispositivos e publicação oficial do seu site.' }
        ],
        faqs: [
            {
                question: 'Quanto custa para criar um site profissional?',
                answer: 'Na Aceweb, nossos projetos de criação de sites profissionais iniciam a partir de R$ 400, com condições flexíveis no Pix ou cartão de crédito.'
            },
            {
                question: 'Quanto tempo leva para o site ficar pronto?',
                answer: 'O prazo médio de entrega varia de 3 a 7 dias úteis após o recebimento de todas as informações e conteúdos do projeto.'
            },
            {
                question: 'O site funciona perfeitamente em celulares?',
                answer: 'Sim! Todos os nossos sites são construídos com metodologia Mobile-First, adaptando-se perfeitamente a smartphones, tablets e telas de computador.'
            },
            {
                question: 'Terei suporte após o site ser publicado?',
                answer: 'Com certeza. Oferecemos suporte completo pós-entrega, treinamento para você gerenciar seus dados e garantia de funcionamento contínuo.'
            }
        ],
        whatsappMessage: 'Olá! Tenho interesse na Criação de Site Profissional. Poderiam me enviar um orçamento?'
    },
    {
        id: 'landing-pages',
        icon: Rocket,
        image: landingPagesImg,
        ogImage: 'https://acewebsites.com.br/images/services/landing-pages.jpg',
        badge: 'Alta Conversão',
        title: 'Landing Pages de Alta Conversão',
        headline: 'Páginas de vendas e captação projetadas para multiplicar seus leads e vendas.',
        shortDescription: 'Páginas focadas em conversão para campanhas de marketing e vendas.',
        heroSubtitle: 'Landing pages estratégicas desenvolvidas com copywriting persuasivo, carregamento instantâneo e funil desenhado para transformar cliques em clientes prontos para comprar.',
        description: `Landing pages são páginas de destino cirurgicamente desenhadas para um objetivo único: converter visitantes em leads qualificados ou vendas diretas.
    Criamos páginas com foco obsessivo em resultados, combinando gatilhos mentais, design persuasivo, 
    tempo de carregamento inferior a 2 segundos e integração imediata com ferramentas de CRM e tráfego pago (Google Ads e Meta Ads).`,
        metaTitle: 'Criação de Landing Pages de Alta Conversão | Páginas de Vendas',
        metaDescription: 'Desenvolvimento de landing pages focadas em conversão de leads e vendas. Design persuasivo, carregamento ultrarrápido e integração com WhatsApp e CRM. Solicite!',
        keywords: 'criação de landing page, landing page alta conversão, página de vendas profissional, criar landing page preço, landing page para tráfego pago, landing page google ads, especialista em landing page',
        priceStarting: 'R$ 400',
        benefits: [
            'Foco total e exclusivo em conversão de clientes',
            'Copywriting persuasivo com gatilhos mentais validados',
            'Design contemporâneo que transmite autoridade imediata',
            'Carregamento ultra-rápido para reduzir taxa de rejeição',
            'Integração com Pixel do Facebook, Google Tag Manager e GA4',
            'Botões de chamada para ação (CTAs) estrategicamente posicionados',
            'Pronto para campanhas de Google Ads, Meta Ads e TikTok Ads',
            'Testes de usabilidade e responsividade total'
        ],
        features: [
            'Página única de rolagem estratégica',
            'Formulário inteligente de captura de leads',
            'Integração direta com WhatsApp comercial',
            'Seções de Prova Social e Depoimentos validados',
            'Garantia, FAQs e quebra antecipada de objeções',
            'Instalação de tags de rastreamento de conversão',
            'Hospedagem de alta performance e SSL HTTPS incluso',
            'Entrega expressa para campanhas com urgência'
        ],
        process: [
            { step: '01', title: 'Análise da Oferta', desc: 'Mapeamos sua proposta de valor, público-alvo e concorrentes diretos.' },
            { step: '02', title: 'Estruturação da Copy', desc: 'Escrevemos textos persuasivos focados em benefícios e soluções.' },
            { step: '03', title: 'Design de Alta Performance', desc: 'Desenhamos a interface visual com contraste e hierarquia estratégica.' },
            { step: '04', title: 'Configuração de Tags & Teste', desc: 'Instalamos pixels e testamos todos os fluxos de conversão antes da veiculação.' }
        ],
        faqs: [
            {
                question: 'Qual a diferença entre um site institucional e uma landing page?',
                answer: 'Enquanto o site institucional apresenta toda a empresa em múltiplas páginas, a landing page tem um único objetivo de conversão (vender um produto específico ou capturar um contato), sem distrações de navegação.'
            },
            {
                question: 'A landing page já vem pronta para anúncios no Google e Meta?',
                answer: 'Sim! Entregamos com todas as tags de conversão configuradas (Google Ads, Facebook Pixel, GA4) para você mensurar o retorno de cada centavo investido em mídia.'
            },
            {
                question: 'Consigo receber os leads diretamente no meu WhatsApp?',
                answer: 'Sim, integramos botões de chamada com mensagens personalizadas que direcionam o lead qualificado direto para o seu WhatsApp comercial.'
            }
        ],
        whatsappMessage: 'Olá! Gostaria de um orçamento para criação de uma Landing Page de Alta Conversão.'
    },
    {
        id: 'sites-institucionais',
        icon: Building2,
        image: sitesInstitucionaisImg,
        ogImage: 'https://acewebsites.com.br/images/services/sites-institucionais.jpg',
        badge: 'Presença Corporativa',
        title: 'Sites Institucionais para Empresas',
        headline: 'Consolide a autoridade da sua marca com uma vitrine corporativa de alto prestígio.',
        shortDescription: 'Presença digital profissional para empresas que buscam credibilidade.',
        heroSubtitle: 'Sites corporativos pensados para transmitir solidez, governança e valor para clientes B2B, investidores e parceiros comerciais de grande porte.',
        description: `O site institucional é o quartel-general digital do seu negócio. Ele constrói a primeira impressão 
    e chancela a solidez da sua marca perante parceiros, investidores e clientes exigentes. 
    Desenvolvemos plataformas corporativas completas, com arquitetura de informação clara, áreas de serviços detalhadas, 
    cases de sucesso, blog institucional e compliance de segurança.`,
        metaTitle: 'Criação de Sites Institucionais | Presença Digital Corporativa',
        metaDescription: 'Desenvolvimento de sites corporativos e institucionais com design premium, catálogo de serviços, blog e máxima segurança para sua empresa. Orçamento sem compromisso.',
        keywords: 'site institucional, criação de site corporativo, site para empresa b2b, desenvolvimento institucional, site profissional empresarial, site institucional preço',
        priceStarting: 'R$ 600',
        benefits: [
            'Fortalecimento indiscutível da imagem da sua marca',
            'Credibilidade perante clientes, fornecedores e parceiros',
            'Catálogo estruturado para apresentação de múltiplos serviços',
            'Seção de Portfólio, Clientes e Cases de Sucesso',
            'Blog corporativo para estratégia de Marketing de Conteúdo',
            'Arquitetura segura e em conformidade com as diretrizes da LGPD',
            'Integração com sistemas de CRM e atendimento empresarial',
            'Total controle e autonomia de gerenciamento de páginas'
        ],
        features: [
            'Estrutura multi-páginas personalizáveis (Sobre, Serviços, Cases, Contato)',
            'Área de notícias/blog com painel administrativo prático',
            'Galeria de projetos e certificações da empresa',
            'Página de localização interativa com mapa Google Maps',
            'Formulários departamentais com roteamento por assunto',
            'Otimização avançada de SEO para termos do seu setor econômico',
            'Backup automatizado e infraestrutura estável',
            'Treinamento operacional para a equipe da sua empresa'
        ],
        process: [
            { step: '01', title: 'Imersão Corporativa', desc: 'Estudo profundo sobre os valores, serviços e diferenciais da sua empresa.' },
            { step: '02', title: 'Prototipagem de UI/UX', desc: 'Desenho de wireframes modernos focados em elegância e usabilidade.' },
            { step: '03', title: 'Implementação Segura', desc: 'Desenvolvimento com código robusto, certificado SSL e padrões de alta performance.' },
            { step: '04', title: 'Homologação & Treinamento', desc: 'Apresentação guiada, ajustes finos e capacitação do seu time.' }
        ],
        faqs: [
            {
                question: 'Por que minha empresa precisa de um site institucional profissional?',
                answer: 'Hoje, antes de fechar qualquer contrato, clientes e tomadores de decisão pesquisam a empresa no Google. Um site institucional profissional transmite solidez imediata, seriedade e diferencial competitivo.'
            },
            {
                question: 'Podemos incluir novos serviços e conteúdos no futuro?',
                answer: 'Sim! Entregamos uma estrutura escalável com painel de fácil gerenciamento para que sua equipe adicione novas páginas, artigos e notícias quando desejar.'
            },
            {
                question: 'O site está em conformidade com a LGPD?',
                answer: 'Sim, implementamos avisos de consentimento de cookies, páginas de termos de uso e políticas de privacidade alinhadas com as normas vigentes.'
            }
        ],
        whatsappMessage: 'Olá! Preciso de um site institucional moderno para a minha empresa. Poderiam me ajudar?'
    },
    {
        id: 'sites-clinicas',
        icon: Stethoscope,
        image: sitesClinicasImg,
        ogImage: 'https://acewebsites.com.br/images/services/sites-clinicas.jpg',
        badge: 'Saúde & Estética',
        title: 'Sites para Clínicas e Profissionais da Saúde',
        headline: 'Conquiste a confiança dos pacientes e facilite o agendamento de consultas particulares.',
        shortDescription: 'Soluções especializadas para profissionais da saúde e clínicas.',
        heroSubtitle: 'Soluções digitais elegantes para médicos, dentistas, psicólogos, fisioterapeutas e clínicas de estética que valorizam discrição, humanização e tecnologia.',
        description: `O mercado da saúde exige um cuidado ímpar na comunicação visual e na experiência do usuário. 
    Desenvolvemos sites específicos para clínicas médicas, consultórios odontológicos e profissionais liberais da saúde, 
    transmitindo acolhimento, biossegurança e excelência técnica. Inclui atalhos para agendamento rápido de consultas, 
    apresentação do corpo clínico, especialidades atendidas e conformidade com as diretrizes éticas (CFM, CRO, CFP).`,
        metaTitle: 'Criação de Sites para Clínicas e Consultórios Médicos | Aceweb',
        metaDescription: 'Sites especializados para clínicas médicas, consultórios odontológicos e profissionais de saúde. Agendamento online, botão WhatsApp e SEO local para pacientes.',
        keywords: 'site para clínica, criação de site para médicos, site consultório odontológico, site para dentista, site para psicólogo, marketing médico site, agendamento online site clínica',
        priceStarting: 'R$ 500',
        benefits: [
            'Design clean, humanizado e extremamente profissional',
            'Facilidade para o paciente agendar consultas via WhatsApp ou formulário',
            'Apresentação clara de especialidades, tratamentos e convênios aceitos',
            'Currículo resumido e fotos do corpo clínico para inspirar segurança',
            'Localização privilegiada com mapa interativo e botão "Como Chegar"',
            'Otimização de SEO local para atrair pacientes da sua cidade e bairro',
            'Carregamento instantâneo em conexões de celular 4G e 5G',
            'Respeito rigoroso às resoluções dos conselhos de classe de saúde'
        ],
        features: [
            'Botão de agendamento rápido via WhatsApp com mensagem inteligente',
            'Guia de especialidades e procedimentos detalhados',
            'Galeria de fotos do consultório e infraestrutura de atendimento',
            'Seção de perguntas frequentes do paciente antes da consulta',
            'Tabela ou listagem de convênios atendidos',
            'Blog com artigos educativos para gerar autoridade médica',
            'Integração com Google Maps para rota rápida via Waze e Maps',
            'Certificado de criptografia SSL para privacidade absoluta dos dados'
        ],
        process: [
            { step: '01', title: 'Alinhamento Ético & Nicho', desc: 'Mapeamos o perfil do seu paciente, área de atuação e regulamentações do conselho.' },
            { step: '02', title: 'Layout Humanizado', desc: 'Criamos um visual acolhedor, combinando estética clean com alta usabilidade.' },
            { step: '03', title: 'Integrações de Agendamento', desc: 'Configuramos botões e canais rápidos para que o paciente agende sem fricção.' },
            { step: '04', title: 'SEO Local & Lançamento', desc: 'Otimizamos para termos como "médico em [cidade]" e liberamos o site.' }
        ],
        faqs: [
            {
                question: 'O site segue as regras éticas do Conselho Federal de Medicina (CFM) ou Odontologia (CRO)?',
                answer: 'Sim! Nossos layouts e copys são elaborados em total harmonia com os códigos de ética de cada conselho profissional, sem sensacionalismo ou promessas indevidas.'
            },
            {
                question: 'O paciente consegue agendar a consulta pelo celular?',
                answer: 'Com certeza. O site possui botões de ação rápida que abrem diretamente a conversa de agendamento no WhatsApp da sua secretária ou sistema próprio de agendamento.'
            },
            {
                question: 'O site ajuda minha clínica a aparecer no Google quando buscarem pelo meu tratamento?',
                answer: 'Sim, aplicamos SEO focado na sua especialidade e localização geográfica, ajudando sua clínica a ser encontrada por pacientes próximos que buscam ativamente pelo seu tratamento.'
            }
        ],
        whatsappMessage: 'Olá! Sou profissional da saúde e gostaria de criar um site para minha clínica/consultório.'
    },
    {
        id: 'otimizacao-seo',
        icon: Search,
        image: otimizacaoSeoImg,
        ogImage: 'https://acewebsites.com.br/images/services/otimizacao-seo.jpg',
        badge: 'Topo do Google',
        title: 'Otimização SEO e Posicionamento Google',
        headline: 'Coloque sua empresa na primeira página do Google e atraia clientes orgânicos qualificados.',
        shortDescription: 'Apareça no topo do Google e atraia clientes qualificados.',
        heroSubtitle: 'Estratégias completas de SEO on-page, técnico e semântico para posicionar seu negócio à frente da concorrência nas buscas mais valiosas da sua área.',
        description: `Estar na internet sem um SEO eficiente é como ter uma loja fantástica em um beco escuro sem placas indicativas. 
    Nossa consultoria de Otimização SEO (Search Engine Optimization) mapeia as palavras-chave que seus clientes realmente usam 
    e ajusta cada detalhe técnico da sua plataforma: velocidade de carregamento, indexação, estrutura de títulos, rich snippets (Schema.org), 
    autoridade e conteúdo estratégico, gerando tráfego qualificado contínuo sem custo por clique.`,
        metaTitle: 'Otimização SEO para Sites | Fique na 1ª Página do Google',
        metaDescription: 'Serviço completo de otimização SEO para sites. Auditoria técnica, pesquisa de palavras-chave, SEO on-page, velocidade e link building para ranquear no topo do Google.',
        keywords: 'otimização seo, consultoria seo, colocar site no google, ranquear primeira pagina google, seo on-page brasil, melhoria seo site, agencia seo brasilia',
        priceStarting: 'R$ 350',
        benefits: [
            'Visibilidade orgânica sustentável sem depender só de anúncios pagos',
            'Tráfego altamente qualificado de pessoas que já querem comprar',
            'Aumento consistente na taxa de conversão e faturamento',
            'Superioridade competitiva frente aos principais concorrentes locais',
            'Melhoria notável na velocidade e experiência técnica do usuário',
            'Retorno sobre o investimento (ROI) contínuo e cumulativo a longo prazo',
            'Autoridade e reputação de liderança no seu nicho de atuação',
            'Relatórios transparentes de posicionamento e crescimento de cliques'
        ],
        features: [
            'Auditoria técnica detalhada de saúde e indexabilidade do site',
            'Pesquisa e seleção estratégica de palavras-chave de alta intenção comercial',
            'Otimização on-page (Meta-tags, headings H1-H3, URLs amigáveis, alt text)',
            'Configuração de Schema.org com Rich Snippets e dados estruturados',
            'Otimização de Core Web Vitals (velocidade, LCP, CLS, FID)',
            'Geração e envio de sitemap.xml e robots.txt otimizados',
            'Integração e configuração do Google Search Console e Google Analytics 4',
            'Plano de ação para SEO local com Google Meu Negócio'
        ],
        process: [
            { step: '01', title: 'Auditoria & Diagnóstico', desc: 'Identificamos erros de rastreamento, gargalos de velocidade e oportunidades não exploradas.' },
            { step: '02', title: 'Mapeamento de Keywords', desc: 'Identificamos os termos exatos que seus potenciais clientes pesquisam com intenção de compra.' },
            { step: '03', title: 'Otimização On-Page & Técnica', desc: 'Refatoramos tags, schemas, imagens e estrutura de código do site.' },
            { step: '04', title: 'Monitoramento & Expansão', desc: 'Acompanhamos a evolução no Google Search Console e aplicamos melhorias contínuas.' }
        ],
        faqs: [
            {
                question: 'Quanto tempo leva para os resultados de SEO aparecerem?',
                answer: 'As melhorias técnicas e de indexação ocorrem já nas primeiras semanas. A evolução sólida de posições orgânicas costuma consolidar-se entre 30 a 90 dias, dependendo da concorrência das palavras-chave.'
            },
            {
                question: 'Por que investir em SEO se eu já faço anúncios pagos?',
                answer: 'O SEO e os anúncios se complementam perfeitamente. O tráfego orgânico não custa nada por clique, traz visitantes com maior confiança na marca e continua gerando contatos mesmo quando você pausa suas campanhas pagas.'
            },
            {
                question: 'Vocês garantem a posição número 1 do Google?',
                answer: 'Nenhuma agência séria pode garantir a posição número 1 absoluta, pois o algoritmo do Google muda dinamicamente. Garantimos a aplicação rigorosa das melhores práticas oficiais recomendadas pelo Google, que maximizam suas chances reais de liderança.'
            }
        ],
        whatsappMessage: 'Olá! Quero melhorar o ranqueamento do meu site no Google com Otimização SEO. Como funciona?'
    },
    {
        id: 'manutencao-suporte',
        icon: Wrench,
        image: manutencaoSuporteImg,
        ogImage: 'https://acewebsites.com.br/images/services/manutencao-suporte.jpg',
        badge: 'Proteção Total',
        title: 'Manutenção, Suporte e Segurança Web',
        headline: 'Mantenha sua plataforma sempre atualizada, veloz e blindada contra invasões.',
        shortDescription: 'Mantenha seu site sempre atualizado, seguro e funcionando perfeitamente.',
        heroSubtitle: 'Cuidados proativos para seu site nunca ficar fora do ar: backups periódicos, monitoramento de uptime, atualizações preventivas e suporte ágil via WhatsApp.',
        description: `Seu site é um ativo comercial valioso que não pode falhar no momento em que seu cliente decide comprar. 
    Oferecemos planos de suporte contínuo e manutenção preventiva que protegem sua presença digital 24 horas por dia. 
    Nossa equipe cuida de atualizações de segurança, backups automáticos na nuvem, resolução rápida de erros, 
    otimização de banco de dados e pequenas alterações de conteúdo sempre que você precisar.`,
        metaTitle: 'Manutenção e Suporte de Sites | Segurança e Atualização Web',
        metaDescription: 'Planos de manutenção e suporte técnico para sites. Backups automáticos, monitoramento de uptime 24/7, atualizações de segurança e suporte via WhatsApp.',
        keywords: 'manutenção de sites, suporte técnico site, segurança para wordpress, suporte website empresarial, backup de sites, correção de bugs site, monitoramento de site',
        priceStarting: 'R$ 150/mês',
        benefits: [
            'Seu site sempre rápido, funcional e 100% no ar',
            'Tranquilidade absoluta para focar nas vendas e no seu negócio',
            'Backups periódicos externos para recuperação imediata em caso de falhas',
            'Proteção ativa contra ataques de força bruta, malware e spams',
            'Atendimento ágil com desenvolvedores experientes via WhatsApp',
            'Atualização segura de plugins, temas e bibliotecas sem quebras',
            'Monitoramento automático de disponibilidade 24 horas por dia',
            'Pequenos ajustes de textos, imagens e dados inclusos no plano'
        ],
        features: [
            'Monitoramento de disponibilidade de servidor em tempo real (Uptime)',
            'Rotina automatizada de backups semanais/mensais em nuvem',
            'Verificação e remoção proativa de códigos maliciosos e vulnerabilidades',
            'Renovação e gerenciamento de Certificados SSL HTTPS',
            'Correção imediata de bugs e erros de layout',
            'Suporte direto via canal prioritário no WhatsApp',
            'Otimização periódica de banco de dados e cache de carregamento',
            'Relatório periódico com indicadores de desempenho e segurança'
        ],
        process: [
            { step: '01', title: 'Auditoria de Segurança', desc: 'Análise de versões instaladas, arquivos suspeitos e configuração de firewall.' },
            { step: '02', title: 'Backup de Segurança', desc: 'Criação de imagem completa de restauração da sua aplicação em nuvem segura.' },
            { step: '03', title: 'Atualizações & Ajustes', desc: 'Aplicação cuidadosa de patches de segurança e otimização de velocidade.' },
            { step: '04', title: 'Monitoramento Contínuo', desc: 'Vigilância contínua com alertas imediatos para nossa equipe de plantão.' }
        ],
        faqs: [
            {
                question: 'O que acontece se meu site for atacado ou cair?',
                answer: 'Nosso monitoramento detecta a instabilidade instantaneamente e nossa equipe atua prontamente na recuperação com backups íntegros e neutralização de ameaças.'
            },
            {
                question: 'Posso pedir alterações de banners, telefones ou textos do site?',
                answer: 'Sim! Nossos planos de suporte incluem horas mensais para ajustes simples de conteúdo, atualização de preços, telefones, novos membros da equipe e banners promocionais.'
            },
            {
                question: 'Vocês dão suporte para sites que não foram criados pela Aceweb?',
                answer: 'Sim, realizamos uma análise prévia do seu site atual para verificar a plataforma utilizada e propomos o plano de manutenção ideal.'
            }
        ],
        whatsappMessage: 'Olá! Gostaria de contratar o serviço de Manutenção e Suporte para o meu site.'
    },
    {
        id: 'sites-responsivos',
        icon: Smartphone,
        image: sitesResponsivosImg,
        ogImage: 'https://acewebsites.com.br/images/services/sites-responsivos.jpg',
        badge: '100% Adaptável',
        title: 'Sites Responsivos Mobile-First',
        headline: 'Experiência impecável em smartphones, tablets, notebooks e grandes monitores.',
        shortDescription: 'Sites que funcionam perfeitamente em qualquer dispositivo.',
        heroSubtitle: 'Mais de 80% dos acessos à internet acontecem pelo celular. Garantimos que sua empresa impressione com layouts fluidos, botões ergonômicos e carregamento instantâneo em qualquer tela.',
        description: `Um site não responsivo afasta clientes e é punido severamente pelos mecanismos de busca. 
    Desenvolvemos interfaces fluidas com arquitetura Mobile-First, assegurando que tipografia, imagens, botões de ação e menus 
    se ajustem intuitivamente a telas verticais e horizontais de qualquer dimensão. 
    O resultado é uma experiência de navegação agradável que mantém o visitante engajado e eleva drasticamente a taxa de conversão.`,
        metaTitle: 'Criação de Sites Responsivos | Otimizados para Celular e Tablet',
        metaDescription: 'Sites 100% responsivos adaptados com perfeição para celulares, tablets e computadores. Carregamento veloz, interface touch amigável e melhor ranqueamento no Google.',
        keywords: 'site responsivo, site adaptavel celular, mobile first website, criar site mobile, desenvolvedor site responsivo, site para smartphones',
        priceStarting: 'R$ 400',
        benefits: [
            'Experiência de uso perfeita em mais de 900 modelos de aparelhos',
            'Maior retenção do visitante e menor taxa de desistência móvel',
            'Favorecimento direto no algoritmo de indexação Mobile-First do Google',
            'Botões touch-friendly ergonômicos e de fácil clique com o polegar',
            'Imagens redimensionadas dinamicamente com consumo mínimo de dados móveis',
            'Navegação rápida e intuitiva através de menus inteligentes',
            'Aumento imediato nas ligações e chamadas pelo WhatsApp via celular',
            'Visual moderno e harmônico que valoriza sua marca'
        ],
        features: [
            'Design Mobile-First planejado prioritariamente para smartphones',
            'Breakpoints responsivos para mobile, tablet, laptop e desktop ultrawide',
            'Imagens compactadas em formatos modernos de alta compressão (WebP/AVIF)',
            'Tipografia escalável com legibilidade impecável sem necessidade de zoom',
            'Menu hambúrguer com transição suave e navegação ergonômica',
            'Testes em dispositivos reais iOS (iPhone, iPad) e Android',
            'Formulários adaptados com teclados numéricos e de e-mail automáticos',
            'Velocidade validada no Google Mobile-Friendly Test'
        ],
        process: [
            { step: '01', title: 'Grid & Arquitetura Fluida', desc: 'Definição de grades flexíveis e quebras de linha ideais para cada tamanho de tela.' },
            { step: '02', title: 'Design com Foco Touch', desc: 'Espaçamentos generosos pensados para o clique dos dedos sem toques acidentais.' },
            { step: '03', title: 'Otimização de Mídias', desc: 'Servir imagens sob medida de acordo com a resolução de tela do visitante.' },
            { step: '04', title: 'Bateria de Testes Cross-Device', desc: 'Verificação em mais de 10 resoluções diferentes para garantir perfeição.' }
        ],
        faqs: [
            {
                question: 'O que significa um site Mobile-First?',
                answer: 'Significa que o site é projetado e programado primeiro para a experiência no celular (onde está a maioria dos usuários) e depois expandido para computadores maiores, garantindo máxima velocidade e usabilidade no smartphone.'
            },
            {
                question: 'Meu site antigo é difícil de ler no celular. Tem conserto?',
                answer: 'Sim! Podemos reestruturar o design e o código do seu site atual para torná-lo 100% responsivo e moderno, recuperando os clientes que você perde hoje.'
            },
            {
                question: 'O Google prioriza sites que funcionam bem em celulares?',
                answer: 'Sim, o Google utiliza o critério Mobile-First Indexing: ele avalia a versão mobile do seu site para determinar seu posicionamento nos resultados de busca.'
            }
        ],
        whatsappMessage: 'Olá! Gostaria de um orçamento para criação ou adaptação de um Site 100% Responsivo.'
    },
    {
        id: 'ecommerce',
        icon: ShoppingCart,
        image: ecommerceImg,
        ogImage: 'https://acewebsites.com.br/images/services/ecommerce.jpg',
        badge: 'Vendas 24 Horas',
        title: 'E-commerce e Lojas Virtuais',
        headline: 'Venda seus produtos 24 horas por dia para o Brasil inteiro com segurança total.',
        shortDescription: 'Venda online com uma loja virtual profissional e segura.',
        heroSubtitle: 'Desenvolvimento de lojas virtuais completas com cálculo de frete automático, checkout transparente, integração Pix e cartão de crédito para faturar sem limites.',
        description: `O comércio eletrônico é uma das formas mais eficientes de escalar sua receita e romper barreiras geográficas. 
    Desenvolvemos lojas virtuais de alto impacto que aliam design atraente com facilidade de compra e segurança bancária. 
    Sua loja contará com catálogo ilimitado de produtos, gestão simples de pedidos e estoques, cupons de desconto, 
    cálculo instantâneo de frete com Correios e transportadoras, além de meios de pagamento automatizados via Pix e cartão.`,
        metaTitle: 'Criação de Loja Virtual e E-commerce | Venda Online no Brasil',
        metaDescription: 'Criação de lojas virtuais completas e profissionais. Carrinho, Pix, cartão de crédito, frete Correios/transportadoras e controle de estoque. Comece a vender online!',
        keywords: 'criação de loja virtual, criar ecommerce, desenvolvimento de ecommerce, loja virtual preço, criar loja online com pix, plataforma ecommerce profissional',
        priceStarting: 'R$ 800',
        benefits: [
            'Sua loja aberta e vendendo 24 horas por dia, 7 dias por semana',
            'Alcance clientes de todas as cidades e estados do Brasil',
            'Recebimento rápido via Pix automático com confirmação imediata',
            'Parcelamento no cartão de crédito com as menores taxas do mercado',
            'Cálculo automatizado de frete (Correios, Melhor Envio, Jadlog)',
            'Painel administrativo descomplicado para você cadastrar produtos',
            'Recuperação de carrinhos abandonados para resgatar vendas perdidas',
            'Integração com catálogo do Instagram Shopping e Google Shopping'
        ],
        features: [
            'Catálogo com fotos em alta definição, variações de cor e tamanho',
            'Carrinho de compras dinâmico com checkout transparente (sem redirecionamentos)',
            'Gateways de pagamento seguros (Mercado Pago, PagBank, Asaas, etc.)',
            'Módulo de frete com cálculo de CEP em tempo real',
            'Controle automatizado de níveis de estoque e alertas de reposição',
            'Sistema de cupons promocionais e promoções por tempo limitado',
            'Certificado de criptografia SSL para transações financeiras 100% protegidas',
            'Treinamento prático para você e sua equipe operarem a loja'
        ],
        process: [
            { step: '01', title: 'Estruturação do Catálogo', desc: 'Organização de categorias, atributos de produtos e regras comerciais.' },
            { step: '02', title: 'Design & Experiência de Compra', desc: 'Criação de layout atrativo com foco na facilidade de adicionar ao carrinho e pagar.' },
            { step: '03', title: 'Configuração de Meios de Pagamento & Frete', desc: 'Homologação de chaves Pix, cartões e transportadoras integradas.' },
            { step: '04', title: 'Testes de Compra Real & Lançamento', desc: 'Realizamos pedidos de teste para garantir que o fluxo de checkout opere perfeitamente.' }
        ],
        faqs: [
            {
                question: 'Como recebo o dinheiro das vendas realizadas na loja?',
                answer: 'Os pagamentos são processados diretamente na sua conta da intermediadora financeira escolhida (ex: Mercado Pago, PagBank) e você pode transferir o saldo para sua conta bancária a qualquer momento.'
            },
            {
                question: 'É fácil cadastrar novos produtos e alterar preços?',
                answer: 'Muito simples! A loja possui um painel administrativo em português onde você cadastra fotos, descrições, preços e variações em poucos cliques, sem precisar saber programação.'
            },
            {
                question: 'A loja calcula o frete dos Correios automaticamente?',
                answer: 'Sim, o cliente digita o CEP de entrega e o sistema calcula automaticamente o valor e prazo de entrega via Correios ou transportadoras parceiras.'
            }
        ],
        whatsappMessage: 'Olá! Tenho interesse em criar uma Loja Virtual / E-commerce para o meu negócio.'
    }
];

export const getServiceById = (id) => {
    return services.find(service => service.id === id);
};
