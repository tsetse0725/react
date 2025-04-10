import {SidebarItem} from "@/components/SidebarItem"



const Home = () => {
  const sidebarItems = [
    {
      icon: "Profile",
      name: "Javkhlantugs"
    },
    {
      icon: "Friends",
      name: "Friends"
    },
    {
      icon: "Memories",
      name: "Memories"
    },
    {
      icon: "Saved",
      name: "Saved"
    },
    {
      icon: "Groups",
      name: "Groups"
    },
    {
      icon: "Video",
      name: "Video"
    },
    {
      icon: "Marketplace",
      name: "Marketplace"
    },
  ];
  
  return (<div style={{display: "flex", flexDirection: "column", backgroundColor: "darkgray", width: "300px"}}>
    {sidebarItems.map(({icon, name: itemName}, index) => {
      return <SidebarItem key={index} haha={icon} item={itemName} />
    })}
  </div>
  );
};

export default Home;