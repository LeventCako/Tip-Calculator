function tipcalc() {
    const Bill = document.querySelector('.input-bill').value;
    const Tip = document.querySelector('.input-tip').value;
   
  
    
    let Total1 = Number(Bill);
    let Total2 = Number(Tip);
    let Total3 = Total1 + ( Total1 * Total2 / 100);

    

    
    document.querySelector('.total').innerText = `Total: ${Total3}$`;
   
}
