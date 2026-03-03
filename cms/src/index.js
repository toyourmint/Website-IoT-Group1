'use strict';

module.exports = {

  async register() {},

  async bootstrap({ strapi }) {

    if (process.env.NODE_ENV !== "development") return;

    console.log("🌱 Running Seed Script...");

    await require('./seeds/information')(strapi);
    await require('./seeds/professor')(strapi);

  },

};