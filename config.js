/* =========================================================
   CONFIGURAÇÃO DO SITE — Pudinzin da Vivi (Natal)
   Para mudar preço, prazo, WhatsApp ou taxas, mexa SÓ aqui.
   ========================================================= */
(function (root) {
  var CONFIG = {
    // WhatsApp da Vivi: 55 + DDD + número, só números
    WHATSAPP: '5521998975073',

    // Endereço da planilha de pedidos (Apps Script). Com ele, os pedidos ficam
    // salvos na planilha e o aviso no WhatsApp sai pela própria planilha.
    PLANILHA_URL: 'https://script.google.com/macros/s/AKfycbyEa7Z8-7hWPvlkdbEHwjF-fFdKeDMCwY9XocaYS4TLjY1UxoTc2XcQxXB9ZMnY28qp0w/exec',

    // Só use se NÃO for usar a planilha: chave do CallMeBot para avisar a Vivi
    CALLMEBOT_APIKEY: '',

    // InfiniteTag da Vivi (o nome de usuário no app InfinitePay), sem o $
    INFINITETAG: 'pudinzindavivi',

    // Último dia para pedidos (depois disso o site fecha as encomendas)
    PRAZO_FINAL: '2026-12-15T23:59:59-03:00',
    PRAZO_TEXTO: '15/12',

    // Produtos (preço em reais)
    PRODUTOS: [
      { id: 'tradicional', nome: 'Pudim Tradicional', preco: 85,
        descricao: 'Lisinho, sem furinhos, com calda de caramelo dourada e brilhante.',
        foto: 'assets/tradicional-metade.png', selo: 'O clássico',
        tamanho: '1 kg · serve 8 fatias generosas' },
      { id: 'chocolate-branco', nome: 'Pudim de Chocolate Branco com Geleia de Morango', preco: 95,
        descricao: 'Feito com chocolate branco nobre, bem cremoso, e coberto com geleia artesanal de morango.',
        foto: 'assets/chocolate-branco-metade.png', selo: 'Especial de Natal',
        tamanho: '1 kg · serve 8 fatias generosas' }
    ],

    // Entregas
    ENTREGAS: [
      { id: 'regiao-oceanica', nome: 'Entrega na Região Oceânica de Niterói', preco: 15,
        data: 'quarta-feira, 23/12', precisaEndereco: true,
        detalhe: 'Entregamos no seu endereço na quarta-feira, 23/12.' },
      { id: 'retirada', nome: 'Retirada em Itaipu', preco: 0,
        data: 'quinta-feira, 24/12', precisaEndereco: false,
        detalhe: 'Para as demais localidades. Na quinta-feira, 24/12, você retira aqui em Itaipu ou chama um Uber para buscar (a corrida fica por sua conta). O endereço vai pelo WhatsApp.' }
    ],

    // Opção de presente
    PRESENTE: {
      // Embalagem de presente: mude 'ativa' para true quando definir o valor
      embalagemAtiva: true,
      embalagemPreco: 10,         // valor POR PUDIM, em reais (provisório)
      embalagemNome: 'Kit presente',
      embalagemDescricao: 'Inclui <b>caixa especial com laço</b> e <b>cartão personalizado</b> com a sua mensagem (escreva logo abaixo).'
    },

    // Produção limitada (total de pudins de Natal)
    LIMITE_PUDINS: 50,

    // Instagram da Pudinzin (sem o @). Vazio = não aparece.
    INSTAGRAM: 'pudinzindavivi',

    // Depoimentos reais de clientes. Vazio = a seção não aparece.
    // Exemplo: { texto: 'Melhor pudim que já comi!', nome: 'Ana, Itaipu' }
    DEPOIMENTOS: [],

    // Perguntas frequentes
    FAQ: [
      { p: 'Qual o tamanho do pudim?', r: 'Cada pudim tem 1 kg e serve 8 fatias generosas.' },
      { p: 'Até quando posso encomendar?', r: 'Até 15/12 ou enquanto houver pudins. A produção de Natal é limitada, então quando acabar, acabou!' },
      { p: 'Quando recebo meu pedido?', r: 'Entregas na Região Oceânica de Niterói na quarta-feira, 23/12 (R$ 15,00). Para as demais localidades, a retirada é em Itaipu na quinta-feira, 24/12: você retira ou chama um Uber para buscar.' },
      { p: 'Posso parcelar?', r: 'Sim. No Pix você paga o valor anunciado. No cartão de crédito dá para parcelar em até 12x, com a taxa da operadora, que varia conforme o número de parcelas.' },
      { p: 'Posso mandar de presente?', r: 'Pode! Marque a opção de presente no pedido e escreva a mensagem que vai no cartãozinho.' },
      { p: 'Qual a validade do pudim?', r: 'Até 10 dias na geladeira. Os pudins ficam prontos um dia antes da entrega, então chegam fresquinhos para a sua ceia.' },
      { p: 'Como devo conservar o pudim?', r: 'Mantenha na geladeira até a hora de servir.' },
      { p: 'Como sei que meu pedido foi confirmado?', r: 'Assim que o pagamento é aprovado, aparece a confirmação na tela e a Vivi recebe seu pedido na hora. Qualquer dúvida, é só chamar no WhatsApp.' }
    ],

    // Parcelamento no cartão (a taxa do parcelamento fica por conta do cliente)
    PARCELAS_MAX: 12
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = CONFIG;
  else root.PUDINZIN = CONFIG;
})(this);
