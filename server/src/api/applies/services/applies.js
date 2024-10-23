'use strict';

/**
 * applies service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::applies.applies');
