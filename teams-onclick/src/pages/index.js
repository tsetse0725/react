import PostList from "../components/PostList";

export default function Home() {
  const posts = [
    {
      id: 1,
      username: "Baatarvan Tumurbaatar",
      profilePic: "/user1.jpg",
      time: "Yesterday 12:16 PM",
      title: "Recipes - Code",
      type: "code",
      content: `const Recipes = () => {
  return (
    <div>
      <h1>Delicious Recipes</h1>
      <Recipe name="Baked Salmon" />
    </div>
  );
};
export default Recipes;`,
    },
    {
      id: 2,
      username: "Болорцэцэг Ганбат",
      profilePic: "/user2.jpg",
      time: "Yesterday 12:36 PM",
      title: "Pics",
      type: "image",
      content: "/team.jpg",
    },
  ];

  return <PostList posts={posts} />;
}
