import pino from "pino";
import pretty from "pino-pretty";

const createDevLogger = (serviceName: string): pino.Logger => {
  const stream = pretty({
    colorize: true,
    translateTime: "SYS:standard",
  });
  return pino(stream);
};
export default createDevLogger;
