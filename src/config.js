export const config = {
    dev: {
        base:
            'http://localhost:8080/api/',
        version: 'v1',
    },
};

export const getBaseUrl = () => {
    const env = 'dev';
    const { base, version } = config[env];
    return base + version;
};