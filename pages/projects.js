import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Typography, Grid, useTheme } from "@material-ui/core";
import { useSelector } from "react-redux";

export default function Home() {
  const theme = useTheme();
  const data = useSelector((state) => state.data.data.projects);

  return (
    <Grid
      container
      className={styles.container}
      sx={{ backgroundColor: theme.palette.primary.dark }}>
      <Head>
        <title>{data.title}</title>
        <meta name='description' content='Software developer portfolio' />
        <link rel='icon' href='icons/favicon.ico' />
        <link
          rel='preload'
          href='/fonts/Merienda/Merienda-Regular.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/Montserrat/MontserratAlternates-Regular.ttf'
          as='font'
          crossOrigin=''
        />
      </Head>
      <div>
        <Typography
          variant='h1'
          color='secondary.contrastText'
          textAlign='center'>
          {data.title}
        </Typography>
      </div>
    </Grid>
  );
}
