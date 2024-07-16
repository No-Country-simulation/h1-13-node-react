/*
  Warnings:

  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserRole` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_UserRole` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `roles` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `UserRole` DROP FOREIGN KEY `UserRole_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `UserRole` DROP FOREIGN KEY `UserRole_userId_fkey`;

-- DropForeignKey
ALTER TABLE `_UserRole` DROP FOREIGN KEY `_UserRole_A_fkey`;

-- DropForeignKey
ALTER TABLE `_UserRole` DROP FOREIGN KEY `_UserRole_B_fkey`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `roles` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Role`;

-- DropTable
DROP TABLE `UserRole`;

-- DropTable
DROP TABLE `_UserRole`;
