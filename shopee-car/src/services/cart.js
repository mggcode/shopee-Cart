//quais ações que meu carrinho pode fazer

//casos de uso

//-> adicionar item do carrinho

async function addItem(usercart, item){
usercart.push(item);
}

//calcular o total do carrinho

async function calculateTotal(userCart) {
    console.log("\n🛒 Total do carrinho é:")
  
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`🎁 Total: R$ ${result}`);
  }
  

// Deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    if(index !== -1) {
      userCart.splice(index, 1)
    }
  }

// Remover item do carrinho
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name)
  
    if(indexFound == -1) {
      console.log('Item não encontrado')
      return
    }
  
    if(userCart[indexFound].quantity > 1) { 
      userCart[indexFound].quantity -= 1
      return
    }
    if(userCart[indexFound].quantity == 1) { 
      userCart.splice(indexFound, 1)
      return
    }
  }

  // Exibindo carrinho
async function displayCart(userCart) {
    console.log("\n📋 Itens do carrinho:")
    userCart.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} un | Subtotal = R$ ${item.subtotal()}`)
    })
  }


export{
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}
