# Instagram Clone 

This is a instagram clone that I built in order replicate full functionality:
- Authentication
- Account Creation
- Notificiations
- CRUD on posts and profiles
- Saving, Liking and Commenting on posts
- Following/Unfollowing Users
- Loading states and more

# Getting Started 

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Tech Stack
- React
    - `react-helmet`
    - `react-dom`
    - `react-helmet`
    - `react-lines-ellipsis`
    - `react-modal`
    - `react-router-dom`
    - `react-slick`
    - `@rooks/use-outside-click`
    - `@tanem/react-nprogress`
- MaterialUI
- Apollo
    - `apollo-boost`
    - `apollo-cache-inmemory`
    - `apollo-client`
    - `apollo-link-ws`
- Hasura
- Firebase
- GraphQL
    -`subscriptions-transport-ws`

## Routes (pages)
 - `/feed` (feed page)  
 - `/explore` (explore page)
 - `/p/:postId` (post page)
 - `/:username` (profile page)
 - `/accounts/edits` (edit profile page)
 - `/accounts/login` (login page)
 - `/accounts/emailsignup` (signup page)
 - `*` (not found page)
- `Notification` (notification tooltip list)

## Components (prefix = route name/page):
- `FeedPost`
- `FeedPostSkeleton`
- `FeedSideSuggestions`
- `ExploreSuggestions`
- `ExploreGrid`
- `Post`
- `PostModal`
- `PostSkeleton`
- `NotifictationList`
- `NotificationToolTip`
- `ProfileTabs`


## Shared Components
- `Navbar`
- `FollowSuggestions`
- `FollowButton`
- `UserCard`
- `OptionsDialogue`
- `ProfilePicture`
- `Layout`
- `SEO Component`




## Concepts Implemented


