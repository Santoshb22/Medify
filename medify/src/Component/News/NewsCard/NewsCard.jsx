import blogProfileImg from "../../../assets/blogprofileimg.png";
import newsImg from "../../../assets/newsCardImg.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import styles from "./NewsCard.module.css"

const NewsCard = () => {
  return (
    <Box sx={{
        border: "1px solid #00000012",
        height: 477.77,
        width: 363.33,
        borderRadius: 2,
        
    }}
    className = {styles.cardContainer}
    >
    <Card sx={{ maxWidth: 263, height: 458, padding: 2}} elevation={0}>
      <CardMedia
        sx={{ height: 195, width: "100%", borderRadius: 2 }}
        image={newsImg}
        title="blog card img"
        className = {styles.cardImg}
      />
      <CardContent sx={{ height: 129, width: "100%" }}>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "27px",
            color: "#77829D",
          }}
          gutterBottom

          className={styles.date}
        >
          Medical <span style={{ color: "#DDDDDD" }}>|</span> March 31 2022
        </Typography>
        <Typography
          sx={{
            color: "#1B3C74",
            fontWeight: 500,
            fontSize: 18,
            lineHeight: "27px",
            fontFamily: "Poppins",
          }}
          className={styles.para}
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
          <Box
            component="img"
            sx={{ height: 32, width: 32, borderRadius: "50%", marginRight: "10px" }}
            src={blogProfileImg}
            alt="blog profile img"
          />
          <Typography
            sx={{
              color: "#1B3C74",
              fontWeight: 500,
              fontSize: 18,
              lineHeight: "27px",
              fontFamily: "Poppins",
            }}

            className={styles.blogAuthor}
          >
            Rebecca Lee
          </Typography>
        </Box>
      </CardContent>
    </Card>
    </Box>
  );
};

export default NewsCard;
