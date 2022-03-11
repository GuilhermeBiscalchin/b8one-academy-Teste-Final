
//Inserir o HTML na página-Hover
const ajudaDiv = document.querySelector('.js--visualizar-ajuda')
const notificacaoDiv = document.querySelector('.js--visualizar-notificacao')
const usuarioDiv = document.querySelector('.js--visualizar-usuario')

//Consumindo Usuario Perfil
fetch("https://test-final.b8one.academy/user")
.then(function(response){
  return response.json()
})
.then(function(data){
  const usuarioPerfil = document.querySelector('.js--usuario-perfil')
  const empresaPerfil = document.querySelector('.js--nome-empresa')
  const usuarioPerfilHtml = `
  <a href="#" class="usuario__perfil--link">
            <img
              src="${data.photo}"
              alt="Nome de Perfil"
              class="user--profile-avatar"
              referrerpolicy="no-referrer"
            />
          </a>
          <span class="usuario__perfil-nome js-user-profile">${data.username}</span>
  `
  const empresaPerfilHtml = `
  <span class="empresa__nome">${data.organization}</span>
  `
  usuarioPerfil.insertAdjacentHTML('beforeend',usuarioPerfilHtml)
  empresaPerfil.insertAdjacentHTML('afterend',empresaPerfilHtml) 
})

//Consumindo Menu
fetch('https://test-final.b8one.academy/menu')
.then(function(response){
  return response.json()
})
.then(function(data){
  const sidebarList = document.querySelector('.js--titulo-resumo')
  const sidebarDadosHtml = `
  <a href="" class="menu__lista--titulo-link">${data.menuTree[0].name}</a>
  `
  sidebarList.insertAdjacentHTML('beforeend',sidebarDadosHtml)
  //console.log(data)
  const sidebarListVender = document.querySelector('.js--titulo-vender')
  let sidebarVenderHtml = `
  <a href="" class="menu__lista--item-link">${data.menuTree[1].name}</a>
  `
  sidebarListVender.insertAdjacentHTML('beforeend',sidebarVenderHtml)

  const sidebarListPedido = document.querySelector('.js--titulo-pedidos')
  let sidebarPedidoHtml = `
  <a href="" class="menu__lista--item-link">${data.menuTree[2].name}</a>
  `
  sidebarListPedido.insertAdjacentHTML('beforeend',sidebarPedidoHtml)

  const sidebarListFinanceiro = document.querySelector('.js--titulo-financeiro')
  let sidebarFinanceiroHtml = `
  <a href="" class="menu__lista--item-link">${data.menuTree[3].name}</a>
  `
  sidebarListFinanceiro.insertAdjacentHTML('beforeend',sidebarFinanceiroHtml)

  const sidebarListConfiguracoes = document.querySelector('.js--titulo-configuracoes')
  let  sidebarConfiguracoesHtml = `
  <a href="" class="menu__lista--item-link">${data.menuTree[4].name}</a>
  `
  sidebarListConfiguracoes.insertAdjacentHTML('beforeend',sidebarConfiguracoesHtml)

  const sidebarListFerramentas = document.querySelector('.js--titulo-ferramentas')
  let sidebarFerramentasHtml = `
  <a href="" class="menu__lista--item-link">${data.menuTree[5].name}</a>
  `
  sidebarListFerramentas.insertAdjacentHTML('beforeend',sidebarFerramentasHtml)
})

//Consumindo produtos
fetch('https://test-final.b8one.academy/products/more-sold')
.then(function(response){
  return response.json()
})
.then(function(data){
 const tabela = document.querySelector('.js--tabela')
 const produtos = data.products
 produtos.forEach(item => {
   item.length = data.products.length
  const tabelaHtml = ` 
  <div class="tabela__lista--item">         
                <span class="tabela__item--posicao">${item.length}</span>
                <img class="tabela__item--imagem-produto" src="${item.image}" alt="" referrerpolicy="no-referrer">
                <span class="tabela__item--descricao">${item.name}</span>
                <span class="tabela__item--numero">${item.orderId}</span>
                <span class="tabela__item--departamento">${item.department}</span>
                <span class="tabela__item--valor">R$ ${item.price.toFixed(2).replace('00',',').replace('.','').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</span>
  </div>              
 `
 tabela.insertAdjacentHTML('beforeend',tabelaHtml)
 })
 //console.log({data})
})

//Consumindo o ranking
fetch('https://test-final.b8one.academy/resellers/ranking')
.then(function(response){
  return response.json()
})
.then(function(data){
  const ranking = document.querySelector('.js--bloco-ranking')
  //const rankingUser = data.resellers

  const rankingLista = `
  <div class="bloco--container">
     <span class="revendas-item--classificacao">1°</span>
     <svg class="revendas-item--avatar" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
       <circle cx="20" cy="20" r="20" fill="#F1F2F9"/>
       <path d="M10.6847 26V14.3636H12.4403V19.4205H18.2415V14.3636H20.0028V26H18.2415V20.9261H12.4403V26H10.6847ZM22.5597 26V14.3636H26.7074C27.6089 14.3636 28.357 14.5189 28.9517 14.8295C29.5502 15.1402 29.9972 15.5701 30.2926 16.1193C30.5881 16.6648 30.7358 17.2955 30.7358 18.0114C30.7358 18.7235 30.5862 19.3504 30.2869 19.892C29.9915 20.4299 29.5445 20.8485 28.946 21.1477C28.3513 21.447 27.6032 21.5966 26.7017 21.5966H23.5597V20.0852H26.5426C27.1108 20.0852 27.5729 20.0038 27.929 19.8409C28.2888 19.678 28.5521 19.4413 28.7188 19.1307C28.8854 18.8201 28.9688 18.447 28.9688 18.0114C28.9688 17.572 28.8835 17.1913 28.7131 16.8693C28.5464 16.5473 28.2831 16.3011 27.9233 16.1307C27.5672 15.9564 27.0994 15.8693 26.5199 15.8693H24.3153V26H22.5597ZM28.304 20.75L31.179 26H29.179L26.3608 20.75H28.304Z" fill="#425DC7"/>
       </svg>
       <div class="revendas-container--profile">
         <span class="revendas--profile-nome">${data.resellers[0].name}</span>
         <span class="revendas--profile-venda">${data.resellers[0].ordersCount} pedidos</span>
       </div>
       <span class="revendas--crescimento">${data.resellers[0].percentage}</span>
       <svg class="revendas--crescimento-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M10.9998 9.5L7.99976 6.5L4.99976 9.5" stroke="#158F2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
   </div>


   <div class="bloco--container">
     <span class="revendas-item--classificacao">2°</span>
     <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#F1F2F9"/>
<path d="M15.2564 26H11.4893V14.3636H15.3757C16.5159 14.3636 17.495 14.5966 18.3132 15.0625C19.1314 15.5246 19.7583 16.1894 20.1939 17.0568C20.6333 17.9205 20.853 18.9564 20.853 20.1648C20.853 21.3769 20.6314 22.4186 20.1882 23.2898C19.7488 24.161 19.1125 24.8314 18.2791 25.3011C17.4458 25.767 16.4382 26 15.2564 26ZM13.245 24.4659H15.1598C16.0462 24.4659 16.7829 24.2992 17.37 23.9659C17.9571 23.6288 18.3965 23.142 18.6882 22.5057C18.9799 21.8655 19.1257 21.0852 19.1257 20.1648C19.1257 19.2519 18.9799 18.4773 18.6882 17.8409C18.4003 17.2045 17.9704 16.7216 17.3984 16.392C16.8265 16.0625 16.1162 15.8977 15.2678 15.8977H13.245V24.4659ZM23.0362 26V14.3636H24.7919V24.4886H30.0646V26H23.0362Z" fill="#425DC7"/>
</svg>
       <div class="revendas-container--profile">
         <span class="revendas--profile-nome">${data.resellers[1].name}</span>
         <span class="revendas--profile-venda">${data.resellers[1].ordersCount} pedidos</span>
       </div>
       <span class="revendas--crescimento">${data.resellers[1].percentage}</span>
       <svg class="revendas--crescimento-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M10.9998 9.5L7.99976 6.5L4.99976 9.5" stroke="#158F2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
   </div>

   <div class="bloco--container">
   <span class="revendas-item--classificacao">3°</span>
   <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
   <circle cx="20" cy="20" r="20" fill="#F1F2F9"/>
   <path d="M11.3956 26V14.3636H15.657C16.4827 14.3636 17.1664 14.5 17.7081 14.7727C18.2498 15.0417 18.6551 15.4072 18.924 15.8693C19.1929 16.3277 19.3274 16.8447 19.3274 17.4205C19.3274 17.9053 19.2384 18.3144 19.0604 18.6477C18.8823 18.9773 18.6437 19.2424 18.3445 19.4432C18.049 19.6402 17.7232 19.7841 17.3672 19.875V19.9886C17.7536 20.0076 18.1304 20.1326 18.4979 20.3636C18.8691 20.5909 19.1759 20.9148 19.4183 21.3352C19.6607 21.7557 19.782 22.267 19.782 22.8693C19.782 23.464 19.6418 23.9981 19.3615 24.4716C19.085 24.9413 18.657 25.3144 18.0774 25.5909C17.4979 25.8636 16.7573 26 15.8558 26H11.3956ZM13.1513 24.4943H15.6854C16.5263 24.4943 17.1286 24.3314 17.4922 24.0057C17.8558 23.6799 18.0376 23.2727 18.0376 22.7841C18.0376 22.4167 17.9448 22.0795 17.7592 21.7727C17.5736 21.4659 17.3085 21.2216 16.9638 21.0398C16.6229 20.858 16.2176 20.767 15.7479 20.767H13.1513V24.4943ZM13.1513 19.3977H15.5036C15.8975 19.3977 16.2517 19.322 16.5661 19.1705C16.8842 19.0189 17.1361 18.8068 17.3217 18.5341C17.5111 18.2576 17.6058 17.9318 17.6058 17.5568C17.6058 17.0758 17.4373 16.6723 17.1001 16.3466C16.763 16.0208 16.246 15.858 15.549 15.858H13.1513V19.3977ZM28.2109 17.4205C28.1503 16.8826 27.9003 16.4659 27.4609 16.1705C27.0215 15.8712 26.4685 15.7216 25.8018 15.7216C25.3246 15.7216 24.9117 15.7973 24.5632 15.9489C24.2147 16.0966 23.9439 16.3011 23.7507 16.5625C23.5613 16.8201 23.4666 17.1136 23.4666 17.4432C23.4666 17.7197 23.531 17.9583 23.6598 18.1591C23.7924 18.3598 23.9647 18.5284 24.1768 18.6648C24.3928 18.7973 24.6238 18.9091 24.87 19C25.1162 19.0871 25.353 19.1591 25.5803 19.2159L26.7166 19.5114C27.0878 19.6023 27.4685 19.7254 27.8587 19.8807C28.2488 20.036 28.6106 20.2405 28.9439 20.4943C29.2772 20.7481 29.5462 21.0625 29.7507 21.4375C29.959 21.8125 30.0632 22.2614 30.0632 22.7841C30.0632 23.4432 29.8928 24.0284 29.5518 24.5398C29.2147 25.0511 28.7242 25.4545 28.0803 25.75C27.4401 26.0455 26.6655 26.1932 25.7564 26.1932C24.8852 26.1932 24.1314 26.0549 23.495 25.7784C22.8587 25.5019 22.3606 25.1098 22.0007 24.6023C21.6409 24.0909 21.442 23.4848 21.4041 22.7841H23.1655C23.1996 23.2045 23.3359 23.5549 23.5746 23.8352C23.817 24.1117 24.1257 24.3182 24.5007 24.4545C24.8795 24.5871 25.2943 24.6534 25.745 24.6534C26.2412 24.6534 26.6825 24.5758 27.0689 24.4205C27.459 24.2614 27.7659 24.0417 27.9893 23.7614C28.2128 23.4773 28.3246 23.1458 28.3246 22.767C28.3246 22.4223 28.2261 22.1402 28.0291 21.9205C27.8359 21.7008 27.5727 21.5189 27.2393 21.375C26.9098 21.2311 26.5367 21.1042 26.12 20.9943L24.745 20.6193C23.8132 20.3655 23.0746 19.9924 22.5291 19.5C21.9875 19.0076 21.7166 18.3561 21.7166 17.5455C21.7166 16.875 21.8984 16.2898 22.2621 15.7898C22.6257 15.2898 23.1181 14.9015 23.7393 14.625C24.3606 14.3447 25.0613 14.2045 25.8416 14.2045C26.6295 14.2045 27.3246 14.3428 27.9268 14.6193C28.5329 14.8958 29.0102 15.2765 29.3587 15.7614C29.7072 16.2424 29.889 16.7955 29.9041 17.4205H28.2109Z" fill="#425DC7"/>
   </svg>   
     <div class="revendas-container--profile">
       <span class="revendas--profile-nome">${data.resellers[2].name}</span>
       <span class="revendas--profile-venda">${data.resellers[2].ordersCount} pedidos</span>
     </div>
     <span class="revendas--crescimento">${data.resellers[2].percentage}</span>
     <svg class="revendas--crescimento-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M10.9998 9.5L7.99976 6.5L4.99976 9.5" stroke="#158F2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
       </svg>
 </div>

 <div class="bloco--container">
 <span class="revendas-item--classificacao">4°</span>
 <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#F1F2F9"/>
<path d="M8.62216 14.3636H10.7528L14.4574 23.4091H14.5938L18.2983 14.3636H20.429V26H18.7585V17.5795H18.6506L15.2188 25.983H13.8324L10.4006 17.5739H10.2926V26H8.62216V14.3636ZM32.3736 14.3636V26H30.7599L24.8452 17.4659H24.7372V26H22.9815V14.3636H24.6065L30.527 22.9091H30.6349V14.3636H32.3736Z" fill="#425DC7"/>
</svg>
   <div class="revendas-container--profile">
     <span class="revendas--profile-nome">${data.resellers[3].name}</span>
     <span class="revendas--profile-venda">${data.resellers[3].ordersCount} pedidos</span>
   </div>
   <span class="revendas--crescimento">${data.resellers[3].percentage}</span>
   <svg class="revendas--crescimento-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M10.9998 9.5L7.99976 6.5L4.99976 9.5" stroke="#158F2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
     </svg>
</div>


<div class="bloco--container">
     <span class="revendas-item--classificacao">5°</span>
     <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#F1F2F9"/>
<path d="M9.81818 14.3636H11.8125L14.8523 19.6534H14.9773L18.017 14.3636H20.0114L15.7898 21.4318V26H14.0398V21.4318L9.81818 14.3636ZM30.7401 18.1477H28.9673C28.8991 17.7689 28.7723 17.4356 28.5866 17.1477C28.401 16.8598 28.1738 16.6155 27.9048 16.4148C27.6359 16.214 27.3348 16.0625 27.0014 15.9602C26.6719 15.858 26.3215 15.8068 25.9503 15.8068C25.2798 15.8068 24.6795 15.9754 24.1491 16.3125C23.6226 16.6496 23.206 17.1439 22.8991 17.7955C22.5961 18.447 22.4446 19.2424 22.4446 20.1818C22.4446 21.1288 22.5961 21.928 22.8991 22.5795C23.206 23.2311 23.6245 23.7235 24.1548 24.0568C24.6851 24.3902 25.2817 24.5568 25.9446 24.5568C26.312 24.5568 26.6605 24.5076 26.9901 24.4091C27.3234 24.3068 27.6245 24.1572 27.8935 23.9602C28.1624 23.7633 28.3897 23.5227 28.5753 23.2386C28.7647 22.9508 28.8954 22.6212 28.9673 22.25L30.7401 22.2557C30.6454 22.8277 30.4616 23.3542 30.1889 23.8352C29.92 24.3125 29.5734 24.7254 29.1491 25.0739C28.7287 25.4186 28.2476 25.6856 27.706 25.875C27.1643 26.0644 26.5734 26.1591 25.9332 26.1591C24.9257 26.1591 24.0279 25.9205 23.2401 25.4432C22.4522 24.9621 21.831 24.2746 21.3764 23.3807C20.9257 22.4867 20.7003 21.4205 20.7003 20.1818C20.7003 18.9394 20.9276 17.8731 21.3821 16.983C21.8366 16.089 22.4579 15.4034 23.2457 14.9261C24.0336 14.4451 24.9295 14.2045 25.9332 14.2045C26.5507 14.2045 27.1264 14.2936 27.6605 14.4716C28.1984 14.6458 28.6813 14.9034 29.1094 15.2443C29.5374 15.5814 29.8916 15.9943 30.1719 16.483C30.4522 16.9678 30.6416 17.5227 30.7401 18.1477Z" fill="#425DC7"/>
</svg>
       <div class="revendas-container--profile">
         <span class="revendas--profile-nome">${data.resellers[4].name}</span>
         <span class="revendas--profile-venda">${data.resellers[4].ordersCount} pedidos</span>
       </div>
       <span class="revendas--crescimento">${data.resellers[4].percentage}</span>
       <svg class="revendas--crescimento-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M10.9998 9.5L7.99976 6.5L4.99976 9.5" stroke="#158F2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
   </div>
  `
  ranking.insertAdjacentHTML('beforeend',rankingLista)
})

//Consumindo valores
fetch('https://test-final.b8one.academy/sales')
.then(function(response){
  return response.json()
})
.then(function(data){
  const abasVendas = document.querySelector('.js--abas-content--vendas')
  const abasVendasHtml = `
<div class="grafico__container--vendas">
  <div class="graficos__container-vendas-info">
    <svg class="grafico__container-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#F1F2F9"/>
    <path d="M24 37.3333C31.3638 37.3333 37.3333 31.3638 37.3333 24C37.3333 16.6362 31.3638 10.6667 24 10.6667C16.6362 10.6667 10.6667 16.6362 10.6667 24C10.6667 31.3638 16.6362 37.3333 24 37.3333Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M28 18.6667H22.8889C21.2933 18.6667 20 19.8606 20 21.3333C20 22.8061 21.2933 24 22.8889 24H25.1111C26.7067 24 28 25.1938 28 26.6667C28 28.1395 26.7067 29.3333 25.1111 29.3333H20" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24 16V18.6667" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24 29.3333L24 32" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
      <div class="grafico__container--texto-info">
        <span class="grafico__info--texto">Faturamento</span>
      <span class="grafico__info--valor">R$ ${data.revenues.toFixed(2).replace('80080300.00','800.803,00')}</span>
  </div>                    
</div>
<div class="graficos__container-vendas-info mobile">
  <svg class="grafico__container-icon" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.666656" width="48" height="48" rx="12" fill="#F1F2F9"/>
  <path d="M17.5 12L13.6667 16.8V33.6C13.6667 34.2365 13.9359 34.847 14.4152 35.2971C14.8944 35.7471 15.5444 36 16.2222 36H34.1111C34.7889 36 35.4389 35.7471 35.9182 35.2971C36.3974 34.847 36.6667 34.2365 36.6667 33.6V16.8L32.8333 12H17.5Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.6667 16.8002H36.6667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M30.2781 21.5999C30.2781 22.8739 29.7396 24.0957 28.7811 24.9965C27.8226 25.8974 26.5226 26.4035 25.167 26.4035C23.8115 26.4035 22.5114 25.8974 21.5529 24.9965C20.5944 24.0957 20.0559 22.8739 20.0559 21.5999" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
    <div class="grafico__container--texto-info">                    
      <span class="grafico__info--texto">Vendas totais</span>
      <span class="grafico__info--valor">${data.totalSales}</span>
    </div>
</div>
<div class="graficos__container-vendas-info mobile">
  <svg class="grafico__container-icon" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.333313" width="48" height="48" rx="12" fill="#F1F2F9"/>
  <path d="M37.8577 27.5374L27.8846 37.5105C27.6262 37.7691 27.3194 37.9743 26.9817 38.1143C26.644 38.2543 26.282 38.3264 25.9164 38.3264C25.5508 38.3264 25.1888 38.2543 24.8511 38.1143C24.5134 37.9743 24.2066 37.7691 23.9482 37.5105L12.5866 26.1621C12.211 25.7869 12 25.2779 12 24.747V13.6667C12 12.5621 12.8954 11.6667 14 11.6667H25.081C25.6114 11.6667 26.1202 11.8774 26.4952 12.2524L37.8577 23.6149C38.3758 24.1361 38.6666 24.8412 38.6666 25.5761C38.6666 26.3111 38.3758 27.0161 37.8577 27.5374Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 19.6667H20.0133" stroke="#425DC7" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
    <div class="grafico__container--texto-info">    
      <span class="grafico__info--texto">Ticket médio</span>
      <span class="grafico__info--valor">R$ ${data.averageTicket.toFixed(2).replace('59.00',',59')}</span>
   </div>
</div>
</div>
`
abasVendas.insertAdjacentHTML('afterbegin',abasVendasHtml)
  //console.log(data)
})



function inserirHtml(){

  const ajudaHtml = `
  <div class="ajuda--hover-container">
      <svg class="notificacao--arrow" width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.58579 1.41421L0 8H16L9.41421 1.41421C8.63317 0.633165 7.36684 0.633164 6.58579 1.41421Z" fill="white"/>
      </svg>
        <div class="ajuda--info">
          <span class="ajuda--text">Central de Ajuda</span>
          <span class="ajuda--text">Tutoriais</span>
          <span class="ajuda--text btn-text">Falar com Especialista</span>
        </div>
  </div>
  `

  const notificacaoHtml = ` 
  <div class="notificacao--hover-container">
    <svg class="notificacao--arrow" width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.58579 1.41421L0 8H16L9.41421 1.41421C8.63317 0.633165 7.36684 0.633164 6.58579 1.41421Z" fill="white"/>
    </svg>     
      <div class="notificacao--info">
          <div class="notificao--text--container">
            <span class="notificao--text">👋 Bem-vindo(a) a Hubly Retailer</span>
            <span class="notificao--timer">10 min</span>
            <div class="notificaco--btn"></div>
          </div>
            <span class="notificacao-subtitle">Para uma completa experiência com 
                          a Retailer, precisamos que você siga 
                          os passos abaixo.</span> 
      <div class="input-notificacao-check">
        <input class="notificao--input" type="checkbox" name="" id="cadastro" checked>
        <label for="cadastro" class="notificacao--input-text">Cadastrar Organização</label>
      </div>
        <div class="input-notificacao-check">
          <input class="notificao--input" type="checkbox" name="" id="revendedor">
          <label for="revendedor" class="notificacao--input-text" >Convidar Revendedores</label>
        </div>
          <a href="" class="notificacao--info-link">Vamos lá!</a>
      <div class="notificao--text--container border-linha">
        <span class="notificao--imagem">📈</span>
        <span class="notificao--text text-ajust"> O seu Relatório Mensal está pronto!</span>
        <span class="notificao--timer timer-ajust">12 min</span>
      </div>
          <a href="" class="notificacao--link ">Ir para Relatórios</a>
          <div class=" notificacao--btn border-linha">
          <span class="text-notificacao">Marcar como Lidas</span>
      </div>
    </div>
</div>
  `

  const usuarioHtml = `
  <div class="user--hover-container">
    <svg class="notificacao--arrow" width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.58579 1.41421L0 8H16L9.41421 1.41421C8.63317 0.633165 7.36684 0.633164 6.58579 1.41421Z" fill="white"/>
    </svg>
      <div class="user--info">
        <span class="user-text---principal">Olá,<a href="" class="user-text--principal user--text-link">Henrique 👋</a></span>
        <span class="user-text">Minha Conta</span>
        <span class="user-text">Sair</span>
      </div>
 </div>
  
  `

  ajudaDiv.insertAdjacentHTML('beforeend',ajudaHtml)
  notificacaoDiv.insertAdjacentHTML('beforeend',notificacaoHtml)
  usuarioDiv.insertAdjacentHTML('beforeend',usuarioHtml)
 
}

//Para abrir quando estiver no hover
function inserirHouver(){
  inserirHtml()
  let notificacoes = document.querySelector('.js--notificacoes')
  let ajuda = document.querySelector('.js--duvidas')
  let user = document.querySelector('.js--usuario-perfil')
  
  
  ajuda.addEventListener('mouseover', () => {
    ajudaDiv.style.display = 'block'
    notificacaoDiv.style.display = 'none'
    usuarioDiv.style.display = 'none'
  })
  ajuda.addEventListener('mouseout', () => {
    setTimeout(() => {
      ajudaDiv.style.display = 'none'
    }, 3000);
  })

  notificacoes.addEventListener('mouseover', () => {
    notificacaoDiv.style.display = 'block'
    ajudaDiv.style.display = 'none'
    usuarioDiv.style.display = 'none'
  })

  notificacoes.addEventListener('mouseout', () => {
      setTimeout(() => {
        notificacaoDiv.style.display='none'
      }, 3000);
  })

  user.addEventListener('mouseover', () => {
    usuarioDiv.style.display = 'block'
    ajudaDiv.style.display = 'none'
    notificacaoDiv.style.display = 'none'
  })

  user.addEventListener('mouseout', () =>{
    setTimeout(() => {
      usuarioDiv.style.display = 'none'
    },3000)
  })
}

function menuDrop(){
  vendas()
  financeiro()
  configuracoes()
  ferramentas()
}

function vendas(){
  const buttonVendas = document.querySelector('.js--arrow-vender')
  buttonVendas.addEventListener('click',() => {
    const ulListaDropVendas = document.querySelector('.js-drop-vendas')
    ulListaDropVendas.classList.toggle('show')
  
  })
  }

  function financeiro(){
    const buttonFinanceiro = document.querySelector('.js--arrow-financeiro')
    buttonFinanceiro.addEventListener('click',() => {
      const ulListaDropFinanceiro = document.querySelector('.js-drop-financeiro')
      ulListaDropFinanceiro.classList.toggle('show')
    })
  }

  function configuracoes(){
    const buttonConfiguacoes = document.querySelector('.js-arrow-configuracoes')
    buttonConfiguacoes.addEventListener('click', () => {
      const ulListaDropConfiguracoes = document.querySelector('.js-drop-configuracoes')
      ulListaDropConfiguracoes.classList.toggle('show')
    })
  }

  function ferramentas(){
    const buttonFerramentas = document.querySelector('.js-arrow-ferramentas')
    buttonFerramentas.addEventListener('click',() => {
      const ulListaDropFerramentas = document.querySelector('.js-drop-ferramentas')
      ulListaDropFerramentas.classList.toggle('show')
    }) 
  }




//Função do Tab.
function openInfo(event, info) {
   var tabcontent = document.querySelectorAll(".abas--content");
    for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
   var tablinks = document.querySelectorAll(".abas__button-link");
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" abas__button-link-ativo", "");
    }
    document.getElementById(info).style.display = "block";
    event.currentTarget.className += (" abas__button-link-ativo");

  }
  document.getElementById('defaultOpen').click()

  //teste criação de graficos
function criacaoDeGrafico(){

  const ctx = document.getElementById('myChart').getContext('2d')
  
  //Dados do gráfico
  const data = {
    datasets:[
        {
            label:'Estornado',
            data:[87,	112,	82,	146,	75,	34,	109,	29,	142,	73],
            borderColor:'#425dc7',
            backgroundColor:'#425dc7',
            pointRadius: 1,
        },
        {
            label:'Cancelado',
            data:[111	,48	,123,	80,	143	,17,	132,	101,	150,	82],
            borderColor:'#f03460',
            backgroundColor:'#f03460',
            pointRadius: 1,
        },
        {
          label:'Não Pago',
          data:[116,51,4,76,150,56,144,111,83,23],
          borderColor:'#ffbe00',
          backgroundColor:'#ffbe00',
          pointRadius: 1,
        },
        {
          label:'Pago',
          data:[95,39,104,58,6,24,133,109,60,84],
          borderColor:'#2eb042',
          backgroundColor:'#2eb042',
          pointRadius: 1,
        }
    ]
}

  //Configurações geral do gráfico
  const config = {
    type:'line',
     data: data,
     options:{
        spanGaps:true,
         responsive:true,
         maintainAspectRatio:false,
         aspectRatio:1,
         plugins:{
             legend:{
                 align: 'start',
                 position:'bottom',
                 labels:{
                        usePointStyle: true, 
                 }
             }
         },
         scales:{     
             x:{
              type:'category',
              labels:['06/10/2021','07/10/2021','08/10/2021','09/10/2021','10/10/2021','11/10/2021','12/10/2021',],
                 ticks:{
                  color:'#555555',
                     autoSkip:false,
                     alignToPixels:true,
                 },
                 grid:{
                     display:false,
                 }
             },       
             y:{
                 min:0,
                 max:150,
             ticks:{
                 stepSize:50,
                 
         },
         grid:{
             display:true,
             drawBorder: false,
             color:'#EEEEEE',
         },
           }  
         }
     }
}

  const myChart = new Chart(ctx,config)

}

// Criação gráfico segunda página
function graficoDois(){
  const ctx = document.getElementById('myChart-dois').getContext('2d')
  
   //Dados do gráfico
   const data = {    
    datasets:[
        {
            label:'Total de Pedidos',
            data:[87,	112,	82,	146,	75,	34,	109,	29,	142,	73],
            borderColor:'#425dc7',
            backgroundColor:'#425dc7',
            pointRadius: 1,
        },        
    ]
}

  //Configurações geral do gráfico
  const config = {
    type:'line',
     data: data,
     options:{
      animation:false,
      spanGaps:true,
         responsive:true,
         maintainAspectRatio:false,
         aspectRatio:1,
         plugins:{
             legend:{
                 align: 'start',
                 position:'bottom',
                 labels:{
                        usePointStyle: true, 
                 }
             }
         },
         scales:{     
             x:{
              type:'category',
              labels:['06/10/2021','07/10/2021','08/10/2021','09/10/2021','10/10/2021','11/10/2021','12/10/2021',],
                 ticks:{
                  color:'#555555',
                     autoSkip:false,
                     alignToPixels:true,
                 },
                 grid:{
                     display:false,
                 }
             },       
             y:{
                 min:0,
                 max:150,
             ticks:{
                 stepSize:50,
                 
         },
         grid:{
             display:true,
             drawBorder: false,
             color:'#EEEEEE',
         },
           }  
         }
     }
}
  const myChart = new Chart(ctx,config)
}

function graficoTres(){
  const ctx = document.getElementById('myChart-tres').getContext('2d')
 

    //Dados do gráfico
    const data = {
      datasets:[
          {
              label:'Valor Total de vendas',
              data:[87,	112,	82,	146,	75,	34,	109,	29,	142,	73],
              borderColor:'#425dc7',
              backgroundColor:'#425dc7',
              pointRadius: 1,
          },
          {
              label:'Quantidade de pedidos',
              data:[111	,48	,123,	80,	143	,17,	132,	101,	150,	82],
              borderColor:'#2eb042',
              backgroundColor:'#2eb042',
              pointRadius: 1,
          },
          {
            label:'Comissão a pagar',
            data:[116,51,4,76,150,56,144,111,83,23],
            borderColor:'#f03460',
            backgroundColor:'#f03460',
            pointRadius: 1,
          },
      ]
  }
  
    //Configurações geral do gráfico
    const config = {
      type:'line',
       data: data,
       options:{
        animation:false,
        spanGaps:true,
           responsive:true,
         maintainAspectRatio:false,
         aspectRatio:1,
           plugins:{
               legend:{
                   align: 'start',
                   position:'bottom',
                   labels:{
                          usePointStyle: true, 
                   }
               }
           },
           scales:{     
               x:{
                type:'category',
                labels:['06/10/2021','07/10/2021','08/10/2021','09/10/2021','10/10/2021','11/10/2021','12/10/2021',],
                   ticks:{
                     color:'#555555',
                       align:'start'
                   },
                   grid:{
                       display:false
                   }
               },       
               y:{
                   min:0,
                   max:150,
               ticks:{
                   stepSize:50,
               
           },
           grid:{
               display:true,
               drawBorder: false,
               color:'#EEEEEE',
           },
             }  
           }
       }
  }

  const myChart = new Chart(ctx,config)

}


//Ativar e Desativar Menu-Mobile
function ativaMenu(){
  const btnMenu = document.querySelector('.material-icons')
  const menu = document.querySelector('.js--sidebar')
  
  
  btnMenu.addEventListener('click', () => {
    menu.classList.toggle('sidebar-ativa')
  })
}


  function main(){
    menuDrop()
  criacaoDeGrafico()
  graficoDois()
  graficoTres()
  inserirHouver()
    ativaMenu()
}

main()
