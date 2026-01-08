# Computing environment setup

The goal of this section is to create a computing environment on your computer so that you can run the python scripts and code snippets required for this course. Follow below steps to set up miniconda, create an environment, and install packages in the new environment. If you already have miniconda/anaconda or know any other method which suits your needs in a better manner, then you are free to use that. **The end goal is to have a working computing environment that can be used for this course**.

> **_NOTE:_** This guide assumes that you are using Windows OS. If you are using another OS, then the steps will be very similar but there might be more usage of terminal commands.

## Step 1: Downloading and installing miniconda

In this course, we will using conda as an environment manager. Conda is a package and environment management system that allows you to create isolated environments for different projects and manage packages within those environments. There are primarily two ways to get conda - anaconda and miniconda. Anaconda is a distribution of python and conda which comes with a lot of pre-installed packages. Miniconda, on the other hand, is a minimal installation of Anaconda containing only conda, python and a few other useful packages such as pip. If you want to know more, there is also a comparison between Anaconda and miniconda given [here](https://docs.anaconda.com/distro-or-miniconda/). In this course, we will use miniconda to set up our computing environment. However, if you want to use anaconda, you can follow similar instructions as given below.

You can skip these steps if you already have miniconda (or anaconda) installed.

1. Download miniconda from https://www.anaconda.com/download/success. Make sure to select the correct operating system (if not auto-selected).

2. Open the installer and follow the GUI instructions to install miniconda.

3. Select “installation type” as "Just Me". If you select "All User", then you will need administrator privileges to make changes to the conda environment. It is recommended to select "Just Me" option.

4. When asked for it, check the boxes for "Register Miniconda3 as my default Python" and "Clear package cache upon installation".

Once installed, there are two ways to use conda – ``Anaconda Prompt`` (a command line tool) or ``Anaconda Navigator`` (GUI platform). Use whatever you are most comfortable with. To open Anaconda Prompt or Navigator, simply search for it in the start menu. In this guide, Anaconda Prompt will be used to demonstrate the creation of a computing environment. You can setup a computing environment using the Navigator as well. Some useful tutorials for using the Navigator can be found [here](https://docs.anaconda.com/navigator/tutorials/). It is highly recommend going through these tutorials if you choose to use Navigator to setup the environment.

## Step 2: Creating a new environment

The process to setup an environment and install packages is the same for both anaconda and miniconda. So, it does not matter which one you installed in previous step. In this step, we will create a new environment using conda for this course.

1. Open the Anaconda Prompt by searching for it in the start menu. You will see a black screen with a command prompt. You will also see ``(base)`` written before the command prompt. When you installed miniconda, it created a base environment in which it installed some packages. By default, the base environment is activated when the prompt is launched.

    ```{figure} images/entry.png
    ---
    width: 100%
    align: center
    alt: entry screen
    ---
    ```

2. Type ``conda list`` and press enter to run this command. You will see the list of packages installed in the base environment.

    ```{figure} images/conda_list.png
    ---
    width: 100%
    align: center
    alt: conda list
    ---
    ```

    It is recommended to create a new environment for each project to avoid package dependency issues. To check the existing environments, you can run ``conda env list``.

    ```{figure} images/conda_env_list.png
    ---
    width: 60%
    align: center
    alt: conda env list
    ---
    ```

    It will show the list of environments and the active environment will have a “*” mark in front of it. If you just installed miniconda or never created an environment, then there will only be one environment called ``base``.

3. To create a new env, run the command: ``conda create -n ENVNAME python=3.12``. Replace ENVNAME with whatever name you want to give to the new environment. The ``python=3.12`` after the environment name tells conda what version of python to install. We will be using python version 3.12 in this book. If the prompt asks you to accept the terms of service from different channels, then accept it by typing ``a`` and pressing enter.

    ```{figure} images/conda_create.png
    ---
    width: 100%
    align: center
    alt: conda list
    ---
    ```

    Once the environment is successfully created, you will see the following in the command prompt on your screen.

    ```{figure} images/conda_create_success.png
    ---
    width: 55%
    align: center
    alt: conda list
    ---
    ```

    You can run conda env list again and see that your newly created environment is there. For the example shown below, the name of the environment was set to surrogate_methods.

    ```{figure} images/conda_create_env_list.png
    ---
    width: 95%
    align: center
    alt: conda list
    ---
    ```

4. To activate the newly created environment, run ``conda activate ENVNAME``. Replace ENVNAME with your environment name. You will see that the ``(base)`` before the command prompt will change to the ``ENVNAME``.

    ```{figure} images/conda_activate.png
    ---
    width: 70%
    align: center
    alt: conda list
    ---
    ```

    If you run ``conda list`` now, then it will show the list of installed packages in the newly created environment. Note that the number of packages will be very less when compared to the ``base`` environment. You will have to install the packages as and when needed.

## Step 3: Installing packages

In this step, you will install some of the packages which you will need during this course. You may install many other packages as you go through the book.

1. Open Anaconda Prompt. Activate the environment which you created in the last step.

    > **_NOTE:_** ``pip`` will be the main installer we will be using in this book. We will not be using
    conda to install any package. conda is just used as an environment manager.

    After activating the environment, you can run ``pip list`` to see the packages installed using
    pip within the activated environment.

    ```{figure} images/pip_list.png
    ---
    width: 55%
    align: center
    alt: conda list
    ---
    ```

    > **_NOTE:_** It is okay if your list is not exactly same as above.

2. Install Matplotlib by running: ``pip install matplotlib``.

3. Install Jupyter Notebook by running: ``pip install notebook``.

    > **_NOTE:_** This will install a lot of dependencies that are required for Jupyter Notebook. 
    
    Jupyter Notebook is a computing platform that can be used to write and execute various code
    snippets described in this book.

Your computing environment should be ready now. In the following sections, whenever you are asked to install
a new package, you should install it using pip within this environment only.
