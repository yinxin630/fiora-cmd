import React, { useState } from 'react';
import { Box, Static } from 'ink';
import TextInput from 'ink-text-input';

import { login } from '../service';

enum Step {
    Username,
    Password,
}

export default function Login() {
    const [step, setStep] = useState(Step.Username);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function stepToPassword() {
        setStep(Step.Password);
    }

    async function handleLogin() {
        const result = await login(username, password);
        console.log(result);
    }

    return (
        <Box flexDirection="column">
            <Box>========= 登录 =========</Box>
            <Box>
                用户名:
                {
                    step === Step.Password && <Box>{username}</Box>
                }
                {step === Step.Username && (
                    <TextInput value={username} onChange={setUsername} onSubmit={stepToPassword} />
                )}
            </Box>
            <Box>
                密  码:
                {step === Step.Password && (
                    <TextInput value={password} onChange={setPassword} onSubmit={handleLogin} mask="*" />
                )}
            </Box>
        </Box>
    );
}
