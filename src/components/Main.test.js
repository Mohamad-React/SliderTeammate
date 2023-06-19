import { render } from '@testing-library/react';
import React from 'react';

import Main from './Main';

import '@testing-library/jest-dom/extend-expect';

describe('Main component', () => {
    const mockPerson = {
        id: 1,
        image: 'test-image.jpg',
        name: 'John Doe',
        title: 'Developer',
        quote: 'This is a test quote'
    };

    const mockPersonIndex = 0;
    const mockIndex = 0;
    const mockSetIndex = jest.fn();
    const mockPeople = [mockPerson];

    test('renders without crashing', () => {
        render(
            <Main
                person={mockPerson}
                personIndex={mockPersonIndex}
                index={mockIndex}
                setIndex={mockSetIndex}
                people={mockPeople}
            />
        );
    });

    test('renders person name, title and quote', () => {
        const { getByText } = render(
            <Main
                person={mockPerson}
                personIndex={mockPersonIndex}
                index={mockIndex}
                setIndex={mockSetIndex}
                people={mockPeople}
            />
        );

        expect(getByText('John Doe')).toBeInTheDocument();
        expect(getByText('Developer')).toBeInTheDocument();
        expect(getByText('This is a test quote')).toBeInTheDocument();
    });
});
