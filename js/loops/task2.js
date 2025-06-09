// ! Tapşırıqları işləyərkən loop-dan istifadə edin

const arr = [100, 200, 'test string', undefined, 'another string', null, [1,2,3], 'text']

// Siyahıdakı hər bir elementi data tipi ilə birgə çap et

// let i = 0
// while (i < arr.length) {
//     console.log(typeof arr[i] + " " + arr[i])
//     i++
// }

// siyahıdakı stringləri konsola çap et (continue keyword istifadə etmədən)


// siyahıdakı stringləri konsola çap et (continue keyword istifadə edərək)


// Siyahıdakı rəqəmlərin ikiqatını çap et


// Siyahıdakı yazıları bir cümlə daxilində çap et

let sentence = ""
for (let i of arr) {
    if (typeof i == 'string') {
        sentence += i + " "  
    }
}
console.log(sentence)

// Siyahıdakı rəqəmlərin cəmini tapın
