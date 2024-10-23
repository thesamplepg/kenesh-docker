'use strict';

/**
 * broadcast service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::broadcast.broadcast');
