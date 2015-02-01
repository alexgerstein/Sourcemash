import pytest
from tests.factories import user_factories, role_factories, feed_factories
from app.models import User

@pytest.fixture()
def user(request):
    feed = feed_factories.FeedFactory()
    return user_factories.UserFactory(subscribed=[feed])

@pytest.fixture()
def logged_in_user(db, driver):
    user = User(email="test@gmail.com", password="pass", active=True)
    db.session.add(user)
    db.session.commit()

    driver.get("http://localhost:5000/login")
    assert "rss-aggregator" in driver.title

    # enter email
    email = driver.find_element_by_css_selector('input[name="email"]')
    email.send_keys(user.email)

    # enter password
    password = driver.find_element_by_css_selector('input[name="password"]')
    password.send_keys(user.password)

    # click submit
    button = driver.find_element_by_css_selector('button[type="submit"]')
    button.click()

    return user