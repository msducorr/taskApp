export class WorkOrder {
    constructor() {
        this.createNewWorkOrderButtonElement = document.querySelector('.new-work-order-button');
        this.tableRowsElement = document.querySelector('.work-order-table');
        this.workOrderHolderJSElement = document.querySelector('.workOrderHolderJS');
    }



    addTableEntry(name, orderId, priority, assignedTo) {
            //getting add button from popup
            this.tableRowsElement.innerHTML += `
               <tr class="work-order-table-row">
                            <td><input type="checkbox" name="" id=""></td>
                            <td>${name}</td>
                            <td>In Progress</td>
                            <td>#${orderId}</td>
                            <td><img src="../../images/users/${assignedTo}.jpeg" class = "Ricky-Cruz" alt=""></td>
                            <td class="work-order-table-priorityElement priority-${priority}">${priority}</td>
                            <td>Musa Sheikh</td>
                            <td>2023-10-01</td>
                        </tr>
            
            `;

            this.workOrderHolderJSElement.innerHTML = '';
            
    }

    handleCreateNewWorkOrderDoneClick() {
      this.workOrderHolderJSElement.addEventListener('click', (event) => {
      if (event.target.classList.contains('addTableEntry')) {
        this.addTableEntry(
          this.workOrderHolderJSElement.querySelector('input[placeholder="Name"]').value,
          this.workOrderHolderJSElement.querySelector('input[placeholder="Order ID"]').value,
          this.workOrderHolderJSElement.querySelector('#Priority').value,
          this.workOrderHolderJSElement.querySelector('#Assigned').value

        );
      }
    })
    }

    // Event handling for creating a new work order
    handleCreateNewWorkOrderClick() {
      this.createNewWorkOrderButtonElement.addEventListener('click', () => {
        const workOrderHolderJS = document.querySelector('.workOrderHolderJS');
        workOrderHolderJS.innerHTML = `
        <div class="work-order-popup">
             <input type="text" placeholder="Name">
    <input type="text" placeholder="Order ID">
   <select id="Priority" name="country">
    <option value="">Select Priority</option>
    <option value="High">High</option>
    <option value="Medium">Medium</option>
    <option value="Low">Low</option>
  </select> <select id="Assigned" name="country">
    <option value="">Assign to</option>
    <option value="Ricky-Cruz">Ricky Cruz</option>
    <option value="Hassan-Sheikh">Hassan Sheikh</option>
    <option value="Abdul-Wahab">Abdul Wahab</option>
  </select>
  </select> <select id="Assigned" name="country">
    <option value="">Status</option>
    <option value="Done">Done</option>
    <option value="In Progress">In Progress</option>
    <option value="Not Started">Not Started</option>
  </select>
    <button class="addTableEntry" onclick="
    ;
        ">Done</button>

    
    
        </div>
        <script src="../script/index.js" type="module"></script>

        `
        
      })
    }


}

 