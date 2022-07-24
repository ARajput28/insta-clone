/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from '@mui/material';
// import { Carousel } from 'react-responsive-carousel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { acordianList, sliderList } from '../description/home';
import { acordianList } from '../description/home';
import home from '../container/home';
import CardComponent from '../components/CardComponent';
import { length } from '../utils/javascript';

function Home() {
  const { handleChange, expanded, products, search, handleRoute } = home();

  return (
    <div style={{ marginTop: '20px' }}>
      {/* <Carousel autoPlay> */}
      {/* {sliderList.map((item) => ( */}
      {/* <div> */}
      {/* <img alt={item.name} src={item.value} /> */}
      {/* <p className="legend">Vagitables</p> */}
      {/* </div> */}
      {/* ))} */}
      {/* </Carousel> */}
      <div style={{ margin: '10px' }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products && length(products) ? (
            products
              .filter((val) => {
                if (search === '') {
                  return val;
                }
                if (val.key.toLowerCase().includes(search.toLowerCase())) {
                  return val;
                }
              })
              .map((item) => {
                return (
                  // eslint-disable-next-line react/jsx-no-useless-fragment
                  <>
                    {item?.value[0].map((data) => (
                      <Grid item xs={2} sm={4} md={4} key={data.id}>
                        {/* <Item>xs=2</Item> */}
                        <CardComponent
                          url={data.url}
                          name={item.key}
                          handleRoute={handleRoute}
                        />
                      </Grid>
                    ))}
                  </>
                );
              })
          ) : (
            <h1>No data found</h1>
          )}
        </Grid>
      </div>

      <div style={{ marginTop: '40px', marginRight: '50px' }}>
        {acordianList.map((item) => (
          <Accordion
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                {item.text}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.details}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default Home;
