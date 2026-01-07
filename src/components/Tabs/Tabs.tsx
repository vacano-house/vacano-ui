import { StyledContainer, StyledTab } from './styled'
import { TabsProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('tabs')

export const Tabs = ({ className, classnames, onChange, ref, tabs, value, ...rest }: TabsProps) => {
  return (
    <StyledContainer {...rest} ref={ref} className={css('container', className)} role="tablist">
      {tabs.map((tab) => (
        <StyledTab
          key={tab.value}
          type="button"
          role="tab"
          aria-selected={value === tab.value}
          $active={value === tab.value}
          $disabled={Boolean(tab.disabled)}
          disabled={tab.disabled}
          onClick={() => onChange(tab.value)}
          className={css('tab', classnames?.tab)}
        >
          {tab.label}
        </StyledTab>
      ))}
    </StyledContainer>
  )
}
