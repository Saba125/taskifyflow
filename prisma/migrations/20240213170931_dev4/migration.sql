/*
  Warnings:

  - You are about to drop the column `taskName` on the `task` table. All the data in the column will be lost.
  - Added the required column `taskContent` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `task` DROP COLUMN `taskName`,
    ADD COLUMN `taskContent` VARCHAR(191) NOT NULL;
