import Title from "../Title";
import { ReactComponent as BlogTitle } from "../../assets/blogSpecial.svg";

const Blog1 = () => {
  return (
    <div>
      <Title title="Blog"></Title>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          padding: "0 7%",
          position: "relative",
        }}
      >
        <div id="tree"></div>
        <BlogTitle></BlogTitle>
        <div className="blog-content-wrapper">
          <div id="cake"></div>
          <div id="santa"></div>
          <div id="tie"></div>
          <div></div>
          <p id="p1">
            Different from the bustling atmosphere of Tet, the Christmas night
            brings us cool feeling, the moment for those loving hearts get
            closer. This is also the first Christmas that CRUSH bakery has the
            opportunity to accompany you. We hopes to bring a happy and
            fulfilling Christmas with you to your loved ones. “Bánh yêu, biểu
            Anh" is our thanks to you for choosing and trusting us.
          </p>
          <section id="p2">
            <p>
              The “Bánh yeu. biểu Anh" - cakes collection includes 3 versions
              designed specifically for the 2022 Christmas season. With each
              version, customers can order all the available flavors of CRUSH
              and choose the color of their choice, owning a gift just for your
              special one. Each version of the collection will be decorated and
              packaged differently. Especially for each cake delivered on
              December 23 to 25, we would like to send a deck of Truth or Dare
              cards designed by CRUSH, with the wish to connect loving hearts
              closer together.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.
            </p>
            <p>
              Each product in the collection is designed and selected by Crush,
              hoping to accompany you in the next steps, Collection "Bánh yêu,
              biểu Anh" will be open for sale from December 18th to December
              25th at 93 Cao Thang, Ward 3, District 3, HCMC.
            </p>
            <p>Let's prepare a peaceful and complete Christmas with Crush!</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog1;
