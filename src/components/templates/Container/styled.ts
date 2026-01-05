import styled from '@emotion/styled'

import { CONTAINER_MAX_WIDTHS } from './constants'
import { mediaUp } from '../../../lib'

export const StyledContainer = styled.div`
  width: 100%;

  ${mediaUp('sm')} {
    max-width: ${CONTAINER_MAX_WIDTHS.sm};
  }

  ${mediaUp('md')} {
    max-width: ${CONTAINER_MAX_WIDTHS.md};
  }

  ${mediaUp('lg')} {
    max-width: ${CONTAINER_MAX_WIDTHS.lg};
  }

  ${mediaUp('xl')} {
    max-width: ${CONTAINER_MAX_WIDTHS.xl};
  }

  ${mediaUp('2xl')} {
    max-width: ${CONTAINER_MAX_WIDTHS['2xl']};
  }
`
