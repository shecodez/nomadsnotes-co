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
  publish_date: Date;
};
