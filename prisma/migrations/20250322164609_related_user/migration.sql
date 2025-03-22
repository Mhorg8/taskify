-- CreateTable
CREATE TABLE "_UserCards" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_UserCards_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_UserCards_B_index" ON "_UserCards"("B");

-- AddForeignKey
ALTER TABLE "_UserCards" ADD CONSTRAINT "_UserCards_A_fkey" FOREIGN KEY ("A") REFERENCES "Card"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserCards" ADD CONSTRAINT "_UserCards_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("_id") ON DELETE CASCADE ON UPDATE CASCADE;
