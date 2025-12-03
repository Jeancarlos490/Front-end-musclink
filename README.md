
# Musclink

**Descrição**: Projeto frontend mobile desenvolvido em React Native com TypeScript e Expo. Interface para autenticação, perfil, chat e telas de treino organizadas em `src/pages`. Projeto focado em UX para treinos e interação social.

**Status**: Em desenvolvimento

**Tecnologias principais**:
- **Framework**: `React Native` (via `Expo`)
- **Linguagem**: `TypeScript`
- **Navegação**: `@react-navigation/*`

**Pré-requisitos**:
- Node.js (recomenda-se versão LTS atual)
- npm ou yarn
- `expo-cli` (opcional, pode usar os scripts via `npm`)

**Instalação (local)**:

1. Instale dependências:

```powershell
npm install
```

2. Inicie o servidor de desenvolvimento (Expo):

```powershell
npm start
```

3. Executar em Android / iOS / Web via scripts:

```powershell
npm run android   # abre no emulador/dispositivo Android
npm run ios       # abre no emulador iOS (macOS necessário)
npm run web       # roda versão web
```

Observação: os scripts acima chamam `expo start` conforme definido em `package.json`.

**Scripts úteis** (em `package.json`):
- **`start`**: inicia o Metro/Expo (`expo start`)
- **`android`**: `expo start --android`
- **`ios`**: `expo start --ios`
- **`web`**: `expo start --web`

**Estrutura principal do projeto** (resumo):
- **`App.tsx`**: entrada principal do app.
- **`index.ts`**: ponto de bootstrap.
- **`src/`**: código-fonte do app
	- `@types/` — typings personalizados (ex.: `png.d.ts`)
	- `assets/` — imagens e recursos estáticos
	- `global/temas.tsx` — temas e estilos globais
	- `pages/` — telas organizadas por feature
		- `Cadastro/`, `Chat/`, `Homescreen/`, `login/`, `Perfil/`, `Recuperação/`, `Treino/` e subpastas de perfis extras
	- `routes/` — definição de rotas, ex.: `bottom.routes.tsx`, `index.route.tsx`

**Pontos importantes**:
- Uso de `react-native-gesture-handler` (há arquivos `gesture-handler.js` e `gesture-handler.native.js`).
- Projeto configurado com Expo (versão listada em `package.json`).

**Como contribuir**:
- Fork o repositório e crie uma branch com um nome descritivo: `feature/minha-feature`.
- Abra um Pull Request descrevendo o objetivo e as alterações.
- Mantenha commits pequenos e com mensagens claras.

Boas práticas sugeridas:
- Use `TypeScript` com tipagem explícita nas props.
- Preserve o padrão de estilo do projeto (siga o estilo já existente em `src/`).
- Teste no Android e iOS quando possível.

**Debug / Troubleshooting**:
- Se o app não iniciar, rode `npm install` novamente e verifique a versão do Expo.
- Para limpar cache do Expo: `expo start -c`.

**Contato / Mantainer**:
- Repositório: `Front-end-musclink` (branch `main`)
- Autor/Contato: disponível no repositório remoto (verificar página do GitHub)

**Licença**: Não especificada. Adicione um arquivo `LICENSE` se quiser definir uma licença.

