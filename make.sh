# Make it
jupyter-book build books --all

# Publish it
ghp-import -n -p -f books/_build/html
