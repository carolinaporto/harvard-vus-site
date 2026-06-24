import type { Lang } from '../context/LanguageContext';

export const content = {
  pt: {
    lang: { toggle: 'EN', current: 'PT' },

    nav: {
      story: 'Minha Trajetória',
      harvard: 'Harvard',
      donate: 'Como Ajudar',
      donateBtn: 'Doe Agora',
    },

    hero: {
      tag: 'Aceita: Harvard College VUS 2026/2027',
      headline1: 'A aprovação veio.',
      headline2: 'O resto depende de nós.',
      subtitle:
        'Cresci em cidades diferentes, fui para doze escolas diferentes, e aprendi a construir em qualquer terreno. Hoje estou aqui: bolsista no Insper, com uma carta de Harvard na mão, e pedindo ajuda para fazer essa viagem acontecer.',
      cta1: 'Doe Agora',
      cta2: 'Minha Trajetória',
      cta3: 'Compartilhar',
      scrollHint: 'Conheça minha história',
      photoTodo: 'TODO: Adicionar foto de celebração da aprovação em Harvard (foto com tinta/trote)',
    },

    whyHelp: {
      tag: 'Transparência',
      title: 'Por que estou pedindo ajuda',
      p1: 'A aprovação é real. A carta está assinada. Mas uma aprovação não paga moradia em Cambridge, plano de saúde obrigatório, alimentação, visto ou materiais acadêmicos.',
      p2: 'Sou bolsista no Insper e construí minha trajetória por esforço, curiosidade e comunidade. Por isso estou aqui: pedindo ajuda com transparência, sem vergonha, e com gratidão profunda por cada pessoa que lê até aqui.',
      p3: 'Se você puder contribuir, seja com qualquer valor, um compartilhamento ou uma indicação para alguém que possa ajudar, você me ajuda a transformar essa aprovação em realidade.',
      quote: '"Cada doação, indicação e compartilhamento me aproxima de Harvard."',
      reality: {
        confirmedLabel: 'Confirmado',
        confirmedText: 'Aceita: Harvard College VUS 2026/2027',
        statement: 'A aprovação é oficial e irrevogável. O visto, a moradia e o seguro saúde não são incertezas; são etapas contratáveis assim que houver recurso. A única variável real é o dinheiro.',
        enablesLabel: 'O que sua doação torna possível',
        enables: [
          'Moradia em Cambridge',
          'Seguro saúde obrigatório',
          'Visto F-1 e logística',
          'Alimentação e transporte',
        ],
      },
    },

    funding: {
      tag: 'Transparência financeira',
      title: 'Para onde vai o dinheiro',
      subtitle:
        'Tuition, moradia, alimentação e seguro saúde: os quatro maiores custos, para os dois semestres.',
      goalLabel: 'Meta: 2 semestres',
      goalValue: 'US$ 78.533',
      raisedLabel: 'Arrecadado até agora',
      raisedValue: 'US$ 0',
      progressPercent: 0,
      progressNote: '',
      categories: [
        { label: 'Mensalidade (tuition)', note: 'US$ 46.694, 3 disciplinas por semestre, os dois semestres', iconKey: 'book' },
        { label: 'Moradia', note: 'US$ 21.000, aluguel em Cambridge pelos 12 meses', iconKey: 'house' },
        { label: 'Alimentação', note: 'US$ 5.885, plano de refeições da Harvard', iconKey: 'fork' },
        { label: 'Seguro saúde', note: 'US$ 4.954, obrigatório para estudantes internacionais', iconKey: 'heart' },
      ],
    },

    timeline: {
      tag: 'Minha trajetória',
      title: 'O caminho até aqui',
      subtitle:
        'Não é um currículo. É a história de alguém que sempre encontrou um jeito de continuar.',
      milestones: [
        {
          year: 'Infância',
          title: 'Filha de militar, crescendo em movimento',
          description:
            'Pirassununga, São José dos Campos, Rio de Janeiro, Brasília. Aprendi a recomeçar antes de entender que isso era uma habilidade.',
          phase: 'childhood' as const,
        },
        {
          year: 'Ensino Médio',
          title: '12 escolas e o CS50 de Harvard',
          description:
            'Doze escolas, um recomeço constante. Bolsista no Objetivo. Primeiro contato com programação pelo CS50, curso de Harvard via Fundação Estudar. Foi o que me fez querer ir fundo.',
          phase: 'childhood' as const,
        },
        {
          year: '2023',
          title: 'Insper: Engenharia da Computação',
          description:
            'Bolsa de 50% no Insper, um dos cursos mais competitivos do Brasil em tecnologia. Em 2025, recebi o Prêmio de Excelência em Eng. da Computação pela comunidade bolsista.',
          phase: 'insper' as const,
        },
        {
          year: '2024–hoje',
          title: 'Monitora em 5 disciplinas',
          description:
            'Cálculo, Ciência de Dados, Web, Sistemas Hardware-Software e Grandes Desafios de Engenharia. Ensinar é parte de quem eu sou.',
          phase: 'insper' as const,
        },
        {
          year: '2024',
          title: 'Insper Jr: Consultora e Processos Seletivos',
          description:
            'Consultora de Engenharia, processos seletivos, candidata à liderança de GP. Deixei para cofundar a Insper AI.',
          phase: 'insper' as const,
        },
        {
          year: '2025',
          title: 'Cofundadora da Insper AI',
          description:
            'Faltava um espaço de IA de verdade no Insper. Fundei com colegas a primeira organização do tipo: trilhas de ML/DL, hackathons e conexão com o ecossistema.',
          phase: 'insper' as const,
        },
        {
          year: '2025',
          title: 'Estágio na Segura.ai',
          description:
            'Insurtech nativa de IA com US$ 200M+ em prêmios na América Latina. Produto, dados e engenharia com BigQuery, Looker, Next.js e FastAPI.',
          phase: 'insper' as const,
        },
        {
          year: '2026',
          title: 'Estágio no BTG Pactual (IA para Trading)',
          description:
            'Agente de IA conversacional para traders no maior banco de investimentos da América Latina. Linguagem natural, NLP e automação de workflows.',
          phase: 'transition' as const,
        },
        {
          year: '2026',
          title: 'Brasil Project @ Harvard & MIT',
          description:
            'Participei presencialmente em Harvard e no MIT. Me vi naquele ecossistema pela primeira vez. Soube que queria fazer parte dele.',
          phase: 'harvard' as const,
        },
        {
          year: 'Verão 2026',
          title: 'UChicago SISRM: Bolsa Integral',
          description:
            'Bolsa integral no Summer Institute in Social Research Methods da Universidade de Chicago. Métodos quantitativos, tecnologia e ciências sociais.',
          phase: 'harvard' as const,
        },
        {
          year: '2026/2027',
          title: 'Aceita: Harvard College VUS',
          description:
            'Fui aceita para o Visiting Undergraduate Students Program do Harvard College para 2026/2027. Agora preciso de ajuda para tornar isso real.',
          phase: 'harvard' as const,
          isHighlight: true,
        },
      ],
    },

    harvard: {
      tag: 'Por que Harvard, para mim',
      title: 'O que eu espero encontrar lá',
      subtitle:
        'Não é o prestígio. É o que acontece quando você está rodeada de pessoas que enxergam o mundo diferente de você.',
      pillars: [
        {
          title: 'Encontrar minha direção',
          description:
            'Ainda estou descobrindo qual é o problema que quero dedicar minha vida para resolver. Harvard não é onde vou encontrar respostas prontas. É onde espero encontrar perguntas melhores.',
          iconKey: 'book',
        },
        {
          title: 'Ir mais fundo',
          description:
            'Construo coisas com IA há algum tempo. Mas ainda sinto que estou apenas começando a entender o que essa tecnologia pode significar para as pessoas e para a sociedade.',
          iconKey: 'brain',
        },
        {
          title: 'Me deixar mudar',
          description:
            'Estou indo para Harvard porque quero sair de lá diferente da pessoa que entrou.',
          iconKey: 'network',
        },
        {
          title: 'Construir o lugar que faz falta',
          description:
            'Eu gosto de estar em lugares onde as coisas estão sendo construídas. E, quando elas não existem, geralmente tento ajudar a construir.',
          iconKey: 'globe',
        },
      ],
    },

    future: {
      tag: 'O que levo de volta',
      title: 'Harvard não é o fim',
      subtitle:
        'É onde pego fôlego antes do próximo capítulo.',
      items: [
        'Voltar ao Brasil melhor do que saí: com mais conhecimento, mais conexões e mais clareza sobre o que quero construir',
        'Entender de verdade como sistemas de IA afetam comunidades reais, e usar isso para construir algo que importe',
        'Contribuir de volta para a Insper AI e para o ecossistema de inovação brasileiro com o que eu aprender lá',
        'Mostrar, com ações concretas, que estudantes de bolsa brasileiros chegam nos melhores lugares do mundo',
        'Ser, para a próxima geração, a pessoa que eu gostaria de ter encontrado quando comecei',
      ],
      closing:
        'Cada pessoa que apoiar essa campanha é parte do que esse próximo capítulo vai ser.',
    },

    donate: {
      tag: 'Como você pode ajudar',
      title: 'Junte-se a essa história',
      subtitle:
        'Existem várias formas de me aproximar de Harvard. Escolha a que faz mais sentido para você.',
      pixTitle: 'PIX',
      pixSubtitle: 'Doação via PIX (Brasil)',
      pixKey: 'TODO: Adicionar chave PIX',
      pixNote: 'TODO: Adicionar instruções de pagamento PIX',
      intlTitle: 'Transferência Internacional',
      intlSubtitle: 'Para doadores fora do Brasil',
      intlInfo: 'TODO: Adicionar informações: Wise, conta bancária ou outro método internacional',
      shareTitle: 'Compartilhe',
      shareSubtitle: 'Compartilhamento também é doação',
      shareText:
        'Compartilhar essa página com alguém que possa ajudar, ou simplesmente continuar essa história, já faz uma diferença enorme.',
      connectTitle: 'Me conecte',
      connectText:
        'Conhece uma fundação, alumni da Insper ou Harvard, uma empresa ou organização que apoie talentos brasileiros? Me envie um e-mail.',
      emailBtn: 'carolporto04@gmail.com',
      donateAnyBtn: 'Qualquer valor ajuda →',
      shareWhatsApp: 'WhatsApp',
      shareLinkedIn: 'LinkedIn',
      shareTwitter: 'X / Twitter',
      shareCopy: 'Copiar link',
      shareCopied: 'Link copiado!',
      whatsappMessage:
        'Oi! Uma amiga minha foi aceita para estudar em Harvard e está arrecadando fundos para conseguir ir. Vale muito a pena conhecer a história dela:',
      twitterMessage:
        'Uma estudante brasileira de Eng. da Computação foi aceita para Harvard e precisa de apoio para financiar a oportunidade. Conheça a história:',
    },

    faq: {
      tag: 'Dúvidas frequentes',
      title: 'Perguntas frequentes',
      items: [
        {
          question: 'Você já foi aceita em Harvard?',
          answer:
            'Sim. Fui oficialmente aceita para o programa Visiting Undergraduate Students (VUS) do Harvard College para o ano acadêmico 2026/2027. Posso enviar documentação de comprovação para quem precisar.',
        },
        {
          question: 'Para onde vai o dinheiro, exatamente?',
          answer:
            'Cada centavo vai direto para custos reais e documentáveis: moradia em Cambridge, alimentação, plano de saúde obrigatório, visto americano e logística, materiais acadêmicos, transporte e despesas do dia a dia. Não há intermediários. Posso prestar contas a qualquer doador que solicitar.',
        },
        {
          question: 'Como posso ajudar?',
          answer:
            'De várias formas: fazendo uma doação (qualquer valor ajuda), compartilhando essa página, ou me conectando com fundações, alumni do Insper ou de Harvard, empresas ou qualquer pessoa que possa apoiar. Para conversar, tirar dúvidas ou receber o comprovante de aceitação antes de qualquer decisão, me envie um e-mail em carolporto04@gmail.com.',
        },
      ],
    },

    contact: {
      tag: 'Fale comigo',
      title: 'Entre em contato',
      subtitle:
        'Para doações maiores, parcerias institucionais, mentoria ou simplesmente para conversar. Estou disponível.',
      emailLabel: 'E-mail',
      emailValue: 'carolporto04@gmail.com',
      linkedinLabel: 'LinkedIn',
      linkedinValue: 'https://www.linkedin.com/in/mariacarolinaporto/',
      formName: 'Seu nome',
      formEmail: 'Seu e-mail',
      formMessage: 'Mensagem',
      formMessagePlaceholder:
        'Gostaria de ajudar com... / Tenho uma dúvida sobre... / Quero te conectar com...',
      formSubmit: 'Enviar mensagem',
      formNote: 'Seu e-mail abrirá o cliente de e-mail com a mensagem pré-preenchida.',
    },

    ticker: {
      items: [
        'Aceita em Harvard College',
        'Bolsa integral na UChicago',
        'Cofundadora da Insper AI',
        'Monitora em 5 disciplinas',
        'Estágio no BTG Pactual',
        'Estágio na Segura.ai',
        'Brasil Project @ Harvard & MIT',
        'Bolsista 50% no Insper',
        'Representante de turma',
      ],
    },

    pullQuotes: {
      one: 'Aprendi a recomeçar antes de entender que isso era uma habilidade. Harvard é mais um começo.',
      two: 'Não sei exatamente quem eu serei depois de Harvard. Sei que quero descobrir.',
    },

    exploring: {
      tag: 'Por dentro',
      title: 'O que eu estou tentando descobrir',
      subtitle: 'Talvez a parte mais honesta desta página.',
      paragraphs: [
        'Muitas pessoas imaginam que quem entra em Harvard já tem um plano perfeitamente definido para os próximos dez anos. Eu não tenho.',
        'Hoje, eu sei que amo aprender, construir coisas e trabalhar com pessoas inteligentes e apaixonadas pelo que fazem. Sei que me interesso por tecnologia, inteligência artificial, empreendedorismo, educação e impacto social. Sei que gosto de liderar equipes, criar comunidades e transformar ideias em projetos reais.',
        'Mas ainda estou tentando descobrir qual é exatamente o problema que quero dedicar minha vida para resolver.',
        'Uma das razões pelas quais Harvard significa tanto para mim não é porque eu espero encontrar respostas prontas. É porque eu espero encontrar perguntas melhores.',
        'Quero conviver com pesquisadores, empreendedores, professores e estudantes que enxergam o mundo de formas diferentes da minha. Quero testar hipóteses sobre quem eu sou, o que me motiva e que tipo de futuro quero construir.',
        'Ao longo da minha trajetória, sempre que encontrei uma oportunidade de aprender algo novo, eu fui atrás. Foi assim quando me adaptei a diferentes cidades. Foi assim quando escolhi Engenharia da Computação. Foi assim quando ajudei a fundar a Insper AI.',
        'Harvard é mais um desses momentos. Não porque eu ache que a universidade vai definir quem eu sou. Mas porque acredito que as pessoas que vou conhecer, as experiências que vou viver e os desafios que vou enfrentar lá podem expandir enormemente aquilo que eu acredito ser possível.',
      ],
    },

    photoCollage: {
      tag: 'Em cenas',
      title: 'A trajetória em imagens',
      subtitle: 'Cada foto é um capítulo: da sala de aula em São Paulo ao campus de Cambridge.',
      photos: [
        { src: '/photos/insper.jpg', caption: 'Turma de Eng. da Computação no Insper, 6º semestre' },
        { src: '/photos/insper-ai.jpg', caption: 'Insper AI: evento presencial na QiTech' },
        { src: '/photos/estagio.jpg', caption: 'Segura.ai: parte do time no verão 2025' },
        { src: '/photos/chicago.jpg', caption: 'UChicago SISRM: primeira visita de campo' },
        { src: '/photos/brasil-project.jpg', caption: 'Brasil Project: Harvard & MIT' },
        { src: '/photos/harvard.jpg', caption: 'Minha irmã me abraçando com flores na comemoração' },
        { src: '/photos/premio.jpg', caption: 'Prêmio de Excelência em Eng. da Computação, comunidade bolsista Insper, 2025' },
      ],
    },

    originStory: {
      tag: 'De onde venho',
      headline: 'Antes de Harvard, houve muitos começos.',
      story: [
        'Nasci em Pirassununga, interior de São Paulo, onde fica a Academia da Força Aérea Brasileira. Como meu pai é militar, mudar de cidade se tornou parte normal da vida desde muito cedo.',
        'Sou a caçula de quatro irmãs. Crescer rodeada delas foi, e continua sendo, uma das coisas mais formativas da minha vida. Elas são as minhas maiores inspirações, as pessoas que eu mais admiro. Cada conquista que construí tem um pedaço delas.',
        'Ao longo dos anos, morei em São José dos Campos, Rio de Janeiro, Brasília e São Paulo. Cada mudança significava recomeçar: nova escola, novos amigos, nova rotina.',
        'No ensino médio, estudei no Colégio Objetivo com bolsa e tive meu primeiro contato real com computação. Essa experiência plantou uma semente que, anos depois, me trouxe para Engenharia da Computação no Insper.',
        'Harvard não é o começo da minha história. É o próximo capítulo de uma jornada que começou há muitos anos, em cidades, escolas e países diferentes, com quatro irmãs ao meu lado.',
      ],
      journeyLabel: 'A jornada',
      cities: [
        { location: 'Pirassununga, SP', title: 'Onde tudo começou', description: 'Nascida na cidade que abriga a Academia da Força Aérea Brasileira.', isNext: false },
        { location: 'São José dos Campos, SP', title: 'Primeiros anos', description: 'Infância marcada pela mobilidade da família militar.', isNext: false },
        { location: 'Rio de Janeiro, RJ', title: 'Aprendendo a recomeçar', description: 'Nova cidade, novo começo.', isNext: false },
        { location: 'Brasília, DF', title: 'Crescendo pela mudança', description: 'Anos que reforçaram independência e adaptabilidade.', isNext: false },
        { location: 'São Paulo, SP', title: 'Insper', description: 'Engenharia da Computação, bolsista, liderança, monitoria, IA, consultoria e pesquisa.', isNext: false },
        { location: 'Chicago, EUA', title: 'University of Chicago', description: 'Pesquisa e métodos quantitativos no SISRM.', isNext: false },
        { location: 'Cambridge, MA', title: 'Harvard', description: 'O próximo capítulo.', isNext: true },
      ],
    },

    footer: {
      name: 'Maria Carolina Porto',
      tagline: 'Engenharia da Computação · Insper · Harvard VUS 2026/2027',
      email: 'carolporto04@gmail.com',
      madeWith: 'Feito com muito propósito.',
      copyright: '© 2026 Maria Carolina Porto',
    },
  },

  en: {
    lang: { toggle: 'PT', current: 'EN' },

    nav: {
      story: 'My Journey',
      harvard: 'Harvard',
      donate: 'How to Help',
      donateBtn: 'Donate Now',
    },

    hero: {
      tag: 'Accepted: Harvard College VUS 2026/2027',
      headline1: 'The acceptance came.',
      headline2: 'The rest depends on us.',
      subtitle:
        'I grew up in different cities, attended twelve different schools, and learned to build on any terrain. Today I am here: a scholarship student at Insper, with a letter from Harvard in hand, asking for help to make this trip happen.',
      cta1: 'Donate Now',
      cta2: 'My Journey',
      cta3: 'Share',
      scrollHint: 'Read my story',
      photoTodo: 'TODO: Add Harvard acceptance celebration photo (paint/trote photo)',
    },

    whyHelp: {
      tag: 'Transparency',
      title: 'Why I am asking for help',
      p1: 'The acceptance is real. The letter is signed. But an acceptance letter does not pay for housing in Cambridge, mandatory health insurance, food, a visa, or academic materials.',
      p2: 'I am a scholarship student at Insper and I built my path through effort, curiosity, and community. So I am here: asking for help with full transparency, without shame, and with deep gratitude for everyone who reads this far.',
      p3: 'If you can contribute, whether any amount, a share, or an introduction to someone who might help, you help me turn this acceptance into reality.',
      quote: '"Every donation, connection, and share brings me closer to Harvard."',
      reality: {
        confirmedLabel: 'Confirmed',
        confirmedText: 'Accepted: Harvard College VUS 2026/2027',
        statement: 'The acceptance is official and irrevocable. The visa, housing, and health insurance are not uncertainties; they are steps that can be arranged once funding is secured. The only real variable is the money.',
        enablesLabel: 'What your donation makes possible',
        enables: [
          'Housing in Cambridge',
          'Mandatory health insurance',
          'F-1 visa and logistics',
          'Food and transportation',
        ],
      },
    },

    funding: {
      tag: 'Financial transparency',
      title: 'Where the money goes',
      subtitle:
        'Tuition, housing, food, and health insurance: the four biggest costs, for both semesters.',
      goalLabel: 'Goal: 2 semesters',
      goalValue: 'US$ 78,533',
      raisedLabel: 'Raised so far',
      raisedValue: 'US$ 0',
      progressPercent: 0,
      progressNote: '',
      categories: [
        { label: 'Tuition', note: '$46,694, 3 courses per semester, both semesters', iconKey: 'book' },
        { label: 'Housing', note: '$21,000, rent in Cambridge for 12 months', iconKey: 'house' },
        { label: 'Food', note: '$5,885, Harvard dining meal plan', iconKey: 'fork' },
        { label: 'Health insurance', note: '$4,954, mandatory for international students', iconKey: 'heart' },
      ],
    },

    timeline: {
      tag: 'My journey',
      title: 'The road to here',
      subtitle: 'Not a résumé. The story of someone who always found a way to keep going.',
      milestones: [
        {
          year: 'Childhood',
          title: 'Military kid, growing up on the move',
          description:
            'Pirassununga, São José dos Campos, Rio de Janeiro, Brasília. I learned to restart before I understood that was a skill.',
          phase: 'childhood' as const,
        },
        {
          year: 'High school',
          title: '12 schools and Harvard\'s CS50',
          description:
            'Twelve schools, a constant fresh start. Attended Objetivo on a scholarship. First contact with programming through Harvard\'s CS50 via Fundação Estudar. That\'s what made me go all in.',
          phase: 'childhood' as const,
        },
        {
          year: '2023',
          title: 'Insper: Computer Engineering',
          description:
            '50% scholarship at Insper, one of Brazil\'s most competitive tech programs. In 2025, received the Excellence Award in Computer Engineering from the scholarship community.',
          phase: 'insper' as const,
        },
        {
          year: '2024–present',
          title: 'Teaching Assistant: 5 Subjects',
          description:
            'Calculus, Data Science, Web Dev, Hardware-Software Systems, and Grand Challenges of Engineering. Teaching is part of who I am.',
          phase: 'insper' as const,
        },
        {
          year: '2024',
          title: 'Insper Jr: Consultant and Recruitment',
          description:
            'Engineering consultant, managed recruitment, ran for People Management head. Left to co-found Insper AI.',
          phase: 'insper' as const,
        },
        {
          year: '2025',
          title: 'Co-founder of Insper AI',
          description:
            'No real AI student space existed at Insper. I co-founded the first one: ML/DL tracks, hackathons, portfolio culture, ecosystem connections.',
          phase: 'insper' as const,
        },
        {
          year: '2025',
          title: 'Internship at Segura.ai',
          description:
            'AI-native insurtech with $200M+ in annual premiums across Latin America. Product, data, and engineering with BigQuery, Looker, Next.js, and FastAPI.',
          phase: 'insper' as const,
        },
        {
          year: '2026',
          title: 'Internship at BTG Pactual (AI for Trading)',
          description:
            'Conversational AI agent for traders at Latin America\'s largest investment bank. Natural language trading, NLP, and workflow automation.',
          phase: 'transition' as const,
        },
        {
          year: '2026',
          title: 'Brasil Project @ Harvard & MIT',
          description:
            'Attended in person at Harvard and MIT. I saw myself in that ecosystem for the first time. Knew I wanted to belong to it.',
          phase: 'harvard' as const,
        },
        {
          year: 'Summer 2026',
          title: 'UChicago SISRM: Full Scholarship',
          description:
            'Full scholarship at the Summer Institute in Social Research Methods, University of Chicago. Quantitative methods at the intersection of tech and social sciences.',
          phase: 'harvard' as const,
        },
        {
          year: '2026/2027',
          title: 'Accepted: Harvard College VUS',
          description:
            'Accepted to the Visiting Undergraduate Students Program at Harvard College for 2026/2027. Now I need help making it real.',
          phase: 'harvard' as const,
          isHighlight: true,
        },
      ],
    },

    harvard: {
      tag: 'Why Harvard, for me',
      title: 'What I hope to find there',
      subtitle: "It is not the prestige. It is what happens when you are surrounded by people who see the world differently than you do.",
      pillars: [
        {
          title: 'Finding my direction',
          description:
            'I am still figuring out what problem I want to dedicate my life to solving. Harvard is not where I expect to find ready-made answers. It is where I expect to find better questions.',
          iconKey: 'book',
        },
        {
          title: 'Going deeper',
          description:
            'I have been building with AI for a while now. But I still feel like I am only beginning to understand what this technology can mean for people and for society.',
          iconKey: 'brain',
        },
        {
          title: 'Letting myself be changed',
          description:
            'I am going to Harvard because I want to leave there different from the person who arrived.',
          iconKey: 'network',
        },
        {
          title: 'Building the place that is missing',
          description:
            'I like being in places where things are being built. And when they do not exist, I usually try to help build them.',
          iconKey: 'globe',
        },
      ],
    },

    future: {
      tag: 'What I bring back',
      title: 'Harvard is not the end',
      subtitle: 'It is where I catch my breath before the next chapter.',
      items: [
        'Return to Brazil better than I left: more knowledge, more connections, more clarity on what I want to build',
        'Understand, really understand, how AI systems affect real communities, and use that to build something that matters',
        'Contribute back to Insper AI and the Brazilian innovation ecosystem with what I learn there',
        'Show, through concrete actions, that Brazilian scholarship students reach the best places in the world',
        'Be, for the next generation, the person I wish I had found when I was starting out',
      ],
      closing:
        'Every person who supports this campaign is part of what this next chapter will become.',
    },

    donate: {
      tag: 'How you can help',
      title: 'Join this story',
      subtitle:
        'There are several ways to bring me closer to Harvard. Choose what makes the most sense for you.',
      pixTitle: 'PIX',
      pixSubtitle: 'Donation via PIX (Brazil)',
      pixKey: 'TODO: Add PIX key',
      pixNote: 'TODO: Add PIX payment instructions',
      intlTitle: 'International Transfer',
      intlSubtitle: 'For donors outside Brazil',
      intlInfo: 'TODO: Add information: Wise, bank account, or other international method',
      shareTitle: 'Share',
      shareSubtitle: 'Sharing is also donating',
      shareText:
        'Sharing this page with someone who might help, or simply continuing this story, already makes a huge difference.',
      connectTitle: 'Connect me',
      connectText:
        'Do you know a foundation, Insper or Harvard alumnus, a company, or an organization that supports Brazilian talent? Send me an email.',
      emailBtn: 'carolporto04@gmail.com',
      donateAnyBtn: 'Any amount helps →',
      shareWhatsApp: 'WhatsApp',
      shareLinkedIn: 'LinkedIn',
      shareTwitter: 'X / Twitter',
      shareCopy: 'Copy link',
      shareCopied: 'Copied!',
      whatsappMessage:
        "Hi! A friend of mine was accepted to study at Harvard and is fundraising to make it possible. Her story is worth reading:",
      twitterMessage:
        'A Brazilian Computer Engineering student was accepted to Harvard and needs support to finance the opportunity. Read her story:',
    },

    faq: {
      tag: 'Frequently asked questions',
      title: 'FAQ',
      items: [
        {
          question: 'Were you really accepted to Harvard?',
          answer:
            'Yes. I was officially accepted to the Visiting Undergraduate Students (VUS) program at Harvard College for the 2026/2027 academic year. I can share documentation with anyone who needs it.',
        },
        {
          question: 'Where exactly does the money go?',
          answer:
            "Every dollar goes directly to real, documented costs: housing in Cambridge, food, mandatory health insurance, US visa and logistics, academic materials, transportation, and daily living expenses. No intermediaries. I can report to any donor who asks.",
        },
        {
          question: 'How can I help?',
          answer:
            "In several ways: making a donation (any amount helps), sharing this page, or connecting me with foundations, Insper or Harvard alumni, companies, or anyone who might support. To chat, ask questions, or receive my acceptance letter before deciding, email me at carolporto04@gmail.com.",
        },
      ],
    },

    contact: {
      tag: 'Get in touch',
      title: 'Contact me',
      subtitle:
        'For larger donations, institutional partnerships, mentorship, or simply to talk. I am available.',
      emailLabel: 'Email',
      emailValue: 'carolporto04@gmail.com',
      linkedinLabel: 'LinkedIn',
      linkedinValue: 'https://www.linkedin.com/in/mariacarolinaporto/',
      formName: 'Your name',
      formEmail: 'Your email',
      formMessage: 'Message',
      formMessagePlaceholder:
        "I'd like to help with... / I have a question about... / I'd like to connect you with...",
      formSubmit: 'Send message',
      formNote: 'Your email client will open with the message pre-filled.',
    },

    ticker: {
      items: [
        'Accepted to Harvard College',
        'Full scholarship at UChicago',
        'Co-founder of Insper AI',
        'Teaching Assistant: 5 subjects',
        'Intern at BTG Pactual',
        'Intern at Segura.ai',
        'Brasil Project @ Harvard & MIT',
        '50% scholarship at Insper',
        'Class representative',
      ],
    },

    pullQuotes: {
      one: 'I learned to restart before I understood that was a skill. Harvard is one more beginning.',
      two: 'I do not know exactly who I will be after Harvard. I know I want to find out.',
    },

    exploring: {
      tag: 'From the inside',
      title: 'What I am trying to figure out',
      subtitle: 'Perhaps the most honest part of this page.',
      paragraphs: [
        'Many people imagine that someone accepted to Harvard already has a perfectly defined plan for the next ten years. I do not.',
        'What I know today is that I love learning, building things, and working with people who are intelligent and passionate about what they do. I know I am interested in technology, artificial intelligence, entrepreneurship, education, and social impact. I know I enjoy leading teams, creating communities, and turning ideas into real projects.',
        'But I am still trying to figure out exactly what problem I want to dedicate my life to solving.',
        'One of the reasons Harvard means so much to me is not because I expect to find ready-made answers there. It is because I expect to find better questions.',
        'I want to be around researchers, entrepreneurs, professors, and students who see the world differently than I do. I want to test hypotheses about who I am, what motivates me, and what kind of future I want to build.',
        'Throughout my journey, whenever I found an opportunity to learn something new, I went for it. That is how it was when I adapted to different cities. That is how it was when I chose Computer Engineering. That is how it was when I helped co-found Insper AI.',
        'Harvard is one more of those moments. Not because I think the university will define who I am. But because I believe the people I will meet, the experiences I will have, and the challenges I will face there can vastly expand what I believe is possible.',
      ],
    },

    photoCollage: {
      tag: 'In pictures',
      title: 'The journey in images',
      subtitle: 'Each photo is a chapter: from a classroom in São Paulo to the campus in Cambridge.',
      photos: [
        { src: '/photos/insper.jpg', caption: 'Computer Engineering class at Insper, 6th semester' },
        { src: '/photos/insper-ai.jpg', caption: 'Insper AI: in-person event at QiTech' },
        { src: '/photos/estagio.jpg', caption: 'Segura.ai: part of the summer 2025 team' },
        { src: '/photos/chicago.jpg', caption: 'UChicago SISRM: first field trip' },
        { src: '/photos/brasil-project.jpg', caption: 'Brasil Project: Harvard & MIT' },
        { src: '/photos/harvard.jpg', caption: 'My sister hugging me with flowers at my acceptance celebration' },
        { src: '/photos/premio.jpg', caption: 'Excellence Award in Computer Engineering, Insper scholarship community, 2025' },
      ],
    },

    originStory: {
      tag: 'Where I come from',
      headline: 'Before Harvard, there were many beginnings.',
      story: [
        'I was born in Pirassununga, São Paulo, where the Brazilian Air Force Academy is located. Because my father is a military officer, moving became a normal part of my life from a very young age.',
        'I am the youngest of four sisters. Growing up surrounded by them was, and still is, one of the most formative things in my life. They are my greatest inspiration, the people I admire most. Every achievement I have built has a piece of them in it.',
        'Over the years, I lived in São José dos Campos, Rio de Janeiro, Brasília, and São Paulo. Every move meant starting over: a new school, new friends, a new routine.',
        'In high school, I studied at Colégio Objetivo on a scholarship and had my first real contact with computing, a seed that years later became Computer Engineering at Insper.',
        'Harvard is not the beginning of my story. It is the next chapter in a journey that started many years ago, across cities, schools, and countries, with four sisters by my side.',
      ],
      journeyLabel: 'The journey',
      cities: [
        { location: 'Pirassununga, SP', title: 'Where it all began', description: 'Born in the city that hosts the Brazilian Air Force Academy.', isNext: false },
        { location: 'São José dos Campos, SP', title: 'Early years', description: 'Childhood shaped by military-family mobility.', isNext: false },
        { location: 'Rio de Janeiro, RJ', title: 'Learning to restart', description: 'Another new city, another new beginning.', isNext: false },
        { location: 'Brasília, DF', title: 'Growing through change', description: 'Years that reinforced independence and adaptability.', isNext: false },
        { location: 'São Paulo, SP', title: 'Insper', description: 'Computer Engineering, scholarship, leadership, teaching, AI, consulting, and research.', isNext: false },
        { location: 'Chicago, USA', title: 'University of Chicago', description: 'Research and quantitative methods at SISRM.', isNext: false },
        { location: 'Cambridge, MA', title: 'Harvard', description: 'The next chapter.', isNext: true },
      ],
    },

    footer: {
      name: 'Maria Carolina Porto',
      tagline: 'Computer Engineering · Insper · Harvard VUS 2026/2027',
      email: 'carolporto04@gmail.com',
      madeWith: 'Made with purpose.',
      copyright: '© 2026 Maria Carolina Porto',
    },
  },
} as const;

export type Content = (typeof content)[Lang];
