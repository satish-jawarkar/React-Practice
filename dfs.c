#include <stdio.h>
#include <stdlib.h>

// Define a structure for a node
struct node {
  int vertex;           // Vertex number
  struct node* next;    // Pointer to the next node in the adjacency list
};

// Function to create a new node
struct node* createNode(int v) {
  struct node* newNode = (struct node*)malloc(sizeof(struct node));  // Allocate memory for the new node
  newNode->vertex = v;                          // Set the vertex number
  newNode->next = NULL;                          // Set the next pointer to NULL
  return newNode;                                // Return the new node
}

// Define a structure for the graph
struct Graph {
  int numVertices;      // Number of vertices
  int* visited;         // Array to keep track of visited vertices
  struct node** adjLists;  // Array of pointers to adjacency lists
};

// Function to create a new graph
struct Graph* createGraph(int numVertices) {
  struct Graph* graph = (struct Graph*)malloc(sizeof(struct Graph));  // Allocate memory for the new graph
  graph->numVertices = numVertices;               // Set the number of vertices
  graph->visited = (int*)malloc(numVertices * sizeof(int));  // Allocate memory for visited array
  graph->adjLists = (struct node**)malloc(numVertices * sizeof(struct node*));  // Allocate memory for adjacency lists array

  // Initialize adjacency lists and visited array
  for (int i = 0; i < numVertices; i++) {
    graph->adjLists[i] = NULL;   // Initialize each adjacency list as empty
    graph->visited[i] = 0;       // Mark all vertices as not visited
  }

  return graph;   // Return the new graph
}

// Function to add an edge between two vertices in the graph
void addEdge(struct Graph* graph, int src, int dest) {
  struct node* newNode = createNode(dest);       // Create a new node for the destination
  newNode->next = graph->adjLists[src];         // Add the new node to the beginning of the adjacency list of the source
  graph->adjLists[src] = newNode;

  newNode = createNode(src);                     // Create a new node for the source
  newNode->next = graph->adjLists[dest];         // Add the new node to the beginning of the adjacency list of the destination
  graph->adjLists[dest] = newNode;
}

// Depth-First Search (DFS) function
void DFS(struct Graph* graph, int vertex) {
  struct node* adjList = graph->adjLists[vertex];   // Get the adjacency list of the vertex
  graph->visited[vertex] = 1;                      // Mark the vertex as visited
  printf("Visited %d \n", vertex);                  // Print the visited vertex

  while (adjList != NULL) {
    int connectedVertex = adjList->vertex;          // Get the connected vertex

    if (graph->visited[connectedVertex] == 0) {     // If the connected vertex is not visited
      DFS(graph, connectedVertex);                  // Recursive call to DFS for the connected vertex
    }
    adjList = adjList->next;                         // Move to the next node in the adjacency list
  }
}

int main() {
  // Create a graph with 5 vertices
  struct Graph* graph = createGraph(5);

  // Add edges to the graph
  addEdge(graph, 0, 1);
  addEdge(graph, 0, 2);
  addEdge(graph, 1, 3);
  addEdge(graph, 2, 4);

  // Perform Depth-First Search (DFS) starting from vertex 0
  DFS(graph, 0);

  return 0;
}
