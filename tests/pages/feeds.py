from selenium.webdriver.common.by import By
from base import BasePage

class FeedsPage(BasePage):
    """Feeds Page"""

    #base url
    _page_url = "/feeds"

    #locators
    header_text = (By.CSS_SELECTOR, "h1", "page header text")
    feeds_button = (By.PARTIAL_LINK_TEXT, "Feeds", "feed button")
    feeds_list = (By.CSS_SELECTOR, ".feeds", "feeds list")

    #functions
    def navigate(self):
        self.browser.go_to_relative_url(self._page_url)

    def click_feeds_button(self):
        self.browser.get_element(self.feeds_button).click()

    # Page Elements
    def get_header_text(self):
        return self.browser.get_element(self.header_text).text

    def get_feeds_list_text(self):
        return self.browser.get_element(self.feeds_list).text