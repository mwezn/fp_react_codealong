/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom'
import App from '../App.js'

test('test', ()=>{
    expect(true).toBe(true)
})

describe('App',()=>{
    beforeEach(() => {
        render(<App />)
    })
    test("clears user input after submission", () => {
        const nameInput = screen.getByLabelText('Username')
        userEvent.type(nameInput, "Beth{enter}")
        expect(nameInput.value).toBe("");
      });
})
