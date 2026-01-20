# Basic Surrogate Models

This section provides implementation for concepts related to basic surrogate models. As discussed in the lecture, one of the ways to create a model of $y(x)$ is by considering a linearly weighted combination of basis functions. Mathematically, this can be represented as:

$$
    y(x) \sim \hat{y}(x) = \mathbf{w}^T\pmb{\psi} = \sum w_i \psi_i(x)
$$

where $\mathbf{\pmb{\psi}}$ is the vector of basis functions and $\mathbf{w}$ is the vector of weights. The model is linear in terms of weights $w_i$ but basis function $\psi_i(x)$ can be non-linear. For example, the basis functions vector $\pmb{\psi}$ can be $[1 \text{  } x \text{  } x^2 \text{  } \sin(x) \text{  } e^{x}]^T$. The weights $w_i$ are determined by minimizing the sum of squared differences between the predictions and actual values. The weights obtained after minimization are given by:

$$
    \mathbf{w} = (\Psi^T\Psi)^{-1}\Psi^T\mathbf{y} = \Psi^{\dagger}\mathbf{y}
$$

where $\mathbf{y}$ is the vector of target values and $\Psi^{\dagger}$ is the (Moore-Penrose) pseudo-inverse of $\Psi$ matrix. The pseudo-inverse will be regular inverse if $\Psi$ is invertible. The performance of the model can be evaluated using the normalized root mean squared error (NRMSE) which is given by:

$$
    \text{NRMSE} = \frac{\sqrt{ \frac{1}{N}\sum_{i=1}^{N} (y_i - \hat{y}_i)^2 }}{\text{range}(y)}
$$

where $N$ is the number of data points, $y_i$ and $\hat{y}_i$ are the true and predicted values respectively. $\text{range}$ is the function that calculates the range of values of a data set. In this case, the root mean squared error is normalized by the range of the true values of the testing data to calculate the normalized root mean squared error. 

In this section, following models are covered:

1. Polynomial models
2. Radial basis function models
3. Gaussian process regression models
4. Neural network models
