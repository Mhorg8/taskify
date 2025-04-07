-- CreateTable
CREATE TABLE "Task" (
    "_id" TEXT NOT NULL,
    "task" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Task__id_key" ON "Task"("_id");
