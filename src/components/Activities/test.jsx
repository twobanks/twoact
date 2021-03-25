import { render, screen } from '@testing-library/react'

import Activities from '.'

describe('<Activities />', () => {
  it('should render the heading', () => {
    const { container } = render(<Activities />)

    expect(screen.getByRole('heading', { name: /Activities/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})