/*
  Warnings:

  - You are about to alter the column `date` on the `Mogaco` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `deleted_at` on the `Mogaco` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `latitude` to the `Mogaco` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Mogaco` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Mogaco` ADD COLUMN `latitude` DECIMAL(10, 8) NOT NULL,
    ADD COLUMN `longitude` DECIMAL(11, 8) NOT NULL,
    MODIFY `date` DATETIME NOT NULL,
    MODIFY `deleted_at` DATETIME NULL;
