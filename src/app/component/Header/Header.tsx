import "./Header.scss";
import LocationPin from "@mui/icons-material/LocationPin";

export default function Header() {
  return (
    <header>
      <h1>
        Hi, I&apos;m <mark>Anthony</mark>.
      </h1>
      <h2>
        <LocationPin sx={{ fontSize: "2rem", marginRight: "0.5rem" }} />
        Southern California
      </h2>
    </header>
  );
}
