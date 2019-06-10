---
title: contributing to pandas
subTitle: A comprehensive guide
category: "tech"
cover: cover.jpg
---
<p align='center'><img src="pandas.png" alt="pandas"><br>
<font size=2>pandas: powerful Python data analysis toolkit</font></p>

> <p align="center"><b>for PyDelhi DevSprint 02/02/19 </b></p>





## pre-DevSprint reading material:-

- [Overview of pandas](https://github.com/pandas-dev/pandas/)
- [Contributing Guidelines](http://pandas.pydata.org/pandas-docs/stable/development/contributing.html)

- [Git Workflow Guidelines](https://github.com/pandas-dev/pandas/wiki/Git-Workflows)
    1. rebase
    2. merge
    3. code handling

- [Docstrings Guide](https://numpydoc.readthedocs.io/en/latest/format.html#sections)
    1. formatting
    2. order of sections
    3. syntax

- [PEP-8 Guidelines](https://www.python.org/dev/peps/pep-0008/)
    
# Homework
### 0. Remove existing `pandas` installation
    ```
    pip uninstall pandas
    ```
### 1. Fork [me](https://github.com/pandas-dev/pandas)!
### 2. Clone the fork to your PC.
### 3. Install `pandas` from source.

- `cd` into the clone and install the build dependencies.
    ```
    python -m pip install -r requirements-dev.txt
    ```

- Build and install pandas. (takes ~20 minutes on an i5 6200U with 8GB RAM)
    ```
    python setup.py build_ext --inplace -j 4 
    python -m pip install -e .
    ```

## Background

Work on `pandas` started at AQR (a quantitative hedge fund) in 2008 and has been under active development since then.

### [Chat with more pandas at Gitter.im!](https://gitter.im/pydata/pandas)

## Some Tips

- [Documentation for reference purposes.](http://pandas.pydata.org/pandas-docs/stable/)

- rebase using `git rebase upstream/master` to pull in the latest from the upstream `remote` (which you have set to http://github.com/pydata/pandas.git)


## Bad Trips

I accidentally rebased on `origin/master`. That was **~350 commits behind `upstream/master`** !

### Steps taken:-
>
>  - reverted `HEAD` to just before rebase
>   - merged `upstream/master` into `origin/is_scalar`
>   - updated `origin/master` to get NO diffs in `upstream/master` and `origin/master`
>    - ran git rebase origin/master and fixed a conflict in `doc/source/whatsnew/v0.24.0.rst`
>    - pushed to `origin/is_scalar`.





<p align='center'> <font size=3> Stay safe and make the internet a healthier place! </font></p>
