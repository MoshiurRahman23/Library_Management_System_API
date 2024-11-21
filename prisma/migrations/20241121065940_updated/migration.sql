/*
  Warnings:

  - A unique constraint covering the columns `[bookId]` on the table `books` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "books_bookId_key" ON "books"("bookId");
