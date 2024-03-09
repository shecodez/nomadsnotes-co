<script setup lang="ts">
const config = useRuntimeConfig();

useHead({
  title: `About | ${config.public.app.name}`,
});

const socialLinks = [
  // {
  //   icon: 'i-carbon:logo-discord',
  //   label: 'Discord',
  //   link: 'https://discord.gg/kE4Xu7WsQK',
  // },
  {
    icon: "i-carbon:logo-instagram",
    label: "Instagram",
    link: "https://www.instagram.com/nomadsnotesco/",
  },
  {
    icon: "i-carbon:logo-youtube",
    label: "YouTube",
    link: "https://youtube.com/@nomadsnotesco",
  },
  {
    icon: "i-carbon:logo-pinterest",
    label: "Pinterest",
    link: "https://www.pinterest.com/nomadsnotesco/",
  },
];
</script>

<template>
  <div class="pg-bg-color mx-10 mb-10 py-5 px-10">
    <article prose mx-auto>
      <h1 text-center>
        Nomad's Notes .Co【<span class="text-primary font-brand">NONOCO</span>】
      </h1>

      <h3>Q: Analog or Digital Notes? A: Yes!</h3>
      <p>
        Freeeeddooommmm! We write notes about on achieving that perfect
        minimalist nomadic lifestyle. Our goal is simple: make nomadic life
        easier.
      </p>

      <h3 flex gap-1>Wherever we lay our hat is our home 🎵</h3>
      <p>
        Whether navigating through lively city streets or unwinding in serene
        countryside, our notebooks are there for every adventure. Be it physical
        endurance or digital convenience, our goods are versatile and prepared
        for any scenario. Nomad's Notebooks are meticulously crafted to
        seamlessly integrate into your on-the-go lifestyle, ensuring that your
        notes journey just as far as you do!
      </p>

      <h3>
        Meet the <span class="text-primary font-brand">NONOCO</span>workers
      </h3>

      <div flex gap-3 items-center mb-4>
        <img src="/images/kai.jpg" alt="Kai" class="w-42 h-auto object-cover" />
        <div>
          <h5>Visual lead - Kai</h5>
          <p>
            Kai is the chief creative co-woofer responsible for turning
            unattended works of art into doggone scraps. With a passion for
            nibbling on critical notes and a fondness for hiding them, Kai
            leaves a mark on every notebook within his grasp.
          </p>
        </div>
      </div>

      <div flex gap-3 items-center mb-4>
        <div>
          <h5>Audio lead - Zir</h5>
          <p>
            Zir, our resident <span line-through>wordsmith</span> nyasmith,
            knows that everyone tuning in to our vlogs is really only there to
            hear him roar. Whether it's the first or final recording of an
            voice-over due the next day, as the lead meow-sayer, Zir dedicates
            himself tirelessly to infusing each one with his distinctive "~nya".
          </p>
        </div>
        <img src="/images/zir.jpg" alt="Kai" class="w-42 h-auto object-cover" />
      </div>

      <div flex gap-3 items-center>
        <img
          src="/images/zen.jpeg"
          alt="Kai"
          class="w-42 h-auto object-cover"
        />
        <div>
          <h5>Lead's assistant - Zenith Gael (Zen if we're friends)</h5>
          <p>
            Zen is the hand that feeds... the leads. With a background in remote
            software engineering and fondness for stationary, she seeks to
            balance the love of collecting cute stationary with the backsaving
            adherance to minimalism brought on by refusing to stay stationary
            and getting older.
          </p>
        </div>
      </div>

      <h3>
        Join the <span class="text-primary font-brand">NONOCO</span>mmunity
      </h3>
      <p>
        Nomad's Notes .Co isn't just a brand; it's a NONOCO-mmunity for nomads
        by nomads. Join our adventure-seeking collective of co-woofers,
        nya-sayers, and their human assistants where each note —digital or
        analog— chronicals a new adventure. Engage with us on social media, and
        share your thoughts, doodles, and stories, let's turn each note into a
        page of our shared nomad notebook.
      </p>
      <div py-4 flex justify-center gap-4 text-xl text-primary>
        <template v-for="(s, i) in socialLinks" :key="`ats-${i}`">
          <a :href="s.link" target="_blank">
            <div :title="s.label" :class="s.icon" />
          </a>
        </template>
      </div>

      <p>
        Ready to turn the page on your next adventure in style? Explore our
        shop, and let the adventures with {{ config.public.app.name }} begin!
      </p>

      <p text-right>―<span class="text-primary font-brand">NONOCO</span></p>
    </article>
  </div>
</template>

<style scoped></style>
