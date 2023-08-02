## Instalação

1. Clone este repositório em sua máquina com os seguinte comando

```bash
git clone https://github.com/samuelrms/painel-desh-nextjs.git
```

2. Navegue para a pasta raiz do projeto

```bash
cd painel-desh-nextjs
```

3. Execute o comando para instalar as dependências do projeto

```bash
yarn
```

ou

```bash
npm install
```

4. Execute o seguinte comando para iniciar o servidor de desenvolvimento

```bash
yarn dev
```

ou

```bash
npm run dev
```

## Stack utilizada

- NextJS,
- Typescript,
- prettier,
- @emotion/react

rquitetura de pastas e arquivos
===================================

    .
    ├── public/
    │   └── images.png
    ├── src/
    │   ├── app/
    │   │   ├── campanhas/
    │   │   │   └── page.tsx
    │   │   ├── leads/
    │   │   │   └── page.tsx
    │   │   ├── notificacoes/
    │   │   │   └── page.tsx
    │   │   ├── projetos/
    │   │   │   └── page.tsx
    │   │   ├── Providers.tsx
    │   │   ├── layout.tsx
    │   │   └── page.tsx
    │   ├── components/
    │   │   ├── Box/
    │   │   │   ├── index.ts
    │   │   │   ├── Box.styles.ts
    │   │   │   ├── Box.tsx
    │   │   │   └── Box.types.ts
    │   │   ├── Button/
    │   │   │   ├── index.ts
    │   │   │   ├── Button.styles.ts
    │   │   │   ├── Button.tsx
    │   │   │   └── Button.types.ts
    │   │   ├── Card/
    │   │   │   ├── index.ts
    │   │   │   ├── Card.styles.ts
    │   │   │   ├── Card.tsx
    │   │   │   └── Card.types.ts
    │   │   ├── CustomSkeleton/
    │   │   │   ├── index.ts
    │   │   │   ├── CustomSkeleton.tsx
    │   │   │   └── CustomSkeleton.types.ts
    │   │   ├── Divider/
    │   │   │   ├── index.ts
    │   │   │   ├── Stack.styles.ts
    │   │   │   ├── Stack.tsx
    │   │   │   └── Stack.types.ts
    │   │   ├── Stack/
    │   │   │   ├── index.ts
    │   │   │   ├── Stack.styles.ts
    │   │   │   ├── Stack.tsx
    │   │   │   └── Stack.types.ts
    │   │   └── Typography/
    │   │       ├── index.ts
    │   │       ├── Typography.styles.ts
    │   │       ├── Typography.tsx
    │   │       └── Typography.types.ts
    │   ├── constants/
    │   │   └── menuList.ts
    │   ├── styles/
    │   │   └── home.css
    │   ├── theme/
    │   │   ├── breakPoints.ts
    │   │   ├── colors.ts
    │   │   ├── emotion.d.ts
    │   │   ├── fonts.tsx
    │   │   ├── globalStyles.tsx
    │   │   └── theme.ts
    │   ├── types/
    │   │   └── children.ts
    │   └── utils/
    │       └── local-storage/
    │           ├── index.ts
    │           └── keys.ts
    └── [...config files]
