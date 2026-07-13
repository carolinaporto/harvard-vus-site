import type { Lang } from '../context/LanguageContext';


// ─── Atualizar contagem total de doações ──────────────────────────────────────
export const donationCount = 36;
// ─────────────────────────────────────────────────────────────────────────────

// ─── Atualizar aqui quando o valor arrecadado mudar ───────────────────────────
const lastUpdated = {
  pt: '12 de Julho de 2026',
  en: 'July 12, 2026',
};
// ─────────────────────────────────────────────────────────────────────────────

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
        'Cresci mudando de cidade e recomeçando do zero tantas vezes que aprendi a ler qualquer ambiente novo rápido, e a enxergar o que falta nele. Hoje sou bolsista no Insper com média 9,48/10, fui aceita em Harvard e estou arrecadando recursos para tornar essa oportunidade real.',
      cta1: 'Doe Agora',
      cta2: 'Minha Trajetória',
      cta3: 'Compartilhar',
      scrollHint: 'Conheça minha história',
    },

    whyHelp: {
      tag: 'Transparência',
      title: 'Por que estou pedindo ajuda',
      p1: 'A aprovação é real. A carta está assinada. Mas o programa VUS de Harvard não oferece bolsa ou auxílio financeiro, então todos os custos ficam por conta do estudante.',
      p2: 'Sou bolsista no Insper e cheguei até aqui construindo coisas — projetos, comunidades, oportunidades que não existiam antes. Por isso estou aqui: pedindo ajuda com transparência, humildade e profunda gratidão.',
      quote: '"Cada ajuda, de qualquer tamanho, me aproxima um pouco mais desse sonho."',
    },

    funding: {
      tag: 'Transparência financeira',
      title: 'Para onde vai o dinheiro',
      subtitle:
        'Tuition, moradia, alimentação e seguro saúde: os quatro maiores custos, para os dois semestres.',
      goalLabel: 'Meta: 2 semestres',
      goalValue: 'US$ 83.514',
      raisedLabel: 'Arrecadado até agora',
      raisedValue: 'US$ 0',
      progressPercent: 0,
      progressNote: `Última atualização: ${lastUpdated.pt}`,
      categories: [
        { label: 'Tuition e Taxas', note: 'US$ 51.675, inclui tuition (3 disciplinas), taxas acadêmicas e materiais', iconKey: 'book' },
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
          title: '10 escolas, 6 cidades, muitos recomeços',
          description:
            'Cresci mudando de cidade e estudando em dez escolas diferentes. Aprendi a recomeçar antes de entender que isso era uma habilidade.',
          phase: 'childhood' as const,
        },
        {
          year: '2023',
          title: 'Insper: Engenharia da Computação',
          description:
            'Foi no Insper que descobri que gosto de construir coisas, ensinar e criar comunidades. Tenho média 9,48/10 e recebi o Prêmio de Excelência Acadêmica na Engenharia da Computação.',
          link: { text: 'Ver histórico acadêmico (PDF)', href: '/EN-Transcript_MAR26_InsperSigned.pdf' },
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
      pixAmountsNote: 'Para ter uma ideia do impacto em Cambridge:',
      pixAmounts: [
        { amount: 'R$ 100', label: 'cobre 1 dia de alimentação em Cambridge' },
        { amount: 'R$ 500', label: 'cobre quase 1 semana de alimentação em Cambridge' },
        { amount: 'R$ 3.000', label: 'cobre 1 mês de seguro saúde obrigatório para estudantes internacionais' },
        { amount: 'R$ 5.000', label: 'cobre 1 mês de alimentação e seguro saúde' },
        { amount: 'R$ 10.000', label: 'cobre 1 mês inteiro de moradia' },
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
        'Uma estudante brasileira foi aceita no Harvard College VUS e está arrecadando fundos para tornar isso possível. Vale conhecer a história:',
      instagramMessage:
        'Uma estudante brasileira foi aceita no Harvard College VUS e está arrecadando fundos para tornar isso possível. Vale conhecer a história:',
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
          link: { text: 'Abrir orçamento completo (PDF)', href: '/budget-harvard-vus.pdf' },
        },
        {
          question: 'Posso ver seu histórico acadêmico?',
          answer:
            'Sim. O histórico oficial emitido pelo Insper, com todas as disciplinas e notas, está disponível abaixo. Minha média geral é 9,48/10.',
          link: { text: 'Abrir histórico acadêmico (PDF)', href: '/EN-Transcript_MAR26_InsperSigned.pdf' },
        },
      ],
    },

    donors: {
      tag: 'Apoiadores',
      title: 'Quem está tornando isso real',
      subtitle: 'Em ordem de contribuição. Obrigada de coração.',
    },

    ticker: {
      items: [
        '10 escolas diferentes',
        'Bolsista no Insper',
        'Monitora em 5 disciplinas',
        'Cofundadora da Insper AI',
        'Bolsa integral na University of Chicago',
        'Brasil Project @ Harvard & MIT',
        'Aceita em Harvard College',
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
        { src: '/photos/premio.jpg', caption: 'Prêmio de Excelência em Eng. da Computação, comunidade bolsista Insper, 2025' },
        { src: '/photos/brasil-project.jpg', caption: 'Brasil Project: quando Harvard deixou de parecer inalcançável' },
        { src: '/photos/infancia.jpg', caption: 'De farda, filha de militar' },
        { src: '/photos/harvard.jpg', caption: 'Março 2026: A aprovação chegou' },
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
        'I grew up moving between cities and starting over so many times that I learned to read any new environment quickly, and to see what is missing in it. Today I am a scholarship student at Insper with a 9.48/10 GPA, accepted to Harvard, and raising funds to make this opportunity real.',
      cta1: 'Donate Now',
      cta2: 'My Journey',
      cta3: 'Share',
      scrollHint: 'Read my story',
    },

    whyHelp: {
      tag: 'Transparency',
      title: 'Why I am asking for help',
      p1: 'The acceptance is real. The letter is signed. But Harvard’s VUS program does not offer scholarships or financial aid, so all costs are the student’s responsibility.',
      p2: 'I am a scholarship student at Insper, and I got here by building things — projects, communities, opportunities that did not exist before. That is why I am here: asking for help with transparency, humility, and deep gratitude.',
      quote: '"Every donation, connection, and share brings me closer to Harvard."',
    },

    funding: {
      tag: 'Financial transparency',
      title: 'Where the money goes',
      subtitle:
        'Tuition, housing, food, and health insurance: the four biggest costs, for both semesters.',
      goalLabel: 'Goal: 2 semesters',
      goalValue: 'US$ 83,514',
      raisedLabel: 'Raised so far',
      raisedValue: 'US$ 0',
      progressPercent: 0,
      progressNote: `Last updated: ${lastUpdated.en}`,
      categories: [
        { label: 'Tuition and Fees', note: '$51,675, includes tuition (3 courses), academic fees, and materials', iconKey: 'book' },
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
          title: '10 schools, 6 cities, many fresh starts',
          description:
            'I grew up moving between cities and studying at ten different schools. I learned to begin again before I understood that was a skill.',
          phase: 'childhood' as const,
        },
        {
          year: '2023',
          title: 'Insper: Computer Engineering',
          description:
            'At Insper, I discovered that I love building things, teaching, and creating communities. I hold a 9.48/10 GPA and received the Academic Excellence Award in Computer Engineering.',
          link: { text: 'View academic transcript (PDF)', href: '/EN-Transcript_MAR26_InsperSigned.pdf' },
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
      pixAmountsNote: 'Here\'s what each amount covers in Cambridge:',
      pixAmounts: [
        { amount: 'R$ 100', label: 'covers 1 day of food in Cambridge' },
        { amount: 'R$ 500', label: 'covers almost 1 week of food in Cambridge' },
        { amount: 'R$ 3,000', label: 'covers 1 month of mandatory health insurance for international students' },
        { amount: 'R$ 5,000', label: 'covers 1 month of food and health insurance' },
        { amount: 'R$ 10,000', label: 'covers a full month of housing' },
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
        'A Brazilian student was accepted to the Harvard College VUS program and is raising funds to make it possible. Her story is worth reading:',
      instagramMessage:
        'A Brazilian student was accepted to the Harvard College VUS program and is raising funds to make it possible. Her story is worth reading:',
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
          link: { text: 'Open full budget (PDF)', href: '/budget-harvard-vus.pdf' },
        },
        {
          question: 'Can I see your academic transcript?',
          answer:
            'Yes. My official transcript issued by Insper, with all courses and grades, is available below. My overall GPA is 9.48/10.',
          link: { text: 'Open academic transcript (PDF)', href: '/EN-Transcript_MAR26_InsperSigned.pdf' },
        },
      ],
    },

    donors: {
      tag: 'Supporters',
      title: 'The people making this real',
      subtitle: 'In order of contribution. Thank you from the bottom of my heart.',
    },

    ticker: {
      items: [
        '10 different schools',
        'Scholarship student at Insper',
        'Teaching assistant: 5 subjects',
        'Co-founder of Insper AI',
        'Full scholarship at University of Chicago',
        'Brasil Project @ Harvard & MIT',
        'Accepted to Harvard College',
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
        { src: '/photos/premio.jpg', caption: 'Excellence Award in Computer Engineering, Insper scholarship community, 2025' },
        { src: '/photos/brasil-project.jpg', caption: 'Brasil Project: when Harvard stopped feeling unreachable' },
        { src: '/photos/infancia.jpg', caption: 'In uniform, military kid' },
        { src: '/photos/harvard.jpg', caption: 'March 2026: Received the Acceptance Letter' },
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
