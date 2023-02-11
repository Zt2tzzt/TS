// chatGPT TS 红黑树

class Node<T> {
  key: T;
  left: Node<T>;
  right: Node<T>;
  color: "red" | "black";

  constructor(key: T) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.color = "red";
  }
}

class RedBlackTree<T> {
  root: Node<T>;

  constructor() {
    this.root = null;
  }

  insert(key: T) {
    this.root = this._insert(this.root, key);
    this.root.color = "black";
  }

  private _insert(node: Node<T>, key: T): Node<T> {
    if (!node) {
      return new Node(key);
    }
    if (key < node.key) {
      node.left = this._insert(node.left, key);
    } else {
      node.right = this._insert(node.right, key);
    }
    if (node.right && node.right.color === "red") {
      node = this.rotateLeft(node);
    }
    if (node.left && node.left.color === "red" && node.left.left && node.left.left.color === "red") {
      node = this.rotateRight(node);
    }
    if (node.left && node.right && node.left.color === "red" && node.right.color === "red") {
      node = this.flipColors(node);
    }
    return node;
  }

  private rotateLeft(node: Node<T>): Node<T> {
    const right = node.right!;
    node.right = right.left;
    right.left = node;
    right.color = node.color;
    node.color = "red";
    return right;
  }

  private rotateRight(node: Node<T>): Node<T> {
    const left = node.left!;
    node.left = left.right;
    left.right = node;
    left.color = node.color;
    node.color = "red";
    return left;
  }

  private flipColors(node: Node<T>): Node<T> {
    node.left!.color = "black";
    node.right!.color = "black";
    node.color = "red";
    return node;
  }
}
