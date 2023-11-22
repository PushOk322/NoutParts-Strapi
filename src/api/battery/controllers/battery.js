'use strict';

/**
 * battery controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::battery.battery');
