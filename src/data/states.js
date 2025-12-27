// Lista completa de estados brasileiros para SEO Local
export const brazilianStates = [
    { name: 'Acre', slug: 'acre', abbr: 'AC', cities: ['Rio Branco', 'Cruzeiro do Sul', 'Sena Madureira'] },
    { name: 'Alagoas', slug: 'alagoas', abbr: 'AL', cities: ['Maceió', 'Arapiraca', 'Rio Largo'] },
    { name: 'Amapá', slug: 'amapa', abbr: 'AP', cities: ['Macapá', 'Santana', 'Laranjal do Jari'] },
    { name: 'Amazonas', slug: 'amazonas', abbr: 'AM', cities: ['Manaus', 'Parintins', 'Itacoatiara'] },
    { name: 'Bahia', slug: 'bahia', abbr: 'BA', cities: ['Salvador', 'Feira de Santana', 'Vitória da Conquista'] },
    { name: 'Ceará', slug: 'ceara', abbr: 'CE', cities: ['Fortaleza', 'Caucaia', 'Juazeiro do Norte'] },
    { name: 'Distrito Federal', slug: 'distrito-federal', abbr: 'DF', cities: ['Brasília', 'Taguatinga', 'Ceilândia', 'Plano Piloto', 'Águas Claras'] },
    { name: 'Espírito Santo', slug: 'espirito-santo', abbr: 'ES', cities: ['Vitória', 'Vila Velha', 'Serra'] },
    { name: 'Goiás', slug: 'goias', abbr: 'GO', cities: ['Goiânia', 'Aparecida de Goiânia', 'Anápolis'] },
    { name: 'Maranhão', slug: 'maranhao', abbr: 'MA', cities: ['São Luís', 'Imperatriz', 'Caxias'] },
    { name: 'Mato Grosso', slug: 'mato-grosso', abbr: 'MT', cities: ['Cuiabá', 'Várzea Grande', 'Rondonópolis'] },
    { name: 'Mato Grosso do Sul', slug: 'mato-grosso-do-sul', abbr: 'MS', cities: ['Campo Grande', 'Dourados', 'Três Lagoas'] },
    { name: 'Minas Gerais', slug: 'minas-gerais', abbr: 'MG', cities: ['Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora'] },
    { name: 'Pará', slug: 'para', abbr: 'PA', cities: ['Belém', 'Ananindeua', 'Santarém'] },
    { name: 'Paraíba', slug: 'paraiba', abbr: 'PB', cities: ['João Pessoa', 'Campina Grande', 'Santa Rita'] },
    { name: 'Paraná', slug: 'parana', abbr: 'PR', cities: ['Curitiba', 'Londrina', 'Maringá'] },
    { name: 'Pernambuco', slug: 'pernambuco', abbr: 'PE', cities: ['Recife', 'Jaboatão dos Guararapes', 'Olinda'] },
    { name: 'Piauí', slug: 'piaui', abbr: 'PI', cities: ['Teresina', 'Parnaíba', 'Picos'] },
    { name: 'Rio de Janeiro', slug: 'rio-de-janeiro', abbr: 'RJ', cities: ['Rio de Janeiro', 'São Gonçalo', 'Duque de Caxias', 'Niterói'] },
    { name: 'Rio Grande do Norte', slug: 'rio-grande-do-norte', abbr: 'RN', cities: ['Natal', 'Mossoró', 'Parnamirim'] },
    { name: 'Rio Grande do Sul', slug: 'rio-grande-do-sul', abbr: 'RS', cities: ['Porto Alegre', 'Caxias do Sul', 'Pelotas', 'Canoas'] },
    { name: 'Rondônia', slug: 'rondonia', abbr: 'RO', cities: ['Porto Velho', 'Ji-Paraná', 'Ariquemes'] },
    { name: 'Roraima', slug: 'roraima', abbr: 'RR', cities: ['Boa Vista', 'Rorainópolis', 'Caracaraí'] },
    { name: 'Santa Catarina', slug: 'santa-catarina', abbr: 'SC', cities: ['Florianópolis', 'Joinville', 'Blumenau', 'Balneário Camboriú'] },
    { name: 'São Paulo', slug: 'sao-paulo', abbr: 'SP', cities: ['São Paulo', 'Guarulhos', 'Campinas', 'São Bernardo do Campo', 'Santo André'] },
    { name: 'Sergipe', slug: 'sergipe', abbr: 'SE', cities: ['Aracaju', 'Nossa Senhora do Socorro', 'Lagarto'] },
    { name: 'Tocantins', slug: 'tocantins', abbr: 'TO', cities: ['Palmas', 'Araguaína', 'Gurupi'] },
];

export const getStateBySlug = (slug) => {
    return brazilianStates.find(state => state.slug === slug);
};

export const whatsappNumber = '5561996986162';
export const whatsappMessage = 'Olá, preciso de um site!';

export const getWhatsAppLink = (customMessage) => {
    if (customMessage) {
        return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(customMessage)}`;
    }
    return 'https://api.whatsapp.com/send?phone=5561996986162&text=Ol%C3%A1,%20preciso%20de%20um%20site!';
};
