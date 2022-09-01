
class LinkedList{

    constructor(){
        this.head = this.tail = null
    }
    // add to the end of the list // tail   
    append(value){
        // if list is empty 
        if(!this.tail){
            const first = new Node(value)
            this.head = this.tail = first
        }else{

            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
            this.tail.prev = oldTail
        }

    }
    // add to the beggining of the list 
    prepend(value){
        if(!this.head){
            this.head = this.tail = new Node(value)
        }else{
            let oldHead = this.head ; 
            this.head = new Node(value)
            oldHead.prev = this.head    
            this.head.next = oldHead
        }
        
    }
    deleteHead(){
        if(!this.head){
            return null
        }else{
            let removedHead = this.head
            if(this.head == this.tail){
                this.head = this.tail = null 
            }else{
                this.head = this.head.next
                this.head.prev = null 
            }
            return removedHead.value
        }
    }
    deleteTail(){
        if(!this.tail){
            return null 
        }else{
            let removedTail = this.tail
            // if this is the last node 
            if(this.head === this.tail){
                this.head = this.tail = null
            }else{ 
                this.tail = this.tail.prev
                this.tail.next = null 
            }
            return removedTail.value
        }

    }
    sarch(value){
        let currentNode = this.head
        while(currentNode){
            if(currentNode.value == value){
                return currentNode
            }
            currentNode = currentNode.next
        }
        return null 
    }
    show(){
        let p = this.head ; 
        while(p != null){
            console.log(p.value)
        }
    }
}

// Implementation of node 

class Node{
    constructor(value,prev,next){
        this.value = value ;
        // these null are given by default if the preveious or next node is not given 
        this.prev = prev || null
        this.next = next || null
    }
}

let list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.sarch(2)


