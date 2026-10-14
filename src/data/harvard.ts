import type { Lang } from '../context/LanguageContext';

interface Course {
  id: string;
  institution: string;
  code: string;
  title: string;
  subtitle?: string;
  faculty: string;
  theme: string;
  reason: string;
  learning: string;
  source: string;
}

interface CommunityGroup {
  id: 'tech' | 'mentoring' | 'people' | 'beyond';
  title: string;
  body: string;
}

interface SemesterContent {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  semester: string;
  location: string;
  heroPhotoAlt: string;
  photoStatement: string;
  photoStatementAccent: string;
  courseLink: string;
  lifeLink: string;
  coursesLabel: string;
  coursesTitle: string;
  coursesIntro: string;
  reasonLabel: string;
  reflectionLabel: string;
  facultyLabel: string;
  sourceLabel: string;
  courses: Course[];
  lifeLabel: string;
  lifeTitle: string;
  lifeIntro: string;
  communityPhotosLabel: string;
  communityGroups: CommunityGroup[];
  communityPhotos: Array<{ src: string; alt: string; caption: string; width: number; height: number }>;
  brazil: {
    title: string;
    body: string;
    role: string;
  };
  supportLabel: string;
  supportTitle: string;
  supportBody: string;
  supportButton: string;
}

// Course names, codes and faculty are checked against the official sources below.
// The first-person reflections and extracurricular activities come from Carolina's account.
const courseSources = {
  globalization: 'https://gened.college.harvard.edu/directory/the-political-economy-of-globalization/',
  neuroAI: 'https://my.harvard.edu/course/GENED1201/2026-Fall/Full-Term/001',
  ventures: 'https://catalog.mit.edu/subjects/mas/',
};

export const harvardContent: Record<Lang, SemesterContent> = {
  pt: {
    eyebrow: 'Em Harvard · Primeiro semestre',
    title: 'Um semestre para',
    titleAccent: 'expandir meu mundo.',
    intro: 'Vim explorar assuntos, conhecer pessoas e descobrir possibilidades além da Engenharia da Computação. Este é um pouco do meu primeiro semestre em Harvard.',
    semester: 'Outono de 2026',
    location: 'Cambridge, Massachusetts',
    heroPhotoAlt: 'Carol com um moletom de Harvard, ao ar livre entre as árvores do campus.',
    photoStatement: 'Meu repertório está crescendo.',
    photoStatementAccent: 'Minha ambição também.',
    courseLink: 'Minhas matérias',
    lifeLink: 'Além da sala de aula',
    coursesLabel: 'Dentro da sala de aula',
    coursesTitle: 'Três matérias, novos pontos de vista.',
    coursesIntro: 'Duas disciplinas em Harvard e uma no MIT, por cross-registration.',
    reasonLabel: 'Por que escolhi',
    reflectionLabel: 'O que estou aprendendo',
    facultyLabel: 'Com',
    sourceLabel: 'Sobre a disciplina',
    courses: [
      {
        id: 'globalization',
        institution: 'Harvard',
        code: 'GENED 1120',
        title: 'The Political Economy of Globalization',
        faculty: 'Robert Lawrence e Dani Rodrik',
        theme: 'Política, economia e mundo',
        reason: 'Queria entender o mundo pela política, economia e história, indo além da minha formação em engenharia.',
        learning: 'Como política e economia se influenciam e ajudam a explicar o comércio, as desigualdades entre países e as dinâmicas globais.',
        source: courseSources.globalization,
      },
      {
        id: 'neuroai',
        institution: 'Harvard',
        code: 'GENED 1201',
        title: 'Foundations of NeuroAI',
        subtitle: 'Synergies Between the Sciences of Natural and Artificial Intelligence',
        faculty: 'Talia Konkle',
        theme: 'Mente, cérebro e inteligência artificial',
        reason: 'Sempre tive curiosidade sobre a mente e quis explorar psicologia e neurociência em diálogo com a IA.',
        learning: 'O que conecta a inteligência biológica à artificial e como estudar o cérebro pode ajudar a compreender sistemas de IA (e vice-versa).',
        source: courseSources.neuroAI,
      },
      {
        id: 'ventures',
        institution: 'MIT · Cross-registration',
        code: 'MAS.883[J] / 15.128[J]',
        title: 'Revolutionary Ventures',
        subtitle: 'How to Invent and Deploy Transformative Technologies',
        faculty: 'Ed Boyden, Joost Bonsen e Joseph Jacobson',
        theme: 'Ambição e construção',
        reason: 'Queria ampliar minha ambição e construir algo que me apaixone, inclusive para além do semestre.',
        learning: 'Com uma turma de trajetórias diversas, estou descobrindo novos problemas e setores e aprendendo, na prática, a transformar ideias em projetos.',
        source: courseSources.ventures,
      },
    ],
    lifeLabel: 'Além da sala de aula',
    lifeTitle: 'Como estou vivendo Harvard.',
    lifeIntro: 'Gosto de criar e fazer parte de comunidades. Aqui, estou trocando ideias, descobrindo outras perspectivas e fazendo amizades.',
    communityPhotosLabel: 'Fotos com visiting students e HUBA',
    communityGroups: [
      {
        id: 'tech',
        title: 'Explorando computação e IA',
        body: 'Estou participando da **Harvard Computer Society** (HCS) e da **Women in Computer Science** (WiCS). Também estou aprofundando meus estudos em segurança de IA no **AI Safety Technical Fellowship**.',
      },
      {
        id: 'mentoring',
        title: 'Compartilhando o que já aprendi',
        body: 'Estou atuando como **mentora no Big O/Little o**, da **Harvard Computer Society**, trocando experiências e apoiando outros estudantes em seus caminhos na computação.',
      },
      {
        id: 'people',
        title: 'Construindo amizades',
        body: 'Estou conhecendo pessoas de diferentes lugares e criando laços dentro e fora do campus. Os encontros com brasileiros da **HUBA** e outros **visiting students** também fazem parte dessa convivência.',
      },
      {
        id: 'beyond',
        title: 'Experimentando coisas novas',
        body: 'Estou participando de eventos de **empreendedorismo** e conversando com quem está criando empresas e projetos. Também estou participando do **clube de tênis**, aprendendo um esporte que sempre quis jogar.',
      },
    ],
    communityPhotos: [
      {
        src: '/photos/semester-friends.jpg',
        alt: 'Carol com visiting students reunidos ao redor de mesas.',
        caption: 'Com visiting students. As amizades fazem parte de tudo isso.',
        width: 1800,
        height: 1012,
      },
      {
        src: '/photos/community-gathering.jpg',
        alt: 'Carol em um encontro ao ar livre com a HUBA (Harvard Undergraduate Brazilian Association).',
        caption: 'Com a HUBA (Harvard Undergraduate Brazilian Association).',
        width: 1024,
        height: 682,
      },
    ],
    brazil: {
      title: 'Brasil Project 2027',
      body: 'Participei em 2026 e hoje estou ajudando a organizar a edição de 2027, na liderança de operações, com dois estudantes de MBA do MIT Sloan.',
      role: 'Liderança · Operações',
    },
    supportLabel: 'Faça parte dos próximos capítulos',
    supportTitle: 'Essa história continua sendo construída com apoio.',
    supportBody: 'Já estou em Harvard, e a campanha continua. Sua contribuição me ajuda a cobrir os custos desse ano e a seguir vivendo as experiências que compartilho aqui.',
    supportButton: 'Apoie essa história',
  },
  en: {
    eyebrow: 'At Harvard · First semester',
    title: 'A semester to',
    titleAccent: 'expand my world.',
    intro: 'I came to explore new subjects, meet people, and discover possibilities beyond Computer Engineering. Here is a little of my first semester at Harvard.',
    semester: 'Fall 2026',
    location: 'Cambridge, Massachusetts',
    heroPhotoAlt: 'Carol wearing a Harvard sweatshirt outdoors among the campus trees.',
    photoStatement: 'My perspective is growing.',
    photoStatementAccent: 'So is my ambition.',
    courseLink: 'My courses',
    lifeLink: 'Beyond the classroom',
    coursesLabel: 'Inside the classroom',
    coursesTitle: 'Three courses, new ways of thinking.',
    coursesIntro: 'Two courses at Harvard and one at MIT through cross-registration.',
    reasonLabel: 'Why I chose it',
    reflectionLabel: 'What I am learning',
    facultyLabel: 'With',
    sourceLabel: 'About the course',
    courses: [
      {
        id: 'globalization',
        institution: 'Harvard',
        code: 'GENED 1120',
        title: 'The Political Economy of Globalization',
        faculty: 'Robert Lawrence and Dani Rodrik',
        theme: 'Politics, economics, and the world',
        reason: 'I wanted to understand the world through politics, economics, and history, beyond my engineering background.',
        learning: 'How politics and economics influence each other and help explain trade, inequality between countries, and global dynamics.',
        source: courseSources.globalization,
      },
      {
        id: 'neuroai',
        institution: 'Harvard',
        code: 'GENED 1201',
        title: 'Foundations of NeuroAI',
        subtitle: 'Synergies Between the Sciences of Natural and Artificial Intelligence',
        faculty: 'Talia Konkle',
        theme: 'Mind, brain, and artificial intelligence',
        reason: 'I have always been curious about the mind and wanted to explore psychology and neuroscience alongside AI.',
        learning: 'What connects biological and artificial intelligence, and how studying the brain can help us understand AI systems (and vice versa).',
        source: courseSources.neuroAI,
      },
      {
        id: 'ventures',
        institution: 'MIT · Cross-registration',
        code: 'MAS.883[J] / 15.128[J]',
        title: 'Revolutionary Ventures',
        subtitle: 'How to Invent and Deploy Transformative Technologies',
        faculty: 'Ed Boyden, Joost Bonsen, and Joseph Jacobson',
        theme: 'Ambition and building',
        reason: 'I wanted to expand my ambition and build something I am passionate about, beyond this semester.',
        learning: 'Alongside classmates from diverse backgrounds, I am discovering new problems and industries and learning, through practice, to turn ideas into projects.',
        source: courseSources.ventures,
      },
    ],
    lifeLabel: 'Beyond the classroom',
    lifeTitle: 'How I am making Harvard my own.',
    lifeIntro: 'I love building and being part of communities. Here, I am exchanging ideas, discovering new perspectives, and making friends.',
    communityPhotosLabel: 'Photos with visiting students and HUBA',
    communityGroups: [
      {
        id: 'tech',
        title: 'Exploring computing and AI',
        body: 'I am taking part in the **Harvard Computer Society** (HCS) and **Women in Computer Science** (WiCS). I am also deepening my understanding of AI safety through the **AI Safety Technical Fellowship**.',
      },
      {
        id: 'mentoring',
        title: 'Sharing what I have learned',
        body: 'I am **mentoring through Big O/Little o**, a **Harvard Computer Society** program, sharing experiences and supporting other students as they find their paths in computing.',
      },
      {
        id: 'people',
        title: 'Building friendships',
        body: 'I am meeting people from different places and building connections on and off campus. Spending time with fellow Brazilians in **HUBA** and other **visiting students** is also part of that experience.',
      },
      {
        id: 'beyond',
        title: 'Trying new things',
        body: 'I am attending **entrepreneurship** events and talking with people building companies and projects. I am also taking part in the **tennis club**, learning a sport I have always wanted to play.',
      },
    ],
    communityPhotos: [
      {
        src: '/photos/semester-friends.jpg',
        alt: 'Carol with visiting students gathered around tables.',
        caption: 'With visiting students. Friendships are part of it all.',
        width: 1800,
        height: 1012,
      },
      {
        src: '/photos/community-gathering.jpg',
        alt: 'Carol at an outdoor gathering with HUBA (Harvard Undergraduate Brazilian Association).',
        caption: 'With HUBA (Harvard Undergraduate Brazilian Association).',
        width: 1024,
        height: 682,
      },
    ],
    brazil: {
      title: 'Brasil Project 2027',
      body: 'After attending in 2026, I am now helping organize the 2027 conference on the operations leadership team with two MIT Sloan MBA students.',
      role: 'Leadership · Operations',
    },
    supportLabel: 'Be part of the next chapters',
    supportTitle: 'This story continues with your support.',
    supportBody: 'I am already at Harvard, and the campaign continues. Your contribution helps cover the costs of this year and makes it possible to keep having the experiences I share here.',
    supportButton: 'Support this story',
  },
};
