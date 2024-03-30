// const modal = document.querySelector('.modal')
// const modalTrigger = document.querySelector('#btn-get')
// const closeModalBtn = document.querySelector('.modal_close')
//
// const openModal = () => {
//     modal.style.display = 'block'
//     document.body.style.overflow = 'hidden'
// }
//
// const closeModal = () => {
//     modal.style.display = 'none'
//     document.body.style.overflow = ''
// }
//
// modalTrigger.onclick = () => openModal()
// closeModalBtn.onclick = () => closeModal()
// modal.onclick =  (event) => {
//     if (event.target === modal || event.target === closeModalBtn) closeModal()
// }
//
// const scrollHandler = () => {
//     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//         openModal()
//         window.removeEventListener('scroll', scrollHandler)
//     }
// }
//
// window.addEventListener('scroll', scrollHandler)
//
// setTimeout(openModal, 10000)