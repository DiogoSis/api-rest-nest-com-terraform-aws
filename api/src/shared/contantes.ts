export const JWT_SECRET = 'YkoDhjks].,425.4353aHJfsHN34r.d.';

/*ATENÇÃO
constantes não é ideal para tratamento de variaveis sensíveis
estrategias mais comuns

1. Arquivos .env: Use um arquivo .env para variáveis, mas nunca comite o arquivo.
2. Gestão de Segredos: Armazene segredos em serviços como AWS Secrets Manager ou Vault.
3. Contêineres: Injete variáveis em contêineres via docker-compose ou diretamente no Docker.
4. Variáveis de Ambiente do Sistema: Configure variáveis no sistema ou serviço de nuvem, sem salvar localmente.
5. CI/CD: Use ferramentas de CI/CD para injetar segredos durante o build/deploy, sem expor no código.
6. Criptografia: Encripte segredos se precisar salvá-los em arquivos ou banco de dados.
7. Kubernetes Secrets: No Kubernetes, use Secrets para armazenar variáveis sensíveis com segurança.
*/
