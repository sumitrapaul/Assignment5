// card1
let i1, i2, i3, i4, i5, i6;
i1 = i2 = i3 = i4 = i5 = i6 = 1;

function addition_total(cardOnePriceNumber) {
    // card previous price
    const previousTotalPrice = document.getElementById('total');
    const previousPrice = previousTotalPrice.innerText;
    const previousTotalPriceNumber = parseFloat(previousPrice);

    //card new price
    const newPrice = cardOnePriceNumber + previousTotalPriceNumber;
    previousTotalPrice.textContent = newPrice.toFixed(2);
    button_apply(newPrice.toFixed(2))
    button_purchase(newPrice.toFixed(2))


}


document.getElementById('apply-coupon').addEventListener('click', function() {
    let coupon = document.getElementById('coupon-value').value;
    // console.log(coupon);
    let price_val1 = document.getElementById('total').innerText;
    let price_val = parseFloat(price_val1);
    if (coupon === "SELL200" && price_val >= 200.00) {
        // console.log('find', price_val);
        let discountValue = document.getElementById('discount');
        let discount = 0.20;
        let disCountPrice = parseFloat(price_val) * parseFloat(discount);
        discountValue.innerText = disCountPrice.toFixed(2);

        //grand-total
        let grandTotal = document.getElementById('grand-total');
        let total1 = parseFloat(price_val) - parseFloat(disCountPrice);
        grandTotal.innerText = total1.toFixed(2);

    }
})


// modal show
document.getElementById('purchase').addEventListener('click', function() {

    const modal = document.getElementById('my_modal_1')

    function showModal() {
        modal.showModal;

    };

})


function button_purchase(a) {
    // button purchase
    const makePurchase = document.getElementById('purchase');
    if (a > 0) {
        makePurchase.disabled = false;
    } else {
        makePurchase.disabled = true;

    }
}

function button_apply(v1) {

    const apply = document.getElementById('apply-coupon');
    let v = parseFloat(v1);
    if (v >= 200) {
        apply.disabled = false;
    } else {
        apply.disabled = true;

    }
}

function list_name(item) {

    const allItem = item.innerText;
    const items = document.getElementById('select-item');
    const list = document.createElement("p");
    list.textContent = `${items.childElementCount+1}. ${allItem}`;
    items.appendChild(list);
}

document.getElementById('card1').addEventListener('click', function() {
    // price item
    const cardAmount = document.getElementById('amount1')
    const cardOnePrice = cardAmount.innerText;
    const cardOnePriceNumber = parseFloat(cardOnePrice);
    let item1 = document.getElementById('item1')

    if (i1 == 1) {
        list_name(item1);
        addition_total(cardOnePriceNumber)
    }
    i1++;
    i2 = i3 = i4 = i5 = i6 = 1;


    const card1 = document.getElementById('card1');
    card1.style.backgroundColor = "gray";
    const card2 = document.getElementById('card2');
    card2.style.backgroundColor = "white";
    const card3 = document.getElementById('card3');
    card3.style.backgroundColor = "white";
    const card4 = document.getElementById('card4');
    card4.style.backgroundColor = "white";
    const card5 = document.getElementById('card5');
    card5.style.backgroundColor = "white";
    const card6 = document.getElementById('card6');
    card6.style.backgroundColor = "white";


});
document.getElementById('card2').addEventListener('click', function() {
    // price item
    const cardAmount = document.getElementById('amount2')
    const cardOnePrice = cardAmount.innerText;
    const cardOnePriceNumber = parseFloat(cardOnePrice);
    let item2 = document.getElementById('item2')

    if (i2 == 1) {
        list_name(item2);
        addition_total(cardOnePriceNumber)
    }
    i2++;
    i1 = i3 = i4 = i5 = i6 = 1;

    const card1 = document.getElementById('card1');
    card1.style.backgroundColor = "white";
    const card2 = document.getElementById('card2');
    card2.style.backgroundColor = "gray";
    const card3 = document.getElementById('card3');
    card3.style.backgroundColor = "white";
    const card4 = document.getElementById('card4');
    card4.style.backgroundColor = "white";
    const card5 = document.getElementById('card5');
    card5.style.backgroundColor = "white";
    const card6 = document.getElementById('card6');
    card6.style.backgroundColor = "white";


});

document.getElementById('card3').addEventListener('click', function() {
    // price item
    const cardAmount = document.getElementById('amount3')
    const cardOnePrice = cardAmount.innerText;
    const cardOnePriceNumber = parseFloat(cardOnePrice);
    let item3 = document.getElementById('item3')

    if (i3 == 1) {
        list_name(item3);
        addition_total(cardOnePriceNumber)
    }
    i3++;
    i1 = i2 = i4 = i5 = i6 = 1;


    const card1 = document.getElementById('card1');
    card1.style.backgroundColor = "white";
    const card2 = document.getElementById('card2');
    card2.style.backgroundColor = "white";
    const card3 = document.getElementById('card3');
    card3.style.backgroundColor = "gray";
    const card4 = document.getElementById('card4');
    card4.style.backgroundColor = "white";
    const card5 = document.getElementById('card5');
    card5.style.backgroundColor = "white";
    const card6 = document.getElementById('card6');
    card6.style.backgroundColor = "white";


});

document.getElementById('card4').addEventListener('click', function() {
    // price item
    const cardAmount = document.getElementById('amount4')
    const cardOnePrice = cardAmount.innerText;
    const cardOnePriceNumber = parseFloat(cardOnePrice);
    let item4 = document.getElementById('item4')

    if (i4 == 1) {
        list_name(item4);
        addition_total(cardOnePriceNumber)
    }
    i4++;
    i1 = i2 = i3 = i5 = i6 = 1;


    const card1 = document.getElementById('card1');
    card1.style.backgroundColor = "white";
    const card2 = document.getElementById('card2');
    card2.style.backgroundColor = "white";
    const card3 = document.getElementById('card3');
    card3.style.backgroundColor = "white";
    const card4 = document.getElementById('card4');
    card4.style.backgroundColor = "gray";
    const card5 = document.getElementById('card5');
    card5.style.backgroundColor = "white";
    const card6 = document.getElementById('card6');
    card6.style.backgroundColor = "white";


});

document.getElementById('card5').addEventListener('click', function() {
    // price item
    const cardAmount = document.getElementById('amount5')
    const cardOnePrice = cardAmount.innerText;
    const cardOnePriceNumber = parseFloat(cardOnePrice);
    let item5 = document.getElementById('item5')

    if (i5 == 1) {
        list_name(item5);
        addition_total(cardOnePriceNumber)
    }
    i5++;
    i1 = i2 = i3 = i4 = i6 = 1;


    const card1 = document.getElementById('card1');
    card1.style.backgroundColor = "white";
    const card2 = document.getElementById('card2');
    card2.style.backgroundColor = "white";
    const card3 = document.getElementById('card3');
    card3.style.backgroundColor = "white";
    const card4 = document.getElementById('card4');
    card4.style.backgroundColor = "white";
    const card5 = document.getElementById('card5');
    card5.style.backgroundColor = "gray";
    const card6 = document.getElementById('card6');
    card6.style.backgroundColor = "white";


});

document.getElementById('card6').addEventListener('click', function() {
    // price item
    const cardAmount = document.getElementById('amount6')
    const cardOnePrice = cardAmount.innerText;
    const cardOnePriceNumber = parseFloat(cardOnePrice);
    let item6 = document.getElementById('item6')

    if (i6 == 1) {
        list_name(item6);
        addition_total(cardOnePriceNumber)
    }
    i6++;
    i1 = i2 = i3 = i4 = i5 = 1;


    const card1 = document.getElementById('card1');
    card1.style.backgroundColor = "white";
    const card2 = document.getElementById('card2');
    card2.style.backgroundColor = "white";
    const card3 = document.getElementById('card3');
    card3.style.backgroundColor = "white";
    const card4 = document.getElementById('card4');
    card4.style.backgroundColor = "white";
    const card5 = document.getElementById('card5');
    card5.style.backgroundColor = "white";
    const card6 = document.getElementById('card6');
    card6.style.backgroundColor = "gray";


});



//go home
document.getElementById('home').addEventListener('click', function() {
    window.location.reload();
});