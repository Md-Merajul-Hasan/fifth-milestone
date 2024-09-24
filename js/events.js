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
        const available = Number(availableBDT)-Number(donatedBDT); 
        if(donatedBDT == parseFloat(donatedBDT) && available >= 0 &&donatedBDT > 0){
            setTheText(text, 'collected-noakhali');
            setTheText(available, 'availableBDT');
        // add to history
        const newHistory = document.createElement('div');
        newHistory.classList.add('mx-2', 'my-3', 'border-inherit', 'border-2');
        const time = new Date();
        const p = document.createElement('p');
        p.innerHTML = `<p>${donatedBDT} is donated for donate for flood at Noakhali, Bangladesh</p>`
        const textHistory = p.innerText;
        const timeHistory = time.toString();
        newHistory.innerText = textHistory+"\n"+timeHistory
        document.getElementById('section-history').appendChild(newHistory);
        my_modal_5.showModal();
        }else{
            alert('Invalid Donation amount');
        }
        
})
// -------------------------------------------------------------------------------------------------------------------
// btn to donate feni
document.getElementById('btn-feni').addEventListener('click', function (){
    const availableBDT = document.getElementById('availableBDT').innerText;
    const collected = getBalanceText('collected-feni');
    const donatedBDT = getBalanceInput('input-feni');
    const text = Number(collected) + Number(donatedBDT);
    const available = Number(availableBDT)-Number(donatedBDT);
    if(donatedBDT == parseFloat(donatedBDT) && available >= 0 &&donatedBDT > 0){
        setTheText(text, 'collected-feni');
        setTheText(available, 'availableBDT');
    // add to history
    const newHistory = document.createElement('div');
        newHistory.classList.add('mx-2', 'my-3', 'border-inherit', 'border-2');
        const time = new Date();
        const p = document.createElement('p');
        p.innerHTML = `<p>${donatedBDT} is donated for donate for flood at Feni, Bangladesh</p>`
        const textHistory = p.innerText;
        const timeHistory = time.toString();
        newHistory.innerText = textHistory+"\n"+timeHistory
        document.getElementById('section-history').appendChild(newHistory);
        my_modal_5.showModal();
    }else{
        alert('Invalid Donation amount');
    }
})
// -------------------------------------------------------------------------------------------------------------------
// btn to donate quota
document.getElementById('btn-quota').addEventListener('click', function (){
    const availableBDT = document.getElementById('availableBDT').innerText;
    const collected = getBalanceText('collected-quota');
    const donatedBDT = getBalanceInput('input-quota');
    const text = Number(collected) + Number(donatedBDT);
    const available = Number(availableBDT)-Number(donatedBDT);
    if(donatedBDT == parseFloat(donatedBDT) && available >= 0 &&donatedBDT > 0){
        setTheText(text, 'collected-quota');
    setTheText(available, 'availableBDT');
    // add to history
    const newHistory = document.createElement('div');
        newHistory.classList.add('mx-2', 'my-3', 'border-inherit', 'border-2');
        const time = new Date();
        const p = document.createElement('p');
        p.innerHTML = `<p>${donatedBDT} is donated for donate for injured students in Quota Movement, Bangladesh</p>`
        const textHistory = p.innerText;
        const timeHistory = time.toString();
        newHistory.innerText = textHistory+"\n"+timeHistory
        document.getElementById('section-history').appendChild(newHistory);
        my_modal_5.showModal();
    }else{
        alert('Invalid Donation amount');
    }
      
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
// btn blog
document.getElementById('btn-to-blog').addEventListener('click', function (){
    window.location.href = 'blog.html';
})
