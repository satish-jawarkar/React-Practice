 #include <stdio.h>

int n, i, j, visited[10], queue[10], front = -1, rear = -1;
int adj[10][10];

void bfs(int v) {
    queue[++rear] = v;
    visited[v] = 1;

    while (front <= rear) {
        v = queue[front++];
        printf("%d ", v);

        for (i = 1; i <= n; i++) {
            if (adj[v][i] && !visited[i]) {
                queue[++rear] = i;
                visited[i] = 1;
            }
        }
    }
}

int main() {
    int v;
    printf("Enter the number of vertices: ");
    scanf("%d", &n);

    for (i = 1; i <= n; i++) {
        visited[i] = 0;
        for (j = 1; j <= n; j++)
            scanf("%d", &adj[i][j]);
    }

    printf("Enter the starting vertex: ");
    scanf("%d", &v);

    printf("BFS traversal starting from vertex %d: ", v);
    bfs(v);

    printf("\nThe nodes that are reachable are: ");
    for (i = 1; i <= n; i++) {
        if (visited[i])
            printf("%d ", i);
    }

    return 0;
}
