import socket from './socket';

function fetch(event: string, data: any): Promise<[any, any]> {
    return new Promise((resolve) => {
        socket.emit(event, data, (result: any) => {
            if (typeof result === 'string') {
                resolve([result, null]);
            } else {
                resolve([null, result]);
            }
        });
    });
}

export function login(username: string, password: string) {
    return fetch('login', { username, password });
}
