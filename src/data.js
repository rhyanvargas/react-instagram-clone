import { v4 as uuid } from "uuid";

export const defaultUser = {
  id: uuid(),
  username: "username",
  name: "name",
  profile_image:
    "https://instagram.fhou1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/101471703_266770338018058_2255487094648471552_n.jpg?tp=1&_nc_ht=instagram.fhou1-2.fna.fbcdn.net&_nc_ohc=2Kd9VxBw1bwAX_2RSNt&ccb=7-4&oh=f9217e81938b7a71c2c0effbfbd05fb6&oe=6084325C&_nc_sid=4f375e"
  // profile_image:
  // "https://instagram.com/static/images/anonymousUser.jpg/23e7b3b2a737.jpg"
};

export function getDefaultUser() {
  return {
    id: uuid(),
    username: "username",
    name: "name",
    profile_image:
      "https://instagram.fhou1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/101471703_266770338018058_2255487094648471552_n.jpg?tp=1&_nc_ht=instagram.fhou1-2.fna.fbcdn.net&_nc_ohc=2Kd9VxBw1bwAX_2RSNt&ccb=7-4&oh=f9217e81938b7a71c2c0effbfbd05fb6&oe=6084325C&_nc_sid=4f375e"
  };
}

export const defaultPost = {
  id: uuid(),
  likes: 10,
  caption: `<span class="">Do you know the 10 JavaScript concepts you need to learn React? 🤔⚛️👇<br>•<br>•<br>👉 Get the FREE cheatsheet to learn them now: bit.ly/10-js-tips 🔥</span>`,
  user: defaultUser,
  media:
    "https://instagram.fhou1-2.fna.fbcdn.net/v/t51.2885-15/e35/154214171_117799836974937_3734796054156813037_n.jpg?tp=1&_nc_ht=instagram.fhou1-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=XtltwFsrly4AX_FJuVH&ccb=7-4&oh=7ead9b8ce4413fc6107cc25db67ecf4d&oe=6082042A&_nc_sid=4f375e",
  comments: [],
  created_at: "2020-02-28T03:08:14.522421+00:00"
};

export function getDefaultPost() {
  return {
    id: uuid(),
    likes: 10,
    caption: `<span class="">Do you know the 10 JavaScript concepts you need to learn React? 🤔⚛️👇<br>•<br>•<br>👉 Get the FREE cheatsheet to learn them now: bit.ly/10-js-tips 🔥</span>`,
    user: defaultUser,
    media:
      "https://instagram.fhou1-2.fna.fbcdn.net/v/t51.2885-15/e35/154214171_117799836974937_3734796054156813037_n.jpg?tp=1&_nc_ht=instagram.fhou1-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=XtltwFsrly4AX_FJuVH&ccb=7-4&oh=7ead9b8ce4413fc6107cc25db67ecf4d&oe=6082042A&_nc_sid=4f375e",
    comments: [],
    created_at: "2020-02-28T03:08:14.522421+00:00"
  };
}

export const defaultNotifications = [
  {
    id: uuid(),
    type: "follow",
    user: defaultUser,
    created_at: "2020-02-29T03:08:14.522421+00:00"
  },
  {
    id: uuid(),
    type: "like",
    user: defaultUser,
    post: defaultPost,
    created_at: "2020-02-29T03:08:14.522421+00:00"
  }
];

export const defaultCurrentUser = {
  id: uuid(),
  username: "me",
  name: "myself",
  profile_image:
    "https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/s150x150/82559664_3161307737426774_8687807477812559872_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=llb3VCRb-mkAX_XTEi3&oh=64f0323db646c01299e513e3337b83ff&oe=5E8620BF",
  website: "https://react12.io",
  email: "me@gmail.com",
  bio: "This is my bio",
  phone_number: "555-555-5555",
  posts: Array.from({ length: 10 }, () => getDefaultPost()),
  followers: [defaultUser],
  following: [defaultUser]
};
