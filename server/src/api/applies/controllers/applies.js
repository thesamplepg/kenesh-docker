'use strict';

/**
 * applies controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::applies.applies');
