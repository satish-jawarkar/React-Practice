#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_SIZE 1000

// Define a structure for a node in the graph
typedef struct node {
    int data;           // Data stored in the node
    struct node* next;  // Pointer to the next node
} node;

// Define a structure for the graph
typedef struct graph {
    node* adjLists[MAX_SIZE];  // Array of pointers to adjacency lists
    int numVertices;           // Number of vertices in the graph
} graph;

// Function to create a new node with given data
node* createNode(int data) {
    node* newNode = (node*) malloc(sizeof(node));  // Allocate memory for the new node
    newNode->data = data;                          // Set the data of the new node
    newNode->next = NULL;                          // Set the next pointer to NULL
    return newNode;                                // Return the new node
}

// Function to add an edge between two vertices in the graph
void addEdge(graph* g, int src, int dest) {
    // Add an edge from source to destination
    node* newNode = createNode(dest);             // Create a new node for the destination
    newNode->next = g->adjLists[src];             // Set the next pointer of the new node
    g->adjLists[src] = newNode;                   // Update the adjacency list for the source vertex

    // Add an edge from destination to source (undirected graph)
    newNode = createNode(src);                    // Create a new node for the source
    newNode->next = g->adjLists[dest];            // Set the next pointer of the new node
    g->adjLists[dest] = newNode;                  // Update the adjacency list for the destination vertex
}

// Function to perform breadth-first search traversal on the graph
void bfs(graph* g, int startVertex) {
    bool visited[MAX_SIZE];  // Array to mark visited vertices
    int queue[MAX_SIZE];     // Array to store vertices in the traversal order
    int front = -1, rear = -1;// Variables to maintain the front and rear of the queue

    // Initialize all vertices as not visited
    for (int i = 0; i < g->numVertices; i++) {
        visited[i] = false;
    }

    // Mark the starting vertex as visited and enqueue it
    visited[startVertex] = true;
    queue[++rear] = startVertex;

    // Loop until the queue is empty
    while (front < rear) {
        // Dequeue a vertex from the front of the queue
        int currentVertex = queue[++front];

        // Print the current vertex
        printf("%d ", currentVertex);

        // Get all adjacent vertices of the current vertex
        node* adjList = g->adjLists[currentVertex];
        while (adjList != NULL) {
            int adjVertex = adjList->data;

            // If the adjacent vertex is not visited, mark it as visited and enqueue it
            if (!visited[adjVertex]) {
                visited[adjVertex] = true;
                queue[++rear] = adjVertex;
            }

            // Move to the next adjacent vertex
            adjList = adjList->next;
        }
    }
}

int main() {
    // Create a graph with 6 vertices
    graph* g = (graph*) malloc(sizeof(graph));  // Allocate memory for the graph
    g->numVertices = 6;                          // Set the number of vertices in the graph

    // Initialize adjacency lists for all vertices
    for (int i = 0; i < g->numVertices; i++) {
        g->adjLists[i] = NULL;  // Initialize each adjacency list as empty
    }

    // Add edges to the graph
    addEdge(g, 0, 2);
    addEdge(g, 0, 1);
    addEdge(g, 1, 4);
    addEdge(g, 1, 3);
    addEdge(g, 3, 5);
    addEdge(g, 4, 5);

    // Perform BFS traversal starting from vertex 0
    printf("BFS traversal starting from vertex 0: ");
    bfs(g, 0);

    return 0;
}
