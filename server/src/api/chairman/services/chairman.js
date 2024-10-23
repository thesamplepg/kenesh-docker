'use strict';

/**
 * chairman service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chairman.chairman');
