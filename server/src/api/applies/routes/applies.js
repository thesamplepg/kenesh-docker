'use strict';

/**
 * applies router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::applies.applies');
