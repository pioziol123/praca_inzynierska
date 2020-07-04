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
    df = pd.DataFrame(dataset,
                   columns=['Kategoria', 'Slowa'])
    df.head()
    df['Key_words'] = words

    try:
        count = CountVectorizer()
        if (df['Slowa']) is None:
            return '--'
        count_matrix = count.fit_transform(df['Slowa'])

    except ValueError:
        return '--'
    # generating the cosine similarity matrix
    cosine_sim = cosine_similarity(count_matrix, count_matrix)
    cosine_sim = dataset[0]
    return cosine_sim