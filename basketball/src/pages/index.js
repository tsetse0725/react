import BasketballCard from "../components/BasketballCard";

const data = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png",
    title: "Бөмбөг",
    description: "Сагсан бөмбөгийн бөмбөгний зураг.",
  },
  {
    image: "https://blog.nasm.org/hubfs/Training%20Basketball%20Players-1.jpg",
    title: "Шидэлт",
    description: "Сагсны шийд рүү бөмбөг шидэж байгаа мөч.",
  },
  {
    image:
      "https://finnsbeachclub.com/wp-content/uploads/2024/09/basketball-court-ball-and-sports-match-or-competi-2023-11-27-04-58-17-utc.jpg",
    title: "FINNS beach club",
    description: "Basketball,bali: Where to play",
  },
  {
    image:
      "https://au.imgix.net/2022/09/AU-Web_926-x-695-scaled.jpg?w=1920&s=dc1e9c19165659ed14de00c1b063e900",
    title: "Athletes unlimited",
    description:
      "Athletes Unlimited Expands Advisory Board with Leading Women in Media, Advocacy, and Business",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/510vqrTCcAL._AC_UF1000,1000_QL80_.jpg",
    title: "Amazon.com",
    description:
      "Basketball All-Star Include Knee and Pump, Men Mens Basketball papalding 29.5in Basketball",
  },
  {
    image:
      "https://au.wilson.com/cdn/shop/products/c7dd204a5c8de77cfa036eb232a5e64659c7b2e1_WTB0516_Evolution_v2.jpg?v=1668992342",
    title: "Wilson Australia",
    description: "Evolution Game Basketball",
  },
  {
    image:
      "https://hoopshype.com/wp-content/uploads/sites/92/2021/06/Olympic_team2.png",
    title: "HoopsHype",
    description: "Olympic basketball tournament: The rosters as of now",
  },
  {
    image:
      "https://cdn.prod.website-files.com/66a7ad387e177bc7c659bb45/66f1596c4edb96ed120c6e97_b21628f9-4c0e-4b9c-9304-e028609801e7.jpeg",
    title: "IWBF rules",
    description: "Basic Rules of Wheelchair Basketball",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0023/1319/1470/files/Basketball-Net_1.jpg?v=1698855749",
    title: "Workout for Less",
    description: "What's the difference between basketball and netball?",
  },
  {
    image:
      "https://beachmetro.com/wp-content/uploads/2024/09/BlaiseMutware-feature-800x600.jpg",
    title: "Wheelchair basketball Canada",
    description:
      "Wheelchair basketball players with links to Variety Village set to represent Canada",
  },
  {
    image:
      "https://d26itsb5vlqdeq.cloudfront.net//image/B6EA08E3-C012-FC1D-76E16306F40B7528",
    title: "Mondo WorldWide",
    description: "Indoor basketball courts: portable and permanent flooring",
  },
  {
    image:
      "https://www.chelmsford.gov.uk/media/dfwpruur/basketball.jpg?rmode=max&width=1000&v=1d8eac9624bf1e0",
    title: "Chelmsford city council",
    description: "Basketball",
  },
  {
    image:
      "https://img.olympics.com/images/image/private/t_16-9_640/f_auto/v1538355600/primary/i1hfk2awwhpojt2t7pcr",
    title: "Olympics.com",
    description:
      "BEL v AUS - Women's Bronze Medal Game | Basketball | Olympic Games Paris 2024",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/028/124/014/small/close-up-view-of-glowing-basketball-ball-on-wet-floor-and-3d-court-generative-ai-photo.jpg",
    title: "Vecteezy",
    description: "Basketball Photos & Image",
  },
  {
    image:
      "https://i0.wp.com/www.thenexthoops.com/wp-content/uploads/2024/03/APA05275-scaled.jpg?fit=1024%2C683&ssl=1",
    title: "The next hoops",
    description: "Cameron Brink declares for 2024 WNBA Draft",
  },
];

export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
        justifyContent: "center",
      }}
    >
      {data.map((item, index) => (
        <BasketballCard
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}
