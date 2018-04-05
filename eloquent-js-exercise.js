// Chapeter 2 / Excercises 

// Lopping a trinagle

for (let counter = '#' ; counter.length < 8; counter += '#'){
    console.log(counter);
}

// FizzFuzz

for (let counter = 0 ; counter <= 100 ; counter += 1) {
    if (counter % 3 === 0) {
        console.log('Fizz');
    } else if (counter % 5 === 0) {
        console.log('Fuzz');
    } else {
        console.log(counter);
    }
}

// Chess Board

let withNoSpace = '# # # #'

for (let counter = 0 ; counter < 8 ; counter += 1){
    if (counter % 2 === 0){
        console.log(' '+ withNoSpace);
    } else {
    console.log(withNoSpace);
    }
}

