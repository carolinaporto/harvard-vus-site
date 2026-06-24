export const theme = {
  colors: {
    harvardCrimson: '#A51C30',
    harvardDarkCrimson: '#7A1020',
    insperRed: '#C8102E',
    deepWine: '#5B0F1B',
    warmOffWhite: '#FFF8F2',
    softGray: '#F5F5F5',
    darkText: '#1F1F1F',
    mutedText: '#666666',
    goldAccent: '#D6A756',
    white: '#FFFFFF',
    border: '#E8E0D8',
  },
  fonts: {
    heading: "'Playfair Display', Georgia, 'Times New Roman', serif",
    body: "'Inter', system-ui, -apple-system, sans-serif",
  },
  bp: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  maxWidth: '1200px',
} as const;

export type Theme = typeof theme;
