import { Dimensions } from "react-native"

const  {height , width }= Dimensions.get("window");


export const COLORS ={
    primaryColor : '#EF7C91',
    secondColor: '#FEE2EA',
    grayColor : '#A1A1A1',
    backgroundColor : '#ffffff',
    blackColor: "#000000"

}

export const SIZES={
    h1:30,
    h2: 28,
    h3: 24,
    h4: 20,
    h5: 18,

    body1: 24,
    body2: 20,
    body3: 16,
    body4: 14,

    width, 
    height
}

export const Money = (price: number) => {
    var lengthPrice = price.toString().length;
    var index = lengthPrice % 3;
    let prices = "";
    if (index == 0) {
      for (var i = 0; i <= lengthPrice / 3; i++) {
        prices = prices.concat(
          price
            .toString()
            .slice(i * 3, lengthPrice - (lengthPrice / 3 - (i + 1)) * 3) + "."
        );
      }
      prices = prices.replace("..", "");
    } else {
      var tem = price.toString().slice(0, index);
      var tem2 = price.toString().slice(index, lengthPrice);
      var lengthPrice2 = tem2.toString().length;
      for (var i = 0; i <= lengthPrice2 / 3; i++) {
        prices = prices.concat(
          tem2
            .toString()
            .slice(i * 3, lengthPrice2 - (lengthPrice2 / 3 - (i + 1)) * 3) + "."
        );
      }
      prices = tem + "." + prices.replace("..", "");
  
      
    }
    return prices;
  };