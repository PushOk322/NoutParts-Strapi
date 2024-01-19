'use strict';

/**
 * callback router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::callback.callback');
