const { spawn } = require('child_process');
const path = require('path');

const root = path.resolve(__dirname, '..');
let shuttingDown = false;

function start(command, args, options = {}) {
    const child = spawn(command, args, {
        cwd: root,
        stdio: 'inherit',
        shell: true,
        ...options
    });

    child.on('exit', (code, signal) => {
        if (!shuttingDown && (signal || (code && code !== 0))) {
            process.exitCode = code;
            shutdown(signal || 'SIGTERM');
        }
    });

    return child;
}

const client = start('npm', ['run', 'start']);
const server = start('node', ['server/index.js']);

function shutdown(signal) {
    shuttingDown = true;
    client.kill(signal);
    server.kill(signal);
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
