

function Dictionary() {
    let items = {};

    this.set = function (key, value) {
        items[key] = value;
    }
    this.get = function (key) {
        if (this.has(key)) {
            return items[key]
        } else {
            return undefined;
        }
    }
    this.remove = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        } else {
            return false;
        }
    }
    this.has = function (key) {
        return key in items;
    }
    this.clear = function () {
        items = {};
    }
    this.size = function () {
        return Object.keys(items).length;
    }
    this.keys = function () {
        return Object.keys(items);
    }
    this.values = function () {
        let values = [];
        for (let k in items) {
            values.push(items[k]);
        }
        return values;
    }
    this.items = function () {
        return items;
    }

}


function Queue() {
    let items = [];

    this.enqueue = function (element) {
        items.push(element);
    }

    this.dequeue = function () {
        return items.shift();
    }

    this.front = function () {
        return items[0]
    }

    this.size = function () {
        return items.length
    }

    this.isEmpty = function () {
        return items.length == 0
    }

    this.print = function () {
        console.log(items.toString())
    }
}


function Graph() {
    let vertieces = [];
    let adjList = new Dictionary();


    this.addVertex = function (v) {
        vertieces.push(v);
        adjList.set(v, []);
    }

    this.addEdge = function (v, w) {
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    }

    let initcolor = function () {
        let color = [];
        for (let i = 0; i < vertieces.length; i++) {
            color[vertieces[i]] = 'white'
        }
        return color;
    }

    this.bfs = function (v) {
        let queue = new Queue();
        let color = initcolor();
        

        let d = [];
        let pred = [];
        queue.enqueue(v);
        for (let i = 0; i < vertieces.length; i++) {
            d[vertieces[i]] = 0;
            pred[vertieces[i]] = null;
        }

        while (!queue.isEmpty()) {
            let u = queue.dequeue();
            color[u] = 'grey';
            let neighbors = adjList.get(u);
            for (let i = 0; i < neighbors.length; i++) {
                let w = neighbors[i];
                if (color[w] == "white") {
                    
                    color[w] = 'grey'
                    d[w] = d[u] + 1;
                    pred[w] = u;
                    queue.enqueue(w);
                }

            }
            color[u] = 'black';

            
        }
        return {
            distance: d,
            precessors: pred
        }
    }

    this.toString = function () {
        let s = '';
        vertieces.forEach((element) => {
            s += element + "==>";
            let neighbors = adjList.get(element);
            neighbors.forEach((element) => {
                s += element;
            })
            s += "\n";
        })
        return s;
    }
}
let printNode = function (value) {
    console.log('Visted vertex:', value);
}
let gl = new Graph();

let myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
myVertices.forEach((ele) => {
    gl.addVertex(ele);
})

gl.addEdge('A', 'B');
gl.addEdge('A', "C");
gl.addEdge('B', 'D');
gl.addEdge('C', 'E');
gl.addEdge('C', 'F');

// console.log(gl.toString())
// gl.bfs(myVertices[0],printNode)

// console.log(gl.bfs(myVertices[0]))
function Stack() {
    let items = [];

    this.push = function (element) {
        items.push(element)
    }

    this.pop = function () {
        return items.pop()
    }

    this.peek = function () {
        return items[items.length - 1]
    }

    this.clear = function () {
        items = [];
    }

    this.size = function () {
        return items.length
    }

    this.isEmpty = function () {
        return items.length == 0
    }

    this.print = function () {
        console.log(items.toString())
    }
}
let shortestPathA = gl.bfs(myVertices[0]);

let fromVertex = myVertices[0];
for (let i = 1; i < myVertices.length; i++) {
    let toVertex = myVertices[i];
    let path = new Stack();


    for (let v = toVertex; v !== fromVertex; v = shortestPathA.precessors[v]) {
        path.push(v);
    }
    path.push(fromVertex);

    var s = path.pop();
    while (!path.isEmpty()) {
        s += "-" + path.pop()
    }
    console.log(s)
}

