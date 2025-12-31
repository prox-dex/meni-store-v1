/*
  Warnings:

  - You are about to drop the `_package_typeToproduct` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_productTounit_type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `package_type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `unit_type` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_package_typeToproduct" DROP CONSTRAINT "_package_typeToproduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_package_typeToproduct" DROP CONSTRAINT "_package_typeToproduct_B_fkey";

-- DropForeignKey
ALTER TABLE "_productTounit_type" DROP CONSTRAINT "_productTounit_type_A_fkey";

-- DropForeignKey
ALTER TABLE "_productTounit_type" DROP CONSTRAINT "_productTounit_type_B_fkey";

-- DropTable
DROP TABLE "_package_typeToproduct";

-- DropTable
DROP TABLE "_productTounit_type";

-- DropTable
DROP TABLE "package_type";

-- DropTable
DROP TABLE "product";

-- DropTable
DROP TABLE "unit_type";

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "buyPrice" DECIMAL(12,2) NOT NULL,
    "sellPrice" DECIMAL(12,2) NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" TEXT NOT NULL,
    "updatedBy" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PackageType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" TEXT NOT NULL,
    "updatedBy" TEXT NOT NULL,

    CONSTRAINT "PackageType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnitType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" TEXT NOT NULL,
    "updatedBy" TEXT NOT NULL,

    CONSTRAINT "UnitType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductToUnitType" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProductToUnitType_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_PackageTypeToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PackageTypeToProduct_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PackageType_name_key" ON "PackageType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "UnitType_name_key" ON "UnitType"("name");

-- CreateIndex
CREATE INDEX "_ProductToUnitType_B_index" ON "_ProductToUnitType"("B");

-- CreateIndex
CREATE INDEX "_PackageTypeToProduct_B_index" ON "_PackageTypeToProduct"("B");

-- AddForeignKey
ALTER TABLE "_ProductToUnitType" ADD CONSTRAINT "_ProductToUnitType_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToUnitType" ADD CONSTRAINT "_ProductToUnitType_B_fkey" FOREIGN KEY ("B") REFERENCES "UnitType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PackageTypeToProduct" ADD CONSTRAINT "_PackageTypeToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "PackageType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PackageTypeToProduct" ADD CONSTRAINT "_PackageTypeToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
