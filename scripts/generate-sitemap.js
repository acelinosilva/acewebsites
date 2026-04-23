import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import { brazilianStates } from '../src/data/states.js';

// Configuration - Match your src/lib/supabase.js
const supabaseUrl = 'https://vcixfhqjhcxioubvomhx.supabase.co';
const supabaseAnonKey = 'sb_publishable_21Yppg00zyvzws5MZ9I_GA_8BCcuW2M';
const siteUrl = 'https://www.acewebsites.com.br';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function generateSitemap() {
  console.log('--- Gerando Sitemap Dinâmico ---');
  
  try {
    // 1. Fetch posts from Supabase
    const { data: posts, error } = await supabase
      .from('posts')
      .select('slug, updated_at')
      .eq('published', true);

    if (error) throw error;

    console.log(`Encontrados ${posts.length} posts publicados.`);

    // 2. Read the current sitemap.xml template (static part)
    // We'll reconstruct it to ensure it's clean
    let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Páginas Principais -->
  <url>
    <loc>${siteUrl}/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${siteUrl}/servicos</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${siteUrl}/sobre</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${siteUrl}/contato</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${siteUrl}/blog</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${siteUrl}/locais</loc>
    <priority>0.9</priority>
  </url>
  
  <!-- Posts do Blog -->
${posts.map(post => `  <url>
    <loc>${siteUrl}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.updated_at).toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}

  <!-- Landing Pages por Estado -->
${brazilianStates.map(state => `  <url>
    <loc>${siteUrl}/locais/criacao-de-sites-em-${state.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

    // 3. Write to public/sitemap.xml
    const publicPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    fs.writeFileSync(publicPath, sitemapContent);
    
    console.log('Sitemap.xml atualizado com sucesso em /public!');

  } catch (err) {
    console.error('Erro ao gerar sitemap:', err);
    process.exit(1);
  }
}

generateSitemap();
