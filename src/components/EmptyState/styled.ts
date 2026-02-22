import styled from '@emotion/styled'

import { COLORS } from '../../lib'

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 24px;
`

export const StyledIconArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin-bottom: 16px;
`

export const StyledRings = styled.div`
  position: absolute;
  inset: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    border: 1px solid ${COLORS.gray};
  }

  &::before {
    inset: 30px;
    opacity: 0.8;
  }

  &::after {
    inset: 8px;
    opacity: 0.5;
  }
`

export const StyledRingsOuter = styled.div`
  position: absolute;
  inset: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    border: 1px solid ${COLORS.gray};
  }

  &::before {
    inset: -14px;
    opacity: 0.3;
  }

  &::after {
    inset: 52px;
  }
`

export const StyledIconBox = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  border: 1px solid ${COLORS.gray};
  background-color: ${COLORS.white};
  color: ${COLORS['iron-grey']};
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.05),
    0 1px 3px rgba(0, 0, 0, 0.1);
`

export const StyledTitle = styled.h3`
  margin: 0 0 4px;
  font-size: 16px;
  font-weight: 600;
  color: ${COLORS.black};
  line-height: 1.4;
`

export const StyledDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${COLORS['iron-grey']};
  line-height: 1.5;
  max-width: 360px;
`

export const StyledActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
`
