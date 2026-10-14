import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';
import { useModal } from '../context/ModalContext';
import { donationCount } from '../data/content';
import { useDonors } from '../hooks/useDonors';

const MEDALS = ['🥇', '🥈', '🥉'];
const MEDAL_COLORS = ['#D4A843', '#9BA8B5', '#B07B4A'];

const copy = {
  pt: {
    title: 'Quem está tornando isso real',
    donations: ' doações',
    others: 'Outros apoiadores',
    messages: 'Mensagens de apoio',
    loading: 'Carregando apoiadores e mensagens…',
    unavailable: 'Não foi possível carregar os apoiadores e as mensagens agora.',
    empty: 'Os apoiadores e suas mensagens aparecerão aqui assim que estiverem disponíveis.',
    retry: 'Tentar novamente',
    previous: 'Mensagem anterior',
    next: 'Próxima mensagem',
    message: 'Ver mensagem',
    footer: 'Quer aparecer aqui?',
    donate: 'Doe agora →',
  },
  en: {
    title: 'The people making this real',
    donations: ' donations',
    others: 'Other supporters',
    messages: 'Messages of support',
    loading: 'Loading supporters and messages…',
    unavailable: 'Supporters and messages could not be loaded right now.',
    empty: 'Supporters and their messages will appear here as soon as they are available.',
    retry: 'Try again',
    previous: 'Previous message',
    next: 'Next message',
    message: 'View message',
    footer: 'Want to be listed here?',
    donate: 'Donate now →',
  },
};

export default function SupportersCard({ compact = false }: { compact?: boolean }) {
  const { lang } = useLanguage();
  const { openModal } = useModal();
  const { donors, top3, chips, overflow, loading, error, configured, retry } = useDonors();
  const [quoteIndex, setQuoteIndex] = useState(0);
  const headingId = useId();
  const t = copy[lang];
  const withMessages = donors.filter(donor => donor.message);
  const activeIndex = withMessages.length ? quoteIndex % withMessages.length : 0;
  const activeQuote = withMessages[activeIndex];
  const unavailable = !configured || error;

  const previousQuote = () => setQuoteIndex((activeIndex + withMessages.length - 1) % withMessages.length);
  const nextQuote = () => setQuoteIndex((activeIndex + 1) % withMessages.length);

  return (
    <RankingCard $compact={compact} aria-labelledby={headingId} aria-busy={loading}>
      <RankingHeader>
        <RankingHeaderTop>
          <RankingTitle as={compact ? 'h2' : 'h3'} id={headingId}>{t.title}</RankingTitle>
          {donationCount > 0 && <DonationBadge><strong>{donationCount}</strong>{t.donations}</DonationBadge>}
        </RankingHeaderTop>
      </RankingHeader>

      {donors.length === 0 ? (
        <Status role="status">
          <p>{loading ? t.loading : unavailable ? t.unavailable : t.empty}</p>
          {!loading && error && configured && <RetryButton type="button" onClick={retry}>{t.retry}</RetryButton>}
        </Status>
      ) : (
        <>
          <RankingBody $split={compact && Boolean(activeQuote)}>
            <SupportersList>
              {top3.length > 0 && (
                <PodiumRow>
                  {top3.map((donor, index) => (
                    <PodiumSlot key={donor.id} $accent={MEDAL_COLORS[index]}>
                      <Medal aria-hidden="true">{MEDALS[index]}</Medal>
                      <PodiumName>{donor.name}</PodiumName>
                    </PodiumSlot>
                  ))}
                </PodiumRow>
              )}
              {chips.length > 0 && (
                <ChipsSection>
                  <ChipsLabel>{t.others}</ChipsLabel>
                  <ChipsRow>
                    {chips.map(donor => <Chip key={donor.id}>{donor.name}</Chip>)}
                    {overflow > 0 && <Chip $muted>+{overflow}</Chip>}
                  </ChipsRow>
                </ChipsSection>
              )}
            </SupportersList>

            {activeQuote && (
              <QuoteSection $compact={compact} aria-label={t.messages}>
                <ChipsLabel>{t.messages}</ChipsLabel>
                <div aria-live="polite" aria-atomic="true">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeQuote.id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.22 }}
                    >
                      <QuoteMark aria-hidden="true">"</QuoteMark>
                      <QuoteText>{activeQuote.message}</QuoteText>
                      <QuoteAuthor>{activeQuote.name}</QuoteAuthor>
                    </motion.div>
                  </AnimatePresence>
                </div>
                {withMessages.length > 1 && (
                  <QuoteControls>
                    <QuoteNavBtn type="button" onClick={previousQuote} aria-label={t.previous}>
                      <CaretLeft size={14} weight="bold" aria-hidden="true" />
                    </QuoteNavBtn>
                    <QuoteDots>
                      {withMessages.map((donor, index) => (
                        <Dot key={donor.id} type="button" $active={index === activeIndex}
                          onClick={() => setQuoteIndex(index)} aria-label={`${t.message} ${index + 1}`}
                          aria-pressed={index === activeIndex} />
                      ))}
                    </QuoteDots>
                    <QuoteNavBtn type="button" onClick={nextQuote} aria-label={t.next}>
                      <CaretRight size={14} weight="bold" aria-hidden="true" />
                    </QuoteNavBtn>
                  </QuoteControls>
                )}
              </QuoteSection>
            )}
          </RankingBody>
          {error && (
            <Status role="status">
              <p>{loading ? t.loading : t.unavailable}</p>
              {!loading && <RetryButton type="button" onClick={retry}>{t.retry}</RetryButton>}
            </Status>
          )}
        </>
      )}

      <RankingFooter>
        {t.footer}{' '}<FooterLink type="button" onClick={openModal}>{t.donate}</FooterLink>
      </RankingFooter>
    </RankingCard>
  );
}

const RankingCard = styled.section<{ $compact: boolean }>`
  min-width: 0;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ $compact }) => $compact ? '0 4px 18px rgba(91, 15, 27, 0.04)' : '0 24px 64px rgba(0, 0, 0, 0.22), 0 4px 16px rgba(0, 0, 0, 0.12)'};
`;

const RankingHeader = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.harvardDarkCrimson}, ${({ theme }) => theme.colors.harvardCrimson});
  padding: 20px 22px 18px;
`;

const RankingHeaderTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

const RankingTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.3;
`;

const DonationBadge = styled.div`
  background: rgba(255, 255, 255, 0.18);
  border-radius: 100px;
  padding: 3px 10px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
  white-space: nowrap;
  flex-shrink: 0;
  strong { font-weight: 700; color: ${({ theme }) => theme.colors.white}; }
`;

const RankingBody = styled.div<{ $split: boolean }>`
  display: grid;
  grid-template-columns: ${({ $split }) => $split ? 'repeat(2, minmax(0, 1fr))' : 'minmax(0, 1fr)'};
  @media (max-width: ${({ theme }) => theme.bp.tablet}) { grid-template-columns: minmax(0, 1fr); }
`;

const SupportersList = styled.div`
  min-width: 0;
  padding-bottom: 18px;
`;

const PodiumRow = styled.div`
  display: flex;
  gap: 1px;
  padding: 16px 16px 0;
  background: ${({ theme }) => theme.colors.white};
`;

const PodiumSlot = styled.div<{ $accent: string }>`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 14px 6px 16px;
  border-bottom: 3px solid ${({ $accent }) => $accent};
  border-radius: 10px 10px 0 0;
  background: ${({ $accent }) => $accent}12;
  transition: background 0.2s ease;
  &:hover { background: ${({ $accent }) => $accent}22; }
`;

const Medal = styled.span`
  font-size: 22px;
  line-height: 1;
`;

const PodiumName = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkText};
  text-align: center;
  line-height: 1.3;
  word-break: break-word;
`;

const ChipsSection = styled.div`
  padding: 14px 18px 0;
  background: ${({ theme }) => theme.colors.white};
`;

const ChipsLabel = styled.p`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mutedText};
  margin-bottom: 8px;
  opacity: 0.8;
`;

const ChipsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Chip = styled.span<{ $muted?: boolean }>`
  padding: 4px 11px;
  background: ${({ $muted, theme }) => ($muted ? theme.colors.border : theme.colors.softGray)};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ $muted, theme }) => ($muted ? theme.colors.mutedText : theme.colors.darkText)};
  overflow-wrap: anywhere;
`;

const QuoteSection = styled.div<{ $compact: boolean }>`
  min-width: 0;
  padding: 18px 20px;
  background: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  @media (min-width: 769px) {
    ${({ $compact, theme }) => $compact && `border-top: 0; border-left: 1px solid ${theme.colors.border}; padding: 24px;`}
  }
`;

const QuoteMark = styled.span`
  display: block;
  font-size: 48px;
  line-height: 0.65;
  color: ${({ theme }) => theme.colors.harvardCrimson};
  opacity: 0.15;
  font-family: Georgia, serif;
  margin-bottom: -4px;
  user-select: none;
`;

const QuoteText = styled.p`
  font-size: 14px;
  line-height: 1.7;
  font-style: italic;
  color: ${({ theme }) => theme.colors.darkText};
  min-height: 64px;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
`;

const QuoteAuthor = styled.p`
  margin-top: 10px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mutedText};
  overflow-wrap: anywhere;
`;

const QuoteControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 14px;
  padding-bottom: 4px;
`;

const QuoteNavBtn = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.mutedText};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.harvardCrimson};
    border-color: ${({ theme }) => theme.colors.harvardCrimson};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const QuoteDots = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 2px;
  flex: 1;
  min-width: 0;
  justify-content: center;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => $active ? '24px' : '14px'};
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  &::after {
    content: '';
    width: ${({ $active }) => $active ? '18px' : '6px'};
    height: 6px;
    border-radius: 100px;
    background: ${({ $active, theme }) => $active ? theme.colors.harvardCrimson : theme.colors.border};
    transition: all 0.25s ease;
  }
`;

const Status = styled.div`
  padding: 28px 22px;
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 14px;
  line-height: 1.7;
`;

const RetryButton = styled.button`
  margin-top: 14px;
  padding: 9px 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.harvardCrimson};
  font-size: 13px;
  font-weight: 600;
  &:hover { background: ${({ theme }) => theme.colors.warmOffWhite}; }
`;

const RankingFooter = styled.div`
  padding: 14px 20px 18px;
  background: ${({ theme }) => theme.colors.warmOffWhite};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.mutedText};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const FooterLink = styled.button`
  color: ${({ theme }) => theme.colors.harvardCrimson};
  font-size: inherit;
  font-weight: 700;
  transition: opacity 0.18s ease;
  &:hover { opacity: 0.7; }
`;
