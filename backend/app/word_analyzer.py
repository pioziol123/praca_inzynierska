from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import re
import pandas as pd
import os
import time

o=0
driver = webdriver.Chrome(executable_path=r"C:\Users\nemo\Downloads\chromedriver_win32\chromedriver.exe")
link = pd.read_csv("hate_words.csv")

for i in link:
    driver.get("https://womad.life"+i)
    time.sleep(7)
    print(i)
    soup=BeautifulSoup(driver.page_source, 'lxml')

    for l in soup.find_all("p",{"class":"content comment-content"}):
        comment = l.get_text()
        print(comment)
        print(i)
        print(o)
        comment_data["hate"][o] = comment
        comment_data.to_csv("womad_comment_train_data.csv")
        o=o+1