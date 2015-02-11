Read Your News Faster.

## Statuses
[![Build Status](https://travis-ci.org/alexgerstein/Sourcemash.svg?branch=master)](https://travis-ci.org/alexgerstein/Sourcemash)
[![Coverage Status](https://coveralls.io/repos/alexgerstein/Sourcemash/badge.svg)](https://coveralls.io/r/alexgerstein/Sourcemash)
[![Codacy Badge](https://www.codacy.com/project/badge/7e1866c374c94c0783a940d0284b6d88)](https://www.codacy.com/public/gersteinalex/Sourcemash)

## Description
Web-based RSS feed aggregator designed to shorten the time it takes to read articles by combining related articles into digestible chunks. It is similar to cir.ca, but it allows users to input their own sources and summarization is handled algorithmically.

http://sourcemash.com

The site was built for the CS98 course at Dartmouth College.

## Installation
1. Clone repo to computer
2. Install all requirements from requirements.txt
	
	System-wide: ```sudo pip install -r requirements.txt```
	
	Virtual environment (preferred):
	1. Create a virtual environment: ```virtualenv flask```
	2. Install requirements: ```flask\bin\pip install -r requirements.txt```


## Run Locally
1. Start up a local server: ```python manage.py server```
2. Start up the scraper: ```python manage.py scrape```

## Tests
* To run the basic unittests, run ```python manage.py tests```.
* To include the functional tests, start a server on localhost and run ```python manage.py tests --all``` or ```python manage.py tests -a```.

## License
This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 2 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see http://www.gnu.org/licenses/.
