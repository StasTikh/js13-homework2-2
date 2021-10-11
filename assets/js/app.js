function reverseSum() {
    let tens = ['Ноль','Одна', 'Две', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
    let teens	= ['', 'Одиннадцать','Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семнадцать', 'Восемнадцать', 'Девятнадцать'];
    let twentys	= ['', 'Десять', 'Двадцать', 'Тридцать', 'Сорок', 'Пятдесят', 'Шестдесят', 'Семдесят', 'Восемдесят', 'Девяносто'];
    let hundreds =['', 'Сто', 'Двести', 'Триста', 'Четыреста', 'Пятьсот', 'Шестьсот', 'Семьсот', 'Восемьсот', 'Девятьсот'];
    
    
    let sum = inputCode.value;
    let finalSum = 0;
    let checkSum = sum.split(''); 

    if (sum <= 9) {
        finalSum = tens[sum]
    }

    if (sum >= 10 && sum <= 19) {
        if (sum == 10) {
            finalSum = twentys[1];
            console.log(finalSum);
        } else {
            finalSum = teens[checkSum[1]];
        }
    }

    if (sum >= 20 && sum <= 99) {
        if (checkSum[checkSum.length-1] != 0) {
            finalSum = twentys[checkSum[0]] + ' ' + tens[checkSum[1]];
        } else {
            finalSum = twentys[checkSum[0]];
        }
        
    }

    if (sum >= 100 && sum <= 999) {
        if(checkSum[checkSum.length-1] != '0'){
            if(sum >= 111 && sum <= 119) {
                finalSum = hundreds [checkSum[0]] + ' ' + teens[checkSum[2]];
            }else if(sum >= 211 && sum <= 219) {
                finalSum = hundreds [checkSum[0]] + ' ' + teens[checkSum[2]];
            }else if(sum >= 311 && sum <= 319) {
                finalSum = hundreds [checkSum[0]] + ' ' + teens[checkSum[2]];
            }else if(sum >= 411 && sum <= 419) {
                finalSum = hundreds [checkSum[0]] + ' ' + teens[checkSum[2]];
            }else if(sum >= 511 && sum <= 519) {
                finalSum = hundreds [checkSum[0]] + ' ' + teens[checkSum[2]];
            }else if(sum >= 611 && sum <= 619) {
                finalSum = hundreds [checkSum[0]] + ' ' + teens[checkSum[2]];
            }else if(sum >= 711 && sum <= 719) {             
                finalSum = hundreds [checkSum[0]] + ' ' + teens[checkSum[2]];
            }else if(sum >= 811 && sum <= 819) {             
                finalSum = hundreds [checkSum[0]] + ' ' + teens[checkSum[2]];
            }else if(sum >= 911 && sum <= 919) {             
                finalSum = hundreds [checkSum[0]] + ' ' + teens[checkSum[2]];
            } else {             
                finalSum = hundreds [checkSum[0]] + ' ' + twentys[checkSum[1]] + ' ' + tens[checkSum[2]];
            }
        } else {
            finalSum = hundreds [checkSum[0]] + ' ' + twentys[checkSum[1]];
        }    
    }
        
    if ( checkSum[checkSum.length-1] == 1){
        if(checkSum[checkSum.length-2] == 1){
            outputCode.innerHTML = `${finalSum} (Гривен)`;
        } else {
            outputCode.innerHTML = `${finalSum} (Гривна)`;
        }
    } else if (checkSum[checkSum.length-1] == 2 || checkSum[checkSum.length-1] == 3 || checkSum[checkSum.length-1] == 4) {
        if(checkSum[checkSum.length-2] == 1){
            outputCode.innerHTML = `${finalSum.toUppercase()} (Гривен)`;
        } else {
            outputCode.innerHTML = `${finalSum} (Гривны)`;
        }
    } else {
        outputCode.innerHTML = `${finalSum} (Гривен)`;
    }   
}