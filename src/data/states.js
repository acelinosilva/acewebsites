// Lista completa de estados brasileiros para SEO Local
export const brazilianStates = [
    { name: 'Acre', slug: 'acre', abbr: 'AC', preposition: 'no', prepDe: 'do', cities: ['Rio Branco', 'Cruzeiro do Sul', 'Sena Madureira'] },
    { name: 'Alagoas', slug: 'alagoas', abbr: 'AL', preposition: 'em', prepDe: 'de', cities: ['Maceió', 'Arapiraca', 'Rio Largo'] },
    { name: 'Amapá', slug: 'amapa', abbr: 'AP', preposition: 'no', prepDe: 'do', cities: ['Macapá', 'Santana', 'Laranjal do Jari'] },
    { name: 'Amazonas', slug: 'amazonas', abbr: 'AM', preposition: 'no', prepDe: 'do', cities: ['Manaus', 'Parintins', 'Itacoatiara'] },
    { name: 'Bahia', slug: 'bahia', abbr: 'BA', preposition: 'na', prepDe: 'da', cities: ['Salvador', 'Feira de Santana', 'Vitória da Conquista'] },
    { name: 'Ceará', slug: 'ceara', abbr: 'CE', preposition: 'no', prepDe: 'do', cities: ['Fortaleza', 'Caucaia', 'Juazeiro do Norte'] },
    { name: 'Distrito Federal', slug: 'distrito-federal', abbr: 'DF', preposition: 'no', prepDe: 'do', cities: ['Brasília', 'Taguatinga', 'Ceilândia', 'Plano Piloto', 'Águas Claras'] },
    { name: 'Espírito Santo', slug: 'espirito-santo', abbr: 'ES', preposition: 'no', prepDe: 'do', cities: ['Vitória', 'Vila Velha', 'Serra'] },
    { name: 'Goiás', slug: 'goias', abbr: 'GO', preposition: 'em', prepDe: 'de', cities: ['Goiânia', 'Aparecida de Goiânia', 'Anápolis'] },
    { name: 'Maranhão', slug: 'maranhao', abbr: 'MA', preposition: 'no', prepDe: 'do', cities: ['São Luís', 'Imperatriz', 'Caxias'] },
    { name: 'Mato Grosso', slug: 'mato-grosso', abbr: 'MT', preposition: 'no', prepDe: 'do', cities: ['Cuiabá', 'Várzea Grande', 'Rondonópolis'] },
    { name: 'Mato Grosso do Sul', slug: 'mato-grosso-do-sul', abbr: 'MS', preposition: 'no', prepDe: 'do', cities: ['Campo Grande', 'Dourados', 'Três Lagoas'] },
    { name: 'Minas Gerais', slug: 'minas-gerais', abbr: 'MG', preposition: 'em', prepDe: 'de', cities: ['Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora'] },
    { name: 'Pará', slug: 'para', abbr: 'PA', preposition: 'no', prepDe: 'do', cities: ['Belém', 'Ananindeua', 'Santarém'] },
    { name: 'Paraíba', slug: 'paraiba', abbr: 'PB', preposition: 'na', prepDe: 'da', cities: ['João Pessoa', 'Campina Grande', 'Santa Rita'] },
    { name: 'Paraná', slug: 'parana', abbr: 'PR', preposition: 'no', prepDe: 'do', cities: ['Curitiba', 'Londrina', 'Maringá'] },
    { name: 'Pernambuco', slug: 'pernambuco', abbr: 'PE', preposition: 'em', prepDe: 'de', cities: ['Recife', 'Jaboatão dos Guararapes', 'Olinda'] },
    { name: 'Piauí', slug: 'piaui', abbr: 'PI', preposition: 'no', prepDe: 'do', cities: ['Teresina', 'Parnaíba', 'Picos'] },
    { name: 'Rio de Janeiro', slug: 'rio-de-janeiro', abbr: 'RJ', preposition: 'no', prepDe: 'do', cities: ['Rio de Janeiro', 'São Gonçalo', 'Duque de Caxias', 'Niterói'] },
    { name: 'Rio Grande do Norte', slug: 'rio-grande-do-norte', abbr: 'RN', preposition: 'no', prepDe: 'do', cities: ['Natal', 'Mossoró', 'Parnamirim'] },
    { name: 'Rio Grande do Sul', slug: 'rio-grande-do-sul', abbr: 'RS', preposition: 'no', prepDe: 'do', cities: ['Porto Alegre', 'Caxias do Sul', 'Pelotas', 'Canoas'] },
    { name: 'Rondônia', slug: 'rondonia', abbr: 'RO', preposition: 'em', prepDe: 'de', cities: ['Porto Velho', 'Ji-Paraná', 'Ariquemes'] },
    { name: 'Roraima', slug: 'roraima', abbr: 'RR', preposition: 'em', prepDe: 'de', cities: ['Boa Vista', 'Rorainópolis', 'Caracaraí'] },
    { name: 'Santa Catarina', slug: 'santa-catarina', abbr: 'SC', preposition: 'em', prepDe: 'de', cities: ['Florianópolis', 'Joinville', 'Blumenau', 'Balneário Camboriú'] },
    { name: 'São Paulo', slug: 'sao-paulo', abbr: 'SP', preposition: 'em', prepDe: 'de', cities: ['São Paulo', 'Guarulhos', 'Campinas', 'São Bernardo do Campo', 'Santo André'] },
    { name: 'Sergipe', slug: 'sergipe', abbr: 'SE', preposition: 'em', prepDe: 'de', cities: ['Aracaju', 'Nossa Senhora do Socorro', 'Lagarto'] },
    { name: 'Tocantins', slug: 'tocantins', abbr: 'TO', preposition: 'no', prepDe: 'do', cities: ['Palmas', 'Araguaína', 'Gurupi'] },
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
