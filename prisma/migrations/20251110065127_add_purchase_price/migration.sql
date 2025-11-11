/*
  Warnings:

  - You are about to drop the column `subTotal` on the `Detail_Transaction` table. All the data in the column will be lost.
  - Added the required column `purchase_price` to the `Detail_Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Detail_Transaction` DROP COLUMN `subTotal`,
    ADD COLUMN `purchase_price` INTEGER NOT NULL;
