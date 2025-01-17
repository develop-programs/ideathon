-- CreateEnum
CREATE TYPE "Tier" AS ENUM ('Platinum', 'Gold', 'Silver', 'Bronze', 'other');

-- CreateTable
CREATE TABLE "team" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "linkedIn" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "github" TEXT NOT NULL,

    CONSTRAINT "team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sponsers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tier" "Tier" NOT NULL,
    "logo" TEXT NOT NULL,
    "website" TEXT NOT NULL,

    CONSTRAINT "sponsers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "startup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "longDescription" TEXT NOT NULL,
    "founded" TEXT NOT NULL,
    "team" TEXT[],
    "contact" TEXT NOT NULL,

    CONSTRAINT "startup_pkey" PRIMARY KEY ("id")
);
