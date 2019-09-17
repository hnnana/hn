const button = document.getElementById("targetButton");
const clickEvent = (function() {
    if('ontouchstart' in document.documentElement === true)
    return 'touchstart';
    else
    return 'click';
})();
button.addEventListener(clickEvent, e=>{
    console.log(e);
    alert(clickEvent + ' things happend!');
})

Object.prototype.hasPubProperty = function (property) {
    let ary = ["string", "boolean", "number"],
        prop = typeof property;
    if (!ary.includes(prop)) return false;
    let m = this.hasOwnProperty(property),
        n = property in this;
    return n && !m;
}
console.log(Array.prototype.hasPubProperty('push'));
console.log([].hasPubProperty('push'));


~function () {
    function myUnique() {
        let obj = {};
        for (let i = 0; i < this.length; i++) {
            let item = this[i];
            if (typeof obj[item] !== "undefined") {
                this[i] = this[this.length - 1];
                this.length--;
                i--;
                continue;
            }
            obj[item] = item;
        }
        obj = null;
        return this;
    }
    Array.prototype.myUnique = myUnique;
}()
let ary = [12, 3, 23, 46, 56, 1, 2, 2, 3, 23, 16];
ary.myUnique().sort((a,b)=>a-b).reverse();
console.log(ary);








