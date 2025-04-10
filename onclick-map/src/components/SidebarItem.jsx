export const SidebarItem = () => {
  const alerter = () => {
    alert(text);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        padding: "12px",
        alignItems: "center",
        width: "100%",
        cursor: "pointer",
      }}
      id="sideBarItemHover"
      onClick={alerter}
    >
      <div></div>
      <p>{haha}</p>
      <p>{item} </p>
    </div>
  );
};
