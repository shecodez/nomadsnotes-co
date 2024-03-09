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

export type SocialAt = {
  _uid: string;
  label: string;
  icon_css: string;
  link: BlokLink;
  css: string;
};

export type NewsletterForm = {
  _uid: string;
  bg_text: string;
};

export type Author = {
  name: string;
  at_username: string;
  image: BlokAsset;
};

// page
export type Note = {
  _uid: string;
  cover_image: BlokAsset;
  title: string;
  description: BlokTextarea;
  content: BlokRichtext;
  author: string; //Author
  // published_date: date;
  // isUpdated: boolean;
};

export type Grid = {
  _uid: string;
  css: string;
  grid_items: any[];
};

export type GridItem = {
  _uid: string;
  css: string;
  item: BlokAsset;
  title: string;
  description: string;
  link: BlokLink;
  link_text: String;
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
  css: string;
  weight: number;
};

export type ComparisonSlider = {
  _uid: string;
  slides: Slide[];
  //image_left: BlokAsset;
  //image_right: BlokAsset;
  css: string;
};

export type Carousel = {
  _uid: string;
  slides: Slide[];
  items_per_slide: number;
  weight_per_slide: number;
  height: string; // i.e 24rem
  autoplay: boolean;
  css: string;
};

export type Feature = {
  _uid: string;
  title: string;
  description: string;
  content: NoteCard;
  icon: BlokAsset;
  subtitle: string;
  link: BlokLink;
  link_text: string;
  css: string;
};

export type UserCard = {
  _uid: string;
  username: string;
  image: BlokAsset;
  description: BlokTextarea;
  social_ats: SocialAt;
};

export type NoteCard = {
  _uid: string;
  image: BlokAsset;
  content_blok: ComparisonSlider;
  category: string;
  title: string;
  subtitle: string;
  author: Author;
  slug: BlokLink;
  tags: string;
  published_at: Date; // storyblok
  container_css: string;
};
