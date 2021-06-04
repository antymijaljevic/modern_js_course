//storage controller

//item controller
const ItemCtrl = (function(){
    //item constructor
    const Item = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    //Data structure / State
    const data = {
        items: [
            {id: 0, name: 'Steak Dinner', calories: 1200},
            {id: 1, name: 'Cookie', calories: 50},
            {id: 2, name: 'Eggs', calories: 300}
        ],
        currentItem: null,
        totalCalories: 0
    }

    return{
        logData: function(){
            return data;
        }
    }
})();



//UI controller
const UICtrl = (function(){
    
})();

//app controller
const App = (function(ItemCtrl, UICtrl){
    
})(ItemCtrl, UICtrl);

