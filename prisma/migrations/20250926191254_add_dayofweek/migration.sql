/*
  Warnings:

  - Added the required column `dayofweek` to the `Routine` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."DayOfWeek" AS ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

-- AlterTable
ALTER TABLE "public"."Routine" ADD COLUMN     "dayofweek" "public"."DayOfWeek" NOT NULL;
