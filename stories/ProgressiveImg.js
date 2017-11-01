import React from 'react';
import Media from 'react-media';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ProgressiveImg from '../src/ProgressiveImg';

import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import small_pic1 from '../images/pic1-50.jpg';
import small_pic2 from '../images/pic2-50.jpg';
import small_pic3 from '../images/pic3-50.jpg';

storiesOf('ProgressiveImage', module)
  .add(
    'With Div',
    () => (
      <ProgressiveImg
        src={pic1}
        loader={small_pic1}
        loaderStyle={'min-width: 100vw;height: 100vh;'}
      >
        <div
          style={{
            minWidth: '100vw', height: '100vh',
            background: `url(${pic1}) center center / cover no-repeat`
          }}
        />
      </ProgressiveImg>
    )
  )
  .add(
    'With Img',
    () => (
      <ProgressiveImg
        src={pic2}
        loader={small_pic2}
        loaderStyle={'width: 100vw'}
      >
          <img
            src={pic2}
            style={{ width: '100vw' }}
          />
      </ProgressiveImg>
    )
  )
  .add(
    'RWD',
    () => (
      <Media query={{ maxWidth: 480 }}>
          {matches => (
              <ProgressiveImg
                src={matches ? pic3 : pic1}
                loader={matches ? small_pic3 : small_pic1}
                loaderStyle={'min-width: 100vw;height: 100%;'}
              >
                  <div
                    style={{
                      minWidth: '100vw', height: '100vh',
                      background: `url(${matches ? pic3 : pic1}) center center / cover no-repeat`
                    }}
                  />
              </ProgressiveImg>
          )}
      </Media>
    )
  );
