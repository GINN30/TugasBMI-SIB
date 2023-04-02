//untuk menghitung BMI dapat menggunakan function
function calculateBMI() {
    //mengambil nilai dari html dengan get element by id
	const weight = document.getElementById("weight").value;
	const height = document.getElementById("height").value;
	
    //perulangan jika salah satu dari inputan masih kosong
	if (weight === "" || height === "") {
		alert("Masukkan berat dan tinggi badan Anda.");
		return;
	}
	
    //rumus dari BMI itu sendiri
	const bmi = weight / ((height / 100) ** 2);
	
    //buat sebuah variable
	let result;
    //membuat sebuah perulangan untuk menentukan BMI
	if (bmi < 18.5) {
		result = "UnderWeight";
	} else if (bmi < 25) {
		result = "Normal Weight";
	} else if (bmi < 30) {
		result = "OverWeight";
	} else {
		result = "Obesity";
	}
	//Menampilkan hasil BMI dengan DOM, yang di tampilkan di html.
	document.getElementById("hasil").innerHTML = `Your BMI is ${bmi.toFixed(2)}. which means You are ${result}.`;
}
