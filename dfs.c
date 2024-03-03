#include <stdio.h>
#include <stdlib.h>

int n, i, j, visited[10], adj[10][10];

void dfs(int v) {
    printf("%d ", v);
    visited[v] = 1;

    for (i = 1; i <= n; i++) {
        if (adj[v][i] && !visited[i]) {
            dfs(i);
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

    printf("DFS traversal starting from vertex %d: ", v);
    dfs(v);

    printf("\nThe nodes that are reachable are: ");
    for (i = 1; i <= n; i++) {
        if (visited[i])
            printf("%d ", i);
    }

    return 0;
}
