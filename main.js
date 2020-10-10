// ES5


//es6
// let myCar
// const myCar = "Ferari";
// console.log(myCar);

// const myCars = ['BMW', 'MAZDA', 'TOYOTA'];
// for (let i = 0; i < myCars.length; i++;) {
//     console.log(myCars[i]);
// }

// console.log(i);

// const user_place = document.getElementById('user');


// //es5

// // console.log(user_logged);

// //es6
// const user_logged = "Tony";
// user_place.innerHTML = `Hi ${user_logged}. Apa kabar`

//ambil element
//es6
// const cart_items = document.getElementById('cart');

// function addProduct(name, category) {
//     return {

//         name,
//         category
//     }
// }

// var getProduct = addProduct("Iphone 11", "Gadget");
// cart_items.innerHTML = ` Product No 1 ${getProduct.name} Category: ${getProduct.category}`;

// const skills_holder = Document.getElementById('skills');


// //es6
// const yourSkills = ['UX Design', 'Web Development', 'Video Editor'];
// skills_holder.innerHTML = yourSkills[0];



// const skills_holder = document.getElementById('skills');


// const yourSkills = ['ux design', 'ui design', 'it support'];



// const myPrimarySkill = yourSkills.filter(skill => {
//     return skill === "it support";
// });

// skills_holder.innerHTML = myPrimarySkill;


const data = document.getElementById('data');

//modul member kelas
class Siswa {
    constructor(username, password, nama_kelas) {
        this.username = username;
        this.password = password;
        this.nama_kelas = nama_kelas;
    }

    gabung() {
        console.log(this.username + 'telah bergabung pada kelas' + this.nama_kelas);
    }

    hitungMember() {
        console.log('Tersedia 100 Member');
    }


}


class Langanan extends Siswa {
    constructor(username, paket) {
        super(username);
        this.paket = paket;
    }

    gabungPaket() {
        console.log('Hi' + this.username + 'telah berlanganaan paket' + this.paket);
    }
}

let tambahLanganaan = new Langanan('bwastudio', 'Premium');
tambahLanganaan.hitungMember();

// let tambahSiswa = new Siswa('bwa studio', '230fsfdf', 'Web Design');
// tambahSiswa.gabung();




















// skills_holder.innerHTML = yourSkills[0];


// yourSkills.push('dev ops');

// let parent = '<ul>';




// yourSkills.forEach((skill) => {
//     // parent += '<li>' + skill + '</li>';

//     console.log(`${skills}`);
// });

// const printSkills = yourSkills.map(skill => {
//     return skill;
// })

// // parent += '<ul>';
// skills_holder.innerHTML = printSkills;

//filter