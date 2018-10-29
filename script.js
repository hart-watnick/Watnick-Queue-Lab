"use strict";

$(document).ready(() => {


    function Queue() {
        this.data = [];
    }


    Queue.prototype.add = function(record) {
        this.data.unshift(record);
    }
    
    Queue.prototype.remove = function() {
        this.data.pop();
    }

    Queue.prototype.first = function() {
        return this.data[0];
    }
    
    Queue.prototype.last = function() {
        return this.data[this.data.length - 1];
    }
    
    Queue.prototype.size = function() {
        return this.data.length;
    }
    
    const q = new Queue();

    
    
    $(document).on("click", ".submit", (event) => {
       const inputs = document.querySelectorAll ("input"); 
       q.add({
           bug: $("input")[0].value,
           description: $("input")[1].value
       });
       
       $("section").append (`
       <section class = "bug">
            Bug: ${inputs[0].value},
            Descripiton: ${inputs[1].value}
            <button class = "resolved" type= "button">Resolved</button>
        </section>`);
       
    //    console.log(q);

    $(document).on("click", ".resolved", (event) => {
        q.remove();
        $(".bug").css("display", "none");
    });
        
        
    });
});    

//     class DoublyLinkedList {
//         constructor() {
//             this.head = null;
//             this.tail = null;
//             this.count = 0;
//         }
    
//         length() {
//             return this.count;
//         }
    
//         isEmpty() {
//             return this.head === null;
//         }
    
//         push(item) {
//             const newNode = {
//                 value: item,
//                 next: null,
//                 prev: this.tail
//             };
//             if (this.isEmpty()) {
//                 this.head = newNode;
//             } else {
//                 this.tail.next = newNode;
//             }
//             this.tail = newNode;
//             this.count++;
//         }  

//         shift() {
//             if (this.isEmpty()) {
//                 return undefined;
//             } else {
//                 const current = this.head;
//                 const next = current.next;
//                 if (next === null) {
//                     this.head = null;
//                     this.tail = null;
//                 } else {
//                     next.prev = null;
//                 }
//                 this.head = next;
//                 this.count--;
//                 return current.value;
//             }
//         }
//     }        
              
