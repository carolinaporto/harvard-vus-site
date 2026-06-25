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
      headline1: 'Harvard não é o começo da minha história.',
      headline2: 'É o próximo capítulo.',
      subtitle:
        'Cresci mudando de cidade, recomeçando amizades e aprendendo a me adaptar. Hoje sou bolsista no Insper, fui aceita em Harvard e estou arrecadando recursos para transformar essa oportunidade em realidade.',
      cta1: 'Doe Agora',
      cta2: 'Minha Trajetória',
      cta3: 'Compartilhar',
      scrollHint: 'Conheça minha história',
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
        statusItems: [
          { label: 'Aceite em Harvard', status: 'confirmado', variant: 'confirmed' as const },
          { label: 'Programa', status: 'confirmado', variant: 'confirmed' as const },
          { label: 'Próximas etapas', status: 'contratáveis', variant: 'actionable' as const },
          { label: 'Financiamento', status: 'em aberto', variant: 'open' as const },
        ],
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
      progressNote: 'Atualizado semanalmente · Última atualização: 25 de junho de 2026',
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
          title: 'Filha de militar, 12 escolas e muitos recomeços',
          description:
            'Pirassununga, São José dos Campos, Rio de Janeiro, Brasília. Doze escolas, um recomeço constante. Primeiro contato com programação pelo CS50 de Harvard. Foi o que me fez querer ir fundo.',
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
          year: '2025',
          title: 'Cofundadora da Insper AI',
          description:
            'Depois de passar pela Insper Jr., percebi que faltava um espaço dedicado a IA de verdade dentro do Insper. Cofundei a Insper AI para aproximar alunos de ML, pesquisa, hackathons e do ecossistema de tecnologia.',
          phase: 'insper' as const,
        },
        {
          year: '2025–2026',
          title: 'Estágios de Férias: Segura.ai & BTG Pactual',
          description:
            'Passei por experiências em duas organizações muito diferentes: a Segura.ai, uma startup de tecnologia focada em seguros, e o BTG Pactual, onde trabalhei com aplicações de IA para trading. Foram oportunidades para aplicar engenharia, dados e IA em problemas reais.',
          phase: 'transition' as const,
        },
        {
          year: '2026',
          title: 'Brasil Project @ Harvard & MIT',
          description:
            'Participei presencialmente em Harvard e no MIT. Foi a primeira vez que esse ecossistema deixou de parecer distante e começou a parecer possível.',
          phase: 'harvard' as const,
        },
        {
          year: 'Verão 2026',
          title: 'UChicago SISRM: Bolsa Integral',
          description:
            'Selecionada com bolsa integral para o Summer Institute in Social Research Methods da University of Chicago. Durante o programa, atuo como assistente de pesquisa da professora Jean Clipperton, combinando métodos quantitativos, tecnologia e ciências sociais.',
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
      tag: 'O que ainda estou descobrindo',
      title: 'A pergunta que me trouxe até aqui',
      subtitle:
        'Eu não quero escolher meu futuro antes de estar pronta. Harvard é uma chance de continuar procurando com mais repertório, mais pessoas e mais coragem.',
      pillars: [
        {
          title: 'Ainda estou escolhendo minha pergunta',
          description:
            'Não sei exatamente qual problema quero dedicar minha vida para resolver. Harvard não é onde espero encontrar respostas prontas. É onde espero encontrar perguntas melhores.',
          iconKey: 'book',
        },
        {
          title: 'Quando algo faz falta, eu tento criar',
          description:
            'Foi assim com a Insper AI. Sempre que sinto falta de alguma coisa, meu impulso costuma ser construir.',
          iconKey: 'brain',
        },
        {
          title: 'Quero conviver com gente que me desafia',
          description:
            'As melhores decisões da minha vida vieram de conversas com pessoas que enxergavam o mundo diferente de mim.',
          iconKey: 'network',
        },
        {
          title: 'Quero continuar procurando melhor',
          description:
            'Harvard não é um destino final. É o melhor lugar que encontrei até agora para continuar explorando.',
          iconKey: 'globe',
        },
      ],
    },

    donate: {
      tag: 'Como você pode ajudar',
      title: 'Junte-se a essa história',
      subtitle:
        'Existem várias formas de me aproximar de Harvard. Escolha a que faz mais sentido para você.',
      pixTitle: 'PIX',
      pixSubtitle: 'Doação via PIX (Brasil)',
      pixKey: 'a3988327-e1a8-49a2-bafe-461bc3bfb345',
      pixAmountsNote: 'Não existe valor pequeno demais. Para dar uma referência:',
      pixAmounts: [
        { amount: 'R$ 100', label: 'ajuda com alimentação e despesas do dia a dia' },
        { amount: 'R$ 500', label: 'ajuda a cobrir uma semana de custos básicos' },
        { amount: 'R$ 1.000', label: 'ajuda a reduzir uma parte importante das despesas mensais' },
      ],
      intlTitle: 'Transferência Internacional',
      intlSubtitle: 'Para doadores fora do Brasil',
      shareTitle: 'Compartilhe',
      shareSubtitle: 'Compartilhamento também é doação',
      shareText:
        'Compartilhar essa página com alguém que possa ajudar, ou simplesmente continuar essa história, já faz uma diferença enorme.',
      connectTitle: 'Me conecte',
      connectText:
        'Conhece uma fundação, alumni da Insper ou Harvard, uma empresa ou organização que apoie talentos brasileiros? Me envie um e-mail.',
      emailBtn: 'carolporto04@gmail.com',
      shareWhatsApp: 'WhatsApp',
      shareLinkedIn: 'LinkedIn',
      shareInstagram: 'Instagram',
      shareCopy: 'Copiar link',
      shareCopied: 'Link copiado!',
      instagramCopied: 'Texto copiado para compartilhar no Instagram',
      whatsappMessage:
        'Oi! Uma amiga minha foi aceita para estudar em Harvard e está arrecadando fundos para conseguir ir. Vale muito a pena conhecer a história dela:',
      instagramMessage:
        'Uma amiga minha foi aceita para estudar em Harvard e está arrecadando fundos para conseguir ir. Conheça a história dela e compartilhe se puder:',
    },

    faq: {
      tag: 'Dúvidas frequentes',
      title: 'Perguntas frequentes',
      items: [
        {
          question: 'Você já foi aceita em Harvard?',
          answer:
            'Sim. Fui oficialmente aceita para o programa Visiting Undergraduate Students (VUS) do Harvard College para o ano acadêmico 2026/2027.',
        },
        {
          question: 'Para onde vai o dinheiro, exatamente?',
          answer:
            'Diretamente para custos reais e documentáveis: moradia em Cambridge, alimentação, seguro saúde obrigatório, visto, materiais acadêmicos, transporte e despesas do dia a dia. Não há intermediários, e posso prestar contas a doadores que solicitarem.',
        },
        {
          question: 'Como posso ajudar?',
          answer:
            'De várias formas: fazendo uma doação (qualquer valor ajuda), compartilhando essa página, ou me conectando com fundações, alumni do Insper ou de Harvard, empresas ou qualquer pessoa que possa apoiar. Para conversar, tirar dúvidas ou receber o comprovante de aceitação antes de qualquer decisão, me envie um e-mail em carolporto04@gmail.com.',
        },
        {
          question: 'E se a meta não for atingida?',
          answer:
            'Ainda pretendo ir para Harvard. Também estou buscando bolsas, apoio institucional e outras formas de financiamento. Cada contribuição reduz a distância entre a aprovação e a possibilidade real de estudar lá.',
        },
        {
          question: 'Posso ver documentos de comprovação?',
          answer:
            'Sim. Para doadores institucionais, fundações ou apoiadores que precisem verificar a documentação antes de contribuir, posso compartilhar de forma privada meu aceite em Harvard. Preferi não publicar documentos completos no site por privacidade.',
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
        '12 escolas diferentes',
        'Bolsa de 50% no Insper',
        'Monitora em 5 disciplinas',
        'Cofundadora da Insper AI',
        'Bolsa integral na University of Chicago',
        'Brasil Project @ Harvard & MIT',
        'Aceita em Harvard College',
        'Filha de militar',
      ],
    },

    pullQuotes: {
      one: 'Aprendi a recomeçar antes de entender que isso era uma habilidade.',
    },

    photoCollage: {
      tag: 'Em cenas',
      title: 'A trajetória em imagens',
      subtitle: 'Cada foto é um capítulo: da sala de aula em São Paulo ao campus de Cambridge.',
      photos: [
        { src: '/photos/infancia.jpg', caption: 'De farda, filha de militar' },
        { src: '/photos/insper.jpg', caption: 'Turma de Eng. da Computação no Insper, 6º semestre' },
        { src: '/photos/insper-ai.jpg', caption: 'Insper AI: evento presencial na QiTech' },
        { src: '/photos/estagio.jpg', caption: 'Segura.ai: parte do time no verão 2025' },
        { src: '/photos/chicago.jpg', caption: 'UChicago SISRM: primeira visita de campo' },
        { src: '/photos/premio.jpg', caption: 'Prêmio de Excelência em Eng. da Computação, comunidade bolsista Insper, 2025' },
        { src: '/photos/brasil-project.jpg', caption: 'Brasil Project: quando Harvard deixou de parecer inalcançável' },
        { src: '/photos/harvard.jpg', caption: 'Março 2026: A aprovação chegou' },
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
        'Harvard não é o começo da minha história. É o próximo capítulo de uma jornada construída ao longo de muitos anos, em cidades, escolas e países diferentes, com quatro irmãs ao meu lado e pais que sempre colocaram a educação dos filhos acima de qualquer outra prioridade.',
      ],
      familyCaption: 'As pessoas que tornaram tudo isso possível.',
      sistersCaption: 'Minhas primeiras referências de coragem, disciplina e ambição.',
      familyQuote: 'Meus pais e minhas irmãs são a razão pela qual eu nunca enxerguei esforço, estudo ou mudança como algo assustador.',
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
      headline1: 'Harvard is not the beginning of my story.',
      headline2: 'It is the next chapter.',
      subtitle:
        'I grew up moving from city to city, starting over more times than I can count, and learning how to adapt along the way. Today, I am a scholarship student at Insper, accepted to Harvard, and raising funds to make this opportunity possible.',
      cta1: 'Donate Now',
      cta2: 'My Journey',
      cta3: 'Share',
      scrollHint: 'Read my story',
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
        statusItems: [
          { label: 'Harvard acceptance', status: 'confirmed', variant: 'confirmed' as const },
          { label: 'Program', status: 'confirmed', variant: 'confirmed' as const },
          { label: 'Next steps', status: 'actionable', variant: 'actionable' as const },
          { label: 'Funding', status: 'open', variant: 'open' as const },
        ],
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
      progressNote: 'Updated weekly · Last updated: June 25, 2026',
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
          title: 'Military kid, 12 schools, and many fresh starts',
          description:
            'Pirassununga, São José dos Campos, Rio de Janeiro, Brasília. Twelve schools, a constant fresh start. First contact with programming through Harvard\'s CS50. That is what made me go all in.',
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
          year: '2025',
          title: 'Co-founder of Insper AI',
          description:
            'After going through Insper Jr., I realized there was no dedicated space for real AI work at Insper. I co-founded Insper AI to bring students closer to ML, research, hackathons, and the broader tech ecosystem.',
          phase: 'insper' as const,
        },
        {
          year: '2025–2026',
          title: 'Summer Internships: Segura.ai & BTG Pactual',
          description:
            'Two very different organizations: Segura.ai, a technology startup focused on insurance, and BTG Pactual, where I worked with AI applications for trading. Both were opportunities to apply engineering, data, and AI to real problems.',
          phase: 'transition' as const,
        },
        {
          year: '2026',
          title: 'Brasil Project @ Harvard & MIT',
          description:
            'I attended in person at Harvard and MIT. It was the first time that ecosystem stopped feeling distant and started feeling possible.',
          phase: 'harvard' as const,
        },
        {
          year: 'Summer 2026',
          title: 'UChicago SISRM: Full Scholarship',
          description:
            'Selected with a full scholarship to the Summer Institute in Social Research Methods at the University of Chicago. During the program, I serve as a research assistant to Professor Jean Clipperton, combining quantitative methods, technology, and social sciences.',
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
      tag: 'What I am still figuring out',
      title: 'The question that brought me here',
      subtitle:
        'I do not want to choose my future before I am ready. Harvard is a chance to keep searching with more perspective, more people, and more courage.',
      pillars: [
        {
          title: 'I am still choosing my question',
          description:
            'I do not know exactly what problem I want to dedicate my life to solving. Harvard is not where I expect to find ready-made answers. It is where I hope to find better questions.',
          iconKey: 'book',
        },
        {
          title: 'When something is missing, I try to build it',
          description:
            'That is how Insper AI happened. Whenever I feel something is missing, my instinct is usually to build.',
          iconKey: 'brain',
        },
        {
          title: 'I want to be around people who challenge me',
          description:
            'Some of the best decisions in my life came from conversations with people who saw the world differently than I did.',
          iconKey: 'network',
        },
        {
          title: 'I want to keep searching better',
          description:
            'Harvard is not a final destination. It is the best place I have found so far to keep exploring.',
          iconKey: 'globe',
        },
      ],
    },

    donate: {
      tag: 'How you can help',
      title: 'Join this story',
      subtitle:
        'There are several ways to bring me closer to Harvard. Choose what makes the most sense for you.',
      pixTitle: 'PIX',
      pixSubtitle: 'Donation via PIX (Brazil)',
      pixKey: 'a3988327-e1a8-49a2-bafe-461bc3bfb345',
      pixAmountsNote: 'No amount is too small. As a reference:',
      pixAmounts: [
        { amount: 'R$ 100', label: 'helps with food and daily expenses' },
        { amount: 'R$ 500', label: 'helps cover one week of basic costs' },
        { amount: 'R$ 1,000', label: 'helps reduce a meaningful part of monthly expenses' },
      ],
      intlTitle: 'International Transfer',
      intlSubtitle: 'For donors outside Brazil',
      shareTitle: 'Share',
      shareSubtitle: 'Sharing is also donating',
      shareText:
        'Sharing this page with someone who might help, or simply continuing this story, already makes a huge difference.',
      connectTitle: 'Connect me',
      connectText:
        'Do you know a foundation, Insper or Harvard alumnus, a company, or an organization that supports Brazilian talent? Send me an email.',
      emailBtn: 'carolporto04@gmail.com',
      shareWhatsApp: 'WhatsApp',
      shareLinkedIn: 'LinkedIn',
      shareInstagram: 'Instagram',
      shareCopy: 'Copy link',
      shareCopied: 'Copied!',
      instagramCopied: 'Text copied to share on Instagram',
      whatsappMessage:
        "Hi! A friend of mine was accepted to study at Harvard and is fundraising to make it possible. Her story is worth reading:",
      instagramMessage:
        'A friend of mine was accepted to study at Harvard and is fundraising to make it possible. Read her story and share it if you can:',
    },

    faq: {
      tag: 'Frequently asked questions',
      title: 'FAQ',
      items: [
        {
          question: 'Were you really accepted to Harvard?',
          answer:
            'Yes. I was officially accepted to the Visiting Undergraduate Students (VUS) program at Harvard College for the 2026/2027 academic year.',
        },
        {
          question: 'Where exactly does the money go?',
          answer:
            'Directly to real, documented costs: housing in Cambridge, food, mandatory health insurance, visa logistics, academic materials, transportation, and daily living expenses. There are no intermediaries, and I can report back to donors who request it.',
        },
        {
          question: 'How can I help?',
          answer:
            "In several ways: making a donation (any amount helps), sharing this page, or connecting me with foundations, Insper or Harvard alumni, companies, or anyone who might support. To chat, ask questions, or receive my acceptance letter before deciding, email me at carolporto04@gmail.com.",
        },
        {
          question: 'What if the goal is not fully reached?',
          answer:
            'I still intend to attend Harvard. I am also pursuing scholarships, institutional support, and other funding opportunities. Every contribution helps close the gap between acceptance and attendance.',
        },
        {
          question: 'Can I see supporting documents?',
          answer:
            'Yes. For institutional donors, foundations, or supporters who need to verify documentation before contributing, I can privately share my Harvard acceptance. I chose not to publish full documents on the website for privacy reasons.',
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
        '12 different schools',
        '50% scholarship at Insper',
        'Teaching assistant: 5 subjects',
        'Co-founder of Insper AI',
        'Full scholarship at University of Chicago',
        'Brasil Project @ Harvard & MIT',
        'Accepted to Harvard College',
        'Military kid',
      ],
    },

    pullQuotes: {
      one: 'I learned to begin again before I understood that was a skill.',
    },

    photoCollage: {
      tag: 'In pictures',
      title: 'The journey in images',
      subtitle: 'Each photo is a chapter: from a classroom in São Paulo to the campus in Cambridge.',
      photos: [
        { src: '/photos/infancia.jpg', caption: 'In uniform, military kid' },
        { src: '/photos/insper.jpg', caption: 'Computer Engineering class at Insper, 6th semester' },
        { src: '/photos/insper-ai.jpg', caption: 'Insper AI: in-person event at QiTech' },
        { src: '/photos/estagio.jpg', caption: 'Segura.ai: part of the summer 2025 team' },
        { src: '/photos/chicago.jpg', caption: 'UChicago SISRM: first field trip' },
        { src: '/photos/premio.jpg', caption: 'Excellence Award in Computer Engineering, Insper scholarship community, 2025' },
        { src: '/photos/brasil-project.jpg', caption: 'Brasil Project: when Harvard stopped feeling unreachable' },
        { src: '/photos/harvard.jpg', caption: 'March 2026: Received the Acceptance Letter' },
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
        'Harvard is not the beginning of my story. It is the next chapter in a journey built over many years, across cities, schools, and countries, with four sisters by my side and parents who always placed their children\'s education above everything else.',
      ],
      familyCaption: 'The people who made all of this possible.',
      sistersCaption: 'My first examples of courage, discipline, and ambition.',
      familyQuote: 'My parents and my sisters are the reason I never saw effort, study, or change as something frightening.',
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
