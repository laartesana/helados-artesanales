let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product=>{
    product.onclick=() =>{
        preveiwContainer.style.display='flex';
        let name=product.getAttribute('data-name');
        previewBox.forEach(preview =>{
        let target= preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.toggle('active');
            }
        });
  
    };
}); 

previewBox.forEach(close=>{
    close.querySelector('.icon-close').onclick=()=>{
        close.classList.remove('active');
        preveiwContainer.style.display='none';
    };
});