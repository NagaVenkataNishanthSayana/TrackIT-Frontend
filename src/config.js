export const config = {
    dev: {
        base:
            'https://trackit-backend.herokuapp.com/api/',
        version: 'v1',
    },
};

// Get the base URL for all API requests
export const getBaseUrl = () => {
    const env = 'dev';
    const { base, version } = config[env];
    return base + version;
};