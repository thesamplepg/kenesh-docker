'use strict';

/**
 * broadcast router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::broadcast.broadcast');
