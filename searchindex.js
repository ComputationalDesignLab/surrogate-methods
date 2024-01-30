Search.setIndex({"docnames": ["global_opt/de", "global_opt/intro", "global_opt/multi", "global_opt/pso", "index", "local_opt/const", "local_opt/intro", "local_opt/unconst", "prob_form", "resources", "review_nm/error", "review_nm/intro", "review_nm/norm", "review_nm/num_diff", "review_nm/uniform", "setup"], "filenames": ["global_opt/de.ipynb", "global_opt/intro.ipynb", "global_opt/multi.ipynb", "global_opt/pso.ipynb", "index.md", "local_opt/const.ipynb", "local_opt/intro.md", "local_opt/unconst.ipynb", "prob_form.ipynb", "resources.md", "review_nm/error.ipynb", "review_nm/intro.md", "review_nm/norm.ipynb", "review_nm/num_diff.ipynb", "review_nm/uniform.ipynb", "setup.md"], "titles": ["Differential Evolution", "Global Optimization", "Multistart Gradient-based Optimization", "Particle Swarm Optimization", "Introduction", "Constrained Optimization", "Local Optimization", "Unconstrained Optimization", "Problem Formulation", "Python and Jupyter notebook resources", "Error estimation for iterative method", "Review of Numerical Methods and Probability", "Normal Distribution", "Numerical Differentiation", "Uniform Distribution", "Computing environment setup"], "terms": {"follow": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "collect": [], "jupyt": [1, 4, 6, 11, 15], "notebook": [1, 4, 6, 10, 11, 15], "which": [0, 1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15], "provid": [0, 1, 2, 3, 4, 5, 6, 7, 11], "python": [1, 4, 6, 7, 8, 10, 11, 13, 15], "implement": [1, 4, 5, 6, 10, 11, 12, 14], "concept": [1, 4, 6, 11], "algorithm": [0, 1, 3, 4], "introduc": 4, "aae": 4, "590": 4, "surrog": 4, "method": [0, 1, 2, 3, 4, 7, 13, 15], "taught": 4, "prof": 4, "leifur": 4, "leifsson": 4, "purdu": 4, "univers": 4, "It": [0, 1, 2, 3, 4, 5, 7, 15], "import": [0, 1, 2, 3, 4, 5, 7, 8, 10, 12, 13, 14], "note": [0, 1, 2, 3, 4, 5, 7, 9, 10, 14, 15], "thi": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "book": 4, "replac": [4, 15], "lectur": [0, 3, 4], "intend": 4, "us": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 13, 14, 15], "refer": [0, 3, 4, 9], "materi": [4, 7], "start": [1, 2, 4, 5, 7, 9, 10, 13, 14, 15], "point": [1, 2, 4, 5, 7, 8, 14], "student": 4, "engin": 4, "model": 4, "design": [1, 3, 4, 5, 8], "optim": [0, 4, 8], "In": [0, 3, 4, 13, 15], "particular": 4, "fundament": 4, "build": [4, 12], "select": [2, 3, 4, 15], "valid": 4, "search": [3, 4, 5, 15], "refin": 4, "theori": 4, "behind": [1, 4], "well": [4, 15], "how": [0, 1, 3, 4, 5, 6, 7, 11, 12, 14], "appli": 4, "them": [0, 1, 2, 4, 12, 14], "simpl": [1, 2, 4], "practic": 4, "problem": [0, 2, 3, 4, 5, 7], "done": [4, 15], "program": [4, 5, 9], "work": [4, 15], "includ": [4, 10], "workbook": [1, 4, 6, 11], "assign": [1, 4, 6, 9, 11], "homework": [1, 4, 6, 9, 11], "test": [1, 4], "The": [0, 2, 3, 4, 5, 7, 10, 12, 14, 15], "graduat": 4, "senior": 4, "undergradu": 4, "On": 4, "complet": 4, "have": [1, 4, 8, 9, 12, 14, 15], "gain": 4, "basic": [4, 11, 15], "knowledg": 4, "an": [0, 1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 14, 15], "understand": [1, 2, 3, 4, 5, 7], "comput": [4, 5, 7, 10, 12, 13, 14], "challeng": 4, "Be": 4, "abl": [0, 2, 3, 4], "solv": [4, 5, 7], "linear": 4, "algebra": 4, "numer": 4, "multivari": 4, "calculu": 4, "probabl": [4, 12, 14], "statist": 4, "class": [0, 1, 3, 6, 7, 8, 11, 13, 14, 15], "involv": [2, 9], "lot": 15, "code": [0, 1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14], "section": [0, 1, 2, 3, 5, 6, 7, 8, 9, 11, 15], "describ": [2, 5, 7, 11], "step": [5, 7, 13, 14], "your": [9, 15], "goal": [5, 15], "below": [0, 1, 2, 3, 5, 7, 10, 12, 14, 15], "anaconda": [3, 14], "creat": [0, 1, 2, 3, 5, 6, 7, 8, 11, 12, 14], "instal": [3, 9, 14], "some": [1, 2, 12, 14, 15], "initi": [0, 3, 7, 10, 13, 14, 15], "packag": [0, 1, 2, 3, 5, 7, 8, 10, 12, 13, 14], "new": [0, 1, 2, 3], "If": [0, 1, 2, 3, 9, 15], "you": [0, 1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15], "alreadi": [9, 15], "know": [10, 15], "ani": [1, 2, 3, 7, 8, 14, 15], "other": [2, 3, 5, 7, 15], "suit": 15, "need": [0, 1, 3, 5, 7, 10, 12, 14, 15], "better": [1, 2, 5, 7, 15], "manner": 15, "ar": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15], "free": 15, "end": [5, 8, 14, 15], "guid": 15, "assum": [9, 10, 15], "window": 15, "os": 15, "anoth": [7, 15], "veri": [1, 5, 12, 15], "similar": [12, 15], "might": [2, 12, 15], "more": [0, 3, 5, 7, 13, 14, 15], "usag": [1, 2, 5, 7, 15], "termin": [0, 1, 3, 5, 7, 15], "command": 15, "1": [0, 1, 2, 3, 5, 7, 10, 12, 13, 14], "download": [], "can": [0, 1, 2, 3, 5, 7, 9, 10, 12, 13, 14, 15], "skip": [5, 9, 15], "miniconda": 15, "from": [0, 1, 2, 3, 5, 6, 7, 8, 11, 12, 14, 15], "http": [9, 15], "www": [9, 15], "com": [9, 15], "2": [0, 1, 2, 3, 5, 7, 10, 12, 13], "open": 15, "instruct": 15, "3": [0, 1, 2, 3, 5, 7, 8, 10, 12, 13], "For": [5, 7, 8, 15], "type": 15, "all": [0, 1, 2, 3, 5, 7, 9, 10, 12, 13, 14, 15], "user": [2, 3, 15], "pc": 15, "4": [0, 1, 2, 3, 5, 8, 10, 12, 13], "advanc": 15, "option": [0, 1, 2, 3, 5, 7, 15], "chang": [0, 1, 3, 5, 7, 12, 14, 15], "anyth": 15, "stick": 15, "default": [0, 3, 14, 15], "onc": [10, 14, 15], "two": [1, 2, 3, 7, 8, 10, 15], "wai": [5, 13, 15], "prompt": [3, 14, 15], "line": [0, 1, 2, 3, 5, 8, 15], "tool": 15, "navig": 15, "gui": 15, "platform": 15, "whatev": 15, "most": 15, "comfort": 15, "To": [5, 10, 14, 15], "simpli": 15, "menu": 15, "demonstr": [0, 2, 3, 15], "creation": 15, "tutori": 15, "found": [0, 2, 3, 15], "doc": [], "we": [1, 5, 7, 10, 12, 13, 14, 15], "highli": [0, 15], "recommend": [3, 5, 7, 15], "go": [5, 7, 15], "through": [5, 7, 15], "choos": 15, "altern": 15, "minim": [0, 1, 2, 3, 5, 7, 15], "contain": [0, 1, 2, 3, 5, 6, 7, 11, 13, 15], "onli": [1, 2, 5, 7, 13, 15], "conda": 15, "few": [5, 7, 8, 13, 15], "pip": [3, 14, 15], "cover": [1, 3, 5, 6, 7, 8, 11, 15], "here": [2, 5, 14, 15], "want": 15, "also": [0, 1, 2, 3, 5, 7, 15], "comparison": 15, "between": [7, 14, 15], "given": [1, 2, 5, 7, 8, 13, 15], "gener": [0, 3, 5, 12, 14, 15], "come": 15, "procedur": 15, "like": [5, 7, 14, 15], "one": [1, 7, 8, 15], "outlin": [3, 15], "set": [0, 3, 5, 7, 14, 15], "up": 15, "io": [], "project": [5, 15], "en": [], "latest": [], "stabl": [], "html": [], "make": [5, 7, 15], "sure": 15, "run": [1, 5, 6, 10, 11, 15], "administr": 15, "when": [3, 5, 7, 15], "see": [0, 3, 5, 7, 12, 14, 15], "black": [5, 8, 15], "screen": 15, "base": [0, 1, 3, 5, 7, 13, 15], "written": 15, "befor": [1, 7, 10, 14, 15], "sever": 15, "By": [5, 8, 14, 15], "activ": [3, 5, 8, 14, 15], "launch": 15, "exampl": [5, 7, 10, 12, 13, 14, 15], "causal": [], "graph": 8, "list": [1, 2, 3, 5, 7, 15], "press": 15, "enter": 15, "each": [0, 1, 2, 3, 5, 6, 7, 8, 11, 15], "avoid": 15, "depend": [0, 1, 2, 15], "issu": 15, "check": [2, 13, 15], "exist": 15, "env": 15, "show": [8, 12, 14, 15], "mark": 15, "front": 15, "just": [12, 15], "never": 15, "call": [1, 2, 3, 5, 7, 15], "n": [2, 5, 10, 12, 13, 15], "envnam": 15, "9": [1, 2, 5, 8, 10, 12, 15], "name": 15, "give": [7, 8, 15], "after": [1, 2, 5, 7, 13, 15], "tell": [3, 15], "what": [0, 3, 15], "version": [5, 15], "successfulli": [1, 5, 7, 15], "again": 15, "newli": 15, "shown": [10, 14, 15], "wa": [0, 3, 15], "surrogate_method": 15, "chosen": 15, "now": [1, 5, 12, 13, 14, 15], "number": [0, 1, 2, 3, 5, 7, 10, 12, 14, 15], "less": [2, 5, 7, 10, 15], "compar": [3, 7, 15], "dure": [3, 5, 15], "part": [3, 15], "mani": [1, 5, 13, 15], "term": [5, 10], "progress": [0, 3, 15], "last": [0, 3, 7, 12, 15], "main": 15, "manag": 15, "within": [3, 12, 14, 15], "okai": 15, "exactli": [5, 15], "same": [5, 7, 15], "abov": [1, 2, 5, 7, 8, 13, 15], "numpi": [0, 1, 2, 3, 5, 7, 8, 12, 13, 14, 15], "pre": 15, "specif": [0, 5, 13, 15], "must": 15, "mention": [14, 15], "while": [5, 7, 10, 12, 14, 15], "23": 15, "5": [0, 1, 2, 3, 5, 7, 8, 10, 12, 13, 14, 15], "alwai": 15, "explicitli": 15, "scipi": [1, 2, 5, 7, 12, 14, 15], "matplotlib": [0, 1, 2, 3, 5, 7, 8, 12, 13, 14, 15], "requir": [0, 1, 2, 3, 5, 7, 8, 10, 12, 13, 14, 15], "extens": 15, "should": [1, 2, 5, 7, 10, 13, 15], "readi": 15, "futur": 15, "whenev": 15, "ask": 15, "semest": 15, "There": [5, 8, 13, 15], "width": 3, "50": [0, 1, 2, 3], "10": [0, 1, 2, 3, 5, 7, 8, 10, 12, 14], "support": [7, 8, 12], "topic": [1, 6, 8, 11], "pleas": 9, "entir": 3, "reach": 5, "out": [0, 3], "teach": [1, 6, 11], "team": [], "doubt": [], "block": [0, 1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14], "math": 10, "pyplot": [0, 1, 2, 3, 5, 7, 8, 12, 13, 14], "plt": [0, 1, 2, 3, 5, 7, 8, 12, 13, 14], "np": [0, 1, 2, 3, 5, 7, 8, 12, 13, 14], "determin": [8, 10], "necessari": [8, 10], "approxim": [7, 10, 13], "co": 10, "x": [0, 1, 2, 3, 5, 7, 8, 10, 12, 13, 14], "8": [0, 1, 2, 3, 5, 8, 10, 12, 14], "signific": 10, "figur": [0, 1, 2, 3, 10], "0": [0, 1, 2, 3, 5, 7, 8, 10, 12, 13, 14], "pi": [10, 12], "maclaurin": 10, "seri": 10, "frac": [5, 7, 10, 12, 14], "6": [0, 1, 2, 3, 5, 7, 8, 10, 12, 14], "don": 10, "t": 10, "true": [0, 1, 3, 5, 7, 10, 12, 13], "valu": [0, 1, 2, 3, 5, 7, 8, 10, 12, 13, 14], "solut": [0, 3, 5, 7, 8, 10, 13], "find": [2, 3, 7, 10], "whether": 10, "accur": [10, 13], "upto": [2, 10], "formula": 10, "epsilon_": 10, "time": [0, 3, 10, 12], "percantag": 10, "sign": 10, "get": [0, 3, 10], "than": [2, 7, 10, 13], "5e": 10, "7": [1, 2, 5, 7, 8, 10, 12], "text": [5, 8, 10, 12, 14], "epsilon": 10, "_a": 10, "do": [1, 10, 12, 13, 14], "stop": [3, 10], "criteria": [0, 3, 10], "next": 10, "def": [0, 1, 2, 3, 5, 7, 8, 10, 13], "maclaurin_co": 10, "num": 10, "function": [0, 2, 3, 5, 7, 8, 10, 13, 14], "cosin": 10, "input": [0, 1, 2, 3, 5, 7, 10, 13], "lead": [1, 10], "i": [10, 12, 13, 14], "rang": [2, 7, 10, 12, 13, 14], "power": 10, "factori": 10, "return": [0, 1, 2, 3, 5, 7, 8, 10, 13], "find_req_num_term": 10, "func": [10, 13], "achiev": 10, "accuraci": 10, "certain": 10, "toler": 10, "perform": [0, 1, 2, 3, 10, 12], "1st": 10, "approx_valu": [10, 13], "print": [0, 1, 2, 3, 5, 7, 10, 12, 13, 14], "approx": [10, 13], "format": [1, 2, 5, 7, 10, 12, 13, 14], "errror": 10, "approx_error": 10, "ab": [10, 13], "increment": 10, "calcul": [5, 7, 8, 10, 13, 14], "percentag": 10, "100": [0, 1, 2, 3, 5, 7, 8, 10, 14], "defin": [0, 1, 2, 3, 5, 7, 8, 10, 13, 14], "answer": [5, 7, 8, 10, 12, 14], "5558678019509788": 10, "79": 10, "89888899666624": 10, "5887433701749547": 10, "5840235133699": 10, "5877699636164597": 10, "1656101227945979": 10, "5877854036591176": 10, "002626816277120294": 10, "5877852512720046": 10, "592564420399015e": 10, "05": [5, 8, 10], "5877852522974596": 10, "7446081526780443e": 10, "07": [5, 8, 10], "forward": [5, 7, 12, 13], "backward": [5, 7, 13], "central": [5, 7, 13], "differ": [1, 2, 3, 5, 7, 13], "first": [1, 2, 7, 10, 13], "deriv": 13, "f": [0, 1, 2, 3, 5, 7, 8, 12, 13, 14], "1x": 13, "15x": 13, "5x": [8, 13], "25x": 13, "25": [12, 13], "size": [0, 12, 13, 14], "h": 13, "variou": [1, 2, 4, 5, 6, 7, 11, 12, 13, 14], "forward_diff": 13, "desir": 13, "slope": 13, "backward_diff": 13, "central_diff": 13, "true_funct": 13, "15": [0, 1, 2, 3, 5, 8, 12, 13], "true_deriv": 13, "45": 13, "previou": [1, 2, 3, 5, 7, 12, 13, 14], "vairabl": 13, "true_valu": 13, "nameerror": [], "traceback": [], "recent": [], "cell": [], "variat": [0, 3, 13], "error_estim": 13, "step_siz": 13, "1d": [1, 2, 5, 7, 13], "arrai": [0, 1, 2, 3, 5, 7, 12, 13, 14], "zero": [0, 3, 5, 13], "len": [0, 1, 2, 3, 5, 7, 13], "index": [2, 13], "enumer": 13, "initial_step": 13, "num_step": 13, "60": [1, 7, 13], "error_forward_diff": 13, "error_backward_diff": 13, "error_central_diff": 13, "plot": [0, 1, 2, 3, 5, 7, 8, 12, 13, 14], "fig": [0, 1, 2, 3, 5, 7, 8, 12, 13, 14], "ax": [0, 1, 2, 3, 5, 7, 8, 12, 13, 14], "subplot": [0, 1, 2, 3, 5, 7, 8, 12, 13, 14], "label": [0, 1, 2, 3, 5, 7, 13], "marker": [0, 1, 2, 3, 5, 7, 13], "set_xscal": 13, "log": [1, 7, 13], "invert_xaxi": 13, "set_yscal": 13, "set_xlabel": [0, 1, 2, 3, 5, 7, 8, 12, 13, 14], "set_ylabel": [0, 1, 2, 3, 5, 7, 8, 12, 13, 14], "absolut": 13, "legend": [0, 1, 3, 5, 7, 8, 13], "loc": [1, 5, 12, 13, 14], "lower": 13, "right": [0, 1, 3, 5, 7, 13], "grid": [0, 1, 2, 3, 5, 7, 8, 12, 13, 14], "As": [0, 1, 2, 3, 13], "seen": [1, 2, 13], "increas": [5, 7, 8, 12, 13, 14], "A": [1, 2, 3, 5, 7, 8, 12, 13, 14], "robust": 13, "obtain": [2, 13], "complex": [5, 7, 13], "data": [12, 14], "y": [0, 1, 2, 3, 5, 7, 8], "13": [0, 1, 2, 3, 5], "mean": [0, 3, 12, 14], "varianc": [12, 14], "standard": [8, 12, 14], "deviat": [12, 14], "coeffici": [], "var": [12, 14], "std_dev": [], "std": [12, 14], "coef_var": [], "fit": [0, 3], "straight": 12, "second": [5, 10], "order": [1, 14], "polynomi": [], "discuss": [], "fit_lin": [], "output": [5, 7], "intercept": [], "a0": [], "a1": [], "s_": [], "r_squar": [], "r": [0, 3, 5], "num_pt": 2, "sum": [], "denomin": [], "sum_error": [], "std_error": [], "sqrt": 12, "fit_polynomi": [], "quantiti": [1, 2, 5, 7, 14], "mean_x": [], "mean_i": [], "sum_x": [], "sum_x_squar": [], "sum_x_cub": [], "sum_x_quart": [], "matrix": 7, "b": [0, 1, 3, 5, 7, 8, 14], "system": 9, "equat": [], "linalg": [], "result": [0, 1, 2, 3, 5, 7], "scatter": [0, 1, 2, 3, 5, 7], "c": [1, 2, 5, 7, 8, 14], "k": [0, 1, 2, 3, 5, 7, 8], "linspac": [0, 1, 2, 3, 5, 7, 8, 12, 14], "a2": [], "inlin": [0, 1, 2, 3, 8, 13], "error": [11, 13], "estim": [11, 13], "iter": [0, 1, 2, 3, 5, 7, 11, 12, 14], "differenti": [1, 11], "least": [], "squar": 2, "regres": [], "9125": 13, "589041095890411": 13, "55": 13, "39726027397260266": 13, "09589041095890413": 13, "277777777777778": [], "50617283950617": [], "9377878103709665": [], "74": [], "61071640702883": [], "0138888888888884": [], "4583333333333333": [], "3066526967183247": [], "9143610668789809": [], "4880952380952055": [], "45183982683981044": [], "19101731601731445": [], "344771292115866": [], "9948894656299115": [], "avial": [], "onlin": [], "youtub": 9, "watch": 9, "v": [3, 9], "kqtd5dpn9c8": 9, "w3school": 9, "about": [0, 3, 14], "2wl": 9, "xtl2qyi": 9, "realpython": 9, "subsect": [1, 6, 11], "expect": [1, 6, 11], "empti": [1, 6, 11], "past": [1, 6, 11], "scratch": [1, 6, 11], "prepar": [1, 6, 11], "uniform": [11, 12], "distribut": 11, "normal": [7, 11], "continu": [12, 14], "random": [12, 14], "variabl": [0, 3, 5, 7, 8, 12, 14], "said": [12, 14], "gaussian": 12, "paramet": [0, 1, 2, 5, 7, 12, 14], "mu": 12, "sigma": 12, "where": [1, 2, 5, 8, 12, 14], "infti": 12, "leq": [5, 8, 12, 14], "pdf": [12, 14], "e": [8, 12, 14], "statement": [5, 12, 14], "often": 12, "abbrevi": 12, "sim": [12, 14], "mathcal": 12, "exercis": 12, "did": 12, "suppos": [12, 14], "forc": 12, "act": 12, "column": 12, "help": [5, 7, 12, 14], "let": [12, 14], "s": [0, 3, 8, 12, 14], "norm": [5, 7, 12], "object": [0, 1, 2, 3, 5, 7, 8, 12, 14], "stat": [12, 14], "modul": [5, 7, 12, 14], "question": [5, 7, 8, 12, 14], "relat": [12, 14], "read": [3, 5, 7, 12, 14], "document": [0, 3, 5, 7, 12, 14], "seaborn": [12, 14], "sn": [12, 14], "sinc": [1, 2, 3, 5, 7, 8, 12], "demostr": 12, "scale": [3, 7, 12, 14], "dev": [12, 14], "fix": [12, 14], "rv": [12, 14], "p": [12, 14], "so": [1, 3, 5, 12, 14], "cdf": [12, 14], "4469648833763862": 12, "11": [5, 12], "9087887802741321": 12, "geq": [8, 12], "8413447460685429": 12, "2475074624530771": 12, "bunch": [12, 14], "Then": [12, 14], "execut": [12, 14], "task": [12, 13, 14], "14": [0, 1, 2, 3, 5, 7, 12], "200": 12, "case": [12, 14], "look": [1, 2, 5, 7, 12, 14], "frequenc": [12, 14], "interpret": [12, 14], "randomli": [0, 12], "drawn": [12, 14], "sampl": [0, 3, 12, 14], "high": 12, "take": [1, 3, 12], "initial_sampl": [12, 14], "histplot": [12, 14], "densiti": [12, 14], "kde": 12, "set_xlim": [0, 1, 3, 5, 7, 12, 14], "curv": [0, 3, 5, 12], "approach": [5, 12, 14], "theortic": [12, 14], "plai": [12, 14], "around": [0, 3, 12, 14], "along": 7, "etc": 5, "environ": [3, 14], "interv": 14, "begin": [5, 8, 14], "otherwis": [5, 14], "essenti": [3, 14], "denot": [0, 1, 2, 3, 5, 7, 14], "equal": 14, "ha": [1, 3, 14], "unif": 14, "reaction": 14, "temperatur": 14, "circ": 14, "chemic": 14, "process": [2, 5, 7, 14], "20": [5, 14], "thu": 14, "30": [5, 7, 14], "form": 14, "ran": [], "access": 14, "locat": [3, 14], "75": [8, 14], "660254037844387": 14, "6666666666666666": 14, "33333333333333337": 14, "post": 14, "everi": [1, 2, 5, 7, 14], "magnitud": 14, "40": 14, "common": 13, "techniqu": [7, 13], "finit": [1, 2, 5, 7, 13], "symbol": 13, "automat": 13, "focu": 13, "cours": 9, "good": [], "amount": [], "familiar": 9, "learn": 9, "introduct": 9, "setup": 9, "proceed": 14, "further": 14, "rcparam": 8, "contour": [0, 1, 2, 3, 5, 7, 8], "negative_linestyl": 8, "solid": [0, 1, 2, 3, 8], "consid": [5, 7, 8], "min": [0, 3, 7, 8], "x_1": [0, 1, 2, 3, 5, 7, 8], "x_2": [0, 1, 2, 3, 5, 7, 8], "2x_2": [7, 8], "4x_1": [1, 5, 8], "subject": [5, 8], "align": [5, 8], "transcrib": 8, "g_1": [5, 8], "g_2": [5, 8], "g_3": 8, "g_4": 8, "constraint": [3, 5, 8], "function_1": 8, "x1": [0, 1, 2, 3, 5, 7, 8], "ndarrai": [], "x2": [0, 1, 2, 3, 5, 7, 8], "g1": [5, 8], "g2": [5, 8], "g3": [], "g4": [], "mesh": [0, 1, 2, 3, 5, 7, 8], "gradient": [1, 5, 7, 8], "evalu": [0, 1, 2, 3, 5, 7, 8], "meshgrid": [0, 1, 2, 3, 5, 7, 8], "z": [0, 1, 2, 3, 7, 8], "cs": [0, 1, 2, 3, 5, 7, 8], "level": [0, 1, 2, 3, 5, 7, 8], "arang": [0, 1, 2, 3, 5, 7, 8], "24": 5, "color": [0, 1, 2, 3, 5, 7, 8], "clabel": [0, 1, 2, 3, 8], "fontsiz": [0, 1, 2, 3, 5, 7, 8], "contourf": [5, 7, 8], "01": [5, 8], "orang": [5, 7, 8], "annot": [5, 8], "xy": [5, 8], "cosntraint": 8, "001": 8, "d": [5, 8], "blue": 8, "thick": 8, "infeas": [5, 8], "side": 8, "identifi": 8, "feasibl": [5, 8], "region": [1, 5, 8], "optimum": [0, 1, 2, 3, 5, 7, 8], "quadrilater": 8, "abcd": [], "x_3": [], "22": [1, 5, 8], "corner": 8, "plane": 8, "2x": 8, "3y": 8, "2y": 8, "visual": [0, 1, 3, 8], "inspect": 8, "minimum": [1, 7, 8], "maximum": [7, 8], "those": 8, "function_2": 8, "80": [1, 8], "65": 8, "85": 8, "move": [3, 8], "inward": 8, "boundari": [5, 8], "four": 8, "local": [1, 3, 5, 7, 8], "39": 8, "54": 8, "global": [0, 2, 3, 8], "82": 8, "21": [5, 8], "none": [0, 1, 2, 3, 5, 7, 8], "min_": [5, 7, 8], "quad": [5, 8], "textrm": [5, 8], "bound": [3, 5, 7, 8], "three": [1, 2, 3, 5, 7, 8], "b1": 8, "b2": 8, "b3": 8, "alpha": [0, 2, 3, 5, 8], "red": [1, 2, 5, 7, 8], "b_1": 8, "b_2": 8, "y1": [], "abcda": [5, 8], "analyt": [5, 7], "beam": [], "nonlinear": 5, "nonlinearconstraint": 5, "ceil": [], "floor": [], "example_1": [], "int": [], "float": [], "both": 5, "meshpoint": [0, 1, 2, 3, 5, 7], "fill": [1, 5, 7], "figsiz": [0, 1, 2, 3, 5, 7], "colorbar": [5, 7], "orient": [5, 7], "vertic": [5, 7], "max": [0, 3, 5, 7], "white": 5, "antialias": 5, "shade": [], "slsqp": 5, "converg": [0, 1, 2, 3, 5, 7], "comment": [5, 7], "detail": [0, 3, 5, 7], "example1_obj": [], "directli": [], "scalar": [], "_": [], "example1_g1": [], "example1_g2": [], "example1_callback": [], "store": [0, 1, 2, 3, 5, 7], "current": [1, 2, 5, 7], "histori": [0, 1, 2, 3, 5, 7], "append": [1, 2, 5, 7], "example1_opt_plot": [], "dict": [1, 2, 5, 7], "kei": [1, 2, 5, 7], "pair": [1, 2, 5, 7], "respect": [1, 2, 5, 7], "str": 5, "titl": [1, 5, 7], "subtract": [1, 2, 5, 7], "num_itr": [1, 2, 5, 7], "xlower": [], "xupper": [], "ylower": [], "yupper": [], "g": [1, 5, 7], "left": [0, 1, 3, 5, 7], "12": [1, 5, 7], "set_titl": [0, 1, 2, 3, 5, 7], "linestyl": [0, 1, 2, 3], "dash": [], "thing": [5, 7], "path": [1, 2, 5, 7], "final": [1, 2, 5, 7], "ad": [0, 3, 5], "x0": [1, 2, 5, 7], "solver": [1, 2, 5, 7], "scheme": [1, 2, 5, 7], "possibl": [5, 7], "jac": [1, 2, 5, 7], "disp": [1, 2, 5, 7], "inf": 5, "fun": [1, 2, 5, 7], "callback": [1, 2, 5, 7], "exit": 5, "mode": 5, "523406546437449": 5, "36": 5, "0623763071639867": 5, "120861810878845": 5, "462878789799561e": [], "226920017278644e": [], "li": 5, "intersect": 5, "happend": [], "quadrat": 5, "penalti": [], "transform": 5, "unconstrain": [1, 5, 6], "bfg": [1, 2, 5, 7], "penal": 5, "penalized_obj": 5, "obj": 5, "multipli": 5, "p1": 5, "p2": 5, "527135": [], "201": [], "67": [], "But": [1, 7], "m": 5, "long": [], "cantilev": [], "shape": [1, 2, 7], "cross": [], "compos": [], "web": [], "flang": [], "transvers": [], "load": [], "kn": [], "structur": [], "weight": 0, "vari": [], "t_w": [], "t_b": [], "stress": [], "height": [], "250": [], "mm": [], "125": [], "axial": [], "shear": [], "exce": [], "correspond": [], "yield": [], "sigma_": [], "mpa": [], "tau_": [], "116": [], "2bt_b": [], "ht_w": [], "plh": [], "2i": [], "qquad": [], "5p": [], "moment": [], "area": [], "2b": [], "physic": [], "cannot": 7, "neg": 1, "handl": 7, "separ": [], "much": 5, "effici": [], "moment_of_inertia": [], "tw": [], "tb": [], "inertia": 3, "meter": [], "example_2": [], "gvien": [], "1e5": [], "l": 5, "axial_stress_yield": [], "200e6": [], "pa": [], "shear_stress_yield": [], "116e6": [], "space": [1, 3, 5], "1e": [0, 3], "3e": [], "logscal": [1, 7], "larg": [3, 7], "nooflevel": 7, "logspac": 7, "log10": 7, "map": 7, "lognorm": 7, "vmin": 7, "vmax": 7, "cbar": [], "2e": 7, "set_label": [], "sq": [], "7e": [], "example2_obj": [], "example2_g1": [], "example2_g2": [], "example2_callback": [], "example2_opt_plot": [], "suptitl": [], "tupl": [], "004858202328095406": [], "71": [], "005172413793103474": [], "01426039551927815": [], "960464477539063e": [], "08": [], "811452865600586e": [], "verifi": [], "correct": [], "kkt": [], "condit": [], "quit": [], "senstit": [], "happen": [], "formul": [], "allevi": [], "bean_funct": 7, "conjug": [5, 7], "irrespect": 7, "bean_obj_func": [], "bean_callback": 7, "later": [1, 2, 7], "bean_func_opt_plot": 7, "dictionari": [1, 2, 7], "string": 7, "cg": 7, "091944": 7, "18": [5, 7], "2134116299783557": [], "8241225860738051": [], "2134128613449735": [], "8241227622072955": [], "typic": 3, "rosenbrock_funct": [], "rosen_obj_func": [], "rosen_callback": [], "rosen_func_opt_plot": [], "dv": [], "000000": [], "216": [], "72": [], "999995525407976": [], "9999910236713435": [], "27": [], "99": [], "33": [], "9999955487967556": [], "9999910897532556": [], "conclus": [], "iterart": 7, "taken": 7, "greater": 7, "decreas": 7, "notic": 7, "requri": [3, 7], "newton": 7, "exact": 7, "vector": [0, 3, 7], "hessian": 7, "feel": [], "sta": [], "fourth": 1, "smooth": 1, "multimod": 1, "jone": [0, 2, 3], "3x_2": 1, "2x_1": 1, "2x_1x_2": 1, "been": [1, 3], "inmport": [], "insight": 1, "jones_funct": [1, 2], "entri": [1, 2], "2nd": [1, 2], "reshap": [0, 1, 2, 3, 5, 7], "zeros_lik": [], "add": [0, 1, 2, 3], "concaten": [0, 1, 2, 3], "possibil": 1, "jones_opt_histori": [1, 2], "repres": [], "fraction": [], "popul": [0, 3], "jones_func_opt_plot": [], "starting_point": [1, 2], "zorder": [1, 2], "magenta": [], "confirm": [], "modal": 1, "natur": 1, "best": [0, 2, 3], "either": [], "minmum": [], "fals": [0, 2, 3], "direct": [2, 5], "total": [2, 5], "best_point": 2, "best_obj": 2, "els": 2, "nresult": 2, "avail": [0, 3], "coupl": [1, 7], "jones_global_opt_histori": [], "slightli": [], "jones_func_global_opt_plot": [], "paramt": [], "differential_evolut": [], "init": [], "latinhypercub": [], "soon": [], "goe": [5, 7], "kind": [], "advis": [], "ensur": 5, "everytim": [], "constrain": 6, "rosenbrock": [], "2d": [1, 2, 5, 7], "dimens": [1, 2, 5, 7], "dim": [1, 2, 5, 7], "ndim": [1, 2, 5, 7], "num_point": [0, 1, 2, 3, 5, 7], "hstack": [0, 1, 2, 3, 5, 7], "213411630258179": [], "8241225863759915": [], "2134128610500414": [], "8241227619488037": [], "plot_bean_funct": 7, "2134128900699837": 7, "8241227928676157": 7, "center": [1, 7], "xlabel": [1, 5, 7], "ylabel": [1, 5, 7], "90": 7, "2134116592747848": 7, "8241226173724079": 7, "plot_rosenbrock_funct": [], "31": [], "207": [], "69": [], "9999955232110469": [], "9999910177196754": [], "typeerror": [], "47": [], "32": [], "29": [], "41": [], "38": [], "43": [], "44": [], "posit": [3, 5], "argument": 3, "were": [], "attributeerror": [], "49": [], "48": [], "56": [], "57": [], "58": [], "nonetyp": [], "attribut": [], "9999955486139519": [], "999991089392425": [], "affect": 7, "outsid": [], "try": [5, 7], "becaus": 7, "made": [], "bean": 7, "example1": [], "plot_example1": [], "g_i": 5, "plot_prob": 5, "const1": 5, "const2": 5, "opt_plot": 5, "46287879e": 5, "22692002e": 5, "convert": [1, 2, 5, 7], "beyond": 7, "morevo": 7, "guess": 7, "rest": 7, "95": [], "19": 5, "2134115046900882": [], "8241225616643582": [], "70": [], "2134116718858976": [], "8241224723565246": [], "nd": 7, "inform": [0, 3, 7], "st": 7, "fontweight": 5, "bold": 5, "unmask": [], "upper": [1, 5], "doesn": [], "unlik": [], "limit": [], "sensit": 5, "larger": 5, "violat": 5, "lambda": 5, "_1": 5, "_2": 5, "third": 5, "satisfi": 5, "lambda_1": 5, "lambda_2": 5, "kept": 5, "constant": [0, 5], "thei": [3, 5], "updat": [0, 3, 5], "improv": 5, "335": [], "remain": 5, "mask": 5, "origin": [3, 5], "sequenti": [], "sqp": 5, "THE": 5, "machin": 5, "precis": 5, "220d": 5, "16": [1, 3, 5], "At": 5, "85500d": 5, "03": 5, "proj": 5, "00000d": 5, "00": 5, "86931d": 5, "96247d": 5, "01019d": 5, "12991d": 5, "50783d": 5, "13199d": 5, "84686d": 5, "21668d": 5, "48971d": 5, "35361d": 5, "16358d": 5, "39142d": 5, "40044d": 5, "47010d": 5, "76947d": 5, "50464d": 5, "09467d": 5, "51375d": 5, "12794d": 5, "52039d": 5, "04807d": 5, "52312d": 5, "74099d": 5, "52554d": 5, "84907d": 5, "52650d": 5, "19177d": 5, "52655d": 5, "23359d": 5, "52672d": 5, "15794d": 5, "17": 5, "52688d": 5, "59330d": 5, "52703d": 5, "70157d": 5, "52704d": 5, "63544d": 5, "52713d": 5, "75143d": 5, "02": 5, "52714d": 5, "10332d": 5, "67419d": 5, "09": 5, "tit": 5, "tnf": 5, "tnint": 5, "segment": 5, "explor": 5, "cauchi": 5, "nact": 5, "projg": 5, "674d": 5, "527d": 5, "5271354414899267": 5, "norm_of_projected_gradient_": 5, "_pgtol": 5, "bad": 5, "refresh": 5, "lbfg": 5, "memori": 5, "restart": 5, "bg": 5, "modifi": 5, "revert": 5, "back": 5, "toward": [3, 5], "multi": [1, 3], "particl": [0, 1], "swarm": 1, "evolut": [1, 3], "031204": 1, "4238786497394718": [], "9218850699097503": [], "776964": 1, "44947767686813583": [], "2927527005855954": [], "532035": 1, "153": [], "51": 1, "6732085924175255": [], "6758850426022831": [], "44947767": [], "2927527": [], "776963671379727": [], "6732083": [], "67588499": [], "53203478165186": [], "67320852": [], "67588494": 2, "532034781652612": [], "29275273": [], "77696367137972": [], "42387823": [], "92188478": [], "031204451296723": [], "67320836": [], "67588491": [], "532034781652165": [], "44947765": [], "29275263": [], "776963671379637": [], "44947757": [], "29275279": [], "776963671379535": [], "42387923": [], "92188489": [], "031204451295679": [], "673208518793241": [], "6758849352700709": [], "1271": [], "1322": [], "4947": [], "5252": [], "5313": [], "polish": [], "67320854788102": [], "6758849754241766": [], "532034781652648": [], "plot_jones_funct": [0, 1, 2, 3], "doe": [], "minima": 1, "purpos": 1, "previous": 1, "7770": 1, "4495": 1, "2928": 1, "0312": 1, "4239": 1, "9219": 1, "5320": 1, "6732": 1, "6759": 1, "jones_opt_plot": [1, 2], "optimizeresult": [1, 2], "green": [1, 2], "423878687788307": 1, "921885060897981": 1, "axi": [0, 1, 2, 3], "449477680481256": 1, "292752715159829": 1, "255": 1, "6732086017308463": 1, "675885030297613": 1, "x_0": 1, "tabl": 1, "summar": 1, "42388": 1, "92189": 1, "03120": 1, "44947": 1, "29275": 1, "77696": 1, "67321": 1, "67589": 1, "53203": 1, "due": 1, "motiv": 1, "attract": 1, "77696367": 2, "67320832": 2, "67588503": [], "53203478": 2, "03120445": 2, "9218849": [], "44947768": 2, "29275272": 2, "67588501": 2, "67320855": 2, "29275275": 2, "42387824": 2, "92188476": 2, "67320839": 2, "44947766": 2, "29275264": 2, "44947759": 2, "29275282": 2, "42387864": 2, "92188501": 2, "6732085465304873": 2, "6758849430317693": 2, "linewidth": 2, "place": 2, "decid": 2, "nfun": 2, "ngrad": 2, "nfev": 2, "njev": 2, "750": 2, "150": 2, "pattern": 2, "pso": 3, "stochast": [0, 3], "inspir": 3, "social": 3, "behavior": 3, "propos": [0, 3], "kennedi": 3, "eberhart": 3, "1995": 3, "veloc": 3, "pymoo": [0, 3], "singl": 3, "core": [0, 3], "soo": [0, 3], "nonconvex": [0, 3], "oper": [0, 3], "lh": [0, 3], "defaultsingleobjectivetermin": [0, 3], "config": [0, 3], "warn": [0, 3], "not_compil": [0, 3], "sightli": 3, "compon": 3, "jonesfunct": [0, 3], "__init__": [0, 3], "self": [0, 3], "super": [0, 3], "n_var": [0, 3], "n_obj": [0, 3], "n_constr": [0, 3], "xl": [0, 3], "xu": [0, 3], "_evalu": [0, 3], "arg": [0, 3], "kwarg": [0, 3], "jonesproblem": 3, "inherit": 3, "carefulli": 3, "too": 3, "longer": 3, "small": 3, "mai": 3, "pop_siz": [0, 3], "individu": [0, 3], "stand": 3, "latin": 3, "hypercub": 3, "experi": 3, "seed": [0, 3], "remov": 3, "xtol": [0, 3], "cvtol": [0, 3], "ftol": [0, 3], "period": [0, 3], "n_max_gen": [0, 3], "1000": [0, 3], "n_max_ev": [0, 3], "100000": [0, 3], "re": [0, 3], "verbos": [0, 3], "save_histori": [0, 3], "nx": [0, 3], "nf": [0, 3], "n_gen": [], "n_eval": [], "w": [], "c1": [], "c2": [], "f_avg": [], "f_min": [], "9000": [], "00000": [], "8544083363": [], "112498e": [], "05622": [], "4355": [], "01555": [], "339992e": [], "132411e": [], "02637": [], "4166": [], "99240": [], "03040": [], "795352e": [], "318242e": [], "01346": [], "4084": [], "98144": [], "04199": [], "152301e": [], "343557e": [], "9e": [], "3982": [], "97036": [], "05077": [], "023792e": [], "120": [], "8e": [], "3989": [], "96055": [], "05833": [], "068830e": [], "140": [], "00617": [], "4039": [], "95205": [], "06728": [], "208365e": [], "343569e": [], "160": [], "00510": [], "4032": [], "94397": [], "08393": [], "225258e": [], "350936e": [], "180": [], "3930": [], "93148": [], "08958": [], "236461e": [], "352604e": [], "3934": [], "92298": [], "10300": [], "250133e": [], "220": [], "3950": [], "91236": [], "11429": [], "261733e": [], "352843e": [], "240": [], "4e": [], "3954": [], "90182": [], "12608": [], "268584e": [], "260": [], "3955": [], "89030": [], "13154": [], "297344e": [], "352985e": [], "280": [], "3956": [], "88180": [], "13836": [], "297690e": [], "353165e": [], "300": [], "87540": [], "15360": [], "298887e": [], "320": [], "3957": [], "86373": [], "15672": [], "300809e": [], "340": [], "3958": [], "85604": [], "16135": [], "301228e": [], "353190e": [], "360": [], "3980": [], "85128": [], "17463": [], "318719e": [], "380": [], "84274": [], "18474": [], "322416e": [], "353195e": [], "400": [], "83420": [], "19644": [], "324471e": [], "353202e": [], "420": [], "3975": [], "82269": [], "19840": [], "330419e": [], "440": [], "3976": [], "81610": [], "20496": [], "330750e": [], "460": [], "6e": [], "3977": [], "80945": [], "21051": [], "331242e": [], "480": [], "3941": [], "80504": [], "22283": [], "352330e": [], "353203e": [], "67344824": 3, "67616884": 3, "53203347": 3, "decres": [], "tol": [], "niter": [0, 3], "dtype": [0, 3], "int32": [0, 3], "itr": [0, 3], "pop": [0, 3], "set_ylim": [0, 3], "quiver": 3, "scale_unit": 3, "inch": 3, "005": 3, "de": 0, "variant": 0, "bin": 0, "cr": 0, "dither": 0, "jitter": [], "637687e": [], "988233e": [], "341694e": [], "289247e": [], "349074e": [], "029149e": [], "216124e": [], "275452e": [], "349823e": [], "327816e": [], "342216e": [], "352723e": [], "349209e": [], "353167e": [], "351119e": [], "352486e": [], "353033e": [], "353192e": [], "353130e": [], "353200e": [], "353145e": [], "353182e": [], "353193e": [], "67331811": 0, "67592461": 0, "53203462": 0, "cognit": 3, "impact": 3, "member": 0, "mix": 0, "storn": 0, "price": 0, "1997": 0, "its": 0, "strategi": 0, "crossov": 0, "known": 0, "recombin": 0, "factor": 0, "mutat": 0, "tune": 0, "worst": [0, 3], "over": [0, 3], "fbest": [0, 3], "fmean": [0, 3], "fworst": [0, 3], "set_xtick": [0, 3], "evolv": [0, 3], "becom": 0, "concentr": 0}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"introduct": 4, "cours": 4, "descript": 4, "learn": 4, "outcom": 4, "prerequisit": 4, "guidelin": [], "set": [], "up": [], "comput": 15, "environ": 15, "us": [], "anaconda": 15, "setup": 15, "step": 15, "1": [8, 15], "review": 11, "numer": [11, 13], "method": [5, 10, 11], "error": 10, "estim": 10, "iter": 10, "differenti": [0, 13], "least": [], "squar": [], "regres": [], "python": 9, "jupyt": 9, "notebook": 9, "resourc": 9, "probabl": 11, "normal": 12, "distribut": [12, 14], "uniform": 14, "download": 15, "instal": 15, "2": [8, 15], "creat": 15, "new": 15, "3": 15, "packag": 15, "problem": 8, "formul": 8, "exampl": 8, "local": 6, "constrain": 5, "optim": [1, 2, 3, 5, 6, 7], "unconstrain": 7, "bean": [], "function": 1, "rosenbrock": [], "global": 1, "multi": [], "start": [], "gradient": 2, "base": 2, "evolut": 0, "penalti": 5, "jone": 1, "particl": 3, "swarm": 3, "multistart": 2}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})