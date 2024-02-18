class  Customer {
    constructor(name) {
        this.name = name;
    }
    
    describe() {
        return `${this.name}`;

    }
}

class Order {
    constructor(name) {
        this.name = name;
        this.customer = [];
    }

    addCustomer(customer) {
        if (customer instanceof Customer) {
            this.customer.push(customer);
        } else {
            throw new Error(`You can only add an instance of Customer. Argument is not a customer: ${customer}`);
        }
    }

    describe() {
        return `${this.mame} has ${this.customer.length}`;
    }
}
//------------------------------------------------------------------------
  class Menu {
    constructor() {
        this.order = [];
        this.selectedOrder = null;        
    }
  

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createOrder();
                    break;
                case '2':
                    this.viewOrder();
                    break;
                case '3':
                    this.deleteOrder();
                    break;
                case '4':
                    this.displayOrders();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

    alert('Goodbye!');
    }

    showMainMenuOptions(){
        return prompt(`
        0) exit
        1) create new Order
        2) view Order
        3) delete Order
        4) display all Orders
        `);
    }

    showOrderMenuOptions(orderInfo) {
        return prompt (`
        0) back
        1) create customer
        2) delete customer
        -----------------
        ${orderInfo}
        `);
    }

    displayOrders() {
        let orderString = '';
        for (let i = 0; i < this.order.length; i++) {
            orderString += i + ') ' + this.order[i].name + '\n';
        }
        alert(orderString);
    }

    createOrder() {
        let name = prompt('Enter new order:');
        this.order.push(new Order(name));
    }

    viewOrder(){
        let index = prompt('Enter the index of the order you wish to view:');
        if (index > -1 && index < this.order.length) {
            this.selectedOrder = this.order[index];
            let description = 'Order Name:' + this.selectedOrder.name + '\n';

            for (let i = 0; i < this.selectedOrder.customer.length; i++) {
                description += i + ') ' + this.selectedOrder.customer[i].name + ' - ' + '\n';
            }

            let selection = this.showOrderMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createCustomer();
                    break;
                case '2':
                    this.deleteCustomer();
            
        }
    }
}
    deleteOrder() {
        let index = prompt ('Enter the index of the order you wish to delete:');
        if (index > -1 && index < this.order.length) {
            this.order.splice(index, 1);
        }
    }
    createCustomer() {
        let name = prompt('Enter name for new customer:');
        this.selectedOrder.customer.push(new Customer(name));
    }

    deleteCustomer() {
        let index = prompt ('Enter the index of the customer you wish to delete:');
        if (index > -1 && index < this.selectedOrder.customer.length) {
            this.selectedOrder.customer.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();