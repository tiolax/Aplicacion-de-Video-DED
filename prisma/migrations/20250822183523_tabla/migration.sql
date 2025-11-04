-- CreateTable
CREATE TABLE "PalabraClave" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "VideoPalabraClave" (
    "video_id" INTEGER NOT NULL,
    "palabra_clave_id" INTEGER NOT NULL,

    PRIMARY KEY ("video_id", "palabra_clave_id"),
    CONSTRAINT "VideoPalabraClave_video_id_fkey" FOREIGN KEY ("video_id") REFERENCES "Video" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "VideoPalabraClave_palabra_clave_id_fkey" FOREIGN KEY ("palabra_clave_id") REFERENCES "PalabraClave" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "PalabraClave_nombre_key" ON "PalabraClave"("nombre");

-- CreateIndex
CREATE INDEX "VideoPalabraClave_palabra_clave_id_idx" ON "VideoPalabraClave"("palabra_clave_id");

-- CreateIndex
CREATE INDEX "VideoPalabraClave_video_id_idx" ON "VideoPalabraClave"("video_id");
