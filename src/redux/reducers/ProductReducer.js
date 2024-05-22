
import doll1 from "../../images/dollPictures/doll1.png"
import doll2 from "../../images/dollPictures/doll2.png"
import doll4 from "../../images/dollPictures/doll4.png"
import doll5 from "../../images/dollPictures/doll5.png"
import doll6 from "../../images/dollPictures/doll6.png"
import doll7 from "../../images/dollPictures/doll7.png"
import doll8 from "../../images/dollPictures/doll8.png"
import doll9 from "../../images/dollPictures/doll9.png"
import doll10 from "../../images/dollPictures/doll10.png"
import doll11 from "../../images/dollPictures/doll11.jpg"
import doll12 from "../../images/dollPictures/doll12.jpg"
import doll13 from "../../images/dollPictures/doll13.jpg"
import doll14 from "../../images/dollPictures/doll14.jpg"
import doll15 from "../../images/dollPictures/doll15.jpg"
import doll16 from "../../images/dollPictures/doll16.jpg"
import doll17 from "../../images/dollPictures/doll17.jpg"
import doll18 from "../../images/dollPictures/doll18.jpg"
import doll19 from "../../images/dollPictures/doll19.jpg"
import doll20 from "../../images/dollPictures/doll20.png"
import doll21 from "../../images/dollPictures/doll21.png"
import doll22 from "../../images/dollPictures/doll22.png"
import doll23 from "../../images/dollPictures/doll23.png"
import doll24 from "../../images/dollPictures/doll24.png"
import doll25 from "../../images/dollPictures/doll25.png"

const products = [
    { id: 1, name: "Negro doll", price: 250, qty: 2, img: doll1, cart: 0 },
    { id: 2, name: "Tanned doll", price: 250, qty: 2, img: doll2, cart: 0 },
  { id: 4, name: "Summer doll", price: 198, qty: 9, img: doll4, cart: 0 },
    { id: 5, name: "Floral doll", price: 140, qty: 7, img: doll5, cart: 0 },
    { id: 6, name: "Blonde doll", price: 270, qty: 3, img: doll6, cart: 0 },
    { id: 7, name: "Guitar doll ", price: 170, qty: 4, img: doll7, cart: 0 },
    { id: 8, name: "School doll", price: 300, qty: 1, img: doll8,  cart: 0 },
    { id: 9, name: "Lady doll", price: 300, qty: 1, img: doll9, cart: 0 },
    { id: 10, name: "Scatebord doll", price: 180, qty: 4, img: doll10, cart: 0 },
    { id: 11, name: "Chinese doll", price: 250, qty: 7, img: doll11, cart: 0 },
    { id: 12, name: "Shabbat doll", price: 280, qty: 7, img: doll12,  cart: 0 },
    { id: 13, name: "Redhead doll", price: 170, qty: 10, img: doll13, cart: 0 },
    { id: 14, name: "Pretty doll ", price: 240, qty: 5, img: doll14, cart: 0 },
    { id: 3, name: "Pajama doll", price: 250, qty: 2, img: doll15, cart: 0 },
    { id: 16, name: "Red lady doll", price: 200, qty: 5, img: doll16, cart: 0 },
    { id: 17, name: "Mother doll", price: 200, qty: 5, img: doll17, cart: 0 },
    { id: 18, name: "Cool doll", price: 220, qty: 9, img: doll18, cart: 0 },
    { id: 19, name: "Cut doll", price: 220, qty: 9, img: doll19, cart: 0 },
    { id: 20, name: "Dancing doll", price: 220, qty: 9, img: doll20 ,cart: 0 },
    { id: 21, name: "Country doll", price: 220, qty: 9, img: doll21,cart: 0 },
    { id: 22, name: "Spring doll", price: 220, qty: 9, img: doll22,cart: 0 },
    { id: 23, name: "Dyed hair doll", price: 220, qty: 9, img: doll23,cart: 0 },
    { id: 24, name: "Princess doll", price: 220, qty: 9, img: doll24, cart: 0 },
    { id: 25, name: "Quin doll", price: 220, qty: 9, img: doll25,cart: 0 }
  
]
const productsReducer = (state = products, action) => {
   
    switch (action.type) {
        case "DECREASE_QTY":
            const newProducts = [...state]
            if(   newProducts[action.id].qty>0){
                newProducts[action.id].qty--
            }
        
            return newProducts
          
        case "ADD_QTY":
            state[action.id].qty++
            return state
        
        default:
            return state
    }
}

export default productsReducer


