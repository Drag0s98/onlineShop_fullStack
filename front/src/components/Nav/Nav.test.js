import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, prettyDOM } from '@testing-library/react';
import Nav from '../Nav';


describe('Nav tests', () => {
    test('Burger Menu Works', async () => {
        const mockHandler = jest.fn()
        const component = render(<Nav mockClick={mockHandler} />)
        const buttonOpen = component.container.querySelector('#react-burger-menu-btn')
        const buttonClose = component.getByText('Close Menu')
        fireEvent.click(buttonOpen)
        expect(mockHandler.mock.calls).toHaveLength(1)
        fireEvent.click(buttonClose)
        expect(mockHandler.mock.calls).toHaveLength(2)
    })
})
