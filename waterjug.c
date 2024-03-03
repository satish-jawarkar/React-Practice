#include <stdio.h>
#include <stdbool.h>

#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define MIN(a, b) ((a) < (b) ? (a) : (b))

// Structure to represent state of jugs
typedef struct {
    int jug1;
    int jug2;
} State;

// Function to check if a state is valid
bool isValidState(State s, int jug1_capacity, int jug2_capacity) {
    return s.jug1 >= 0 && s.jug1 <= jug1_capacity && s.jug2 >= 0 && s.jug2 <= jug2_capacity;
}

// Function to check if a state is the goal state
bool isGoalState(State s, int target_amount) {
    return s.jug1 == target_amount || s.jug2 == target_amount || s.jug1 + s.jug2 == target_amount;
}

// Function to perform Breadth-First Search to solve the Water Jug problem
void solveWaterJugProblem(int jug1_capacity, int jug2_capacity, int target_amount) {
    // Create an array to keep track of visited states
    bool visited[jug1_capacity + 1][jug2_capacity + 1];
    for (int i = 0; i <= jug1_capacity; ++i) {
        for (int j = 0; j <= jug2_capacity; ++j) {
            visited[i][j] = false;
        }
    }

    // Create a queue for BFS traversal
    State queue[jug1_capacity * jug2_capacity];
    int front = 0, rear = 0;

    // Enqueue the initial state (0, 0)
    State initial_state = {0, 0};
    queue[rear++] = initial_state;
    visited[0][0] = true;

    while (front < rear) {
        // Dequeue a state from the queue
        State current_state = queue[front++];

        // Check if the current state is the goal state
        if (isGoalState(current_state, target_amount)) {
            printf("Target amount %d can be measured.\n", target_amount);
            return;
        }

        // Generate all possible next states from the current state
        // Fill jug1
        State next_state = {jug1_capacity, current_state.jug2};
        if (!visited[next_state.jug1][next_state.jug2]) {
            visited[next_state.jug1][next_state.jug2] = true;
            queue[rear++] = next_state;
        }

        // Fill jug2
        next_state = {current_state.jug1, jug2_capacity};
        if (!visited[next_state.jug1][next_state.jug2]) {
            visited[next_state.jug1][next_state.jug2] = true;
            queue[rear++] = next_state;
        }

        // Empty jug1
        next_state = {0, current_state.jug2};
        if (!visited[next_state.jug1][next_state.jug2]) {
            visited[next_state.jug1][next_state.jug2] = true;
            queue[rear++] = next_state;
        }

        // Empty jug2
        next_state = {current_state.jug1, 0};
        if (!visited[next_state.jug1][next_state.jug2]) {
            visited[next_state.jug1][next_state.jug2] = true;
            queue[rear++] = next_state;
        }

        // Pour jug1 to jug2
        next_state = {MAX(0, current_state.jug1 - (jug2_capacity - current_state.jug2)), MIN(jug2_capacity, current_state.jug1 + current_state.jug2)};
        if (!visited[next_state.jug1][next_state.jug2]) {
            visited[next_state.jug1][next_state.jug2] = true;
            queue[rear++] = next_state;
        }

        // Pour jug2 to jug1
        next_state = {MIN(jug1_capacity, current_state.jug1 + current_state.jug2), MAX(0, current_state.jug2 - (jug1_capacity - current_state.jug1))};
        if (!visited[next_state.jug1][next_state.jug2]) {
            visited[next_state.jug1][next_state.jug2] = true;
            queue[rear++] = next_state;
        }
    }

    // If the target amount cannot be measured
    printf("Target amount %d cannot be measured.\n", target_amount);
}

int main() {
    int jug1_capacity, jug2_capacity, target_amount;

    // Accepting inputs from the user
    printf("Enter the capacity of jug 1: ");
    scanf("%d", &jug1_capacity);
    printf("Enter the capacity of jug 2: ");
    scanf("%d", &jug2_capacity);
    printf("Enter the target amount of water to measure: ");
    scanf("%d", &target_amount);

    // Solve the Water Jug problem
    solveWaterJugProblem(jug1_capacity, jug2_capacity, target_amount);

    return 0;
}
