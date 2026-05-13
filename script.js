const socials = [
  {
    title: 'LinkedIn',
    description: 'Currículo online. Empresas que construí e por onde passei.',
    link: 'https://www.linkedin.com/in/leonardogregianin/',
  },
  {
    title: 'E-mail',
    description: 'Contato direto para oportunidades e mensagens.',
    link: 'mailto:leogregianin@gmail.com',
  },
  {
    title: 'GitHub',
    description: 'Código, repositórios e contribuições open-source.',
    link: 'https://github.com/leogregianin',
  },
];

const projects = [
  {
    title: 'Impressão de Documentos Fiscais',
    tag: 'Site',
    description: 'Projeto para conversão de XML em PDF para impressão de documentos fiscais no Brasil (NF-e, CT-e, MDF-e, NFS-e).',
    link: 'https://dfe.leonardogregianin.com/',
    linkLabel: 'Abrir Site',
  },
  {
    title: 'Biblia com IA',
    tag: 'Site',
    description: 'Projeto que utiliza inteligência artificial para interpretar e explicar passagens bíblicas, oferecendo contextos históricos e aplicação prática',
    link: 'https://biblia.leonardogregianin.com/',
    linkLabel: 'Abrir Site',
  },
  {
    title: 'Stocks Prediction',
    tag: 'Site',
    description: 'Projeto de previsão de ações utilizando modelos de machine learning para analisar tendências e fornecer insights sobre o mercado financeiro. Em construção.',
    link: 'https://stocks.leonardogregianin.com/',
    linkLabel: 'Abrir Site',
  },
];

const libraries = [
  {
    title: 'BrazilFiscalReport',
    tag: 'Python',
    description: 'Biblioteca para geração de Impressão de Documentos Fiscais (NF-e, CT-e, MDF-e, NFS-e) a partir de XML, com suporte a templates personalizáveis e integração fácil.',
    link: 'https://github.com/Engenere/BrazilFiscalReport',
    linkLabel: 'Abrir repositório',
  },
  {
    title: 'PyNFe',
    tag: 'Python',
    description: 'Projeto de biblioteca para fazer interface com o webservice de Nota Fiscal eletrônica para Python',
    link: 'https://github.com/TadaSoftware/PyNFe',
    linkLabel: 'Abrir repositório',
  },
  {
    title: 'Download NFSe',
    tag: 'Python',
    description: 'Download de XML da Nota Fiscal de Serviço Eletrônica (NFS-e) recebidas de todo o Brasil para um CPF/CNPJ',
    link: 'https://github.com/leogregianin/download_nfse',
    linkLabel: 'Abrir repositório',
  },
  {
    title: 'brcep',
    tag: 'Golang',
    description: 'Quickly access zip code information using Sidecar Pattern to support API queries to ViaCEP, CEPAberto and Correios',
    link: 'https://github.com/leogregianin/brcep',
    linkLabel: 'Abrir repositório',
  },
  {
    title: 'siscomex-ncm',
    tag: 'Python',
    description: 'Biblioteca para acessar a tabela de NCM (Nomenclatura Comum do Mercosul) do Siscomex, fornecendo informações detalhadas sobre códigos NCM, descrições e classificações fiscais.',
    link: 'https://github.com/leogregianin/siscomex-ncm',
    linkLabel: 'Abrir repositório',
  },
  {
    title: 'stock-exchange-holidays',
    tag: 'Python',
    description: 'Biblioteca para obter feriados de bolsas de valores, fornecendo informações sobre os dias em que as bolsas estão fechadas devido a feriados nacionais ou regionais. Suporte a (NYSE, CME, B3, SSE, JPX)',
    link: 'https://github.com/leogregianin/stock-exchange-holidays',
    linkLabel: 'Abrir repositório',
  },
  {
    title: 'django-br-utils',
    tag: 'Python, Django',
    description: 'Funcionalidades para informações e dados do Brasil, como CNPJ, CPF, CEP, UF, Cidades, Países, Bancos para Django.',
    link: 'https://github.com/leogregianin/django-br-utils',
    linkLabel: 'Abrir repositório',
  },
  {
    title: 'ofx-reader',
    tag: 'Pascal, Delphi',
    description: 'Biblioteca para leitura de arquivos OFX (Open Financial Exchange) em Delphi, permitindo a extração de dados financeiros de forma fácil e eficiente.',
    link: 'https://github.com/leogregianin/ofx-reader',
    linkLabel: 'Abrir repositório',
  },
  {
    title: 'cidade_ibge_tom',
    tag: 'Python',
    description: 'Biblioteca para acessar a tabela de cidades do IBGE, fornecendo informações detalhadas sobre municípios brasileiros, incluindo códigos, nomes e dados geográficos.',
    link: 'https://github.com/leogregianin/cidade_ibge_tom',
    linkLabel: 'Abrir repositório',
  },
  {
    title: 'django-requestlogs',
    tag: 'Python',
    description: 'Biblioteca para registrar e analisar logs de requisições HTTP em aplicações Django, fornecendo insights sobre o tráfego, desempenho e possíveis erros.',
    link: 'https://github.com/Raekkeri/django-requestlogs',
    linkLabel: 'Abrir repositório',
  },
  {
    title: 'scanapi',
    tag: 'Python',
    description: 'Framework para teste de APIs, permitindo a definição de cenários de teste em arquivos YAML, com suporte a validação de respostas, autenticação e geração de relatórios.',
    link: 'https://github.com/scanapi/scanapi',
    linkLabel: 'Abrir repositório',
  },
  {
    title: 'python-digital-certificate',
    tag: 'Python',
    description: 'Biblioteca para manipulação de certificados digitais em Python, permitindo a leitura e validação de certificados X.509, além de suporte a operações criptográficas relacionadas.',
    link: 'https://github.com/leogregianin/python-digital-certificate',
    linkLabel: 'Abrir repositório',
  },
  {
    title: 'minha-receita',
    tag: 'Golang',
    description: 'API para acessar dados de CNPJ utilizando a base de dados da Receita Federal do Brasil, fornecendo informações detalhadas sobre pessoas físicas e jurídicas.',
    link: 'https://github.com/leogregianin/minha-receita',
    linkLabel: 'Abrir repositório',
  },
  {
    title: 'pywikibot',
    tag: 'Python',
    description: 'Biblioteca para automação de tarefas em wikis, permitindo a criação de bots para edição, manutenção e gerenciamento de conteúdo em plataformas como Wikipedia.',
    link: 'https://github.com/wikimedia/pywikibot',
    linkLabel: 'Abrir repositório',
  },
  {
    title: 'pychess',
    tag: 'Python',
    description: 'Projeto de jogo de Xadrez em Python, com suporte a jogabilidade contra o computador em diferentes níveis de dificuldade, análise de partidas e interface gráfica para uma experiência completa de xadrez.',
    link: 'https://github.com/pychess/pychess',
    linkLabel: 'Abrir repositório',
  },
  {
    title: 'cake',
    tag: 'Pascal, Delphi',
    description: 'Backend para envio de WhatsApp e SMS pelo Twilio, com suporte a templates, filas de envio e integração fácil para aplicações Delphi.',
    link: 'https://github.com/leogregianin/cake',
    linkLabel: 'Abrir repositório',
  },
  {
    title: 'ibge',
    tag: 'Python',
    description: 'Biblioteca para acessar a tabela de cidades do IBGE, fornecendo informações detalhadas sobre municípios brasileiros, incluindo códigos, nomes e dados geográficos.',
    link: 'https://github.com/leogregianin/ibge',
    linkLabel: 'Abrir repositório',
  },
  {
    title: 'kubernetes-workshop',
    tag: 'Python',
    description: 'Projeto de workshop prático para aprender Kubernetes, com aplicação de um projeto real e completo.',
    link: 'https://github.com/leogregianin/kubernetes-workshop',
    linkLabel: 'Abrir repositório',
  },
];

const articles = [
  {
    tag: 'Medium',
    title: 'Kubernetes: o que é, quando e como aplicá-lo',
    description: 'Um projeto real utilizando Kubernetes para escalar uma aplicação.',
    link: 'https://medium.com/@leogregianin/kubernetes-o-que-%C3%A9-quando-e-como-aplic%C3%A1-lo-38cc39d9629d',
    linkLabel: 'Abrir artigo',
  },
  {
    tag: 'DEV.to',
    title: 'Python é fácil. Go é simples. Simples é diferente de fácil',
    description: 'Escrito em 2023 sobre as diferenças entre Python e Go, destacando a simplicidade de Go em comparação com a facilidade de Python.',
    link: 'https://dev.to/leogregianin/python-e-facil-go-e-simples-simples-e-diferente-de-facil-5b9o',
    linkLabel: 'Abrir artigo',
  },
  {
    tag: 'Medium',
    title: 'Gerenciamento de ambientes e pacotes no Python',
    description: 'Artigo escrito em 2021 sobre gerenciamento de ambientes e pacotes no Python.',
    link: 'https://medium.com/@leogregianin/gerenciamento-de-ambientes-e-pacotes-no-python-9a7afb6572ab',
    linkLabel: 'Abrir artigo',
  },
  {
    tag: 'Medium',
    title: 'Agregador de APIs de CEPs do Brasil com Golang',
    description: 'Projeto open-source que agrega diversas APIs de CEPs do Brasil, escrito em Golang.',
    link: 'https://medium.com/@leogregianin/agregador-de-apis-de-ceps-do-brasil-com-golang-2308a71eafcc',
    linkLabel: 'Abrir artigo',
  },
  {
    tag: 'Medium',
    title: 'Todos os artigos no Medium',
    description: '',
    link: 'https://medium.com/@leogregianin',
    linkLabel: 'Abrir Medium',
  },
  {
    tag: 'DEV.to',
    title: 'Todos os artigos no Dev.to',
    description: '',
    link: 'https://dev.to/leogregianin',
    linkLabel: 'Abrir DEV.to',
  },
];

function createCard({ title, tag, description, link, linkLabel }) {
  const article = document.createElement('article');
  article.className = 'card';
  article.innerHTML = `
    <div class="card-top">
      <span class="tag">${tag ?? title}</span>
    </div>
    <h3>${title}</h3>
    <p>${description}</p>
    <div class="card-links">
      <a href="${link}" target="_blank" rel="noreferrer">${linkLabel ?? 'Abrir'}</a>
    </div>
  `;
  return article;
}

function createSocialCard({ title, description, link }) {
  const article = document.createElement('article');
  article.className = 'card';
  article.innerHTML = `
    <div class="card-top">
      <span class="tag">${title}</span>
    </div>
    <h3>${title}</h3>
    <p>${description}</p>
    <div class="card-links">
      <a href="${link}" target="_blank" rel="noreferrer">Abrir perfil</a>
    </div>
  `;
  return article;
}

const projectGrid = document.getElementById('projects-grid');
const librariesGrid = document.getElementById('libraries-grid');
const articlesGrid = document.getElementById('articles-grid');
const socialGrid = document.getElementById('social-grid');

function shuffle(arr) {
  return arr
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

projects.forEach((project) => projectGrid.appendChild(createCard(project)));
shuffle(libraries).forEach((library) => librariesGrid.appendChild(createCard(library)));
articles.forEach((article) => articlesGrid.appendChild(createCard(article)));
socials.forEach((social) => socialGrid.appendChild(createSocialCard(social)));
