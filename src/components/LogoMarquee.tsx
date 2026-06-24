import styled, { keyframes } from 'styled-components';

const institutions = [
  { name: 'Insper', color: '#C8102E' },
  { name: 'Harvard College', color: '#A51C30' },
  { name: 'Universidade de Chicago', color: '#9B0000' },
  { name: 'BTG Pactual', color: '#1B4F9E' },
  { name: 'Segura.ai', color: '#0A7E6A' },
  { name: 'Brasil Project', color: '#009C3B' },
];

const doubled = [...institutions, ...institutions];

export default function LogoMarquee() {
  return (
    <Strip>
      <FadeEdge $side="left" />
      <FadeEdge $side="right" />
      <Track>
        <Row>
          {doubled.map((inst, i) => (
            <Item key={i}>
              <Dot $color={inst.color} />
              <Name>{inst.name}</Name>
            </Item>
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
  background: #111111;
  overflow: hidden;
  height: 56px;
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

const FadeEdge = styled.div<{ $side: 'left' | 'right' }>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  z-index: 2;
  pointer-events: none;
  ${({ $side }) =>
    $side === 'left'
      ? 'left: 0; background: linear-gradient(to right, #111111, transparent);'
      : 'right: 0; background: linear-gradient(to left, #111111, transparent);'}
`;

const Track = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  animation: ${scroll} 28s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const Item = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 0 36px;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
`;

const Dot = styled.div<{ $color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  flex-shrink: 0;
  box-shadow: 0 0 6px ${({ $color }) => $color}88;
`;

const Name = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  white-space: nowrap;
`;
