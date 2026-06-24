import styled, { keyframes } from 'styled-components';
import { CheckCircle } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function AchievementTicker() {
  const { lang } = useLanguage();
  const items = content[lang].ticker.items;
  const doubled = [...items, ...items];

  return (
    <Strip>
      <FadeEdge $side="left" />
      <FadeEdge $side="right" />
      <Track>
        <Row>
          {doubled.map((item, i) => (
            <Pill key={i}>
              <CheckCircle size={13} weight="fill" />
              {item}
            </Pill>
          ))}
        </Row>
      </Track>
    </Strip>
  );
}

const scroll = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

const Strip = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.deepWine};
  overflow: hidden;
  height: 48px;
  display: flex;
  align-items: center;
`;

const FadeEdge = styled.div<{ $side: 'left' | 'right' }>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 80px;
  z-index: 2;
  pointer-events: none;
  ${({ $side, theme }) =>
    $side === 'left'
      ? `left: 0; background: linear-gradient(to right, ${theme.colors.deepWine}, transparent);`
      : `right: 0; background: linear-gradient(to left, ${theme.colors.deepWine}, transparent);`}
`;

const Track = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  width: max-content;
  animation: ${scroll} 32s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 0 28px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.6px;
  color: rgba(255, 255, 255, 0.82);
  white-space: nowrap;
  border-right: 1px solid rgba(255, 255, 255, 0.12);

  svg {
    color: ${({ theme }) => theme.colors.goldAccent};
    flex-shrink: 0;
  }
`;
