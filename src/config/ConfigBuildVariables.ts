import joi from 'joi';
export enum ENV {
  DEV,
  PRODUCTION,
}
export interface EnvConfig{
    PORT: number,
    NODE_ENV: ENV,
}

export const validationSchema = joi
  .object<EnvConfig>({
  PORT: joi.number().default(5001),
  NODE_ENV: joi
    .string()
    .valid(...Object.keys(ENV).filter((key) => Number.isNaN(Number(key))))
    .default(ENV.DEV),
})
  .unknown(true);

export default EnvConfig;