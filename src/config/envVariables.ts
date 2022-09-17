import envConfig, { ENV, validationSchema } from "./ConfigBuildVariables";

export interface ConfigVariable {
port: number,
env: ENV
}

export default (variables: NodeJS.ProcessEnv): ConfigVariable => {
    const valid = validationSchema.validate(variables);
    if (valid.error) throw valid.error;
    const value = valid.value as envConfig;
  
    return {
      port: value.PORT,
      env: value.NODE_ENV,
    }
};