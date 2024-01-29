/*
  Warnings:

  - You are about to drop the `Group` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GroupAccessCode` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GroupToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Member` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MembershipRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Mogaco` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Participant` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Group` DROP FOREIGN KEY `Group_group_owner_fkey`;

-- DropForeignKey
ALTER TABLE `GroupAccessCode` DROP FOREIGN KEY `GroupAccessCode_groupId_fkey`;

-- DropForeignKey
ALTER TABLE `GroupToUser` DROP FOREIGN KEY `GroupToUser_group_id_fkey`;

-- DropForeignKey
ALTER TABLE `GroupToUser` DROP FOREIGN KEY `GroupToUser_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `MembershipRequest` DROP FOREIGN KEY `MembershipRequest_group_id_fkey`;

-- DropForeignKey
ALTER TABLE `MembershipRequest` DROP FOREIGN KEY `MembershipRequest_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `Mogaco` DROP FOREIGN KEY `Mogaco_group_id_fkey`;

-- DropForeignKey
ALTER TABLE `Mogaco` DROP FOREIGN KEY `Mogaco_member_id_fkey`;

-- DropForeignKey
ALTER TABLE `Participant` DROP FOREIGN KEY `Participant_post_id_fkey`;

-- DropForeignKey
ALTER TABLE `Participant` DROP FOREIGN KEY `Participant_user_id_fkey`;

-- DropTable
DROP TABLE `Group`;

-- DropTable
DROP TABLE `GroupAccessCode`;

-- DropTable
DROP TABLE `GroupToUser`;

-- DropTable
DROP TABLE `Member`;

-- DropTable
DROP TABLE `MembershipRequest`;

-- DropTable
DROP TABLE `Mogaco`;

-- DropTable
DROP TABLE `Participant`;

-- CreateTable
CREATE TABLE `member` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `provider_id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `nickname` VARCHAR(191) NOT NULL,
    `profile_picture` VARCHAR(191) NOT NULL,
    `social_type` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `member_provider_id_key`(`provider_id`),
    UNIQUE INDEX `member_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mogaco` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `group_id` BIGINT NOT NULL,
    `member_id` BIGINT NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `contents` VARCHAR(191) NOT NULL,
    `date` DATETIME NOT NULL,
    `max_human_count` TINYINT NOT NULL DEFAULT 1,
    `address` VARCHAR(191) NOT NULL,
    `latitude` DECIMAL(10, 8) NOT NULL,
    `longitude` DECIMAL(11, 8) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `group` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `group_owner_id` BIGINT NOT NULL,
    `group_type_id` TINYINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `group_access_code` (
    `access_code` VARCHAR(256) NOT NULL,
    `group_id` BIGINT NOT NULL,

    PRIMARY KEY (`access_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `membership_request` (
    `id` BIGINT NOT NULL,
    `group_id` BIGINT NOT NULL,
    `user_id` BIGINT NOT NULL,
    `status` TINYINT NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `group_to_user` (
    `group_id` BIGINT NOT NULL,
    `user_id` BIGINT NOT NULL,

    PRIMARY KEY (`group_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `participant` (
    `post_id` BIGINT NOT NULL,
    `user_id` BIGINT NOT NULL,

    PRIMARY KEY (`post_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `mogaco` ADD CONSTRAINT `mogaco_group_id_fkey` FOREIGN KEY (`group_id`) REFERENCES `group`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mogaco` ADD CONSTRAINT `mogaco_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `member`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `group` ADD CONSTRAINT `group_group_owner_id_fkey` FOREIGN KEY (`group_owner_id`) REFERENCES `member`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `group_access_code` ADD CONSTRAINT `group_access_code_group_id_fkey` FOREIGN KEY (`group_id`) REFERENCES `group`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `membership_request` ADD CONSTRAINT `membership_request_group_id_fkey` FOREIGN KEY (`group_id`) REFERENCES `group`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `membership_request` ADD CONSTRAINT `membership_request_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `member`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `group_to_user` ADD CONSTRAINT `group_to_user_group_id_fkey` FOREIGN KEY (`group_id`) REFERENCES `group`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `group_to_user` ADD CONSTRAINT `group_to_user_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `member`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `participant` ADD CONSTRAINT `participant_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `mogaco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `participant` ADD CONSTRAINT `participant_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `member`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
