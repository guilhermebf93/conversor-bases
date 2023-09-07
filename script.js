function decBin (dec) {
    let decimal =  dec;
    let binArray = [];
    if (decimal == 0) {
        binArray.push(0);
    }
    while (decimal >= 1) {
        let resto = decimal % 2;
        binArray.unshift(resto);
        decimal = (decimal - resto) / 2;
    }
    let binario = binArray.join('');
    return binario;
}

function binDec (bin) {
    let binario = bin;
    let decimal = 0;
    let indice = 0;
    for (let i = binario.length - 1; i >= 0; i--) {
        let digito = parseInt(binario[i]);
        let calculo = digito * Math.pow(2, indice);
        decimal += calculo;
        indice++;
    }
    return decimal;
}

function decOct (dec) {
    let decimal =  dec;
    let octArray = [];
    if (decimal == 0) {
        octArray.push(0);
    }
    while (decimal >= 1) {
        let resto = decimal % 8;
        octArray.unshift(resto);
        decimal = (decimal - resto) / 8;
    }
    let octal = octArray.join('');
    return octal;
}

function octDec (oct) {
    let octal = oct;
    let decimal = 0;
    let indice = 0;
    for (let i = octal.length - 1; i >= 0; i--) {
        let digito = parseInt(octal[i]);
        let calculo = digito * Math.pow(8, indice);
        decimal += calculo;
        indice++;
    }
    return decimal;
}

function decHex (dec) {
    let decimal = dec;
    let hexArray = [];
    if (decimal == 0) {
        hexArray.push(0);
    }
    while (decimal >= 1) {
        let resto = decimal % 16;
        let restoHex = '';
        switch (resto) {
            case 10:
                restoHex = 'A';
                break;
            case 11:
                restoHex = 'B';
                break;
            case 12:
                restoHex = 'C';
                break;
            case 13:
                restoHex = 'D';
                break;
            case 14:
                restoHex = 'E';
                break;
            case 15:
                restoHex = 'F';
                break;
            default:
                restoHex = resto;
        }
        hexArray.unshift(restoHex);
        decimal = (decimal - resto) / 16;
    }
    let hex = hexArray.join('');
    return hex;
}

function hexDec (hex) {
    let hexadecimal = hex;
    let decimal = 0;
    let indice = 0;
    for (let i = hexadecimal.length - 1; i >= 0; i--) {
        let digito;
        switch (hexadecimal[i]) {
            case 'A':
                digito = 10;
                break;
            case 'B':
                digito = 11;
                break;
            case 'C':
                digito = 12;
                break;
            case 'D':
                digito = 13;
                break;
            case 'E':
                digito = 14;
                break;
            case 'F':
                digito = 15;
                break;
            default:
                digito = parseInt(hexadecimal[i]);
                break;
        }
        let calculo = digito * Math.pow(16, indice);
        decimal += calculo;
        indice++;
    }
    return decimal;
}

function octBin (oct) {
    let octal = oct;
    let binArray = [];
    for (let i = octal.length - 1; i >= 0; i--) {
        let digito = parseInt(octal[i]);
        let bin = decBin(digito);
        if (bin.length < 3 && i != 0) {
            for (let j = (3 - bin.length); j > 0; j--) {
                bin = '0' + bin;
            }
        }
        binArray.unshift(bin);
    }
    let binario = binArray.join('');
    return binario;
}

function binOct (bin) {
    let binario = bin;
    let octArray = [];
    let binToArray = [];
    for (let i = binario.length - 1; i >= 0; i--) {
        binToArray.unshift(binario[i]);
        if (binToArray.length == 3 || i == 0) {
            let binString = binToArray.join('');
            let conversao = binDec(binString);
            octArray.unshift(conversao);
            binToArray = [];
        }
    }
    let octal = octArray.join('');
    return octal;
}

function hexBin (hex) {
	let hexaDec = hex;
	let binArray = [];
	for (let i = hexaDec.length - 1; i >= 0; i--) {
		let digito = 0;
		switch (hexaDec[i]) {
			case 'A':
			 digito = 10;
			 break;
			case 'B':
			 digito = 11;
			 break;
			case 'C':
			 digito = 12;
			 break;
			case 'D':
			 digito = 13;
			 break;
			case 'E':
			 digito = 14;
			 break;
			case 'F':
			 digito = 15;
			 break;
			default:
			 digito = parseInt(hexaDec[i]);
			 break;
		}
		let bin = decBin(digito);
		if (bin.length < 4 && i != 0) {
			for (let j = 4 - bin.length; j > 0; j--) {
				bin = '0' + bin;
			}
		}
		binArray.unshift(bin);
	}
	let binario = binArray.join('');
	return binario;
}

function binHex (bin) {
	let binario = bin;
	let hexArray = [];
	let binToArray = [];
	for (let i = binario.length - 1; i >= 0; i--) {
		binToArray.unshift(binario[i]);
		if (binToArray.length == 4 || i == 0) {
			let binString = binToArray.join('');
			let conversao = binDec(binString);
			let hexaDec = '';
			switch (conversao) {
				case 10:
				 hexaDec = 'A';
				 break;
				case 11:
				 hexaDec = 'B';
				 break;
				case 12:
				 hexaDec = 'C';
				 break;
				case 13:
				 hexaDec = 'D';
				 break;
				case 14:
				 hexaDec = 'E';
				 break;
				case 15:
				 hexaDec = 'F';
				 break;
				default:
				 hexaDec = conversao.toString();
				 break;
			}
			hexArray.unshift(hexaDec);
			binToArray = [];
		}
	}
	let hexadecimal = hexArray.join('');
	return hexadecimal;
}

function octHex (oct) {
	let octal = oct;
	let binario = octBin(octal);
	let hexadecimal = binHex(binario);
	return hexadecimal;
}

function hexOct (hex) {
	let hexadecimal = hex;
	let binario = hexBin(hexadecimal);
	let octal = binOct(binario);
	return octal;
}


function conversao () {
    const inputNum = document.getElementById('numero-antes').value;
    const inputBase = document.getElementById('opcoes-bases-entrada').value;
    const outputBase = document.getElementById('opcoes-bases-saida').value;
    let valorConvertido;
    if (inputBase == outputBase.toLowerCase()) {
        valorConvertido = inputNum;
    }
    if (inputNum == '' || inputBase == '' || outputBase == '') {
        valorConvertido = 'Algum campo faltando!';
    }
    if (inputNum < 0) {
        valorConvertido = 'Somente números positivos e inteiros'
    }
    switch (inputBase) {
        case 'dec':
            switch (outputBase) {
                case 'Bin':
                    valorConvertido = decBin(inputNum);
                    break;
                case 'Oct':
                    valorConvertido = decOct(inputNum);
                    break;
                case 'Hex':
                    valorConvertido = decHex(inputNum);
                    break;
            }
            break;
        case 'bin':
            switch (outputBase) {
                case 'Dec':
                    valorConvertido = binDec(inputNum);
                    break;
                case 'Oct':
                    valorConvertido = binOct(inputNum);
                    break;
                case 'Hex':
                    valorConvertido = binHex(inputNum);
                    break;
            }
            break;
        case 'oct':
            switch (outputBase) {
                case 'Bin':
                    valorConvertido = octBin(inputNum);
                    break;
                case 'Dec':
                    valorConvertido = octDec(inputNum);
                    break;
                case 'Hex':
                    valorConvertido = octHex(inputNum);
                    break;
            }
            break;
        case 'hex':
            switch (outputBase) {
                case 'Bin':
                    valorConvertido = hexBin(inputNum);
                    break;
                case 'Oct':
                    valorConvertido = hexOct(inputNum);
                    break;
                case 'Dec':
                    valorConvertido = hexDec(inputNum);
                    break;
            }
            break;
    }
    document.getElementById('numero-depois').value = valorConvertido;
}

document.querySelector('#converter').addEventListener('click', () => {
    conversao();
});