/**
 * Quadratic Equation
 * @param {number} x - The variable value.
 * @param {number} a - Coefficient of x^2.
 * @param {number} b - Coefficient of x.
 * @param {number} c - Constant term.
 * @returns {number} - Result of the quadratic equation.
 */
function quadratic(x, a, b, c){
    return (a*(x**2)) + (b*x) + c;
}

/**
 * Derivative of Quadratic Equation
 * @param {number} x - The variable value.
 * @param {number} a - Coefficient of x^2.
 * @param {number} b - Coefficient of x.
 * @returns {number} - Result of the derivative of the quadratic equation.
 */
// Dertivate of Quadratic Equation
function quadraticDerivative(x, a, b){
    return 2*a*x + b;
}

/**
 * Gradient Descent.
 * @param {number} initialGuess - Initial guess for the minimum.
 * @param {number} a - Coefficient of x^2.
 * @param {number} b - Coefficient of x.
 * @param {number} c - Constant term.
 * @param {number} num_iterations - Number of iterations for gradient descent.
 * @param {number} learning_rate - Learning rate for gradient descent.
 * @returns {number} - The x value at the minimum of the quadratic function.
 */
function Gradient_Descent(initialGuess, a, b, c, num_iterations, learning_rate){
    // Assign initial guess as current X
    let currentX = initialGuess;

    // Perform Gradient Descent for num_iterations times.
    for(let i = 0; i < num_iterations; i++){
        // Calculate the current gradient
        const gradient = quadraticDerivative(currentX, a, b);

        // Update the current X and move toward the minimum
        currentX = currentX - (learning_rate * gradient);

        // Log the current X and f(X)
        console.log(`Iteration ${i + 1}: x = ${currentX}, f(x) = ${quadratic(currentX, a, b, c)}`);
    }

    return currentX;
}

// Initial values.
const learningRate = 0.01;
const iterations = 54;
const initialGuess = 2;
const a = 1;
const b = 2;
const c = 3;

// Minimum of the quadratic function after perform gradient descent iterations times.
const minimumX = Gradient_Descent(initialGuess, a, b, c, iterations, learningRate);

// Log the obtain minimum of the quadratic function.
console.log(`Minimum of the quadratic function occurs at x = ${minimumX}`);
