/*
  Warnings:

  - You are about to drop the column `task` on the `task` table. All the data in the column will be lost.
  - Added the required column `taskName` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taskTitle` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `task` DROP COLUMN `task`,
    ADD COLUMN `taskName` VARCHAR(191) NOT NULL,
    ADD COLUMN `taskTitle` VARCHAR(191) NOT NULL;
