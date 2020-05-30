import pandas as pd
import numpy as np
import warnings


def write_data(x, y):
    df = pd.read_json(x)
    df.head()
    words_ratings = pd.DataFrame(df.groupby('word').mean())
