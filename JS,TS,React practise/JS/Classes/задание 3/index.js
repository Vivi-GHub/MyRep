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

const totalButton = document.createElement('button');
totalButton.classList = 'total-button';
totalButton.textContent = 'Общее расстояние';

const totalDistanceResult = document.createElement('p');
totalDistanceResult.classList = 'total-distance-result';

const totalWrapper = document.createElement('div')
totalWrapper.classList = ('total-wrapper')
totalWrapper.append(totalButton, totalDistanceResult)

document.querySelector('.app').append(totalWrapper);

totalButton.addEventListener('click', () => {
    const totalDistance = EditDelivery.getTotalDistance(deliveryArr)
    totalDistanceResult.textContent = `Общее расстояние: ${totalDistance} км`;
});
