import styled from '@emotion/styled'

import { COLORS } from '../../lib'

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-height: 100dvh;
  padding: 40px 24px;
  overflow: hidden;
`

export const StyledGrid = styled.div<{ $size: number }>`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(${COLORS.gray} 1px, transparent 1px),
    linear-gradient(90deg, ${COLORS.gray} 1px, transparent 1px);
  background-size: ${({ $size }) => `${$size}px ${$size}px`};
  mask-image: radial-gradient(ellipse 60% 50% at 50% 40%, black 20%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 60% 50% at 50% 40%, black 20%, transparent 100%);
  pointer-events: none;
`

export const StyledInner = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
`

export const StyledLogo = styled.div`
  margin-bottom: 32px;
`

export const StyledIconBox = styled.div`
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
  margin-bottom: 24px;
`

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  margin-bottom: 32px;
`

export const StyledTitle = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: ${COLORS.black};
  line-height: 1.3;
`

export const StyledDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${COLORS['iron-grey']};
  line-height: 1.5;
  max-width: 360px;
`

export const StyledContent = styled.div`
  width: 100%;
`

export const StyledFooter = styled.div`
  margin-top: 32px;
  text-align: center;
  font-size: 14px;
  color: ${COLORS['iron-grey']};
`
