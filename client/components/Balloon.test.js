import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import Balloon from './Balloon'

describe('<Balloon/>', () => {
  it('makes balloon disappear when you click on them', async () => {
    render(<Balloon />)

    const balloon = screen.getAllByTestId('balloon-test')
    console.log('ballon', balloon)
    await userEvent.click(balloon[0])
    expect(balloon[0]).toHaveStyle({ 'background-color': ' #faf8f1' })
  })
})
