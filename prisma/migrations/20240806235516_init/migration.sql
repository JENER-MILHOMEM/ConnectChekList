-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "contato" TEXT,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equipamento" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "sn" TEXT NOT NULL,
    "sku" INTEGER NOT NULL,
    "modelo" TEXT NOT NULL,
    "clienteId" INTEGER NOT NULL,

    CONSTRAINT "Equipamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Checklist" (
    "id" SERIAL NOT NULL,
    "equipamentoId" INTEGER NOT NULL,
    "finalidade" TEXT NOT NULL,
    "pedido" TEXT NOT NULL,
    "acessorios" TEXT,
    "obs" TEXT,
    "servExec" TEXT,
    "diagnostico" TEXT,
    "liberacao" BOOLEAN NOT NULL,
    "itensRelacionados" TEXT,
    "data" TIMESTAMP(3) NOT NULL,
    "tecResponsavel" TEXT NOT NULL,
    "vistoGerencia" TEXT NOT NULL,

    CONSTRAINT "Checklist_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Equipamento" ADD CONSTRAINT "Equipamento_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Checklist" ADD CONSTRAINT "Checklist_equipamentoId_fkey" FOREIGN KEY ("equipamentoId") REFERENCES "Equipamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
