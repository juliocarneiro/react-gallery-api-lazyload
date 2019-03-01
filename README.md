# Image Gallery
Projeto onde usamos uma api de testes para construir uma galeria de imagens em react.

## Considerações
O Redux não foi utilizado pela baixa complexidade do projeto, neste caso não agrega em nada. 

Utilizei bootstrap para não perder tempo tendo que fazer a UI, caso queiram consultar alguns trabalhos meus fiquem a vontade por aqui pelo github ou em meu site, para ter uma ideia melhor de como eu codo meu css, normalmente uso sass ou styled-components(mais styled-components do que sass atualmente).

Outro ponto, descobri endpoints a mais na api e acabei utilizando, assim como faço em ambientes reais.

## Questionário
Você já teve alguma experiências em desenvolvimento componentes customizados? Como evitar o problema de componentes complexos com baixa performance?
R - Sim, isolando regioes com muito re-render, evitando re-renders que não precisam ser feitos e usando pure components

Na sua opinião, quais são as vantagens de React? quais são as desvantagens/riscos no uso do React?
PROS:
reutilização de componentes
virtual dom
fluxo de dados estavel
opensource
developer tools
CONTRAS:
documentação mais ou menos,
preocupação com SEO,
por estar sempre atualizando features fica meio dificil acompanhar

Considerando uma tela em React contendo informações em tempo real, que deve ser atualizada sempre que ocorrer um determinada ação no servidor, qual arquitetura ou protocolo de comunicação você utilizaria?
R - Da pra usar o socket.io, porém eu prefiro usar o firebase.

Você já implementou reat com suporte a i18n ? quais os pontos importantes a serem considerados?
R - Nunca, porem acho internacionalização importante em produtos que tem um público global.

## Ambiente de teste

Instalar dependencias:

`yarn`

Rodar servidor de teste:

`yarn start`

Buildar o app:

`yarn build`

Output url: [http://localhost:3000](http://localhost:3000)

Homolog: [http://absurd-sea.surge.sh](http://absurd-sea.surge.sh)
