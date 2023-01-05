const mongoose = require('mongoose');
require('dotenv').config();

const Client = require('../models/Client');
const Project = require('../models/Projects');
const { clients, projects } = require('../server/schema/sampleData.js');
const connectDB = require('./config');

const run = async () => {
  // Connect to db
  connectDB();

  console.log('Seeding data...............');

  console.log('Seeding client...............');
  await Client.insertMany(clients);
  console.log('Seeding client completed...............');

  console.log('Seeding project...............');
  await Project.insertMany(projects);
  console.log('Seeding project completed...............');

  console.log('Seeding completed...............');
};

run()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => await mongoose.disconnect());
