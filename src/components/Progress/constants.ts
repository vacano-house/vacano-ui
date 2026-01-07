import { VacanoComponentSize } from '../../lib'

export const PROGRESS_SIZE_PROPS: Record<VacanoComponentSize, { height: number; radius: number }> =
  {
    compact: {
      height: 4,
      radius: 2,
    },
    default: {
      height: 8,
      radius: 4,
    },
  }
