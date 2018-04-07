const app = require('./')

describe('default export', () => {
  it('it should find nothing', () => {
    const input = `console.log('yo')`
    const result = app(input)
    expect(result).toEqual([])
  })

  it('should find one', () => {
    const input = `import x from 'x'`
    const result = app(input)
    expect(result).toEqual(['x'])
  })

  it('should find many', () => {
    const input = `import x from 'x'
        import x from 'y'
      `
    const result = app(input)
    expect(result).toEqual([
      'x',
      'y',
    ])
  })

  it('should not depdupe', () => {
    const input = `import x from 'x'
        import x from 'y'
        import x from 'y'
        `
    const result = app(input)
    expect(result).toEqual([
      'x',
      'y',
      'y',
    ])
  })

  it('should sort them for consistency', () => {
    const input = `import x from 'z'
        import x from 'a'
        import x from './a'
        `
    const result = app(input)
    expect(result).toEqual([
      './a',
      'a',
      'z',
    ])
  })

  it('should work for double quotes', () => {
    const input = 'import x from "x"'
    const result = app(input)
    expect(result).toEqual(['x'])
  })

  it('should work for require', () => {
    const input = `import x from 'z'
        const blah = require('../../blah')
        import x from './a'
        `
    const result = app(input)
    expect(result).toEqual([
      '../../blah',
      './a',
      'z',
    ])
  })

  it('should handle //')
  it('should handle /* */')
})
