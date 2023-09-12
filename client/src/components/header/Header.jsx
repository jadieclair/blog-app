import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Passion & Harmony</span>
        <span className="headerTitleLg">The Best of You Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Woman Surrounded By Sunflowers"
      />
    </div>
  );
}
