'use strict';

/**
 * deputy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::deputy.deputy');
