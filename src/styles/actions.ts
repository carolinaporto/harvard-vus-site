import { css } from 'styled-components';

export const secondaryAction = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 44px;
  padding: 11px 18px;
  border: 1px solid ${({ theme }) => theme.colors.harvardCrimson};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.harvardCrimson};
  font-size: 14px;
  font-weight: 650;
  line-height: 1.5;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 2px 0 rgba(91, 15, 27, 0.07);
  transition: background 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    background: #F8E9EB;
    box-shadow: 0 3px 8px rgba(91, 15, 27, 0.12);
  }
  &:active { background: #F0D8DC; box-shadow: none; }
`;
