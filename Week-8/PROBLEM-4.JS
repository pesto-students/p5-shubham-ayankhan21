// FIND PATH IF EXISTS IN GRAPH
let V;
let adj;

function Graph( v)
{
		V = v;
		adj = new Array(v);
		for (let i = 0; i < v; ++i)
			adj[i] = [];
}
function addEdge(v,w)
{
	adj[v].push(w);
}
function isReachable(s,d)
{
		let visited = new Array(V);
		for(let i = 0; i < V; i++)
			visited[i] = false;
		let queue = [];
		visited[s] = true;
		queue.push(s);

		while (queue.length != 0)
		{
			let n = queue.shift();
			if(n == d)
				return true;
			for(let i = 0; i < adj[n].length; i++)
			{
				if (visited[adj[n][i]] == false)
				{
					queue.push(adj[n][i]);
					visited[adj[n][i]] = true;
				}
			}
			
		}
		return false;
}
Graph(4);
addEdge(0, 1);
addEdge(0, 2);
addEdge(1, 2);
addEdge(2, 0);
addEdge(2, 3);
addEdge(3, 3);

console.log(isReachable(1,2))

