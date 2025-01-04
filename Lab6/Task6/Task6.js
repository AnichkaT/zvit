const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 },
];

const applyDiscount = (medicines) => 
    medicines.map((medicine, index) => ({
        id: index + 1, 
        name: medicine.name,
        originalPrice: medicine.price, 
        price: medicine.price > 300 ? medicine.price * 0.7 : medicine.price, 
    }));

const updatedMedicines = applyDiscount(medicines);
console.log(updatedMedicines);












































