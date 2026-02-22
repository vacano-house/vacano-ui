import { useCallback, useState } from 'react'

import {
  StyledChevron,
  StyledChevronPlaceholder,
  StyledContainer,
  StyledDuration,
  StyledHeader,
  StyledLineNumber,
  StyledLineText,
  StyledLog,
  StyledLogInner,
  StyledLogLine,
  StyledLogWrapper,
  StyledStatusIcon,
  StyledStep,
  StyledTitle,
} from './styled'
import { type StepLogProps, type StepLogStatus } from './types'
import { ChevronRight } from '../../icons/Lucide/components/ChevronRight'
import { Circle } from '../../icons/Lucide/components/Circle'
import { CircleCheck } from '../../icons/Lucide/components/CircleCheck'
import { CircleX } from '../../icons/Lucide/components/CircleX'
import { LoaderCircle } from '../../icons/Lucide/components/LoaderCircle'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('step-log')

const STATUS_ICONS: Record<StepLogStatus, typeof CircleCheck> = {
  success: CircleCheck,
  error: CircleX,
  running: LoaderCircle,
  pending: Circle,
}

export const StepLog = ({
  className,
  classnames,
  defaultValue = [],
  onChange,
  ref,
  steps,
  value: controlledValue,
  ...rest
}: StepLogProps) => {
  const [internalValue, setInternalValue] = useState<string[]>(defaultValue)

  const isControlled = controlledValue !== undefined
  const expanded = isControlled ? controlledValue : internalValue

  const toggle = useCallback(
    (stepValue: string) => {
      const isExpanded = expanded.includes(stepValue)
      const next = isExpanded ? expanded.filter((v) => v !== stepValue) : [...expanded, stepValue]

      if (!isControlled) {
        setInternalValue(next)
      }

      onChange?.(next)
    },
    [expanded, isControlled, onChange],
  )

  return (
    <StyledContainer {...rest} ref={ref} className={css('container', className)}>
      {steps.map((step) => {
        const isExpanded = expanded.includes(step.value)
        const status = step.status ?? 'pending'
        const isInteractive = status !== 'pending'
        const hasLines = step.lines && step.lines.length > 0
        const StatusIcon = STATUS_ICONS[status]

        return (
          <StyledStep key={step.value} className={css('step', classnames?.step)}>
            <StyledHeader
              type="button"
              $expanded={isExpanded}
              $interactive={isInteractive}
              onClick={isInteractive ? () => toggle(step.value) : undefined}
              className={css('header', classnames?.header)}
            >
              {isInteractive ? (
                <StyledChevron $expanded={isExpanded}>
                  <ChevronRight size={14} />
                </StyledChevron>
              ) : (
                <StyledChevronPlaceholder />
              )}

              <StyledStatusIcon $status={status}>
                <StatusIcon size={16} />
              </StyledStatusIcon>

              <StyledTitle $muted={status === 'pending'}>{step.title}</StyledTitle>

              {step.duration && <StyledDuration>{step.duration}</StyledDuration>}
            </StyledHeader>

            {isInteractive && hasLines && (
              <StyledLogWrapper $expanded={isExpanded}>
                <StyledLogInner>
                  <StyledLog className={css('log', classnames?.log)}>
                    {step.lines!.map((logLine) => (
                      <StyledLogLine key={logLine.line}>
                        <StyledLineNumber>{logLine.line}</StyledLineNumber>
                        <StyledLineText>{logLine.text}</StyledLineText>
                      </StyledLogLine>
                    ))}
                  </StyledLog>
                </StyledLogInner>
              </StyledLogWrapper>
            )}
          </StyledStep>
        )
      })}
    </StyledContainer>
  )
}
