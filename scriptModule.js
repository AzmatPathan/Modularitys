var scriptModule = (() => {

    var items = ['Apple', 'Banana', 'Orange'];
    var itemNum = items.length;
    console.log(items)

    var addPrivateItem = (fruit) => {
        items.push(fruit)

    }

    var addPrivateNum = (items) => {
        itemNum = items;
        console.log(items)
    }

    console.log(fruit)
    return {

        addPublicItem: addPrivateItem(fruit),
        addPublicNum: function (items) {
            addPrivateNum(items)
        }
    }
})();

scriptModule.addPublicItem("Hello");
scriptModule.addPublicNum(items)
console.log(items)