const reviewContent = document.querySelector('.reviews');
for (let i = 0; i < localStorage.length; i++) {
    let product = localStorage.key(i);
    const reviewSet = JSON.parse(localStorage.getItem(product));
    
    const divProduct = document.createElement('div');
    reviewContent.insertAdjacentElement("beforeend", divProduct);
    divProduct.insertAdjacentHTML(
      "beforeend",
      `<h2>${product} <button onclick="openReview(this)">показать отзывы</button> </h2>`
    );
    
    const divReview = document.createElement('div');
    divReview.hidden = true;
    divProduct.insertAdjacentElement('beforeend', divReview);

    reviewSet.forEach((element) => {
      const newReview = document.createElement('div');
      divReview.insertAdjacentElement('beforeend', newReview);

      const reviewText = document.createElement('span');
      reviewText.innerHTML = element;

      newReview.insertAdjacentElement('beforeend', reviewText);

      newReview.insertAdjacentElement(
        "beforeend",
        deleteReviewBtn(reviewText, reviewSet, product))

      
    });



}

function deleteReviewBtn(textReview,setReview, product) {
  const delBtn = document.createElement("button");
        delBtn.textContent = "Удалить";

        delBtn.addEventListener("click", () => {
          if (setReview.length > 1) {
            let indexItem = setReview.findIndex(
              (element) => element === textReview.textContent
            );
            setReview.splice(indexItem, 1);
            localStorage.setItem(product, JSON.stringify(setReview));
          } else {
            localStorage.removeItem(product);
            delBtn.parentElement.parentElement.parentElement.remove();
          }
          textReview.parentElement.remove();
          delBtn.remove();
        });

        return delBtn;
      }
  


function openReview (el) {
    let hiddenElement = el.parentElement.parentElement.lastChild;
    if (hiddenElement.hidden) {
      hiddenElement.hidden = false;
      el.textContent = "скрыть отзывы";
    }else {
        hiddenElement.hidden = true;
        el.textContent = "показать отзывы";
      }
}
