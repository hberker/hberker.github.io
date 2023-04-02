from time import sleep
import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By


class StaticSiteTest(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()

    

    def test_check_blog(self):
        url = "http://[::]:8000/"

         # load this article 
        self.driver.get(url)
        # Get blog
        sleep(2)
        elems = self.driver.find_elements(By.LINK_TEXT, "Blog")
        
        assert(len(elems) != 0)
        blog = elems[0]
        blog.click()
        sleep(1)
        elems = self.driver.find_elements(By.LINK_TEXT, "Blog")
        assert(len(elems) == 1)

        blog1 = "My 201 Expirence"
        blog2 = "Snake in Python"

        b1 = self.driver.find_elements(By.LINK_TEXT, blog1)
        b2 = self.driver.find_elements(By.LINK_TEXT, blog2)
        assert(len(b1) != 0)
        assert(len(b2) != 0)

        btn1 = b1[0]
        btn2 = b2[0]
        btn1.click()
        sleep(2)

        self.assertIn(blog1, self.driver.page_source)
        self.driver.execute_script("window.history.go(-1)")
        sleep(1)
        btn2.click()
        sleep(1)
        self.assertIn(blog2, self.driver.page_source)


        # k, cool. let's bounce. 
    
    def tearDown(self):
        self.driver.close()

  

if __name__ == '__main__':
    unittest.main()
