export const hideModal = () => {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('#add-item-modal').style.display = 'none';
    document.body.style.overflow = '';
}

export const hidden = () => {
    document.body.style.overflow = 'hidden';
}

export const showModal = () => {
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('#add-item-modal').style.display = 'block';
    hidden();
}