export default function YoutubeCard({ image, icon, title, author, time }) {
  return (
    <div>
      <YoutubeImage src={src} alt={title} />
      <YoutubeText title={title} author={author} />
    </div>
  );
}
