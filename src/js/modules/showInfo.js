export default class ShowInfo {
    constructor(triggers) {
        this.buttons = document.querySelectorAll(triggers);
    }

    init() {
        this.buttons.forEach(btn => {
           btn.addEventListener('click', () => {
              const sibling = btn.closest('.module__info-show').nextElementSibling;

              sibling.classList.toggle('msg');
              sibling.style.marginTop = '20px';
           });
        });
    }
}
