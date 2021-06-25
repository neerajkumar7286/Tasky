const taskContainer=document.querySelector(".task__container");
const globalStore = [];

const loadInitialCardData= ()=> {
    //local staorage to get tasky card data
    const getCardData=localStorage.getItem("tasky")
    //convert to normal object
    const {cards}=JSON.parse(getCardData);
    //loop over those array of task object to create HTML card, inject it to DOM
    cards.map((cardObject) =>{taskContainer.insertAdjacentHTML("beforeend",generateNewCard(cardObject));
    //update our globalstore
    globalStore.push(cardObject);} )
    


} 






const generateNewCard=(taskData)=>`
<div class="col-md-6 col-lg-4" id=${taskData.id}>
        <div class="card ">
            <div class="card-header d-flex justify-content-end gap-2">
                <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
                <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
            </div>
            <img src=${taskData.imageUrl} alt="" id="imageurl">
            <div class="card-body">
              <h5 class="card-title">${taskData.taskTitle}</h5>
              <p class="card-text">${taskData.taskDescription}</p>
              <a href="#" class="btn btn-primary">${taskData.taskType}</a>
            </div>
            <div class="card-footer text-muted">
                <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
            </div>
          </div>
      </div>
`;





const saveChanges=() =>{
    const taskData={
        id:`${Date.now}`,
        imageUrl:document.getElementById("imageurl").value,
        taskType:document.getElementById("tasktitle").value,
        taskTitle:document.getElementById("tasktype").value,
        taskDescription:document.getElementById("taskdescription").value,
        }

        taskContainer.insertAdjacentHTML("beforeend",generateNewCard(taskData));

        globalStore.push(taskData);
        localStorage.setItem("tasky",JSON.stringify({cards:globalStore}));
    };