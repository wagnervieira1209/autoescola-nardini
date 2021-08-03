import React from 'react';

import { render, screen } from 'test-utils';

import Home from './Home';

test('renders home page', () => {
    render(<Home />);
    const linkElement = screen.getByText(/matricule-se agora/i);
    expect(linkElement).toBeInTheDocument();
});

