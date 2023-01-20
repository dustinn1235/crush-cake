import Title from "../Title";
import { ReactComponent as BlogTitle } from "../../assets/blog title.svg";

const Blog2 = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Title title="Blog"></Title>
      <div id="blog2-wrapper">
        <BlogTitle
          style={{ transform: "scale(0.9)", marginTop: "auto" }}
        ></BlogTitle>
        <div id="cake-img1" />
        <div style={{ gridColumn: "1/-1" }}>
          <p>
            Together with Crush, create meaningful gifts for your loved ones.
            Join Workshop Cake It until We Make It, taking place on 11/22/2022
            at 93 Cao Thang Ward 3, District 3, Ho Chi Minh City.
          </p>
          <p>
            Accompanying the Workshop was Lifestyle & Travel Blogger Daisy
            Daisy, a girl who loves to experience and explore. Daisy Daisy is
            one of the representatives of the enterprising young generation.
            Come to the Workshop, listen to the views and experiences of an
            influential Travel Blogger on social media platforms.
          </p>
          <p>
            Workshop activities include: <br />
            - Exchange with Lifestyle & Travel Blogger Daisy Daisy <br />
            - Baking activities with Crush. <br />- Cake decorating activities.
          </p>
          <p>
            Don't worry if you've never made your own cake. The activities in
            the Workshop are guided by Crush's chefs. Crush hopes to accompany
            you to create gifts for yourself and your loved ones.
          </p>
        </div>
        <div id="cake-img2" src="/img/cakeBlog2.JPEG" />
      </div>
    </div>
  );
};

export default Blog2;
