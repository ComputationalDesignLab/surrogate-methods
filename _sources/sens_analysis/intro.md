# Sensitivity Analysis

This section provides implementation of concepts related to sensitivity analysis. There are mainly two types of sensitivities that are of interest - local and global sensitivities. Local sensitivities are used to perform a post-optimality analysis for the constrained optimization of the modified Branin function. Local sensitivities are calculated using a normalized version of the partial derivative of the objective function at the optimum point of the problem. The sensitivity of the optimal solution to the limiting value of the constraint is also calculated by changing the limit value and finding the solution of the optimization problem again. Global sensitivities are calculated using the Sobol' method which aims to decompose the variance in the objective function into fractions which can be attributed to the design variables or a set of design variables. The above topics are covered in the following subsections:

1. Local Sensitivity Analysis  
2. Global Sensitivity Analysis
