//图 -- 深度优先搜索

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

    this.dfs = function (callback) {
        let color = initcolor();
        for (let i = 0; i < vertieces.length; i++) {
            if (color[vertieces[i]] == "white") {
                dfsVisit(vertieces[i], color, callback)
            }
        }
    }

    let dfsVisit = function (u, color, callback) {
        color[u] = 'grey';
        if (callback) {
            callback(u)
        }
        let neighbors = adjList.get(u);

        for (let i = 0; i < neighbors.length; i++) {
            let w = neighbors[i];
            if (color[w] == 'white') {
                dfsVisit(w, color, callback);
            }
        }
        color[u] = 'black';
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

// console.log(gl.dfs())

gl.dfs(printNode);


