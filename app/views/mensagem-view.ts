export class MensagemView {

   private element: HTMLElement;

   constructor(seletor: string) {
    this.element = document.querySelector(seletor);
   }
}