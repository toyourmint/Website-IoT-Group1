'use strict';

module.exports = {

  async register() {},

  async bootstrap({ strapi }) {

    console.log("🌱 Running Seed Script...");

    await require('./seeds/information')(strapi);
    await require('./seeds/professor')(strapi);

    console.log("✅ Seed Completed");

  },

};