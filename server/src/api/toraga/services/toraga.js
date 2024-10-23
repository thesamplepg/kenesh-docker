'use strict';

/**
 * toraga service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::toraga.toraga');
