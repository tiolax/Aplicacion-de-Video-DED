-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre_de_usuario" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fecha_de_registro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "admin" BOOLEAN NOT NULL,
    "facultad_id" INTEGER,
    CONSTRAINT "Usuario_facultad_id_fkey" FOREIGN KEY ("facultad_id") REFERENCES "Facultad" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Usuario" ("admin", "facultad_id", "fecha_de_registro", "id", "nombre_de_usuario", "password") SELECT "admin", "facultad_id", "fecha_de_registro", "id", "nombre_de_usuario", "password" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_nombre_de_usuario_key" ON "Usuario"("nombre_de_usuario");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
