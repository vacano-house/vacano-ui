import { useMemo } from 'react'

import {
  StyledCircle,
  StyledContainer,
  StyledLabel,
  StyledLine,
  StyledStep,
  StyledStepWrapper,
} from './styled'
import { StepperProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('stepper')

export const Stepper = ({
  className,
  classnames,
  onChange,
  orientation = 'horizontal',
  ref,
  steps,
  value,
  ...rest
}: StepperProps) => {
  const currentIndex = useMemo(() => {
    return steps.findIndex((step) => step.value === value)
  }, [steps, value])

  return (
    <StyledContainer
      {...rest}
      ref={ref}
      $orientation={orientation}
      className={css('container', className)}
    >
      {steps.map((step, index) => {
        const isActive = step.value === value
        const isCompleted = index < currentIndex
        const isLast = index === steps.length - 1

        return (
          <StyledStepWrapper key={step.value} $orientation={orientation}>
            <StyledStep
              type="button"
              $active={isActive}
              $completed={isCompleted}
              $clickable={Boolean(onChange)}
              onClick={() => onChange?.(step.value)}
              className={css('step', classnames?.step)}
            >
              <StyledCircle
                $active={isActive}
                $completed={isCompleted}
                className={css('circle', classnames?.circle)}
              >
                {index + 1}
              </StyledCircle>
              <StyledLabel
                $active={isActive}
                $completed={isCompleted}
                className={css('label', classnames?.label)}
              >
                {step.label}
              </StyledLabel>
            </StyledStep>
            {!isLast && (
              <StyledLine
                $completed={isCompleted}
                $orientation={orientation}
                className={css('line', classnames?.line)}
              />
            )}
          </StyledStepWrapper>
        )
      })}
    </StyledContainer>
  )
}
