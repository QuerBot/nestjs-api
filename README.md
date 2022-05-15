# NestJS API for Twitter QuerBot

## Saving Users

### with

* bubble (generated ID / Many-to-Many-Relation to Bubble-Table - varchar)
* userID (twitter-user-id - bigInt)
* userHandle (twitter-user-handle at the time processed - varchar)
* followings (relation to itself with userID to userID - Many-to-Many)
* rating (int - custom rating if the user should be weighted more in a bubble)

## Saving Bubbles

### with

* name (varchar)
* description (varchar)
* automatically generated ID (name > md5 encrypted)

## Saving Followers/Followings to User

## Saving Tweets(Mentions) to the bot

All Mentions with a specific syntax get sent to API and saved, so the tweets can be processed from the bot in the frontend through subscribing via cronjob to the mention-tweets and check their status.

Fields are:

* tweetID (primary, bigint)
* answered (boolean)
* senderID (bigint)

Relations:

RequestedUser (type: many-to-one): Which User got requested from the userlist (gets added to userlist if not exists).
