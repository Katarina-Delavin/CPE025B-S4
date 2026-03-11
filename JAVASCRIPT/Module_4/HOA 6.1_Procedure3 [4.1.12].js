let contacts = [{ 
name: "Maxwell Wright", 
phone: "(0191) 719 6495", 
email: "Curabitur.egestas.nunc@nonummyac.co.uk" 
}, { 
name: "Raja Villarreal", 
phone: "0866 398 2895", 
email: "posuere.vulputate@sed.com" 
}, { 
name: "Helen Richards", 
phone: "0800 1111", 
email: "libero@convallis.edu" 
}]; 
let choice; 
while (true) { 
choice = prompt("Choose an option: first / last / all / new / quit"); 
if (choice === "first") { 
console.log(`${contacts[0].name} / ${contacts[0].phone} / 
${contacts[0].email}`); 
}  
else if (choice === "last") { 
let last = contacts.length - 1; 
console.log(`${contacts[last].name} / ${contacts[last].phone} / 
${contacts[last].email}`); 
}  
else if (choice === "all") { 
for (let i = 0; i < contacts.length; i++) { 
console.log(`${contacts[i].name} / ${contacts[i].phone} / 
${contacts[i].email}`); 
} 
}  
else if (choice === "new") { 
let newName = prompt("Enter name:"); 
let newPhone = prompt("Enter phone number:"); 
let newEmail = prompt("Enter email address:"); 
if (newName && newPhone && newEmail) { 
contacts.push({ 
name: newName, 
phone: newPhone, 
email: newEmail 
}); 

console.log("New contact added successfully."); 
} else { 
console.log("Error: All fields are required. Contact not added."); 
} 

}  
else if (choice === "quit") { 
console.log("Program ended."); 
break; 
}  
else { 
    
console.log("Invalid option. Try again."); 
} 

} 