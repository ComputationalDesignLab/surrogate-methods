# Gaussian Process (GP) Models

This section provides an implementation of Gaussian process (GP) models. A GP can be defined as a stochastic process where any finite collection of random variables has a multivariate Gaussian distribution. Regression models using the concept of GPs can be used to model nonlinear functions effectively and also provide a measure of uncertainty in predictions on previously unseen data points. The process of constructing the GP model starts with setting a GP prior on the unknown nonlinear function, $f$

$$p(f|X) = N(f; \mu(X), K(X,X)),$$

where $X$ represents the training data points, $\mu(X)$ represents the mean function and $K(X,X)$ represents the covariance function. To obtain a prediction for an unseen data point, we first create the joint distribution between the training function values and the testing function values. This can be written as

$$p(f,f_*) = N(\begin{bmatrix} f \\ f_* \end{bmatrix}; \begin{bmatrix} \mu(X) \\ \mu(X_*) \end{bmatrix}, \begin{bmatrix} K(X,X) \quad K(X,X_*)\\ K(X_*,X) \quad K(X_*, X_*) \end{bmatrix}),$$

wher $f_*$ are the testing function values. The posterior distribution can then be obtained by condition this multivariate Gaussian distribution on the known values of the data

$$p(f_*|X_*, D) = N(f_*; \mu_{f|D}(X_*), K_{f|D}(X_*,X_*)),$$

where

$\mu_{f|D}(x) = \mu(x) + K(x,X)K(X,X)^{-1}(f-\mu(X)),$

and

$K_{f|D}(x, x') = K(x, x') - K(x, X)K(X,X)^{-1}K(X,x'),$

$D$ represents the training data set of the model. If the data contains observation noise, then the only change required in the above posterior distribution is to change the mean and covariance function to

$\mu_{f|D}(x) = \mu(x) + K(x,X)(K(X,X)+\sigma_n^2 I)^{-1}(f-\mu(X)),$

and

$K_{f|D}(x, x') = K(x, x')+\sigma_n^2 I - K(x, X)(K(X,X)+\sigma_n^2 I)^{-1}K(X,x'),$

where $\sigma_n^2$ represents the observation noise present in the data. 

> __*NOTE*__: A few notes for this section. Make sure to go through these before proceeding to run the code for this section.
* This section requires the `gpytorch` and `botorch` packages. To install both of them, it is sufficient to run `pip install botorch` as `gpytorch` will be installed as a dependency while installing `botorch`.
* Remember to make sure that you have downloaded and installed the latest release of the `scimlstudio` package before running the code in this section.
* You may see a TqdmWarning when importing the packages. This can be safely ignored.