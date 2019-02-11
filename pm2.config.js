module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'api',
      script    : 'bin/api',
      cwd       : '/usr/src/app/wicked.api',
      env: {
        NODE_ENV: 'box',
        DEBUG: '',
        LOG_LEVEL: 'info'
      }
    },
    {
      name      : 'ui',
      script    : 'bin/www',
      cwd       : '/usr/src/app/wicked.ui',
      env: {
        PORTAL_API_URL: 'http://localhost:3001',
        LOG_LEVEL: 'info'
      }
    },
    {
      name      : 'kong-adapter',
      script    : 'dist/bin/kong-adapter.js',
      cwd       : '/usr/src/app/wicked.kong-adapter',
      env: {
        PORTAL_API_URL: 'http://localhost:3001',
        LOG_LEVEL: 'info'
      }
    },
    {
      name      : 'auth',
      script    : 'dist/authz.js',
      cwd       : '/usr/src/app/wicked.auth',
      env: {
        PORTAL_API_URL: 'http://localhost:3001',
        LOG_LEVEL: 'info'
      }
    },
    {
      name      : 'mailer',
      script    : 'bin/mailer',
      cwd       : '/usr/src/app/wicked.mailer',
      env: {
        PORTAL_API_URL: 'http://localhost:3001',
        LOG_LEVEL: 'info'
      }
    },
    {
      name      : 'chatbot',
      script    : 'bin/chatbot',
      cwd       : '/usr/src/app/wicked.chatbot',
      env: {
        PORTAL_API_URL: 'http://localhost:3001',
        LOG_LEVEL: 'info'
      }
    }
  ],

  /**
   * Deployment section - not needed/makes no sense for wicked here.
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
  }
};
