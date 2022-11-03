import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import Balloon from './Balloon'

describe('<Balloon/>', () => {
  it('makes balloon go bye bye! when you click on them', async () => {
    render(<Balloon />)
    const balloon = screen.getByTestId('balloon-test')
    await userEvent.click(balloon)
    expect(balloon).toHaveStyle({ 'background-color': ' #faf8f1' })
  })
})
