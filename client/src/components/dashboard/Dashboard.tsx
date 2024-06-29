import { useEffect, useState } from 'react';
import { PullToRefresh } from 'antd-mobile';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ContentLoader from 'react-content-loader';
import { Button } from '@mui/material';

const Dashboard = () => {
  return (
    <PullToRefresh
      pullingText="Pull down to refresh"
      canReleaseText="Release to refresh"
      refreshingText="Refreshing..."
      completeText="Refresh complete"
    >
      <div className='flex justify-center items-center flex-col'>
        <div> <h1 className='font-heading font-semibold text-[80px] leading-none'>Cafeteria<span className='text-primary-theme-color'>.</span></h1></div>
        <div className='flex items-center gap-x-2'><span><img src="img/Line.svg" alt="" /></span> <h2 className='font-heading font-semibold text-[30px] text-primary-theme-color'> LOUNGE & TERRACE  </h2>  <span><img src="img/Line.svg" alt="" /></span></div>
        <Button variant="contained" className='mt-5 mb-6 bg-primary-font-color'>Table 23</Button>
      </div>
      <ImageList className='rounded-md mb-8'>
        {itemData.map((item) => (
          <ImageListItemWithShimmer key={item.img} item={item} />
        ))}
      </ImageList>
    </PullToRefresh>
  );
};

const ImageListItemWithShimmer = ({ item }) => {
  const [loaded, setLoaded] = useState(false);
  const [delayPassed, setDelayPassed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayPassed(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = () => {
    setLoaded(true);
  };


  return (
    <ImageListItem className='min-h-[180px]' key={item.img}>
      {(!loaded || !delayPassed) && <ShimmerLoader />}
      <img
      className='rounded-md'
        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.img}?w=248&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
        onLoad={handleImageLoad}
        style={{ display: delayPassed ? 'block' : 'none' }}

      />
      {/* <ShimmerLoader /> */}
      <ImageListItemBar
      className='rounded-md'
        title={item.title}
      />
    </ImageListItem>
  );
};

const ShimmerLoader = (props) => {
  return (
    <>
      <ContentLoader
        speed={0.5}
        viewBox="0 0 476 340"
        backgroundColor="#cfe8f7"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="48" y="5" rx="3" ry="3" width="110" height="8" />
        <rect x="48" y="28" rx="3" ry="3" width="410" height="6" />
        <rect x="48" y="48" rx="3" ry="3" width="380" height="6" />
        <rect x="48" y="68" rx="3" ry="3" width="178" height="6" />
        <rect x="48" y="98" rx="24" ry="24" width="423" height="230" />
        {/* <circle cx="20" cy="20" r="20" />  */}
      </ContentLoader>
    </>
  )
}

const itemData = [
  {
    id:1,
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    featured: true,
  },
  {
    id:2,
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    id:3,
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    id:4,
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    id:5,
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {id:6,
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    isNewItem: true,
  },
  {
    id:7,
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {id:8,
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    id:9,
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {id:10,
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {id:11,
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {id:12,
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

export default Dashboard;
