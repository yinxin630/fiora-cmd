import React from 'react';
import { render, Box } from 'ink';

import './socket';

import Login from './modules/Login';

function App() {
    return (
        <Box>
            <Login />
        </Box>
    );
}

render(<App />);
