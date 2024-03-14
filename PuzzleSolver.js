// import React, { useState } from 'react';

// const PuzzleSolver = () => {
//     const N = 3; // Size of the puzzle
//     const [puzzleState, setPuzzleState] = useState({
//         initial: [
//             [1, 2, 3],
//             [5, 6, 0],
//             [7, 8, 4]
//         ],
//         final: [
//             [1, 2, 3],
//             [5, 8, 6],
//             [0, 7, 4]
//         ],
//         solution: []
//     });

//     // Function to allocate a new node
//     const newNode = (mat, x, y, newX, newY, level, parent) => {
//         const node = {
//             parent: parent,
//             mat: mat.map(row => [...row]),
//             x: x,
//             y: y,
//             cost: Infinity,
//             level: level
//         };

//         // Move tile by 1 position
//         [node.mat[x][y], node.mat[newX][newY]] = [node.mat[newX][newY], node.mat[x][y]];

//         // Update new blank tile coordinates
//         node.x = newX;
//         node.y = newY;

//         return node;
//     };

//     // Function to calculate the number of misplaced tiles
//     const calculateCost = (initial, final) => {
//         let count = 0;
//         for (let i = 0; i < N; i++) {
//             for (let j = 0; j < N; j++) {
//                 if (initial[i][j] && initial[i][j] !== final[i][j]) {
//                     count++;
//                 }
//             }
//         }
//         return count;
//     };

//     // Function to check if (x, y) is a valid matrix coordinate
//     const isSafe = (x, y) => {
//         return x >= 0 && x < N && y >= 0 && y < N;
//     };

//     // Function to solve the puzzle
//     const solvePuzzle = () => {
//         const initial = puzzleState.initial;
//         const final = puzzleState.final;
//         const startX = 1;
//         const startY = 2;

//         // State space tree nodes
//         const Node = (mat, x, y, level, parent) => {
//             return {
//                 parent: parent,
//                 mat: mat.map(row => [...row]),
//                 x: x,
//                 y: y,
//                 cost: Infinity,
//                 level: level
//             };
//         };

//         // Bottom, left, top, right
//         const row = [1, 0, -1, 0];
//         const col = [0, -1, 0, 1];

//         // Create an array to store live nodes of the search tree
//         const pq = [];

//         // Create a root node and calculate its cost
//         const root = Node(initial, startX, startY, 0, null);
//         root.cost = calculateCost(initial, final);

//         // Add root to the array of live nodes
//         pq.push(root);

//         // Find a live node with the least cost,
//         // add its children to the array of live nodes, and
//         // finally delete it from the array
//         while (pq.length > 0) {
//             // Find a live node with the least estimated cost
//             pq.sort((lhs, rhs) => (lhs.cost + lhs.level) - (rhs.cost + rhs.level));
//             const min = pq.shift();

//             // If min is an answer node
//             if (min.cost === 0) {
//                 // Print the path from root to destination
//                 printPath(min);
//                 return;
//             }

//             // Do for each child of min
//             // Max 4 children for a node
//             for (let i = 0; i < 4; i++) {
//                 if (isSafe(min.x + row[i], min.y + col[i])) {
//                     // Create a child node and calculate its cost
//                     const child = newNode(min.mat, min.x, min.y, min.x + row[i], min.y + col[i], min.level + 1, min);
//                     child.cost = calculateCost(child.mat, final);

//                     // Add child to the array of live nodes
//                     pq.push(child);
//                 }
//             }
//         }
//     };

    
//     // Function to print path from root node to destination node
//     const printPath = (root) => {
//         if (!root) return;
//         printPath(root.parent);
//         console.log(root.mat);
//     };

//     return (
//         <div className="puzzle-solver">
//             <h2>8 Puzzle Solver</h2>
//             <div className="puzzle">
//                 <div className="puzzle-state">
//                     <h3>Initial State</h3>
//                     {puzzleState.initial.map((row, rowIndex) => (
//                         <div key={rowIndex} className="row">
//                             {row.map((cell, colIndex) => (
//                                 <div key={colIndex} className="cell">{cell}</div>
//                             ))}
//                         </div>
//                     ))}
//                 </div>
//                 <div className="puzzle-state">
//                     <h3>Final State</h3>
//                     {puzzleState.final.map((row, rowIndex) => (
//                         <div key={rowIndex} className="row">
//                             {row.map((cell, colIndex) => (
//                                 <div key={colIndex} className="cell">{cell}</div>
//                             ))}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <button onClick={solvePuzzle}>Solve Puzzle</button>
//         </div>
//     );
// };

// export default PuzzleSolver;



////////////////////////////////////////////////////



// import React, { useState } from 'react';

// const PuzzleSolver = () => {
//     const N = 3; // Size of the puzzle
//     const [puzzleState, setPuzzleState] = useState({
//         initial: [
//             [1, 2, 3],
//             [5, 6, 0],
//             [7, 8, 4]
//         ],
//         final: [
//             [1, 2, 3],
//             [5, 8, 6],
//             [0, 7, 4]
//         ],
//         current: [],
//         solved: false
//     });

//     // Function to move the empty cell in the puzzle
//     const moveEmptyCell = (mat, dir) => {
//         const emptyPos = findEmptyCell(mat);
//         const newX = emptyPos[0] + dir[0];
//         const newY = emptyPos[1] + dir[1];
//         if (isValidPosition(newX, newY)) {
//             const newMat = [...mat.map(row => [...row])];
//             [newMat[emptyPos[0]][emptyPos[1]], newMat[newX][newY]] = [newMat[newX][newY], newMat[emptyPos[0]][emptyPos[1]]];
//             return newMat;
//         }
//         return null;
//     };

//     // Function to find the position of the empty cell in the puzzle
//     const findEmptyCell = (mat) => {
//         for (let i = 0; i < N; i++) {
//             for (let j = 0; j < N; j++) {
//                 if (mat[i][j] === 0) {
//                     return [i, j];
//                 }
//             }
//         }
//         return null;
//     };

//     // Function to check if a position is valid in the puzzle
//     const isValidPosition = (x, y) => {
//         return x >= 0 && x < N && y >= 0 && y < N;
//     };

//     // Function to solve the puzzle
//     const solvePuzzle = () => {
//         const initial = puzzleState.initial;
//         const final = puzzleState.final;
//         const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

//         let current = [...initial.map(row => [...row])];
//         let steps = [current];

//         while (!isEqual(current, final)) {
//             let found = false;
//             for (let dir of directions) {
//                 const newMat = moveEmptyCell(current, dir);
//                 if (newMat && !steps.find(step => isEqual(step, newMat))) {
//                     steps.push(newMat);
//                     current = newMat;
//                     setPuzzleState(prevState => ({
//                         ...prevState,
//                         current: newMat
//                     }));
//                     found = true;
//                     break;
//                 }
//             }
//             if (!found) {
//                 // Puzzle cannot be solved
//                 break;
//             }
//         }

//         if (isEqual(current, final)) {
//             setPuzzleState(prevState => ({
//                 ...prevState,
//                 solved: true
//             }));
//         }
//     };

//     // Function to check if two matrices are equal
//     const isEqual = (mat1, mat2) => {
//         for (let i = 0; i < N; i++) {
//             for (let j = 0; j < N; j++) {
//                 if (mat1[i][j] !== mat2[i][j]) {
//                     return false;
//                 }
//             }
//         }
//         return true;
//     };

//     // Function to render the puzzle grid
//     const renderPuzzleGrid = (puzzle) => {
//         return puzzle.map((row, rowIndex) => (
//             <div key={rowIndex} className="row">
//                 {row.map((cell, colIndex) => (
//                     <div key={colIndex} className="cell">{cell}</div>
//                 ))}
//             </div>
//         ));
//     };

//     return (
//         <div className="puzzle-solver">
//             <h2>8 Puzzle Solver</h2>
//             <div className="puzzle">
//                 <div className="puzzle-state">
//                     <h3>Initial State</h3>
//                     {renderPuzzleGrid(puzzleState.initial)}
//                 </div>
//                 <div className="puzzle-state">
//                     <h3>Final State</h3>
//                     {renderPuzzleGrid(puzzleState.final)}
//                 </div>
//             </div>
//             <button onClick={solvePuzzle}>Solve Puzzle</button>
//             <div className="puzzle-state">
//                 <h3>Current State</h3>
//                 {renderPuzzleGrid(puzzleState.current)}
//             </div>
//             {puzzleState.solved && <div>Puzzle Solved!</div>}
//         </div>
//     );
// };

// export default PuzzleSolver;



///////////////////////////////////


import React, { useState, useEffect } from 'react';

const PuzzleSolver = () => {
    const N = 3; // Size of the puzzle
    const [puzzleState, setPuzzleState] = useState({
        initial: [
            [1, 2, 3],
            [5, 6, 0],
            [7, 8, 4]
        ],
        final: [
            [1, 2, 3],
            [5, 8, 6],
            [0, 7, 4]
        ],
        current: [],
        solved: false,
        stepIndex: 0
    });

    // Function to move the empty cell in the puzzle
    const moveEmptyCell = (mat, dir) => {
        const emptyPos = findEmptyCell(mat);
        const newX = emptyPos[0] + dir[0];
        const newY = emptyPos[1] + dir[1];
        if (isValidPosition(newX, newY)) {
            const newMat = [...mat.map(row => [...row])];
            [newMat[emptyPos[0]][emptyPos[1]], newMat[newX][newY]] = [newMat[newX][newY], newMat[emptyPos[0]][emptyPos[1]]];
            return newMat;
        }
        return null;
    };

    // Function to find the position of the empty cell in the puzzle
    const findEmptyCell = (mat) => {
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                if (mat[i][j] === 0) {
                    return [i, j];
                }
            }
        }
        return null;
    };

    // Function to check if a position is valid in the puzzle
    const isValidPosition = (x, y) => {
        return x >= 0 && x < N && y >= 0 && y < N;
    };

    // Function to solve the puzzle
    const solvePuzzle = () => {
        const initial = puzzleState.initial;
        const final = puzzleState.final;
        const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

        let current = [...initial.map(row => [...row])];
        let steps = [current];

        while (!isEqual(current, final)) {
            let found = false;
            for (let dir of directions) {
                const newMat = moveEmptyCell(current, dir);
                if (newMat && !steps.find(step => isEqual(step, newMat))) {
                    steps.push(newMat);
                    current = newMat;
                    found = true;
                    break;
                }
            }
            if (!found) {
                // Puzzle cannot be solved
                break;
            }
        }

        if (isEqual(current, final)) {
            setPuzzleState(prevState => ({
                ...prevState,
                current: current,
                solved: true
            }));
        }
    };

    // Function to check if two matrices are equal
    const isEqual = (mat1, mat2) => {
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                if (mat1[i][j] !== mat2[i][j]) {
                    return false;
                }
            }
        }
        return true;
    };

    // Function to render the puzzle grid
    const renderPuzzleGrid = (puzzle) => {
        return puzzle.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
                {row.map((cell, colIndex) => (
                    <div key={colIndex} className="cell">{cell}</div>
                ))}
            </div>
        ));
    };

    // Effect to update puzzle state after each click
    useEffect(() => {
        if (puzzleState.stepIndex < puzzleState.current.length - 1) {
            const timer = setTimeout(() => {
                setPuzzleState(prevState => ({
                    ...prevState,
                    stepIndex: prevState.stepIndex + 1
                }));
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [puzzleState.current, puzzleState.stepIndex]);

    return (
        <div className="puzzle-solver">
            <h2>8 Puzzle Solver</h2>
            <div className="puzzle">
                <div className="puzzle-state">
                    <h3>Initial State</h3>
                    {renderPuzzleGrid(puzzleState.initial)}
                </div>
                <div className="puzzle-state">
                    <h3>Final State</h3>
                    {renderPuzzleGrid(puzzleState.final)}
                </div>
            </div>
            <button onClick={solvePuzzle}>Solve Puzzle</button>
            <div className="puzzle-state">
                <h3>Current State</h3>
                {renderPuzzleGrid(puzzleState.current)}
            </div>
            {puzzleState.solved && <div>Puzzle Solved!</div>}
        </div>
    );
};

export default PuzzleSolver;
