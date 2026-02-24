import {
  StyledActions,
  StyledBody,
  StyledContainer,
  StyledContent,
  StyledDescription,
  StyledDot,
  StyledHeader,
  StyledItem,
  StyledLine,
  StyledTitle,
  StyledTrack,
} from './styled'
import { TimelineProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('timeline')

export const Timeline = ({ className, classnames, items, ref, ...rest }: TimelineProps) => {
  return (
    <StyledContainer {...rest} ref={ref} className={css('container', className)}>
      {items.map((item, index) => {
        const last = index === items.length - 1

        return (
          <StyledItem key={index} className={css('item', classnames?.item)}>
            <StyledTrack $last={last}>
              <StyledDot className={css('dot', classnames?.dot)} />
              <StyledLine className={css('line', classnames?.line)} $last={last} />
            </StyledTrack>
            <StyledContent className={css('content', classnames?.content)} $last={last}>
              <StyledHeader>
                <StyledTitle className={css('title', classnames?.title)}>{item.title}</StyledTitle>
                {item.actions && (
                  <StyledActions className={css('actions', classnames?.actions)}>
                    {item.actions}
                  </StyledActions>
                )}
              </StyledHeader>
              {item.description && (
                <StyledDescription className={css('description', classnames?.description)}>
                  {item.description}
                </StyledDescription>
              )}
              {item.content && (
                <StyledBody className={css('body', classnames?.body)}>{item.content}</StyledBody>
              )}
            </StyledContent>
          </StyledItem>
        )
      })}
    </StyledContainer>
  )
}
