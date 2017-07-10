# :star: :star: :star: :star: :star: stars :star: :star: :star: :star: :star:

> "_No more counting dollars, we'll be **counting stars**_" <br />
~ OneRepublic - https://youtu.be/hT_nvWreIhg?t=15s

This mini-project helps us **track** :star: for **projects** on **GitHub**
and ***_answer_ interesting questions*** about the data.

[![Build Status](https://travis-ci.org/dwyl/stars.svg?branch=master)](https://travis-ci.org/dwyl/stars)
[![codecov](https://codecov.io/gh/dwyl/stars/branch/master/graph/badge.svg)](https://codecov.io/gh/dwyl/stars)
[![Code Climate](https://codeclimate.com/github/dwyl/stars/badges/gpa.svg)](https://codeclimate.com/github/dwyl/stars)
[![Dedpendencies](https://img.shields.io/david/dwyl/stars.svg)](https://david-dm.org/dwyl/stars)
[![DevDependencies](https://img.shields.io/david/dev/dwyl/stars.svg)](https://david-dm.org/dwyl/stars?type=dev)



## _Why_?

A big _part_ of achieving our
[***goals***](https://github.com/dwyl/phase-two/issues/43)
in DWYL requires tracking certain
["***Metrics***"](https://github.com/dwyl/hq/issues/149) <br />
so that we can see _trends_ and derive _actionable insights_
from our data.

### _Discover_ Interesting _Projects_ & Useful Content on GitHub

GitHub :star: are one of the _main_ (***quantitative***) measures we have
for discovering interesting Open Source projects on GitHub.

Counting :star: helps us _know_ if the
[learning materials](https://github.com/dwyl/the-book)
we are producing are _useful_ to other people.<sup>1</sup> <br />
_Encouraging_ people to :star: our projects is _important_ for "_exposure_",
and is **_you_ can help us** with if you aren't already... <br />
The more people :star: dwyl repos the more it will help
their friends/followers to _discover_ our _useful_ projects/content.

### _Discover_ Interesting _People_

The _other_ benefit of _tracking_ :star: on our projects is that it
allows us to _understand_ ***who*** is interested in our work,
which allows us to _discover_ new & interesting people.

### _Ask_ Interesting _Questions_

Finally, we think that the GitHub API for :star: is not great
because for example it does not allow us to answer
_interesting_ questions such as:

```SQL
find all people who are members of an org who have starred xyz project
```
***or***
```SQL
who in the org has the most/least stars
```
***or***
```SQL
which project in the org increased/decreased its stars most this week
```

So we _decided_ to _solve_ this mini-challenge with some _code_.

## _What_?

> “_When you have **mastered numbers**, you will in fact no longer
be reading numbers, any more than you read words when reading books.
You will be **reading meanings**._” ~ W.E.B. Du Bois

GitHub lets it's "users" :star: projects (_repositories_) in order to
"_favourite_" or "_bookmark_" them.

Both the person _starring_ the project (_that interests them_)
_and_ the rest of _community_ can _see_ the stars which then act
as a _signal_ of "_interesting_" or even "_quality_".

For _example_ [Natalia](https://github.com/NataliaLKB?tab=stars)
has the following projects starred: https://github.com/NataliaLKB?tab=stars
![natalia-stars](https://cloud.githubusercontent.com/assets/194400/21963007/c576d59c-db29-11e6-8164-8c9de0db86f1.png)

Some people use their stars "_scarcely_", which is _ok_ because they
_may_ only want to "_bookmark_" a handful of things on GitHub.
However other "_power users_" :star: _many_ things ... e.g:

https://github.com/feross?tab=stars&q=summer
![feross-starred-dwyl-summer](https://cloud.githubusercontent.com/assets/194400/21963386/ab524a90-db31-11e6-81c8-66c4b4b762e4.png)

<!--
### _So What...?_

We think it would be _interesting_ to _test_ the following ***hypothesis***: <br />

> The more _active_ a person is in the **Open Source _Community_**
the more projects they will :star: on GitHub.

And _subsequently_: could the number of :star: a person has
be an _indicator_ of [**_future_ success**](https://youtu.be/zHlpWokiduk?t=48s) ? <br />
i.e. _could_ we _discover_ a "_talented_" ***new*** person by charting
their :star: activity?

-->

### (_Immediate_) "Research Question"

The immediate question we are _going_ to answer with this project is:

```SQL
how many distinct people have found dwyl code/tutorials useful
```

The answer is:

See "how" section below for _exactly_ how this number is derived.


## _How?_

How would _you_ go about tackling this challenge...?

### Scripts?

We wrote a few scripts to fetch the data from GitHub:

> You will need `node.js` installed on your computer,
if you don't _already_ have it, go to: https://nodejs.org/en/download/

Run the following commands:
```
npm install     # install dependencies
npm run crawl   # crawls all pages on dwyl's github for stargazers
npm run combine # combines all stargazers into
npm run unique  # tallies how many unique people have starred a dwyl repo
npm run learners # just the people who have starred a learn-x repo
```

***or*** run a single command:

```
npm run all
```

The _output_ will be 4 files:
+ `stargazers.csv` - the list of all repos and people who have starred them
+ `unique.csv` - unique people that have starred _any_ dwyl repo
+ `unique_learners.csv` - unique people who have starred a `learn-x` repo

<!--

### GitHub API

We're going to use a couple of endpoints in the GitHub REST API
to retrieve our data.

#### Users

https://developer.github.com/v3/users/#get-a-single-user

#### Repositories

+ Your: https://developer.github.com/v3/repos/#list-your-repositories
+ Specific User: https://developer.github.com/v3/repos/#list-user-repositories
+ Organisation: https://developer.github.com/v3/repos/#list-organization-repositories



### (SQL) Tables

We will require the following (SQL) tables to be defined to store the data:

#### People (GitHub Users)



#### Repos



#### Stars

This is a "lookup" table that references two rows in other tables
and has a timestamp.
-->



### Run it Locally

```
npm install && npm run local
```

You should see something like this:

![learners-random](https://user-images.githubusercontent.com/194400/27261393-2384514e-543a-11e7-9602-34a20873e26c.png)

## Want to _Sort_ the Profile Images by Color

Sorting the avatars by the color of the avatar requires a little "magic".
We _first_ need to ***download*** all the profile images
so that our script can "analyse" them.

### Step 1: Get Profiles for All People!

Run this script (_and go for a walk/coffee_):
```
npm run people
```

> **Note**: this will take about **50 minutes** to run
because we don't want to "DDOS" GitHub with 6k requests at once
(_and get our IP address blocked!!_)


### Step 2: Download Profile Images

Run this script and go for a quick bathroom break:
```
npm run people
```
> **Note**: this will take about **20 minutes** to run
Again because we don't want to ***flood*** GitHub CDN with
6k requests at once.

### Step 3: Update the `faces.js`

Fine the line that looks like this in `faces.js`:
```
// var img_base = '/data/img/';          // get avatar from localhost
var img_base = 'https://avatars2.githubusercontent.com/u/';
```
comment out the github url and _un-comment_ the relative one.

do the same thing again for the lines:
```
// var src = img_base + uid + '.jpg';    // get avatar from localhost
var src = img_base + uid + '?v=3&s=200'; // GET images from GitHub
```

Now when you run `npm run local`,
wait 60 seconds for the page to load all the images ...
then once they are loaded they will be sorted into a rainbow!

![learners-rainbow](https://user-images.githubusercontent.com/194400/27261400-3c47e27c-543a-11e7-8574-2b1cebd4fe10.png)

<!-- ## Deployment

### Heroku

This is a pretty standard heroku app.
All that's required is Heroku PostgreSQL (Free)
and a handful of
[**environment variables**](https://github.com/dwyl/learn-environment-variables):

![heroku-environment-variables](https://cloud.githubusercontent.com/assets/194400/21965926/43e90e2c-db61-11e6-98b2-ac906dea17cb.png)

> Don't worry, these aren't thyoue "_real_" Environment variables.
([_duh!_](https://github.com/dwyl/learn-security)) <br />
To set up your app Environment Variables follow the instructions:
https://github.com/dwyl/stars/issues/4

Go to:

 -->

## Further reading

+ "***One Metric that Matters***": http://leananalyticsbook.com/one-metric-that-matters/
discuss at: https://github.com/dwyl/hq/issues/149
+ Actionable Insights: http://online-metrics.com/actionable-insights/


> _**P.S**: we **prefer** counting the
[**other** type stars](https://github.com/dwyl/stars/issues/2),
but for now this is a **great start**_. :wink:

<sup>1</sup><small>Note: while dwyl's
["mission"](https://github.com/dwyl/start-here/blob/master/manifesto.md)
is _not_ simply to produce good learning materials,
we think that _having_ good learning tutorials is _essential_
for our mission! If _other people_ find our tutorials _useful_
and they _contribute_ to _improving_ them, then ***everyone benefits***
not just the members of the dwyl team building the dwyl
["_product_"](https://github.com/dwyl/product-roadmap) **#WinWin**
</small>
