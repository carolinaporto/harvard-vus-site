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
      p1: 'A aprovação é real. A carta está assinada. Mas o programa VUS de Harvard não oferece bolsa ou auxílio financeiro, então todos os custos ficam por conta do estudante.',
      p2: 'Sou bolsista no Insper e construí minha trajetória por esforço, curiosidade e comunidade. Por isso estou aqui: pedindo ajuda com transparência, profundidade, e profunda gratidão.',
      quote: '"Cada ajuda, de qualquer tamanho, me aproxima um pouco mais desse sonho."',
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
        'Daquela menina que mudava de escola todos os anos até Harvard, muita coisa aconteceu.',
      milestones: [
        {
          year: 'Infância',
          title: 'Filha de militar, 12 escolas e muitos recomeços',
          description:
            'Cresci mudando de cidade e estudando em doze escolas diferentes.',
          phase: 'childhood' as const,
        },
        {
          year: '2023',
          title: 'Insper: Engenharia da Computação',
          description:
            'Foi no Insper que descobri que gosto de construir coisas, ensinar e criar comunidades. Ao longo da graduação, também recebi o Prêmio de Excelência Acadêmica.',
          phase: 'insper' as const,
        },
        {
          year: '2024–2026',
          title: 'Monitora em 5 disciplinas',
          description:
            'Fui monitora em cinco disciplinas. Ensinar se tornou uma das partes mais importantes da minha graduação.',
          phase: 'insper' as const,
        },
        {
          year: '2025',
          title: 'Cofundadora da Insper AI',
          description:
            'Depois da Insper Jr., percebi que faltava um espaço dedicado à IA no Insper. Assim nasceu a Insper AI.',
          phase: 'insper' as const,
        },
        {
          year: '2025–2026',
          title: 'Estágios de férias: Segura.ai & BTG Pactual',
          description:
            'Passei pela Segura.ai, uma startup de tecnologia em seguros, e pelo BTG Pactual, aplicando IA em problemas reais do mercado financeiro.',
          phase: 'transition' as const,
        },
        {
          year: '2026',
          title: 'Brasil Project @ Harvard & MIT',
          description:
            'Fui selecionada pelo Insper para participar presencialmente do Brasil Project em Boston, com atividades em Harvard e MIT. Foi a primeira vez que esse ecossistema deixou de parecer distante e começou a parecer possível.',
          phase: 'harvard' as const,
        },
        {
          year: 'Verão 2026',
          title: 'UChicago SISRM: Bolsa Integral',
          description:
            'Fui selecionada pelo Insper para passar 10 semanas na University of Chicago, no SISRM. Durante o programa, atuo como assistente de pesquisa da professora Jean Clipperton.',
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
          question: 'O que é o programa VUS?',
          answer:
            'O Visiting Undergraduate Students Program (VUS) é um programa do Harvard College para estudantes de outras universidades cursarem um ano acadêmico em Harvard como alunos visitantes. No meu caso, fui aceita para o ano de 2026/2027.',
        },
        {
          question: 'E se a meta não for atingida?',
          answer:
            'Ainda pretendo ir para Harvard. O caminho agora depende de apoio externo — cada contribuição reduz a distância entre a aprovação e a possibilidade real de estudar lá.',
        },
        {
          question: 'Posso ver documentos de comprovação?',
          answer:
            'Sim. Para doadores institucionais, fundações ou apoiadores que precisem verificar a documentação antes de contribuir, posso compartilhar de forma privada meu aceite em Harvard. Preferi não publicar documentos completos no site por privacidade.',
        },
        {
          question: 'Posso ver o orçamento completo?',
          answer:
            'Sim. O resumo acima mostra os principais custos, mas também disponibilizei uma versão completa do orçamento previsto em PDF para quem quiser analisar os detalhes.',
          // TODO: add /public/budget-harvard-vus.pdf before publishing
          link: { text: 'Abrir orçamento completo (PDF)', href: '/budget-harvard-vus.pdf' },
        },
      ],
    },

    ticker: {
      items: [
        '12 escolas diferentes',
        'Bolsista no Insper',
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
        'Sou a caçula de quatro irmãs e cresci em uma família militar, mudando de cidade, escola e rotina desde muito cedo.',
        'Morei em São José dos Campos, Rio de Janeiro, Brasília e São Paulo. Cada mudança significava começar de novo, novos amigos, nova escola e novos desafios. Foi durante esse caminho que descobri a computação, o que mais tarde me levou à Engenharia da Computação no Insper.',
        'Harvard não é o começo da minha história. É o próximo capítulo de uma jornada construída ao longo de muitos anos, com uma família que sempre colocou a educação acima de qualquer outra prioridade.',
      ],
      familyCaption: 'As pessoas que tornaram tudo isso possível.',
      sistersCaption: 'Minhas primeiras referências de coragem, disciplina e ambição.',
      familyQuote: 'Meus pais e minhas irmãs são a razão pela qual eu nunca enxerguei esforço, estudo ou mudança como algo assustador.',
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
      p1: 'The acceptance is real. The letter is signed. But Harvard’s VUS program does not offer scholarships or financial aid, so all costs are the student’s responsibility.',
      p2: 'I am a scholarship student at Insper, and I built my path through effort, curiosity, and community. That is why I am here: asking for help with transparency and with deep gratitude.',
      quote: '"Every donation, connection, and share brings me closer to Harvard."',
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
      subtitle: 'From that girl who changed schools every year to Harvard, a lot has happened.',
      milestones: [
        {
          year: 'Childhood',
          title: 'Military kid, 12 schools, and many fresh starts',
          description:
            'I grew up moving between cities and studying at twelve different schools.',
          phase: 'childhood' as const,
        },
        {
          year: '2023',
          title: 'Insper: Computer Engineering',
          description:
            'At Insper, I discovered that I love building things, teaching, and creating communities. During my undergraduate studies, I also received the Academic Excellence Award.',
          phase: 'insper' as const,
        },
        {
          year: '2024–2026',
          title: 'Teaching Assistant: 5 Subjects',
          description:
            'I served as a teaching assistant in five courses. Teaching became one of the most important parts of my undergraduate experience.',
          phase: 'insper' as const,
        },
        {
          year: '2025',
          title: 'Co-founder of Insper AI',
          description:
            'After going through Insper Jr., I realized there was no dedicated space for AI work at Insper. That is how Insper AI was born.',
          phase: 'insper' as const,
        },
        {
          year: '2025–2026',
          title: 'Summer internships: Segura.ai & BTG Pactual',
          description:
            'I worked at Segura.ai, a tech startup in insurance, and at BTG Pactual, building AI applications for financial markets.',
          phase: 'transition' as const,
        },
        {
          year: '2026',
          title: 'Brasil Project @ Harvard & MIT',
          description:
            'Selected by Insper to attend the Brasil Project in Boston, with sessions at Harvard and MIT. It was the first time that ecosystem stopped feeling distant and started feeling possible.',
          phase: 'harvard' as const,
        },
        {
          year: 'Summer 2026',
          title: 'UChicago SISRM: Full Scholarship',
          description:
            'Selected by Insper to spend 10 weeks at the University of Chicago in the SISRM program. I serve as a research assistant to Professor Jean Clipperton.',
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
          question: 'What is the VUS program?',
          answer:
            'The Visiting Undergraduate Students Program (VUS) is a Harvard College program that allows students from other universities to spend an academic year at Harvard as visiting students. I was accepted for the 2026/2027 academic year.',
        },
        {
          question: 'What if the goal is not fully reached?',
          answer:
            'I still intend to attend Harvard. The path forward depends on external support — every contribution helps close the gap between acceptance and attendance.',
        },
        {
          question: 'Can I see supporting documents?',
          answer:
            'Yes. For institutional donors, foundations, or supporters who need to verify documentation before contributing, I can privately share my Harvard acceptance. I chose not to publish full documents on the website for privacy reasons.',
        },
        {
          question: 'Can I see the full budget?',
          answer:
            'Yes. The summary above shows the main costs, but I also made a full PDF version of the projected budget available for anyone who wants to review the details.',
          // TODO: add /public/budget-harvard-vus.pdf before publishing
          link: { text: 'Open full budget (PDF)', href: '/budget-harvard-vus.pdf' },
        },
      ],
    },

    ticker: {
      items: [
        '12 different schools',
        'Scholarship student at Insper',
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
        'I am the youngest of four sisters and grew up in a military family, moving between cities, schools, and routines from a very young age.',
        'I lived in São José dos Campos, Rio de Janeiro, Brasília, and São Paulo. Every move meant starting over with new friends, a new school, and new challenges. It was during this journey that I discovered my passion for computer science, which later led me to pursue Computer Engineering at Insper.',
        'Harvard is not the beginning of my story. It is the next chapter in a journey built over many years, with a family that always placed education above everything else.',
      ],
      familyCaption: 'The people who made all of this possible.',
      sistersCaption: 'My first examples of courage, discipline, and ambition.',
      familyQuote: 'My parents and my sisters are the reason I never saw effort, study, or change as something frightening.',
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
