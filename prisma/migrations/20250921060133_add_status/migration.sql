/*
  Warnings:

  - Added the required column `status` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('beginner', 'intermediate', 'advanced');

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "status" "public"."Status" NOT NULL;
