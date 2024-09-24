// common functions
function getBalanceText(id){
   const textBalance = document.getElementById(id).innerText;
   return textBalance; 
}
function getBalanceInput(id){
    const inputBalance = document.getElementById(id).value;
    document.getElementById(id).value = '';
    return inputBalance;
}
function setTheText(text, id){
    document.getElementById(id).innerText = text;
}
// -----------------------------------------------------------------------------------------------------------------
// btn to donate noakhali
document.getElementById('btn-noakhali').addEventListener('click', function (){
        const availableBDT = document.getElementById('availableBDT').innerText;
        const collected = getBalanceText('collected-noakhali');
        const donatedBDT = getBalanceInput('input-noakhali');
        const text = Number(collected) + Number(donatedBDT);  
        setTheText(text, 'collected-noakhali');
        const available = Number(availableBDT)-Number(donatedBDT);
        setTheText(available, 'availableBDT');
        // add to history
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `<div class = "mx-2 my-3 border-inherit border-2">
        <p>${donatedBDT} is donated for donate for flood at Noakhali, Bangladesh</p>
         <div>
             <p class='date'></p>
         </div>
         <script>
            const time = new Date();
            document.querySelector(".date").innerText = time;
        </script>
        
     </div>`
     document.getElementById('section-history').appendChild(newHistory);
})
// -------------------------------------------------------------------------------------------------------------------
// btn to donate feni
document.getElementById('btn-feni').addEventListener('click', function (){
    const availableBDT = document.getElementById('availableBDT').innerText;
    const collected = getBalanceText('collected-feni');
    const donatedBDT = getBalanceInput('input-feni');
    const text = Number(collected) + Number(donatedBDT); 
    setTheText(text, 'collected-feni');
    const available = Number(availableBDT)-Number(donatedBDT);
    setTheText(available, 'availableBDT');
    // add to history
    const newHistory = document.createElement('div');
    newHistory.innerHTML = `<div class = "mx-2 my-3 border-inherit border-2">
    <p>${donatedBDT} is donated for donate for flood at Feni, Bangladesh</p>
     <div>
         <p class='date'></p>
     </div>
     <script>
        const time = new Date();
        document.querySelector(".date").innerText = time;
    </script>
    
 </div>`
 document.getElementById('section-history').appendChild(newHistory);  
})
// -------------------------------------------------------------------------------------------------------------------
// btn to donate quota
document.getElementById('btn-quota').addEventListener('click', function (){
    const availableBDT = document.getElementById('availableBDT').innerText;
    const collected = getBalanceText('collected-quota');
    const donatedBDT = getBalanceInput('input-quota');
    const text = Number(collected) + Number(donatedBDT); 
    setTheText(text, 'collected-quota');
    const available = Number(availableBDT)-Number(donatedBDT);
    setTheText(available, 'availableBDT');
    // add to history
    const newHistory = document.createElement('div');
    newHistory.innerHTML = `<div class = "mx-2 my-3 border-inherit border-2">
    <p>${donatedBDT} is donated for donate for injured in Quota Movement, Bangladesh</p>
     <div>
         <p class='date'></p>
     </div>
     <script>
        const time = new Date();
        document.querySelector(".date").innerText = time;
    </script>
    
 </div>`
 document.getElementById('section-history').appendChild(newHistory);  
})
// -------------------------------------------------------------------------------------------------------------------
// btn donate 
document.getElementById('btn-donate').addEventListener('click', function (){
    document.getElementById('section-history').classList.add('hidden');
    document.getElementById('btn-history').classList.remove('bg-[#B4F461]');
    document.getElementById('section-donation').classList.remove('hidden');
    document.getElementById('btn-donate').classList.add('bg-[#B4F461]');
})
// btn history
document.getElementById('btn-history').addEventListener('click', function (){
    document.getElementById('section-donation').classList.add('hidden');
    document.getElementById('btn-donate').classList.remove('bg-[#B4F461]');
    document.getElementById('section-history').classList.remove('hidden');
    document.getElementById('btn-history').classList.add('bg-[#B4F461]');
})