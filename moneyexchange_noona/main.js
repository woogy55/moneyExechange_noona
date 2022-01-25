//3. 환율정보 들고오기
let currencyRatio = {
    USD:{
        KRW:1193.92,
        USD:1,
        VND:22645.00,
        unit:"달러"
    },
    KRW:{
        KRW:1,
        USD:0.00084,
        VND:18.97,
        unit:"원"
    },
    VND:{
        KRW:0.053,
        USD:0.000044,
        VND:1,
        unit:"동"
    }
}

let fromCurrency = "USD"
let toCurrency = "USD"

document.querySelectorAll("#from-currency-list a").forEach((menu)=>menu.addEventListener("click", function(){
    //1.버튼을 가져온다.
    //2.버튼의 값을 바꾼다
    document.getElementById("from-button").textContent=this.textContent
    //3. 선택된 currency값을 변수에 저장해 준다.
    fromCurrency = this.textContent;
    convert()
}))

document.querySelectorAll("#to-currency-list a").forEach((menu)=>menu.addEventListener("click", function(){
    //1.버튼을 가져온다.
    //2.버튼의 값을 바꾼다
    document.getElementById("to-button").textContent=this.textContent
    //3. 선택된 currency값을 변수에 저장해 준다.
    toCurrency = this.textContent;
    convert()
}))

function convert(){
    // 1. 환전
    //2. 얼마를>, 가진 돈은 무엇, 바꾸고 하자 하는 돈
    // 돈*환율 = 환전금액
    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency]
    //3. 환전된 값이 보인다.
    document.getElementById("to-input").value=convertedAmount;
}




//7. 반대로 밑에서 숫자를 바꾸어도 위에 환율이 적용된다.
//8. 숫자를 한국어로 읽는 법