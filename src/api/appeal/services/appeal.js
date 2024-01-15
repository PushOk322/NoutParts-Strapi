'use strict';

/**
 * appeal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::appeal.appeal');
