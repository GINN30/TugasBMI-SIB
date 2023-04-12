//untuk menghitung BMI dapat menggunakan function
function calculateBMI() {
	//mengambil nilai dari html dengan get element by id
	const weight = document.getElementById("weight").value;
	const height = document.getElementById("height").value;

	//perulangan jika salah satu dari inputan masih kosong
	if (weight === "" || height === "") {
		alert("Masukkan berat atau tinggi badan Anda.");
		return;
	} else if (weight <= "0" || height <= "0") {
		alert("Masukkan berat atau tinggi badan bernilai positif");
		return;
	} else if (Math.floor(weight).toString().length >= 3) {
		alert("Harap masukkan berat badan dengan kurang dari 3 digit.");
		return;
	} else if (weight.toString().split(".")[1] ?.length === 1 || height.toString().split(".")[1] ?.length === 1) {
		alert("Harap masukkan berat badan dan tinggi badan dengan lebih presisi (minimal dua digit di belakang koma).");
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

// Add event listener to reset button
var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetForm);

// Function to reset input form
function resetForm() {
	document.getElementById("weight").value = "";
	document.getElementById("height").value = "";
}