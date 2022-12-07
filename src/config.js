export const config = {
    dev: {
        base:
            'https://trackit-backend.herokuapp.com/api/',
        version: 'v1',
    },
};

export const getBaseUrl = () => {
    const env = 'dev';
    const { base, version } = config[env];
    return base + version;
};