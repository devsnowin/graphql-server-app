const mongoose = require('mongoose');

const projects = [
  {
    id: new mongoose.Types.ObjectId(),
    clientId: new mongoose.Types.ObjectId(),
    name: 'Design Prototype',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, architecto! Velit esse qui cumque laudantium earum nulla dicta illo, itaque id natus quisquam, deleniti non. Amet, excepturi. Dolorum, voluptates. At saepe sequi provident nam necessitatibus, quas odio! Cumque, magni a.',
    status: 'Done',
  },
  {
    id: new mongoose.Types.ObjectId(),
    clientId: new mongoose.Types.ObjectId(),
    name: 'Markdown Template',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, architecto! Velit esse qui cumque laudantium earum nulla dicta illo, itaque id natus quisquam, deleniti non. Amet, excepturi. Dolorum, voluptates. At saepe sequi provident nam necessitatibus, quas odio! Cumque, magni a.',
    status: 'In Progress',
  },
  {
    id: new mongoose.Types.ObjectId(),
    clientId: new mongoose.Types.ObjectId(),
    name: 'House Keeping App',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, architecto! Velit esse qui cumque laudantium earum nulla dicta illo, itaque id natus quisquam, deleniti non. Amet, excepturi. Dolorum, voluptates. At saepe sequi provident nam necessitatibus, quas odio! Cumque, magni a.',
    status: 'Done',
  },
  {
    id: new mongoose.Types.ObjectId(),
    clientId: new mongoose.Types.ObjectId(),
    name: 'Habbit Tracker',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, architecto! Velit esse qui cumque laudantium earum nulla dicta illo, itaque id natus quisquam, deleniti non. Amet, excepturi. Dolorum, voluptates. At saepe sequi provident nam necessitatibus, quas odio! Cumque, magni a.',
    status: 'In Progress',
  },
  {
    id: new mongoose.Types.ObjectId(),
    clientId: new mongoose.Types.ObjectId(),
    name: 'E-commerce',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, architecto! Velit esse qui cumque laudantium earum nulla dicta illo, itaque id natus quisquam, deleniti non. Amet, excepturi. Dolorum, voluptates. At saepe sequi provident nam necessitatibus, quas odio! Cumque, magni a.',
    status: 'Not Started',
  },
];

const clients = [
  {
    id: new mongoose.Types.ObjectId(),
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: '2039-29983-212',
  },
  {
    id: new mongoose.Types.ObjectId(),
    name: 'Mark',
    email: 'mark@gmail.com',
    phone: '2829-39983-212',
  },
  {
    id: new mongoose.Types.ObjectId(),
    name: 'Petter',
    email: 'petter@gmail.com',
    phone: '2039-20923-212',
  },
  {
    id: new mongoose.Types.ObjectId(),
    name: 'Kevin',
    email: 'kevin@gmail.com',
    phone: '9203829023',
  },
  {
    id: new mongoose.Types.ObjectId(),
    name: 'Paul Walker',
    email: 'paul@gmail.com',
    phone: '20321-29983-212',
  },
];

module.exports = { clients, projects };
