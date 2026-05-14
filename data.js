const siteData = {
    defaultLanguage: 'pt',
    languages: ['pt', 'en'],
    ui: {
      pt: {
        brandSubtitle: 'Construindo produtos com código',
        nav: {
          contact: 'Contato',
          projects: 'Projetos',
          libraries: 'Bibliotecas',
          articles: 'Artigos',
        },
        sections: {
          contactTitle: 'Contato e redes',
          contactNote: 'Formas de contato',
          projectsTitle: 'Projetos',
          projectsNote: 'Projetos abertos criados',
          librariesTitle: 'Bibliotecas',
          librariesNote: 'Bibliotecas de código aberto que criei ou contribuí',
          articlesTitle: 'Artigos escritos',
          articlesNote: 'Artigos escritos no DEV.to e Medium.',
        },
        footer: '2026 Leonardo Gregianin',
        languageLabel: 'Idioma',
        languageShort: 'PT',
        socialLinkLabel: 'Abrir perfil',
        defaultLinkLabel: 'Abrir',
      },
      en: {
        brandSubtitle: 'Building products with code',
        nav: {
          contact: 'Contact',
          projects: 'Projects',
          libraries: 'Libraries',
          articles: 'Articles',
        },
        sections: {
          contactTitle: 'Contact and social',
          contactNote: 'Get in touch',
          projectsTitle: 'Projects',
          projectsNote: 'Open projects I created',
          librariesTitle: 'Libraries',
          librariesNote: 'Open-source libraries I created or contributed to',
          articlesTitle: 'Written articles',
          articlesNote: 'Articles published on DEV.to and Medium.',
        },
        footer: '2026 Leonardo Gregianin',
        languageLabel: 'Language',
        languageShort: 'EN',
        socialLinkLabel: 'Open profile',
        defaultLinkLabel: 'Open',
      },
    },
    socials: [
      {
        icon: 'linkedin',
        title: { pt: 'LinkedIn', en: 'LinkedIn' },
        description: {
          pt: 'Currículo online. Empresas que construí e por onde passei.',
          en: 'Online resume. Companies I helped build and where I worked.',
        },
        link: 'https://www.linkedin.com/in/leonardogregianin/',
      },
      {
        icon: 'email',
        title: { pt: 'E-mail', en: 'Email' },
        description: {
          pt: 'Contato direto para oportunidades e mensagens.',
          en: 'Direct contact for opportunities and messages.',
        },
        link: 'mailto:leogregianin@gmail.com',
      },
      {
        icon: 'github',
        title: { pt: 'GitHub', en: 'GitHub' },
        description: {
          pt: 'Código, repositórios e contribuições open-source.',
          en: 'Code, repositories, and open-source contributions.',
        },
        link: 'https://github.com/leogregianin',
      },
    ],
    projects: [
      {
        title: { pt: 'Impressão de Documentos Fiscais', en: 'Fiscal Document Printing' },
        tag: { pt: 'Site', en: 'Site' },
        description: {
          pt: 'Projeto para conversão de XML em PDF para impressão de documentos fiscais no Brasil (NF-e, CT-e, MDF-e, NFS-e).',
          en: 'A project that converts XML to PDF for printing fiscal documents in Brazil (NF-e, CT-e, MDF-e, NFS-e).',
        },
        link: 'https://dfe.leonardogregianin.com/',
        linkLabel: { pt: 'Abrir Site', en: 'Open Site' },
      },
      {
        title: { pt: 'Biblia com IA', en: 'Bible with AI' },
        tag: { pt: 'Site', en: 'Site' },
        description: {
          pt: 'Projeto que utiliza inteligência artificial para interpretar e explicar passagens bíblicas, oferecendo contextos históricos e aplicação prática',
          en: 'A project that uses artificial intelligence to interpret and explain Bible passages, offering historical context and practical application.',
        },
        link: 'https://biblia.leonardogregianin.com/',
        linkLabel: { pt: 'Abrir Site', en: 'Open Site' },
      },
    ],
    libraries: [
      {
        title: 'BrazilFiscalReport',
        tag: 'Python',
        description: {
          pt: 'Biblioteca para geração de Impressão de Documentos Fiscais (NF-e, CT-e, MDF-e, NFS-e) a partir de XML, com suporte a templates personalizáveis e integração fácil.',
          en: 'Library for generating fiscal document printouts (NF-e, CT-e, MDF-e, NFS-e) from XML, with customizable templates and easy integration.',
        },
        link: 'https://github.com/Engenere/BrazilFiscalReport',
        linkLabel: { pt: 'Abrir repositório', en: 'Open repository' },
      },
      {
        title: 'PyNFe',
        tag: 'Python',
        description: {
          pt: 'Projeto de biblioteca para fazer interface com o webservice de Nota Fiscal eletrônica para Python',
          en: 'A library project to interface with the electronic invoice webservice for Python.',
        },
        link: 'https://github.com/TadaSoftware/PyNFe',
        linkLabel: { pt: 'Abrir repositório', en: 'Open repository' },
      },
      {
        title: 'Download NFSe',
        tag: 'Python',
        description: {
          pt: 'Download de XML da Nota Fiscal de Serviço Eletrônica (NFS-e) recebidas de todo o Brasil para um CPF/CNPJ',
          en: 'Downloads XML for Brazilian Electronic Service Invoices (NFS-e) received across Brazil for a CPF/CNPJ.',
        },
        link: 'https://github.com/leogregianin/download_nfse',
        linkLabel: { pt: 'Abrir repositório', en: 'Open repository' },
      },
      {
        title: 'brcep',
        tag: 'Golang',
        description: {
          pt: 'Acesso rápido a informações de CEP usando Sidecar Pattern para consultas às APIs ViaCEP, CEPAberto e Correios.',
          en: 'Quickly access zip code information using the Sidecar Pattern to support API queries to ViaCEP, CEPAberto, and Correios.',
        },
        link: 'https://github.com/leogregianin/brcep',
        linkLabel: { pt: 'Abrir repositório', en: 'Open repository' },
      },
      {
        title: 'siscomex-ncm',
        tag: 'Python',
        description: {
          pt: 'Biblioteca para acessar a tabela de NCM (Nomenclatura Comum do Mercosul) do Siscomex, fornecendo informações detalhadas sobre códigos NCM, descrições e classificações fiscais.',
          en: 'Library to access Siscomex’s NCM (Mercosur Common Nomenclature) table, providing detailed information about NCM codes, descriptions, and tax classifications.',
        },
        link: 'https://github.com/leogregianin/siscomex-ncm',
        linkLabel: { pt: 'Abrir repositório', en: 'Open repository' },
      },
      {
        title: 'stock-exchange-holidays',
        tag: 'Python',
        description: {
          pt: 'Biblioteca para obter feriados de bolsas de valores, fornecendo informações sobre os dias em que as bolsas estão fechadas devido a feriados nacionais ou regionais. Suporte a (NYSE, CME, B3, SSE, JPX)',
          en: 'Library for retrieving stock exchange holidays, providing information about days when markets are closed due to national or regional holidays. Supports (NYSE, CME, B3, SSE, JPX).',
        },
        link: 'https://github.com/leogregianin/stock-exchange-holidays',
        linkLabel: { pt: 'Abrir repositório', en: 'Open repository' },
      },
      {
        title: 'django-br-utils',
        tag: 'Python, Django',
        description: {
          pt: 'Funcionalidades para informações e dados do Brasil, como CNPJ, CPF, CEP, UF, Cidades, Países, Bancos para Django.',
          en: 'Utilities for Brazilian information and data such as CNPJ, CPF, ZIP code, state, cities, countries, and banks for Django.',
        },
        link: 'https://github.com/leogregianin/django-br-utils',
        linkLabel: { pt: 'Abrir repositório', en: 'Open repository' },
      },
      {
        title: 'ofx-reader',
        tag: 'Pascal, Delphi',
        description: {
          pt: 'Biblioteca para leitura de arquivos OFX (Open Financial Exchange) em Delphi, permitindo a extração de dados financeiros de forma fácil e eficiente.',
          en: 'Library for reading OFX (Open Financial Exchange) files in Delphi, enabling easy and efficient financial data extraction.',
        },
        link: 'https://github.com/leogregianin/ofx-reader',
        linkLabel: { pt: 'Abrir repositório', en: 'Open repository' },
      },
      {
        title: 'django-requestlogs',
        tag: 'Python',
        description: {
          pt: 'Biblioteca para registrar e analisar logs de requisições HTTP em aplicações Django, fornecendo insights sobre o tráfego, desempenho e possíveis erros.',
          en: 'Library for recording and analyzing HTTP request logs in Django applications, providing insights into traffic, performance, and possible errors.',
        },
        link: 'https://github.com/Raekkeri/django-requestlogs',
        linkLabel: { pt: 'Abrir repositório', en: 'Open repository' },
      },
      {
        title: 'scanapi',
        tag: 'Python',
        description: {
          pt: 'Framework para teste de APIs, permitindo a definição de cenários de teste em arquivos YAML, com suporte a validação de respostas, autenticação e geração de relatórios.',
          en: 'Framework for API testing, allowing test scenarios to be defined in YAML files, with support for response validation, authentication, and report generation.',
        },
        link: 'https://github.com/scanapi/scanapi',
        linkLabel: { pt: 'Abrir repositório', en: 'Open repository' },
      },
      {
        title: 'python-digital-certificate',
        tag: 'Python',
        description: {
          pt: 'Biblioteca para manipulação de certificados digitais em Python, permitindo a leitura e validação de certificados X.509, além de suporte a operações criptográficas relacionadas.',
          en: 'Library for handling digital certificates in Python, enabling reading and validation of X.509 certificates, plus support for related cryptographic operations.',
        },
        link: 'https://github.com/leogregianin/python-digital-certificate',
        linkLabel: { pt: 'Abrir repositório', en: 'Open repository' },
      },
      {
        title: 'minha-receita',
        tag: 'Golang',
        description: {
          pt: 'API para acessar dados de CNPJ utilizando a base de dados da Receita Federal do Brasil, fornecendo informações detalhadas sobre pessoas físicas e jurídicas.',
          en: 'API for accessing Brazilian CNPJ data using the Federal Revenue database, providing detailed information about individuals and companies.',
        },
        link: 'https://github.com/leogregianin/minha-receita',
        linkLabel: { pt: 'Abrir repositório', en: 'Open repository' },
      },
      {
        title: 'pywikibot',
        tag: 'Python',
        description: {
          pt: 'Biblioteca para automação de tarefas em wikis, permitindo a criação de bots para edição, manutenção e gerenciamento de conteúdo em plataformas como Wikipedia.',
          en: 'Library for automating tasks on wikis, enabling bots for editing, maintenance, and content management on platforms such as Wikipedia.',
        },
        link: 'https://github.com/wikimedia/pywikibot',
        linkLabel: { pt: 'Abrir repositório', en: 'Open repository' },
      },
      {
        title: 'pychess',
        tag: 'Python',
        description: {
          pt: 'Projeto de jogo de Xadrez em Python, com suporte a jogabilidade contra o computador em diferentes níveis de dificuldade, análise de partidas e interface gráfica para uma experiência completa de xadrez.',
          en: 'A Python chess game project with computer play at different difficulty levels, game analysis, and a graphical interface for a full chess experience.',
        },
        link: 'https://github.com/pychess/pychess',
        linkLabel: { pt: 'Abrir repositório', en: 'Open repository' },
      },
      {
        title: 'ACBr',
        tag: 'Pascal, Delphi',
        description: {
          pt: 'Biblioteca para automação de tarefas fiscais e contábeis em Delphi, fornecendo componentes e funções para integração com sistemas de emissão de notas fiscais, boletos e outros serviços.',
          en: 'Library for automating tax and accounting tasks in Delphi, providing components and functions for integration with invoice, boleto, and other service systems.',
        },
        link: 'https://projetoacbr.com.br',
        linkLabel: { pt: 'Abrir site', en: 'Open site' },
      },
      {
        title: 'cake',
        tag: 'Pascal, Delphi',
        description: {
          pt: 'Backend para envio de WhatsApp e SMS pelo Twilio, com suporte a templates, filas de envio e integração fácil para aplicações Delphi.',
          en: 'Backend for sending WhatsApp and SMS via Twilio, with template support, send queues, and easy integration for Delphi applications.',
        },
        link: 'https://github.com/leogregianin/cake',
        linkLabel: { pt: 'Abrir repositório', en: 'Open repository' },
      },
      {
        title: 'ibge',
        tag: 'Python',
        description: {
          pt: 'Biblioteca para acessar a tabela de cidades do IBGE, fornecendo informações detalhadas sobre municípios brasileiros, incluindo códigos, nomes e dados geográficos.',
          en: 'Library to access the IBGE city table, providing detailed information about Brazilian municipalities, including codes, names, and geographic data.',
        },
        link: 'https://github.com/leogregianin/ibge',
        linkLabel: { pt: 'Abrir repositório', en: 'Open repository' },
      },
      {
        title: 'kubernetes-workshop',
        tag: 'Python',
        description: {
          pt: 'Projeto de workshop prático para aprender Kubernetes, com aplicação de um projeto real e completo.',
          en: 'Hands-on workshop project for learning Kubernetes, featuring a real and complete application.',
        },
        link: 'https://github.com/leogregianin/kubernetes-workshop',
        linkLabel: { pt: 'Abrir repositório', en: 'Open repository' },
      }
    ],
    articles: [
      {
        tag: 'Medium',
        title: {
          pt: 'Kubernetes: o que é, quando e como aplicá-lo',
          en: 'Kubernetes: what it is, when to use it, and how to apply it',
        },
        description: {
          pt: 'Um projeto real utilizando Kubernetes para escalar uma aplicação.',
          en: 'A real project using Kubernetes to scale an application.',
        },
        link: 'https://medium.com/@leogregianin/kubernetes-o-que-%C3%A9-quando-e-como-aplic%C3%A1-lo-38cc39d9629d',
        linkLabel: { pt: 'Abrir artigo', en: 'Open article' },
      },
      {
        tag: 'DEV.to',
        title: {
          pt: 'Python é fácil. Go é simples. Simples é diferente de fácil',
          en: 'Python is easy. Go is simple. Simple is different from easy',
        },
        description: {
          pt: 'Escrito em 2023 sobre as diferenças entre Python e Go, destacando a simplicidade de Go em comparação com a facilidade de Python.',
          en: 'Written in 2023 about the differences between Python and Go, highlighting Go’s simplicity compared to Python’s ease of use.',
        },
        link: 'https://dev.to/leogregianin/python-e-facil-go-e-simples-simples-e-diferente-de-facil-5b9o',
        linkLabel: { pt: 'Abrir artigo', en: 'Open article' },
      },
      {
        tag: 'Medium',
        title: {
          pt: 'Gerenciamento de ambientes e pacotes no Python',
          en: 'Managing environments and packages in Python',
        },
        description: {
          pt: 'Artigo escrito em 2021 sobre gerenciamento de ambientes e pacotes no Python.',
          en: 'Article written in 2021 about managing environments and packages in Python.',
        },
        link: 'https://medium.com/@leogregianin/gerenciamento-de-ambientes-e-pacotes-no-python-9a7afb6572ab',
        linkLabel: { pt: 'Abrir artigo', en: 'Open article' },
      },
      {
        tag: 'Medium',
        title: {
          pt: 'Agregador de APIs de CEPs do Brasil com Golang',
          en: 'Brazil ZIP code API aggregator with Golang',
        },
        description: {
          pt: 'Projeto open-source que agrega diversas APIs de CEPs do Brasil, escrito em Golang.',
          en: 'Open-source project that aggregates several Brazilian ZIP code APIs, written in Golang.',
        },
        link: 'https://medium.com/@leogregianin/agregador-de-apis-de-ceps-do-brasil-com-golang-2308a71eafcc',
        linkLabel: { pt: 'Abrir artigo', en: 'Open article' },
      },
      {
        tag: 'Medium',
        title: {
          pt: 'Todos os artigos no Medium',
          en: 'All articles on Medium',
        },
        description: {
          pt: '',
          en: '',
        },
        link: 'https://medium.com/@leogregianin',
        linkLabel: { pt: 'Abrir Medium', en: 'Open Medium' },
      },
      {
        tag: 'DEV.to',
        title: {
          pt: 'Todos os artigos no Dev.to',
          en: 'All articles on DEV.to',
        },
        description: {
          pt: '',
          en: '',
        },
        link: 'https://dev.to/leogregianin',
        linkLabel: { pt: 'Abrir DEV.to', en: 'Open DEV.to' },
      }
    ]
  };
