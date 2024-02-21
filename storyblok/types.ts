export type BlokLink = {
  id: string;
  url: string;
};

export type BlokAsset = {
  id: string;
  alt: string;
  filename: string;
  source: string;
  copyright: string;
};

export type BlokTextarea = {
  id: string;
};

export type BlokRichtext = {
  id: string;
};

export type Note = {
  _uid: string;
  image: BlokAsset;
  title: string;
  excerpt: BlokTextarea;
  content: BlokRichtext;
  author: string;
  // published_date: date;
  // isUpdated: boolean;
};

export type Grid = {
  _uid: string;
  css: string;
  grid_items: BlokAsset;
};

export type GridItem = {
  _uid: string;
  css: string;
  item: BlokAsset;
};

export type InstagramFeed = {
  _uid: string;
  username: string;
};

export type Slide = {
  _uid: string;
  title: string;
  subtitle: string;
  image: BlokAsset;
  link: BlokLink;
  hide_text: boolean;
};

export type Slider = {
  _uid: string;
  slides: Slide[];
};

export type Feature = {
  _uid: string;
  title: string;
  description: string;
  content: Card;
  icon: BlokAsset;
  subtitle: string;
  link: BlokLink;
};

export type Card = {
  _uid: string;
  image: BlokAsset;
  slider: Slider;
  category: string; // WTF, Hobby, Destinations, Portfilio
  title: string;
  subtitle: string;
  link: BlokLink;
  tags: string;
  published_date: Date;
};
