-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre_de_usuario" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fecha_de_registro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "admin" BOOLEAN NOT NULL,
    "facultad_id" INTEGER NOT NULL,
    CONSTRAINT "Usuario_facultad_id_fkey" FOREIGN KEY ("facultad_id") REFERENCES "Facultad" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Usuario" ("admin", "facultad_id", "fecha_de_registro", "id", "nombre_de_usuario", "password") SELECT "admin", "facultad_id", "fecha_de_registro", "id", "nombre_de_usuario", "password" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_nombre_de_usuario_key" ON "Usuario"("nombre_de_usuario");
CREATE TABLE "new_Video" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "identificador" TEXT NOT NULL,
    "fecha_de_registro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuario_id" INTEGER NOT NULL,
    "ua_id" INTEGER NOT NULL,
    CONSTRAINT "Video_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Video_ua_id_fkey" FOREIGN KEY ("ua_id") REFERENCES "UA" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Video" ("descripcion", "fecha_de_registro", "id", "identificador", "titulo", "ua_id", "usuario_id") SELECT "descripcion", "fecha_de_registro", "id", "identificador", "titulo", "ua_id", "usuario_id" FROM "Video";
DROP TABLE "Video";
ALTER TABLE "new_Video" RENAME TO "Video";
CREATE UNIQUE INDEX "Video_identificador_key" ON "Video"("identificador");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
