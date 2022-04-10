# survival-typescript
learning for https://typescriptbook.jp/

## set up

### install node.js
- `brew install node@16`
- `echo 'export PATH="/usr/local/opt/node@16/bin:$PATH"' >> ~/.zshrc`
- `node -v`

### install typescript
- `npm install -g typescript`
- `tsc -v`

### install yarn
- `brew install yarn`

### install ts-node
- `npm install -g ts-node`
  
## command

### run javascript
- `node increment.js`

### compile typescript
- `tsc increment.ts`

### run typscript directry
- `ts-node increment.ts`

### react
- `npx create-react-app like-button --template typescript`
- `cd like-buttonn`
- `yarn start`