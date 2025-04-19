export interface IProjects {
  src: string; // URL da imagem do projeto
  alt: string; // Texto alternativo da imagem
  icon?: string; // Ícone do projeto (opcional)
  title: string; // Título do projeto
    width: string; // Largura da imagem
    height: string; // Altura da imagem
  description: string; // Descrição do projeto
  links: [
    {
      name: string; // Nome do link
      href: string; // URL do link
    }
  ]; // Array de links relacionados ao projeto
}
