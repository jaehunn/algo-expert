function unionFind(x, y, root) {
  x = find(x);
  y = find(y);

  root[y] = x;
}

function find(x, root) {
  if ((root[x] = x)) return x;

  return (root[x] = find(root[x]));
}

// union-by-height
