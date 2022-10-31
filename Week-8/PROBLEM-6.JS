// ALL PATH FROM SOURCE TO DESTINATION

let v;
let adjList;
function Graph(vertices)
{
		v = vertices;
		initAdjList();
}
function initAdjList()
{
	adjList = new Array(v);

		for (let i = 0; i < v; i++) {
			adjList[i] = [];
		}
    }

function addEdge(u,v)
{
		adjList[u].push(v);
}
function printAllPaths()
{
    let s = 0
    let d = n-1
	let isVisited = new Array(v);
	for(let i=0;i<v;i++)
		isVisited[i]=false;
		let pathList = [];
		pathList.push(s);
		printAllPathsUtil(s, d, isVisited, pathList);
}
function printAllPathsUtil(u,d,isVisited,localPathList)
{
	if (u == (d)) {
            console.log(localPathList)
			return;
		}
		isVisited[u] = true;

		for (let i=0;i< adjList[u].length;i++) {
			if (!isVisited[adjList[u][i]]) {
				localPathList.push(adjList[u][i]);
				printAllPathsUtil(adjList[u][i], d,
				isVisited, localPathList);

				localPathList.splice(localPathList.indexOf
				(adjList[u][i]),1);
			}
		}
		isVisited[u] = false;
}
let n = 6
Graph(n);
addEdge(0, 1);
addEdge(1, 2);
addEdge(0, 3);
addEdge(2, 0);
addEdge(2, 1);
addEdge(1, 5);
addEdge(4, 5);
addEdge(3, 5);

printAllPaths()
