import { PrismaClient } from ".prisma/client";

// storing the PrismaClient as a global var in dev envio to halt the creation oa additional instances of PrismaClient
// adding prisma to the NodeJS global type
interface CustomNodeJsGlobal extends NodeJS.Global {
  prisma: PrismaClient;
}

// prevent multiple instance of PrismaClient in dev
declare const global: CustomNodeJsGlobal;

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

//export default new PrismaClient();
export default prisma;
