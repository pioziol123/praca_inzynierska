import numpy as np
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.metrics import mean_squared_error
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import linear_kernel
from rake_nltk import Rake

def write_data(dataset, y, words):
    df = pd.DataFrame([(k, v[0][0], v[0][1]) for k, v in dataset.items()],
                   columns=['Kategoria', 'Slowa'])
    df.head()
    df['Key_words'] = words

    count = CountVectorizer()
    count_matrix = count.fit_transform(df['bag_of_words'])

    # generating the cosine similarity matrix
    cosine_sim = cosine_similarity(count_matrix, count_matrix)

    return cosine_sim