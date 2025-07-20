import { PrismaClient } from './generated/prisma'

export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production") {
    globalThis.prisma = db;
}

// globalThis.prisma: this global variable ensures that the Prisma Client instance is reused across hot reloads during development. without this, each time your application reloads, a new instance of Prisma Client would be created, potentially leadng to connection issues.