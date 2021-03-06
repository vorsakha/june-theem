module.exports = {
  address: "28 Market St. 20123 San Francisco, California. Apt #201",
  workingHours: "Monday-Friday 8AM-6PM",
  socials: [
    { title: "INSTAGRAM", link: "https://instagram.com/archilect" },
    { title: "YOUTUBE", link: "https://youtube.com/pewdiepie" },
    { title: "TWITTER", link: "https://twitter.com/naval" },
  ],
  footerLinks: [
    {
      title: "Learn About Us",
      links: [
        { title: "About", slug: "#About" },
        {
          title: "Services",
          slug: "#Services",
        },
        { title: "Team", slug: "#Team" },
        { title: "Contact", slug: "#Contact" },
        { title: "Plans", slug: "#Plans" },
        { title: "FAQ", slug: "#FAQ" },
        { title: "Newsletter", slug: "#Banner" },
      ],
    },
    {
      title: "Legal",
      links: [
        { title: "Terms & Conditions", slug: "terms-conditions" },
        { title: "Privacy Policy", slug: "privacy-policy" },
      ],
    },
  ],
  nav: [
    {
      name: "About Us",
      slug: "about",
    },
    {
      name: "Services",
      slug: "services",
      dropdown: [
        { title: "Item1", slug: "item1" },
        { title: "Item2 asas", slug: "item2" },
        { title: "Item3", slug: "item3" },
      ],
    },
    {
      name: "Work",
      slug: "work",
    },
  ],
};
