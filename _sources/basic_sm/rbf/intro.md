# Radial Basis Function Model

This section supports material covered in the class for radial basis function (RBF) model. In these models, a specific type of basis functions is used which computes similarity between inputs and a set of reference points in the design space. Let $\mathbf{x}$ be the input vector, $\mathbf{c}_i$ be the $i^{th}$ reference point vector, and $r_i$ be the euclidean distance between $\mathbf{x}$ and $\mathbf{c}_i$ i.e. $|| \mathbf{x} - \mathbf{c}_i ||_2$. Then, the basis function vector will be:

$$
    \pmb{\psi} = [ \psi_1(r_1) \quad  \cdots \quad \psi_i(r_i) \quad \cdots \quad \psi_n(r_n)]^T
$$

The reference points are typically training points which implies that number of functions in basis vector will be equal to the number of training points. There are many possible options for $\psi_i(r_i)$ such as:

- Linear: $\psi_i(r_i) = r_i$
- Cubic: $\psi_i(r_i) = r_i^3$
- Thin-plate spline: $\psi_i(r_i) = r_i^2 \log(r_i)$
- Gaussian: $\psi_i(r_i) = \exp (- r_i^2/\sigma^2 )$
- Multiquadric: $\psi_i(r_i) = \sqrt{r_i^2 + \sigma^2}$

where $\sigma$ is a scaling factor. In this section, only gaussian basis function is used.

> __*NOTE*__: The radial basis function model is an interpolating model i.e. the model passes through all the data points. This is very useful when there is no noise in the data but will over-fit easily when there is noise in the data.

`smt` is used for creating RBF models, please refer [documentation](https://smt.readthedocs.io/en/latest/_src_docs/surrogate_models/rbf.html) for more details. 

