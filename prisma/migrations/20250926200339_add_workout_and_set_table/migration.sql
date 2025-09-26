-- CreateTable
CREATE TABLE "public"."Workout" (
    "id" VARCHAR(36) NOT NULL,
    "name" TEXT NOT NULL,
    "routine_id" TEXT NOT NULL,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Set" (
    "id" VARCHAR(36) NOT NULL,
    "weight" INTEGER NOT NULL,
    "reps" INTEGER NOT NULL,
    "workout_id" TEXT NOT NULL,

    CONSTRAINT "Set_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Workout" ADD CONSTRAINT "Workout_routine_id_fkey" FOREIGN KEY ("routine_id") REFERENCES "public"."Routine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Set" ADD CONSTRAINT "Set_workout_id_fkey" FOREIGN KEY ("workout_id") REFERENCES "public"."Workout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
