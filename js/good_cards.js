class GoodsManager{
    constructor(){
        this.cards = [];
        this.init();
    }

    init(){
        this.setupCards();
        this.setupEventListeners();
    }

    setupCards(){
        const cards = document.querySelectorAll('.good__card');

        cards.forEach((card, index) => {
            if (!card.dataset.productId) {
                card.dataset.productId = `product_${index++}`;
            }

            this.cards.push({
                element: card,
                id: card.dataset.productId,
                isSelected: false,
                isOnSale: false
            })
        })

        this.cards[2].isOnSale = true;
        this.cards[4].isOnSale = true;
        this.setupSale();
    }

    setupSale(){
        this.cards.forEach((card) => {
            if (card.isOnSale){
                card.element.classList.add('good__card--onSale')

                const saleBadge = document.createElement('div');
                saleBadge.className = 'good__sale-badge';
                saleBadge.textContent = 'Скидка';
                saleBadge.style.cssText = `
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: red;
                    color: white;
                    padding: 5px 10px;
                    border-radius: 12px;
                    font-size: 12px;
                    font-weight: bold;
                    z-index: 10;
                `;
                
                card.element.style.position = 'relative';
                card.element.appendChild(saleBadge);
            }
        })
    }

    setupEventListeners(){
        document.addEventListener('click', (event) => {
            const card = event.target.closest('.good__card');
            if (card) {
                this.toggleCardSelection(card);
            }
        })
    }

    toggleCardSelection(cardElement){
        const card = this.cards.find(c => c.element === cardElement);
        if (card){
            if (card.isSelected) {
                this.deselectCard(card);
            }
            else{
                this.selectCard(card);
            }
        }
    }

    selectCard(card){
        card.element.classList.add('good__card--selected');
        card.isSelected = true;
    }

    deselectCard(card){
        card.element.classList.remove('good__card--selected');
        card.isSelected = false;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const goodsManager = new GoodsManager();
})