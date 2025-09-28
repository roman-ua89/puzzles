
// пошук в ширину
// черга
// поля - вершини
// поле - масив вершин, який є шляхом


const graph = {};
graph.a = ['b', 'c']; // from a -> b OR a -> c
graph.b = ['f']; // b -> f
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

function breadthSearch(graph, start, end) {
  let queue = [];
  queue.push(start);

  while(queue.length > 0) {
    const current = queue.shift();
    if (!graph[current]) {
      graph[current] = [];
    }
    if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]];
    }
  }
  return false;
}

console.log('graph res: ', breadthSearch(graph, 'a', 'g'));