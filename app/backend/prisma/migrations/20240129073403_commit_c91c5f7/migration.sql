/*
  Warnings:

  - You are about to alter the column `date` on the `Mogaco` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `deleted_at` on the `Mogaco` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `groupType` to the `Group` table without a default value. This is not possible if the table is not empty.
  - Added the required column `group_owner` to the `Group` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Group` ADD COLUMN `groupType` TINYINT NOT NULL,
    ADD COLUMN `group_owner` BIGINT NOT NULL;

-- AlterTable
ALTER TABLE `Mogaco` MODIFY `date` DATETIME NOT NULL,
    MODIFY `deleted_at` DATETIME NULL;

-- CreateTable
CREATE TABLE `GroupAccessCode` (
    `accessCode` VARCHAR(256) NOT NULL,
    `groupId` BIGINT NOT NULL,

    PRIMARY KEY (`accessCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MembershipRequest` (
    `id` BIGINT NOT NULL,
    `group_id` BIGINT NOT NULL,
    `user_id` BIGINT NOT NULL,
    `status` TINYINT NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Group` ADD CONSTRAINT `Group_group_owner_fkey` FOREIGN KEY (`group_owner`) REFERENCES `Member`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GroupAccessCode` ADD CONSTRAINT `GroupAccessCode_groupId_fkey` FOREIGN KEY (`groupId`) REFERENCES `Group`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MembershipRequest` ADD CONSTRAINT `MembershipRequest_group_id_fkey` FOREIGN KEY (`group_id`) REFERENCES `Group`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MembershipRequest` ADD CONSTRAINT `MembershipRequest_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Member`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
