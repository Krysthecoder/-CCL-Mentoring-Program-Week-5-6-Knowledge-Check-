//  Title: DNA to RNA Conversion
//  Link:   https://www.codewars.com/kata/5556282156230d0e5e000089/javascript

//  JS version (i couldnt get the Github JS version so it will go below)

function DNAtoRNA(dna) {
    let a = dna.split('');
    for (let i = 0; i < a.length; i++) {
        if (a[i] === "T") {
            a[i] = "U"
        }
    }
    let b = a.join("")
    return b
}

//    TS version


export function DNAtoRNA(dna: string): string {
    return dna.split('').map(elem => elem == "T" ? elem.replace("T", "U") : elem).join('')

}