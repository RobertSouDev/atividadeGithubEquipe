# Documentação para Rodar o Projeto React com Vite

Este documento descreve como configurar e rodar o projeto React utilizando o Vite. Certifique-se de que você tenha o [Node.js](https://nodejs.org/) e o Git instalados na sua máquina antes de começar.

---

## Passos para Rodar o Projeto

1. **Clonar o Repositório**  
   Abra o terminal e execute o comando abaixo para clonar o repositório do projeto:

   ```bash
   git clone https://github.com/RobertSouDev/atividadeGithubEquipe.git
   ```

2. **Acessar o Diretório do Projeto**

    Após clonar o repositório, entre no diretório do projeto:  

   ```bash
   cd atividadeGithubEquipe
   ```

3. **Instalar as Dependências**     
    Instale todas as dependências necessárias para rodar o projeto:

    ```bash
       npm install
   ```

4. **Iniciar o Servidor de Desenvolvimento**    
    Após instalar as dependências, inicie o servidor de desenvolvimento com o seguinte comando:

    ```bash
       npm run dev
   ```
    Isso iniciará o Vite e exibirá a URL local onde o projeto pode ser acessado. Normalmente, será algo como:

     ```bash
        Local: http://localhost:5173/
    ```

  5. **Acessar os Componentes no Diretório `Devs` ou `Ouvinte`**  
   Após iniciar o servidor, navegue para o diretório `src/components` e escolha entre os subdiretórios `Devs` ou `Ouvinte` para editar os componentes.

6. **Encontrar e Editar o Componente com Seu Nome**
    Dentro do diretório selecionado (Devs ou Ouvinte), localize o componente que possui seu nome no arquivo. Por exemplo:

    CardRobert.jsx (So o dono devara meche neli no ex o Robert)


## Passos para Trabalhar com Git e GitHub

7. **Criar uma Nova Branch**  
   Crie uma nova branch utilizando o comando abaixo, substituindo `SeuNome` pelo seu nome ou pelo nome que deseja dar à branch:

   ```bash
   git branch -m SeuNome
   ```


markdown
Copiar código

### 8. Adicionar as Alterações
Adicione todas as alterações feitas no projeto ao staging area com o comando:

```bash
git add .
```

### 9. Fazer um Commit

Faça um commit das alterações com uma mensagem descritiva. Substitua `"SeuNome (Descrição do que você fez)"` por uma descrição adequada:

```bash
git commit -m "SeuNome (Descrição do que você fez)"
```

### 10. Voltar para a Branch main
Troque para a branch principal (main):

```bash
git checkout main
```
### 11.  Sincronizar a Branch main com o Repositório Remoto

Puxe as últimas alterações da branch principal do repositório remoto para garantir que sua branch esteja atualizada:

```bash
git pull origin main
```
### 12. Trocar para Sua Branch
Retorne para a branch que você criou anteriormente:

```bash
git checkout SuaBranch
```
Nota: Substitua SuaBranch pelo nome da branch que você criou.

### 13. Rebase com a Branch main
Realize um rebase da sua branch com a branch main para garantir que as alterações mais recentes estejam incluídas:

```bash
git rebase main
```
### 14. Enviar Sua Branch para o Repositório Remoto
Envie sua branch para o repositório remoto:


```bash
git push origin SuaBranch
```
## 15. Criar um Pull Request no GitHub
Acesse o seu repositório no GitHub e crie um Pull Request (PR) para a branch main. Siga as instruções no GitHub para completar o processo.

### Dúvidas?
Se você tiver alguma dúvida ou encontrar problemas durante os passos acima, é só me chamar para ajudar!







