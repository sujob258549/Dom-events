document.getElementById('areabuttons').addEventListener('click', function(){
    const addClick = document.getElementById("areass");
    let addtext = addClick.value;

    let newtext = document.getElementById('areatext');
    newtext.innerText = addtext;
    addClick.value = '';
    
})



// document.getElementById('areabuttons').addEventListener('click', function(){
//     const uptext =  document.getElementById('areass');     
//     // let valus = uptext.value;
//     console.log(uptext)

//     // let p = document.getElementById('areatext');
//     // p.innerText = valus;
//     // uptext.value = '';
// })


// document.getElementById('areabuttons').addEventListener('click', function(){
//     let uptext = document.getElementById('areass'); // Retrieves the input field with id 'areass'
//     let valus = uptext.value; // Retrieves the value entered into the input field

//     let p = document.getElementById('areatext'); // Retrieves the paragraph element with id 'areatext'
//     p.innerText = valus; // Sets the text content of the paragraph to the retrieved value
//     uptext.value = ''; // Clears the input field
// })
