from sklearn.tree import DecisionTreeRegressor
# run without X
import matplotlib as mpl
mpl.use('Agg')

# will eventually do this in the correct way -- install a library/package
import os
import sys
parentPath = os.path.abspath("..")
if parentPath not in sys.path:
    sys.path.insert(0, parentPath)

from io_utils import Experiment
from skl_utils import generate_results

exp = Experiment('DecisionTreeRegressor')
def main(args, input_data, tmpdir=exp.tmpdir):
    model = DecisionTreeRegressor(max_depth=args['max_depth'], min_samples_split=args['min_samples_split'],
                                  min_samples_leaf=args['min_samples_leaf'])
    generate_results(model, input_data, tmpdir, args['_id'], mode='regression')


if __name__ == "__main__":
    args, input_data = exp.get_input()
    main(args, input_data)
