# Basic Surrogate Models

This section provides implementation for the concepts covered in the class for basic surrogate models. As discussed in the lecture, one of the ways to create a model of $y(x)$ is by considering a linearly weighted combination of basis functions. Mathematically, this can be represented as:

$$
    y(x) \sim \hat{y}(x) = \mathbf{w}^T\pmb{\psi} = \sum w_i \psi_i(x)
$$

where $\mathbf{\pmb{\psi}}$ is the vector of basis functions and $\mathbf{w}$ is the vector of weights. The model is linear in terms of weights $w_i$ but basis function $\psi_i(x)$ can be non-linear. For example, the basis functions vector $\pmb{\psi}$ can be $[1 \text{  } x \text{  } x^2 \text{  } \sin(x) \text{  } e^{x}]^T$. The weights $w_i$ are determined by minimizing the sum of squared differences between the predictions and actual values. The weights obtained after minimization are given by (refer lecture notes for derivation):

$$
    \mathbf{w} = (\Psi^T\Psi)^{-1}\Psi^T\mathbf{y} = \Psi^{\dagger}\mathbf{y}
$$

where $\mathbf{y}$ is the vector of target values and $\Psi^{\dagger}$ is the (Moore-Penrose) pseudo-inverse of $\Psi$ matrix. The pseudo-inverse will be regular inverse if $\Psi$ is invertible. The performance of the model can be evaluated using the mean squared error (MSE) which is given by:

$$
    \text{RMSE} = \sqrt{ \frac{1}{N}\sum_{i=1}^{N} (y_i - \hat{y}_i)^2 }
$$

where $N$ is the number of data points, $y_i$ and $\hat{y}_i$ are the true and predicted values respectively.

In this section, following models are covered:

1. Linear model
2. Polynomial model
3. Radial basis function model
