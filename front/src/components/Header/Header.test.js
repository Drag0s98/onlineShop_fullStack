import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, prettyDOM } from '@testing-library/react';
import Header from "./Header";

describe('Header tests', () => {
    test('Have a title', () => {
        const component = render(<Header />)
        component.getByText('MERN-Shop')
    })
})