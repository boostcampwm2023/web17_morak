/*
  Warnings:

  - You are about to drop the column `identifier` on the `Member` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Member` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Member_identifier_key` ON `Member`;

-- AlterTable
ALTER TABLE `Member` DROP COLUMN `identifier`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Member_email_key` ON `Member`(`email`);
