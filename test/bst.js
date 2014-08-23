var assert = require('assert'),
    BST    = require('../bst.js');

describe("BST", function(){

  describe("#add", function(){
    it("can add a node to a tree", function(){
      var tree = new BST();

      tree.add(1);
      tree.add(3);
      tree.add(4);

      assert.deepEqual(tree.to_array(), [1,3,4]);
    });

    it("can be chained", function(){
      var tree = new BST(); 

      tree.add(1).add(2);

      assert.deepEqual(tree.to_array(), [1,2]);
    });

    it("can add an array of values", function(){
      var tree = new BST(); 

      tree.add([1,2,3]);

      assert.deepEqual(tree.to_array(), [1,2,3]);
    });
  });

  describe("#contains", function(){
    it('can find a value', function(){
      var tree = new BST();

      tree.add(1).add(2).add(3);

      assert.equal(tree.contains(2), true);
    });
  });

  describe("#length", function(){
    it('returns the number of nodes in the tree', function(){
      var tree = new BST(); 

      tree.add(1);
      tree.add(4);

      assert.equal(tree.length(), 2);
    });
  });

});

