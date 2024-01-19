'use strict';

/**
 * callback controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::callback.callback');
