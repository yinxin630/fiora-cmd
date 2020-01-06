import React from 'react';
import { render, Box } from 'ink';

import Login from './Login';

function App() {
    return (
        <Box>
            <Box>app page</Box>
            <Login />
        </Box>
    );
}

render(<App />);
