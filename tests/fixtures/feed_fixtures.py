import pytest
from tests.factories import feed_factories

@pytest.fixture()
def feed(request):
    return feed_factories.FeedFactory()

@pytest.fixture()
def real_feed(request):
    return feed_factories.TechCrunchFeedFactory()

@pytest.fixture()
def feedWithItems(request):
    return feed_factories.FeedFactory(items=[feed_factories.FeedFactory()])