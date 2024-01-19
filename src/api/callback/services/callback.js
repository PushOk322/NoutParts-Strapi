'use strict';

/**
 * callback service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::callback.callback');
