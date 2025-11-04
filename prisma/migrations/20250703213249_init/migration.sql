-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre_de_usuario" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fecha_de_registro" DATETIME NOT NULL,
    "admin" BOOLEAN NOT NULL,
    "facultad_id" INTEGER NOT NULL,
    CONSTRAINT "Usuario_facultad_id_fkey" FOREIGN KEY ("facultad_id") REFERENCES "Facultad" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Video" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "identificador" TEXT NOT NULL,
    "fecha_de_registro" DATETIME NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "ua_id" INTEGER NOT NULL,
    CONSTRAINT "Video_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Video_ua_id_fkey" FOREIGN KEY ("ua_id") REFERENCES "UA" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Facultad" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Carrera" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "facultad_id" INTEGER NOT NULL,
    CONSTRAINT "Carrera_facultad_id_fkey" FOREIGN KEY ("facultad_id") REFERENCES "Facultad" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UA" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "carrera_id" INTEGER NOT NULL,
    CONSTRAINT "UA_carrera_id_fkey" FOREIGN KEY ("carrera_id") REFERENCES "Carrera" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_nombre_de_usuario_key" ON "Usuario"("nombre_de_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Video_identificador_key" ON "Video"("identificador");

-- CreateIndex
CREATE UNIQUE INDEX "Facultad_nombre_key" ON "Facultad"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Carrera_nombre_key" ON "Carrera"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "UA_nombre_key" ON "UA"("nombre");
