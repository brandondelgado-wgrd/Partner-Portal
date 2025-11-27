# WatchGuard Partner Portal - Marketing Campaign Kits

Portal de campanhas de marketing para parceiros da WatchGuard com sistema de filtros interativos e design moderno.

## 🎯 Sobre o Projeto

Esta é uma página de showcase para Marketing Campaign Kits da WatchGuard, permitindo que parceiros naveguem e filtrem campanhas de marketing por categorias como Network Security, Identity Security, XDR/MDR, e muito mais.

## ✨ Funcionalidades

### 🔍 Sistema de Filtros Avançado
- **Múltipla seleção**: Selecione vários tipos simultaneamente
- **Filtros por categoria**: 8 categorias disponíveis
  - Network Security
  - Identity Security
  - Endpoint Security
  - Cloud & Remote Access
  - XDR/MDR
  - MSP Business Growth
  - Compliance & Regulation
  - Programs & Education
- **Clear Filters**: Limpe todas as seleções com um clique
- **Feedback visual**: Botões com estados hover e active

### 🎨 Design Moderno
- **Interface clean**: Layout minimalista sem backgrounds pesados
- **Botões estilizados**: Bordas arredondadas com cores da marca WatchGuard
- **Responsivo**: Adaptado para desktop, tablet e mobile
- **Transições suaves**: Animações em CSS para melhor UX

### 📦 22 Campanhas Disponíveis
Cada card de campanha contém:
- Imagem de destaque
- Badge "New" para campanhas recentes
- Título descritivo
- Descrição da campanha
- Link direto para o portal Widen

## 🚀 Como Usar

### Navegação
1. Acesse a página principal (`index.html`)
2. Role até a seção de filtros
3. Clique nos botões de tipo para filtrar as campanhas
4. Clique novamente para desmarcar
5. Use "Clear Filters" para resetar

### Filtros Ativos
- **Fundo branco + borda vermelha**: Estado padrão
- **Fundo vermelho + texto branco**: Filtro ativo
- **Hover**: Leve transparência vermelha

## 📁 Estrutura do Projeto

```
/Marketing/
  ├── index.html              # Página principal com filtros e campanhas
  ├── README.md              # Este arquivo
  └── assets/
      └── marketing/         # Imagens das campanhas
```

## 🛠️ Tecnologias

- **HTML5**: Estrutura semântica
- **CSS3**: Variáveis CSS, Flexbox, Grid, Transições
- **JavaScript (Vanilla)**: Lógica de filtros sem dependências
- **Google Fonts**: Roboto
- **Font Awesome 6.4.0**: Ícones

## 💻 Estrutura Técnica

### Sistema de Filtros

```javascript
// Cada card tem um atributo data-type
<a class="campaign-card" data-type="network-security">

// Botões de filtro com data-filter
<button class="filter-option-btn" data-filter="network-security">
```

### Lógica de Filtro (OR)
- Se **nenhum filtro** ativo: mostra todos os cards
- Se **um ou mais filtros** ativos: mostra cards que correspondem a **qualquer** filtro selecionado
- Exemplo: Network Security + Identity Security = mostra cards de ambos os tipos

## 🎨 Paleta de Cores

```css
--watchguard-red: #e81410;    /* Cor primária da marca */
--dark-gray: #2c3e50;          /* Texto principal */
--footer-bg: #232D37;          /* Fundo do footer */
--medium-gray: #7f8c8d;        /* Texto secundário */
--light-gray: #ecf0f1;         /* Backgrounds sutis */
--white: #ffffff;               /* Fundo principal */
```

## 📱 Responsividade

### Desktop (> 992px)
- Grid de cards: 3 colunas
- Menu completo com dropdowns
- Filtros em linha horizontal

### Tablet (768px - 992px)
- Grid de cards: 2 colunas
- Menu adaptado

### Mobile (< 768px)
- Grid de cards: 1 coluna
- Menu mobile com toggles
- Filtros empilhados

## 🌐 Deploy no GitHub Pages

### 1. Inicialize o repositório
```bash
git init
git add .
git commit -m "Initial commit: WatchGuard Marketing Campaign Kits"
git branch -M main
git remote add origin https://github.com/seu-usuario/watchguard-marketing.git
git push -u origin main
```

### 2. Ative o GitHub Pages
1. Acesse: **Settings** → **Pages**
2. Em **Source**, selecione `main` branch
3. Em **Folder**, selecione `/ (root)` ou `/Marketing`
4. Clique em **Save**
5. Aguarde 1-2 minutos

### 3. Acesse o site
```
https://seu-usuario.github.io/watchguard-marketing/
```

## 🔧 Customização

### Adicionar Nova Campanha

1. Adicione o card HTML:
```html
<a href="URL_CAMPANHA" class="campaign-card" data-type="TIPO">
    <div class="campaign-image">
        <div class="campaign-badge">New</div>
        <img src="./assets/marketing/IMAGEM.jpg" alt="TITULO">
    </div>
    <div class="campaign-content">
        <h3 class="campaign-title">TITULO</h3>
        <p class="campaign-description">DESCRIÇÃO</p>
    </div>
</a>
```

2. Use um dos tipos existentes no `data-type`:
   - `network-security`
   - `identity-security`
   - `endpoint-security`
   - `cloud-remote`
   - `xdr-mdr`
   - `msp-growth`
   - `compliance`
   - `programs-education`

### Adicionar Novo Tipo de Filtro

1. Adicione o botão:
```html
<button class="filter-option-btn" data-filter="novo-tipo">Novo Tipo</button>
```

2. Adicione cards com `data-type="novo-tipo"`

3. O JavaScript já suporta tipos dinâmicos!

## 📊 Estatísticas do Projeto

- **22 campanhas** disponíveis
- **8 categorias** de filtro
- **100% JavaScript Vanilla** (sem jQuery)
- **Responsivo** para todos os dispositivos
- **Performance otimizada** com CSS transitions

## 🎯 Próximas Melhorias

Possíveis adições futuras:
- [ ] Busca por texto
- [ ] Ordenação (data, alfabética)
- [ ] Contador de resultados filtrados
- [ ] Animações de entrada nos cards
- [ ] Lazy loading de imagens
- [ ] Modo escuro
- [ ] Favoritos/Bookmarks

## 📄 Manutenção

### Atualizar Header/Footer
- Header: Edite o HTML inline na seção `<header>`
- Footer: Edite o HTML inline na seção `<footer>`

### Atualizar Estilos
- CSS está incorporado no `<style>` do HTML
- Variáveis CSS no `:root` para fácil customização

### Atualizar JavaScript
- Código está no final do HTML antes do `</body>`
- Funções separadas por módulos IIFE

## 🤝 Contribuindo

1. Clone o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📞 Suporte

Para questões ou suporte:
- **Documentação WatchGuard**: https://www.watchguard.com
- **Portal de Parceiros**: https://portal.watchguard.com

## 📄 Licença

© 2025 WatchGuard Technologies Inc. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para parceiros WatchGuard**
