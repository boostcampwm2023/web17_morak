/*
  Warnings:

  - The primary key for the `Member` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `nickname` on the `Member` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Member_email_key` ON `Member`;

-- AlterTable
ALTER TABLE `Member` DROP PRIMARY KEY,
    DROP COLUMN `email`,
    DROP COLUMN `nickname`,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `Mogaco` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `group_id` BIGINT NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `contents` VARCHAR(191) NOT NULL,
    `date` DATETIME NOT NULL,
    `max_human_count` TINYINT NOT NULL DEFAULT 1,
    `address` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Group` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GroupToUser` (
    `group_id` BIGINT NOT NULL,
    `user_id` BIGINT NOT NULL,

    PRIMARY KEY (`group_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Participant` (
    `post_id` BIGINT NOT NULL,
    `user_id` BIGINT NOT NULL,

    PRIMARY KEY (`post_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `GroupToUser` ADD CONSTRAINT `GroupToUser_group_id_fkey` FOREIGN KEY (`group_id`) REFERENCES `Group`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GroupToUser` ADD CONSTRAINT `GroupToUser_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Member`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Participant` ADD CONSTRAINT `Participant_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `Mogaco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Participant` ADD CONSTRAINT `Participant_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Member`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
