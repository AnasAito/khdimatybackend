"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Task",
    embedded: false
  },
  {
    name: "Mytask",
    embedded: false
  },
  {
    name: "Question",
    embedded: false
  },
  {
    name: "Option",
    embedded: false
  },
  {
    name: "Reward",
    embedded: false
  },
  {
    name: "Myreward",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/public-quickmoth-103/khdimbackend/dev`
});
exports.prisma = new exports.Prisma();
