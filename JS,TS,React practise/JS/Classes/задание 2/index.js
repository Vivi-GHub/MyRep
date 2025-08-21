import EditDelivery from './EditDelivery.js'

const deliveryArr = [
    new EditDelivery("ольга", "ул. Вымыслов, д. 12", 8),
    new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3),
    new EditDelivery("Оля", "ул. Ткачей, д. 43", 11),
];

deliveryArr.forEach(delivery => {
    delivery.createCard()
    delivery.getEditButtonEl()
});
