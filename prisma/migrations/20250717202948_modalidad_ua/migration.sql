/*
  Warnings:

  - Added the required column `modalidad` to the `UA` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UA" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "modalidad" TEXT NOT NULL,
    "carrera_id" INTEGER NOT NULL,
    CONSTRAINT "UA_carrera_id_fkey" FOREIGN KEY ("carrera_id") REFERENCES "Carrera" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UA" ("carrera_id", "id", "nombre") SELECT "carrera_id", "id", "nombre" FROM "UA";
DROP TABLE "UA";
ALTER TABLE "new_UA" RENAME TO "UA";
CREATE UNIQUE INDEX "UA_nombre_key" ON "UA"("nombre");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
