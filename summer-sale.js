
// Make purchase button attribute
const purchaseButton = document.getElementById('make-purchase');
purchaseButton.setAttribute('disabled', 'true');
purchaseButton.style.backgroundColor = 'grey';

// Apply coupon button attribute
const applyBtn = document.getElementById('apply');
applyBtn.setAttribute('disabled', 'true');
applyBtn.style.backgroundColor = 'grey';

let count = 0;

function getCardInfo(info) {
    // getting card name,price setting cart product name
    const childNode1 = info.childNodes[3]
    const productName = childNode1.childNodes[3].innerText
    const cartProduct = document.getElementById('product-name')
    const p = document.createElement('p')
    p.classList.add('bg-pink-100','p-1','my-2','border','rounded')
    count++
    p.innerHTML = `${count}.${productName}`;
    cartProduct.appendChild(p)

    //cart price section
    const productPriceText = childNode1.childNodes[5].innerText.split(" ")[0]
    const productPrice = parseFloat(productPriceText)
    //getting previous total price
    const totalPriceID = document.getElementById('total-price')
    const totalPriceInnerText = document.getElementById('total-price').innerText
    const prevTotalPrice = parseFloat(totalPriceInnerText)

    //set new total price
    let newTotalPrice = prevTotalPrice + productPrice;
    totalPriceID.innerText = newTotalPrice.toFixed(2)
    console.log(newTotalPrice)

    //discount calculation and set discount value
    const discountID = document.getElementById('discount')
    const totalID = document.getElementById('total')

    const finalTotalPrice = newTotalPrice
    totalID.innerText = parseFloat(finalTotalPrice).toFixed(2)+'TK'

    const inputID=document.getElementById('input-apply')
    
    applyBtn.addEventListener('click', function () {
        const coupon = inputID.value

        if ((newTotalPrice >= 200) && (coupon === 'SELL200')) {
            const discountPrice = (newTotalPrice * .2).toFixed(2)
            discountID.innerText = discountPrice+'TK'
            const finalTotalPrice = (newTotalPrice - discountPrice)
            totalID.innerText = parseFloat(finalTotalPrice).toFixed(2)+'TK'
        }
    })

    //purchase and apply btn validation

    if (newTotalPrice > 0) {
        purchaseButton.removeAttribute('disabled');
        purchaseButton.style.backgroundColor = '#E527B2';
    }
    if (newTotalPrice >= 200) {
        applyBtn.removeAttribute('disabled');
        applyBtn.style.backgroundColor = '#E527B2';
    }

    //set go home to go home
    document.getElementById('go-home').addEventListener('click',function(){
        window.location.href='index.html'
    })

}