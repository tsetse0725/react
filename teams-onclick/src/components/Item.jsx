const Item = ({ user, time, title, codeImage }) => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <Image
          src={user.avatar}
          alt="avatar"
          width={40}
          height={40}
          style={styles.avatar}
        />
        <div>
          <p style={styles.name}>{user.name}</p>
          <p style={styles.time}>{time}</p>
        </div>
      </div>
      <h2 style={styles.title}>{title}</h2>
      <div>
        <Image src={codeImage} alt="code" width={600} height={300} />
      </div>
      <a href="#" style={styles.link}>
        see more
      </a>
    </div>
  );
};

export default Item;
