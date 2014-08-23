"use strict";

(function(){

  function BST(){
    this.root = null;
  }

  BST.prototype = {
    constructor: BST,

    add: function(value){
      if(value instanceof Array){
        value.forEach(function(val){
          this.add(val); 
        },this);

        return this;
      }

      var current = null,
          node = {
            value: value,
            left: null,
            right: null
          };

      if(!this.root){
        this.root = node;
      } else {
        current = this.root;

        while(true){
          if(value < current.value){
            if(current.left == null){
              current.left = node;
              break;
            }else {
              current = current.left;
            }
          }else if(value > current.value){
            if(current.right == null){
              current.right = node;
              break;
            }else {
              current = current.right;
            }
          }else {
            break; 
          }
        }       
      }

      return this;
    },

    traverse: function(callback){
      function in_order(node){
        if(node.left){
          in_order(node.left); 
        } 

        callback(node.value);

        if(node.right){
          in_order(node.right);
        }
      } 

      in_order(this.root);
    },

    to_array: function(){
      var arr = [];

      this.traverse(function(val){
        arr.push(val);
      });

      return arr;
    },

    contains: function(needle){
      var found = false;

      this.traverse(function(value){
        if(value == needle) {
          found = true; 
        } 
      });

      return found;
    },

    length: function(){
      var len = 0;

      this.traverse(function(){
        len += 1; 
      });

      return len;
    }
  };

  module.exports = BST; 

}());
