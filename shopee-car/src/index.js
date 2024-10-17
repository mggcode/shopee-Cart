import * as cartService from "./services/cart.js"
import createItem from "./services/item.js"

const myCart = []
const myWishList = []

console.log("Bem vindo ao seu carrinho da Shopee!")

const item1 = await createItem("monitor", 599.90, 1)
const item2 = await createItem("SSD", 189.30, 3)
const item3 = await createItem("Mouse", 169.29, 1)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item2)

// await cartService.addItem(myWishList, item3)

// await cartService.deleteItem(myCart, item2.name)

await cartService.displayCart(myCart)

await cartService.calculateTotal(myCart)