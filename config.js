const env = process.env;

export const nodeEnv = env.ONDE_ENV || 'development';
export default {
    port: env.PORT || 8080
};