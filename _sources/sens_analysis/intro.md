# Sensitivity Analysis

This section provides implementation of the concepts of sensitivity analysis that are covered in class. There are mainly two types of sensitivities that are of interest - local and global sensitivities. Local sensitivities are used to perform a post-optimality analysis for the constrained optimization of the modified Branin function. Local sensitivities are calculated using a normalized version of the partial derivative of the objective function at the optimum point of the problem. The sensitivity of the optimal solution to the limiting value of the constraint is also calculated by changing the limit value and resolving the optimization problem. Global sensitivities are calculated using the Sobol' method which aims to calculate the variance in the objective function that is explained by each of the design variables. Refer to the lecture notes for more details. The above topics are covered in the following subsections:

1. Local Sensitivity Analysis  
2. Global Sensitivity Analysis
