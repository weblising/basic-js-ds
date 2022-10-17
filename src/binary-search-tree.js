const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {

  constructor() {
    this.rootNode = null
  }

  root() {
    return this.rootNode
  }

  add(data) {
    let node = new Node(data),
      current = this.rootNode

    if (this.rootNode === null) {
      this.rootNode = node
      return
    }
    

    while(current) {
      if (node.data > current.data) {
        if(!current.right) {
          current.right = node
          return
        }

        current = current.right
      }

      if (node.data < current.data) {
        if(!current.left) {
          current.left = node
          return
        }

        current = current.left

      }
    }
  }

  has(data) {
    let current = this.rootNode

    while(current) {
      if(current.data === data) {
        return true

      } else if (data > current.data) {
        current = current.right

      } else if (data < current.data) {
        current = current.left
      }
    }

    return false
  }

  find(data) {
    let node = this.rootNode

    while(node) {
      if(node.data === data) {
        return node

      }

      if (data > node.data) {
        node = node.right

      } 
      else if (data < node.data) {
        node = node.left

      }
    }

    return node
  }

  remove( data ) {
    if (!this.has(data)) {
      return
    }

      const  minNode = (node)=>{
        if (node.left !== null){
          return minNode(node.left)
        }	
        else return node
        }
    
	
      const deleteNode = (node, data)=>{        

          if (node === null){
            return null
          }

          if (data < node.data){
            node.left = deleteNode(node.left, data)
            return node
          }	

          if (data > node.data){
            node.right = deleteNode(node.right, data)
            return node
          }	
          
          if (node.left === null){
            return node.right
          }

          if (node.right  === null){
            return node.left
          }			
            
            const minVal = (minNode(node.right)).data
            node.data = minVal
            node.right = deleteNode(node.right, minVal)
            return node
        
      }

    this.rootNode = deleteNode(this.rootNode, data)  
	
  }
 
  min() {
    if (!this.rootNode) {
      return null
    }

    const  minNodeData = (node)=>{
      
      if (node.left !== null){
        return minNodeData(node.left)
      }	
      else return node.data
      }

    return minNodeData(this.rootNode)

  }

  max() {
    if (!this.rootNode) {
      return null
    }

   const  maxNodeData = (node)=>{
      
      if (node.right !== null){
        return maxNodeData(node.right)
      }	
      else return node.data
      }

    return maxNodeData(this.rootNode)
}
}

module.exports = {
  BinarySearchTree
};