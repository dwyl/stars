# :star: :star: :star: :star: :star: stars :star: :star: :star: :star: :star:

> "_No more counting dollars, we'll be **counting stars**_" <br />
~ OneRepublic - https://youtu.be/hT_nvWreIhg?t=15s

This mini-project helps us **track** :star: for **projects** on **GitHub**
and ***_answer_ interesting questions*** about the data.

> _**Note**: we **prefer** counting the
[**other** type stars](https://github.com/dwyl/stars/issues/2),
but for now this is a **great start**_. :wink:


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

It also lets us know if the learning materials we are producing are _useful_
to other people.
_Encouraging_ people :star: our projects is _important_,
because the more people :star: the more it will help
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

### _So What...?_

We think it would be _interesting_ to _test_ the ***hypothesis*** that:
the more _active_ a person is in the **Open Source _Community_**
the more projects they will :star: on GitHub.

For _example_ [Eddie](https://github.com/eddiejaoude) :heart: who is a
[_highly active **Open Source Advocate**_](https://twitter.com/eddiejaoude/status/800440665528303620)
has quite a few hundred :star:
![eddie-has-464-stars](https://cloud.githubusercontent.com/assets/194400/21963503/1b792bf2-db34-11e6-8030-aa61e805c542.png)

Could the number of :star: a person has be an _indicator_
of [**_future_ success**](https://youtu.be/zHlpWokiduk?t=48s) ? <br />
i.e. _could_ we _discover_ a "_talented_" ***new*** person by charting
their :star: activity?

## _How?_

How would _you_ go about tackling this challenge...?

### (SQL) Tables

We will require the following (SQL) tables to be defined to store the data:

#### People



#### Projects



#### Stars




## Further reading

+ "***One Metric that Matters***": http://leananalyticsbook.com/one-metric-that-matters/
discuss at: https://github.com/dwyl/hq/issues/149
+ Actionable Insights: http://online-metrics.com/actionable-insights/
