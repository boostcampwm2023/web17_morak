/*
  Warnings:

  - You are about to drop the column `email` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `nickname` on the `Member` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Member_email_key` ON `Member`;

-- AlterTable
ALTER TABLE `Member` DROP COLUMN `email`,
    DROP COLUMN `nickname`;
