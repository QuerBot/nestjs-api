# NestJS API for Twitter QuerBot

## Saving Users

### with

* bubble
* userID
* userHandle
* followings
* rating

## Saving Bubbles

### with

* name
* description
* automatically generated ID

## Saving Followers/Followings to User

## Saving Tweets(Mentions) to the bot

All Mentions with a specific syntax get sent to API and saved, so the tweets can be processed from the bot in the frontend through subscribing via cronjob to the mention-tweets and check their status.

Fields are:

* tweetID (primary, bigint)
* answered (boolean)
* senderID (bigint)

Relations:

RequestedUser (type: many-to-one): Which User got requested from the userlist (gets added to userlist if not exists).
