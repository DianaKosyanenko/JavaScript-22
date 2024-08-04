// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).
const productElem = document.querySelector('.product')
const textElem = document.querySelector('.addRevies');
const textContent = document.querySelector('.addedReview');
const btnElem = document.querySelector('.btn');

btnElem.addEventListener('click', () => {
    const product = productElem.value;
    const review = textElem.value;
    // localStorage.setItem('textContent', input);
    console.log(product);
    console.log(review); 
    
    if(product !== '' && review !== ''){
        let reviews = JSON.parse(localStorage.getItem(product));
        if(reviews === null){
            reviews = [];
            
        }
        reviews.push(review)
        localStorage.setItem(product, JSON.stringify(reviews))       
    }
})


