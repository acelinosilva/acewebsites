import fs from 'fs';
import path from 'path';

const servicesSeoData = [
  {
    id: 'criacao-sites',
    title: 'Criação de Sites Profissionais e Responsivos | Aceweb',
    description: 'Criação de sites profissionais sob medida a partir de R$ 400. Design exclusivo, 100% responsivo, alta velocidade e SEO integrado para sua empresa.',
    keywords: 'criação de sites profissionais, desenvolvimento de sites, criar site para empresa, empresa de criação de sites, site profissional preço, orçamento criação de site, desenvolvedor web brasilia',
    image: 'https://acewebsites.com.br/images/services/criacao-sites.jpg'
  },
  {
    id: 'landing-pages',
    title: 'Criação de Landing Pages de Alta Conversão | Páginas de Vendas | Aceweb',
    description: 'Desenvolvimento de landing pages focadas em conversão e geração de leads. Copywriting persuasivo, carregamento ultrarrápido e integração com WhatsApp e anúncios.',
    keywords: 'criação de landing page, landing page alta conversão, página de vendas profissional, criar landing page preço, landing page para tráfego pago, landing page google ads, especialista em landing page',
    image: 'https://acewebsites.com.br/images/services/landing-pages.jpg'
  },
  {
    id: 'sites-institucionais',
    title: 'Criação de Sites Institucionais para Empresas | Aceweb',
    description: 'Sites corporativos e institucionais com design premium, catálogo de serviços e credibilidade empresarial. Fortaleça a imagem da sua marca no mercado.',
    keywords: 'site institucional, criação de site corporativo, site para empresa b2b, desenvolvimento institucional, site profissional empresarial, site institucional preço',
    image: 'https://acewebsites.com.br/images/services/sites-institucionais.jpg'
  },
  {
    id: 'sites-clinicas',
    title: 'Criação de Sites para Clínicas, Médicos e Consultórios | Aceweb',
    description: 'Sites especializados para clínicas médicas, consultórios odontológicos e profissionais da saúde. Agendamento online, conformidade ética e SEO local.',
    keywords: 'site para clínica, criação de site para médicos, site consultório odontológico, site para dentista, site para psicólogo, marketing médico site, agendamento online site clínica',
    image: 'https://acewebsites.com.br/images/services/sites-clinicas.jpg'
  },
  {
    id: 'otimizacao-seo',
    title: 'Otimização SEO para Sites | Fique na Primeira Página do Google | Aceweb',
    description: 'Serviço completo de otimização SEO para sites. Auditoria técnica, pesquisa de palavras-chave, SEO on-page, velocidade e Core Web Vitals para o topo do Google.',
    keywords: 'otimização seo, consultoria seo, colocar site no google, ranquear primeira pagina google, seo on-page brasil, melhoria seo site, agencia seo brasilia',
    image: 'https://acewebsites.com.br/images/services/otimizacao-seo.jpg'
  },
  {
    id: 'manutencao-suporte',
    title: 'Manutenção, Suporte e Segurança para Sites | Aceweb',
    description: 'Planos de manutenção preventiva e suporte técnico para sites. Backups periódicos, segurança blindada, monitoramento de uptime 24/7 e suporte via WhatsApp.',
    keywords: 'manutenção de sites, suporte técnico site, segurança para wordpress, suporte website empresarial, backup de sites, correção de bugs site, monitoramento de site',
    image: 'https://acewebsites.com.br/images/services/manutencao-suporte.jpg'
  },
  {
    id: 'sites-responsivos',
    title: 'Criação de Sites Responsivos Mobile-First | Aceweb',
    description: 'Sites 100% responsivos projetados para celular, tablet e computador. Navegação fluida, botões ergonômicos e excelente experiência para seus clientes.',
    keywords: 'site responsivo, site adaptavel celular, mobile first website, criar site mobile, desenvolvedor site responsivo, site para smartphones',
    image: 'https://acewebsites.com.br/images/services/sites-responsivos.jpg'
  },
  {
    id: 'ecommerce',
    title: 'Criação de Loja Virtual e E-commerce Completo | Aceweb',
    description: 'Crie sua loja virtual com checkout transparente, Pix automático, cálculo de frete Correios e controle de estoque. Venda online para todo o Brasil.',
    keywords: 'criação de loja virtual, criar ecommerce, desenvolvimento de ecommerce, loja virtual preço, criar loja online com pix, plataforma ecommerce profissional',
    image: 'https://acewebsites.com.br/images/services/ecommerce.jpg'
  }
];

function prerenderServicePages() {
  const distPath = path.join(process.cwd(), 'dist');
  const templatePath = path.join(distPath, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.log('[prerender-seo] dist/index.html não encontrado. Execute após o build.');
    return;
  }

  const template = fs.readFileSync(templatePath, 'utf-8');

  servicesSeoData.forEach(service => {
    const canonicalUrl = `https://acewebsites.com.br/servicos/${service.id}`;
    
    let html = template;

    // Replace title
    html = html.replace(/<title[^>]*>.*?<\/title>/i, `<title data-rh="true">${service.title}</title>`);

    // Replace or insert meta description
    if (html.includes('name="description"')) {
      html = html.replace(/<meta[^>]*name="description"[^>]*>/i, `<meta data-rh="true" name="description" content="${service.description}">`);
    } else {
      html = html.replace('</head>', `  <meta data-rh="true" name="description" content="${service.description}">\n</head>`);
    }

    // Replace or insert meta keywords
    if (html.includes('name="keywords"')) {
      html = html.replace(/<meta[^>]*name="keywords"[^>]*>/i, `<meta data-rh="true" name="keywords" content="${service.keywords}">`);
    } else {
      html = html.replace('</head>', `  <meta data-rh="true" name="keywords" content="${service.keywords}">\n</head>`);
    }

    // Canonical link
    const canonicalTag = `<link data-rh="true" rel="canonical" href="${canonicalUrl}">`;
    html = html.replace('</head>', `  ${canonicalTag}\n</head>`);

    // Open Graph Tags
    const ogTags = `
  <meta data-rh="true" property="og:type" content="website">
  <meta data-rh="true" property="og:url" content="${canonicalUrl}">
  <meta data-rh="true" property="og:title" content="${service.title}">
  <meta data-rh="true" property="og:description" content="${service.description}">
  <meta data-rh="true" property="og:image" content="${service.image}">
  <meta data-rh="true" property="og:site_name" content="Aceweb">
  <meta data-rh="true" property="og:locale" content="pt_BR">
  <meta data-rh="true" name="twitter:card" content="summary_large_image">
  <meta data-rh="true" name="twitter:url" content="${canonicalUrl}">
  <meta data-rh="true" name="twitter:title" content="${service.title}">
  <meta data-rh="true" name="twitter:description" content="${service.description}">
  <meta data-rh="true" name="twitter:image" content="${service.image}">
</head>`;
    html = html.replace('</head>', ogTags);

    // Create directory dist/servicos/${service.id}/
    const targetDir = path.join(distPath, 'servicos', service.id);
    fs.mkdirSync(targetDir, { recursive: true });

    // Write index.html
    fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf-8');
    console.log(`[prerender-seo] Gerado HTML dedicado com SEO: /servicos/${service.id}/index.html`);
  });

  console.log('[prerender-seo] Todas as páginas de serviços foram pré-renderizadas com SEO único!');
}

prerenderServicePages();
