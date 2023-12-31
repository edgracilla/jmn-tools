import pino from 'pino';

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: { translateTime: true },
  },
});

export default logger;
