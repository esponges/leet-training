# System Design

## Steps
### Getting specifications
- Get as much information as possible information from the interviewer.
- Define end goals.

__Non functional details__
- Reliability: Can you allow any data inconsistency?
- Availability: Is downtime critical?
- Latency 

eg
1. Will users be able to upload
2. Are we focusing on front end or backend?
3. Will the service do X or Y

### Define api methods
- define a list of the most important API requests and how could the API contract look like

eg
1. postTweet(user_id, tweet_data, tweet_location, user_location, timestamp, ...)
2. generateTimeline(user_id, current_time, user_location, ...)
3. markTweetFavorite(user_id, tweet_id, timestamp, ...)

### Back-of-the-envelope estimation

Estimate the scale of the system by making some quick high level calculations

eg
1. storage required
2. bandwidth
3. number of servers

__Time and storage__

Define:
- write and reads per seconds
- average size per stored element (consider all tables/objects: main, keys or relation data)
- the storage over a period of times (years usually)

__Bandwidth__

Define using the size of the elements
- Ingress kb/s
- Egress kb/s

__Cache__
Define:
- Strategy: 80/20 - LIFO? Least Used Elements?
- Cache per day - Daily reads x cached % = Daily Cached Storage

### Define the data model

How would the tables (for rdb) or models look like

User: UserID, Name, Email, DoB, CreationData, LastLogin, etc.
Tweet: TweetID, Content, TweetLocation, NumberOfLikes, TimeStamp, etc. UserFollowo: UserdID1, UserID2
FavoriteTweets: UserID, TweetID, TimeStamp

### High level design

The actual diagram of the application without getting into the details of each element

### Detailed design

Digging deeper into the elements that need further discussion __as per the feedback__ from the interviewer.

### Identifying and resolving bottlenecks

Where are the risks of your application? how could you solve it?

