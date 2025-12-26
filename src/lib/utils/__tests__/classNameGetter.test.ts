import { describe, expect, it } from 'vitest'

import { classNameGetter } from '../classNameGetter'

describe('classNameGetter', () => {
  it('returns a function', () => {
    const css = classNameGetter('button')

    expect(typeof css).toBe('function')
  })

  describe('returned function', () => {
    it('generates class name with prefix, component name, and element', () => {
      const css = classNameGetter('button')

      expect(css('container')).toBe('vacano_button_container')
    })

    it('works with different component names', () => {
      const buttonCss = classNameGetter('button')
      const inputCss = classNameGetter('input')

      expect(buttonCss('wrapper')).toBe('vacano_button_wrapper')
      expect(inputCss('wrapper')).toBe('vacano_input_wrapper')
    })

    it('works with different element names', () => {
      const css = classNameGetter('card')

      expect(css('header')).toBe('vacano_card_header')
      expect(css('body')).toBe('vacano_card_body')
      expect(css('footer')).toBe('vacano_card_footer')
    })

    it('appends additional class names', () => {
      const css = classNameGetter('button')

      expect(css('container', 'custom-class')).toBe('vacano_button_container custom-class')
    })

    it('appends multiple additional class names', () => {
      const css = classNameGetter('button')

      expect(css('container', 'class-one', 'class-two')).toBe(
        'vacano_button_container class-one class-two',
      )
    })

    it('ignores undefined class names', () => {
      const css = classNameGetter('button')

      expect(css('container', undefined)).toBe('vacano_button_container')
      expect(css('container', 'valid', undefined)).toBe('vacano_button_container valid')
      expect(css('container', undefined, 'valid', undefined)).toBe('vacano_button_container valid')
    })

    it('handles mixed defined and undefined class names', () => {
      const css = classNameGetter('button')
      const className: string | undefined = undefined
      const customClass = 'custom'

      expect(css('container', className, customClass)).toBe('vacano_button_container custom')
    })
  })
})
