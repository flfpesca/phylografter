"""
ivy - a phylogenetics library and visual shell
http://www.reelab.net/ivy

Copyright 2010 Richard Ree <rree@fieldmuseum.org>

Required: ipython, matplotlib, scipy, numpy
Useful: dendropy, biopython, etc.
"""
## This program is free software; you can redistribute it and/or
## modify it under the terms of the GNU General Public License as
## published by the Free Software Foundation; either version 3 of the
## License, or (at your option) any later version.

## This program is distributed in the hope that it will be useful, but
## WITHOUT ANY WARRANTY; without even the implied warranty of
## MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
## General Public License for more details.

## You should have received a copy of the GNU General Public License
## along with this program. If not, see
## <http://www.gnu.org/licenses/>.

"""
#from . import tree, layout, contrasts, ages
import tree, layout, contrasts, ages


#from . import bipart, genbank, nexus, newick, storage
import bipart, genbank, nexus, newick, storage

#import nodearray, data

#from . import treebase
import treebase

#import db
#import contrib

try:
    from . import ltt as _ltt
    ltt = _ltt.ltt
    from . import graph
except ImportError:
    pass
except:
    pass

import sequtil
#from . import chars, align, sequtil

from ivy import ages
from ivy import bipart
from ivy import chars
from ivy import contrasts
from ivy import genbank
from ivy import layout
from ivy import nexus
from ivy import newick
from ivy import sequtil
from ivy import storage
from ivy import tree
from ivy import treebase
"""

#from ivy import data

#from ivy import bipart, genbank, nexus, newick, storage
#import nodearray, data
#from ivy import treebase
#import db
#import contrib
#try:
#    from . import ltt as _ltt
#    ltt = _ltt.ltt
#    from . import graph
#except ImportError:
#    pass
#
#from ivy import chars, sequtil
## try: import vis
## except RuntimeError: pass
