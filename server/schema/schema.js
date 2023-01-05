const {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLNonNull,
  GraphQLEnumType,
} = require('graphql');

const Client = require('../database/models/Client');
const Project = require('../database/models/Projects');

/* Client Type */
const ClientType = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

/* Project Type */
const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve(parent, args) {
        return Client.findById(parent.childId);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    projects: {
      type: GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find();
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Project.findById(args.id);
      },
    },
    clients: {
      type: GraphQLList(ClientType),
      resolve(parent, args) {
        return Client.find();
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Client.findById(args.id);
      },
    },
  },
});

/* Mutations */
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    /* Add client */
    addClient: {
      type: ClientType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const client = Client.create({
          name: args.name,
          email: args.email,
          phone: args.phone,
        });
        return client;
      },
    },
    /* Delete client */
    deleteClient: {
      type: ClientType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return Client.findByIdAndDelete(args.id);
      },
    },

    /* Add project */
    addProject: {
      type: ProjectType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: 'ProjectStatus',
            values: {
              new: { value: 'Not Started' },
              progress: { value: 'In Progress' },
              completed: { value: 'Done' },
            },
          }),
          defaultValue: 'Not Started',
        },
        clientId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const project = Project.create({
          name: args.name,
          description: args.description,
          status: args.status,
          clientId: args.clientId,
        });
        return project;
      },
    },
    /* Delete project */
    deleteProject: {
      type: ProjectType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return Project.findByIdAndDelete(args.id);
      },
    },
    /* Update project */
    updateProject: {
      type: ProjectType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: 'ProjectStatusUpdate',
            values: {
              new: { value: 'Not Started' },
              progress: { value: 'In Progress' },
              completed: { value: 'Done' },
            }, // state values
          }), //type
        }, // status
      }, //args
      resolve(parent, args) {
        return Project.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
              status: args.status,
            },
          },
          { new: true }
        );
      },
    }, //update
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
