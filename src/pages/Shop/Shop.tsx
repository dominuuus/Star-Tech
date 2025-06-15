import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchShopItem, ShopItem } from "../../services/shopService";
import { SpinnerGap } from "phosphor-react";
import {
  Button,
  Card,
  Filter,
  Grid,
  Header,
  ProductImage,
  QuantityInput,
  ShopContainer,
  CartNotification,
  Modal,
  ModalContent,
  CloseButton,
  SelectQuantity,
} from "./Shop.styles";

const tipos = [
  "Adesivo",
  "Almofada",
  "Caderno",
  "Camisa",
  "Camiseta",
  "Caneca",
  "Casaco",
  "Lego",
  "Pelúcia"
] as const;

export default function LojaEstelar() {
  const {
    data: shopItems,
    isLoading,
    isError,
    error,
  } = useQuery<ShopItem[], Error>({
    queryKey: ["shop"],
    queryFn: fetchShopItem,
  });

  const [filtro, setFiltro] = useState<string>("");
  const [quantidades, setQuantidades] = useState<Record<number, number>>({});
  const [showNotification, setShowNotification] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFiltroChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFiltro(e.target.value);
  };

  const handleQuantidadeChange = (id: number, qtd: number) => {
    if (qtd >= 1) {
      setQuantidades((prev) => ({ ...prev, [id]: qtd }));
    }
  };

  const handleAddToCart = (nome: string, id: number) => {
    const quantidade = quantidades[id] || 1;
    setShowNotification(`Adicionado ${quantidade} ${nome} ao carrinho`);
    setTimeout(() => setShowNotification(null), 2500);
  };

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const produtosFiltrados = filtro
    ? shopItems?.filter((item) => item.categoria === filtro)
    : shopItems;

  if (isLoading)
    return (
      <ShopContainer>
        <p>
          <SpinnerGap size={32} /> Carregando...
        </p>
      </ShopContainer>
    );
  if (isError)
    return (
      <ShopContainer>
        <p>Erro: {error?.message || "Erro ao carregar produtos"}</p>
      </ShopContainer>
    );

  return (
    <ShopContainer>
      <Header>
        <h1>Loja Estelar</h1>
      </Header>

      <Filter
        onChange={handleFiltroChange}
        defaultValue=""
        aria-label="Filtrar por categoria"
      >
        <option value="">Todas as categorias</option>
        {tipos.map((tipo) => (
          <option key={tipo} value={tipo}>
            {tipo}
          </option>
        ))}
      </Filter>

      <Grid>
        {produtosFiltrados?.map((prod) => (
          <Card key={prod.id}>
            <ProductImage
              src={prod.imagem}
              alt={prod.nome}
              onClick={() => openModal(prod.imagem)}
            />
            <SelectQuantity>
              <h2>{prod.nome}</h2>
              <p>{prod.estelares.toLocaleString("de-DE")} estelares</p>
              <div>
                <label htmlFor={`quantidade-${prod.id}`} className="sr-only">
                  Quantidade:
                </label>

                <QuantityInput
                  id={`quantidade-${prod.id}`}
                  type="number"
                  min="1"
                  value={quantidades[prod.id] || 1}
                  onChange={(e) =>
                    handleQuantidadeChange(prod.id, parseInt(e.target.value))
                  }
                  aria-label={`Quantidade de ${prod.nome}`}
                />
              </div>
            </SelectQuantity>
            <Button onClick={() => handleAddToCart(prod.nome, prod.id)}>
              Adicionar ao carrinho
            </Button>
          </Card>
        ))}
      </Grid>

      {showNotification && (
        <CartNotification>{showNotification}</CartNotification>
      )}

      {selectedImage && (
        <Modal onClick={closeModal}>
          <ModalContent>
            <img src={selectedImage} alt="Imagem ampliada" />
            <CloseButton onClick={closeModal}>×</CloseButton>
          </ModalContent>
        </Modal>
      )}
    </ShopContainer>
  );
}
