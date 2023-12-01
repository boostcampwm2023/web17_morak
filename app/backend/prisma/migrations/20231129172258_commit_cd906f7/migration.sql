/*
  Warnings:

  - You are about to alter the column `date` on the `Mogaco` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `deleted_at` on the `Mogaco` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `Mogaco` MODIFY `date` DATETIME NOT NULL,
    MODIFY `deleted_at` DATETIME NULL;

-- AddForeignKey
ALTER TABLE `Mogaco` ADD CONSTRAINT `Mogaco_group_id_fkey` FOREIGN KEY (`group_id`) REFERENCES `Group`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
